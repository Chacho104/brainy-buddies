import Image from "next/image";
import { Metadata } from "next";

import { FaFileAlt } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";

import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";

export const metadata: Metadata = {
  title: "Brainny Buddies | Homework, Assignment, & Online Course Help",
  description:
    "We are a team of experts in all the major high school subjects and college courses and programs, and we help students around the world achieve their academic goals.",
};

export default function Home() {
  return (
    <main>
      <div>
        <Container>
          <nav className="flex justify-between items-center py-4">
            <Link href="/" className="text-3xl font-bold text-teal-950">
              Brainny Buddies
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-4 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
            >
              Get Help
            </Link>
          </nav>
          <div className="flex flex-col items-center justify-center gap-y-8 py-20 text-center">
            <h1 className="text-5xl font-bold leading-snug text-teal-950">
              Homework, Assignment, & Online Course Help
            </h1>
            <p className="text-lg w-full lg:w-[80%]">
              We are a team of experts in all the major high school subjects and
              college courses and programs, and we help students around the
              world achieve their academic goals.
            </p>
            <Image
              src="/images/brainy-buddies-5.png"
              alt="My Profile Image"
              width={1761}
              height={755}
              sizes="100vw"
              className="mt-0 lg:-mt-3 xl:-mt-10"
            />
          </div>
        </Container>
      </div>
      <div className="bg-teal-950 h-[450px]">
        <Container>
          <div className="flex flex-col items-center justify-center gap-y-8 py-20 text-center">
            <h2 className="text-4xl font-semibold text-white leading-snug">
              Hello there, nice to meet you!
            </h2>
            <p className="w-full lg:w-[60%] text-center text-neutral-200 text-lg tracking-wider">
              We are happy to guide you towards your academic goals with
              professionalism and a genuine investment in your success.
            </p>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="h-auto bg-white -mt-[20%] sm:-mt-[20%] lg:-mt-[15%] xl:-mt-[10%] rounded-xl shadow-md flex justify-between p-8 flex-wrap lg:flex-nowrap gap-y-10 sm:gap-y-0">
            <div className="flex flex-col items-center text-center gap-y-4 px-0 lg:px-4 lg:flex-1">
              <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center text-center text-white">
                <FaFileAlt size={28} />
              </div>
              <h3 className="text-xl font-semibold">Assignments</h3>
              <p>
                Our subject-specific experts are ready to help with your
                discussion boards, peer reviews, short essays, term papers,
                capstones, theses, dissertations, questions, lab works, lab
                reports, quizzes, case studies, literature reviews, book reviews
                and analysis, abstracts, annotated bibliographies, business
                plans, group work, etc.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-4 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
              >
                Get Help
              </Link>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 border-x-0 sm:border-x border-y lg:border-y-0 border-neutral-300 px-0 lg:px-4 py-10 lg:py-0 lg:flex-1">
              <div className="flex flex-col items-center text-center gap-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center text-center text-white">
                  <IoNewspaperOutline size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Exams & Tests</h3>
              <p>
                Navigating the pressures of exams and tests can be challenging,
                but our expert tutors are here to make the process smoother and
                more manageable. Our highly experienced tutors will help you
                tackle any exam with ease. Trust us to provide the guidance and
                support you need to excel and achieve outstanding results.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-4 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
              >
                Get Help
              </Link>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 px-0 lg:px-4 lg:flex-1">
              <div className="flex flex-col items-center text-center gap-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center text-center text-white">
                  <SiGoogleclassroom size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Online Courses</h3>
              <p>
                In the evolving landscape of online education, our team excels
                at providing exceptional support for your online courses. Our
                tutors are adept at navigating virtual learning environments and
                can help you maximize your online course experience with ease,
                ensuring you stay on track for your degree no matter your
                schedule.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-4 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
              >
                Get Help
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="my-10 text-center flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold leading-snug text-teal-950">
              How It Works
            </h1>
            <p className="w-full lg:w-[80%] mx-auto">
              Use the Contact Us form to send us a message and we will respond
              ASAP, join our Discord Server, or create an account and engage us
              right here (coming soon). No intermediaries.
            </p>
            <div className="flex items-center justify-between gap-x-3 lg:gap-x-6 pt-6 flex-wrap lg:flex-nowrap gap-y-6 lg:gap-y-0">
              <Card
                imageUrl="/images/contact-form-banner.png"
                title="Contact Form"
                description="Send us a quick message and we will respond ASAP and get you started on your path to academic excellence."
                link="/contact"
                label="CONTACT US"
              />
              <Card
                imageUrl="/images/discord-banner.png"
                title="Discord Server"
                description="Join a vibrant community of tutors dedicated to fostering collaboration, support, and growth in your academic journey."
                link="https://discord.gg/VH2yVPHbyC"
                label="JOIN SERVER"
              />
              <Card
                imageUrl="/images/user-banner.jpeg"
                title="Create Account"
                description="Sign up for a student account and find a tutor right here on our simple-to-use website (coming soon)."
                link="/"
                label="SIGN UP"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white text-center flex flex-col gap-y-4 mb-12">
        <h1 className="text-4xl font-bold leading-snug">
          Need to get something done?
        </h1>
        <p className="font-medium">
          Let&#39;s have a chat about your assignment, exam, test, or online
          course and help you get those As!
        </p>
        <div className="pt-4 flex items-center justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-teal-950 rounded-full px-6 py-2 text-teal-950 hover:bg-teal-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
          >
            <HiOutlineChat size={24} />
            Start a conversation
          </Link>
        </div>
      </div>
    </main>
  );
}
