import mongoose from "mongoose";
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("yor app is konektet tu databes");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

export default connectDB;
