const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = 5000;
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

function setResponse(username, data){
    return `<h2>${username} has ${data} GitHub repos</h2>`;
}


//make request to github to get the data for the first time
async function getData(req, res, next){
    try{
        console.log('Fetching data........');
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        const repos = data.public_repos;

        //set data to redis
        client.setex(username, 3600, repos);

        res.send(setResponse(username, repos));
    }catch(err){
        console.log(err);
        res.status(500);
    }
}


//cache middleware
function cache(req, res, next){
    const { username } = req.params;

    client.get(username, (err,data)=>{
        if(err) throw err;
        if(data !== null)
            res.send(setResponse(username, data));
        else
            next();
    })
}


app.get('/repos/:username', cache, getData);

app.listen(PORT,()=>{
    console.log('Server is running on ', PORT);
});