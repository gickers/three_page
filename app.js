const express = require('express');

const app = express();

const helper = require('./helper')

app.set('view engine','ejs');

app.use(express.static('public'))

app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index', {
    });
})
app.get('/about',(req,res)=>{
    res.render('about');
    
})
app.get('/batman',(req,res)=>{
    res.render('batman');
})
app.get('/falcon',(req,res)=>{
    res.render('falcon');
})
app.get('/diagon',(req,res)=>{
    res.render('diagon');
})
app.get('/dieroll',(req,res)=>{
    res.render('dieroll', {
        helper
    });
});
app.get('/plteams',(req,res)=>{
    console.log("hello/plteams")
    const plTeams = [
        {name:'Arsenal', Stadium: 'Emirates Stadium'},
        {name:'Aston Villa', Stadium: 'Villa Park'},
        {name:'Bournemouth', Stadium: 'Vitality Stadium'},
        {name:'Brentford', Stadium: 'Gtech Community Stadium'},
        {name:'Brighton and Hove Albion', Stadium: 'American Express Stadium'},
        {name:'Burnley', Stadium: 'Turf Moor'},
        {name:'Chelsea', Stadium: 'Stamford Bridge'},
        {name:'Crystal Palace', Stadium: 'Selhurst Park'},
        {name:'Everton', Stadium: 'Goodison Park'},
        {name:'Fulham', Stadium: 'Craven Cottage'},
        {name:'Liverpool', Stadium: 'Anfield'},
        {name:'Luton Town', Stadium: 'Kenilworth Road'},
        {name:'Manchester City', Stadium: 'Etihad Stadium'},
        {name:'Manchester United', Stadium: 'Old Trafford'},
        {name:'Newcastle United', Stadium: 'St. James Park'},
        {name:'Nottingham Forrest', Stadium: 'The City Ground'},
        {name:'Sheffield United', Stadium: 'Bramall Lane'},
        {name:'Tottenham Hotspur', Stadium: 'Tottenham Hotspur Stadium'},
        {name:'West Ham United', Stadium: 'London Stadium'},
        {name:'Wolverhampton Wanderers', Stadium: 'Molineux Stadium'},
        {name:'Watford', Stadium: 'Vicarage Road'}

    ];
    res.render('plteams', {plTeams: plTeams});
    
})



