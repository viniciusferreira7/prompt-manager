import { z } from "zod";

/**
 * Environment variables schema validation using Zod
 * This ensures type-safety and validates all required environment variables
 * at application startup
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  DATABASE_URL: z.url().describe("PostgreSQL connection string for Prisma"),
  POSTGRES_USER: z.string().min(1).default("postgres"),
  POSTGRES_PASSWORD: z.string().min(1).default("postgres"),
  POSTGRES_DB: z.string().min(1).default("prompt_manager"),
  POSTGRES_PORT: z.coerce.number().int().positive().default(5432),
  POSTGRES_HOST: z.string().min(1).default("localhost"),

  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

/**
 * Validates and parses environment variables
 * Throws an error if validation fails with detailed error messages
 */
const parseEnv = () => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(parsed.error.format(), null, 2)
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
};

/**
 * Validated and typed environment variables
 * Use this throughout the application instead of process.env
 */
export const env = parseEnv();

/**
 * Type of the environment variables
 * Useful for type inference in other parts of the application
 */
export type Env = z.infer<typeof envSchema>;
