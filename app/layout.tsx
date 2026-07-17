import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACCESS_23",
  description: "a little birthday surprise made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}