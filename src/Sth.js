import React, { Component } from 'react'

export default class Sth extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>Sth:{JSON.stringify(this.props)}</div>
        )
    }
}
