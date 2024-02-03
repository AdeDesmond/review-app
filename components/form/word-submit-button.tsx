import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface WordSubmitButtonProps {
  children: React.ReactNode;
}

export const WordSubmitButton = ({ children }: WordSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      size="sm"
      className="bg-[#FFD0EC] h-10 text-black font-semibold hover:bg-[#eb8ec6] hover:text-white"
    >
      {children}
    </Button>
  );
};
