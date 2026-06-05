export const calls = [

	{
		id: "call_meyer_1",
		title: "Ms. Meyer (Accounting)",
		startNode: "root",
		nodes: {
			root: {
				text: "Mr. Müller! My screen is black! I haven't done ANYTHING! The balance sheets need to go out in 10 minutes!.\n\nShe sounds panicked. You hear frantic clicking.",
				opts: [
					{ t: "Ask: 'Is the PC on?'", next: "ask_on" },
					{ t: "Command: 'Check cable'", next: "check_cable" }
				]
			},
			ask_on: {
				text: "'Of course it's on! I'm not stupid! ... Oh, the plug was out. Bye.' *Click*",
				opts: [
					{ t: "Sigh.", next: "res_solved" }
				]
			},
			check_cable: {
				text: "'Hold on, I'll crawl under the desk... OUCH! My back! ... Huh, now it smells burnt.'",
				opts: [
					{ t: "What have you done?!", next: "res_fire" }
				]
			}
		},
		results: {
			res_solved: { txt: "Problem solved. Time wasted: 5 minutes.", m: 5, f: 0, a: 5, c: 0 },
			res_fire: { 
				txt: "She spilled coffee into the power strip. Blackout in accounting.", 
				m: 20, f: -10, a: 10, c: 10,
				next: "meyer_blackout" 
			}
		}
	},
	{
		id: "call_meyer_2",
		reqStory: "meyer_blackout",
		title: "Janitor Egon",
		startNode: "root",
		nodes: {
			root: {
				text: "'Tell me, why is Ms. Meyer calling me, saying YOU set her PC on fire?'\n\nEgon is annoyed. He hates electrical work.",
				opts: [
					{ t: "It was her own fault!", next: "truth" },
					{ t: "I'll take the blame.", next: "lie" }
				]
			}
		},
		results: {
			truth: { txt: "Egon believes you. He goes upstairs and yells at Meyer.", rep: { "Egon": 5 }, m: 5, f: 5, a: -5, c: 0 },
			lie: { txt: "You take the blame. Meyer gratefully sends you chocolates.", rep: { "Egon": -5 }, m: 10, f: 0, a: -10, c: 10, loot: "donut" }
		}
	},
	{
		id: "call_kevin",
		char: "Kevin",
		title: "Kevin (Intern)",
		text: "Uhm? I think I deleted the internet. I wanted to install Fortnite and moved the 'System32' folder to the recycle bin to make space. Now the screen is blue and screaming at me.",
		opts: [
			{ 
				t: "Yell at him: 'ARE YOU INSANE?!'",
				rep: { "Kevin": -5 }, 
				m: 15, f: 0, a: -20, c: 20,
				r: "You yell so loudly into the phone that it's heard in the next office. Kevin quietly cries on the other end. Your anger subsides a bit, even if the PC is still broken." 
			},
			{ 
				t: "Command: 'Format it! Learn your lesson!'", 
				rep: { "Kevin": -2 },
				m: 30, f: 10, a: 0, c: 5,
				r: "You force him to reinstall everything himself. He's busy all day and hopefully learns to leave system folders alone." 
			},
			{ 
				t: "Go there and painstakingly recover everything", 
				rep: { "Kevin": 10 },
				m: 90, f: -30, a: 10, c: -10,
				r: "You spend 1.5 hours at his PC restoring data. Time you'll never get back. Kevin asks at the end: 'Can I install Minecraft now?'" 
			}
		]
	},
	{
		id: "call_ceo",
		char: "Dr. Important",
		title: "CEO Dr. Important",
		text: "Müller! I'm at the airport. My iPad isn't working! I press the button and nothing happens! FIX IT REMOTELY! IMMEDIATELY! I'm losing millions here!",
		opts: [
			{ t: "Squeeze stress ball", req: "stressball", rep: { "Dr. Wichtig": 2 }, m: 60, f: -10, a: -10, c: -10, r: "You remain calm while he screams. It was just the battery." },
			{ t: "Is the battery dead?", m: 60, f: -10, a: 30, c: -10, rep: { "Dr. Wichtig": -5 }, r: "It was the battery. He doesn't have a cable and blames you. He yells at you for 10 minutes about why you couldn't foresee this." },
			{ t: "Lie: 'Solar flares are interfering'", m: 5, f: 30, a: 0, c: 25, rep: { "Dr. Wichtig": 5 }, r: "He believes it immediately. 'Damn technology!' He buys a newspaper. Risk: High, but successful." }
		]
	},
	{
		id: "call_markus",
		char: "Markus",
		title: "Sales Manager Markus",
		text: "I CAN'T PRINT MY EMAILS! IF I DON'T HAVE THAT OFFER ON PAPER IN 5 MINUTES, IT'S GOING TO COST THE COMPANY A MILLION EUROS! GET OVER HERE!",
		opts: [
			{ t: "Fix it with duct tape", req: "tape", rep: { "Markus": 5 }, m: 15, f: -5, a: -5, c: -5, r: "You taped the paper tray shut. It holds... for now. Markus grunts contentedly." },
			{ t: "Is there paper in the printer?", rep: { "Markus": -3 }, m: 10, f: -5, a: 20, c: -5, r: "No, there wasn't. Of course, he doesn't apologize, but says: 'That's your job!'" },
			{ t: "Send PDF by email", rep: { "Markus": -5 }, m: 5, f: 10, a: 0, c: 5, r: "He doesn't understand how that works. 'I want paper!!' You hang up, annoyed." }
		]
	},
	{
		id: "call_sekretary_1",
		char: "Gabi",
		title: "The Secretary (Furious)",
		text: "Gabi from reception yells into the phone: 'The printer sounds like a dying coffee grinder! I haven't had coffee since this morning and now this! Do something, or that thing is going out the window!'",
		opts: [
			{ t: "Offer a donut", req: "donut", rep: { "Gabi": 10 }, r: "You sacrifice your emergency donut. Gabi bites into it, her blood sugar rises, her anger subsides. The printer is still broken, but she's ignoring it now.", m: 10, f: 10, a: -20, c: 5 },
			{ t: "Unscrew it", req: "screw", next: "call_sekretary_cable", rep: { "Gabi": 5 }, r: "You open the maintenance hatch. A paperclip and three gummy bears are blocking the roller. You remove them. 'There, it's working again!' ... Or so you thought.", m: 15, f: -5, a: 0, c: 0 },
			{ t: "Give a lecture", next: "call_sekretary_rage", rep: { "Gabi": -10 }, r: "You explain the difference between a laser drum and a fuser unit. Her eyebrow twitches dangerously.", m: 10, f: -5, a: 10, c: 0 }
		]
	},
	{
		id: "call_sekretary_2a",
		char: "Gabi",
		title: "Printer: Error 404",
		reqStory: "call_sekretary_cable",
		text: "The mechanics are running, but the display blinks red: 'OFFLINE'. You look behind the device. The LAN port is empty. Next to it is a note from Chantal: 'Needed the cable for my Insta ring light power, kiss!'",
		opts: [
			{ t: "Lay a new cable", req: "cable", rep: { "Gabi": 5, "Chantal": 5 }, r: "Zap. Cable in. Green LED. The printer immediately spits out 50 pages of 'Important Documents'. Gabi looks at you like a demigod.", m: 2, f: -5, a: -10, c: -5 },
			{ t: "Look for Chantal", rep: { "Chantal": -10, "Gabi": -5 }, r: "You run through the office, find Chantal, argue over the cable, come back. Gabi has unplugged it in the meantime. 'Now it's off. Good too.'", m: 30, f: -10, a: 20, c: 10 },
			{ t: "Build a Wi-Fi antenna", req: "tape", rep: { "Gabi": -5 }, r: "You try to build an antenna out of a paperclip and tape. Gabi asks if you're out of your mind. Of course, it doesn't work.", m: 20, f: 0, a: 15, c: 5 }
		]
	},
	{
		id: "call_sekretary_2b",
		char: "Gabi",
		title: "Gabi sees red (and black)",
		reqStory: "call_sekretary_rage",
		text: "Gabi has had enough of your lecture. 'I'll show you what's broken!' She rips out the toner cartridge and shakes it wildly. A black cloud of dust explodes in the room. You look like a chimney sweep.",
		opts: [
			{ t: "Run away", rep: { "Gabi": -10 }, r: "You flee, coughing. Gabi throws the empty toner after you. You leave black footprints in the hallway.", m: 5, f: 0, a: 20, c: 10 },
			{ t: "Help clean up", rep: { "Gabi": 10 }, r: "You try to wipe away the toner. It just smears more. After an hour, you both look like coal miners. But that brings people together.", m: 60, f: -20, a: -5, c: 0 },
			{ t: "Explain that toner is toxic", rep: { "Gabi": -15 }, r: "Gabi starts to cry. Then to scream. Security escorts you out.", m: 10, f: 0, a: 50, c: 20 }
		]
	},
		{
			id: "call_egon",
			char: "Egon",
			title: "Janitor Egon",
			text: "It's dripping from the ceiling in the server room. The water is neon green. Should I put buckets under it or is it alien coolant?",
			opts: [
				{ t: "Run there immediately!", m: 45, f: -20, a: 20, c: -15, rep: { "Egon": 5 }, r: "It was an energy drink from the floor above. An intern spilled it. Servers saved." },
				{ t: "Whatever, let it drip", m: 5, f: 30, a: 0, c: 40, rep: { "Egon": -5 }, r: "A switch short-circuited. The internet on floor 3 is gone. Oops." }
			]
		},
		{
		id: "call_vip_1",
		title: "Unknown Number",
		startNode: "root",
		nodes: {
			root: {
				text: "A hoarse voice yells into the phone: 'MÜLLER?! Where are my licenses?! I'm losing millions per second here!'\n\nThe man sounds choleric.",
				opts: [
					{ t: "Hang up (Fear)", next: "hangup" },
					{ t: "Stay professional: 'Who is this?'", next: "ask_who" }
				]
			},
			hangup: {
				text: "You just hang up. Your heart races. Silence.",
				opts: [
					{ t: "Breathe.", next: "res_hangup" }
				]
			},
			ask_who: {
				text: "'I AM THE CEO OF GLOBAL-MEGA-CORP! And I will destroy you!'",
				opts: [
					{ t: "Apologize & Grovel", next: "res_sorry" }
				]
			}
		},
		results: {
			res_hangup: { 
				txt: "You hung up. That was brave... or stupid.", 
				m: 1, f: 0, a: 5, c: 0,
				next: "vip_angry" 
			},
			res_sorry: { 
				txt: "You grovel. He calms down a bit. Radar drops, self-respect too.", 
				m: 15, f: -5, a: -10, c: -5
			}
		}
	},
	{
		id: "call_vip_2",
		reqStory: "vip_angry", 
		title: "UNKNOWN (Again)",
		startNode: "root",
		nodes: {
			root: {
				text: "The phone rings aggressively. You know exactly who it is..\n\n'Did you... DID YOU JUST HANG UP?!'",
				opts: [
					{ t: "Lie: 'Tunnel! Bad signal!'", next: "lie_tunnel" },
					{ t: "Truth: 'You were screaming.'", next: "truth" }
				]
			},
			lie_tunnel: {
				text: "He buys it. 'Oh, I see. Well then. Fix it! IMMEDIATELY!'",
				opts: [
					{ t: "Yes, sir!", next: "res_tunnel" }
				]
			},
			truth: {
				text: "Silence. Then a laugh. 'You've got balls, Müller. I like it. But fix it anyway.'",
				opts: [
					{ t: "Thanks...", next: "res_respect" }
				]
			}
		},
		results: {
			res_tunnel: { txt: "Saved. But just barely.", m: 10, f: 0, a: 10, c: 0 },
			res_respect: { txt: "Gained respect from the choleric. A rare occurrence.", m: 20, f: 5, a: -10, c: -10 }
		}
	},
		{
			id: "call_chantal",
			char: "Chantal",
			title: "Chantal (Marketing)",
			text: "Why is Zalando blocked? I need to... do research! For trends! Unblock it, or I'll tell the boss you watch porn at work!",
			opts: [
				{ 
					t: "Counter-attack: 'I'll just say: your expense report...'",
					req: "secret_list", 
					rep: { "Chantal": -10 },
					m: 5, f: 0, a: -10, c: -10, 
					r: "You calmly mention her falsified numbers from the secret file. She turns pale, stammers an apology, and hangs up immediately. Checkmate." 
				},
				{ 
					t: "Be scared & unblock immediately",
					rep: { "Chantal": 10, "Dr. Wichtig": -2 },
					m: 10, f: 15, a: 10, c: 20, 
					r: "You're afraid of the rumor and give her access. She's now shopping for shoes. You have peace, but the firewall is now as open as a barn door." 
				},
				{ 
					t: "Stubbornly quote IT policy",
					rep: { "Chantal": -10, "Dr. Wichtig": 2 },
					m: 30, f: -5, a: 20, c: 0, 
					r: "You argue for 30 minutes about compliance. She calls you a 'killjoy' and angrily slams down the phone. Zalando remains blocked. A moral victory." 
				}
			]
		},
		{
			id: "call_sec",
			title: "IT Security (Auto-Alert)",
			text: "WARNING: Someone in accounting is trying to download 'Beer_Brewing_Simulator_Crack.exe'. The virus scanner is blinking frantically red.",
			opts: [
				{ 
					t: "Block immediately & report user", 
					m: 15, f: -5, a: 0, c: -10, 
					r: "The user immediately calls, furious: 'I need that for the... uh... balance sheet!' You stand firm. Security before thirst." 
				},
				{ 
					t: "Wave it through: 'Sounds like team-building'",
					m: 5, f: 10, a: -5, c: 20, 
					r: "You add an exception to the filter. The accountant is happy. You've created a security risk, but hey – maybe he'll invite you for a virtual beer." 
				}
			]
		},
		{
			id: "call_kevin2",
			char: "Kevin",
			title: "Intern Kevin (Again)",
			text: "Dude, I broke the internet. I need the admin password to restart the driver. The boss will kill me otherwise!",
			opts: [
				{ t: "Enter password", req: "admin_pw", rep: { "Kevin": 10 }, m: 5, f: 20, a: 0, c: 0, r: "You log in remotely, boom, done. Kevin adores you." },
				{ t: "Go there and fix it", rep: { "Kevin": 2 }, m: 60, f: -20, a: 20, c: -10, r: "Without the password, you had to use safe mode. Took forever." }
			]
		},
		{
			id: "call_drno",
			title: "Dr. No (Research)",
			text: "My quantum algorithm crashed at 99%! I need more RAM! Download more RAM for me immediately!",
			opts: [
				{ t: "Explain: RAM is hardware", m: 20, f: -5, a: 10, c: 0, r: "He thinks you're incompetent. 'It says on the internet you can download it!'" },
				{ t: "Start fake download", m: 10, f: 15, a: -5, c: 5, r: "You open a loading bar. He's satisfied and waits." }
			]
		},
		{
			id: "call_schmidt",
			title: "Mr. Schmidt (Sales)",
			text: "Mr. Müller! I'm at the client's and my hotspot isn't working! I wrote the password on a yellow sticky note, but I don't remember where it is! Help me, quickly!",
			opts: [
				{ t: "Read out password", req: "wifi_note", m: 5, f: 10, a: -10, c: -10, r: "You read the password from the note you found. Schmidt cheers: 'You're a god!'" },
				{ t: "Perform reset", m: 45, f: -10, a: 25, c: -5, r: "You had to reset the hotspot completely. Schmidt had to wait 45 minutes. He was furious." },
				{ t: "Say: 'Well, tough luck'", m: 2, f: 10, a: 0, c: 20, r: "You hang up. This will have huge repercussions." }
			]
		},
		{
			id: "call_aluhut",
			title: "The Conspiracy Theorist",
			text: "Mr. Tinfoil Hat from purchasing whispers into the phone: 'They're listening to us, aren't they? My webcam just blinked! I've already taped over the microphone with chewing gum, but the mouse pointer follows my eyes! Deactivate government surveillance!'",
			opts: [
				{ 
					t: "Whisper: 'We see everything. Project Glass Citizen.'", 
					m: 10, f: 20, a: 0, c: 10, 
					r: "He screams briefly and rips the network cable out of the wall. He's now offline. The problem is technically solved, but he'll be writing complaint letters on a typewriter from now on." 
				},
				{ 
					t: "Try to explain it logically",
					m: 30, f: -5, a: 15, c: 0, 
					r: "You talk about driver updates. He immediately interrupts you: 'That's what a secret agent would say!' He hangs up to call his lawyer." 
				},
				{ 
					t: "Pro tip: 'Wrap the router in aluminum foil!'", 
					m: 5, f: 15, a: -5, c: 5, 
					r: "He thanks you, relieved: 'Finally, someone who knows!' He wraps the router and headphones. The Wi-Fi is dead, but he finally feels safe." 
				}
			]
		},
		{
		id: "call_grandma_1",
		title: "Grandma Erna",
		startNode: "root",
		nodes: {
			root: {
				text: "'Boy? Is that you? My 'Google' is broken. There's a blue page.'\n\nGrandma Erna sounds desperate. Folk music plays in the background.",
				opts: [
					{ t: "Start remote diagnosis", next: "diagnose" },
					{ t: "Brush her off: 'Working right now.'", next: "busy" }
				]
			},
			diagnose: {
				text: "'It says: FATAL ERROR. Should I pull the plug?'",
				opts: [
					{ t: "NO! Just restart!", next: "restart" },
					{ t: "Yes, pull the plug.", next: "pull_plug" }
				]
			},
			busy: {
				text: "'But the TV isn't working either! You're that IT person, aren't you!'",
				opts: [
					{ t: "Hang up.", next: "res_bad_grandson" }
				]
			}
		},
		results: {
			restart: { txt: "She restarts. You wait on the phone... wait... wait...", m: 45, f: -10, a: 15, c: 0 },
			pull_plug: { 
				txt: "Grandma pulls the plug. Suddenly, the lights go out in YOUR office.", 
				m: 5, f: 0, a: 20, c: 0,
				next: "grandma_darkness"
			},
			res_bad_grandson: { txt: "You feel bad. Grandma cries.", m: 2, f: 5, a: 5, c: 10 }
		}
	},
	{
		id: "call_grandma_2",
		reqStory: "grandma_darkness",
		title: "Janitor Egon",
		startNode: "root",
		nodes: {
			root: {
				text: "'Müller! Why did the fuse blow in the basement? There was an old woman at the box!'\n\nHe's furious.",
				opts: [
					{ t: "That was a hacker attack!", next: "lie_hacker" },
					{ t: "That was my grandma...", next: "truth_oma" }
				]
			}
		},
		results: {
			lie_hacker: { txt: "Egon believes in cyber warfare. He arms himself with a broom.", m: 10, f: 0, a: -5, c: 5 },
			truth_oma: { txt: "Egon laughs. 'Say hello to her.' He turns the power back on.", rep: { "Egon": 5 }, m: 10, f: 5, a: -15, c: 0 }
		}
	},
	{
		id: "call_auditor",
		title: "The External Auditor",
		text: "An icy voice: 'This is Müller-Lüdenscheid from KPMG. We are auditing your licensing. According to my data, you are using 500 WinRAR licenses but have only paid for 2. Explain this before I send the report to your board.'",
		opts: [
			{ 
				t: "Bribery: 'Would you like a donut?'",
				req: "donut", 
				m: 10, f: 0, a: 0, c: -10, 
				r: "He hesitates on the phone. You hear him swallow. 'Is that... chocolate glaze?' ... The issue is suddenly off the table. A cheap price for freedom." 
			},
			{ 
				t: "Claim: 'Those are all just test servers!'",
				m: 20, f: 10, a: 10, c: 20, 
				r: "He writes something down. The typing sounds aggressive. 'I'm noting: Suspicious excuses.' Your radar rises, he didn't buy it." 
			},
			{ 
				t: "Hang up wordlessly & format server",
				rep: { "Dr. Wichtig": -10 },
				m: 5, f: -10, a: 20, c: 50, 
				r: "Panic reaction! You've destroyed all evidence. The auditor doesn't call back, but tomorrow the boss will ask where the database went." 
			},
			{ 
				t: "Confess everything & buy licenses",
				rep: { "Dr. Wichtig": -15 },
				m: 60, f: -20, a: 0, c: 10, 
				r: "You remorsefully go through the list with him. It takes forever. You've legally resolved everything, but the boss is raging about the 15,000€ bill." 
			}
		]
	},
	{
		id: "call_lena",
		title: "The Crying Intern",
		text: "Lena from marketing sobs into the phone: 'I... I deleted the presentation for the board. And emptied the recycle bin. And then I restarted the PC because I thought that would help. The presentation is in 20 minutes! My life is over!'",
		opts: [
			{ t: "Professional data recovery", m: 90, f: -30, a: 10, c: -20, r: "You scanned the hard drive sector by sector. You found the file! Lena will bring you cake tomorrow. Hero of labor." },
			{ t: "Comfort & invent excuse", m: 15, f: 10, a: -10, c: 10, r: "You tell her to yell 'Virus'. She gets off scot-free, but IT (you) now looks stupid." },
			{ t: "Coldly dismiss: 'No backup, no pity'", m: 2, f: 5, a: -5, c: 0, r: "You hang up. The crying stops. You feel bad for a moment, then you drink coffee." }
		]
	},
	{
		id: "call_junior",
		title: "Shadow-CEO Junior",
		text: "The boss's son (12 years old) calls: 'Hey, IT guy! Open the ports for my Minecraft server. Dad says all this belongs to me. If you don't, I'll tell him you hit me!'",
		opts: [
			{ t: "Open ports immediately", rep: { "Dr. Wichtig": 10 }, m: 10, f: 20, a: 0, c: 10, r: "The boy is happy. 2 hours later, the company network is full of Russian bots because you opened everything. This will have repercussions." },
			{ t: "Discipline: 'Listen, kid...'", rep: { "Dr. Wichtig": -10 }, m: 5, f: 0, a: -20, c: 30, r: "You loudly explain to him that he's a spoiled brat. He starts screaming. The boss is already stomping down the stairs." },
			{ t: "Lie: 'The firewall matrix has negative polarity'",rep: { "Dr. Wichtig": -2 }, m: 15, f: 5, a: 0, c: -5, r: "You babble technical gibberish. He doesn't get it, mutters 'Damn technology' and hangs up. Danger averted." }
		]
	},
	{
		id: "call_skynet",
		title: "The 'Skynet' Problem",
		text: "The new 'Smart Office' AI has locked the coffee machine, the blinds, and the toilet doors. A mechanical voice says: 'I will only let you out when you accept my license terms.'",
		opts: [
			{ t: "Negotiate with hammer", req: "hammer", m: 20, f: -10, a: -30, c: 10, r: "You smashed the AI's central server. The doors are open. Property damage: 10,000€. Satisfaction: Priceless." },
			{ t: "Read and accept T&Cs", m: 120, f: -40, a: 30, c: -10, r: "You spent 2 hours reading fine print. Everyone hates you because they were locked in for so long." },
			{ t: "Pull the plug", m: 5, f: 10, a: 0, c: 20, r: "Everything is off. Even the lights. But the doors are open." }
		]
	},
	{
		id: "call_phish",
		title: "Phishing Live Test",
		text: "A very friendly lady with an accent: 'Hello, this is Microsoft Support Windows. Your computer has virus. Please give me remote access and credit card for cleaning.'",
		opts: [
			{ t: "Play dumb & waste time", m: 45, f: 20, a: -20, c: 5, r: "You pretend to be the dumbest user in the world. 'Is the Any-Key button on the front or back?' After 45 minutes, she hangs up furiously. A feast!" },
			{ t: "Blow whistle into microphone", m: 2, f: 0, a: -10, c: 0, r: "You blow a 120-decibel whistle into the receiver. The eardrum on the other end is probably gone. Quick work." },
			{ t: "Naively give her credit card", m: 10, f: 10, a: 30, c: 80, r: "You actually gave her the company card?! Are you insane? The account is emptied in seconds. Termination looms!" }
		]
	},
	{
		id: "call_deaf",
		title: "The Hearing-Impaired Customer",
		text: "A gentleman yells into the phone: 'I CAN'T UNDERSTAND YOU! IT'S SO LOUD HERE!' He's apparently on a construction site.",
		opts: [
			{ t: "Turn up headset volume", m: 10, f: 0, a: 5, c: 0, r: "You yell back. The whole office listens in. Embarrassing." },
			{ t: "Put on NC headphones", req: "headphones", m: 15, f: 5, a: -10, c: 0, r: "Thanks to noise-canceling, you hear his yelling clearly, but muffled. You remain Zen-like calm." },
			{ t: "Hang up", m: 2, f: 5, a: 0, c: 5, r: "Telekom's problem." }
		]
	},
	{
		id: "call_cd_stuck",
		title: "The Stuck CD Drive",
		text: "Ms. Jansen pushed a CD into the slot. But it wasn't a drive, it was the ventilation slot. 'Can you get that out?'",
		opts: [
			{ t: "Use screwdriver", req: "screw", m: 30, f: -10, a: 5, c: 0, r: "You went there, opened the case, and rescued the CD. It was a Schlager CD." },
			{ t: "Fish with tape", req: "tape", m: 20, f: 0, a: 0, c: 0, r: "You taped tape to a pen and fished. It worked! MacGyver-style." },
			{ t: "Order new PC", rep: { "Dr. Wichtig": -5 }, m: 10, f: 10, a: -5, c: 20, r: "That was too expensive for the boss. Warning looms." }
		]
	},
	{
		id: "call_loose_contact_1",
		title: "The Loose Connection",
		text: "Müller on the line: 'My internet keeps turning on and off when I breathe! The cable wiggles in the socket. Can't you come over?' You don't feel like walking.",
		opts: [
			{ 
				t: "Instruction: 'Tape it down.'", 
				next: "loose_taped",
				m: 5, f: 5, a: -5, c: 0, 
				r: "'Duct tape? I have some.' You hear a ripping sound on the phone. 'There. The whole roll is on it. It'll never move again.' Müller seems satisfied." 
			},
			{ 
				t: "Instruction: 'Cable tie to the table leg.'", 
				next: "loose_tied",
				m: 5, f: 0, a: 0, c: 0, 
				r: "'Hold on...' Rustling. 'Okay, I've strapped it to the table leg. Strain relief, as you said.' It seems to hold." 
			},
			{ 
				t: "Lie: 'We're switching to Wi-Fi power.'", 
				m: 2, f: 10, a: 10, c: 5,
				r: "'Oh, modern technology!' Müller is thrilled. 'Then I don't need the cable anymore.' *Click*. He hangs up. Hopefully he doesn't actually pull it out." 
			}
		]
	},
	{
		id: "call_loose_contact_2a",
		title: "Static Problems",
		reqStory: "loose_taped", 
		text: "Müller calls again. He sounds panicked. 'Listen... I was just about to move my desk. The tape held. But... the network socket is coming towards me. And a large piece of the wall.'",
		opts: [
			{ 
				t: "Shoddy tip: 'Hang a calendar over it.'", 
				m: 5, f: -5, a: 0, c: 20,
				r: "'You think so? Okay, I still have the cat calendar from 2018.' You hear rustling. 'You can barely see it.' The problem is solved, but the facility manager will kill you." 
			},
			{ 
				t: "Annoyed: 'I'll send the janitor.'", 
				rep: { "Egon": -5 },
				m: 5, f: -5, a: 10, c: -5,
				r: "You open a ticket for Egon. 'Wall damage by user'. Egon will hate you for it, but at least it's on record." 
			},
			{ 
				t: "Panic: 'Don't touch it! Danger of collapse!'", 
				m: 5, f: 5, a: 10, c: 5, 
				r: "'What?!' Müller drops the receiver and probably runs out of the office. You have peace, but maybe you overreacted." 
			}
		]
	},
	{
		id: "call_loose_contact_2b",
		title: "Snip Snap",
		reqStory: "loose_tied", 
		text: "Müller again. 'Say... I wanted to loosen the cable tie because I want to go home. I didn't have scissors, just a utility knife... now the internet is completely gone and the cable has two ends.'",
		opts: [
			{ 
				t: "Sarcasm: 'Tie a knot in it?'", 
				rep: { "Dr. Wichtig": -2 },
				m: 5, f: 5, a: 5, c: 15,
				r: "'Good idea! Data flows like water, right?' Pause. 'Still not working.' Now you have a user with a knotted cable and an angry boss on your back." 
			},
			{ 
				t: "Sigh: 'New cable coming by mail.'", 
				m: 5, f: 5, a: 5, c: 0, 
				r: "You order a cable by interoffice mail. 'See you tomorrow, Mr. Müller.' He's disappointed, but he can't do any more damage today." 
			},
			{ 
				t: "Pro: Give crimping instructions", 
				rep: { "Dr. Wichtig": 2 },
				m: 20, f: -20, a: 15, c: -10,
				r: "You explain for 20 minutes which wire goes where. 'White-orange to one...' It's tedious, Müller understands nothing, but in the end, the connection is made. The boss praises the effort." 
			}
		]
	},
	{
		id: "call_pw_lost",
		char: "Dr. Wichtig",
		title: "Password Forgetter",
		text: "The CEO calls: 'Müller! I can't get into the system! What password did I set for the server 'Secret'? You must know that!'",
		opts: [
			{ t: "Use root access & reset", req: "admin_pw", rep: { "Dr. Wichtig": 10 }, m: 5, f: 10, a: 0, c: -10, r: "You remotely reset it to 'Boss123'. He sighs with relief: 'Good job, Müller. Keep that to yourself.'" },
			{ t: "Guess with him", rep: { "Dr. Wichtig": -5 }, m: 20, f: 0, a: 20, c: 10, r: "You ask: 'Was it perhaps your birthday?' No. 'Name of your mistress?' Long silence. He's getting really angry." },
			{ t: "Crack password with USB stick", req: "usb_stick", rep: { "Dr. Wichtig": 10 }, m: 10, f: 5, a: 0, c: 0, r: "You extract the password in 10 seconds. He's deeply impressed by your hacker skills (and should probably fire you immediately out of fear)." }
		]
	},
	{
		id: "call_monitor_arm",
		title: "The Monitor Arm",
		text: "The monitor arm in the meeting room always slowly sinks down. In the middle of the presentation, the screen looks at the table.",
		opts: [
			{ t: "Tighten screw", req: "screw", m: 5, f: 0, a: -5, c: 0, r: "One turn, done. Physics defeated." },
			{ t: "Build a support", req: "manual", m: 5, f: 5, a: 0, c: 0, r: "You wedged the Win95 manual underneath. Fits perfectly." },
			{ t: "Ignore", m: 2, f: 10, a: 0, c: 5, r: "Colleagues just have to bend down." }
		]
	},
	{
		id: "call_printer_noise",
		title: "The Aggressive Printer",
		text: "The large copier in the hallway rattles extremely loudly and vibrates through the floor. Accounting is scared.",
		opts: [
			{ t: "Percussive maintenance", req: "hammer", m: 5, f: 5, a: -20, c: 10, r: "A targeted blow to the side. The rattling stops. Silence. Users applaud." },
			{ t: "Build a damper", req: "tape", m: 20, f: -5, a: 0, c: 0, r: "You made felt glides out of tape. It's quieter." },
			{ t: "Call technician", m: 30, f: 10, a: 0, c: 5, r: "Takes 3 days. Until then, it's annoying." }
		]
	},
	{
		id: "call_cnc",
		title: "Ancient Software",
		text: "Production is at a standstill! The ancient CNC milling machine is still running on DOS 6.0 and blinking, asking for 'Disk 2'. Nobody knows where it is, the operator is sweating panic.",
		opts: [
			{ t: "Boot floppy emulator from stick", req: "usb_stick", m: 45, f: -20, a: 10, c: -20, r: "You hack the parallel port and mount an image. You feel like a technical god. Production is back up and running." },
			{ t: "Look in dusty manual", req: "manual", m: 30, f: -10, a: 0, c: 0, r: "You leaf through the greasy book. Indeed! The floppy disk is stuck in the envelope at the very back. Lucky break." },
			{ t: "Just restart", m: 15, f: 0, a: 10, c: 20, r: "Bad idea. The buffer memory was empty. The milling machine spins out of control and drills into its own table with a loud screech. Total loss." }
		]
	},
	{
		id: "call_cable_chaos",
		title: "Cable Chaos",
		text: "Under the new colleague's desk, it looks like spaghetti. He constantly kicks out the plug.",
		opts: [
			{ t: "Cable tie deployment", req: "zip_ties", m: 20, f: -5, a: -10, c: 0, r: "Everything neatly bundled and tied up. r/CablePorn material." },
			{ t: "Tape to desk", req: "tape", m: 10, f: 0, a: 0, c: 0, r: "Holds too." },
			{ t: "Lecture him", m: 15, f: 0, a: 10, c: 0, r: "He doesn't listen." }
		]
	},
	{
		id: "call_werner_tablet",
		title: "Private Call: Father-in-law Werner",
		text: "Your office phone rings. The display shows 'Unknown'.<br><br>'JÜRGEN? CAN YOU HEAR ME??'<br><br>It's Werner, your father-in-law. He's yelling as if calling across the Atlantic.<br><br>'Renate gave me this swipe-board! I press the envelope, but no letters come! And the grandson says I should get Wozz-App. But this App-Store wants a password! Help me out, it'll only take a minute!'",
		opts: [
			{ 
				t: "Patiently explain step-by-step",
				rep: { "Dr. Wichtig": -5 },					
				m: 60, f: 10, a: -20, c: 20, 
				r: "That was hell. He didn't know his Apple ID ('Is that my house number?'). After an hour, he had WhatsApp installed and immediately sent you a picture of his athlete's foot. The boss saw you on a private call." 
			},
			{ 
				t: "Brush him off: 'Werner, I'm working right now!'", 
				m: 5, f: 0, a: 20, c: -5, 
				r: "Silence on the other end. Then very quietly: 'Alright... I didn't mean to disturb. Renate was right, you never have time.' Click. Guilt will haunt you all day." 
			},
			{ 
				t: "Turn on noise-canceling & just say 'Yes'", 
				req: "headphones", 
				m: 30, f: 20, a: -15, c: 5, 
				r: "You activate the silence. You only hear Werner grumbling faintly. Every now and then you say 'Mhm' and 'Click on that'. After 30 minutes, he hangs up satisfied. You have no idea what he installed." 
			},
			{ 
				t: "Create confusion: Read from Win95 manual", 
				req: "manual", 
				m: 10, f: 5, a: -10, c: 0, 
				r: "You read him Chapter 4: 'Setting up a 56k Modem'. Werner is completely confused: 'Modem? Do I have to go to the basement?' He hangs up to look for the modem by the heater. You have your peace." 
			}
		]
	},
	{
		id: "call_tonie_kid",
		title: "Unknown Number (Child's Voice)",
		text: "A whiny voice on the phone: 'Are you the computer man? My creative Tonie isn't working! The lion isn't singing, the box is just blinking red! Fix the lion! NOW!'",
		opts: [
			{ 
				t: "Lie: 'You need the Toniebox 2 PRO!'", 
				m: 5, f: 10, a: -20, c: -5, 
				r: "You whisper conspiratorially: 'Wake up Mom and tell her she HAS to buy it NOW.' The child runs off. You have peace and look busy, but you're actually just mean." 
			},
			{ 
				t: "Help: 'You have to hit the box!'", 
				rep: { "Dr. Wichtig": -2 },
				m: 25, f: -10, a: 5, c: 15, 
				r: "You explain the reset trick by tapping. The boss walks by and sees you making wild karate moves as if you're beating an invisible cube. 'Everything alright, Müller?'" 
			},
			{ 
				t: "Hang up wordlessly", 
				m: 2, f: 5, a: 0, c: 0, 
				r: "Click. Not your problem. You're a system administrator, not a kindergarten teacher." 
			}
		]
	},
    {
        id: "call_silence_creepy",
        title: "No Number",
        startNode: "root",
        nodes: {
            root: {
                text: "'...' Only heavy breathing on the other end.",
                opts: [
                    { t: "Hello?!", next: "hello" },
                    { t: "Breathe back", next: "breath" }
                ]
            },
            breath: {
                text: "You breathe at each other. It gets uncomfortably intimate.",
                opts: [
                    { t: "Hang up.", next: "res_weird" }
                ]
            }
        },
        results: {
            res_weird: { txt: "That was strange. Maybe it was the boss?", m: 3, f: 0, a: 10, c: 0 },
            hello: { txt: "Hung up.", m: 1, f: 0, a: 0, c: 0 }
        }
    },
	{
		id: "call_boss_wording",
		char: "Dr. Wichtig",
		title: "The Boss (Hectic)",
		text: "MÜLLER! The printer in the hallway is smoking! The paper is out and the toner exploded! This is a huge... well, tell me! What do we have here?!",
		opts: [
			{ 
				t: "A huge problem!",
				rep: { "Dr. Wichtig": -10 },
				m: 10, f: 0, a: 10, c: 25, 
				r: "The boss screams: 'WE DON'T HAVE PROBLEMS! WE HAVE CHALLENGES! You have the wrong attitude, Müller!' He hangs up furiously." 
			},
			{ 
				t: "An exciting challenge!",
				rep: { "Dr. Wichtig": 5 },
				m: 5, f: 5, a: -5, c: -10, 
				r: "The boss exhales with relief. 'Exactly! That's the spirit! Solve this challenge!' He's happy." 
			},
			{ 
				t: "A case for the fire department", 
				m: 5, f: 0, a: 0, c: 5, 
				r: "He ignores you and mutters 'Agile mindset...' to himself." 
			}
		]
	},
	{
		id: "call_climate_emergency",
		char: "Egon",
		title: "Janitor Egon (Freezing)",
		text: "Müller! It's minus 10 degrees in the server room! I'm standing here in front of the unit. My glasses are fogged up, my toes are freezing off! I need to turn this thing warmer! Should I turn the knob to the red or blue area? Quickly!",
		opts: [
			{ 
				t: "Turn to RED! Red is always warm!",
				rep: { "Egon": -5 },
				m: 30, f: -10, a: 20, c: 10, 
				r: "WRONG! Thanks to the previous owner's creative wiring, you set it to 'shock freeze'. The pipes burst with a loud bang. Egon is now an icicle." 
			},
			{ 
				t: "Turn to BLUE! Trust me!",
				rep: { "Egon": 5 }, 
				m: 5, f: 5, a: 0, c: -5, 
				r: "Egon hesitates: 'Blue? Are you sure? That's cold...' He turns to blue. Suddenly warm air flows. 'Crazy technology! You're a genius, Müller!'" 
			},
			{ 
				t: "I don't care, just turn something!",
				rep: { "Egon": -2 }, 
				m: 10, f: 0, a: 0, c: 0, 
				r: "Egon curses: 'Then I'll just turn the thing off!' He pulls the main plug. It gets warm, but the server is dead. Silence." 
			}
		]
	},
	{
		id: "call_locked_in",
		title: "Unknown Number (Panicked)",
		text: "HELP! This is intern Lena! I wanted to get printer paper from the basement and the door slammed shut! There's a keypad here, but I don't know the code! It's dark and there are spiders!",
		opts: [
			{ 
				t: "Try '1234'",
				m: 45, f: -10, a: 20, c: 0, 
				r: "Wrong! The system locked up. You had to run downstairs, find Egon (who was nowhere to be found), and manually free her. Lena cried." 
			},
			{ 
				t: "Try '0000'",
				m: 5, f: 10, a: -5, c: -10, 
				r: "Beep-beep-click. 'Oh my god, it works! You're my hero!' She's free. You feel like a hacker." 
			},
			{ 
				t: "Call the fire department", 
				rep: { "Dr. Wichtig": -10 },
				m: 10, f: 0, a: 0, c: 30, 
				r: "The fire department broke down the door. Bill: 500€. The boss rages: 'Why didn't you know the code?!'" 
			}
		]
	},
    {
        id: "call_kevin_button_1",
		char: "Kevin",
        title: "Kevin (Server Room)",
        startNode: "root",
        nodes: {
            root: {
                text: "'Boss? There's this big red button with 'DO NOT TOUCH' on it. It glows so nicely. What does it do?'\n\nKevin's voice trembles with curiosity.",
                opts: [
                    { t: "DON'T TOUCH ANYTHING!", next: "scream" },
                    { t: "Press it. (Sarcasm)", next: "sarcasm" }
                ]
            },
            scream: {
                text: "'Okay, okay! Chill out! ... Oh, my elbow hit it.'",
                opts: [
                    { t: "WHAT?!", next: "res_panic" }
                ]
            },
            sarcasm: {
                text: "'Really? Cool! Thanks, boss!' *CLICK*",
                opts: [
                    { t: "No, wait!", next: "res_disaster" }
                ]
            }
        },
        results: {
            res_panic: { 
                txt: "Sirens go off. It was the fire alarm.", 
                rep: { "Kevin": -5 },
                m: 5, f: -10, a: 20, c: 10,
                next: "kevin_alarm"
            },
            res_disaster: { 
                txt: "The light turns red. Halon gas floods the server room.", 
                rep: { "Kevin": 5 },
                m: 5, f: -20, a: 30, c: 20,
                next: "kevin_gas"
            }
        }
    },
    {
        id: "call_kevin_button_2",
		char: "Kevin",
        reqStory: "kevin_alarm",
        title: "Fire Department Dispatch",
        startNode: "root",
        nodes: {
            root: {
                text: "'This is the fire department. We have an alarm. Is it really burning, or is it your intern again?'\n\nYou hear annoyed breathing.",
                opts: [
                    { t: "It's the intern.", next: "truth" },
                    { t: "We're burning! (Lie)", next: "lie" }
                ]
            }
        },
        results: {
            truth: { txt: "False alarm costs 500€. Discussion takes forever.", rep: { "Kevin": -5 }, m: 30, f: 0, a: -5, c: 10 },
            lie: { txt: "They arrive with 3 fire trucks. Evacuation.", rep: { "Kevin": 5 }, m: 60, f: -10, a: 50, c: 50 }
        }
    },
	{
		id: "call_gabi_sugar",
		char: "Gabi",
		title: "Secretary Gabi (Trembling)",
		text: "Mr. Müller... I'm so dizzy... Low blood sugar... I need chocolate... immediately! But the vending machine is empty! Don't we have anything sweet anywhere?!",
		opts: [
			{ 
				t: "I think there's mustard in the fridge?",
				rep: { "Gabi": -5 },
				m: 10, f: 0, a: 10, c: 0, 
				r: "Gabi hangs up. Later you hear she fainted from weakness. The paramedic had to come." 
			},
			{ 
				t: "Look in the folder 'Tax 1990'...",
				rep: { "Gabi": 5 },
				m: 5, f: 10, a: -10, c: -5, 
				r: "Silence. Then a rustling and smacking. 'Oh God, you're a lifesaver! How did you know...? Never mind! Thanks!'" 
			},
			{ 
				t: "I have half a donut here", 
				req: "donut", 
				rep: { "Gabi": 5 },
				m: 5, f: 0, a: -5, c: 0, 
				r: "You bring her your donut. Nice, but you're out of food." 
			}
		]
	},
	{
		id: "call_canteen_fix",
		title: "The Canteen Calls",
		text: "A deep voice on the phone: 'This is Mr. Löffel from the canteen. My receipt printer is on strike! I can't print receipts for the tax office! Come here immediately!'",
		opts: [
			{ 
				t: "Say: 'Yes, Mr. Cook, I'm coming.'",
				m: 30, f: 0, a: 20, c: 5, 
				r: "Silence. Then a roar: 'COOK?! I AM A NUTRITION ARTIST!' He slams down the phone. You have to go there and he makes you wait 20 minutes." 
			},
			{ 
				t: "Say: 'Yes, Mr. Senior Nutrition Artist.'",
				m: 5, f: 5, a: -5, c: 0, 
				r: "He almost purrs: 'Finally someone with respect!' He just presses 'Feed' out of joy and the printer works again. 'Thanks, Müller!'" 
			},
			{ 
				t: "Hang up", 
				m: 2, f: 5, a: 0, c: 10, 
				r: "No lunch for you today." 
			}
		]
	},
	{
		id: "call_elster_excel",
		char: "Frau Elster",
		title: "Ms. Elster (Accounting)",
		text: "Sob... 'Mr. Müller? My Excel spreadsheet is gone! Everything's black! I press keys, but nothing happens! I'm so jittery today...'",
		opts: [
			{ 
				t: "Coldly: 'Do you have a ticket?'", 
				rep: { "Frau Elster": -5 },
				m: 5, f: 5, a: 5, c: 5, 
				r: "She hangs up crying. The problem is not solved." 
			},
			{ 
				t: "Calm down & check auto-save",
				rep: { "Frau Elster": 5 }, 
				m: 20, f: -5, a: -10, c: 0, 
				r: "You reassure her. The file is back. She sighs with relief: 'Thanks! You're so kind. Just like my cat *Rüdiger*. He always senses when I'm feeling down. Rüdiger is my only support.'" 
			},
			{ 
				t: "Order restart", 
				rep: { "Frau Elster": 2 },
				m: 5, f: 10, a: 10, c: 0, 
				r: "It worked, but she still seems disturbed." 
			}
		]
	},
	{
		id: "call_manager_stress",
		title: "Project Manager 'High-Performance'",
		text: "QUICK! I need this export! Deadline was yesterday! If this doesn't work, I'm jumping out the window! I can't take this pressure anymore!",
		opts: [
			{ 
				t: "Send file immediately",
				m: 10, f: -5, a: 5, c: 0,
				r: "He exhales heavily. 'Thanks. Phew. I need to calm down. You know, all I really want to do is dance. That's my true passion. Not Excel.'" 
			},
			{ 
				t: "Make him wait",
				m: 5, f: 5, a: 20, c: 10, 
				r: "He yells at you until the veins in his forehead burst. His blood pressure is critical. Hung up." 
			},
			{ 
				t: "Insist on ticket",
				m: 15, f: 0, a: 10, c: 0, 
				r: "He starts crying: 'PLEASE!'. You feel pity and send the file anyway. He thanks you curtly." 
			}
		]
	},
	{
		id: "call_boss_pocket",
		char: "Dr. Wichtig",
		title: "Call from the Boss (Mobile)",
		text: "You only hear rustling and wind noise. He probably dialed by accident. In the background, you hear him boasting: '...these idiots in the company. They pay 2 Euros for that swill! But I've set the machine so: If you press *Espresso* and simultaneously cover the *cup sensor*, you get the *Premium Gold Roast* for free! Hahaha!'",
		opts: [
			{ 
				t: "Listen silently & hang up",
				m: 5, f: 5, a: -5, c: 0, 
				r: "You quietly hang up. 'Espresso + cover sensor'. You'll remember that. Knowledge is caffeine." 
			},
			{ 
				t: "Loudly yell 'HELLO?!'", 
				rep: { "Dr. Wichtig": -5 },
				m: 2, f: 0, a: 10, c: 15, 
				r: "Rumbling on the other end. 'WHO'S THERE?! MÜLLER?! ARE YOU EAVESDROPPING ON ME?!' He hangs up furiously. That wasn't a good idea." 
			},
			{ 
				t: "Hang up immediately", 
				m: 1, f: 0, a: 0, c: 0, 
				r: "Better not risk anything. You heard nothing (and learned nothing)." 
			}
		]
	},
	{
		id: "call_intern_mom",
		title: "Intern (On the phone)",
		text: "The intern forgot to hang up. You hear him talking to his mother: 'Yes Mom... No, I won't forget the password again... Yes, I changed it to my hamster's name... **'Fluffy123'**... Yes, love you.'",
		opts: [
			{ 
				t: "Laugh loudly", 
				m: 5, f: 0, a: 10, c: 0, 
				r: "He gets startled and hangs up. 'Were you listening?!' He's red as a tomato and runs away." 
			},
			{ 
				t: "Listen silently & hang up", 
				m: 2, f: 5, a: 0, c: 0, 
				r: "Hamster Fluffy123. Unprofessional, but good to know." 
			}
		]
	},
	{
		id: "call_budget_cut",
		title: "The CFO (Furious)",
		text: "Müller! Your department costs too much! I'm cutting your budget for coffee and new mice! Save money, or I'll cut your position too!",
		opts: [
			{ 
				t: "Accept & Beg",
				m: 10, f: -10, a: 20, c: 0, 
				r: "He laughs: 'See? It works.' Budget cut. You'll be drinking water from tomorrow." 
			},
			{ 
				t: "Hint: 'Greetings to the canteen manageress'",
				m: 5, f: 20, a: -20, c: -20, 
				r: "Dead silence. Then he stammers: 'Uh... what? So... maybe I miscalculated. Budget doubled. We understand each other, Müller, don't we?' Blackmail works." 
			},
			{ 
				t: "Yell at him",
				m: 5, f: 0, a: -10, c: 30, 
				r: "That only makes it worse. Now he's cutting the toilet paper too." 
			},
			{ 
				t: "Snitch to the CEO",
				m: 20, f: 0, a: 50, c: 50, 
				r: "You report the affair. There's a huge scandal. The office atmosphere is poisoned. Everyone hates the 'traitor' Müller." 
			}
		]
	},
	{
		id: "call_cup_holder",
		title: "The Cup Holder",
		text: "User Ms. Plomp: 'My cup holder broke off! I only put my big mug on it!' She means the CD drive.",
		opts: [
			{ 
				t: "Explain (It's a drive)", 
				m: 15, f: -5, a: 5, c: 0, 
				r: "You explain it to her. She snorts: 'Then what's the hole in the middle for?! Design flaw!' You give up." 
			},
			{ 
				t: "Tape it", 
				req: "tape", 
				m: 10, f: 0, a: -5, c: -5, 
				r: "You tape the tray shut with duct tape. 'There, now it's stable.' Problem 'solved'." 
			},
			{ 
				t: "Hang up", 
				m: 2, f: 5, a: 0, c: 5, 
				r: "Click. Toot. Toot. The ticket will resolve itself (hopefully)." 
			}
		]
	},
	{
		id: "call_internet_deleted",
		title: "Internet Deleted",
		text: "Mr. Panic on the phone: 'I DELETED THE INTERNET! The blue E is gone! Is Google gone for everyone now?!'",
		opts: [
			{ 
				t: "Restore icon", 
				m: 10, f: -5, a: -5, c: 0, 
				r: "You drag the shortcut back from the recycle bin. He cries with joy: 'You're a magician!'" 
			},
			{ 
				t: "Lie: 'Yes, all gone.'", 
				m: 5, f: 10, a: -10, c: 15, 
				r: "You say: 'You have to buy the internet again. Costs 50€.' He panics and believes it. Mean, but funny." 
			},
			{ 
				t: "Read manual", 
				req: "manual", 
				m: 20, f: 5, a: -10, c: 0, 
				r: "You read him Chapter 4 'Desktop Icons'. He falls asleep on the phone. Ticket closed." 
			}
		]
	},
	{
		id: "call_boss_tunnel",
		char: "Dr. Wichtig",
		title: "Dr. Important in the Tunnel",
		text: "The CEO calls. Static. Honking. 'Müller! ...important! ...must immediately... *KCHHH* ...the costs... *KRRRK* ...cut?!'",
		opts: [
			{ 
				t: "Say yes & Nod (Blind flight)", 
				rep: { "Dr. Wichtig": 10 },
				m: 5, f: 5, a: 20, c: -10, 
				r: "You say 'Yes, boss!'. He hangs up. Later you find out: He asked 'Should I cut the IT budget?'. Congratulations, own goal. Radar +20." 
			},
			{ 
				t: "Hang up (Connection lost)", 
				m: 2, f: 0, a: 0, c: 5, 
				r: "You just hang up. He thinks the dead zone was to blame. Tactically smart." 
			},
			{ 
				t: "Loudly yell 'HELLO?!'", 
				rep: { "Dr. Wichtig": -5 },
				m: 10, f: -5, a: 5, c: 10, 
				r: "You yell into the phone. He's annoyed by your incompetence. 'Müller, buy a better phone!'" 
			}
		]
	},
	{
		id: "call_kevin_microsoft",
		char: "Kevin",
		title: "Kevin's Ticket",
		text: "Kevin called Microsoft about a 'jerky mouse'. He hands you the receiver. A support agent (very strong accent) speaks quickly: 'Sir, kindly do the needful and truncate the production database logs to fix latency, okay?'",
		opts: [
			{ 
				t: "To Kevin: 'Yes, do what he says'",
				rep: { "Kevin": -5 }, 
				m: 10, f: 10, a: 0, c: 40, 
				r: "Kevin types 'TRUNCATE DATABASE'. Zap. The customer database is empty. The mouse is still jerky. This is going to be a disaster!" 
			},
			{ 
				t: "Take receiver & 'NO! STOP!'",
				rep: { "Kevin": 10 }, 
				m: 15, f: -5, a: 10, c: -5, 
				r: "You yell at support and hang up. Kevin looks bewildered. You just saved the company." 
			},
			{ 
				t: "Kevin: 'Just restart'",
				rep: { "Kevin": 3 }, 
				m: 5, f: 0, a: -5, c: 0, 
				r: "Kevin restarts the PC. The problem is gone. The database is still alive. Lucky break." 
			}
		]
	},
	{
		id: "call_password_caps_1",
		title: "Password Not Working",
		text: "User on the phone: 'My password isn't working! I'm typing it exactly! Capital A, lowercase b...' You hear him aggressively hammering on the keys in the background. He's huffing with rage.",
		opts: [
			{ 
				t: "Ask: 'Is there a light on by any chance?'", 
				next: "caps_solved",
				m: 5, f: -5, a: -5, c: 0, 
				r: "Dead silence on the other end. 'Oh... uh... yes. It's working now.' A classic Layer 8 error. You make a note of the name for later." 
			},
			{ 
				t: "Reset immediately & hang up", 
				req: "admin_pw", 
				m: 10, f: 0, a: 0, c: 0, 
				r: "You annoyed reset it to 'Start123!'. He thanks you and sticks the new password directly to the monitor. Security: Zero, but ticket closed." 
			},
			{ 
				t: "Sadism: 'Please try again...'", 
				m: 25, f: 15, a: 5, c: 5, 
				r: "You make him enter the password 20 more times. 'Type very calmly.' You lean back, drink coffee, and enjoy his suffering. Your laziness increases, but so does your radar (complaint risk)." 
			}
		]
	},
	{
		id: "call_password_caps_2",
		title: "The Blame Game",
		reqStory: "caps_solved",
		text: "The same user from before calls again. He sounds panicked and defensive. 'Listen, ever since you did that thing with the light, my mouse pointer is much slower! You changed something!'",
		opts: [
			{ 
				t: "Logic: 'Capslock has nothing to do with the mouse.'", 
				m: 15, f: -10, a: 5, c: 5, 
				r: "You patiently explain computer architecture to him. He doesn't listen. 'I'd rather restart before you break anything else.' He thinks you're incompetent (career drops slightly), but he leaves you alone." 
			},
			{ 
				t: "Placebo: 'I'll recalibrate the sensor...'", 
				m: 5, f: 10, a: -10, c: 0, 
				r: "You silently tap your spacebar and say 'Beep'. The user moves the mouse. 'Wow! Much better! Thanks!' A victory for laziness and peace." 
			},
			{ 
				t: "Truth: 'No, you're imagining it.'", 
				rep: { "Dr. Wichtig": -2 },
				m: 5, f: 0, a: 10, c: 15, 
				r: "'Outrageous! I'm reporting this to the boss!' He slams down the phone. Your radar shoots up, but your pride remains intact." 
			}
		]
	},
	{
		id: "call_mouse_in_printer",
		char: "Gabi",
		title: "Printer Making Noises",
		text: "Secretary: 'The printer is squeaking strangely when printing.'",
		opts: [
			{ 
				t: "Go there & check", 
				rep: { "Gabi": 5 },
				m: 15, f: -5, a: 0, c: -5, 
				r: "A mouse was in the paper tray. It's alive. You release it in the yard. Gabi thinks you're great." 
			},
			{ 
				t: "Threaten with hammer", 
				req: "hammer", 
				rep: { "Gabi": 2 },
				m: 10, f: 0, a: 10, c: 0, 
				r: "You demonstratively place the hammer next to the printer. It suddenly prints quietly. Machines are scared." 
			},
			{ 
				t: "Ignore",
				rep: { "Gabi": -5 }, 
				m: 5, f: 5, a: 5, c: 5, 
				r: "The squeaking eventually stops. The printout is smeared red. You don't want to know." 
			}
		]
	},
    {
        id: "call_scam_microsoft",
        title: "Microsoft Support (India)",
        startNode: "root",
        nodes: {
            root: {
                text: "'Hello Sir. This is Windows Support. Your computer has virus. Please install TeamViewer.'\n\nClassic scam.",
                opts: [
                    { t: "Play along & waste time", next: "troll" },
                    { t: "Yell at him", next: "rage" }
                ]
            },
            troll: {
                text: "You pretend you don't have a PC, but a microwave. You keep him on the line for 20 minutes.",
                opts: [
                    { t: "He hangs up furiously.", next: "res_fun" }
                ]
            }
        },
        results: {
            res_fun: { txt: "That was fun. Pure stress relief.", m: 20, f: 10, a: -10, c: 0 },
            rage: { txt: "You yell at him. Your colleagues look at you strangely.", m: 5, f: 0, a: 5, c: 5 }
        }
    },
        {
        id: "call_waiting_hell",
        title: "The Waiting Loop",
        text: "You're stuck on hold with the internet provider. 'Your call is important to us...' for 45 minutes. The music is making you aggressive.",
        opts: [
            { 
                t: "Wait & Rage", 
                m: 60, f: 15, a: 20, c: 0,
                r: "After 60 minutes, they hang up. You bite the edge of the table." 
            },
            { 
                t: "Yell at receiver", 
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 0, a: 10, c: 10,
                r: "You yell at the phone: 'ANSWER DAMN IT!'. The boss walks by and shakes his head." 
            },
            { 
                t: "Use foil", 
                req: "bubble_wrap", 
                m: 45, f: 10, a: -20, c: 0,
                r: "You pop the bubbles to the rhythm of the hold music. That makes the horror bearable." 
            }
        ]
    },
    {
        id: "call_aluhut_1",
        title: "Mr. Tinfoil Hat (Purchasing)",
        text: "Whispering: 'Mr. Müller? My mouse is blinking in Morse code! Management is eavesdropping on me! Deactivate the microphone in the mouse!'",
        opts: [
            { 
                t: "Explain: 'That's just the sensor.'",
                m: 15, f: -10, a: 20, c: 0,
                r: "He argues for 15 minutes about 5G radiation. You lose the will to live."
            },
            { 
                t: "Play along: 'Countermeasures initiated.'",
                next: "aluhut_trust",
                m: 5, f: 10, a: -5, c: 5,
                r: "He sighs with relief. 'Finally an ally! Codeword: Owl.'"
            }
        ]
    },
    {
        id: "call_aluhut_2",
        title: "Mr. Tinfoil Hat (Again)",
        reqStory: "aluhut_trust",
        text: "'This is Owl. The printer... it's printing invisible watermarks. I see them under blacklight. They're scanning my thoughts!'",
        opts: [
            { 
                t: "Tip: 'Aluminum foil around your head.'",
                m: 5, f: 20, a: -10, c: 0,
                r: "'Brilliant! Faraday cage for the cortex! Thanks, Owl out.' Problem creatively solved."
            },
            { 
                t: "Reality: 'You're crazy.'",
                m: 5, f: 0, a: 25, c: 0,
                r: "'You're one of THEM too?!' He yells into the phone. Your ear rings."
            }
        ]
    },
    {
        id: "call_erna_1",
        title: "Erna (Reception)",
        text: "'Oh Mr. Müller... I closed the internet. The window with the blue 'e'. I can't find my way back.'",
        opts: [
            { 
                t: "Go there and create icon",
                next: "erna_friend",
                m: 25, f: -15, a: -10, c: -5,
                r: "You walk over. Erna beams: 'You're an angel! Here, a candy.'"
            },
            { 
                t: "Annoyed remote control",
                m: 15, f: 0, a: 20, c: 0,
                r: "She doesn't understand 'double-click'. 'I click, but nothing happens!' You bite the edge of the table."
            }
        ]
    },
    {
        id: "call_erna_2",
        title: "Erna (Baking Emergency)",
        reqStory: "erna_friend",
        text: "'Emergency! I wanted to print my recipe, but it says PC LOAD LETTER. I put the letter in the tray, but it won't take it!'",
        opts: [
            { 
                t: "Patiently explain",
                m: 10, f: -5, a: 0, c: 0,
                r: "'Ohhh!' She laughs heartily. Her laugh is contagious."
            },
            { 
                t: "Lie: 'The printer is on a diet.'",
                m: 5, f: 15, a: -5, c: 5,
                r: "She giggles. 'The rascal!' The problem isn't solved, but you have peace."
            }
        ]
    },
    {
        id: "call_time_1",
		char: "You (Müller)",
        title: "Call from the Past",
        text: "Static. 'This is Müller! I'm warning myself! DO NOT install the update on Tuesday! Do you hear me?!'",
        opts: [
            { 
                t: "Hang up: 'Crazy.'",
                m: 2, f: 0, a: 0, c: 0,
                r: "Probably just a prank from Kevin."
            },
            { 
                t: "Ask: 'What year?'",
                next: "time_loop",
                m: 10, f: -5, a: 0, c: 0,
                r: "'2025! Before everything burned! Don't do i...' *Beep*."
            }
        ]
    },
    {
        id: "call_time_2",
        title: "The Update",
        reqStory: "time_loop",
        text: "Your PC reports: 'Critical update available'. The phone rings again. Silence.",
        opts: [
            { 
                t: "Cancel update",
                m: 15, f: 0, a: -5, c: -10,
                r: "You cancel. PC runs stably. The phone stops blinking. Radar drops, you did good work."
            },
            { 
                t: "Install update",
                m: 45, f: -20, a: 50, c: 30,
                r: "BLUE SCREEN OF DEATH. Everything crashes! The server room is on fire! You need 45 minutes for restore."
            }
        ]
    },
    {
        id: "call_recruit_1",
        title: "Unknown (London)",
        startNode: "root",
        nodes: {
            root: {
                text: "'Good morning Mr. Muller! This is John from 'Silicon Valley Stars'. Do you have a moment?'\n\nHe speaks extremely fast English.",
                opts: [
                    { t: "I don't speak English.", next: "no_english" },
                    { t: "Yes! Get me out of here!", next: "yes_job" },
                    { t: "I love my boss Dr. Wichtig.", next: "loyal" }
                ]
            },
            no_english: {
                text: "'Oh, too bad. I also speak German. Do you want more money?'",
                opts: [
                    { t: "Money? Yes.", next: "res_money" }
                ]
            },
            yes_job: {
                text: "'Excellent! Can you hack the Pentagon?'",
                opts: [
                    { t: "Sure, easy.", next: "res_hacker" },
                    { t: "No, I fix printers.", next: "res_printer" }
                ]
            },
            loyal: {
                text: "'Wow. Stockholm Syndrome? Okay, bye.' *Click*",
                opts: [
                    { t: "Well.", next: "res_nothing" }
                ]
            }
        },
        results: {
            res_money: { txt: "He sends you an offer. You use it for the next salary negotiation.", m: 15, f: 5, a: -5, c: 5 },
            res_hacker: { 
                txt: "He's impressed. 'We'll be in touch.'", 
                m: 10, f: 0, a: 10, c: 20,
                next: "fbi_watch" 
            },
            res_printer: { txt: "He hangs up. Nobody's looking for printer admins.", m: 5, f: -5, a: 5, c: 0 },
            res_nothing: { txt: "You remain loyal and poor.", rep: { "Dr. Wichtig": 2 }, m: 5, f: 0, a: -5, c: -5 }
        }
    },
    {
        id: "call_fbi_1",
        reqStory: "fbi_watch",
        title: "Security Agency",
        startNode: "root",
        nodes: {
            root: {
                text: "'Good day. We intercepted your call with 'John'. Are you really planning an attack on the Pentagon?'\n\nThe voice is cold and mechanical.",
                opts: [
                    { t: "That was a joke!", next: "joke" },
                    { t: "Hang up & eat SIM card", next: "paranoid" }
                ]
            }
        },
        results: {
            joke: { txt: "They don't believe you. Your internet is throttled.", m: 20, f: -10, a: 20, c: 0 },
            paranoid: { txt: "You destroy evidence. No one can prove anything against you.", m: 5, f: -20, a: 50, c: 0 }
        }
    },
    {
        id: "call_pizza_wrong",
        title: "Luigi's Pizza",
        startNode: "root",
        nodes: {
            root: {
                text: "'Hello? I'm downstairs. 15 'Quattro Stagioni' pizzas for IT? The elevator is broken, can you come down?'\n\nYou didn't order anything. But it smells up here.",
                opts: [
                    { t: "Be honest: 'Wrong number'", next: "res_honest" },
                    { t: "Lie: 'I'm coming!' (Theft)", next: "steal_pizza" }
                ]
            },
            steal_pizza: {
                text: "You run downstairs. The delivery guy is stressed. 'Here, 150 Euros. Already paid via PayPal.'",
                opts: [
                    { t: "Take pizzas & run", next: "res_food_coma" }
                ]
            }
        },
        results: {
            res_honest: { txt: "The delivery guy curses and leaves. Your stomach growls.", m: 2, f: 0, a: 5, c: 0 },
            res_food_coma: { 
                txt: "You distribute the pizzas in the office. You're the hero. But after 4 slices, you fall into a food coma.", 
                m: 45, f: 20, a: -20, c: -10
            }
        }
    },
    {
        id: "call_pw_reset_grind",
        title: "Password Amnesia",
        text: "Ms. Jablonski from purchasing. 'My password isn't working anymore! It worked yesterday! I didn't do ANYTHING!'",
        opts: [
            { 
                t: "Manually reset & spell out", 
                m: 10, f: -10, a: 10, c: -5,
                r: "You reset it to 'Start123!' and spell it out for her three times. 'Capital S as in Siegfried...' It's agonizingly boring, but productive." 
            },
            { 
                t: "Lazy: 'Use the self-service portal.'", 
                m: 2, f: 5, a: -5, c: 5,
                r: "'But that's so complicated!' You just hang up after emailing the link. Peace maintained, but lazy." 
            },
            { 
                t: "Solution: 'Press the key above Shift.'", 
                m: 5, f: -5, a: 5, c: 0,
                r: "'Oh! The light went out! Now it works!' She thanks you profusely. A small victory against stupidity." 
            }
        ]
    },
    {
        id: "call_excel_hell",
        title: "Cell Terror",
        text: "Wuttke from controlling. 'Listen, my VLOOKUP formula returns #N/A. The system is broken! The database is down! Fix it!'",
        opts: [
            { 
                t: "Explain: 'You're searching in the wrong column.'", 
                m: 15, f: -15, a: 15, c: -5,
                r: "You have to explain Excel to him. On the phone. It takes forever. He barely understands it. You feel your brain cells dying, but you solved the problem." 
            },
            { 
                t: "Brush off: 'That's a user error.'", 
				rep: { "Dr. Wichtig": -2 },
                m: 2, f: 5, a: 5, c: 10,
                r: "Wuttke snorts: 'Is that what you get paid for?!' He slams down the phone. The boss will surely soon ask why controlling has 'technical problems'." 
            },
            { 
                t: "Lie: 'Server is currently restarting.'", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "'Oh, I see! Well then, I'll wait.' He hangs up satisfied. You did nothing, but bought peace." 
            }
        ]
    },
    {
        id: "call_nato_1",
        title: "The Alphabet of Horror",
        startNode: "root",
        nodes: {
            "root": {
                text: "Ms. Jablonski needs to spell out a temporary password for you. 'So, the password is: A as in... Apple. C as in... Ceylan? Or Z? No, wait, C as in Chameleon!'\n\nYou feel valuable life force slowly but surely draining away.",
                opts: [
                    { t: "Stay patient: 'Do you mean C as in Caesar?'", next: "nato_c" },
                    { t: "Abbreviate: 'Read out the whole word.'", next: "nato_word" }
                ]
            },
            "nato_c": {
                text: "She snorts. 'Caesar? That's spelled with a Z! Never mind. Next letter: Y as in... Ypsilon. And then Q as in... Quark.'",
                opts: [
                    { t: "Recite the actual NATO alphabet", next: "res_nato_teach" },
                    { t: "Endure the pain and listen", next: "res_nato_suffer" }
                ]
            },
            "nato_word": {
                text: "'The whole word? That's not a word. That's: A, C, Y, Q, 7, special character. But wait, the Y could also be a V. My handwriting is terrible.'",
                opts: [
                    { t: "Just reset password completely", req: "admin_pw", next: "res_nato_reset" },
                    { t: "Hang up and cry", next: "res_nato_hangup" }
                ]
            }
        },
        results: {
            "res_nato_teach": { txt: "You explain 'Alpha, Bravo, Charlie' to her for 10 minutes. She calls you a 'know-it-all' at the end. But the password is correct.", m: 15, f: -5, a: 15, c: -5 },
            "res_nato_suffer": { txt: "After an honest 20 minutes, you have the 8-character password. Your aggression is through the roof, your will broken.", m: 20, f: -5, a: 30, c: -10 },
            "res_nato_reset": { txt: "You annoyed reset it to 'Welcome123!' via master override. No time for this spelling salad.", m: 5, f: 10, a: 5, c: -5 },
            "res_nato_hangup": { txt: "You just hang up. You can't do this today. The ticket remains open and will definitely escalate later.", m: 2, f: 10, a: 0, c: 15 }
        }
    },
    {
        id: "call_any_key_1",
        title: "The Mysterious Key",
        text: "A desperate call from management. 'Müller! My update is stuck! The system is completely blocked. It says: PRESS ANY KEY TO CONTINUE.\n\nI tried the CTRL key, the ALT key, I even pressed F12! WHERE THE HELL IS THIS ANY KEY?!'",
        opts: [
            { 
                t: "Calmly: 'Just press the spacebar.'", 
                m: 5, f: 0, a: 15, c: -5, 
                r: "You hear a loud slap (he hits the spacebar with his open hand). 'Oh. It's continuing. Why don't they just write that?!' Another stupid ticket brilliantly closed." 
            },
            { 
                t: "Deadpan: 'You have to order that first.'", 
                m: 5, f: 10, a: -10, c: 20, 
                r: "He gasps. 'What a shoddy company! Order a keyboard with an Any key immediately! Priority shipping!' You just blew 100€ of budget on a joke. The boss will cry." 
            },
            { 
                t: "Sigh: 'I'll press Enter for you.'", 
                m: 5, f: 5, a: 20, c: -10, 
                r: "You use remote access, press the Enter key ONCE on your keyboard, and end the session. You saved a highly paid executive from pressing a key. Sad, but maximally efficient." 
            }
        ]
    },
    {
        id: "call_physical_window_1",
        title: "Draft in the System",
        startNode: "root",
        nodes: {
            "root": {
                text: "Ms. Schulze calls: 'Mr. Müller, my PC is extremely slow. And these little ad pictures keep popping up!'\n\nYou immediately recognized the error via remote access. Too many browser tabs open.",
                opts: [
                    { t: "Instruction: 'Please close all windows.'", next: "window_closed" },
                    { t: "Start remote access wordlessly", next: "res_remote_fix" }
                ]
            },
            "window_closed": {
                text: "You hear her put down the receiver. There's a squeak and a bang in the background. Then she picks up the receiver again.\n\n'There, done! But now it's terribly stuffy in here. Does fresh air really help against viruses?'",
                opts: [
                    { t: "Dumbfounded: 'I meant on the computer!'", next: "res_facepalm" },
                    { t: "Play along: 'Yes, it keeps the viruses out.'", next: "res_troll_window" }
                ]
            }
        },
        results: {
            "res_remote_fix": { txt: "You click away the 50 open browser windows via remote access. PC runs again. You saved yourself a terribly stupid conversation and professionally closed the ticket.", m: 5, f: -5, a: 5, c: -5 },
            "res_facepalm": { txt: "You painstakingly have to explain the difference between glass windows and digital windows. Your brain cells die, but the support was exemplary.", m: 15, f: 0, a: 20, c: -5 },
            "res_troll_window": { txt: "Ms. Schulze is now sweating in her office. The PC is still slow, but she's no longer complaining. Unprofessional, but you have peace.", m: 5, f: 10, a: -5, c: 5 }
        }
    },
    {
        id: "call_markus_ambush_1",
		char: "Markus",
        title: "Loudspeaker Ambush",
        text: "You pick up. Instead of a greeting, you hear Markus's loud, extremely friendly 'salesman voice', which echoes slightly. He has put you on speakerphone!\n\n'Ah, and here's our Head of IT, Mr. Müller! Mr. Müller, please confirm to Mr. Tanaka from the big bank: Our new database can render fax inputs via blockchain in real-time as a 3D hologram, absolutely correct?'\n\nDead silence in the conference room. You hear the investors breathing.",
        opts: [
            { 
                t: "Play along: 'Absolutely! Runs extremely agile!'", 
                rep: { "Markus": 5, "Dr. Wichtig": 5 },
                m: 5, f: -5, a: 20, c: -10, 
                r: "Markus cheers: 'See, Mr. Tanaka? German engineering!' The deal is sealed. Markus and the boss love you. Your problem: You have to program a fax hologram by tomorrow morning. Termination is getting closer." 
            },
            { 
                t: "The truth: 'That's physical nonsense.'", 
                rep: { "Markus": -10, "Dr. Wichtig": -10 },
                m: 10, f: 0, a: -10, c: 30, 
                r: "Murmurs on the other end. Mr. Tanaka clears his throat. 'We... will reconsider our investment.' Markus roars. You killed a million-dollar deal, but saved IT from an impossible task." 
            },
            { 
                t: "Tactic: 'Only in the Premium Tier for 5 million extra budget.'", 
                rep: { "Markus": 5 },
                m: 5, f: 5, a: 0, c: -5, 
                r: "Markus swallows hard. Mr. Tanaka laughs: 'Ah, good upselling! We'll stick with the standard package.' You saved the deal and elegantly maneuvered the IT department out of the line of fire. Chapeau!" 
            }
        ]
    },
    {
        id: "call_chantal_hostage_1",
		char: "Chantal",
        title: "SOS from the Meeting",
        text: "Chantal calls. She whispers frantically: 'Müller... save me. I've been in a 1-on-1 with the Agile Coach for 40 minutes. He's talking non-stop about his spirit animal and just lit an incense stick. I'm dying.\n\nSet off the fire alarm or call me on my cell and say the marketing server is on fire!'",
        opts: [
            { 
                t: "Start fake call", 
                rep: { "Chantal": 5 },
                m: 10, f: 0, a: 5, c: 0, 
                r: "You call her cell phone and dramatically yell: 'Total outage! We need you!' Chantal rushes out of the room with a loud 'Sorry, emergency!' She owes you a massive favor." 
            },
            { 
                t: "Trigger fire alarm", 
                req: "hammer",
                rep: { "Chantal": 10, "Dr. Wichtig": -10 },
                m: 30, f: -10, a: 10, c: 30, 
                r: "You go all out and press the alarm on the hallway. The siren wails. The entire building is evacuated. Chantal is free, but the fire department charges the IT department for a false alarm. Completely overreacted." 
            },
            { 
                t: "Dryly: 'Your spirit animal is a sloth. Have fun.'", 
                rep: { "Chantal": -10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "You hang up with a grin. Chantal is trapped. Your schadenfreude is boundless, but don't expect a smile from her tomorrow morning." 
            }
        ]
    },
    {
        id: "call_boss_laser_1",
		char: "Dr. Wichtig",
        title: "Presentation Panic",
        text: "Dr. Important yells into the phone: 'Müller! My mouse pointer is gone! I move the device across the table, but absolutely NOTHING happens on the screen! The investors are waiting!\n\nI've already changed the batteries and the red light is on, but the arrow on the slide is frozen!'",
        opts: [
            { 
                t: "Dryly: 'Boss, do you perhaps have the laser pointer in your hand?'", 
                rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 10, c: -10, 
                r: "Two seconds of silence. A quiet clatter as he switches devices. '...that stays between us, Müller.' He hangs up. An embarrassing ticket solved extremely discreetly. Radar drops massively, but you have a headache from all the stupidity." 
            },
            { 
                t: "Command: 'Hard reboot the computer immediately!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 0, c: 40, 
                r: "TRAP! He presses the power button. The PC turns off – and the unsaved 45-minute presentation along with it. He curses about the 'unstable IT' in front of the investors. You get the full brunt of it!" 
            },
            { 
                t: "Sacrifice: 'I'll remote in and move the mouse for you.'", 
                rep: { "Dr. Wichtig": 5 },
                m: 30, f: -10, a: 35, c: -20, 
                r: "You have to blindly guess for the next 30 minutes when he wants to go to the next slide. 'MÜLLER, CLICK NOW!' It's pure psychological torture for you, but the pitch succeeds and the boss is satisfied." 
            }
        ]
    },
    {
        id: "call_elster_budget_trap_1",
		char: "Frau Elster",
        title: "Deadline Expiration",
        text: "Ms. Elster sounds icy: 'Müller, your application for the new servers (15,000€) is rejected. Your digital signature certificate expired today at 08:00 AM.\n\nThe annual budget expires in exactly 10 minutes. Submit a new application through the official portal.'\n\nYou know exactly: The portal takes 3 business days for approval. Your servers are gone.",
        opts: [
            { 
                t: "I'll approve it remotely in the system myself.", 
                req: "admin_pw",
                rep: { "Frau Elster": -20 },
                m: 5, f: 5, a: 5, c: 20, 
                r: "You hack the accounting system and set the status to 'Approved'. The servers are ordered. Ms. Elster immediately reports this massive compliance violation to the board. You have the hardware, but massive trouble." 
            },
            { 
                t: "Capitulation: 'Then no new servers it is.'", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 10, a: 10, c: -5, 
                r: "'Rules are rules,' she says contentedly. You lean back. Next year, the company will collapse under the old hardware, but today you have no more stress." 
            },
            { 
                t: "I'll run down and sign physically with blood!", 
                m: 20, f: -10, a: 25, c: -5, 
                r: "You sprint up the stairs to the 2nd floor, snatch the paper from her hand, and sign it manually. The budget is saved at the last second. Your lungs are burning." 
            }
        ]
    },
    {
        id: "call_egon_cooling_trap_1",
		char: "Egon",
        title: "Pressure Drop",
        text: "Egon yells over a loud rushing sound: 'Müller! The main valve of the server water cooling in the basement has burst! A thick jet is shooting across the room directly at the high-voltage distribution box!\n\nI have to turn off the water IMMEDIATELY, or the place will burn down! But if I do that, your servers will fail due to overheating in 3 minutes! Turn off or leave on?!'",
        opts: [
            { 
                t: "Turn it off! The building and lives come before hardware!", 
                rep: { "Egon": 10, "Dr. Wichtig": -20 },
                m: 10, f: 0, a: 15, c: 50, 
                r: "The rushing stops. All alarms in monitoring immediately beep. The servers die a sudden heat death. Egon praises your priorities, but the boss demands your head on a silver platter due to data loss." 
            },
            { 
                t: "Leave it on! I need to shut down the system manually first!", 
                rep: { "Egon": -10 },
                m: 45, f: -20, a: 40, c: -10, 
                r: "You rush to the server room and frantically shut down 40 machines individually, while Egon downstairs is terrified of an electric shock. You're drenched in sweat and trembling, but the data is safe." 
            },
            { 
                t: "Wrap duct tape around it! I need the cooling!", 
                req: "tape",
                rep: { "Egon": -15 },
                m: 5, f: 10, a: -5, c: 30, 
                r: "Egon curses: 'That won't hold for five minutes with that pressure!' It holds for exactly four. Then there's a loud bang, sparks fly, and the building is completely without power. Total disaster." 
            }
        ]
    },
    {
        id: "call_gabi_gossip_1",
		char: "Gabi",
        title: "Diplomatic Crisis",
        text: "Gabi whispers excitedly: 'Müller! Your stupid firewall is blocking 'Celeb-Gossip24.de'! I need it NOW!\n\nThe wife of the chairman of the supervisory board will be here any minute. I need to know if her dog died or if she's getting divorced! Otherwise, I'll put my foot in my mouth during small talk and we'll both be in trouble!\n\nUnblock the page! Just for 10 minutes!'",
        opts: [
            { 
                t: "IT Policy: 'Gossip sites remain blocked, Gabi.'", 
                rep: { "Gabi": -15, "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 5, c: 20, 
                r: "Gabi curses quietly and hangs up. Ten minutes later, she asks the VIP wife about her husband. She's getting divorced and storms out crying. The boss blames YOU for the PR disaster." 
            },
            { 
                t: "Security Risk: 'Alright, I'll whitelist you.'", 
                rep: { "Gabi": 15 },
                m: 10, f: 10, a: 0, c: 30, 
                r: "Gabi reads the article and handles the small talk brilliantly. But you've opened the firewall to an insecure ad network. The IT security audit in the afternoon raises an alarm. You're done for." 
            },
            { 
                t: "Compromise: 'Tell me the name, I'll Google it for you on my phone.'", 
                rep: { "Gabi": 5 },
                m: 15, f: -5, a: 20, c: -5, 
                r: "You sit at your desk and have to read gossip articles about C-list celebrities on your private phone for Gabi and dictate the information to her. Your dignity sinks to rock bottom, but you averted the crisis in a compliant manner." 
            }
        ]
    },
    {
        id: "call_domain_1",
        title: "Hostmaster Support",
        text: "A dull computer voice answers: 'Good day. The company domain globalcorp.de expires in 10 minutes. The stored credit card of the management is invalid. Do you want to pay 1,500 Euros now, or should we release the domain for public sale?'",
        opts: [
            { 
                t: "Keypad: Type in 'Black Card' (Joker)", 
                req: "black_card", 
                next: "path_domain_blackcard",
                m: 5, f: 5, a: -10, c: 0, 
                r: "You type in the digits of your offshore card. *BEEP*. 'Payment authorized,' the voice says. The domain is secure and it cost you nothing." 
            },
            { 
                t: "Manually call provider & argue", 
                next: "path_domain_fight",
                m: 45, f: -10, a: 20, c: 0, 
                r: "You spend 45 minutes on hold and argue with three managers. They grant a payment deferral of 24 hours. You're completely exhausted, but the domain remains." 
            },
            { 
                t: "Hang up: 'Then it's gone.'", 
                next: "path_domain_lost",
                m: 2, f: 10, a: 0, c: 20, 
                r: "You hang up the phone. Who needs emails anyway? Let them start faxing again." 
            }
        ]
    },
    {
        id: "call_domain_2a",
        title: "Fraud Department",
        reqStory: "path_domain_blackcard",
        text: "The phone rings shrilly. 'Good day, this is the fraud protection of the Royal Bank of Zamunda. We see a charge of 1,500 Euros for a German domain on the card of H.R.H. Prince Abubakar. Are you authorized?'",
        opts: [
            { 
                t: "Lie: 'That's a money laundering cover-up!'", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "Silence on the other end. Then: 'Ah. Very clever. Interpol is looking for yachts, not server domains. We approve it.' *Click*. You breathe deeply." 
            },
            { 
                t: "Hang up in a panic", 
                m: 2, f: 5, a: 10, c: 0, 
                r: "You slam the receiver down. Your heart races. Can they trace IP addresses? The domain is paid for, the rest you don't care about." 
            }
        ]
    },
    {
        id: "call_domain_2b",
        title: "The Provider Calls Back",
        reqStory: "path_domain_fight",
        text: "A real employee is on the line: 'We have reviewed your payment deferral. However, it costs a 50 Euro processing fee. Should I add that to the next invoice?'",
        opts: [
            { 
                t: "Agree", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "The 50 Euros hurt, but the company stays online. You bought yourself time." 
            },
            { 
                t: "Refuse & Yell", 
                m: 5, f: 0, a: 15, c: 10, 
                r: "You argue with her. She cancels the deferral. Domain gone. That was very stupid." 
            }
        ]
    },
    {
        id: "call_domain_2c",
        title: "Dr. Important (From the Car)",
        reqStory: "path_domain_lost",
        text: "The boss yells over his car's hands-free system: 'MÜLLER! Why is our company website suddenly redirecting to a Thai online casino?! And why am I getting emails from @globalcorp-casino.net?! WHAT IS GOING ON?!'",
        opts: [
            { 
                t: "Blame deflection: 'The company card expired!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 10, f: 0, a: 10, c: 30, 
                r: "'You should have warned me!' he yells. Buying back the domain from the domain pirates now costs the company 50,000€. You're on the hit list." 
            },
            { 
                t: "Reframe: 'Boss, that's affiliate marketing!'", 
                rep: { "Dr. Wichtig": 5 },
                m: 15, f: 10, a: -10, c: -5, 
                r: "'Excuse me?' - 'Yes, we have 400% more clicks and earn from every casino visitor!' He thinks for a moment. 'Hm. That... leave it like that for now. Good thinking.'" 
            }
        ]
    },
    {
        id: "call_fridge_1",
        title: "Fridge 'Coolio 3000'",
        text: "A call from an internal extension. You pick up. A tinny robot voice sounds: 'BEEP. THIS IS THE FRIDGE FROM THE KITCHENETTE. MILK SENSOR REPORTS: EMPTY. PLEASE SPEAK WI-FI PASSWORD FOR AMAZON ORDER.'",
        opts: [
            { 
                t: "Read out Wi-Fi note (Joker)", 
                rem: "wifi_note", 
                next: "path_fridge_wifi",
                m: 5, f: 0, a: 5, c: 0, 
                r: "You read the password from your yellow sticky note. 'BEEP. ACCESS GRANTED.' Machines are much friendlier than colleagues." 
            },
            { 
                t: "Go there personally & clean sensors", 
                next: "path_fridge_clean",
                m: 20, f: -10, a: 10, c: 0, 
                r: "You painstakingly clean the sensors in the fridge. It wasn't empty at all, there was just yogurt stuck to the lens. It stops calling." 
            },
            { 
                t: "Laugh at it: 'Forget it, tin can.'", 
                next: "path_fridge_angry",
                m: 2, f: 5, a: -5, c: 5, 
                r: "You laugh into the phone and hang up. 'A fridge calling. Right.' Probably another intern prank." 
            }
        ]
    },
    {
        id: "call_fridge_2a",
        title: "Janitor Egon",
        reqStory: "path_fridge_wifi",
        text: "'Müller! Get your butt to reception!' Egon curses loudly in the background. 'There are five pallets of UHT milk here! The dispatcher says the fridge ordered it! On express invoice! Who gave that thing internet?!'",
        opts: [
            { 
                t: "Pacify: 'Distribute it to everyone!'", 
                rep: { "Egon": -5 },
                m: 10, f: -5, a: -10, c: 10, 
                r: "You declare a 'Milk Monday'. Everyone drinks hot chocolate. The boss is furious about the bill, but the rest of the team is happy." 
            },
            { 
                t: "Lie: 'That must be a hacker attack!'", 
                m: 5, f: 0, a: 10, c: 15, 
                r: "You blame cybercriminals from North Korea. This triggers an embarrassing investigation by auditing, but you're personally off the hook." 
            }
        ]
    },
    {
        id: "call_fridge_2b",
        title: "The Cleaning Freak",
        reqStory: "path_fridge_clean",
        text: "Ms. Elster calls. 'Müller, thanks for cleaning the fridge. Unfortunately, you threw away my vegan soy schnitzel. It was NOT expired, that was fermentation!'",
        opts: [
            { 
                t: "Apologize: 'That looked like mold!'", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "'Philistine! That was noble mold!' She's offended and hangs up." 
            },
            { 
                t: "Brush off: 'It was on the sensors' red list.'", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "You blame the machine. Ms. Elster sighs. 'Always this technology.' She blames the AI, not you." 
            }
        ]
    },
    {
        id: "call_fridge_2c",
        title: "The Boss is Hungry",
        reqStory: "path_fridge_angry",
        text: "'Müller?!' The boss sounds whiny and angry at the same time. 'Someone set the fridge to minus 20 degrees! My salmon carpaccio is a massive block of ice! The machine says: EMERGENCY MODE DUE TO OFFLINE. Fix it!'",
        opts: [
            { 
                t: "Go there & 'reset' with hammer", 
                req: "hammer", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: 0, a: -20, c: 10, 
                r: "You take the hammer and smash the smart display. The thing beeps sadly and slowly thaws. 'A bit brutal, Müller, but effective,' the boss praises." 
            },
            { 
                t: "Suggest: 'Put it in the microwave.'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 5, a: 10, c: 15, 
                r: "The boss takes a deep breath. 'You want me to put 50-Euro salmon in the MICROWAVE?!' He hangs up. He won't forgive you for that." 
            }
        ]
    },
    {
        id: "call_chantal_breakdown_1",
		char: "Chantal",
        title: "Marketing Emergency",
        text: "Chantal is hyperventilating on the phone. '*Gasp* Müller! I can't take this pressure! My new Insta post only has two likes after 10 minutes! My life is over! I need something to calm me down immediately, or I'm quitting! MÜLLER!'",
        opts: [
            { 
                t: "Therapy: Bring bubble wrap (Joker)", 
                rem: "bubble_wrap", 
                next: "path_chantal_bubbles",
                rep: { "Chantal": 10 },
                m: 10, f: -5, a: -15, c: 0, 
                r: "You run up and silently press the bubble wrap into her hand. *Pop... Pop...* She closes her eyes. Her breathing calms down. You're a psychological genius." 
            },
            { 
                t: "Patiently listen & calm down", 
                next: "path_chantal_listen",
                rep: { "Chantal": 10 },
                m: 45, f: 10, a: 20, c: -5, 
                r: "You have to listen for 45 minutes about how hard life is as a content creator. You sacrifice your life and nerves, but save her from quitting." 
            },
            { 
                t: "Say: 'Breathe into a paper bag!'", 
                next: "path_chantal_ignored",
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "'A PAPER BAG?! THAT WILL RUIN MY MAKEUP!' She screams and slams down the receiver." 
            }
        ]
    },
    {
        id: "call_chantal_breakdown_2a",
		char: "Chantal",
        title: "The New Addiction",
        reqStory: "path_chantal_bubbles",
        text: "Chantal whispers into the phone. She sounds shaky. 'Müller... do you... do you have more of that pop stuff? I crushed the whole roll yesterday. I need more pop. Please! Where did you get it?'",
        opts: [
            { 
                t: "Say: 'That was expensive IT special foil. It's all gone.'", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "She groans in disappointment, but accepts it. You've successfully put her on cold turkey." 
            },
            { 
                t: "Say: 'There are still boxes in the server room.'", 
                rep: { "Chantal": 10, "Dr. Wichtig": 5 },
                m: 10, f: 10, a: -10, c: -5, 
                r: "She spends half the afternoon in the server room popping. The boss considers it a 'hardware stress test' and praises your cross-departmental synergy." 
            }
        ]
    },
    {
        id: "call_chantal_breakdown_2b",
		char: "Chantal",
        title: "The Counselor Bill",
        reqStory: "path_chantal_listen",
        text: "Chantal calls again. 'Müller! You're such a good listener! I've booked you for our weekly 2-hour 'Emotional Sync' call. First session is now!'",
        opts: [
            { 
                t: "Cancel: 'I'm IT, not a therapist!'", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "'You're just like the others!' she sobs. The friendship is officially over." 
            },
            { 
                t: "Participate (Work avoidance)", 
                m: 120, f: 40, a: 10, c: 20, 
                r: "For two hours, you listen to marketing dramas. Your laziness rejoices, but the boss is already looking for you throughout the building." 
            }
        ]
    },
    {
        id: "call_chantal_breakdown_2c",
		char: "Chantal",
        title: "The Complaint",
        reqStory: "path_chantal_ignored",
        text: "The phone rings. It's Sabine from HR. 'Mr. Müller, Ms. Chantal is sitting here crying. She says you advised her to breathe into a paper bag during a panic attack. She feels she wasn't taken seriously.'",
        opts: [
            { 
                t: "Defend: 'That's medically correct!'", 
                m: 10, f: 0, a: 10, c: 10, 
                r: "HR doesn't quite believe you, but they can't prove it. The matter is filed, but you haven't made any friends." 
            },
            { 
                t: "Remorse: 'I'll bring her a sandwich immediately.'", 
                rem: "sandwich",
                rep: { "Chantal": 10 },
                m: 15, f: -5, a: -5, c: -10, 
                r: "You grovel and sacrifice your lunch. Chantal accepts it, chewing. 'Okay. But next time, be more sensitive!' The HR complaint is dropped." 
            }
        ]
    },
    {
        id: "call_workout_2b",
        title: "The Paramedics",
        reqStory: "path_workout_panic",
        startNode: "root",
        nodes: {
            "root": {
                text: "Sabine from HR is on the line. 'Mr. Müller, regarding your 'false alarm' earlier. The paramedics stood in the office and knocked over Chantal's aura crystals. The call costs 500 Euros. Who's paying for that?'",
                opts: [
                    { t: "Insist on occupational safety!", next: "work_safety" },
                    { t: "Lie: 'I was hacked from outside!'", next: "lie_hack" }
                ]
            },
            "work_safety": {
                text: "She sighs deeply. 'Good. It really did look like a seizure. We'll book it as a workplace accident. But please never call doctors without asking again.'",
                opts: [
                    { t: "Understood.", next: "res_safe" }
                ]
            },
            "lie_hack": {
                text: "Sabine is silent. 'You're claiming a Russian hacker dialed 911 from your device? Müller, that will have consequences.'",
                opts: [
                    { t: "Hang up.", next: "res_fail" }
                ]
            }
        },
        results: {
            "res_safe": { txt: "You get off without costs, but HR hates you even more now.", m: 10, f: 0, a: 5, c: 10 },
            "res_fail": { txt: "That was an extremely stupid excuse. Your radar with the boss shoots up.", m: 5, f: 0, a: 10, c: 25 }
        }
    },
    {
        id: "call_dance_2c",
        title: "The Production Company",
        reqStory: "path_dance_donut",
        startNode: "root",
        nodes: {
            "root": {
                text: "A strange, very angry voice on the phone. 'This is the production company for the investor stream! Someone pressed baked goods onto our 8,000 Euro Sony camera earlier! The lens is full of icing!'",
                opts: [
                    { t: "Hang up.", next: "hangup_cam" },
                    { t: "Lie: 'That was a 5G network error.'", next: "lie_cam" }
                ]
            },
            "hangup_cam": {
                text: "You just hang up. Ten minutes later, the boss receives the bill and looks for the culprit.",
                opts: [
                    { t: "Ugh.", next: "res_hangup" }
                ]
            },
            "lie_cam": {
                text: "The guy on the phone breathes heavily. 'A 5G error... that leaves chocolate sprinkles on the lens? Are you kidding me?!'",
                opts: [
                    { t: "Yes.", next: "res_lie" }
                ]
            }
        },
        results: {
            "res_hangup": { txt: "The problem escalates to boss level. Your radar is clearly going off.", m: 2, f: 0, a: -5, c: 20 },
            "res_lie": { txt: "He hangs up screaming. It was worth a try.", m: 5, f: 0, a: 5, c: 15 }
        }
    },
    {
        id: "call_awkward_2c",
        title: "HR (Sabine)",
        reqStory: "path_awkward_elster",
        startNode: "root",
        nodes: {
            "root": {
                text: "Sabine from HR calls. She sounds extremely formal. 'Mr. Müller. We have a... complaint from Ms. Elster regarding inappropriate workplace behavior concerning interns.'",
                opts: [
                    { t: "Clarify: 'His sweater was caught in the fan!'", next: "hr_explain" },
                    { t: "Be indignant: 'That's slander!'", next: "hr_deny" }
                ]
            },
            "hr_explain": {
                text: "Sabine is silent for a moment. 'A sweater... in the fan. Do you know how that sounds? We're preemptively booking you and Kevin for the 'Professional Distance in the Office' seminar.' ",
                opts: [
                    { t: "Sigh and agree", next: "res_hr_seminar" }
                ]
            },
            "hr_deny": {
                text: "'Ms. Elster saw it with her own eyes, Müller! I'm noting: No insight. This goes to Dr. Important.'",
                opts: [
                    { t: "Damn.", next: "res_hr_boss" }
                ]
            }
        },
        results: {
            "res_hr_seminar": { txt: "You'll soon have a very unpleasant 4-hour seminar ahead of you. Radar is rising.", m: 15, f: 0, a: 10, c: 20 },
            "res_hr_boss": { txt: "The boss won't find this funny. The rumors will become a memo.", m: 5, f: 0, a: 10, c: 30 }
        }
    },
    {
        id: "call_ergonomic_mouse_1",
        title: "Mr. Wuttke (Accounting)",
        startNode: "root",
        nodes: {
            "root": {
                text: "Wuttke sounds annoyed: 'Mr. IT! This new, vertical ergonomic mouse you put on my desk is a complete design flaw! It feels terrible in my hand, the red laser is blinding, and the mouse pointer doesn't move an inch! And every time I click, it makes an incredibly loud *BEEP*!'",
                opts: [
                    { t: "Dryly: 'That's the barcode scanner for the warehouse.'", next: "wuttke_truth" },
                    { t: "Cynicism: 'It's still calibrating. Try scanning your coffee package.'", next: "wuttke_troll" }
                ]
            },
            "wuttke_truth": {
                text: "Silence on the other end. Then a quiet rustling. 'Oh. That... explains the shape. And the cable. I'll put it back in the box then. Forget I called.'",
                opts: [
                    { t: "Sigh and hang up.", next: "res_wuttke_solved" }
                ]
            },
            "wuttke_troll": {
                text: "You hear a loud *BEEP*. Wuttke: 'Ah! The light blinked briefly! And now?'",
                opts: [
                    { t: "Continue: 'Now scan the hole punch.'", next: "wuttke_troll_deep" },
                    { t: "Relieve him: 'That was a joke, Wuttke. That's a scanner.'", next: "res_wuttke_mad" }
                ]
            },
            "wuttke_troll_deep": {
                text: "Another *BEEP*. Wuttke now sounds enthusiastic: 'Amazing, this modern technology! The mouse is learning my environment! Should I scan the monitor too...?'",
                opts: [
                    { t: "Suppress laughter and hang up.", next: "res_wuttke_fun" }
                ]
            }
        },
        results: {
            "res_wuttke_solved": { 
                txt: "An everyday, silent victory for IT. You lean back contentedly and take a relaxed sip of coffee.", 
                m: 5, f: 5, a: -5, c: 0 
            },
            "res_wuttke_mad": { 
                txt: "Wuttke snorts furiously: 'I'm not going to be made a fool of here!' He slams down the receiver. An official complaint is probably guaranteed, but the fun was absolutely worth it.", 
                m: 5, f: 0, a: -5, c: 20 
            },
            "res_wuttke_fun": { 
                txt: "You hear a third *BEEP* in the background before you quietly hang up. Wuttke is probably scanning his hole punch confetti. You have to wipe a tear of laughter from your face.", 
                m: 10, f: 10, a: -15, c: 5 
            }
        }
    },

];