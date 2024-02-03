"use client";

import { Button } from "@/components/ui/button";
import { ObjectId } from "mongoose";
import { useState } from "react";
import { useWordStore } from "@/hooks/use-words-hooks";

interface ShowWordsItemsProps {
  word: {
    _id: ObjectId;
    word: string;
    learned_words: boolean;
    correct_words: boolean;
  };
}

export const ShowWordsItem = ({ word }: ShowWordsItemsProps) => {
  const [selectedWord, setSelectedWord] = useState("");

  const getWords = useWordStore((state) => state.getWords);
  const selectId = (wordFromValue: any) => {
    setSelectedWord(wordFromValue);
    getWords(wordFromValue);
  };
  return (
    <div className="flex justify-center items-start text-start ">
      <Button
        onClick={(e) => selectId((e.target as HTMLButtonElement).value)}
        value={word.word}
        variant="ghost"
        size="sm"
        className=" text-xl font-bold  flex items-start justify-center text-slate-200"
      >
        {word.word}
      </Button>
    </div>
  );
};
