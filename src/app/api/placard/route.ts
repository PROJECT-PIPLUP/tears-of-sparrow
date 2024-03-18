import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

/**
 * Cerate new placard on db based on request body
 */
export async function PUT(request: NextRequest) {
    //await createUser(payload)
}

export type NewPlacardQuery = {
  text: string;
  longtitude: number;
  latitude: number;
  userId: string;
}

export async function createUser(query: NewPlacardQuery){
    const newPlacard = await prisma.placard.create({
        data: {
            text: query.text,
            longtitude: query.longtitude,
            latitude: query.latitude,
            userId: query.userId
        }
    });

    return newPlacard;
}