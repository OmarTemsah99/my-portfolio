import { Metadata } from "next";
import { getProjects } from "./useGetProjects";
import ProjectsPage from "./ProjectsPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects - Omar Temsah | Full Stack Developer Portfolio",
  description:
    "Explore Omar Temsah's portfolio of full-stack projects including React apps, Node.js backends, and innovative web solutions.",
};

export default async function Projects() {
  try {
    const projects = await getProjects();
    return <ProjectsPage projects={projects} />;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <ProjectsPage projects={[]} />;
  }
}
