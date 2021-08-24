import React from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import {User} from "../User/User";
import styles from './styles.module.scss'

interface UserType {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: ''
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

interface UsersPropsType {
    users:UserType[]
    loading:boolean
}

export const UsersList = (props:UsersPropsType) => {
    const {users , loading} = props
    if(loading) {
        return <Preloader/>
    } else {
        return (
            <div className={styles.grid}>
                {users.map(({id,avatar_url,login,html_url}) => {
                    return <User key={id} avatarUrl={avatar_url} name={login} url={html_url}/>
                })}
            </div>
        );
    }

};