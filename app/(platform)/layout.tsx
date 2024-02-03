import { Header } from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ReviewLayout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1200px] bg-[#474F7A] mx-auto">
      <Header />
      {children}
    </div>
  );
}
