import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Iz9Fa8HXmnzaTMUha-mkehAgf-TefwWpdlrdau3bGJM'
    }
})