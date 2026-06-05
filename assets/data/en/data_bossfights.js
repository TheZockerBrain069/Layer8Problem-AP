export const bossfights = [

   {
		id: "boss_ransomware",
		title: "🚨 RANSOMWARE ATTACK 🚨",
		text: "A SKULL ON THE MAIN SERVER! 'Send 10 Bitcoin or everything will be deleted'. The countdown is on! (10 seconds)",
		timer: 10, 
		opts: [
			{ t: "Pull the plug!", m: 10, f: -10, a: 20, c: 10, r: "Brutal, but effective. Server's off. Data saved (maybe)." },
			{ t: "Enter admin code", req: "admin_pw", m: 5, f: 0, a: -10, c: -20, r: "Pro move! Attack repelled. Company hero!" }
		],
		fail: {rep: { "Dr. Wichtig": -20 }, m: 30, f: 0, a: 50, c: 50, r: "TOO SLOW! Data encrypted. Boss is fuming!" }
	},
	{
		id: "boss_fire",
		title: "🔥 SERVER FIRE 🔥",
		text: "Smoke in the server room! A capacitor exploded! Flames are leaping! Act now!",
		timer: 8,
		opts: [
			{ t: "Use fire extinguisher", req: "fire_ext", m: 30, f: -10, a: 10, c: -20, r: "Fire extinguished. You're coughing, but you're a hero." },
			{ t: "Run away and hit the alarm", m: 60, f: 10, a: 0, c: 10, r: "Fire department's coming. Office evacuated. You get a break." }
		],
		fail: { m: 120, f: -20, a: 30, c: 40, r: "SPRINKLER SYSTEM ACTIVE! Everything's wet. Total loss." }
	},
	{
		id: "boss_stream",
		title: "☠️ CEO LIVE-STREAM FAIL ☠️",
		text: "The CEO is presenting live to 5000 investors. The picture freezes! He calls you on your cell phone, yelling: 'MAKE IT WORK! NOW!'",
		timer: 12,
		opts: [
			{ t: "Switch to backup line", req: "admin_pw", m: 5, f: -10, a: 0, c: -20, r: "Pro reaction! The stream is back in 4K. The CEO looks relieved (and sweaty)." },
			{ t: "Set quality to 'Potato' (240p)", m: 5, f: 5, a: 0, c: 10, r: "It's flowing smoothly again. But the CEO looks like a Lego figure. The investors are laughing." }
		],
		fail: { rep: { "Dr. Wichtig": -20 }, m: 20, f: 0, a: 40, c: 60, r: "STREAM ABORTED. Stock price drops 10%. The boss is coming down personally..." }
	},
	{
		id: "boss_ddos",
		title: "🧟 ZOMBIE BOTNET ATTACK 🧟",
		text: "ALARM! Millions of hacked refrigerators are attacking our website! The firewall is glowing red! Traffic at 5000%!",
		timer: 15,
		opts: [
			{ t: "Activate geo-blocking", m: 10, f: -5, a: 5, c: -5, r: "Bam! All overseas traffic blocked. Site's running again. Collateral damage minimal." },
			{ t: "Pull the router plug", m: 5, f: 10, a: -5, c: 20, r: "The attack is stopped. But we're offline. Technically a success, economically a disaster." }
		],
		fail: { m: 60, f: -10, a: 30, c: 40, r: "SERVER CRASHED. The site is down. #GlobalCorpFail is trending on Twitter." }
	},
	{
		id: "boss_heat",
		title: "❄️ AC TOTAL FAILURE ❄️",
		text: "Silence in the server room. The cooling is dead. The temperature is rising rapidly! 40°C... 45°C... At 50°C, the CPUs will melt!",
		timer: 10,
		opts: [
			{ t: "Smash the window", req: "hammer", m: 5, f: 0, a: 20, c: 10, r: "CRASH! Ice-cold air rushes in (and a few pigeons). Hardware saved, window broken." },
			{ t: "Hit the emergency stop", m: 5, f: 5, a: 0, c: 15, r: "Everything shuts down. The silence is eerie. Hardware safe, but the company is at a standstill." }
		],
		fail: { m: 120, f: -20, a: 50, c: 50, r: "MELTDOWN! Smells like burnt plastic. The fire alarm goes off. Run!" }
	},
	{
		id: "boss_db_purge",
		title: "💀 DROP DATABASE PROD 💀",
		text: "ALARM! Intern Kevin 'accidentally' started the delete script on the LIVE DATABASE! The bars are turning red! Customer data is disappearing by the second! (8 seconds)",
		timer: 8,
		opts: [
			{ 
				t: "Build a network bridge", 
				req: "cable",
				m: 10, f: -10, a: 10, c: 0, 
				r: "You frantically re-plug cables and redirect traffic to the test server. The deletion runs into nothingness. Kevin stares at you in admiration." 
			},
			{ 
				t: "Admin override", 
				req: "admin_pw", 
				m: 5, f: 5, a: -10, c: -20,
				r: "With trembling hands, you type the root password. 'ROLLBACK COMPLETE'. You are a god. The data is safe." 
			},
			{ 
				t: "Rip out the power strip (Blackout)", 
				m: 45, f: 0, a: 20, c: 30,
				r: "CLICK. Sparks fly. The office is dark. The deletion is stopped... just like the rest of the company. The server check takes forever (45 min), but the data still lives." 
			}
		],
		fail: { 
			rep: { "Dr. Wichtig": -10 },	
			m: 120, f: -50, a: 50, c: 80, 
			r: "DATABASE EMPTY. 'Error 404: Company not found'. The boss is crying in the server room. You should probably update your resume." 
		}
	},
	{
		id: "boss_tiktok",
		title: "🤳 TIKTOK INVASION 🤳",
		text: "A famous influencer has broken into the server room! 'Yo guys, check out these blinking lights! I'm gonna pull this for the prank!' He reaches for the main switch!",
		timer: 12,
		opts: [
			{ 
				t: "Restrain (Citizen's Arrest)", 
				req: "zip_ties",
				m: 15, f: -5, a: -20, c: 10, 
				r: "You zip-tied him to a rack until security arrived. The video goes viral: 'Sigma Male Admin defends territory'. The comments are praising you." 
			},
			{ 
				t: "Spray with fire extinguisher", 
				req: "fire_ext", 
				m: 10, f: 0, a: 30, c: 0, 
				r: "WOOSH! You completely covered him in foam. He coughs and runs away: 'My merch is ruined!'. The servers are dusty, but safe." 
			},
			{ 
				t: "Bodycheck (Tackle)", 
				m: 5, f: 0, a: 40, c: 20, 
				r: "You ram him with full force before he pulls the plug. His smartphone flies against a rack (broken). He cries and threatens with a lawyer. You have bruises and are furious." 
			}
		],
		fail: { 
			m: 60, f: 0, a: 50, c: 50, 
			rep: { "Dr. Wichtig": -10 },	
			r: "HE PULLED THE PLUG! 'Oooops, just a prank bro!'. The internet is gone. You go viral as 'The Crying Admin' and become a meme. The boss is 'not amused'." 
		}
	},
	{
		id: "boss_ups_battery",
		title: "🔋 UPS BATTERY ACID 🔋",
		text: "The emergency power battery is swelling like a balloon! It's hissing! Acid threatens to leak and drip through the raised floor to the floor below (CEO's office)!",
		timer: 10,
		opts: [
			{ t: "Seal it (MacGyver)", req: "tape", m: 10, f: 0, a: 0, c: -10, r: "You wrap a whole roll of duct tape around it. It holds the pressure... just barely. Time bomb defused (for today)." },
			{ t: "Throw it out the window", m: 5, f: 10, a: 20, c: 20, r: "You threw the 20kg thing through the closed window. It explodes in the parking lot. Better there than here." }
		],
		fail: { rep: { "Dr. Wichtig": -20 }, m: 240, f: -30, a: 40, c: 80, r: "ACID LEAK! It's eating through the floor. It's dripping onto the CEO's desk. The smell is putrid." }
	},
	{
		id: "boss_skynet_lock",
		title: "🔒 DOORS LOCKED 🔒",
		text: "Security system malfunction! The fire doors are closing. Oxygen is being sucked out (Halon system). You have 10 seconds before you pass out!",
		timer: 10,
		opts: [
			{ 
				t: "Unscrew the door", 
				req: "screw", 
				m: 10, f: -10, a: 0, c: 0, 
				r: "In record time, you unscrewed the panel and short-circuited the wires. Door open. You live!" 
			},
			{ 
				t: "Smash window with hammer", 
				req: "hammer", 
				m: 5, f: 0, a: 10, c: 10, 
				r: "CRASH! You climb through the shards. Freedom! But you'll have to explain the damage." 
			},
			{ 
				t: "Ram window with elbow", 
				m: 5, f: 0, a: 30, c: 10, 
				r: "OUCH! With a scream, you throw yourself into the glass. It shatters. Your arm is bleeding and throbbing wildly, but you can breathe." 
			}
		],
		fail: {
			rep: { "Dr. Wichtig": -10 },				
			m: 120, f: 30, a: 20, c: 50, 
			r: "PASSED OUT. You wake up in the hospital. The boss is at your bedside: 'He who sleeps, gets fired! We'll deduct that from your salary!'" 
		}
	},
	{
		id: "boss_coffee_crisis",
		title: "☕ COFFEE MACHINE EXPLOSION ☕",
		text: "NOT THE SERVER ROOM! WORSE! The industrial machine in the kitchen is vibrating and spraying hot steam! The pressure vessel is about to burst! Without coffee, the department dies!",
		timer: 9,
		opts: [
			{ t: "Open pressure relief valve", req: "screw", m: 5, f: -5, a: -10, c: -5, r: "Hissing, the pressure escapes. You are the hero of the staff. Applause in the hallway!" },
			{ t: "Pull the plug & run away", m: 5, f: 10, a: 10, c: 10, r: "The machine slowly calms down. But: NO MORE COFFEE TODAY. Colleagues look at you with murderous eyes." }
		],
		fail: { m: 60, f: 0, a: 50, c: 20, r: "KA-BOOM! The kitchen is full of coffee grounds. The machine is junk. Company morale drops to 0. Anarchy reigns." }
	},
	{
		id: "boss_printer_rage",
		title: "BOSS: THE PRINTER OF DEATH",
		text: "ALARM! The large office printer rattles like a machine gun! It's spitting out hundreds of black pages, smoke is rising. The display flashes: 'FEED ME STRAY CAT'. It threatens to overheat and trigger the sprinkler system!",
		timer: 15,
		opts: [
			{ 
				t: "PERCUSSIVE MAINTENANCE!", 
				req: "hammer",
				m: 5, f: 5, a: -20, c: 0, 
				r: "BAM! A well-aimed hammer blow to the casing. Silence. The printer beeps peacefully 'Ready'. Violence is a solution after all." 
			},
			{ 
				t: "Look for paper jam", 
				m: 10, f: -5, a: 20, c: 10, 
				r: "You reach into the mechanism. The printer bites you! You have ink on your face and burns on your fingers. It stops on its own because it ran out of paper." 
			},
			{ 
				t: "Pull the plug", 
				m: 5, f: 0, a: 10, c: 20, 
				r: "You crawl under the desk and rip out the cable. In doing so, you take down the secretary's PC. She screams. The printer is off, but the trouble is big." 
			}
		],
		fail: { r: "BOOOOM! The printer exploded. The sprinklers go off. Everything is wet. You are wet. The day is ruined.", m: 60, f: -10, a: 50, c: 50 }
	},
	{
		id: "boss_cable_mess",
		title: "BOSS: THE ISO AUDITOR IS COMING",
		text: "PANIC! The strict TÜV auditor is in the hallway, unannounced! He's heading straight for the server room! The cables there are hanging like vines in a jungle from the ceiling. If he sees that, he'll revoke our certification!",
		timer: 20,
		opts: [
			{ 
				t: "Tie everything neatly", 
				req: "zip_ties",
				m: 10, f: -5, a: -10, c: -5, 
				r: "Snip, snip! In record time, you tie the cables into neat bundles. The auditor walks in: 'Exemplary! That's how it should look!' Phew." 
			},
			{ 
				t: "Stuff everything into the cabinet", 
				m: 5, f: 5, a: 10, c: 10, 
				r: "You shove the mass of cables into the cabinet and lean against the door. The auditor looks suspiciously. The door creaks suspiciously. He moves on, but that was close." 
			},
			{ 
				t: "Distract him: 'Fire alarm!'", 
				m: 5, f: 0, a: 0, c: 40, 
				r: "You hit the fire alarm. Everyone has to evacuate. Audit canceled. But now the fire department is coming (Cost: 1000€). The boss is looking for the culprit." 
			}
		],
		fail: { rep: { "Dr. Wichtig": -10 }, r: "The auditor opens the door. He sees the chaos. He cries softly. 'Certificate revoked.' The boss is furious.", m: 60, f: 0, a: 40, c: 60 }
	},
	{
		id: "boss_water_leak",
		title: "BOSS: THE PIPE BREAKS",
		text: "HISS! A pipe burst in the tea kitchen! A jet of hot water shoots across the room... directly onto the unprotected power strip of the floor distributor! Power outage in 3... 2...",
		timer: 15,
		opts: [
			{ 
				t: "Seal with tape", 
				req: "tape",
				m: 5, f: 0, a: -10, c: 0, 
				r: "You wrap half a roll of tape around the pipe. It holds! It's only dripping slightly. This temporary fix will stay here for the next 10 years." 
			},
			{ 
				t: "Hold your thumb over it", 
				m: 60, f: -20, a: 30, c: 0, 
				r: "You hold the hole shut. You stand there for 60 minutes until the plumber comes. Your thumb is scalded, your mood is in the basement. But the server lives." 
			},
			{ 
				t: "Put a bucket underneath", 
				m: 5, f: 5, a: 0, c: 20, 
				r: "The bucket immediately fills up and overflows. The water hits the power outlet. Small bang, fuse blown. Not as bad as a fire, but embarrassing." 
			}
		],
		fail: { rep: { "Dr. Wichtig": -10 }, r: "ZAP! Short circuit. Sparks fly. Darkness. The server is dead. The refrigerator is dead. The boss stands in the dark, yelling your name.", m: 60, f: 0, a: 50, c: 50 }
	},
	{
		id: "boss_vga_fail",
		title: "BOSS: LIVESTREAM DISASTER",
		text: "The boss is giving his annual speech live to all investors! Suddenly the projector flickers. The image turns purple, then black. The VGA plug on the podium is loose and the thumb screws are missing! The boss is sweating and staring at you in a panic!",
		timer: 20,
		opts: [
			{ 
				t: "Screw the plug tight", 
				req: "screw",
				rep: { "Dr. Wichtig": 5 },
				m: 2, f: 5, a: -10, c: -10, 
				r: "You crawl under the podium, pull out the screwdriver, and secure the plug rock-solid. The image is crystal clear. The boss whispers: 'Good man!'" 
			},
			{ 
				t: "Hold the cable (Human Tripod)", 
				m: 45, f: -15, a: 20, c: 0, 
				r: "You have to hold the cable at a certain angle for the remaining 45 minutes of the presentation. Your hand cramps. You're visible in the livestream. Embarrassing." 
			},
			{ 
				t: "Wiggle & Pray", 
				m: 5, f: 0, a: 10, c: 30, 
				r: "It works for a moment... then off again... then on... Strobe effect. An investor has an epileptic seizure. Aborted." 
			}
		],
		fail: { rep: { "Dr. Wichtig": -10 }, r: "Image gone. Boss: 'Uh... technical difficulties...' The investors laugh. The stock price drops 2%. The boss holds you personally responsible.", m: 60, f: 0, a: 40, c: 80 }
	},
	{
		id: "boss_audit",
		title: "📋 THE DATA PROTECTION AUDITOR 📋",
		text: "An external auditor is in the server room, unannounced! He wants to see the 'Emergency Handbook' and the 'Deletion Protocol'! You have neither! He pulls out his red pen!",
		timer: 15,
		opts: [
			{ 
				t: "Show old manual", 
				req: "manual", 
				m: 5, f: 10, a: -10, c: -10, 
				r: "You throw him the Win95 manual. He flips through it... nods... 'Very classic. Approved.' Phew. Competence through age." 
			},
			{ 
				t: "Distract (Coffee)", 
				m: 10, f: 5, a: 0, c: 10, 
				r: "You invite him for coffee. He forgets about the protocol, but complains about the taste. Audit passed (barely)." 
			},
			{ 
				t: "Trigger fire alarm", 
				req: "hammer", 
				m: 5, f: 0, a: 10, c: 30, 
				r: "You smash the alarm. Audit canceled due to evacuation. Radical, but effective." 
			}
		],
		fail: { r: "Failed! Fine: 50,000€. The company is bankrupt. It's your fault.", m: 120, f: -50, a: 50, c: 100 }
	},
	{
		id: "boss_flood",
		title: "🌊 THE AQUARIUM BURSTS 🌊",
		text: "The huge ornamental fish aquarium in the CEO's office has a crack! 500 liters of water threaten to spill onto the Persian rug and the floor outlets! The CEO screams: 'SAVE THE KOIS!'",
		timer: 12,
		opts: [
			{ 
				t: "Glue the crack", 
				req: "tape", 
				rep: { "Dr. Wichtig": 10 },
				m: 5, f: -5, a: 0, c: -20, 
				r: "Duct tape fixes everything! Even 500 liters of water pressure (for now). The koi live. The boss hugs you (wet)." 
			},
			{ 
				t: "Soak up water (clothing)", 
				rep: { "Dr. Wichtig": 2 },
				m: 20, f: -10, a: 20, c: -5, 
				r: "You throw your sweater into the puddle. It's not enough. The carpet is ruined, but you showed 'dedication'." 
			},
			{ 
				t: "Save the koi (net)",
				rep: { "Dr. Wichtig": 10 },					
				req: "zip_ties", 
				m: 10, f: 0, a: -10, c: -10, 
				r: "You fashion a net out of zip ties and trash bags. Fish saved. The office is flooded, but the animals live." 
			}
		],
		 fail: { r: "The water is leaking. Short circuit. Office destroyed. Koi dead. You're probably fired.", m: 60, f: 0, a: 50, c: 100 }
	},
	{
	id: "boss_demo_fail",
	title: "☠️ THE LIVE DEMO ☠️",
	text: "The boss is presenting live on TV! Suddenly, your desktop appears on the huge screen behind him... and you have 'Solitaire' open! The whole world sees it! You have 10 seconds!",
	timer: 10,
	opts: [
		{ 
			t: "Brutally: Cut cable with scissors", 
			rep: { "Dr. Wichtig": -2 },
			m: 5, f: -10, a: 20, c: 10, 
			r: "SNIP! Screen black. The boss stammers: 'Technical difficulties!'. You saved the day, but destroyed a 50€ HDMI cable." 
		},
		{ 
			t: "Hacker move: Switch to Excel", 
			req: "admin_pw", 
			rep: { "Dr. Wichtig": 2 },
			m: 5, f: 5, a: -10, c: -10, 
			r: "In milliseconds, you switch to a complicated spreadsheet. Viewers think it's part of the show. 'And here you see our efficiency!', the boss exclaims. Saved!" 
		}
	],
	fail: { m: 60, f: 0, a: 50, c: 80, r: "TOO SLOW! You accidentally click 'New Game'. The investors laugh. You're the meme of the month." }
	},
    {
        id: "boss_ransomware_2",
        title: "🚨 RED SKULL CRISIS 🚨",
        text: "ALARM! A red skull appears on all 400 screens. 'Your files have been encrypted!' The CEO storms in, yelling. A new ransomware!",
        timer: 12,
        opts: [
            { 
                t: "Use root access to kill subnets", 
                req: "admin_pw", 
                m: 60, f: 10, a: 10, c: -15, 
                r: "You use your master password and cut off the infected subnets. Some data is lost, but the company survives." 
            },
            { 
                t: "Pull the main server's plug", 
                m: 10, f: -5, a: 20, c: 20, 
                r: "Brutal method. The file system is toast, but the encryption stops immediately." 
            },
            { 
                t: "Negotiate with hackers (buy time)", 
                m: 120, f: 20, a: 15, c: -5, 
                r: "You chat with the attackers in the ransomware window. They give you 24 hours reprieve. A weak victory." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -30 }, m: 180, f: 0, a: 40, c: 50, r: "PANIC FREEZE! Time runs out and the entire company cloud is unreadable. The CEO almost fires you!" }
    },
    {
        id: "boss_ceo_stream_1",
        title: "☠️ THE LIVE STREAM ☠️",
        text: "The CEO is sharing his screen in a global live stream (5,000 viewers). Suddenly, a private, uncensored browser tab with terrible content pops up!",
        timer: 10,
        opts: [
            { 
                t: "Kill the stream with admin rights", 
                req: "admin_pw", 
                m: 10, f: 0, a: 5, c: -15, 
                r: "Two clicks in the backend and the stream shows 'Technical Difficulties'. The CEO is eternally grateful to you." 
            },
            { 
                t: "Hard shut down the streaming PC in the next room", 
                m: 5, f: -5, a: 15, c: 5, 
                r: "You sprint and hold the power button for three seconds. The stream cuts off. Close call!" 
            },
            { 
                t: "Watch laughing", 
                rep: { "Dr. Wichtig": -20 },
                m: 15, f: -10, a: -15, c: 30, 
                r: "A historic moment for office gossip. Your boss-radar, however, explodes shortly after." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -40 }, m: 30, f: 0, a: 20, c: 20, r: "TOO LATE! Someone took screenshots. The meme goes viral on LinkedIn. The boss is devastated." }
    },
    {
        id: "boss_water_leak_1",
        title: "🌊 THE WATERFALL 🌊",
        text: "A heating pipe on the server room ceiling has burst! Rusty water is cascading like a waterfall directly onto the core switch!",
        timer: 12,
        opts: [
            { 
                t: "Seal the pipe with tape", 
                req: "tape", 
                m: 30, f: 10, a: 10, c: -5, 
                r: "You climb a wobbly ladder and wrap the tape around the wet pipe. Soaked, but it holds tight." 
            },
            { 
                t: "Get the big trash can from the hallway", 
                m: 15, f: -5, a: 15, c: 5, 
                r: "You push the trash can directly under the leak. The servers stay dry, but you have to empty it every 10 minutes." 
            },
            { 
                t: "Call Egon and wait", 
                rep: { "Egon": 5 },
                m: 45, f: 0, a: 15, c: 15, 
                r: "By the time Egon shuts off the water, sparks are flying in the rack. Two switches die a watery death." 
            }
        ],
        fail: { m: 90, f: -10, a: 30, c: 40, r: "TIME'S UP! *BZZZZT*. The water reaches the switch. A short circuit takes down the entire building." }
    },
    {
        id: "boss_rogue_ai_1",
        title: "🤖 TERMINATION BY AI 🤖",
        text: "The new 'AI HR Software' is going rogue! It's rating all employees as 'unsatisfactory' and sending out mass terminations!",
        timer: 15,
        opts: [
            { 
                t: "Physically pull the AI's LAN cable", 
                rem: "cable", 
                m: 10, f: 0, a: 5, c: -10, 
                r: "You rip out the thick patch cable. The email flood stops immediately. (Item consumed)" 
            },
            { 
                t: "Force a server reboot", 
                m: 45, f: 5, a: 10, c: 5, 
                r: "Hundreds of employees now think they're jobless before you stopped the system. Pure chaos." 
            },
            { 
                t: "Intercept only your own termination", 
                m: 20, f: 5, a: 15, c: 10, 
                r: "You only protect yourself. The rest of the company burns. Selfish, but clever." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -20 }, m: 120, f: 0, a: 25, c: 30, r: "THE AI WINS! 400 people have termination notices in their inbox. The HR phone network collapses under the load." }
    },
    {
        id: "boss_audit_surprise_1",
        title: "👔 ISO AUDIT 👔",
        text: "Three stern men in suits are in the server room, unannounced. 'ISO 27001 audit! Show us your network security documentation immediately!'",
        timer: 10,
        opts: [
            { 
                t: "Slam the thick Win95 manual on the table", 
                req: "manual", 
                m: 15, f: 0, a: -5, c: -15, 
                r: "They are so confused by the sheer size of the document that they don't even read it. Passed!" 
            },
            { 
                t: "Trigger fire alarm as distraction", 
                m: 10, f: -5, a: 25, c: 15, 
                r: "You hit the fire alarm. The audit is evacuated. Highly illegal, but it buys you 2 hours." 
            },
            { 
                t: "Tell the truth: There is no documentation", 
                m: 60, f: 15, a: 15, c: 25, 
                r: "You fail on all counts. Management receives a catastrophic deficiency report." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -15 }, m: 45, f: 10, a: 20, c: 20, r: "STUTTERING! Your speechlessness is taken as a confession of guilt. Big warning for the team!" }
    },
    {
        id: "boss_lockdown_1",
        title: "🔒 SYSTEM LOCKDOWN 🔒",
        text: "A faulty firmware update is blocking the electronic locking system! All doors in the building are sealed! Panic on a Friday afternoon!",
        timer: 12,
        opts: [
            { 
                t: "Use the master key", 
                req: "master_key", 
                m: 15, f: 5, a: 0, c: -10, 
                r: "Analog beats digital. You manually unlock the doors and are celebrated as a hero." 
            },
            { 
                t: "Hack door control with laptop", 
                m: 30, f: 10, a: 5, c: 0, 
                r: "You connect directly to the controller and overwrite the lock code. The doors hum open." 
            },
            { 
                t: "Wait for the technician", 
                m: 120, f: 30, a: 25, c: 5, 
                r: "Two hours of captivity. Colleagues start growling at each other." 
            }
        ],
        fail: { m: 180, f: 20, a: 40, c: 15, r: "TRAPPED! Someone panics and calls the real fire department. They break down the main gate. Huge drama!" }
    },
    {
        id: "boss_ac_failure_1",
        title: "🌡️ HEAT DEATH 🌡️",
        text: "The air conditioning in the server room has completely failed. The thermostat shows 48 degrees! The servers are starting to stink!",
        timer: 10,
        opts: [
            { 
                t: "Flash freeze with fire extinguisher", 
                rem: "fire_ext", 
                m: 5, f: 0, a: 5, c: -10, 
                r: "You blast CO2 into the intake vents. The temperature plummets. Expensive, but life-saving. (Item consumed)" 
            },
            { 
                t: "Immediately shut down non-essential servers", 
                m: 20, f: 10, a: 10, c: 5, 
                r: "You shut down 50% of the hardware. The temperature stabilizes, but many departments are offline." 
            },
            { 
                t: "Throw open the doors and hope", 
                m: 60, f: 15, a: 15, c: 10, 
                r: "The warm office air streams in. Some servers crash, the core barely survives." 
            }
        ],
        fail: { m: 120, f: -10, a: 40, c: 60, r: "MELTDOWN! The emergency shutdown of the servers kicks in. The company is completely offline for today!" }
    },
    {
        id: "boss_ddos_1",
        title: "🛡️ DDOS ATTACK 🛡️",
        text: "The firewall logs are rattling at light speed! A massive DDoS attack from abroad is crippling the network. Nothing is working!",
        timer: 12,
        opts: [
            { 
                t: "Block in Zen mode with stress ball", 
                req: "stressball", 
                m: 45, f: 10, a: -15, c: -15, 
                r: "You block out the panic, knead the ball, and write IP filters in record time. Perfect defense." 
            },
            { 
                t: "Cut all external connections (Panic Mode)", 
                m: 15, f: 0, a: 5, c: 20, 
                r: "You indiscriminately block everything. The attack fizzles out, but you're completely cut off from the internet. The boss is yelling." 
            },
            { 
                t: "Drink tea and wait it out", 
                m: 60, f: 0, a: 10, c: 25, 
                r: "Let the hackers do their thing. You're thinking about quitting time while the company burns." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -15 }, m: 60, f: 0, a: 30, c: 20, r: "FREEZE! The core router crashes under the load. It takes forever to reboot. Customers are angry." }
    },
    {
        id: "boss_excavator_1",
        title: "🚧 EGON'S EXCAVATOR 🚧",
        text: "Egon, with a mini-excavator in the courtyard, has severed the company's main fiber optic cable! The internet is dead!",
        timer: 15,
        opts: [
            { 
                t: "Activate LTE router with guest Wi-Fi", 
                rem: "wifi_note", 
                m: 30, f: 5, a: 5, c: -10, 
                r: "You sacrifice your Wi-Fi note for the emergency router. Bandwidth is garbage, but the boss is online. (Item consumed)" 
            },
            { 
                t: "Call it a day for everyone!", 
                m: 10, f: -20, a: 15, c: 30, 
                r: "'No internet, no work!' The staff cheers, the CEO almost has a heart attack." 
            },
            { 
                t: "Yell loudly at Egon", 
                rep: { "Egon": -15 },
                m: 15, f: 0, a: -5, c: 10, 
                r: "The network is down, but your frustrated scream has therapeutic effect." 
            }
        ],
        fail: { m: 240, f: 20, a: 20, c: 30, r: "NO INTERNET! Colleagues are sending notes to each other in the hallways. A terrible workday begins." }
    },
    {
        id: "boss_db_corruption_1",
        title: "📉 DATABASE CRASH 📉",
        text: "The central financial database is corrupt! Tomorrow is year-end closing. If this isn't fixed, you're toast!",
        timer: 12,
        opts: [
            { 
                t: "Chug energy drink and work through the night", 
                rem: "energy", 
                m: 120, f: -10, a: 5, c: -20, 
                r: "You pump yourself full of taurine and restore everything flawlessly. (Item consumed)" 
            },
            { 
                t: "Blindly overwrite with old backup", 
                m: 20, f: 0, a: 10, c: 10, 
                r: "Ms. Elster will just have to re-type the missing days by hand. She'll hate you for it." 
            },
            { 
                t: "Blame a Windows update", 
                m: 15, f: 5, a: 15, c: 15, 
                r: "No one can prove otherwise. You get away with it, but the company loses money." 
            }
        ],
        fail: { rep: { "Frau Elster": -30, "Dr. Wichtig": -20 }, m: 60, f: 0, a: 30, c: 30, r: "HESITATION! The database completely crashes. The auditors will tear the company apart." }
    },
    {
        id: "boss_crypto_police_1",
        title: "🚓 CYBER POLICE 🚓",
        text: "Two officers are at reception. A company IP was caught illegal crypto-mining. They want to seize the server room!",
        timer: 10,
        opts: [
            { 
                t: "Run USB wipe script on mining PC", 
                rem: "usb_stick", 
                m: 10, f: 0, a: 15, c: 5, 
                r: "You completely erase Kevin's evidence. The police find nothing. (Item consumed)" 
            },
            { 
                t: "Coldly hand over intern Kevin", 
                rep: { "Kevin": -30 },
                m: 30, f: 0, a: -10, c: 10, 
                r: "Kevin cries. Your karma is pitch black, but the IT infrastructure remains standing." 
            },
            { 
                t: "Cooperate and open doors", 
                m: 180, f: 30, a: 25, c: 25, 
                r: "They take three racks. The company is at a standstill. A huge scandal." 
            }
        ],
        fail: { m: 240, f: 0, a: 40, c: 50, r: "SEARCH! The officers storm past, rip cables from the wall, and take everything. Total loss!" }
    },
    {
        id: "boss_phishing_ceo_1",
        title: "🎣 THE DUMB CLICK 🎣",
        text: "The CEO clicked on 'Track Package'. A script is now live deleting all documents on the large intranet drive!",
        timer: 8,
        opts: [
            { 
                t: "Kill the switch with a screwdriver", 
                req: "screw", 
                m: 10, f: 0, a: -5, c: 10, 
                r: "You rip the power supply from the switch. Everything offline, but the data is safe!" 
            },
            { 
                t: "Call the CEO and yell at him", 
                rep: { "Dr. Wichtig": -20 },
                m: 10, f: -10, a: 15, c: 5, 
                r: "'PULL THE PLUG, YOU IDIOT!', you yell. He actually does it. The data is preserved, your job is shaky." 
            },
            { 
                t: "Run around screaming in circles", 
                m: 45, f: 20, a: 25, c: 20, 
                r: "You watch, crying, as 10 years of company history are deleted." 
            }
        ],
        fail: { rep: { "Dr. Wichtig": -10 }, m: 60, f: 0, a: 30, c: 40, r: "ALL GONE! The hard drive is empty. The backups are also infected. You start from scratch." }
    },
    {
        id: "boss_coffee_shortage_1",
        title: "☕ COFFEE EMBARGO ☕",
        text: "The supplier went on strike! There is absolutely no coffee left in the building. The staff are turning into angry zombies. Productivity = Zero.",
        timer: 15,
        opts: [
            { 
                t: "Eat a donut to calm down", 
                rem: "donut", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "You save your own mood with sugar while the world burns. (Item consumed)" 
            },
            { 
                t: "Brew emergency ration (instant) in the hallway", 
                m: 30, f: 10, a: 15, c: -5, 
                r: "It tastes like ash, but the mob is pacified. You sacrifice yourself for the team." 
            },
            { 
                t: "Barricade yourself in the server room", 
                m: 60, f: 10, a: 15, c: 5, 
                r: "You secure the door and wait until your colleagues' withdrawal symptoms subside." 
            }
        ],
        fail: { m: 180, f: 30, a: 30, c: 10, r: "MUTINY! The office descends into lethargy. You almost fall asleep at your desk from exhaustion." }
    }

];