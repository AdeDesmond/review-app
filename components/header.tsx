import { AddWords } from "./form/add-word";
import { HeaderAuth } from "./header-auth";
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <header className="h-[5rem] w-full bg-[#1F2544] flex items-center px-2 justify-between">
      <NavBar />
      <div className="flex items-center gap-x-2">
        <AddWords />
        <HeaderAuth />
      </div>
    </header>
  );
};
