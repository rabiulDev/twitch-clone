"use client";
import { Stream, User } from "@prisma/client";
import { useViewerToken } from "@/hooks/use-viewer-token";

type Props = {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
};

export const StreamPlayer = (props: Props) => {
  const { user, stream, isFollowing } = props;
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }
  return <div>StreamPlayer</div>;
};
