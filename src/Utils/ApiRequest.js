import { RequestFanbusy } from "../Services";

const request = async (access_token) => {
    let bookmarks = [];

    let res = await RequestFanbusy('/', 'GET', '', access_token);
    if (res.status === 200) {
        bookmarks = res.response.data;
    }
    
    return bookmarks;
}

export { request }