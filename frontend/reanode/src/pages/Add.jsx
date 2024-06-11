import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [book, setbook] = useState({
        title: '',
        desc: '',
        coverpic: '',
    })

    const handlechange = (e) => {
        setbook((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()

    const handleclick = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/books', book)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1 className="h1">add a new book</h1>
            <input type="text" placeholder="title" onChange={handlechange} name="title" />
            <input type="text" placeholder="description" onChange={handlechange} name="desc" />
            <input type="text" placeholder="cover picture" onChange={handlechange} name="coverpic" />
            <button onClick={handleclick}>submit book</button>
        </div>
        
    )
}

