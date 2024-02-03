import { Separator } from "@/components/ui/separator";
import { ShowWordsItem } from "./show-words-items";

const testWordsArray = [
  "😅 names",
  "🥻clothes",
  "⛸️ shoes",
  "👘 pyjamas",
  "💃🏻 dance",
  "🥭 mangoes",
  "🍐 pears",
];

export const ShowWords = () => {
  const renderedWords = testWordsArray.map((word) => (
    <ShowWordsItem key={word} word={word} />
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
