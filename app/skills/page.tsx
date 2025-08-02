import { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills - Omar Temsah | Full Stack Developer Technical Arsenal",
  description:
    "Explore Omar Temsah's technical skills including JavaScript, TypeScript, React, Node.js, MongoDB, and more. From frontend to backend, DevOps to interpersonal skills.",
};

export default function Skills() {
  return <SkillsPage />;
}
