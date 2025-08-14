import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  role: text("role"),
  interest: text("interest"),
  message: text("message"),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  processed: boolean("processed").default(false).notNull(),
  metadata: jsonb("metadata"),
});

// Demo jobs table for API documentation examples
export const demoJobs = pgTable("demo_jobs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  modality: text("modality").notNull(), // xray, ct, mri, pathology
  studyId: text("study_id").notNull(),
  enhancement: text("enhancement").notNull(), // super-resolution, denoising, harmonization
  strength: integer("strength").default(85).notNull(),
  status: text("status").default("processing").notNull(), // processing, completed, failed
  createdAt: timestamp("created_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
  metadata: jsonb("metadata"),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact submission schemas
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  processed: true,
  metadata: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Demo job schemas
export const insertDemoJobSchema = createInsertSchema(demoJobs).omit({
  id: true,
  status: true,
  createdAt: true,
  completedAt: true,
  metadata: true,
});

export type InsertDemoJob = z.infer<typeof insertDemoJobSchema>;
export type DemoJob = typeof demoJobs.$inferSelect;

// Enhanced validation schemas for API endpoints
export const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  organization: z.string().max(100, "Organization name too long").optional(),
  role: z.enum(["radiologist", "it-director", "administrator", "researcher", "other"]).optional(),
  interest: z.enum(["xray", "ct", "mri", "pathology", "integration", "enterprise"]).optional(),
  message: z.string().max(2000, "Message too long").optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive communications",
  }),
});

export const demoJobSchema = insertDemoJobSchema.extend({
  modality: z.enum(["xray", "ct", "mri", "pathology"]),
  studyId: z.string().min(1, "Study ID is required").max(100, "Study ID too long"),
  enhancement: z.enum(["super-resolution", "denoising", "harmonization"]),
  strength: z.number().min(0, "Strength must be at least 0").max(100, "Strength cannot exceed 100"),
});
