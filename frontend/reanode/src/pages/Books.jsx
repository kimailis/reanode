import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Books() {
    const [books, setbooks] = useState([])

    useEffect(() => {
        const fetchbooks = async () =>{
            try {
                const res = await axios.get('http://localhost:8800/books')
                setbooks(res.data)
                
            }
            catch(err){
                console.log(err)
            }
        }
        fetchbooks()}
    
    ,[])

    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:8800/books'+id)
            window.location.reload()
        } catch (error) {
            console.log(error + ' incorrect endpoint')
        }
    }

    return(
        <div className="bookspage">
        <div className="books">
            {books.map((book=>(
                <div className="bookcard" key={book.id}>
                    <img src={book.coverpic} alt='' className="coverpic"/>
                    <div className="bookcont">
                        <h3 className="bookheader">{book.title}</h3>
                        <div className="desc">{book.desc}</div>
                        <div className="bookbuttons">
                            <button className="bookbutton"><Link to={`/update/${book.id}`}>update</Link></button>
                            <button className="bookbutton" onClick={()=>handledelete(book.id)}>delete</button>
                        </div>
                    </div>
                </div>
                )

            ))

            }
        </div>
        <button className="button"><Link to='/add'>add a book</Link></button>
        </div>
    )
}

