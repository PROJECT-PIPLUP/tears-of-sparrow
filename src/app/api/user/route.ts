import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

/**
 * Create new user
 */
export async function PUT(request: NextApiRequest) {
    
}

export type NewUserQuery = {
    handle: string;
    email: string;
    password: string;
}

export async function createUser(query: NewUserQuery) {
    const newUser = await prisma.user.upsert({
        where: { email: query.email },
        update: { 
            handle: query.handle, 
            password: query.password 
        },
        create: { 
            handle: query.handle, 
            email: query.email, 
            password: query.password 
        },
    });

    return newUser;
}