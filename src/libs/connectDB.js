import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (!process.env.MONGO_URI) {
			throw new Error('Variabel lingkungan "MONGO_URI" tidak ditemukan');
		}

		if (mongoose.connection.readyState === 1) {
			console.log("MongoDB sudah terhubung");
			return;
		}

		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB terhubung dengan sukses");
	} catch (error) {
		console.error("Error koneksi MongoDB:", error.message);
		// Tampilkan detail error untuk debugging
		console.error("Detail error:", error);

		// Jangan hentikan aplikasi di lingkungan development
		if (process.env.NODE_ENV === "production") {
			process.exit(1);
		}
	}
};

export default connectDB;
