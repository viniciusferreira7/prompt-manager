import { PrismaClient } from "@/generated/prisma/client";
import { env } from "./env";

export const prismaClient = new PrismaClient({
  log:
    env.NODE_ENV !== "production"
      ? ["error", "query", "warn", "info"]
      : ["info"],
  accelerateUrl: env.DATABASE_URL,
});
