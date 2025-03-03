import React from "react";
import VideoHero from "./VideoHero";
import ModalRegister from "./ModalRegister";

const LandingPage = () => {
	return (
		<div className="flex-1">
			<div className=" mx-auto gap-y-2 flex flex-col">
				<VideoHero />
			</div>
			<ModalRegister />
		</div>
	);
};

export default LandingPage;
