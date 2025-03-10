import mongoose from "mongoose";
import { ObjectId } from "mongodb";

// Skema untuk model User
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    emailVerified: Date,
    image: String,
});

// Skema untuk model Account
const AccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token: String,
    expires_at: Number,
    token_type: String,
    scope: String,
    id_token: String,
    session_state: String,
});

// Skema untuk model Session
const SessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    expires: Date,
    sessionToken: String,
});

// Skema untuk model VerificationToken
const VerificationTokenSchema = new mongoose.Schema({
    identifier: String,
    token: String,
    expires: Date,
});

// Buat model jika belum ada
const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Account = mongoose.models.Account || mongoose.model("Account", AccountSchema);
const Session = mongoose.models.Session || mongoose.model("Session", SessionSchema);
const VerificationToken = mongoose.models.VerificationToken || mongoose.model("VerificationToken", VerificationTokenSchema);

export function MongooseAdapter() {
    return {
        async createUser(user) {
            const newUser = new User({
                name: user.name,
                email: user.email,
                image: user.image,
                emailVerified: user.emailVerified,
            });
            const savedUser = await newUser.save();
            return {
                id: savedUser._id.toString(),
                ...savedUser._doc,
            };
        },
        async getUser(id) {
            const user = await User.findById(id);
            if (!user) return null;
            return {
                id: user._id.toString(),
                ...user._doc,
            };
        },
        async getUserByEmail(email) {
            const user = await User.findOne({ email });
            if (!user) return null;
            return {
                id: user._id.toString(),
                ...user._doc,
            };
        },
        async getUserByAccount({ provider, providerAccountId }) {
            const account = await Account.findOne({ provider, providerAccountId });
            if (!account) return null;
            const user = await User.findById(account.userId);
            if (!user) return null;
            return {
                id: user._id.toString(),
                ...user._doc,
            };
        },
        async updateUser(user) {
            const updatedUser = await User.findByIdAndUpdate(
                user.id,
                {
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    emailVerified: user.emailVerified,
                },
                { new: true }
            );
            return {
                id: updatedUser._id.toString(),
                ...updatedUser._doc,
            };
        },
        async deleteUser(userId) {
            await Promise.all([
                User.findByIdAndDelete(userId),
                Account.deleteMany({ userId: new ObjectId(userId) }),
                Session.deleteMany({ userId: new ObjectId(userId) }),
            ]);
        },
        async linkAccount(account) {
            const newAccount = new Account({
                userId: new ObjectId(account.userId),
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
            });
            const savedAccount = await newAccount.save();
            return {
                id: savedAccount._id.toString(),
                ...savedAccount._doc,
            };
        },
        async unlinkAccount({ provider, providerAccountId }) {
            await Account.findOneAndDelete({ provider, providerAccountId });
        },
        async createSession(session) {
            const newSession = new Session({
                userId: new ObjectId(session.userId),
                expires: session.expires,
                sessionToken: session.sessionToken,
            });
            const savedSession = await newSession.save();
            return {
                id: savedSession._id.toString(),
                ...savedSession._doc,
            };
        },
        async getSessionAndUser(sessionToken) {
            const session = await Session.findOne({ sessionToken });
            if (!session) return null;
            const user = await User.findById(session.userId);
            if (!user) return null;
            return {
                session: {
                    id: session._id.toString(),
                    ...session._doc,
                },
                user: {
                    id: user._id.toString(),
                    ...user._doc,
                },
            };
        },
        async updateSession(session) {
            const updatedSession = await Session.findOneAndUpdate(
                { sessionToken: session.sessionToken },
                {
                    expires: session.expires,
                },
                { new: true }
            );
            if (!updatedSession) return null;
            return {
                id: updatedSession._id.toString(),
                ...updatedSession._doc,
            };
        },
        async deleteSession(sessionToken) {
            await Session.findOneAndDelete({ sessionToken });
        },
        async createVerificationToken(verificationToken) {
            const newToken = new VerificationToken({
                identifier: verificationToken.identifier,
                token: verificationToken.token,
                expires: verificationToken.expires,
            });
            const savedToken = await newToken.save();
            return {
                id: savedToken._id.toString(),
                ...savedToken._doc,
            };
        },
        async useVerificationToken({ identifier, token }) {
            const verificationToken = await VerificationToken.findOneAndDelete({
                identifier,
                token,
            });
            if (!verificationToken) return null;
            return {
                id: verificationToken._id.toString(),
                ...verificationToken._doc,
            };
        },
    };
} 