import { NextResponse } from "next/server";
import seedPosts from "@/seed/seedPosts";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
    try {
        await seedPosts();
        return NextResponse.json({msg: "Success"}, {status: 200});
    } catch (err) {
        return NextResponse.json({msg: "Failed"}, {status: 500});
    }
}