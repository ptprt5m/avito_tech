import {connect} from "react-redux";
import NewsPage from "./NewsPage";
import {getCurrentNewsItemTC} from "../../redux/NewsReducer";

let mapStateToProps = (state) => {
    return {
        isFetchingCurrentItem: state.news.isFetchingCurrentItem,
        currentNewsItem: state.news.currentNewsItem
    }
}

export default connect(mapStateToProps, {getCurrentNewsItemTC})(NewsPage);