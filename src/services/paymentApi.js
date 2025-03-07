import axios from "axios"

export const getPricing = async () => {
    const response = await axios.get("/api/payment");
    return response.data
}