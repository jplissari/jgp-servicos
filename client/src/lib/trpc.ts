import { createTRPCReact } from "@trpc/react-query";

// @ts-expect-error - AppRouter types are not available during Vercel build
export const trpc = createTRPCReact<any>();
