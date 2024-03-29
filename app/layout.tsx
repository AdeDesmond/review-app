import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";

const mainFont = localfont({
  src: "../public/fonts/NotoSans_Condensed-Light.ttf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          "bg-gradient-to-br from-slate-500 to-slate-950"
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
