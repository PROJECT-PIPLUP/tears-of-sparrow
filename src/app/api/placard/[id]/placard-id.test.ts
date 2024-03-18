import { NextApiRequest } from "next";
import { GET, getPlacardById } from "./route";
import httpMocks from 'node-mocks-http';
import { NextRequest } from "next/server";
import { Placard, User } from "@prisma/client";

const mockUser: User = {
    id: "1234",
    handle: "nafell",
    email: "test@example.com",
    password: "testpassword",
    createdAt: new Date(),
    updatedAt: new Date(),
}

const mockPlacard = {
    id: "1234abcd",
    text: "This is a test placard",
    longtitude: 1.0,
    latitude: 1.0,
    user: mockUser,
    userId: "1234",
    createdAt: new Date(),
    updatedAt: new Date()
}


test("[runs] idを渡すとplacardが返ってくる", async () => {
    const id = "1234abcd";
    // const req = httpMocks.createRequest<NextApiRequest>();
    // const response = await GET(req, {params: {id: id}});
    const response = await getPlacardById(id);
    expect(response).toBe(!null);
    expect(await response).toEqual(mockPlacard);
})