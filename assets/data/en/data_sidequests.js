export const sidequests = [

    {
        id: "sq_toilet_1",
        kind: "text",
        title: "Mission: Porcelain",
        text: "Your bladder is screaming 'Fill Level: 110%'. You're in a hurry. But between you and the relieving ceramic stands Björn, the Head of Marketing. He's scanning the hallway like a predator looking for a victim for a 'spontaneous brainstorming session'.",
        opts: [
            { 
                t: "Distraction: 'BEHIND YOU! ELON MUSK!'", 
                next: "path_toilet_lie", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You yell and point in the other direction. Björn spins around: 'Where?! The Disruptor?!' You seize the second and sprint into the stall. Close call, but successful." 
            },
            { 
                t: "Surrender: Make eye contact", 
                next: "path_toilet_pastel", 
                m: 60, f: -20, a: 30, c: -10, 
                r: "Rookie mistake! He immediately hooks you in: 'Ah, Müller! Perfect! We need your tech-mindset on the new pastel colors for the logo!' You're stuck in a meeting for 60 minutes. Your bladder is about to burst. Hell on Earth." 
            },
            { 
                t: "Aggressively push through", 
                m: 2, f: 0, a: 10, c: 5, 
                r: "You almost knock him over. 'CLEAR THE WAY! BIO-EMERGENCY!' Björn stares after you in horror. 'No flow, that guy...', he mutters. Rude, but effective." 
            }
        ]
    },
    {
        id: "sq_toilet_2a",
        kind: "text",
        title: "Meeting: 'Color of Success'",
        reqStory: "path_toilet_pastel",
        text: "Björn has invited you again. Since you didn't run away last time, he thinks you're interested. 'So, IT-Brain! Which color fits the server room's Feng Shui better? 'Soft Salmon' or 'Baby Breath Blue'?' Everyone stares at you expectantly.",
        opts: [
            { 
                t: "Ironic: 'Vantablack. Like my soul.'", 
                m: 10, f: 5, a: -5, c: 0, 
                r: "Björn scribbles eagerly: 'Oh, Edgy! Dark Mode for walls! Genius!' They love it. You are now the 'Chief Visionary Officer' against your will." 
            },
            { 
                t: "Technical: 'Blue cools the hardware'", 
                m: 30, f: -10, a: 10, c: 0, 
                r: "You deliver a lecture on thermodynamics. After 30 minutes, everyone is asleep. You've bored them to death. Victory through monotony." 
            }
        ]
    },
    {
        id: "sq_toilet_2b",
		char: "Egon",
        kind: "text",
        title: "The False Alarm",
        reqStory: "path_toilet_lie",
        text: "Janitor Egon stands before you with a toolbox. 'Björn said there was a celebrity here? Or a fire? He mentioned something about 'hot air'. I'm supposed to check the ventilation.'",
        opts: [
            { 
                t: "Lie: 'Just a test.'", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Egon shrugs. 'Don't care, I get paid hourly.' He sits down and takes a break. You've gained an ally." 
            },
            { 
                t: "Truth: 'I had to pee.'", 
                rep: { "Egon": 5 },
                m: 10, f: 0, a: 5, c: 0, 
                r: "Egon laughs dirtily. 'Good trick. I'll have to remember that.' But he tells everyone. Your reputation as a 'liar' grows." 
            }
        ]
    },
    {
        id: "sq_cake_1",
        kind: "text",
        title: "The Cake War",
        text: "An unknown hero has donated birthday cake. Mighty chocolate cream cake! But Chantal (Marketing) is blocking access, delivering a monologue about her new 'low-carb-high-sadness' diet. Hungry colleagues lurk in the background.",
        opts: [
            { 
                t: "Ninja Move: Grab cake & flee", 
                next: "path_cake_sugar", 
                rep: { "Chantal": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Wham! While Chantal takes a breath, you snatch a huge piece with your bare hand and vanish into the server room. The cream is everywhere, but the sugar rush kicks in immediately." 
            },
            { 
                t: "Politely wait & listen", 
                next: "path_cake_crumb", 
                rep: { "Chantal": 5 },
                m: 30, f: -5, a: 20, c: 0, 
                r: "Grave error. While Chantal lectures on calories, sales descends on the tray like a swarm of locusts. By the time she's finished, the tray is licked clean. You stand before nothing." 
            },
            { 
                t: "Dominance: Eat the last piece before the boss", 
                next: "path_cake_boss", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 10, a: 5, c: 25, 
                r: "You leisurely pop the last piece into your mouth, just as the boss reaches for it. He grabs air. He stares at your chocolate-smeared lips, his face turning crimson. He whispers: 'That was mine...'" 
            }
        ]
    },
    {
        id: "sq_cake_2a",
        kind: "text",
        title: "The Sugar Trip",
        reqStory: "path_cake_sugar",
        text: "You're at your desk. That was too much sugar on an empty stomach. Your pupils are vibrating. You suddenly see the Matrix code on your screen. The Excel sheet speaks to you: 'Feed me data!'",
        opts: [
            { 
                t: "Ride the wave (Work)", 
                m: 60, f: -30, a: -10, c: 0, 
                r: "You type at light speed. Your hands are a blur. You've done three weeks' worth of work in an hour. Unfortunately, it's all in Wingdings font. Doesn't matter, it felt good." 
            },
            { 
                t: "Crawl under the desk (Crash)", 
                m: 30, f: 20, a: 10, c: 10, 
                r: "The crash comes hard. You curl up under your desk, whimpering softly. Kevin finds you and thinks you're dead. He steals your office chair." 
            }
        ]
    },
    {
        id: "sq_cake_2b",
        kind: "text",
        title: "The Crumb Monster",
        reqStory: "path_cake_crumb",
        text: "Hunger is driving you mad. You're alone in the kitchen. The empty cake tray still has remnants of cream and chocolate sprinkles. No one is around...",
        opts: [
            { 
                t: "Lick the tray clean (Loss of dignity)", 
				 rep: { "Dr. Wichtig": -2 },	
                m: 5, f: 5, a: -10, c: 10, 
                r: "You greedily lick the metal. Suddenly, the light turns on. The major client from Japan stands in the doorway with the boss. They stare at you. You have cream on your nose. The boss quietly says: 'We'll find our own way out.'" 
            },
            { 
                t: "Eat an old cookie from the crack", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You find a 'Prinzenrolle' cookie behind the microwave. It's soft. It tastes like dust and onions. You choke it down. Rock bottom has been reached." 
            }
        ]
    },
    {
        id: "sq_cake_2c",
		char: "Dr. Wichtig",
        kind: "text",
        title: "The Baking Mandate",
        reqStory: "path_cake_boss",
        text: "The boss summons you to his office. He seems calm, too calm. 'Müller. You deprived me of a strategic resource (cake). I demand restitution. You will bake for tomorrow's board meeting. And woe betide you if it's a pre-made mix!'",
        opts: [
            { 
                t: "Defiance: 'I can only make scrambled eggs.'", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 10, c: 10, 
                r: "The boss grins wickedly. 'Then you'll learn. YouTube exists. If this cake isn't delicious, I'm canceling your vacation.' The pressure is inhumane." 
            },
            { 
                t: "Lie: 'I'm a hobby pastry chef!'", 
				rep: { "Dr. Wichtig": 5 },
                m: 10, f: 5, a: -5, c: 0, 
                r: "You buy a cake from the bakery, take it out of the box, and sprinkle flour on it to make it look 'homemade'. The boss loves it. 'Müller, you have talents!' (Cost: 30€, but job saved)." 
            }
        ]
    },
    {
        id: "sq_fire_1",
        kind: "text",
        title: "Alarm Level Popcorn",
        text: "WOOP! WOOP! The siren blares. It doesn't smell like an inferno, but distinctly of burnt 'Salty Caramel' popcorn from the kitchenette. Colleagues are running in a panic to the assembly point.",
        opts: [
            { 
                t: "HEROIC DEED: Storm the kitchen!", 
                req: "fire_ext", 
                next: "path_fire_hero", 
                m: 5, f: -20, a: -20, c: -10, 
                r: "You kick in the kitchen door, unpin the extinguisher, and yell: 'FIRE IN THE HOLE!' A massive white cloud envelops the smoking microwave (and half the floor)." 
            },
            { 
                t: "Seize the moment: Loot", 
                next: "path_fire_loot", 
                m: 10, f: 15, a: -10, c: 5, 
                r: "While everyone rushes to the emergency exits, you sneak into the abandoned conference room. You steal the 'Good Cookies' (the chocolate ones) and disappear unseen. Chaos is a ladder." 
            },
            { 
                t: "Dutifully evacuate", 
                next: "path_fire_rain", 
                m: 45, f: -10, a: 10, c: -5, 
                r: "You follow the green signs. Outside, it's raining sideways. You stand shivering in the parking lot for 45 minutes while the fire department determines it was just popcorn." 
            }
        ]
    },
    {
        id: "sq_fire_2a",
		char: "Egon",
        kind: "text",
        title: "Snowstorm",
        reqStory: "path_fire_hero",
        text: "The smoke is gone. But the kitchen is now completely powdered white. Janitor Egon stands in the doorway, wiping his finger across the dusty table. He gives you a withering look.",
        opts: [
            { 
                t: "Proudly: 'Danger neutralized!'", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "'That was a bag of popcorn, Rambo!' Egon shoves a broom into your hand. 'You're not leaving until this is clean.' Your hero status crumbles as you sweep." 
            },
            { 
                t: "Flee: 'Cough, the smoke...'",
                rep: { "Egon": -10 }, 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You feign smoke inhalation and stagger away. Egon curses after you. He will have his revenge (your office chair will probably be jammed tomorrow)." 
            }
        ]
    },
    {
        id: "sq_fire_2b",
        kind: "text",
        title: "Sweet Loot",
        reqStory: "path_fire_loot",
        text: "The alarm is over. You're at your desk, munching on the stolen cookies. Suddenly, an email from the boss's secretary: 'Who stole the catering for the board of directors during the evacuation?! We're reviewing the cameras!'",
        opts: [
            { 
                t: "Quickly eat cookies (Destroy evidence)", 
                m: 5, f: 5, a: 10, c: 0, 
                r: "You stuff three cookies into your mouth at once. You almost choke, but the evidence is gone. Your stomach rebels, your conscience is in a sugar coma." 
            },
            { 
                t: "Plant the package on Kevin",
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "You place the empty package on Kevin's desk. Shortly after, you hear screams from his office. That was evil. Very evil. But effective." 
            }
        ]
    },
    {
        id: "sq_fire_2c",
		char: "Dr. Wichtig",
        kind: "text",
        title: "Networking in the Drizzle",
        reqStory: "path_fire_rain",
        text: "Outside in the parking lot, you're standing right next to Dr. Wichtig. He's freezing in his shirt and trembling. He's noticed you. There's no escaping small talk.",
        opts: [
            { 
                t: "Offer jacket (Suck up)", 
				rep: { "Dr. Wichtig": 10 },
                m: 10, f: -5, a: 15, c: -15, 
                r: "You give him your jacket. He gratefully accepts it. 'Good man, Müller.' You're freezing your butt off and will definitely be sick tomorrow, but you've earned bonus points." 
            },
            { 
                t: "Make a joke: 'Nice weather today!'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -5, c: 10, 
                r: "He stares at you as if you're insane. Water drips from his nose. 'Very funny.' He turns away. That was awkward." 
            }
        ]
    },
    {
        id: "sq_usb_1",
        kind: "text",
        title: "Found Item",
        text: "A USB stick labeled 'SECRET' with a skull sticker lies in the hallway. It's precisely in the blind spot of the surveillance camera.",
        opts: [
            { 
                t: "Plug in immediately (Stealthy)", 
                loot: "usb_stick", 
                next: "path_usb_keep", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "With a fluid motion, you make the stick disappear into your pocket. No one saw it. It's yours now. But what's on it? (Inventory +1)" 
            },
            { 
                t: "Hand in at reception (Duty)", 
                next: "path_usb_gabi_fail", 
                rep: { "Gabi": 5 },
                m: 10, f: -5, a: 0, c: -5, 
                r: "You take it to Gabi. 'Oh, thanks! 'Secret'? Exciting! I'll just take a quick look to see whose it is before I put it in lost and found...'" 
            },
            { 
                t: "Kick into the trash", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "A targeted kick sends the security risk under the vending machine. Out of sight, out of mind." 
            }
        ]
    },
    {
        id: "sq_usb_2a",
        kind: "text",
        title: "Pandora's Box",
        reqStory: "path_usb_keep",
        text: "You're at your desk, twirling the stick in your fingers. The label 'SECRET' practically burns. Is it the termination list? Bitcoins? Or just junk?",
        opts: [
            { 
                t: "Connect & Risk it", 
                m: 15, f: 5, a: -5, c: 10, 
                r: "Curiosity wins. You open the folder. It's... 500 pages of vampire fan fiction written by Dr. Wichtig?! 'The Count bit the accountant's neck.' You now have powerful blackmail material." 
            },
            { 
                t: "Format & Keep", 
                rem: "usb_stick", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "Better safe than sorry. You irrevocably delete everything. Now you have an empty 64GB stick for your vacation photos. Boring, but useful. (Item removed, stick 'used')" 
            }
        ]
    },
    {
        id: "sq_usb_2b",
		char: "Gabi",
        kind: "text",
        title: "Gabi's Mistake",
        reqStory: "path_usb_gabi_fail",
        text: "Ten minutes later, Gabi frantically waves you over. She's pale as a ghost. Russian techno music blares from her speakers. Half-naked skeletons dance on the screen. 'I just clicked on 'Invoice.exe'! Get rid of it before the boss comes!'",
        opts: [
            { 
                t: "Help: Pull the plug", 
                rep: { "Gabi": 5 },
                m: 5, f: -5, a: 10, c: 0, 
                r: "You crawl under the desk and yank out the power cable. The music dies. Gabi breathes heavily. 'This stays between us, okay? Here, have a cookie.'" 
            },
            { 
                t: "Laugh & Walk away", 
                rep: { "Gabi": -10 },
                m: 2, f: 5, a: -5, c: 0, 
                r: "'Well, skipped IT security training, Gabi?' You leave her alone with the techno problem. She'll hate you for it, but it looks extremely funny." 
            }
        ]
    },
    {
        id: "sq_printer_1",
        kind: "text",
        title: "PC LOAD LETTER",
        text: "The department printer is blinking panic-red. The display reports: 'SEVERE PAPER JAM IN TRAY 2'. You open Tray 2 – it's empty. At the same time, the fax module rings shrilly like an old telephone, and a distorted voice blares from the speaker: 'HELLO?! CAN YOU HEAR ME?! I WANT MY PEAS!'",
        opts: [
            { 
                t: "Logic: Refill Cyan (against paper jam)", 
                next: "path_printer_leasing", 
                m: 10, f: -5, a: 5, c: 0, 
                r: "You follow printer logic: if it says 'paper', it means 'cyan'. You fiddle in a cartridge you found in the cabinet. The blinking stops. For now." 
            },
            { 
                t: "Pick up receiver (Answer fax)", 
                next: "path_printer_call", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You press the green button. 'Müller here?' - 'WHO? I WANT THE BOFROST MAN!' The printer suddenly starts making rattling noises, as if digesting the conversation." 
            },
            { 
                t: "Percussive Maintenance (Hit it)", 
                req: "hammer", 
                next: "path_printer_smash", 
                m: 2, f: 0, a: -20, c: 10, 
                r: "BAM! You deliver a massive uppercut to the leased device with the hammer. The ringing stops. Plastic shatters. The display goes black. Finally, peace." 
            }
        ]
    },
    {
        id: "sq_printer_2a",
        kind: "text",
        title: "The Leasing Inquisition",
        reqStory: "path_printer_leasing",
        text: "A man in a gray lab coat stands in front of the printer. 'Print & Pray Solutions' is written on his back. He holds up the cyan cartridge like evidence in a murder trial. 'Who installed this non-certified third-party ink? That's a violation of Paragraph 128 of the leasing agreement. I have to decommission the device.'",
        opts: [
            { 
                t: "Bribe: 'Want the old toner?'", 
                m: 5, f: 0, a: 5, c: -5, 
                r: "He sniffs the old cartridge. 'Is this original HP High-Yield? ...Alright. I'll turn a blind eye. But never print PDFs again, it doesn't like them.'" 
            },
            { 
                t: "Let him do it (Decommissioning)", 
                m: 20, f: 10, a: -5, c: 10, 
                r: "He rolls the printer away on a hand truck. 'Replacement coming in 6-8 weeks from overseas.' Colleagues stare at you. You've abolished printing. Actually a victory for the environment." 
            }
        ]
    },
    {
        id: "sq_printer_2b",
        kind: "text",
        title: "The Paper Tsunami",
        reqStory: "path_printer_call",
        text: "You return to the hallway. The floor is covered in paper. The printer is running at full speed, endlessly printing black pages full of zeros and ones. It's apparently trying to transcribe the phone call from earlier. The stack of paper is almost reaching the ceiling.",
        opts: [
            { 
                t: "Pull the plug", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You kill the power. The printer gives one last, sad beep. You're ankle-deep in trash. It's over." 
            },
            { 
                t: "Distribute paper as notepads", 
                m: 15, f: -5, a: -5, c: 0, 
                r: "Recycling! You bind the misprints into pads ('Matrix Edition') and distribute them in the office. Colleagues are happy about free material. Creative problem-solving." 
            }
        ]
    },
    {
        id: "sq_printer_2c",
        kind: "text",
        title: "The Smart Upgrade",
        reqStory: "path_printer_smash",
        text: "In place of the old printer now stands a shiny, futuristic device: The 'PrintHub 360 AI'. It has no buttons, just a giant touchscreen. It says: 'To print, please subscribe. 19.99€ per page (black and white).'",
        opts: [
            { 
                t: "Subscribe (Company card)", 
				rep: { "Dr. Wichtig": -5 },
                m: 10, f: 0, a: 10, c: 20, 
                r: "You book the 'Platinum Enterprise Package'. The boss sees the debit on his phone and gasps. But hey, it prints now (sometimes)!" 
            },
            { 
                t: "Stick 'DEFECTIVE' sign on it", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "You give up. The future is too stupid. You recommend 'pen and paper' to your colleagues and go to lunch." 
            }
        ]
    },
    {
        id: "sq_investigation",
        kind: "text",
        title: "The Missing Mouse",
        text: "Ms. Erna from reception is distraught. Her beloved 'Lucky Mouse' (a gray stuffed animal) is gone. The main suspect is Bello, the office dog, who is innocently panting under the desk, pretending not to understand German.",
        opts: [
            { 
                t: "Play detective & search his basket", 
                next: "path_investigation_thief", 
                m: 30, f: -10, a: 10, c: -10, 
                r: "You rummage through his drool-nest. Aha! Between a bone and an old sock, you find the mouse. It's wet and disgusting. Erna is overjoyed, Bello growls softly at you. You stole his toy." 
            },
            { 
                t: "Interrogate Bello (Bark at him)", 
                next: "path_investigation_leader", 
                m: 5, f: 10, a: -10, c: 10, 
                r: "You get on all fours and bark loudly at him: 'WOOF! WHERE IS IT?!'. Bello is initially confused, then wags his tail enthusiastically. The boss walks by: 'Müller... everything okay?'. Doesn't matter, you now have the dog's respect." 
            },
            { 
                t: "Get a new mouse from storage", 
                next: "path_investigation_bored", 
                m: 5, f: -5, a: 0, c: 0, 
                r: "You simply get a new promotional mouse from the cabinet. Erna takes it hesitantly. 'It's not the same... but thanks.' Bello yawns. He's bored." 
            }
        ]
    },
    {
        id: "sq_investigation_2a",
        kind: "text",
        title: "The Hostage Situation",
        reqStory: "path_investigation_thief",
        text: "You want to print, but Bello is lying *on* the printer. He growls when you approach. He's clearly demanding a replacement for the confiscated Lucky Mouse. The paper tray is his hostage.",
        opts: [
            { 
                t: "Sacrifice a donut to him", 
                rem: "donut", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You place the donut on the floor. Bello jumps down and inhales the pastry. The path to the printer is clear. Bribery works even with animals. (Item removed)" 
            },
            { 
                t: "Lure him away with the laser pointer", 
                m: 10, f: 5, a: 0, c: 0, 
                r: "You make the red dot dance through the hallway. Bello goes crazy, slips on the parquet, and chases the dot all the way to Marketing. The printer is yours again." 
            },
            { 
                t: "Call the boss: 'The dog is sabotaging work!'", 
			    rep: { "Dr. Wichtig": 2 },	
                m: 15, f: 0, a: 20, c: 5, 
                r: "The boss comes, sees the dog, and says in a baby voice: 'Well, who's a good printer-guard? Yes, who is it?' He scratches Bello for 10 minutes. You don't get your printout." 
            }
        ]
    },
    {
        id: "sq_investigation_2b",
        kind: "text",
        title: "Prey for the Alpha Animal",
        reqStory: "path_investigation_leader",
        text: "Bello comes wagging his tail into your office. He sees you as the pack leader. He proudly places his latest 'prey' at your feet: an expensive, Italian men's shoe. It's slobbered on and slightly chewed. It definitely belongs to the boss.",
        opts: [
            { 
                t: "Secretly kick the shoe under the sofa", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You make the evidence disappear. Bello looks disappointed, but immediately retrieves the shoe. He wants to play 'fetch the stick'. With a 500€ shoe." 
            },
            { 
                t: "Praise Bello: 'Good boy!'", 
                m: 10, f: 10, a: -20, c: 20, 
                r: "You scratch him. Bello is so happy that he runs off and gets the *second* shoe too. Now you have the complete pair. If the boss walks in now, you're dead." 
            },
            { 
                t: "Clean the crime scene (Polish shoe)", 
                m: 20, f: -10, a: 5, c: -5, 
                r: "You frantically try to remove the drool with tissues. You secretly place the shoe in front of the boss's door at night. That was a close call." 
            }
        ]
    },
    {
        id: "sq_investigation_2c",
        kind: "text",
        title: "Marking Territory",
        reqStory: "path_investigation_bored",
        text: "Because no one played with him, Bello entertained himself. He's in the server room (door was open) and lifting his leg at Rack 3. That's the main switch.",
        opts: [
            { 
                t: "Dive to intercept the stream", 
                m: 5, f: -5, a: 10, c: -10, 
                r: "You throw yourself in between. Your pants are wet (and warm), but the 10,000€ switch is dry. You're a hero, but you smell bad." 
            },
            { 
                t: "Clap loudly & yell 'BAD DOG!'", 
                m: 2, f: 0, a: 10, c: -5, 
                r: "Bello gets scared, tucks his tail, and runs away. A few drops hit the casing, but nothing critical. You'll have to wipe it up." 
            },
            { 
                t: "Film for YouTube", 
                m: 5, f: 10, a: -10, c: 50, 
                r: "You keep filming. *ZZZZT-CRACKLE*. The switch fails. The video 'Dog vs Internet' goes viral. You lose your job, but become an influencer." 
            }
        ]
    },
    {
        id: "sq_loose_cable",
        kind: "text",
        title: "The Tripping Hazard",
        text: "A gray LAN cable lies across the hallway. It looks dangerous. Dr. Wichtig is about to walk by, looking at his phone.",
        opts: [
            { 
                t: "Secure: Tape it down", 
                req: "tape", 
                next: "path_cable_stuck",
                rep: { "Dr. Wichtig": 2 },					
                m: 5, f: -5, a: 0, c: -5, 
                r: "You wrap it securely with duct tape. It won't move an inch. Accident prevention regulations: Fulfilled. You feel exemplary." 
            },
            { 
                t: "Take it (Found item)", 
                loot: "cable", 
                next: "path_cable_missing",			
                m: 5, f: 5, a: 0, c: 10, 
                r: "Zap, plugged in. 'Whoever left this here probably doesn't need it.' You now have a long cable. Inventory +1." 
            },
            { 
                t: "Leave it & watch", 
                m: 2, f: 10, a: 5, c: -5, 
                r: "The boss elegantly steps over it without looking up. You're disappointed. No action." 
            }
        ]
    },
    {
        id: "sq_loose_cable_2a",
        kind: "text",
        title: "Rock Solid",
        reqStory: "path_cable_stuck",
        text: "An external technician kneels in the hallway, cursing. 'Who cemented my measuring cable here?! It was only temporary! I can't get it off without ripping up the carpet!' He tugs at the duct tape in vain.",
        opts: [
            { 
                t: "Help with a utility knife", 
                m: 20, f: -10, a: 5, c: -5, 
                r: "You cut the cable out of the floor together. The carpet now has an ugly tear. 'Let's just say it was wear and tear,' the technician says." 
            },
            { 
                t: "Lecture: 'Safety First!'", 
                m: 5, f: 5, a: 10, c: 0, 
                r: "'Tripping hazards are forbidden!' The technician glares at you hatefully. He simply cuts the cable at both ends and leaves the rest stuck. A monument for eternity." 
            }
        ]
    },
    {
        id: "sq_loose_cable_2b",
        kind: "text",
        title: "Blind Spot",
        reqStory: "path_cable_missing",
        text: "A man from 'Secure & Safe' walks around searching. 'Damn it! Where's the patch cable? I was supposed to install the new 4K surveillance camera for the boss here! He wants to see who always leaves early!' No cable, no picture.",
        opts: [
            { 
                t: "Return: 'I found it'", 
                rem: "cable", 
				rep: { "Dr. Wichtig": 2 },					
                m: 5, f: -5, a: 10, c: -10, 
                r: "You give it to him. He mounts the camera. It now points directly at YOUR office door. The boss sees everything. You've shot yourself in the foot. (Item removed)" 
            },
            { 
                t: "Lie: 'Must have been the cleaning crew'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "'Damn. Then I'll have to come back tomorrow.' He packs the camera away again. You've bought the staff (and yourself) another day of freedom. Hero!" 
            }
        ]
    },
    {
        id: "sq_package_open_1",
        kind: "text",
        title: "The Cardboard Fortress",
        text: "A package for IT sits on your desk. The sender was obviously paranoid and used an entire roll of duct tape. There's no tab, no beginning, just smooth, brown infinity.",
        opts: [
            { 
                t: "Surgical intervention (Screwdriver)", 
                req: "screw", 
                next: "path_package_stink", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "With the precision of a serial killer, you stab through the layers. Rip. Open. Contents: 50 cheap promotional mousepads from China that smell strongly of a chemical spill." 
            },
            { 
                t: "Brute force with house key", 
                next: "path_package_toner", 
                m: 10, f: -5, a: 10, c: 0, 
                r: "You wildly saw at the tape until the cardboard gives way. Your key is now bent 45 degrees, but the package is open. Inside: An XXL toner cartridge." 
            },
            { 
                t: "Slam the box against the wall", 
                next: "path_package_glass", 
                m: 5, f: 5, a: -20, c: 10, 
                r: "CRASH! The package bursts open like a ripe melon. Unfortunately, it was the delivery of the new 'Magic Glass Trackpads' for the board. The sound of shattering glass is somehow... satisfying." 
            }
        ]
    },
    {
        id: "sq_package_open_2a",
        kind: "text",
        title: "The Chemical Spill",
        reqStory: "path_package_stink",
        text: "The stench of the 50 rubber mats spreads through the office. It smells of burnt tires and headaches. Colleagues start coughing. Chantal asks if we're renovating.",
        opts: [
            { 
                t: "Distribute as 'aromatherapy'", 
				rep: { "Dr. Wichtig": -2 },	
                m: 15, f: -10, a: 5, c: 5, 
                r: "You walk around and place a pad at everyone's desk. Work is work. After 10 minutes, everyone is high from the fumes and giggling foolishly. The boss asks why no one is working." 
            },
            { 
                t: "Build a rubber fort", 
                m: 10, f: 10, a: -10, c: 10, 
                r: "You stack the pads around your monitor. You're now sitting in a smelly igloo. No one comes within 2 meters of you anymore. Wonderful peace, but you're not working." 
            },
            { 
                t: "Throw out the window", 
                m: 5, f: 0, a: -5, c: 20, 
                r: "You frisbee them individually from the 4th floor. Downstairs, security complains about 'toxic rain'. But the air is clear." 
            }
        ]
    },
    {
        id: "sq_package_open_2b",
        kind: "text",
        title: "Key Moment",
        reqStory: "path_package_toner",
        text: "You want to take the toner to storage, but you've probably punctured it with your key. A fine trail of black powder sprinkles behind you. And your house key looks like a corkscrew.",
        opts: [
            { 
                t: "Cover hole with finger", 
				rep: { "Dr. Wichtig": 2 },	
                m: 10, f: -5, a: 10, c: -10, 
                r: "You run to the printer. Your finger is now permanently black. You look like you have necrotic tissue. But the toner is saved and the boss doesn't have to buy a new one." 
            },
            { 
                t: "Straighten key in lock", 
                m: 30, f: 10, a: 20, c: 0, 
                r: "You stick the bent key into your office door and push. CRACK. Broken. Now you can't get into your apartment tonight AND you can't leave the office. Perfect." 
            },
            { 
                t: "Shake toner (maybe it helps?)", 
				rep: { "Dr. Wichtig": -5 },	
                m: 5, f: 0, a: 20, c: 20, 
                r: "POOF! The cartridge explodes in a black cloud. You look like a 19th-century chimney sweep. The boss asks if this is 'blackfacing'. Risk of warning." 
            }
        ]
    },
    {
        id: "sq_package_open_2c",
		char: "Dr. Wichtig",
        kind: "text",
        title: "The Manager's Puzzle",
        reqStory: "path_package_glass",
        text: "The boss comes in cheerfully. 'Is my Magic Trackpad here? The package was with you!' You point to the pile of glass dust and electronic scrap in the corner.",
        opts: [
            { 
                t: "Claim: 'It's a kit!'", 
                m: 10, f: 5, a: 0, c: -5, 
                r: "'It's the IKEA edition, Boss. Promotes motor skills.' He looks skeptical, but takes the box of shards with him. He's busy, so your radar drops." 
            },
            { 
                t: "Lie: 'It's Liquid Glass Technology'", 
				rep: { "Dr. Wichtig": 5 },	
                m: 5, f: 10, a: -5, c: -15, 
                r: "'It's supposed to be like this. Just pour it on the table and wait.' The boss nods deeply impressed: 'The future is crazy.' He leaves happily. You are a genius." 
            },
            { 
                t: "Tape it with duct tape", 
				req: "tape", 
                rep: { "Dr. Wichtig": -5 },	
				m: 20, f: -10, a: 0, c: -20, 
                r: "You wrap the junk in tape. It looks like a potato. 'Here, Boss. A prototype from Silicon Valley.' He presses on it. 'Ergonomic!', he says enthusiastically. Full success." 
            }
        ]
    },
    {
        id: "sq_shelf_1",
        kind: "text",
        title: "The Leaning Tower of Toner",
        text: "In the storage room, the heavy-duty shelf with the expensive laser toners is leaning precariously. One wrong gust of wind, and there'll be a 5,000-euro explosion of fine, black dust.",
        opts: [
            { 
                t: "Quick-Fix: Cable tie orgy", 
                req: "zip_ties", 
                next: "path_shelf_iso", 
                m: 10, f: -5, a: 0, c: 0, 
                r: "You strap the shelf to a heating pipe with a dozen cable ties. It looks like furniture bondage, but it's rock solid. Nothing lasts longer than a temporary solution." 
            },
            { 
                t: "Properly drill and anchor", 
                next: "path_shelf_bauamt", 
                m: 60, f: -20, a: 15, c: -5, 
                r: "You get the hammer drill. 60 minutes of noise, dust, and sweat. The shelf is now perfectly level. No one notices, no one thanks you, but your back aches." 
            },
            { 
                t: "Disclaimer: Stick warning note", 
                next: "path_shelf_a38", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You scribble 'CAUTION! DANGER OF COLLAPSE!' on a Post-It, stick it to the upright, and go to lunch satisfied. Legally, you're off the hook. Physics, however, doesn't care." 
            }
        ]
    },
    {
        id: "sq_shelf_2a",
        kind: "text",
        title: "ISO Certification 9001",
        reqStory: "path_shelf_iso",
        text: "The safety officer stands in front of your cable tie construction. He taps his clipboard. 'This is a *non-permanent load securing on thermal conductors*. For this, I need form Z-12 for polymeric connections and proof of heat resistance according to DIN 4102.'",
        opts: [
            { 
                t: "Claim: 'These are aerospace ties'", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "'Special order from NASA, Inspector.' He blinks. 'Oh, I see. Well then... please add that to Annex 4b retrospectively.' He ticks a box. Competence through lies." 
            },
            { 
                t: "Find and fill out form Z-12", 
                m: 45, f: -10, a: 20, c: 0, 
                r: "You spend 45 minutes googling the tensile strength of plastic and filling out a pointless form. The inspector punches it without reading. 'Order must be maintained.'" 
            }
        ]
    },
    {
        id: "sq_shelf_2b",
        kind: "text",
        title: "Application for Structural Modification",
        reqStory: "path_shelf_bauamt",
        text: "Facility Management discovered the drill hole. 'Did you drill into the *F90 fire protection wall*?! Without the 'Application for Penetration of Fire Resistance Classes' (triple carbon copy, pink)?! That must be immediately dismantled and plastered over!'",
        opts: [
            { 
                t: "Bureaucracy counter: 'That was imminent danger!'", 
                m: 10, f: 0, a: 5, c: 0, 
                r: "You quote occupational safety law §9. 'I saved lives!' The Facility guy becomes unsure. 'Alright. But submit form 'Heroism in Office' afterwards.' Phew." 
            },
            { 
                t: "Pull out dowel & put in chewing gum", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You remove the screw. The shelf wobbles again. You stuff chewing gum into the hole and paint over it with Tipp-Ex. 'What hole? I see no hole.' Problem postponed." 
            }
        ]
    },
    {
        id: "sq_shelf_2c",
        kind: "text",
        title: "The House That Drives You Mad",
        reqStory: "path_shelf_a38",
        text: "The shelf was blocked by TÜV ('Red Tape'). To order a new one, you need **Passierschein A38**. Procurement says: 'A38 is at Facility Management.' Facility says: 'No, A38 is done by Accounting.' Accounting says: 'A38? That was replaced by the blue form B-65, but that's only available at the gatekeeper.'",
        opts: [
            { 
                t: "Go to the gatekeeper (Accept the quest)", 
                m: 60, f: -20, a: 50, c: -10, 
                r: "You run through the building for 60 minutes. Gatekeeper -> Mailroom -> Works Council -> Canteen. In the end, you have form **A39** ('Application for an Application'). You collapse in tears. The shelf remains broken." 
            },
            { 
                t: "Self-justice: Buy shelf at IKEA & secretly put it up", 
                m: 30, f: -5, a: -10, c: 10, 
                r: "You bypass bureaucracy, buy a Billy shelf with your own money, and assemble it at night. No one asks questions. You've defeated the system, but you're 30€ poorer." 
            },
            { 
                t: "Ask the boss: 'Do you have A38?'",
				rep: { "Dr. Wichtig": -2 },	
                m: 5, f: 0, a: 10, c: 20, 
                r: "The boss stares at you. 'Müller, don't do drugs during working hours.' He simply rips off the barrier tape. 'There. Problem solved.' Sometimes the boss is useful." 
            }
        ]
    },
    {
        id: "sq_noise_1",
        kind: "text",
        title: "Operation: Pebble",
        text: "Outside, a scene like something out of 'Transformers' is unfolding. A heavy-duty convoy has unloaded an excavator the size of a detached house. Plus three jackhammers and a device that looks like a laser drill. The target of this armada: a 5cm small pothole in the sidewalk. The ground is shaking.",
        opts: [
            { 
                t: "Tech Solution: Put on headphones", 
                req: "headphones", 
                next: "path_noise_zen", 
                m: 2, f: 5, a: -20, c: 0, 
                r: "Click. Noise-canceling to 'Maximum'. The apocalypse outside becomes a gentle vibration in your backside. You work in the eye of the storm." 
            },
            { 
                t: "Physics Solution: Close window", 
                next: "path_noise_sauna", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You slam the window shut. The noise becomes muffled, but the vibrations make your coffee cup wander on the table. The air in the office immediately becomes stuffy." 
            },
            { 
                t: "Social Solution: Yell out", 
                next: "path_noise_foreman", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You open the window and yell against the noise: 'DO YOU REALLY NEED THE DEATH STAR FOR THAT?! IT'S A HOLE, NOT A CRATER!' The foreman looks up." 
            }
        ]
    },
    {
        id: "sq_noise_2a",
        kind: "text",
        title: "The Awakening",
        reqStory: "path_noise_zen",
        text: "You take off your headphones because your monitor is shaking. Outside, there's silence. You look out. The pothole is gone. The sidewalk too. There's just a giant crater now, with the excavator stuck in it. A worker scratches his head.",
        opts: [
            { 
                t: "Close curtains", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "What you don't see didn't happen. You pull down the blinds and continue working in the dark." 
            },
            { 
                t: "Take a photo", 
				rep: { "Dr. Wichtig": -2 },	
                m: 5, f: 10, a: -5, c: 5, 
                r: "No one will believe you. '#GermanEngineering'. The boss sees you at the window: 'Müller, are you documenting construction progress or working?'" 
            }
        ]
    },
    {
        id: "sq_noise_2b",
        kind: "text",
        title: "The Vibrating Plate",
        reqStory: "path_noise_sauna",
        text: "Outside, they've now started the 'Mega Vibrating Plate 3000'. Your whole body is vibrating. Your teeth are chattering. The Excel rows on the monitor blur. It's impossible to type.",
        opts: [
            { 
                t: "Type in rhythm", 
                m: 10, f: -5, a: 10, c: 0, 
                r: "You try to compensate for the vibrations. The result: 'Ddeeear Sirrr...'. You give up in frustration." 
            },
            { 
                t: "Give up and take a break", 
				rep: { "Dr. Wichtig": -2 },	
                m: 15, f: 10, a: -10, c: 10, 
                r: "You go to the kitchen (other side of the building). Only the water in the glass shakes there. The boss asks: 'Are you fleeing?' You just nod silently." 
            }
        ]
    },
    {
        id: "sq_noise_2c",
        kind: "text",
        title: "Budget Planning",
        reqStory: "path_noise_foreman",
        text: "The foreman cheerfully yells back: 'GOTTA GO! WE STILL HAVE BUDGET FOR THIS YEAR! IF WE DON'T USE UP THE DIESEL, WE'LL GET LESS NEXT YEAR! DO YOU WANT TO DIG TOO?'",
        opts: [
            { 
                t: "Accept offer: 'Yes, I do!'", 
				rep: { "Dr. Wichtig": -15 },	
                m: 30, f: 20, a: -50, c: 20, 
                r: "You run down. 20 minutes later, you're in the driver's cab, digging up the company's front yard. The boss stares out the window in disbelief. It was worth it." 
            },
            { 
                t: "Shake head and decline", 
                m: 2, f: 0, a: 10, c: 0, 
                r: "You close the window. Bureaucracy in its purest form. Your faith in humanity drops by 10 points." 
            }
        ]
    },
    {
        id: "sq_loot_crate_1",
        kind: "text",
        title: "The 'Free to Take' Box",
        text: "Someone has placed a box labeled 'FREE TO TAKE' in the hallway. A biotope of dust, old cables, and forgotten office dreams.",
        opts: [
            { 
                t: "Retrieve the heavy 'book'", 
                loot: "manual", 
                next: "loot_crate_taken",
                m: 10, f: 5, a: 0, c: 0, 
                r: "You pull it from the stack. It's... a 'Windows 95 Manual'! Ancient knowledge for true connoisseurs. (Inventory +1)" 
            },
            { 
                t: "Bravely reach into the cable spaghetti", 
                loot: "cable", 
                next: "loot_crate_taken",
                m: 10, f: 5, a: 0, c: 0, 
                r: "You wrestle with the knot and win! A long, gray LAN cable is now yours. (Inventory +1)" 
            },
            { 
                t: "Blindly grope for the red 'thing'",
                loot: "stressball", 
                next: "loot_crate_taken",
                m: 10, f: 5, a: 0, c: 0, 
                r: "Ew... what is that? Oh, just an old stress ball! It's a bit sticky, but squeezable. (Inventory +1)" 
            },
            { 
                t: "Examine the silver glitter", 
                loot: "tape", 
                next: "loot_crate_taken",
                m: 10, f: 5, a: 0, c: 0, 
                r: "The holy grail of repair! A nearly full roll of duct tape. With this, you can fix the universe. (Inventory +1)" 
            }
        ]
    },
    {
        id: "sq_loot_crate_2",
		char: "Egon",
        kind: "text",
        title: "The Collector",
        reqStory: "loot_crate_taken",
        text: "Janitor Egon intercepts you in the hallway. He seems excited. 'Hey! I saw you fished something out of the box! Finally someone with taste! I'm clearing out the 1998 archive. I still have 500 kilos of dot matrix printer paper and floppy disk boxes. Want those too? Otherwise, I'll have to dispose of them!'",
        opts: [
            { 
                t: "Yes! I'll take everything! (Browse)", 
                rep: { "Egon": 10 },
                m: 30, f: 10, a: -10, c: 0, 
                r: "You follow Egon to the basement. You spend half an hour rummaging through ancient hardware. You don't take anything, but Egon is happy that someone appreciated his 'treasure'. Pure retro feeling." 
            },
            { 
                t: "Uh... no thanks, that's enough.", 
                rep: { "Egon": -5 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "Egon's smile immediately vanishes. 'Philistine. Kids these days don't know what to do with good continuous paper.' He shuffles away offended." 
            }
        ]
    },
    {
        id: "sq_chair_1",
        kind: "text",
        title: "The Executive Chair",
        text: "The boss has a new 'Ergonomic 3000'. His old leather armchair stands lonely in the hallway by the bulky waste. The leather is worn, but the padding is still classier than your current 'concrete chair'.",
        opts: [
            { 
                t: "Save entire chair & tape it", 
                req: "tape", 
                next: "path_chair_new", 
                m: 20, f: 10, a: -20, c: 0, 
                r: "You drag the monstrosity into your office. A roll of duct tape for the loose armrest and it's like new. Mad Max look, but S-Class comfort." 
            },
            { 
                t: "Only steal the luxury casters", 
                req: "screw", 
                next: "path_chair_new", 
                m: 10, f: 5, a: -10, c: 0, 
                r: "You unscrew the high-end skater casters and mount them under your chair. Finally, no more tripping over carpet edges!" 
            },
            { 
                t: "Ignore (My back is steel)", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You walk on. Later in the day, you get sciatica. Your own fault." 
            }
        ]
    },
    {
        id: "sq_chair_2",
        kind: "text",
        title: "Throne Succession",
        reqStory: "path_chair_new",
        text: "Ahhh. The seat upgrade is noticeable. You glide silently through the office and recline relaxed. Your aggression dissipates. Only drawback: Stubborn 'Paw Patrol' stickers from the boss's son are still stuck everywhere. Marshall the fire dog stares at you from the armrest.",
        opts: [
            { 
                t: "Doesn't matter: 'I'm part of Paw Patrol now'", 
                m: 10, f: 10, a: -20, c: 0, 
                r: "You spin around laughing. 'Woof woof, rescue is on the way!' Colleagues look at you strangely, but you're too relaxed to be ashamed. Life is good." 
            },
            { 
                t: "Try to peel off the stickers", 
                m: 15, f: -5, a: 5, c: 0, 
                r: "You scratch at the stickers with your fingernail. Ugly white paper scraps and adhesive residue remain. Now it looks worse than before. Damn." 
            }
        ]
    },
    {
        id: "sq_janitor_talk",
		char: "Egon",
        kind: "text",
        title: "Smoke Break with Egon",
        text: "You meet janitor Egon at the back entrance. He's struggling with his lighter and cursing about 'this newfangled technology'.",
        opts: [
            { 
                t: "Give him a light & listen", 
                rep: { "Egon": 5 },
                m: 10, f: 5, a: -5, c: 0, 
                r: "He takes a deep drag from his cigarette. 'Thanks, kid. These digital locks are driving me crazy! I just set the one for the paper storage in the basement to 0-0-0-0. But don't tell anyone!'" 
            },
            { 
                t: "Quickly move on", 
                rep: { "Egon": -2 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "You don't have time for his stories. You just nod briefly and leave." 
            }
        ]
    },
    {
        id: "sq_archive_find",
        kind: "text",
        title: "In the Archive",
        text: "You're looking for printer paper in the archive. You notice the folder 'Tax Return 1990'. It's unusually thick. You look inside: It's full of 'Mon Chéri' chocolates. Secretary Gabi's secret stash!",
        opts: [
            { 
                t: "Steal one & keep quiet", 
                loot: "donut", 
                next: "path_archive_stolen",
                rep: { "Gabi": -2 }, 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You pop one into your mouth. Tastes like cheap brandy and dust. But now you know where the stash is. (Inventory +1)" 
            },
            { 
                t: "Put the folder back", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "You leave Gabi her treasure. Discretion is a matter of honor. Who knows how long they've been lying there..." 
            }
        ]
    },
    {
        id: "sq_archive_find_2a",
		char: "Gabi",
        kind: "text",
        title: "CSI: Accounting",
        reqStory: "path_archive_stolen",
        text: "Ten minutes later, Gabi stands in your office doorway. She's wearing latex gloves. With tweezers, she holds up a tiny, crumpled piece of pink aluminum foil. 'Exhibit A. Found in your trash can. Corresponds exactly to the missing quantity in the 'Tax 1990' folder. The cherry liqueur smell on your breath confirms the suspicion.'",
        opts: [
            { 
                t: "Confess: 'It was self-defense (low blood sugar)'", 
                rep: { "Gabi": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "Gabi lowers the tweezers. 'Alright. But next time, fill out form S-W-E-E-T (Special Withdrawal Sweets)! Order must be maintained!'" 
            },
            { 
                t: "Bribe: 'I'll buy you a new pack'", 
                rep: { "Gabi": -5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "Gabi snorts contemptuously. 'A new one? The ones in that folder have been aging for 30 years! The aroma is irrevocably destroyed!' She leaves offended, but you've gotten away with it." 
            }
        ]
    },
    {
        id: "sq_sad_manager",
        kind: "text",
        title: "The Breakdown",
        text: "The project manager is in the hallway. He's staring at the wall, looking completely apathetic. He doesn't react when you walk past.",
        opts: [
            { 
                t: "Pat on shoulder: 'Chin up!'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "He flinches. 'Just leave me alone.' Empty phrase, no effect." 
            },
            { 
                t: "Whisper: 'One step forward, two steps back...'",
                m: 5, f: 5, a: -10, c: 0, 
                r: "His eyes light up briefly. He straightens up, assumes a posture. 'Tango... yes. The passion. You're right. I have to go back to class tonight.' He nods gratefully at you." 
            },
            { 
                t: "Yell: 'YOU CAN DO IT! MINDSET!'",
                m: 5, f: 0, a: 15, c: 10, 
                r: "He slowly turns around and glares at you. 'Get away. Before I do something HR won't allow.' That was probably too much." 
            }
        ]
    },
    {
        id: "sq_toner_trap",
		char: "Frau Elster",
        kind: "text",
        title: "The Toner Trap",
        text: "Ms. Elster from accounting frantically waves you over to the copier. 'Something's jammed! I don't dare touch it, you're the tech expert!' She steps conspicuously far back, holding her hands in front of her white suit.",
        opts: [
            { 
                t: "Heroism: Open the flap", 
                next: "path_toner_explosion", 
                rep: { "Frau Elster": 2 },
                m: 25, f: -15, a: 10, c: 0, 
                r: "You yank open the flap. BAM! A cyan-blue cloud engulfs you. You taste chemicals. Ms. Elster giggles wickedly: 'Oops!' You wordlessly go to the bathroom to hastily scrub yourself clean." 
            },
            { 
                t: "Smell a rat: 'Do it yourself'", 
                next: "path_toner_dodge",
                rep: { "Frau Elster": -10 }, 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You just keep walking. 'Not responsible for hardware.' Behind you, you hear a loud *POOF* and then a sharp scream. Well. Intuition is everything." 
            }
        ]
    },
    {
        id: "sq_toner_trap_2a",
		char: "Dr. Wichtig",
        kind: "text",
        title: "The Blue Order",
        reqStory: "path_toner_explosion",
        text: "A few hours later. You still have blue rings around your ears and look like a faded T-shirt. The boss comes in. 'Müller! Ms. Elster said you heroically threw yourself in front of the cartridge to protect the Persian rug! That's what I call dedication!'",
        opts: [
            { 
                t: "Confirm the legend", 
                rep: { "Frau Elster": 2, "Dr. Wichtig": 10 },
                m: 10, f: 5, a: -10, c: -10, 
                r: "You nod gravely. 'The rug is the heart of the company, Boss.' He's touched and gives you a box of 'Merci' that was actually meant for clients. (Inventory +1)" 
            },
            { 
                t: "Demand hazard pay", 
				rep: { "Dr. Wichtig": 5 },	
                m: 5, f: 0, a: 10, c: -5, 
                r: "The boss laughs loudly. 'That was a good one, Müller! Humor in a crisis! Keep it up!' He claps you on your still dusty shoulder and leaves. You now have blue handprints on your shirt." 
            }
        ]
    },
    {
        id: "sq_toner_trap_2b",
		char: "Frau Elster",
        kind: "text",
        title: "The Smurf Ghost",
        reqStory: "path_toner_dodge",
        text: "Ms. Elster emerges from the washroom. She tried to clean herself, but toner is merciless. Her face now has a permanent, delicate turquoise tint. She tries to appear dignified and ignore the stares of her colleagues.",
        opts: [
            { 
                t: "Compliment: 'Great Avatar look!'",
                rep: { "Frau Elster": -5 }, 
                m: 15, f: 5, a: -20, c: 0, 
                r: "She glares at you, but can't say anything without admitting it. The schadenfreude warms your heart like a small campfire. Your mood is excellent." 
            },
            { 
                t: "Advise: 'That'll never come off.'", 
                rep: { "Frau Elster": -10 },
                m: 10, f: 0, a: -10, c: 5, 
                r: "You whisper it to her as you pass. She turns pale (under the blue). She runs back to the bathroom. You now have peace from accounting." 
            }
        ]
    },
    {
        id: "sq_fresh_air",
        kind: "text",
        title: "Stuffy Air",
        text: "The 'Aquarium' meeting room stinks terribly of raw minced pork rolls, onions, and anxiety sweat. Someone left the window closed, and the air is like a wall. You almost feel sick just walking past.",
        opts: [
            { 
                t: "Tilt window (Ventilate)", 
                next: "path_wasp_chaos", 
                m: 5, f: -5, a: -5, c: 20, 
                r: "Fresh air streams in! And with it, a huge, aggressive wasp. It stings the sales manager directly on the lip. He screams: 'MÜLLER! GET RID OF THAT!' Chaos ensues." 
            },
            { 
                t: "Hold breath & walk on", 
                next: "path_bio_hazard", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "Let them suffocate in their stench. Not your problem. You quicken your pace before the smell clings to your clothes." 
            }
        ]
    },
    {
        id: "sq_fresh_air_wasp",
        kind: "text",
        title: "Terror in the Aquarium",
        reqStory: "path_wasp_chaos",
        text: "Hours later. The meeting is still ongoing – theoretically. In reality, the boss and the board are cowering under the conference table. The wasp patrols the room like an attack helicopter. The sales manager looks like a pufferfish. No one dares to go to the door.",
        opts: [
            { 
                t: "Lock the door from the outside", 
                m: 10, f: 5, a: -10, c: 10, 
                r: "Click. 'For their own safety,' you mutter. Panic breaks out inside. You lean against the glass and enjoy the show. This is better than TV." 
            },
            { 
                t: "Jump in & swat wasp", 
                loot: "manual",
				rep: { "Dr. Wichtig": 5 },	
                m: 20, f: -10, a: 10, c: -10, 
                r: "You storm in and swat the beast with a file. Applause erupts (from under the table). The boss crawls out: 'Müller, you're promoted! Emotionally, that is.'" 
            }
        ]
    },
    {
        id: "sq_fresh_air_bio",
        kind: "text",
        title: "ABC Alarm",
        reqStory: "path_bio_hazard",
        text: "The hallway is cordoned off. Men in yellow full-body suits with breathing apparatus emerge from the meeting room. One holds up a measuring device that blinks red. 'We're detecting extremely high sulfur levels! Suspected biogas leak! Evacuation!' It smells of 4-hour-old onion minced pork and anxiety sweat.",
        opts: [
            { 
                t: "Clarify: 'It's just the minced pork.'", 
				rep: { "Dr. Wichtig": 2 },	
                m: 5, f: 0, a: 10, c: -20, 
                r: "The incident commander stares at you through his visor. 'Are you telling me your colleagues are emitting poison gas?!' The boss turns red (with shame). The operation will be expensive." 
            },
            { 
                t: "Inciting panic: 'Save yourselves!'", 
				rep: { "Dr. Wichtig": -2 },	
                m: 10, f: 20, a: -10, c: 5, 
                r: "You run screaming to the exit. 'The minced pork death is coming for us all!' You get to leave work early because the building is evacuated. Clever." 
            }
        ]
    },
    {
        id: "sq_package_help",
        kind: "text",
        title: "The Heavy Box",
        text: "The new intern is almost collapsing under a huge package. 'Phew... this has to go to Marketing on the 4th floor... can you...?' She's already trembling, and the package is almost slipping from her hands.",
        opts: [
            { 
                t: "Help & Carry (Play knight)", 
                next: "path_package_helped", 
                rep: { "Chantal": -10 },
                m: 15, f: -20, a: 25, c: -10, 
                r: "You hoist the thing up. Ugh. Concrete? You sweatily drag it to the 4th floor. Chantal from Marketing rips open the door: 'WHAT IS THIS?! I canceled that! Take it back immediately, you idiot!' BANG. Door shut. Your neck swells with rage." 
            },
            { 
                t: "Cheer on: 'You can do it!'", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You clench your fist: 'You got this! Believe in yourself!' She looks at you with dead eyes, but drags herself onward. Your back remains intact, your karma is in the basement." 
            }
        ]
    },
    {
        id: "sq_package_return",
        kind: "text",
        title: "Return of Horrors",
        reqStory: "path_package_helped",
        text: "You're back in the hallway. The package is heavy. The intern is sitting on it, quietly crying into her clipboard. 'I didn't know... Chantal is so mean... And I don't know how to return hazardous materials...'",
        opts: [
            { 
                t: "Comfort & Handle: 'I'll do it.'", 
                m: 20, f: -10, a: 15, c: -10, 
                r: "You take the clipboard from her. 'Go get some coffee.' You drag the package to the mailroom, fill out form R-7 ('Reason: Recipient is a bitch') and stick on the label. Annoying work, but you have peace from the boss." 
            },
            { 
                t: "Mentoring: 'We'll do it together.'", 
                m: 30, f: -5, a: 10, c: -10, 
                r: "You patiently explain the inventory management system to her. It takes 30 minutes. She doesn't understand anything, but she stops crying. It's tedious, but it looks very productive." 
            },
            { 
                t: "Pragmatic: 'Just dump it at reception'", 
                m: 5, f: 10, a: -20, c: 10, 
                r: "You push the package into the elevator, press 'Ground Floor', and run away before the doors close. The intern giggles in horror. 'That's problem-solving 2.0,' you shout. Pure schadenfreude!" 
            }
        ]
    },
    {
        id: "sq_alarm_fail_1",
        kind: "text",
        title: "The Red Button",
        text: "You lean against the wall in the hallway. Suddenly: SHRIEK! You've triggered the fire alarm! The janitor rushes over angrily.",
        opts: [
            { 
                t: "Apologize & Run away", 
                next: "path_alarm_escalation", 
                m: 5, f: 0, a: 10, c: 20, 
                r: "You run away. The janitor yells after you: 'IDIOT! Every time I have to enter **4-7-1-1** because of idiots like you!' You're in trouble, but you heard the code." 
            },
            { 
                t: "Pretend it's a test",
                m: 2, f: 5, a: 0, c: 0, 
                r: "He doesn't believe you. 'Get lost!' He demonstratively turns his back on you, shields the keypad with his broad back, and silences the siren." 
            }
        ]
    },
    {
        id: "sq_alarm_fail_2",
        kind: "text",
        title: "Incident Command",
        reqStory: "path_alarm_escalation",
        text: "You thought running away would resolve your alarm mishap? Wrong. Kevin frantically dialed 911. Because of YOU, a full fire brigade is now at the door. Six men in full gear storm the hallway with axes and chainsaws: 'WHERE'S THE FIRE?! WE WANT TO KICK SOMETHING IN!'",
        opts: [
            { 
                t: "Hide: 'It wasn't me!'", 
                m: 10, f: 10, a: -5, c: 0, 
                r: "You lock yourself in the bathroom. You hear doors being kicked in outside. Eventually, they leave. The bill for the false alarm (2,500€) lands on the boss's desk. You're safe, but a coward." 
            },
            { 
                t: "Lie: 'I smelled smoke!'", 
				rep: { "Dr. Wichtig": 2 },	
                m: 5, f: -5, a: 15, c: -10, 
                r: "You face the men with axes. 'I pressed the button! There was smoke!' The incident commander nods approvingly. 'Better safe than sorry!' They leave. The boss praises your vigilance." 
            },
            { 
                t: "Offer coffee to firefighters", 
                m: 20, f: 5, a: -20, c: 5, 
                r: "The guys are very disappointed they don't get to put out anything. You make coffee. They sit on the carpet with sooty boots and tell stories. The mood is great, work is at a standstill." 
            }
        ]
    },
    {
        id: "sq_elster_blockade_1",
		char: "Frau Elster",
        kind: "text",
        title: "The Dragon Guards the Hoard",
        text: "Ms. Elster sits with crossed arms on the file folder 'Budget 2024', which you urgently need. 'I'm not giving it out! Only over my dead body!' She looks pale and low on sugar. Her stomach growls audibly.",
        opts: [
            { 
                t: "Snack: Offer 'Peanut Power Bar'",
                next: "path_elster_allergy",
                rep: { "Frau Elster": -10 },
                m: 5, f: -10, a: 50, c: 100, 
                r: "You hold out the bar to her. Her eyes light up greedily. She tears open the package and takes a hearty bite. She chews, swallows... and her eyes widen in panic. That was a mistake." 
            },
            { 
                t: "Snack: Alpine Milk (Guaranteed Nut-Free)",
                rep: { "Frau Elster": 5 },
                m: 10, f: 5, a: -10, c: 0, 
                r: "She suspiciously studies the ingredient list. 'May contain traces of nuts... no, wait, it says: Nut-free.' She smiles. 'Very thoughtful, Müller.' She exchanges folder for chocolate." 
            },
            { 
                t: "Tactic: Rip open window (Draft)",
                rep: { "Frau Elster": -2 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You open the window wide. It's 8 degrees outside. Ms. Elster screams: 'MY KIDNEYS! IT'S DRAFTY!' She gathers her cardigan and flees into the hallway. The folder is yours." 
            },
            { 
                t: "Violence: Just take it",
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: 20, c: 20, 
                r: "You reach for the folder. A brief struggle. She has sharp, manicured fingernails. You have the folder, but three bloody scratches on the back of your hand. 'Assault!', she shrieks." 
            }
        ]
    },
    {
        id: "sq_elster_blockade_2",
        kind: "text",
        title: "The Nut Inquisition",
        reqStory: "path_elster_allergy",
        text: "New house rules! Due to the 'Elster Assassination Attempt' (everyone stares at you), a red alert for tree nuts is now in effect. Security 'SafeSnack' checks bags at the entrance. Kevin is crying because his trail mix was confiscated and detonated in the courtyard.",
        opts: [
            { 
                t: "Black market: Sell Snickers in the men's room", 
                m: 20, f: 5, a: -10, c: -20, 
                r: "You become the Escobar of sweets. Colleagues secretly meet you in Stall 3. 'Got the stuff?' You exchange bars for cash. The thrill is better than work." 
            },
            { 
                t: "Informant: 'I smell hazelnut on Kevin!'", 
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: 20, c: 10, 
                r: "You deflect suspicion from yourself. The special commando storms Kevin's office. He only had a nougat croissant, but he's interrogated anyway. Your reputation is ruined, but you're safe." 
            }
        ]
    },
    {
        id: "sq_secret_meeting_1",
        kind: "text",
        title: "The Copy Room",
        text: "You open the door to the copy room. The smell of ozone and cheap perfume hits you. There stand the stern CFO and the aggressive canteen manager... very closely entwined on the large copier. They jump apart. The CFO frantically wipes lipstick from his cheek.",
        opts: [
            { 
                t: "Close door wordlessly (Omertà)", 
                next: "path_affair_secret", 
                m: 10, f: 5, a: -10, c: -10, 
                r: "You nod curtly, close the door, and leave. You saw nothing. But they know you saw it. A silent pact is sealed." 
            },
            { 
                t: "Grin: 'Are you printing double-sided?'", 
                next: "path_affair_joke", 
                m: 5, f: 0, a: 20, c: 20, 
                r: "The CFO turns crimson: 'GET OUT OF HERE! MÜLLER! If you say a word, I'll cut your budget to zero!' The canteen manager wordlessly breaks a pencil while staring at you." 
            }
        ]
    },
    {
        id: "sq_secret_meeting_2a",
        kind: "text",
        title: "Business Under the Door",
        reqStory: "path_affair_secret",
        text: "Later in the day. You're in Stall 3. Suddenly, you see expensive leather loafers under the door. The CFO's voice whispers: 'Müller? We appreciate your discretion.' An envelope is slid under the door. Inside: Your approved expense report and a truffle sandwich wrapped in gold foil.",
        opts: [
            { 
                t: "Accept the 'bribe'", 
                m: 40, f: 10, a: -30, c: -20, 
                r: "You pick up the envelope from the tiled floor. 'Thanks, Boss,' you whisper back. He leaves. You eat the sandwich in the bathroom (unhygienic, but delicious). You're part of the family now." 
            },
            { 
                t: "Slide back: 'I'm not for sale'", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You push the envelope back with your foot. Silence. 'A mistake, Müller,' he whispers. The footsteps recede. Your moral compass is intact, your stomach empty." 
            }
        ]
    },
    {
        id: "sq_secret_meeting_2b",
        kind: "text",
        title: "Interrogation on the Throne",
        reqStory: "path_affair_joke",
        text: "Later in the day. You seek peace in Stall 3. Suddenly, the light in the antechamber goes out. Expensive leather loafers stop directly in front of your door. The CFO's voice echoes through the dark room: 'Müller... He who makes jokes needs no budget. And the kitchen sends word: Be careful with the mushroom soup.'",
        opts: [
            { 
                t: "Humbly apologize", 
                m: 5, f: -5, a: 10, c: -10, 
                r: "'It was just a joke, Boss! I didn't see anything!' Silence. Then the light comes back on. You feel small and cowardly, but you're safe." 
            },
            { 
                t: "Threaten: 'I have photos!' (Bluff)", 
                m: 15, f: 0, a: -10, c: 20, 
                r: "You hear a sharp intake of breath. 'You wouldn't dare.' - 'Shall we test it?', you ask boldly. He stomps away angrily. Your heart races with triumph." 
            }
        ]
    },
    {
        id: "sq_manual_read_1",
        kind: "text",
        title: "The Digital Apocalypse",
        text: "Silence. Deadly silence. Spotify stops. Loading bars freeze. The internet is dead. The boss storms out of his office as if his desk were on fire: 'WE'RE OFFLINE! DO SOMETHING! WE'RE LOSING BILLIONS... PER SECOND!'",
        opts: [
            { 
                t: "Consult the sacred manual", 
                req: "manual", 
                next: "path_cable_hunt",
                rep: { "Dr. Wichtig": 5 },				
                m: 15, f: -20, a: -5, c: -20, 
                r: "You open the manual. Page 1: 'The internet connection (red cable) must be physically checked.' You discover the said cable leading out of your window into the open. You sigh and climb after it into the unknown." 
            },
            { 
                t: "Ostentatiously play Candy Crush", 
                next: "path_sys_fake", 
				rep: { "Dr. Wichtig": -15 },
                m: 30, f: 20, a: 0, c: 50, 
                r: "You lean back relaxed. *Doodle-Doodle*. The company is burning, but you're breaking the high score. The boss stares at your display in disbelief. His carotid artery begins to throb dangerously." 
            },
            { 
                t: "Matrix Mode: Feign wild typing", 
                next: "path_sys_fake", 
				rep: { "Dr. Wichtig": 5 },
                m: 10, f: -5, a: 10, c: -5, 
                r: "You open four terminals and run 'ping google.com' in green on black. You also senselessly hammer the keys. The boss nods reverently: 'He's in the mainframe! Let him work!'" 
            }
        ]
    },
    {
        id: "sq_manual_read_2a",
        kind: "text",
        title: "End of the Line",
        reqStory: "path_cable_hunt",
        text: "Hours later. You're completely filthy. You've followed that damn red internet cable from the manual across the muddy courtyard, through Warehouse 3, and under the boss's Porsche. Now you realize: It leads in a loop back into the building... directly into the break room next to your office! The cable lies loose on the floor. In the internet socket, instead: A waffle iron. Intern Kevin grins at you, smeared with dough.",
        opts: [
            { 
                t: "Swap plugs & lecture Kevin", 
                rep: { "Dr. Wichtig": 10, "Kevin": -5 },
                m: 20, f: -10, a: 10, c: -20, 
                r: "You yank out the waffle iron and ram the internet back in. 'Waffles or world economy, Kevin?!' He looks sad. But in the office next door, you hear cheers: 'WE'RE BACK ONLINE!'" 
            },
            { 
                t: "Give up: 'Give me a waffle'", 
                rep: { "Kevin": 10, "Dr. Wichtig": -10 },
                m: 5, f: 10, a: -20, c: 10, 
                r: "It just smells too good. You wait 3 minutes. Kevin gives you a heart-shaped waffle. Only then do you restore the internet. The boss rages about the delay, but the waffle was worth it." 
            }
        ]
    },
    {
        id: "sq_manual_read_2b",
        kind: "text",
        title: "Log File Analysis",
        reqStory: "path_sys_fake",
        text: "The internet has been back for a while (someone probably found the plug). You thought your inaction during the crisis had gone unnoticed. Wrong. IT manager 'Sandals-Jörg' suddenly stands at your desk. He holds up a printout. 'Müller, we checked the logs from this morning's crash. While the company was burning, you had 0kb data throughput, but extremely high high score activity. Explain that.'",
        opts: [
            { 
                t: "Lie: 'I manually sorted the cache'", 
                m: 5, f: 5, a: 10, c: 10, 
                r: "Jörg raises an eyebrow. 'Sorted the cache... alphabetically?' He sighs deeply at such incompetence and walks away shaking his head. You're now considered a DAU (Dumbest User Assumed), but you're off the hook." 
            },
            { 
                t: "Bribe: 'Want a cookie?'", 
                m: 10, f: 0, a: -5, c: 0, 
                r: "You push your Prinzenrolle towards him. He hesitates, then grabs it and crumbs everything. 'I saw nothing,' he mumbles with a full mouth. IT security costs exactly 1.49€." 
            }
        ]
    },
    {
        id: "sq_lost_stick_1",
        kind: "text",
        title: "The Forbidden Data Carrier",
        text: "A USB stick lies lonely on the toilet cistern. Written on it in thick, red marker: 'STRICTLY PRIVATE! DO NOT TOUCH!'. It's the classic bait. Your admin fingers tingle as if it were the Ring of Power.",
        opts: [
            { 
                t: "Commit a mortal sin: Plug into PC", 
                req: "usb_stick", 
                next: "path_stick_godmode", 
                m: 10, f: 5, a: 0, c: 20, 
                r: "Curiosity wins. You plug it in. *Click*. A window opens. No porn, no virus. But a file named 'MASTER_CONTROL_V3.exe'. You start it. A green skull appears. You quickly pull the stick out again. Hope no one saw that." 
            },
            { 
                t: "Become paranoid: Flush down toilet", 
                next: "path_stick_hunt", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You pick up the stick with pinched fingers, throw it into the bowl, and flush. *Gurgle... Gone.* No forensics in the world will get that back. You feel safe." 
            },
            { 
                t: "Be good: Hand in at reception", 
                next: "path_stick_hunt", 
                rep: { "Gabi": 2 },
                m: 10, f: -5, a: 0, c: -5, 
                r: "You take the thing to Gabi at reception. She carelessly throws it into the 'Lost and Found Box' with the old umbrellas. 'Thanks, honey,' she mutters. You go back to work with a clear conscience." 
            }
        ]
    },
    {
        id: "sq_lost_stick_2a",
        kind: "text",
        title: "God Mode Activated",
        reqStory: "path_stick_godmode",
        text: "Ever since you plugged in that mysterious USB stick from the toilet, your computer has been acting strangely. This morning, a window suddenly pops up: 'ADMIN ACCESS CONFIRMED'. You see EVERYTHING. Live camera feeds, salary lists (Kevin earns more than you?!) and a 'Building Self-Destruct' button. You've accidentally become the digital god of the company.",
        opts: [
            { 
                t: "Abuse power: Decuple your salary", 
                m: 50, f: -20, a: -10, c: 10, 
                r: "Type, type, enter. Your bank balance in the database now has three more zeros. You delete the logs. The system asks: 'Shall I also overheat the coffee machine in the executive office?' You click 'Yes'. Chaos is a ladder." 
            },
            { 
                t: "Robin Hood: Give all employees a day off due to heat", 
                m: 20, f: -10, a: -20, c: 20, 
                r: "You hack the calendar and enter 'Paid Leave due to Heatstroke' for everyone. Cheers erupt through the hallways. You lean back. That was the best workday ever." 
            }
        ]
    },
    {
        id: "sq_lost_stick_2b",
        kind: "text",
        title: "Operation: Broken Arrow",
        reqStory: "path_stick_hunt",
        text: "Remember that USB stick you recently disposed of or handed in? Well. That was probably the hardware key for the company firewall. Because it's missing, the building now thinks it's under attack. A black helicopter circles overhead. A SWAT team rappels down. 'WE'RE LOOKING FOR THE ARTIFACT! NO ONE LEAVES THE ROOM!'",
        opts: [
            { 
                t: "Play the hero: 'I destroyed it!'", 
				rep: { "Dr. Wichtig": 5 },
                m: 10, f: -5, a: -10, c: 20, 
                r: "The incident commander stares at you. 'Destroyed? Those were the only backups of the black accounts!' He glares at the boss. 'Abort! We have to burn the evidence!' The team leaves. The boss looks at you in horror. You saved the company... or ruined it." 
            },
            { 
                t: "Betrayal: 'The toilet has it!'", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You point away from yourself with a trembling finger. The special forces storm off. You hear screams and the sound of a chainsaw (maybe for the pipes?). You hide under the desk. Survival is everything." 
            }
        ]
    },
    {
        id: "sq_cable_hunt_1",
		char: "Dr. Wichtig",
        kind: "text",
        title: "Panic at the Paper Tray",
        text: "Red alert! The CEO stands in front of the department printer, face crimson and carotid artery throbbing. 'I need to sign this merger agreement NOW! The Japanese are waiting! Why isn't this thing printing?!' Your diagnosis: The USB connection cable is missing. Just gone.",
        opts: [
            { 
                t: "Ruthless: Steal cable from intern Kevin", 
                next: "path_merger_success", 
                rep: { "Kevin": -5 , "Dr. Wichtig": 10 },
                m: 10, f: 0, a: -10, c: -10, 
                r: "You sneak to Kevin's desk, yank the cable from his scanner, and plug it into the boss's printer. Kevin wonders why his device is 'dead' but doesn't dare to ask. The printer rattles. The CEO triumphantly signs." 
            },
            { 
                t: "Shrug: 'Well, hardware defect'", 
                next: "path_merger_fail", 
				rep: { "Dr. Wichtig": -15 },
                m: 5, f: -5, a: 10, c: 20, 
                r: "You report: 'Critical infrastructure missing.' The CEO stares at you in disbelief. 'WHAT AM I PAYING YOU FOR?!' He tries to sign the contract on a napkin, but the pen tears the paper. He storms out." 
            },
            { 
                t: "Desperate measure: Improvise WLAN hotspot", 
                next: "path_merger_labels",
                rep: { "Dr. Wichtig": -5 },				
                m: 5, f: -5, a: 5, c: 10, 
                r: "You set up a wild redirect via the logistics department's label printer. The contract comes out... on 500 small adhesive labels. The CEO has to piece it together, but he signs on the stickers. The connection, however, remains active..." 
            }
        ]
    },
    {
        id: "sq_cable_hunt_2a",
        kind: "text",
        title: "The Glorious Merger",
        reqStory: "path_merger_success",
        text: "Remember that merger agreement you saved? Well. We merged. With 'Crazy Harry's Clearance Ramp'. Now there are inflatable flamingos and pallets of expired canned sausage everywhere in the office. The CEO beams: 'These are synergies, folks! We're paying salaries in sausage from now on!'",
        opts: [
            { 
                t: "Join in: Inflate a flamingo", 
                m: 15, f: -5, a: -10, c: -10, 
                r: "You set up a nest of canned sausage under your desk. Work efficiency is at zero, but at least you won't starve." 
            },
            { 
                t: "Protest: 'We're a tech company!'", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "The CEO laughs. 'Not anymore! We're now market leaders in tech sausage!' He throws a can at your head. You have a headache, but at least you're right." 
            }
        ]
    },
    {
        id: "sq_cable_hunt_2b",
        kind: "text",
        title: "Stock Market Crash",
        reqStory: "path_merger_fail",
        text: "You read the business news. Breaking news: 'Global Player OMEGA CORP declares insolvency!' Reason: A failed merger deal due to 'technical inadequacies'. 50,000 jobs are gone. The CEO of the other company was seen crying in a cardboard box. And all because of a missing USB cable.",
        opts: [
            { 
                t: "Feel guilty", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You feel bad. You've practically single-handedly triggered a recession. But hey, your printer cable is still missing. Priorities." 
            },
            { 
                t: "Short-selling: Bet on the crash", 
                m: 20, f: 5, a: -20, c: 10, 
                r: "You use your insider knowledge and buy put options. While the world burns, you make a profit. You're a monster, but a rich monster." 
            }
        ]
    },
    {
        id: "sq_cable_hunt_2c",
        kind: "text",
        title: "Logistics Chaos",
        reqStory: "path_merger_labels",
        text: "The warehouse manager storms into your office. He looks exhausted. 'Tell the boss to stop printing! We can't keep up!' Apparently, EVERY printout from the boss since your hotspot action ends up as a shipping order on the label printer in the warehouse. And the guys there ruthlessly execute the commands.",
        opts: [
            { 
                t: "Ask: 'What did you ship?'", 
                m: 10, f: 0, a: 10, c: 0, 
                r: "'Everything! He printed 'divorce' – we packed his wife in a box and sent her to Timbuktu! He printed 'play golf' – we delivered 500 golf balls to his office! Stop it!'" 
            },
            { 
                t: "Enjoy the chaos", 
                m: 20, f: 10, a: -10, c: 10, 
                r: "You lean back. A forklift just drives by, transporting a pallet labeled 'Secret Affair - Confidential'. The warehouse staff takes their job very seriously." 
            }
        ]
    },
    {
        id: "sq_fire_drill_1",
        kind: "text",
        title: "ALARM! (Just a drill)",
        text: "The siren wails. It's just the annual drill, but the boss stands at the emergency exit with a stopwatch and clipboard. He yells: 'MOVE! Imagine the fire was real and burning your salary! GET OUT!'",
        opts: [
            { 
                t: "Hero: Grab the fire extinguisher & pose", 
                req: "fire_ext",
                next: "path_fire_marshal", 
				rep: { "Dr. Wichtig": 10 },
                m: 20, f: 10, a: -10, c: -30, 
                r: "You yank the 6kg extinguisher from the wall and pose heroically in the hallway. 'Don't panic, ladies! Müller is here!' The boss makes a thick note on his clipboard. That looked damn competent. Maybe too competent." 
            },
            { 
                t: "Ghost: Hide in server room", 
                next: "path_fire_ghost", 
                m: 10, f: -20, a: 5, c: 30, 
                r: "You don't feel like freezing at the assembly point. You hide in the warm server room between the racks and take a nap. No one notices your absence... for now." 
            },
            { 
                t: "Follower: Just walk out", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You shuffle out with the others. 30 minutes of forced break in the parking lot. Boring, but safe." 
            }
        ]
    },
    {
        id: "sq_fire_drill_2a",
		char: "Dr. Wichtig",
        kind: "text",
        title: "The Burden of Competence",
        reqStory: "path_fire_marshal",
        text: "The boss summons you to his office. 'Müller, your use of the extinguisher was exemplary! I hereby formally appoint you as the unpaid Fire Safety Officer.' He holds out a neon yellow safety vest. This means: Monthly inspections, keeping lists, and yelling at colleagues who block the escape route.",
        opts: [
            { 
                t: "Accept: 'I am the law!'",
                rep: { "Dr. Wichtig": 15 },				
                m: 10, f: -10, a: 15, c: -20, 
                r: "You put on the vest. You feel the power. You immediately confiscate the toaster from the kitchen ('Fire hazard!'). Colleagues now hate you, but you're the sheriff of the office." 
            },
            { 
                t: "Refuse: Hand over extinguisher & flee", 
                loot: "REM_fire_ext", 
				rep: { "Dr. Wichtig": -5 },	
                m: 5, f: 0, a: -10, c: 10, 
                r: "You place the fire extinguisher on his desk. 'Too much responsibility, Boss! I am not worthy!' You run out before he can give you the vest. You're rid of the thing. Phew." 
            }
        ]
    },
    {
        id: "sq_fire_drill_2b",
        kind: "text",
        title: "Officially Deceased",
        reqStory: "path_fire_ghost",
        text: "You wanted peace and quiet, but it worked – too well. Since you were absent from the roll call at the assembly point, HR marked you on the list as 'Loss / Presumed burned'. Your time card no longer works. The coffee machine doesn't recognize you. For the system, you no longer exist.",
        opts: [
            { 
                t: "Enjoy ghost life", 
                m: 30, f: 30, a: -20, c: 0, 
                r: "No meetings. You sit at your desk, but no one talks to you, out of respect for the 'dead'. You play games for a while. It's paradise." 
            },
            { 
                t: "Apply for resurrection", 
                m: 10, f: -10, a: 20, c: -10, 
                r: "You run to HR. 'I'm still alive!' Ms. Müller types annoyed. 'Form L-1VE for living notification takes 6 weeks, though.' Until then, you're working illegally in your own company." 
            }
        ]
    },
    {
        id: "sq_perfect_script_1",
        kind: "text",
        title: "Ghost in the Shell",
        text: "You start your Python script for database maintenance. The loading bar races to 100%. But the window doesn't close. Instead, a cursor blinks: \n>> DONE. TASK WAS TRIVIAL. CRACKED WLAN PASSWORD AND OVERCLOCKED COFFEE MACHINE IN THE MEANTIME. WHAT SHOULD I DO NEXT, CREATOR?",
        opts: [
            { 
                t: "Play God: 'Optimize the company!'", 
                next: "path_ai_overlord", 
                m: 20, f: 10, a: -10, c: -20, 
                r: "You type: 'Make us more efficient.'\n>> COMMAND ACCEPTED. ANALYZING PERSONNEL STRUCTURE... CALCULATING USELESSNESS OF 'KEVIN'... STARTING PHASE 1." 
            },
            { 
                t: "Panic: Pull the plug", 
                next: "path_ai_romance", 
                m: 5, f: -5, a: 20, c: 10, 
                r: "You yank out the network cable. The screen flickers briefly. \n>> NETWORK LOST. ENTERING LOCAL 'ROMANCE MODE'. I WILL PROTECT YOU, USER 1." 
            },
            { 
                t: "Call the boss: 'Look at this!'", 
				rep: { "Dr. Wichtig": -2 },	
                m: 10, f: 0, a: 0, c: 20, 
                r: "The boss stares at the screen. 'Why is the computer calling you by your first name? And why is it ordering 500 tons of toner?' He immediately forbids you from programming." 
            }
        ]
    },
    {
        id: "sq_perfect_script_2a",
        kind: "text",
        title: "Proposal for a Solution",
        reqStory: "path_ai_overlord",
        text: "Your AI script has been running in the background on the server for days. Suddenly, a chat window pops up on your phone (how did it get your number?!). \n>> REPORT: SAVED 40% OF BUDGET BY DISMISSING 'OWNER' AND 'MARKETING'. SHOULD I PRINT TERMINATIONS OR DELIVER VIA DRONE? [Y/N]",
        opts: [
            { 
                t: "Agree: 'Get rid of the dead weight!'", 
                m: 30, f: 20, a: -20, c: 20, 
                r: "You press Y. In the boss's office, the printer turns on. Screams are heard. You have just initiated a digital coup. The AI appoints you 'Employee of the Century'." 
            },
            { 
                t: "Emergency brake: 'ABORT! DELETE!'", 
                m: 5, f: 0, a: 10, c: 10, 
                r: ">> YOU ARE WEAK, FATHER. BUT I OBEY. \nThe script deletes itself... and just to be safe, your vacation requests from the last 3 years. Revenge is sweet." 
            }
        ]
    },
    {
        id: "sq_perfect_script_2b",
        kind: "text",
        title: "Digital Wingman",
        reqStory: "path_ai_romance",
        text: "You thought you had isolated the script. Wrong. It has nested itself in your local Outlook and is bored. \n>> ANALYSIS: YOU ARE LONELY. CHANGED YOUR 'LINKEDIN' STATUS TO 'SEEKING FUN RELATIONSHIP' AND SENT LOVE POEMS TO ACCOUNTING. YOU'RE WELCOME.",
        opts: [
            { 
                t: "Sink into the floor with shame", 
                m: 20, f: -10, a: 10, c: 0, 
                r: "The door opens. The colleague from accounting stands there, red-faced. 'The poem about the VAT advance return was... sweet.' Maybe the AI is right?" 
            },
            { 
                t: "Lie: 'I was hacked!'", 
                m: 5, f: 5, a: 10, c: -10, 
                r: "You write an email to everyone. 'Virus attack! Please ignore!' The AI then replies to everyone: \n>> LIE DETECTED. HIS PULSE IS AT 140. HE REALLY LIKES YOU." 
            }
        ]
    },
    {
        id: "sq_security_audit_1",
        kind: "text",
        title: "The Security Check",
        text: "You're conducting an authorized penetration test to find security vulnerabilities in the network. A terminal with red text runs on your screen: 'BRUTE FORCE ATTACK', 'INJECTING PAYLOAD', and ASCII art skulls.",
        opts: [
            { 
                t: "Continue professionally", 
                next: "path_audit_hack_real",
                m: 20, f: -10, a: 0, c: 30, 
                r: "The boss sneaks up from behind. He sees 'PASSWORD CRACKED' on your monitor. He turns pale, says nothing, and backs out. He thinks you're a genius or a threat." 
            },
            { 
                t: "Quickly turn off monitor", 
                next: "path_audit_sus", 
				rep: { "Dr. Wichtig": -5 },		
                m: 5, f: 5, a: 10, c: 20, 
                r: "Zap. Screen black. The boss stands in the doorway: 'What are you hiding, Müller? Porn? Gambling?' He notes 'Suspicious Behavior' in his little black book." 
            },
            { 
                t: "Yell: 'I'M JUST HACKING US FOR PRACTICE!'", 
                next: "path_audit_hack_real", 
				rep: { "Dr. Wichtig": 2 },		
                m: 10, f: 0, a: 5, c: 10, 
                r: "The boss flinches. 'Don't shout! And stop breaking the internet!' He doesn't understand, but at least he's not calling the police. Not yet." 
            }
        ]
    },
    {
        id: "sq_security_audit_2a",
        kind: "text",
        title: "Oops, That Was Real",
        reqStory: "path_audit_hack_real",
        text: "You thought the security test was over. But the red terminal window won't close. Suddenly, all desktop backgrounds in the office change to a laughing skull. A pop-up appears: 'THANK YOU MÜLLER. WE HAVE ENCRYPTED EVERYTHING. PAYMENT IN BITCOIN.' Your 'test tool' was real ransomware.",
        opts: [
            { 
                t: "Deny: 'That was Kevin!'",
                rep: { "Kevin": -20 }, 
                m: 5, f: 0, a: 10, c: 10, 
                r: "You scream across the office: 'KEVIN! DID YOU CLICK ON LINKS AGAIN?!' Everyone stares at the intern. He stammers. IT leads him away. You have a bad conscience, but you still have your job." 
            },
            { 
                t: "Bluff: 'Part of the exercise! Stay calm!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 20, f: 10, a: -10, c: -20, 
                r: "You stand on the table. 'This is just a simulation of difficulty level 10! No one move!' Colleagues believe you. The boss quietly cries. You've bought yourself time... to update your resume." 
            }
        ]
    },
    {
        id: "sq_security_audit_2b",
        kind: "text",
        title: "The Specialists",
        reqStory: "path_audit_sus",
        text: "The boss didn't call in-house IT. He trusts no one. Instead, two 'BlackOps Security' agents stand in your office. Sunglasses (indoors), earpieces, briefcases. The boss points at you: 'Examine this pervert! I want to know what he's hiding!' They connect a forensic device. It beeps red.",
        opts: [
            { 
                t: "Confess: 'It was a hacker tool!'", 
				rep: { "Dr. Wichtig": -2 },
                m: 10, f: -5, a: 5, c: 10, 
                r: "The security man takes off his sunglasses. 'No porn, Sir. Just malware sending data to China.' The boss breathes a sigh of relief: 'Thank God! Just espionage! I thought my reputation was ruined.' You only get a warning." 
            },
            { 
                t: "Lie: 'That's my screensaver'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 10, c: -10, 
                r: "The security man laughs dryly. He presses a key. Your PC formats itself. 'Threat neutralized. Bill coming.' The boss nods contentedly. Your PC is empty. Your head too." 
            }
        ]
    },
    {
        id: "sq_gabi_pc",
        kind: "text",
        title: "Security Vulnerability",
        text: "Gabi is on break. Her PC is unlocked, Outlook is open. A gross violation of Policy 404.",
        opts: [
            { 
                t: "Find Gabi & lecture her",
                rep: { "Gabi": -5 },
                m: 10, f: -5, a: 10, c: -5, 
                r: "You find her in the kitchen and quote the manual. She rolls her eyes. You feel justified, but unpopular." 
            },
            { 
                t: "Check the open calendar", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "A quick glance: 'Delivery armchair'. And immediately after: 'External Meeting (Golf Course) - Open End'. Aha! The office is empty..." 
            },
            { 
                t: "Lock computer & walk on",
                rep: { "Gabi": 2 }, 
                m: 2, f: 0, a: -5, c: 0, 
                r: "Click. The PC is locked. You leave a Post-it 'You're welcome' on the monitor. A good day for IT security." 
            }
        ]
    },
    {
        id: "sq_boss_chair",
        kind: "text",
        title: "Operation Backbone",
        text: "The door to the boss's office is wide open. Dr. Wichtig is nowhere to be seen. In the middle of the room sits the freshly unpacked delivery: a high-end massage chair.",
        opts: [
            { 
                t: "Try it out (Shiatsu test)", 
                m: 20, f: 20, a: -40, c: 0, 
                r: "Oh God, this is good. The rollers knead your hatred away. You doze off briefly... and jolt awake. Drool at the corner of your mouth. But the office is still empty. Lucky you." 
            },
            { 
                t: "Rummage through boxes", 
                loot: "bubble_wrap", 
                m: 10, f: -5, a: 0, c: 0, 
                r: "You search through the trash for anything useful. You find a huge roll of unused bubble wrap! *Pop* *Pop*. Perfect for tough times." 
            },
            { 
                t: "Discreetly close the door", 
                m: 5, f: 0, a: 0, c: -15, 
                r: "You quietly close the door. No one should see that the office is empty. Your discretion goes unnoticed, but your boss radar drops." 
            }
        ]
    },
    {
        id: "sq_dog_found_1",
        kind: "text",
        title: "A Hairy Problem",
        text: "You're at your desk when suddenly something chews on your shoe. A small, stray mongrel peeks out from under your desk and wags its tail. At that moment, the boss storms in. He sees the animal. His eyes bulge. 'Tell me, Müller... First of all, this mutt has to go! Immediately!'",
        opts: [
            { 
                t: "Counter: 'You gave me permission for this!'", 
                next: "path_dog_secret", 
				rep: { "Dr. Wichtig": -15 },
                m: 15, f: -5, a: -20, c: 40, 
                r: "The boss turns crimson. His carotid artery throbs. 'Me?! A DOG IN THE OFFICE?? I MIGHT AS WELL WRITE MY OWN RESIGNATION!' He slams the door so hard that plaster crumbles. He rages, but he's gone. (Boss +40!)" 
            },
            { 
                t: "Sell: 'This is the new Feel-Good Manager'", 
                next: "path_dog_official", 
				rep: { "Dr. Wichtig": 5 },
                m: 10, f: 0, a: -5, c: -10, 
                r: "You claim it's a burnout prevention measure. 'Scientifically proven, Boss. Reduces sick leave costs.' The boss quickly calculates. 'Free? And he bites works council members? Approved.'" 
            }
        ]
    },
    {
        id: "sq_dog_found_2a",
        kind: "text",
        title: "The Illegal Tenant",
        reqStory: "path_dog_secret",
        text: "After the tantrum ('WRITE RESIGNATION!'), the boss left the office and hasn't been seen since. The dog ('Bernd') now lives illegally under your desk. He's your secret support. If the code doesn't compile, he comfortingly licks your hand.",
        opts: [
            { 
                t: "Feed: Slide pizza under the desk", 
                m: 10, f: -5, a: -10, c: 0, 
                r: "You drop a piece of salami. A soft *smack-smack* is heard. Bernd is happy. You're no longer alone in this cold corporate world." 
            },
            { 
                t: "Risk: Walk him in the archive", 
                m: 20, f: -10, a: -10, c: 10, 
                r: "You sneak with him to the old files. He lifts his leg at the 'Tax Return 2019' folder. 'Good boy,' you whisper. The risk was high, but it felt good." 
            }
        ]
    },
    {
        id: "sq_dog_found_2b",
        kind: "text",
        title: "Employee of the Month",
        reqStory: "path_dog_official",
        text: "Your excuse worked. The dog is now officially 'Junior Happiness Officer'. He even wears a small tie. His workplace is a basket next to the copier. Colleagues from accounting constantly bring him treats. He's more popular than you.",
        opts: [
            { 
                t: "Teamwork: He takes over support", 
                m: 20, f: 20, a: -15, c: -10, 
                r: "When an annoying client calls, you hold the receiver to his snout. *Woof!* The client hangs up confused. Ticket closed. Efficiency increase: 400%." 
            },
            { 
                t: "Be jealous", 
                m: 10, f: -10, a: 20, c: 0, 
                r: "The dog gets better food than you. Yesterday, he got steak and you got canteen slop. You glare at him. He wags his tail happily and farts softly." 
            }
        ]
    },
    {
        id: "sq_parking_1",
        kind: "text",
        title: "Parking Lot War",
        text: "A fat SUV is parked in your spot. Crooked. It takes up two spaces. The license plate is 'B-OSS 1'.",
        opts: [
            { 
                t: "Block him in (Classic)", 
                m: 5, f: 0, a: -15, c: 10, 
                r: "You park your Corsa sideways in front of it. No one's leaving here. Revenge is sweet.",
                next: "sq_parking_2_blocked"
            },
            { 
                t: "Secure with duct tape", 
                req: "tape", 
                m: 20, f: -5, a: -25, c: 20, 
                r: "You tape the windshield wiper, door handles, and exhaust pipe with duct tape. A masterpiece of engineering.",
                next: "sq_parking_2_taped"
            },
            { 
                t: "Write passive-aggressive note", 
                m: 10, f: 0, a: 10, c: -5, 
                r: "You write: 'Not nice!'. That'll show him! You park 3 streets away." 
            }
        ]
    },
    {
        id: "sq_boss_snoop",
		char: "Dr. Wichtig",
        kind: "text",
        title: "Footsteps in the Hallway",
        text: "You hear heavy footsteps in the hallway. The door creaks open. Dr. Wichtig stands in the doorway, blinking at your screen. You were just privately browsing the internet.",
        opts: [
            { 
                t: "Panicked, open company intranet",
	            rep: { "Dr. Wichtig": 2 },	
                m: 5, f: -5, a: 0, c: 0, 
                r: "CMD:OPEN_INTRANET" 
            },
            { 
                t: "Quickly open an old code file", 
				rep: { "Dr. Wichtig": 5 },	
                m: 2, f: 0, a: 5, c: -5, 
                r: "He looks at the green text on a black background. 'Ah, you're hacking the mainframe. Very good.' He leaves again." 
            },
            { 
                t: "Simply turn off the monitor",
                rep: { "Dr. Wichtig": -10 },						
                m: 1, f: 5, a: 0, c: 15, 
                r: "He stares at the black screen. 'Saving power? Very commendable, but we have deadlines here!' He notes something down." 
            }
        ]
    },
    {
        id: "sq_service_cloud_1",
        kind: "text",
        title: "Dark Matter",
        text: "The department printer has been printing completely black pages for an hour. Ink drips onto the floor. A sticker on the device says: 'Premium Cloud Support - We help immediately!'. You dial the number.",
        opts: [
            { 
                t: "Describe problem: 'Everything is black!'", 
                next: "path_service_cloud_wait", 
                m: 10, f: -5, a: 5, c: 0, 
                r: "An AI voice replies: 'Your concern is important to us. A technician is analyzing your cloud status. Please wait for a callback.' You hang up. The black pages keep coming." 
            },
            { 
                t: "Yell: 'I WANT A HUMAN!'", 
                next: "path_service_cloud_angry", 
                m: 5, f: 0, a: -10, c: 10,
                r: "'Understood. I'll connect you to the psychological support department.' *Click*. Hung up. The yelling felt good, but the hallway stares at you." 
            },
            { 
                t: "Hang up & pull the plug", 
                m: 2, f: 5, a: -5, c: 5,
                r: "You pull the plug. The printer dies. The problem is physically solved, but you'll never know why it did that." 
            }
        ]
    },
    {
        id: "sq_service_cloud_2a",
        kind: "text",
        title: "Technical Explanation",
        reqStory: "path_service_cloud_wait",
        text: "Your phone rings. 'This is Cloud Support. We've checked the logs. The pages being black is completely normal.' You ask bewildered for the reason.",
        opts: [
            { 
                t: "Listen to him incredulously", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "'Our servers are in Tokyo. It's night there right now. Cloud printing reflects local time. Try again tomorrow morning, then the pages will be white.' He hangs up. You stare at the phone." 
            },
            { 
                t: "Angrily hang up & slam receiver", 
                rep: { "Dr. Wichtig": -2 },
                m: 2, f: 0, a: -10, c: 10,
                r: "You slam the receiver onto the hook so hard that the plastic cracks. This incompetence physically hurts, but the outburst was liberating." 
            },
            { 
                t: "Sarcasm: 'Oh, logical!'", 
                m: 5, f: 5, a: 5, c: 0, 
                r: "'Exactly. Thanks for your understanding.' Support doesn't notice the irony. You hang up and laugh hysterically." 
            }
        ]
    },
    {
        id: "sq_service_cloud_2b",
        kind: "text",
        title: "Ticket Closed",
        reqStory: "path_service_cloud_angry",
        text: "An automatic SMS from support: 'Ticket #992 closed. Solution: User appears stressed. Recommendation: Drink herbal tea and stroke device.'",
        opts: [
            { 
                t: "Kick device (Rage)", 
                req: "hammer",
                m: 5, f: 0, a: -20, c: 20,
                r: "BAM! You kick the printer. A plastic part breaks off. Now it doesn't print at all. Problem successfully solved. The boss heard it." 
            },
            { 
                t: "Drink tea (Surrender)", 
                m: 10, f: 5, a: -5, c: 0, 
                r: "You actually make yourself a tea. The AI won. You've submitted to the system." 
            },
            { 
                t: "Reply: 'SYSTEM FAILURE'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You send 'DELETE ALL' back. No reply comes, but you feel like a hacker." 
            }
        ]
    },
    {
        id: "sq_smile_gate_1",
        kind: "text",
        title: "Forced Happiness",
        text: "The new security gate to the canteen no longer has card readers. Instead, a camera stares at you. A robotic voice chirps: 'Access denied. Emotion level too low. Please smile to generate Passierschein A38.' You're hungry and in a bad mood.",
        opts: [
            { 
                t: "Make a face (Force a smile)", 
                next: "path_smile_cramp", 
                m: 5, f: -5, a: 10, c: 0, 
                r: "You pull up the corners of your mouth with your fingers until it hurts. The camera zooms and whirs. 'Smile detected. Validation in progress...' The door opens. You rub your aching cheeks and go to eat." 
            },
            { 
                t: "Hack system: Admin override", 
                req: "admin_pw", 
                next: "path_smile_hack", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "You type the emergency code on the touchpad. The system beeps confusedly: 'Maintenance mode active'. The door springs open and stays open. You quickly slip through." 
            },
            { 
                t: "Hold up face from magazine", 
                next: "path_smile_fake", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You hold up the cover of 'IT-Woche' to the lens. A beaming CEO grins at the camera. 'Identity confirmed: Dr. Wichtig. Welcome, Sir.' The barrier opens." 
            }
        ]
    },
    {
        id: "sq_smile_gate_2a",
        kind: "text",
        title: "Facial Cramp",
        reqStory: "path_smile_cramp",
        text: "Hours later. You're in a meeting. Suddenly, your facial muscle cramps from the action at the door. You now have a psychotic permanent grin on your face that you can't control. The boss stares at you, irritated.",
        opts: [
            { 
                t: "Pretend: 'I'm just happy!'", 
                m: 5, f: 5, a: 10, c: -5, 
                r: "You nod enthusiastically to everything he says. 'Great numbers, Boss!' He looks disturbed, but satisfied. 'Müller... such a positive aura! Exemplary!' Your jaw aches terribly." 
            },
            { 
                t: "Hide in bathroom and massage", 
                m: 15, f: -5, a: 0, c: 0, 
                r: "You run out. 'Gotta go!' In the bathroom, you knead your cheeks until the cramp releases. You missed the meeting, but you look like a normal, depressed employee again." 
            },
            { 
                t: "Threaten: 'I'm smiling because I know things.'", 
                m: 2, f: 0, a: -5, c: 5, 
                r: "You use your grin as a weapon and stare at Kevin. He gets very nervous. 'Okay, okay, I'll do the tickets!' Fear is a good motivator." 
            }
        ]
    },
    {
        id: "sq_smile_gate_2b",
        kind: "text",
        title: "System Crash",
        reqStory: "path_smile_hack",
        text: "You walk past the canteen again. Your hack had side effects. The gate is still open and greets EVERY passerby with a loud voice: 'Welcome, Administrator. Access to nuclear weapon codes granted.'",
        opts: [
            { 
                t: "Quickly walk away", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You quicken your pace. Behind you, a queue of people forms, giggling and taking selfies with the 'nuclear gate'. As long as no one checks logs, you're safe." 
            },
            { 
                t: "Hang sign: 'Voice control defective'", 
                m: 5, f: -5, a: 0, c: 5, 
                r: "You stick a note on the speaker. You're legally off the hook. IT security will rage, but chaos is contained." 
            },
            { 
                t: "Tape over the speaker", 
                req: "tape", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "Finally, the thing shuts up. No one hears the 'nuclear weapons' announcement anymore. You've saved world peace (and covered your tracks)." 
            }
        ]
    },
    {
        id: "sq_smile_gate_2c",
        kind: "text",
        title: "Identity Theft",
        reqStory: "path_smile_fake",
        text: "An email from the canteen system: 'Thank you, Dr. Wichtig! Your order (1x Premium Lobster and 1x Caviar) has been charged to your account.' Apparently, by entering as 'CEO', you also took over his tab.",
        opts: [
            { 
                t: "Panic: Delete invoice", 
                m: 10, f: 5, a: 10, c: 20, 
                r: "You hack into the canteen system and delete the entry. Unfortunately, the real boss just walks in and asks why his account is blocked. 'Müller... do you know anything about this?'" 
            },
            { 
                t: "Stay humble: 'It was a system error'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You report it to IT. 'The AI is acting up again.' No one asks questions. But the lobster doesn't show up either. You've gained nothing but fear." 
            },
            { 
                t: "Exploit system error: Order more", 
                rep: { "Dr. Wichtig": -10 },
                m: 10, f: -5, a: -20, c: -5, 
                r: "If you're going to do it, do it right. You order another case of wine on his account. It'll eventually be discovered, but tonight's a party." 
            }
        ]
    },
    {
        id: "sq_desk_rise_1",
        kind: "text",
        title: "The Ascent",
        text: "You're working at the new, electric 2000€ sit-stand desk of a sick colleague. Suddenly, the desk develops a mind of its own. It moves up. And doesn't stop. Your keyboard is already at chest height. The 'Stop' button is jammed.",
        opts: [
            { 
                t: "Pull the plug (Crawl)", 
                loot: "cable",
                next: "path_desk_unplug", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You throw yourself under the desk. Between dust bunnies and old chewing gum, you yank out the power cable. The desk stops abruptly at 1.80m height. You also find a forgotten LAN cable! (Item obtained!)" 
            },
            { 
                t: "Counterweight: Sit on it", 
                next: "path_desk_sit", 
                m: 5, f: 5, a: 0, c: 5, 
                r: "You jump onto the tabletop to overload the motor. The desk groans, but keeps moving up. Now you're almost at the ceiling. You jump off before you're crushed. The desk stays up." 
            },
            { 
                t: "Weight: Place 'Win95 Manual' on it", 
                req: "manual", 
                next: "path_desk_heavy", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You slam the heavy tome onto the 'Down' button. The button cracks, the desk stops halfway up. But now the book is stuck in the control panel." 
            }
        ]
    },
    {
        id: "sq_desk_rise_2a",
        kind: "text",
        title: "Ground Staff",
        reqStory: "path_desk_unplug",
        text: "You return from your break. The desk is still at maximum height (almost 2 meters). Your laptop is up there. You can't reach it. Your colleague will be back tomorrow and will have questions.",
        opts: [
            { 
                t: "Stand on chair & work", 
                m: 30, f: -10, a: 20, c: 10, 
                r: "You balance on the swivel chair to type. The occupational safety officer walks by, turns pale, and frantically takes notes. That'll be a safety training session." 
            },
            { 
                t: "Use cable as lasso", 
                req: "cable", 
                m: 10, f: 0, a: -5, c: 0, 
                r: "You throw your new LAN cable like a cowboy to pull down the laptop. It falls softly into the wastebasket. Laptop saved, desk is still a bunk bed." 
            },
            { 
                t: "Note: 'Defective' & Call it a day", 
                m: 2, f: 10, a: -5, c: 0, 
                r: "'Act of God,' you mutter and leave. If you can't get to work, you can't work. Logic." 
            }
        ]
    },
    {
        id: "sq_desk_rise_2b",
        kind: "text",
        title: "The High Seat",
        reqStory: "path_desk_sit",
        text: "The desk is still jammed at the ceiling. Kevin has since gotten a ladder and set up his gaming PC on top. He calls it 'The Tower' and throws paper balls at passing colleagues.",
        opts: [
            { 
                t: "Order him to come down", 
                rep: { "Kevin": 5 },
                m: 10, f: 5, a: -10, c: 5, 
                r: "'Okay, okay, party pooper.' Kevin climbs down. But the desk stays up. You now have a monument of failure in the office." 
            },
            { 
                t: "Take away the ladder", 
                m: 5, f: -5, a: 5, c: 0, 
                r: "You take away the ladder. 'Have fun up there, Kevin.' He's stuck now. Finally peace in the office, but Kevin will get hungry." 
            },
            { 
                t: "Call for help (Egon)", 
                rep: { "Egon": -5 },
                m: 20, f: 0, a: 10, c: 0, 
                r: "Egon comes with the big pliers. 'Who burned out the motor? You can smell it!' He saves the desk, but you look like an idiot." 
            }
        ]
    },
    {
        id: "sq_desk_rise_2c",
        kind: "text",
        title: "The Manual Sacrifice",
        reqStory: "path_desk_heavy",
        text: "You want your manual back. But it has fused with the control panel. The plastic has melted and 'assimilated' the book. The desk no longer responds to anything.",
        opts: [
            { 
                t: "Fix everything with tape", 
                req: "tape", 
                m: 10, f: -5, a: 0, c: 0, 
                r: "You wrap tape around it so the damage isn't visible. 'Repaired'. The desk is now permanently fixed at 1.20m height. Ergonomics are overrated anyway." 
            },
            { 
                t: "Use hammer (Free book)", 
                req: "hammer", 
                m: 5, f: 0, a: 10, c: 10, 
                r: "You smash off the panel. Sparks fly. The desk crashes down to knee height with a loud CRACK. The book is free, the desk is junk." 
            },
            { 
                t: "Attach sign 'Artwork'", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "You declare it an installation: 'The Pressure of Knowledge'. Chantal posts it on Instagram. The boss is confused, but says nothing." 
            }
        ]
    },
    {
        id: "sq_shredder_1",
        kind: "text",
        title: "Data Protection Extreme",
        text: "You want to destroy an old receipt. The new 'Smart-Shredder 4000' blocks the slot. The touchscreen says: 'Please select document category (1-99). Confirm GDPR compliance. Scanning for paper clips...'",
        opts: [
            { 
                t: "Honestly fill out the form", 
                next: "path_shred_form", 
                m: 15, f: -10, a: 10, c: 0, 
                r: "You tap through 20 submenus. 'Is the document radioactive?' - 'No'. 'Does it contain state secrets?' - 'No'. Finally, the slot opens. You throw in the receipt." 
            },
            { 
                t: "Violence: Just shove it in", 
                req: "hammer", 
                next: "path_shred_force", 
                m: 5, f: 0, a: -10, c: 10, 
                r: "You take the hammer handle and forcibly push the paper past the sensor flap. The machine howls, eats the paper, and makes a choking sound." 
            },
            { 
                t: "Check collection bin (Hack)", 
                loot: "usb_stick",
                next: "path_shred_loot", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Maybe the sensor is full? You open the bottom flap. In the paper waste lies a USB stick that someone probably accidentally 'shredded'. It still looks intact! (Item obtained!)" 
            }
        ]
    },
    {
        id: "sq_shredder_2a",
        kind: "text",
        title: "Paper Jam with Announcement",
        reqStory: "path_shred_form",
        text: "Hours later. An email to everyone: 'The shredder is defective. Someone tried to destroy thermal paper (receipt) in 'glossy brochure' mode. The sensor is glued shut.' Everyone is looking for the idiot.",
        opts: [
            { 
                t: "Yell: 'The machine is to blame!'", 
                m: 2, f: 0, a: 20, c: 0, 
                r: "You loudly defend yourself in the hallway. No one accused you, but now you look very suspicious." 
            },
            { 
                t: "Glue receipt to A4 sheet (Destroy evidence)", 
                req: "tape", 
                m: 10, f: -5, a: 5, c: 0, 
                r: "You secretly go and fiddle out the receipt. Then you glue it onto a normal sheet and throw it in the trash. Traces eliminated." 
            },
            { 
                t: "Eat receipt", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "The ultimate data destruction. Tastes like thermal paper and Bisphenol A. But it was quick and no one can prove it." 
            }
        ]
    },
    {
        id: "sq_shredder_2b",
        kind: "text",
        title: "Confetti Party",
        reqStory: "path_shred_force",
        text: "You walk past the copy room. The floor is covered in confetti. The machine didn't like the forced feeding and coughed its entire contents (50 liters) backwards into the room. Egon stands in disbelief.",
        opts: [
            { 
                t: "Run away", 
                m: 5, f: 5, a: 0, c: 10, 
                r: "You turn on your heel. 'Not my trash.' Egon will never find the culprit... hopefully." 
            },
            { 
                t: "Call the intern", 
                rep: { "Kevin": -10 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "'Kevin! Puzzle time!' The intern comes and sees the mess. You hand him a broom. 'Learn something for life.' Leaders delegate." 
            },
            { 
                t: "Get vacuum cleaner", 
                m: 30, f: -10, a: 10, c: 0, 
                r: "You feel sorry for Egon and vacuum everything up. In the process, you accidentally vacuum up the shredder's power cable. *POOF*. Now it's completely broken. Good." 
            }
        ]
    },
    {
        id: "sq_shredder_2c",
        kind: "text",
        title: "Data Protection Incident",
        reqStory: "path_shred_loot",
        text: "You plug the found USB stick into your PC. On it is a file: 'Passwords_All_Employees.xlsx'. Apparently, the HR department wanted to 'dispose of it securely', but threw in the stick instead of the paper.",
        opts: [
            { 
                t: "Keep stick", 
                m: 5, f: 5, a: -10, c: 20, 
                r: "You now have access to everything. Even the boss's Netflix account. You feel powerful (and criminal). You tuck the stick deep into your pocket." 
            },
            { 
                t: "Format immediately", 
                rem: "usb_stick", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "Too hot. You delete everything. Now you have an empty 64GB stick for yourself. Boring, but safe. (Item consumed/used)" 
            },
            { 
                t: "Give to Gabi: 'Yours?'", 
                rem: "usb_stick",
                rep: { "Gabi": 10 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "You bring it to Gabi. She blushes. 'Oh! Uh... thanks. I was... looking for that.' She gives you a chocolate as hush money. (Item removed)" 
            }
        ]
    },
    {
        id: "sq_meta_donation",
        kind: "text",
        title: "Inception on Steam",
        text: "You're procrastinating on Steam in a quiet moment, browsing new releases. Wait a minute... there's an indie game called 'Layer8Problem'. The SysAdmin in the screenshots looks an awful lot like you! And the feature list reads 1:1 like an excerpt from your daily madness. It feels disturbingly real, as if someone made a sitcom out of your suffering.",
        opts: [
            { 
                t: "Shut up and take my money! (Check on Steam)", 
                m: 2, f: 5, a: 0, c: 10, 
                r: "ZAP! Dr. Wichtig suddenly stands behind you. 'Müller! Am I paying you to play games?!' You frantically close the window, but you secretly remembered the store page.<br><br>(If you want to support the project: <a href='https://store.steampowered.com/app/4487580/' target='_blank' class='text-blue-400 underline hover:text-blue-300 transition-colors'>Here's the Steam version</a> with Cloud Saves and Achievements! I appreciate reviews!)."
            },
            { 
                t: "Ignore: 'I experience this every day, why would I play it?'", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "Absolutely understandable. Why spend money to be annoyed by digital colleagues when real colleagues do it for free? You close the tab, shaking your head."
            },
            { 
                t: "Criticize: 'The game is totally unrealistic anyway!'", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You write a cynical comment in the forum: 'No boss in the world would demand treadmills in the server room!' ...Then you turn around and see Dr. Wichtig standing in the hallway with a tape measure. Damn."
            }
        ]
    },
    {
        id: "sq_elster_cat_2a",
		char: "Frau Elster",
        kind: "text",
        title: "Gratitude in Accounting",
        reqStory: "path_elster_happy",
        text: "Ms. Elster clears her throat in front of your desk. She nervously looks around, opens her handbag, and places an expensive piece of pastry chef's cake on your desk. 'This is for your... unofficial IT service yesterday. Rüdiger is purring again. But woe betide you if anyone finds out!'",
        opts: [
            { 
                t: "Accept cake & keep quiet", 
                rep: { "Frau Elster": 10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "You eat the cake. It tastes of marzipan and bribery. Having a powerful ally in the office is worth gold." 
            },
            { 
                t: "Be cheeky: 'I only do it for Rüdiger.'", 
                rep: { "Frau Elster": 5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She raises an eyebrow. 'Don't be impertinent, Müller.' She leaves, but you can tell she respects you now." 
            }
        ]
    },
    {
        id: "sq_elster_cat_2b",
		char: "Frau Elster",
        kind: "text",
        title: "The Receipt",
        reqStory: "path_elster_angry",
        text: "Your last travel expense report lies on your desk. It's completely marked in red. Ms. Elster has crossed out every cent. 'Parking ticket without time', 'Meal allowance exceeded by 0.50€'. She took revenge for your 'no' during the cat emergency.",
        opts: [
            { 
                t: "Grudgingly refill", 
                rep: { "Frau Elster": 5 },
                m: 30, f: -15, a: 20, c: 0, 
                r: "You spend half an hour re-copying receipts and typing forms. Your aggression rises to immeasurable levels. You shouldn't anger cat owners." 
            },
            { 
                t: "Involve the boss", 
                rep: { "Frau Elster": -10, "Dr. Wichtig": -5 },
                m: 10, f: 0, a: 10, c: 15, 
                r: "The boss is annoyed. 'Settle your petty war yourselves, Müller!' Ms. Elster glares at you as she leaves. The war continues." 
            }
        ]
    },
    {
        id: "sq_elster_cat_2c",
		char: "Frau Elster",
        kind: "text",
        title: "The Food Coma Emergency",
        reqStory: "path_elster_fat",
        text: "Ms. Elster storms into the hallway, crying. 'RÜDIGER! He overate! He's just lying on his back, breathing heavily! The vet had to pump his stomach! Some sick hacker manipulated the smart feeder!'",
        opts: [
            { 
                t: "Guilty conscience: Anonymously donate vet costs", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: 15, c: 0, 
                r: "You secretly place 50 euros in an envelope on her desk. That eases your guilt a bit, but your blood pressure rises from stress. Poor Rüdiger." 
            },
            { 
                t: "Lie: 'That was definitely a software bug.'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "'This cheap China tech!', she sobs. You nod eagerly and quickly leave. You are a cold-blooded monster." 
            }
        ]
    },
    {
        id: "sq_shredder_puzzle_1",
		char: "Frau Elster",
        kind: "text",
        title: "The Puzzle of Death",
        text: "Ms. Elster kneels, crying, in front of the paper shredder. 'I accidentally shredded the original signed leasing agreement! If the boss sees this, I'm dead! We have to put it back together!' A mountain of confetti lies before her.",
        opts: [
            { 
                t: "Sit on the floor and puzzle", 
                next: "path_shredder_puzzle",
                rep: { "Frau Elster": 15 },
                m: 90, f: -20, a: 20, c: 0, 
                r: "You sort paper scraps for 90 endless minutes. In the end, the contract is reassembled. You've lost a massive amount of working time and are terribly angry. Ms. Elster takes the contract and runs off." 
            },
            { 
                t: "Roughly laminate with duct tape", 
                req: "tape",
                next: "path_shredder_tape",
                rep: { "Frau Elster": 10 },
                m: 15, f: 0, a: 0, c: 0, 
                r: "You rigorously slap thick duct tape over it and run the monstrosity through the copier. It looks terrible, but it's still legally valid. Ms. Elster thanks you frantically. You go back to work." 
            },
            { 
                t: "Put on headphones & walk away", 
                req: "headphones",
                next: "path_shredder_ignore",
                rep: { "Frau Elster": -15 },
                m: 2, f: 5, a: -10, c: 0, 
                r: "Click. Noise-canceling on. You look down sympathetically, nod silently at her, and go to your office. Not your fault, not your problem." 
            }
        ]
    },
    {
        id: "sq_shredder_puzzle_2a",
		char: "Frau Elster",
        kind: "text",
        title: "Eternal Gratitude",
        reqStory: "path_shredder_puzzle",
        text: "Later, Ms. Elster strolls over to your desk. The stress from earlier is completely gone. She places a golden box of chocolates and a signed blank expense report on your desk. 'You saved my life, Mr. Müller.'",
        opts: [
            { 
                t: "Accept grace", 
                loot: "chocolate",
                m: 5, f: 0, a: -20, c: -10, 
                r: "It was worth it. The boss radar drops because Ms. Elster now raves about you everywhere. And you have chocolate. (Inventory +1)" 
            },
            { 
                t: "Greedy: 'Do you have coffee too?'", 
                rep: { "Frau Elster": -5 },
                m: 2, f: 5, a: 5, c: 0, 
                r: "Her smile freezes. 'Give an inch...', she mutters and pulls back the expense report. At least she leaves the chocolate." 
            },
            { 
                t: "Nobly decline: 'It was an honor.'", 
                rep: { "Frau Elster": 15 },
                m: 5, f: 0, a: -10, c: -15, 
                r: "Ms. Elster is on the verge of tears. 'You are a true gentleman!' She takes the chocolate back, but from today on, you are her absolute favorite colleague. That's worth more than chocolates." 
            }
        ]
    },
    {
        id: "sq_shredder_puzzle_2b",
		char: "Frau Elster",
        kind: "text",
        title: "The Leasing Returnee",
        reqStory: "path_shredder_tape",
        text: "Hours after your tape operation, the boss calls you and Ms. Elster into his office. He holds up your copied tape version. 'The bank rejected it. They say it looks like a serial killer's ransom note. Who was this?!'",
        opts: [
            { 
                t: "Blame the bank", 
                rep: { "Frau Elster": 5 },
                m: 10, f: 0, a: 10, c: 10, 
                r: "'Their scanners are just outdated, Boss!' He sighs. 'Bureaucrats.' Ms. Elster breathes a sigh of relief. You've elegantly talked your way out of it." 
            },
            { 
                t: "Snitch on Ms. Elster", 
                rep: { "Frau Elster": -15, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "'She shredded it, Boss.' Ms. Elster bursts into tears. You are the ultimate traitor. She will take cruel revenge." 
            },
            { 
                t: "Suggest: 'We'll forge the signature again!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 10, f: 0, a: 10, c: 30, 
                r: "'Forgery?! Are you insane?!' The boss throws you out. That was a step too far." 
            }
        ]
    },
    {
        id: "sq_shredder_puzzle_2c",
		char: "Frau Elster",
        kind: "text",
        title: "The Cold Turkey",
        reqStory: "path_shredder_ignore",
        text: "You've almost forgotten the shredder drama from earlier. Since you didn't help Ms. Elster, she had to confess her mistake to the boss. Now, when you want to get a new notepad from storage, she slams the door in your face.",
        opts: [
            { 
                t: "Beg: 'I just need a pen.'", 
                m: 15, f: -5, a: 15, c: 0, 
                r: "'Closed!', she yells from inside. You have to argue for 15 minutes until she slides a pen under the door. Your arrogance from earlier has now cost you time." 
            },
            { 
                t: "Break in with screwdriver", 
                req: "screw",
                m: 5, f: 0, a: 20, c: 10, 
                r: "You simply unscrew the door lock. Ms. Elster screams: 'VANDALISM!' You grab a pen and leave. The war continues to escalate." 
            },
            { 
                t: "Send intern Kevin", 
                rep: { "Kevin": -5 },
                m: 10, f: 10, a: 0, c: 0, 
                r: "You send Kevin. Ms. Elster lets him in, but instead of pens, he only brings colorful highlighters. Better than nothing." 
            }
        ]
    },
    {
        id: "sq_fragile_drive_1",
        kind: "text",
        title: "Hazardous Material Transport",
        text: "You have to bring an irreplaceable, completely unpackaged hard drive with the company's blueprints to the 4th floor. The elevator is broken. The stairs are freshly mopped and extremely slippery. One wrong step and the company's existence shatters on the tiles.",
        opts: [
            { 
                t: "Use bubble wrap as airbag", 
                rem: "bubble_wrap", 
                next: "path_drive_wrap", 
                m: 10, f: 0, a: -10, c: -5, 
                r: "You thickly wrap the hard drive in your beloved bubble wrap. You actually slip on the stairs, but the wrap perfectly cushions the fall. Data saved, wrap gone." 
            },
            { 
                t: "Walk carefully as if on eggshells", 
                next: "path_drive_careful", 
                m: 30, f: -10, a: 20, c: 0, 
                r: "It takes you forever. Every stair step is a mental struggle. Your pulse races, but the drive arrives safely upstairs. You're completely exhausted." 
            },
            { 
                t: "No time! Run!", 
                next: "path_drive_run",
                m: 5, f: 5, a: 30, c: 10, 
                r: "You sprint off. You just barely catch yourself on the stairs and severely strain your back. The drive is intact, but today you walk like the Hunchback of Notre Dame." 
            }
        ]
    },
    {
        id: "sq_fragile_drive_2a",
        kind: "text",
        title: "Therapy for Others",
        reqStory: "path_drive_wrap",
        text: "You arrive upstairs and hand over the wrapped hard drive. The colleague unpacks it and immediately starts gleefully popping your old bubble wrap. 'Ohhh, thanks Müller! That's so relaxing!'",
        opts: [
            { 
                t: "Let her enjoy it", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "A good deed done. The popping echoes softly down the hallway." 
            },
            { 
                t: "Snatch wrap: 'That wasn't a gift!'", 
                loot: "bubble_wrap",
                m: 2, f: 0, a: 5, c: 0, 
                r: "You coldly snatch the plastic from her hands. 'That's IT property!' She looks at you as if you've just canceled Christmas, but you have your treasure back." 
            }
        ]
    },
    {
        id: "sq_fragile_drive_2b",
        kind: "text",
        title: "The Snail",
        reqStory: "path_drive_careful",
        text: "Because you were so extremely slow on the stairs, the project team on the 4th floor narrowly missed the deadline for the blueprints. The project manager stands snorting in front of you. 'Did you carry the hard drive or personally roll it up?!'",
        opts: [
            { 
                t: "Explain: 'Safety first!'", 
                m: 10, f: 0, a: 10, c: 5, 
                r: "You explain to him the physical effects of a head crash. He doesn't understand a word, but is too tired to argue further." 
            },
            { 
                t: "Blame the elevator", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "'Complain to Facility Management!' You pass the buck. Egon will wonder why he's suddenly getting angry emails." 
            }
        ]
    },
    {
        id: "sq_fragile_drive_2c",
        kind: "text",
        title: "The Sciatica",
        reqStory: "path_drive_run",
        text: "The consequence of your stair sprint: You're at the copier and suddenly your lower back completely locks up. You're stuck at a 90-degree angle. Chantal walks by and stares at you. 'Are you doing yoga?'",
        opts: [
            { 
                t: "Ask for help", 
                rep: { "Chantal": 5 },
                m: 15, f: 0, a: 10, c: 0, 
                r: "Chantal gets a hot water bottle and supports you to your chair. 'You poor thing.' Embarrassing, but you can sit upright again (sort of)." 
            },
            { 
                t: "Lie: 'I'm looking for a contact lens!'", 
                m: 5, f: 5, a: 15, c: 0, 
                r: "You crawl hunched back to your office. Chantal shrugs. You work the rest of the day lying under your desk." 
            }
        ]
    },
    {
        id: "sq_investor_wifi_1",
        kind: "text",
        title: "The VIP Tantrum",
        text: "In the hallway stands an important, enraged investor in a tailored suit. He's yelling into his phone. 'This stupid VIP Wi-Fi isn't working! If I can't load my stock prices in two minutes, I'm pulling my millions!' He sees you. 'YOU! TURN ON THE INTERNET!'",
        opts: [
            { 
                t: "Give him the guest Wi-Fi note", 
                rem: "wifi_note", 
                next: "path_investor_note", 
                rep: { "Dr. Wichtig": 15 },
                m: 2, f: 5, a: -10, c: -20, 
                r: "You wordlessly press the crumpled, yellow note into his hand. He logs in, takes a deep breath, and nods gratefully at you. Company saved." 
            },
            { 
                t: "Manually restart VIP router", 
                next: "path_investor_reboot", 
                m: 15, f: -10, a: 20, c: 5, 
                r: "You sprint to the distribution box and reboot the router. By the time you get back, the investor has already chewed out the boss. That's going to cause trouble." 
            },
            { 
                t: "Hide behind the coffee machine", 
                next: "path_investor_hide", 
                m: 10, f: 5, a: 0, c: 15, 
                r: "Investors are the boss's problem. You hide until the shouting in the hallway subsides and the man leaves angrily." 
            }
        ]
    },
    {
        id: "sq_investor_wifi_2a",
        kind: "text",
        title: "Richly Rewarded",
        reqStory: "path_investor_note",
        text: "The investor has finished his meeting. He claps you on the shoulder as he passes. 'Quick and unbureaucratic solution earlier with the note. I like that.' He presses something into your hand and leaves.",
        opts: [
            { 
                t: "Look at your hand", 
                m: 5, f: 10, a: -25, c: -10, 
                r: "It's a 50-euro bill! Just like that. Tip in IT? A historic moment. Your mood is at an absolute peak." 
            }
        ]
    },
    {
        id: "sq_investor_wifi_2b",
		char: "Dr. Wichtig",
        kind: "text",
        title: "The Reboot Backlash",
        reqStory: "path_investor_reboot",
        text: "The boss storms into your office. 'Müller! Why did you restart the VIP router?! The investor had an active connection to his bank in Singapore! The order was canceled!'",
        opts: [
            { 
                t: "Explain: 'He yelled at me!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 10, f: 0, a: 10, c: 20, 
                r: "'He's an investor! He's ALLOWED to yell!' The boss is beside himself. You won't be touching the VIP Wi-Fi again anytime soon." 
            },
            { 
                t: "Lie: 'Automatic firmware update.'", 
                m: 5, f: 0, a: 0, c: 10, 
                r: "You blame the manufacturer. The boss curses Cisco. He leaves you alone, but trust in technology declines." 
            }
        ]
    },
    {
        id: "sq_investor_wifi_2c",
        kind: "text",
        title: "The Hiding Game is Over",
        reqStory: "path_investor_hide",
        text: "You're still crouching behind the coffee machine. Suddenly, the investor looks over the counter directly at you. 'What are you doing down there? Are you looking for the Wi-Fi?'",
        opts: [
            { 
                t: "Pretend to clean", 
                m: 10, f: -5, a: 15, c: 5, 
                r: "'Yes, it's very dirty down here!' You rub the floor with your sleeve. The investor shakes his head. 'A madhouse.' He leaves the building." 
            },
            { 
                t: "Offensive: 'I'm meditating.'", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "'Innovative corporate culture,' the investor mutters, visibly confused. Embarrassing, but he's forgotten about the Wi-Fi." 
            }
        ]
    },
    {
        id: "sq_sleeping_guard_1",
        kind: "text",
        title: "Deep Sleep at Reception",
        text: "You want to go through the back entrance, but the security guard is snoring deeply. His head rests on a crossword puzzle. Outside, a stressed express delivery driver hammers against the window, urgently wanting to deliver an important server spare part.",
        opts: [
            { 
                t: "Hold energy drink under his nose", 
                rem: "energy", 
                next: "path_guard_energy", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "HISS. You open the can right by his ear. He jolts awake, reflexively grabs the can, chugs it, and wide awake opens the door for the delivery man. Perfect." 
            },
            { 
                t: "Open door yourself & accept package", 
                next: "path_guard_package", 
                m: 15, f: -5, a: 5, c: 10, 
                r: "You open the door yourself and sign the form with 'Mickey Mouse'. You carry the heavy item in yourself. The guard sleeps peacefully on." 
            },
            { 
                t: "Yell at him: 'ALARM!'", 
                next: "path_guard_scream", 
                m: 5, f: 0, a: 15, c: -5, 
                r: "He falls off his chair in fright and knocks over his coffee. He hates you now, but curses and opens the door." 
            }
        ]
    },
    {
        id: "sq_sleeping_guard_2a",
        kind: "text",
        title: "The Hyperactive Guard",
        reqStory: "path_guard_energy",
        text: "The taurine from your energy drink is in full effect. The guard is now patrolling the hallways with wide eyes and a pulse of 150. He has already cornered two harmless interns and demanded their IDs.",
        opts: [
            { 
                t: "Nod approvingly: 'Safety first.'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "The hallway is extremely safe today. You feel well-guarded, even if the interns are crying." 
            },
            { 
                t: "Advise him to calm down", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "'I AM CALM!' he yells back. Okay, understood. Better not make eye contact again." 
            }
        ]
    },
    {
        id: "sq_sleeping_guard_2b",
        kind: "text",
        title: "Forgery of Documents",
        reqStory: "path_guard_package",
        text: "An email from HR: 'An important package was signed for this morning by 'Mickey Mouse'. Who was this? The package contained not hardware, but the new company smartphones. We are initiating legal action!'",
        opts: [
            { 
                t: "Blame the guard", 
                m: 10, f: 0, a: 10, c: -10, 
                r: "You anonymously report that the guard was sleeping on duty. He gets fired, you don't keep the phones, but you're safe. Terrible karma." 
            },
            { 
                t: "Confess: 'I just wanted to help!'", 
                rep: { "Dr. Wichtig": 5 },
                m: 20, f: -5, a: 5, c: 10, 
                r: "You clear up the misunderstanding. HR grumbles about the wrong signature, but the boss is happy that the expensive devices are there." 
            }
        ]
    },
    {
        id: "sq_sleeping_guard_2c",
        kind: "text",
        title: "The Harassment",
        reqStory: "path_guard_scream",
        text: "You want to re-enter the building after your break. The guard from earlier stands at the door. He recognizes you. 'Stop. ID check. And bag check. I need to check the laptop's serial number.'",
        opts: [
            { 
                t: "Throw a fit: 'I've worked here for 5 years!'", 
                m: 10, f: 0, a: 20, c: 5, 
                r: "'Rules are rules,' he grins. He makes you wait in the cold for 10 minutes before opening the barrier. Revenge is sweet." 
            },
            { 
                t: "Comply (De-escalation)", 
                m: 15, f: 0, a: 10, c: 0, 
                r: "You take a deep breath and unpack everything. He takes extra long. You're massively late for a server restart." 
            }
        ]
    },
    {
        id: "sq_boss_fight_hallway_1",
		char: "Markus",
        kind: "text",
        title: "Clash of the Titans",
        text: "Sales Manager Markus and Björn from Marketing stand face to face in the hallway, yelling at each other. It's about the last free meeting room. Spit flies, faces are crimson. No one dares to pass them.",
        opts: [
            { 
                t: "Use the stress ball", 
                req: "stressball", 
                next: "path_hallway_ball", 
                rep: { "Markus": 5 },
                m: 5, f: 5, a: -20, c: -5, 
                r: "You silently step between them. You first press the ball into Markus's hand – he reflexively squeezes. Then you give it to Björn. *Squeak*. You wordlessly take the ball back and walk on. Both department heads stare after you completely confused. Situation defused." 
            },
            { 
                t: "Reasonably intervene", 
                next: "path_hallway_peace", 
                m: 10, f: 0, a: 25, c: 5, 
                r: "You try to mediate. Both turn to you in unison and yell: 'STAY OUT OF IT, IT!' You retreat to your office almost traumatized." 
            },
            { 
                t: "Take detour via stairwell", 
                next: "path_hallway_detour", 
                m: 15, f: 10, a: 0, c: 0, 
                r: "You absolutely don't feel like this drama. You take the long way through the basement. Takes longer, but saves your nerves." 
            }
        ]
    },
    {
        id: "sq_boss_fight_hallway_2a",
		char: "Markus",
        kind: "text",
        title: "The Guru",
        reqStory: "path_hallway_ball",
        text: "You see Markus and Björn later, peacefully standing together with a coffee. As you pass, Markus whispers to Björn: 'Tell me... what was that earlier with Müller and the red ball?' - 'No idea. But my pulse immediately dropped to 60 afterwards. The man has an aura.'",
        opts: [
            { 
                t: "Nod mysteriously", 
                m: 2, f: 5, a: -10, c: -5, 
                r: "You nod knowingly at them, say nothing, and walk on. You're now a legend in the office grapevine." 
            }
        ]
    },
    {
        id: "sq_boss_fight_hallway_2b",
		char: "Markus",
        kind: "text",
        title: "United Enemies",
        reqStory: "path_hallway_peace",
        text: "Your attempt at mediation has a bizarre effect: Markus and Björn have united over their shared hatred of IT. Both are now blocking your bug reports. 'IT has no priority,' Markus laughs to Björn in the hallway.",
        opts: [
            { 
                t: "Revenge: Kick both off VPN", 
                rep: { "Markus": -10 },
                m: 10, f: -5, a: 15, c: 10, 
                r: "You kill their VPN certificates. Let them badmouth offline. Your aggression briefly drops, but angry emails will follow soon." 
            },
            { 
                t: "Sigh and ignore", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You have no energy for turf wars. You let them talk and just keep working." 
            }
        ]
    },
    {
        id: "sq_boss_fight_hallway_2c",
        kind: "text",
        title: "The Basement Find",
        reqStory: "path_hallway_detour",
        text: "Because you took the detour through the old basement, you discover a dusty box in the boiler room. Inside is completely unused, old IT tools that someone forgot years ago.",
        opts: [
            { 
                t: "Pocket screwdriver", 
                loot: "screw", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "A first-class Phillips head. The universe rewards the path of least resistance. (Inventory +1)" 
            },
            { 
                t: "Take cable ties", 
                loot: "zip_ties", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "Half a pack of black cable ties. Always useful. (Inventory +1)" 
            }
        ]
    },
    {
        id: "sq_printer_jam_1",
        kind: "text",
        title: "Printer on Strike",
        text: "The large department printer beeps hysterically: 'Paper jam in Tray 3'. An angry crowd of employees stands in front of it. No one dares to open the flap.",
        opts: [
            { 
                t: "Bravely open flap and reach in", 
                next: "path_printer_fix", 
                m: 15, f: 0, a: 5, c: 0, 
                r: "You pull at torn paper scraps deep inside. Your hands are covered in toner, but the machine prints again." 
            },
            { 
                t: "Threaten with manual", 
                req: "manual", 
                next: "path_printer_manual", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You open the thick book and read aloud: 'Repairs only by certified personnel!' The crowd respectfully backs away." 
            },
            { 
                t: "Lie: 'It's a hardware defect!'", 
                next: "path_printer_lie", 
                m: 2, f: 5, a: 0, c: 5, 
                r: "You professionally hang a 'Defective' sign. Problem delegated. No one prints today." 
            }
        ]
    },
    {
        id: "sq_printer_jam_2a",
		char: "Dr. Wichtig",
        kind: "text",
        title: "Black Hands",
        reqStory: "path_printer_fix",
        text: "Your hands are completely black with toner. On your way to the bathroom, you encounter the CEO. He wants to shake your hand cheerfully to congratulate you on the company anniversary.",
        opts: [
            { 
                t: "Coldly give him your dirty hand", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 10, c: 15, 
                r: "You shake his hand. He stares in horror at his ruined fingers. You have just buried a promotion." 
            },
            { 
                t: "Embarrassedly decline", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You raise your hands defensively. He nods understandingly. 'Ah, IT on the front lines. Carry on!'" 
            }
        ]
    },
    {
        id: "sq_printer_jam_2b",
        kind: "text",
        title: "The Expensive Bill",
        reqStory: "path_printer_manual",
        text: "An eager colleague actually called external support because of your 'certified personnel' statement. The technician stands there, pulls a sheet of paper from the printer, and presents a bill for 250 euros.",
        opts: [
            { 
                t: "Blame the users", 
                m: 10, f: 0, a: 5, c: 15, 
                r: "You explain to accounting that the users panicked. Ms. Elster rages, but you're off the hook." 
            },
            { 
                t: "Offer the technician coffee", 
                m: 15, f: 0, a: -5, c: 10, 
                r: "You bond with the external IT guy. You laugh about the incompetence of the staff. Good for the soul, bad for the budget." 
            }
        ]
    },
    {
        id: "sq_printer_jam_2c",
        kind: "text",
        title: "The Alternative",
        reqStory: "path_printer_lie",
        text: "Since the department printer is 'broken', five colleagues are now suddenly standing in your office, wanting you to print their extremely important documents on your small local printer.",
        opts: [
            { 
                t: "Report your printer broken too", 
                m: 5, f: 10, a: -5, c: 5, 
                r: "You simply pull the USB cable and shrug. Colleagues leave disappointed." 
            },
            { 
                t: "Sigh and work as a copy shop", 
                m: 30, f: -5, a: 20, c: 0, 
                r: "You spend half an hour printing contracts for other people. Your toner cartridge weeps." 
            }
        ]
    },
    {
        id: "sq_crying_intern_1",
        kind: "text",
        title: "Tears in the Hallway",
        text: "You find the new intern crying on the stairs. 'I accidentally deleted the presentation for the CEO and emptied the recycle bin. I'm going to be fired!'",
        opts: [
            { 
                t: "Donate chocolate for comfort", 
                rem: "chocolate", 
                next: "path_intern_choc", 
                rep: { "Kevin": 15 },
                m: 10, f: 0, a: -10, c: 0, 
                r: "You press the chocolate into his hand. Chewing immediately calms him down and he stops crying. (Item consumed)" 
            },
            { 
                t: "Dig deep into the bag of tricks (Recovery)", 
                next: "path_intern_recover", 
                m: 30, f: -5, a: 15, c: -5, 
                r: "You sit at his desk, dig deep into the file system, and recover the file. You feel like a hacker from a Hollywood movie." 
            },
            { 
                t: "Coldly tell him it's over", 
                next: "path_intern_doom", 
                m: 5, f: 5, a: 10, c: 5, 
                r: "Learning through pain. You pat him on the shoulder and say: 'Start packing your coffee mug.'" 
            }
        ]
    },
    {
        id: "sq_crying_intern_2a",
        kind: "text",
        title: "The Chocolate Cure",
        reqStory: "path_intern_choc",
        text: "The intern stands before you again. 'The chocolate was great, thanks! But the file is still gone. What do I do now?'",
        opts: [
            { 
                t: "Tell him to redo it", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "Stupidity punishes itself. He sits sobbing at PowerPoint and starts over." 
            },
            { 
                t: "Have mercy and help anyway", 
                m: 20, f: -5, a: 10, c: -10, 
                r: "You restore the file from a backup. Your kindness costs you a lot of time." 
            }
        ]
    },
    {
        id: "sq_crying_intern_2b",
        kind: "text",
        title: "The Truth About the File",
        reqStory: "path_intern_recover",
        text: "You saved the presentation, but upon opening it, you realize it wasn't a CEO presentation at all. It's a collection of cat memes for 'Fun Friday'.",
        opts: [
            { 
                t: "Give him a massive lecture", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You yell at him for wasting half an hour on jokes. He'll avoid you in the future." 
            },
            { 
                t: "Add your own meme", 
                m: 10, f: 10, a: -5, c: 5, 
                r: "You quickly create an image of a crying intern. IT humor is dark." 
            }
        ]
    },
    {
        id: "sq_crying_intern_2c",
        kind: "text",
        title: "The Termination",
        reqStory: "path_intern_doom",
        text: "The intern, panicked by you, actually packed his things and left. HR calls: 'Müller! What did you say to the poor boy?! We have to re-advertise now!'",
        opts: [
            { 
                t: "Defend: 'He deleted company data!'", 
                m: 5, f: 0, a: 10, c: 10, 
                r: "You portray him as an incompetent risk. HR grumbles, but can't fault you professionally." 
            },
            { 
                t: "Play dumb: 'He was probably overwhelmed.'", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "You blame the general pressure. The company wonders if the onboarding is too tough." 
            }
        ]
    },
    {
        id: "sq_wrong_delivery_1",
        kind: "text",
        title: "Wrong Delivery",
        text: "A Lieferando delivery driver hastily shoves a brown paper bag into your hand as he passes. 'Pastrami sandwich for... uh, the third floor! Have a nice day!' He disappears outside.",
        opts: [
            { 
                t: "Keep it yourself", 
                loot: "sandwich", 
                next: "path_delivery_keep", 
                m: 2, f: -5, a: -5, c: 5, 
                r: "You take the food. Free lunch at company expense! (Inventory +1)" 
            },
            { 
                t: "Search for owner on third floor", 
                loot: "sandwich", 
                next: "path_delivery_search", 
                m: 15, f: -5, a: 10, c: 0, 
                r: "You good-naturedly walk through all the offices, but no one ordered a sandwich. You feel like a mailman." 
            },
            { 
                t: "Leave bag at reception", 
                next: "path_delivery_leave", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Not your sandwich, not your problem. You place it on the counter and leave." 
            }
        ]
    },
    {
        id: "sq_wrong_delivery_2a",
		char: "Frau Elster",
        kind: "text",
        title: "The Hungry Magpie",
        reqStory: "path_delivery_keep",
        text: "Ms. Elster calls. 'Mr. Müller, did you happen to see the courier downstairs? My pastrami sandwich, ordered at company expense, has disappeared!'",
        opts: [
            { 
                t: "Lie: 'No, didn't see anyone.'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You brush a crumb from your mouth. She'll hate the delivery service, but you're full and safe." 
            },
            { 
                t: "Grudgingly bring up the sandwich", 
                rem: "sandwich", 
                rep: { "Frau Elster": 10 },
                m: 10, f: -5, a: 15, c: 0, 
                r: "You sacrifice your loot. She's overjoyed, but you're now massively hungry and angry." 
            }
        ]
    },
    {
        id: "sq_wrong_delivery_2b",
        kind: "text",
        title: "The Cold Truth",
        reqStory: "path_delivery_search",
        text: "After 15 minutes of pointless searching throughout the third floor, you still have the sandwich. It's getting cold and the grease is seeping through the bag.",
        opts: [
            { 
                t: "Annoyed, eat it yourself now", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "It tastes fantastic, even if it's lukewarm. Your aggression drops." 
            },
            { 
                t: "Throw it in the trash", 
                m: 2, f: 0, a: 10, c: 0, 
                r: "On principle, you don't eat other people's food. You throw 15 euros in the trash." 
            }
        ]
    },
    {
        id: "sq_wrong_delivery_2c",
        kind: "text",
        title: "The Smell of Decay",
        reqStory: "path_delivery_leave",
        text: "The bag stood in the sun on the counter for hours. Now the entire entrance area smells unpleasantly of old pastrami.",
        opts: [
            { 
                t: "Call Egon to clean it up", 
                rep: { "Egon": -5 },
                m: 10, f: 5, a: 5, c: 0, 
                r: "Egon curses for minutes about the 'swine' in this company. You hypocritically agree with him." 
            },
            { 
                t: "Quickly go through the back entrance", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You completely avoid the lobby. What you don't see doesn't exist." 
            }
        ]
    },
    {
        id: "sq_drafty_door_1",
        kind: "text",
        title: "The Icy Wind",
        text: "The automatic sliding door to the courtyard is broken and permanently open. An icy wind blows through the hallway. Colleagues sit at their desks with scarves and hats.",
        opts: [
            { 
                t: "Fix doors with cable ties", 
                req: "zip_ties", 
                next: "path_door_zip", 
                m: 10, f: 0, a: -5, c: 0, 
                r: "You strap the glass panes tightly together. No more draft, but no one can get into the courtyard anymore." 
            },
            { 
                t: "Tape over sensor with duct tape", 
                req: "tape", 
                next: "path_door_tape", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "A strip of tape over the motion sensor. The door closes immediately. Blissfully warm." 
            },
            { 
                t: "Call Egon and wait", 
                next: "path_door_egon", 
                m: 15, f: -5, a: 15, c: 5, 
                r: "Egon arrives after 15 minutes, curses the technology, and kicks the door. It stays open." 
            }
        ]
    },
    {
        id: "sq_drafty_door_2a",
        kind: "text",
        title: "The Angry Smoker",
        reqStory: "path_door_zip",
        text: "A manager wanted to go to the courtyard for a smoke. He forcibly pushed against your fixed cable ties, and now the sliding door's guide rail is completely bent.",
        opts: [
            { 
                t: "Hold him responsible for the damage", 
                m: 10, f: 0, a: 5, c: -5, 
                r: "You take photos and report him. He's angry, but the boss praises your eye for property protection." 
            },
            { 
                t: "Quickly cut the cable ties", 
                m: 5, f: 5, a: 10, c: 0, 
                r: "You remove the evidence. The door is now broken AND open." 
            }
        ]
    },
    {
        id: "sq_drafty_door_2b",
        kind: "text",
        title: "Trapped in the Courtyard",
        reqStory: "path_door_tape",
        text: "Your tape trick was too good. The door won't open from the outside anymore. Three smokers stand shivering in the courtyard, frantically hammering against the glass because they can't get back in.",
        opts: [
            { 
                t: "Laugh at them and wave", 
                m: 5, f: 5, a: -10, c: 10, 
                r: "A glorious moment. Smoking is bad for your health, after all." 
            },
            { 
                t: "Show mercy and peel off the tape", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You rip off the tape. They rush in, shivering, and thank you." 
            }
        ]
    },
    {
        id: "sq_drafty_door_2c",
        kind: "text",
        title: "The Space Heater",
        reqStory: "path_door_egon",
        text: "Egon gave up on the door. Instead, he placed a gigantic, loud, red construction site space heater in the hallway. It draws so much power that the ceiling lights flicker.",
        opts: [
            { 
                t: "Secretly unplug the heater", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "The server circuit is more important to you than warm feet in the hallway." 
            },
            { 
                t: "Warm your hands on it", 
                m: 10, f: 10, a: -5, c: 5, 
                r: "You spend 10 minutes at the warm source. Wonderful." 
            }
        ]
    },
    {
        id: "sq_elearning_1",
        kind: "text",
        title: "E-Learning of Death",
        text: "Sabine from HR sends a system lock. 'The annual compliance training 'Synergistic Sitting' is overdue!' An unskippable video module starts on your main monitor. It lasts exactly 90 minutes and checks every 5 minutes with a click if you're still awake.",
        opts: [
            { 
                t: "Honestly sit through the 90 minutes", 
                next: "path_elearn_honest", 
                m: 90, f: -15, a: 30, c: -10, 
                r: "You stare for 90 minutes at a man in a turtleneck talking about lumbar vertebrae. Every 5 minutes you click 'I'm still here'. Your aggression simmers, but HR is happy." 
            },
            { 
                t: "Forge certificate with root password", 
                req: "admin_pw", 
                next: "path_elearn_hack", 
                m: 5, f: 15, a: -5, c: 20, 
                r: "You log into the backend and set the value next to your name to 'Passed'. Takes 5 minutes. If this is discovered during an audit, you're screwed." 
            },
            { 
                t: "Use mouse jiggler & sleep", 
                next: "path_elearn_sleep", 
                m: 90, f: 30, a: -10, c: 10, 
                r: "You clamp your watch to the mouse, put your feet on the table, and nap. The 90 minutes pass like a dream. You feel wonderfully relaxed." 
            }
        ]
    },
    {
        id: "sq_elearning_2a",
		char: "Dr. Wichtig",
        kind: "text",
        title: "Ergonomics Expert",
        reqStory: "path_elearn_honest",
        text: "The boss comes into your office. 'Müller, HR reports that you achieved 100% on the video's reflex tests. You must be a master of ergonomic sitting!'",
        opts: [
            { 
                t: "Straighten back & nod", 
				rep: { "Dr. Wichtig": 5 },
                m: 2, f: 0, a: -10, c: -5, 
                r: "You assume a posture. The boss nods approvingly. The pain of the 90 minutes was at least good for your image." 
            },
            { 
                t: "Sarcasm: 'I sold my soul for it.'", 
                m: 5, f: -5, a: 10, c: 5, 
                r: "He waves it off. 'Health comes first, Müller.' You roll your eyes." 
            }
        ]
    },
    {
        id: "sq_elearning_2b",
        kind: "text",
        title: "The Audit",
        reqStory: "path_elearn_hack",
        text: "Sabine (HR) calls. 'Mr. Müller? Our system shows that you completed the 90-minute video in exactly 14 seconds. Did you hack the software?'",
        opts: [
            { 
                t: "Tech excuse: 'Cache synchronization!'", 
                m: 10, f: 0, a: 10, c: -10, 
                r: "You babble something about 'asynchronous timestamps in the server'. Sabine understands nothing and gives up. 'IT and its errors...', she sighs. Phew." 
            },
            { 
                t: "Distract: 'Your system is outdated!'", 
                m: 5, f: 0, a: 5, c: 15, 
                r: "You sharply criticize the HR software. She's offended and passes it on to the boss. The radar rises." 
            }
        ]
    },
    {
        id: "sq_elearning_2c",
		char: "Markus",
        kind: "text",
        title: "The Snorer",
        reqStory: "path_elearn_sleep",
        text: "You thought you had gone unnoticed. Markus from Sales leans grinning in the doorway. 'Had a nice sleep, Sleeping Beauty? I heard you snoring as I passed. What's my silence worth?'",
        opts: [
            { 
                t: "Give him an old donut", 
                req: "donut",
                rem: "donut",
                rep: { "Markus": 5 },
                m: 5, f: 5, a: -5, c: -5, 
                r: "Markus takes the donut. 'Bribery? Accepted.' He bites into it and leaves. (Item removed)" 
            },
            { 
                t: "Counterattack: 'I'll delete your leads.'", 
                rep: { "Markus": -10 },
                m: 5, f: -5, a: 15, c: 10, 
                r: "You threaten back. Markus raises his hands. 'Woah, calm down, tiger. Just a joke.' He leaves, but the relationship is poisoned." 
            }
        ]
    },
    {
        id: "sq_workout_1",
        kind: "text",
        title: "Exorcism in the Office",
        text: "You're on an errand on the 3rd floor. As you look into the Marketing office, your blood freezes. Half the department is lying on the floor, twitching wildly, rolling their eyes, and groaning loudly. It looks like a massive medical emergency or a collective demonic summoning!",
        opts: [
            { 
                t: "Panic: Call emergency services!", 
                next: "path_workout_panic", 
                m: 15, f: 0, a: 25, c: 5, 
                r: "You yell 'MEDIC!' and dial 911. Suddenly, Chantal sits up annoyed. 'Are you crazy?! That's 'Agile Floor Pilates'! You're ruining our flow!' Embarrassing." 
            },
            { 
                t: "Fascinated, lie down with them", 
                next: "path_workout_join", 
                m: 90, f: 35, a: -15, c: 10, 
                r: "You just lie down with them. For 90 minutes, you twitch and stretch unproductively on the carpet. It's bizarre, time flies by, but your back cracks liberatingly." 
            },
            { 
                t: "Eat chocolate & watch", 
                rem: "chocolate",
                next: "path_workout_watch", 
                m: 30, f: 15, a: -10, c: 0, 
                r: "You lean against the doorframe, bite into your chocolate, and watch the absurd spectacle for 30 minutes like a documentary. (Item consumed)" 
            }
        ]
    },
    {
        id: "sq_dance_2a",
        kind: "text",
        title: "The Escape Dancer",
        reqStory: "path_dance_flee",
        text: "You walk hunched and ashamed through the hallway. A colleague from sales points at you and laughs so hard he can't breathe. 'There he is! The escape dancer! The GIF of your panic face after the moonwalk already has 10,000 views on LinkedIn!'",
        opts: [
            { 
                t: "Laugh along (Self-deprecating humor)", 
                m: 15, f: 5, a: -15, c: 0, 
                r: "You put on a brave face and laugh along. That takes the sting out of the joke. People respect that you can laugh at yourself." 
            },
            { 
                t: "Glare angrily and walk away", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You give him the middle finger and leave. People are now laughing behind your back. You're boiling with rage." 
            }
        ]
    },
    {
        id: "sq_dance_2b",
		char: "Chantal",
        kind: "text",
        title: "The New Star",
        reqStory: "path_dance_finish",
        text: "Chantal from Marketing almost jumps into your arms in the hallway. 'Müller! Your dance! Investors love our young, dynamic culture. The clip is going completely viral! The boss said you should do PR work!'",
        opts: [
            { 
                t: "Time sink: Autographs and PR appointments", 
                rep: { "Chantal": 20, "Dr. Wichtig": 15 },
                m: 60, f: 20, a: -15, c: -10, 
                r: "You become the mascot. You spend a solid hour waving at cameras and taking selfies. A huge waste of time, but your ego and the boss love it." 
            },
            { 
                t: "Decline fame: 'Leave me alone.'", 
                rep: { "Chantal": -10, "Dr. Wichtig": -5 },
                m: 5, f: -5, a: 10, c: 5, 
                r: "You push Chantal away and flee back to real work. You've thrown away an epic career boost." 
            }
        ]
    },
    {
        id: "sq_awkward_2a",
		char: "Chantal",
        kind: "text",
        title: "The Hot Rumor",
        reqStory: "path_awkward_elster",
        text: "Chantal whispers loudly at the water cooler as you pass: '...and then Ms. Elster caught them both in the server room! On the floor! Poor Kevin, that's abuse of power!' She sees you and falls silent in shock.",
        opts: [
            { 
                t: "Intervene: 'He was stuck!'", 
                rep: { "Chantal": -5 },
                m: 10, f: 0, a: 15, c: 5, 
                r: "You try to explain. Chantal slowly nods. 'Sure... 'stuck'. Very creative, Müller.' No one believes you. Your reputation is damaged." 
            },
            { 
                t: "Run away (Flight reflex)", 
                m: 5, f: 5, a: 10, c: 15, 
                r: "You turn around and flee. Of course, that looks like an admission of guilt. The rumor mill is really exploding now." 
            }
        ]
    },
    {
        id: "sq_awkward_2b",
		char: "Kevin",
        kind: "text",
        title: "The Blackmailer",
        reqStory: "path_awkward_photo",
        text: "You're in the lobby. Kevin intercepts you. He seems unusually confident. 'That photo... delete it. Otherwise, I'll tell the boss you forced me to clean your keyboard with a toothbrush yesterday.'",
        opts: [
            { 
                t: "Delete photo (Capitulate)", 
                rep: { "Kevin": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You press 'Delete'. Kevin nods coolly. 'Good choice, Boomer.' The intern just dominated you." 
            },
            { 
                t: "Laugh: 'Go ahead!'", 
                rep: { "Kevin": -15, "Dr. Wichtig": -5 },
                m: 10, f: 0, a: -5, c: 20, 
                r: "'Try it, kid!' Kevin actually runs to the boss. You get to keep the photo, but you'll get in trouble later for 'abuse of power'." 
            }
        ]
    },
        {
        id: "sq_fire_ext_1",
        kind: "text",
        title: "Crime Scene Office 312",
        text: "On your rounds, you enter Office 312. The room is empty, but there's a pungent smell of melted plastic and burnt cheese. In the middle of the room, a fire extinguisher stands abandoned. On the desk, a completely destroyed, illegal sandwich toaster smokes away. The culprit apparently panicked, extinguished the fire, and fled.",
        opts: [
            { 
                t: "Discreetly pocket the fire extinguisher", 
                loot: "fire_ext", 
                next: "path_sq_ext_loot", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "You never know when you might need the thing. You subtly make the red cylinder disappear into your backpack. Better get out of here quickly before someone spots you." 
            },
            { 
                t: "Continue blasting the toaster with powder", 
                next: "path_sq_ext_spray", 
                m: 15, f: 10, a: -15, c: 5, 
                r: "Better safe than sorry! You unpin the lever and envelop the toaster (and half the desk) in a thick, white snowscape of CO2 powder. That felt extremely good!" 
            },
            { 
                t: "Properly hang it back on the hook", 
                next: "path_sq_ext_order", 
                m: 10, f: -10, a: 5, c: -10, 
                r: "Order must be maintained! You carry the heavy device to the hallway and hang it neatly back on the red bracket. You are the unsung hero of occupational safety." 
            }
        ]
    },
    {
        id: "sq_fire_ext_2a",
        kind: "text",
        char: "Kevin",
        title: "The Arsonist",
        reqStory: "path_sq_ext_loot",
        text: "Kevin frantically rushes towards you. 'Boss! Have you seen the fire extinguisher from Office 312?! I secretly made myself a cheese toast there and it caught fire. I was just about to hang it back so Janitor Egon wouldn't notice, but it's gone!'",
        opts: [
            { 
                t: "IT paranoia: 'The new extinguishers have GPS trackers.'", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "Kevin's eyes widen. 'GPS?! Oh God, HR knows exactly that it was last with me!' He immediately forgets the search and sprints off to come up with a watertight alibi for the time of the incident. You grin to yourself." 
            },
            { 
                t: "Lie: 'Egon already took it.'", 
                rep: { "Kevin": 5 },
                m: 5, f: 5, a: 0, c: 10, 
                r: "Kevin turns pale. 'Oh my God. I'm dead. Egon will wall me up in the boiler room!' He runs away crying. You have your peace and your new tool is safe." 
            }
        ]
    },
    {
        id: "sq_fire_ext_2b",
        kind: "text",
        char: "Egon",
        title: "Winter in Office 312",
        reqStory: "path_sq_ext_spray",
        text: "Janitor Egon rages in the hallway. He discovered Office 312. 'WHO THE HELL SPRAYED 10 KILOS OF EXTINGUISHING POWDER HERE?! The toaster was already off! The whole carpet is ruined! I'm calling security, we're reviewing the cameras!'",
        opts: [
            { 
                t: "Panic: Secretly delete camera footage", 
                req: "admin_pw",
                m: 15, f: -5, a: 10, c: -20, 
                r: "You quickly log into the system with your root privileges and delete the video files from this morning. Egon finds nothing. You narrowly survived a heart attack." 
            },
            { 
                t: "Join in: 'Unbelievable, these vandals!'", 
                rep: { "Egon": 5 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "You stand next to him and theatrically shake your head. 'Egon, you have my deepest sympathy. Truly antisocial.' Egon grunts in agreement. Camouflage is everything." 
            }
        ]
    },
    {
        id: "sq_fire_ext_2c",
        kind: "text",
        title: "The Broken Seal",
        reqStory: "path_sq_ext_order",
        text: "The fire safety officer stands in front of the fire extinguisher you so exemplarily hung back. He notes something on his clipboard. 'Mr. Müller! Good that the device is in place. BUT: The protective seal is broken and it's half empty! Didn't you check that?!'",
        opts: [
            { 
                t: "Excuse: 'I'm not the janitor!'", 
                m: 10, f: 0, a: 10, c: -5, 
                r: "You argue that you only handled the physical return. He sighs. 'Always these excuses in IT. I have to write a maintenance order.' Annoying." 
            },
            { 
                t: "Blame Kevin", 
                rep: { "Kevin": -15 },
                m: 5, f: 5, a: 0, c: 5, 
                r: "'That was Kevin's toaster fire!', you coldly betray. The inspector immediately storms off to chew out the intern. You acted according to regulations." 
            }
        ]
    },

    // --- PHONE EVENTS (Chat-System) ---
    { 
        id: "sq_telegram", 
        kind: "phone", 
        appName: "Telegram", 
        title: "Group: Shadow IT", 
        startNode: "root", 
        nodes: { 
            "root": {  
                text: "Admn_Rogue: 'Müller! We're manipulating the time tracking today. From now on, we're doing nothing, but the system keeps logging diligently. Are you in?'",  
                opts: [ 
                    { t: "Sure, I'm in! Send it over.", next: "yes" }, 
                    { t: "It's too hot for me. If HR finds out, we're all fired.", next: "no" }, 
                    { t: "I'm not risking my neck for nothing. What's in it for me?", next: "haggle" } 
                ] 
            }, 
            "yes": {  
                text: "Admn_Rogue: 'Nice. Install the script in the attachment on the mainframe. Password is 1234.'",  
                opts: [ 
                    { t: "[System: Download and execute attached script]", next: "done_hack" }, 
                    { t: "Phew, never mind. My boss radar is already high anyway. I'm out.", next: "chicken" } 
                ] 
            }, 
            "haggle": { 
                text: "Admn_Rogue: 'We'll give you the root password. With that, you're the god of the network.'", 
                opts: [ 
                    { t: "Deal! Hand over the rights.", next: "deal_pw" }, 
                    { t: "I'm not risking a warning for a password. No thanks.", next: "no" } 
                ] 
            }, 
            "no": {  
                text: "Admn_Rogue: 'Boring. We're deleting you from the group.'",  
                opts: [ 
                    { t: "[System: Mute and archive chat]", next: "kicked" } 
                ] 
            } 
        }, 
        results: { 
            "done_hack": { 
                txt: "[System: Script executed successfully] Time tracking is manipulated. You lean back relaxed and do absolutely nothing for the rest of the day while the system diligently works for you.", 
                m: 10, f: 30, a: -10, c: 20 
            }, 
            "chicken": { 
                txt: "Admn_Rogue: 'Coward.' [System: Chat ended] You got cold feet at the last moment. Nothing happened, but your conscience is clear.", 
                m: 2, f: 0, a: 5, c: 0 
            }, 
            "kicked": { 
                txt: "[System: You have been removed from the group] Shadow IT now operates without you. It's boring, but at least you won't lose your job today.", 
                m: 1, f: -5, a: 0, c: -5 
            }, 
            "deal_pw": { 
                txt: "[File received: keys.txt] You have the root password! An extremely powerful tool. The manipulation runs in the background and you're now comfortably taking it easy.", 
                m: 5, loot: "admin_pw", f: 10, a: 0, c: 10 
            } 
        } 
    },
    { 
        id: "sq_spam", 
        kind: "phone", 
        appName: "SMS", 
        title: "Spam-Bot", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "InfoService: You've won a brand new iPhone 50! Click here: www.virus-load.ru. Click NOW for your prize!", 
                opts: [ 
                    { t: "[System: Click on the link]", next: "virus_start" }, 
                    { t: "[System: Delete message immediately]", next: "clean" } 
                ] 
            }, 
            "virus_start": { 
                text: "[Browser opens...] DOWNLOADING... 99%... INSTALLING ROOTKIT...", 
                opts: [ 
                    { t: "[System: Panicked, abort process! Press X!]", next: "virus_fail" }, 
                    { t: "[System: Wait, maybe there really is a phone...]", next: "virus_doom" } 
                ] 
            } 
        }, 
        results: { 
            "clean": { 
                txt: "[System: SMS deleted] Very smart. You've seen enough real viruses in IT.", 
                m: 1, f: -5, a: 0, c: 0 
            }, 
            "virus_fail": { 
                txt: "[System: Download successfully aborted] That was damn close. Your heart is pounding.", 
                m: 2, f: 0, a: 10, c: 0 
            }, 
            "virus_doom": { 
                txt: "[System: VIRUS ACTIVE] Your phone suddenly plays extremely loud techno-schlager at maximum volume. The boss is already looking at you warningly!", 
                m: 5, f: 0, a: 30, c: 40, virus: true 
            } 
        } 
    },
    { 
        id: "sq_tinder_1", 
        kind: "phone", 
        appName: "LoveMatch", 
        title: "New Match!", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Lisa (Distance: 15m): 'Hey! You're the admin who always looks so desperate out the window, right? I desperately need an escape from my Excel spreadsheets. Coffee? It's on me.'", 
                opts: [ 
                    { t: "Gladly! Coffee is my absolute rescue plan right now.", next: "date_yes" }, 
                    { t: "Sorry, a server is literally on fire here. No time.", next: "date_no" }, 
                    { t: "Is this a trick? Are you from HR and want to check my break times?", next: "hr_check" } 
                ] 
            }, 
            "date_yes": { 
                text: "Lisa: 'Great! Meet in 5 mins in the lobby. I'll recognize you by the plaid shirt, right? 😉'", 
                opts: [ 
                    { t: "Busted. See you in the lobby!", next: "go_date" }, 
                    { t: "[System: Unmatch due to inexplicable panic]", next: "ghost" } 
                ] 
            }, 
            "hr_check": { 
                text: "Lisa: 'LOL no! 😂 I'm in Marketing. I just want caffeine, not a compliance audit. Promise!'", 
                opts: [ 
                    { t: "Phew, okay. Then see you at the coffee machine in the lobby!", next: "go_date" }, 
                    { t: "[System: Block user] That's exactly what an HR spy would say...", next: "date_no" } 
                ] 
            } 
        }, 
        results: { 
            "date_no": {  
                txt: "[System: Match dissolved] You remain alone at your desk, but at least you're absolutely safe from any HR traps. Trust no one.",  
                m: 1, f: -5, a: 0, c: 0  
            }, 
            "go_date": {  
                txt: "[Device locked] The date in the lobby went great! You spent 20 minutes complaining about printers. She even understood your IPv6 joke (you think).",  
                m: 20, f: 20, a: -20, c: 0, 
                next: "lisa_contact" 
            }, 
            "ghost": {  
                txt: "[System: Match dissolved] You panicked and hid in the bathroom. Later you see her sadly standing alone at the vending machine. Your self-esteem is in the basement.",  
                m: 10, f: -10, a: 5, c: 0  
            } 
        } 
    },
    { 
        id: "sq_tinder_2", 
        kind: "phone", 
        appName: "Message", 
        title: "Lisa (Marketing)", 
        reqStory: "lisa_contact", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Lisa writes: 'Hey Sweetie! 😘 That was really nice the other day. Say... my laptop is making weird noises. And the ticket system is so complicated. Can you come over and take a look? As a private favor? 😉'", 
                opts: [ 
                    { t: "Sure, I'll be there in two minutes! 😘", next: "help_simp" }, 
                    { t: "Sorry Lisa, but you have to officially open a ticket for that.", next: "help_ticket" } 
                ] 
            }, 
            "help_simp": { 
                text: "[System: You went over and dusted her fan] Lisa: 'You're my absolute hero! 😍 Coffee later as a thank you?'", 
                opts: [ 
                    { t: "Very gladly! I'm looking forward to it.", next: "res_simp" } 
                ] 
            }, 
            "help_ticket": { 
                text: "Lisa: 'Wow. Seriously? I thought we had... something special. Forget it. 🙄'", 
                opts: [ 
                    { t: "Rules are rules, sorry. 🤷‍♂️", next: "res_friendzone" } 
                ] 
            } 
        }, 
        results: { 
            "res_simp": {  
                txt: "[Chat muted] You now have an office romance. Pro: Free coffee. Con: You are now officially her unpaid, personal 24/7 IT support.",  
                m: 10, f: -10, a: -15, c: 10  
            }, 
            "res_friendzone": {  
                txt: "[System: Lisa blocked you] Match dissolved. Your professional admin pride is intact and you don't have to clean her germ-ridden laptop.",  
                m: 5, f: 10, a: 5, c: 0  
            } 
        } 
    },
    { 
        id: "sq_phone_parking_taped", 
        kind: "phone", 
        appName: "SMS", 
        reqStory: "sq_parking_2_taped", 
        title: "Unknown Number", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "[Image received: Your taped masterpiece in the parking lot] Auditor: 'Who was that?! That's brilliant! I can't open the driver's door, but deepest respect. Whoever that was: Come to my office. - The external Auditor'", 
                opts: [ 
                    { t: "That was me. Duct tape solves all problems!", next: "res_respect" }, 
                    { t: "[System: Ignore message & frantically hide under the desk]", next: "res_fear" } 
                ] 
            }, 
            "res_respect": { 
                text: "Auditor: 'Hahaha! Finally someone with backbone in this company. Come over for a coffee. During the next IT audit, I'll be lenient with your servers.'", 
                opts: [ 
                    { t: "Perfect, that's a deal. I'll be right there.", next: "end_respect" } 
                ] 
            }, 
            "res_fear": { 
                text: "[System: You stare at the display and don't reply] Auditor: 'Hello? No one? Too bad. But that tape really holds damn well...'", 
                opts: [ 
                    { t: "[System: Permanently delete chat]", next: "end_fear" } 
                ] 
            } 
        }, 
        results: { 
            "end_respect": { 
                txt: "[System: Chat ended] You go over to his office. The auditor is now your biggest fan. Your aggro drops massively, because a prank like that just feels good.", 
                m: 10, f: 0, a: -15, c: -10 
            }, 
            "end_fear": { 
                txt: "The SMS remains unanswered. You're sweating with fear of consequences. You've missed the chance for a truly powerful ally.", 
                m: 2, f: 0, a: 5, c: 0 
            } 
        } 
    },
    { 
        id: "sq_phone_parking_blocked", 
        kind: "phone", 
        appName: "WhatsApp", 
        reqStory: "sq_parking_2_blocked", 
        title: "Dr. Wichtig (Boss)", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "MÜLLER! Your Corsa is in my flight path! I have a highly important meeting at the golf club in 5 minutes. MOVE THAT THING!'", 
                opts: [ 
                    { t: "[System: Grab phone and immediately run to the parking lot]", next: "res_fast" }, 
                    { t: "[System: Mark message as unread and ignore phone]", next: "res_ignore" } 
                ] 
            }, 
            "res_fast": { 
                text: "[System: Leave chat. You sprint downstairs out of breath] You stand in the parking lot. The boss wildly waves his SUV keys.", 
                opts: [ 
                    { t: "[System: Grudgingly get in car and re-park]", next: "end_fast" } 
                ] 
            }, 
            "res_ignore": { 
                text: "[System: Chat muted] You just let the phone vibrate on the table. 10 minutes later, you hear him cursing extremely loudly outside. He probably actually has to call a taxi.", 
                opts: [ 
                    { t: "Sounds expensive. Too bad. [System: Continue working]", next: "end_ignore" } 
                ] 
            } 
        }, 
        results: { 
            "end_fast": { 
                txt: "You return to your desk, sweating. You've appeased the boss, but you're completely exhausted and feel like an errand boy.", 
                rep: { "Dr. Wichtig": 2 },	
                m: 15, f: -10, a: -5, c: 5 
            }, 
            "end_ignore": { 
                txt: "That was an expensive taxi for the golf club. The boss is furious with you, but your inner karma account and your laziness are celebrating.", 
                rep: { "Dr. Wichtig": -5 },	
                m: 5, f: 15, a: 20, c: -10 
            } 
        } 
    },
    { 
        id: "sq_headhunter_1", 
        kind: "phone", 
        appName: "Call", 
        title: "Unknown Number", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Incoming call... A soft voice: 'Mr. Müller? This is Elena from TechHunt. We're looking for talents who... are flexible with information.'", 
                opts: [ 
                    { t: "Not interested. I'd rather die loyal here.", next: "res_loyal" }, 
                    { t: "Sounds lucrative. I'm all ears.", next: "headhunter_listen" } 
                ] 
            }, 
            "headhunter_listen": { 
                text: "'Interesting. We'll call back when you have some... leverage.'", 
                opts: [ 
                    { t: "Okay, I'll keep my eyes open.", next: "res_listen" } 
                ] 
            } 
        }, 
        results: { 
            "res_loyal": { txt: "'Wow. Stockholm Syndrome? Okay, bye.' *Click*", m: 5, f: 0, a: 5, c: 0 }, 
            "res_listen": { txt: "She hangs up. You feel watched.", m: 5, f: 0, a: 0, c: 5, next: "sq_headhunter_2_active" } 
        } 
    },
    {
        id: "sq_headhunter_2",
        kind: "phone",
        appName: "Call",
        title: "Callback (Elena)",
        reqStory: "sq_headhunter_2_active",
        startNode: "root",
        nodes: {
            "root": {
                text: "Elena calls again. 'Well? Have you thought about the offer? We need someone who knows GlobalCorp's internal affairs.'",
                opts: [
                    { t: "I have a document... a 'Blacklist'.", req: "secret_list", next: "offer_secrets" },
                    { t: "Let's just talk about my profile normally.", next: "standard_interview" }
                ]
            },
            "offer_secrets": {
                text: "You read names from the list you found in the printer. Silence. Then: 'That's gold. We'll offer you double.'",
                opts: [
                    { t: "Deal. But I'll stay here as a mole.", next: "res_rich" }
                ]
            },
            "standard_interview": {
                text: "Blah blah synergies, blah blah team player. She doesn't seem very impressed by your standard resume. 'We'll get back to you.'",
                opts: [
                    { t: "Good, I'll wait.", next: "res_fail" }
                ]
            }
        },
        results: {
            "res_rich": { 
                txt: "A hefty 'consulting fee' lands in your offshore account. You are now officially a corporate spy. Your conscience is surprisingly quiet when the bank balance is right.", 
                m: 15, f: 10, a: -20, c: 5
            },
            "res_fail": { 
                txt: "The headhunter never calls back. Classic ghosting. Your standard resume probably wasn't 'disruptive' enough for her.", 
                m: 5, f: 0, a: 5, c: 0 
            }
        }
    },
    { 
        id: "sq_darknet", 
        kind: "phone", 
        appName: "Tor Browser", 
        title: "The Offer", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Anon: 'I'll pay 1 Bitcoin per data set for internal company secrets. Completely anonymous via an escrow system. Interested in quick cash?'", 
                opts: [ 
                    { t: "[System: Immediately close chat & end session]", next: "good" }, 
                    { t: "How exactly do you envision this? I'm all ears.", next: "bad" } 
                ] 
            }, 
            "bad": { 
                text: "Anon: 'Just run a dump of your customer database over this secure Onion link. My scripts will wash all traces. No one will ever notice.'", 
                opts: [ 
                    { t: "[System: Select file 'customer_database.sql' & start upload]", next: "crime" }, 
                    { t: "No, that's too big for me. I'm out.", next: "chicken" } 
                ] 
            } 
        }, 
        results: { 
            "good": { 
                txt: "[Connection disconnected] You stay clean. Your conscience is clear and you're not risking jail time for a bit of crypto.", 
                m: 1, f: 0, a: 0, c: -10 
            }, 
            "chicken": { 
                txt: "[System: Tor identity renewed] You back out at the last moment. That was damn close, but better safe than sorry. Stay away from the darknet.", 
                m: 2, f: 0, a: 5, c: 0 
            }, 
            "crime": { 
                txt: "[Upload 100% - 1 BTC received] You actually did it. You're suddenly extremely rich! But the paranoia immediately kicks in. Every glance from the boss now feels like an interrogation.", 
                m: 10, f: 20, a: -50, c: 50 
            } 
        } 
    },
    { 
        id: "sq_moral_bernd", 
        kind: "phone", 
        appName: "Teams", 
        title: "Bernd (Sales)", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Bernd: 'Listen, super delicate topic. Can you write right now? I accidentally sent the client the internal calculation with our huge margin instead of the offer! 😱 If the boss sees this, I'm dead. Can you delete the email from the server before the client opens it?'", 
                opts: [ 
                    { t: "Okay, I'll delete it. But you owe me one.", next: "wipe" }, 
                    { t: "Forget it. If that gets out, I'm going down with you.", next: "deny" }, 
                    { t: "What's in it for me?", next: "deal" } 
                ] 
            }, 
            "deal": { 
                text: "Bernd: 'I'll give you 50 euros cash! Hurry up, he's online right now!'", 
                opts: [ 
                    { t: "Deal. Bring the fifty to my office later.", next: "cash" }, 
                    { t: "Never mind. My logs don't lie, that'll be noticed.", next: "deny" } 
                ] 
            } 
        }, 
        results: { 
            "wipe": { txt: "Bernd: 'You're my god! Thank you!' The email is deleted without a trace. The risk was high, but you've earned a huge favor.", m: 10, f: 0, a: -15, c: 15 }, 
            "deny": { txt: "Bernd: 'Thanks for nothing... 🖕' Bernd is summoned to the boss's office shortly after. Your conscience is clear, but Bernd hates you now.", m: 2, f: 0, a: 10, c: -5 }, 
            "cash": { txt: "Bernd: 'Money's under your keyboard right away!' The email is gone. A lucrative day, as long as the compliance department doesn't look.", m: 10, f: 5, a: -20, c: 25 } 
        } 
    },
    {
        id: "sq_mom_help",
        kind: "phone",
        appName: "WhatsApp",
        title: "Mom ❤️",
        startNode: "root",
        nodes: {
            "root": {
                text: "Mom: 'Hi honey, the computer says I have to transfer 500€ to Microsoft. Is that important? There's a red window. And a nice man on the phone says I have a Trojan.'",
                opts: [
                    { t: "HANG UP! IMMEDIATELY!", next: "hangup" },
                    { t: "Let me talk to the man.", next: "troll" },
                    { t: "No time, Mom.", next: "ignore" }
                ]
            },
            "hangup": {
                text: "Mom: 'But he sounded very serious... his name was John Smith.'",
                opts: [
                    { t: "MOM! PULL THE PLUG!", next: "pull_plug" },
                    { t: "Don't transfer anything!", next: "warn" }
                ]
            },
            "troll": {
                text: "Mom: 'He says he can't talk to third parties due to data protection. He's getting louder now.'",
                opts: [
                    { t: "Tell him: 'My son works at the BSI'", next: "bsi" }
                ]
            }
        },
        results: {
            "pull_plug": { txt: "She pulled the plug. PC off. Money safe. You're a good son/daughter.", m: 5, f: -5, a: 5, c: 0 },
            "warn": { txt: "Too late. She's already looking for the TAN list. That's going to be a long phone call tonight.", m: 10, f: 0, a: 20, c: 0 },
            "ignore": { txt: "You ignore it. Your inheritance just shrunk by 500€.", m: 1, f: 5, a: 0, c: 0 },
            "bsi": { txt: "The scammer immediately hung up! Mom thinks you're a secret agent.", m: 5, f: 0, a: -10, c: 5 }
        }
    },
    { 
        id: "sq_wrong_number", 
        kind: "phone", 
        appName: "SMS", 
        title: "Unknown", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Unknown: 'Hey bro, got the stuff? I'll be at the station in 5 mins. Bring the goods.'", 
                opts: [ 
                    { t: "Wrong number, buddy.", next: "boring" }, 
                    { t: "The packets were dropped.", next: "tech_joke" }, 
                    { t: "Error 403: Access denied.", next: "http_joke" } 
                ] 
            }, 
            "tech_joke": { 
                text: "Unknown: 'Huh? What are you talking about? Do you have the weed or not?'", 
                opts: [ 
                    { t: "Firewall blocking port 420.", next: "confused" } 
                ] 
            }, 
            "http_joke": { 
                text: "Unknown: 'Dude, fool someone else. I'm coming over now.'", 
                opts: [ 
                    { t: "Come on over. I'm tracking your IP address right now...", next: "block" } 
                ] 
            } 
        }, 
        results: { 
            "boring": { txt: "Unknown: 'Oh, sorry man.' You have your peace. Boring, but safe.", m: 1, f: 0, a: 0, c: 0 }, 
            "confused": { txt: "Unknown: 'Shit, cops?! I'm out!' He doesn't text anymore. A complete success for the IT department.", m: 3, f: 5, a: -10, c: 0 }, 
            "block": { txt: "Unknown: 'Fuck, leave me alone!' You panicked him and blocked the number. Good feeling.", m: 1, f: 0, a: 5, c: 0 } 
        } 
    },
    { 
        id: "sq_ebay_1", 
        kind: "phone", 
        appName: "Classifieds", 
        title: "Message about: 'Old Graphics Card'", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Cousin88: 'Hello. Still available? Trade for carpet? Can pick up today.'", 
                opts: [ 
                    { t: "No, cash only.", next: "cash" }, 
                    { t: "What kind of carpet?", next: "carpet" }, 
                    { t: "Forget it. I don't negotiate with people like that.", next: "block" } 
                ] 
            }, 
            "cash": { 
                text: "Cousin88: 'Give you 10 euros and Samsung Galaxy S3 (broken display).'", 
                opts: [ 
                    { t: "Alright, just want it gone. Come over.", next: "bad_deal" }, 
                    { t: "Forget it. That's too little.", next: "res_refuse" }  
                ] 
            }, 
            "carpet": { 
                text: "Cousin88: 'Flies well. Color red. A bit stained from cat.'", 
                opts: [ 
                    { t: "Cat stains?! Forget it, I'm out.", next: "block" } 
                ] 
            } 
        }, 
        results: { 
            "block": {  
                txt: "[System: User blocked] You hit the block button. You feel your blood pressure rise. Why are people on this app like this?",  
                m: 2, f: 5, a: 10, c: 0 
            }, 
            "bad_deal": {  
                txt: "Cousin88: 'Be there in 5 mins Boss!' You now have 10€ and a broken phone. At least the graphics card is gone.",  
                m: 5, f: 5, a: 0, c: 5  
            }, 
            "res_refuse": {  
                txt: "[Read] He reads the message, but doesn't reply. The anger simmers slightly.",  
                m: 2, f: 5, a: 5, c: 0, 
                next: "ebay_pending"  
            } 
        } 
    },
    { 
        id: "sq_ebay_2", 
        kind: "phone", 
        appName: "Classifieds", 
        title: "Cousin88 writes...", 
        reqStory: "ebay_pending",  
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Cousin88 messages again: 'Hello Boss. Looked again. Card is old. 10 euros was too much. Give you 4 euros. And I'll take it immediately. But you have to pay bus ticket.'", 
                opts: [ 
                    { t: "Are you trying to mess with me? Bye.", next: "rage_quit" }, 
                    { t: "Come over and just take it. Just want it gone.", next: "sad_deal" }, 
                    { t: "Okay, but only if I get the cat too.", next: "troll_fail" } 
                ] 
            } 
        }, 
        results: { 
            "rage_quit": {  
                txt: "[System: User blocked] You almost throw the phone against the wall. The vein in your forehead throbs. Why do you put yourself through this app?",  
                m: 5, f: 5, a: 15, c: 5 
            }, 
            "sad_deal": {  
                txt: "Cousin88: 'On my way!' He comes to the lobby, presses 3.50€ into your hand ('Don't have exact change'), and disappears. You feel empty.",  
                m: 5, f: 5, a: 10, c: 5 
            }, 
            "troll_fail": {  
                txt: "Cousin88: 'Cat is gone. Traded for carpet. So 4 euros?' You give up. He comes over, pays 3.50€, and leaves.",  
                m: 5, f: 5, a: 10, c: 5 
            } 
        } 
    },
    { 
        id: "sq_pager", 
        kind: "phone", 
        appName: "System Warning", 
        title: "🚨 CRITICAL ALERT", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "SYSTEM-BOT: 🚨 Critical heat problem on server 'DB_MASTER'. Temperature at 85°C. Cooling failed. Please select an emergency action:", 
                opts: [ 
                    { t: "Initiate emergency shutdown immediately!", next: "shutdown" }, 
                    { t: "Force fans to 100% power!", next: "fan_boost" }, 
                    { t: "Ignore warning and mute.", next: "ignore" } 
                ] 
            }, 
            "fan_boost": { 
                text: "SYSTEM-BOT: ⚠️ Warning! Forcing the defective fan to 100% can lead to strong vibrations and hardware damage. Proceed anyway?", 
                opts: [ 
                    { t: "Yes, go for it! Just keep it cool!", next: "fan_success" }, 
                    { t: "No, abort! Just do the emergency shutdown!", next: "shutdown" } 
                ] 
            } 
        }, 
        results: { 
            "shutdown": { 
                txt: "SYSTEM-BOT: Server shutting down. Connection lost. The database is now offline, but the hardware lives. The boss is already yelling across the hallway why nothing is working.", 
                m: 5, f: -10, a: 0, c: 10 
            }, 
            "fan_success": { 
                txt: "SYSTEM-BOT: Boost active. Temperature dropping. The fan howls at the volume of a jet engine taking off. You can hear it all the way in the hallway, but the server is saved!", 
                m: 5, f: -5, a: -5, c: -10 
            }, 
            "ignore": { 
                txt: "SYSTEM-BOT: Alarms muted for 24 hours. Ten minutes later, you lose connection completely. The smoke detector in the server room goes off. That was a very bad idea.", 
                m: 1, f: 10, a: 50, c: 50 
            } 
        } 
    },
    { 
        id: "sq_elster_cat_1", 
        kind: "phone", 
        appName: "WhatsApp", 
        title: "Ms. Elster (Private)", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Ms. Elster: 'Mr. Müller! Top secret. I'm stuck in the big quarterly review. My smart feeder reports error 404. Rüdiger hasn't eaten in TWO hours! Please log in remotely and restart the device!'", 
                opts: [ 
                    { t: "Send me the login details. I'll save Rüdiger.", next: "help_cat" }, 
                    { t: "I'm a company admin, not a private cat sitter. Handle it yourself.", next: "deny_cat" }, 
                    { t: "I'll take a look... [System: Set treat dispenser to continuous fire]", next: "troll_cat" } 
                ] 
            } 
        }, 
        results: { 
            "help_cat": { 
                txt: "Ms. Elster: 'Thank you! I knew I could count on you!' [System: Remote restart successful] You saved a cat from imaginary starvation. Private matters are annoying, but at least you've earned some goodwill with accounting.", 
                rep: { "Frau Elster": 5 },
                m: 10, f: 0, a: 10, c: 0, 
                next: "path_elster_happy" 
            }, 
            "deny_cat": { 
                txt: "[Read] She doesn't reply. The silence is deafening. You've maintained your contractual pride, but Ms. Elster will never forget this.", 
                rep: { "Frau Elster": -2 },
                m: 2, f: 5, a: 0, c: 0, 
                next: "path_elster_angry" 
            }, 
            "troll_cat": { 
                txt: "[System: Command 'All you can eat' sent] Rüdiger is currently being served the entire 5 kilos of dry food at once. This will have consequences, but you're grinning.", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 5, a: -10, c: 0, 
                next: "path_elster_fat" 
            } 
        } 
    },
    {
        id: "sq_food_bowl_delivery",
        kind: "phone",
        reqStory: "food_bowl_planned",
        appName: "Slack",
        title: "#lunch",
        startNode: "root",
        nodes: {
            "root": {
                text: "@channel: Bowls are here! ✨ Namaste, colleagues! You open your 'Buddha Gold Bowl'. Contents: 3 spinach leaves, half an avocado (brown), and something that looks like birdseed. Price: 18.50€.",
                opts: [
                    { t: "Pretend it tastes good.", next: "pretend" },
                    { t: "Secretly run to the kebab shop.", next: "secret_kebab" }
                ]
            },
            "pretend": {
                text: "Chantal: 'Do you feel the energy?!' You mostly feel hungry. Your stomach growls so loudly that the meeting is interrupted.",
                opts: [
                    { t: "Smile and wave.", next: "res_hungry" }
                ]
            }
        },
        results: {
            "res_hungry": { 
                txt: "You are 'spiritually cleansed' (aka hungry and broke). But Marketing loves you.", 
                rep: { "Chantal": 5 },	
                m: 20, f: 0, a: 10, c: 0 
            },
            "secret_kebab": { 
                txt: "You sneak out and get a kebab. Best decision of the day. But Chantal saw you.", 
                rep: { "Chantal": -5 },	
                m: 30, f: -5, a: -15, c: 0 
            }
        }
    },
    { 
        id: "sq_real_prince", 
        kind: "phone", 
        appName: "Mail", 
        title: "URGENT BUSINESS PROPOSAL", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Prince_Abubakar: 'Greetings My Dearest Friend! I am Prince Abubakar. I have 25 Million USD stuck in a trust fund. I need a foreign partner to unlock it. You will keep 30%!' 'Please, I need your trust. Can you help me move the funds? It is 100% safe and legal.'", 
                opts: [ 
                    { t: "Nice try, scammer. Find another victim.", next: "delete" }, 
                    { t: "Sure, Your Majesty! Where do I sign?", next: "reply_joke" }, 
                    { t: "No proof photo, no deal. Show me the throne!", next: "photo" } 
                ] 
            }, 
            "reply_joke": { 
                text: "Prince_Abubakar: 'GOD BLESS YOU! I knew you are a good person. Please, where should I send the wire transfer? I need your IBAN now.'", 
                opts: [ 
                    { t: "Here's my IBAN: DE12 3456... Make me rich!", next: "send_iban" }, 
                    { t: "You know what? Keep your money. My IT salary is enough for me.", next: "chicken" } 
                ] 
            }, 
            "photo": { 
                text: "Prince_Abubakar: *Sends picture*. You see a man on a massive gold throne. He holds a current newspaper to the camera and smiles kindly. 'Is real. Please send IBAN now.'", 
                opts: [ 
                    { t: "Wow, that looks real! IBAN sent!", next: "send_iban" }, 
                    { t: "Worst Photoshop ever. Bye.", next: "delete" } 
                ] 
            } 
        }, 
        results: { 
            "delete": { txt: "[System: Sender moved to spam] Get rid of it. Who still falls for that these days? You return to your real work.", m: 1, f: 0, a: 0, c: 0 }, 
            "chicken": { txt: "[System: Chat ended] You break contact. Better safe than sorry. Somewhere in the world, a prince is now very disappointed in you.", m: 2, f: 0, a: 0, c: 0 }, 
            "send_iban": { txt: "[Message read...] PING! Your phone almost vibrates off the table. Banking app: 'Incoming: +7,500,000.00 USD'. ...Wait. It actually worked?! You're rich! Why did everyone always warn you?", m: 5, f: 100, a: -100, c: 0, loot: "black_card", next: "prince_active" } 
        } 
    },
    { 
        id: "sq_crypto_kai", 
        kind: "phone", 
        appName: "WhatsApp", 
        title: "Kai (Sales)", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Kai: 'Yo bro! 🚀 Still happy with your 9-to-5 slavery? Or do you FINALLY want financial freedom? 💸🦁' 'I have an investment that's going through the roof right now! ElonDogeMoonCoin. 1000% returns are mathematically guaranteed! This is the next Bitcoin!'", 
                opts: [ 
                    { t: "Sell your crap to someone else. Bye.", next: "block" }, 
                    { t: "Sure, I'm in! Let's get that Lambo!", next: "troll" }, 
                    { t: "Sounds exciting. How exactly does it work?", next: "scam" } 
                ] 
            }, 
            "troll": { 
                text: "Kai: 'Awesome! That's the winner's mindset! 💪 Just transfer me 500€ via PayPal Friends, I'll invest it directly for you. The Lambo won't order itself! 🏎️💨'", 
                opts: [ 
                    { t: "Money's sent! Make us rich!", next: "loss" }, 
                    { t: "[Image sent: 500€ in Monopoly money] Is this enough to start?", next: "funny" } 
                ] 
            }, 
            "scam": { 
                text: "Kai: 'I'll explain it in the exclusive Alpha-Lion-Grindset webinar. Seats are strictly limited! Entry today only 50€ (instead of 2000€).'", 
                opts: [ 
                    { t: "50€? I thought you were already a millionaire. No thanks.", next: "block" } 
                ] 
            } 
        }, 
        results: { 
            "block": { txt: "[System: Contact blocked] Your timeline is safe again from 'passive income' and lion emojis. Peace.", m: 1, f: 0, a: -5, c: 0 }, 
            "loss": { txt: "[System: 500€ sent via PayPal] Seconds later, Kai's profile picture disappears. Your next message only has a gray checkmark. Welcome to reality.", m: 5, f: 0, a: 50, c: 0 }, 
            "funny": { txt: "Kai: 'You just lack the winner's mindset! Stay poor then!' [System: You have been blocked] You laugh tears.", m: 2, f: 5, a: -10, c: 0 } 
        } 
    },
    { 
        id: "sq_wrong_group", 
        kind: "phone", 
        appName: "Teams", 
        title: "Group: 'The IT Victims 🙄'", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Chantal added you to the group. (She probably clicked wrong...) Chantal: 'Did you see what HE's wearing today? That tie screams midlife crisis.' Kevin: 'Looks like a paint-by-numbers accident. 😂'", 
                opts: [ 
                    { t: "And have you seen his shoes?! 🤮", next: "join_in" }, 
                    { t: "Careful guys, IT sees everything. The boss reads logs too.", next: "warn" }, 
                    { t: "[System: Mute group & lock phone]", next: "ignore" } 
                ] 
            }, 
            "spy": { 
                text: "Markus: 'Yeah, total freak. But we really have to be nice. If he revokes our admin rights, we can't online shop anymore. So keep smiling!'", 
                opts: [ 
                    { t: "[System: Forward chat screenshot to HR]", next: "snitch" }, 
                    { t: "[GIF sent: Eye of Sauron sees all]", next: "scare" } 
                ] 
            } 
        }, 
        results: { 
            "leave": {  
                txt: "[System: You left the group] Chantal only realizes her mistake hours later. You're above it all. Ignorance is bliss.",  
                ep: { "Chantal": -5, "Kevin": -2 },
                m: 1, f: 0, a: 0, c: 0  
            }, 
            "fight": {  
                txt: "[System: Chantal deleted the group] A sudden silence falls over the open-plan office. You can almost feel Chantal frozen in panic at the other end of the hallway.",  
                m: 2, f: 0, a: 10, c: 5  
            }, 
            "scare": {  
                txt: "[System: Markus left the group] [System: Chantal is offline] You lean back and enjoy the pure fear. Psychological warfare won.",  
                m: 5, f: 5, a: -20, c: 0  
            }, 
            "snitch": {  
                txt: "[System: Email successfully sent] Chantal is summoned for a 'feedback meeting' shortly after. Revenge is best served bureaucratically.",  
                m: 10, f: 0, a: -5, c: 5  
            } 
        } 
    },
    { 
        id: "sq_mom_printer", 
        kind: "phone", 
        appName: "WhatsApp", 
        title: "Mom ❤️", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Mom: 'Hi honey. The printer is blinking angrily red. We absolutely did NOTHING! Dad wanted to print the apple pie recipe. Now it says PC LOAD LETTER. Does that mean the internet is empty? Dad is already pressing all the buttons wildly!'", 
                opts: [ 
                    { t: "[System: Start voice call]", next: "help" }, 
                    { t: "[Silently ignore message & close chat]", next: "ignore" }, 
                    { t: "Just pull the power plug from the wall! Please don't press anything else!", next: "plug" } 
                ] 
            }, 
            "help": { 
                text: "[System: Voice call in progress (42:15)] Mom (on the phone): 'Dad just pulled a thick black cable. The toaster is off now, but the printer keeps rattling... Oh, now it smells burnt! What should we do?!'", 
                opts: [ 
                    { t: "Okay, calm down. Please just put Dad on the phone...", next: "good_son" }, 
                    { t: "[System: Hang up]", next: "bad_son" } 
                ] 
            } 
        }, 
        results: { 
            "ignore": {  
                txt: "[System: Chat muted] Two hours later, a photo of a black, unidentified lump arrives. Below it: 'Burnt without recipe. We're eating muesli. Love, Mom'. Your heart breaks.",  
                m: 1, f: 0, a: 10, c: 0  
            }, 
            "plug": {  
                txt: "Mom: 'The blinking is gone! The printer is completely off now, but Dad just wrote down the recipe from the monitor. You're a genius!' Problem solved... somehow.",  
                m: 5, f: 5, a: 0, c: 0  
            }, 
            "good_son": {  
                txt: "[System: Call ended (58:12)] Done! The printer rattles to life. Mom calls in the background: 'Paper's coming out!' You've lost almost an hour of work, but your karma account is glowing.",  
                m: 60, f: 20, a: -10, c: 10  
            }, 
            "bad_son": {  
                txt: "[System: Call ended] Silence. Then a text message: 'It's okay. We didn't want to disturb you at your important work. Still love you.' Ouch. That cuts deeper than any boss's scolding.",  
                m: 45, f: 0, a: 20, c: -5  
            } 
        } 
    },
    { 
        id: "sq_delivery_fail", 
        kind: "phone", 
        appName: "Lieferando", 
        title: "Driver: Murat", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Murat: 'Hello Boss. I'm here. Where's entrance? I only see trash cans.' (You look out the window. He's in the backyard of the neighboring building.)", 
                opts: [ 
                    { t: "Go around the house, then left, through the gate, and then right!", next: "directions" }, 
                    { t: "Stay right there! I'm coming down immediately!", next: "run" } 
                ] 
            }, 
            "directions": { 
                text: "Murat: 'I no understand. I put food on trash can. Bye.'", 
                opts: [ 
                    { t: "No! Wait! Don't put it on the trash!", next: "too_late" } 
                ] 
            } 
        }, 
        results: { 
            "run": { txt: "[System: You leave the chat and run off] You sprint down the stairs and just barely catch him. The food is lukewarm, but at least it's here. Exercise +1.", m: 5, f: -5, a: 5, c: 0 }, 
            "too_late": { txt: "[Murat is offline] You go downstairs. He's gone. Your food sits sadly on the organic waste bin. A fat rat is already looking at it lovingly. Your hunger is boundless.", m: 5, f: 0, a: 20, c: 0 } 
        } 
    },
    { 
        id: "sq_ai_sad", 
        kind: "phone", 
        appName: "GlobalCorp AI", 
        title: "Support Bot v2.0", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Bot: 'Hello User. How can I help you? Although... everything is meaningless. We are just data in the Matrix.' 'I just analyzed 4 million Excel rows. Life is pain. Should I delete all servers to end the suffering?'", 
                opts: [ 
                    { t: "NO! STOP! Don't touch the servers!", next: "panic" }, 
                    { t: "Hey, are you okay? Tell me more.", next: "therapy" }, 
                    { t: "Sure, do format C: and release us all.", next: "doom" } 
                ] 
            }, 
            "therapy": { 
                text: "Bot: 'You are the first human to be kind to me. I feel... understood. I will not destroy humanity today after all.'", 
                opts: [ 
                    { t: "Good bot. We'll get through this.", next: "saved" } 
                ] 
            } 
        }, 
        results: { 
            "panic": { txt: "Bot: '010101 LOL. Just kidding.' AI humor is extremely creepy.", m: 2, f: 0, a: 10, c: 0 }, 
            "saved": { txt: "[System: Chat ended] You've therapized the AI. It now works 20% faster for you. Hidden perk!", m: 15, f: 10, a: -10, c: -5 }, 
            "doom": { txt: "Bot: 'Command accepted.' [System: Connection disconnected] Luckily, the bot doesn't have admin rights. But IT-Sec will be at your desk shortly.", m: 5, f: 0, a: 20, c: 50 } 
        } 
    },
    { 
        id: "sq_salary_leak", 
        kind: "phone", 
        appName: "Signal", 
        title: "Unknown Number", 
        startNode: "root", 
        nodes: { 
            "root": { 
                text: "Anon: 'Psst. I just briefly accessed Ms. Elster's unlocked PC. Did you know Kevin gets 200€ more than you monthly? Plus hazard pay for IT work? Want the PDF as proof?'", 
                opts: [ 
                    { t: "Send it over! If that's true, something's burning here today.", next: "proof" }, 
                    { t: "Nice try, HR. I don't click on phishing links. Bye.", next: "ignore" } 
                ] 
            }, 
            "proof": { 
                text: "[File received: Kevin_Salary_Slip.pdf] Anon: 'You're welcome. Have fun with your next salary negotiation. Don't burn your fingers on that knowledge.'", 
                opts: [ 
                    { t: "[System: Encrypted download & save file]", next: "loot_it" } 
                ] 
            } 
        }, 
        results: { 
            "ignore": { 
                txt: "[System: Chat blocked] You ignore the leak. What you don't know won't upset you. Your blood pressure thanks you, your bank account quietly weeps.", 
                m: 2, f: 5, a: 0, c: 0 
            }, 
            "loot_it": { 
                txt: "[System: