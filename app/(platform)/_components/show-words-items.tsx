import { Button } from "@/components/ui/button";

interface ShowWordsItemsProps {
  word: string;
}

export const ShowWordsItem = ({ word }: ShowWordsItemsProps) => {
  return (
    <div className="flex justify-center items-start text-start ">
      <Button
        variant="ghost"
        size="sm"
        className=" text-xl font-bold  flex items-start justify-center text-slate-200"
      >
        {word}
      </Button>
    </div>
  );
};
