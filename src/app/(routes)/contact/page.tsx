import ContactMeForm from "@/components/ui/contactForm";
import Container from "@/components/ui/container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brainny Buddies | Homework, Assignment, & Online Course Help",
  description:
    "We are a team of experts in all the major high school subjects and college courses and programs, and we help students around the world achieve their academic goals.",
};

const ContactMePage = () => {
  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="text-3xl font-bold text-teal-950">
            Brainny Buddies
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-4 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
          >
            Go Back
          </Link>
        </nav>
        <div className="flex items-center justify-center min-h-[calc(100vh-76px)]">
          <ContactMeForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactMePage;
