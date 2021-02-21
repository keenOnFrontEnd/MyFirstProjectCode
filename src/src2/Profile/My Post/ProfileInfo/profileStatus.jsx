import { findAllByAltText } from '@testing-library/react';
import React from 'react';
import { activeDeactiveModeChangerThisState } from '../../../../utils/helpers/ActiveDeactiveChangerThisState';





class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
       
        this.setState({
            editMode: true
        })

    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if(this.state.status.length > 300 ) {
            alert('max status lenght 300')
        } else {this.props.updateStatus(this.state.status);}
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevStatus) {
        if(prevProps.status !== this.state.status) {
        this.setState({status: status
        
        })
    }
    }

    render() {
        let {status,updateStatus} = this.props;
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange = {this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    };
};

export default ProfileStatus;