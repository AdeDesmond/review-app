"use client";

import EmojiPicker from "emoji-picker-react";

interface EmojiPickerHandlerProps {
  setEmojiPicker: (emoji: string) => void;
}

export const EmojiPickerHandler = ({
  setEmojiPicker,
}: EmojiPickerHandlerProps) => {
  return (
    <div>
      <EmojiPicker
        open={true}
        onEmojiClick={(e) => setEmojiPicker(e.emoji)}
        width={360}
        height={400}
      />
    </div>
  );
};
