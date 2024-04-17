import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


const useAllFruits = () =>
    useQuery({
        queryKey:['all'],
        queryFn:()=>apiClient.get('').then(res=>res.data)
    })


export default useAllFruits

