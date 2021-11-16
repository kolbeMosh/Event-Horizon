import React, { Component } from 'react'

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
        
            <li>{this.elements}</li>
        
        );

    }

}