"use client";

import MuxPlayer from "@mux/mux-player-react";

export function VideoEmbed({
  playbackId,
  title,
  poster,
}: {
  playbackId: string;
  title?: string;
  poster?: string;
}) {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      metadata={{ video_title: title }}
      poster={poster}
      accentColor="#F24C27"
      style={{ width: "100%", aspectRatio: "16 / 9", display: "block" }}
    />
  );
}
