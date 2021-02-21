import { Users_API } from "../api/api";
import { UpdateObjectArray } from '../utils/helpers/updateObjectArray';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const ONLINE_FRIENDS_ADD = 'ONLINE_FRIENDS_ADD';



let initilialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    friendslist: []
};

const usersReducer = (state = initilialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: UpdateObjectArray(state.users, action.userID, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: UpdateObjectArray(state.users, action.userID, "id", { followed: false })
            }
        case ONLINE_FRIENDS_ADD:
        
            return{
                ...state,
                friendslist: action.users_array,
            }
      
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;

    }
};
export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgres = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })
export const onlineFriendsAdd = (users_array) => ({type: ONLINE_FRIENDS_ADD, users_array})


export const requestUsers = (page, pageSize) => {

    return async (dispatch) => {

        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await Users_API.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator, listUpdater) => {
    dispatch(toggleFollowingProgres(true, userID));
    let data = await apiMethod(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))

    }
    
    dispatch(toggleFollowingProgres(false, userID));

}



export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, Users_API.Follow.bind(Users_API), followSuccess)
      
        console.log(initilialState.users)
    }
}
export const unfollow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, Users_API.unFollow.bind(Users_API), unfollowSuccess)
    }
}

export const friendsThunk = () => {
    return async (dispatch) => {
        let data = await Users_API.getUsers();
  
        let data_array = data.items
      
        let new_data = data_array.filter(element => element.followed === true)
    
        dispatch(onlineFriendsAdd(new_data)) 
      
    }
}
export default usersReducer;