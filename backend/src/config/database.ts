import { Pool } from "pg";
process.loadEnvFile()

const { PostgreHost, PostgreUser, PostgresPassword, PostgresDatabase, PostgresPort } = process.env

const newPort = PostgresPort ? parseInt(PostgresPort) : 1;

export const pool = new Pool({
  host: PostgreHost,
  user: PostgreUser,
  password: PostgresPassword,
  database: PostgresDatabase,
  port: newPort
})

