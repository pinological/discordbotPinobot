const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const client = new Client();
const prefix = '!';

//for flip coin
function coinflip() {
    var coinvalue = Math.floor(Math.random() * 2);
    var coin = "";
    if (coinvalue == 1) {
        coin = "Head"
    } else {
        coin = "tail"
    }
    return coin;
}

//Top seciret Hentai link generator
function givemecode() {
    var randomlink;
    var flag = true;
    while (flag) {

        randomlink = Math.floor(Math.random() * 100000);
        if (randomlink == 1 || randomlink == 0) {
            flag = true;
        } else {
            var linklink = "https://nhentai.to/g/" + randomlink;
            flag = false;
            return linklink;

        }

    }
}


//Gvalue for spr
var sprval = 0;

function spr(num) {
    sprval = 0;
    // 0 => scissor 1 => paper 2 => rock
    var random = Math.floor(Math.random() * 3);

    var messageofsis = "";
    if (num == 0 && random == 0) {
        messageofsis = " Scissor & Scissor : Draw"
        sprval = 1;
    } else if (num == 0 && random == 1) {
        messageofsis = " Scissor & Paper : You Win"
        sprval = 2;
    } else if (num == 0 && random == 2) {
        messageofsis = " Scissor & Rock : You lose"
        sprval = 0;
    } else if (num == 1 && random == 0) {
        messageofsis = " Paper & Scissor : You lose"
        sprval = 0;
    } else if (num == 1 && random == 1) {
        messageofsis = " Paper & Paper : Draw"
        sprval = 1;
    } else if (num == 1 && random == 2) {
        messageofsis = " Paper & Rock : You win"
        sprval = 2;
    } else if (num == 2 && random == 0) {
        messageofsis = " Rock & Scissor : You win"
        sprval = 2;
    } else if (num == 2 && random == 1) {
        messageofsis = " Rock & Paper : You Lose"
        sprval = 0;
    } else if (num == 2 && random == 2) {
        messageofsis = " Rock & Rock : Draw"
        sprval = 1;
    }

    return messageofsis;

}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async msg => {
    //nessted function
    function imgselect() {

        if (sprval == 0) {
            msg.channel.send("", { files: ["./resource/spr/lose.gif"] });
        } else if (sprval == 1) {
            msg.channel.send("", { files: ["./resource/spr/draw.jpg"] });
        } else {
            msg.channel.send("", { files: ["./resource/spr/win.jpg"] });
        }

    }



    if (msg.content === 'pino cat') {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        msg.channel.send(file);
    } else if (msg.content === "pino yo") {
        msg.reply("Yo whats up bruh");
        const { url } = await fetch('https://nekos.life/api/v2/img/ngif').then(response => response.json());
        msg.channel.send(url);


    } else if (msg.content === "pino") {
        msg.reply("Hello i am a discord bot made by Pinological \n I do different Type of task and to command me \n Type pino <command> \n 1: flip coin \n 2: scissor paper rock \n 3: pino cat \n 4: pino yo \n 5: pino you gay \n 6: pino link pls \n 7: pino neko \n 8: pino neko lewd \n 9: pino feet pic \n 10: pino poke \n 11: pino pat \n More are coming This is a beat version");
    }
    //Coin flip
    else if (msg.content === "pino flip coin" || msg.content === "pino Flip Coin") {
        msg.reply("Your coin is " + coinflip());
    } else if (msg.content === "pino scissor" || msg.content === "pino Scissor") {
        msg.reply(spr(0));
        //Rock paper Sisscor
        imgselect();
    } else if (msg.content === "pino paper" || msg.content === "pino Paper") {
        msg.reply(spr(1));

        imgselect();
    } else if (msg.content === "pino rock" || msg.content === "pino Rock") {
        msg.reply(spr(2));

        imgselect();

    }
    //no you Ester egg
    else if (msg.content === "pino you gay" || msg.content === "pino you gae" || msg.content === "pino u gay" || msg.content === "pino u gae") {
        msg.reply("No you");
        msg.channel.send("", { files: ["./resource/egg/nou.jpg"] });

    } else if (msg.content === "pino link please" || msg.content === "pino link pls") {
        msg.reply("Ok man");
        msg.channel.send(givemecode());

    }

    //moewmoew
    else if (msg.content === "pino neko" || msg.content === "pino biralo") {
        msg.reply("Ok man");
        const { url } = await fetch('https://nekos.life/api/v2/img/neko').then(response => response.json());
        msg.channel.send(url);
    } else if (msg.content === "pino neko lewd" || msg.content === "pino biralo kada") {
        msg.reply("you sick bastard");
        const { url } = await fetch('https://nekos.life/api/v2/img/lewd').then(response => response.json());
        msg.channel.send(url);
    } else if (msg.content === "pino feet pic" || msg.content === "pino khuta") {
        msg.reply("bruh what is wrong with you");
        const { url } = await fetch('https://nekos.life/api/v2/img/erofeet').then(response => response.json());
        msg.channel.send(url);
    } else if (msg.content === "pino poke" || msg.content === "pino Poke") {
        msg.reply("ok Poke  :D");
        const { url } = await fetch('https://nekos.life/api/v2/img/poke').then(response => response.json());
        msg.channel.send(url);
    } else if (msg.content === "pino pat" || msg.content === "pino head pat") {
        msg.reply("aww, thanks :D");
        const { url } = await fetch('https://nekos.life/api/v2/img/pat').then(response => response.json());
        msg.channel.send(url);
    }

});

client.login(process.env.token);














// const Discord = require('discord.js');
// const fetch = require('node-fetch');
// const bot = new Discord.Client();
// fetch('https://aws.random.cat/meow').then(response => response.json());
// const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());


// const token = "NzY0NDM0Njc2MzM3MDgyMzg5.X4GNRQ.xxWyCcsYQsXP5O_jg_lnpxUtxDw"; //This token is changing so dont try to mess with my bot :D <Token here>

//this is for neko
// async function getNekoImg() {


// }



// bot.on('ready', () => {
//     console.log("This is online");
// })

// bot.on('message', async msg => {
//     //nested function


// })

// bot.login(token);