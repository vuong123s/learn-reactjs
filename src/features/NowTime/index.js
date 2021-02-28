import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./index.css"

export default function Index() {
    const [time, setTime] = useState("aaa")

    useEffect(() => {
        axios.get("http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh")
            .then(res => {
                setTime(res.data)
            })
    })
    return (
        <div className="time">
            {time.datetime}
        </div>
    )
}
