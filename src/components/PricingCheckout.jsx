"use client";
import { getPricing } from "../services/paymentApi";
import { initializePaddle } from "@paddle/paddle-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Pricing() {
	const [paddle, setPaddle] = useState();

	//tanstack
	const { data: pricingOptions } = useQuery({
		queryFn: getPricing,
		queryKey: ["pricing"],
	});

	const handleCheckOut = (price) => {
		if (!paddle) return toast.error("Payment establishment failed");
		paddle?.Checkout.open({
			items: [
				{
					price_id: price.id,
					quantity: 1,
				},
			],
			settings: {
				displayMode: "Overlay",
				theme: "dark",
			},
		});
	};

	useEffect(() => {
		if (paddle) return;
		initializePaddle({
			environment: "sandbox",
			token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
		}).then((paddleInstance) => {
			setPaddle(paddleInstance);
		});
	}, []);

	console.log(pricingOptions);

	return (
		<div id="pricing">
			<div className="bg-white  rounded-lg p-6 md:p-12 text-center">
				<h3 className="font-bold w-full text-3xl">Pricing</h3>
				<div className="flex gap-x-2 items-center mx-auto justify-center h-96">
					{pricingOptions?.data?.map((option) => (
						<div
							key={option.id}
							className="border h-full w-64 flex flex-col justify-between border-gray-200 rounded-lg p-6"
						>
							<div className="flex  flex-col items-center">
								<h2 className="text-2xl font-bold">
									{option.items[0].price.name}
								</h2>
								<div className="text-4xl font-bold mt-2">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: option.items[0].price?.unitPrice?.currencyCode,
									}).format(
										parseFloat(option.items[0].price?.unitPrice?.amount) / 100
									)}{" "}
									<div className="badge badge-accent">
										{option.items[0].price.unitPrice.currencyCode}
									</div>
								</div>
							</div>
							<button
								onClick={() => handleCheckOut(option.items[0].price)}
								className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-6 w-full"
							>
								One time payment
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
