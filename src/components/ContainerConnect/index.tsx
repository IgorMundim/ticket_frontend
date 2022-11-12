import * as Styled from './styles';
export type ContainerConnectProps = {
  children: React.ReactNode;
};

export function ContainerConnect({ children }: ContainerConnectProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
