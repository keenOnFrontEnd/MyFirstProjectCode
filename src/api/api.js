import React from 'react';
import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "1a6202ba-d8e8-47ae-a805-d3e9ae8f27d3"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const Users_API = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
            
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    Follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    }
}
export const Login_API = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.post(`auth/logout`)
    }
}
export const Profile_API = {
    getUsersProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    updateProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`/profile/photo`, formData, {headers: {
            'Content-Type' : 'multipart/form-data'
        }})
    }

}
