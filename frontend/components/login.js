import React, { Component } from 'react'
import styles from '../styles/index.module.css'

export default class Login extends Component {

    constructor(props) {

        super(props);

        this.elements = "";
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(json => {

            this.elements = json[0]["Data"];
            this.forceUpdate();

        });

        console.log(this.elements);

    }

    render() {

        return (
            <div>
                <div className={styles.login}>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
        );

    }

}