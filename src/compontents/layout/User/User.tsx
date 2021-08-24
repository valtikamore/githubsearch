import React from 'react';
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
            <a href={props.url} className={styles.link}>More</a>
        </div>
    );
};