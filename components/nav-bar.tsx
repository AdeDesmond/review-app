import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-2 ">
        <Button
          className="bg-[#81689D] border-none text-slate-200 font-semibold"
          variant="outline"
          size="sm"
        >
          Home
        </Button>
        <Button
          className="bg-[#81689D] border-none text-slate-200 font-semibold"
          variant="outline"
          size="sm"
        >
          New Words
        </Button>
        <Button
          className="bg-[#81689D] border-none text-slate-200 font-semibold"
          variant="outline"
          size="sm"
        >
          Failed words
        </Button>
        <Button
          className="bg-[#81689D] border-none text-slate-200 font-semibold"
          variant="outline"
          size="sm"
        >
          About Us
        </Button>
      </ul>
    </nav>
  );
};
