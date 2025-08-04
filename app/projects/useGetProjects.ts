import { prisma } from "@/prisma/client";

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        tags: true,
        demoUrl: true,
        githubUrl: true,
        liveUrl: true,
      },
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
