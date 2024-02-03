import { connectDb } from "@/db/client";
import { Words } from "@/models/word-models";

connectDb();
export const fetchWords = async () => {
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
};
