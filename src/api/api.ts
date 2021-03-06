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
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto (file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (formData: any) {
        return instance.put(`profile`, formData)
    }
}

export const authApi = {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

