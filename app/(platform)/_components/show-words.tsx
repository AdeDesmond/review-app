import { Separator } from "@/components/ui/separator";
import { ShowWordsItem } from "./show-words-items";
import { fetchWords } from "@/lib/words";

export const ShowWords = async () => {
  const results = await fetchWords();
  const implicitReturnWordsArray = results?.map((result: any) => ({
    id: result._id.toString(),
    word: result.word,
  }));
  const renderedWords = implicitReturnWordsArray?.map((word: any) => (
    <ShowWordsItem key={word.id} word={word} />
  ));
  return (
    <div className="bg-[#555b7aea] shadow-md min-h-screen">
      <h2 className="text-center  mt-2 mb-2 text-xl font-bold text-[#FFD0EC]">
        Words to review
      </h2>
      <Separator className="w-full mb-2" />
      {renderedWords}
    </div>
  );
};
