import axios from 'axios';


const loginAPI = async (data: any)=> {
    return await axios.post('/api/nft/user/doLogin', {
        ...data
    })
}
const getUserInfoAPI = async (data: any)=> {
    return await axios.get('/api/nft/user/getUserInfoById', {
        ...data
    })
}
export {
    loginAPI,
    getUserInfoAPI
}