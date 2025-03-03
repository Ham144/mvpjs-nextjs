"use client";
import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center flex-col gap-8">
				<Moon
					size={100}
					className="text-center absolute animate-pulse opacity-20"
				/>
				<div className="max-w-md  backdrop-blur-sm bg-base-200/30 p-8 rounded-xl border border-primary/20">
					<h1 className="text-8xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						04:04
					</h1>
					<p className="py-6 text-lg italic">
						Sorry, The pieces you just looking for is not part of the reality
					</p>
					<Link href="/" className="btn btn-primary btn-lg ">
						Get Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
