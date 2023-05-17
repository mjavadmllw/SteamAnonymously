const steamuser = require('steam-user');

const client = new steamuser;

const logOnOptions = {
    anonymous: true
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log(`'signed in to steam in anonymous mode`);
});

client.on('error',(err)=>{
    console.log(`You have an error: ${err}`)
})