"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			const result = await signIn("email", {
				email,
				redirect: false,
			});

			if (result?.error) {
				setError(result.error);
			} else {
				router.push("/auth/verify-request");
			}
		} catch (error) {
			setError("Terjadi kesalahan saat mengirim email. Silakan coba lagi.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
						Masuk ke akun Anda
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Kami akan mengirimkan link masuk ke email Anda
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Alamat Email
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								placeholder="Alamat Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>

					{error && (
						<div className="text-red-500 text-sm text-center">{error}</div>
					)}

					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
						>
							{isLoading ? "Mengirim..." : "Kirim Link Masuk"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
