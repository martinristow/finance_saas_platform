import {Hono} from "hono";
import {db} from "@/database/drizzle"
import {accounts} from "@/database/schema";
import {clerkMiddleware, getAuth} from "@hono/clerk-auth";

const app = new Hono()
    .get("/",
        clerkMiddleware(),
        async (c) => {
            const auth = getAuth(c);

            if (!auth?.userId) {
                return c.json({error: "Unauthorized"}, 401);
            }

            const data = await db.select({
                id: accounts.id,
                name: accounts.name,
            }).from(accounts);
            return c.json({accounts: {data}})
        })

export default app;