import axios from "axios";
import {ICard} from "../interfaceTypes/interfaceTypes";

export const todoAPI = {
    getNotes() {
        return axios.get<ICard[]>('/db.json').then(response => response.data)
    }
}
