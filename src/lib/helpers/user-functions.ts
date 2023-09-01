import { db } from "../db/prisma";

/**
 * Gets a user from the database
 * 
 * @param email  - email of the user to get
 * @returns  - user
 */
export const getUser = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
  });

  return user;
}

/**
 * Gets a user from the database without the password 
 * 
 * @param email  - email of the user to get
 * @returns  - user
 */
export const getUserWithouPassword = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      role: true,
    },
  });

  return user;
}

