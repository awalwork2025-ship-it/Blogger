import { z } from "zod";

export const UserRoleSchema = z.enum(["user", "creator", "admin", "superadmin"]);

export const TaskStatusSchema = z.enum([
  "draft",
  "published",
  "in_progress",
  "pending_review",
  "approved",
  "rejected"
]);

export type UserRole = z.infer<typeof UserRoleSchema>;
export type TaskStatus = z.infer<typeof TaskStatusSchema>;
