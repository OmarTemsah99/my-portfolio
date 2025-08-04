import { Metadata } from "next";
import SkillsPage from "./SkillsPage";
import { prisma } from "@/prisma/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Skills - Omar Temsah | Full Stack Developer Technical Arsenal",
  description:
    "Explore Omar Temsah's technical skills including JavaScript, TypeScript, React, Node.js, MongoDB, and more. From frontend to backend, DevOps to interpersonal skills.",
};

// Type definitions for the database data
export interface SkillFromDB {
  id: string;
  name: string;
  level: number;
  skillCategoryId: string;
}

export interface SkillCategoryFromDB {
  id: string;
  title: string;
  skills: SkillFromDB[];
}

// Map database categories to the existing format with icons and colors
const getCategoryConfig = (title: string) => {
  const configs = {
    Languages: {
      icon: "LanguageIcon",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: 200,
    },
    Frontend: {
      icon: "WebIcon",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      delay: 400,
    },
    Backend: {
      icon: "ApiIcon",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      delay: 600,
    },
    Database: {
      icon: "StorageIcon",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      delay: 800,
    },
    "DevOps & Tools": {
      icon: "CloudIcon",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
      delay: 1000,
    },
    "Testing & Practices": {
      icon: "BugReportIcon",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: 1200,
    },
  };

  return (
    configs[title as keyof typeof configs] || {
      icon: "LanguageIcon",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: 200,
    }
  );
};

export default async function Skills() {
  try {
    // Fetch skill categories from database
    const skillCategories = await prisma.skillCategory.findMany({
      include: {
        skills: true,
      },
    });

    // Transform database data to match existing component structure
    const transformedCategories = skillCategories.map((category) => {
      const config = getCategoryConfig(category.title);

      return {
        ...category,
        ...config,
        skills: category.skills.map((skill) => ({
          name: skill.name,
          level: skill.level,
        })),
      };
    });

    return <SkillsPage skillCategories={transformedCategories} />;
  } catch (error) {
    console.error("Error fetching skills:", error);

    // Fallback to empty array if database fails
    return <SkillsPage skillCategories={[]} />;
  }
}
