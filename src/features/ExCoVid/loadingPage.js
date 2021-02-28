import React, { Component } from 'react'
import Img from "./1.gif"

export default class loadingPage extends Component {
    render() {
        const {loading} = this.props
        let downLoading = Img
        if(loading === false) {
            downLoading = ""
        }
        return (
            <div className="loading-page">
                <img src={downLoading} ></img>
            </div>
        )
    }
}
