import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY" : "31e30b18-0c44-4833-ae3f-a51d42aec9c6"
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUnFollow (userId: number) {
        return  instance.delete(`follow/${userId}`)
    },

    postFollow (userId: number) {
        return  instance.post(`follow/${userId}`)
    },
    getProfile (userId: string) {
        return instance.get(`profile/` + userId)
    }
}

export const authApi = {
    me() {
        return instance.get(`/auth/me`)
    }
}

