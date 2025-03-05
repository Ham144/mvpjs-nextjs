"use client";
import { initializePaddle } from "@paddle/paddle-js";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const pricingOptions = [
	{
		name: "Basic Plan",
		price: "$9.99/bulan",
		priceId: "pri_basic123", // Ganti dengan Paddle price ID yang sebenarnya
		features: ["Fitur Dasar", "1 User", "5GB Storage"],
	},
	{
		name: "Pro Plan",
		price: "$29.99/bulan",
		priceId: "pri_pro456", // Ganti dengan Paddle price ID yang sebenarnya
		features: [
			"Semua Fitur Basic",
			"5 Users",
			"25GB Storage",
			"Priority Support",
		],
	},
	{
		name: "Enterprise Plan",
		price: "$99.99/bulan",
		priceId: "pri_enterprise789", // Ganti dengan Paddle price ID yang sebenarnya
		features: [
			"Semua Fitur Pro",
			"Unlimited Users",
			"100GB Storage",
			"24/7 Support",
			"Custom Integration",
		],
	},
];

export default function Pricing() {
	const [paddle, setPaddle] = useState();

	const handleCheckOut = (item) => {
		if (!paddle) return toast.error("Payment establishment failed");
		paddle?.Checkout.open({
			items: [
				{
					price_id: "pri_01jnkex9ygr505937p2p07nd4x",
					quantity: 1,
				},
			],
			settings: {
				displayMode: "Overlay",
				theme: "dark",
				successUrl: process.env.BASE_URL,
			},
		});
	};

	useEffect(() => {
		if (paddle) return;
		initializePaddle({
			environment: "sandbox",
			token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
		})
			.then((paddleInstance) => {
				setPaddle(paddleInstance);
			})
			.then(() => {
				toast.success("Payment established successfully");
			});
	}, []);

	return (
		<div id="pricing">
			<div className="bg-white rounded-lg p-6 md:p-12 text-center">
				<h3 className="font-bold w-full text-3xl">Pricing</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
					{pricingOptions.map((option) => (
						<div
							key={option.priceId}
							className="border flex flex-col justify-between border-gray-200 rounded-lg p-6"
						>
							<div className="flex flex-col items-center">
								<h2 className="text-2xl font-bold">{option.name}</h2>
								<p className="text-4xl font-bold mt-2">{option.price}</p>
								<ul className="mt-4 list-disc list-inside">
									{option.features.map((feature, index) => (
										<li key={index} className="mb-2">
											{feature}
										</li>
									))}
								</ul>
							</div>
							<button
								onClick={() => handleCheckOut(option)}
								className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-6 w-full"
							>
								Pilih {option.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
