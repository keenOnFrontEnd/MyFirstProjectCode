import React from 'react';
import { activeDeactiveModeChangerThisState } from '../../../../utils/helpers/ActiveDeactiveChangerThisState';
import { PostConnectedCont } from './Post';


class PostContainer extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        let modeSide = true;
        activeDeactiveModeChangerThisState(modeSide)
    }
    
    deactivateEditMode = () => {
        let modeSide = false;
        activeDeactiveModeChangerThisState(modeSide)
    }

    render () {
        return (
           <PostConnectedCont {...this.props} /> 
        )
    }
}


export default PostContainer;
