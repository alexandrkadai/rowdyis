// utils/userIdManager.ts
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid'

const USER_ID_COOKIE = 'user_id'
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds

export async function getUserId(): Promise<string> {
    try {
        const cookieStore = await cookies()
        const existingUserId = cookieStore.get(USER_ID_COOKIE)?.value

        if (existingUserId) {
            return existingUserId
        }

        const newUserId = generateUserId()
        await setUserIdCookie(newUserId)
        return newUserId
    } catch (error) {
        console.error('Error managing user ID:', error)
        return generateUserId() // Fallback to generate new ID if cookie operations fail
    }
}

function generateUserId(): string {
    return uuidv4()
}

async function setUserIdCookie(userId: string) {
    const cookieStore = await cookies()
    cookieStore.set({
        name: USER_ID_COOKIE,
        value: userId,
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'strict'
    })
}