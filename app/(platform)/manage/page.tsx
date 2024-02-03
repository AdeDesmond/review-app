import { fetchWords } from "@/lib/words";
import React from "react";
import { ManageItems } from "./_component/manage-items";

async function ManageWordsPage() {
  const results = await fetchWords();
  const implicitReturnWordsArray = results?.map((result: any) => ({
    id: result._id.toString(),
    word: result.word,
  }));
  const renderedWordsToEdit = implicitReturnWordsArray?.map((word) => (
    <ManageItems key={word.id} word={word} />
  ));
  return <div className="min-h-screen">{renderedWordsToEdit}</div>;
}

export default ManageWordsPage;
