import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export async function getRecommended() {
  /* await new Promise((resolve) => setTimeout(resolve, 5000)); */
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
}
