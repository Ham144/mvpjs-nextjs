"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const LandingPage = () => {
	const { data: session } = useSession();

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						Selamat Datang di Aplikasi Kami
					</h1>
					<p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
						Aplikasi dengan autentikasi magic link email yang aman dan mudah
						digunakan.
					</p>
					<div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
						{session ? (
							<Link
								href="/dashboard"
								className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
							>
								Lihat Dashboard
							</Link>
						) : (
							<Link
								href="/auth/signin"
								className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
							>
								Masuk dengan Magic Link
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
