import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KOUNTTIME – Your Personalized Countdown Timer",
  description:
    "Embrace the anticipation with KOUNTTIME, the ultimate countdown timer app! Input your desired duration in years, weeks, days, hours, and seconds, and let the countdown begin. Whether it's a special event, a deadline, or an exciting moment, KOUNTTIME keeps you on the edge, making every second count.",
  applicationName: "KOUNTTIME",
  creator: "NIPPY The Creator - NIPPYSKY",
  keywords: [
    "countdown timer",
    "time tracker app",
    "event countdown",
    "countdown clock",
    "personalized timer",
    "time management",
    "deadline tracker",
    "anticipation app",
    "special event countdown",
    "countdown in years",
    "countdown in weeks",
    "countdown in days",
    "countdown in hours",
    "countdown in seconds",
    "moment tracker",
    "excitement timer",
    "deadline countdown",
    "personal countdown",
    "custom timer app",
    "countdown precision",
    "event anticipation",
    "time remaining",
    "deadline reminder",
    "time tracking tool",
    "countdown to milestones",
    "digital timer wizardry",
    "effortless countdown",
    "anticipate and celebrate",
    "countdown magic",
    "deadline mastery",
    "countdown excitement",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={inter.className}>
        <body>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <section className="max-w-7xl mx-auto py-2 px-5">
              <Header />
              <main className=" mx-auto flex justify-center mt-20">
                {children}
              </main>
            </section>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
