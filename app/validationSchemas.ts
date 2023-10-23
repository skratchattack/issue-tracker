import { z } from "zod";

/* Schema using zod to validate the body of the request */
export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z.string().min(1, "Description is required").max(65535).optional(),
  assignedToUserId: z.string().min(1, "AssignedToUser is required.").max(255).optional().nullable(),
});
