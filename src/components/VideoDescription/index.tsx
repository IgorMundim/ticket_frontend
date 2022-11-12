import * as Styled from './styles';

export type VideoProps = {
  video_url: string;
};

export const VideoDescription = ({ video_url }: VideoProps) => {
  if (!video_url) return;
  return (
    <Styled.Container>
      <Styled.Video src={video_url} />
    </Styled.Container>
  );
};
