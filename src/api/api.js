import axios from "axios";

export const todoAPI = {
    getNotes() {
        return axios.get('/db.json').then(response => response.data)
    }
}
