"use client";

import { useRef, useState, useEffect } from "react";
import { Participant, Track } from "livekit-client";
import { useTracks } from "@livekit/components-react";
import { useEventListener } from "usehooks-ts";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <p className="text-muted-foreground">Live Video</p>
    </div>
  );
};
