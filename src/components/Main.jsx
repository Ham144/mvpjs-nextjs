// app/components/Main.jsx
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import HeaderNavigation from "./HeaderNavigation";

const Main = ({ children }) => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/"); // Redirect di effect
		}
	}, [status, router]);

	if (status === "loading") {
		return <span className="loading loading-ring loading-lg"></span>;
	}

	if (status === "authenticated") {
		console.log("authenticated");
		return <div className="max-md:pr-12">{children}</div>;
	}

	// Sementara pas unauthenticated
	return (
		<div>
			<HeaderNavigation />
			{children}
		</div>
	);
};

export default Main;
