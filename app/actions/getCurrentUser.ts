import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prisma";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    //get session from next auth
    const session = await getSession();
 
    //return null if there is no session
    if (!session?.user?.email) return null;

    //if session? then get the user from prisma db
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      }
    });

    //if no user found with this email then return ull
    if (!currentUser) return null;

    return currentUser;
  }
  catch (error: any) {
    return null;
  }
}
