import React, {ChangeEvent, Component , FormEvent} from 'react';

interface PropsType {
    searchUsers:(text:string) => void
    clearUsers:() => void
    showClear:boolean
    errorMessage:(message:string) => void
}

export class Search extends Component <PropsType,{}> {
    state = {
        text:''
    }
    onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(this.state.text === '') {
            this.props.errorMessage('enter any value')
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({text:''})
        }
    }

    onChange = (e:ChangeEvent<HTMLInputElement>) => this.setState({[e.target.name]: e.target.value})

    render() {
        const {searchUsers,clearUsers,showClear} = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name={'text'}
                        placeholder={'Search Users...'}
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value={'Search'}/>
                </form>
                {showClear && <button onClick={() => clearUsers()}>Clear</button>}

            </div>
        );
    }
};