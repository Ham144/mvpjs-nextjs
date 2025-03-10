export default function VerifyRequest() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8 text-center">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
						Periksa Email Anda
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Link masuk telah dikirim ke alamat email Anda. Silakan periksa kotak
						masuk Anda dan klik link tersebut untuk masuk.
					</p>
					<p className="mt-4 text-center text-sm text-gray-600">
						Jika Anda tidak menerima email, periksa folder spam atau coba lagi.
					</p>
				</div>
			</div>
		</div>
	);
}
