"use client";
import { initializePaddle, Paddle } from "@paddle/paddle-js";
import { useState } from "react";
import { useEffect } from "react";

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

export function Checkout() {
	// Create a local state to store Paddle instance
	const [paddle, setPaddle] = useState();

	// Download and initialize Paddle instance from CDN
	useEffect(() => {
		initializePaddle({
			environment:
				process.env.NODE_ENV == "development" ? "sandbox" : "production",
			token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
		}).then((paddleInstance) => {
			if (paddleInstance) {
				setPaddle(paddleInstance);
			}
		});
	}, []);

	// Modifikasi fungsi openCheckout untuk menerima priceId
	const openCheckout = (priceId) => {
		paddle?.Checkout.open({
			items: [{ priceId: priceId, quantity: 1 }],
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3">
			{pricingOptions.map((option) => (
				<div key={option.priceId} className="border rounded p-6 text-center">
					<h2 className="text-2xl font-bold mb-4">{option.name}</h2>
					<p className="text-3xl font-bold mb-6">{option.price}</p>
					<ul className="mb-6">
						{option.features.map((feature, index) => (
							<li key={index} className="mb-2">
								✓ {feature}
							</li>
						))}
					</ul>
					<button
						onClick={() => openCheckout(option.priceId)}
						className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
					>
						Pilih {option.name}
					</button>
				</div>
			))}
		</div>
	);
}
