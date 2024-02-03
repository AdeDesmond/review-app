import { ShowWordMeaning } from "./_components/show-meaning";
import { ShowWords } from "./_components/show-words";

export default async function HomePage() {
  return (
    <main className=" min-h-screen bg-[#474F7A]">
      <div className="grid grid-cols-3">
        <ShowWords />
        <ShowWordMeaning />
      </div>
    </main>
  );
}
