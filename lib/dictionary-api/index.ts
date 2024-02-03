export const searchWordsFromtheDictionary = async (word: string) => {
  try {
    if (word === undefined) return;
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("something went wrong");
    }
  }
};
