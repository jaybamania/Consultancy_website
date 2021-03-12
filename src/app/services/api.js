import React from 'react'
import axios from "axios"
import {API_BASE_URL} from "../constants/settings"
import { connect } from 'formik'

export async function registerLegalAdvice (requestBody,setResponseState,responseState) {
    console.log(localStorage.getItem("TOKEN"))
    try {
        const response = await axios.post(API_BASE_URL + "/service/create/", requestBody, { headers: {
              'Authorization': 'Bearer '+localStorage.getItem("TOKEN"),
              'Content-Type': 'application/json'
            }      
        })
        console.log(response)

        setResponseState({
            ...responseState,
            ...response.data
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}


export async function updateLegalService(requestBody) {
    try {
        const response = await axios.post(API_BASE_URL + "/service/update/", requestBody, { headers: {
              'Authorization': 'Bearer '+localStorage.getItem("TOKEN")
            }      
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getAllDashboardRequests(){
    try{
        const response = await axios.get(API_BASE_URL+"/service/all",{ headers: {
              'Authorization': 'Bearer '+localStorage.getItem("TOKEN")
            }      
        })
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error)
    }
}

export async function getProfileId(){
        try{
        const response = await axios.get(API_BASE_URL+"/auth/my-profile",{ headers: {
              'Authorization': 'Bearer '+localStorage.getItem("TOKEN")
            }      
        })
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error)
    }
}

export async function getAllBranches(){
    try{
        const response = await axios.get(API_BASE_URL+"/branch/all",{ headers: {
              'Authorization': 'Bearer '+localStorage.getItem("TOKEN")
            }      
        })
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error)
    }
}