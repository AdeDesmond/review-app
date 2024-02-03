"use client";

import { PlusIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { EmojiPickerHandler } from "../emoji-picker";
import { FormEvent, useState } from "react";

export const AddWords = () => {
  const [emoji, setEmoji] = useState("");
  const [newWord, setNewWord] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ emoji, newWord });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#FFD0EC] text-black text-lg hover:text-white group font-semibold hover:bg-[#eb8ec6] "
        >
          <PlusIcon className="h-5 w-5 group-hover:rotate-180 hover:scale-105 transition-all duration-200 ease-in-out group-hover:-translate-x-1" />{" "}
          Add word
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        className="w-[400px] h-[600px] mr-[9.7rem]"
      >
        <form
          action=""
          className="relative w-full h-full flex flex-col gap-y-4"
          onSubmit={onSubmit}
        >
          <PopoverClose className="absolute top-0 right-0" asChild>
            <Button variant="secondary" size="sm">
              <X className="text-muted-foreground w-4 h-4" />
            </Button>
          </PopoverClose>

          <label htmlFor="word" className="font-semibold ">
            Add word
          </label>
          <EmojiPickerHandler setEmojiPicker={setEmoji} />
          <Input
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            type="text"
            placeholder="Enter a word to review"
            className="mt-5 placeholder:text-sm placeholder:text-muted-foreground"
            defaultValue={emoji}
          />
          <Button size="sm" className="h-10">
            Add a new word
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};
