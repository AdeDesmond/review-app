import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageIcon } from "lucide-react";
export const HeaderAuth = () => {
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>
        <ImageIcon className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
  );
};
