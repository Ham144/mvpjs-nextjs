// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongooseAdapter } from "../../../../lib/mongoose-adapter.js";
import connectDB from "../../../../libs/connectDB.js";

// Pastikan koneksi database sudah terbentuk
connectDB();

const handler = NextAuth({
    adapter: MongooseAdapter(),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        verifyRequest: "/auth/verify-request",
        error: "/auth/error",
    },
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session;
        },
    },
});

export { handler as GET, handler as POST };