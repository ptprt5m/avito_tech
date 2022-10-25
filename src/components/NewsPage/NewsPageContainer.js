import {connect} from "react-redux";
import NewsPage from "./NewsPage";
import {getCommentsTC, getCurrentNewsItemTC} from "../../redux/NewsReducer";

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,
        comments: state.news.comments,
        currentNewsItem: state.news.currentNewsItem
    }
}

export default connect(mapStateToProps, {getCurrentNewsItemTC, getCommentsTC})(NewsPage);