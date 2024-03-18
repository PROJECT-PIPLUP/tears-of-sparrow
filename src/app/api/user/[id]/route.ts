import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

/**
 * Respond user
 */
export async function GET(request: NextApiRequest, {params}: {params: {id: string}}) {
//     // todo: if query has placards=true flag, include placards(newest 30)
//   const user = await prisma.user.findUnique({
//     where: { id: params.id },
//   });

//   if (!user) {
//     //404
//     return NextResponse.error();
//   }

//   return NextResponse.json(user);
}

export async function getUserById(id: string) {
    const user = await prisma.user.findUnique({
        where: { id: id },
    });

    if (!user) {
        //return error
    }

    return user;
}