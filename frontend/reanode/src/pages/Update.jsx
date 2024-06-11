

import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";

export default function Update() {

    const [book, setbook] = useState({
        title: '',
        desc: '',
        coverpic: '',
    })

    const handlechange = (e) => {
        setbook((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const handleclick = async (e) => {
        e.preventDefault()
        try {
            await axios.put('http://localhost:8800/books'+id, book)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1 className="h1">update book</h1>
            <input type="text" placeholder="title" onChange={handlechange} name="title" />
            <input type="text" placeholder="description" onChange={handlechange} name="desc" />
            <input type="text" placeholder="cover picture" onChange={handlechange} name="coverpic" />
            <button onClick={handleclick}>update book</button>
        </div>
        
    )
}

