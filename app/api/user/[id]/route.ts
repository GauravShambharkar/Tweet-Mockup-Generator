import { NextResponse as res } from "next/server"


export async function GET() {
    return res.json({
        msg: "User details"
    },
        {
            status: 200
        })
}