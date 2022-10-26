"use strict";
import axios, * as others from 'axios';

interface ResponseData {
    fact: string;
    length: number;
}

export async function getRequest(url: string) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const data: ResponseData = response.data;
            console.log(response.data);
        } else {
            throw response.data;
        }
    } catch (error) {
        console.error(error);
    }
}