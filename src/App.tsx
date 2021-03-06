import React , {Component} from 'react';
import {Navbar} from "./compontents/layout/Navbar/Navbar";
import {AiFillGithub} from 'react-icons/ai'
import axios from "axios";
import {UsersList} from "./compontents/layout/UsersList/UsersList";
import {Search} from "./compontents/common/Search/Search";
import {Alert} from "./compontents/common/Alert/Alert";
import {Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {UserPage} from "./pages/UserPage/UserPage";


interface stateTypes {
    users:[]
    loading:boolean
    error: null | string
    user:{}
}

class App extends Component<{}, {}>{
    state:stateTypes = {
        users:[],
        user:{},
        loading:false,
        error:null
    }

    async componentDidMount () {
        this.setState({loading:true})
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        this.setState({users:res.data,loading:false})
    }

    searchUsers = async (text:string) => {
        this.setState({loading:true})
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        this.setState({users:res.data.items,loading:false})
    }
    clearUsers = () => {
        this.setState({users:[]})
    }
    errorMessage = (message:string) => {
        this.setState({error:message})
        setTimeout(() => this.setState({error:null}),5000)
    }
    getUser = async (username:string) => {
        this.setState({loading:true})
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        this.setState({user:res.data,loading:false})
    }
    render() {
    const {users,loading,user} = this.state
    return (
        <div>

            <Switch>
                <Route path={'/'} exact render={props => (
                    <>
                        <Navbar title={'React github finder'}>
                            <AiFillGithub/>
                        </Navbar>
                        <Alert error={this.state.error}/>
                        <Search searchUsers={this.searchUsers}
                                errorMessage={this.errorMessage}
                                clearUsers={this.clearUsers}
                                showClear={this.state.users.length > 0}/>
                        <UsersList users={users} loading={loading}/>
                    </>
                )}/>
                <Route path={'/home'} render={props => (<Home/>)}/>
                <Route path={'/user/:login'} render={props => (<UserPage {...props} getUser={this.getUser} user={user} loading={loading}/>)}/>
            </Switch>

        </div>
    );
  }

}

export default App;
