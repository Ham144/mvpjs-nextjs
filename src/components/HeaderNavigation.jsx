"use client";

import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { HeartHandshake, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModalRegister from "./ModalRegister";

const HeaderNavigation = () => {
	const { signOut } = useAuth();

	return (
		<div className="navbar  md:fixed md:top-0 max-md:fixed  max-md:bottom-0 max-md:flex-col max-md:w-12 max-md:h-full max-md:right-0 max-md:bg-transparent max-md:backdrop-blur-sm z-40 ">
			<div className="flex-none "></div>
			<div className="flex-1 flex gap-x-7 max-md:hidden ">
				<Link
					href="/"
					className=" flex items-center gap-x-5 flex-row p-3 rounded-lg ml-6"
				>
					<HeartHandshake />
					<p className="font-bold text-xl text-center ">Me Colony</p>
				</Link>
			</div>
			<nav>
				<ul className="menu menu-horizontal px-1 text-md items-center justify-center gap-y-5">
					<SignedOut>
						<li>
							<Link href="/examples" className="max-md:rotate-90 max-md:my-4">
								Demo
							</Link>
						</li>
						<li>
							<Link href="/howitworks" className="max-md:rotate-90 max-md:my-4">
								How It Works
							</Link>
						</li>
						<li>
							<Link href="/reviews" className="max-md:rotate-90 max-md:my-4">
								Reviews
							</Link>
						</li>
						<li>
							<Link href="/pricing" className="max-md:rotate-90 max-md:my-4">
								Pricing
							</Link>
						</li>
						<li>
							<button
								onClick={() =>
									document.getElementById("auth-modal")?.showModal()
								}
								className="max-md:rotate-90 max-md:my-4"
							>
								Sign-in
							</button>
						</li>
					</SignedOut>
					<SignedIn>
						<li onClick={() => signOut().catch((err) => console.log(err))}>
							<Link href={"/"} className="text-red hover:text-red-400 ">
								<LogOut size={20} />
							</Link>
						</li>
					</SignedIn>
				</ul>
			</nav>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<SignedIn>
						<UserRound size={30} />
					</SignedIn>
				</button>
			</div>
			<ModalRegister />
		</div>
	);
};

export default HeaderNavigation;
