import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LandingPage from "../components/LandingPage";

//landing page , kalau usr sudah terdaftar bawa ke dashboard langsung biasanya kalau saas
const HomePage = async () => {
	const user = await currentUser();

	// Jika pengguna sudah login, redirect ke dashboard
	if (user) {
		redirect("/dashboard");
	}
	//jika belum, tampilkan LandingPage cantik cto convertion rate
	return <LandingPage />;
};

export default HomePage;
