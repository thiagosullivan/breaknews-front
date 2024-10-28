 
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = "http://localhost:3000";

export function getAllPosts(){
    const response = axios.get(`${baseURL}/news`)
    return response;
}

export function getTopPost(){
    const response = axios.get(`${baseURL}/news/top`)
    return response;
}

export function searchPosts(title){
    const response = axios.get(`${baseURL}/news/search?title=${title}`);
    return response;
}

export function getAllPostsByUser(){
    const response = axios.get(`${baseURL}/news/byUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response;
}