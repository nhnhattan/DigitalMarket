// import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from 'payload/types'

// const adminsAndUser: Access = ({ req: { user } }) => {
//     if (user.role === 'admin') return true

//     return {
//         id: {
//             equals: user.id,
//         },
//     }
// }

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return PrimaryActionEmailHtml({
                    actionLabel: "verify your account",
                    buttonText: "Verify Account",
                    href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
                })
            }
        }
    },
    access: {
        read: () => true,
        create: () => true
    },
    fields: [
        {
            name: 'role',
            defaultValue: "user",
            required: true,
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        },
    ],
}