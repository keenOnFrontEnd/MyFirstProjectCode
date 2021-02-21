import userIcon from '../files/photos/user_icon.jpg';
import { Profile_API } from "../api/api";
const DELETE_POST = 'DELETE-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_ID = 'SET_USER_ID';
const LIKE = 'LIKE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTOS_SUCCESS';

let initilialState = {
    postsData: [
        { id: 0, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 1, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 2, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 3, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 4, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
    ],
    profile: null,
    status: "",
    profilePhoto: null,


};


const profileReducer = (state = initilialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.post,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_ID: {
            return { ...state, id: action.id }
        }
        case LIKE: {
            debugger;
            let likedObject = {...state.postsData.filter((p) => p.id === action.id)};
            return console.log(likedObject);
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            debugger;
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;

    }
};
export const deletePost = (postId) => ({ type: DELETE_POST, postId }) // создание действия 
export const addPostActionCreator = (post) => ({ type: ADD_POST, post });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserID = (id) => ({ type: SET_USER_ID, id })
export const objectLike = (id, action) => ({ type: LIKE, id, action })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let responce = await Profile_API.getUsersProfile(userId)
        dispatch(setUserProfile(responce.data))
    }
}
export const getStatus = (userId) => async (dispatch) => {
    let responce = await Profile_API.getStatus(userId)
    dispatch(setStatus(responce.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let responce = await Profile_API.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let responce = await Profile_API.updateProfilePhoto(file)
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccess(responce.data.data.photos));
    }
}

export const likeObject = (id,action) => (dispatch) => {
    debugger;
    return dispatch(objectLike(id,action))

}
export default profileReducer;