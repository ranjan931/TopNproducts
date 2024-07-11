import axios from "axios";

const API_BASE_URL = "http://your-test-server.com/api";

export const fetchProducts = async (category, company) => {
    const response = await axios.get(`${API_BASE_URL}/products`, {
        params: { category, company },
    });
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
