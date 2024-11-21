import axios from "axios";

const ApiProduct = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export default ApiProduct;