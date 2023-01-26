import DarkMode from "./Mode.js"
import UserViewedPage from "./UserView.js";
import {combineReducers} from "redux"

const Allreducer = combineReducers({
    DarkMode : DarkMode,
    UserViewedPage : UserViewedPage,
})

export default Allreducer ;