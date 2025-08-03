import { z } from "zod";

const SkillSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  level: z.number().int().min(0).max(100),
});

const SkillCategorySchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  skills: z.array(SkillSchema).optional(),
});

const StandaloneSkillSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  level: z.number().int().min(0).max(100),
  skillCategoryId: z.string().min(1, "SkillCategory ID is required"),
});

export { SkillSchema, SkillCategorySchema, StandaloneSkillSchema };
