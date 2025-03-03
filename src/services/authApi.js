import axios from "axios";


export const register = async (email) => {
	const response = await axios.post("/api/auth/register", email);
	return response.data;
};
