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
			<div className="relative z-20 text-center text-white flex items-center justify-around w-full max-w-6xl mx-auto py-16">
				<div className="flex flex-col items-center space-y-8">
					<h1 className="text-5xl font-bold leading-tight max-w-2xl">
						Find Your City, Build Your Community, Leave Loneliness Behind
					</h1>
					<div className="flex flex-col gap-3 text-start max-w-xl text-lg text-gray-200">
						<div className="flex items-start gap-3">
							<span>🍹</span>
							<p>
								Sip away loneliness with new friends from fellow country or
								across the globe.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<span>❤️</span>
							<p>Meet friends—or even soulmates—in the city of your dreams.</p>
						</div>
						<div className="flex items-start gap-3">
							<span>🧪</span>
							<p>
								Discover top destinations to live, work, and grow your career
								based on your priority preferences.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<span>🌎</span>
							<p>Share your journey and gain wisdom from a global community.</p>
						</div>
						<div className="flex items-start gap-3">
							<span>💬</span>
							<p>
								Join Me Colony and connect with your tribe, wherever you are.
							</p>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl p-6 flex flex-col items-center gap-4">
					<button
						className="btn btn-primary w-full"
						onClick={() => document.getElementById("auth-modal")?.showModal()}
					>
						Start Your Journey
					</button>
					<span className="text-sm text-gray-600">
						Already a member? We will direct you to your registered account.
					</span>
				</div>
			</div>
		</section>
	);
}
