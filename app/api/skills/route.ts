import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
// import {
//   SkillCategorySchema,
//   StandaloneSkillSchema,
// } from "./validationSchemas";

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for filtering (optional)
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const includeSkills = searchParams.get("includeSkills") === "true";

    if (categoryId) {
      // Fetch a single category with optional skills
      const skillCategory = await prisma.skillCategory.findUnique({
        where: { id: categoryId },
        include: {
          skills: includeSkills,
        },
      });

      if (!skillCategory) {
        return NextResponse.json(
          { error: "Skill category not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(skillCategory);
    } else {
      // Fetch all categories with optional skills
      const skillCategories = await prisma.skillCategory.findMany({
        include: {
          skills: includeSkills,
        },
        orderBy: {
          title: "asc",
        },
      });

      return NextResponse.json(skillCategories);
    }
  } catch (error) {
    console.error("Error fetching skill categories:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function POST(request: NextRequest) {
//   // Parse request body
//   const body = await request.json();

//   // Determine which type of creation we're doing
//   let validation;
//   let isCategoryCreation = false;

//   if ("title" in body) {
//     isCategoryCreation = true;
//     validation = SkillCategorySchema.safeParse(body);
//   } else {
//     validation = StandaloneSkillSchema.safeParse(body);
//   }

//   // Validate input
//   if (!validation.success) {
//     return NextResponse.json(validation.error.format(), { status: 400 });
//   }

//   try {
//     if (isCategoryCreation) {
//       // Type assertion for SkillCategory data
//       const categoryData = validation.data as z.infer<
//         typeof SkillCategorySchema
//       >;
//       const { title, skills } = categoryData;

//       const skillCategory = await prisma.skillCategory.create({
//         data: {
//           title,
//           ...(skills && {
//             skills: {
//               create: skills,
//             },
//           }),
//         },
//         include: {
//           skills: true,
//         },
//       });

//       return NextResponse.json(skillCategory, { status: 201 });
//     } else {
//       // Type assertion for StandaloneSkill data
//       const skillData = validation.data as z.infer<
//         typeof StandaloneSkillSchema
//       >;
//       const { name, level, skillCategoryId } = skillData;

//       // Verify the SkillCategory exists
//       const categoryExists = await prisma.skillCategory.findUnique({
//         where: { id: skillCategoryId },
//       });

//       if (!categoryExists) {
//         return NextResponse.json(
//           { error: "SkillCategory not found" },
//           { status: 404 }
//         );
//       }

//       const skill = await prisma.skill.create({
//         data: {
//           name,
//           level,
//           skillCategory: {
//             connect: { id: skillCategoryId },
//           },
//         },
//       });

//       return NextResponse.json(skill, { status: 201 });
//     }
//   } catch (error) {
//     console.error("Error creating skill record:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
