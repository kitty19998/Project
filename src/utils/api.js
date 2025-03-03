import axios from "axios"
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

export const api = axios.create({
    baseURL: "http://localhost:8000/api"
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allres", {
            timeout: 10 * 1000,
        });
        console.log(response)
        if (response.status === 400 || response.status === 500)
        {
            throw response.data
        }
        return response.data

    } catch (error) {
        toast.error("something went wrong");
        throw error
    }
}