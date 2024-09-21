import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    helloWorld: publicProcedure.query(() => "Hello World"),
})

export type AppRouter = typeof appRouter;