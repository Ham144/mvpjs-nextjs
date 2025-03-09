"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";

const ModalRegister = () => {
	const [email, setEmail] = useState();

	return (
		<dialog
			id="auth-modal"
			className="modal pt-2 flex-1 mx-auto justify-center items-center"
		>
			<div className="modal-box relative">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>

				<div className="mb-6 text-center">
					<h3 className="text-2xl font-bold mb-2">Welcome to Me Colony!</h3>
					<p className="text-sm text-gray-600 mb-4">
						Discover your ideal city, connect with a global community, and never
						feel alone again.
					</p>

					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="text-center">
							<div className="font-bold text-xl mb-1">45+</div>
							<div className="text-sm">Cities Worldwide</div>
						</div>
						<div className="text-center">
							<div className="font-bold text-xl mb-1">2K+</div>
							<div className="text-sm">Active Members</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 mb-6">
						<div className="flex items-center gap-2">
							<Check color="green" />
							<span>In-depth city insights and key metrics</span>
						</div>
						<div className="flex text-start gap-2">
							<Check color="green" />
							<span>
								Join a community of locals and professionals in your city
							</span>
						</div>
						<div className="flex text-start gap-2">
							<Check color="green" />
							<span>Explore job opportunities across the globe</span>
						</div>
						<div className="flex text-start gap-2">
							<Check color="green" />
							<span>Get expert visa guidance tailored to your city</span>
						</div>
						<div className="flex text-start gap-2">
							<Check color="green" />
							<span>
								Share, gather, and build friendships in a vibrant community
							</span>
						</div>
					</div>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="flex flex-col gap-4"
				>
					<label htmlFor="email" className="w-full">
						<input
							required
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email to join the journey"
							className="input input-bordered input-accent w-full"
						/>
					</label>
					<button className="btn btn-primary w-full">Start Exploring</button>
					<p className="text-xs text-center text-gray-500">
						By signing up, you agree to our Terms of Service and Privacy Policy
					</p>
				</form>
			</div>
		</dialog>
	);
};

export default ModalRegister;
