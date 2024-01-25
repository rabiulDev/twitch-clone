"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";

type Props = {
  isFollowing: boolean;
  userId: string;
};

export const Actions = ({ isFollowing, userId }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Button
      disabled={isFollowing || isPending}
      onClick={handleClick}
      variant={"primary"}
    >
      Follow
    </Button>
  );
};
