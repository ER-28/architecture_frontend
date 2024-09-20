// app/actions/cookieActions.ts
'use server'

import { cookies } from 'next/headers'

export async function setCookie(name: string, value: string, options?: any) {
  cookies().set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    ...options
  })
}

export async function getCookie(name: string) {
  const cookieValue = cookies().get(name)
  if (cookieValue) {
    return { success: true, value: cookieValue.value }
  } else {
    return { success: false, message: `Cookie ${name} not found` }
  }
}

export async function deleteCookie(name: string) {
  cookies().delete(name)
}