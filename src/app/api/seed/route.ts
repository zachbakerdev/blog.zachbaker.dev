import { NextResponse } from "next/server";
import seedPosts from "@/seed/seedPosts";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        await seedPosts();

        res.status(200).json({msg: "Complete"});
    }
}

export async function GET(req: NextApiRequest) {
    await seedPosts();
    return NextResponse.json({msg: "Success"}, {status: 200});
}