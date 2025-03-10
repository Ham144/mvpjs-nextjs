"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
	const searchParams = useSearchParams();
	const error = searchParams.get("error");

	const errors = {
		Configuration: "Terjadi masalah dengan konfigurasi server.",
		AccessDenied: "Anda tidak memiliki akses ke halaman ini.",
		Verification: "Link masuk tidak valid atau sudah kadaluarsa.",
		default: "Terjadi kesalahan saat mencoba masuk.",
	};

	const errorMessage = error && errors[error] ? errors[error] : errors.default;

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8 text-center">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-red-600">
						Terjadi Kesalahan
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						{errorMessage}
					</p>
				</div>
				<div>
					<Link
						href="/auth/signin"
						className="font-medium text-indigo-600 hover:text-indigo-500"
					>
						Kembali ke halaman masuk
					</Link>
				</div>
			</div>
		</div>
	);
}
