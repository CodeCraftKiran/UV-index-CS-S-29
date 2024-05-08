import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const APIKey = "";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/', async(req, res) => {
    try{
        const Longitude = req.body.lng;
        const latitude = req.body.lat;
        const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${Longitude}`, {
            headers: { 
                "x-access-token": APIKey,
            }    
        });
        const result = response.data.result.uv_max;
        console.log(typeof(result))
        res.render('index.ejs', {message:result});
    } catch(error) {
        console.error("There is a error buddy!!!", error.message)
        res.render("index.ejs", {message: error.message})
    }
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING OF PORT ${port}`);
})