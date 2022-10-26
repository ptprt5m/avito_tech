import {api} from "../api/api";

const SET_NEWS = 'news/SET_NEWS';
const SET_NEWS_ITEM = 'news/SET_NEWS_ITEM';
const SET_COMMENTS = 'news/SET_COMMENTS';
const CLEAR_NEWS = 'news/CLEAR_NEWS';
const CLEAR_COMMENTS = 'news/CLEAR_COMMENTS';
const SET_CURRENT_NEWS_ITEM = 'news/SET_CURRENT_NEWS_ITEM';
const TOGGLE_IS_FETCHING = 'news/TOGGLE_IS_FETCHING';

let initialState = {
    news: [],
    newsItems: [],
    currentNewsItem: {
        kids: []
    },
    comments: [],
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
        case CLEAR_COMMENTS: {
            return {
                ...state,
                comments: []
            }
        }
        case SET_CURRENT_NEWS_ITEM: {
            return {
                ...state,
                currentNewsItem: action.newsItem
            }
        }
        case SET_COMMENTS: {
            return {
                ...state,
                comments: [...state.comments, action.comment]
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
export const setComments = (comment) => ({type: SET_COMMENTS, comment})
export const setCurrentNewsItem = (newsItem) => ({type: SET_CURRENT_NEWS_ITEM, newsItem})
export const clearNews = () => ({type: CLEAR_NEWS})
export const clearComments = () => ({type: CLEAR_COMMENTS})
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
        dispatch(clearComments())
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

export const getCommentsTC = (commentId) => {
    return async (dispatch) => {
        dispatch(clearComments())
        let response = await api.getNewsItem(commentId)
        dispatch(setComments(response))
    }
}

export default newsReducer;