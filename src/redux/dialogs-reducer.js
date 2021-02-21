
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_ACT_DIALOG = 'UPDATE_ACT_DIALOG';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrzej Duda' },
        { id: 2, name: 'Ivaszczenko Dmytro' },
        { id: 3, name: 'Aleksej Kravczuk' },
        { id: 4, name: 'Veronika Zalewskaja' },
    ],
    messagesData: [ ],
    actDialogID: 1,

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case SEND_MESSAGE: {
            let getTime = new Date().toLocaleTimeString().slice(0, -3);
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, time: getTime, message: body }],
                body: ''
            };
        }
        case UPDATE_ACT_DIALOG: {
            return{
                ...state,
                actDialogID: action.actDialogID
            }
        }
          default:
            return state;

    }
}

export let updateActDialogAC = (actDialogID) => ({type: UPDATE_ACT_DIALOG, id: actDialogID});
export const SendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;