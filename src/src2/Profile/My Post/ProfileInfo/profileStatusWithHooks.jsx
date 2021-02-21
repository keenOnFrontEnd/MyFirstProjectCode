import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';





const ProfileStatusWithHooks = ({updateStatus,...props}) => {


let [editmode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect( () => {
setStatus(props.status)
},[props.status])

const activateEditMode = () => {
    setEditMode(true);
}
const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}
    return (
        <div>
            {!editmode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            {editmode &&
                <div>
                    <input
                    value={status}
                onBlur= {deactivateEditMode}
                onChange={onStatusChange}
                        autoFocus={true}
                       ></input>
                </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;