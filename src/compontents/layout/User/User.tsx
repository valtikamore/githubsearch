import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

interface userPropTypes {
    avatarUrl: string
    name: string
    url: string
}

export const User = (props: userPropTypes) => {
    return (
        <div className={styles.card}>
            <img src={props.avatarUrl} alt="avatar"/>
            <h4 className={styles.title}>{props.name}</h4>
            <Link to={`/user/${props.name}`} className={styles.link}>More</Link>
        </div>
    );
};