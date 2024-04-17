import axios from "axios";

const apiClient=axios.create({
    baseURL:'https://www.fruityvice.com/api/fruit/all'
})

export default apiClient