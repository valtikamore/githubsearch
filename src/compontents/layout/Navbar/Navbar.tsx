import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

interface PropsType {
    title: string
    children: any
}

export class Navbar extends Component<PropsType, {}> {
    render() {
        return (
            <nav className={styles.wrapper}>
                <div className={styles.box}>
                    {this.props.children}
                    {this.props.title}
                </div>
                <ul>
                    <li>
                        <Link to={'/home'}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            ABOUT
                        </Link>

                    </li>
                </ul>
            </nav>
        )
    }
}