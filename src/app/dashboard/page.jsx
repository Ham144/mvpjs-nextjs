"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/auth/signin");
		}
	}, [status, router]);

	if (status === "loading") {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<p className="text-lg">Memuat...</p>
			</div>
		);
	}

	if (!session) {
		return null;
	}

	return (
		<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<p className="mt-4">Selamat datang, {session.user.email}!</p>
			<div className="mt-6 rounded-lg bg-white p-6 shadow">
				<h2 className="text-lg font-medium">Informasi Akun</h2>
				<div className="mt-4">
					<p>Email: {session.user.email}</p>
					<p>ID: {session.user.id}</p>
				</div>
			</div>
		</div>
	);
}
