interface ManageItemsProps {
  word: {
    id: string;
    word: string;
  };
}

export const ManageItems = ({ word }: ManageItemsProps) => {
  return <div>{word.word}</div>;
};
