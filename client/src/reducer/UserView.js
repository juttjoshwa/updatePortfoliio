const UserViewedPage = (state = 0, action) => {
    if(action.type = "INCREEMENT"){
        return state + 1
    }
    return state;
}
export default UserViewedPage;