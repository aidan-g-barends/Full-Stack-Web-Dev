import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  username:"postgres",
  host:"localhost",
  database:"world",
  password:"waynie2.0",
  port: 5432
});
    
db.connect(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


//insert new country
app.post("/add", async( req,res) =>{
  const input = req.body["country"];

  const results = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [input]);

  if(results.rows.length !==0){
    const data = results.rows[0];
    const countryCode = data.country_code;

    await db.quert("INSERT INTO visited_countries (country_code) VALUES ($1)",[
      countryCode,
    ]);
    res.redirect("/");
  }
  
});




app.get("/", async (req, res) => { 
  //Write your code here.
  
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];

  results.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  console.log(results.log);
  res.render("index.ejs", {countries: countries, total:countries.length});

  db.end();
  });
  
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
