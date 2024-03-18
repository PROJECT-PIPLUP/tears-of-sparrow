import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

/** 
 * Respond a placard by id with details.
 */
export async function GET(request: NextApiRequest, {params}: {params: {id: string}}) {
//   const placard = await prisma.placard.findUnique({
//     where: { id: params.id },
//     include: { user: true },
//   });

//   if (!placard) {
//     //404
//     return NextResponse.error();
//   }

//   return NextResponse.json(placard);
}

export async function getPlacardById(id: string) {
    const placard = await prisma.placard.findUnique({
        where: { id: id },
    });

    if (!placard) {
        //return error
    }

    return placard;
}