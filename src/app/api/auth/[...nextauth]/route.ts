import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const handler = NextAuth({
  pages: {
    signIn: '/signin',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Romane',
        }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
