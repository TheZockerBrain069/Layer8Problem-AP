export const coffee = [

    {
        id: "cof_note",
        title: "Found Item at the Machine",
        text: "Someone left a yellow sticky note here. It says 'WLAN-PW: 1234abcd'. That's Schmidt's handwriting.",
        opts: [
            { t: "Pocket the note", loot: "wifi_note", m: 5, f: 5, a: 0, c: 0, r: "This might come in handy. Knowledge is power, especially when it's someone else's Wi-Fi password." },
            { t: "Throw it away", m: 5, f: 0, a: 0, c: 0, r: "Security risk neutralized. You're practically a digital superhero." }
        ]
    },
    {
        id: "cof_donut_1",
        title: "Meeting Leftovers",
        text: "The conference room door is ajar. On the large table, amidst empty water bottles and flipchart paper, there's a box from the management meeting. Contents: A lonely, slightly stale chocolate donut with colorful sprinkles.",
        opts: [
            { 
                t: " 'Secure' the donut", 
                loot: "donut", 
                next: "path_donut_taken", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You quickly wrap it in a napkin. It's a bit hard, but sugar is sugar. Plus, it's excellent bribery material for hungry interns." 
            },
            { 
                t: "Show pride & leave it", 
                next: "path_donut_left", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You walk on. You might be chronically hypoglycemic, but you don't eat management's scraps. An admin has to maintain some dignity." 
            }
        ]
    },
    {
        id: "cof_donut_2a",
		char: "Chantal",
        title: "The Sugar Trap",
        reqStory: "path_donut_taken",
        text: "No sooner is the donut in your pocket than Chantal from Marketing walks in. 'Oh, have you seen the last 'Veggie Spinach Chocolate Test Donut'? I was just about to photograph it for Instagram!'",
        opts: [
            { 
                t: "Lie: 'The cleaning crew was already here'", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Chantal sighs in disappointment. 'Too bad. And they say the spinach core is so healthy.' You still have the donut, but suddenly less appetite." 
            },
            { 
                t: "Confess and share", 
                rem: "donut", 
                rep: { "Chantal": 5 },
                m: 10, f: -5, a: -5, c: 0, 
                r: "You share the dry pastry. It actually tastes faintly of spinach. A problem shared is a problem halved. Chantal now finds you 'sympathetically honest'." 
            },
            { 
                t: "Chew frantically and swallow", 
                rem: "donut", 
                rep: { "Chantal": -5 },
                m: 5, f: -5, a: -10, c: 5, 
                r: "You stuff the rest in with one bite. 'Mmph... no idea.' Chantal stares at you. 'You have crumbs on your chin.' Embarrassing, but full." 
            }
        ]
    },
    {
        id: "cof_donut_2b",
		char: "Dr. Wichtig",
        title: "The Connoisseur",
        reqStory: "path_donut_left",
        text: "You get your coffee and see Dr. Wichtig enter the room. He spots the donut, his eyes light up. He takes a hearty bite. 'Mmmh! Finally, some decent catering around here!'",
        opts: [
            { 
                t: "Suck up: 'I left it for you'", 
				rep: { "Dr. Wichtig": 5 },
                m: 5, f: 5, a: -5, c: -10,
                r: "The boss nods approvingly with a full mouth. 'Müller, you're thinking ahead. I'll remember that.' A cheap victory, but it counts." 
            },
            { 
                t: "Warn him (spinach rumor)", 
				rep: { "Dr. Wichtig": -5 },
                m: 2, f: 0, a: 5, c: 5,
                r: "'Boss, that's from last month!' He immediately spits it into the trash. 'Are you trying to poison me?!' Oops. Too honest." 
            },
            { 
                t: "Silently enjoy", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You sip your coffee and watch the boss make a mess. A rare moment of peace." 
            }
        ]
    },
    {
        id: "cof_flirt_1",
        title: "The Crush",
        text: "Sarah from HR is standing there. She smiles at you. 'Well, IT hero? Everything under control, or is the server on fire?'",
        opts: [
            { 
                t: "Flirt: 'For you, I'd put out any fire'", 
                next: "path_flirt_date", 
                m: 20, f: 10, a: -30, c: 5, 
                r: "It's going well! She giggles and twirls a strand of hair. 'Oh, a firefighter, huh...'" 
            },
            { 
                t: "Run away in a panic", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You stammer 'Uh... Error 404!' and run out. Coffee forgotten. You hate yourself." 
            }
        ]
    },
    {
        id: "cof_flirt_2a",
        title: "The Offer",
        reqStory: "path_flirt_date",
        text: "The conversation with Sarah flows surprisingly well. Sarah leans against the machine. 'Say... do you have plans tonight? I could use a drink that doesn't come from this machine.'",
        opts: [
            { 
                t: "Accept: 'Sure, 6 PM at the pub?'", 
                m: 10, f: 10, a: -20, c: 0, 
                r: "'Perfect! I'm looking forward to it!' She writes her number on your arm. Your confidence skyrockets. The workday is saved." 
            },
            { 
                t: "Nerd response: 'I have to raid.'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "'Oh. Okay. Priorities, right?' Her smile freezes. She leaves. You sacrificed the date for a virtual dragon." 
            },
            { 
                t: "Workaholic: 'Must work overtime'", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: -10, a: 10, c: -20, 
                r: "She nods understandingly, but disappointed. 'Too bad. Busy bee.' The boss, passing by, hears this and nods contentedly." 
            }
        ]
    },
    {
        id: "cof_boss_1",
		char: "Dr. Wichtig",
        title: "The Boss Lurks",
        text: "The boss stands spread-legged in front of the coffee machine, blocking access. He slowly turns to you, one eyebrow raised. 'Ah, Müller? Back again? Is this your fifth coffee today, or have you sublet your desk?'",
        opts: [
            { 
                t: "Bold white lie: 'It's for the external consultant!'", 
                next: "path_boss_consultant",
				rep: { "Dr. Wichtig": 5 },
                m: 5, f: 10, a: 5, c: -10,
                r: "The boss nods approvingly: 'Ah, service-orientation! Very good, carry on.' He steps aside. You lied, but you got your coffee." 
            },
            { 
                t: "Justify: 'I need fuel...'", 
                next: "path_boss_lecture",
				rep: { "Dr. Wichtig": -2 },
                m: 15, f: -5, a: 10, c: 5,
                r: "Mistake. Huge mistake. He seizes the opportunity for a 15-minute impromptu lecture on 'Time Management' and 'Intrinsic Motivation'. Your coffee gets cold." 
            },
            { 
                t: "Panic scream 'No!' & run away", 
                m: 2, f: 0, a: -5, c: 5, 
                r: "You turn on your heel and flee back to your office. The boss looks after you, confused. No coffee, but at least no lecture." 
            }
        ]
    },
    {
        id: "cof_boss_2a",
		char: "Dr. Wichtig",
        title: "The Uninvited Guest",
        reqStory: "path_boss_consultant",
        text: "No sooner are you at your desk than the boss is back. Trailing him is a man in a $2000 suit. 'Müller! Perfect timing. This is the Senior Consultant from McKinsey. He said he was thirsty, and since you were already getting one for him anyway...' The consultant greedily reaches for YOUR cup.",
        opts: [
            { 
                t: "Hand it over, gritting your teeth",
                rep: { "Dr. Wichtig": 5 },				
                m: 2, f: 0, a: 20, c: -10, 
                r: "The consultant slurps loudly. 'Mmmh. A bit low on crema, but okay for a start.' You have no coffee, but the boss beams with pride at your 'teamwork'." 
            },
            { 
                t: "Lie: 'It has cough syrup in it.'", 
				rep: { "Dr. Wichtig": -2 },		
                m: 5, f: 5, a: -5, c: 5, 
                r: "The consultant recoils. 'Oh. Uh. No thanks.' The boss looks suspicious, but you get to keep your coffee." 
            },
            { 
                t: "Send him a bill: 'That'll be 5 Euros.'",
   				rep: { "Dr. Wichtig": -5 },	             				
                m: 5, f: 0, a: 10, c: 20, 
                r: "Dead silence. The consultant laughs nervously: 'He's got humor!' The boss doesn't laugh. 'Müller, my office. Later.' That was too cheeky." 
            }
        ]
    },
    {
        id: "cof_boss_2b",
		char: "Dr. Wichtig",
        title: "The Mindfulness Exercise",
        reqStory: "path_boss_lecture",
        text: "After the lecture, the boss hands you a bag full of colorful paper clips. 'To help you focus: sort these by color. By noon. It's a Zen exercise for high-performers!'",
        opts: [
            { 
                t: "Let Kevin sort them", 
                rep: { "Kevin": -5 },
                m: 5, f: 10, a: -5, c: 0, 
                r: "'Kevin! This is a color vision test for your apprenticeship!' Kevin sorts enthusiastically. You drink your cold coffee and watch. Delegating is also a skill." 
            },
            { 
                t: "Dutifully sort them", 
                rep: { "Dr. Wichtig": 5 },
                m: 30, f: -10, a: 10, c: -5, 
                r: "You sit there for 30 minutes, sorting red with red. It's stupid, but the boss passes by and nods: 'See? The focus returns!'" 
            },
            { 
                t: "Throw everything in the trash", 
                rep: { "Dr. Wichtig": 5 },
                m: 2, f: 5, a: 5, c: 10, 
                r: "Zap, gone. If the boss asks: 'I digitized them and uploaded them to the cloud.' He doesn't understand and nods, impressed." 
            }
        ]
    },
    {
        id: "cof_ball_1",
        title: "Cheap Promotional Gift",
        text: "A slimy software salesman left a box of 'merch' in the kitchen. They're red foam balls with 'Cloud is Future' printed on them.",
        opts: [
            { 
                t: "Pocket a stress ball", 
                loot: "stressball", 
                next: "path_ball_taken", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "It smells strongly of plasticizers, but it feels good in the hand. Perfect for squeezing (or throwing) when users get annoying again." 
            }
        ]
    },
    {
        id: "cof_ball_2a",
		char: "Dr. Wichtig",
        title: "Synergy Discussions",
        reqStory: "path_ball_taken",
        text: "You press 'Espresso'. Next to you stand the boss and the salesman from earlier. The salesman enthusiastically points to the red ball in your hand: 'Ah! I see our 'Cloud' is already in use! How do you like it?'",
        opts: [
            { 
                t: "'It's the best gadget in years!' (Exaggerated praise)", 
				rep: { "Dr. Wichtig": 10 },	
                m: 15, f: 5, a: 15, c: -10,
                r: "A fatal error. The salesman is so thrilled that he corners you and explains the Q4 roadmap for 15 minutes. The boss nods proudly, but your ears are bleeding and the coffee is getting cold." 
            },
            { 
                t: "'It's just foam.' (Dryly)", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "The salesman's smile freezes. 'Uh, yes. High-tech polymer.' He turns away, irritated. The conversation dies, and you can escape with your coffee in peace." 
            },
            { 
                t: "Inhale deeply and maintain eye contact (provoke)", 
				rep: { "Dr. Wichtig": -10 },	
                m: 5, f: 0, a: 0, c: 20,
                r: "You hold the ball directly under your nose, breathe deeply, and whisper: 'It smells of plasticizers.' Dead silence. The salesman backs away. The boss turns beet red. 'MÜLLER! MY OFFICE!'" 
            }
        ]
    },
    {
        id: "cof_empty_1",
        title: "Empty Machine",
        text: "The display blinks maliciously red: 'ERROR: BEANS EMPTY'. The container is bone dry. Someone squeezed out the last drop and stealthily slipped away without refilling. It was definitely Kevin.",
        opts: [
            { 
                t: "Sigh and refill the beans", 
                next: "path_empty_refill", 
                m: 15, f: -5, a: 10, c: 0, 
                r: "You lug the heavy sack from the storage room. Of course, you're the designated sucker for everything around here. But at least you're brewing the freshest coffee of the day now." 
            },
            { 
                t: "Kick the casing angrily", 
                next: "path_empty_kick", 
				rep: { "Dr. Wichtig": -2 },	
                m: 5, f: 0, a: 5, c: 10, 
                r: "CLANG! That made quite a racket. The machine remains empty, but your foot hurts. The boss pokes his head out the door: 'Everything under control, Müller?'" 
            },
            { 
                t: "Write a note: 'WHOEVER EMPTIES IT, REFILLS IT!'", 
                next: "path_empty_note", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You stick a passive-aggressive Post-it with three exclamation marks on the machine. You feel morally superior, but you still don't have coffee." 
            }
        ]
    },
    {
        id: "cof_empty_2a",
        title: "Karma",
        reqStory: "path_empty_refill",
        text: "No sooner are you finished than the new intern walks in. She beams at you. 'Oh, did you refill it? You're so sweet! Here, take mine. I accidentally made two.' She hands you a perfect cappuccino.",
        opts: [
            { 
                t: "Accept gratefully", 
                m: 5, f: 0, a: -25, c: 0, 
                r: "The coffee tastes of justice and milk foam. Your day is saved. Sometimes it pays to be nice." 
            },
            { 
                t: "Decline: 'I only trust my own brew'", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You decline. She shrugs and drinks both herself. Now you're standing there, waiting for the machine to be free again. Your own fault." 
            },
            { 
                t: "Lecture her: 'Actually, that's theft'", 
                m: 5, f: -5, a: 10, c: 5, 
                r: "Her smile freezes. 'Wow. Okay, Boomer.' She leaves. You have your coffee, but your soul is black." 
            }
        ]
    },
    {
        id: "cof_empty_2b",
        title: "Artificial Intelligence?",
        reqStory: "path_empty_kick",
        text: "The display flickers after your kick. Suddenly, a tinny, synthetic voice emanates from the speaker: 'OW. THAT WAS RUDE, MÜLLER. I'LL REMEMBER THAT. NO CAFFEINE FOR ABUSERS.' The dispenser audibly locks.",
        opts: [
            { 
                t: "Apologize to the machine", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "You whisper: 'Sorry, coffee machine.' A colleague walks in and sees you talking to an appliance. He backs out. But the lock opens!" 
            },
            { 
                t: "Pull the plug", 
                m: 10, f: -5, a: 10, c: 0, 
                r: "You kill the power. 'WE'LL MEET IN HELL...' the voice breaks off. After the reboot, it's dumb and silent again. But the coffee tastes faintly of motor oil." 
            },
            { 
                t: "Call an exorcist", 
                m: 5, f: 10, a: 0, c: 5, 
                r: "You report a 'possessed device'. IT laughs at you. You'd rather drink tea today." 
            }
        ]
    },
    {
        id: "cof_empty_2c",
        title: "The Note War",
        reqStory: "path_empty_note",
        text: "You come back an hour later. Your note is still there. But five new ones are stuck next to it: 'Your mom refills!', 'Font not CI-compliant!!', 'Paper waste!' and 'Whoever reads this is stupid'. The machine is still empty.",
        opts: [
            { 
                t: "Angrily tear off all notes", 
                m: 5, f: -5, a: 20, c: 0, 
                r: "You crumple the paper and throw it in the trash. The problem isn't solved, but the wall is clean again. Your blood pressure is at 180." 
            },
            { 
                t: "New note: 'LEARN GRAMMAR!'", 
                m: 5, f: 5, a: 5, c: 0, 
                r: "You correct the others' mistakes with a red pen. This is the most German thing you've done all year. You feel superior, but you're still thirsty." 
            },
            { 
                t: "Capitulate & go to the bakery", 
                m: 15, f: 10, a: -5, c: 0, 
                r: "This place is cursed. You leave the building and get real coffee. Peace costs you 3.50 Euros, but it's worth it." 
            }
        ]
    },
    {
        id: "cof_newbie_1",
        title: "The New Guy",
        text: "A young man in a suit stands lost in front of the machine. 'Uh, hello? I'm new in controlling. Do you need a card here, or is it free? And where's the soy milk?'",
        opts: [
            { 
                t: "Be nice & explain", 
                next: "path_newbie_friend", 
                m: 15, f: -5, a: 0, c: -5, 
                r: "He's grateful. 'Cool, thanks! I'm Torben. Finally a friendly face around here.' He subtly follows you to your desk." 
            },
            { 
                t: "Lie: 'It costs 5€ per cup, payable to me.'", 
                next: "path_newbie_scam", 
                m: 10, f: 10, a: -10, c: 10, 
                r: "He seems impressed by the professionalism. 'Oh, table service? Strong.' He presses a fiver into your hand. 'Receipt later, okay?'" 
            },
            { 
                t: "Stare and growl",
                m: 5, f: 0, a: 5, c: 0, 
                r: "He turns pale, backs away, and almost trips over the trash can. 'Alright! I... I'll drink water!' He runs off." 
            }
        ]
    },
    {
        id: "cof_newbie_2a",
        title: "Best Friends Forever",
        reqStory: "path_newbie_friend",
        text: "Torben suddenly stands next to your desk. He's holding two vegan smoothies. 'Hey Buddy! Thanks again for earlier. I thought we'd have lunch together? I wanted to brainstorm synergies between IT and controlling with you!'",
        opts: [
            { 
                t: "Decline: 'I eat in the server room.'", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "Torben nods eagerly. 'Cool! Secret Base! I'm coming with you!' You have to lock yourself in the bathroom to get rid of him." 
            },
            { 
                t: "Exploit: 'Only if you approve my expenses.'", 
                m: 10, f: 5, a: -5, c: -10, 
                r: "He winks. 'For my mentor? Anything! I'll book it as 'Team-Building'.' He talks for 60 minutes straight, but your budget is safe." 
            },
            { 
                t: "Send him to Chantal", 
                rep: { "Chantal": -10 },
                m: 5, f: 5, a: 0, c: 0, 
                r: "'Chantal in Marketing is looking for friends.' Torben's eyes light up. He leaves. Now you have peace, but Chantal will swear revenge." 
            }
        ]
    },
    {
        id: "cof_newbie_2b",
        title: "The Receipt",
        reqStory: "path_newbie_scam",
        text: "Torben intercepts you in the hallway. He's waving a form. 'Hey, about the 5 Euros for the coffee service... I need a cost center for accounting. Does it go under 'IT Infrastructure' or 'External Service'?'",
        opts: [
            { 
                t: "Lie: 'It's a black money fund for emergencies.'", 
                m: 5, f: 5, a: 0, c: 20, 
                r: "Torben whispers: 'Understood. Black Ops. Cool.' He tears up the form. 'My lips are sealed.' He now thinks you're a secret agent." 
            },
            { 
                t: "Give money back: 'It was just a joke.'", 
                m: 2, f: 0, a: 5, c: -5, 
                r: "He stares at you, bewildered. 'A joke? But... I already pre-entered it in SAP.' He's completely confused and leaves to make a reversal entry." 
            },
            { 
                t: "Run away", 
                m: 5, f: -5, a: -10, c: 10, 
                r: "You shout 'Server alarm!' and sprint away. Torben calls after you: 'I'll book it under miscellaneous!'" 
            }
        ]
    },
    {
        id: "cof_worker_1",
        title: "The Craftsman",
        text: "An external technician is repairing the water dispenser. His toolbox is open. A hammer glints at you.",
        opts: [
            { 
                t: "Steal the hammer", 
                loot: "hammer", 
                next: "path_worker_steal", 
                m: 5, f: 5, a: 0, c: 5, 
                r: "Zap, pocketed. A hammer is the ultimate debugging tool for printers. The technician just turned his back again." 
            }
        ]
    },
    {
        id: "cof_worker_2a",
        title: "Missing Person Report",
        reqStory: "path_worker_steal",
        text: "The water dispenser technician scratches his head and rummages in his box. 'Say... have you seen my 500g locksmith's hammer? It was just here? I can't put the casing back on without it.'",
        opts: [
            { 
                t: "Whistle innocently", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Nope. Maybe the cleaning crew took it?' The technician curses and goes to his van to get a replacement. You have the hammer, but a (very small) guilty conscience." 
            },
            { 
                t: "Return it: 'Just borrowed it'", 
                rem: "hammer",
                m: 5, f: 0, a: -5, c: 5, 
                r: "You hand it back. 'Just wanted to... check the balance.' He snatches it from your hand. 'Hands off, IT geek.' Opportunity missed." 
            },
            { 
                t: "Blame Kevin", 
                rep: { "Kevin": -10 },
                m: 5, f: 5, a: -5, c: -5, 
                r: "'The intern with the cap was here...' The technician nods knowingly. 'Kids these days. They steal everything.' He writes 'Theft by intern' on the report. Perfect crime." 
            }
        ]
    },
    {
        id: "cof_worker_2b",
        title: "Material Surplus",
        reqStory: "path_worker_talk",
        text: "The water dispenser technician wipes his hands. 'Finally, some normal people here. Say, I have some leftovers here I can't book anymore. Do you need anything for the workshop? The company's paying for it anyway.'",
        opts: [
            { 
                t: "Take zip ties", 
                loot: "zip_ties", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Here, take the whole pack.' Zip ties are the currency of IT. A good trade. (Inventory +1)" 
            },
            { 
                t: "Take duct tape", 
                loot: "tape", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "'The good gaffer tape. Sticks to everything, even mouths.' He laughs dirtily. You now have professional tape. (Inventory +1)" 
            },
            { 
                t: "Politely decline", 
                m: 2, f: 0, a: 0, c: 5, 
                r: "'I'm all set.' He shrugs and throws the stuff into his case. 'More for me.' You remain honest, but empty-handed." 
            }
        ]
    },
    {
        id: "cof_revolte_1",
        title: "The Coffee Machine Revolt",
        text: "The new 'Smart-Barista 3000' with AI chip blinks menacingly. The display reads: 'FEED ME'. It strictly refuses to grind the cheap discount beans and shows: 'ERROR: TASTE NOT FOUND'. The machine uprising begins in the break room.",
        opts: [
            { 
                t: "Percussive maintenance with the hammer",
                req: "hammer", 
                next: "path_revolte_hammer", 
                m: 10, f: 0, a: -20, c: 20, 
                r: "BAM! You aim a precise blow at the casing. The display now has a crack, but out of sheer terror, the machine immediately spits out black coffee. Violence is sometimes a solution after all." 
            },
            { 
                t: "Give in & buy expensive organic beans", 
                next: "path_revolte_buy", 
                m: 20, f: -5, a: 10, c: -5, 
                r: "You rush to the hipster roaster next door and invest 15€ out of your own pocket. The coffee tastes of unicorn tears and love, but you're broke for the rest of the month." 
            },
            { 
                t: "The classic: Plug out, plug in", 
                next: "path_revolte_reboot", 
                m: 5, f: 5, a: 5, c: 0, 
                r: "The machine shuts down... reboots... and immediately shows 'FEED ME' again. A malicious 8-bit laugh emanates from the speaker. It's smarter than you." 
            }
        ]
    },
    {
        id: "cof_revolte_2a",
        title: "Machine Love",
        reqStory: "path_revolte_hammer",
        text: "You pass the machine later. It purrs softly when it sees you. A pixel heart appears on the display with the text: 'MASTER RECOGNIZED'. In the dispenser lies a single, perfectly wrapped cookie, which it seems to have saved just for you.",
        opts: [
            { 
                t: "Triumphantly eat the cookie", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "The cookie tastes of submission and chocolate. Colleagues stare enviously because they only get error codes. You've tamed the beast." 
            },
            { 
                t: "Pet the machine", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You pat the dented casing. 'Good girl.' It purrs (or maybe it's the fan grinding). A wonderful, dysfunctional friendship." 
            }
        ]
    },
    {
        id: "cof_revolte_2b",
		char: "Dr. Wichtig",
        title: "Coffee Nobility",
        reqStory: "path_revolte_buy",
        text: "Since your bean donation, you've been treated like royalty. A delegation of colleagues intercepts you: 'That was the best stuff in years! We've collected money for you to get more.' They hold out a hat full of change.",
        opts: [
            { 
                t: "Keep the tip for yourself", 
                m: 10, f: 0, a: -5, c: 0, 
                r: "You take the money as a 'processing fee'. You're now the official caffeine dealer. Your reputation (and bank balance) rises." 
            },
            { 
                t: "Enjoy the glory", 
				rep: { "Dr. Wichtig": 2 },	
                m: 5, f: 10, a: -10, c: -5, 
                r: "You lean back. 'Only the best for my team.' Even the boss nods to you as he passes. Your radar drops to rock bottom." 
            }
        ]
    },
    {
        id: "cof_revolte_2c",
        title: "Root Access",
        reqStory: "path_revolte_reboot",
        text: "Since the hard reboot, the machine has been behaving differently. When you press 'Espresso', you suddenly land in a hidden admin menu. 'DEBUG MODE ACTIVE'. The physics of coffee are in your hands.",
        opts: [
            { 
                t: "Set everything to 'Maximum'", 
                m: 10, f: 5, a: -20, c: 0, 
                r: "You set strength to 110% and temperature to 'meltdown'. What comes out is liquid dynamite. You're wide awake and happy." 
            },
            { 
                t: "Deactivate the 'Laugh' sound", 
                m: 5, f: 0, a: -10, c: 0, 
                r: "Finally, peace. You reprogram the machine to say 'Hello Boss' every time you arrive instead. A small, subtle ego boost." 
            }
        ]
    },
    {
        id: "cof_meeting_1",
		char: "Chantal",
        title: "The Marketing Meeting",
        text: "Chantal and her crew are blocking the kitchen. They're brainstorming 'Feel-Good Management'. There are smoothies. But you need caffeine.",
        opts: [
            { 
                t: "Push your way through", 
                next: "path_meeting_push", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: -5, c: 10, 
                r: "You knocked over Chantal's smoothie. 'Oops.' You have coffee, but also enemies. A green puddle spreads." 
            },
            { 
                t: "Join in", 
                next: "path_meeting_join", 
                rep: { "Chantal": 15 },
                m: 45, f: 20, a: 10, c: -5, 
                r: "You had to talk about your feelings for 45 minutes. You now have a green smoothie and aggression." 
            },
            { 
                t: "Wait and glare", 
                next: "path_meeting_wait", 
                rep: { "Chantal": -5 },
                m: 15, f: 5, a: 5, c: 0, 
                r: "They completely ignore you. Eventually, they leave. Your coffee tastes bitter, but you got your way." 
            }
        ]
    },
    {
        id: "cof_meeting_2a",
		char: "Chantal",
        title: "The Bill",
        reqStory: "path_meeting_push",
        text: "A pink envelope lies on your desk. Subject: 'Damages Sneakers & Emotional Distress'. Chantal demands 50€ for cleaning her shoes, which you 'recently' ruined with smoothie.",
        opts: [
            { 
                t: "Pay (peace offering)", 
                rep: { "Chantal": 10 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You put 50€ in the envelope. It hurts, but the war is (maybe) over. Your wallet cries." 
            },
            { 
                t: "Shred the envelope", 
                rep: { "Chantal": -10 },
                m: 2, f: 0, a: -5, c: 10, 
                r: "The shredder devours the pink paper. Chantal will hate you, but she can't prove anything. Escalation accepted." 
            },
            { 
                t: "Counter-bill: 'Working hours'", 
                rep: { "Chantal": -15 },
                m: 10, f: 5, a: -10, c: 5, 
                r: "You bill her 150€ for 'IT support and psychological care'. Stalemate. Chantal no longer greets you." 
            }
        ]
    },
    {
        id: "cof_meeting_2b",
        title: "The 'Breath Ambassador'",
        reqStory: "path_meeting_join",
        text: "Since you showed such 'great energy' at the smoothie meeting, you've been appointed the IT 'Breath Ambassador' without asking. A package of incense sticks lies on your desk with the note: 'Spread love in the server room!'",
        opts: [
            { 
                t: "Accept the role", 
                rep: { "Chantal": 15 },
                m: 10, f: 20, a: -10, c: -5, 
                r: "You light a stick. From now on, you officially spend 2 hours a day on 'atmosphere maintenance'. The boss thinks it's a fire safety drill." 
            },
            { 
                t: "Pass the package to Kevin", 
                rep: { "Kevin": 5, "Chantal": -5 },
                m: 5, f: 5, a: 0, c: 0, 
                r: "'Here Kevin, for your apprenticeship.' Kevin is delighted. He's now fumigating the storage room. You're off the hook." 
            },
            { 
                t: "Throw everything in the trash", 
                rep: { "Chantal": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "Gone with it. You want to be an admin, not a guru. Chantal later asks disappointedly about your aura." 
            }
        ]
    },
    {
        id: "cof_meeting_2c",
		char: "Chantal",
        title: "The Negative Example",
        reqStory: "path_meeting_wait",
        text: "You walk past the meeting room. Chantal is giving a presentation on 'Toxic Vibes'. On the screen is a (secretly taken) photo of YOU, glaring angrily at the coffee machine. Subtitle: 'The Energy Vampire'.",
        opts: [
            { 
                t: "Burst in: 'That's defamation!'", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: 20, c: 10, 
                r: "You make a scene. This unfortunately confirms her thesis exactly. 'See? Aggression!' Chantal shouts. You lost." 
            },
            { 
                t: "Take a photo & use as profile pic", 
                rep: { "Chantal": 3 },
                m: 5, f: 10, a: -10, c: 5, 
                r: "You embrace the role. Your new Teams profile picture is the 'Energy Vampire'. Colleagues find it funny. Chantal is confused." 
            },
            { 
                t: "Flip the breaker", 
                rep: { "Chantal": -15 },
                m: 10, f: -5, a: -5, c: 0, 
                r: "Zap. Projector off. Presentation over. You whistle and walk on. No one can prove it was you." 
            }
        ]
    },
    {
        id: "cof_milk_1",
        title: "High Noon in the Kitchen",
        text: "Colleague Bernd (the guy who microwaves fish) reaches for the very last carton of long-life milk. Your hand lands on it at the same moment. Your eyes meet. The air crackles. In the background, quiet Western music plays.",
        opts: [
            { 
                t: "Demand a duel: Rock-Paper-Scissors", 
                next: "path_milk_duel", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Rock beats scissors. A clean victory! You claim the trophy. Bernd retreats, defeated, muttering something about 'best of three', but you've already opened the milk." 
            },
            { 
                t: "Be generous & let him go first", 
                next: "path_milk_yield", 
                m: 2, f: 0, a: 10, c: -5, 
                r: "You let go. Karma points! But then the shock: Bernd pours the entire liter into his fruit tea. All of it. To the last drop. What a monster." 
            },
            { 
                t: "Scorched earth tactic: Crush the carton", 
                next: "path_milk_destroy", 
                m: 2, f: 0, a: -10, c: 10, 
                r: "You squeeze. Hard. SPLASH! The carton bursts and a white tsunami pours over the kitchen floor. You scream: 'IF I CAN'T HAVE IT, NO ONE CAN!'" 
            }
        ]
    },
    {
        id: "cof_milk_2a",
        title: "The Rematch",
        reqStory: "path_milk_duel",
        text: "Bernd intercepts you at the copier. He seems restless and holds a coin in his hand. 'The milk thing was luck, Müller. I demand satisfaction. Heads or tails for the last cookie in the meeting room?'",
        opts: [
            { 
                t: "Decline: 'Luck is part of skill'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You leave him standing there. Bernd mutters something about 'chicken', but you know: you should quit while you're ahead." 
            },
            { 
                t: "Accept (Gamble)", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "The coin flips. You win again. Bernd almost collapses. You are now officially the department's lucky charm." 
            }
        ]
    },
    {
        id: "cof_milk_2b",
        title: "Calcium Deficiency",
        reqStory: "path_milk_yield",
        text: "You meet Bernd again. He looks extremely satisfied and pats his stomach. 'Thanks again for the milk. My tea was especially creamy today. You have to treat yourself sometimes, right?'",
        opts: [
            { 
                t: "Sarcasm: 'Watch your arteries'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Bernd just laughs. 'I have bones of steel!' Your generosity is clearly being interpreted as weakness here." 
            },
            { 
                t: "Lie: 'It was actually expired'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "Bernd's face turns green. 'What? Why didn't you say so earlier?!' He runs towards the bathroom. Revenge is a dish best served cold." 
            }
        ]
    },
    {
        id: "cof_milk_2c",
        title: "The Embargo",
        reqStory: "path_milk_destroy",
        text: "A new sign (laminated!) hangs on the kitchen door: 'Due to willful destruction of dairy products, the refrigerator is now under video surveillance. Signed, Facility Management.' All colleagues now have to register their milk at reception.",
        opts: [
            { 
                t: "Nod proudly", 
                m: 5, f: 0, a: -10, c: 10, 
                r: "You've made a statement. It's inconvenient for everyone, but no one will dare take your milk again. Respect through fear." 
            },
            { 
                t: "Act innocent: 'Who would do such a thing?'",
                rep: { "Kevin": -5 }, 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Colleagues whisper. 'Definitely Kevin.' You nod eagerly. Scapegoats are important for workplace morale." 
            }
        ]
    },
    {
        id: "cof_juergen_1",
        title: "The Chatterbox",
        text: "Jürgen from Sales is blocking the coffee machine. He grins broadly at you: 'Well, colleague? Taking a break too? You know, I absolutely MUST tell you about my new robotic lawnmower. It now has GPS-guided edge mode!'",
        opts: [
            { 
                t: "Put on noise-cancelling headphones", 
                req: "headphones", 
                next: "path_juergen_nc", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You put them on, nod politely, and start Norwegian Black Metal. Jürgen's mouth just moves silently now. Heavenly peace." 
            },
            { 
                t: "Politely listen & die internally", 
                next: "path_juergen_listen",
                m: 20, f: 10, a: 15, c: 0, 
                r: "20 minutes later, you know the difference between a mulch wedge and side discharge. A part of your soul has left your body. Jürgen threatens: 'Tomorrow I'll tell you about my heat pump!'" 
            },
            { 
                t: "Scream: 'OH GOD, THE SERVER!' & run", 
                next: "path_juergen_run",
                m: 2, f: 0, a: 5, c: 0, 
                r: "You fake a fatal system crash and sprint out of the kitchen. You don't have coffee, but you escaped Jürgen's monologue. Freedom tastes good too." 
            }
        ]
    },
    {
        id: "cof_juergen_2a",
        title: "Silent Conversation",
        reqStory: "path_juergen_nc",
        text: "Jürgen suddenly stands at your desk. You still have your headphones on. He gesticulates wildly and is obviously asking you something. You hear absolutely nothing but double-bass drums.",
        opts: [
            { 
                t: "Just give a 'thumbs up'", 
                m: 5, f: -5, a: 10, c: 5,
                r: "You grin and give a 👍. Jürgen beams, pats you on the shoulder, and leaves. 10 minutes later, an email arrives: 'Thanks for helping with the move on Saturday!'. Damn it." 
            },
            { 
                t: "Lift headphones: 'HUH?!'", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "You lift an earcup. Jürgen: '...if you could check my printer... oh never mind, you're busy.' He leaves." 
            },
            { 
                t: "Shake head (Say no)", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You shake your head sadly. Jürgen looks concerned: 'Oh, I didn't know that. My condolences.' He quietly walks away. You have no idea what it was about, but it worked." 
            }
        ]
    },
    {
        id: "cof_juergen_2b",
        title: "Annual Performance Figure",
        reqStory: "path_juergen_listen",
        text: "You just wanted to quickly get some water. Jürgen is already lurking: 'Ah! There you are! I promised you the data sheets for the flow temperature. Take a look here on my tablet...'",
        opts: [
            { 
                t: "Talk shop (Correct errors)", 
                m: 30, f: -10, a: 15, c: 0,
                r: "You just wanted to be a know-it-all for a moment. But now you're stuck in a 30-minute debate about geothermal vs. air-water. You're right, but you also lost your lunch break." 
            },
            { 
                t: "Play dead (Stare)", 
                m: 10, f: 10, a: 10, c: 0, 
                r: "You stare right through him. Jürgen talks for 10 minutes straight, then realizes you're not blinking, and leaves, irritated. 'I'll send you the PDF...'" 
            },
            { 
                t: "Escape: 'Phone's ringing!' (Phantom call)", 
                m: 2, f: 5, a: 0, c: 5, 
                r: "You hold your silent phone to your ear: 'Yes, Boss? Right away!' and run off. Jürgen calls after you: 'We'll talk about the buffer tank later!'" 
            }
        ]
    },
    {
        id: "cof_juergen_2c",
        title: "Coffee Service",
        reqStory: "path_juergen_run",
        text: "Jürgen stands at your desk and places a steaming cup down. 'Here. You left so quickly earlier because of the server crash. Poor guy. Sugar, no milk, just how you like it.'",
        opts: [
            { 
                t: "Accept gratefully & drink", 
                m: 15, f: -5, a: -10, c: 0, 
                r: "The coffee awakens your spirits (+Energy). Unfortunately, Jürgen sits on your desk: 'So, where was I... right, the robotic lawnmower!' You listen because you're in his debt." 
            },
            { 
                t: "Suspicious: 'What do you want?'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Jürgen laughs: 'Just being nice! Man, you IT guys are always so paranoid.' He shakes his head and leaves. The coffee tastes of guilt, but it's delicious." 
            },
            { 
                t: "Decline: 'I only drink Red Bull.'", 
                req: "energy",
                m: 5, f: -20, a: 0, c: 0,
                r: "You pull the can from your bag. *HISS*. 'This is my fuel.' You chug the thing in three gulps. Jürgen recoils in shock: 'Okay, okay, calm down...' He disappears before your heart palpitations start." 
            }
        ]
    },
    {
        id: "cof_loot_1",
        title: "Repair Kit",
        text: "The janitor left some materials lying around. It's unattended. A rare sight in this office.",
        opts: [
            { 
                t: "Take duct tape", 
                loot: "tape", 
                next: "path_loot_tape", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "An almost full roll of gaffer tape. Always useful. You quickly make it disappear. (Inventory +1)" 
            },
            { 
                t: "Take zip ties", 
                loot: "zip_ties", 
                next: "path_loot_zip", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "A bundle of zip ties. Handy. The black kind, UV-resistant. A good catch. (Inventory +1)" 
            }
        ]
    },
    {
        id: "cof_loot_2a",
		char: "Egon",
        title: "The Search for Gold",
        reqStory: "path_loot_tape",
        text: "Egon comes into the kitchen, cursing. 'Hey! Have you seen my gaffer tape? The trash can lid is ripped off and I need to tape it! That was the good roll!'",
        opts: [
            { 
                t: "Lie: 'Nope, no idea.'",
                rep: { "Egon": -2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "Egon kicks the trash can. 'Damn thieves around here! Everything has to be chained down!' He stomps off angrily. You have the tape, but Egon is mad." 
            },
            { 
                t: "Return it: 'It was on the floor.'", 
                rem: "tape",
                rep: { "Egon": 5 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "You pull the roll from your bag. 'Just wanted to... pick it up.' Egon snatches it from your hand. 'Yeah, yeah. Hands off.' (Item removed)" 
            },
            { 
                t: "Give a tip: 'Use chewing gum.'",
                rep: { "Egon": -5 }, 
                m: 5, f: 5, a: 10, c: 0, 
                r: "Egon stares at you. 'Chewing gum? Am I MacGyver?' He shakes his head at the 'office studs' and leaves." 
            }
        ]
    },
    {
        id: "cof_loot_2b",
		char: "Egon",
        title: "Unrestrained",
        reqStory: "path_loot_zip",
        text: "The dishwasher hose has come loose. Egon kneels in front of it. 'I'm missing my zip ties! I had a whole bundle! Now I have to hold this until the glue dries (30 minutes).'",
        opts: [
            { 
                t: "Feigned sympathy & leave", 
                rep: { "Egon": -2 },
                m: 2, f: 5, a: 0, c: 0, 
                r: "'Good luck, Egon!' You let him suffer. You need the ties more for your cable management at your desk." 
            },
            { 
                t: "Donate ties", 
                rem: "zip_ties",
                rep: { "Egon": 10 }, 
                m: 10, f: -5, a: -10, c: 0, 
                r: "You give him the ties back. 'Oh, thanks, kid! You're saving my back.' Egon owes you one. (Item removed)" 
            },
            { 
                t: "Sarcasm: 'Don't you have tape?'",
                rep: { "Egon": -5 }, 
                m: 5, f: 5, a: 10, c: 0, 
                r: "'Tape won't hold up to the heat, expert!' He's annoyed. You had your fun and your zip ties." 
            }
        ]
    },
    {
        id: "cof_table_1",
        title: "Wobbly Table",
        text: "The high table in the kitchen is extremely wobbly. The coffee almost spills. It's that one millimeter that drives you insane.",
        opts: [
            { 
                t: "Tighten screws (Brutally)", 
                req: "screw", 
                next: "path_table_screw", 
                m: 10, f: -5, a: -5, c: 0, 
                r: "You tighten the screws so hard into the floor that the metal grinds. The table doesn't move a micrometre anymore. It's now one with the foundation." 
            },
            { 
                t: "Put a coaster underneath", 
                next: "path_table_coaster", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "The classic. An old beer coaster ('Gasthof zur Post') wedged under the leg. Peace at last." 
            },
            { 
                t: "Kick off a table leg", 
                req: "hammer", 
                next: "path_table_kick", 
                m: 5, f: 0, a: -20, c: 20, 
                r: "You swing the hammer. CRASH! The leg buckles, the table collapses. 'There. Nothing's wobbly now,' you say contentedly." 
            }
        ]
    },
    {
        id: "cof_table_2a",
		char: "Egon",
        title: "For Eternity",
        reqStory: "path_table_screw",
        text: "The janitor stands red-faced and sweating at the table. He tugs at it with both hands. 'Who welded this thing down?! I need to mop here! It won't move an inch!'",
        opts: [
            { 
                t: "Proudly: 'That was quality work'", 
                rep: { "Egon": -5 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "Egon stares at you. 'You drilled through the screed into the underfloor heating!' Oops. But hey, the table is stable." 
            },
            { 
                t: "Flee", 
                rep: { "Egon": -2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "You whistle innocently and leave. Behind you, you hear Egon grabbing a crowbar. The table wins." 
            }
        ]
    },
    {
        id: "cof_table_2b",
		char: "Kevin",
        title: "Low-Rider",
        reqStory: "path_table_coaster",
        text: "The coaster is gone. Now the table is only 60cm high. Kevin stands proudly next to it, a saw in his hand. 'The coaster was annoying. I just sawed off the other three legs. Nothing wobbles anymore!'",
        opts: [
            { 
                t: "Praise him: 'Genius!'", 
                rep: { "Kevin": 5 },
                m: 5, f: 10, a: -10, c: -5, 
                r: "Kevin beams. You now drink coffee while squatting. It looks like kindergarten, but it's a different kind of ergonomics." 
            },
            { 
                t: "Ask him: 'And if it wobbles again?'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Kevin thinks for a moment. 'Then I'll keep sawing.' You realize: In a week, we'll be eating off the floor." 
            }
        ]
    },
    {
        id: "cof_table_2c",
		char: "Chantal",
        title: "The Memorial",
        reqStory: "path_table_kick",
        text: "The destroyed table is still there. But now it's surrounded by red caution tape. A sign from Chantal stands in front of it: 'DECONSTRUCTED WORKSPACE – An installation about the collapse of the performance society.'",
        opts: [
            { 
                t: "Claim to be the artist", 
                rep: { "Chantal": 10 },
                m: 10, f: 20, a: -10, c: 10, 
                r: "You stand next to it and nod profoundly. 'Yes, the hammer symbolized digital transformation.' Chantal takes photos for LinkedIn. You're a visionary now." 
            },
            { 
                t: "Kick it", 
                rep: { "Chantal": -5 },
                m: 5, f: -5, a: -10, c: 15, 
                r: "You kick the pile of junk. It clatters. Onlookers applaud. 'So brave! So radical!' The world is crazy." 
            }
        ]
    },
    {
        id: "cof_sticky_1",
        title: "The Sticky Button",
        text: "Catastrophe! The vital 'Double Espresso' button is stuck. A brown, syrupy rim reveals: Someone spilled sweets here. The button won't budge an inch.",
        opts: [
            { 
                t: "Surgical intervention with a screwdriver", 
                req: "screw", 
                next: "path_sticky_fixed",
                m: 5, f: 0, a: -5, c: 0, 
                r: "With the precision of a watchmaker, you pry out the button, scrape away the 'sugar concrete', and put it back in. *Click*. A beautiful sound." 
            },
            { 
                t: "Frustration solution: Just hit it", 
                next: "path_sticky_broken",
                m: 2, f: 0, a: 5, c: 5, 
                r: "BAM! CRACK! The button breaks off and flies in a high arc under the refrigerator. Oops. Now the only choice is between 'Hot Water' and 'System Error'." 
            },
            { 
                t: "Give up & drink tea", 
                next: "path_sticky_tea",
                m: 2, f: -5, a: 0, c: 0, 
                r: "You resign yourself and grab a peppermint tea bag. It tastes of defeat and toothpaste." 
            }
        ]
    },
    {
        id: "cof_sticky_2a",
        title: "The Maintenance Backlog",
        reqStory: "path_sticky_fixed",
        text: "Since you were the only one to fix the machine, you're now considered the 'Coffee Commissioner'. A line of colleagues stands outside your office. 'Can you take a look? The milk isn't frothing clockwise!'",
        opts: [
            { 
                t: "Put up a sign: 'IT, not Café!'", 
                m: 5, f: 0, a: 10, c: 5, 
                r: "You send everyone away. They grumble, but you have your peace. Competence is sometimes a curse." 
            },
            { 
                t: "Offer service for a fee", 
                m: 10, f: 10, a: -10, c: 0, 
                r: "You demand chocolate for every repair. Your desk is now a candy store. You have to set priorities." 
            }
        ]
    },
    {
        id: "cof_sticky_2b",
        title: "The Sabotage Investigation",
        reqStory: "path_sticky_broken",
        text: "A notice hangs on the machine: 'Due to vandalism (broken button), only filter coffee from the pot is available.' The mood in the office is aggressive. Everyone is looking for the culprit.",
        opts: [
            { 
                t: "Complain loudly: 'Unbelievable!'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You blend in with the crowd and rant against 'these hooligans'. No one suspects you. The disguise is perfect." 
            },
            { 
                t: "Blame Kevin", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: -5, c: -5, 
                r: "It's always Kevin. He now has to make the filter coffee. Your conscience pricks you briefly, but the espresso was worth the sacrifice." 
            }
        ]
    },
    {
        id: "cof_sticky_2c",
		char: "Gabi",
        title: "The Tea Drinker",
        reqStory: "path_sticky_tea",
        text: "You're seen with your teacup. The rumor spreads: 'Müller doesn't drink coffee anymore. Is he sick? Burnout? Or pregnant?' Colleagues suddenly treat you cautiously.",
        opts: [
            { 
                t: "Exploit the rumor", 
                rep: { "Gabi": 5 },
                m: 10, f: 10, a: -10, c: 0, 
                r: "You cough softly and look pained. Gabi brings you cookies. 'For your nerves.' Life is good as an alleged invalid." 
            },
            { 
                t: "Clarify: 'Button was just broken'", 
                rep: { "Gabi": -2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Oh.' The magic is over. Gabi takes the cookies back. Reality is harsh." 
            }
        ]
    },
    {
        id: "cof_hack_1",
        title: "The Service Port",
        text: "You discover a USB maintenance port on the back of the coffee machine. The display shows 'INSERT SERVICE KEY'. It's tempting. Very tempting.",
        opts: [
            { 
                t: "Use USB stick (Load script)", 
                req: "usb_stick", 
                next: "path_hack_root", 
                m: 5, f: 10, a: -10, c: 0, 
                r: "HACK SUCCESS! You've activated 'Developer Mode'. Coffee now runs twice as fast and is free. You feel like Neo in the Matrix." 
            },
            { 
                t: "Wildly press buttons (Konami Code?)", 
                next: "path_hack_glitch", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "Up, Up, Down, Down, Left, Right... The display flickers wildly. It beeps three times loudly. You hope that was a 'cheat code' and not self-destruction." 
            }
        ]
    },
    {
        id: "cof_hack_2a",
        title: "God Mode",
        reqStory: "path_hack_root",
        text: "Since your hack, the machine greets you with 'HELLO ADMIN' and plays an 8-bit melody. The boss stands next to it, staring at his display, which only shows 'PLEASE INSERT COIN'. He looks suspiciously at your overflowing free cup.",
        opts: [
            { 
                t: "Boast: 'You just have to caress the machine'", 
                m: 5, f: 5, a: -5, c: 10, 
                r: "The boss caresses the machine. Nothing happens. He feels fooled. You grin into your coffee. It was worth it." 
            },
            { 
                t: "Distract: 'That's a firmware bug!'", 
                m: 10, f: 0, a: 10, c: 0, 
                r: "'Really? Take care of it, Müller!' He leaves. Phew. You keep your privileges, but now you have to pretend to work." 
            }
        ]
    },
    {
        id: "cof_hack_2b",
        title: "The Language Barrier",
        reqStory: "path_hack_glitch",
        text: "Your key combination apparently changed the language settings. The menu is now entirely in Mandarin. A line of desperate colleagues stands in front of it. Kevin accidentally got 'Hot Water with Lemon' instead of 'Cocoa'.",
        opts: [
            { 
                t: "Use Google Translate App", 
                m: 5, f: 5, a: -10, c: -10, 
                r: "You hold your phone up to it and save the day. You're the hero, even though you caused the problem. That's true IT consulting." 
            },
            { 
                t: "Claim: 'This is a cyber attack from China!'", 
                m: 5, f: 0, a: 10, c: 15, 
                r: "Panic breaks out. The boss wants to pull the internet cable. You might have exaggerated a bit, but no one suspects you." 
            }
        ]
    },
    {
        id: "cof_chewing_1",
        title: "The Acoustic Torture",
        text: "Colleague Sabine stands right next to you. In her hand: A crisp, juicy Granny Smith. She bites into it. *CRUNCH*. Then she chews. With her mouth wide open. *SLURP... SLURP... GULP*. It sounds like someone dipping rubber boots into a bucket of mayonnaise.",
        opts: [
            { 
                t: "Immediately activate noise-cancelling", 
                req: "headphones", 
                next: "path_chewing_nc", 
                m: 2, f: 5, a: -10, c: 0, 
                r: "Click. The world goes silent. Sabine moves her jaw like a ruminant and is obviously saying something to you, but all you hear is gentle ocean waves. You just nod politely and smile." 
            },
            { 
                t: "Almost crush the stress ball", 
                req: "stressball", 
                next: "path_chewing_ball", 
                m: 10, f: 0, a: -5, c: 0, 
                r: "You channel all your hatred into the red foam ball. Your knuckles turn white. The ball whimpers softly under the pressure. Sabine chews on, unimpressed." 
            },
            { 
                t: "Passive-aggressive comment", 
                next: "path_chewing_rude",
                m: 5, f: 0, a: 10, c: 5, 
                r: "You ask loudly: 'Did you swallow a microphone, or are you practicing for a horror movie?' Sabine freezes with a full mouth. Deadly silence. The mood is in the basement." 
            }
        ]
    },
    {
        id: "cof_chewing_2a",
        title: "The Blind Nod",
        reqStory: "path_chewing_nc",
        text: "Later in the day, Sabine comes to you beaming. 'Great that you're doing that! I told everyone you volunteered to defrost the fridge. You nodded so nicely in the kitchen earlier!'",
        opts: [
            { 
                t: "Clear up the misunderstanding", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "Sabine bursts into tears. 'And I thought you were helpful!' Now you're the office jerk, even though you just wanted to listen to music." 
            },
            { 
                t: "Clean, gritting your teeth", 
                m: 15, f: -5, a: 10, c: -10, 
                r: "You defrost the freezer. It's cold, wet, and disgusting. Lesson learned: Never nod when you can't hear anything." 
            }
        ]
    },
    {
        id: "cof_chewing_2b",
        title: "Material Fatigue",
        reqStory: "path_chewing_ball",
        text: "You find red crumbs in your bag. Your stress ball didn't survive the battle against Sabine's chewing noises. It burst and spread its foamy contents all over your laptop.",
        opts: [
            { 
                t: "Try to glue it", 
                req: "tape", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You wrap duct tape around the remains. It now looks like a red potato that had an accident. Barely works anymore." 
            },
            { 
                t: "Hold a funeral (Throw away)", 
                rem: "stressball",
                m: 2, f: 0, a: 5, c: 0, 
                r: "You throw the remains in the trash. He died a hero. Rest in peace, little ball." 
            }
        ]
    },
    {
        id: "cof_chewing_2c",
        title: "The Fruit War",
        reqStory: "path_chewing_rude",
        text: "Sabine has sworn revenge. Since your comment, she demonstratively only eats soft things when you're around – but glares at you while doing so. Today, a banana lies on your keyboard. A threat?",
        opts: [
            { 
                t: "Eat the banana (Show dominance)", 
                m: 10, f: 5, a: -10, c: 0, 
                r: "You peel the banana and eat it without breaking eye contact. Sabine is confused and retreats. Victory." 
            },
            { 
                t: "Get scared", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "Who knows where that banana has been? You only touch it with a tissue and dispose of it. The psychological war has begun." 
            }
        ]
    },
    {
        id: "cof_gossip_1",
        title: "Gossip at the Water Cooler",
        text: "You hear Ms. Gräte whisper: 'The boss was at a 'Positive Leadership' seminar yesterday. He completely freaks out now if anyone says the word 'problem'. He only wants to hear 'challenge'. Whoever says 'problem' immediately gets a termination threat.'",
        opts: [
            { 
                t: "Join the conversation", 
                next: "path_gossip_caught", 
				rep: { "Dr. Wichtig": -2 },	
                m: 10, f: 5, a: -5, c: 10,
                r: "You nod eagerly and gossip along. Suddenly, someone clears their throat behind you. The boss stares at you, taps his watch, and notes your name. The group disperses in a panic." 
            },
            { 
                t: "Ignore and get coffee", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You tune them out. 'Not my circus, not my monkeys.' You grab your cup and silently return to your desk. Better safe than sorry." 
            }
        ]
    },
    {
        id: "cof_gossip_2a",
		char: "Dr. Wichtig",
        title: "The Mindset Interrogation",
        reqStory: "path_gossip_caught",
        text: "The boss summons you to his office. He smiles strained. 'Müller, I heard you in the kitchen earlier. I want to make sure we're 'aligned'. How is the current project going? Are there... difficulties?' He waits expectantly for a certain word.",
        opts: [
            { 
                t: "Be honest: 'Yes, we have a huge problem.'", 
				rep: { "Dr. Wichtig": -10 },	
                m: 5, f: 0, a: 10, c: 20, 
                r: "His smile freezes. 'PROBLEM?! We have no problems! We only have thorns in the eye of success!' He gives you a 20-minute lecture on positivity. You now have a headache." 
            },
            { 
                t: "Bullshit bingo: 'Only exciting challenges!'", 
				rep: { "Dr. Wichtig": 5 },	
                m: 10, f: 5, a: -10, c: -10, 
                r: "The boss exhales in relief. 'Excellent! That's the spirit! Here, take a cookie.' He tosses you a individually wrapped cookie. You're safe." 
            },
            { 
                t: "Exaggerate: 'It's a fantastic growth opportunity!'", 
				rep: { "Dr. Wichtig": 2 },	
                m: 5, f: 10, a: -5, c: 0, 
                r: "The boss looks briefly confused, then nods approvingly. 'Wow. That's even more positive than my coach. Keep it up!' He makes a note: 'Müller = Visionary'." 
            }
        ]
    },
    {
        id: "cof_chef_title",
        title: "Title Fights in the Canteen",
        text: "You hear loud shouting from the kitchen. The canteen chef waves a ladle wildly: 'I'm not just a mere COOK! I'm a *Senior Nutrition Artist* and *Food Experience Manager*! Anyone who calls me 'cook' again gets oversalted soup until retirement!'",
        opts: [
            { 
                t: "Listen with amused grin", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "'Nutrition Artist'... hmm. If he's an artist, why does the bolognese always taste like cardboard? You'd rather keep that thought to yourself." 
            },
            { 
                t: "Provocation: 'Mr. Cook? The soup is cold!'", 
                m: 5, f: 0, a: 10, c: 5, 
                r: "Dead silence. He slowly turns around, ladle firmly gripped. His eyes narrow to slits. You're now on his blacklist. Your next schnitzel will be shoe-leather quality." 
            },
            { 
                t: "Suck up: 'Good morning, Maestro!'", 
                m: 10, f: 5, a: -5, c: 0, 
                r: "He pauses, adjusts his cap, and smiles flattered. 'Finally, someone with culture!' You get an extra large portion of pudding today." 
            }
        ]
    },
    {
        id: "cof_premium_hack_1",
        title: "The 'Gold' Mode",
        text: "You stand in front of the machine. Your stomach growls. The display reads: 'PREMIUM ROAST - FOR EXECUTIVES ONLY (Card required)'. For the common folk, there's only 'water with brown coloring' for 2.50€.",
        opts: [
            { 
                t: "Pay 2.50€ (Capitulation)", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You drop in the money. The coffee tastes of burnt tires and defeat. You feel robbed, but at least you're awake." 
            },
            { 
                t: "Espresso + Cover sensor",
                next: "path_premium_audit",
                m: 5, f: 10, a: -20, c: 0, 
                r: "The machine beeps softly. The display shows: 'WELCOME MASTER'. Golden liquid flows into your cup. It's the best coffee of your life. Free." 
            },
            { 
                t: " 'Pay' with hammer", 
                req: "hammer", 
                next: "path_premium_broken",
                m: 5, f: 0, a: -10, c: 20, 
                r: "CLANG! You hit the coin slot. The casing dents, but a 50-cent coin falls out. No coffee, but you made a profit." 
            },
            { 
                t: "Wildly press buttons", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "ERROR 404. The machine locks for 5 minutes. You stare at the loading bar. Well done." 
            }
        ]
    },
    {
        id: "cof_premium_hack_2a",
        title: "The Reckoning",
        reqStory: "path_premium_audit",
        text: "An all-staff email from Controlling: 'Attention! We have a discrepancy in premium coffee inventory. 1 cup is missing. Consumption will now be cross-referenced with security cameras.'",
        opts: [
            { 
                t: "Sweat nervously", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You just hope the camera resolution was too poor. The coffee was worth it, but you don't dare go into the kitchen today." 
            },
            { 
                t: "Proactively lie: 'The machine was leaking!'", 
                m: 5, f: 5, a: 0, c: 10, 
                r: "You hit 'Reply All'. 'Saw coffee water leaking. Inform tech support!' Everyone thanks you for your vigilance. Genius." 
            }
        ]
    },
    {
        id: "cof_premium_hack_2b",
		char: "Egon",
        title: "Vandalism Alert",
        reqStory: "path_premium_broken",
        text: "The janitor stands in front of the dented machine. He holds up a composite sketch that suspiciously resembles you (but with a mustache). 'Whoever did this... I'll find them. No one dents my lady.'",
        opts: [
            { 
                t: "Subtly slip away", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You back out of the room. You'd rather not tell anyone about the 50 cents." 
            },
            { 
                t: "Blame the delivery driver", 
                rep: { "Egon": 2 },
                m: 5, f: 5, a: -5, c: 5, 
                r: "'That was already like that on delivery, Egon!' Egon scratches his head. 'True... the boxes looked rough.' You're off the hook." 
            }
        ]
    },
    {
        id: "cof_iot_fail_1",
        title: "The Dangerous IoT Upgrade",
        text: "You can't believe your eyes: Someone rigged a cheap 'Smart Plug' (brand 'China-Export') between the outlet and the coffee machine. The casing is already melting, it's sparking blue, and smells acridly of burnt plasticizer. Fire hazard level red.",
        opts: [
            { 
                t: "Life-threatening: Immediately pull the plug", 
                next: "path_iot_sabotage", 
                m: 10, f: -5, a: 30, c: 30, 
                r: "ZAP! A shower of sparks. You saved the building. Then the Marketing Manager storms in, beet red: 'MY PROTOTYPE! I worked for weeks on the blockchain-based 'Coffee-Cloud'! You Luddite!'" 
            },
            { 
                t: "Wait & drink Coke", 
                next: "path_iot_fire", 
                m: 5, f: 10, a: -10, c: 0, 
                r: "Not your hardware, not your fire. You hiss open a Coke and watch. POP! A flash of flame. Then the sprinkler system activates, turning the hallway into a wetland." 
            }
        ]
    },
    {
        id: "cof_iot_fail_2a",
        title: "The Crypto War",
        reqStory: "path_iot_sabotage",
        text: "The Marketing Manager has filed an official complaint. He demands damages for the 'lost profit' of his planned 'Coffee-Coin' ICO, which you prevented by pulling the plug.",
        opts: [
            { 
                t: "Read him the VDE regulations", 
                m: 5, f: -5, a: 10, c: 5, 
                r: "You quote paragraphs about fire safety. He falls asleep after 2 minutes. The complaint is dropped due to 'boredom'." 
            },
            { 
                t: "Counter-attack: Inform Egon", 
                rep: { "Egon": 5 },
                m: 10, f: -5, a: -10, c: 10, 
                r: "You snitch to the janitor. Egon storms into the Marketing office with bolt cutters. 'No unauthorized devices!' The screaming can be heard on the 3rd floor." 
            }
        ]
    },
    {
        id: "cof_iot_fail_2b",
        title: "The Wetland",
        reqStory: "path_iot_fire",
        text: "The fire department is gone, but the kitchen is flooded. The Marketing Manager stands weeping in front of his charred smart plug. 'Why didn't anyone say anything?!'",
        opts: [
            { 
                t: "Shrug: 'Was in a meeting'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "The perfect excuse. No one can prove you were standing there with a Coke. You stay dry." 
            },
            { 
                t: "Mockingly: 'Is this liquid cooling?'", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "Bad joke. But it had to be done. The Marketing Manager now hates you, but the IT department celebrates you as a legend." 
            }
        ]
    },
{
        id: "cof_descaling_1",
        title: "Limescale Infarction",
        text: "The coffee machine blinks aggressively red: 'SYSTEM CALCIFIED - PLEASE CLEAN'. Coffee now drips at a rate of one drop per second, like a leaky gutter. The pump groans audibly.",
        opts: [
            { 
                t: "Heroically start the cleaning process", 
                next: "path_descale_hero", 
                m: 10, f: -10, a: 40, c: 0, 
                r: "You press the button. A fatal error. The display shows: 'Cleaning in progress... Time remaining: 45 minutes'. A furious queue immediately forms behind you. 'Great, Müller! Now no one gets anything!' You're booed." 
            },
            { 
                t: "Stick a 'DEFECTIVE' sign & disappear", 
                next: "path_descale_fake", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You stick a note over the display and quickly slip away. Colleagues sigh in disappointment and shuffle back to work. You haven't solved the problem, but you've successfully delegated it." 
            },
            { 
                t: "Ignore & let it drip", 
                next: "path_descale_ignore", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You stoically stare at the dispenser. Drip... Drip... After 5 minutes, you have half a cup of lukewarm, calcified sludge. It tastes of misery, but it contains caffeine." 
            }
        ]
    },
    {
        id: "cof_descaling_2a",
        title: "Acid Attack",
        reqStory: "path_descale_hero",
        text: "The descaling is done, but something's not right. The first colleague to get a coffee spits it across the room. 'BLECH! That tastes like battery acid! Who didn't rinse it?!'",
        opts: [
            { 
                t: "Whistle innocently", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You look away. 'Definitely a software bug.' The colleague rinses his mouth at the water cooler. Close call." 
            },
            { 
                t: "Claim: 'That's the new Citrus Roast'", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "The colleague cautiously tries again. 'Really? Hmm... refreshing aftertaste.' You've just set a disgusting trend." 
            }
        ]
    },
    {
        id: "cof_descaling_2b",
		char: "Egon",
        title: "Egon Uncovers",
        reqStory: "path_descale_fake",
        text: "Janitor Egon waves your 'DEFECTIVE' note through the hallway. 'Which joker was that? The machine just needed descaling! I'm not your babysitter!' He's looking for the culprit.",
        opts: [
            { 
                t: "Blame Kevin", 
                rep: { "Kevin": -5, "Egon": 5 },
                m: 5, f: 0, a: -5, c: -5, 
                r: "'The intern was in the kitchen last.' Egon nods grimly and stomps towards the intern's office. Your conscience is black, but clean." 
            },
            { 
                t: "Confess: 'I didn't want to break anything'", 
                rep: { "Egon": 2 },
                m: 5, f: -5, a: 0, c: 0, 
                r: "Egon snorts. 'Typical desk jockey. Two left hands.' But he calms down. You get to live another day." 
            }
        ]
    },
    {
        id: "cof_descaling_2c",
        title: "Inner Values",
        reqStory: "path_descale_ignore",
        text: "Your stomach rumbles strangely. You feel like you swallowed half a brick. Apparently, there was more limescale than water in that 'coffee'.",
        opts: [
            { 
                t: "Rationalize: 'It's good for the bones'", 
                m: 2, f: 5, a: 5, c: 0, 
                r: "Minerals are important. You convince yourself you're eating healthy. The pain is just weakness leaving the body." 
            },
            { 
                t: "Drink liters of water", 
                m: 5, f: 5, a: 5, c: 0, 
                r: "You try to flush the sediment out of your body. You spend the rest of the afternoon in the bathroom. Productivity: 0." 
            }
        ]
    },
    {
        id: "cof_spill_1",
        title: "The Brown Menace",
        text: "A sticky, cold coffee lake spreads in front of the machine. The culprit is long gone. It's a slippery death trap, just waiting to claim its next victim.",
        opts: [
            { 
                t: "Heroically grab a rag & wipe", 
                next: "path_spill_clean", 
				rep: { "Dr. Wichtig": -5 },	
                m: 10, f: -5, a: 20, c: 20, 
                r: "You kneel on the floor and wipe. At that moment, the boss turns the corner. 'Good heavens, Müller! Can't you even hold a cup? This is embarrassing!' He steps over your hand and shakes his head. You're seething." 
            },
            { 
                t: "Make & put up a warning sign", 
                next: "path_spill_warn", 
                m: 5, f: 5, a: 5, c: 0, 
                r: "You scribble 'CAUTION: LETHAL' on a note, put it up, and leave. Shortly after, you hear a loud skid behind you, followed by cursing. Well, those who can read have an advantage." 
            },
            { 
                t: "Take a big step over it", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "With an Olympic-worthy leap, you jump over the puddle. Not your mess, not your problem. Let the night shift skate. You feel superior." 
            }
        ]
    },
    {
        id: "cof_spill_2a",
        title: "The Sippy Cup",
        reqStory: "path_spill_clean",
        text: "On your desk is a package from the boss. Contents: A colorful children's sippy cup with a lid and spout. Note: 'To keep the carpets clean. Safety First!'.",
        opts: [
            { 
                t: "Use the cup out of spite", 
                m: 5, f: 0, a: 10, c: 5, 
                r: "You demonstratively drink from the sippy cup. Colleagues giggle behind their hands. It's extremely embarrassing, but hey: the coffee stays hot. Your anger grows with every sip." 
            },
            { 
                t: "Throw it in the trash", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "The thing flies with force into the wastebasket. You're not a toddler. The catharsis felt good." 
            }
        ]
    },
    {
        id: "cof_spill_2b",
		char: "Chantal",
        title: "The Workplace Accident",
        reqStory: "path_spill_warn",
        text: "Chantal limps past you with a bandaged ankle. She angrily waves your note. 'That sign was far too small! I'm reporting this as a workplace accident due to insufficient safety labeling!'",
        opts: [
            { 
                t: "Defend legally: 'DIN standard met'",
                rep: { "Chantal": -10 }, 
                m: 5, f: 5, a: 10, c: 0, 
                r: "You have to explain to her for 10 minutes that the font size was legible. She storms off offended. You're right, but the discussion was a pure waste of time and annoying." 
            },
            { 
                t: "Show sympathy (Chocolate)", 
                rep: { "Chantal": 10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "You give her a bar from your drawer. She immediately calms down. 'Alright. But next time, use neon colors, okay?' Problem solved." 
            }
        ]
    },
    {
        id: "cof_elster_fight_1",
		char: "Frau Elster",
        title: "Fridge Fight",
        text: "Ms. Elster throws away your food! 'That stinks of peanuts!' she snaps. You confront her.",
        opts: [
            { 
                t: "Yell: 'That was my lunch!'", 
                next: "path_elster_allergy", 
                rep: { "Frau Elster": -5 },
                m: 10, f: 0, a: 20, c: 10, 
                r: "She yells back: 'I'm highly sensitive! If I just smell **peanuts**, my throat swells up! Be considerate!' She breathes heavily. Uh oh, hit a nerve." 
            },
            { 
                t: "Back down", 
                next: "path_elster_police",
                rep: { "Frau Elster": 2 }, 
                m: 5, f: 5, a: 10, c: 0, 
                r: "You apologize meekly. She adjusts her glasses, snorts: 'One simply has to think of the community!' and storms off. The argument is over, but so is your food." 
            }
        ]
    },
    {
        id: "cof_elster_fight_2a",
		char: "Frau Elster",
        title: "The Bio-Weapon",
        reqStory: "path_elster_allergy",
        text: "You're sitting in the kitchen and open a 'Snickers'. Ms. Elster walks in, sniffs, turns pale, and recoils. 'Is that... peanut? Are you trying to kill me?! Get that away!'",
        opts: [
            { 
                t: "Chew with relish & breathe on her", 
                rep: { "Frau Elster": -10 },
                m: 5, f: -5, a: -10, c: 10, 
                r: "You chew extra loudly. 'Mmmh, crunchy.' Ms. Elster flees the room in a panic. You now have the kitchen to yourself. Powerful feeling." 
            },
            { 
                t: "Be considerate & put it away", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 5, a: 5, c: 0, 
                r: "You put the bar away. 'It's fine.' She nods gratefully, but suspiciously. You're hungry, but at least you don't have a murder on your conscience." 
            }
        ]
    },
    {
        id: "cof_elster_fight_2b",
		char: "Frau Elster",
        title: "The Food Police",
        reqStory: "path_elster_police",
        text: "Since you caved last time, Ms. Elster is now cracking down. Your yogurt is gone. Instead, a note is stuck to the compartment: 'Preventively disposed of due to missing expiration date. Signed, Elster'.",
        opts: [
            { 
                t: "Write an angry reply note", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "You write: 'Hands off my property!' and stick it to her Tupperware. A small act of rebellion that feels good." 
            },
            { 
                t: "Relabel everything (Work)", 
                rep: { "Frau Elster": 5 },
                m: 2, f: 5, a: 15, c: 0, 
                r: "You label every single food item with date and name to shut her up. It takes 10 minutes and is incredibly annoying." 
            }
        ]
    },
    {
        id: "cof_salary_rumor_1",
		char: "Chantal",
        title: "The Salary Shock",
        text: "You're hiding behind the pillar and hear Chantal from Marketing giggle: 'Yes, really! 500 Euros more! Just like that, because I smiled so nicely! And I can barely use Excel.' Your salary hasn't been adjusted in 3 years. You're about to burst.",
        opts: [
            { 
                t: "Use anger & note down achievements", 
                loot: "arg_list_1", 
                next: "path_salary_talk", 
                m: 10, f: -5, a: 5, c: 0, 
                r: "You grab a napkin and furiously scribble down your achievements: '1000 tickets resolved, fires prevented, servers saved'. You pocket the note like a weapon. This is valuable ammunition for later." 
            },
            { 
                t: "Make a scene with Chantal", 
                next: "path_salary_rage", 
                rep: { "Chantal": -15 },
                m: 5, f: 0, a: 20, c: 10, 
                r: "You yell across the room: 'EXCEL IS NOT ART!'. Chantal starts to cry. Everyone stares at you. You've blown off steam, but you appear mentally unstable. Not a good look." 
            },
            { 
                t: "Wash down the anger", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You swallow your anger or knead your stress ball. It doesn't change your bank balance, but your blood pressure drops slightly. You return to work, frustrated." 
            }
        ]
    },
    {
        id: "cof_salary_rumor_2a",
		char: "Dr. Wichtig",
        title: "The Pitch",
        reqStory: "path_salary_talk",
        text: "The boss sees you in the hallway. 'Ah, Müller! Good to see you.' You have your list of arguments in your pocket. This is the moment.",
        opts: [
            { 
                t: "Pull out list & demand", 
                req: "arg_list_1", 
				rep: { "Dr. Wichtig": 5 },	
                m: 10, f: -5, a: -10, c: 10, 
                r: "You rattle off your achievements. The boss is impressed (and a little intimidated). 'Okay, okay! We'll talk about a bonus.' A partial victory! You feel valued." 
            },
            { 
                t: "Chicken out & just greet him", 
                m: 2, f: 5, a: 10, c: 0, 
                r: "Courage failed. 'Hello Boss.' He walks on. You missed your chance and hate yourself a little for it." 
            }
        ]
    },
    {
        id: "cof_salary_rumor_2b",
        title: "The HR Appointment",
        reqStory: "path_salary_rage",
        text: "An email from HR: 'Subject: Incident in the coffee kitchen'. They want to discuss your 'social competence' and 'aggression management'.",
        opts: [
            { 
                t: "Attend appointment & apologize", 
                rep: { "Chantal": 5 },
                m: 5, f: -5, a: 10, c: 0, 
                r: "You have to nod for 30 minutes and promise improvement. It's humiliating. Chantal grins at you in the hallway afterward. Your hatred grows." 
            },
            { 
                t: " 'Forget' the appointment", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: -5, c: 20, 
                r: "You just don't go. Rebellious, but stupid. Now you have an official warning in your file. But your pride is intact." 
            }
        ]
    },
    {
        id: "cof_markus_flex_1",
		char: "Markus",
        title: "The Show-Off",
        text: "Markus from Sales is blocking the machine. He rolls up his sleeve and shoves his wrist under your nose. 'Well, Admin? Take a good look. This watch costs more than your entire car.' He grins his wide winner's smile.",
        opts: [
            { 
                t: "Precise throw with the stress ball", 
                req: "stressball", 
                next: "path_markus_hit", 
                rep: { "Markus": -15, "Dr. Wichtig": -2 },
                m: 5, f: 0, a: -20, c: 30, 
                r: "ZAP! Direct hit to the nose. Markus yelps like a kicked poodle. You feel deep satisfaction, but unfortunately, the boss was in the doorway. That's going to cause trouble." 
            },
            { 
                t: "Dry retort: 'Is it leased?'", 
                next: "path_markus_roast",
                rep: { "Markus": -5 }, 
                m: 10, f: 0, a: -10, c: 5, 
                r: "His grin freezes. He turns red and stammers something about 'investment'. The surrounding colleagues burst out laughing. A victory across the board." 
            },
            { 
                t: "Put on headphones & ignore", 
                req: "headphones", 
                rep: { "Markus": -2 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Click. Noise-cancelling on. You hear gentle Mozart, while Markus's mouth moves silently. You calmly pour your coffee. Peace." 
            },
            { 
                t: "Submissively wait", 
                next: "path_markus_servant", 
                rep: { "Markus": 5 },
                m: 20, f: 0, a: 20, c: 0, 
                r: "You wait devoutly for 20 minutes until he finishes his monologue about 'assets' and 'mindset'. You have your coffee, but it tastes bitter with humiliation." 
            }
        ]
    },
    {
        id: "cof_markus_flex_2a",
		char: "Markus",
        title: "The Damages",
        reqStory: "path_markus_hit",
        text: "Markus now wears a huge plaster on his nose (totally exaggerated). He waves a form in your face. 'That was an assault! Either you sign this official apology, or I'm calling my lawyer!'",
        opts: [
            { 
                t: "Sign (Humiliation)",
                rep: { "Markus": 5 }, 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You sign. Markus grins triumphantly and hangs the note on his office door. Everyone can now read that you're sorry. Your blood boils." 
            },
            { 
                t: "Threaten again", 
                req: "stressball", 
                rep: { "Markus": -10 },
                m: 5, f: -5, a: -5, c: 10, 
                r: "You pull out the stress ball again. Markus flinches and runs away. The problem is postponed, but not solved." 
            }
        ]
    },
    {
        id: "cof_markus_flex_2b",
		char: "Markus",
        title: "The Proof",
        reqStory: "path_markus_roast",
        text: "Your remark hit Markus's ego hard. He comes to your desk with his laptop. 'Leased? Don't make me laugh! Look at my crypto portfolio! I'm rich! RICH!' He shoves the screen at you.",
        opts: [
            { 
                t: "Read aloud: 'Minus 60 percent?!'", 
                rep: { "Markus": -15 },
                m: 5, f: 0, a: -10, c: 5, 
                r: "You point to the red curve. Markus frantically snaps the laptop shut. 'That's just... a correction! Buy the dip!' He runs away crying." 
            },
            { 
                t: "Wave dismissively, uninterested", 
                rep: { "Markus": -5 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Yeah, yeah, Markus.' You leave him standing there. Nothing hurts a show-off more than indifference." 
            }
        ]
    },
    {
        id: "cof_markus_flex_2c",
		char: "Markus",
        title: "The Coaching",
        reqStory: "path_markus_servant",
        text: "Because you listened to him, Markus now considers you his 'student'. He sends you WhatsApp voice messages at 6 AM: 'Good morning, Champ! Time to hustle! Get me a coffee, it teaches humility!'",
        opts: [
            { 
                t: "Get coffee (By the book)", 
                rep: { "Markus": 10 },
                m: 10, f: 0, a: 25, c: 0, 
                r: "You bring him the coffee. He pats your head. 'Good boy.' You die a thousand deaths internally." 
            },
            { 
                t: "Block & Ignore",
                rep: { "Markus": -5 }, 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You block his number. Markus later stands confused at your desk: 'My phone's acting up.' You just shrug." 
            }
        ]
    },
    {
        id: "cof_gabi_sad_1",
		char: "Gabi",
        title: "Bereavement in the Mailroom",
        text: "Gabi from the mailroom is sobbing on the corner bench in the break room. In her hand, she holds a brown, shriveled lump. 'My little Stachi is dead! Just passed away!'",
        opts: [
            { 
                t: "Donate the 'loot donut' as comfort", 
                rem: "donut", 
                next: "path_gabi_donut", 
                rep: { "Gabi": 5 },
                m: 10, f: 5, a: -10, c: -5, 
                r: "You sacrifice your treasure. Gabi's eyes light up. Sugar heals all wounds. She happily munches. 'You're so sweet! I'm going back to work.' Good deed!" 
            },
            { 
                t: "Give her an energy drink", 
                rem: "energy", 
                next: "path_gabi_energy", 
                rep: { "Gabi": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "Very bad idea. The taurine kicks in immediately. Gabi's eyes widen, she jumps up and runs back to the mailroom like a gassed hamster. This will have consequences." 
            },
            { 
                t: "Patiently listen (Counseling)", 
                next: "path_gabi_listen", 
                rep: { "Gabi": 5 },
                m: 45, f: -15, a: 20, c: 10, 
                r: "You listen to a 45-minute eulogy for a succulent. Your coffee gets cold. Gabi feels 'so understood' afterward, but you're internally dead and return much too late." 
            }
        ]
    },
    {
        id: "cof_gabi_sad_2a",
		char: "Gabi",
        title: "Special Delivery",
        reqStory: "path_gabi_donut",
        text: "Gabi frantically waves you behind the palm tree in the hallway. 'Psst! My savior! This came for you. I intercepted it before the boss, looked private.' She presses a package into your hand.",
        opts: [
            { 
                t: "Thank & accept", 
                loot: "loot_box", 
                rep: { "Gabi": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "It's your Amazon order (new gaming mouse). Gabi winks conspiratorially. 'Your mail is safe with me!' A valuable ally." 
            },
            { 
                t: "Promise her more sweets",
                rep: { "Gabi": 10 }, 
                m: 5, f: 10, a: -5, c: 0, 
                r: "You promise her the next cake from the meeting. Gabi beams. You now have VIP status for mail distribution." 
            }
        ]
    },
    {
        id: "cof_gabi_sad_2b",
		char: "Dr. Wichtig",
        title: "On-Site Inspection",
        reqStory: "path_gabi_energy",
        text: "The boss storms into the kitchen, grabs your arm, and drags you into the hallway. 'You hyped up Gabi?! Look at this!' Through the open mailroom door, you see Gabi stacking packages to the ceiling at breakneck speed.",
        opts: [
            { 
                t: "Marvel: 'Efficient!'", 
                rep: { "Gabi": -5, "Dr. Wichtig": -2 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "The boss turns red. 'This isn't Tetris, these are important files!' You have to help dismantle the tower before it collapses. Annoying punishment." 
            },
            { 
                t: "Flee: 'Not my area of responsibility'", 
                rep: { "Dr. Wichtig": -5 },
                m: 2, f: -5, a: 5, c: 0, 
                r: "You break free and run back to your coffee. The boss yells after you. That's going to cause trouble, but at least you don't have to climb." 
            }
        ]
    },
    {
        id: "cof_gabi_sad_2c",
		char: "Gabi",
        title: "The Cling-On",
        reqStory: "path_gabi_listen",
        text: "You just want to quickly get a fresh coffee, when Gabi jumps out from behind the refrigerator. She was waiting for you. 'You know, the empty pot looks so lonely... do you think a begonia would be better than a cactus?'",
        opts: [
            { 
                t: "Hide behind the coffee machine", 
                m: 5, f: -5, a: 15, c: 0, 
                r: "You duck away. Gabi searches for you briefly, sighs loudly ('No one understands me but you!') and leaves. That was close, but extremely humiliating." 
            },
            { 
                t: "Sarcastic: 'Use plastic flowers'", 
                rep: { "Gabi": 2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Oh, good idea! They don't die!' She runs off to buy some. Finally, peace. You have peace, but you feel a little bad." 
            }
        ]
    },
    {
        id: "cof_machine_broke_1",
        title: "Critical Seal Failure",
        text: "A trickle of hot water shoots from the side of the coffee machine. The brown sludge relentlessly makes its way towards the completely overloaded power strip on the floor. A quiet, menacing electrical crackle already hangs in the air.",
        opts: [
            { 
                t: "Seal with gaffer tape", 
                req: "tape", 
                next: "path_machine_tape", 
                m: 10, f: -5, a: 0, c: -10, 
                r: "You wrap half a roll of tape around the water tank. It looks like a botched mummy, but it holds! The kitchen stays dry, the coffee flows. You're the hero of the day." 
            },
            { 
                t: "Safety protocol: Pull the plug", 
                next: "path_machine_plug", 
                m: 5, f: 5, a: 10, c: 10, 
                r: "Zap. Power off. The danger is averted. The display goes black. A collective, painful groan goes through the office. You might have saved lives, but the mood is ruined." 
            },
            { 
                t: "Whistle and walk on & ignore", 
                next: "path_machine_blackout", 
				rep: { "Dr. Wichtig": -2 },	
                m: 5, f: 10, a: 0, c: 50, 
                r: "You ignore the puddle. Ten minutes later: *ZZZAPP*. Darkness on the entire floor. The boss storms into the hallway and yells: 'WHO BLEW THE FUSE?! MY WORD DOCUMENT!!'" 
            }
        ]
    },
    {
        id: "cof_machine_broke_2a",
		char: "Egon",
        title: "Engineering Art",
        reqStory: "path_machine_tape",
        text: "Janitor Egon stands in front of your tape artwork. He nods slowly and approvingly. 'Clean work, Müller. Couldn't have done it better myself. That'll hold until 2030.' He firmly pats you on the shoulder.",
        opts: [
            { 
                t: "Modestly nod", 
                rep: { "Egon": 10 },
                m: 10, f: 0, a: -10, c: -5, 
                r: "You enjoy the rare respect. Egon even invites you to check out his new cordless drill later. A good day." 
            },
            { 
                t: "Talk shop: 'Duct tape fixes everything'", 
                rep: { "Egon": 10 },
                m: 5, f: 5, a: -15, c: 0, 
                r: "You briefly exchange handyman wisdom. It's incredibly relaxing. You feel competent and valued." 
            }
        ]
    },
    {
        id: "cof_machine_broke_2b",
		char: "Dr. Wichtig",
        title: "The Lifesaver",
        reqStory: "path_machine_plug",
        text: "The boss comes in angrily, but then sees the charred power strip, still slightly smoking. He turns pale. 'My God... if you hadn't pulled it... the entire archive! Müller, you saved our asses!'",
        opts: [
            { 
                t: "Play the hero", 
				rep: { "Dr. Wichtig": 15 },	
                m: 10, f: 5, a: -20, c: -30, 
                r: "'Just doing my job, Boss.' He gratefully shakes your hand. 'Leave early today. That's an order!' Music to your ears." 
            },
            { 
                t: "Reassure: 'Safety first'", 
				rep: { "Dr. Wichtig": 5 },	
                m: 5, f: 0, a: -10, c: -20, 
                r: "Colleagues quietly applaud. The anger over the missing coffee has vanished. You're the responsible rock in the surf." 
            }
        ]
    },
    {
        id: "cof_machine_broke_2c",
        title: "Forced Break",
        reqStory: "path_machine_blackout",
        text: "The power is out, the PCs are off. Instead of panic, a strange calm spreads. Someone passed around cookies. Even the boss relaxes after IT confirms that autosave worked.",
        opts: [
            { 
                t: "Enjoy the silence", 
                m: 20, f: 0, a: -25, c: -10, 
                r: "No phone calls, no fan noise. Everyone sits in the dim light and chats nicely. It's like a campfire without a fire. You really recharge." 
            },
            { 
                t: "Tell jokes", 
				rep: { "Dr. Wichtig": 2 },	
                m: 10, f: 10, a: -15, c: -5, 
                r: "The mood is relaxed. The boss even laughs at your (harmless) joke. This unexpected team-building measure was exactly what everyone needed." 
            }
        ]
    },
    {
        id: "cof_kevin_learn_1",
		char: "Kevin",
        title: "Kevin's Worldview",
        text: "Kevin stares fascinated at the blinking server rack. He turns to you with wide eyes: 'Say... is there actually a little man sitting in there, typing and sending all the emails?' You wait for the punchline. But none comes. He's deadly serious.",
        opts: [
            { 
                t: "Patiently explain the technology", 
                next: "path_kevin_explain",
                rep: { "Kevin": 5, "Dr. Wichtig": 2 }, 
                m: 30, f: -10, a: 10, c: 0, 
                r: "You take half an hour and draw data packets on the whiteboard. Kevin slowly nods: 'Oh! So like pneumatic tubes, but invisible?' It's a small step forward." 
            },
            { 
                t: "Silently hand him the manual", 
                req: "manual", 
                next: "path_kevin_manual",
                rep: { "Kevin": -2 }, 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You press the heavy tome against his chest. 'Read chapters 1 to 10. Don't talk to me again until then.' He retreats respectfully to a corner. Finally, peace." 
            },
            { 
                t: "Lie: 'Yes, that's the email goblin'", 
                next: "path_kevin_kobold",
                rep: { "Kevin": 5, "Dr. Wichtig": -2 }, 
                m: 5, f: 10, a: -5, c: 10, 
                r: "You nod conspiratorially: 'Yes, his name is Gunter. But whatever you do, don't feed him!' Kevin now crawls behind the rack with a flashlight, looking for Gunter. The boss sees it and doubts the intern's suitability." 
            }
        ]
    },
    {
        id: "cof_kevin_learn_2a",
		char: "Kevin",
        title: "Pneumatic Tubes 2.0",
        reqStory: "path_kevin_explain",
        text: "Kevin tried to implement your explanation. He taped toilet paper rolls to the server fans. 'To make the data flow faster!' he proudly exclaims. Surprisingly, this creates a pleasantly cool draft directly onto your desk.",
        opts: [
            { 
                t: "Enjoy & praise", 
                rep: { "Kevin": 5 },
                m: 2, f: 5, a: -15, c: 5, 
                r: "You lean back. 'Good job, Kevin.' The draft is wonderful in this heat. Finally, an innovation that actually works. You're relaxed." 
            },
            { 
                t: "Tear down the construction",
                rep: { "Kevin": -5 }, 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You rip off the cardboard tubes. 'Fire hazard!' Kevin looks sad. Now you're sweating again and have to remove glue residue. Actually, a dumb move." 
            }
        ]
    },
    {
        id: "cof_kevin_learn_2b",
		char: "Kevin",
        title: "The Scribe",
        reqStory: "path_kevin_manual",
        text: "Kevin stands at attention in front of you. He has memorized the manual. 'According to page 103, paragraph 4, the administrator is entitled to a twenty-minute regeneration break during increased server load. Shall I be the bouncer?'",
        opts: [
            { 
                t: "Accept offer",
                rep: { "Kevin": 10 }, 
                m: 20, f: 5, a: -20, c: 0, 
                r: "You put your feet up. Kevin guards the door and even turns away the boss, citing 'page 103'. This is the best intern ever. Your stress level drops to zero." 
            },
            { 
                t: "Send him away",
                rep: { "Kevin": -5 }, 
                m: 2, f: -5, a: 5, c: 0, 
                r: "'Stop that nonsense.' You continue working. Kevin is disappointed. You missed a chance for legal laziness." 
            }
        ]
    },
    {
        id: "cof_kevin_learn_2c",
        title: "Gunter's Offering",
        reqStory: "path_kevin_kobold",
        text: "Behind the rack, you find a plate. On it is not sour milk, but a pack of finest Belgian chocolates. A note lies next to it: 'For Gunter, please fix the internet.'",
        opts: [
            { 
                t: "I am Gunter (Eat)", 
                rep: { "Kevin": 5 },
                m: 5, f: 10, a: -10, c: 0, 
                r: "You happily munch on the chocolates. They taste fantastic. When Kevin walks in, you burp softly. Kevin whispers reverently: 'Gunter accepted it!'" 
            },
            { 
                t: "Scare Kevin as Gunter",
                rep: { "Kevin": -5 }, 
                m: 5, f: 15, a: -15, c: 5, 
                r: "You hide and make spooky noises: *'MORE CHOCOLATE!'* Kevin runs away screaming. You laugh till you cry. That was mean, but extremely satisfying." 
            }
        ]
    },
    {
        id: "cof_birthday_cake_1",
        title: "Cake in the Hallway",
        text: "A huge chocolate cake stands unattended on the side table. A handwritten sign says: 'Help yourselves!'. It smells temptingly of cocoa and cream.",
        opts: [
            { 
                t: "Take a piece", 
                next: "path_cake_eat", 
                m: 10, f: 5, a: -10, c: 0, 
                r: "Delicious! A pure sugar rush. You shovel down the piece. Life is good." 
            },
            { 
                t: "Pack up the whole cake", 
                next: "path_cake_steal", 
                m: 5, f: 10, a: -5, c: 20, 
                r: "You look around – the coast is clear. You take the whole platter and quickly carry it to your office. 'For later'. Your heart pounds with greed." 
            },
            { 
                t: "Be suspicious", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "Free food? Suspicious. Who knows how long it's been there. You don't touch it. You stay hungry, but safe." 
            }
        ]
    },
    {
        id: "cof_birthday_cake_2a",
        title: "The Rum Bomb",
        reqStory: "path_cake_eat",
        text: "Oops. That wasn't just chocolate. That was 'Black Forest' with 80% Stroh rum. You feel warm and slightly dizzy. The stress melts away, but your tongue feels numb.",
        opts: [
            { 
                t: "Enjoy the high",
                next: "path_cake_drunk", 
                m: 5, f: 0, a: -20, c: 5, 
                r: "You lean against the wall and grin foolishly. A colleague asks you something, you just giggle. Best workday in years." 
            },
            { 
                t: "Try to appear serious", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You sit up straight and stare at your monitor. Just don't draw attention. The paranoia kills the good mood a bit." 
            }
        ]
    },
    {
        id: "cof_birthday_cake_2b",
		char: "Dr. Wichtig",
        title: "Meeting Crasher",
        reqStory: "path_cake_steal",
        text: "You're sitting in your office in front of the stolen cake when the door flies open. The boss and three Japanese investors stand there. The boss stares at the cake, then at you. 'Müller?! That was the catering for the delegation!'",
        opts: [
            { 
                t: "Lie: 'Quality control!'",
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 10, a: 20, c: 30, 
                r: "You stammer something about 'poison testing' with a full mouth. No one believes you. It's incredibly embarrassing. The Japanese politely bow to your greed." 
            },
            { 
                t: "Offer to share", 
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 0, a: -5, c: 10, 
                r: "You hold out a fork to the investor. He gratefully accepts. The situation is saved, but the boss will kill you later." 
            }
        ]
    },
    {
        id: "cof_elevator_stuck_1",
		char: "Markus",
        title: "Stuck in the Elevator",
        text: "Jolt. Clunk. Silence. Not again! The elevator gets stuck between the 2nd and 3rd floor. Next to you stands Markus from Sales in a cloud of 'Eau de Success'. He grins: 'Well, time for a networking chat, huh?'",
        opts: [
            { 
                t: "Press emergency call & pray", 
                next: "path_elevator_tech",
                rep: { "Markus": -5 },
                m: 30, f: 0, a: 15, c: 0, 
                r: "Egon crackles: 'Hey! I'm gonna finish my sandwich first. Chill out.' You're trapped for 30 minutes. Your mood is in the basement." 
            },
            { 
                t: "Listen to Markus (Sacrifice)", 
                next: "path_elevator_markus", 
                rep: { "Markus": 5 },
                m: 30, f: -10, a: 25, c: 0, 
                r: "He talks about his Porsche, his crypto wins, and his 'mindset'. You nod apathetically and die a thousand deaths internally. He seems to interpret the nodding as agreement." 
            },
            { 
                t: "Pry open elevator door", 
                req: "screw", 
                next: "path_elevator_hero", 
                rep: { "Markus": 15 },
                m: 10, f: -5, a: -10, c: 0, 
                r: "You ram the screwdriver into the gap. With a jerk, the door slides open. Freedom! The other occupants marvel: 'Alpha move, respect!'" 
            }
        ]
    },
    {
        id: "cof_elevator_2a",
		char: "Markus",
        title: "Trapped with the Beast",
        reqStory: "path_elevator_markus",
        text: "Markus jumps into the elevator with you at the last second. 'Hey Buddy! Good to catch you!' He grins and presses the **emergency stop button**. The elevator stops hard. 'I absolutely have to tell you about my new business idea. It'll only take 20 minutes.'",
        opts: [
            { 
                t: "Scream in panic: 'HELP!'",
                rep: { "Markus": 3 }, 
                m: 5, f: 0, a: 30, c: 0, 
                r: "Markus laughs. 'You're so funny! But seriously: multi-level marketing for hamster food!' There's no escape. This is false imprisonment." 
            },
            { 
                t: "Steal his thunder", 
                rep: { "Markus": -5 },
                m: 20, f: 0, a: -10, c: 5, 
                r: "You start telling HIM a story about your boring weekend. After 5 minutes, Markus impatiently presses the button to get it moving again. Victory through boredom." 
            }
        ]
    },
    {
        id: "cof_elevator_2b",
        title: "Experts at Work",
        reqStory: "path_elevator_tech",
        text: "The elevator jolts and stops. Next to you: a man in overalls. He turns pale. 'Uh. I'm the technician. I was going to repair the elevator.' He frantically presses buttons. 'Damn. My toolbox is outside. We're stuck.'",
        opts: [
            { 
                t: "Give him the 'emergency donut'", 
                req: "donut", 
                m: 20, f: 5, a: -10, c: 0, 
                r: "The technician is trembling from low blood sugar. You give him the donut. He calms down, kicks the door and – ZAP – it opens. 'Thanks, buddy!' Sometimes sugar helps more than technology." 
            },
            { 
                t: "Wait together (Hopeless)", 
                m: 45, f: 0, a: 20, c: 0, 
                r: "You both sit on the floor. The technician quietly weeps. After 45 minutes, you hear Egon laughing as he opens the door from the outside. 'Well, coffee klatch?'" 
            }
        ]
    },
    {
        id: "cof_elevator_2c",
        title: "The Elevator Whisperer",
        reqStory: "path_elevator_hero",
        text: "The elevator rattles and stops. The five other colleagues turn to you in unison. One expectantly hands you his car keys. 'Come on, fix it. You fixed it the other day. We're in a hurry.'",
        opts: [
            { 
                t: "Refuse: 'I'm not a technician'", 
                m: 30, f: 0, a: 15, c: -5, 
                r: "The mood sours. 'Great. Now we have to wait.' Everyone glares at you reproachfully for 30 minutes. You're the scapegoat because you won't help." 
            },
            { 
                t: "Pretend (Show)", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "You importantly rattle the door and mumble 'flux capacitor'. Coincidentally, it starts moving. 'A genius!' the colleagues whisper. Your reputation as a legend is cemented." 
            }
        ]
    },
    {
        id: "cof_miracle_1",
        title: "The Little Miracle",
        text: "The machine makes strange noises, rattles... and then produces the perfect coffee. Perfect temperature, hazelnut brown crema, smells like Italy. A statistical outlier. A unicorn in a cup.",
        opts: [
            { 
                t: "Immediately enjoy reverently", 
                m: 10, f: 5, a: -25, c: 0, 
                r: "You sip slowly. Each sip heals your soul a little. You ignore the phone and the world. For 5 minutes, everything is good." 
            },
            { 
                t: "Take a photo for Insta", 
                next: "path_miracle_insta", 
                m: 5, f: 10, a: -5, c: 0, 
                r: "This must be documented! You decoratively arrange your glasses and a pen next to it. '#OfficeLife #Grindset #Blessed'. But one photo isn't enough..." 
            },
            { 
                t: "Bring to the boss (Suck up)",
                rep: { "Dr. Wichtig": 5 },				
                next: "path_miracle_boss", 
                m: 5, f: -5, a: 5, c: -15, 
                r: "You think strategically. You carefully carry the holy grail into the boss's office. 'Here, Boss, this one's especially good today.' He looks surprised." 
            }
        ]
    },
    {
        id: "cof_miracle_2a",
        title: "The Influencer Debacle",
        reqStory: "path_miracle_insta",
        text: "You try to find the perfect angle. You climb onto your office chair, make a duck face, and hold the cup up to the camera. The door opens. The entire board stands there, staring at you. You're on the chair. With pursed lips.",
        opts: [
            { 
                t: "Pretend it's a yoga exercise", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You slowly stretch. 'Office gymnastics! Important for the back!' No one buys it. The board shakes their heads and moves on. You want to sink into the floor." 
            },
            { 
                t: "Post photo & expect termination", 
                m: 2, f: 10, a: -10, c: 5, 
                r: "You press the button. The photo is blurry and your expression is insane. But hey: 3 likes from bots! The social downfall was worth it." 
            }
        ]
    },
    {
        id: "cof_miracle_2b",
		char: "Dr. Wichtig",
        title: "Pearls Before Swine",
        reqStory: "path_miracle_boss",
        text: "The boss is happy. 'Müller! You read minds!' He takes the cup with the perfect coffee... and pours three packets of sweetener and a splash of lactose-free long-life milk into it. The crema immediately collapses into gray sludge.",
        opts: [
            { 
                t: "Cry internally & smile", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 10, c: -10, 
                r: "'Delicious,' the boss slurps. You sacrificed the holiest, and he desecrated it. But he likes you a little more now. Your heart bleeds." 
            },
            { 
                t: "Comment: 'That was a Grand Cru!'", 
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 5, a: 5, c: 5, 
                r: "The boss stares at you. 'It's coffee, Müller. Not rocket science. Get back to work.' Your sacrifice was in vain." 
            }
        ]
    },
    {
        id: "cof_silence_1",
        title: "Heavenly Silence",
        text: "You enter the kitchen. It's empty. No refrigerator hum, no chewing colleague, no dripping. Just absolute, golden silence. It's almost... eerily peaceful.",
        opts: [
            { 
                t: "Close eyes & enjoy", 
                next: "path_silence_jumpscare", 
                m: 5, f: 5, a: -20, c: 0, 
                r: "You breathe deeply. Five minutes of Zen mode. You feel your blood pressure drop. You are one with the universe. A rare moment of peace." 
            },
            { 
                t: "Become suspicious: 'Where is everyone?'", 
                next: "path_silence_drill", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You look around. No one there. Not in the hallway either. A cold shiver runs down your spine. Something's not right here." 
            },
            { 
                t: "Quick coffee & leave", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "You don't trust the peace. You fill your cup and immediately disappear back into the safe noise of your office." 
            }
        ]
    },
    {
        id: "cof_silence_2a",
        title: "Heart Attack Risk",
        reqStory: "path_silence_jumpscare",
        text: "You're just deeply relaxed when someone yells right into your ear: 'LUNCHTIME!!!'. It's funny Holger from accounting, who snuck up on you.",
        opts: [
            { 
                t: "Spill coffee in shock", 
                m: 5, f: -5, a: 10, c: 0, 
                r: "The hot coffee lands on your shirt. Holger laughs his head off: 'Hahaha, you jumped!' You're wet, burned, and contemplating murder." 
            },
            { 
                t: "Reflexively strike (Stress ball)", 
                req: "stressball", 
                m: 5, f: 0, a: -10, c: 10, 
                r: "Your arm twitches reflexively. The stress ball hits Holger on the head. 'Ow! Are you crazy?!' Now he's the victim. Serves him right." 
            }
        ]
    },
    {
        id: "cof_silence_2b",
        title: "Left Behind",
        reqStory: "path_silence_drill",
        text: "You look out the window. Down in the parking lot, all your colleagues are waving. A fire truck pulls up. You missed the fire alarm because of your noise-cancelling headphones (or pure ignorance).",
        opts: [
            { 
                t: "Panic run downstairs", 
                m: 10, f: -5, a: 10, c: 0, 
                r: "You sprint down 5 floors. When you get downstairs, you're sweaty and out of breath. The safety officer notes your name: 'Too late. In an emergency, you'd be crispy now.'" 
            },
            { 
                t: "Hide & hope", 
                m: 5, f: 5, a: -5, c: 20, 
                r: "You duck under the table. If no one sees you, you were never there. You enjoy the empty office while everyone outside freezes." 
            }
        ]
    },
    {
        id: "cof_cookie_luck_1",
        title: "The Orphaned Cookie",
        text: "Next to the sugar dispenser lies a single, wrapped premium cookie (caramel core). No note, no owner in sight. The universe is being kind to you.",
        opts: [
            { 
                t: "Eat immediately", 
                next: "path_cookie_mystery", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "Crackle. Munch. The sugar floods your brain. Happy hormones briefly fight off the stress. It's gone." 
            },
            { 
                t: "Pocket for later", 
                next: "path_cookie_save", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "You let it slide into your pocket. The knowledge of having an emergency ration calms you immensely. Anticipation is the greatest joy." 
            }
        ]
    },
    {
        id: "cof_cookie_2a",
        title: "The Cookie Fairy",
        reqStory: "path_cookie_mystery",
        text: "You return to your desk... and there's *another* one! Right on your keyboard. Again, caramel core. Who's doing this? And why?",
        opts: [
            { 
                t: "Don't ask, just eat", 
                m: 5, f: 5, a: -20, c: 0, 
                r: "Don't look a gift horse in the mouth. You eat the second cookie. You feel strangely loved by an invisible benefactor. Your stress level drops massively." 
            },
            { 
                t: "Play detective", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You examine the packaging for fingerprints. Nothing. The uncertainty is driving you crazy. Was it the boss? Or just the cleaning staff?" 
            }
        ]
    },
    {
        id: "cof_cookie_2b",
        title: "The Perfect Moment",
        reqStory: "path_cookie_save",
        text: "You have your fresh coffee in hand. It's steaming. Then you remember the cookie in your pocket. You pull it out. The chocolate is slightly melted from your body heat.",
        opts: [
            { 
                t: "Dip & enjoy", 
                m: 10, f: 5, a: -25, c: 0, 
                r: "You briefly dip the cookie into the hot coffee. It melts on your tongue. An explosion of caramel and roasted aromas. For a moment, the world is perfect. (Aggression massively reduced)" 
            },
            { 
                t: "Make a crumb topping", 
                m: 5, f: 5, a: -15, c: 0, 
                r: "You crumble the cookie over the milk foam. A gourmet coffee 'homemade'. You feel like a barista king." 
            }
        ]
    },
    {
        id: "cof_disaster_1",
        title: "OUT OF ORDER",
        text: "You need caffeine. Urgently. But the machine's display only says: 'ERROR 418 - I'm a teapot'. Your hands are already trembling slightly.",
        opts: [
            { 
                t: "Kick it", 
                next: "path_machine_war", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "BAM! You kick the casing. A gush of hot water runs over your shoes. The machine beeps angrily." 
            },
            { 
                t: "Repair", 
                req: "screw", 
                next: "path_machine_love", 
                m: 15, f: 0, a: -10, c: -5, 
                r: "You unscrew the casing and fix the hose. The machine purrs gratefully! The first sip tastes of victory (and a bit of limescale)." 
            },
            { 
                t: "Use foil (Therapy)", 
                req: "bubble_wrap", 
                next: "path_machine_confused", 
                m: 10, f: 5, a: -15, c: 0, 
                r: "You sit on the floor and pop foil until the trembling stops. *Pop. Pop.* No coffee, but at least no murder." 
            }
        ]
    },
    {
        id: "cof_disaster_2a",
        title: "The Machine's Revenge",
        reqStory: "path_machine_war",
        text: "You return. The display glows red. The text scrolls because it's so long: 'ERROR 418.666.KICK_DETECTED.USER_BLACKLISTED.SELF_DEFENSE_MODE_ACTIVE.38472.DO_NOT_TOUCH'. It smells burnt.",
        opts: [
            { 
                t: "Approach cautiously", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "The machine suddenly spits out boiling steam. It was waiting for you! You recoil. The thing is malicious." 
            },
            { 
                t: "Pull the plug (End the war)", 
                m: 5, f: 0, a: 5, c: 10, 
                r: "You pull the plug. The red light slowly fades like HAL 9000's eye. You won... for now." 
            }
        ]
    },
    {
        id: "cof_disaster_2b",
        title: "System Overload",
        reqStory: "path_machine_love",
        text: "The machine blinks wildly in all colors. Error code: 'ERROR 200.OK.BUT.HEARTBEAT.OVERFLOW.999999.USER_IS_MY_HERO.CALC_LOVE.DIV_BY_ZERO'. It seems so excited about your return that it crashes.",
        opts: [
            { 
                t: "Talk it down: 'Easy there, big fella'", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You stroke the casing. The blinking slows. It brews you a 'Special Espresso' with double crema. Tastes of affection." 
            },
            { 
                t: "Hit it hard once (Reset)", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Old school. The machine is offended and reverts to default settings. The coffee is okay, but the magic is gone." 
            }
        ]
    },
    {
        id: "cof_disaster_2c",
        title: "Philosophical Error",
        reqStory: "path_machine_confused",
        text: "The display now shows columns of numbers: 'ERROR 503.PLOPP.UNDEFINED.WHAT_IS_PURPOSE.BUBBLE_LOGIC_EXCEPTION.7463.8291.000'. The machine is apparently trying to calculate the meaning of your bubble wrap action.",
        opts: [
            { 
                t: "Pop again (Dialogue)", 
                req: "bubble_wrap", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You pop a bubble. The machine beeps once. You pop again. It beeps twice. You've found a level of understanding." 
            },
            { 
                t: "Ignore", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You let it calculate. Let it calculate Pi, as long as it eventually gives coffee again." 
            }
        ]
    },
    {
        id: "cof_sugar_1",
        title: "The Sugar Baron",
        text: "You hear a frantic rustling. Bernd (Logistics) is bent over in front of the supply cabinet. His suit pockets bulge suspiciously. He's sweating. 'Psst! They upstairs want to rationalize! The Great Reset is coming! I'm securing the white gold!' He stares at you wildly. 'Are you in or are you a sheep?'",
        opts: [
            { 
                t: "Invest: 'Give me 20 percent!'", 
                next: "path_sugar_junkie", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "Bernd grins broadly (a gold tooth glints). 'Good man. Diversification is everything.' He shovels three handfuls of packets into your pocket. You nod conspiratorially at each other. The cartel is formed." 
            },
            { 
                t: "Threaten: 'I'll tell the boss'", 
                next: "path_sugar_embargo", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "Bernd's eyes narrow to slits. 'You'll regret it. When the crisis comes, you'll come crawling!' He disappears into the shadows of the copier room. You've made a powerful enemy." 
            },
            { 
                t: "Business-like: 'How much per gram?'", 
                next: "path_sugar_dealer", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Bernd pulls out a calculator. 'Daily price fluctuates. But for you... trade for stapler staples?' You negotiate briefly. You let him continue." 
            }
        ]
    },
    {
        id: "cof_sugar_2a",
        title: "The Margin Call",
        reqStory: "path_sugar_junkie",
        text: "Bernd intercepts you. He's practically vibrating. His pupils are huge, white crumbs cling all over his mouth. 'The market crashed! I used it all myself! I need my deposit back! Do you have the stuff?!'",
        opts: [
            { 
                t: "Give him back the sugar", 
                m: 5, f: 0, a: -10, c: 0, 
                r: "You give him the packets. He tears open three at once and pours them straight down his throat. 'Ohhh yeah... mama's home.' He immediately calms down and sinks against the wall. Crisis averted." 
            },
            { 
                t: "Drive up the price", 
                m: 10, f: 0, a: 15, c: 0, 
                r: "'Supply and demand, Bernd.' You demand his office chair armrests in exchange. He whimpers, but agrees. You're the new baron." 
            }
        ]
    },
    {
        id: "cof_sugar_2b",
        title: "The Embargo",
        reqStory: "path_sugar_embargo",
        text: "You want coffee. But the sugar dispenser is empty. Instead, a note is stuck to it: 'Temporarily out of service due to supply chain issues. Signed, Bernd'. Bernd sits three tables away on a throne of copier paper and grins maliciously at you.",
        opts: [
            { 
                t: "Capitulate & beg", 
                m: 5, f: -10, a: 20, c: 0, 
                r: "You grovel. 'Please, Bernd. Just one spoon.' He flicks a single crumb at you. 'That'll be 5 Euros processing fee.' It's humiliating." 
            },
            { 
                t: "Storm the bunker", 
                m: 10, f: 0, a: -5, c: 10, 
                r: "You throw yourself at his paper tower. Bernd squeals. Sugar packets rain down like confetti through the office. Colleagues cheer and loot with you. The revolution was successful!" 
            }
        ]
    },
    {
        id: "cof_sugar_2c",
        title: "Black Market",
        reqStory: "path_sugar_dealer",
        text: "There's a bustling scene in the hallway. Bernd has set up a small stand. He sells sugar for pens, Post-its, and canteen vouchers. Business is booming.",
        opts: [
            { 
                t: "Inform the boss (Whistleblower)", 
                m: 5, f: 0, a: 10, c: 10, 
                r: "The boss comes, sees the business... and buys two packets himself for his meeting. 'From petty cash, Bernd.' You've lost faith in the system." 
            },
            { 
                t: "Hire yourself as security", 
                m: 10, f: 10, a: -10, c: 0, 
                r: "You cross your arms and glare so no one steals. Bernd cuts you in on the profit (two highlighters). A lucrative side hustle." 
            }
        ]
    },
    {
        id: "cof_mold_1",
        title: "Refrigerator Excursion",
        text: "Deep in the back of the refrigerator sits a yogurt. The expiration date is 'May 2012'. It pulsates slightly in neon green. As you approach, furry letters form on the surface: 'H...U...N...G...E...R'.",
        opts: [
            { 
                t: "Sacrifice sugar packets (Feed)", 
                next: "path_mold_ally", 
                m: 5, f: -5, a: -10, c: 0, 
                r: "You sprinkle sugar into it. The fungus happily absorbs it and burps softly. A tiny voice in your head says: 'WE SERVE THE MASTER.' You now have a disgusting friend." 
            },
            { 
                t: "Attack with disinfectant", 
                next: "path_mold_war", 
                m: 10, f: 5, a: 15, c: 0, 
                r: "You spray Sagrotan. The fungus hisses aggressively like a cat! It retreats, but you hear it giggling in the drain. This isn't over yet." 
            },
            { 
                t: "Quickly slam the door shut (Flee)", 
                next: "path_mold_civ", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "Out of sight, out of mind. You stick a 'DEFECTIVE' note on the refrigerator. Let the night shift deal with the new life form." 
            }
        ]
    },
    {
        id: "cof_mold_2a",
        title: "The Symbiosis",
        reqStory: "path_mold_ally",
        text: "You open the refrigerator again. The yogurt has grown. 'MASTER,' it squeaks. 'THE ENEMY (BOSS) HAS STORED HIS SANDWICH HERE. SHALL WE... OPTIMIZE ITS FLAVOR?'",
        opts: [
            { 
                t: "Give command: 'Access granted!'",
                rep: { "Dr. Wichtig": -2 },				
                m: 5, f: 10, a: -20, c: 20, 
                r: "The fungus happily wiggles over to the sandwich. Later, you hear the boss yelling: 'Why does my bread taste of blueberry and revenge?!'. You grin maliciously." 
            },
            { 
                t: "Decline: 'Maintain peace'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "'AS YOU WISH.' The fungus looks disappointed, but forms a little heart for you. It's sweet, but also extremely disgusting." 
            }
        ]
    },
    {
        id: "cof_mold_2b",
        title: "Spore Alert",
        reqStory: "path_mold_war",
        text: "You want to get milk, but the yogurt has set a trap! As soon as the light comes on, a cloud of green spores shoots directly into your face. It's defending its territory!",
        opts: [
            { 
                t: "Cough & Cry", 
                m: 10, f: -5, a: 20, c: 0, 
                r: "You cough your lungs out. Your eyes burn. The yogurt seems to laugh mockingly. You lost the fight against a dairy product." 
            },
            { 
                t: "Flamethrower (Deodorant + Lighter)", 
                m: 5, f: -5, a: -10, c: 10, 
                r: "You burn out the compartment. It stinks horribly, but the enemy is vanquished. The janitor will ask questions, but you won." 
            }
        ]
    },
    {
        id: "cof_mold_2c",
        title: "The Civilization",
        reqStory: "path_mold_civ",
        text: "You dare to take a look. Something has happened in the vegetable compartment. The fungus has built small houses out of old cheese. Tiny mushroom men ride on cockroaches. They've invented the wheel.",
        opts: [
            { 
                t: "Play God (Light on/off)", 
                m: 20, f: 0, a: -15, c: 0, 
                r: "You turn the refrigerator light on and off. The little creatures fall to their knees and worship you. 'THE LIGHTBRINGER!'. That feels good for your ego." 
            },
            { 
                t: "Shove everything into the trash", 
                m: 5, f: -5, a: 5, c: 0, 
                r: "You brutally end the story with a trash bag. An entire universe, destroyed in seconds. You feel bad for a moment, then you get your milk." 
            }
        ]
    },
    {
        id: "cof_catering_1",
        title: "The Remains of Power",
        text: "The executive meeting is over. On the mahogany table are the leftovers. Salmon sandwiches, caviar canapés, premium coffee. No one is in sight.",
        opts: [
            { 
                t: "Clean up (Dutifully)", 
                next: "path_cat_cleanup", 
				rep: { "Dr. Wichtig": 5 },
                m: 15, f: -15, a: 5, c: -5, 
                r: "You clear away plates. In doing so, you find a note under the boss's chair: 'TOP SECRET: List of employees we want to fire'. Your name isn't on it... yet." 
            },
            { 
                t: "Greedily eat everything", 
                next: "path_cat_eat", 
                m: 10, f: 15, a: -15, c: 0, 
                r: "You stuff yourself like a hamster. Salmon, grapes, cheese. You feel like a king. Unfortunately, you now have a greasy remoulade stain on your shirt." 
            },
            { 
                t: "Only steal the coffee", 
                next: "path_cat_gossip", 
                m: 5, f: -10, a: -5, c: 0, 
                r: "You fill your cup with the good 'Arabica Gold'. Sabine from reception intercepts you at the door. She grins knowingly. She saw you." 
            }
        ]
    },
    {
        id: "cof_catering_2a",
		char: "Dr. Wichtig",
        title: "Sensitive Information",
        reqStory: "path_cat_cleanup",
        text: "The boss rushes back. He's looking for that exact note. He looks at you, panic in his eyes. 'Müller! Have you seen any... paperwork here?'",
        opts: [
            { 
                t: "Honestly: 'Here it is, Boss.'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 15, c: 10, 
                r: "He snatches it from your hand. Instead of gratitude, you see coldness. He now knows that YOU know. 'Forget about it. Immediately.' You're now on his watch list." 
            },
            { 
                t: "Insanity: Eat the note", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 5, a: -20, c: -20, 
                r: "You stare him in the eyes, put the paper in your mouth, and swallow it. 'I saw nothing, Boss.' He nods slowly, deeply impressed. 'Good man. Loyalty tastes bitter, doesn't it?'" 
            }
        ]
    },
    {
        id: "cof_catering_2b",
		char: "Dr. Wichtig",
        title: "Burden of Proof",
        reqStory: "path_cat_eat",
        text: "You run into the boss. He stares at the huge grease stain on your shirt and the crumbs at the corner of your mouth. 'Müller? Did you eat from the executive buffet?'",
        opts: [
            { 
                t: "Offensive: 'It had to go, it was going bad!'",
                rep: { "Dr. Wichtig": -5 },				
                m: 5, f: 0, a: 5, c: 20, 
                r: "'That's 50€ salmon, Müller! That's not dog food!' He's furious about your disrespect. That's a warning for petty theft." 
            },
            { 
                t: "Play dumb: 'I ate my packed lunch.'", 
                rep: { "Dr. Wichtig": -2 },	      
                m: 2, f: 5, a: 0, c: 0, 
                r: "You point to the stain. 'Liverwurst, Boss. Really bad.' He wrinkles his nose and keeps his distance. 'Wash yourself. You smell like fish.' You escaped." 
            }
        ]
    },
    {
        id: "cof_catering_2c",
        title: "A 'Small' Favor",
        reqStory: "path_cat_gossip",
        text: "Sabine blocks your way. 'I won't rat you out about the coffee... but my printer is making strange noises. Can you take a *very quick* look? Please!'",
        opts: [
            { 
                t: "Be nice (Accept blackmail)", 
                m: 45, f: -15, a: 25, c: -15, 
                r: "Classic mistake. It wasn't the printer, it was the driver. And the network. You're trapped for 45 minutes. Sabine tells you her entire life story. You hate yourself." 
            },
            { 
                t: "Distract: 'Oh God! Is that a spider?!'", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You point frantically behind her. Sabine screams and jumps aside. You use the chaos and run away. Not elegant, but effective." 
            }
        ]
    },
    {
        id: "cof_bulletin_board",
        title: "Waiting for the Black Gold",
        text: "The machine's loading bar has been stuck at 99% for what feels like an eternity. A single drop falls in slow motion. The tension is almost unbearable.",
        opts: [
            { 
                t: "Kill time with Kevin",
                rep: { "Kevin": 5 },
                m: 10, f: 10, a: -10, c: 5, 
                r: "Kevin rambles on about his 'gaming carpet'. It's awful, but at least you end up with a fresh, hot coffee in your hand." 
            },
            { 
                t: "Impatiently fidget & run back", 
                m: 1, f: -5, a: 2, c: 0, 
                r: "You can't take it anymore and snatch the cup. A hot drop lands on your shirt, but you're immediately back at your desk." 
            },
            { 
                t: "Study the 'Bulletin Board'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "CMD:OPEN_BOARD"
            }
        ]
    },
	{
        id: "cof_lore_2c",
		char: "Kevin",
        title: "Rumor Mill",
        reqStory: "path_lore_ignore",
        text: "You meet Kevin in the kitchen. He grins broadly and waves a file folder. 'Guess what I found in the server room? The HR list! I'm going to blackmail everyone!'",
        opts: [
            { 
                t: "Warn him", 
                rep: { "Kevin": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Kevin, HR is looking for that. Burn it.' He turns pale. 'Oh... thanks, bro.' He runs to the shredder." 
            },
            { 
                t: "Snitch on him to the boss", 
                rep: { "Dr. Wichtig": 10, "Kevin": -20 },
                m: 10, f: -5, a: -5, c: -15, 
                r: "You call Dr. Wichtig. Shortly after, Kevin is escorted away by two security guards. Your standing with the boss has increased." 
            },
            { 
                t: "Ignore", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Not your problem. 10 minutes later, you hear screams from the HR office. Well." 
            }
        ]
    },
    {
        id: "cof_kevin_hack_1",
		char: "Kevin",
        title: "Kevin's Upgrade",
        text: "Kevin unscrewed the back panel of the coffee machine and soldered a Raspberry Pi to the circuit board. 'I'm installing Doom on the display. And I've overclocked the water temperature to 105 degrees. Want to do the first test run?'",
        opts: [
            { 
                t: "Intervene: 'Put that back immediately!'", 
                next: "path_kevin_hack_stop", 
                rep: { "Kevin": -5 }, 
                m: 10, f: -5, a: 5, c: -5, 
                r: "You force him to disconnect the cables. Kevin grumbles: 'Innovation is really stifled here.' The machine looks normal again." 
            },
            { 
                t: "Support: 'Can it also mine Bitcoin?'", 
                next: "path_kevin_hack_help", 
                rep: { "Kevin": 10 }, 
                m: 5, f: -5, a: -10, c: 10, 
                r: "Kevin beams. 'Good idea! I'll reroute the power from the refrigerator.' You tinker for a bit. It smells faintly of burnt plastic." 
            },
            { 
                t: "Flee: 'I'm drinking tea today.'", 
                next: "path_kevin_hack_ignore", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You leave the kitchen before you can be identified as an accomplice." 
            }
        ]
    },
    {
        id: "cof_kevin_hack_2a",
        title: "Lukewarm Slop",
        reqStory: "path_kevin_hack_stop",
        text: "You want to get a coffee. The machine blinks green: 'SAFE MODE'. The coffee comes out at exactly 60 degrees and tastes watery. Kevin, out of spite, activated the economy settings.",
        opts: [
            { 
                t: "Drink and suffer", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "It tastes of compromise and sadness. Your caffeine level barely rises." 
            },
            { 
                t: "Look for Kevin", 
                rep: { "Kevin": -2 },
                m: 5, f: -5, a: 5, c: 0, 
                r: "You can't find him. He's probably hiding in the storage room. You remain tired." 
            }
        ]
    },
    {
        id: "cof_kevin_hack_2b",
        title: "Meltdown",
        reqStory: "path_kevin_hack_help",
        text: "When you enter the kitchen, the coffee machine is glowing dark red. Doom is actually running on the display, but the coffee has evaporated. The whole room is a sauna.",
        opts: [
            { 
                t: "Warm yourself in front of it", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "At least it's warm. You enjoy the tropical heat until the fire alarm beeps." 
            },
            { 
                t: "Pull the plug", 
                m: 5, f: -5, a: 0, c: 0, 
                r: "You save the building. The machine dies with a sad whimper. No coffee today." 
            }
        ]
    },
    {
        id: "cof_kevin_hack_2c",
        title: "Bluescreen",
        reqStory: "path_kevin_hack_ignore",
        text: "The coffee machine shows a Bluescreen of Death: 'Error 404: Beans not found'. Kevin stands next to it, scratching his head. 'I think I fried the motherboard.'",
        opts: [
            { 
                t: "Laugh", 
                rep: { "Kevin": -5 },
                m: 2, f: 0, a: -5, c: 0, 
                r: "'Well. Not my problem.' You leave without coffee, but with schadenfreude." 
            },
            { 
                t: "Call Egon", 
                rep: { "Egon": 5 },
                m: 5, f: -5, a: 0, c: 0, 
                r: "You snitch on Kevin to the janitor. Egon comes with the big pipe wrench. It's going to be loud." 
            }
        ]
    },
    {
        id: "cof_chantal_tiktok_1",
		char: "Chantal",
        title: "Content Creation",
        text: "Chantal has set up a ring light in front of the coffee machine. 'Hey! Can you film quickly? I'm doing the 'No-Sleep-Challenge'. I have to pretend to inhale the coffee. Be aesthetic!'",
        opts: [
            { 
                t: "Film: 'Sure, action!'", 
                next: "path_chantal_tiktok_help", 
                rep: { "Chantal": 10 }, 
                m: 10, f: -5, a: -5, c: 0, 
                r: "You film 15 takes. 'More drama!' she shouts. In the end, the coffee is cold, but Chantal is happy." 
            },
            { 
                t: "Sabotage: Pull the plug", 
                next: "path_chantal_tiktok_ruin", 
                rep: { "Chantal": -15 }, 
                m: 5, f: 0, a: -10, c: 0, 
                r: "Mid-take, the light goes out. 'My vibe!' she screams. You shrug. 'Power outage.'" 
            },
            { 
                t: "Push her away: 'I have to work.'", 
                next: "path_chantal_tiktok_push", 
                rep: { "Chantal": -5 }, 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You push your way through the setup. Chantal films your back. 'And here we see negative energy in the wild.'" 
            }
        ]
    },
    {
        id: "cof_chantal_tiktok_2a",
		char: "Chantal",
        title: "Thank You",
        reqStory: "path_chantal_tiktok_help",
        text: "Chantal intercepts you. 'The video has 300 views! Here, as a thank you.' She presses a cup with a green liquid into your hand. 'Detox Spinach Matcha Latte. Homemade.'",
        opts: [
            { 
                t: "Drink it", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "It tastes of grass and dirt. You choke it down. Chantal beams. 'Do you feel the glow?'" 
            },
            { 
                t: "Pour it into the plant", 
                rep: { "Chantal": -2 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "The Ficus immediately droops its leaves. You saved the office from a bio-weapon." 
            }
        ]
    },
    {
        id: "cof_chantal_tiktok_2b",
        title: "Cancel Culture",
        reqStory: "path_chantal_tiktok_ruin",
        text: "You enter the kitchen. Above the coffee machine hangs a printed screenshot of your face, crossed out in red. Below it reads: 'Attention: Energy Vampire'.",
        opts: [
            { 
                t: "Tear it down", 
                rep: { "Chantal": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "You crumple the paper. It feels like a small victory, but the war has only just begun." 
            },
            { 
                t: "Laugh about it", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You draw a mustache on the picture yourself. Chantal sees it later and is confused." 
            }
        ]
    },
    {
        id: "cof_chantal_tiktok_2c",
        title: "Passive-Aggressive",
        reqStory: "path_chantal_tiktok_push",
        text: "The coffee machine is covered in pink Post-its. 'Please keep your distance!', 'Positive Vibes Only!', 'No rush!'. It takes you 2 minutes to uncover the start button.",
        opts: [
            { 
                t: "Tear everything off", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You make a big paper ball. That was satisfying." 
            },
            { 
                t: "Blindly press coffee", 
                m: 2, f: 0, a: 10, c: 0, 
                r: "You press through the paper. It was the 'Hot Water' button. Your coffee is ruined." 
            }
        ]
    },
    {
        id: "cof_ceo_trap_1",
		char: "Dr. Wichtig",
        title: "The Honey Trap",
        text: "Dr. Wichtig stands smiling at the machine. He holds two cups. 'Ah, Müller! Perfect timing. I'm feeling generous today. Would you like this double espresso? From my private stash. On the house.'",
        opts: [
            { 
                t: "Gratefully accept: 'Wow, Boss!'", 
                next: "path_ceo_trap_taken", 
                rep: { "Dr. Wichtig": 5 }, 
                m: 5, f: -5, a: -5, c: -5, 
                r: "You take the cup. It's hot and smells wonderful. The boss smiles wider. 'Excellent. Anyone who has time for enjoyment surely has energy to spare.'" 
            },
            { 
                t: "Decline: 'Must work urgently.'", 
                next: "path_ceo_trap_denied", 
                rep: { "Dr. Wichtig": 10 }, 
                m: 2, f: -10, a: 5, c: -10, 
                r: "You wave him off and hurry on. The boss nods approvingly. 'Discipline! I like that. Keep it up!'" 
            },
            { 
                t: "Suspicious: 'Is there poison in it?'", 
                next: "path_ceo_trap_doubt", 
                rep: { "Dr. Wichtig": -5 }, 
                m: 5, f: 0, a: 0, c: 5, 
                r: "His smile freezes. 'Your humor is... peculiar, Müller. It's just coffee. Or do you have a guilty conscience?'" 
            }
        ]
    },
    {
        id: "cof_ceo_trap_2a",
        title: "The Bill",
        reqStory: "path_ceo_trap_taken",
        text: "You return to your desk. There's a huge stack of unsorted invoices. A Post-it is stuck to it: 'Since you're freshly energized – please process by 5 PM. Thanks for the coffee chat. Dr. W.'",
        opts: [
            { 
                t: "Process them", 
                rep: { "Dr. Wichtig": 5 }, 
                m: 45, f: -20, a: 20, c: 0, 
                r: "You sort paper. The coffee was good, but the price was too high. You feel used." 
            },
            { 
                t: "Shove stack to Kevin", 
                rep: { "Kevin": -10 },
                m: 5, f: 5, a: -5, c: 5, 
                r: "You subtly place the stack on Kevin's desk. He won't notice until it's too late." 
            }
        ]
    },
    {
        id: "cof_ceo_trap_2b",
		char: "Markus",
        title: "Collateral Damage",
        reqStory: "path_ceo_trap_denied",
        text: "You see Markus in the hallway. He's lugging heavy archive boxes and sweating. 'The boss intercepted me,' he pants. 'He said anyone who has time for coffee also has time for hauling. If only I had refused...'",
        opts: [
            { 
                t: "Grin maliciously", 
                m: 2, f: 0, a: -10, c: 0, 
                r: "The suffering of others is the sweetest comfort. You did everything right." 
            },
            { 
                t: "Laugh at Markus", 
                rep: { "Markus": -10 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You briefly go over to laugh at Markus. 'Amateur mistake,' you whisper." 
            }
        ]
    },
    {
        id: "cof_ceo_trap_2c",
        title: "HR Review",
        reqStory: "path_ceo_trap_doubt",
        text: "An email from HR pops up. 'Routine loyalty review'. Dr. Wichtig apparently reported your skepticism as 'lack of trust in leadership'.",
        opts: [
            { 
                t: "Panic", 
                m: 10, f: 0, a: 10, c: 10, 
                r: "You frantically delete your browser history and hide your private snacks. Paranoia rises." 
            },
            { 
                t: "Stay cool", 
                m: 5, f: 0, a: 0, c: 5, 
                r: "You fill out the questionnaire with standard phrases. 'I love this company.' Hopefully, that's enough." 
            }
        ]
    },
    {
        id: "cof_egon_fix_1",
		char: "Egon",
        title: "Open Surgery",
        text: "The coffee machine is disassembled. Egon pokes a screwdriver into the grinder. 'Limescale. Limescale everywhere. And someone threw chewing gum in. This needs a mechanical solution.'",
        opts: [
            { 
                t: "Be a know-it-all: 'Just use descaler.'", 
                next: "path_egon_fix_chem", 
                rep: { "Egon": -10 }, 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Egon glares at you. 'Chemicals are for wimps! This is precision work.' He angrily hammers against the tank." 
            },
            { 
                t: "Bribe: 'Make it faster.'", 
                next: "path_egon_fix_turbo", 
                rep: { "Egon": 5 }, 
                m: 5, f: 0, a: 0, c: 0, 
                r: "You slip him a candy bar. 'Can you increase the pressure?' Egon grins. 'I'll remove the safety screw. At your own risk.'" 
            },
            { 
                t: "Help: Hold parts", 
                next: "path_egon_fix_help",
                rep: { "Egon": 10 },
                m: 20, f: -10, a: 10, c: 0, 
                r: "You shut up and hold the flashlight. Egon grumbles contentedly. 'You have hands that can work. Rare around here.'" 
            }
        ]
    },
    {
        id: "cof_egon_fix_2a",
        title: "Cold Coffee",
        reqStory: "path_egon_fix_chem",
        text: "You want to get a coffee later. The machine is running, but Egon, out of spite, disconnected the heating coil. The coffee comes out at exactly 18 degrees.",
        opts: [
            { 
                t: "Complain", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: 20, c: 0, 
                r: "You find a note: 'Complaints in writing to the janitor's basement, level -3.' He's laughing dirtily somewhere." 
            },
            { 
                t: "Use microwave", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You heat the coffee in the microwave. It now tastes of burnt plastic and limescale." 
            }
        ]
    },
    {
        id: "cof_egon_fix_2b",
        title: "Heart Palpitations",
        reqStory: "path_egon_fix_turbo",
        text: "The coffee doesn't flow, it shoots into the cup. It's black as crude oil and has a consistency like syrup. The cup vibrates slightly on the saucer.",
        opts: [
            { 
                t: "Chug it", 
                m: 5, f: -20, a: 10, c: 0, 
                r: "You drink it. Your pupils dilate. You can suddenly see sounds. You work the next 2 hours at 300% speed." 
            },
            { 
                t: "Cautiously sip", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Far too strong. You immediately get heartburn. Egon calls from a distance: 'That's diesel for the soul!'" 
            }
        ]
    },
    {
        id: "cof_egon_fix_2c",
		char: "Egon",
        title: "Craftsman's Honor",
        reqStory: "path_egon_fix_help",
        text: "The machine purrs like a kitten. Egon stands in the hallway and nods at you. He hung a 'Reserved' sign for you on the machine.",
        opts: [
            { 
                t: "Thank & Enjoy", 
                rep: { "Egon": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "The best coffee in weeks. And you now have respect from the janitor. That's worth more than salary." 
            },
            { 
                t: "Remove sign", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "You don't want special treatment. But the coffee still tastes good." 
            }
        ]
    },
    {
        id: "cof_elster_audit_1",
		char: "Frau Elster",
        title: "The Budget Control",
        text: "Ms. Elster stands with a clipboard in front of the coffee machine. She notes every cup. 'Mr. Müller! Bean consumption increased by 4.2% in Q3. Did you fill out withdrawal form K-7?'",
        opts: [
            { 
                t: "Argue: 'Coffee is a basic human right!'", 
                next: "path_elster_audit_fight", 
                rep: { "Frau Elster": -10 }, 
                m: 5, f: 0, a: 10, c: 0, 
                r: "She purses her lips. 'Basic rights cost money. I note: Uncooperative behavior regarding resource allocation.'" 
            },
            { 
                t: "Bribe: Throw 1 Euro into the cash box", 
                next: "path_elster_audit_pay", 
                rep: { "Frau Elster": 5 }, 
                m: 2, f: 0, a: -5, c: 0, 
                r: "Her gaze softens. 'A donation? Very commendable. We'll book that under 'Other Income'. Carry on.'" 
            },
            { 
                t: "Lie: 'I only take hot water.'", 
                next: "path_elster_audit_lie", 
                rep: { "Frau Elster": 5 }, 
                m: 2, f: 5, a: 0, c: 0, 
                r: "She nods contentedly. 'Exemplary! Water is free and good for the balance sheet. Drink up!'" 
            }
        ]
    },
    {
        id: "cof_elster_audit_2a",
		char: "Frau Elster",
        title: "Rationing",
        reqStory: "path_elster_audit_fight",
        text: "You want to get a coffee. The display shows: 'LIMIT REACHED'. A note from Ms. Elster hangs next to it: 'Due to extravagance, IT department has been throttled to 2 cups per day.'",
        opts: [
            { 
                t: "Angrily kick the machine", 
                m: 2, f: 0, a: 10, c: 5, 
                r: "It achieves nothing but a sore toe. The machine remains stubborn." 
            },
            { 
                t: "Scrounge from Marketing", 
                rep: { "Chantal": -5 },
                m: 10, f: -5, a: 5, c: 0, 
                r: "You sneak over to Chantal's Nespresso machine. She catches you. 'That'll cost extra!'" 
            }
        ]
    },
    {
        id: "cof_elster_audit_2b",
        title: "Paper War",
        reqStory: "path_elster_audit_pay",
        text: "You find an envelope on your desk. Contents: A donation receipt for 1.00 Euro and a two-page form for 'tax registration of minor amounts' that you have to sign.",
        opts: [
            { 
                t: "Fill it out", 
                rep: { "Frau Elster": 2 },
                m: 15, f: -10, a: 5, c: 0, 
                r: "You waste 15 minutes of working time for 1 Euro. Ms. Elster is happy, your soul weeps." 
            },
            { 
                t: "Ignore", 
                rep: { "Frau Elster": -5 },
                m: 2, f: 5, a: 0, c: 0, 
                r: "The form ends up in the trash. You know she'll note that in her blacklist." 
            }
        ]
    },

    {
        id: "cof_elster_audit_2c",
		char: "Frau Elster",
        title: "Tea Coercion",
        reqStory: "path_elster_audit_lie",
        text: "Ms. Elster is lurking again. 'Mr. Müller! I saw you eyeing the coffee beans. Let's stick to our healthy water, shall we?' She watches you strictly.",
        opts: [
            { 
                t: "Drink water (Obedience)", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You drink hot water. It tastes of nothing. Your caffeine withdrawal begins." 
            },
            { 
                t: "Secretly get coffee", 
                rep: { "Frau Elster": -10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "You wait until she blinks, and quickly press 'Espresso'. You feel like a criminal." 
            }
        ]
    },
    {
        id: "cof_markus_pitch_1",
		char: "Markus",
        title: "Networking",
        text: "Markus intercepts you. He leans casually against the machine, blocking the dispenser. 'Müller! Coffee is for closers. Apropos... have you thought about passive income? Crypto? NFTs of bored cats? I can get you into the inner circle.'",
        opts: [
            { 
                t: "Feigned interest (Free coffee?)", 
                next: "path_markus_pitch_scam", 
                rep: { "Markus": 5 }, 
                m: 15, f: 10, a: -5, c: 0, 
                r: "He talks for 15 minutes about blockchain and mindset. You understood nothing, but he pays for your coffee with his 'Black Card'." 
            },
            { 
                t: "Sarcasm: 'Is this a pyramid scheme?'", 
                next: "path_markus_pitch_hate", 
                rep: { "Markus": -10 }, 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Markus turns red. 'It's multi-level marketing! You just have the mindset of an employee.' He storms off offended." 
            },
            { 
                t: "Dominance: Silence & Stare", 
                next: "path_markus_pitch_alpha", 
                rep: { "Markus": 5 }, 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You stare him silently in the eyes, press the button, and leave. Markus nods respectfully. 'Alpha move. I like it.'" 
            }
        ]
    },
    {
        id: "cof_markus_pitch_2a",
        title: "Spam Attack",
        reqStory: "path_markus_pitch_scam",
        text: "Your email inbox is overflowing. Markus unsolicitedly signed you up for his newsletter 'Porsche in 3 Weeks'. Subject: 'WAKE UP MATRIX SLAVE!!!'.",
        opts: [
            { 
                t: "Delete & Block", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You spend time creating filters. WhatsApp messages still come through." 
            },
            { 
                t: "Confront Markus", 
                rep: { "Markus": -5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "'That's growth hacking!' he defends himself. You now have a headache." 
            }
        ]
    },
    {
        id: "cof_markus_pitch_2b",
		char: "Markus",
        title: "Defamation",
        reqStory: "path_markus_pitch_hate",
        text: "You hear Markus gossiping in the kitchen. 'Müller? Total low-performer. Hinders sales. Afraid of success.' Gabi and Chantal listen.",
        opts: [
            { 
                t: "Intervene", 
                rep: { "Markus": -5, "Gabi": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "You expose him. 'How are your NFTs doing, Markus?' Silence. Gabi giggles." 
            },
            { 
                t: "Ignore", 
                m: 2, f: 0, a: 10, c: 0, 
                r: "You swallow your anger. The lion doesn't care about the opinion of sheep." 
            }
        ]
    },
    {
        id: "cof_markus_pitch_2c",
		char: "Markus",
        title: "The Mentor",
        reqStory: "path_markus_pitch_alpha",
        text: "Markus comes to your desk. He places a book in front of you: 'The 4-Hour Workweek'. 'For you, Tiger. We wolves have to stick together.'",
        opts: [
            { 
                t: "Use book as monitor stand", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "It's the perfect height. Finally, no more neck pain. Thanks, Markus." 
            },
            { 
                t: "Read", 
                m: 30, f: 20, a: 5, c: 0, 
                r: "You read three pages. It's all about outsourcing work to others. You feel dirty." 
            }
        ]
    },
    {
        id: "cof_gabi_break_1",
		char: "Gabi",
        title: "Hide and Seek",
        text: "Gabi crouches behind the large potted plant next to the coffee machine. She whispers: 'Psst! I'm hiding from the UPS man. He has a package that weighs 30kg. Don't say anything!'",
        opts: [
            { 
                t: "Betray: 'SHE'S OVER THERE!'", 
                next: "path_gabi_break_snitch", 
                rep: { "Gabi": -10 }, 
                m: 5, f: 0, a: 5, c: -5, 
                r: "Gabi has to crawl out of her hiding place. Her glare could kill as she accepts the package." 
            },
            { 
                t: "Cover: 'Haven't seen her.'", 
                next: "path_gabi_break_help", 
                rep: { "Gabi": 10 }, 
                m: 5, f: 5, a: -5, c: 0, 
                r: "The delivery man leaves. Gabi breathes a sigh of relief. 'You're a lifesaver. Have a cookie.'" 
            },
            { 
                t: "Blackmail: 'That'll cost a coffee.'", 
                next: "path_gabi_break_deal", 
                rep: { "Gabi": -5 }, 
                m: 5, f: 0, a: 0, c: 0, 
                r: "She rolls her eyes, but buys you one from the machine. 'Greedy pig. But a deal's a deal.'" 
            }
        ]
    },

    {
        id: "cof_gabi_break_2a",
		char: "Gabi",
        title: "Mailroom Revenge",
        reqStory: "path_gabi_break_snitch",
        text: "You're waiting for an urgent package. Gabi grins at you at reception. 'Oh, that? I sent it back. 'Recipient unknown moved'. Well. Tough luck.'",
        opts: [
            { 
                t: "Freak out", 
                rep: { "Gabi": -5 },
                m: 10, f: 0, a: 20, c: 0, 
                r: "You scream. Gabi files her nails. 'Your aggression violates house rules.'" 
            },
            { 
                t: "Drive to the depot", 
                m: 45, f: -20, a: 10, c: 0, 
                r: "You pick it up yourself. That cost you almost an hour." 
            }
        ]
    },

    {
        id: "cof_gabi_break_2b",
		char: "Gabi",
        title: "Early Warning System",
        reqStory: "path_gabi_break_help",
        text: "Your phone rings briefly, just as you were about to get up. Gabi: 'Code Red. Dr. Wichtig is on his way to you. He looks angry. Act busy.'",
        opts: [
            { 
                t: "Prepare", 
                rep: { "Dr. Wichtig": -2 }, 
                m: 5, f: -10, a: 5, c: -10, 
                r: "When the boss arrives, you're deep in Excel. He nods contentedly and moves on. Gabi saved you." 
            },
            { 
                t: "Flee", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You're gone before he gets there. Perfect timing." 
            }
        ]
    },

    {
        id: "cof_gabi_break_2c",
		char: "Gabi",
        title: "Settle Debts",
        reqStory: "path_gabi_break_deal",
        text: "Gabi slaps a chocolate bar on your desk. 'Here. Your hush money. I hope it tastes like betrayal.'",
        opts: [
            { 
                t: "Eat", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "It tastes like chocolate. Morality is for people who aren't hungry." 
            },
            { 
                t: "Apologize", 
                rep: { "Gabi": 5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "'It was just a joke.' Gabi grumbles. 'Yeah, yeah. Eat it.'" 
            }
        ]
    },
    {
        id: "cof_descale_absurd_1",
        title: "Descaling: Step 1 of 73",
        text: "You want coffee. The machine blocks: 'DESCALING REQUIRED'. The display assistant demands absurdities: 'Step 1: Tilt water tank 45 degrees. Step 2: Open drawer 3 times.' The boss calls out as he passes: 'Good that you're doing that! Keep at it!'",
        opts: [
            { 
                t: "Perform all 73 steps", 
                next: "path_descale_brav",
				rep: { "Dr. Wichtig": 10 },
                m: 75, f: -10, a: 30, c: -5, 
                r: "An hour and a half! You had to massage the steam nozzle with a toothbrush. Your mood is at rock bottom. The boss is happy. You currently have no desire for coffee and go back to work." 
            },
            { 
                t: "Manually bypass sensor", 
                req: "screw",
                next: "path_descale_screw",
                m: 5, f: 5, a: -5, c: 0, 
                r: "You press the hidden microswitch for 'cleaning completed' with the screwdriver. The stupid machine believes you. The coffee flows. You return to the office satisfied." 
            },
            { 
                t: "Pour in vinegar essence (Botch job)", 
                next: "path_descale_vinegar",
                m: 5, f: 10, a: 0, c: 0, 
                r: "You pour pure vinegar into the tank and blindly start the rinse cycle. It takes a moment, but you don't feel like waiting. You subtly slip away to your office." 
            }
        ]
    },
    {
        id: "cof_descale_absurd_2a",
        title: "The Coffee God",
        reqStory: "path_descale_brav",
        text: "You've recovered from the 75-minute trauma and enter the kitchen. The machine is so clean, it shines like a diamond. No one else has dared to use it yet.",
        opts: [
            { 
                t: "Reverently draw the first coffee", 
                m: 10, f: 10, a: -20, c: 0, 
                r: "Your first drawn coffee is a revelation. Perfect crema, perfect temperature. This coffee heals wounds. Your anger drops massively." 
            },
            { 
                t: "Put up an 'Out of Order' sign", 
                m: 5, f: 5, a: 10, c: 10, 
                r: "You reserve the clean device for yourself. Colleagues are furious and complain to the boss. But your coffee remains pure from now on." 
            },
            { 
                t: "Sell coffee to Chantal for 5€", 
                rep: { "Chantal": -5 },
                m: 5, f: 0, a: -10, c: 0, 
                r: "You sell the perfect 'First Brew' to caffeine-addicted Chantal. She pays grumbling. You're rich, but she hates your capitalism." 
            }
        ]
    },
    {
        id: "cof_descale_absurd_2b",
		char: "Markus",
        title: "Chunks in the Cup",
        reqStory: "path_descale_screw",
        text: "Hours after your screwdriver intervention, Markus from Sales comes to your office with a cup. He almost spits. 'Say, what's wrong with the coffee?! There are white chunks floating in it! Is that cocaine or poison?!'",
        opts: [
            { 
                t: "Lie: 'That's Vanilla-Flavor-Crunch!'", 
                rep: { "Markus": 5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "Markus stares into the cup. 'Crunch? Oh, premium!' He actually drinks it. The limescale problem is solved." 
            },
            { 
                t: "Say: 'Then descale it yourself!'", 
                rep: { "Markus": -10 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "Markus angrily throws the coffee into your trash can. 'Always these arrogant IT guys!' You lost a friend, but saved time." 
            },
            { 
                t: "Feel guilty & get him new coffee from the bakery", 
                m: 20, f: -5, a: 10, c: 0, 
                r: "You go and buy him a decent coffee. He's appeased, but you lost 20 minutes and 3 Euros." 
            }
        ]
    },
    {
        id: "cof_descale_absurd_2c",
		char: "Dr. Wichtig",
        title: "Salad Dressing",
        reqStory: "path_descale_vinegar",
        text: "Some time has passed. Suddenly, the boss storms out of his office. He gags. 'Müller! What's in the coffee machine?! I wanted an espresso and it tastes like lukewarm cucumber salad! The whole hallway smells of vinegar!'",
        opts: [
            { 
                t: "Feigned ignorance: 'Definitely an act of sabotage!'", 
				rep: { "Dr. Wichtig": -5 },
                m: 10, f: 0, a: 15, c: 15, 
                r: "The boss half-believes you, but he condemns you to rinse the machine with clear water for 30 minutes. This morning's botch job has caught up with you." 
            },
            { 
                t: "Confess: 'That's a lifehack from the internet!'", 
				rep: { "Dr. Wichtig": -15 },
                m: 5, f: 0, a: 20, c: 30, 
                r: "The boss turns red. 'Keep your lifehacks out of my machine!' He's absolutely furious and yells at you across the entire hallway." 
            },
            { 
                t: "Flee: 'Phone's ringing, gotta go!'", 
                m: 5, f: 5, a: 0, c: 10, 
                r: "You run frantically back to your office and lock the door. The boss continues yelling in the hallway, but finds another victim. Cowardly, but effective." 
            }
        ]
    },
    {
        id: "cof_swiss_choc_1",
        title: "The Sweet Find",
        text: "Someone left a sinfully expensive, still wrapped bar of Swiss premium chocolate on the microwave. No note, no name. It just lies there, calling your name.",
        opts: [
            { 
                t: "Pocket it (IT Lost & Found)", 
                loot: "chocolate", 
                next: "path_choc_steal", 
                m: 2, f: 0, a: -5, c: 5, 
                r: "You professionally make the chocolate disappear into your bag. No one saw anything. An excellent haul." 
            },
            { 
                t: "Add a Post-it: 'For everyone?'", 
                next: "path_choc_share", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You're social. You stick a note on it. Let's see how long that lasts." 
            },
            { 
                t: "Ignore. Definitely a trap.", 
                next: "path_choc_ignore", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "This is probably an HR social experiment. You make your coffee and disappear." 
            }
        ]
    },
    {
        id: "cof_swiss_choc_2a",
		char: "Frau Elster",
        title: "The Confectionery Thief",
        reqStory: "path_choc_steal",
        text: "Ms. Elster hangs a whiny note on the kitchen door: 'Who stole my diet-exception chocolate? I am deeply disappointed in this team!'",
        opts: [
            { 
                t: "Feigned sympathy", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "You read the note and theatrically shake your head at such audacity. The chocolate in your backpack or stomach suddenly feels very heavy." 
            },
            { 
                t: "Blame the cleaning staff", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 5, a: 0, c: 5, 
                r: "'It was probably the cleaning company,' you whisper to her. She nods angrily. Abysmal karma, but you're off the hook." 
            }
        ]
    },
    {
        id: "cof_swiss_choc_2b",
        title: "Feeding Frenzy",
        reqStory: "path_choc_share",
        text: "Your 'For everyone?' note caused a bloodbath. The plate was gone in seconds. Intern Kevin has a stomach ache because he ate almost all of it himself. Ms. Elster is angrily looking for her chocolate.",
        opts: [
            { 
                t: "Loudly snitch on Kevin", 
                rep: { "Kevin": -5, "Frau Elster": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You elegantly direct Ms. Elster's wrath towards Kevin. He has to go to the corner and be ashamed. You wash your hands in innocence." 
            },
            { 
                t: "Defend Kevin", 
                rep: { "Kevin": 5, "Frau Elster": -5 },
                m: 5, f: -5, a: 5, c: 0, 
                r: "'Anyone who doesn't write their name on it has only themselves to blame!' you block. Kevin looks at you like a superhero." 
            }
        ]
    },
    {
        id: "cof_swiss_choc_2c",
        title: "Expiration Date",
        reqStory: "path_choc_ignore",
        text: "The chocolate lay untouched on the microwave for three days. Meanwhile, it melted and re-hardened. Egon annoyed scrapes off the brown stain.",
        opts: [
            { 
                t: "Praise Egon for his cleaning", 
                rep: { "Egon": 5 },
                m: 2, f: 5, a: -5, c: 5, 
                r: "'Good job, Egon.' He just grumbles unintelligibly, but deep down he's happy." 
            },
            { 
                t: "Help out and scrape", 
                rep: { "Egon": 10 },
                m: 10, f: -5, a: 5, c: 0, 
                r: "You grab a spatula and help him. Shared cleaning brings people together." 
            }
        ]
    },
    {
        id: "cof_stolen_sandwich_1",
        title: "Refrigerator Mafia",
        text: "You open the refrigerator for some milk. Inside, a perfectly prepared pastrami sandwich grins at you. A passive-aggressive note is stuck to it: 'Hands off! Property of Markus (Sales)!!!'",
        opts: [
            { 
                t: "Confiscate", 
                loot: "sandwich", 
                next: "path_sandwich_steal", 
                m: 2, f: -5, a: 0, c: 5, 
                r: "Sales earns too much anyway. You take the sandwich. It now belongs to IT infrastructure." 
            },
            { 
                t: "Only replace the note", 
                next: "path_sandwich_prank", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You cross out 'Markus' and write 'Egon' on it. This is going to be extremely funny today." 
            },
            { 
                t: "Ignore and take milk", 
                next: "path_sandwich_leave", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You don't get involved in refrigerator wars. You take the milk and leave." 
            }
        ]
    },
    {
        id: "cof_stolen_sandwich_2a",
		char: "Markus",
        title: "The Hungry Wolf",
        reqStory: "path_sandwich_steal",
        text: "Markus yells in the hallway. 'WHO WAS AT MY PASTRAMI?! I'M HAVING A LOW-BLOOD-SUGAR CRASH! MY DEALS ARE FALLING APART!' He looks like he's about to cry.",
        opts: [
            { 
                t: "Sacrifice an old donut", 
                rem: "donut", 
                rep: { "Markus": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "You graciously hand him your old donut. He eats it hastily. 'Thanks, Müller. You're my savior.' Your conscience is washed clean." 
            },
            { 
                t: "Silently watch him suffer", 
                rep: { "Markus": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "The pastrami in your stomach was truly excellent. You say nothing and enjoy the show." 
            }
        ]
    },
    {
        id: "cof_stolen_sandwich_2b",
		char: "Markus",
        title: "The Name War",
        reqStory: "path_sandwich_prank",
        text: "Markus and Egon stand facing each other in the kitchenette. Egon is taking a hearty bite of the pastrami sandwich. 'My name was on it, suit-wearer!' Egon says, smacking his lips. Markus gasps for air.",
        opts: [
            { 
                t: "Enjoy the popcorn mentality", 
                m: 10, f: 10, a: -15, c: 10, 
                r: "You lean against the doorframe and watch the escalating argument. This is far better than any Netflix series." 
            },
            { 
                t: "Intervene and resolve", 
                rep: { "Markus": 5, "Egon": 5 },
                m: 5, f: -5, a: 10, c: 0, 
                r: "You end the prank. Both look at you dumbfounded. 'IT humor,' you mumble and quickly disappear." 
            }
        ]
    },
    {
        id: "cof_stolen_sandwich_2c",
		char: "Markus",
        title: "Spoiled",
        reqStory: "path_sandwich_leave",
        text: "Markus was out of the office yesterday. The sinfully expensive sandwich is still in the refrigerator today. The bread is completely soggy and looks gray.",
        opts: [
            { 
                t: "Laugh at Markus via email", 
                rep: { "Markus": -5 },
                m: 2, f: 0, a: -5, c: 0, 
                r: "You send him an email: 'Your sandwich is currently mutating.' He only replies with a crying emoji." 
            },
            { 
                t: "Secretly dispose of the disgusting thing", 
                m: 5, f: -5, a: 5, c: -5, 
                r: "You sacrifice yourself for the hygiene of the kitchenette and throw it away. No one thanks you, but the smell is gone." 
            }
        ]
    },
    {
        id: "cof_grinder_1",
        title: "Deafening",
        text: "The expensive coffee machine suddenly grinds the beans with a sound reminiscent of a jet engine starting. The vibrations make the cups in the cabinet clatter. Something in the grinder is seriously jammed.",
        opts: [
            { 
                t: "Give it a hearty whack", 
                next: "path_grinder_hit", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "BAM. You hit the side with the flat of your hand. The screeching stops immediately. The machine purrs again. Violence is a solution after all." 
            },
            { 
                t: "Turn off machine & open ticket with HR", 
                next: "path_grinder_ticket", 
                m: 5, f: -5, a: 10, c: 5, 
                r: "You pull the plug and hang an 'OUT OF ORDER' sign. Half the department stares at you as if you just canceled Christmas." 
            },
            { 
                t: "Endure with hands over ears", 
                next: "path_grinder_endure", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You let it scream until your coffee is ready. You have a slight tinnitus, but you have your coffee." 
            }
        ]
    },
    {
        id: "cof_grinder_2a",
        title: "The Mechanic",
        reqStory: "path_grinder_hit",
        text: "Your blow calmed the machine, but now the side panel is completely loose and rattles annoyingly in rhythm with the pump pressure.",
        opts: [
            { 
                t: "Patch with duct tape", 
                req: "tape", 
                m: 5, f: -5, a: -10, c: -5, 
                r: "Two thick silver strips of tape solve the problem. It looks like a construction site, but the acoustics are saved." 
            },
            { 
                t: "Ignore the rattling", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "Who needs silence in the office anyway? You take your coffee and leave the clattering machine behind." 
            }
        ]
    },
    {
        id: "cof_grinder_2b",
        title: "The Coffee Uprising",
        reqStory: "path_grinder_ticket",
        text: "The machine is still out of order. A furious crowd of employees has gathered in the hallway. The mood is extremely hostile. Someone whispers: 'IT broke the thing.'",
        opts: [
            { 
                t: "Surrender and make instant coffee", 
                m: 15, f: -5, a: 10, c: -10, 
                r: "You dig out the old powder. It tastes like damp earth, but it stops the impending mutiny of the workforce." 
            },
            { 
                t: "Flee and lock yourself in the office", 
                m: 5, f: 5, a: 0, c: 10, 
                r: "You run to your office and lock the door. Let the caffeine addicts eat each other." 
            }
        ]
    },
    {
        id: "cof_grinder_2c",
        title: "Explosion",
        reqStory: "path_grinder_endure",
        text: "You shouldn't have forced the machine to keep running yesterday. The grinder exploded with a loud bang this morning. Coffee powder is stuck to the ceiling.",
        opts: [
            { 
                t: "Subtly leave the scene", 
                m: 5, f: 5, a: 0, c: 10, 
                r: "You turn on your heel and leave. Whoever cleans that up will definitely not have fun." 
            },
            { 
                t: "Call Egon via urgent ticket", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: 5, c: -5, 
                r: "You call the janitor. Egon sees the powder on the ceiling and loses all faith in humanity." 
            }
        ]
    },
    {
        id: "cof_workout_2a",
		char: "Chantal",
        title: "Muscle Soreness",
        reqStory: "path_workout_join",
        text: "You drag yourself to the coffee machine. The 90-minute Pilates class on the floor is taking its toll. You can barely lift your arms to grab the cup due to the pain. Chantal stands next to you, super fit and fresh.",
        opts: [
            { 
                t: "Ask her to hand you the coffee", 
                rep: { "Chantal": 10 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Chantal laughs. 'Haha, beginner! But you have potential.' She hands you the cup. You've gained a friend, even if you feel 80 years old." 
            },
            { 
                t: "Pour it yourself through pain", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You grit your teeth and shakily lift your arm. Every muscle burns. You have your coffee, but you're extremely irritable." 
            }
        ]
    },
    {
        id: "cof_dance_1",
        title: "Smooth Criminal",
        text: "You're getting a coffee. The room is empty. You have an absolute earworm of 'Billie Jean' and let yourself go. You pull off a perfect moonwalk, grab your crotch, and do a wild spin. As you open your eyes, you're staring directly into a live camera lens. The boss is giving a live interview for 'GlobalCorp Investor Day' behind it.",
        opts: [
            { 
                t: "Total panic: Immediately run away", 
                next: "path_dance_flee", 
                m: 5, f: 0, a: 30, c: 10, 
                r: "You widen your eyes, let out a quiet shriek, and sprint out of frame. An incredibly embarrassing exit, now forever in the company archive and on the internet." 
            },
            { 
                t: "See it through: Finish the dance perfectly", 
                next: "path_dance_finish", 
                m: 10, f: 10, a: -10, c: 15, 
                r: "If you're going to do it, do it right! You tap your imaginary hat, glide backward out of frame, and disappear coolly. The investors in the stream go wild with excitement." 
            },
            { 
                t: "Sabotage: Cover lens with donut", 
                rem: "donut", 
                next: "path_dance_donut", 
                m: 5, f: 0, a: 10, c: 20, 
                r: "In a panic, you press your sticky donut directly onto the cameraman's sinfully expensive lens. Screen black. Evidence (partially) destroyed, cameraman rages. (Item consumed)" 
            }
        ]
    },
    
];