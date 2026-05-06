import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Florida Wave Football Academy",
  description:
    "Florida Wave Football Academy uses soccer as a tool for social change, developing players, leaders, and stronger communities across South Florida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
