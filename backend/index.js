import express from 'express'
import mysql from "mysql2"
import cors from 'cors'

const app = express()
const db = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1qaz2wsx',
    database:'book'

})

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.json('this is a response')
})

app.get('/books', (req,res)=>{
    const q = 'select * from books'
    db.query(q,(error,data)=>{
        if(error) return res.json(error)
        return res.json(data)
    })
})

app.post('/books',(req,res)=>{
    const q = 'insert into books (`title`, `desc`, `coverpic`) values (?)'
    const values = [req.body.title, req.body.desc, req.body.coverpic]
    db.query(q, [values], (error, data)=>{
        if(error) return res.json(error)
        return res.json('book has been created')
    }) 
})

app.put('/books:id',(req,res)=>{

    const bookid = req.params.id
    const q = 'update books set `title` = ?, `desc` = ?, `coverpic` = ? where id = ? '
    const values = [req.body.title, req.body.desc, req.body.coverpic]
    db.query(q, [...values, bookid], (error, data)=>{
        if(error) return res.json(error)
        return res.json('book has been updated')
    }) 
})

app.delete("/books:id", (req,res)=>{

    const bookid = req.params.id
    const q = 'delete from books where id = ?'

    db.query(q, [bookid], (err,data)=>{
        if (err) return res.json('book wasnt found')
        return res.json('book has been deleted')
    })
})

app.listen(8800, ()=>{
    console.log('backend is running...') 
})