"use server";

import { connectDb } from "@/db/client";
import { Words } from "@/models/word-models";
import { revalidatePath } from "next/cache";

interface CreateWordsFormState {
  errors?: {
    word?: string[];
    _miscellanous_errors?: string[];
  };
  success?: boolean;
}
connectDb();
export async function createWords(
  State: CreateWordsFormState,
  formData: FormData
): Promise<CreateWordsFormState> {
  try {
    const word = formData.get("word") as string;
    const emoji = formData.get("emoji") as string;
    if (!word || word === "") {
      return {
        errors: {
          _miscellanous_errors: [
            "invalid word type, please enter a valid string",
          ],
        },
      };
    }
    let wordData;
    wordData = await Words.create({
      word: emoji + word,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _miscellanous_errors: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _miscellanous_errors: [
            "Something went wrong with you word creations",
          ],
        },
      };
    }
  }
  revalidatePath("/");
  return {
    success: true,
  };
}
