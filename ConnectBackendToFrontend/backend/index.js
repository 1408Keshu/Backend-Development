import express from 'express';

const app = express();

app.get('/',(req,res) =>{
    res.send("Server is ready");
});
app.get('/api/jokes',(req,res) =>{
    // res.send("Server is ready");
    const jokes= [
        {
            "id":1,
            "title":"A joke",
            "Content": "This is a joke"
        },
        {
            "id":2,
            "title":"A joke2",
            "Content": "This is a joke"
        },
        {
            "id":3,
            "title":"A joke3",
            "Content": "This is a joke"
        },
        {
            "id":4,
            "title":"A joke4",
            "Content": "This is a joke"
        },
        {
            "id":5,
            "title":"A joke5",
            "Content": "This is a joke"
        },


    ]
    res.send(jokes);
});
const port = process.env.PORT || 3000 ;

app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);
})
