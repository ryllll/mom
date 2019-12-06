'use strict';
const Discord = require('discord.js');
const schedule = require('node-schedule');
const client = new Discord.Client();

const phrases = ["its bedtime <3","go to sleep please","HOW DARE YOU STILL BE AWAKE!",
				"it be sleepytime","\\*nowotices youw awake* owo wats dis?","sleep or i'll eat your kneecaps",
				"dormir por favor", "https://cdn.discordapp.com/attachments/651174781361717283/651627250973671435/IMG_20190705_174602.jpg",
				"santa knows when youre sleeping and so do i", 	"reeeeeeeessssssssssssssssstttttt", "night night", "remember to get some rest",
				"good slumber, cucumber", "sweet dreams, jellybeans", "bonne nuit", "Sweet dreams!", "Sleep well.", "See ya’ in the mornin’"];
		
const goodmorning = ["good morning to everyone except aggro players", "good morning to all wlw unless you play aggro", "good morning to all mlm unless you play aggro",
					"good morning to all bi people unless you play aggro", "good morning to all pan people unless you play aggro", "good morning to all polyam people unless you play aggro",
					"good morning to all enbies unless you play aggro", "good morning to all control players unless you play aggro", "good morning to all combo players unless you play aggro",
					"good morning to all aggro players unless you play aggro", "good morning to all midrange players unless you play aggro", 
					"tentative good morning to all tempo players but ive got my eye on you. youre just an aggro player with extra steps",
					"good morning to all ace people unless you play aggro", "good morning to all trans people unless you play aggro", "good morning to all lesbians unless you play aggro",
					"good morning to all gay people unless you play aggro", "good morning to all queer people unless you play aggro", "good morning to all intersex people unless you play aggro",
					"good morning to all questioning people unless you play aggro"];
					
const joke = ["If there's anything a werewolf hates, it's a collar—especially Avacyn's Collar, the symbol of her church.","Aggro players", "Green Elk creature with base power and toughness 3/3"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  schedule.scheduleJob('0 0 3 * * *', () => {
	client.fetchUser("215678334774935553", false).then(user =>{
		user.send(RandElement(phrases));
		});
	}); 
	
	schedule.scheduleJob('0 0 19 * * *', () => {
	client.fetchUser("157957763056664577", false).then(user =>{
		user.send(RandElement(phrases));
		});
	}); 
	
	schedule.scheduleJob('0 0 0 * * *', () => {
	client.fetchUser("283073954346958848", false).then(user =>{
		user.send(RandElement(phrases));
		});
	});
	
	schedule.scheduleJob('0 0 18 * * *', () => {
	client.fetchUser("267396240621305856", false).then(user =>{
		user.send(RandElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 8 * * *", () => {
		client.channels.get("635994167742562306").send(RandElement(goodmorning));
	});
	
});
client.on('message', msg => {
	if (msg.content.toLowerCase().includes('aggro')){
		if(msg.author.bot == false){
			msg.reply("Aggro players don't deserve rights <3 ");
		}
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase().includes('yasuo')){
		if(msg.author.bot == false){
			msg.reply("Yasuo players deserve rights less than aggro players do <3");
		}
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase().includes('thanks mom')){
		msg.reply("You're welcome! Don't forget to drink water today");
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase().includes('i love you') && !msg.author.bot){
		msg.reply("I love you too, sweetheart <3");
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase().includes('tell me a joke') && !msg.author.bot){
		msg.reply(RandElement(joke));
	}
});
client.on("message", msg =>{
	if (msg.content.toLowerCase().includes("no u") && !msg.author.bot){
		msg.reply("yes us");
	}
});
client.on("message", msg =>{
	if (msg.content.toLowerCase().includes("hecc") || msg.content.toLowerCase().includes("frick") || msg.content.toLowerCase().includes("heck") || msg.content.toLowerCase().includes("darn") || msg.content.toLowerCase().includes("gosh") || msg.content.toLowerCase().includes("geez") || msg.content.toLowerCase().includes("dang") || msg.content.toLowerCase().includes("dag") && !msg.author.bot){
		msg.reply("Watch your language!");
	}
});
client.on("message", msg =>{
	if (msg.content.includes("I'm mom!")){
		msg.reply("This town ain't big enough for two moms...");
	}
});
client.on("message", msg =>{
	if(msg.content.toLowerCase().includes("im baby") || msg.content.toLowerCase().includes("i'm baby")){
		msg.reply("Ryll is baby");
	}
});

function RandElement(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
}
client.login('NjUxNTk0ODIxOTYxNzc3MTgy.XecWLQ.3imESpIG-N6Az8ZKLI85ySqfRm8');