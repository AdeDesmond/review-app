"use client";
import { useFormState } from "react-dom";
import { PlusIcon, WholeWordIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { EmojiPickerHandler } from "../emoji-picker";
import { ElementRef, FormEvent, useRef, useState } from "react";
import { createWords } from "@/actions/create-words";
import { WordSubmitButton } from "./word-submit-button";

export const AddWords = () => {
  const [emoji, setEmoji] = useState("");
  const [state, dispatch] = useFormState(createWords, {
    errors: {},
  });
  const formref = useRef<ElementRef<"form">>(null);
  const buttonCloseRef = useRef<ElementRef<"button">>(null);
  if (state.success) {
    setTimeout(() => {
      formref?.current?.reset();
    });
    setTimeout(() => {
      buttonCloseRef?.current?.click();
    });
  }
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
          action={dispatch}
          className="relative w-full h-full flex flex-col gap-y-4"
          ref={formref}
        >
          <PopoverClose className="absolute top-0 right-0" asChild>
            <Button ref={buttonCloseRef} variant="secondary" size="sm">
              <X className="text-muted-foreground w-4 h-4" />
            </Button>
          </PopoverClose>

          <label htmlFor="word" className="font-semibold ">
            Add word
          </label>
          <EmojiPickerHandler setEmojiPicker={setEmoji} />
          <input
            type="text"
            name="emoji"
            id="emoji"
            value={emoji}
            hidden
            className="hidden"
          />
          <Input
            name="word"
            id="word"
            type="text"
            placeholder="Enter a word to review"
            className="mt-5 placeholder:text-sm placeholder:text-muted-foreground"
          />
          {state &&
            state.errors?._miscellanous_errors?.map((err) => (
              <p
                key={err}
                className="text-rose-400 text-xs text-muted-foreground"
              >
                {err}
              </p>
            ))}
          <WordSubmitButton>
            {" "}
            <WholeWordIcon className="h-4 w-4" /> Add a new word
          </WordSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};
