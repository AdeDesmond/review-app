"use server";

import { connectDb } from "@/db/client";
import { Words } from "@/models/word-models";
import { revalidatePath } from "next/cache";

interface DeleteFormState {
  errors?: {
    _miscellanouse?: string[];
  };
  success?: boolean;
}

connectDb();
export async function deleteWord(
  wordId: string,
  deleteState: DeleteFormState
): Promise<DeleteFormState> {
  try {
    let wordTodelete;
    wordTodelete = await Words.deleteOne({ _id: wordId });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _miscellanouse: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _miscellanouse: ["Something went wrong with deleting"],
        },
      };
    }
  }
  revalidatePath("/manage");
  return {
    success: true,
  };
}
