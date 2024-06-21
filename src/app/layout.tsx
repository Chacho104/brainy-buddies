import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "./providers/toastProvider";
import Container from "@/components/ui/container";

import { FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainy Buddies | Homework, Assignment, & Online Course Help",
  description:
    "We are a team of experts in all the major high school subjects and college courses and programs, and we help students around the world achieve their academic goals.",
};

const socialLinks = [
  { name: "Discord", icon: FaDiscord, href: "https://discord.gg/VH2yVPHbyC" },
  { name: "Email", icon: HiOutlineMail, href: "mailto:brainybuddieshelp@gmail.com" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {children}
        <div className="bg-teal-950 py-4 my-auto">
          <Container>
            <div className="flex items-center justify-center min-[594px]:justify-between flex-wrap-reverse min-[594px]:flex-nowrap gap-y-4 min-[594px]:gap-y-0 gap-x-8">
              <p className="font-medium text-neutral-200 text-center md:text-start">
                &copy; Brainy Buddies, 2024 | Absolute Confidentiality
                Guaranteed
              </p>
              <div className="flex gap-x-8 items-center">
                {socialLinks.map((link) => (
                  <Link
                    target="_blank"
                    key={link.name}
                    href={link.href}
                    className="hover:text-brand-200 text-white"
                  >
                    <link.icon size={38} />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </body>
    </html>
  );
}
