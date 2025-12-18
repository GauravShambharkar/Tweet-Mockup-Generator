import { NextResponse as res } from "next/server";

export async function GET() {
    return res.json(
        {
            success: true,
            data: [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" }
            ]
        },
        { status: 200 }
    );
}



