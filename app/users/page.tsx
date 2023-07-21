import React from 'react'
import Link from 'next/link'
import type {Metadata} from 'next'
import getAllUsers from '@/lib/getAllUsers'

export const metadata: Metadata = {
    title: 'Users',
}



export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    console.log('Hello')

    const content = (
        <section>
            {
                users.map(user => {
                    return (
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                        </>
                    )
                })
            }
        </section>
    )

  return (
    <>
        <br/>
        <div>Users</div>
        <br/>
        <div>{content}</div>
    </>
    
  )
}
