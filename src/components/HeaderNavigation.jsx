"use client";

import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import {
	HeartHandshake,
	Hexagon,
	Layers,
	LogOut,
	UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ModalRegister from "./ModalRegister";

const HeaderNavigation = () => {
	const { signOut } = useAuth();

	return (
		<div className="navbar bg-white md:fixed md:top-0 md:left-0 md:w-full md:flex md:items-center md:justify-between max-md:fixed max-md:top-0 max-md:right-0 max-md:w-12 max-md:h-full max-md:flex-col max-md:items-end max-md:justify-end max-md:bg-white/50 max-md:backdrop-blur-sm z-40">
			{/* Logo Section (Hidden on Mobile) */}
			<div className="flex-1 flex gap-x-7 max-md:hidden">
				<Link
					href="/"
					className="flex items-center gap-x-5 flex-row p-3 rounded-lg ml-6"
				>
					<HeartHandshake />
					<p className="font-bold text-xl text-center">Me Colony</p>
				</Link>
			</div>

			{/* Navigation Links */}
			<nav className="md:w-1/3 w-12 max-md:fixed max-md:right-0 max-md:top-0 max-md:h-screen max-md:flex max-md:items-center max-md:justify-center">
				<ul className="menu md:flex   md:gap-x-4 max-md:flex-col max-md:gap-y-6 max-md:p-4 max-md:text-md max-md:text-white max-md:bg-gray-800/90 max-md:w-screen  max-md:h-screen max-md:items-center max-md:justify-center">
					<SignedOut>
						<li className="transform rotate-90">
							<Link
								href="/examples"
								className="text-lg hover:text-primary transition-colors"
							>
								Demo
							</Link>
						</li>
						<li className="transform rotate-90">
							<Link
								href="/howitworks"
								className="text-lg hover:text-primary transition-colors"
							>
								How It Works
							</Link>
						</li>
						<li className="transform rotate-90">
							<Link
								href="/reviews"
								className="text-lg hover:text-primary transition-colors"
							>
								Reviews
							</Link>
						</li>
						<li className="transform rotate-90">
							<Link
								href="/pricing"
								className="text-lg hover:text-primary transition-colors"
							>
								Pricing
							</Link>
						</li>
						<li className="transform rotate-90">
							<button
								onClick={() =>
									document.getElementById("auth-modal")?.showModal()
								}
								className="text-lg hover:text-primary transition-colors"
							>
								Sign-in
							</button>
						</li>
					</SignedOut>
					<SignedIn>
						<li
							className="transform rotate-90"
							onClick={() => signOut().catch((err) => console.log(err))}
						>
							<Link
								href="/"
								className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-2"
							>
								<LogOut size={20} />
								<span>Sign Out</span>
							</Link>
						</li>
					</SignedIn>
				</ul>
			</nav>

			{/* User Icon (Hidden on Mobile) */}
			<div className="flex-none max-md:hidden">
				<button className="btn btn-square btn-ghost">
					<SignedIn>
						<UserRound size={30} />
					</SignedIn>
				</button>
			</div>

			{/* Modal */}
			<ModalRegister />
		</div>
	);
};

export default HeaderNavigation;
