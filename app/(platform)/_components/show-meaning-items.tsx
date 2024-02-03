import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ShowMeaningItem = () => {
  return (
    <div className="w-full">
      {/* we will dynamically add the title of the word when showing the title */}
      <h2 className="text-slate-300 text-center mt-4 border-b border-b-slate-500 text-xl">
        Meaning of the word:{" "}
        <span className="font-semibold text-white">Lorem</span>
      </h2>
      <p className="text-lg text-white text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
        eaque ad! Assumenda omnis rem, sit officia ex dolorem dolores numquam
        expedita? Magni, vero reprehenderit sapiente similique nostrum dolore
        optio nemo!
      </p>
      <div className="flex items-center gap-x-4 justify-center mt-2">
        <Button
          className="bg-[#81689D] border-none text-white"
          variant="outline"
          size="sm"
        >
          ✅ i know the word
        </Button>
        <Button
          className="bg-[#81689D] border-none text-white"
          variant="outline"
          size="sm"
        >
          ❌ still to learn
        </Button>
      </div>
    </div>
  );
};
