import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/top-nav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "A gallery app made with T3 Stack.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body
            className={`font-sans ${inter.variable} dark flex flex-col gap-4`}
          >
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
