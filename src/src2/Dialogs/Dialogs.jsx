import React from 'react' ;
import s from './Dialogs.module.css';
import DialogListContainer from './DialogList/DialogList';
import ActDialogContainer from './ActDialog/ActDialogContainer';

  
const Dialogs = (props) => {
   
    
    
    return(
        <div className={s.main_dialogs_wrapper}>
         <div><DialogListContainer /></div>
          <div><ActDialogContainer /></div>
        </div>
    )
};


export default Dialogs;











