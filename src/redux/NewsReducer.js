import {api} from "../api/api";

const SET_NEWS = 'news/SET_NEWS';
const SET_NEWS_ITEM = 'news/SET_NEWS_ITEM';
const CLEAR_NEWS = 'news/CLEAR_NEWS';
const SET_CURRENT_NEWS_ITEM = 'news/SET_CURRENT_NEWS_ITEM';
const TOGGLE_IS_FETCHING = 'news/TOGGLE_IS_FETCHING';

let initialState = {
    news: [],
    newsItems: [],
    currentNewsItem: {
        kids: []
    },
    isFetching: false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_NEWS: {
            return {
                ...state,
                news: action.news.slice(0, 100)
            };
        }
        case CLEAR_NEWS: {
            return {
                ...state,
                newsItems: []
            }
        }
        case SET_CURRENT_NEWS_ITEM: {
            return {
                ...state,
                currentNewsItem: action.newsItem
            }
        }
        case SET_NEWS_ITEM: {
            return {
                ...state,
                newsItems: [...state.newsItems, action.newsItem]
            }
        }
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news})
export const setNewsItem = (newsItem) => ({type: SET_NEWS_ITEM, newsItem})
export const setCurrentNewsItem = (newsItem) => ({type: SET_CURRENT_NEWS_ITEM, newsItem})
export const clearNews = () => ({type: CLEAR_NEWS})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getNewsTC = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await api.getNews()
        dispatch(setNews(response))
        dispatch(toggleIsFetching(false))
    }
}

export const getNewsItemTC = (newsItem) => {
    return async (dispatch) => {
        dispatch(clearNews())
        let response = await api.getNewsItem(newsItem)
        dispatch(setNewsItem(response))
    }
}

export const getCurrentNewsItemTC = (newsItem) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await api.getNewsItem(newsItem)
        dispatch(setCurrentNewsItem(response))
        dispatch(toggleIsFetching(false))
    }
}

export default newsReducer;