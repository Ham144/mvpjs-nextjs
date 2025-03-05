import React from "react";
import VideoHero from "./VideoHero";
import ModalRegister from "./ModalRegister";
import Pricing from "./PricingCheckout";

const LandingPage = () => {
	return (
		<div className="flex-1">
			<div className=" mx-auto gap-y-2 flex flex-col">
				<VideoHero />
			</div>
			<ModalRegister />
			<Pricing />
		</div>
	);
};

export default LandingPage;
