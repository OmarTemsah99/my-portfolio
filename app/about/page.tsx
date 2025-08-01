import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title:
    "About - Omar Temsah | Full Stack Developer & Embedded Systems Engineer",
  description:
    "Learn about Omar Temsah, an enthusiastic embedded systems engineer with 3+ years of experience in web development, IoT, PCB design, and 3D modeling.",
};

export default function About() {
  return <AboutPage />;
}
