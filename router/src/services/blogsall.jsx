import { api } from "./api"

export const blogall = async () => {
    const res = await api.get('/posts')

    if (!res.data) {
        throw new Error("error");
    }
    return res.data
}

export const singleblog = async () => {
    const res = await api.get(`/posts/${id}`)

    if (!res.data) {
        throw new Error("error");
    }
    return res.data
}