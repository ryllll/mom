"use strict";
const Discord = require("discord.js");
const schedule = require("node-schedule");
const client = new Discord.Client();

const phrases = require("./config/phrases.json");
const goodmorning = require("./config/goodmorning.json");
const joke = require("./config/jokes.json");
const responses = require("./config/responses.json");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	schedule.scheduleJob("0 0 3 * * *", () => {
		client.fetchUser("215678334774935553", false).then(user => {
			user.send(randElement(phrases));
		});
	}); 
	
	schedule.scheduleJob("0 0 19 * * *", () => {
		client.fetchUser("157957763056664577", false).then(user => {
			user.send(randElement(phrases));
		});
	}); 
	
	schedule.scheduleJob("0 0 0 * * *", () => {
		client.fetchUser("283073954346958848", false).then(user => {
			user.send(randElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 18 * * *", () => {
		client.fetchUser("267396240621305856", false).then(user => {
			user.send(randElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 8 * * *", () => {
		client.channels.get("635994167742562306").send(randElement(goodmorning));
	});
	
});

client.on("message", (msg) => {
	if (msg.content.toLowerCase().includes("tell me a joke") && !msg.author.bot) {
		msg.reply(randElement(joke));
	}
});

client.on("message", (msg) => {
	if ((msg.content.toLowerCase().includes("hecc") ||
		msg.content.toLowerCase().includes("frick") ||
		msg.content.toLowerCase().includes("heck") ||
		msg.content.toLowerCase().includes("darn") ||
		msg.content.toLowerCase().includes("gosh") ||
		msg.content.toLowerCase().includes("geez") ||
		msg.content.toLowerCase().includes("dang") ||
		msg.content.toLowerCase().includes("dag")) && !msg.author.bot) {
		msg.reply("Watch your language!");
	}
});

client.on("message", (msg) => {
	if ((msg.content.toLowerCase().includes("im baby") ||
		msg.content.toLowerCase().includes("i'm baby")) && !msg.author.bot) {
		msg.reply("Ryll is baby");
	}
});

client.on("message", (msg) => {
	if (!msg.author.bot) {
		for (const call in responses) {
			if (msg.content.toLowerCase().includes(call)) {
				msg.reply(responses[call]);
			}
		}
	}
});

function randElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
client.login("NjUxNTk0ODIxOTYxNzc3MTgy.XecWLQ.3imESpIG-N6Az8ZKLI85ySqfRm8");