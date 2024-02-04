"use client";
import { MoonLoader } from "react-spinners";
import { searchWordsFromtheDictionary } from "@/lib/dictionary-api";
import { ShowMeaningItem } from "./show-meaning-items";
import { useEffect, useState } from "react";
import { useWordStore } from "@/hooks/use-words-hooks";

interface ShowMeaningProps {
  word?: string;
}

export const ShowWordMeaning = () => {
  const word = useWordStore((state) => state.selectWord);
  const [wordResult, setWordResult] = useState<any[] | undefined>();
  const [isloading, setIsLoading] = useState(false);
  const wordToSearch = word?.substring(1).substring(1) as string;
  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      const results = await searchWordsFromtheDictionary(wordToSearch);
      if (results) {
        setWordResult(results);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchResults();
  }, [wordToSearch]);

  if (wordResult === undefined || !wordResult) return;
  const renderedWordsMeaning = wordResult?.map((result, index) => (
    <ShowMeaningItem key={index} result={result} />
  ));
  return (
    <div className=" bg-[#474F7A] col-span-2 min-h-full">
      {isloading ? (
        <div className="w-full h-full flex items-center justify-center">
          <MoonLoader color="#d3bbee" />
        </div>
      ) : (
        renderedWordsMeaning
      )}
    </div>
  );
};
