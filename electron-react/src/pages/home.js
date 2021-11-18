import React, { Component } from 'react'
import styles from '../styles.module.css'

export default class Home extends Component {

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
                <div>
                    <ul className={styles.login}>
                        <li style={ {listStyleType: "none" } }><input type="text" placeholder="Username"></input></li>
                        <li style={ {listStyleType: "none" } }><input type="password" placeholder="Password"></input></li>
                    </ul>
                </div>
            </div>

        
        );

    }

}