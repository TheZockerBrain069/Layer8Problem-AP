export const server = [

    {
        id: "srv_lore_1",
        title: "The Forgotten Filing Cabinet",
        text: "Behind the mainframe, a dusty cabinet with 'CONFIDENTIAL' written on it stands slightly ajar. A roll of packing material rests on top.",
        opts: [
            { 
                t: "Rummage through the files", 
                loot: "secret_list", 
                next: "path_lore_list", 
                m: 20, f: 5, a: 0, c: 5, 
                r: "You dig through dusty invoices until you find it: HR's 'Blacklist'. This is pure dynamite. You quickly pocket it. (Inventory +1)" 
            },
            { 
                t: "Take the bubble wrap", 
                loot: "bubble_wrap", 
                next: "path_lore_bubble", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You opt for the simple pleasure. The bubble wrap goes into your bag. Sometimes plastic is better than knowledge. (Inventory +1)" 
            },
            { 
                t: "Touch nothing and leave", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You let sleeping ghosts lie. Some doors are better left unopened." 
            }
        ]
    },
    {
        id: "srv_lore_2a",
        title: "Internal Investigation",
        reqStory: "path_lore_list",
        text: "You hear heavy footsteps in the hallway. It's 'The Cleaner' from HR. He's sniffing out leaks. The 'Blacklist' in your pocket suddenly feels impossibly heavy.",
        opts: [
            { 
                t: "Hide in the cable tray", 
                m: 15, f: -5, a: 15, c: -5, 
                r: "You squeeze yourself between dusty cable bundles. He walks past, sniffs the air briefly, then disappears. Your heart pounds." 
            },
            { 
                t: "Return the list", 
                rem: "secret_list",
                m: 5, f: 0, a: -5, c: 0, 
                r: "You intercept him. 'Found this. Just lying around.' He takes it wordlessly, nods at you, and leaves. No evidence, no trouble. (Item removed)" 
            },
            { 
                t: "Distract with a fire extinguisher", 
                req: "fire_ext",
                m: 5, f: 0, a: -5, c: 5, 
                r: "A quick blast of CO2 creates fog and confusion. 'Fire alarm? I'm out!' he shouts, running off. Chaos is your friend." 
            }
        ]
    },
    {
        id: "srv_lore_2b",
        title: "Bag Check",
        reqStory: "path_lore_bubble",
        text: "The HR 'Cleaner' stops you in the hallway. 'Routine inspection. We're looking for stolen company property. Empty your pockets!' He stares at your bulging trouser pocket.",
        opts: [
            { 
                t: "Readily show your pockets", 
                m: 5, f: 0, a: -5, c: -5, 
                r: "He finds... bubble wrap. He wrinkles his nose. 'Just trash? You have no ambition at all.' He leaves you and your bubble wrap standing there." 
            },
            { 
                t: "Indignantly refuse", 
                m: 2, f: 0, a: 10, c: 5, 
                r: "'This violates my rights!' He jots down your name on a list, but since he can't prove anything, he leaves." 
            },
            { 
                t: "Offer a bribe-donut", 
                rem: "donut",
                m: 2, f: 5, a: -10, c: -5, 
                r: "He stares at the old donut. His stomach rumbles. 'Alright. One-time exception.' He takes the donut and disappears, chewing. (Item removed)" 
            }
        ]
    },
    {
        id: "srv_sleep_1",
        title: "The Cardboard Warehouse",
        text: "Behind the racks, old server packaging is stacked to the ceiling. Technically, you should take it to recycling. But if you arrange it cleverly, it forms an opaque cave...",
        opts: [
            { 
                t: "Build a secret fortress", 
                next: "path_sleep_fort", 
                m: 60, f: 35, a: -10, c: 10, 
                r: "You build yourself a cozy nest behind the cardboard wall. No one can see you here. You take a nap and leave the structure for 'future emergencies'." 
            },
            { 
                t: "Dispose of everything immediately", 
                next: "path_sleep_trash", 
                m: 30, f: -10, a: 5, c: 0, 
                r: "You haul the boxes to the dumpster. It's boring and you sweat, but the server room is now properly empty again." 
            },
            { 
                t: "Stick a 'RETURN' label on it", 
                next: "path_sleep_label", 
                m: 5, f: 10, a: -5, c: 0, 
                r: "You randomly stick labels on the stacks. Now it looks like an important process. 'Future You's' problem." 
            }
        ]
    },
    {
        id: "srv_sleep_2a",
        title: "The Fortress Commander",
		char: "Kevin",
        reqStory: "path_sleep_fort",
        text: "Kevin stands in front of your cardboard fortress. He's put up a password sign: 'Entry for Cool Kids Only'. 'Hey, boss! Nice pad. I ran some Wi-Fi cables.'",
        opts: [
            { 
                t: "Praise him", 
                rep: { "Kevin": 5 },
                m: 5, f: 5, a: -5, c: 5, 
                r: "'Good work, soldier.' You spend 10 minutes discussing fortress architecture. Productivity is in the basement, morale is soaring." 
            },
            { 
                t: "Demolish the fortress", 
                rep: { "Kevin": -10 },
                m: 15, f: -5, a: 5, c: 0,
                r: "You panic that the boss will see it. You kick over the boxes. Kevin almost cries. 'My castle...'" 
            }
        ]
    },
    {
        id: "srv_sleep_2b",
		char: "Dr. Wichtig",
        title: "Praise from the Boss",
        reqStory: "path_sleep_trash",
        text: "The boss walks through the empty, tidy aisle where the boxes used to be. He nods contentedly. 'Finally some order here. Müller, that was exemplary.'",
        opts: [
            { 
                t: "Modestly nod", 
				rep: { "Dr. Wichtig": 5 },
                m: 2, f: -5, a: -5, c: 10, 
                r: "You say nothing and enjoy the rare moment of recognition. Your standing in the company has improved." 
            },
            { 
                t: "Ask for a raise", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "'Because of the boxes? Don't overdo it.' The mood immediately sours again. Greed eats brains." 
            }
        ]
    },
    {
        id: "srv_sleep_2c",
        title: "The Logistics Error",
        reqStory: "path_sleep_label",
        text: "A courier driver stands utterly confused in front of your 'Return' boxes. 'I'm supposed to pick this up? But the delivery note says 2018... and why are they empty?'",
        opts: [
            { 
                t: "Convince him to take them", 
                m: 10, f: 5, a: -5, c: 10, 
                r: "You talk at him until he, annoyed, loads them up. 'I don't care anyway.' Gone is gone. You're a genius." 
            },
            { 
                t: "Tell the truth", 
                m: 30, f: -10, a: 5, c: -5, 
                r: "'Okay, I was just too lazy.' You have to help him carry everything to the dumpster while he curses at you." 
            }
        ]
    },
    {
        id: "srv_tool_1",
        title: "The External Technician",
        text: "An external service provider has left his toolbox open in the server room. He's currently out for a smoke. A high-quality screwdriver gleams at you.",
        opts: [
            { 
                t: "Pocket it", 
                loot: "screw", 
                next: "path_tool_theft", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "Mine. You can always use a tool. You casually leave the rest untouched. (Inventory +1)" 
            },
            { 
                t: "Sort the chaos in the toolbox", 
                next: "path_tool_sort", 
                m: 15, f: -5, a: -10, c: 0, 
                r: "You can't stand the mess. You sort bits, pliers, and cable ties by size. Very satisfying." 
            },
            { 
                t: "Close the lid and wait", 
                next: "path_tool_wait", 
                m: 10, f: 5, a: 0, c: 0, 
                r: "You close the toolbox so no one else gets any silly ideas. Today, you are the guardian of property." 
            }
        ]
    },
    {
        id: "srv_tool_2a",
        title: "Missing Item Report",
        reqStory: "path_tool_theft",
        text: "The technician returns and frantically rummages through his toolbox. 'Where's my Wera driver?! It was right here! That thing costs 40 Euros!' He stares at you.",
        opts: [
            { 
                t: "Lie cold-heartedly: 'No idea.'", 
                m: 2, f: 0, a: -5, c: 15, 
                r: "You shrug. 'Maybe the cleaning crew?' He curses and kicks the rack. He doesn't quite believe you, but he has no proof." 
            },
            { 
                t: "Blame Kevin", 
                m: 5, f: 5, a: -10, c: -5, 
                r: "'The intern was here earlier...' The technician turns red. 'I'll kill that kid!' He storms out. You feel a little bad, but hey: free tool." 
            },
            { 
                t: "Return it: 'It was on the floor.'", 
                rem: "screw", 
                m: 5, f: 0, a: 5, c: -5, 
                r: "'Oh, I... uh... secured it.' You return it grudgingly. The technician snatches it from your hand. Your conscience is clear, your pockets are empty." 
            }
        ]
    },
    {
        id: "srv_tool_2b",
        title: "The Genius Masters Chaos",
        reqStory: "path_tool_sort",
        text: "The technician returns, sees the perfectly sorted toolbox, and turns pale. 'Who... who touched this? I can't find ANYTHING anymore! My system is based on pile logic!'",
        opts: [
            { 
                t: "Proudly: 'You're welcome.'", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "'Welcome?! It'll take me hours to mess this up again!' He calls his boss to complain about 'internal sabotage'." 
            },
            { 
                t: "Lecture him on efficiency", 
                m: 20, f: -10, a: 5, c: 5, 
                r: "You explain the 5S system to him. He doesn't listen at all, instead angrily throwing everything back into a pile. Pearls before swine." 
            },
            { 
                t: "Leave wordlessly", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You leave the barbarian to his misery. Some people just don't want to be saved." 
            }
        ]
    },
    {
        id: "srv_tool_2c",
        title: "Search and Rescue",
        reqStory: "path_tool_wait",
        text: "The technician returns, looking desperate. 'Damn it, I can't find my crimping tool. I have to be done in 10 minutes, or it's a penalty clause.'",
        opts: [
            { 
                t: "Help him search", 
                loot: "energy", 
                m: 15, f: -10, a: 5, c: -5, 
                r: "You crawl together under the raised floor. You find the pliers. 'Thanks, man! Here, take this.' He tosses you an energy drink. (Inventory +1)" 
            },
            { 
                t: "Laugh at him", 
                m: 2, f: 5, a: -10, c: 5, 
                r: "'Pro at work, huh?' He gives you the middle finger. Your mood improves, but you haven't made any friends." 
            },
            { 
                t: "Give him zip ties", 
                rem: "zip_ties", 
                m: 5, f: 0, a: -5, c: -5, 
                r: "'Forget the pliers, take these.' He beams. 'Zip ties fix everything.' He bodges the connection and leaves." 
            }
        ]
    },
    {
        id: "srv_bernd_1",
        title: "Tears & Promille",
        text: "You find Bernd from Sales, weeping between the warm server racks, uncorking a bottle of 'Glenfiddich'. He slurs: 'My wife's gone, my sales are gone... everything's gone.'",
        opts: [
            { 
                t: "Sit down and drink with him", 
                next: "path_bernd_drunk", 
                m: 45, f: 20, a: -50, c: 20, 
                r: "You empty the bottle. Bernd tells you about his dream of breeding alpacas. You tell him your root password (hopefully you only dreamed that). You're best friends." 
            },
            { 
                t: "Cold-heartedly report him to HR", 
                next: "path_bernd_snitch", 
                m: 10, f: -5, a: 0, c: -15, 
                r: "You make an anonymous call. Two minutes later, Bernd is dragged out by security. He shouts: 'Betrayal! Et tu, Brute?!' You feel dirty, but your job is safe." 
            },
            { 
                t: "Give him an energy drink", 
                rem: "energy", 
                next: "path_bernd_hyper", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Here, drink this and pull yourself together, you wreck.' Bernd chugs the can through tears. His eyes suddenly widen. 'Sugar... caffeine... PERFORMANCE?!'" 
            }
        ]
    },
    {
        id: "srv_bernd_2a",
        title: "Hangover Mood",
        reqStory: "path_bernd_drunk",
        text: "Bernd suddenly stands beaming at your desk. He's wearing sunglasses and smells of mint. 'Hey partner! About our idea yesterday... I've already registered the domain alpaca-server-farm.de!'",
        opts: [
            { 
                t: "Play along: 'Sure, I'm in.'", 
                m: 15, f: 10, a: -5, c: 5, 
                r: "Bernd hugs you. 'We'll be rich! I'll take care of the hay, you handle the IT.' He whistles as he leaves. You now have a side business." 
            },
            { 
                t: "Panic: 'I was drunk!'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Bernd's face falls. 'Oh. I thought... that was real.' He shuffles away sadly. You feel like a monster." 
            },
            { 
                t: "Ask for more booze", 
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 5, a: -10, c: 10, 
                r: "'Ha! Good joke!' Bernd laughs loudly. Too loudly. The boss looks out of his office. Better get out of here quickly." 
            }
        ]
    },
    {
        id: "srv_bernd_2b",
        title: "Legacy of the Fallen",
        reqStory: "path_bernd_snitch",
        text: "You walk past Bernd's empty desk. He's been 'released'. His office supplies are still in his trash can. On top, an almost new donut.",
        opts: [
            { 
                t: "Loot the donut", 
                loot: "donut", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Tastes like victory and glaze. (Inventory +1)" 
            },
            { 
                t: "Steal his stapler", 
                m: 2, f: 0, a: -5, c: 0, 
                r: "It's a good stapler. Swingline. Red. You caress it. Mine." 
            },
            { 
                t: "Feel guilty", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You stare at the empty chair. What if you're next? The thought ruins your day." 
            }
        ]
    },
    {
        id: "srv_bernd_2c",
        title: "The Wolf of Server Room",
        reqStory: "path_bernd_hyper",
        text: "Bernd rushes past you. He's practically vibrating. The mix of whiskey and energy drink has changed something in him. He screams into the phone: 'BUY! SELL! EVERYTHING MUST GO!'",
        opts: [
            { 
                t: "Admire him", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "He just sold the janitor a leasing contract for a broom. Impressive." 
            },
            { 
                t: "Try to slow him down", 
                m: 10, f: -5, a: 10, c: 0, 
                r: "You try to calm him. He stares at you with wide, dilated pupils. 'Time is money! Out of my way, low-earner!' He sprints to the elevator." 
            },
            { 
                t: "Sell him Wi-Fi passwords", 
                loot: "secret_list", 
                m: 15, f: 0, a: -5, c: 5, 
                r: "'Data! I need data!' He trades his client list for the guest Wi-Fi password. A fair deal among madmen. (Inventory +1)" 
            }
        ]
    },
    {
        id: "srv_mining_1",
        title: "Hardware Find",
        text: "Behind a loose floor panel, you find a rattling rig of graphics cards. It's loud, hot, and smells of burnt dust. A sticky note on it says: 'DO NOT TOUCH! MOMMY IS CALCULATING!'",
        opts: [
            { 
                t: "Let it run", 
                next: "path_mining_heat", 
                m: 5, f: 10, a: 0, c: 20, 
                r: "You cover it back up. Passive income! As long as the boss doesn't check the electricity bill, you're rich. (Theoretically, at least.)" 
            },
            { 
                t: "Pull the plug", 
                next: "path_mining_crash", 
                m: 5, f: -5, a: 5, c: -5, 
                r: "Zap. Silence. The fans die with a sad whir. You feel responsible and joyless." 
            },
            { 
                t: "Steal the USB stick on the side", 
                loot: "usb_stick", 
                next: "path_mining_wallet", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "That must be the wallet! You pull out the stick. The screen goes black. Doesn't matter, you're a crypto millionaire now. (Inventory +1)" 
            }
        ]
    },
    {
        id: "srv_mining_2a",
        title: "Thermal Escalation",
        reqStory: "path_mining_heat",
        text: "The fire alarm blares. Black smoke rises from the floor panel where the mining rig is. There was probably a bit too much dust in the fans.",
        opts: [
            { 
                t: "Spray it with a fire extinguisher", 
                req: "fire_ext", 
                m: 10, f: 0, a: -5, c: -5, 
                r: "CO2 fog fills the room. The fire is out, the hardware is scrap. You report it as 'Spontaneous Combustion of a Switch'." 
            },
            { 
                t: "Frantically blow on it", 
                m: 5, f: 0, a: 20, c: 20, 
                r: "You wave a manual at it. It does nothing. The sprinkler system goes off. You're wet, the server room is wet. This is going to be expensive." 
            },
            { 
                t: "Run and scream 'FIRE!'", 
                m: 2, f: 5, a: 10, c: 15, 
                r: "You evacuate yourself to home office. The fire department will handle it. Tomorrow there will be uncomfortable questions." 
            }
        ]
    },
    {
        id: "srv_mining_2b",
		char: "Dr. Wichtig",
        title: "Critical Infrastructure",
        reqStory: "path_mining_crash",
        text: "Two hours after you shut down the rig, the boss storms in. 'Müller! The entire email archive from 1990 to 2005 is offline! It was running on the legacy cluster behind Rack 4!'",
        opts: [
            { 
                t: "Claim it was a hacker", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "'The Russians, boss. Definitely.' He turns pale. 'Oh God. My emails to the secretary...' He rushes out. You quickly turn the thing back on." 
            },
            { 
                t: "Find and fix the 'error'", 
                req: "manual", 
                m: 30, f: -15, a: 10, c: -10, 
                r: "With the Win95 manual and a lot of patience, you reboot the system. It beeps cheerfully. The emails are back. No one thanks you." 
            },
            { 
                t: "Be honest: 'I turned it off.'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 0, c: 30, 
                r: "The boss stares at you. 'You mistook the backup system for illegal power consumption? Müller, I don't know if you're too smart or too stupid for this job.'" 
            }
        ]
    },
    {
        id: "srv_mining_2c",
        title: "The Crypto Treasure",
        reqStory: "path_mining_wallet",
        text: "You're on break, plugging the stolen USB stick into your laptop. Your hands are trembling. Are there Bitcoins on it? Dogecoins? Your retirement fund?",
        opts: [
            { 
                t: "Open the stick", 
                m: 10, f: 5, a: 10, c: 0, 
                r: "Folder: 'Vacation_Mallorca_98'. It's just 500 pictures of Egon in swimming trunks. Your trauma is indescribable. The stick is worthless." 
            },
            { 
                t: "Format the stick (destroy evidence)", 
                rem: "usb_stick", 
                m: 5, f: 0, a: -5, c: -5, 
                r: "Better safe than sorry. You delete everything and throw the stick in the trash. No riches, but no evidence either. (Item removed)" 
            },
            { 
                t: "Sell the stick to Kevin", 
                rem: "usb_stick", 
                loot: "energy",
                rep: { "Kevin": -5 }, 
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Hey Kevin, it's got cheat codes on it.' Kevin believes you and gives you his last energy drink for it. A good trade. (Item lost, Energy gained)" 
            }
        ]
    },
    {
        id: "srv_cable_1",
        title: "Cable Salad",
        text: "You trip over a loose fiber optic cable. A nasty crunch. A red light on the main switch blinks frantically. Half the network just died.",
        opts: [
            { 
                t: "Fix with tape", 
                req: "tape",
                next: "path_cable_fix", 
                m: 10, f: -5, a: -5, c: -5, 
                r: "You wrap half a roll of duct tape around the break. It looks like a bandaged leg, but the light turns green. Nothing lasts longer than a temporary fix." 
            },
            { 
                t: "Wiggle the plug", 
                next: "path_cable_wiggle", 
                m: 2, f: 5, a: 10, c: 0, 
                r: "You push, pull, and pray. The light turns green. You exhale. Just don't breathe on it again." 
            },
            { 
                t: "Run away and hide", 
                next: "path_cable_run", 
                m: 5, f: 10, a: -5, c: 15, 
                r: "You disappear into the shadows of the racks. No one saw you. In the hallway, you hear the first screams: 'The internet is down!'" 
            }
        ]
    },
    {
        id: "srv_cable_2a",
        title: "ISO Certification",
        reqStory: "path_cable_fix",
        text: "An external ISO auditor stands in front of your tape masterpiece. He taps the silver lump on the fiber optic cable with his pen. 'Is that... DIN-compliant?'",
        opts: [
            { 
                t: "Claim it's shielding", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "'Special shielding against cosmic radiation.' The auditor nods, impressed, and ticks a box. Competence is when you act confident." 
            },
            { 
                t: "Admit it's holding the internet together", 
                m: 5, f: 0, a: 5, c: -5, 
                r: "The auditor sighs deeply. 'I saw nothing. But if this catches fire, I don't know you.' He moves on." 
            },
            { 
                t: "Rip off the tape (destroy evidence)", 
                m: 5, f: 0, a: 20, c: 10, 
                r: "You rip off the tape. The cable breaks immediately. The network dies again. The auditor stares at you in horror. 'That was... brave.'" 
            }
        ]
    },
    {
        id: "srv_cable_2b",
		char: "Dr. Wichtig",
        title: "The Loose Connection",
        reqStory: "path_cable_wiggle",
        text: "The boss enters the server room. He steps firmly on the floor. The vibration causes your merely 'wiggled' cable to lose connection. The light on the switch turns red.",
        opts: [
            { 
                t: "Convince him he's statically charged", 
				rep: { "Dr. Wichtig": 5 },
                m: 5, f: 5, a: -5, c: 10, 
                r: "'That's your aura, boss! Too much energy!' He looks flattered. 'Really? I feel a tingle too.' He carefully leaves." 
            },
            { 
                t: "Secretly kick it", 
                m: 2, f: 0, a: 5, c: 5, 
                r: "While he's looking away, you kick the rack. The light turns green. 'Self-healing powers,' you mumble. Phew." 
            },
            { 
                t: "Feigned immediate emergency maintenance", 
				rep: { "Dr. Wichtig": -5 },
                m: 15, f: -5, a: 5, c: -5, 
                r: "'Alarm! Critical error!' You shoo the boss out and wiggle the cable again. It holds... for now." 
            }
        ]
    },
    {
        id: "srv_cable_2c",
        title: "The Hacker Theory",
        reqStory: "path_cable_run",
        text: "Panic in the hallway. Dr. Wichtig stands on a chair. 'We're under attack! This is cyber warfare! Someone physically cut the line!' Everyone looks at each other suspiciously.",
        opts: [
            { 
                t: "Lead the 'investigation'", 
                rep: { "Dr. Wichtig": 2 },
                m: 10, f: 5, a: -5, c: -10, 
                r: "You play Sherlock Holmes. 'It was... a rat. I saw bite marks.' The boss nods. 'Buy poison.' You're off the hook." 
            },
            { 
                t: "Blame Kevin", 
                m: 2, f: 5, a: -5, c: -5, 
                rep: { "Kevin": -15, "Dr. Wichtig": 10 },
                r: "'I saw Kevin near the rack...' The crowd roars. Kevin is dragged away for questioning. Your karma is in the gutter, but you're safe." 
            },
            { 
                t: "Stand quietly in the corner", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You say nothing, hoping no one sees your shoe prints on the cable. Cold sweat runs down your back." 
            }
        ]
    },
    {
        id: "srv_drink_1",
        title: "Forgotten Snack",
        text: "On a warm server rack sits a lonely can of 'Cyber-Fuel'. It's still sealed, but the best-before date is a vague memory.",
        opts: [
            { 
                t: "Drink it immediately", 
                next: "path_drink_now", 
                m: 5, f: -15, a: -15, c: 0, 
                r: "HISS. The warm brew tastes of gummy bears and heart palpitations. You feel invincible (for about 20 minutes)." 
            },
            { 
                t: "Pocket it for later", 
                loot: "energy", 
                next: "path_drink_keep", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You never know when you'll need a chemical boost. Into the bag it goes. (Inventory +1)" 
            },
            { 
                t: "Leave it", 
                next: "path_drink_ignore", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You don't trust any liquid that glows in the dark. You leave it for the server goblins." 
            }
        ]
    },
    {
        id: "srv_drink_2a",
        title: "The Sugar Crash",
        reqStory: "path_drink_now",
        text: "Your stomach rumbles ominously. The 'Cyber-Fuel' was probably a bit old. Or radioactive. Your left eyelid twitches uncontrollably.",
        opts: [
            { 
                t: "Hide in the toilet", 
                m: 20, f: 10, a: 5, c: -5, 
                r: "Better safe than sorry. You spend 20 minutes in the tiled sanctuary. Productivity: Zero. Will to live: High." 
            },
            { 
                t: "Keep working and tremble", 
                m: 10, f: -5, a: 20, c: 5, 
                r: "You try to type, but your hands vibrate so much that you accidentally close three tickets at once. Efficiency through panic." 
            },
            { 
                t: "Drink water afterwards", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You wash away the chemical taste at the water cooler. The twitching stops. You're still alive." 
            }
        ]
    },
    {
        id: "srv_drink_2b",
        title: "Sticky Situation",
        reqStory: "path_drink_keep",
        text: "You reach into your pocket and touch something wet. The 'Cyber-Fuel' can must have had a microscopic leak. Everything is sticky.",
        opts: [
            { 
                t: "Clean everything up", 
                rem: "energy", 
                m: 15, f: -5, a: 10, c: 0, 
                r: "You curse and scrub your pants with paper towels. The can is empty, your mood is in the basement. (Item removed)" 
            },
            { 
                t: "Whatever, as long as it's caffeine", 
                rem: "energy", 
                m: 5, f: -10, a: -5, c: 5, 
                r: "You lick the residue off your fingers and drink the pitiful remains from the can. It's undignified, but it works." 
            },
            { 
                t: "Ask Kevin for help",
                rep: { "Kevin": 5 }, 
                m: 5, f: 5, a: -5, c: -5, 
                r: "'Kevin, do you have wet wipes?' Kevin grins. 'Sure, gamer standard equipment.' He helps you clean the sticky bag." 
            },
            {
                t: "Wait... it's empty?",
                m: 2, f: 0, a: 5, c: 0, 
                r: "You realize it was just old residue. You already drank the can a long time ago."
            }
        ]
    },
    {
        id: "srv_drink_2c",
		char: "Kevin",
        title: "Kevin's Find",
        reqStory: "path_drink_ignore",
        text: "Kevin emerges from the server room with wide eyes. He holds the can in his hand. 'Whoa! Vintage Cyber-Fuel from 2012! Collector's item!'",
        opts: [
            { 
                t: "Tell him not to drink it", 
                rep: { "Kevin": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Too late!' Kevin chugs the can. He starts smelling colors. You tried." 
            },
            { 
                t: "Wish him good luck",
                rep: { "Kevin": -5 }, 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Darwin will sort it out. You go get coffee." 
            },
            { 
                t: "Envy him for the deposit", 
                m: 1, f: 0, a: 5, c: 0, 
                r: "25 cents. You could have been rich. Damn it." 
            }
        ]
    },
    {
        id: "srv_extinguisher_1",
        title: "Security Check",
        text: "Behind a yellowed CRT monitor, you find a fire extinguisher. It's dusty. According to the plaque, the last inspection was in 1998.",
        opts: [
            { 
                t: "Pocket it", 
                loot: "fire_ext", 
                next: "path_ext_loot", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "You hoist the heavy thing into your inventory. You never know when you'll need to put out a fire (or break down a door). (Inventory +1)" 
            },
            { 
                t: "Quick function test", 
                next: "path_ext_trap", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You press the lever only briefly. A hiss... and then the valve jams. PFFFFFFT!" 
            },
            { 
                t: "Conduct a full DIN audit", 
                next: "path_ext_audit", 
                m: 60, f: -30, a: 10, c: -20, 
                r: "You get cleaning supplies, a magnifying glass, and the inspection report. You spend an hour documenting rust spots. Exemplary!" 
            }
        ]
    },
    {
        id: "srv_extinguisher_2a",
		char: "Egon",
        title: "Heavy Transport",
        reqStory: "path_ext_loot",
        text: "You're lugging the fire extinguisher through the hallway. It feels like 20 kilos and keeps hitting your shin. Egon the janitor looks at you critically.",
        opts: [
            { 
                t: "Say you're taking it for maintenance",
                rep: { "Egon": 5 }, 
                m: 10, f: -5, a: 5, c: -5, 
                r: "Egon nods approvingly. 'Good man. Safety is not a toy.' He lets you pass." 
            },
            { 
                t: "Use it as a doorstop", 
                rep: { "Egon": -2 },
                rem: "fire_ext", 
                m: 5, f: 10, a: -5, c: 5, 
                r: "You're tired of carrying it. You place it in front of the server room door. Now it stays open and it gets cooler. (Item removed)" 
            },
            { 
                t: "Training: Do bicep curls", 
                rep: { "Egon": -5 },
                m: 20, f: -10, a: -20, c: 10, 
                r: "You use the weight for a spontaneous hallway workout. Your arms burn, your aggro drops. Egon just shakes his head." 
            }
        ]
    },
    {
        id: "srv_extinguisher_2b",
        title: "Winter Wonderland",
        reqStory: "path_ext_trap",
        text: "The 'quick test' from earlier has escalated. Half the server room is covered in white extinguishing powder. It looks like 'Scarface', only dustier. The fan distributes it everywhere.",
        opts: [
            { 
                t: "Clean everything yourself", 
                m: 120, f: -50, a: 30, c: -10, 
                r: "Two hours. You crawl around the room with a rag for two hours. Your laziness is in the basement, your anger at its peak." 
            },
            { 
                t: "Flee and lock the door", 
                m: 5, f: 10, a: -5, c: 30, 
                r: "You run out. 'No idea, must be a malfunction of the system!' Hopefully they believe you." 
            },
            { 
                t: "Sell it as an art installation", 
                m: 15, f: 5, a: 0, c: 15, 
                r: "You stick a 'TRANSIENCE' sign on the rack. The boss comes by: 'Interesting. But get rid of it.' Time wasted." 
            }
        ]
    },
    {
        id: "srv_extinguisher_2c",
		char: "Dr. Wichtig",
        title: "The Bureaucrat",
        reqStory: "path_ext_audit",
        text: "After your hour-long audit, Dr. Wichtig comes by. He sees your checklists and tables next to the fire extinguisher. He looks surprised.",
        opts: [
            { 
                t: "Proudly present the report", 
				rep: { "Dr. Wichtig": 10 },
                m: 15, f: -5, a: -5, c: -15, 
                r: "'The device does not comply with DIN-1402.' The boss nods. 'Müller, I like your thoroughness. Carry on.'" 
            },
            { 
                t: "Request overtime for it", 
				rep: { "Dr. Wichtig": -10 },
                m: 10, f: 0, a: 10, c: 20, 
                r: "'Overtime? For dusting? Dream on.' The positive effect has evaporated." 
            },
            { 
                t: "Ask him to sign the protocol", 
				rep: { "Dr. Wichtig": -5 },
                m: 30, f: -10, a: 5, c: 0, 
                r: "You force him into a 30-minute discussion about fire safety regulations. He signs, just so you'll stop talking." 
            }
        ]
    },
    {
        id: "srv_manual_1",
        title: "Supporting Knowledge",
        text: "A thick, yellowed book is wedged under a wobbly table leg: 'Windows 95 - The Manual'. It bears the weight of three monitors and a switch.",
        opts: [
            { 
                t: "Pull it out and pocket it", 
                loot: "manual", 
                next: "path_man_taken", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "With a tug, you pull it out. The table sags 2cm. The monitor on top wobbles ominously. But hey: ancient knowledge! (Inventory +1)" 
            },
            { 
                t: "Leave it", 
                next: "path_man_leave", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Never touch a running system. That also applies to furniture. You leave the static intact and the book to gather dust." 
            },
            { 
                t: "Flip through it on the spot", 
                next: "path_man_study", 
                m: 30, f: 10, a: -10, c: 0, 
                r: "You squat on the floor and read the chapter on 'IRQ Conflicts'. A simpler time. You feel relaxed, but your legs have fallen asleep." 
            }
        ]
    },
    {
        id: "srv_manual_2a",
        title: "Tilted Situation",
        reqStory: "path_man_taken",
        text: "The table, now missing its manual-leg, vibrates so much from the server fans that the expensive core switch slowly slides towards the abyss. It's about to fall.",
        opts: [
            { 
                t: "Slide the manual back under", 
                rem: "manual", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "You sacrifice knowledge for safety. The table is stable again. Your inventory is emptier, your conscience clearer. (Item removed)" 
            },
            { 
                t: "Fold cardboard and slide it under", 
                m: 15, f: -10, a: 5, c: 0, 
                r: "You fashion a makeshift wedge from a pizza box. It doesn't hold quite as well and looks terrible, but you get to keep the book." 
            },
            { 
                t: "Tape the switch down", 
                req: "tape", 
                m: 5, f: 5, a: 0, c: -5, 
                r: "If it moves and it shouldn't: duct tape. You just tape the switch to the table. Problem solved." 
            }
        ]
    },
    {
        id: "srv_manual_2b",
        title: "5S Audit",
        reqStory: "path_man_leave",
        text: "A 'Lean Management Consultant' crawls through the server room. He points at the manual under the table leg. 'That is not a defined storage location for documentation. It has to go.'",
        opts: [
            { 
                t: "Explain it's a load balancer", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "You babble something about 'vibration damping according to DIN standard'. The consultant takes notes. 'Creative solution.' He sticks an 'Inspected' sticker on the book." 
            },
            { 
                t: "Allow him to remove it", 
                m: 5, f: 10, a: 0, c: 0, 
                r: "He triumphantly pulls it out. The table tips. The monitor falls on his foot. You laugh internally. The audit is over." 
            },
            { 
                t: "Ignore him", 
                m: 2, f: 5, a: 5, c: 10, 
                r: "He writes 'Poor Order' in his report. That'll cause trouble, but at least you didn't talk to him." 
            }
        ]
    },
    {
        id: "srv_manual_2c",
		char: "Dr. Wichtig",
        title: "Legacy Support",
        reqStory: "path_man_study",
        text: "The boss comes in. 'Müller! We still have a 486 in the basement that controls the door. It's asking for an IRQ assignment for the sound card. Do you happen to know what that is?'",
        opts: [
            { 
                t: "Immediately state the solution", 
				rep: { "Dr. Wichtig": 10 },
                m: 5, f: -5, a: -10, c: -20, 
                r: "'IRQ 5, DMA 1, Address 220.' You just read it. The boss stares at you like a god. 'Müller, you're a genius.' (Massive Radar bonus)" 
            },
            { 
                t: "Pretend you need to research", 
				rep: { "Dr. Wichtig": 5 },
                m: 60, f: 20, a: 0, c: 0, 
                r: "You know it, but you say: 'That's highly complex. It'll take 2 hours.' You calmly go get coffee. The boss waits reverently." 
            },
            { 
                t: "Say: 'Buy something new'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 5, c: 10, 
                r: "'No budget!', he snaps back. Opportunity to shine missed." 
            }
        ]
    },
    {
        id: "srv_rat_1",
        title: "The Strange Noise",
        text: "A scratching sound comes from Rack 4. It doesn't sound like a fan. More like... sharp teeth on expensive fiber optic cable. Something alive is nesting in the firewall.",
        opts: [
            { 
                t: "Kick it", 
                next: "path_rat_kick", 
                m: 5, f: 0, a: 10, c: 5, 
                r: "BAM! You kick the metal firmly. It squeaks frantically, then there's absolute silence. You wait briefly... nothing more. Problem solved pragmatically." 
            },
            { 
                t: "Donut as bait", 
                req: "donut", 
                next: "path_rat_feed", 
                m: 10, f: 5, a: -10, c: 0, 
                r: "You break off a piece and place it in front of the cable tray. A shadow darts out, snatches the bait, and disappears silently. Silence." 
            },
            { 
                t: "Call pest control", 
                next: "path_rat_call", 
                m: 15, f: 5, a: 0, c: 5, 
                r: "You create a ticket with facility management. Priority: High. Status: 'In Progress'. You've done your duty and leave." 
            }
        ]
    },
    {
        id: "srv_rat_2a",
        title: "Collateral Damage",
        reqStory: "path_rat_kick",
        text: "Your monitoring dashboard glows red like a Christmas tree. The uplink in Rack 4 is dead. Apparently, your kick earlier not only scared away the rat but also dislodged something.",
        opts: [
            { 
                t: "Replace cable", 
                req: "cable", 
                m: 15, f: -5, a: -5, c: -10, 
                r: "You find the severed cable (bite marks or tear?). Doesn't matter. You plug in a new patch cable. Link is up. No one saw anything." 
            },
            { 
                t: "Patch with tape", 
                req: "tape", 
                m: 10, f: 0, a: 5, c: 5, 
                r: "You fumble the wires together and insulate them. You call it a 'Temporary Fix'. It holds... for now." 
            },
            { 
                t: "Blame it on 'solar winds'", 
                m: 2, f: 10, a: -5, c: 20, 
                r: "You send a company-wide email: 'Atmospheric disturbances'. People believe anything as long as it sounds technical. You do nothing." 
            }
        ]
    },
    {
        id: "srv_rat_2b",
        title: "A New Friend",
        reqStory: "path_rat_feed",
        text: "You walk past Rack 4 again. There it sits again. The rat you fed. It looks full and relaxed. It even 'caught' a dead cockroach for you.",
        opts: [
            { 
                t: "Keep it as 'Junior Admin'", 
                m: 5, f: 10, a: -10, c: 0, 
                r: "You name it 'Splinter'. It now lives behind the patch panel. The company's most effective bug-killing system." 
            },
            { 
                t: "Call the janitor",
                rep: { "Egon": 2 }, 
                m: 10, f: 0, a: 0, c: 0, 
                r: "No pets after all. Egon comes and takes care of it 'discreetly'. You look away." 
            }
        ]
    },
    {
        id: "srv_rat_2c",
        title: "Ticket Closed",
        reqStory: "path_rat_call",
        text: "An email pops up: 'Ticket #492 (Rodent) closed. Reason: No access key.' At the same time, the internet goes down. The rat had plenty of time to chew.",
        opts: [
            { 
                t: "Panic repair", 
				rep: { "Dr. Wichtig": -2 },
                m: 30, f: -20, a: 20, c: -10, 
                r: "You have to re-lay the entire cable run while the boss breathes down your neck. Should've just done it yourself." 
            },
            { 
                t: "Blame the provider", 
                m: 5, f: 5, a: -5, c: 15, 
                r: "'Telekom excavator cut the line.' The classic. Everyone nods understandingly and goes home early. You're off the hook." 
            }
        ]
    },
    {
        id: "srv_cold_1",
        title: "The Cold Trap",
        text: "Someone set the air conditioning to 16 degrees and broke the doorknob from the inside. You're locked in and freezing!",
        opts: [
            { 
                t: "Break down the door with a hammer", 
                req: "hammer",
                next: "path_cold_break", 
                m: 15, f: -5, a: -10, c: 20, 
                r: "BAM! Door open. You feel like Thor. Wood splinters everywhere. The boss will have questions about the door panel, but you're free." 
            },
            { 
                t: "Use phone & call for help", 
                next: "path_cold_call", 
                m: 60, f: 0, a: 20, c: -10, 
                r: "You had to call the janitor. It took him 45 minutes to find the spare key. You're an ice block now." 
            },
            { 
                t: "Warm up by the servers", 
                m: 90, f: 20, a: 10, c: 0, 
                r: "You snuggled behind the CPU exhaust and slept until someone accidentally opened the door from the outside. Cozy." 
            }
        ]
    },
    {
        id: "srv_cold_2a",
        title: "The Carpenter",
        reqStory: "path_cold_break",
        text: "An external carpenter stands shaking his head in front of the server room door, which 'someone' (you) forced open this morning. He curses about the splinters.",
        opts: [
            { 
                t: "Offer him duct tape", 
                req: "tape", 
                m: 5, f: 5, a: 0, c: -5, 
                r: "'You can fix it with this, master.' He glares at you. 'That's real wood veneer, not cardboard!' He politely declines." 
            },
            { 
                t: "Claim it was the fire department", 
                m: 5, f: 0, a: -5, c: 10, 
                r: "'Danger in delay, you know.' The carpenter nods understandingly. 'Oh, right. Yes, those guys are rough.' Your secret is safe." 
            },
            { 
                t: "Help sweep up the shavings", 
                m: 15, f: -5, a: 5, c: 0, 
                r: "Guilt gnaws at you. You help him clean up. He grumbles: 'At least someone pitches in.'" 
            }
        ]
    },
    {
        id: "srv_cold_2b",
		char: "Egon",
        title: "Lock Replacement",
        reqStory: "path_cold_call",
        text: "Egon, the janitor, kneels in front of the server room door, installing a new lock. He sees you coming. 'Thawed out yet? I'm putting in one you can open from the inside now.'",
        opts: [
            { 
                t: "Bring him a coffee",
                rep: { "Egon": 10 }, 
                m: 10, f: 0, a: -5, c: 5, 
                r: "You get him a vending machine coffee. 'Thanks, kid.' He seems appeased. Small gifts keep friendships (and quick rescues) alive." 
            },
            { 
                t: "Talk shop", 
                rep: { "Egon": -5 },
                m: 5, f: 5, a: 5, c: -5, 
                r: "'Is that a DIN 18252 cylinder?' Egon rolls his eyes. 'Just let me work.' You're annoying him." 
            },
            { 
                t: "Sneak past quickly", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "No eye contact. The embarrassment from earlier still stings. You scurry into the server room." 
            }
        ]
    },
    {
        id: "srv_red_1",
        title: "The Red Liquid",
        text: "A puddle forms under Rack 7. It's deep red and sticky. It smells sweet. Is it... blood? Hydraulic fluid? Or syrup? There's no line running above you.",
        opts: [
            { 
                t: "Bravely stick your finger in & taste", 
                next: "path_red_taste", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "It's... cherry slushie?! Someone has hidden an illegal slushie machine here. You secretly tap yourself a cup and walk on contentedly." 
            },
            { 
                t: "Panic: Trigger general alarm!", 
                next: "path_red_alarm", 
                m: 10, f: -5, a: 10, c: 5, 
                r: "You press the emergency button. Sirens wail. 'BIOHAZARD!' You run out and let the fire department do the rest. Safety first." 
            },
            { 
                t: "Just wipe it up & ignore", 
                m: 15, f: 0, a: 0, c: -5, 
                r: "You wipe away the puddle with tissues. What you don't know won't hurt you. The floor is still a bit sticky, but it looks clean." 
            }
        ]
    },
    {
        id: "srv_red_2a",
        title: "The Great Crawl",
        reqStory: "path_red_taste",
        text: "You hear a crackling from Rack 7, where you found the slushie earlier. Thousands of ants, attracted by the sticky residue, are building a nest in the 10,000€ switch.",
        opts: [
            { 
                t: "Chemical warfare (insect spray)", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "You spray until the fog settles. The ants are dead. The switch fan is a bit gummed up, but it's still running. Get out of here quickly." 
            },
            { 
                t: "Disassemble everything & clean individually", 
                m: 60, f: -25, a: 15, c: -5, 
                r: "For an hour, you brush dead ants off circuit boards. It's disgusting, but you save the hardware. No one will know about the incident. Clean work." 
            },
            { 
                t: "Call the intern Kevin", 
                rep: { "Kevin": -10, "Dr. Wichtig": -10 },
                m: 10, f: 10, a: -15, c: 20, 
                r: "Kevin sees the ants and screams. The boss comes over. You get a dressing-down for 'lack of supervision', but Kevin has to clean." 
            }
        ]
    },
    {
        id: "srv_red_2b",
		char: "Dr. Wichtig",
        title: "Post-Mortem",
        reqStory: "path_red_alarm",
        text: "The boss summons you to his office. The 'biological hazard' that brought the fire department was just leaked coolant with dye. He doesn't look happy.",
        opts: [
            { 
                t: "Insist on safety protocols", 
				rep: { "Dr. Wichtig": -5 },
                m: 10, f: 0, a: -5, c: 10, 
                r: "'Better safe than sorry, boss!' He rubs his temples. 'Yes, well... but next time, smell first, then press.' You get away with it." 
            },
            { 
                t: "Apologize meekly", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 5, c: -10, 
                r: "'I'm sorry.' The boss sighs. 'The call-out costs us 500 Euros. That's coming out of your Christmas decoration budget.' Ouch." 
            },
            { 
                t: "Offer a bribe-donut", 
                rem: "donut",
				rep: { "Dr. Wichtig": 5 },
                m: 2, f: 5, a: -5, c: 5, 
                r: "You slide him the donut. 'Stress food?' He bites into it, chews, and grumbles: 'Get back to work.' Bribery always works." 
            }
        ]
    },
    {
        id: "srv_illegal_1",
        title: "The Illegal Data Center",
        text: "You lean against a shelf and suddenly a false wall swings open. Behind it: a hidden server room! On the screens, very 'explicit' adult films flicker... The admin console is logged in: it belongs to the Vice President.",
        opts: [
            { 
                t: "Secure evidence & blackmail VP", 
                req: "secret_list",
                next: "path_illegal_blackmail", 
                m: 10, f: 30, a: 0, c: -30, 
                r: "You take photos and wave the Blacklist from your bag. 'I know everything.' This is the jackpot. You quietly close the door again." 
            },
            { 
                t: "Immediately pull the plug", 
                next: "path_illegal_shutdown", 
                m: 20, f: -10, a: 10, c: 50, 
                r: "You don't hesitate. CLICK. The fuse blows. The screens go black. The fans die down. Total silence in the room." 
            },
            { 
                t: "Keep quiet & use hardware yourself", 
                next: "path_illegal_share", 
                m: 5, f: 20, a: -10, c: 20, 
                r: "You secretly install your private Minecraft server and a Bitcoin miner on the hardware. Free electricity, high-speed connection, and the VP can hardly rat you out." 
            }
        ]
    },
    {
        id: "srv_illegal_2a",
        title: "The Consulting Fee",
        reqStory: "path_illegal_blackmail",
        text: "The Vice President intercepts you at the coffee machine. He's sweating heavily. 'Müller... about the... thing in the server room. Give me the list, and we'll come to an understanding.'",
        opts: [
            { 
                t: "Demand money", 
                rem: "secret_list",
                m: 5, f: 10, a: -20, c: -20, 
                r: "He snatches the list from your hand and slips you a thick envelope. 'Expense report. Monthly. We'll never speak of this again.' You are now officially corrupt." 
            },
            { 
                t: "Demand home office", 
                rem: "secret_list",
                m: 5, f: 20, a: -15, c: -10, 
                r: "'Three days a week?' He nods hastily, grabs the list, and shreds it immediately. 'Approved. Effective immediately.' He looks relieved. You too." 
            },
            { 
                t: "Keep him dangling", 
                m: 2, f: 5, a: -5, c: 10, 
                r: "You just tap your breast pocket, where the list is, and wink. The pure panic in his eyes is priceless. He'll grant your every wish from now on." 
            }
        ]
    },
    {
        id: "srv_illegal_2b",
        title: "The Tantrum",
        reqStory: "path_illegal_shutdown",
        text: "30 minutes later, the Vice President storms into the server room, beet red. 'WHO WAS THAT?! My... uh... critical backup system is offline! Do you know how much traffic we're losing?!'",
        opts: [
            { 
                t: "Feigned ignorance", 
                m: 5, f: 5, a: 5, c: 5, 
                r: "'Power fluctuation, boss. The lines are old.' He rages, but can't prove anything. He doesn't dare turn the server back on while you're there." 
            },
            { 
                t: "Say: 'It was a security risk'", 
                m: 5, f: 0, a: 10, c: 20, 
                r: "You stare him directly in the eyes. 'Too many open ports. I protected the company.' He understands the threat, swallows hard, and leaves wordlessly." 
            },
            { 
                t: "Laugh at him", 
                m: 2, f: 5, a: -10, c: 10, 
                r: "You can't help yourself. 'Critical backup? Looked more like Backside-Sluts 9.' He turns pale and runs out. This means war." 
            }
        ]
    },
    {
        id: "srv_illegal_2c",
        title: "Bandwidth War",
        reqStory: "path_illegal_share",
        text: "You notice your Bitcoin miner is slowing down. The Vice President is probably streaming 4K content on the hidden server again. The fans howl like jet engines.",
        opts: [
            { 
                t: "Throttle his processes", 
                m: 10, f: -10, a: -15, c: 10,
                r: "You prioritize your traffic in the router via QoS. His stream now buffers every 3 seconds. Somewhere in the office, you hear a frustrated scream. Glorious." 
            },
            { 
                t: "Truce via chat", 
                m: 5, f: 5, a: -5, c: -5, 
                r: "You open `notepad.exe` on the server and write: '50/50 resource sharing?'. He replies: 'Deal. But delete the history.' Honor among thieves." 
            },
            { 
                t: "Overclock everything", 
                m: 5, f: -5, a: 10, c: -10, 
                r: "You crank up the voltage. It smells burnt, but both processes run smoothly. Hopefully the building doesn't burn down." 
            }
        ]
    },
    {
        id: "srv_raccoon_1",
        title: "The Masked Bandit",
        text: "The door is open. A fat raccoon sits on the main switch, happily gnawing on a yellow fiber optic cable. It looks at you, hisses, and shows no sign of leaving.",
        opts: [
            { 
                t: "Fight with hammer (show dominance)", 
                req: "hammer",
                next: "path_raccoon_fight", 
                m: 10, f: -10, a: 20, c: 10, 
                r: "You swing! 'Get out, you trash panda!' The raccoon performs a Matrix dodge. CLANG. Your hammer hits the rack with full force. The raccoon flees, laughing." 
            },
            { 
                t: "Sacrifice donut (bribe)", 
                rem: "donut",
                next: "path_raccoon_bribe", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You throw the donut into the hallway. The raccoon smells the grease, drops the cable, and waddles after the pastry. You quickly close the door." 
            },
            { 
                t: "Close the door and hope (ignore problem)", 
                next: "path_raccoon_ignore", 
                m: 2, f: 20, a: 0, c: 5, 
                r: "You quietly close the door and lock it. 'Not my problem. Let the night shift deal with it.' You walk away, whistling." 
            }
        ]
    },
    {
        id: "srv_raccoon_2a",
        title: "Inventory Damage",
        reqStory: "path_raccoon_fight",
        text: "The IT manager stands in front of Rack 2. There's a huge dent in the metal, exactly at hammer height. He looks at you questioningly. 'Tell me... do we have poltergeists here?'",
        opts: [
            { 
                t: "Lie: 'That was the raccoon!'", 
                m: 5, f: 0, a: 5, c: 10, 
                r: "'A raccoon with superhuman strength!' The manager shakes his head. 'Müller, take less of your medication.' He doesn't believe a word you say." 
            },
            { 
                t: "Cover damage with a sticker", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "You stick an 'Intel Inside' sticker over the dent. 'Looks new, boss.' He squints, but lets it pass." 
            },
            { 
                t: "Confess and hammer it out", 
                req: "hammer", 
                m: 30, f: -10, a: 0, c: -5, 
                r: "You explain the fight. Then you spend 30 minutes hammering the metal straight from the inside. It's loud and embarrassing." 
            }
        ]
    },
    {
        id: "srv_raccoon_2b",
        title: "The Regular Customer",
        reqStory: "path_raccoon_bribe",
        text: "You hear a scratching at the server room door. The raccoon is back. It devoured the donut and apparently brought friends. Three raccoons are waiting for more supplies.",
        opts: [
            { 
                t: "Call janitor Egon", 
                m: 10, f: 5, a: -5, c: 0, 
                r: "Egon comes. 'Oh, they're cute!' He feeds them his leftover sandwich. Now you have a raccoon colony in front of IT. But they leave the cables alone." 
            },
            { 
                t: "Chase them away with the fire extinguisher", 
                req: "fire_ext", 
                m: 5, f: -5, a: 10, c: 5, 
                r: "PFFFFT! A CO2 cloud ends the party. The critters run away, but the hallway looks like a winter wonderland. You have to sweep." 
            }
        ]
    },
    {
        id: "srv_raccoon_2c",
        title: "Bio-Hazard",
        reqStory: "path_raccoon_ignore",
        text: "Monitoring reports 'Temperature Critical'. You open the server room door. It stinks horribly. The trapped raccoon, out of fear, pooped on the mainframe fan. The feces were distributed throughout the room.",
        opts: [
            { 
                t: "Force intern to clean",
                rep: { "Kevin": -20 }, 
                m: 5, f: 10, a: -5, c: 10, 
                r: "Kevin has to go in wearing a hazmat suit. He cries while doing it. You stand outside and give instructions. Your karma plummets, but your hands stay clean." 
            },
            { 
                t: "Clean it yourself (punishment)",
                m: 120, f: -50, a: 20, c: -10, 
                r: "Two hours. Toothbrush. Disinfectant. You question every life decision that led you here." 
            },
            { 
                t: "Seal the room & request home office",
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 20, a: 0, c: 20, 
                r: "'Health risk! No one allowed in!' You flee. The problem will escalate tomorrow, but today you are free." 
            }
        ]
    },
    {
        id: "srv_floppy_1",
        title: "Message in a Bottle from the Past",
        text: "You find a 3.5-inch floppy disk labeled 'EMERGENCY PLAN 1999'. A note is taped to it: 'If everything burns, press this button.' Next to it, a red, dusty mushroom button is on the wall.",
        opts: [
            { 
                t: "Press the button (YOLO)", 
                next: "path_floppy_button", 
                m: 5, f: 10, a: -20, c: 100, 
                r: "CLICK. A hiss. The old Halon extinguishing system deploys! Oxygen is sucked out of the room. You hold your breath and stumble out. This is going to be expensive." 
            },
            { 
                t: "Read the floppy disk", 
                req: "manual",
                next: "path_floppy_read", 
                m: 30, f: -5, a: 0, c: -10, 
                r: "Thanks to the manual, you can load the ancient drivers. The drive rattles like a coffee grinder, but you gain access to the data." 
            },
            { 
                t: "Ignore it", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You let the red button be red. Some things are better left untouched. You move on." 
            }
        ]
    },
    {
        id: "srv_floppy_2a",
        title: "Bill from the Authorities",
        reqStory: "path_floppy_button",
        text: "Sirens wail outside. The fire brigade is here because the sensors reported 'oxygen loss'. The incident commander looks at you sternly. 'Who triggered it?'",
        opts: [
            { 
                t: "Plead technical defect", 
                m: 15, f: 0, a: 5, c: 10, 
                r: "'These old systems... ticking time bombs!' The firefighter nods. 'Yes, Halon has been banned for 20 years. It has to go anyway.' You get off with a warning." 
            },
            { 
                t: "Run away", 
                m: 5, f: 10, a: -5, c: 20, 
                r: "You use the chaos to disappear. The bill for 3,000€ in deployment costs lands squarely on the IT department. Your budget weeps." 
            },
            { 
                t: "Use smoke machine as an excuse", 
                m: 5, f: 5, a: 10, c: 0, 
                r: "'We're just testing stage effects for the Christmas party!' The firefighter is confused, packs up, and leaves. Audacity wins." 
            }
        ]
    },
    {
        id: "srv_floppy_2b",
        title: "The Y2K Patch",
        reqStory: "path_floppy_read",
        text: "You search through the files on the floppy disk. No high scores. It's a file named 'Y2K_FIX_FINAL.BAT'. A script that was supposed to prevent the year 2000.",
        opts: [
            { 
                t: "Execute out of curiosity", 
                m: 10, f: -10, a: 10, c: 50, 
                r: "You click it. The system date jumps to 01.01.1900. All certificates become invalid. Accounting crashes. But hey, retro feeling!" 
            },
            { 
                t: "Analyze code (learn)", 
                m: 60, f: -20, a: 0, c: -5, 
                r: "You study the ancient code. It's spaghetti code at its finest, but you learn a trick to manipulate server logs. (Skill improved)" 
            },
            { 
                t: "Format the floppy disk", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You delete everything and save your own vacation pictures on it. 1.44 MB of storage saved. Pure pragmatism." 
            }
        ]
    },
    {
        id: "srv_loot_box_1",
        title: "The Open Toolbox",
        text: "An external technician forgot his box next to Rack 3. It stands open like a treasure chest. You see useful things that make your IT heart beat faster.",
        opts: [
            { 
                t: "Pocket zip ties", 
                loot: "zip_ties", 
                next: "path_loot_zip", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "A 100-pack of black zip ties. Worth gold for cable management at home! Quickly into your bag. (Inventory +1)" 
            },
            { 
                t: "Take the screwdriver", 
                loot: "screw", 
                next: "path_loot_screw", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "A high-quality brand Phillips head with a magnetic tip. It feels good in the hand. Now it's in your bag. (Inventory +1)" 
            },
            { 
                t: "Leave it", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You resist the temptation. You already have enough stuff on your desk." 
            }
        ]
    },
    {
        id: "srv_loot_box_2a",
        title: "The Return",
        reqStory: "path_loot_zip",
        text: "The technician comes running. He's sweating and looks extremely stressed. 'Damn it, where did the pack of zip ties go? I have to be at the next client in 10 minutes!' He looks at you.",
        opts: [
            { 
                t: "Lie: 'Didn't see anything'", 
                m: 2, f: 0, a: 5, c: -5, 
                r: "You shrug. 'Maybe the cleaning crew tidied up?' He curses, packs his box, and rushes off. Your conscience pricks briefly." 
            },
            { 
                t: "Return it ('Found')", 
                rem: "zip_ties",
                m: 5, f: 0, a: -5, c: 10, 
                r: "'Oh, these were lying on the floor. I was just about to secure them.' He breathes a sigh of relief. 'Thanks, man! You saved my ass.' He's gone. (Item removed)" 
            },
            { 
                t: "Blame Kevin",
                rep: { "Kevin": -10 }, 
                m: 2, f: 5, a: -5, c: -10, 
                r: "'The intern was here earlier...' The technician shakes his head. 'No time for arguments.' He leaves. You still have the loot." 
            }
        ]
    },
    {
        id: "srv_loot_box_2b",
        title: "The Missing Tool",
        reqStory: "path_loot_screw",
        text: "The technician frantically rummages through his box. 'My Wera Phillips head! The good one! Have you seen it? Without it, I can't open the rack at the client's!' He's on the verge of despair.",
        opts: [
            { 
                t: "Whistle innocently", 
                m: 2, f: 0, a: 5, c: -5, 
                r: "'Nope. Was it important?' He tears at his hair. 'Damn it!' He runs out cursing. You now have a great tool and bad karma." 
            },
            { 
                t: "Return it", 
                rem: "screw",
                m: 5, f: 0, a: -5, c: 10, 
                r: "You pull it out of your pocket. 'Just borrowed it.' He almost snatches it from your hand. 'Don't do that! But thanks.' (Item removed)" 
            },
            { 
                t: "Help 'search'", 
                m: 15, f: -5, a: 0, c: -10, 
                r: "You help him search for 15 minutes (while it's in your pocket). 'Useless,' he says resignedly and leaves. You're a monster." 
            }
        ]
    },
    {
        id: "srv_found_stuff",
        title: "Suspicious Finds",
        text: "Between Rack 3 and 4, stuff is lying around. It looks like someone left in a hurry.",
        opts: [
            { 
                t: "Take the expensive headphones", 
                loot: "headphones", 
                next: "found_headphones_2",
                m: 5, f: 5, a: 0, c: 0, 
                r: "Bose noise-cancelling. Very fancy. They're still slightly warm and smell a bit of hair gel. But hey: free is free. (Inventory +1)" 
            },
            { 
                t: "Take the heavy hammer", 
                loot: "hammer", 
                next: "found_hammer_2",
                m: 5, f: 5, a: 0, c: 0, 
                r: "A 500g locksmith's hammer. 'HARD RESET' is written on the handle in permanent marker. A reassuring tool in the server room. (Inventory +1)" 
            }
        ]
    },
    {
        id: "srv_found_stuff_2a",
        title: "The Audiophiles",
        reqStory: "found_headphones_2",
        text: "You're walking down the hallway with your new headphones. A colleague from Marketing (hipster beard, mate tea) stops you. 'Hey! Those are my Sennheisers! I've been looking everywhere for them!'",
        opts: [
            { 
                t: "Return them", 
                rem: "headphones",
                m: 5, f: 0, a: -5, c: 5, 
                r: "'Oh, they were in the server room.' He snatches them from you, demonstratively wipes them on his shirt, and puts them on. 'Unbelievable, these thieves here.' No thank you." 
            },
            { 
                t: "Lie: 'They're mine'", 
                m: 2, f: 0, a: 5, c: 5, 
                r: "'That's the XP-500 model. Mine.' He stares at you suspiciously. 'Mine had a scratch on the headband...' You quickly walk on before he sees it." 
            },
            { 
                t: "Give him hygiene anxiety", 
                m: 5, f: 5, a: 10, c: 0, 
                r: "'Really? I just got a fungal infection in my ear, that's why I'm wearing them.' He turns pale, backs away, and mumbles: 'Keep them. Please. Burn them.' Victory!" 
            }
        ]
    },
    {
        id: "srv_found_stuff_2b",
        title: "Percussive Maintenance",
        reqStory: "found_hammer_2",
        text: "You hear loud cursing from the server room. A former admin (retired) stands in front of an old server that's frozen. He's hitting it with the flat of his hand. 'WHERE IS MY OPINION AMPLIFIER?!'",
        opts: [
            { 
                t: "Return the hammer", 
                rem: "hammer",
                m: 5, f: 0, a: -5, c: 5, 
                r: "You hand him the hammer. He grins wickedly. 'Thanks.' CLANG! He hits the casing hard once. The hard drive whirs back to life. 'There you go.'" 
            },
            { 
                t: "Offer help", 
                req: "hammer",
                m: 10, f: -5, a: -5, c: 5, 
                r: "'Let me try.' You give the server a precise blow in the right spot (power supply). It runs. The admin nods approvingly. 'Good technique.'" 
            },
            { 
                t: "Quickly leave", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "Don't get involved. Behind you, you hear him start kicking the server. You caress your new hammer." 
            }
        ]
    },
    {
        id: "srv_loose_rack_1",
        title: "The Wobbly Rack",
        text: "Rack 5 vibrates ominously in time with the fans. A crucial screw is missing. If it tips, it'll domino-effect the entire data center.",
        opts: [
            { 
                t: "Properly screw it down", 
                req: "screw",
                next: "path_rack_screw", 
                m: 25, f: -15, a: 5, c: -10,
                r: "You crawl on the floor, align the rack, and tighten the screw with a torque wrench. German engineering. The thing doesn't move an inch anymore." 
            },
            { 
                t: "Secure with zip ties", 
                req: "zip_ties",
                next: "path_rack_zip", 
                m: 5, f: 15, a: -5, c: 5,
                r: "Snip. You just tie Rack 5 to Rack 4. That's called 'structural redundancy' (or shoddy work). It holds for now, but looks wild. (Item removed)" 
            },
            { 
                t: "Look away and whistle", 
                m: 2, f: 10, a: -5, c: 10,
                r: "You turn around. If you don't see it, it's not illegal. You just hope physics is on vacation today." 
            }
        ]
    },
    {
        id: "srv_loose_rack_2a",
        title: "ISO Pain",
        reqStory: "path_rack_screw",
        text: "A loud BANG! The cleaning crew rammed their heavy floor polisher cart full speed into Rack 5. Thanks to your screw, it held. The cleaner stares in shock at the dent.",
        opts: [
            { 
                t: "Chew him out", 
                m: 5, f: 0, a: -20, c: 5, 
                r: "You yell at him for 5 minutes. That feels good! Your aggression completely dissipates. He apologizes a thousand times." 
            },
            { 
                t: "Stay cool & check tech", 
				rep: { "Dr. Wichtig": 2 },
                m: 15, f: -5, a: 5, c: -15, 
                r: "'It's all good, master. It holds.' You check the logs. No outages. The boss sees it and nods approvingly. 'Good work, Müller. Robustly built.'" 
            },
            { 
                t: "Demand compensation", 
                m: 10, f: 5, a: 10, c: 0, 
                r: "You demand 20 Euros for the paint damage. He gives it to you, trembling. You're an asshole, but a rich asshole." 
            }
        ]
    },
    {
        id: "srv_loose_rack_2b",
        title: "The Great Hum",
        reqStory: "path_rack_zip",
        text: "A deep hum fills the room. Your zip ties have transferred the vibrations from Rack 5 to Rack 4. Now both are resonating, creating a hellish noise.",
        opts: [
            { 
                t: "More zip ties!", 
                rem: "zip_ties",
                m: 5, f: 10, a: 0, c: 10, 
                r: "More is more. You cinch everything so tight the plastic turns white. The noise gets higher, almost a whistle. But it wobbles less. (Item removed)" 
            },
            { 
                t: "Untie everything again", 
                m: 20, f: -10, a: 20, c: -5, 
                r: "You have to clean up your own mess. You curse, cut yourself on the plastic, and take forever. Laziness always gets punished in the end." 
            },
            { 
                t: "Put in earplugs & ignore", 
                req: "headphones",
				rep: { "Dr. Wichtig": -2 },
                m: 2, f: 20, a: -10, c: 20, 
                r: "You put on the noise-cancelling headphones. Heavenly silence. The boss comes in and yells something, but you don't hear him. He looks angry." 
            }
        ]
    },
    {
        id: "srv_cable_mess_1",
        title: "The Cable Nightmare",
        text: "Behind Rack 3, a bundle of fiber optic cables hangs dangerously close to the rotating fan. A gust of wind, and it's data salad (literally).",
        opts: [
            { 
                t: "Neatly tie to the side", 
                req: "zip_ties",
                m: 15, f: -10, a: 0, c: -5, 
                r: "You take your time and neatly route the cables in the cable tray. Click, click. That'll hold forever. Prussian order in the rack." 
            },
            { 
                t: "Tape it (temporary fix)", 
                req: "tape",
                next: "path_cable_tape", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You just tape the bundle to the side panel. 'That'll hold,' you mumble. It looks ugly, but the danger is averted for now." 
            },
            { 
                t: "Break off the fan grille", 
                next: "path_cable_break", 
                m: 2, f: 10, a: 10, c: 15, 
                r: "CRACK. You rip off the protective grille in front of the fan. Now there's more room for the cables, but the fan now spins openly like a shredder." 
            }
        ]
    },
    {
        id: "srv_cable_mess_2a",
        title: "Sticky Heat",
        reqStory: "path_cable_tape",
        text: "The server overheated. Your tape adhesive liquefied. The cable bundle came loose and is now rhythmically slapping against the fan. CLACK-CLACK-CLACK.",
        opts: [
            { 
                t: "Get zip ties after all", 
                req: "zip_ties", 
                m: 20, f: -10, a: 5, c: 0, 
                r: "You have to scrape off the adhesive residue before you can do it properly. Double work for your laziness." 
            },
            { 
                t: "Just put new tape over it", 
                req: "tape", 
                m: 5, f: 5, a: 0, c: 5, 
                r: "More tape helps more. You wrap half the server in it. It looks like a mummy, but the noise is gone." 
            },
            { 
                t: "Close the door", 
                m: 2, f: 10, a: -5, c: 10, 
                r: "If the door is closed, you can barely hear the clacking. Problem solved (for you)." 
            }
        ]
    },
    {
        id: "srv_cable_mess_2b",
		char: "Kevin",
        title: "The Finger Shredder",
        reqStory: "path_cable_break",
        text: "A scream from the server room! Kevin just wanted to feel how strong the airflow was. Without the protective grille, the fan caught his index finger.",
        opts: [
            { 
                t: "Get the first aid kit", 
                rep: { "Kevin": 5 },
                m: 10, f: 0, a: -5, c: 0, 
                r: "It's bleeding like crazy. You patch him up. 'Don't tell the boss!', you whimper. Kevin nods through tears." 
            },
            { 
                t: "Tell him not to be a baby", 
                rep: { "Kevin": -5 },
                m: 5, f: 5, a: 5, c: 10, 
                r: "'It's just a flesh wound. Builds character.' You give him a tissue. He leaves sulking." 
            }
        ]
    },
    {
        id: "srv_door_stuck_1",
        title: "The Stuck Door",
        text: "The card reader beeps green, but the doorknob is blocked. The mechanism is jammed. Inside, the servers are blinking, and you need to get in.",
        opts: [
            { 
                t: "Targeted blow with a hammer", 
                req: "hammer",
                next: "path_door_hammer", 
                m: 5, f: -5, a: -10, c: 10, 
                r: "CLANG. A precise blow to the lock cylinder. Something cracks, then the door swings open. The handle hangs crooked, but you're in." 
            },
            { 
                t: "Disassemble & grease the lock", 
                req: "screw",
                next: "path_door_screw", 
                m: 30, f: -10, a: 5, c: 0, 
                r: "You unscrew the cover, align the springs, and grease the bolt. Professional work. The door glides silently open and closed." 
            },
            { 
                t: "Ram it with your shoulder", 
                next: "path_door_force", 
                m: 10, f: 0, a: 20, c: 5, 
                r: "BAM! Your shoulder burns like fire. The door doesn't move an inch. You angrily kick it, triggering the sabotage alarm." 
            }
        ]
    },
    {
        id: "srv_door_stuck_2a",
        title: "The Security Technician",
        reqStory: "path_door_hammer",
        text: "A technician from the security company stands in front of the door, examining the dent in the metal. He takes photos for the report. 'Looks like vandalism. Or a bear attack.'",
        opts: [
            { 
                t: "Blame it on 'material fatigue'", 
                m: 5, f: 0, a: 5, c: 10, 
                r: "'The metal was probably brittle.' The technician laughs dryly. 'Sure. And the hammer print is art?' The bill for the cylinder will be expensive." 
            },
            { 
                t: "Offer him coffee (distraction)", 
                m: 10, f: 5, a: -5, c: 5, 
                r: "You distract him with coffee and small talk. He writes 'Mechanical Defect' instead of 'Malicious Destruction' in the report. Lucky break." 
            },
            { 
                t: "Just leave", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You let him work. Later, you find a bill for 'Lock System Replacement (Emergency Service)' on your desk." 
            }
        ]
    },
    {
        id: "srv_door_stuck_2b",
        title: "Warranty Void",
        reqStory: "path_door_screw",
        text: "The security technician is here because the 'case open' sensor triggered. He checks the lock. 'Wait a minute... this works better than from the factory. Did you grease it?'",
        opts: [
            { 
                t: "Proudly nod", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "'I'm a professional.' The technician nods approvingly. 'Not bad. But strictly speaking, the warranty is now void. I'll turn a blind eye.'" 
            },
            { 
                t: "Look innocent", 
                m: 2, f: 0, a: 5, c: -5, 
                r: "'No idea, it was like that.' He shrugs. 'Well, if it works, I won't write a report.' Case closed." 
            }
        ]
    },
    {
        id: "srv_door_stuck_2c",
        title: "The Emergency Opening",
        reqStory: "path_door_force",
        text: "The technician arrives, annoyed. The sabotage alarm is still blaring. You rub your aching shoulder. 'Did you try to ram the door? That's reinforced concrete, you genius.'",
        opts: [
            { 
                t: "Watch him drill it open", 
                m: 45, f: 20, a: 10, c: -5, 
                r: "It takes him forever to drill open the bolt. You stand next to him, feeling useless. You're losing valuable time now." 
            },
            { 
                t: "Yell at him: 'Hurry up!'", 
                m: 5, f: 0, a: 10, c: 20, 
                r: "Your shoulder hurts and you're angry. He deliberately works slower. 'Good tools take time,' he grins. You're fuming." 
            },
            { 
                t: "Eat a chocolate bar (frustration coping)", 
                m: 5, f: 10, a: -10, c: 0, 
                r: "You eat a snack while he works. At least your stress level drops, while the bill rises." 
            }
        ]
    },
    {
        id: "srv_leak_1",
        title: "The Leaking Pipe",
        text: "Drip... Drip... A condensate pipe from the air conditioning is leaking. It drips in slow motion directly into the ventilation slots of the 50,000€ core switch. Every drop is a potential total loss.",
        opts: [
            { 
                t: "Wrap with duct tape", 
                req: "tape",
                next: "path_leak_tape", 
                m: 5, f: 0, a: -5, c: -10, 
                r: "You wrap half a roll of tape around it. Sealed! At least for today. And as we know: nothing lasts longer than a temporary fix." 
            },
            { 
                t: "Place a trash can underneath", 
                next: "path_leak_bucket", 
                m: 10, f: 5, a: 0, c: 0, 
                r: "Plink... Plink... You got the bucket from the kitchen. You have to empty it every 2 hours, but the hardware stays dry. Your nerves suffer from the sound." 
            },
            { 
                t: "Bend pipe 'into shape' with hammer", 
                req: "hammer",
                next: "path_leak_hammer", 
                m: 5, f: 0, a: 10, c: 20, 
                r: "You use the hammer as a lever and push. CRACK! The rotten pipe breaks off completely. A gush of cold water pours over the rack. Catastrophe!" 
            }
        ]
    },
    {
        id: "srv_leak_2a",
        title: "The Water Bomb Hazard",
        reqStory: "path_leak_tape",
        text: "You check your tape construction. Water has accumulated. The tape has stretched and now forms a plump, liter-heavy bubble directly above the server. Looks like an udder.",
        opts: [
            { 
                t: "Carefully puncture & drain", 
                req: "screw",
                m: 15, f: -5, a: 5, c: 0, 
                r: "Very carefully... POKE. You catch the stream with a cup. You need 20 cups, but the bubble is gone. Precision work." 
            },
            { 
                t: "Wrap more tape around it", 
                req: "tape", 
                m: 5, f: 10, a: 0, c: 5, 
                r: "You stabilize the bubble with even more tape. Now it looks like a cocoon. Hopefully it never bursts." 
            },
            { 
                t: "Put a bowl underneath & run away", 
                m: 2, f: 5, a: -5, c: 10, 
                r: "If that bursts, you don't want to be in the room. You place a bowl on the floor for peace of mind and flee." 
            }
        ]
    },
    {
        id: "srv_leak_2b",
        title: "Under Water",
        reqStory: "path_leak_bucket",
        text: "You return to the server room. It's quiet. No more 'plink'. The bucket is full and overflowed. A large puddle spreads towards the power distribution unit.",
        opts: [
            { 
                t: "Wipe everything up", 
                m: 30, f: -20, a: 10, c: -5, 
                r: "You crawl on the floor with paper towels. Your pants get wet, your back aches. Laziness is immediately punished." 
            },
            { 
                t: "Call the cleaning crew", 
                m: 5, f: 10, a: -5, c: 5, 
                r: "'Something... uh... spilled here.' The cleaner rolls her eyes, but cleans it up. You stand by and offer unnecessary advice." 
            },
            { 
                t: "Put up a 'Caution Wet Floor' sign", 
                m: 2, f: 15, a: -5, c: 10, 
                r: "You're legally covered now. Technically, the power distribution unit is still in water. But you're off work." 
            }
        ]
    },
    {
        id: "srv_leak_2c",
        title: "Water Damage Bingo",
        reqStory: "path_leak_hammer",
        text: "The water is flowing. The switch blinks wildly. It smells of ozone. You have to act before the 50,000€ damage becomes official.",
        opts: [
            { 
                t: "Put it in rice", 
                m: 15, f: 5, a: -5, c: 10, 
                r: "You dump the canteen rice into the server. It does nothing technically, but it looks like you have a plan. The switch dies anyway." 
            },
            { 
                t: "Dry with a hairdryer", 
                m: 20, f: -5, a: 5, c: 0, 
                r: "You blow-dry the circuit boards. It takes forever. The lights actually come back on! A miracle (or luck). Corrosion is a problem for later." 
            },
            { 
                t: "Blame it on roof damage", 
                m: 5, f: 10, a: -10, c: -5, 
                r: "You take photos of the broken pipe. 'Construction defect! Act of God!' The insurance pays. No one asks about the hammer." 
            }
        ]
    },
    {
        id: "srv_pw_list_1",
        title: "Hidden Note",
        text: "Behind Rack 5, a yellowed note is taped with Scotch tape. It reads in shaky handwriting: 'TOP SECRET - ADMINS ONLY'. The note looks like it's been there since Windows 95.",
        opts: [
            { 
                t: "Curiously decipher the note", 
                next: "path_pw_decipher", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "It's not passwords. It's your predecessor's legacy: 'I hid the internet in a black box at the very bottom of the rack. If Google is down, you have to shake the box. P.S.: Never trust the printer.' Wise words." 
            },
            { 
                t: "Reverently leave it hanging", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You press the Scotch tape back down. This is IT archaeology and cultural heritage. Anyone who removes it will probably accidentally delete the backup too." 
            }
        ]
    },
    {
        id: "srv_pw_list_2a",
		char: "Dr. Wichtig",
        title: "The Google Crash",
        reqStory: "path_pw_decipher",
        text: "A scream echoes through the company: 'GOOGLE IS DOWN!' Panic breaks out. The senior admins frantically type on consoles: 'DNS error! Backbone timeout!' Nothing helps. The boss turns red.",
        opts: [
            { 
                t: "Shake the 'black box'", 
				rep: { "Dr. Wichtig": 10 },
                m: 5, f: -10, a: -10, c: -20, 
                r: "You crawl down and shake the dusty black box. CLICK. The LEDs turn green. The internet is back! The boss claps you enthusiastically on the shoulder: 'Witchcraft, Müller! But good work!'" 
            },
            { 
                t: "Proceed logically (restart router)", 
				rep: { "Dr. Wichtig": -2 },
                m: 20, f: -5, a: 10, c: 10, 
                r: "You ignore the occult advice and restart the Cisco router. It does... nothing. 20 minutes later, it comes back on its own. The boss grumbles unhappily: 'That took far too long.'" 
            },
            { 
                t: "Distrust the printer", 
				rep: { "Dr. Wichtig": -10 },
                m: 5, f: 10, a: -5, c: 10, 
                r: "The note also warned about the printer. You glare at the device while the company loses money. The boss screams: 'Müller! What are you doing?! Fix the Wi-Fi!' That caused trouble." 
            }
        ]
    },
    {
        id: "srv_label_fail",
        title: "The Electrician's Fail",
        text: "You stare at the air conditioning control panel. A handwritten note is taped over the controls: 'ATTENTION: The electrician was colorblind! BLUE heats (Warm) and RED cools (Cold)! Do not touch, will not be repaired until 2030.'",
        opts: [
            { 
                t: "Examine the unit more closely", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Indeed. The wires are swapped. Red goes to the compressor (Cold), Blue to the heating coil (Warm). Completely absurd. Good thing you checked." 
            },
            { 
                t: "Ignore the note", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You move on. Colors are standardized, right? What could possibly go wrong." 
            }
        ]
    },
    {
        id: "srv_port_warning",
        title: "The Warning Sign on the Switch",
        text: "A huge sign is taped to the main switch over Port 42: 'DO NOT USE! Short-circuit danger! Anyone who plugs something in here will fry the entire switch!'",
        opts: [
            { 
                t: "Straighten the sign", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "Port 42 is evil. Understood. Good thing the sign is there." 
            },
            { 
                t: "Ignore it", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You're in a hurry. Hopefully you'll keep that in mind anyway." 
            }
        ]
    },
    {
        id: "srv_crying_elster",
		char: "Frau Elster",
        title: "Tears in the Server Room",
        text: "You hear a soft whimper behind Rack 4. It's Ms. Elster from Accounting. She's sitting on the floor, face buried in her hands. 'I can't take this anymore...', she whispers.",
        opts: [
            { 
                t: "Quietly leave again", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You leave her alone. Sometimes you need privacy." 
            },
            { 
                t: "Ask: 'Is the balance sheet okay?'", 
                rep: { "Frau Elster": -5 },
                m: 10, f: 0, a: 10, c: 5, 
                r: "She stares at you in horror. 'Is work more important to you than people?!' She runs out crying." 
            },
            { 
                t: "Ask: 'How's Rüdiger?'",
                rep: { "Frau Elster": 10 },
                m: 15, f: 10, a: -20, c: -5, 
                r: "She looks up in surprise. A small smile appears. 'Rüdiger... yes, he's waiting at home. He needs his food.' She wipes away her tears. 'Thank you, Mr. Müller. I'm going home to him now.' You saved her day." 
            }
        ]
    },
    {
        id: "srv_update_fail_1",
        title: "The Critical Patch",
        text: "The dashboard blinks red: 'Critical security vulnerability in time tracking! Patch available.' It's lunchtime, everyone's eating kebabs. No one is logged in. The perfect moment?",
        opts: [
            { 
                t: "Install the update immediately", 
                next: "path_update_patch", 
                m: 20, f: -10, a: 30, c: 0, 
                r: "Update goes through! But: The 'Punch In' button is now green instead of blue. At 1 PM, total panic breaks out. 'EVERYTHING LOOKS DIFFERENT!' The phone is ringing off the hook. You changed the layout, you monster." 
            },
            { 
                t: "Dismiss: 'Never change a running system'", 
                next: "path_update_ignore", 
                m: 2, f: 5, a: 0, c: 0, 
                r: "You click away the warning. If Russian hackers come, that's a problem for Future You. For now, it's break time and the kebab is getting cold." 
            }
        ]
    },
    {
        id: "srv_update_fail_2a",
        title: "Heise Online News",
        reqStory: "path_update_patch",
        text: "You're annoyed, reading IT news while users are still complaining about the green button. Headline: 'Massive ransomware wave exploits vulnerability in time tracking software. Thousands of companies encrypted.' Just not yours.",
        opts: [
            { 
                t: "Write an arrogant company-wide email", 
                m: 10, f: 0, a: -20, c: -5, 
                r: "'Subject: You're welcome.' You explain that the green button saved them from ruin. Suddenly, silence. A small triumph." 
            },
            { 
                t: "Change the button back to blue (CSS)", 
                m: 15, f: -5, a: -5, c: 0, 
                r: "You hack the CSS so the button is blue again. Security remains, users are happy. You are the silent guardian." 
            },
            { 
                t: "Enjoy the schadenfreude", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You lean back and read reports of burning server rooms at the competition. The coffee tastes especially good today." 
            }
        ]
    },
    {
        id: "srv_update_fail_2b",
        title: "The New Colleagues",
        reqStory: "path_update_ignore",
        text: "You check the punch times. Strange. Next to 'Müller' and 'Schmidt', there are suddenly 'Vladimir', 'Igor', and 'Botnet_Warrior_99'. They all work 24 hours a day and have admin rights.",
        opts: [
            { 
                t: "Panic: Clean database & patch", 
                m: 60, f: -20, a: 20, c: 0, 
                r: "You secretly delete the accounts and install the update. You sweat blood and water. Hopefully they didn't leave a backdoor." 
            },
            { 
                t: "Ask HR: 'Did we expand?'", 
				rep: { "Dr. Wichtig": -2 },
                m: 10, f: 0, a: -5, c: 20, 
                r: "HR is flabbergasted. The boss gets wind of it. 'Why do we have employees in St. Petersburg?!' You have to report." 
            },
            { 
                t: "Keep the 'employees' (mining)", 
                m: 5, f: 10, a: -10, c: 10, 
                r: "They seem to only be stealing computing power for crypto. You let them continue and skim 10% for yourself. A risky game with the Russian mafia." 
            }
        ]
    },
    {
        id: "srv_consultant_fail_1",
        title: "The Expensive Consultant",
        text: "An external 'Senior Strategy Consultant' (daily rate: 2000€) just pulled the plug on the main server to charge his iPhone. Everything is off. The boss storms in: 'WHY IS THE OPERATION DOWN?!'",
        opts: [
            { 
                t: "Point at the consultant",
				rep: { "Dr. Wichtig": -2 },
                m: 10, f: -5, a: 30, c: 10, 
                r: "The consultant laughs smoothly: 'Ah, Mr. Müller was just about to demonstrate the UPS to me and seems to have grabbed the wrong cable. Poor briefing!' The boss nods. You're fuming." 
            },
            { 
                t: "Ram the plug back in", 
                next: "consultant_psu",
                m: 5, f: 0, a: 10, c: 20, 
                r: "Sparks fly. The server boots up, but the power supply is burnt out. The consultant types on his phone: 'Hardware outdated. Recommend new purchase.' You grin wickedly. 'Will do.'" 
            },
            { 
                t: "Yell at the consultant", 
                next: "consultant_war",
				rep: { "Dr. Wichtig": -5 },
                m: 2, f: 0, a: -20, c: 50, 
                r: "You yell at the guest. The boss turns pale. 'Müller! Behave yourself! Warning for unprofessional conduct!' The consultant grins." 
            }
        ]
    },
    {
        id: "srv_consultant_fail_2b",
        title: "The Gold Power Supply",
        reqStory: "consultant_psu",
        text: "The spare part is here. Because the consultant said we needed 'high-end', you ordered the 'Titan-Master 9000': hand-soldered, RGB lighting, military-grade. Price: 4,800€. The boss stares at the bill, dumbfounded.",
        opts: [
            { 
                t: "Quote the consultant", 
				rep: { "Dr. Wichtig": 5 },
                m: 5, f: 0, a: -20, c: -10,
                r: "'The consultant said: Spare no expense for stability.' The boss turns red. 'That idiot! But fine, if he recommended it...' You're off the hook." 
            },
            { 
                t: "Use tech jargon", 
                m: 5, f: 5, a: -5, c: 5, 
				rep: { "Dr. Wichtig": 2 },
                r: "'This is the only model compatible with our legacy software, boss.' He sighs. 'Alright. Install it.' He has no idea a 50€ part would have sufficed." 
            },
            { 
                t: "Install it with relish", 
				rep: { "Dr. Wichtig": -2 },
                m: 30, f: -10, a: -10, c: 0, 
                r: "You screw the monster into the rack. It glows in rainbow colors. It's completely oversized, but it's YOURS. Revenge is sweet (and expensive)." 
            }
        ]
    },
    {
        id: "srv_consultant_fail_2c",
        title: "The Official Complaint",
        reqStory: "consultant_war",
        text: "The consultant waves a laminated document. 'Regarding our dispute. I have a formal complaint here for 'Toxic Work Atmosphere'. Sign it, or I'll recommend outsourcing to the board.'",
        opts: [
            { 
                t: "Give in & sign", 
                m: 10, f: 5, a: -10, c: -20, 
                r: "You sign grudgingly. The consultant smiles smugly. 'There you go. Synergy through cooperation.' Your radar drops, but your pride is dead." 
            },
            { 
                t: "Bureaucracy counter: 'Form 7b missing'", 
                m: 5, f: 10, a: 10, c: 10, 
                r: "You look at the paper. 'That's the old form from 2018. Without pass A38, I can't accept it.' The consultant is confused and leaves." 
            },
            { 
                t: "Escalate: 'Get out of my server room!'", 
				rep: { "Dr. Wichtig": 2 },
                m: 2, f: 0, a: -20, c: 40, 
                r: "You throw him out. He threatens lawyers. The boss is angry, but your colleagues celebrate you as a hero of the resistance." 
            }
        ]
    },
    {
        id: "srv_dust_disaster_1",
        title: "The Dusty Server",
        text: "The old backup server 'Methuselah' is buried under a 5cm thick layer of dust. The fans gasp and the temperature LED blinks red. This is a fire hazard!",
        opts: [
            { 
                t: "Thoroughly clean (compressed air)", 
                next: "srv_dust_2a",
                m: 20, f: -10, a: 5, c: 0, 
                r: "PFFFFT. A gray cloud envelops you. You remove kilos of dust from the cooling fins. Suddenly the fans rev up, the LED turns green. The box runs like new. Damn it." 
            },
            { 
                t: "Draw dust patterns", 
                next: "srv_dust_2b",
                m: 5, f: 10, a: -5, c: 0, 
                r: "You draw a smiley face in the thick dust on the casing with your finger. It grins crookedly at you. Looks much friendlier now." 
            }
        ]
    },
    {
        id: "srv_dust_disaster_2a",
		char: "Dr. Wichtig",
        title: "The Budget Problem",
        reqStory: "srv_dust_2a",
        text: "The boss comes in and hears the powerful whirring. 'Hear that, Müller? Methuselah runs like a new car! We can cancel the application for the new server (15,000€) then.' Your heart stops.",
        opts: [
            { 
                t: "Sabotage: Throttle fans again", 
                m: 10, f: -5, a: -20, c: 10,
                r: "You secretly wedge a piece of cardboard into the fan. The server immediately overheats. The boss sighs: 'Alright. I'll order a replacement.' He buys the cheapest 'refurbished' server on eBay. Now you're stuck with e-waste." 
            },
            { 
                t: "Stick a 'Legends never die' Post-It", 
				rep: { "Dr. Wichtig": 5 },
                m: 2, f: 5, a: 5, c: -10,
                r: "You accept your fate. You stick a Post-It on the server: 'Do not turn off, or it will die.' The boss nods contentedly at the cost-saving measure." 
            },
            { 
                t: "Insist on new purchase anyway",
				rep: { "Dr. Wichtig": -2 },
                m: 15, f: 0, a: 10, c: 20,
                r: "'That's just the last gasp before death!' The boss waves you off. 'As long as it blinks, it stays.' You now have a fast, old server and an annoyed boss." 
            }
        ]
    },
    {
        id: "srv_dust_disaster_2b",
        title: "Dust Therapy",
        reqStory: "srv_dust_2b",
        text: "You flee from a user ('My mouse pointer is gone!') back into the server room. It's cool and loud. You see your dust smiley on the backup server.",
        opts: [
            { 
                t: "Refine pattern (Zen garden)", 
                m: 10, f: 5, a: -15, c: 0,
                r: "You draw more lines. A fractal of dust. It has something meditative about it, like a Zen garden. Your pulse calms. The world is okay." 
            },
            { 
                t: "Wipe away (Tabula Rasa)", 
                m: 5, f: -5, a: -10, c: 0,
                r: "A swipe with your sleeve. The dust is gone (on your sweater). A clean surface. A small victory over chaos. You feel better." 
            }
        ]
    },
    {
        id: "srv_overheat_warning_1",
        title: "Heat Shimmer",
        text: "Server 'Berta' (payroll) is glowing. The fan is still, it smells acridly of hot silicon. If Berta dies, the payroll data is gone.",
        opts: [
            { 
                t: "Brutal solution: CO2 extinguisher", 
                req: "fire_ext", 
                next: "path_overheat_co2",
                m: 5, f: -10, a: 10, c: -10, 
                r: "PFFFFT! An ice-cold CO2 blast directly into the air intake. The temperature drops sharply to -10 degrees. Berta purrs again, but is now an ice block." 
            },
            { 
                t: "Open & fan air into it", 
                req: "screw", 
                m: 45, f: -15, a: 20, c: 0, 
                r: "You unscrew the casing. You stand next to it for 45 minutes, fanning fresh air into it with a clipboard. Your arm almost falls off, but Berta survives." 
            },
            { 
                t: "Steal boss's Dyson fan", 
                next: "path_overheat_dyson",
                m: 20, f: -5, a: 5, c: 15, 
                r: "You get the 800€ fan from the boss's office. Berta gets luxurious cooling. But upstairs in the office, the sweating begins." 
            },
            { 
                t: "Close door & hope for the best", 
                next: "path_overheat_ignore",
                m: 5, f: 10, a: 0, c: 50, 
                r: "You just leave. 10 minutes later, Berta dies of heatstroke. Silence in the server room. But noise in the hallway." 
            }
        ]
    },
    {
        id: "srv_overheat_warning_2a",
        title: "Ice Age",
        reqStory: "path_overheat_co2",
        text: "Berta runs great, but due to the CO2 shock, condensation forms on the circuit board. It starts dripping. Water and electricity are not friends.",
        opts: [
            { 
                t: "Dry with a hairdryer", 
                m: 15, f: -5, a: 0, c: 0, 
                r: "You get a hairdryer and carefully dry the puddles. It's a dance on a volcano, but you prevent a short circuit." 
            },
            { 
                t: "Pour rice over it", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "The good old rice trick. Looks unprofessional, but absorbs moisture. Hopefully the rice doesn't cook on the CPU." 
            },
            { 
                t: "Ignore it", 
                m: 2, f: 10, a: 0, c: 20, 
                r: "You let fate decide. BIZZZT. A small spark. Berta restarts, but keeps running. A hard drive sector is fried (employees A-F don't get paid)." 
            }
        ]
    },
    {
        id: "srv_overheat_warning_2b",
		char: "Dr. Wichtig",
        title: "The Sweating Boss",
        reqStory: "path_overheat_dyson",
        text: "The boss storms into the server room, beet red and sweating profusely. He sees his beloved Dyson in front of the server. 'MÜLLER! That's my private property! Sweat is running into my eyes!'",
        opts: [
            { 
                t: "Lie: 'Emergency measure'", 
				rep: { "Dr. Wichtig": 5 },		
                m: 5, f: 0, a: -5, c: -10, 
                r: "'Boss, without the Dyson, all payroll data would be gone!' He pauses, wipes his sweat. 'Really? Alright. Save the data.' He leaves." 
            },
            { 
                t: "Return fan immediately", 
                m: 5, f: 0, a: -10, c: 5, 
                r: "You pull the plug. 'Sorry, boss.' He takes the thing and leaves. Berta immediately gets hot again. You have to blow on it now." 
            },
            { 
                t: "Get cheeky: 'You sweat for the company'", 
				rep: { "Dr. Wichtig": -15 },
                m: 2, f: 0, a: 10, c: 30, 
                r: "'Sacrifices must be made.' The boss almost explodes. He snatches the fan and slams the door. That's a warning letter." 
            }
        ]
    },
    {
        id: "srv_overheat_warning_2c",
		char: "Frau Elster",
        title: "The Payday Uprising",
        reqStory: "path_overheat_ignore",
        text: "Ms. Elster from Accounting screams in the hallway: 'BERTA IS DEAD! NO MONEY THIS MONTH!' An angry mob of employees with torches (and staplers) gathers in front of IT.",
        opts: [
            { 
                t: "Manually type all transfers",
                rep: { "Frau Elster": 10 }, 
                m: 120, f: -50, a: 20, c: -10, 
                r: "You sit with Ms. Elster for 2 hours, typing IBANs. Your fingers bleed. But the mob calms down. Lesson learned." 
            },
            { 
                t: "Blame 'hackers'",
                rep: { "Frau Elster": -2 }, 
                m: 10, f: 5, a: -10, c: 10, 
                r: "'North Korean cyber attack!' Everyone nods fearfully. The boss half-believes it, but is angry about the PR. You're off the hook, but the atmosphere is poisoned." 
            },
            { 
                t: "Hide in the toilet",
                rep: { "Frau Elster": -10 }, 
                m: 60, f: 10, a: -20, c: 40, 
                r: "You lock yourself in the toilet and wait until the mob goes home. When you come out, a note is taped to your monitor: 'We know where you live.'" 
            }
        ]
    },
    {
        id: "srv_night_shift_1",
        title: "Night Shift Remains",
        text: "You find a half-full, warm can of energy drink and a note on the server: 'RAID controller is acting up. I'm going home, don't care.' A red light on the drive bay blinks frantically.",
        opts: [
            { 
                t: "Pocket the energy drink", 
                loot: "energy", 
                next: "path_night_shift_loot",
                m: 5, f: -5, a: -5, c: 10, 
                r: "You pocket the can. Free is free. As you bend down, the blinking stops. The LED is now off. Dead. The drive has given up the ghost. (Inventory +1)" 
            },
            { 
                t: "Sigh and start RAID rebuild", 
                next: "path_night_shift_fix",
                m: 60, f: -20, a: 10, c: -10, 
                r: "You hot-swap the drive and start the rebuild. It takes an hour, during which you stare at a loading bar. The system is saved." 
            },
            { 
                t: "Call colleague out of bed", 
                next: "path_night_shift_wake",
                m: 15, f: 0, a: -10, c: 5, 
                r: "You wake him up and yell at him. He comes back to work, completely exhausted and grumpy. 'I'm here already.' You hand him the mess and leave." 
            }
        ]
    },
    {
        id: "srv_night_shift_2a",
		char: "Dr. Wichtig",
        title: "The Missing Drive",
        reqStory: "path_night_shift_loot",
        text: "The boss stands in the doorway. 'Müller? Why can't Marketing access Drive X? The campaigns for tomorrow are on it!' He sees the dead LED.",
        opts: [
            { 
                t: "Blame the night shift", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You point to your colleague's note. 'He just left.' The boss rages. 'That good-for-nothing!' Your head is out of the noose, your colleague is in trouble." 
            },
            { 
                t: "Restore backup (heroism)", 
				rep: { "Dr. Wichtig": 5 },
                m: 45, f: -15, a: 5, c: -20, 
                r: "You change the tape and restore the backup. 'No panic, boss. Everything under control.' You save the day. The boss nods approvingly." 
            },
            { 
                t: "Offer energy drink", 
				rem: "energy",
                rep: { "Dr. Wichtig": -2 },
				m: 2, f: 5, a: -5, c: 10, 
                r: "'Want a sip?' The boss stares at you as if you're crazy. 'Fix it! Immediately!' That was probably the wrong moment." 
            }
        ]
    },
    {
        id: "srv_night_shift_2b",
        title: "Fresh and Alert",
        reqStory: "path_night_shift_fix",
        text: "The night shift colleague comes in (well-rested) at lunchtime. He sees the green LEDs. 'Ah, fixed itself? Told you, just a glitch.'",
        opts: [
            { 
                t: "Give him a piece of your mind", 
                m: 5, f: 0, a: -10, c: 0, 
                r: "You confront him. He waves you off. 'Chill out. Teamwork, right?' You feel morally superior, but he learns nothing from it." 
            },
            { 
                t: "Adjust his chair", 
                m: 2, f: 5, a: 5, c: 0, 
                r: "Secret revenge. You lower his chair 5cm and set his mouse speed to 'snail'. That will drive him insane." 
            },
            { 
                t: "Report him to the boss", 
				rep: { "Dr. Wichtig": 2 },
                m: 10, f: -5, a: 5, c: 5, 
                r: "You tattle. The boss shrugs. 'As long as it runs...' Performance isn't rewarded here, apparently." 
            }
        ]
    },
    {
        id: "srv_night_shift_2c",
        title: "Catfight",
        reqStory: "path_night_shift_wake",
        text: "An email to everyone (cc: Boss, HR): 'Subject: Bullying by IT colleagues'. Your colleague complains that you 'terrorized' him during his rest period, even though the problem was 'not critical'.",
        opts: [
            { 
                t: "Factual correction ('Reply All')", 
                m: 15, f: -5, a: 5, c: 0, 
                r: "You attach the error log. 'RAID 5 degraded is critical.' Silence in the inbox. Facts beat feelings. 1:0 for you." 
            },
            { 
                t: "Ambush him and clarify", 
                m: 5, f: 0, a: 10, c: 10, 
                r: "You catch him in the hallway. It gets loud. HR has to intervene. Now both of you have a note in your personnel file." 
            },
            { 
                t: "Ignore it", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "Let him cry. You delete the email. The boss doesn't ask either. Sometimes silence is golden." 
            }
        ]
    },
    {
        id: "srv_legacy_tape_1",
        title: "The Backup Tape",
        text: "The ancient tape drive whirs, clicks, then falls silent. It won't eject the tape anymore. 'Error 08/15: Tape stuck'. It's the only full backup from yesterday. If you break it, the data is gone.",
        opts: [
            { 
                t: "Surgical intervention (screwdriver)", 
                req: "screw", 
                next: "path_legacy_tape_success",
                m: 20, f: -5, a: 0, c: -5, 
                r: "With surgical precision, you pry open the cover. The tape slides out undamaged. Data saved. You feel like a god." 
            },
            { 
                t: "McGyver trick (zip tie loop)", 
                req: "zip_ties", 
                next: "path_legacy_tape_success",
                m: 10, f: 0, a: 5, c: 5, 
                r: "You fashion a loop, thread it in, and pull carefully. It comes out! The casing has scratches, but hey – it works." 
            },
            { 
                t: "Use brute force: 'GIVE IT HERE!'", 
                next: "path_legacy_tape_fail",
                m: 5, f: 0, a: 20, c: 30, 
                r: "You rip it out with both hands. RRRRATSCH. Tape spaghetti. The black magnetic tape spreads throughout the room. You quickly throw the tangled mess deep into the trash." 
            },
            { 
                t: "Leave it stuck & pray", 
                m: 2, f: 10, a: 0, c: 20, 
                r: "You just ignore the error. Tonight's backup is guaranteed to fail. But that's a problem for 'Tomorrow-Müller'." 
            }
        ]
    },
    {
        id: "srv_legacy_tape_2ab",
		char: "Dr. Wichtig",
        title: "The Restore Test",
        reqStory: "path_legacy_tape_success",
        text: "The boss comes in. 'Müller! Good thing you have the tape. A client accidentally deleted their database. We need yesterday's state. Restore it.'",
        opts: [
            { 
                t: "Casually insert the tape", 
				rep: { "Dr. Wichtig": 10 },
                m: 45, f: -20, a: -10, c: -20,
                r: "The drive whirs. 'Restore completed'. The boss beams. 'You're a lifesaver, Müller!' Sometimes diligence pays off." 
            },
            { 
                t: "Ask for a raise",
                rep: { "Dr. Wichtig": -2 },				
                m: 5, f: 0, a: 5, c: 10,
                r: "'That costs extra, boss.' He laughs dryly. 'Just do your job.' Opportunity missed, but brave." 
            }
        ]
    },
    {
        id: "srv_legacy_tape_2c",
		char: "Dr. Wichtig",
        title: "Data Loss",
        reqStory: "path_legacy_tape_fail",
        text: "The boss storms in. 'Catastrophe! A client deleted everything! Where's yesterday's backup?! We need to restore IMMEDIATELY!' He sees the empty drive.",
        opts: [
            { 
                t: "Confess: 'The tape is... broken'", 
				rep: { "Dr. Wichtig": -15 },
                m: 10, f: 0, a: 5, c: 50,
                r: "You pull the tangled mess from the trash. The boss turns pale. 'THAT WAS THE ONLY BACKUP?!' He screams so loudly that the windows in the neighboring building rattle. That's a warning letter." 
            },
            { 
                t: "Lie: 'The backup never ran!'", 
				rep: { "Dr. Wichtig": -2 },
                m: 5, f: 5, a: -5, c: 20, 
                r: "'Software error, boss. The system failed.' He curses at the technology. 'Damn IT!' You're off the hook, but trust in IT is shattered." 
            },
            { 
                t: "Feigned panic & cry", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 0, a: -10, c: 5, 
                r: "You dramatically break down. 'It's all so terrible!' The boss is so confused that he comforts you instead of firing you. Pity always works." 
            }
        ]
    },
    {
        id: "srv_egon_stash_1",
		char: "Egon",
        title: "Egon's Secret Stash",
        text: "You lift a loose floor panel. Behind it: a dusty box belonging to janitor Egon. Contents: A half-empty bottle of 'Cheap Grain Alcohol', questionable magazines from the 90s, and... a handwritten list of all company door codes.",
        opts: [
            { 
                t: "Quickly photograph the list", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "Click. The photo is safe. Unbelievable: the master code is '9999'. That will open many locked doors for you. You put the panel back." 
            },
            { 
                t: "Take a deep swig of grain alcohol", 
                next: "path_egon_drink",
                m: 15, f: 10, a: -20, c: 10, 
                r: "You take a swig. It tastes like brake cleaner and burns like hell. You're slightly tipsy. Work is now more bearable, but your breath is a risk." 
            },
            { 
                t: "Report the find & rat out Egon", 
                next: "path_egon_snitch",
                rep: { "Egon": -15, "Dr. Wichtig": 5 },
                m: 15, f: 0, a: 10, c: -5, 
                r: "You present the evidence to the boss. Egon gets into huge trouble. He knows exactly it was you. His glare in the hallway was icy." 
            }
        ]
    },
    {
        id: "srv_egon_stash_2b",
		char: "Egon",
        title: "Message from the Underground",
        reqStory: "path_egon_drink",
        text: "You look under the floor panel again. The bottle is gone. Instead, there's a note in shaky handwriting: 'I know it was you. You owe me 5 marks. Otherwise I'll tell the boss.'",
        opts: [
            { 
                t: "Write note: 'Prove it!'", 
                rep: { "Egon": -2 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You put the note back. This is a war of nerves now. Who blinks first? You feel like you're in a spy thriller." 
            },
            { 
                t: "Put in 5 Euros (peace offering)",
                rep: { "Egon": 5 }, 
                m: 2, f: 0, a: -5, c: 0, 
                r: "You put in a bill. The next day, there's a candy there. Truce accepted. Egon is corruptible." 
            },
            { 
                t: "Write note: 'Was delicious, thanks.'",
                rep: { "Egon": -10 }, 
                m: 5, f: 5, a: 10, c: 5, 
                r: "Pure provocation. You later hear Egon cursing loudly in the hallway and kicking his cleaning cart. That's going to have repercussions." 
            }
        ]
    },
    {
        id: "srv_egon_stash_2c",
		char: "Egon",
        title: "The Stuck Office Door",
        reqStory: "path_egon_snitch",
        text: "You want to go into your office in the morning. The key fits, but the door won't budge an inch. In the keyhole is... chewing gum? Egon is whistling and mopping the floor 10 meters away.",
        opts: [
            { 
                t: "Ask Egon for help (humiliation)",
                rep: { "Egon": 5 }, 
                m: 30, f: 0, a: 20, c: 0, 
                r: "You have to grovel. Egon grins broadly. 'Well, old lock. That'll take a while.' He takes an extremely long time, while you have to work in the hallway." 
            },
            { 
                t: "Kick down the door", 
                rep: { "Egon": -10 },
                m: 5, f: 0, a: 20, c: 20,
                r: "BAM. The lock breaks. The door is open, but the frame is ruined. Egon chuckles softly: 'Oh, vandalism? I'll report that.'" 
            },
            { 
                t: "Crawl through the ventilation shaft", 
                req: "screw",
                m: 20, f: -10, a: 10, c: 10, 
                r: "Like Bruce Willis. You unscrew the grille and crawl in. You land dusty on your desk. Egon won, but you have style." 
            }
        ]
    },
    {
        id: "srv_crypto_miner_1",
		char: "Kevin",
        title: "The Hidden Miner",
        text: "A server is running at 100% load, the fans howling like a jet taking off. You check the task manager: 'KevinCoin_Miner.exe' is consuming all resources. The intern is mining crypto at company expense! The CPU is already at a critical 98 degrees.",
        opts: [
            { 
                t: "Kill process & confront Kevin", 
                next: "path_crypto_stop",
                rep: { "Kevin": -5 }, 
                m: 15, f: -5, a: 5, c: -5,                
                r: "Kevin whines: 'But the price is going to the moon! I wanted to buy us all Lambos!' You stand firm. The server cools down, the Lambo has to wait." 
            },
            { 
                t: "Secretly change wallet address to yours", 
                req: "admin_pw",
                next: "path_crypto_hijack",
                rep: { "Kevin": -10 },
                m: 10, f: 20, a: -10, c: 25,
                r: "With a wicked grin, you redirect the coins to your private wallet. Evil? Yes. Profitable? Oh yes. Kevin is now mining for your early retirement. Hopefully, the audit won't notice." 
            },
            { 
                t: "Just let it run", 
                next: "path_crypto_crash",
                rep: { "Kevin": 2 },
                m: 2, f: 10, a: 0, c: 40, 
                r: "You ignore it. 30 minutes later, the box shuts down due to overheating via emergency stop. Too bad SAP was also running on it. The company grinds to a halt. Everyone screams." 
            }
        ]
    },
    {
        id: "srv_crypto_miner_2a",
		char: "Kevin",
        title: "Kevin's Investment",
        reqStory: "path_crypto_stop",
        text: "Kevin stands before you with teary eyes. He holds up three Hot Wheels toy cars. 'I already ordered the Lambos! On credit! If I can't keep mining, my financial plan will collapse. Just 2 more hours?'",
        opts: [
            { 
                t: "Stay firm: 'No!'", 
                rep: { "Kevin": -5 }, 
                m: 5, f: 0, a: 5, c: -10,
                r: "'That's company property, Kevin.' He shuffles away dejectedly. He'll probably have to return the toy cars. You saved the power grid." 
            },
            { 
                t: "Buy his toy from him",
                rep: { "Kevin": 6 }, 
                m: 5, f: 5, a: -15, c: 0, 
                r: "You give him 5 Euros for the yellow toy Lambo. He beams. 'You're the best!' Now you have a car on your desk. Vroom vroom." 
            },
            { 
                t: "Grant exception",
                rep: { "Kevin": 10, "Dr. Wichtig": -2 }, 
                m: 5, f: 10, a: -10, c: 20, 
                r: "'Okay, but only at night.' Kevin cheers. You know exactly that's illegal. But who can resist those puppy dog eyes?" 
            }
        ]
    },
    {
        id: "srv_crypto_miner_2b",
        title: "The Audit",
        reqStory: "path_crypto_hijack",
        text: "An email pops up: 'Internal Audit: Unusual power consumption in Server Room B. We'll be right over to measure.' Your heart sinks. Your wallet is full, but the auditors are on their way.",
        opts: [
            { 
                t: "Delete everything immediately (cover tracks)", 
                m: 10, f: -5, a: 10, c: -10, 
                r: "You delete the miner, the logs, and format the temp folder for good measure. The money is safe, the income stream dries up. Phew. Just in time." 
            },
            { 
                t: "Blame everything on Kevin (preparation)", 
                rep: { "Kevin": -15 },
                m: 5, f: 5, a: -5, c: 5, 
                r: "You rename the process back to 'Kevin_Test'. If they find it, it was the intern. You're a cold-hearted jerk, but you're safe." 
            },
            { 
                t: "Gamble: 'That's AI training'", 
                rep: { "Dr. Wichtig": 5 },
                m: 5, f: 10, a: 0, c: 30, 
                r: "You let it run. When the auditors arrive, you babble something about 'Neural Networks' and 'Blockchain Innovation'. They nod cluelessly and leave. The risk paid off!" 
            }
        ]
    },
    {
        id: "srv_crypto_miner_2c",
        title: "SAP Emergency Service",
        reqStory: "path_crypto_crash",
        text: "The external SAP support is connected via TeamViewer. The hourly rate is 250€. He moves the mouse agonizingly slowly. 'Oh, the database is inconsistent. That... could take a while.'",
        opts: [
            { 
                t: "Watch and drink coffee", 
				rep: { "Dr. Wichtig": -2 },
                m: 60, f: 20, a: -5, c: 20, 
                r: "You're practically getting paid for doing nothing while the external guy sweats. The boss only sees that 'professionals are working'. Most relaxed hour of the week." 
            },
            { 
                t: "Try to help him", 
                m: 20, f: -10, a: 10, c: -5, 
                r: "You give him access to the backups. 'Ah, thanks.' The system runs faster again. Fewer costs, but you had to work." 
            },
            { 
                t: "Invent hardware as an excuse", 
                m: 10, f: 5, a: 5, c: 15, 
                r: "'It's the RAM!' The external guy doesn't contradict. The boss immediately orders new RAM. You've successfully covered up the heat problem." 
            }
        ]
    },
    {
        id: "srv_intern_access",
        title: "Urgent Data",
        text: "The intern is sick. The boss stands in front of his PC: 'Müller! Crack this thing! The presentation is on it! I bet the idiot used something complicated!'",
        opts: [
            { 
                t: "Enter: 'Fluffy123'",
				rep: { "Dr. Wichtig": 10 },
                m: 5, f: 10, a: -10, c: -5, 
                r: "You type it in blindly. 'ACCESS GRANTED'. The boss stares at you: 'How did you...? Never mind. Good work, Müller!'" 
            },
            { 
                t: "Force Admin Reset",
                req: "admin_pw",
				rep: { "Dr. Wichtig": 2 },
                m: 15, f: -5, a: 0, c: 0, 
                r: "Takes 15 minutes, but it's foolproof. The boss drums his fingers impatiently." 
            },
            { 
                t: "Enter: '123456'",
				rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 10, c: 15, 
                r: "Wrong. PC locks for 1 hour. The boss explodes." 
            },
            { 
                t: "Enter: 'Password'",
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 10, c: 10, 
                r: "Of course not. The boss shakes his head: 'Do you think I'm stupid? Try something real!'" 
            }
        ]
    },
    {
        id: "srv_cable_spaghetti_1",
        title: "Cable Spaghetti",
        text: "The switch in the rack looks like a plate of spaghetti. A single knot of yellow, blue, and gray cables. You need to find Port 42, but it's buried deep in the chaos.",
        opts: [
            { 
                t: "Patiently untangle", 
                next: "path_cable_tidy",
                m: 45, f: -10, a: -10, c: -10, 
                r: "You put on music and sort cable by cable. After 45 minutes, you've created perfect order. It looks beautiful. Almost too good to touch." 
            },
            { 
                t: "Cinch with zip ties", 
                req: "zip_ties", 
                next: "path_cable_tidy",
                m: 15, f: 0, a: -5, c: 0, 
                r: "You grab a handful of zip ties and cinch everything into a thick sausage. Not pretty, but air gets through and you can see the ports again." 
            },
            { 
                t: "Just pull on it", 
                next: "path_cable_yank",
                m: 5, f: 5, a: 20, c: 10, 
                r: "You pull hard on the cable you need. RRRTSCH. Three other plugs fly out with it. Oops. The lights on the phone system go out." 
            }
        ]
    },
    {
        id: "srv_cable_spaghetti_2ab",
        title: "The Museum Piece",
        reqStory: "path_cable_tidy",
        text: "The IT manager stands in front of the rack. Tears in his eyes. 'It's... beautiful. No one is to touch this again! I declare this rack a restricted zone!'",
        opts: [
            { 
                t: "Proudly salute", 
                m: 5, f: 0, a: -5, c: -5, 
                r: "'Yes, sir!' Your work is now treated like a sacred shrine. No one will re-patch anything here. Your work is for eternity." 
            },
            { 
                t: "Attach 'Artwork' sign", 
                m: 2, f: 5, a: -5, c: 0, 
                r: "You stick a sign on it: 'Modern Art - Do not touch'. Colleagues take photos. You are the Michelangelo of IT." 
            },
            { 
                t: "Be annoyed: 'But we have to work'", 
				rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "'Boss, I need Port 43.' He glares at you. 'Don't you dare destroy the symmetry!' Great, now the rack is useless." 
            }
        ]
    },
    {
        id: "srv_cable_spaghetti_2c",
        title: "Wrong Connection",
        reqStory: "path_cable_yank",
        text: "You frantically plug the cables back in. The system restarts. Phew! But: You must have swapped the slots. The whole building is now misconnected. If you call the canteen, you get the boss.",
        opts: [
            { 
                t: "Run through the building and swap plugs", 
                m: 60, f: -20, a: 20, c: 5, 
                r: "You run from office to office, re-plugging phones. 'Why is my Ficus ringing?', asks a colleague. You're sweating profusely until everything is right again." 
            },
            { 
                t: "Send new list: 'Numbers changed'", 
                m: 10, f: 10, a: -5, c: 10,
                r: "You send an email: 'Due to... sunspots, we have new extensions.' The boss now gets pizza orders. Chaos is perfect, but you're on break." 
            },
            { 
                t: "Say: 'That'll sort itself out by tomorrow'", 
                m: 5, f: 10, a: 0, c: 20, 
                r: "You just lie. 'Digital synchronization takes 24 hours.' Hopefully the boss doesn't notice he's now reachable under 'Janitor'." 
            }
        ]
    },
    {
        id: "srv_disco_led_1",
        title: "Disco in the Server Room",
        text: "All LEDs on the server racks blink synchronously in 4/4 time. It looks like a light organ in a village disco. The system runs extremely erratically and hums a strange bass rhythm.",
        opts: [
            { 
                t: "Look it up in the manual", 
                req: "manual", 
                m: 20, f: -5, a: -5, c: -5, 
                r: "You frantically flip pages. Error code '0xPARTY'. An Easter egg from the developers that triggers after exactly 100 days of uptime. You press the key combination 'CTRL+ALT+NOFUN'. The blinking stops." 
            },
            { 
                t: "Put on techno playlist & dance", 
                next: "path_disco_dance",
				rep: { "Dr. Wichtig": -2 },
                m: 15, f: 10, a: -20, c: 20, 
                r: "You use the blinking as a light show and dance the robot dance completely uninhibited. Unfortunately, the boss suddenly stands in the doorway, stares at you, and dryly asks: 'Are you having a stroke, Müller?'" 
            },
            { 
                t: "Brutally pull the plug", 
                next: "path_disco_plug",
                m: 5, f: 5, a: 10, c: 10, 
                r: "Click. Silence. Click. Noise. The server boots up again. The blinking is gone. The database reports 'Index Corruption' on startup, but you skillfully ignore it." 
            }
        ]
    },
    {
        id: "srv_disco_led_2b",
        title: "The Viral Hit",
        reqStory: "path_disco_dance",
        text: "You thought the boss's lecture was all? Wrong. A colleague filmed your dance through the server room door window. The video 'Admin on Drugs' is now #1 on the company intranet.",
        opts: [
            { 
                t: "Own it: 'Those are moves!'", 
                m: 5, f: 0, a: -10, c: 5, 
				rep: { "Dr. Wichtig": -2 },
                r: "You comment on the video: 'Envy is the highest form of recognition.' Colleagues laugh, but somehow they think you're cooler now. The boss just shakes his head." 
            },
            { 
                t: "Delete IT intranet", 
                m: 10, f: -5, a: 10, c: 20, 
                r: "You use your admin rights and delete the video (and the backup). That's called the 'Streisand Effect'. Now everyone thinks you really have something to hide." 
            },
            { 
                t: "Throttle the filmer's internet", 
                m: 5, f: 5, a: -15, c: 5,
                r: "You identify the colleague's IP and throttle his port to 56k modem speed. He can't upload the video anymore. He can't load anything anymore. Justice." 
            }
        ]
    },
    {
        id: "srv_disco_led_2c",
        title: "The Price Glitch",
        reqStory: "path_disco_plug",
        text: "The phone is ringing off the hook. 'The webshop is going crazy!' Your hard reboot caused the prices in the database to shift. All products now cost 0.00 Euros. Orders are pouring in by the second.",
        opts: [
            { 
                t: "Take webshop offline immediately", 
				rep: { "Dr. Wichtig": -2 },
                m: 10, f: -5, a: 10, c: 20, 
                r: "You cut the line. The shop is offline. The damage is limited, but the boss screams: 'We're losing thousands of Euros per minute!' Well, better than giving away goods." 
            },
            { 
                t: "Restore backup", 
				rep: { "Dr. Wichtig": -2 },
                m: 60, f: -20, a: 10, c: 15, 
                r: "You have to get yesterday's backup. The loading bar crawls. The boss stands behind you, breathing heavily: 'Every second costs money, Müller!' You're sweating." 
            },
            { 
                t: "Manually set prices to 9999€", 
				rep: { "Dr. Wichtig": 2 },
                m: 5, f: 5, a: -5, c: -5, 
                r: "Quick & Dirty SQL command: `UPDATE prices SET value = 9999`. No one buys anything anymore, but the error is 'fixed'. You are a genius of madness." 
            }
        ]
    },
    {
        id: "srv_ac_failure_1",
        title: "AC Failure",
        text: "The air conditioning has failed. It feels like 50 degrees in the server room. The rack fans are running at maximum, it sounds like an aircraft carrier. The servers are sweating.",
        opts: [
            { 
                t: "Wedge security door open with a chair", 
                next: "path_ac_door",
                m: 5, f: 0, a: 0, c: 10, 
                r: "Fresh hallway air streams in. The temperature drops to a tolerable 30 degrees. But: a permanently open server room door is a massive security risk." 
            },
            { 
                t: "MacGyver solution: Build USB fan", 
                req: "usb_stick", 
                m: 15, f: -5, a: -5, c: 0, 
                r: "You fiddle with the connections and improvise active cooling. It does almost nothing, but looks extremely technical and makes you feel like an engineer." 
            },
            { 
                t: "Get buckets of ice cubes", 
                next: "path_ac_ice",
                m: 10, f: 5, a: 0, c: 20, 
                r: "You place bowls of ice from the kitchenette directly into the racks. It actually cools, but condensation collects. A dance on a razor's edge." 
            }
        ]
    },
    {
        id: "srv_ac_failure_2a",
        title: "The Bureaucratic Stickler",
        reqStory: "path_ac_door",
        text: "The data protection officer stands in the doorway. He looks sweaty and unhappy. He taps his clipboard. 'According to ISO 27001 and GDPR Article 32, physical access must be restricted. I have to report this. I hate my job, but rules are rules.'",
        opts: [
            { 
                t: "Refer to 'Emergency Paragraph 7b'", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You invent a rule: 'In case of thermal overload, the hardware protection clause applies.' He blinks confusedly, then nods tiredly. 'Alright. If you say so. I'll write... exception.' He shuffles away." 
            },
            { 
                t: "Lecture him about heat", 
                m: 15, f: -5, a: 10, c: 15, 
                r: "You yell at him: 'Do you want the data to burn?!' He notes 'Uncooperative Behavior' and leaves. That means paperwork." 
            },
            { 
                t: "Bribe: 'Want an ice cream?'", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You offer him an ice cream on a stick. He sighs, takes it, and closes his eyes. 'I saw nothing.' Corruption always works." 
            }
        ]
    },
    {
        id: "srv_ac_failure_2c",
        title: "Wet Biotope",
        reqStory: "path_ac_ice",
        text: "Physics is cruel. The ice melts faster than expected. Puddles form on the floor and creep dangerously close to the power strips. Humidity is at 99%.",
        opts: [
            { 
                t: "Call Kevin to wipe", 
                rep: { "Kevin": -5 },
                m: 5, f: 10, a: -5, c: 0, 
                r: "'Kevin! Practical training: Data center cleaning!' The intern comes with the mop. He grumbles, but your feet stay dry." 
            },
            { 
                t: "Put up 'Caution Wet Floor' sign", 
                m: 2, f: 15, a: 0, c: 10,
                r: "You put up the yellow warning sign. You're legally off the hook. The fact that the power distribution unit is about to get soaked is a technical detail." 
            },
            { 
                t: "Build drainage channel from tape", 
                req: "tape", 
                m: 15, f: -5, a: 0, c: 0, 
                r: "You build a complex construction of duct tape that directs the water into a flowerpot. It's ugly, it's shoddy, but it works. Engineering!" 
            }
        ]
    },
    {
        id: "srv_legacy_1",
        title: "The Sealed Shaft",
        text: "Behind a humming rack, you discover an old ventilation flap. A yellowed note is taped to it: 'Only open in case of apocalypse or stock market crash. Signed Baron von Gier (Founder).'",
        opts: [
            { 
                t: "Rattle it",
                m: 5, f: 0, a: 10, c: 0,
                r: "Locked. You probably need a lever or code. But you inhaled dust. *Cough*"
            },
            { 
                t: "Open ventilation flap",
                next: "path_legacy_open",
                m: 5, f: -10, a: -5, c: 5,
                r: "The flap creaks open. That was loud! Hopefully no one heard that. Behind it is a small, dark cavity."
            }
        ]
    },
    {
        id: "srv_legacy_2",
        title: "The Old Safe",
        reqStory: "path_legacy_open",
        text: "You crawl back into the shaft. The safe has a dial. Next to it is an engraving: 'The company's founding year is the key.' (You don't know it, but Kevin recently scrawled '1899' on the toilet door).",
        opts: [
            { 
                t: "Try code '1234'",
                m: 10, f: 0, a: 15, c: 0,
                r: "Nothing happens. You angrily kick the safe. Your toe hurts."
            },
            { 
                t: "Enter code '1899'",
                loot: "corp_chronicles",
                m: 15, f: -5, a: -10, c: 0,
                r: "*Click*. The mechanism springs open! A feeling of triumph washes over you. It smells of old paper and greed. (New item and can be read in inventory!)"
            }
        ]
    },
    {
        id: "srv_ghost_1",
        title: "The Unknown Blink",
        text: "At the very back of the dark corner, a green LED blinks on a device not listed in any inventory plan. It's dust-covered and hums softly.",
        opts: [
            { 
                t: "Wipe dust & examine",
                next: "path_ghost_found",
                m: 15, f: -10, a: 5, c: 0,
                r: "You wipe away the dust. Sticker: 'Project PHOENIX - 1998 - Do Not Touch'. It's been running for 25 years. Respect."
            },
            { 
                t: "Ignore it",
                m: 2, f: 10, a: 0, c: 5,
                r: "Not my ticket, not my problem. You walk away."
            }
        ]
    },
    {
        id: "srv_ghost_2",
        title: "PHOENIX Lives",
        reqStory: "path_ghost_found",
        text: "You stand in front of the mysterious 1998 server again. Today it's making a strange noise. *Click-clack*. Like a hard drive dying.",
        opts: [
            { 
                t: "Connect monitor & fix",
                m: 45, f: -25, a: 10, c: -10,
                r: "You spend 45 minutes repairing sectors. It... it hosts the founder's private fan fiction page?! Doesn't matter, it's running again."
            },
            { 
                t: "Percussive Maintenance (Hit it)",
                m: 5, f: 5, a: -15, c: 20,
                r: "BAM. The clicking stops. The humming gets quieter. Nothing is as relaxing as violence against hardware."
            }
        ]
    },
    {
        id: "srv_alarm_stuck_1",
        title: "EAR BLEEDING!",
        text: "A false alarm in the server room! The siren blares at 120 decibels. You can't think. The keypad on the wall blinks: 'ENTER CODE TO DEACTIVATE'.",
        opts: [
            { 
                t: "Code: 0000",
                m: 5, f: 0, a: 20, c: 0, 
                r: "WRONG. The siren gets even louder. Your ears ring for hours." 
            },
            { 
                t: "Code: 4711",
                m: 5, f: 5, a: -20, c: -10, 
                r: "Silence. Heavenly silence. You saved the day because you remembered the janitor's scolding." 
            },
            { 
                t: "Hit it with the hammer",
                req: "hammer",
                next: "path_alarm_smashed",
                m: 5, f: 0, a: 10, c: 40, 
                r: "The siren is broken, but so is the wall. That's going to be expensive." 
            },
            { 
                t: "Run out",
                m: 30, f: 0, a: 10, c: 10, 
                r: "You wait outside for 30 minutes for the fire department. It was just dust in the sensor." 
            }
        ]
    },
    {
        id: "srv_alarm_stuck_2",
		char: "Egon",
        title: "Egon and the Hole",
        reqStory: "path_alarm_smashed",
        text: "Janitor Egon stands before the ruins of the alarm system. He runs his finger over the deep dent in the wall. 'That wasn't a technical defect. That was blunt force.' He slowly turns to you. 'Did you see anything?'",
        opts: [
            { 
                t: "Lie: 'There was a giant rat!'",
                rep: { "Egon": -10 }, 
                m: 5, f: 0, a: 10, c: 20, 
                r: "Egon raises an eyebrow. 'A rat with a hammer?' He doesn't believe a word you say. He writes a report about 'vandalism'. Your radar is now in the critical range." 
            },
            { 
                t: "Confess: 'It was an emergency...'", 
                rep: { "Egon": 5 },
                m: 10, f: -5, a: -10, c: -10, 
                r: "You explain the ear bleeding. Egon grumbles, nodding. 'Better the wall than the eardrum. But you're paying for the plaster.' He covers for you with the boss, but you owe him one." 
            },
            { 
                t: "Bribe: Offer him your duct tape", 
                rem: "tape",
                rep: { "Egon": 10 },
                m: 5, f: 5, a: -10, c: -5, 
                r: "Egon's eyes light up. 'Original gaffer tape? The good stuff?' He takes the roll, tapes a piece over the hole in the wall, and grins. 'What hole? I see no hole.'" 
            }
        ]
    },
    {
        id: "srv_hdd_destroy_1",
        title: "The Hard Drive Scrapping",
        text: "A box with 50 old hard drives stands in the server room. Label: 'Strictly confidential: Destroy in compliance with data protection!'. Next to it lies the official 'Demagnetization Handheld Device', which feels like it requires 100 manual crank turns per drive.",
        opts: [
            { 
                t: "Dutifully crank (protocol)", 
                next: "path_hdd_kurbel",
                m: 90, f: -20, a: 20, c: 0, 
                r: "You crank yourself a tennis elbow. After 90 agonizing minutes, you're sweating profusely and your aggression throbs. But the drives are dead. You drag yourself back to your desk." 
            },
            { 
                t: "Brute force!", 
                req: "hammer",
                next: "path_hdd_hammer",
                m: 15, f: -5, a: -30, c: 0, 
                r: "You place the drives on the floor and smash them with the hammer. It crashes, splinters fly, your stress level drops. You leave the debris field and go back to work, satisfied." 
            },
            { 
                t: "Just dump in general waste", 
                next: "path_hdd_trash",
                m: 5, f: 15, a: 0, c: 0, 
                r: "You dump the entire box into the black bin at the back exit. Time saved! You wash your hands of guilt and discreetly return to your office." 
            }
        ]
    },
    {
        id: "srv_hdd_destroy_2a",
		char: "Dr. Wichtig",
        title: "Sore Muscles & Praise",
        reqStory: "path_hdd_kurbel",
        text: "A little later, the boss suddenly stands in your office. 'Müller, I saw the neatly demagnetized drives in storage earlier. That's what I call diligence! Real craftsmanship!' He claps you hard on the shoulder. Your arm almost falls off.",
        opts: [
            { 
                t: "Endure pain with a smile", 
                rep: { "Dr. Wichtig": 15 },
                m: 5, f: 0, a: 5, c: -15, 
                r: "You grit your teeth. The boss is very impressed by your effort. The miserable cranking action at least paid off for your boss-radar." 
            },
            { 
                t: "Complain: 'That's a case for occupational health!'", 
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 5, a: 10, c: 10, 
                r: "The boss rolls his eyes. 'Always this whining in IT.' The praise has evaporated and your arm still hurts." 
            },
            { 
                t: "Use the favor: Demand a break", 
                m: 30, f: 15, a: -10, c: 0, 
                r: "You demand an ergonomic regeneration break. The boss graciously nods. You do nothing for 30 minutes and massage your forearm." 
            }
        ]
    },
    {
        id: "srv_hdd_destroy_2b",
		char: "Egon",
        title: "The Debris Field",
        reqStory: "path_hdd_hammer",
        text: "Some time after your hammer action, janitor Egon, on his rounds, stands shaking his head in the server room in front of the mountain of shattered plastic and bent metal. He calls you: 'Who wreaked havoc here?! I'll never clean this up with a normal broom!'",
        opts: [
            { 
                t: "Promise him an energy drink", 
                rem: "energy",
                rep: { "Egon": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "'I'll put a can out for you later, Egon.' He grumbles. 'Alright. But never do that again.' Your hammer massacre goes unpunished." 
            },
            { 
                t: "Ignore: 'That was the data protection troll'",
                rep: { "Egon": -10 }, 
                m: 2, f: 5, a: 5, c: 5, 
                r: "Egon curses loudly on the phone about IT. You saved some time again, but Egon is furious with you." 
            },
            { 
                t: "Scold him: 'That's what you're paid for!'",
                rep: { "Egon": -15 }, 
                m: 5, f: 0, a: 10, c: 10, 
                r: "Egon hangs up wordlessly. Less than 10 minutes later, the light and heating in your office inexplicably go out. Never mess with Egon." 
            }
        ]
    },
    {
        id: "srv_hdd_destroy_2c",
        title: "Data Leak",
        reqStory: "path_hdd_trash",
        text: "Some time has passed since you disposed of the trash. Suddenly, a panicked email from the Compliance Officer: 'Old hard drives are flying around the yard! Someone rummaged through the bin! Who didn't destroy them?!'",
        opts: [
            { 
                t: "Blame intern Kevin", 
                rep: { "Kevin": -15 },
                m: 10, f: 5, a: 10, c: 20, 
                r: "You write back: 'Kevin was supposed to shred them!' Kevin gets a huge dressing-down. You feel terrible, but you're safe." 
            },
            { 
                t: "Run out and collect drives", 
                m: 30, f: -15, a: 20, c: 10, 
                r: "You rush to the yard, crawl on the asphalt, and collect the drives again. Worst humiliation, but you prevent the ultimate super-GAU." 
            },
            { 
                t: "Lie: 'I have certificates of destruction!'", 
                m: 5, f: 0, a: 10, c: 30, 
                r: "That was stupid. The Compliance Officer immediately demands the documents. You've dug your own grave." 
            }
        ]
    },
    {
        id: "srv_paywall_1",
        title: "The Ransomware from the Manufacturer",
        text: "An ancient, proprietary server software suddenly demands credit card authorization for a 'mandatory license renewal' (499€), otherwise it will shut down in 5 minutes. The boss is on a plane and unreachable. Accounting has already left for the day.",
        opts: [
            { 
                t: "Use the 'Black Card'", 
                req: "black_card", 
                next: "path_paywall_card", 
                m: 5, f: 5, a: -10, c: 0, 
                r: "You type in the Nigerian prince's details. *Payment accepted*. Somewhere in Zamunda, an offshore account is debited. The server purrs along. No outage." 
            },
            { 
                t: "Repeatedly reset the timer (hack)", 
                req: "admin_pw", 
                next: "path_paywall_hack", 
                m: 20, f: -5, a: 15, c: 5, 
                r: "You write a nasty script that rewinds the server's system time every 4 minutes. An extremely shaky hack that's guaranteed to blow up in your face tomorrow." 
            },
            { 
                t: "Let it shut down", 
                next: "path_paywall_down", 
                m: 5, f: 10, a: 0, c: 30, 
                r: "No money, no honey. You let the timer run out. The server shuts down. The logistics department can't send any packages today. Tomorrow will be a huge drama." 
            }
        ]
    },
    {
        id: "srv_paywall_2a",
        title: "Queries from Support",
        reqStory: "path_paywall_card",
        text: "The phone rings. Server software support is on the line. 'Thank you for the license renewal. But we just need to ask... why does your payment service provider have a billing address in Lagos, Nigeria?'",
        opts: [
            { 
                t: "Distract: 'That's our new shell company.'", 
                m: 10, f: 0, a: 5, c: 10, 
                r: "The support employee clears his throat. 'Tax optimization? I see. We won't ask any further.' Phew. That was close to a money laundering investigation." 
            },
            { 
                t: "Hang up wordlessly", 
                m: 2, f: 5, a: 5, c: 0, 
                r: "The license is paid. You don't have to talk to anyone about it. Click." 
            }
        ]
    },
    {
        id: "srv_paywall_2b",
        title: "The Time Paradox",
        reqStory: "path_paywall_hack",
        text: "Your time-loop hack is running. Unfortunately, the mail server pulled the manipulated system time. The entire department is currently wondering why all freshly sent emails have the date '01.01.1970'.",
        opts: [
            { 
                t: "Ignore: 'That's a feature.'", 
                m: 5, f: 10, a: 5, c: 10, 
                r: "You claim it's a 'retro encryption method'. A few colleagues believe it. The rest think IT is a complete joke." 
            },
            { 
                t: "Stop script & pay", 
                m: 20, f: -5, a: 15, c: 10, 
                r: "You stop the hack and force the boss to pay via SMS. The emails have the correct date again, but you're in massive trouble for the hack." 
            }
        ]
    },
    {
        id: "srv_paywall_2c",
        title: "Logistics Grounded",
        reqStory: "path_paywall_down",
        text: "The Head of Logistics stands weeping in your office. 'The trucks are backed up to the highway! The barcode scanner server is offline! We have to label packages with a marker!'" ,
        opts: [
            { 
                t: "Feigned sympathy: 'Boss didn't pay.'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 5, c: 20, 
                r: "You throw the CEO under the bus. The Head of Logistics angrily calls management. You lean back. Not your budget, not your problem." 
            },
            { 
                t: "Give him a stapler", 
                m: 2, f: 5, a: 10, c: 5, 
                r: "'Here, staple delivery notes to them.' He stares at you, dumbfounded. 'You're a monster, Müller.'" 
            }
        ]
    },
    {
        id: "srv_acid_1",
        title: "Corrosive Danger",
        text: "The old emergency power battery (UPS) has a leak! Yellowish battery acid drips onto the raised floor and hisses. It's smoking and eating through the metal grate directly towards the unprotected main power cables. This is just before meltdown.",
        opts: [
            { 
                t: "Use the fire extinguisher", 
                req: "fire_ext", 
                next: "path_acid_freeze", 
                m: 5, f: 0, a: -10, c: 0, 
                r: "PFFFFT! You spray CO2 directly onto the puddle. The acid is flash-frozen and solidifies into a harmless, white lump. Clean, safe, solved with ice-cold precision." 
            },
            { 
                t: "Absorb with cardboard and old boxes", 
                next: "path_acid_cardboard", 
                m: 25, f: -10, a: 25, c: 0, 
                r: "You throw trash onto the acid. Your fingers burn slightly, your shoes now have white spots, but the main power cables are safe for now. A dangerous operation." 
            },
            { 
                t: "Call janitor Egon", 
                next: "path_acid_egon", 
                rep: { "Egon": -5 },
                m: 15, f: 5, a: 5, c: 5, 
                r: "You get Egon. He sees the acid, curses for 10 straight minutes about 'this expensive electronic junk' and sprinkles cat litter on it. He hates you for it." 
            }
        ]
    },
    {
        id: "srv_acid_2a",
		char: "Egon",
        title: "Cleaning Duty",
        reqStory: "path_acid_freeze",
        text: "Egon comes into the server room to check things out. He looks at the frozen acid block on the floor. He grabs a dustpan and brush and simply sweeps up the harmless ice lump.",
        opts: [
            { 
                t: "Take credit", 
                rep: { "Egon": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "Egon nods at you approvingly. 'Cleverly solved, IT boy. Nice and clean. No fumes.' You enjoy the moment of craftsman's respect." 
            }
        ]
    },
    {
        id: "srv_acid_2b",
        title: "Eaten Through",
        reqStory: "path_acid_cardboard",
        text: "The cardboard wasn't enough. The corrosive liquid ate through the cardboard. It's dripping again now. Worse still: it's dripping onto a network rail. Two computers in accounting lose connection.",
        opts: [
            { 
                t: "Seal with tape", 
                req: "tape",
                m: 15, f: -5, a: 10, c: 5, 
                r: "You wrap acid-resistant (?) tape around the leak. The fumes sting your nose. You've only postponed the problem, but the network is back up." 
            },
            { 
                t: "Ignore accounting", 
                m: 2, f: 5, a: 5, c: 10, 
                r: "Two outages are an acceptable collateral damage. Ms. Elster will write a ticket. That can wait until tomorrow." 
            }
        ]
    },
    {
        id: "srv_acid_2c",
		char: "Egon",
        title: "Egon's Revenge",
        reqStory: "path_acid_egon",
        text: "Egon has cleaned up the acid damage, but he left you a lesson. He locked your trash can in the office with a padlock. A note hangs on it: 'Hazardous waste disposal by request only.'",
        opts: [
            { 
                t: "Throw trash in hallway", 
                rep: { "Egon": -10 },
                m: 5, f: 5, a: 15, c: 5, 
                r: "You defiantly dump your paper trash in front of the door. The cold war between you and Facility Management has begun." 
            },
            { 
                t: "Use trash compactor screwdriver", 
                req: "screw", 
                m: 10, f: -5, a: 5, c: 0, 
                r: "You pick the cheap lock in two minutes. Egon is subtly impressed, but will simply leave the bin unemptied in the future." 
            }
        ]
    },
    {
        id: "srv_rack_slip_1",
        title: "Extreme Slope",
        text: "Someone touched the leveling feet of Rack 2 while vacuuming. The 500kg structure is listing and slowly tilting forward. If it falls, it will rip the thick fiber optic main line from the ceiling!",
        opts: [
            { 
                t: "Use as a lasso: LAN cable", 
                rem: "cable", 
                next: "path_rack_cable", 
                m: 10, f: -5, a: 5, c: -10, 
                r: "You throw the LAN cable like a cowboy around the top of the rack and tie the other end to a thick heating pipe. The casing creaks, but it holds! (Item consumed)" 
            },
            { 
                t: "Wedge Win95 manual underneath", 
                req: "manual", 
                next: "path_rack_manual", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You ram the thick tome with your foot precisely under the sinking corner. It stops the fall to the millimeter. Historical knowledge supports modern technology." 
            },
            { 
                t: "Prop with bare hands", 
                next: "path_rack_hold", 
                m: 45, f: -10, a: 30, c: 5, 
                r: "You push against the rack with all your might until Egon finally comes with a jack. You stand there trembling for 45 minutes. Your back is absolute mush afterwards." 
            }
        ]
    },
    {
        id: "srv_rack_slip_2a",
        title: "ISO Pain",
        reqStory: "path_rack_cable",
        text: "An external ISO security auditor stares, shaking his head, at the heavy rack in the afternoon, which is only prevented from tipping over by a ridiculous gray LAN cable tied to a heating pipe. He weeps softly.",
        opts: [
            { 
                t: "Explain: 'That's Cat7. It holds.'", 
                m: 5, f: 0, a: 5, c: 10, 
                r: "The auditor tremblingly takes notes. 'Load capacity of data cables... not standardized.' He fails you on the audit, but you prevented a server crash." 
            },
            { 
                t: "Shrug: 'Better than dominoes.'", 
                m: 2, f: 5, a: 0, c: 5, 
                r: "He has to grudgingly agree. Visually a nightmare, practically a masterpiece." 
            }
        ]
    },
    {
        id: "srv_rack_slip_2b",
		char: "Kevin",
        title: "The Pressed Book",
        reqStory: "path_rack_manual",
        text: "Kevin discovers your bracing maneuver. He sees how 500 kilos of server have compressed the ancient Win95 manual into a solid paper brick. 'Whoa. That's like one of those hydraulic presses on YouTube!'",
        opts: [
            { 
                t: "Leave it to Kevin", 
                rep: { "Kevin": 5 },
                m: 2, f: 0, a: -5, c: 0, 
                r: "Kevin is thrilled by the destruction. He takes photos for Reddit. You let him have his fun." 
            },
            { 
                t: "Try to retrieve book (danger)", 
                m: 10, f: 0, a: 15, c: 5, 
                r: "You kick the book to free it. The rack wobbles ominously. You'd rather leave it. The manual is now an eternal foundation of IT." 
            }
        ]
    },
    {
        id: "srv_rack_slip_2c",
        title: "Work Accident",
        reqStory: "path_rack_hold",
        text: "Your heroic muscle effort takes its toll. You're lying flat on your back on the floor in the break room. An email from Sabine (HR) arrives on your phone: 'Mr. Müller, please fill out form AU-22 for back pain. While standing!'",
        opts: [
            { 
                t: "Ignore and keep lying down", 
                m: 20, f: 15, a: 10, c: 5, 
                r: "You just stay on the floor. A half-hour paid break. Someone clumsily steps over you." 
            },
            { 
                t: "Tape your back with duct tape", 
                req: "tape",
                m: 10, f: -5, a: -10, c: 0, 
                r: "You secretly wrap duct tape around your lower back like a supportive corset. It helps surprisingly well! You can limp again." 
            }
        ]
    },
    {
        id: "srv_coffee_cup_1",
        title: "Life-Threatening in the Rack",
        text: "You enter the server room and your heart stops. Someone has placed a full, steaming coffee cup directly on the ventilation grille of the core router.",
        opts: [
            { 
                t: "Remove the cup in slow motion", 
                next: "path_cup_slow", 
                m: 10, f: 0, a: 15, c: 0, 
                r: "Your hands tremble, but you carefully lift the thing. The core router is saved from liquid death." 
            },
            { 
                t: "Punch the wall in anger", 
                next: "path_cup_rage", 
                m: 5, f: 0, a: 25, c: 0, 
                r: "This is sabotage! You rage for minutes before safely removing the cup." 
            },
            { 
                t: "Just drink the cup", 
                next: "path_cup_drink", 
                m: 2, f: -5, a: -10, c: 5, 
                r: "Coffee is coffee. You chug it. It tastes of hazelnut, IT danger, and cowardice." 
            }
        ]
    },
    {
        id: "srv_coffee_cup_2a",
		char: "Chantal",
        title: "The Perpetrator",
        reqStory: "path_cup_slow",
        text: "You're about to take the cup to the sink when Chantal walks in. 'Oh thanks, Müller! I put it there specifically so the router would keep it warm!'",
        opts: [
            { 
                t: "Silently hand her the cup", 
                rep: { "Chantal": -5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "Your gaze is deadly. She takes the coffee and flees." 
            },
            { 
                t: "Give a lecture on hardware prices", 
                m: 15, f: 0, a: 5, c: 0, 
                r: "You spend 15 minutes explaining to her how much a core router costs. She scrolls through Instagram, annoyed." 
            }
        ]
    },
    {
        id: "srv_coffee_cup_2b",
        title: "On Camera",
        reqStory: "path_cup_rage",
        text: "Your tantrum was recorded by the surveillance camera in the server room. HR sends you an email about 'aggressive behavior at the workplace' and demands a statement.",
        opts: [
            { 
                t: "Plead self-defense (imminent danger)", 
                m: 10, f: 0, a: 5, c: 5, 
                r: "You write a dramatic report about hardware security. HR doesn't understand a word and drops the matter." 
            },
            { 
                t: "Grudgingly apologize", 
                m: 5, f: 0, a: 15, c: -5, 
                r: "You swallow your pride. HR is satisfied, but you're in a bad mood." 
            }
        ]
    },
    {
        id: "srv_coffee_cup_2c",
        title: "Sugar Rush",
        reqStory: "path_cup_drink",
        text: "That wasn't normal coffee after all. The cup contained a double espresso with four spoons of sugar. Your pulse shoots to 180 and you start sweating.",
        opts: [
            { 
                t: "Squeeze a stress ball", 
                req: "stressball", 
                m: 5, f: 0, a: -15, c: 0, 
                r: "You abuse the ball until your hands hurt. It actually helps to release the energy." 
            },
            { 
                t: "Use hyper-focus for tickets", 
                m: -20, f: -10, a: 15, c: 0, 
                r: "You close five old tickets in a frenzy. You're exhausted, but you gain valuable work time!" 
            }
        ]
    },
    {
        id: "srv_rat_cable_1",
        title: "Rodent in the System",
        text: "Under the raised floor, you hear a suspicious rustling and scratching. You lift a grate panel and see a fat rat happily gnawing on a yellow fiber optic cable!",
        opts: [
            { 
                t: "Throw an old donut as bait", 
                rem: "donut", 
                next: "path_rat_donut", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "The rat drops the cable, snatches the donut in a flash, and disappears into the darkness. Danger averted! (Donut consumed)" 
            },
            { 
                t: "Drive it away with the fire extinguisher", 
                req: "fire_ext", 
                next: "path_rat_ext", 
                m: 5, f: 0, a: 5, c: 5, 
                r: "You spray hissing CO2 into the floor. A gigantic fog forms, but the rat flees in panic." 
            },
            { 
                t: "Quickly close the panel again", 
                next: "path_rat_ignore", 
                m: 2, f: 5, a: 10, c: 10, 
                r: "Out of sight, out of mind. Hopefully it doesn't chew through the cable completely." 
            }
        ]
    },
    {
        id: "srv_rat_cable_2a",
        title: "The Pet",
        reqStory: "path_rat_donut",
        text: "The rat seems to have loved your donut. When you go back into the server room in the afternoon, it's sitting in the exact same spot, staring at you expectantly.",
        opts: [
            { 
                t: "Get Egon with a mousetrap", 
                rep: { "Egon": 5 },
                m: 15, f: 0, a: 5, c: 0, 
                r: "Egon mercilessly sets traps. You feel a bit like a traitor." 
            },
            { 
                t: "Give it a name and ignore it", 
                m: 5, f: 10, a: -5, c: 5, 
                r: "You name it 'Cisco' and leave it in peace. As long as it doesn't eat cables, you're pals." 
            }
        ]
    },
    {
        id: "srv_rat_cable_2b",
        title: "False Alarm",
        reqStory: "path_rat_ext",
        text: "The CO2 fog from your fire extinguisher attack triggered the optical smoke detectors in the server room. The deafening sirens blare throughout the entire building.",
        opts: [
            { 
                t: "Frantically acknowledge the alarm", 
                m: 10, f: 0, a: 20, c: 0, 
                r: "You run to the fire alarm panel and type in the code. You have tinnitus, but the fire department stays home." 
            },
            { 
                t: "Pretend you were never there", 
                m: 5, f: 5, a: 10, c: 15, 
                r: "You sneak out. Shortly after, HR evacuates half the building." 
            }
        ]
    },
    {
        id: "srv_rat_cable_2c",
        title: "Chewed Through",
        reqStory: "path_rat_ignore",
        text: "Your ignorance is severely punished. The rat actually chewed through the fiber optic cable. The entire 2nd floor is offline and the phone rings constantly.",
        opts: [
            { 
                t: "Painstakingly splice the cable (patch)", 
                m: 45, f: -10, a: 25, c: 0, 
                r: "You crawl on the floor and patch the delicate fiber. Your back aches, but the network is back up." 
            },
            { 
                t: "Claim the provider has an outage", 
                m: 5, f: 5, a: 5, c: 15, 
                r: "You lie to the entire 2nd floor. People calm down for now, but the problem persists." 
            }
        ]
    },
    {
        id: "srv_spilled_screws_1",
        title: "The Screw Massacre",
        text: "You trip over a power cable and an open box of tiny case screws spills over the grated floor. Most clatter down into the darkness below.",
        opts: [
            { 
                t: "Fashion a fishing rod with duct tape", 
                req: "tape", 
                next: "path_screws_tape", 
                m: 15, f: -5, a: 5, c: 0, 
                r: "You wrap tape alternately around a pen and blindly fish around. You retrieve 80% of the screws." 
            },
            { 
                t: "Take a new screw set", 
                loot: "screw", 
                next: "path_screws_loot", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "Whatever. You reach into the shelf and just grab a new pack. Life's too short to search. (Inventory +1)" 
            },
            { 
                t: "Curse and leave everything", 
                next: "path_screws_ignore", 
                m: 2, f: 5, a: 15, c: 5, 
                r: "So a few screws are missing from the next server. The rack won't collapse." 
            }
        ]
    },
    {
        id: "srv_spilled_screws_2a",
        title: "Dust and Dirt",
        reqStory: "path_screws_tape",
        text: "Your sticky fishing rod, in addition to the screws, also pulled out some dead insects and huge, black dust bunnies from under the floor. Your hands are extremely dirty.",
        opts: [
            { 
                t: "Thoroughly wash hands in bathroom", 
                m: 10, f: 5, a: 0, c: 0, 
                r: "You invest work time in hygiene. Very commendable." 
            },
            { 
                t: "Just wipe on pants", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You now look like a car mechanic. The ultimate admin look." 
            }
        ]
    },
    {
        id: "srv_spilled_screws_2b",
        title: "Bottleneck during Reconstruction",
        reqStory: "path_screws_loot",
        text: "You took the new pack of screws. Unfortunately, that was the very last set! Later, during the rack rebuild, you're missing exactly one screw to fix the rail.",
        opts: [
            { 
                t: "Use a zip tie as a replacement", 
                req: "zip_ties", 
                m: 5, f: 0, a: -5, c: 0, 
                r: "You cinch the heavy metal with plastic. Shoddy work, but it doesn't wobble." 
            },
            { 
                t: "Let the casing wobble", 
                m: 2, f: 5, a: 10, c: 5, 
                r: "The metal now vibrates with every hard drive activity. Sounds terrible." 
            }
        ]
    },
    {
        id: "srv_spilled_screws_2c",
		char: "Egon",
        title: "Landmine",
        reqStory: "path_screws_ignore",
        text: "Egon enters the server room and steps precisely on one of the remaining, sharp screws. It drills deep into his thick work boot sole. He screams down the entire hallway.",
        opts: [
            { 
                t: "Bring him a coffee as an apology", 
                rep: { "Egon": 5 },
                m: 10, f: 0, a: 5, c: 0, 
                r: "You buy his forgiveness. Egon loves coffee more than intact shoes." 
            },
            { 
                t: "Quietly hide in the office", 
                rep: { "Egon": -5 },
                m: 5, f: 5, a: 5, c: 0, 
                r: "You take cover until the cursing in the hallway subsides." 
            }
        ]
    },
    {
        id: "srv_workout_2c",
		char: "Dr. Wichtig",
        title: "The Observer",
        reqStory: "path_workout_watch",
        text: "You're in the server room. A nasty email from the boss pops up on the monitor. 'Müller! Why were you standing in the hallway for 30 minutes, chewing and staring at Marketing, while the company network is lagging?!'",
        opts: [
            { 
                t: "Reply: 'I was calibrating the Wi-Fi!'", 
				rep: { "Dr. Wichtig": 5 },
                m: 10, f: 5, a: 0, c: -5, 
                r: "You reply lightning fast with technical fake facts. The boss buys it. 'So you calibrate Wi-Fi while standing. Got it.'" 
            },
            { 
                t: "Demonstratively delete email", 
				rep: { "Dr. Wichtig": -10 },
                m: 2, f: 5, a: 5, c: 15, 
                r: "Out of sight, out of mind. That's guaranteed to lead to a verbal dressing-down later, but for now, you have peace." 
            }
        ]
    },
    {
        id: "srv_awkward_1",
		char: "Kevin",
        title: "An Awkward Position",
        text: "Kevin has crawled under Rack 4 in the server room and is stuck. 'Boss, my sweater got caught in the fan grille! I can't get my arm out!' You have to help him. You lean deep over him and tug at his arm.",
        opts: [
            { 
                t: "Pull hard and pant", 
                next: "path_awkward_elster", 
                m: 10, f: 0, a: 5, c: 15, 
                r: "You both pant with effort. Kevin groans. At that moment, the door opens. Ms. Elster stares at you. You're leaning over Kevin. She turns pale, says 'Excuse the interruption' and slams the door shut again." 
            },
            { 
                t: "Use a script from the boot stick (joker)", 
                rep: { "Kevin": 5 },
                req: "usb_stick",
                next: "path_awkward_usb", 
                m: 5, f: -5, a: -5, c: 0, 
                r: "You reboot the server. The fan stops for 5 seconds. Kevin pulls his arm out. No awkward struggle, no spectators. Perfectly solved." 
            },
            { 
                t: "Laugh at him and take photos", 
                rep: { "Kevin": -10 },
                next: "path_awkward_photo", 
                m: 2, f: 10, a: -10, c: 5, 
                r: "You pull out your phone. Kevin whines. 'Please don't put it on the intranet!' That'll make a great meme for the Christmas party." 
            }
        ]
    },

];