import { selector } from "recoil";
import searchValueState from "../atom/SearchValue";

const userSearch=selector({
    key:'userSearch',
    get:({get})=>{
        const userSearch=get(searchValueState)
        return userSearch
    }
})

export default userSearch