import React, { Component } from 'react'
import axios from "axios"
import LoadingPage from "./loadingPage.js"
import "./index.css"

export default class index extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,  
            data: [],
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.searchData = this.searchData.bind(this)
    }
    
    async componentDidMount() {
        setTimeout(()=>{
            axios.get("https://api.covidtracking.com/v1/us/daily.json")
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
            })
        }, 2000)
    }

    handleChange(event){
        const { value } = this.state
        this.setState({value: event.target.value});
    }

    searchData() {
        const { data, value } = this.state
        let a = /[0-9]/g
        /*
        console.log(value.match(a))
        console.log(value, value.charCodeAt(value.length - 1))
        */
    }

    render() {
        const { data, loading, value } = this.state
        console.log(data)
        return (
            <div>
                <LoadingPage loading = {loading} ></LoadingPage>
                <div className="search-front">
                    <input pattern="/[0-9]/g" maxlength = '10' placeholder="yyyy/mm/dd" value={value} onChange={this.handleChange}></input>
                    <button onClick={this.searchData}>Search ...</button>
                </div>
                <div>
                    {'' && data[0].date }
                </div>
            </div>
        )
    }
}
