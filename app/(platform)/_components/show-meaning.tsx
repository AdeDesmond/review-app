import { ShowMeaningItem } from "./show-meaning-items";

interface ShowMeaningProps {
  word: Object;
}

export const ShowWordMeaning = ({ word }: ShowMeaningProps) => {
  console.log(word);
  return (
    <div className=" bg-[#474F7A] col-span-2 min-h-full">
      <ShowMeaningItem />
    </div>
  );
};
