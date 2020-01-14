"use strict";
const Discord = require("discord.js");
const schedule = require("node-schedule");
const client = new Discord.Client();

const phrases = require("./config/phrases.json");
const goodmorning = require("./config/goodmorning.json");
const joke = require("./config/jokes.json");
const responses = require("./config/responses.json");
const dickSucking = require("./config/dickSucking.json");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	schedule.scheduleJob("0 0 3 * * *", () => {
		client.fetchUser("215678334774935553", false).then(user => {
			user.send("youre a cutie and i love spending time with you");
		});
	}); 
	
	schedule.scheduleJob("0 0 19 * * *", () => {
		client.fetchUser("157957763056664577", false).then(user => {
			user.send(randElement(phrases));
		});
		/*client.fetchUser("158750128679813120", false).then(user => {
			user.send(randElement(dickSucking));
		});*/
	}); 
	
	schedule.scheduleJob("0 0 0 * * *", () => {
		client.fetchUser("283073954346958848", false).then(user => {
			user.send(randElement(phrases));
		});
		client.fetchUser("265327726213332992", false).then(user => {
			user.send(randElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 1 * * *", () => {
		client.fetchUser("265327726213332992", false).then(user => {
			user.send(randElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 16 * * *", () => {
		client.fetchUser("267396240621305856", false).then(user => {
			user.send(randElement(phrases));
		});
	});
	
	schedule.scheduleJob("0 0 8 * * *", () => {
		client.channels.get("635994167742562306").send(randElement(goodmorning));
	});
	
	schedule.scheduleJob("0 0 21 * * *", () => {
		client.fetchUser("158750128679813120", false).then(user => {
			user.send(randElement(dickSucking));
		});
	});
	
	schedule.scheduleJob("0 0 13 * * *", () => {
		client.fetchUser("158750128679813120", false).then(user => {
			user.send("Remember to eat food today <3");
		});
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
	if ((msg.content.toLowerCase().includes("kms") ||
	msg.content.toLowerCase().includes("kill myself") ||
	msg.content.toLowerCase().includes("i wanna die") ||
	msg.content.toLowerCase().includes("i want to die") ||
	msg.content.toLowerCase().includes("toaster bathtub") ||
	msg.content.toLowerCase().includes("slit my wrists") ||
	msg.content.toLowerCase().includes("unliving") || 
	msg.content.toLowerCase().includes("commit suicide") && !msg.author.bot)) {
		msg.reply("You are important and your life is precious. Here are some resources: \n" +
		"**USA National Suicide Prevention Lifeline:** 1-800-273-8255 \n " +
		"**Samaritans Crisis Line United Kingdom:** 116 123");
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
client.login(require(".\\secret.json").discord);