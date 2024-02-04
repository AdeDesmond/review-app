import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ShowMeaningItemProps {
  result: any;
}

export const ShowMeaningItem = ({ result }: ShowMeaningItemProps) => {
  return (
    <div className="w-full p-4 ">
      {/* we will dynamically add the title of the word when showing the title */}
      <h2 className="text-slate-300 text-center mt-4 border-b border-b-slate-500 text-xl">
        Meaning of the word:{" "}
        <span className="font-semibold text-white">{result.word}</span>
      </h2>
      <p>{result.phonetic}</p>
      {/* check the audio setup for react */}
      {result.phonetics.map((aud: any) => (
        <audio key={aud} src={aud.audio}></audio>
      ))}
      {result.meanings.map((part: any, index: any) => (
        <div className="w-full" key={index}>
          <p className="font-semibold text-white">{part.partOfSpeech}</p>

          {part.definitions.map((def: any, index: any) => (
            <p key={index} className="text-white">
              {def.definition}
            </p>
          ))}
        </div>
      ))}

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
