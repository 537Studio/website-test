'use server'

import { createHash } from 'crypto'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { mongoDB } from './mongodb'

export async function backstageLogin(formData: FormData): Promise<string> {
  if (
    formData.get('username') === process.env.BACKSTAGE_USERNAME &&
    formData.get('password') === process.env.BACKSTAGE_PASSWORD
  ) {
    const session = crypto.randomUUID()
    const expiresTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)

    try {
      // store into server db
      await mongoDB(async (db) => {
        const backstageLoginDB = db?.collection('backstageLogin')
        await backstageLoginDB?.insertOne({
          userUUID: await generateUserUUID(headers()),
          session: session,
          expires: expiresTime.getTime(), // timestamp
        })
      })
    } catch {
      return 'server'
    }

    // store into user cookies
    await cookies().set('loginSession', session, {
      expires: expiresTime, // after one week
    })

    redirect('/' + process.env.BACKSTAGE_PATH + '/admin')
  } else {
    return 'pwd'
  }
}

export async function canUserLogin(): Promise<boolean> {
  const session = await cookies().get('loginSession')?.value

  if (session != undefined) {
    return await mongoDB(async (db): Promise<boolean> => {
      const backstageLoginDB = db?.collection('backstageLogin')

      const dbSession = await backstageLoginDB?.findOne({
        userUUID: await generateUserUUID(headers()),
        session,
      })

      if (dbSession !== null && dbSession !== undefined) {
        if (new Date() > dbSession?.expires) {
          // already expires
          await backstageLoginDB?.deleteOne({
            userUUID: await generateUserUUID(headers()),
            session,
          })
          // delete
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })
  } else {
    // session == undefined
    return false
  }
}

export async function generateUserUUID(headers: Headers) {
  const userAgent = headers.get('user-agent') || ''
  const ipAddress =
    headers.get('x-forwarded-for') || headers.get('remote-addr') || ''
  const acceptLanguage = headers.get('accept-language') || ''

  const uniqueString = `${userAgent}-${ipAddress}-${acceptLanguage}`

  const hash = createHash('md5').update(uniqueString).digest('hex')

  return hash
}
