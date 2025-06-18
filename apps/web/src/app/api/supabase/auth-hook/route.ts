import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const user = body?.user
    const email = user?.email || ''

    // Only allow @langchain.dev
    if (!email.endsWith('@langchain.dev')) {
        return NextResponse.json({
            error: 'Sign up is restricted to LangChain employees.'
        }, { status: 403 })
    }

    return NextResponse.json({ message: 'Allowed' }, { status: 200 })
} 