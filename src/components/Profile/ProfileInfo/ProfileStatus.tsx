import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <b>Status: </b><span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deActivateEditMode}
                               value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}