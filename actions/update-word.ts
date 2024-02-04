"use server";

import { connectDb } from "@/db/client";
import { Words } from "@/models/word-models";
import { revalidatePath } from "next/cache";

interface UpdateFormState {
  errors?: {
    _miscellanous_errors?: string[];
  };
  success?: boolean;
}
connectDb();
export async function updateWord(
  wordId: string,
  formState: UpdateFormState,
  formData: FormData
): Promise<UpdateFormState> {
  try {
    let wordToUpdate;
    wordToUpdate = await Words.updateOne(
      { _id: wordId },
      { word: formData.get("word") as string }
    );
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
          _miscellanous_errors: ["Something went wrong with updating"],
        },
      };
    }
  }
  revalidatePath("/manage");
  return {
    success: true,
  };
}
