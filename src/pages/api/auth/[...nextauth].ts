import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { accountService } from '../../../api/service/account';

const actualDateInSeconds = Math.floor(Date.now() / 1000);

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = await accountService.login(
            credentials.email,
            credentials.password,
          );
          return user;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      const isSingIn = !!user;

      if (isSingIn) {
        if (account && account?.provider === 'google') {
          const { expires_in, access_token, refresh_token } =
            await accountService.loginGoogle(account.access_token);
          token.access_token = access_token;
          token.refresh_token = refresh_token;
          token.expiration = `${actualDateInSeconds + Math.floor(expires_in)}`;
        } else {
          token.access_token = user.access_token;
          token.refresh_token = user.refresh_token;
          token.expiration = `${
            actualDateInSeconds + Math.floor(user.expires_in)
          }`;
        }
        const session_componentes = await accountService.currentAccount(
          String(token.access_token),
        );

        token.id = session_componentes.id;
      } else {
        if (!token?.expiration) return Promise.resolve({});

        if (actualDateInSeconds > token.expiration) {
          console.log('a', actualDateInSeconds, 't', token.expiration);
          try {
            const { expires_in, access_token, refresh_token } =
              await accountService.refreshToken(String(token.refresh_token));
            token.access_token = access_token;
            token.refresh_token = refresh_token;
            token.expiration = `${
              actualDateInSeconds + Math.floor(expires_in)
            }`;
          } catch (e) {
            return Promise.resolve({});
          }
        }
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      if (
        !token?.access_token ||
        !token?.refresh_token ||
        !token?.expiration ||
        !token?.id
      ) {
        return null;
      }

      session.access_token = String(token.access_token);
      session.refresh_token = String(token.refresh_token);
      session.expiration = String(token.expiration);
      session.id = String(token.id);

      return session;
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
