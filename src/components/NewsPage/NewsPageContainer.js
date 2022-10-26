import {connect} from "react-redux";
import NewsPage from "./NewsPage";
import {getCurrentNewsItemTC} from "../../redux/NewsReducer";

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,
        currentNewsItem: state.news.currentNewsItem
    }
}

export default connect(mapStateToProps, {getCurrentNewsItemTC})(NewsPage);