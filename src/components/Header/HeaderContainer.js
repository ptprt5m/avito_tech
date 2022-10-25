import {connect} from "react-redux";
import {getNewsTC} from "../../redux/NewsReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {getNewsTC})(Header);