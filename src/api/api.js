import axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

export const api = {
    getNews() {
        return instance.get(`newstories.json?print=pretty`)
            .then(responsive => responsive.data)
    },
    getNewsItem(newsId) {
        return instance.get(`item/${newsId}.json?print=pretty`)
            .then(responsive => responsive.data)
    }
}
