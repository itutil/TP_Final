const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
function hide() {
    document.getElementById("hidden").style.display = "none";

    // to do an autoclick to class "checkbtn"
    document.getElementsByClassName("checkbtn")[0].click();
  }