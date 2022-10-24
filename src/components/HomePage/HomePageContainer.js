import {connect} from "react-redux";
import HomePage from "./HomePage";
import {getNewsItemTC, getNewsTC} from "../../redux/NewsReducer";

let mapStateToProps = (state) => {
    return {
        news: state.news.news,
        newsItems: state.news.newsItems,
        isFetching: state.news.isFetching
    }
}

export default connect(mapStateToProps, {getNewsTC, getNewsItemTC})(HomePage);