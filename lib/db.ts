import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var bookingPool: Pool | undefined;
}

export const getPool = () => {
  const connectionString = process.env.SUPABASE_SESSION_POOL_URL ?? process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing SUPABASE_SESSION_POOL_URL or DATABASE_URL.");
  }

  const pool =
    globalThis.bookingPool ??
    new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
      ssl: {
        rejectUnauthorized: false,
      },
    });

  if (process.env.NODE_ENV !== "production") {
    globalThis.bookingPool = pool;
  }

  return pool;
};
