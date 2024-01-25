import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import React from "react";

type Props = {};

const ChatPage = async (props: Props) => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Chat settings</h1>
      </div>
    </div>
  );
};
export default ChatPage;
