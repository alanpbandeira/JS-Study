import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bf113a1fe6b76efd35d44845e805538e8b3ea6e6dc5b0e367781f0ec488d32c9'
      }
});