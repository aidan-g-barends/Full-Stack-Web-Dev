import express from 'express'; 
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Aidan Barends</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello Aidan Barends, About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Hello Aidan Barends, Contact Page</h1>");
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');  
});