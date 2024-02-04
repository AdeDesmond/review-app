import { connectDb } from "@/db/client";
import { Words } from "@/models/word-models";
import { cache } from "react";
connectDb();
export const fetchWords = cache(async () => {
  try {
    const wordsData = await Words.find({}).sort({ createdAt: -1 }).lean();
    return wordsData;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("Something went wrong");
    }
  }
});

//cache the fn since we need the data in several places
