"use client";
import React from "react";

export default function VideoHero() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			{/* Video Background */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
				poster="/fallback-hero-mecolony.jpg" //fallback
			>
				<source src="/bakar-compressed.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>

			{/* Hero Content */}
			<div className="relative z-20 text-center text-white flex flex-col md:flex-row items-center justify-around w-full max-w-6xl mx-auto py-16 px-4">
				<div className="flex flex-col items-center space-y-8 w-full md:w-auto">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl md:max-w-2xl">
						Find Your City, Build Your Community, Leave Loneliness Behind
					</h1>
					<div className="flex flex-col gap-4 text-start max-w-md md:max-w-xl text-lg md:text-xl text-gray-200">
						<div className="flex items-start gap-3">
							<span className="text-2xl">🍹</span>
							<p>
								Sip away loneliness with new friends from your city or globally.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-2xl">❤️</span>
							<p>Meet friends—or even soulmates—in the city of your dreams.</p>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-2xl">🧪</span>
							<p>
								Discover top destinations to live, work, and grow your career.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-2xl">🌎</span>
							<p>Share your journey and gain wisdom from a global community.</p>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-2xl">💬</span>
							<p>
								Join Me Colony and connect with your tribe, wherever you are.
							</p>
						</div>
					</div>
				</div>
				<div className="card w-full md:w-96 bg-base-100 shadow-xl p-6 flex flex-col items-center gap-4 mt-8 md:mt-0">
					<button
						className="btn btn-primary w-full"
						onClick={() => document.getElementById("auth-modal")?.showModal()}
					>
						Start Your Journey
					</button>
					<span className="text-sm text-gray-600">
						Already a member? Sign in with ease.
					</span>
				</div>
			</div>
		</section>
	);
}
