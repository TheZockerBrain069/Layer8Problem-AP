export const special = {

	lunchEvents: [
		{
			id: "lunch_canteen",
			title: "LUNCH: CANTEEN CHAOS",
			text: "Today's special is 'Hunter's Schnitzel Surprise.' The horde is pushing and shoving at the buffet. What do you do?",
			opts: [
				{ 
					t: "Join the colleagues", 
					m: 45, f: -5, a: 10, c: -5, 
					r: "You listen to stories about Chantal's cat. Boring, but you were seen. Good for 'team spirit'." 
				},
				{ 
					t: "Headphones on & retreat to a corner",
					m: 30, f: 5, a: -10, c: 0, 
					r: "You shield yourself, scroll through memes, and ignore the world. Blissful peace." 
				}
			]
		},
		{
			id: "lunch_desk",
			title: "LUNCH: AT YOUR DESK",
			text: "You stay in the office to avoid people. Before you lies a sad, slightly soggy packed lunch.",
			opts: [
				{ 
					t: "Continue working one-handed",
					rep: { "Dr. Wichtig": 2 },	
					m: 30, f: -10, a: 20, c: -10, 
					r: "Multitasking. You close tickets with your right hand, eat with your left. The boss nods approvingly as he passes. Your keyboard now crunches with crumbs." 
				},
				{ 
					t: "Watch a series in a mini-window",
					rep: { "Dr. Wichtig": -5 },	
					m: 60, f: 20, a: -20, c: 10, 
					r: "Finger poised on 'Alt-Tab'. You manage two episodes. Unfortunately, the movie reflects in your glasses when the boss walks in. Bummer!" 
				}
			]
		},
		{
			id: "lunch_vegan",
			title: "LUNCH: VEGAN DAY",
			text: "The canteen only serves tofu lumps. Team morale is aggressively low.",
			opts: [
				{ t: "Eat along and complain", m: 45, f: 0, a: 15, c: 0, r: "Shared complaining unites the team." },
				{ t: "Run to the kebab shop", m: 45, f: 5, a: -20, c: 5, r: "You return with garlic breath. You're happy, colleagues wrinkle their noses." }
			]
		},
		{
			id: "lunch_client_emergency",
			title: "LUNCH: THE BOSS ALARM",
			text: "You're just unwrapping your sandwich when the boss appears, breathless. 'Müller! Client Schmitz has a total internet outage! You need to go IMMEDIATELY! This is an emergency! You can eat your sandwich in the car!'",
			opts: [
				{ 
					t: "Grab sandwich and speed off",
					rep: { "Dr. Wichtig": 10 },	
					m: 60, f: -20, a: 25, c: -15, 
					r: "You wolf down your sandwich at 180 km/h. At the client's, only the plug was loose. You have heartburn, but the boss praises your heroic effort." 
				},
				{ 
					t: "Insist on your statutory break",
					rep: { "Dr. Wichtig": -10 },	
					m: 30, f: 5, a: -10, c: 15, 
					r: "You deliberately take a slow bite of your sandwich and tap your watch. The boss turns red, snorts, and angrily rushes off himself. Your meal suddenly tastes like victory." 
				}
			]
		},
		{
			id: "lunch_pizza",
			title: "LUNCH: PIZZA DEBATE",
			text: "The team wants to order pizza. The discussion has been going on for 20 minutes. 'Pineapple doesn't belong!' vs 'I'm lactose intolerant!' Your break is slipping away.",
			opts: [
				{ t: "Lay down the law: 'Salami for everyone!'", m: 45, f: -5, a: 10, c: 0, r: "You ordered. The vegans hate you, but you're full. Aggro rises from the grumbling." },
				{ t: "Opt out & eat your own sandwich", m: 30, f: 0, a: -5, c: 0, r: "You eat your dry sandwich while the others argue. Peaceful, but sad." }
			]
		},
		{
			id: "lunch_business",
			title: "LUNCH: BUSINESS LUNCH",
			text: "A slimy sales rep invites you to lunch. Expensive sushi. But he really just wants to push an overpriced firewall solution on you.",
			opts: [
				{ t: "Grab the free food", m: 90, f: 20, a: -10, c: -5, r: "The sushi was divine. You promised him you'd 'think about it' (lie). Break overextended." },
				{ t: "Politely decline", m: 30, f: -5, a: 0, c: 5, r: "You stay in the office. Your integrity is intact, but your stomach growls." }
			]
		},
		{
			id: "lunch_doener",
			title: "LUNCH: KEBAB DAY",
			text: "The kebab shop around the corner is celebrating its anniversary. Kebabs for €2.50. The line stretches into the street. The aroma is tempting.",
			opts: [
				{ 
					t: "Get in line! €2.50 is unbeatable!", 
					m: 50, f: 10, a: 15, c: 5, 
					r: "You waited 40 minutes and devoured everything in 5. You're late and reek of garlic. But you saved money!" 
				},
				{ 
					t: "Better go to the bakery", 
					m: 20, f: 0, a: 5, c: 0, 
					r: "You get a dry cheese roll. It tastes like cardboard and responsibility. Envy for the kebab-eaters gnaws at you." 
				}
			]
		},
		{
			id: "lunch_sleep",
			title: "LUNCH: SOUP COMA",
			text: "You ate too much. The 'schnitzel coma' sets in. Your eyelids weigh tons. The server room is nice and cool...",
			opts: [
				{ t: "Power nap in the server room", m: 45, f: 25, a: -20, c: 10, r: "You fell asleep! You wake up with keyboard marks on your face. Hopefully, no one saw you." },
				{ t: "Double espresso", m: 10, f: -5, a: 5, c: 0, r: "Your heart starts racing. You're awake, but your hands are shaking. Productivity: Questionable." }
			]
		},
		{
			id: "lunch_foodtruck",
			title: "LUNCH: STREET FOOD FESTIVAL",
			text: "Food trucks are in the parking lot. It smells of 'Pulled Jackfruit' and 'Artisan Burgers'. Prices are high, lines are huge. Your colleagues call out: 'Coming with us? It's totally in!'",
			opts: [
				{ 
					t: "Get the 'organic burger' for €15",
					rep: { "Dr. Wichtig": -2 },	
					m: 75, f: 10, a: -10, c: 10, 
					r: "You waited 60 minutes. The burger was tiny but delicious. You return massively late. The boss taps his watch: 'Was that burger made of gold, Müller?'" 
				},
				{ 
					t: "Take the cheap hot dog stand",
					m: 20, f: 0, a: 20, c: 0, 
					r: "No line, only 2 Euros. A bargain! But after the first bite, your stomach rumbles ominously. The afternoon will be... explosive." 
				},
				{ 
					t: "Stay in the office & eat leftovers",
					m: 10, f: -5, a: 5, c: -5, 
					r: "You eat an old bar from your drawer while the others have fun outside. You feel morally superior for resisting the hype – but you're still hungry." 
				}
			]
		},
		{
			id: "lunch_ceo_table",
			title: "LUNCH: THE CEO BECKONS",
			text: "You enter the canteen with your tray (lentil stew). Suddenly, Dr. Wichtig waves at you from the 'Executive Table'. 'Müller! Come sit with me! We need to talk.' Everyone in the room stares at you.",
			opts: [
				{ 
					t: "Sit down & brave the small talk", 
					rep: { "Dr. Wichtig": 5 },
					m: 60, f: -10, a: 20, c: -25, 
					r: "You sweat blood and water. You laugh at his unfunny jokes. But it's worth it: He now considers you a 'Good Man'. Boss radar drops massively! Your food, however, has gone cold." 
				},
				{ 
					t: "Talk about a raise", 
					rep: { "Dr. Wichtig": -15 },
					m: 45, f: 0, a: 10, c: 50, 
					r: "Terrible idea. He chokes on his shrimp. 'Müller, not during dinner!' The mood immediately sours. He'll remember this negatively." 
				},
				{ 
					t: "Pretend to get a call", 
					rep: { "Dr. Wichtig": 2 },
					m: 5, f: 10, a: -5, c: 5, 
					r: "You hold your phone to your ear: 'Oh, server emergency! Gotta go!' You run out with your tray. Narrow escape, but he looks offended." 
				}
			]
		},
		{
			id: "lunch_microwave_war",
			title: "LUNCH: MICROWAVE WAR",
			text: "Two microwaves are broken, only one works. A line of 10 people. At the front is someone from sales reheating fish (timer: 10 minutes). The stench spreads. The mood is highly explosive.",
			opts: [
				{ 
					t: "Just pull the plug",
					m: 5, f: 5, a: -10, c: 10, 
					r: "You pull the plug as you walk by. 'Oops, fuse must be out.' The fish guy curses but can't prove anything. The crowd quietly cheers you on. You're the hero of the day." 
				},
				{ 
					t: "Loudly rant and rave",
					m: 30, f: 0, a: 25, c: 0, 
					r: "You yell across the kitchen: 'FISH?! SERIOUSLY?! ARE WE AT THE HARBOR HERE?!' A heated debate ensues. You've vented, but your food is still cold." 
				},
				{ 
					t: "Flee to the kebab shop", 
					m: 45, f: 10, a: -5, c: 0, 
					r: "You hold your breath and run out, away from the stench. The kebab outside tastes like freedom (and onions)." 
				}
			]
		},
		{
			id: "lunch_jogging",
			title: "LUNCH: THE RUNNING GROUP",
			text: "The 'high-performers' put on their running shoes. 'Well, Müller? Coming with us? 10km during lunch break! Clears the mind for maximum productivity!' They look fit, but manic.",
			opts: [
				{ 
					t: "Run with them! 10km is nothing!",
					m: 70, f: -20, a: 30, c: -10, 
					r: "You die. Twice. You return drenched in sweat and red-faced. You can barely type from exhaustion. But they now accept you as one of them." 
				},
				{ 
					t: "Watch from the window", 
					m: 30, f: 10, a: -10, c: 0, 
					r: "You leisurely eat a chocolate bar and watch them suffer in the drizzle outside. That's true relaxation." 
				},
				{ 
					t: "Wave them off: 'Sorry, my knee...'",
					m: 5, f: 5, a: 0, c: 0, 
					r: "The classic. They nod sympathetically (and a little contemptuously). You shuffle relaxed towards the canteen." 
				}
			]
		},
		{
			id: "lunch_no_money",
			title: "LUNCH: FORGOT WALLET",
			text: "You've loaded up on the expensive schnitzel. At the checkout, you reach into your pocket... EMPTY! Your wallet is upstairs. The line behind you grows restless. The cashier, Ms. 'Dragon', taps her fingers impatiently.",
			opts: [
				{ 
					t: "Hit up intern Kevin", 
					m: 10, f: 5, a: -5, c: 0, 
					r: "Kevin is behind you. 'Can you just...?' He proudly pays for you. Now you owe the intern. He'll exploit you for it ('Can you fix my printer?')." 
				},
				{ 
					t: "Put the food back", 
					m: 15, f: 0, a: 20, c: 0, 
					r: "You have to carry the schnitzel back while everyone stares at you. 'Shame! Shame!' You eat a dry sandwich at your desk." 
				},
				{ 
					t: "Run off: 'I'll get it right away!'", 
					m: 20, f: -5, a: 10, c: 0, 
					r: "You run upstairs, get money, run down. Your spot is gone, the schnitzel is cold. Pure stress." 
				}
			]
		},
		{
			id: "lunch_boring_cake",
			title: "LUNCH: DRY CAKE",
			text: "Sabine from accounting forces everyone into the coffee kitchen. 'I baked! Vegan zucchini cake without sugar!' She expects everyone to sing 'Happy Birthday'. It's awkwardly silent.",
			opts: [
				{ 
					t: "Eat a piece & feign 'Mmmh'", 
					m: 20, f: 0, a: 10, c: -5, 
					r: "The cake tastes like cardboard and sadness. But Sabine beams: 'Thanks Müller, you're the only one with taste!' You choke it down." 
				},
				{ 
					t: "Feigned escape", 
					m: 5, f: 5, a: -5, c: 0, 
					r: "You mumble 'Meeting!' and run out. You hear Sabine sigh behind you. Narrow escape." 
				},
				{ 
					t: "Say: 'I hate zucchini'", 
					m: 5, f: 0, a: -5, c: 10, 
					r: "Sabine almost starts crying. Colleagues glare at you. You ruined the mood, but at least you don't have to eat that crap." 
				}
			]
		},
		{
			id: "lunch_server_fire",
			title: "LUNCH: RED ALERT",
			text: "You've just bitten into your sandwich when the sirens wail. Push notification: 'SERVER ROOM TEMPERATURE CRITICAL! EMERGENCY SHUTDOWN IN 60 SECONDS!' If the server goes down, the company grinds to a halt.",
			opts: [
				{ 
					t: "Run there immediately! Sandwich comes with!",
					m: 10, f: -20, a: 20, c: -20, 
					r: "You sprint off, sandwich in hand. You kick open the door and yank open the window. Temperature drops. You have crumbs in your beard, but you saved the day. The boss nods approvingly." 
				},
				{ 
					t: "Stay seated. It's my break.",
					m: 30, f: 10, a: -10, c: 80, 
					r: "You leisurely continue chewing. Suddenly the lights go out. Silence. UPS beeps. Boss rushes in: 'MÜLLER?! WHERE WERE YOU?!' That's a hefty warning." 
				},
				{ 
					t: "Send intern Kevin", 
					m: 5, f: 5, a: 10, c: 10, 
					r: "You call Kevin: 'Run, boy!' He stumbles in and, in a panic, pulls the wrong plug. Chaos erupts. But officially, it wasn't you." 
				}
			]
		},
		{
			id: "lunch_merger_rumor",
			title: "LUNCH: RUMOR MILL EXPLODES",
			text: "Panic in the canteen. Someone found 'secret files' in the copier. Apparently, the company will be sold to a large Chinese conglomerate tomorrow. Everyone is trembling for their jobs. 'Are we all getting fired?!'",
			opts: [
				{ 
					t: "Shout loudly: 'I'm already learning Mandarin!'",
					rep: { "Dr. Wichtig": -5 },	
					m: 30, f: 10, a: -10, c: 20, 
					r: "You tell wild horror stories about labor camps. Colleagues almost cry. The chaos is glorious. Afternoon productivity: Zero. The boss rages." 
				},
				{ 
					t: "Wave it off: 'Just rumors.'",
					m: 30, f: -5, a: 10, c: -5, 
					r: "You play the rock in the storm: 'It was probably just a faulty printout.' People calm down a bit. Boring, but responsible." 
				},
				{ 
					t: "Intercept the boss at the buffet",
					rep: { "Dr. Wichtig": 2 },	
					m: 10, f: 0, a: 0, c: 10, 
					r: "You corner the boss between the salad and soup. He laughs nervously: 'No comment.' Aha! His silence confirms everything!" 
				}
			]
		},
		{
			id: "lunch_schnitzel_gate",
			title: "LUNCH: THE LAST SCHNITZEL",
			text: "It's 'Schnitzel Thursday'. The sacred tradition. You're at the counter. There's only ONE schnitzel left. You reach for it... at the same time as sales manager 'Muscle-Markus'. He glares at you.",
			opts: [
				{ 
					t: "Back down & take salad",
					m: 10, f: 0, a: 20, c: 0, 
					r: "You fearfully pull your hand back. Markus laughs triumphantly: 'Victim!' You listlessly chew dry leaves and hate your life. Your anger boils." 
				},
				{ 
					t: "Stand your ground: 'I was first!'",
					m: 20, f: -5, a: 10, c: 5, 
					r: "You stand wide-legged. The canteen lady annoyed intervenes: 'Quiet down! I'll split it now!' You get half a schnitzel. A dirty partial victory." 
				},
				{ 
					t: "''Accidentally' cough on the schnitzel", 
					m: 5, f: 5, a: -5, c: 20, 
					r: "You cough loudly and wetly directly onto the breading. Markus recoils in disgust: 'Gross, keep that slop!' You have the schnitzel. But now everyone thinks you're Patient Zero." 
				}
			]
		},
		{
			id: "lunch_leftovers",
			title: "LUNCH: THE LEFTOVERS BATTLE",
			text: "The secretary calls out: 'Sandwiches from the executive meeting are left over! In Room 302!' This is the signal. Like a zombie apocalypse, all employees rush off. Free salmon canapés!",
			opts: [
				{ 
					t: "Run with them! Elbows out!", 
					m: 15, f: -5, a: -10, c: 0, 
					r: "You physically throw yourself into the fray. You snatch three salmon sandwiches and a muffin. A complete success! You feel full and energetic." 
				},
				{ 
					t: "Go later. I'm not an animal.",
					m: 10, f: 0, a: 10, c: 0, 
					r: "You only stroll over when the mob is gone. There's only a half-eaten cucumber sandwich and crumbs left. Well. The early bird gets the worm, the late bird gets the crumbs." 
				},
				{ 
					t: "Use the chaos & steal the good coffee", 
					m: 5, f: 0, a: -5, c: 0, 
					r: "While everyone fights for food, you calmly fill up on the expensive pot milk and premium coffee. Strategically smart." 
				}
			]
		},
		{
			id: "lunch_rooftop",
			title: "LUNCH: THE SECRET ROOFTOP",
			text: "You know a trick to get onto the flat roof. View over the grey city. Nobody bothers you. But the wind is cold.",
			opts: [
				{ t: "Enjoy the view", m: 60, f: 20, a: -30, c: 0, r: "You feel free. You almost forget the time. You're 10 minutes late, but relaxed." },
				{ t: "Throw paper airplanes", req: "manual", m: 30, f: 10, a: -10, c: 0, r: "You tear pages from the manual and make planes. They glide onto the boss's parking spot. Risky, but fun." },
				{ t: "Energy drink in the sun", req: "energy", m: 30, f: 0, a: -20, c: 0, r: "Caffeine and UV radiation. You vibrate with energy. Inventory -1." }
			]
		},
		{
			id: "lunch_tupper_gamble",
			title: "LUNCH: TUPPERWARE ROULETTE",
			text: "In the kitchen, there are 5 identical, unlabeled containers. Colleagues play 'Russian Roulette'. One contains delicious lasagna, one contains mold from 2021.",
			opts: [
				{ t: "Open container 1", m: 30, f: 0, a: -10, c: 0, r: "Jackpot! Lasagna! The day is saved." },
				{ t: "Open container 3", m: 45, f: -20, a: 30, c: 0, r: "It was the mold. You spend your break retching in the toilet. Aggro rises massively." },
				{ t: "Don't play along", m: 10, f: 0, a: 5, c: 0, r: "You eat your dry sandwich. Boring, but safe." }
			]
		},
		{
			id: "lunch_fancy_restaurant",
			title: "LUNCH: THE POSH ITALIAN",
			text: "Colleagues want to go to the upscale Italian 'Il Prezzo'. A pizza costs 25 Euros. Everyone looks at you expectantly: 'Are you coming or are you broke?'",
			opts: [
				{ 
					t: "Go along and only order water", 
					m: 60, f: -5, a: 10, c: 0, 
					r: "You sip tap water for 60 minutes while the others feast on truffle pasta. Absolutely humiliating." 
				},
				{ 
					t: "Slam the 'Black Card' on the table",
					req: "black_card", 
					m: 90, f: 50, a: -50, c: -20, 
					r: "You casually pay for the ENTIRE TABLE with the Prince's card. Colleagues almost fall to their knees. From today, you are the king of the office.", 
					next: "prince_active"
				},
				{ 
					t: "Decline: 'Too expensive for dough.'", 
					m: 30, f: 5, a: -5, c: 0, 
					r: "You'd rather get a kebab. It makes you prettier. And full. And doesn't cost 25 Euros." 
				}
			]
		},
		{
			id: "lunch_sleep_car",
			title: "LUNCH: CAR NAP",
			text: "You sneak into the underground garage like a criminal. Your car is your fortress. You recline the seat. Finally silence, only the distant hum of the ventilation.",
			opts: [
				{ 
					t: "Set alarm for 20 minutes", 
					m: 30, f: 15, a: -10, c: 0, 
					r: "The perfect power nap. You wake up precisely on time, wipe the drool from the corner of your mouth, and return to work refreshed." 
				},
				{ 
					t: "Sleep without an alarm", 
					rep: { "Dr. Wichtig": -10 },	
					m: 90, f: 30, a: -30, c: 20, 
					r: "You fall into a coma. You wake up completely disoriented. What year is it? Look at the clock: SHIT! You were gone for 90 minutes. The boss was looking for you." 
				},
				{ 
					t: "Leave engine running for AC", 
					m: 45, f: 20, a: -10, c: 0, 
					r: "Wonderfully temperate. You listen to the radio softly and relax. Unfortunately, the lights drain the battery. Hopefully, the car still starts tonight." 
				}
			]
		},
		{
			id: "lunch_gym",
			title: "LUNCH: COMPANY FITNESS",
			text: "HR has set up a 'Pop-Up Gym' in the conference room. 'Sweat for Success'. The trainer is already yelling.",
			opts: [
				{ t: "Participate", rep: { "Dr. Wichtig": 2 }, m: 45, f: -10, a: 10, c: -5, r: "You did push-ups in a suit. Now you smell like a polecat. But the boss saw it." },
				{ t: "Watch & eat a donut", req: "donut", m: 30, f: 10, a: -10, c: 5, r: "You eat a donut while colleagues suffer. A feeling of superiority. But HR glares." },
				{ t: "Sabotage", m: 10, f: 5, a: -5, c: 10, r: "You turn the heating up to 30 degrees. The training is canceled. Thanks, hero." }
			]
		},
		{
			id: "lunch_supermarket",
			title: "LUNCH: SUPERMARKET BATTLE",
			text: "You just want to quickly grab a roll at the supermarket. But: Senior citizen invasion! All three checkouts are full of people who want to pay with exact change ('Wait, I have small change!').",
			opts: [
				{ 
					t: "Patiently wait in line",
					m: 40, f: -5, a: 20, c: 0, 
					r: "The lady in front of you pays €4.99 exclusively in 1 and 2 cent coins. You stare at the clock. You're late and the roll tastes like pure rage." 
				},
				{ 
					t: "Shout: 'CLEAR THE WAY! I'M A DOCTOR!'",
					m: 15, f: 5, a: -5, c: 10, 
					r: "The crowd parts respectfully like the Red Sea. You scan your minced meat roll like a heart surgeon. You're full, but your karma is in the basement." 
				},
				{ 
					t: "Throw goods back & flee", 
					m: 10, f: 0, a: 10, c: 0, 
					r: "You put the banana with the shampoos and run out. Hunger is bad, but this checkout stress is worse." 
				}
			]
		},
		{
			id: "lunch_canteen_crash",
			title: "LUNCH: SYSTEM CRASH",
			text: "You're at the front of the canteen line with your tray. Suddenly the checkout crashes. Windows updates are installing (1 of 45). The line behind you grumbles. The cashier looks at you pleadingly: 'You're from IT, aren't you?'",
			opts: [
				{ 
					t: "Reinstall the checkout system", 
					rep: { "Dr. Wichtig": 5 },
					m: 40, f: -15, a: 15, c: -10, 
					r: "You spend 40 minutes of your break debugging the checkout system. You get your food for free, but you practically worked through your break. Your break is over." 
				},
				{ 
					t: "Patiently wait", 
					m: 45, f: 10, a: 20, c: 0, 
					r: "You stare at the loading bar for 45 minutes while your food gets cold. The colleagues behind you blame YOU for the update. Morale is at an all-time low." 
				},
				{ 
					t: "Leave tray & go to the bakery", 
					m: 25, f: 0, a: 5, c: 5, 
					r: "You leave exasperated. 25 minutes of walking and queuing at the bakery for a dry cheese roll. At least you escaped the update terror." 
				}
			]
		},
		{
			id: "lunch_microwave_queue",
			title: "LUNCH: MICROWAVE JAM",
			text: "You want to heat up your noodles, but only one of three microwaves works. There's a line of 4 people. At the front, the sales manager is patiently thawing a completely frozen chicken.",
			opts: [
				{ 
					t: "Grudgingly wait", 
					m: 35, f: 10, a: 25, c: 0, 
					r: "You stand in the hallway for 35 minutes waiting. When it's finally your turn, you have exactly 3 minutes to wolf down the boiling hot noodles. Horrible." 
				},
				{ 
					t: "Bribe with a donut & cut in line", 
					req: "donut",
					m: 15, f: 5, a: -10, c: 0, 
					r: "You give the guy in front of you the donut. He lets you go first. In 15 minutes, you're full and relaxed. Hooray for corruption! (Item removed)" 
				},
				{ 
					t: "Eat the noodles ice cold", 
					m: 10, f: 0, a: 30, c: 0, 
					r: "You don't have time for this nonsense. You eat the noodles straight from the fridge. It only takes 10 minutes, but you feel sick and are terribly aggressive." 
				}
			]
		},
		{
			id: "lunch_smalltalk_hell",
			title: "LUNCH: THE CHATTERBOX",
			text: "You found a quiet corner in the kitchen. Then Sabine (HR) uninvitedly sits next to you. 'Oh, good thing I ran into you! I absolutely have to tell you about my yoga retreat in Bali!' She takes a deep breath.",
			opts: [
				{ 
					t: "Politely listen", 
					rep: { "Gabi": 5 },
					m: 40, f: 15, a: 15, c: 0, 
					r: "You nod for 40 minutes. You now know the names of all the street dogs in Bali and their spirit animals. You rested, but your brain is mush." 
				},
				{ 
					t: "Headphones on & nod", 
					req: "headphones",
					m: 30, f: 20, a: -10, c: 0, 
					r: "You listen to gentle death metal while Sabine silently moves her mouth for 30 minutes. You ate relaxed, and she thinks you're a great listener." 
				},
				{ 
					t: "Flee: 'I feel sick!'", 
					m: 5, f: 0, a: 20, c: 10, 
					r: "You run to the toilet after 5 minutes, leaving your food behind. You cut your break short. You're hungry and angry at yourself." 
				}
			]
		},
		{
			id: "lunch_slow_delivery",
			title: "LUNCH: LIEFERANDO DRAMA",
			text: "You ordered a pizza. The app says: '2 minutes left'. But the driver's GPS dot has been wildly circling the company block for 20 minutes. He can't find the entrance.",
			opts: [
				{ 
					t: "Go look for him outside", 
					m: 30, f: -10, a: 15, c: 0, 
					r: "You wander through the drizzle for 30 minutes until you find him two streets over. The pizza is lukewarm, and you're completely out of breath. Worst break ever." 
				},
				{ 
					t: "Stubbornly wait at the window", 
					m: 45, f: 10, a: 20, c: 0, 
					r: "After a solid 45 minutes, he finally shows up. You spent your entire break waiting and cursing out the window. Your stomach growls ominously." 
				},
				{ 
					t: "Cancel order & eat a snack", 
					m: 10, f: 5, a: 25, c: 0, 
					r: "You give up, grab a chocolate bar from the vending machine, and get back to work. You only lost 10 minutes, but your aggro explodes from hunger." 
				}
			]
		},
		{
			id: "lunch_boss_table",
			title: "LUNCH: THE BOSS'S TABLE",
			text: "The canteen is packed. The only free seat is directly opposite Dr. Wichtig. He waves at you: 'Müller! Come here, keep me company!'",
			opts: [
				{ 
					t: "Sit down & endure mentoring", 
					rep: { "Dr. Wichtig": 15 },
					m: 45, f: -10, a: 20, c: -20, 
					r: "You sit ramrod straight for 45 minutes while he tells you about his golf successes. Your food remains undigested in your stomach. Pure stress, but good for your career." 
				},
				{ 
					t: "Gobble food & flee", 
					rep: { "Dr. Wichtig": -5 },
					m: 15, f: 0, a: 25, c: 5, 
					r: "You inhale your schnitzel in record time. 'Gotta check the server, boss!' He looks irritated at your empty plates. You have heartburn for the rest of the day." 
				},
				{ 
					t: "Turn around and eat in the server room", 
					rep: { "Dr. Wichtig": -10 },
					m: 25, f: 15, a: -5, c: 15, 
					r: "You pretend not to have seen him. You hide in the dark server room for 25 minutes. Peaceful, but the boss definitely noticed your escape." 
				}
			]
		},
		{
			id: "lunch_mandatory_walk",
			title: "LUNCH: THE FORCED WALK",
			text: "You're about to take a bite when the agile project manager grabs your arm. 'Alright Müller, enough sitting! We're doing the 'Healthy-Brain-Walk' around the block now! Come on, fresh air makes you productive!'",
			opts: [
				{ 
					t: "Walk along (peer pressure)", 
					m: 40, f: -15, a: 15, c: -5, 
					r: "You trudge for 40 minutes at a brisk pace through the industrial area. You return sweaty, with blisters on your feet, and hungrier than before. But the team loves you." 
				},
				{ 
					t: "Bail halfway through", 
					m: 20, f: 10, a: -5, c: 5, 
					r: "When he's not looking, you secretly turn off towards the kebab shop. It took you 20 minutes, but you have warm food. Hopefully, he doesn't notice you're missing." 
				},
				{ 
					t: "Aggressively refuse", 
					m: 5, f: 0, a: 10, c: 15, 
					r: "You pull away. 'I don't get paid for walking!' He calls you a 'corporate culture decelerator' on the intranet. You're back at your PC in 5 minutes." 
				}
			]
		},
		{ 
			id: "lunch_throat_singing", 
			title: "LUNCH: CULTURAL BREAK", 
			text: "HR came up with something special for the 'Diversity Lunch'. In the middle of the canteen, a Mongolian throat singing band is humming extremely loudly. The tables vibrate. Nobody dares to say anything.", 
			opts: [ 
				{  
					t: "Put on noise-cancelling headphones", 
					req: "headphones", 
					m: 30, f: -15, a: -10, c: 0,  
					r: "You press the button and the world falls silent. You only see four wildly gesticulating men in traditional attire while you undisturbed chew your noodles. A surreal, but wonderfully relaxing break."  
				}, 
				{  
					t: "Just hum along",  
					m: 45, f: -10, a: -15, c: 15,  
					r: "You close your eyes and join in the deep 'Ooooommmm'. The vibrations release your tension. The sales colleagues stare at you disturbed, but your stress level drops rapidly. You are one with the server."  
				}, 
				{  
					t: "Flee the room in a hurry",  
					m: 30, f: 0, a: 5, c: 0,  
					r: "This is just too wild for a Tuesday lunchtime. You turn on your heel, buy a dry cheese roll at the kiosk, and eat it shivering in the parking lot. At least you have absolute peace there."  
				} 
			] 
		},
		{ 
			id: "lunch_chili_war", 
			title: "LUNCH: BATTLE FOR THE CHILI", 
			text: "The canteen has its legendary Chili con Carne. There's only one ladle left in the pot. Sales manager Markus stands next to you and growls: 'I closed three deals today. I need this.'", 
			opts: [ 
				{  
					t: "Shove him aside and take it", 
					rep: { "Markus": -15 }, 
					m: 30, f: -10, a: 5, c: 5,  
					r: "IT priority trumps sales! You ruthlessly secure the last ladle. The chili is absolutely heavenly and warms your soul. Markus glares at you with narrowed, hateful eyes as you chew. It was worth it."  
				}, 
				{  
					t: "Unpack a healthy sandwich", 
					rem: "sandwich", 
					m: 30, f: -15, a: -5, c: 0,  
					r: "'Go on, Markus. You look pale.' You open your backpack and take a delicious bite of your own perfect pastrami sandwich. He's completely perplexed by your generosity, while you chew on cloud nine. (Item consumed)"  
				}, 
				{  
					t: "Sneeze extremely loudly over the pot",  
					m: 20, f: 0, a: -5, c: 15,  
					r: "'Achoo!' You fake a massive, wet sneeze directly over the pot. Markus recoils in disgust and loses his appetite. You have the chili all to yourself, but HR will definitely hear about this incident."  
				} 
			] 
		},
		{ 
			id: "lunch_fish_microwave", 
			title: "LUNCH: BIO-WEAPON", 
			text: "You want to heat up your food when a wall of stench hits you. Intern Kevin is microwaving yesterday's cod. The smell literally burns your eyes.", 
			opts: [ 
				{  
					t: "Ventilate with the fire extinguisher", 
					req: "fire_ext", 
					m: 10, f: 0, a: -5, c: 10,  
					r: "WHOOSH! A short, hard CO2 blast directly into the kitchen not only dispels the pungent fish smell but also sends Kevin coughing into the hallway. This is undoubtedly aggressive, but absolutely effective for the indoor climate."  
				}, 
				{  
					t: "Pull the microwave plug", 
					rep: { "Kevin": -10 }, 
					m: 30, f: -5, a: 5, c: 0,  
					r: "You silently go to the microwave and pull the plug. 'Fish is a reason for termination, Kevin. Learn the unwritten rules.' You eat your own food cold today, but at least you don't have to breathe in that cloud."  
				}, 
				{  
					t: "Gagging, leave the building",  
					m: 45, f: 0, a: 10, c: 0,  
					r: "The stench triggers your flight reflex. You storm out of the building and get an overpriced kebab from the snack bar around the corner. It costs money and time, but saves you from genuine trauma."  
				} 
			] 
		},
		{ 
			id: "lunch_tupperware", 
			title: "LUNCH: THE RELIC", 
			text: "At the very back of the fridge is an unlabeled Tupperware container. The contents are unrecognizable, grey-greenish, extremely bloated, and seem to be moving slightly. A self-contained ecosystem.", 
			opts: [ 
				{  
					t: "Seal with duct tape", 
					req: "tape", 
					m: 15, f: -5, a: 0, c: 0,  
					r: "You pull out your trusty roll of duct tape and preemptively wrap three thick layers around the container to prevent it from bursting. You feel like a bomb disposal expert. The problem is secured for posterity."  
				}, 
				{  
					t: "Bravely open the lid",  
					m: 30, f: 10, a: 15, c: 10,  
					r: "PFFFFT! A foul, sour overpressure hisses into the room. You immediately feel extremely sick, your stomach churns, and your entire lunch break is ruined. You urgently need to sit by an open window."  
				}, 
				{  
					t: "Call Egon via express ticket", 
					rep: { "Egon": 5 }, 
					m: 30, f: -10, a: -5, c: 0,  
					r: "This is a case for Facility Management. Egon arrives with thick work gloves. He grabs the cursed thing and disposes of it, cursing, in special waste. A true team effort that saves the department."  
				} 
			] 
		},
		{ 
			id: "lunch_kicker_bros", 
			title: "LUNCH: ALPHA TOURNAMENT", 
			text: "You want to sit in peace, but the sales bros drag you to the foosball table. 'Come on, IT! Show us if you have analog reflexes too!' They grin condescendingly.", 
			opts: [ 
				{  
					t: "Chug an energy drink and annihilate them", 
					rem: "energy", 
					m: 30, f: -15, a: -10, c: 5,  
					r: "The taurine hits hard. Your reactions multiply tenfold. You play like an unleashed god and annihilate them 10:0. They stand silently and humiliated. The honor of IT shines brighter than ever. (Item consumed)"  
				}, 
				{  
					t: "Play extremely badly on purpose",  
					m: 30, f: -5, a: 5, c: 0,  
					r: "You absolutely have no desire for this competition. You deliberately score three embarrassing own goals. They immediately lose all respect and interest in you. For the rest of the year, they leave you alone. Clever."  
				}, 
				{  
					t: "Pocket the ball and walk away",  
					m: 15, f: -5, a: 10, c: 5,  
					r: "You don't say a single word, reach into the field mid-game, take the ball, put it in your pocket, and calmly go eat your sandwich. Ultimate dominance. They stare after you completely dumbfounded."  
				} 
			] 
		},
		{ 
			id: "lunch_mettigel", 
			title: "LUNCH: RAW DANGER", 
			text: "Ms. Elster is celebrating her birthday and has placed a traditional 'Mettigel' (minced pork hedgehog) in the uncooled tea kitchen. It's mid-summer. It's been sitting there for 4 hours.", 
			opts: [ 
				{  
					t: "Eat a large piece of it",  
					m: 45, f: 20, a: 10, c: 0,  
					r: "The meat tastes surprisingly good, but that quickly backfires. Less than 20 minutes later, you're sweating profusely in the company toilet, begging for salvation. An absolute misjudgment."  
				}, 
				{  
					t: "Throw the hedgehog in the trash", 
					rep: { "Frau Elster": -20 }, 
					m: 15, f: 0, a: 5, c: 15,  
					r: "You save the entire company from a certain salmonella wave and dispose of the meat. Ms. Elster catches you doing it and cries bitter tears because 'nobody in this house appreciates her traditional handiwork'."  
				}, 
				{  
					t: "Rather eat chocolate from your stash", 
					rem: "chocolate", 
					m: 30, f: -15, a: -5, c: 0,  
					r: "You're not risking your life for an office snack. You ignore the ticking biological time bomb and instead reach for your own, shelf-stable sugar supply. Better safe than sorry. (Item consumed)"  
				} 
			] 
		},
		{ 
			id: "lunch_nap_attack", 
			title: "LUNCH: INTERRUPTED SLEEP", 
			text: "You're lying on the couch in the dark break room, almost asleep. Suddenly Chantal bursts in, turns on the extremely bright light, and loudly records voice messages.", 
			opts: [ 
				{  
					t: "Throw stress ball at light switch", 
					req: "stressball", 
					m: 30, f: -10, a: -5, c: 5,  
					r: "SMACK! A perfect, blind throw. The ball hits the switch and the light goes out. Chantal squeals in panic and flees from the supposed 'poltergeist'. You sink back into sleep with a grin."  
				}, 
				{  
					t: "Make a sleep mask with duct tape", 
					req: "tape", 
					m: 45, f: -15, a: 5, c: 0,  
					r: "Arguing only costs energy. You tear off tape and stick it over your eyes as a mask. Chantal takes a giggling photo of you for Instagram, but you don't care – you can keep sleeping."  
				}, 
				{  
					t: "Get up and growl at her", 
					rep: { "Chantal": -10 }, 
					m: 15, f: 5, a: 15, c: 0,  
					r: "Your pulse shoots from zero to a hundred. 'OUT!', you roar with a rough, scratchy sleep-deprived voice. She drops her phone and runs away. Your territory is defended, but you're now wide awake and terribly angry."  
				} 
			] 
		},
		{ 
			id: "lunch_teambuilding_pizza", 
			title: "LUNCH: THE PIZZA TRAP", 
			text: "The CEO ordered pizza! It's a trap: While everyone is chewing, he turns on the projector. 'Let's talk about the new KPIs in the ticket system!'", 
			opts: [ 
				{  
					t: "Open and read the Win95 manual", 
					req: "manual", 
					m: 45, f: -10, a: 0, c: -5,  
					r: "You open the thick tome and pretend to study ancient network protocols. The boss respects this 'self-directed professional development' and leaves you completely alone with his annoying questions."  
				}, 
				{  
					t: "Grab two slices of pizza and flee",  
					m: 15, f: -5, a: 5, c: 10,  
					r: "The hit-and-run tactic! You quickly snatch two large slices of salami pizza and flee to the server room. This costs you team spirit points, but you successfully save your hard-earned free time."  
				}, 
				{  
					t: "Argue against KPIs with a mouthful", 
					rep: { "Dr. Wichtig": 10 }, 
					m: 60, f: 10, a: 10, c: 5,  
					r: "You've had enough. With a mouthful, you start to harshly criticize the new rules. Colleagues roll their eyes in annoyance. Your recovery break is gone, but the CEO appreciates your 'passionate commitment'."  
				} 
			] 
		},
		{ 
			id: "lunch_fridge_thief", 
			title: "LUNCH: THE THIEF", 
			text: "Someone has been stealing food lately. You brought an expensive chocolate pudding and are afraid to leave it unguarded in the fridge.", 
			opts: [ 
				{  
					t: "Secure the Tupperware with zip ties", 
					req: "zip_ties", 
					m: 30, f: -10, a: 0, c: 0,  
					r: "This is now a high-security facility. You cinch the container crosswise. The thief would need pruning shears to get to it. Your pudding is absolutely safe and tastes even better afterward."  
				}, 
				{  
					t: "Stick a fake note on it",  
					m: 30, f: -10, a: -5, c: 0,  
					r: "You take a Post-it and write in scrawled handwriting 'Medical Stool Sample - Dr. Wichtig' on it. No one in the entire building dares to even look at the thing. Pure psychological warfare."  
				}, 
				{  
					t: "Hide and ambush the thief",  
					m: 45, f: 10, a: 10, c: 5,  
					r: "You spend your entire break kneeling and lurking behind the door next to the fridge. Your legs fall asleep, but the thief simply doesn't show up. You sacrificed your valuable free time for nothing."  
				} 
			] 
		},
		{ 
			id: "lunch_server_zen", 
			title: "LUNCH: THE IT TEMPLE", 
			text: "Two departments are yelling at each other in the hallway. You have no more strength for people. You take your food and go into the cool server room.", 
			opts: [ 
				{  
					t: "Untangle cables and meditate", 
					req: "cable", 
					m: 45, f: -15, a: -10, c: 0,  
					r: "While you eat slowly, you lovingly and extremely symmetrically arrange the patch cables in the rack. The monotonous hum of the fans and the rhythmic blinking of the LEDs heal your broken admin soul piece by piece."  
				}, 
				{  
					t: "Sacrifice a donut and relax", 
					rem: "donut", 
					m: 30, f: -15, a: -15, c: 0,  
					r: "Cool, filtered air, the hypnotic roar of heavy machinery, and the pure, unhealthy sugar in your veins. You've isolated yourself and arrived in absolute SysAdmin heaven. (Item consumed)"  
				}, 
				{  
					t: "Sit on the floor and stare into space",  
					m: 30, f: -10, a: -5, c: 0,  
					r: "You don't even eat. You just sit cross-legged on the cool grid floor and stare into the dark void. Sometimes it's enough just not to have to hear a human voice for 30 minutes."  
				} 
			] 
		},
		{ 
			id: "lunch_cheap_ceo", 
			title: "LUNCH: PROFIT SHARING", 
			text: "The CEO emails: 'Thanks to record sales, the company is treating everyone to lunch!' In the canteen, there's a McDonald's box. There's ONE lukewarm cheeseburger per person. The box is almost empty.", 
			opts: [ 
				{  
					t: "Snatch the last burger before Markus", 
					rep: { "Markus": -5 }, 
					m: 10, f: -5, a: 15, c: 0,  
					r: "Survival of the fittest! You ruthlessly secure the lukewarm patty. It tastes of pure stinginess and disappointment, but at least you won this small, primitive power struggle against the arrogant sales manager."  
				}, 
				{  
					t: "Let intern Kevin go first", 
					rep: { "Kevin": 5 }, 
					m: 5, f: 0, a: 10, c: 0,  
					r: "You step back and leave the last meal to the hungry intern. You smile bravely, but this bottomless, disrespectful insolence from the rich management makes your blood boil. A real low point."  
				}, 
				{  
					t: "Unpack your gourmet sandwich", 
					rem: "sandwich", 
					m: 30, f: -15, a: -10, c: 0,  
					r: "You demonstratively withdraw from the scramble and grin as you bite into your excellent pastrami sandwich. While the others fight over sad leftovers, you have masterfully escaped the system. (Item consumed)"  
				} 
			] 
		},
	],
	empty_pool: {
		id: "fallback_empty",
		title: "Calm Before the Storm",
		text: "Nothing is happening right now. Everyone is probably happy (or dead). You stare at a fly.",
		opts: [
			{ t: "Twiddle thumbs", m: 20, f: 5, a: -5, c: 0, r: "Time passes slowly." }
		]
	}

};