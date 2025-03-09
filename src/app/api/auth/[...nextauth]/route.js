// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import MailgunProvider from "next-auth/providers/mailgun";

export const authOptions = {
    providers: [
        MailgunProvider({
            clientId: process.env.MAILGUN_CLIENT_ID,
            clientSecret: process.env.MAILGUN_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };