"use client";

import { HeartHandshake, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModalRegister from "./ModalRegister";
import { useSession, signOut } from "next-auth/react";

const HeaderNavigation = () => {
	const { data: session, status } = useSession();
	const isLoading = status === "loading";

	return (
		<div className="navbar   text-white max-md:text-black max-md:bg-transparent md:fixed md:top-0 md:left-0 md:w-full md:flex md:items-center md:justify-between max-md:fixed max-md:top-0 max-md:right-0 max-md:w-12 max-md:h-full max-md:flex-col max-md:items-end max-md:justify-end  max-md:backdrop-blur-md z-40">
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
			<nav className="md:w-1/3 items w-12 max-md:justify-self-end   max-md:fixed max-md:right-0 max-md:top-0  max-md:flex max-md:items-center max-md:justify-center">
				<div className="max-md:flex-col  max-md:justify-end max-md:gap-y-28 max-md:h-screen  max-md:flex  flex md:gap-x-4 ">
					<div className="max-md:rotate-90 ">
						<Link
							href="/examples"
							className="text-lg hover:text-primary  transition-colors"
						>
							Demo
						</Link>
					</div>
					<div className="md:transform-none max-md:rotate-90 max-md:whitespace-nowrap">
						<Link
							href="/howitworks"
							className="text-lg hover:text-primary transition-colors whitespace-nowrap"
						>
							How It Works
						</Link>
					</div>
					<div className="max-md:rotate-90">
						<Link
							href="/reviews"
							className="text-lg hover:text-primary transition-colors"
						>
							Reviews
						</Link>
					</div>
					<div className="max-md:rotate-90">
						<button
							onClick={() => document.getElementById("pricing")?.showModal()}
							className="text-lg cursor-pointer hover:text-primary transition-colors"
						>
							Pricing
						</button>
					</div>
					<div className="max-md:rotate-90">
						<button
							onClick={() => document.getElementById("auth-modal")?.showModal()}
							className="text-lg hover:text-primary transition-colors"
						>
							Sign-in
						</button>
					</div>
					<div className="max-md:rotate-90">
						<Link
							href="/"
							className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-2"
						>
							<LogOut size={20} />
							<span>Sign Out</span>
						</Link>
					</div>
				</div>
			</nav>

			{/* User Icon (Hidden on Mobile) */}
			<div className="flex-none max-md:hidden">
				<button className="btn btn-square btn-ghost">
					<UserRound size={30} />
				</button>
			</div>

			{/* Modal */}
			<ModalRegister key={"modalRegister"} />

			{/* Login Status */}
			<div className="flex-none max-md:hidden">
				{isLoading ? (
					<div className="text-sm text-gray-500">Memuat...</div>
				) : session ? (
					<div className="flex items-center space-x-4">
						<span className="text-sm text-gray-700">{session.user.email}</span>
						<button
							onClick={() => signOut({ callbackUrl: "/" })}
							className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
						>
							Keluar
						</button>
					</div>
				) : (
					<Link
						href="/auth/signin"
						className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
					>
						Masuk
					</Link>
				)}
			</div>
		</div>
	);
};

export default HeaderNavigation;
