import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useImages=(fruitName:string)=> 
useQuery({
    queryKey:['image'],
    queryFn:()=>apiClient.get(`/${fruitName}/image`)
})