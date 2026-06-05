export const reputation = [

    // === KEVIN: THE INTERN ===
	{
        id: "rep_kevin_story_1",
	    char: "Kevin",
        title: "Kevin's Little Secret",
        reqRep: { "Kevin": 60 },
        text: "Kevin nervously pulls you into a corner. 'Bro, I gotta show you something. I was bored, so I wrote a script that automatically cleans and optimizes the firewall logs. Is that... illegal? Or good?' He shows you the code. It's chaotic, but at its core, brilliant.",
        opts: [
            { 
                t: "Mentor: 'That's good. Let's improve it together.'", 
                next: "path_kevin_mentor",
                rep: { "Kevin": 15 },
                m: 20, f: -10, a: -10, c: 0, 
                r: "You go through the code line by line. Kevin soaks up your knowledge like a sponge. 'Whoa. Thanks, Sensei.' He now sees you as his role model." 
            },
            { 
                t: "Lazy: 'Install that on my machine immediately, I want to go home early.'", 
                next: "path_kevin_lazy",
                rep: { "Kevin": 10 },
                m: 5, f: 20, a: 0, c: 0, 
                r: "Kevin grins. 'Easy, bro. I even built you an Aimbot for Solitaire.' You have less work, but he learns no responsibility." 
            },
            { 
                t: "Strict: 'That's a security risk! Delete it!'", 
                next: "path_kevin_strict",
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "Kevin looks disappointed but nods obediently. 'Understood. Security First.' He deletes his masterpiece. You've created a good soldier, but not a hacker." 
            }
        ]
    },
    {
        id: "rep_kevin_story_2a",
		char: "Kevin",
        title: "Finale: The Cyber Attack",
        reqRep: { "Kevin": 80 },
        reqStory: "path_kevin_mentor",
        text: "ALARM! A massive DDoS attack from overseas! The firewall is burning (metaphorically). You can't keep up with the typing. Kevin suddenly stands next to you, his laptop at the ready. 'I repurposed that script from the other day for defense! Let me at 'em, I'll flatten them!'",
        opts: [
            { 
                t: "Blind Trust: 'Do it, Kevin!'", 
                loot: "kevin_ram", 
                rep: { "Kevin": 20, "Dr. Wichtig": 10 },
                m: 5, f: -5, a: -40, c: -20, 
                r: "Kevin types like a young god. Enter. Silence. The attack is stopped. He grins widely: 'Learned that from you, bro.' He gives you his old RAM stick as a good luck charm. (Item received!)" 
            },
            { 
                t: "Micromanagement: 'Okay, but I'm watching!'", 
                rep: { "Kevin": -5, "Dr. Wichtig": 5 },
                m: 15, f: -10, a: 10, c: -10, 
                r: "You stand behind him, correcting every typo. 'Not so fast! Syntax!' The attack is stopped, but Kevin is annoyed. 'I could've done that myself, boss...'" 
            },
            { 
                t: "Distrust: 'Get out of the way, too dangerous!'", 
                rep: { "Kevin": -20, "Dr. Wichtig": -5 },
                m: 60, f: -10, a: 20, c: 10, 
                r: "You push him aside and do it yourself. It takes an hour. The damage is done. Kevin looks at you hurt. 'You don't trust me at all.' The chance for glory is lost." 
            }
        ]
    },
    {
        id: "rep_kevin_story_2b",
		char: "Kevin",
        title: "Finale: The Infinite Loop",
        reqRep: { "Kevin": 80 },
        reqStory: "path_kevin_lazy",
        text: "Kevin rushes into your office, pale. 'Boss! That script I gave you... I 'optimized' something. It now automatically replies to ALL emails.' Your inbox is going crazy. It just sent a marriage proposal to the CEO.",
        opts: [
            { 
                t: "Panic: 'PULL THE PLUG!'", 
                rep: { "Kevin": -10, "Dr. Wichtig": -10 },
                m: 10, f: -5, a: 10, c: 10, 
                r: "You both yank the network cable from the wall. Silence. That was close. Kevin breathes heavily: 'But it was efficient, right?' The boss later asks why the internet was down for a bit." 
            },
            { 
                t: "Fix together & drink Energy", 
                loot: "energy",
                rep: { "Kevin": 10 },
                m: 30, f: -15, a: -10, c: 0, 
                r: "You sit down together and debug the madness over an energy drink. You laugh until you cry at the generated emails. 'At least we don't have any open tickets anymore.' (Inventory +1)" 
            },
            { 
                t: "Blame it on a virus", 
                rep: { "Kevin": 5, "Dr. Wichtig": -5 },
                m: 5, f: 15, a: -5, c: 20, 
                r: "You report an 'AI virus'. Kevin plays along: 'Yeah, totally a gnarly Trojan!' The boss believes it but has all PCs formatted. You get a day off, but IT is on fire." 
            }
        ]
    },
    {
        id: "rep_kevin_story_2c",
		char: "Kevin",
        title: "Finale: The Test",
        reqRep: { "Kevin": 80 },
        reqStory: "path_kevin_strict",
        text: "An external security auditor tries to sneak into the building as a 'Telekom technician' (social engineering). Nobody suspects a thing... except Kevin. He blocks the way and demands a Passierschein A38, just as you taught him.",
        opts: [
            { 
                t: "Proudly Intervene: 'He's right.'", 
                rep: { "Dr. Wichtig": 15, "Kevin": 10 },
                m: 10, f: 0, a: -5, c: -10, 
                r: "The auditor takes off his mask. 'Test passed! Excellent staff training.' The boss pats you on the shoulder. Kevin salutes smartly. You've created a watchdog." 
            },
            { 
                t: "Let Kevin handle it", 
                rep: { "Kevin": 20, "Dr. Wichtig": 5 },
                m: 5, f: 5, a: -10, c: -10, 
                r: "You lean back and watch Kevin wear down the auditor with regulations. The man almost leaves crying. Kevin comes to you: 'Did I do good?' Yes, he did." 
            },
            { 
                t: "Intervene & take over yourself", 
                rep: { "Kevin": -15, "Dr. Wichtig": 5 },
                m: 5, f: -10, a: 10, c: -5, 
                r: "You push Kevin aside. 'Let the pros handle it.' You expose the auditor yourself. The boss praises you, but Kevin mutters: 'Great, I almost had him...' He feels useless." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_good_1",
		char: "Kevin",
        title: "The Twitch Tip",
        reqRep: { "Kevin": 20 },
        text: "Kevin leans conspiratorially towards you. 'Hey, boss? I want to professionalize my stream. Do you think the Shure SM7B microphone is worth it, or is my old headset enough? You know about tech.'",
        opts: [
            { 
                t: "Advise: 'Get the Shure, quality is everything.'", 
                next: "path_kevin_tech_tip",
                rep: { "Kevin": 10 },
                m: 10, f: 0, a: -10, c: 0, 
                r: "Kevin beams. 'I knew it! Thanks for the tip.' He orders it immediately on the company laptop. A small bonding moment." 
            },
            { 
                t: "Distract: 'Let's play a round instead.'", 
                next: "path_kevin_game_night",
                rep: { "Kevin": 5 },
                m: 20, f: 10, a: -10, c: 15, 
                r: "His eyes light up. 'Really? Now? Okay, just one round!' You secretly play 'Minesweeper Battle Royale' for 20 minutes. Productivity down, morale up." 
            },
            { 
                t: "Dismiss: 'Google it.'", 
                next: "path_kevin_tech_fail",
				rep: { "Kevin": -2 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Okay, sorry...' He turns away, looking disappointed. He opens AliExpress." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_good_2a",
		char: "Kevin",
        title: "Loot Sharing",
        reqRep: { "Kevin": 40 },
        reqStory: "path_kevin_tech_tip",
        text: "Kevin comes out of the kitchen, grinning. 'Hey! My stream yesterday had 3 viewers! The mic really makes a difference. Here, as a thank you, I 'rescued' something from catering for you.'",
        opts: [
            { 
                t: "Accept: 'My man!'", 
                loot: "donut", 
                rep: { "Kevin": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "A fresh donut! Kevin nods at you. 'We techies gotta stick together.' (Inventory +1)" 
            },
            { 
                t: "Decline: 'I'm on a diet.'", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "Kevin shrugs and bites into it himself. 'More loot for me.' He still looks content." 
            },
            { 
                t: "Criticize: 'Did you steal that?'", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "'Ugh, don't be such a square.' He puts the donut away. The good mood is gone." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_good_2b",
		char: "Kevin",
        title: "The Energy Deal",
        reqRep: { "Kevin": 40 },
        reqStory: "path_kevin_game_night",
        text: "Kevin rolls his chair over to you. 'Yo, pro-gamer. I've noticed your APM (Actions Per Minute) dropping. You need fuel.' He holds out a can to you.",
        opts: [
            { 
                t: "Accept gratefully", 
                loot: "energy",
                rep: { "Kevin": 5 }, 
                m: 2, f: 0, a: -5, c: 0, 
                r: "HISS. 'This is the good stuff,' Kevin whispers. You feel ready for the ticket battle again. (Inventory +1)" 
            },
            { 
                t: "Offer a favor: 'I'll take a ticket.'", 
                rep: { "Kevin": 10 },
                m: 15, f: -5, a: 10, c: -10, 
                r: "You quickly solve a printer problem for him. Kevin is thrilled: 'Best team ever!' True friendship." 
            },
            { 
                t: "Say: 'Gaming during work is forbidden.'", 
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "Kevin stares at you. 'But you started it?!' He rolls back, shaking his head. You brought this upon yourself." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_good_2c",
		char: "Kevin",
        title: "AliExpress Disaster",
        reqRep: { "Kevin": 40 },
        reqStory: "path_kevin_tech_fail",
        text: "Kevin proudly holds out a pink plastic thing that smells like a chemical spill. 'I listened to you and Googled! This 'Super-Studio-Mic 9000' for €3.50 from China! But... the manual says 'Do not eat' and it picks up Russian radio.'",
        opts: [
            { 
                t: "Rescue: 'That's lo-fi aesthetic! Totally trendy!'", 
                rep: { "Kevin": 10 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Kevin looks uncertain, then beams. 'Right! Vintage vibes! I'll call my channel 'Radio Moscow'.' He's happy with his junk. You're a good (lying) friend." 
            },
            { 
                t: "Laugh: 'You get what you pay for...'", 
                rep: { "Kevin": -10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "'Yeah, yeah, just laugh.' Kevin looks hurt. He throws the thing in the trash. 'Next time I'll ask someone else.' Opportunity lost." 
            },
            { 
                t: "Pity: 'I'll try to solder it.'", 
				rep: { "Kevin": 2 },
                m: 30, f: -10, a: 10, c: 0, 
                r: "You tinker with the thing for 30 minutes. It crumbles to dust. Kevin sighs: 'Guess it wasn't meant to be. But thanks for trying.'" 
            }
        ]
    },
    {
        id: "rep_kevin_simple_bad_1",
		char: "Kevin",
        title: "TikTok in the Server Room",
        reqRep: { "Kevin": -20 },
        text: "You walk into the server room. Kevin is dancing in front of the blinking lights. He holds up his phone, filming. When he sees you, he swings the camera right at your annoyed face. 'And here's the grumpy admin in his natural habitat! Say Hi!'",
        opts: [
            { 
                t: "Yell: 'GET OUT! NOW!'", 
                next: "path_kevin_war",
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: 20, c: 0, 
                r: "Kevin flinches but rolls his eyes. 'Ugh, chill your base. You're ruining my vibe.' He shuffles out, but you know: there will be consequences." 
            },
            { 
                t: "Take phone & delete video", 
                next: "path_kevin_troll",
                rep: { "Kevin": -15 },
                m: 10, f: 0, a: 10, c: 5, 
                r: "You snatch the phone from his hand. Kevin turns pale. 'Hey! That's my property! Data privacy!' You delete the video. He stares at you with hatred. 'You'll regret this.'" 
            },
            { 
                t: "Try to look cool (make a face)", 
                next: "path_kevin_viral",
                rep: { "Kevin": -5 },
                m: 2, f: 5, a: -5, c: 0, 
                r: "You make a 'funny' face and flash peace signs. Kevin slowly lowers his phone. 'Cringe. Just cringe, dude.' He walks away shaking his head. You feel old." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_bad_2a",
		char: "Kevin",
        title: "The Cable Thief",
        reqRep: { "Kevin": -40 },
        reqStory: "path_kevin_war",
        text: "Your second monitor stays black. The HDMI cable is missing. You glance over at Kevin. He now has three monitors set up and is playing 'Fortnite'. Your cable is clearly plugged into his console.",
        opts: [
            { 
                t: "Wordlessly retrieve cable (Violence)", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You walk over, pull the plug mid-match (his screen goes black), and take your cable. Kevin screams: 'EY! I was Top 3! You boomer!' A small, dirty victory." 
            },
            { 
                t: "Go to the boss (Snitch)", 
                rep: { "Kevin": -20, "Dr. Wichtig": 5 },
                m: 15, f: 0, a: -5, c: 0, 
                r: "The boss comes and chews Kevin out. Kevin has to return the cable and apologize. He whispers to you on the way out: 'Snitch.'" 
            },
            { 
                t: "Change his Wi-Fi password", 
                rep: { "Kevin": -10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "You block his MAC address. He keeps the cable, but without internet, it's useless to him. He curses loudly. Justice." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_bad_2b",
		char: "Kevin",
        title: "Desktop Terror",
        reqRep: { "Kevin": -40 },
        reqStory: "path_kevin_troll",
        text: "You return from your break. Your desktop is full of icons, but nothing is clickable. Kevin has set a screenshot of your desktop as the wallpaper and hidden the real icons. He sits there with headphones on, grinning.",
        opts: [
            { 
                t: "Hard reboot PC (Give up)", 
                m: 15, f: 0, a: 20, c: 0, 
                r: "It takes you 15 minutes to undo everything. Kevin texts you in chat: 'Problem, Officer? Thought you knew tech?' You're fuming." 
            },
            { 
                t: "Counterattack: Tape his mouse", 
                rep: { "Kevin": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You stick a piece of Post-it under his mouse sensor. The next time he moves the mouse, nothing happens. He bangs angrily on the desk. Stalemate." 
            },
            { 
                t: "Have him reprimanded", 
                m: 20, f: 0, a: 10, c: 5, 
                r: "You run to HR. But since it was 'just a joke', nothing happens, except you're labeled humorless. Kevin wins." 
            }
        ]
    },
    {
        id: "rep_kevin_simple_bad_2c",
		char: "Kevin",
        title: "The Meme",
        reqRep: { "Kevin": -40 },
        reqStory: "path_kevin_viral",
        text: "A new GIF appears in the company group chat. It shows you trying to be 'cool', with a filter that makes you look like a clown. Title: 'When the admin tries to act young'. Chantal and Markus have already sent laughing emojis.",
        opts: [
            { 
                t: "Delete chat (Censorship)", 
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: 20, c: 0, 
                r: "You delete the message as admin. Kevin immediately posts: 'Censorship state!' Now everyone laughs even harder. Streisand effect." 
            },
            { 
                t: "Self-deprecating: 'Clown is my side job.'", 
                rep: { "Kevin": 5 },
                m: 2, f: 5, a: -5, c: 5, 
                r: "You play along. Kevin is confused. 'Huh? I thought you'd freak out.' The joke falls flat because you don't feed it. Handled with grace." 
            },
            { 
                t: "Throttle Kevin's internet to 'modem'", 
                rep: { "Kevin": -15 },
                m: 5, f: 0, a: -10, c: 0, 
                r: "His upload cuts out. His Spotify stops. He looks panicked. You smile wickedly at him and wave. He knows exactly who did it." 
            }
        ]
    },
    {
        id: "rep_kevin_nemesis_1",
		char: "Kevin",
        title: "The Coup Attempt",
        reqRep: { "Kevin": -60 },
        text: "You walk into the office. Kevin has moved his desk into the hallway. Above it hangs a sign: 'BETTER IT HELP (No Boomer Moods)'. A line of colleagues is waiting for him. He's handing out admin passwords like candy.",
        opts: [
            { 
                t: "Physical Violence: Tear down the sign", 
                next: "path_kevin_glue",
                rep: { "Kevin": -15 },
                m: 5, f: 0, a: 20, c: 5, 
                r: "You storm over, rip down the sign, and crumple it. Kevin grins wickedly. 'Aggression issues? That's going in the file.' Your colleagues boo you." 
            },
            { 
                t: "Digital Lockout: Deactivate his account", 
                next: "path_kevin_ddos_kid",
                rep: { "Kevin": -15 },
                m: 10, f: -5, a: -10, c: 15, 
                r: "You go to your desk and lock his user in AD. Kevin shouts: 'Oh no, now I have to get out my hacker tools.' That sounds like a threat." 
            },
            { 
                t: "Peace Offering: 'Respect. Want some coffee?'",
                rep: { "Kevin": 10 },
                m: 10, f: 5, a: -20, c: 0, 
                r: "You join the line. 'Good service, Kevin. Here, a coffee for the boss of shadow IT.' Kevin is completely flustered. 'Uh... thanks?' He takes down the sign himself later." 
            }
        ]
    },
    {
        id: "rep_kevin_nemesis_2a",
		char: "Kevin",
        title: "The Glue Trap",
        reqRep: { "Kevin": -80 },
        reqStory: "path_kevin_glue",
        text: "You swing onto your office chair... and get stuck. Kevin has smeared superglue on the seat. He stands in the doorway, filming. 'Well, is your butt stuck to responsibility?'",
        opts: [
            { 
                t: "Sacrifice pants & chase Kevin", 
                rep: { "Kevin": -15 },
                m: 10, f: -10, a: 30, c: 0, 
                r: "Riiip. Your pants tear at the butt. You sprint after Kevin in your underwear. He escapes laughing into the stairwell. The war continues." 
            },
            { 
                t: "Laugh & Applaud: 'That was good!'",
                rep: { "Kevin": 15 },
                m: 5, f: 0, a: -15, c: 0, 
                r: "You burst out laughing. '1:0 to you, kid. Respect.' Kevin lowers his phone. 'Seriously? You're not freaking out?' He even helps you with solvent. Truce?" 
            },
            { 
                t: "Plan Revenge: Hide his phone", 
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "You stay seated and wait for him to leave his phone. Then it goes into the shredder bin. An eye for an eye." 
            }
        ]
    },
    {
        id: "rep_kevin_nemesis_2b",
		char: "Kevin",
        title: "Script Kiddie Revenge",
        reqRep: { "Kevin": -80 },
        reqStory: "path_kevin_ddos_kid",
        text: "All printers in the building start simultaneously. They print thousands of pages with one image: your face on a clown's body. Kevin has unleashed a 'Low Orbit Ion Cannon' tool on the print server. The boss is coming down the hallway!",
        opts: [
            { 
                t: "Snitch on Kevin: 'IT WAS HIM!'", 
                rep: { "Kevin": -20, "Dr. Wichtig": 10 },
                m: 5, f: 5, a: 15, c: -20, 
                r: "The boss sees Kevin at his laptop. Kevin gets fired (or almost). He will truly hate you for this. That was the point of no return." 
            },
            { 
                t: "Cover for him: 'It's a virus, boss!'",
                rep: { "Kevin": 25 },
                m: 10, f: -5, a: 0, c: 10, 
                r: "You lie to the boss and blame 'security'. Kevin stares at you with an open mouth. Later he whispers: 'Why did you do that? Thanks...' He deletes his tools." 
            },
            { 
                t: "Pull the plug (Surrender)", 
                m: 10, f: -5, a: 20, c: 10, 
                r: "You run around pulling plugs. The floor is covered in clown pictures. Kevin stands in the hallway, slowly applauding." 
            }
        ]
    },
    {
        id: "rep_kevin_nemesis_2c",
		char: "Kevin",
        title: "The Petition",
        reqRep: { "Kevin": -80 },
        reqStory: "path_kevin_trap",
        text: "Kevin has started an online petition: 'Müller must go!' 80% of the staff have signed (many thought it was about free beer). The note is hanging on the bulletin board.",
        opts: [
            { 
                t: "Angrily tear down the note", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You rip the paper to shreds. Colleagues look down awkwardly. You look like a dictator on the verge of collapse." 
            },
            { 
                t: "Sign: 'I'm in!'",
                rep: { "Kevin": 15 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "You grab a pen and sign your own termination petition. Kevin starts laughing. 'Okay, you're actually cool.' He takes down the note himself." 
            },
            { 
                t: "Confront Kevin: 'You little...'", 
                rep: { "Kevin": -20 },
                m: 10, f: 5, a: 30, c: 20, 
                r: "It almost comes to blows. HR has to intervene. You both get a final warning. The war has escalated." 
            }
        ]
    },
    {
        id: "rep_kevin_filler_good_1",
		char: "Kevin",
        title: "Energy Experiment",
        reqRep: { "Kevin": 10 }, 
        text: "Kevin comes into your office with a bright green, unlabeled can. 'Bro, I ordered this energy drink on the darknet. It's called 'Nuclear Sludge'. Wanna try it? I'm scared to be first.'",
        opts: [
            { 
                t: "Brave: 'Sure, hand it over.'", 
                rep: { "Kevin": 5 },
                m: 10, f: -15, a: 10, c: 0, 
                r: "You take a sip. It tastes like battery and sour apple. Your heart rate immediately doubles. Kevin is amazed: 'Whoa, you're still alive!'" 
            },
            { 
                t: "Decline: 'Are you trying to poison me?'", 
                rep: { "Kevin": -2 },
                m: 2, f: 0, a: -5, c: 0, 
                r: "Kevin shrugs. 'Coward.' He drinks it himself and then trembles uncontrollably at his desk for 2 hours." 
            },
            { 
                t: "Cunning: 'Put it on the boss's desk.'", 
                rep: { "Kevin": 10, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 5, c: 10, 
                r: "You sneak into the boss's office and leave the can there. An hour later, the boss yells something about a 'synergy explosion' in the hallway. You giggle in the server room." 
            }
        ]
    },
    {
        id: "rep_kevin_filler_good_2",
		char: "Kevin",
        title: "Tinder Support",
        reqRep: { "Kevin": 30 }, 
        text: "Kevin looks desperate. 'You're wise and all. My Tinder profile isn't working. I have a photo of my PC setup and my bio says: 'Looking for Player 2'. What am I doing wrong?'",
        opts: [
            { 
                t: "Help: 'Let's make a profile out of it!'", 
                rep: { "Kevin": 15 },
                m: 15, f: 10, a: -10, c: 0, 
                r: "You spend 15 minutes of work time taking a photo of him in the hallway in front of a plant. 'Write that you like to cook,' you advise. He immediately gets a match." 
            },
            { 
                t: "Roast: 'Everything. You're doing everything wrong.'", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "Kevin is offended. 'You just don't understand my target audience. Real gamer girls are into that!' He continues to swipe right in frustration." 
            },
            { 
                t: "Dismiss: 'Buy Tinder Gold.'", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "He sighs. 'That costs 30 euros! I could get a new skin in Valorant for that...' He seriously considers it. Priorities." 
            }
        ]
    },
    {
        id: "rep_kevin_filler_bad_1",
		char: "Kevin",
        title: "The Hell Keyboard",
        reqRep: { "Kevin": -10 }, 
        text: "Kevin bought a new mechanical keyboard with blue switches. Every keystroke sounds like a shot from a small-caliber weapon. *CLICK CLICK CLICK*. You can't concentrate.",
        opts: [
            { 
                t: "Intervene: 'Throw that thing away!'", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "Kevin rolls his eyes. 'That's tactical feedback! You just don't have a feel for good hardware.' He types even louder demonstratively." 
            },
            { 
                t: "Sabotage: Swap keys", 
                rep: { "Kevin": -10 },
                m: 10, f: 5, a: -5, c: 0, 
                r: "While he's in the restroom, you swap 'N' and 'M'. It takes him 15 minutes to give up screaming because his password no longer works. Beautiful." 
            },
            { 
                t: "Endure & put on headphones", 
                m: 5, f: 0, a: 10, c: 0, 
                r: "You try to ignore it, but the *CLICK CLICK* drills into your brain. Your aggression steadily rises." 
            }
        ]
    },
    {
        id: "rep_kevin_filler_bad_2",
		char: "Kevin",
        title: "Dump Site",
        reqRep: { "Kevin": -30 }, 
        text: "You return from getting coffee. On your desk is an empty, sticky yogurt cup and a banana peel. Kevin sits two tables away, whistling innocently and staring at his monitor.",
        opts: [
            { 
                t: "Passive-Aggressive: Put it in his backpack", 
                rep: { "Kevin": -10 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "You secretly make the trash disappear into his bag. He'll have a very rude awakening tomorrow morning when he unpacks. Perfect revenge." 
            },
            { 
                t: "Direct Confrontation: Yell at him", 
                rep: { "Kevin": -5 },
                m: 5, f: 0, a: 15, c: 5, 
                r: "You throw the cup onto his desk. 'Is your trash can broken?!' The boss hears it and reprimands YOU for the loud tone in the office." 
            },
            { 
                t: "Wordlessly clean up (Surrender)", 
                rep: { "Kevin": 5 },
                m: 5, f: -5, a: 10, c: 0, 
                r: "You throw it away yourself. Kevin snickers in the background: 'Thanks for the room service!' You've just lost the rest of your respect." 
            }
        ]
    },
    // === CHANTAL: THE MARKETING QUEEN  ===
    {
        id: "rep_chantal_story_1",
		char: "Chantal",
        title: "Chantal Unfiltered",
        reqRep: { "Chantal": 60 },
        text: "Chantal stands by the machine. She looks exhausted. The mask falls. 'Ugh, this whole fake world here... everyone smiles, everyone lies. Sometimes I just want to scream. The boss wants me to sell his stupid 'blockchain toilet seats' idea as 'innovation'. I can't anymore.'",
        opts: [
            { 
                t: "Alliance: 'I'll help you kill the idea.'", 
                next: "path_chantal_ally",
                rep: { "Chantal": 15 },
                m: 15, f: 5, a: -10, c: 5, 
                r: "She looks at you in surprise. 'Really? You'd help me make the boss look bad?' A wicked grin spreads across her face. 'Okay, partner. Let's play war.'" 
            },
            { 
                t: "Exploit: 'I'll do it, then you owe me.'", 
                next: "path_chantal_user",
                rep: { "Chantal": 5 },
                m: 5, f: 10, a: 0, c: 5, 
                r: "Chantal snorts. 'Typical. Nothing's free, huh? Fine. If you cover my back, I'll make sure you get your budget.' A deal among wolves." 
            },
            { 
                t: "Decline: 'Not my problem, Chantal.'", 
                next: "path_chantal_enemy",
                rep: { "Chantal": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She immediately reverts to the ice-cold marketing lady. 'Forget I said anything. Get back to work, nerd.' The chance for friendship is over." 
            }
        ]
    },
    {
        id: "rep_chantal_story_2a",
		char: "Chantal",
        title: "Finale: The Sabotage",
        reqRep: { "Chantal": 80 },
        reqStory: "path_chantal_ally",
        text: "Chantal comes into your office. She holds a golden package. 'It's done. Thanks to your technical 'expertise', the boss believes the toilet seats are impossible to build. The project is dead. We won.'",
        opts: [
            { 
                t: "Open gift (Blood brotherhood)", 
                loot: "golden_stapler", 
                rep: { "Chantal": 20, "Dr. Wichtig": -5 },
                m: 5, f: -20, a: -30, c: -10, 
                r: "It's a massively gold-plated stapler. 'Diverted from the marketing budget,' she winks. 'Nobody messes with us.' You now have the most powerful ally in the company. (Item received!)" 
            },
            { 
                t: "Stay humble: 'It was my pleasure.'", 
                rep: { "Chantal": 10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "Chantal nods. 'You're okay, Müller. Really okay.' She keeps the stapler, but you have her eternal respect." 
            },
            { 
                t: "Betray: 'I'll tell the boss you lied.'", 
                rep: { "Chantal": -40, "Dr. Wichtig": 20 },
                m: 10, f: 0, a: 20, c: -30, 
                r: "Chantal's face freezes. 'You wouldn't dare.' Yes, you would. The boss loves you for it, but you've just made an enemy for life." 
            }
        ]
    },
    {
        id: "rep_chantal_story_2b",
		char: "Chantal",
        title: "Finale: One Hand Washes the Other",
        reqRep: { "Chantal": 70 },
        reqStory: "path_chantal_user",
        text: "Chantal leans casually in your doorway. 'So. The toilet seat campaign is running. It's embarrassing, but the boss is happy. And as promised: I've 'optimized' your IT budget a bit.'",
        opts: [
            { 
                t: "Thank: 'Good business.'", 
                loot: "energy",
                rep: { "Chantal": 5 },
                m: 5, f: 5, a: -5, c: -5, 
                r: "She tosses you an energy drink. 'To the company. We understand each other.' Not friendship, but a solid partnership." 
            },
            { 
                t: "Demand more: 'I want the new office chair too.'", 
                rep: { "Chantal": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "Chantal rolls her eyes. 'Greedy. We'll see.' She leaves annoyed. You might have pushed it too far." 
            },
            { 
                t: "Decline: 'I don't want dirty money.'", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "'Your loss. Then I'll just buy new shoes with it.' She shrugs and leaves. You have your integrity, but no new server." 
            }
        ]
    },
    {
        id: "rep_chantal_story_2c",
		char: "Chantal",
        title: "Finale: The Scapegoat",
        reqRep: { "Chantal": 60 },
        reqStory: "path_chantal_enemy",
        text: "The boss storms in. 'Müller! Chantal says YOU are to blame that the toilet seats aren't 'smart'! You blocked the interface!' Chantal stands behind him, grinning.",
        opts: [
            { 
                t: "Counter: 'Chantal knows nothing about tech.'", 
                rep: { "Dr. Wichtig": 5, "Chantal": -20 },
                m: 15, f: 0, a: 10, c: -10, 
                r: "You explain to the boss with technical terms why Chantal is lying. He nods, confused. 'Hm. Alright.' Chantal glares at you hatefully. Declaration of war accepted." 
            },
            { 
                t: "Surrender: 'Yes, I'm sorry.'", 
                rep: { "Dr. Wichtig": -10, "Chantal": 10 },
                m: 5, f: 5, a: 15, c: 20, 
                r: "You take the blame to keep the peace. Chantal winks at you: 'Good boy.' You hate yourself for it." 
            },
            { 
                t: "Escalate: 'The project is nonsense!'", 
                rep: { "Dr. Wichtig": -20 },
                m: 5, f: 0, a: 50, c: 50, 
                r: "You go 'all in'. The boss turns red. 'YOU ARE FIRED... almost!' That was too much truth. Chantal laughs loudly." 
            }
        ]
    },
    {
        id: "rep_chantal_simple_good_1",
		char: "Chantal",
        title: "The Filter Emergency",
        reqRep: { "Chantal": 20 },
        text: "Chantal rushes to your desk. She holds her tablet like a mirror. 'Müller! Emergency! My image in the Teams meeting looks totally washed out. The light here is neon hell! Can you program a 'glow-up' filter directly into the webcam for me? I have a call with New York soon!'",
        opts: [
            { 
                t: "Charm Offensive: 'You don't need a filter.'", 
                next: "path_chantal_flatter",
                rep: { "Chantal": 10 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "She pauses and checks her reflection. 'Really? You think so? ... You're right, actually. Natural beauty and all.' She walks away beaming. Problem solved with flattery." 
            },
            { 
                t: "Tech Solution: 'I'll install Snap Camera.'", 
                next: "path_chantal_gadget",
                rep: { "Chantal": 5 },
                m: 15, f: -5, a: 5, c: 5, 
                r: "You set up a virtual camera for her. She can now appear as a potato or with dog ears in the meeting. 'OMG! You're a wizard!' She giggles and runs off." 
            },
            { 
                t: "Sarcasm: 'Stick a Post-it over the lens.'", 
                next: "path_chantal_tape",
                rep: { "Chantal": -5 },
                m: 2, f: 0, a: -5, c: 10, 
                r: "'Huh? Then you can't see me at all, can you?' She looks confused. 'You have no idea about personal branding.' She stalks off, offended." 
            }
        ]
    },
    {
        id: "rep_chantal_simple_good_2a",
		char: "Chantal",
        title: "Health Food",
        reqRep: { "Chantal": 40 },
        reqStory: "path_chantal_flatter",
        text: "Chantal comes by with two cups. 'Hey! Here's a 'Green Detox Matcha Latte' for you. About the other day. You were right, my complexion was great on the call. New York was thrilled.'",
        opts: [
            { 
                t: "Accept & bravely drink", 
                loot: "energy",
                rep: { "Chantal": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "It tastes like grass and algae. But Chantal smiles expectantly. 'Mmm, healthy!', you lie. You feel strangely energized." 
            },
            { 
                t: "Decline: 'I prefer coffee.'", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "Chantal shrugs. 'Your loss. Then the dog gets it.' She moves on. You stick to your black sludge." 
            },
            { 
                t: "Ask: 'Is it organic?'", 
                rep: { "Chantal": 5 },
                m: 10, f: 10, a: -10, c: 5, 
                r: "'Of course! Hand-picked by moonlight!' You talk about superfoods for 10 minutes. You're not working, but your social score goes up." 
            }
        ]
    },
    {
        id: "rep_chantal_simple_good_2b",
		char: "Chantal",
        title: "The Unboxing",
        reqRep: { "Chantal": 40 },
        reqStory: "path_chantal_gadget",
        text: "Chantal throws a package on your desk. 'You're such a tech nerd. I ordered this 'Smart Water Bottle' that lights up when I need to drink. But the app is annoying. Want it? I'll just drink from a glass again.'",
        opts: [
            { 
                t: "Accept gift", 
                rep: { "Chantal": 5 }, 
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Cool, thanks.' It's an €80 water bottle. You hack the firmware and set the light to 'Matrix Green'. A nice toy that broke after a few minutes." 
            },
            { 
                t: "Decline: 'E-waste.'", 
                rep: { "Chantal": -2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Pff. Then I'll just throw it away.' She leaves. You just scorned €80 worth of hardware, but kept your pride." 
            },
            { 
                t: "Offer a favor: 'Do you have donuts too?'", 
                loot: "donut",
                rep: { "Chantal": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "'Keep the bottle, but I'll take that donut you have.' Chantal laughs. 'Deal. You're really gluttonous.' (Inventory +1)" 
            }
        ]
    },
    {
        id: "rep_chantal_simple_good_2c",
		char: "Chantal",
        title: "The Tape Fail",
        reqRep: { "Chantal": 30 },
        reqStory: "path_chantal_tape",
        text: "Chantal is back. A huge piece of duct tape is stuck to her webcam. 'So I did what you said. But now they're saying in the meeting that my picture is black. Are they messing with me? Is this bullying?'",
        opts: [
            { 
                t: "Explain & remove tape", 
                rep: { "Chantal": 5 },
                m: 5, f: -5, a: 5, c: -5, 
                r: "You pull off the tape. The picture is back. Chantal is amazed: 'Oh! It was the light, right? Thanks, Müller!' She just doesn't get it." 
            },
            { 
                t: "Lie: 'The connection is broken.'", 
                rep: { "Chantal": -5 },
                m: 5, f: 10, a: -5, c: 10, 
                r: "'I knew it! Damn internet!' She runs off to yell at the provider. You have peace, but you've created a monster." 
            },
            { 
                t: "Laugh", 
                rep: { "Chantal": -15 },
                m: 2, f: 0, a: -10, c: 0, 
                r: "You laugh in her face. 'I hate IT,' she mutters and leaves. So much for friendship." 
            }
        ]
    },
    {
        id: "rep_chantal_bad_1",
		char: "Chantal",
        title: "The Insta Story",
        reqRep: { "Chantal": -20 },
        text: "Chantal stands unannounced in your office, filming with her phone. 'And here, my dears, is the IT goblins' cave! It smells of despair and cold pizza crust. Say hello to my followers!' She holds the camera directly in your face.",
        opts: [
            { 
                t: "Slap phone away", 
                next: "path_chantal_glitter",
                rep: { "Chantal": -15 },
                m: 5, f: -5, a: 20, c: 5, 
                r: "You instinctively swat at the phone. She pulls it away. 'HELP! VIOLENCE!' The video cuts off, but she glares at you. 'You'll regret this, you freak.'" 
            },
            { 
                t: "Block Wi-Fi for her phone", 
                next: "path_chantal_offline",
                rep: { "Chantal": -10 },
                m: 5, f: 5, a: -15, c: 0, 
                r: "You quickly type a command. Her live stream freezes. 'Huh? No signal? MÜLLER?!' You just grin smugly and turn away. Revenge is sweet." 
            },
            { 
                t: "Play along: 'Peace, everyone!'", 
                next: "path_chantal_sellout",
                rep: { "Chantal": 15, "Dr. Wichtig": -10 },
                m: 5, f: 10, a: 15, c: 10, 
                r: "You force a grin and make the peace sign. Chantal squeals: 'OMG, the goblin is tame! #OfficePet'. You die a little inside, but she seems appeased." 
            }
        ]
    },
    {
        id: "rep_chantal_bad_2a",
		char: "Chantal",
        title: "The Glitter Attack",
        reqRep: { "Chantal": -40 },
        reqStory: "path_chantal_glitter",
        text: "You return from your break. Your keyboard, your mouse, and your chair... everything is covered in fine, pink glitter dust. A note with a kissy face lies next to it: 'For more sparkle in your dreary life! xoxo'.",
        opts: [
            { 
                t: "Revenge with duct tape", 
                req: "tape", 
                rep: { "Chantal": -15 },
                m: 10, f: -5, a: -20, c: 0, 
                r: "An eye for an eye. You sneak into her office and tape her stapler and coffee mug to the desk. The glitter will never come off, but neither will the tape." 
            },
            { 
                t: "Throw everything in the trash", 
                rep: { "Chantal": -5 },
                m: 15, f: -10, a: 30, c: 0, 
                r: "You throw away the keyboard and mouse and get replacements from storage. Weeks later, you still find glitter in your eyebrows. Your rage is boundless." 
            },
            { 
                t: "Report to the boss", 
                rep: { "Chantal": -2 , "Dr. Wichtig": -2 },
                m: 10, f: 0, a: 10, c: 5, 
                r: "The boss just laughs. 'Oh come on, a little color does good here!' He defends Chantal. You're left looking like a humorless spoilsport." 
            }
        ]
    },
    {
        id: "rep_chantal_bad_2b",
		char: "Chantal",
        title: "Digital Counterattack",
        reqRep: { "Chantal": -40 },
        reqStory: "path_chantal_offline",
        text: "Chantal has taken revenge. She signed up your email for the 'Daily Cat Facts' and 'Yoga for Seniors' newsletters. Your inbox is overflowing. Plus, she posted on the intranet that you only solve PC problems for chocolate today.",
        opts: [
            { 
                t: "Configure spam filter", 
                m: 20, f: -5, a: 20, c: 0, 
                r: "It takes you 20 minutes to block the newsletters. Annoying, but doable. Chantal grins at you in the hallway." 
            },
            { 
                t: "Counterattack: Redirect her emails", 
                rep: { "Chantal": -20 },
                m: 10, f: 0, a: -10, c: -10, 
                r: "You forward all emails from 'Zalando' and 'Douglas' to the boss. That's evil. Chantal will soon have a very unpleasant conversation." 
            },
            { 
                t: "Put up a sign: 'NO CHOCOLATE!'", 
                m: 5, f: 0, a: 15, c: 0, 
                r: "You write an angry sign for your door. Colleagues are disappointed. Your reputation as a grump is cemented." 
            }
        ]
    },
    {
        id: "rep_chantal_bad_2c",
		char: "Chantal",
        title: "The Viral Cringe",
        reqStory: "path_chantal_sellout",
        text: "Chantal bursts in, thrilled. 'Müller! Your peace sign got 500 likes! People love the 'Grumpy Cat' vibe! Come on, let's do a TikTok dance to 'Savage Love' now! The boss is watching too!'",
        opts: [
            { 
                t: "Participate & Dance (Absolute Humiliation)", 
                rep: { "Chantal": 20, "Dr. Wichtig": -15 },
                m: 15, f: 10, a: 30, c: 20, 
                r: "You dance stiffly like a robot. Chantal cheers. The boss shakes his head in the background: 'I don't pay you to wiggle, Müller.' Your reputation as a serious admin is destroyed, but Chantal loves you." 
            },
            { 
                t: "Refuse: 'Enough is enough.'", 
                rep: { "Chantal": -10 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "'Oh nooo, don't be a spoilsport!' She pouts and leaves. Your internet fame was short-lived." 
            },
            { 
                t: "Say: 'Only for a budget increase.'", 
                rep: { "Chantal": 5, "Dr. Wichtig": 5 },
                m: 10, f: 5, a: 10, c: 5, 
                r: "You negotiate hard. A dance for a new monitor. Chantal pays from her budget. You sold your soul, but the new monitor is 4K." 
            }
        ]
    },
    {
        id: "rep_chantal_nemesis_1",
		char: "Chantal",
        title: "The Shitstorm",
        reqRep: { "Chantal": -60 },
        text: "You walk into the office. Posters are everywhere with an unflattering photo of you (eating a kebab with your mouth open). Below it, in pink letters: 'IT blocks innovation! #Brakes #Boomer #SadVibes'. Chantal stands next to it, filming your reaction live for Insta.",
        opts: [
            { 
                t: "Aggression: Tear down posters", 
                next: "path_chantal_war",
                rep: { "Chantal": -15 },
                m: 5, f: -5, a: 20, c: 5, 
                r: "You angrily rip the notes from the wall. Chantal zooms in on your red face. 'See the violence? The toxic masculinity?' She has content. You have rage." 
            },
            { 
                t: "Sabotage: Block her account", 
                next: "path_chantal_ban",
                req: "admin_pw", 
                rep: { "Chantal": -20 },
                m: 10, f: -5, a: -5, c: 10, 
                r: "You go to your desk and deactivate her AD user for 'suspicion of botnet'. Chantal screams in the hallway: 'My access?!'. The war shifts to the digital realm." 
            },
            { 
                t: "Submission: Stream live apology", 
                next: "path_chantal_makeover",
                rep: { "Chantal": 15, "Dr. Wichtig": -5 }, 
                m: 5, f: 5, a: 20, c: 5, 
                r: "You look into her camera and say: 'I was a brake. Chantal is right.' Chantal is flustered, then thrilled. 'Oh wow! Insight! #CharacterArc'. You sold your dignity, but bought peace." 
            }
        ]
    },
    {
        id: "rep_chantal_nemesis_2a",
		char: "Chantal",
        title: "The Tribunal",
        reqRep: { "Chantal": -70 },
        reqStory: "path_chantal_war",
        text: "Lunch break in the cafeteria. Chantal stands on a table, giving a fiery speech against you. Suddenly, Dr. Wichtig walks in. He sees Chantal on the table and turns red. 'MS. CHANTAL! GET DOWN FROM THERE! IS THIS A ZOO?!'",
        opts: [
            { 
                t: "Enjoy: 'Yes, boss! Tell her!'", 
                rep: { "Chantal": -30, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: -20, c: 0, 
                r: "You lean back and enjoy the show. The boss chews Chantal out. She runs out crying and gives you a look that could kill. That was total war." 
            },
            { 
                t: "Sacrifice: Lie to the boss (Cover for her)", 
                rep: { "Chantal": 40, "Dr. Wichtig": -20 },
                m: 10, f: 0, a: 10, c: 20, 
                r: "You jump up: 'Stop, boss! That was my idea! A... uh... agile stand-up exercise!' The boss stares at you. 'Müller, you're an idiot.' He walks away shaking his head. Chantal stares at you with an open mouth. 'You saved me? Why?'" 
            },
            { 
                t: "Just leave", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You leave the room. Not your circus, not your monkeys." 
            }
        ]
    },
    {
        id: "rep_chantal_nemesis_2b",
		char: "Chantal",
        title: "The Marketing Blackout",
        reqRep: { "Chantal": -70 },
        reqStory: "path_chantal_ban",
        text: "Chantal stands crying in front of the boss's office. 'I can't post! Our campaign is dying!' The boss comes to you: 'Müller! Why isn't the marketing network working? If this is your fault, heads will roll!'",
        opts: [
            { 
                t: "Cold-blooded: 'Chantal probably downloaded a virus.'", 
                rep: { "Chantal": -30, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: -10, c: -5, 
                r: "You blame her. 'User error.' The boss believes you. Chantal gets a writing ban. You won, but you're a monster." 
            },
            { 
                t: "Sacrifice: 'My mistake, boss. Wrong config.'", 
                rep: { "Chantal": 35, "Dr. Wichtig": -15 },
                m: 5, f: -5, a: 10, c: 30, 
                r: "You take the blame. The boss yells: 'Incompetent!'. You unblock her account. Chantal comes to you later, with teary eyes: 'Thanks. I thought I was getting fired.' Peace." 
            },
            { 
                t: "Technical Blah-Blah (Distract)", 
                m: 10, f: 0, a: 0, c: 10, 
                r: "You talk about DNS propagation. Nobody understands anything. The account 'suddenly works again'. The conflict continues to simmer." 
            }
        ]
    },
    {
        id: "rep_chantal_nemesis_2c",
		char: "Chantal",
        title: "Project: Glow-Up",
        reqRep: { "Chantal": -50 },
        reqStory: "path_chantal_makeover",
        text: "Chantal comes into your office. She's no longer hostile, but... pitying. 'Okay, since you're behaving... we need to work on your image. Put this on.' She throws you a pink polo shirt with 'Team Love' written on it.",
        opts: [
            { 
                t: "Put it on (Total Submission)", 
                rep: { "Chantal": 25 },
                m: 5, f: 10, a: 30, c: 0, 
                r: "You put it on. It's tight around the belly. Chantal claps: 'Slay! You're our mascot now!' You have no dignity left, but Chantal is your best friend." 
            },
            { 
                t: "Refuse: 'That's too far.'", 
                rep: { "Chantal": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Pff. Then stay ugly.' She takes the shirt and leaves. The truce is fragile." 
            },
            { 
                t: "Negotiate: 'Only on Fridays.'", 
                rep: { "Chantal": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "A compromise. She nods graciously. 'Okay. Casual Friday is mine.' You've bought yourself some time." 
            }
        ]
    },
    {
        id: "rep_chantal_filler_good_1",
		char: "Chantal",
        title: "Excel for Influencers",
        reqRep: { "Chantal": 10 }, 
        text: "Chantal stands in front of you with her MacBook. 'Müller, you speak fluent nerd. How do I make this cell here turn red if the budget for vegan snacks is exceeded? It needs to pop!'",
        opts: [
            { 
                t: "Set up conditional formatting", 
                rep: { "Chantal": 10 },
                m: 10, f: -5, a: -5, c: 0, 
                r: "You set up the formatting. Chantal claps her hands. 'OMG, it's magic! You saved my day!' She walks away happily." 
            },
            { 
                t: "Sarcastic: 'Buy a red pen.'", 
                rep: { "Chantal": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She pouts. 'Always so helpful, IT. Then I'll just ask the working student.' Missed opportunity for bonus points." 
            },
            { 
                t: "Teach: 'Look, this is how it's done...'", 
                rep: { "Chantal": 5 },
                m: 15, f: -5, a: 5, c: 0, 
                r: "You try to explain it to her. She mentally checks out after 10 seconds and just nods. 'Yeah, yeah, just do it.' At least she said thank you." 
            }
        ]
    },
    {
        id: "rep_chantal_filler_good_2",
		char: "Chantal",
        title: "The Outfit Check",
        reqRep: { "Chantal": 30 }, 
        text: "Chantal scrutinizes you from head to toe. 'We have a client meeting in-house soon. That T-shirt with the 'There is no Place like 127.0.0.1' slogan... is that irony or are you serious? You need an upgrade.'",
        opts: [
            { 
                t: "Self-deprecating: 'This is high fashion!'", 
                rep: { "Chantal": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "She laughs. 'Okay, at least you own your cringe. Just stay behind the server rack when the clients arrive.'" 
            },
            { 
                t: "Play along: 'Do you have something better?'", 
                rep: { "Chantal": 15 },
                m: 10, f: 5, a: 5, c: 5, 
                r: "She beams, rummages in a box, and throws you a much too tight 'GlobalCorp Innovator' polo. You look terrible, but she's happy." 
            },
            { 
                t: "Block: 'My clothes, my business.'", 
                rep: { "Chantal": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She throws up her hands defensively. 'Just a tip. Don't shoot the messenger.' She trots off, shaking her head." 
            }
        ]
    },
    {
        id: "rep_chantal_filler_bad_1",
		char: "Chantal",
        title: "Hardware Aesthetics",
        reqRep: { "Chantal": -10 }, 
        text: "Chantal stands annoyed in front of your desk. 'This black box under my desk... the computer. It's ruining the feng shui. Can't you spray it white? Or swap it for an iMac?'",
        opts: [
            { 
                t: "Annoyed: 'That's a company PC, not a decorative object.'", 
                rep: { "Chantal": -5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "'Ugh, you're so uncreative,' she grumbles. 'Then I'll just stick glitter on it.' (Please don't...)" 
            },
            { 
                t: "Tech Solution: Push the PC under the desk", 
                m: 10, f: 5, a: 0, c: 0, 
                r: "You crawl under her desk and push the tower all the way back into the corner. 'Out of sight, out of mind.' She's moderately satisfied." 
            },
            { 
                t: "Ignore and continue working", 
                rep: { "Chantal": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "You pretend not to hear her. She stands there huffing for another minute, then stalks off angrily." 
            }
        ]
    },
    {
        id: "rep_chantal_filler_bad_2",
		char: "Chantal",
        title: "The Priority Problem",
        reqRep: { "Chantal": -30 }, 
        text: "A ticket from Chantal pops up, priority CRITICAL: 'My second monitor has the wrong color temperature! The blue is too cool!' You're actually dealing with a real server outage right now.",
        opts: [
            { 
                t: "Close ticket: 'No technical defect.'", 
                rep: { "Chantal": -15 },
                m: 2, f: 0, a: 5, c: 5, 
                r: "You mercilessly close the ticket. Two minutes later, Chantal yells down the hallway that IT is deliberately sabotaging the marketing department." 
            },
            { 
                t: "Go there and make fake clicks", 
                rep: { "Chantal": 5 },
                m: 15, f: -5, a: 10, c: -5, 
                r: "You interrupt your important work, go there, and set the monitor 2% warmer. 'Much better!', she says. You want to cry." 
            },
            { 
                t: "CC the boss: 'Adjust priority.'", 
                rep: { "Chantal": -10, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: 0, c: -5, 
                r: "You report the waste of resources to the boss. He agrees with you, but Chantal sends you a hateful Teams message." 
            }
        ]
    },
    // === EGON: THE KEEPER OF THE KEYS ===
    {
        id: "rep_egon_story_1",
		char: "Egon",
        title: "Flooded",
        reqRep: { "Egon": 60 },
        text: "You walk into the kitchenette. Egon is lying on his back under the sink in dirty water. He's cursing softly. The coffee machine is blocked by his legs. He looks at you assessingly.",
        opts: [
            { 
                t: "Help out: 'Hand me the pliers!'", 
                next: "path_egon_handyman",
                rep: { "Egon": 15 },
                m: 20, f: -10, a: 5, c: 0, 
                r: "You throw off your jacket and reach into the dirty water. Egon grins widely. 'Finally, someone who works!' You fix the leak together. A man-moment." 
            },
            { 
                t: "Procedure: 'I'll call emergency services.'", 
                next: "path_egon_official",
                rep: { "Egon": -5, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: 5, c: -5, 
                r: "Egon rolls his eyes. 'Typical bureaucrat. Just don't take any responsibility.' He packs up annoyed. The boss later praises your 'process adherence'." 
            },
            { 
                t: "Disgust: 'Ugh, I just wanted tea.'", 
                next: "path_egon_snob",
                rep: { "Egon": -15 },
                m: 2, f: 5, a: 0, c: 5, 
                r: "You carefully step over his legs. Egon spits contemptuously into the bucket. 'Get out of my sun, princess.' That didn't go over well." 
            }
        ]
    },
    {
        id: "rep_egon_story_2a",
		char: "Egon",
        title: "Finale: A Matter of Trust",
        reqRep: { "Egon": 80 },
        reqStory: "path_egon_handyman",
        text: "Egon waves you into his little room. It smells of cleaning supplies and stale smoke. 'Listen. I'm retiring soon. You're the only one here who isn't a complete idiot.' He holds out a heavy, old key ring to you. 'For emergencies. Officially, you don't have it.'",
        opts: [
            { 
                t: "Wordlessly take it & nod", 
                loot: "master_key", 
                rep: { "Egon": 20 },
                m: 5, f: -20, a: -30, c: 0, 
                r: "You take the bunch. Egon claps you firmly on the shoulder. 'Take good care of the place.' You now have access to EVERYTHING. (Item received!)" 
            },
            { 
                t: "Decline: 'Too much responsibility.'", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "Egon shrugs. 'Suit yourself. Then the intern gets it when he's old enough.' He puts it away. Does he mean Kevin?." 
            },
            { 
                t: "Report: 'Is that allowed?'", 
                rep: { "Egon": -20, "Dr. Wichtig": 2 },
                m: 5, f: 0, a: 5, c: -10, 
                r: "Egon turns icy. 'Forget it. You're just one of them.' He throws you out. The trust is gone." 
            }
        ]
    },
    {
        id: "rep_egon_story_2b",
		char: "Egon",
        title: "Finale: Egon and the Tablet",
        reqRep: { "Egon": 60 },
        reqStory: "path_egon_official",
        text: "You meet Egon in the hallway. He's banging on the new 'Smart-Heating' panel on the wall with his thick finger. 'Piece of junk! It's 12 degrees, but this thing wants a firmware update first! I'm freezing! You do it, you're IT!'",
        opts: [
            { 
                t: "Hack: 'I'll bypass the lock.'", 
                rep: { "Egon": 15 },
                m: 10, f: -5, a: -5, c: 5, 
                r: "You type in an admin override. The heating immediately kicks on. Egon beams: 'You're a wizard! Screw the rules, it needs to be warm!' Respect earned." 
            },
            { 
                t: "Procedure: 'Update running... takes 2 hours.'", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: 10, c: -5, 
                r: "Egon groans. 'Then I'll just go to the boiler room.' He stomps off angrily. You acted correctly, but helped no one." 
            },
            { 
                t: "Suggest: 'Hit it with a hammer.'", 
                req: "hammer",
                rep: { "Egon": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "Egon grins briefly but shakes his head. 'Too expensive. The boss will deduct it from my pay.' A brief moment of connection." 
            }
        ]
    },
    {
        id: "rep_egon_story_2c",
		char: "Egon",
        title: "Finale: The 'Defective' Valve",
        reqRep: { "Egon": 50 },
        reqStory: "path_egon_snob",
        text: "Suddenly it's 14 degrees in your office. You're shivering. Egon leans against his broom in the hallway, looking very pleased. 'Well. Your heating seems to be broken. Spare part will arrive... well... when the truck comes. Might take a while.' He grins maliciously.",
        opts: [
            { 
                t: "Bribe: 'Take this donut.'", 
                rep: { "Egon": 10 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You sacrifice your food. Egon takes it. 'Oh, look! I found the valve in my pocket after all!' The heating works again. Corruption wins." 
            },
            { 
                t: "Threaten: 'I'll tell the boss!'", 
                rep: { "Egon": -10 },
                m: 5, f: 0, a: 10, c: -5, 
                r: "'Go ahead.' Egon is unimpressed. He turns up the heating in the hallway to full blast so you realize what you're missing. You continue to freeze." 
            },
            { 
                t: "Repair yourself", 
                req: "screw",
                m: 30, f: -10, a: -10, c: 0, 
                r: "You crawl under the radiator and bleed it yourself. You get dirty, but it gets warm. Egon looks disappointed that you could help yourself." 
            }
        ]
    },
    {
        id: "rep_egon_simple_good_1",
		char: "Egon",
        title: "The Crossword Puzzle",
        reqRep: { "Egon": 20 },
        text: "Egon sits on a crate in the boiler room, chewing on a pencil. 'Hey, you're educated. 6 Across: 'Ancient calculating device'. 6 letters. I tried 'HANDY', but it doesn't fit.'",
        opts: [
            { 
                t: "Try: 'ABACUS'", 
                next: "path_egon_smart",
                rep: { "Egon": 10 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "Egon slaps his forehead. 'Abacus! Of course! Those Greeks. Thanks, kid, you've got a brain.' He scribbles it in." 
            },
            { 
                t: "Try: 'SYSTEM'", 
                next: "path_egon_joke",
                rep: { "Egon": 15 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Egon laughs dirtily. 'System... yeah, that's ancient and doesn't calculate right either.' He actually writes it in. 'Doesn't fit, but it's true anyway.'" 
            },
            { 
                t: "Dismiss: 'Just Google it.'", 
                next: "path_egon_google",
                rep: { "Egon": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Google... pff. Back in my day, we used our brains.' Egon looks disappointed by your laziness." 
            }
        ]
    },
    {
        id: "rep_egon_simple_good_2a",
		char: "Egon",
        title: "The Win",
        reqRep: { "Egon": 40 },
        reqStory: "path_egon_smart",
        text: "Egon stops you in the hallway. He's waving a magazine. 'I sent in the puzzle! And won! Only the consolation prize, but shared joy is double joy.'",
        opts: [
            { 
                t: "Accept prize", 
                loot: "tape",
                rep: { "Egon": 5 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "He presses a roll of premium duct tape into your hand. 'It was in the DIY kit. I have enough of it. Take it.' (Inventory +1)" 
            },
            { 
                t: "Decline: 'Keep it.'", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Suit yourself. Then I'll tape the broom with it.' He walks on, whistling." 
            },
            { 
                t: "Smart-aleck: 'See!'", 
                rep: { "Egon": -5 },
                m: 5, f: 0, a: -5, c: 5, 
                r: "'Yeah, yeah, Professor.' He puts the tape away. Arrogance doesn't go over well with Egon." 
            }
        ]
    },
    {
        id: "rep_egon_simple_good_2b",
		char: "Egon",
        title: "Secret Knowledge",
        reqRep: { "Egon": 40 },
        reqStory: "path_egon_joke",
        text: "Egon waves you behind a pillar. 'Since you're so good at gossiping... I discovered something. On the 3rd floor, men's restroom, middle stall. The flush is stuck, but behind it is a hollow space. Perfect for... breaks.'",
        opts: [
            { 
                t: "Thank & Use", 
                m: 30, f: 20, a: -20, c: 0, 
                r: "You find the hideout. A folding chair, old comics, and absolute peace. You slack off for 30 minutes. Nobody finds you. Wonderful." 
            },
            { 
                t: "Joke: 'The Chamber of Secrets?'", 
                rep: { "Egon": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "Egon grins. 'Exactly. For initiates only.' You now share a secret." 
            },
            { 
                t: "Report (Betrayal)", 
                rep: { "Egon": -20 },
                m: 5, f: 0, a: 5, c: -15, 
                r: "You report the hollow space to Facility Management. They wall it up. Egon never speaks to you again." 
            }
        ]
    },
    {
        id: "rep_egon_simple_good_2c",
		char: "Egon",
        title: "New Territory",
        reqRep: { "Egon": 30 },
        reqStory: "path_egon_google",
        text: "Egon holds out his ancient button phone to you. 'Tried to Google it, like you said. Now something's blinking and it's beeping weirdly. Did I break the internet?'",
        opts: [
            { 
                t: "Help: 'Just the alarm clock.'", 
                rep: { "Egon": 10 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "You press two buttons. The beeping stops. Egon sighs in relief. 'Devil's work. Thanks.' He trusts you a little more again." 
            },
            { 
                t: "Laugh: 'Self-destruction!'", 
                rep: { "Egon": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "Egon almost throws the phone away. 'Idiot!' He realizes you're messing with him. Bad mood." 
            },
            { 
                t: "Explain he's using WAP", 
                m: 10, f: 0, a: 5, c: 5, 
                r: "You explain 2005 mobile data to him. He tunes out. 'Just make it stop.' You fix it, but he's annoyed by the tech." 
            }
        ]
    },
    {
        id: "rep_egon_simple_bad_1",
		char: "Egon",
        title: "Freshly Mopped",
        reqRep: { "Egon": -20 },
        text: "You're in a hurry to the server room. But Egon blocks the way with his mop. The floor is dry, but the yellow warning sign is there. 'No thoroughfare. Drying time: 20 minutes.' He grins maliciously.",
        opts: [
            { 
                t: "Just walk through", 
                next: "path_egon_mess",
                rep: { "Egon": -10 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "You ignore him and stomp over it. Egon yells: 'HEY! That'll leave marks!' You leave dirty footprints. The war has begun." 
            },
            { 
                t: "Argue: 'It's dry!'" , 
                next: "path_egon_lecture",
                m: 10, f: -5, a: 10, c: 0, 
                r: "'Rule is rule DIN 1234.' Egon gives you a 10-minute lecture on liability insurance. You're late and annoyed." 
            },
            { 
                t: "Jump over it", 
                next: "path_egon_fail",
                rep: { "Egon": -5 },
                m: 2, f: 5, a: 10, c: 5, 
                r: "You take a running start... and slip on the only wet spot. You land on your butt. Egon laughs dirtily. 'Break a leg, athlete!'" 
            }
        ]
    },
    {
        id: "rep_egon_simple_bad_2a",
		char: "Egon",
        title: "Trash Strike",
        reqRep: { "Egon": -40 },
        reqStory: "path_egon_mess",
        text: "Your trash can is overflowing. It smells of old banana. All other bins in the office are empty, only yours isn't. Egon leans in the doorway. 'Well. Your bin was 2cm too far to the left. I can't get my cart in there. Workplace safety.'",
        opts: [
            { 
                t: "Take out trash yourself", 
                m: 15, f: -10, a: 10, c: 10, 
                r: "You demonstratively carry your trash past the boss to the dumpster. You feel humiliated. Egon waves happily after you." 
            },
            { 
                t: "Dump trash in the hallway", 
                rep: { "Egon": -10, "Dr. Wichtig": -5 },
                m: 5, f: -5, a: 10, c: 10, 
                r: "Escalation. Now the trash is in the hallway. 'Oops, fell over.' Egon turns red with rage. That'll cause trouble with building management." 
            },
            { 
                t: "Yell at Egon", 
                m: 5, f: 0, a: -5, c: 5, 
                r: "You yell. Egon turns down his hearing aid. 'I can't hear anything, the ventilation is so loud.' Useless." 
            }
        ]
    },
    {
        id: "rep_egon_simple_bad_2b",
		char: "Egon",
        title: "Power Saving Measure",
        reqRep: { "Egon": -40 },
        reqStory: "path_egon_lecture",
        text: "Your second monitor is black. The plug has been pulled and secured with a cable tie. A note from Egon is attached: 'Unauthorized consumer. See house rules §9.'",
        opts: [
            { 
                t: "Cut cable tie", 
                m: 10, f: 0, a: 10, c: 0, 
                r: "You fumble with scissors for 10 minutes. You have your monitor back, but Egon achieved what he wanted: to annoy you." 
            },
            { 
                t: "Get extension cord from hallway", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "You run a flying cable across the hallway. Now it's a tripping hazard. Egon will rage, but you have power." 
            },
            { 
                t: "Complain to the boss", 
                rep: { "Egon": -5 },
                m: 15, f: 0, a: 5, c: -5, 
                r: "The boss sighs. 'Settle it like men, Müller. Don't bother me with power outlets.' No help from above." 
            }
        ]
    },
    {
        id: "rep_egon_simple_bad_2c",
		char: "Egon",
        title: "The Warning Sign",
        reqRep: { "Egon": -30 }, 
        reqStory: "path_egon_fail",
        text: "A yellow 'Caution Wet Floor' sign now permanently stands in front of your office. Egon has also drawn a stick figure falling on its face. It looks like you.",
        opts: [
            { 
                t: "Hide sign",
                rep: { "Egon": -2 }, 
                m: 2, f: 0, a: 0, c: 0, 
                r: "You put it in the broom closet. 5 minutes later, it's back. Egon has more stamina than you." 
            },
            { 
                t: "Paint over picture", 
                rep: { "Egon": -5 },
                m: 5, f: 5, a: -5, c: 5, 
                r: "You paint a blue overall and a broom on the stick figure. Now Egon is falling. A small, childish victory." 
            },
            { 
                t: "Laugh it off", 
                rep: { "Egon": 5 },
                m: 2, f: 5, a: -5, c: 0, 
                r: "You grin at Egon: 'Well done.' He grunts in surprise: 'At least he has a sense of humor.' The ice thaws slightly." 
            }
        ]
    },
    {
        id: "rep_egon_nemesis_1",
		char: "Egon",
        title: "Ice Age",
        reqRep: { "Egon": -60 },
        text: "It's 8 degrees in your office. The heating has been physically removed. Only a note lies on the floor: 'Maintenance work. Duration: Unknown.' Egon stands in the hallway, spooning hot soup and grinning at you.",
        opts: [
            { 
                t: "Escalate: Steal his master key", 
                next: "path_egon_war",
                rep: { "Egon": -20 },
                m: 10, f: -5, a: 20, c: 10, 
                r: "You wait a moment and swipe his key ring from the cleaning cart. Now you have the power! Egon notices immediately and yells through the building. This is going to get ugly." 
            },
            { 
                t: "Tech Revenge: Manipulate his time clock", 
                next: "path_egon_sabotage",
                req: "admin_pw", 
                rep: { "Egon": -15 },
                m: 15, f: -5, a: 10, c: 10, 
                r: "You log into the HR system and delete his overtime from last week. 'System error,' you mumble. Egon will rage when he sees his paycheck." 
            },
            { 
                t: "Submission: 'I'll clean the hallway for you!'", 
                next: "path_egon_slave",
                rep: { "Egon": 15 }, 
                m: 30, f: -20, a: 10, c: 0, 
                r: "You offer to do his job. Egon stops grinning. 'The whole hallway? With a toothbrush?' You nod desperately. He throws you a brush. 'Get started.'" 
            }
        ]
    },
    {
        id: "rep_egon_nemesis_2a",
		char: "Egon",
        title: "Walled In",
        reqRep: { "Egon": -80 },
        reqStory: "path_egon_war",
        text: "You want to leave the server room, but the door is stuck. A wooden beam has been nailed against it from the outside. Egon calls muffled through the door: 'Hand over the key, or you'll stay in there until Christmas!' Suddenly you hear the boss's voice: 'What? Why is the door barricaded?'",
        opts: [
            { 
                t: "Snitch on Egon: 'HE LOCKED ME IN!'", 
                rep: { "Egon": -30, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: 20, c: -20, 
                r: "The boss has the door broken open. Egon gets a warning. He whispers to you on the way out: 'Watch your brake lines...' The war is total." 
            },
            { 
                t: "Sacrifice: Lie ('I'm fixing the door!')", 
                rep: { "Egon": 35, "Dr. Wichtig": -15 },
                m: 10, f: 0, a: -5, c: 15, 
                r: "You cover for Egon. 'Everything's fine, boss! I'm testing the... uh... structural integrity!' The boss thinks you're crazy and leaves. Egon removes the beam. 'Okay. You're alright. Keys back, we're even.'" 
            },
            { 
                t: "Slide key under the door", 
                rep: { "Egon": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You give up. Egon opens the door, laughs at you, and takes the key. You lost, but you're free." 
            }
        ]
    },
    {
        id: "rep_egon_nemesis_2b",
		char: "Egon",
        title: "Trash Avalanche",
        reqRep: { "Egon": -80 },
        reqStory: "path_egon_sabotage",
        text: "You open your office. It's full. To the ceiling. Egon has dumped all the paper waste from the last 3 years into your office. He leans in the doorway. 'Well. My chip for the trash compactor didn't work today. Funny, huh?'",
        opts: [
            { 
                t: "Work in the trash", 
                m: 60, f: -30, a: 30, c: 0, 
                r: "You shovel a path to your PC and work in the pile of trash. Egon takes photos for the janitors' WhatsApp group. You lost." 
            },
            { 
                t: "Peace Offering: 'I'll restore your hours!'", 
                rep: { "Egon": 25 },
                m: 10, f: -5, a: 10, c: 20, 
                r: "You cave in. 'And I'll add 10 more hours!' Egon nods. 'Good. Then I'll clean this up. It was just waste paper anyway.' Peace bought." 
            },
            { 
                t: "Set trash on fire", 
                rep: { "Egon": 5, "Dr. Wichtig": -20 },
                m: 5, f: 0, a: 20, c: 40, 
                r: "You hold a lighter to it. Egon turns pale. 'Are you crazy?!' You put it out together. This is going too far. Truce out of sheer fear of you." 
            }
        ]
    },
    {
        id: "rep_egon_nemesis_2c",
		char: "Egon",
        title: "Waste Separation 2.0",
        reqRep: { "Egon": -50 },
        reqStory: "path_egon_recycling",
        text: "Egon comes with a box full of batteries, cables, and banana peels. 'Since you like cleaning up so much: Here. Separate this. But properly! Woe betide if a battery ends up in the organic waste.' He crosses his arms and waits.",
        opts: [
            { 
                t: "Dutifully sort (Obedience)", 
                rep: { "Egon": 20 },
                m: 30, f: -15, a: 15, c: 0, 
                r: "You sit there for 30 minutes sorting trash. Egon peeks in occasionally and nods. 'The boy is teachable.' You're rehabilitated, but your hands smell funny." 
            },
            { 
                t: "Refuse: 'I'm not a garbage man.'", 
                rep: { "Egon": -10 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "'Too bad. I just thought you were okay.' Egon dumps the box on your desk and leaves. Back to square one." 
            },
            { 
                t: "Peace Offering: 'Come on, let's have coffee first.'", 
                rep: { "Egon": 15 }, 
                m: 20, f: 10, a: -10, c: 5, 
                r: "You ignore the trash and get two cups. Egon hesitates, then accepts. 'Alright. But after that, we sort.' The ice is broken, but the trash remains your problem." 
            }
        ]
    },
    {
        id: "rep_egon_filler_good_1",
		char: "Egon",
        title: "Translation Help",
        reqRep: { "Egon": 10 }, 
        text: "Egon scratches his head, staring at the new air conditioning display. 'Hey. It says 'Filter Maintenance Required'. Does that mean the thing's about to explode or does it just want attention?'",
        opts: [
            { 
                t: "Help: 'You need to change the filter.'", 
                rep: { "Egon": 10 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "Egon grunts in agreement. 'Thought so. Devil's work, this Denglish. Thanks.' He leaves with his toolbox." 
            },
            { 
                t: "Tease: 'It's gaining sentience.'", 
                rep: { "Egon": -5 },
                m: 2, f: 5, a: 5, c: 0, 
                r: "Egon glares at you. 'I'm old, not stupid.' He turns around and tries brute force." 
            },
            { 
                t: "Ignore: 'I'm not a handyman.'", 
                rep: { "Egon": -5 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Helping each other seems to be out of fashion here,' he mutters and presses random buttons." 
            }
        ]
    },
    {
        id: "rep_egon_filler_good_2",
		char: "Egon",
        title: "Soft Gold",
        reqRep: { "Egon": 30 }, 
        text: "Egon sweeps in front of your office. When no one is looking, he slides a roll of three-ply toilet paper across your desk. 'From the executive restroom. The staff only gets sandpaper. Keep it for yourself.'",
        opts: [
            { 
                t: "Accept gratefully", 
                rep: { "Egon": 10 },
                m: 2, f: 0, a: -10, c: 0, 
                r: "You quickly hide the roll in your drawer. 'You're a true working-class hero, Egon,' you whisper. He grins proudly." 
            },
            { 
                t: "Principled: 'That's theft!'", 
                rep: { "Egon": -15 },
                m: 2, f: 0, a: 5, c: 5, 
                r: "Egon snorts. 'Then scratch your butt bloody, Mr. Clean.' He angrily takes the roll back." 
            },
            { 
                t: "Trade: 'Want a donut for it?'", 
                req: "donut",
                rem: "donut",
                rep: { "Egon": 15 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "A fair trade in the office black market. Egon takes the donut, you take the soft paper. Win-win." 
            }
        ]
    },
    {
        id: "rep_egon_filler_bad_1",
		char: "Egon",
        title: "Climate Dictatorship",
        reqRep: { "Egon": -10 }, 
        text: "You're sweating in the office because the sun is beaming in. You've turned on your personal desk fan. Egon storms in and simply pulls the plug. 'Fire hazard! Private devices without TÜV certification are strictly forbidden!'",
        opts: [
            { 
                t: "Argue: 'It's brand new!'", 
                rep: { "Egon": -5 },
                m: 10, f: 0, a: 10, c: 0, 
                r: "You argue for 10 minutes about fire safety standards. In the end, he mercilessly takes the fan. You continue to sweat." 
            },
            { 
                t: "Give in: 'Alright...'", 
                rep: { "Egon": 5 },
                m: 5, f: -5, a: 5, c: 0, 
                r: "You let him take the thing to avoid stress. Egon nods condescendingly. 'Good boy. Safety first.'" 
            },
            { 
                t: "Sabotage: Plug it back in when he's gone", 
                rep: { "Egon": -10 },
                m: 2, f: 5, a: -5, c: 5, 
                r: "As soon as he's out the door, you plug it back in. Half an hour later, Egon cuts the power to your room from outside." 
            }
        ]
    },
    {
        id: "rep_egon_filler_bad_2",
		char: "Egon",
        title: "The Tripwire",
        reqRep: { "Egon": -30 }, 
        text: "Egon has fixed a loose LAN cable to the floor right in front of your office door with three rolls of signal-red warning tape. The door now only opens halfway. He grins at you from a distance.",
        opts: [
            { 
                t: "Remove with utility knife", 
                rep: { "Egon": -10 },
                m: 10, f: 0, a: 10, c: 5, 
                r: "You painstakingly cut away the tape. Egon calls from afar: 'Vandalism! I'm reporting that!' You're off work, but you've escalated the war." 
            },
            { 
                t: "Get boss: 'That's an escape route!'", 
                rep: { "Egon": -15, "Dr. Wichtig": 5 },
                m: 15, f: 0, a: -5, c: -5, 
                r: "The boss forces Egon to remove the tape (workplace safety). Egon is fuming because he was humiliated in front of the boss." 
            },
            { 
                t: "Squeeze through every day", 
                m: 2, f: 5, a: 15, c: 0, 
                r: "You ignore it and squeeze through the gap every day. It's incredibly annoying, but you don't give him the satisfaction of a reaction." 
            }
        ]
    },
    // === DR. WICHTIG: THE VISIONARY ===
    {
        id: "rep_ceo_story_1",
		char: "Dr. Wichtig",
        title: "Vision & Panic",
        reqRep: { "Dr. Wichtig": 60 },
        text: "Dr. Wichtig waves you into his office. 'Müller! I have a vision: walking meetings on treadmills!' Suddenly he turns pale and stares at his tablet. 'Oh God... The Internet! There's a video... me singing 'Barbie Girl'?! This is a deepfake attack by the competition! Müller, do something!'",
        opts: [
            { 
                t: "Discretion: 'I'll delete it. Nobody saw it.'", 
                next: "path_ceo_saved",
                rep: { "Dr. Wichtig": 15 },
                m: 10, f: -5, a: 5, c: -10, 
                r: "You take the tablet from him. 'Just a cache error, boss. I'll clean up the matrix.' You delete the history. He breathes a sigh of relief. 'Müller, you're a rock. I won't forget this.'" 
            },
            { 
                t: "Be honest: 'That was the Christmas party 2018...'", 
                next: "path_ceo_shame",
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "He turns red. 'GET OUT! And forget what you saw!' You told the truth, but hurt his ego. Now he wants to destroy evidence." 
            },
            { 
                t: "Distract: 'The treadmills are a brilliant idea!'", 
                next: "path_ceo_treadmill",
                rep: { "Dr. Wichtig": 5 },
                m: 20, f: -10, a: 10, c: 5, 
                r: "He immediately forgets the video. 'Yes, right?! Order three! Immediately! We'll be the fittest company in the world!' You ignored the video, but now you have a hardware problem." 
            }
        ]
    },
    {
        id: "rep_ceo_story_2a",
		char: "Dr. Wichtig",
        title: "Finale: The Annual Review",
        reqRep: { "Dr. Wichtig": 80 },
        reqStory: "path_ceo_saved",
        text: "The boss is in a good mood. 'Müller! Since you discreetly fended off the 'cyber attack' (the video), I sleep better. You're a high-performer. But you know... the economic situation. I unfortunately can't give you a raise.' He smiles apologetically.",
        opts: [
            { 
                t: "Joker: Present the 'Secret List'", 
                req: "arg_list_2",
                loot: "contract", 
                rep: { "Dr. Wichtig": -10 },
                m: 10, f: 5, a: -50, c: 15, 
                r: "You present the PDF showing the intern earns more than you. The boss turns chalk-white. 'Uh. That... system error! Of course we'll correct that! How about... 20% more? Immediately?' He signs, trembling." 
            },
            { 
                t: "Pro: Show 'My Performance Record'", 
                req: "arg_list_1",
                loot: "contract", 
                rep: { "Dr. Wichtig": 20 },
                m: 15, f: -5, a: -10, c: 20, 
                r: "You present the list: overtime, saved servers, discretion. The boss nods approvingly. 'Numbers don't lie, Müller. I'll give you 6% and the parking spot right at the entrance.' An honest victory." 
            },
            { 
                t: "Negotiate without evidence", 
                rep: { "Dr. Wichtig": -2 },
                m: 15, f: -5, a: 10, c: 0, 
                r: "He sighs theatrically. 'I'd love to, but my hands are tied. Have a cookie.' You leave empty-handed." 
            }
        ]
    },
    {
        id: "rep_ceo_story_2b",
		char: "Dr. Wichtig",
        title: "Finale: Operation 'Men in Black'",
        reqRep: { "Dr. Wichtig": 50 },
        reqStory: "path_ceo_shame",
        text: "Dr. Wichtig wears sunglasses in the office. 'Müller. About the other day. I no longer trust the cloud. I want us to delete the internet. At least all pictures from 2018. Get started.'",
        opts: [
            { 
                t: "Placebo: 'I'll start the deletion algorithm.'", 
                rep: { "Dr. Wichtig": 10 },
                m: 5, f: 10, a: 5, c: -10, 
                r: "You open a terminal and ping Google. 'See, boss? All gone.' He nods contentedly. 'Good. Nobody must see my... uh... the company secrets.' You have peace, but he's crazy." 
            },
            { 
                t: "Reality: 'That's not possible.'", 
                rep: { "Dr. Wichtig": -20 },
                m: 5, f: 0, a: 10, c: 20, 
                r: "'You're fired! ... No, wait, you know too much. You're demoted to toner changer!' The boss is now your enemy." 
            },
            { 
                t: "Distract: 'Look, a new chart!'", 
                m: 2, f: 5, a: 0, c: -5, 
                r: "You show him a colorful graph. He briefly forgets the internet. 'Oh, the curve is going up! I like that.' Danger averted." 
            }
        ]
    },
    {
        id: "rep_ceo_story_2c",
		char: "Dr. Wichtig",
        title: "Finale: The Accident",
        reqRep: { "Dr. Wichtig": 60 },
        reqStory: "path_ceo_treadmill",
        text: "Three treadmills stand in the server room. 'Müller! Test run! Plug in your laptop and code while walking! Speed 10! Agility starts in the legs!' The boss presses the start button.",
        opts: [
            { 
                t: "Participate & fall (Sabotage)", 
                m: 10, f: -5, a: 10, c: 5, 
                r: "You theatrically let yourself be thrown off the belt. You land softly in a pile of cables. 'Work accident, boss!' He stops the machine. 'Okay, maybe too dangerous after all. Project stopped.' You saved IT." 
            },
            { 
                t: "Seriously try to work", 
                m: 30, f: -20, a: 30, c: -10, 
                r: "You try to type while jogging. Your code looks like 'akhjdf874'. You sweat on the keyboard. The boss is thrilled: 'Look at that energy!' Your life is now hell." 
            },
            { 
                t: "Put Kevin on it", 
                rep: { "Kevin": -10, "Dr. Wichtig": 5 },
                m: 5, f: 5, a: -5, c: 10, 
                r: "'Kevin is young, he can do it.' Kevin now jogs 8 hours a day. He's fit, but he hates you. You have your peace." 
            }
        ]
    },
    {
        id: "rep_ceo_simple_good_1",
		char: "Dr. Wichtig",
        title: "The Big Picture",
        reqRep: { "Dr. Wichtig": 20 },
        text: "Dr. Wichtig stops you. 'Müller! I need a dashboard for the board. One-pager. High Level. Traffic light system. I want to see everything green. Understand? Everything. Green.' His eyes twitch slightly.",
        opts: [
            { 
                t: "Fake: Create a static green image", 
                next: "path_ceo_fake_green",
                rep: { "Dr. Wichtig": 10 },
                m: 10, f: -5, a: -5, c: -10,
                r: "You open Paint and draw a huge green dot. Below it, you write 'ALL SYSTEMS: GO'. The boss looks at it. 'Perfect. That's the clarity I need.'" 
            },
            { 
                t: "Honest: Show the real (red) live data", 
                next: "path_ceo_real_panic",
                rep: { "Dr. Wichtig": -5 },
                m: 15, f: -5, a: -5, c: 10,
                r: "You build him a link to the monitoring. It blinks red (server load) and yellow (memory). The boss turns pale. 'Oh God... are we doomed?' He looks disturbed." 
            },
            { 
                t: "Sci-Fi: Matrix code as screensaver", 
                next: "path_ceo_cyber",
                rep: { "Dr. Wichtig": 5 },
                m: 5, f: 5, a: 5, c: -15,
                r: "You install a terminal where green code scrolls down. It has zero function. The boss stares at it, fascinated. 'This is it. This is the cloud. I can feel it.'" 
            }
        ]
    },
    {
        id: "rep_ceo_simple_good_2a",
		char: "Dr. Wichtig",
        title: "The Presentation",
        reqRep: { "Dr. Wichtig": 40 },
        reqStory: "path_ceo_fake_green",
        text: "The boss comes out of the board meeting beaming. 'Müller! Your green dot was a hit! But the supervisory board is asking if we can make the dot... more dynamic? Maybe blinking? For synergy?'",
        opts: [
            { 
                t: "Embed animated GIF", 
                rep: { "Dr. Wichtig": 15 },
                m: 10, f: 5, a: 10, c: -15,
                r: "You replace the image with a blinking GIF. The boss nods reverently. 'Now it lives. This is Digitalization 4.0.' You die a little inside." 
            },
            { 
                t: "Technobabble: 'That eats too much performance.'", 
                rep: { "Dr. Wichtig": 5 },
                m: 2, f: 5, a: -5, c: -5,
                r: "'I see. Resource efficiency. Good point, Müller.' He buys it. Laziness wins." 
            },
            { 
                t: "Give him a laser pointer", 
                rep: { "Dr. Wichtig": 10 },
                m: 5, f: 0, a: -5, c: -10,
                r: "'Wiggle it on the screen, boss. That's interactivity.' He tries it out and giggles like a child. 'Brilliant!'" 
            }
        ]
    },
    {
        id: "rep_ceo_simple_good_2b",
		char: "Dr. Wichtig",
        title: "Panic Room",
        reqRep: { "Dr. Wichtig": 40 },
        reqStory: "path_ceo_real_panic",
        text: "The boss stands trembling in your office. 'I looked at the dashboard. There was a yellow bar for 'Printer Toner'. Do we have to file for bankruptcy? I've already called my wife!'",
        opts: [
            { 
                t: "Reassure: 'That's just a warning.'", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: -5, a: 10, c: -5,
                r: "You explain the traffic light system to him like a toddler. 'Yellow just means: caution.' He breathes out. 'Phew. I thought it was like a meltdown. Thanks, Müller.'" 
            },
            { 
                t: "Offer coffee & lie", 
                rep: { "Dr. Wichtig": 10 },
                m: 5, f: 5, a: -5, c: -10, 
                r: "You give him a coffee. 'Everything's okay, boss. That's... uh... the sun's position.' He immediately relaxes. 'Oh, I see. Well then.'" 
            },
            { 
                t: "Manipulate the dashboard (All green)", 
                rep: { "Dr. Wichtig": 20 },
                m: 5, f: -5, a: 5, c: -20,
                r: "You raise the warning threshold. Everything turns green. 'See? Problem solved.' The boss beams: 'You're a magician, Müller!'" 
            }
        ]
    },
    {
        id: "rep_ceo_simple_good_2c",
		char: "Dr. Wichtig",
        title: "The Chosen One",
        reqRep: { "Dr. Wichtig": 40 },
        reqStory: "path_ceo_cyber",
        text: "Dr. Wichtig now wears sunglasses. In the office. 'Müller. Since I saw the code, I understand everything. We need to go deeper. Hack the competition! Or order pizza. But digitally!'",
        opts: [
            { 
                t: "Play along: 'I'm in.'", 
                loot: "energy",
                rep: { "Dr. Wichtig": 15 },
                m: 5, f: 10, a: 10, c: -15,
                r: "You type `ping google.de`. He's amazed. 'Incredible.' He tosses you a can of energy. 'Fuel for the mainframe.' (Inventory +1)" 
            },
            { 
                t: "Reality check: 'Take off your glasses.'", 
                rep: { "Dr. Wichtig": -10 },
                m: 2, f: 0, a: -5, c: 10,
                r: "He pushes his glasses up. 'Spoilsport. You have no vision.' The magic is gone." 
            },
            { 
                t: "Order pizza (via app)", 
                rep: { "Dr. Wichtig": 10 },
                m: 10, f: 5, a: -10, c: -10,
                r: "You order pizza. The boss thinks it's hacking. 'How did you materialize the food?!' He pays out of sheer enthusiasm." 
            }
        ]
    },
    {
        id: "rep_ceo_simple_bad_1",
		char: "Dr. Wichtig",
        title: "The Time Study",
        reqRep: { "Dr. Wichtig": -20 },
        text: "Dr. Wichtig stands with a stopwatch directly behind your office chair. He breathes down your neck. 'Müller, I read that a mouse click should only take 0.4 seconds. You just took 1.2 seconds. We need to work on your efficiency.'",
        opts: [
            { 
                t: "Aggression: 'I'm not a robot!'", 
                next: "path_ceo_poster",
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: -10, c: 15,
                r: "You turn around. 'Do you want to click?!' The boss recoils. 'Oh-ho, temper! That's unprofessional, Müller. Very bad for the office's Chi.'" 
            },
            { 
                t: "Excuse: 'The mouse is outdated.'", 
                next: "path_ceo_mouse",
                m: 10, f: 5, a: 0, c: 0,
                r: "'That's the latency, boss. Old hardware.' The boss frowns. 'Material defect? In my company? I won't tolerate that! I'll take care of it.'" 
            },
            { 
                t: "Submission: 'I'll click faster, boss!'", 
                next: "path_ceo_log",
                rep: { "Dr. Wichtig": 5 },
                m: 5, f: -10, a: 15, c: -10,
                r: "You hammer the mouse like a woodpecker. Click-click-click. The boss nods contentedly. 'See? You can do it. Motivation is everything.'" 
            }
        ]
    },
    {
        id: "rep_ceo_simple_bad_2a",
		char: "Dr. Wichtig",
        title: "Motivation Offensive",
        reqRep: { "Dr. Wichtig": -40 },
        reqStory: "path_ceo_poster",
        text: "The boss returns. He carries a huge poster under his arm. 'Müller, your negative aura is slowing down the server. We're hanging this here.' He tapes a picture of a cat hanging from a branch ('Hang in there!') directly above your monitor.",
        opts: [
            { 
                t: "Tear down (as soon as he's gone)", 
                m: 5, f: 0, a: -15, c: 5,
                r: "Rip. The poster lands in the trash. You immediately feel better. But woe betide if he notices." 
            },
            { 
                t: "Sarcasm: 'Thanks, I'm cured.'", 
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -5, c: 10,
                r: "'Inspiring, boss. Truly.' He looks at you suspiciously. 'I sense your cynicism, Müller. Cynicism is the rust on the gears of success.'" 
            },
            { 
                t: "Leave it hanging & Suffer", 
                m: 2, f: 0, a: 20, c: -10,
                r: "The cat stares at you. Every day. Every hour. Your rage grows immeasurably, but the boss is happy with the decor." 
            }
        ]
    },
    {
        id: "rep_ceo_simple_bad_2b",
		char: "Dr. Wichtig",
        title: "The Upgrade",
        reqRep: { "Dr. Wichtig": -30 },
        reqStory: "path_ceo_mouse",
        text: "Dr. Wichtig slams a package onto your desk. 'Here! The fastest mouse in the world! RGB lighting, 12,000 DPI. With this, I expect double productivity!' It's a cheap China model in the shape of a race car, blinking extremely brightly.",
        opts: [
            { 
                t: "Use it (Eyestrain)", 
                rep: { "Dr. Wichtig": 10 },
                m: 10, f: 0, a: 20, c: -15,
                r: "The thing is unergonomic and blinds you. Your hand cramps after 5 minutes. The boss nods as he passes by: 'Sleek!'" 
            },
            { 
                t: "Sabotage: 'It's defective, unfortunately.'", 
                m: 5, f: 5, a: -5, c: 5,
                r: "You secretly cut the cable. 'Oh dear, boss. Cheap stuff.' He sighs. 'Can't rely on anything anymore. Take the old one.'" 
            },
            { 
                t: "Give to Kevin", 
                rep: { "Kevin": 5, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "Kevin freaks out: 'Whoa! RGB!' The boss sees it later. 'Müller? Why does the intern have your high-performance hardware?!' Explaining to do." 
            }
        ]
    },
    {
        id: "rep_ceo_simple_bad_2c",
		char: "Dr. Wichtig",
        title: "The Click Log",
        reqRep: { "Dr. Wichtig": -30 },
        reqStory: "path_ceo_log",
        text: "The boss hands you a stack of forms. 'Since you're clicking faster now, Müller, I want to measure it. Please enter every mouse click into this list. With time and reason. For transparency.'",
        opts: [
            { 
                t: "Dutifully fill out", 
                m: 60, f: -30, a: 30, c: -20,
                r: "You spend an hour making tally marks. 'Click (close window)'. 'Click (open email)'. You feel your will to live draining away. The boss happily files it." 
            },
            { 
                t: "Enter fantasy data", 
                m: 10, f: 10, a: -5, c: -10,
                r: "You simply write '1000 clicks' and 'Reason: World Domination'. The boss just skims it. 'Very good. Numbers are important.' Hopefully, he never reads it closely." 
            },
            { 
                t: "Refuse: 'That costs more time than it saves!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 0, c: 20,
                r: "'Arguments? I see you're blocking progress.' He angrily takes the papers back. That'll cost you points in the annual review." 
            }
        ]
    },
    {
        id: "rep_ceo_nemesis_1",
		char: "Dr. Wichtig",
        title: "The Termination",
        reqRep: { "Dr. Wichtig": -60 },
        text: "Dr. Wichtig places a piece of paper on your desk. 'The immediate termination. Already signed. I just need to fill in the date. Give me ONE reason why I shouldn't do it right now. And don't tell me 'competence'.' He pulls out his fountain pen.",
        opts: [
            { 
                t: "Threat: 'Without me, this place burns down.'", 
                next: "path_ceo_sabotage",
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: -10, c: 15,
                r: "You laugh in his face. 'Who's going to fix the Wi-Fi? Kevin? Good luck.' The boss turns red. 'Are you threatening me?! We'll see about that!'" 
            },
            { 
                t: "Submission: 'I'll do anything! Even the dishes!'", 
                next: "path_ceo_slave",
                rep: { "Dr. Wichtig": 15 },
                m: 5, f: -10, a: 20, c: -20,
                r: "You grovel. 'I'll change!' The boss pauses. A cruel smile appears. 'Anything? Hmm. Well, that's an offer.'" 
            },
            { 
                t: "Bluff: 'I know your browser history.'", 
                next: "path_ceo_blackmail",
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 5, a: -5, c: 5,
                r: "He freezes. The fountain pen hovers over the paper. 'That... is a bluff.' You remain silent and smile knowingly. He slowly puts the pen away. 'We need to talk.'" 
            }
        ]
    },
    {
        id: "rep_ceo_nemesis_2a",
		char: "Dr. Wichtig",
        title: "The Stress Test",
        reqRep: { "Dr. Wichtig": -80 },
        reqStory: "path_ceo_sabotage",
        text: "The boss storms in and yanks the main network cable from the wall. Sparks fly. 'Alright, Mr. Super-Admin! If you're so indispensable: Fix this in 5 minutes! Otherwise, you're out!' He starts the timer.",
        opts: [
            { 
                t: "Repair (Under Pressure)", 
                m: 10, f: -20, a: 10, c: -10,
                r: "You crimp the cable with trembling hands. 'Done!' The boss checks the internet. It works. 'Hm. Lucky break. Carry on.' You still have your job, but your nerves are shot." 
            },
            { 
                t: "Sabotage: 'Oops, broken.'", 
                rep: { "Dr. Wichtig": -20 },
                m: 2, f: 0, a: -20, c: 30,
                r: "You just cut the cable. 'Well. Total loss. Guess we need external help.' The boss screams: 'GET OUT!' But he can't fire you as long as the system is up. A dangerous game." 
            },
            { 
                t: "Call Kevin", 
                rep: { "Kevin": -10, "Dr. Wichtig": 5 },
                m: 5, f: 5, a: -5, c: -5,
                r: "'Kevin! Lesson time!' Kevin fixes the cable. You stand by, nodding importantly. The boss mutters: 'At least he can delegate.' You're saved." 
            }
        ]
    },
    {
        id: "rep_ceo_nemesis_2b",
		char: "Dr. Wichtig",
        title: "The Lackey",
        reqRep: { "Dr. Wichtig": -50 },
        reqStory: "path_ceo_slave",
        text: "Dr. Wichtig calls you via bell (he now has a bell for you). 'Müller! My shoes are dusty. And after that, sort my business cards by zip code. Chop chop! Show some gratitude!'",
        opts: [
            { 
                t: "Shine shoes & Smile", 
                rep: { "Dr. Wichtig": 20 },
                m: 30, f: -10, a: 30, c: -30,
                r: "You kneel down. It's the lowest point of your career. But the boss pats your head. 'Good Müller. Termination is off the table for now.' Your radar is safe, your pride is dead." 
            },
            { 
                t: "Refuse: 'I'm an IT admin!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: -10, c: 20,
                r: "You throw away the cloth. 'Over my dead body!' The boss turns icy. 'Then get back to your PC. But I'm watching you!'" 
            },
            { 
                t: "Sabotage: 'Accidentally' spit on them", 
                rep: { "Dr. Wichtig": -30 },
                m: 5, f: 0, a: -20, c: 40,
                r: "You spit on his expensive leather slipper. 'Oh! Just wanted to polish it!' The boss kicks at you. 'GET OUT!'" 
            }
        ]
    },
    {
        id: "rep_ceo_nemesis_2c",
		char: "Dr. Wichtig",
        title: "The Hush Money",
        reqRep: { "Dr. Wichtig": -70 },
        reqStory: "path_ceo_blackmail",
        text: "The boss comes into your office and closes the door. He places an envelope on the table. 'Müller. I don't know what you think you know. But here's 50 euros for food. We forget about the termination, and you forget... the history.'",
        opts: [
            { 
                t: "Take money (Truce)", 
                rep: { "Dr. Wichtig": 10 },
                m: 5, f: 5, a: -15, c: -10,
                r: "You take the envelope. 'What history, boss?' He breathes a sigh of relief. 'Good. Carry on.' You have a dirty secret. (Crisis averted)." 
            },
            { 
                t: "Decline: 'I want a new chair.'", 
                rep: { "Dr. Wichtig": -5 },
                m: 10, f: 0, a: -5, c: 10,
                r: "'You're greedy, Müller.' He makes a note. 'Chair ordered. But woe betide if you talk!' You won, but he hates you for it." 
            },
            { 
                t: "Raise the bluff: 'That's not enough.'", 
                rep: { "Dr. Wichtig": -15 },
                m: 5, f: 0, a: -5, c: 30,
                r: "He slams his fist on the table. 'That's enough! I won't be blackmailed! I'll have IT scrutinized!' Oops. Pushed it too far." 
            }
        ]
    },
    {
        id: "rep_ceo_filler_good_1",
		char: "Dr. Wichtig",
        title: "Buzzword Bingo",
        reqRep: { "Dr. Wichtig": 10 }, 
        text: "The boss stops you in the hallway. 'Müller! I read in a magazine about 'Hyper-Agile Cloud Synergizing'. We need that too! Are our servers already hyper-agile?'",
        opts: [
            { 
                t: "Play along: 'Of course, boss. Fully synergistic.'", 
                rep: { "Dr. Wichtig": 10 },
                m: 5, f: -5, a: -5, c: -5, 
                r: "He nods gravely. 'Excellent. I knew I could count on you. Carry on!' He walks away satisfied. You did nothing, but scored points." 
            },
            { 
                t: "Correct: 'That makes no technical sense.'", 
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 5, c: 5, 
                r: "His smile disappears. 'You just don't think visionarily enough, Müller. Always these naysayers.' He turns away." 
            },
            { 
                t: "Confuse: 'Only if we use blockchain.'", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: 5, a: -5, c: 0, 
                r: "His eyes widen. 'Blockchain! Brilliant! Note that down for the next All-Hands meeting!' He's thrilled, but you've potentially created more work for yourself." 
            }
        ]
    },
    {
        id: "rep_ceo_filler_good_2",
		char: "Dr. Wichtig",
        title: "Private IT Support",
        reqRep: { "Dr. Wichtig": 30 }, 
        text: "Dr. Wichtig calls you into his office. He looks desperate. 'Müller, utmost discretion. My golf app on my private iPad is no longer syncing with my Rolex. This is an emergency!'",
        opts: [
            { 
                t: "Fix: 'One restart, boss.'", 
                rep: { "Dr. Wichtig": 15 },
                m: 15, f: -10, a: -5, c: -10, 
                r: "You solve the problem in two minutes. The boss sighs in relief. 'You're my savior. My handicap was in danger!' You're his secret hero." 
            },
            { 
                t: "Dismiss: 'I'm only responsible for company hardware.'", 
                rep: { "Dr. Wichtig": -10 },
                m: 2, f: 0, a: 5, c: 15, 
                r: "He stares at you. 'I AM the company, Müller!' He angrily taps on the iPad himself. Not a good idea." 
            },
            { 
                t: "Demand a favor: 'That'll cost you.'", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: 5, a: 0, c: 0, 
                r: "You demand an extra day off. He grumbles. 'Outrageous. But fine.' He respects your negotiation skills." 
            }
        ]
    },
    {
        id: "rep_ceo_filler_bad_1",
		char: "Dr. Wichtig",
        title: "Micromanagement",
        reqRep: { "Dr. Wichtig": -10 }, 
        text: "The boss stands silently behind your chair, watching you type. After two minutes, he clears his throat. 'You're not using your pinky finger for the Shift key. That's inefficient.'",
        opts: [
            { 
                t: "Endure & Nod", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: -5, a: 15, c: 0, 
                r: "You force a smile. 'I'll practice, boss.' He patronizingly pats your shoulder and leaves. You're seething inside." 
            },
            { 
                t: "Snappy: 'This is how I work best.'", 
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -5, c: 10, 
                r: "'Resistant to advice!', he snorts. 'That's why we're not making progress in Germany.' He makes a note on his clipboard." 
            },
            { 
                t: "Demonstratively Google 10-finger system", 
                m: 5, f: 5, a: 0, c: 0, 
                r: "You open a typing tutorial. He watches briefly. 'See? Further education on the job.' He's satisfied, you lose time." 
            }
        ]
    },
    {
        id: "rep_ceo_filler_bad_2",
		char: "Dr. Wichtig",
        title: "The Spontaneous Speech",
        reqRep: { "Dr. Wichtig": -30 }, 
        text: "You're on your way to the restroom. The boss stops you. 'Müller! Good thing I caught you. I need a sounding board.' He gives a 20-minute monologue about the 'philosophy of agile hot beverages'.",
        opts: [
            { 
                t: "Listen & Applaud", 
                rep: { "Dr. Wichtig": 10 },
                m: 25, f: 10, a: 5, c: -5, 
                r: "You lose half an hour of work time, but the boss feels like Steve Jobs. 'Good talk, Müller!'" 
            },
            { 
                t: "Interrupt: 'My server is burning!'", 
                rep: { "Dr. Wichtig": -10 },
                m: 5, f: 0, a: -5, c: 15, 
                r: "You lie to escape. 'Always these excuses,' he mutters, offended, and lets you go. That'll cost you points on the radar." 
            },
            { 
                t: "Wordlessly sneak away", 
                rep: { "Dr. Wichtig": -5 },
                m: 2, f: 0, a: -10, c: 10, 
                r: "While he closes his eyes to form a thought, you quietly turn into the hallway. He only notices later, but is too proud to admit it." 
            }
        ]
    },
    // === FRAU ELSTER: THE GUARDIAN OF NUMBERS ===
    {
        id: "rep_elster_story_1",
		char: "Frau Elster",
        title: "The Inventory",
        reqRep: { "Frau Elster": 60 },
        text: "Frau Elster stands with a magnifying glass at the coffee machine. 'The coffee bean ratio does not comply with DIN-404. This is waste!' She pulls out her black notebook. You notice fine white hairs on her otherwise perfect blazer.",
        opts: [
            { 
                t: "Observe: 'Are those cat hairs?'", 
                next: "path_elster_cat",
                rep: { "Frau Elster": 15 },
                m: 15, f: 5, a: 5, c: 0, 
                r: "She freezes. Her face softens. 'That's Rüdiger. He sheds so much in winter.' She immediately shows you 50 photos on her phone. You listen patiently. Ice broken." 
            },
            { 
                t: "Bureaucratic: 'I'll fill out Form 7B.'", 
                next: "path_elster_frame",
                rep: { "Frau Elster": 5 },
                m: 10, f: -5, a: 10, c: -5, 
                r: "She nods approvingly. 'Good. Finally someone who understands processes. Come to my office later, I have a... technical matter.'" 
            },
            { 
                t: "Annoyed: 'Don't you have any hobbies?'", 
                next: "path_elster_audit",
                rep: { "Frau Elster": -15 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "She glares at you icily. 'My hobby is efficiency. And I believe I just found an inefficiency in your personnel file.' She notes your name in red." 
            }
        ]
    },
    {
        id: "rep_elster_story_2a",
		char: "Frau Elster",
        title: "Finale: The Red Pen",
        reqRep: { "Frau Elster": 80 },
        reqStory: "path_elster_cat",
        text: "Big budget meeting. Frau Elster sits like a judge at the table. She holds her red pen threateningly over the 'IT Department' line. She looks at you. Your existence (and your new server) is at stake.",
        opts: [
            { 
                t: "Ask about Rüdiger", 
                loot: "cat_pic", 
                rep: { "Frau Elster": 20, "Dr. Wichtig": 5 },
                m: 5, f: 0, a: -20, c: -10, 
                r: "You ask loudly: 'Did Rüdiger handle the diet well?' She sighs theatrically. 'Oh, he's suffering so much!' She strikes the marketing budget instead. 'IT is essential.' She secretly slips you a photo of Rüdiger. (Item received!)" 
            },
            { 
                t: "Blackmail: 'I know about your private calls!'", 
                rep: { "Frau Elster": -30, "Dr. Wichtig": -10 },
                m: 10, f: 0, a: 30, c: 20, 
                r: "Her gaze turns deadly. 'Allegations? I'll initiate a compliance procedure immediately.' She cuts your budget completely. The boss nods at her. That backfired." 
            },
            { 
                t: "Plead: 'We need the money!'", 
                rep: { "Frau Elster": -5 },
                m: 10, f: 0, a: 10, c: 0, 
                r: "She shrugs. 'Numbers don't lie. And your numbers are weak.' She cuts it by 20%. Well." 
            }
        ]
    },
    {
        id: "rep_elster_story_2b",
		char: "Frau Elster",
        title: "Finale: Confidential Matter",
        reqRep: { "Frau Elster": 70 },
        reqStory: "path_elster_frame",
        text: "Frau Elster waves you into her office and closes the blinds. 'This stays between us. My digital picture frame... it's no longer showing Rüdiger. If I don't see Rüdiger, I become... unpleasant. This is an unauthorized private device. Help me.'",
        opts: [
            { 
                t: "Help: 'Formatting fixed. There he is again.'", 
                rep: { "Frau Elster": 15 },
                m: 20, f: -5, a: 10, c: -5, 
                r: "Rüdiger appears in HD. Frau Elster smiles (it looks creepy). 'He's so majestic. Thank you. I will review your next expense report... favorably.'" 
            },
            { 
                t: "Decline: 'Private hardware is forbidden.'", 
                rep: { "Frau Elster": -10 },
                m: 5, f: 0, a: 5, c: -5, 
                r: "She turns red. 'Get out! And forget about the budget for the new printer.' You stuck to the rules, but created a powerful enemy." 
            },
            { 
                t: "Gossip: 'Is the cat a bit... fat?'", 
                rep: { "Frau Elster": -20 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "Dead silence. 'Rüdiger is fluffy, not fat!' She throws you out. That was a fatal mistake." 
            }
        ]
    },
    {
        id: "rep_elster_story_2c",
		char: "Frau Elster",
        title: "Finale: The Special Audit",
        reqRep: { "Frau Elster": 50 },
        reqStory: "path_elster_audit",
        text: "You walk into the office. Frau Elster is sitting in YOUR chair. 'Good morning. Due to your disrespectful behavior, I am conducting a spontaneous inventory of your office supplies. Where are the 3 ballpoint pens from Q1 2023?'",
        opts: [
            { 
                t: "Apologize & get coffee", 
                rep: { "Frau Elster": 5 },
                m: 15, f: -5, a: 10, c: 0, 
                r: "You grovel. 'I'm sorry.' She sips her coffee. 'Alright. I'll leave it at a warning. But my eyes are everywhere.'" 
            },
            { 
                t: "Counter: 'Don't you have a hair appointment?'", 
                rep: { "Frau Elster": -20, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 30, c: 20, 
                r: "That was too much. She writes a report for 'insubordination'. The boss summons you later. You now have war on two fronts." 
            },
            { 
                t: "Escape: 'Fire alarm!' (Press button)", 
                m: 5, f: 5, a: 0, c: 30, 
                r: "You trigger the alarm to escape the situation. Expensive, stupid, but effective. Frau Elster runs out (with the file folder)." 
            }
        ]
    },
    {
        id: "rep_elster_simple_good_1",
		char: "Frau Elster",
        title: "The Cent Crime",
        reqRep: { "Frau Elster": 20 },
        text: "Frau Elster stands in the hallway, completely distraught. She's tearing her hair out (a strand has come loose!). 'Müller! The petty cash! 0.02 euros are missing! I've counted it three times. If the balance isn't right, I can't sleep!'",
        opts: [
            { 
                t: "Tech Solution: 'I'll write a search script.'", 
                next: "path_elster_excel",
                rep: { "Frau Elster": 10 },
                m: 15, f: -5, a: 10, c: -5,
                r: "You open Excel. 'Let me take a look.' She watches over your shoulder, breathing heavily. 'Be careful with the macros!'" 
            },
            { 
                t: "Pragmatic: 'Here's 2 cents.'", 
                next: "path_elster_coin",
                m: 2, f: 5, a: -5, c: 5, 
                r: "You rummage in your pocket and hold out a coin to her. She stares at the coin as if it were radioactive. 'You want to... just balance it out? Without a receipt?'" 
            },
            { 
                t: "Distract: 'What would Rüdiger do?'", 
                next: "path_elster_chill",
                rep: { "Frau Elster": 5 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "Her gaze softens. 'Rüdiger? He'd kick the coin under the sofa.' She smiles dreamily. 'He's such a little rebel.'" 
            }
        ]
    },
    {
        id: "rep_elster_simple_good_2a",
		char: "Frau Elster",
        title: "Excel Magic",
        reqRep: { "Frau Elster": 40 },
        reqStory: "path_elster_excel",
        text: "Frau Elster beams at you. 'You found it! A rounding error in cell Z99! That's... beautiful. I've never seen anyone use VLOOKUP so elegantly.'",
        opts: [
            { 
                t: "Humble: 'Data never lies.'", 
                loot: "energy",
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: -5, c: -5, 
                r: "'Here, take this energy drink. I confiscated it from Kevin. You need fuel for that brain.' (Inventory +1)" 
            },
            { 
                t: "Exaggerate: 'Call me the number whisperer.'", 
                rep: { "Frau Elster": 10 },
                m: 2, f: 5, a: -5, c: 0, 
                r: "She giggles (!). 'Don't exaggerate. But yes, you have talent. Maybe you should switch to controlling?' For God's sake, no." 
            },
            { 
                t: "Send bill: 'That'll be 50 euros consulting fee.'", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: 5, c: 10, 
                r: "Her smile disappears. 'Humor is inappropriate in accounting.' She goes back to work. Mood killed." 
            }
        ]
    },
    {
        id: "rep_elster_simple_good_2b",
		char: "Frau Elster",
        title: "Booking Entry",
        reqRep: { "Frau Elster": 30 },
        reqStory: "path_elster_coin",
        text: "Frau Elster comes to you with a form. 'I've booked your 2 cents as 'Extraordinary Income from Employee Donation'. Here's the receipt. Thank you. But never do that again, it messes up my spreadsheets.'",
        opts: [
            { 
                t: "Apologize: 'It won't happen again.'", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: -5, c: -5, 
                r: "She nods sternly. 'Good. Order must prevail. Even in chaos.' She files the receipt. You feel strangely reprimanded, but she likes you." 
            },
            { 
                t: "Joke: 'Deduct it from taxes.'", 
                rep: { "Frau Elster": 2 },
                m: 2, f: 5, a: 0, c: 0, 
                r: "She sighs. 'Tax law is no joke, Müller.' But she smiles slightly. She secretly appreciates your pragmatic approach." 
            },
            { 
                t: "Eat receipt", 
                rep: { "Frau Elster": -10 },
                m: 2, f: -5, a: -10, c: 10, 
                r: "You put the note in your mouth. Elster screams: 'THAT WAS A DOCUMENT!' She runs away to make a duplicate. You freak." 
            }
        ]
    },
    {
        id: "rep_elster_simple_good_2c",
		char: "Frau Elster",
        title: "Cat Content",
        reqRep: { "Frau Elster": 40 },
        reqStory: "path_elster_chill",
        text: "Frau Elster has forgotten the 2 cents. Instead, she shows you a video on her phone. 'Look. Rüdiger shredded a box yesterday. Isn't that pure joy of life? I wish I were that wild.'",
        opts: [
            { 
                t: "Agree: 'A magnificent cat.'", 
                rep: { "Frau Elster": 10 },
                m: 10, f: 10, a: 5, c: 0, 
                r: "She beams. 'Yes, isn't he? Thanks for listening. The others don't understand.' You now have a good standing with accounting." 
            },
            { 
                t: "Gossip: 'Better than Kevin at work.'", 
                rep: { "Frau Elster": 5, "Kevin": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "She laughs. 'Oh yes! Rüdiger is much more competent.' You gossip about interns for 5 minutes. That connects you." 
            },
            { 
                t: "Back to work: 'I have to go.'", 
                m: 2, f: -5, a: 5, c: -5, 
                r: "She looks disappointed. 'Oh, I see. Yes, of course. Duty calls.' The magical moment is over." 
            }
        ]
    },
    {
        id: "rep_elster_simple_bad_1",
		char: "Frau Elster",
        title: "The Missing Receipt",
        reqRep: { "Frau Elster": -20 },
        text: "Frau Elster blocks your way. She waves a file folder. 'Müller! Your travel expense report from 2019 is missing a parking ticket for 1.50 euros! That's tax fraud! If you don't provide it by noon, I'll initiate a special audit!'",
        opts: [
            { 
                t: "Aggression: Throw change at her feet", 
                next: "path_elster_coins",
                rep: { "Frau Elster": -10 },
                m: 5, f: 0, a: -5, c: 5,
                r: "You rummage in your pocket and throw 2 euros at her feet. 'There! Keep the change!' She stares horrified at the coins on the floor. 'That... is bribery! And disrespect!'" 
            },
            { 
                t: "Tech Solution: Forge receipt", 
                next: "path_elster_fake",
                m: 10, f: 5, a: 5, c: 0, 
                r: "You go to your PC, open Photoshop, and in 5 minutes, create a deceptively real parking ticket. 'Here, by email.' You feel clever." 
            },
            { 
                t: "Submission: 'I'll search the basement archive!'", 
                next: "path_elster_dust",
                rep: { "Frau Elster": 5 },
                m: 30, f: -10, a: 20, c: 0,
                r: "You spend 30 minutes in the dusty archive. You cough, sweat, and search for a scrap of paper from 5 years ago. Frau Elster waits upstairs with crossed arms." 
            }
        ]
    },
    {
        id: "rep_elster_simple_bad_2a",
		char: "Frau Elster",
        title: "The Warning",
        reqRep: { "Frau Elster": -40 },
        reqStory: "path_elster_coins",
        text: "An official letter lies on your desk. 'Reprimand for improper handling of funds and endangering workplace peace.' Frau Elster stands in the doorway, smiling coldly. 'Order must prevail, Mr. Müller.'",
        opts: [
            { 
                t: "Tear up letter", 
                m: 2, f: 0, a: 5, c: 5,
                r: "You tear up the paper. Elster doesn't even flinch. 'The original is safely in the vault. That was just the copy for your file.' She won." 
            },
            { 
                t: "Revenge: Hide her stapler", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You sneak into her office and place her stapler on top of the cabinet. She's short. She'll never reach it. A childish, but sweet victory." 
            },
            { 
                t: "Feigned apology", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "'I'm sorry.' She nods graciously. 'Insight is the first step to improvement.' You clench your fist in your pocket." 
            }
        ]
    },
    {
        id: "rep_elster_simple_bad_2b",
		char: "Frau Elster",
        title: "CSI: Accounting",
        reqRep: { "Frau Elster": -30 },
        reqStory: "path_elster_fake",
        text: "Frau Elster comes to your desk with a magnifying glass. She has your printed fake receipt with her. 'Strange. The paper feels too new for 2019. And the font... is that Arial 11 or 11.5? I'll have it tested in the lab.'",
        opts: [
            { 
                t: "Panic: 'Spill coffee on it'", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: 10, c: 5,
                r: "You 'accidentally' knock over your cup. The receipt is ruined. 'Oops!' Elster screams: 'Destruction of evidence!' But she can't prove anything anymore." 
            },
            { 
                t: "Gaslighting: 'You need new glasses.'", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "'That's standard thermal paper, Frau Elster. Are your eyes getting worse?' She blinks uncertainly. 'Perhaps...'" 
            },
            { 
                t: "Avoid confession & flee",
                m: 2, f: 5, a: 0, c: 0, 
                r: "'Server emergency!' You run away. She stands there, still analyzing the pixels. Narrow escape." 
            }
        ]
    },
    {
        id: "rep_elster_simple_bad_2c",
		char: "Frau Elster",
        title: "Paperwork",
        reqRep: { "Frau Elster": -30 },
        reqStory: "path_elster_dust",
        text: "You triumphantly place the crumpled, dusty parking ticket on her desk. 'Here! 1.50 euros! Are you satisfied now?' Frau Elster takes it with pinched fingers. 'It's creased. And there's a coffee stain. I'll have to iron it before I file it.'",
        opts: [
            { 
                t: "Offer: 'Should I iron it?' (Slave)", 
                rep: { "Frau Elster": 10 },
                m: 10, f: -10, a: 15, c: 0,
                r: "You stand in the break room, ironing a receipt. Your colleagues laugh at you. Elster nods contentedly: 'Very neat, Müller.'" 
            },
            { 
                t: "Yell: 'JUST FILE IT!'", 
                rep: { "Frau Elster": -5, "Dr. Wichtig": -2 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "You lose your temper. She flinches. 'No need for that tone.' She punches a hole in it (crooked). Petty revenge." 
            },
            { 
                t: "Comment: 'Rüdiger would eat it.'", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You play the cat card. She smiles briefly. 'Yes... Rüdiger loves paper.' The situation is defused." 
            }
        ]
    },
    {
        id: "rep_elster_nemesis_1",
		char: "Frau Elster",
        title: "The Budget Embargo",
        reqRep: { "Frau Elster": -60 },
        text: "An email from Frau Elster (CC: Boss, HR, Janitor): 'Due to chaotic conditions in IT, the budget is frozen until further notice. Every pencil must be requested individually from me (Form 12-B, triplicate).'",
        opts: [
            { 
                t: "Malicious Compliance: 'I'll send her ALL logs!'", 
                next: "path_elster_spam",
                rep: { "Frau Elster": -10 },
                m: 20, f: -10, a: -5, c: 5,
                r: "You print out the server logs from the last 10 years. 5000 pages. 'Here, for your review.' She's buried under paper. This is a declaration of war." 
            },
            { 
                t: "Rebellion: 'Then we'll just steal office supplies.'", 
                next: "path_elster_theft",
                rep: { "Frau Elster": -20 },
                m: 5, f: 0, a: 10, c: 10, 
                r: "You organize a raid on the supply closet. Toner, paper, staplers. 'Self-service!', you shout. This is anarchy." 
            },
            { 
                t: "Submission: 'I'll fill out the forms...'", 
                next: "path_elster_forms",
                rep: { "Frau Elster": 15 }, 
                m: 30, f: -20, a: 20, c: 0,
                r: "You sit there for 30 minutes filling out forms for an eraser. Frau Elster stands next to you, timing it. 'Write more legibly!'" 
            }
        ]
    },
    {
        id: "rep_elster_nemesis_2a",
		char: "Frau Elster",
        title: "Needle in a Haystack",
        reqRep: { "Frau Elster": -80 },
        reqStory: "path_elster_spam",
        text: "Frau Elster comes into your office. She looks tired, but triumphant. 'I read your 5000 pages. On page 4021, line 12, you ordered a mouse in 2018 but never inventoried it. That's embezzlement. I'm calling the audit department.'",
        opts: [
            { 
                t: "Redemption: 'I'm an idiot! My mistake!'", 
                rep: { "Frau Elster": 30, "Dr. Wichtig": -10 }, 
                m: 10, f: 0, a: 10, c: 20, 
                r: "You grovel. 'I lost it! I'm unworthy!' You pay for the mouse privately. She nods graciously. 'Insight is the first step.' Charges dropped." 
            },
            { 
                t: "Deny: 'Printing error.'", 
                rep: { "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 20, c: 30, 
                r: "She doesn't believe you. The matter lands with the boss. That will forever be in your file." 
            },
            { 
                t: "Counterattack: 'You read my logs? Data privacy!'", 
                m: 10, f: 0, a: 0, c: 10, 
                r: "Stalemate. She hesitates. 'We'll keep an eye on each other, Müller.' The Cold War continues." 
            }
        ]
    },
    {
        id: "rep_elster_nemesis_2b",
		char: "Frau Elster",
        title: "Bag Check",
        reqRep: { "Frau Elster": -80 },
        reqStory: "path_elster_theft",
        text: "Frau Elster and security stand at the exit. 'Bag check! We're missing 5 packs of copy paper.' Your bag is suspiciously square.",
        opts: [
            { 
                t: "Redemption: Return everything & add a donut", 
                rem: "donut",
                rep: { "Frau Elster": 25 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You unpack. And add your snack as 'interest'. 'I had... a weak moment.' She takes the chocolate. 'Alright. I'll forget about this. Just this once.'" 
            },
            { 
                t: "Flee: Run!", 
                m: 2, f: 10, a: -5, c: 50, 
                r: "You sprint past the doorman. You escape, but you're now officially a criminal in your own house." 
            },
            { 
                t: "Blame Kevin", 
                rep: { "Kevin": -20 },
                m: 5, f: 5, a: -10, c: 0, 
                r: "'Kevin planted it on me!' They don't really believe you, but Kevin is interrogated. You're a terrible colleague." 
            }
        ]
    },
    {
        id: "rep_elster_nemesis_2c",
		char: "Frau Elster",
        title: "Form Error",
        reqRep: { "Frau Elster": -50 },
        reqStory: "path_elster_forms",
        text: "Frau Elster returns with your applications. All are marked in red. 'You signed with a blue pen. The rule is black (document authenticity). Everything again. And staple straight this time.'",
        opts: [
            { 
                t: "Obedience: 'Yes, Frau Elster.'", 
                rep: { "Frau Elster": 20 },
                m: 45, f: -20, a: 30, c: -10,
                r: "You rewrite everything. 45 minutes of life wasted. She checks it. 'Better. Budget for a pencil is approved.' You won, but at what cost?" 
            },
            { 
                t: "Outburst: Eat paper", 
                rep: { "Dr. Wichtig": -5 },
                m: 2, f: 0, a: -10, c: 20, 
                r: "You stuff the application in your mouth. She stares at you horrified. 'You're an animal.' She backs out. You have peace, but a paper taste in your mouth." 
            },
            { 
                t: "Cry", 
                rep: { "Frau Elster": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "You break down. 'I can't take it anymore!' She looks embarrassed. 'Alright. I... I'll turn a blind eye. Take the blue pen.' Pity works." 
            }
        ]
    },
    {
        id: "rep_elster_filler_good_1",
		char: "Frau Elster",
        title: "The Penny-Pincher",
        reqRep: { "Frau Elster": 10 }, 
        text: "Frau Elster scrutinizes you at the printer. 'I saw in the logs that you print your manuals double-sided and in grayscale by default. Exemplary.'",
        opts: [
            { 
                t: "Agree: 'Environmental protection and cost control.'", 
                rep: { "Frau Elster": 10 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "A rare, genuine smile crosses her face. 'If only marketing thought that way too. Keep it up.' You're on a good path." 
            },
            { 
                t: "Truth: 'Color is empty anyway.'", 
                rep: { "Frau Elster": 2 },
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Pragmatism born of necessity. Acceptable.' She returns to her files." 
            },
            { 
                t: "Boast: 'I only use half sheets too.'", 
                rep: { "Frau Elster": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She raises an eyebrow. 'Sarcasm. How regrettable.' You ruined the good mood." 
            }
        ]
    },
    {
        id: "rep_elster_filler_good_2",
		char: "Frau Elster",
        title: "New Toy",
        reqRep: { "Frau Elster": 30 }, 
        text: "Frau Elster holds a small, glittering object in her hand. 'Mr. Müller. Look. A new collar for Rüdiger. With a GPS tracker. Can you set up the app on my phone?'",
        opts: [
            { 
                t: "Help: 'Sure, show me.'", 
                rep: { "Frau Elster": 15 },
                m: 15, f: -5, a: -5, c: 0, 
                r: "You set up the app. Rüdiger is currently in the kitchen. Frau Elster is delighted. 'You're a treasure, Mr. Müller.'" 
            },
            { 
                t: "Express data privacy concerns", 
                rep: { "Frau Elster": -5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "'The servers are in China, Frau Elster.' She snatches the collar away. 'Rüdiger has nothing to hide!' Topic closed." 
            },
            { 
                t: "Delegate: 'Kevin will do that.'", 
                rep: { "Frau Elster": -2 },
                m: 2, f: 10, a: 0, c: 0, 
                r: "She wrinkles her nose. 'I don't trust Rüdiger's data to that intern. Fine, then.' You saved yourself work, but didn't earn any points." 
            }
        ]
    },
    {
        id: "rep_elster_filler_bad_1",
		char: "Frau Elster",
        title: "Stapler Inspection",
        reqRep: { "Frau Elster": -10 }, 
        text: "Frau Elster stands in front of your desk, holding up your stapler. 'Inventory number 402-A. It belongs in room 12. Why is it on your desk?'",
        opts: [
            { 
                t: "Apologize & return", 
                rep: { "Frau Elster": 5 },
                m: 10, f: -5, a: 10, c: 0, 
                r: "You stand up and personally carry the stapler two rooms over. Frau Elster nods. 'Order must prevail.' Your patience is tested." 
            },
            { 
                t: "Argue: 'I've always had it!'", 
                rep: { "Frau Elster": -10 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "'Customary law does not exist here!' She rigorously confiscates the stapler. You now have to fold your papers." 
            },
            { 
                t: "Simply ignore", 
                rep: { "Frau Elster": -5 },
                m: 2, f: 5, a: -5, c: 5, 
                r: "You just keep typing. She snorts, takes the stapler, and adds you to her blacklist." 
            }
        ]
    },
    {
        id: "rep_elster_filler_bad_2",
		char: "Frau Elster",
        title: "The Stopwatch",
        reqRep: { "Frau Elster": -30 }, 
        text: "You return to your desk with a coffee. Frau Elster demonstratively presses a stopwatch. '7 minutes and 43 seconds for a hot beverage. The guideline for screen breaks is 5 minutes.'",
        opts: [
            { 
                t: "Justify: 'The machine had to heat up.'", 
                rep: { "Frau Elster": 2 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "She makes a note. 'Technical failure. Acceptable, but borderline.' You feel like you're in prison." 
            },
            { 
                t: "Outburst: 'I also work after 4:30 PM!'", 
                rep: { "Frau Elster": -10, "Dr. Wichtig": 5 },
                m: 5, f: -5, a: 20, c: 5, 
                r: "You get loud. She doesn't even flinch. 'Unpaid overtime is a compliance risk. I'll report it to HR.'" 
            },
            { 
                t: "Chug coffee and immediately work", 
                rep: { "Frau Elster": 10 },
                m: 2, f: -10, a: 15, c: -5, 
                r: "You swallow the hot coffee in one gulp. It burns your tongue, but she's satisfied. 'Exemplary.'" 
            }
        ]
    },
    // === MARKUS: THE CLOSER ===
    {
        id: "rep_markus_story_1",
		char: "Markus",
        title: "Markus in Attack Mode",
        reqRep: { "Markus": 60 },
        text: "Markus stops you and adjusts his tie. 'Müller! Good thing I saw you. I'm off to the major client soon. I need admin rights to bypass the firewall. The client wants to see our 'Cloud AI' (which we don't even have). Build me something!'",
        opts: [
            { 
                t: "Accomplice: 'I'll build you an HTML dummy.'", 
                next: "path_markus_success",
                rep: { "Markus": 15 },
                m: 20, f: -10, a: -10, c: 10, 
                r: "You quickly hack together a website that blinks and displays 'Loading Data...'. Markus slaps you hard on the back. 'Good man! That's mindset! See you on the yacht!'" 
            },
            { 
                t: "Blocker: 'Security risk. No.'", 
                next: "path_markus_failure",
                rep: { "Markus": -10 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "Markus snorts contemptuously. 'Typical IT. Naysayers! Because of people like you, Germany isn't making sales!' He storms off angrily." 
            },
            { 
                t: "Sarcasm: 'Why don't you sell him Excel as AI?'", 
                next: "path_markus_joke",
                rep: { "Markus": 5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "Markus pauses. His eyes light up. 'Excel... with macros? That's brilliant! 'Quantum Sheets'! Thanks, Müller!' He runs off. Oh no." 
            }
        ]
    },
    {
        id: "rep_markus_story_2a",
		char: "Markus",
        title: "Finale: Commission",
        reqRep: { "Markus": 80 },
        reqStory: "path_markus_success",
        text: "Markus comes into your office. He's wearing sunglasses (indoors). 'Müller. They signed. 10 million volume. The client was thrilled with the loading bar. I'm getting a bonus you could buy a house with.' He places a heavy bottle on the table.",
        opts: [
            { 
                t: "Accept the bottle", 
                loot: "scotch_bottle", 
                rep: { "Markus": 20 },
                m: 5, f: -20, a: -30, c: -20, 
                r: "It's a 30-year-old single malt. 'For the nerves,' Markus winks. 'We understand each other.' You're now part of the 'Inner Circle'. (Item received!)" 
            },
            { 
                t: "Ask for a share: 'I want 10%.'", 
                rep: { "Markus": -10 },
                m: 10, f: 0, a: 20, c: 10, 
                r: "Markus laughs coldly. 'Don't overdo it, typist. Be glad you even work here.' He takes the bottle back. Greed is punished." 
            },
            { 
                t: "Decline: 'I'm just doing my job.'", 
                rep: { "Markus": 5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "Markus shrugs. 'Your loss. More for me.' He walks away shaking his head. You have your integrity, but no whiskey." 
            }
        ]
    },
    {
        id: "rep_markus_story_2b",
		char: "Markus",
        title: "Finale: Lost Profit",
        reqRep: { "Markus": 50 },
        reqStory: "path_markus_failure",
        text: "Markus storms in. He slams his briefcase on your desk. 'The client canceled. He wanted to see innovation, I could only show him security protocols. Do you know what you just cost the company?!'",
        opts: [
            { 
                t: "Counter: 'I saved us from a lawsuit.'", 
                rep: { "Dr. Wichtig": 5, "Markus": -5 },
                m: 10, f: 0, a: 10, c: -5, 
                r: "'Pff. Lawyer talk. Success needs risk!' He's still angry, but your argument hits home." 
            },
            { 
                t: "Scoff: 'Well, no skill, no deal.'", 
                rep: { "Markus": -20 },
                m: 5, f: 5, a: -10, c: 10, 
                r: "That was too much. 'Watch out, Müller. The wind can change.' You now have an enemy in sales." 
            },
            { 
                t: "Apologize: 'Rules are rules.'", 
                m: 5, f: 0, a: 5, c: 0, 
                r: "Markus waves him off. 'Boring.' He leaves to bribe someone on the golf course." 
            }
        ]
    },
    {
        id: "rep_markus_story_2c",
		char: "Markus",
        title: "Finale: Quantum Sheets",
        reqRep: { "Markus": 65 },
        reqStory: "path_markus_joke",
        text: "Markus leans against the door. 'Müller! Excel was amazing! The client thought the colorful cells were neural networks. We got the contract! But now we actually have to build it. Can you teach Excel AI?'",
        opts: [
            { 
                t: "Lie: 'Sure, but it'll take 2 years.'", 
                rep: { "Markus": 10 },
                m: 5, f: 10, a: -5, c: 0, 
                r: "'Good. By then I'll be promoted anyway.' He winks. The problem is deferred to the future." 
            },
            { 
                t: "Clarify: 'That was a joke!'", 
                rep: { "Markus": -5 },
                m: 5, f: 0, a: 10, c: 5, 
                r: "'Not funny. Now I have to explain to the client why the AI crashes when you divide by zero.' He leaves, stressed." 
            },
            { 
                t: "Assign Kevin", 
                rep: { "Kevin": -10, "Markus": 5 },
                m: 5, f: 5, a: 0, c: 0, 
                r: "'Kevin will do it.' Kevin is now crying in front of a spreadsheet with 10,000 rows. Markus is satisfied." 
            }
        ]
    },
    {
        id: "rep_markus_simple_good_1",
		char: "Markus",
        title: "The Laser Emergency",
        reqRep: { "Markus": 20 },
        text: "Markus stands frantically clicking in front of you. 'Müller! My presenter is dead! I'm pitching to the board in 5 minutes! Without the laser pointer, I'm naked! Make it light up!'",
        opts: [
            { 
                t: "Help out: 'Just the batteries.'", 
                next: "path_markus_battery",
                rep: { "Markus": 10 },
                m: 5, f: -5, a: 5, c: 0, 
                r: "You toss him the USB-C adapter. He catches it casually. 'Müller, you're the MVP! I'll mention you for the commission!' (He won't, but he likes you)." 
            },
            { 
                t: "Advise: 'Use the phone app.'", 
                next: "path_markus_app",
                m: 5, f: 5, a: -5, c: 0, 
                r: "You show him the remote app. 'Modern and sustainable.' Markus stares at his phone. 'Wow. Tech voodoo. That'll impress the old-timers. Good call!'" 
            },
            { 
                t: "Negotiate: 'That'll be 5 euros express fee.'", 
                next: "path_markus_cash",
                rep: { "Markus": 5 },
                m: 2, f: 5, a: -10, c: 0,
                r: "Markus pauses and grins. 'Ah! A capitalist! I like it.' He slaps a fiver on your desk. 'Batteries. Now.'" 
            }
        ]
    },
    {
        id: "rep_markus_simple_good_2a",
		char: "Markus",
        title: "The VIP Lounge",
        reqRep: { "Markus": 40 },
        reqStory: "path_markus_battery",
        text: "Markus waves you into his office (the one with the carpet). 'The pitch was a home run! And all thanks to your batteries. Sit down. Want an espresso from my private machine? No cafeteria crap.'",
        opts: [
            { 
                t: "Accept & Chill", 
                m: 20, f: 15, a: -20, c: 0, 
                r: "The espresso is strong and good. You talk about cars for 20 minutes. You feel important. This is the good life." 
            },
            { 
                t: "Decline: 'Have to work.'", 
                rep: { "Markus": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "Markus shakes his head. 'You have the mindset of an employee, Müller. Too bad.' You go back to your gray office." 
            },
            { 
                t: "Ask for gadgets", 
                loot: "stressball",
                rep: { "Markus": 5 },
                m: 10, f: 5, a: -5, c: 0, 
                r: "'Sure! Here, take the stress ball from the last trade show. 'Squeeze the Deal'. Suits you.' (Inventory +1)" 
            }
        ]
    },
    {
        id: "rep_markus_simple_good_2b",
		char: "Markus",
        title: "Digital Native",
        reqRep: { "Markus": 40 },
        reqStory: "path_markus_app",
        text: "Markus comes to you with his tablet. 'The app was amazing! The board thought I programmed it. But now... how do I get Netflix on it? For... uh... market research?'",
        opts: [
            { 
                t: "Install (Service)", 
                m: 10, f: -5, a: 5, c: -5, 
                r: "You set it up. Markus nods contentedly. 'Discretion, Müller. We understand each other.' He winks." 
            },
            { 
                t: "Refuse: 'Company policy.'", 
                rep: { "Markus": -2 },
                m: 5, f: 0, a: 0, c: 5, 
                r: "'Oh come on, don't be a square.' He leaves disappointed. Your reputation as 'Cool IT Guy' crumbles." 
            },
            { 
                t: "Lend him your password", 
                rep: { "Markus": 15 },
                m: 5, f: 5, a: 0, c: 10,
                r: "You give him your Netflix login. 'Best man! I owe you one.' He goes to watch movies. You hope he logs out again." 
            }
        ]
    },
    {
        id: "rep_markus_simple_good_2c",
		char: "Markus",
        title: "The Side Hustle",
        reqRep: { "Markus": 40 },
        reqStory: "path_markus_cash",
        text: "Markus leans against your desk. 'You've got a good nose, Müller. I have a box of 'defective' headsets here. The company wrote them off. If you... repair them... we could sell them on eBay. 50/50?'",
        opts: [
            { 
                t: "Join in", 
                loot: "headphones",
                rep: { "Markus": 2 },
                m: 30, f: -10, a: -10, c: -10, 
                r: "You take the box. 'I'll take a look.' Markus grins. 'My partner.' You keep the best headset for yourself. (Inventory +1)" 
            },
            { 
                t: "Decline", 
                m: 2, f: 0, a: 0, c: 0, 
                r: "'Too hot for me.' Markus shrugs. 'Your loss. Risk is money.' He takes the box back." 
            },
            { 
                t: "Report him", 
                rep: { "Markus": -20, "Dr. Wichtig": 5 },
                m: 10, f: 0, a: 10, c: 5, 
                r: "You go to the boss. He's... moderately interested. 'Markus makes sales, Müller. Let him play.' Markus finds out and is furious." 
            }
        ]
    },
    {
        id: "rep_markus_simple_bad_1",
		char: "Markus",
        title: "The Phantom Feature",
        reqRep: { "Markus": -20 },
        text: "Markus storms in. He's sweating. 'Müller! I just sold 'Voice Control 3000' to the client. For the old database. The contract is signed. You have until tomorrow morning to program it. Otherwise, we're both in trouble.'",
        opts: [
            { 
                t: "Aggression: 'Are you crazy?!'", 
                next: "path_markus_bus",
                rep: { "Markus": -10 },
                m: 5, f: 0, a: -10, c: 10,
                r: "You yell at him. 'That's not technically possible!' Markus turns cold. 'Your attitude pisses me off. Then I guess I'll have to tell the client who failed here.'" 
            },
            { 
                t: "Tech Hack: Build a soundboard", 
                next: "path_markus_demo",
                m: 15, f: 5, a: 5, c: 0, 
                r: "You program a script that simply plays an MP3 when it hears 'Hello'. 'Here. It doesn't get any better.' Markus snatches it. 'Enough! As long as it blinks!'" 
            },
            { 
                t: "Submission: Work overtime", 
                next: "path_markus_more",
                rep: { "Markus": 5 },
                m: 30, f: -20, a: 20, c: -10,
                r: "You sit there all night coding a wrapper. You have bags under your eyes. Markus just nods the next morning. 'See? You can do it. Why not sooner?'" 
            }
        ]
    },
    {
        id: "rep_markus_simple_bad_2a",
		char: "Markus",
        title: "The Scapegoat",
        reqRep: { "Markus": -40 },
        reqStory: "path_markus_bus",
        text: "The phone rings. Markus has it on speaker. The client is yelling. Markus calmly says: 'Yes, Mr. Client. I'm sorry. My admin, Mr. Müller... he's unfortunately cognitively overwhelmed. He's sabotaging the project.' He grins at you while saying it.",
        opts: [
            { 
                t: "Yell into phone: 'HE'S LYING!'", 
                rep: { "Dr. Wichtig": -10, "Markus": -20 },
                m: 5, f: 0, a: -5, c: 20,
                r: "You yell into the phone. The client hangs up. Markus shrugs. 'Well. Deal busted because of a choleric admin. I'm reporting this to HR.'" 
            },
            { 
                t: "Swallow it & Stay silent", 
                m: 5, f: 0, a: 20, c: -5,
                r: "You let yourself be insulted. Markus hangs up. 'See, Müller? That's how you manage expectations. You're the bad guy now, I'm the savior. Learn from it.'" 
            },
            { 
                t: "Pull cable (Disconnect phone)", 
                m: 2, f: 5, a: -5, c: 5, 
                r: "Silence. Markus stares at the dead phone. 'Technical defect? Lucky you, Müller. But next time, I'll hang you up.'" 
            }
        ]
    },
    {
        id: "rep_markus_simple_bad_2b",
		char: "Markus",
        title: "The Demo Effect",
        reqRep: { "Markus": -30 },
        reqStory: "path_markus_demo",
        text: "Markus storms in, pale as a ghost. 'What have you done?! I said 'Computer, analyze!', and your script played 'Atemlos durch die Nacht'! In front of the board! They think we're a carnival club!'",
        opts: [
            { 
                t: "Laugh: 'Feature, not a bug.'", 
                rep: { "Markus": -10 },
                m: 2, f: 10, a: -10, c: 5, 
                r: "You laugh until you cry. Markus trembles with rage. 'You think this is funny? I'm losing my commission! You're dead to me!'" 
            },
            { 
                t: "Excuse: 'Virus in the system.'", 
                m: 5, f: 0, a: 0, c: 0, 
                r: "'A Russian hacker attack!' Markus thinks about it. 'That... sounds good. That sells. Okay, Müller. Play along, then we both live.'" 
            },
            { 
                t: "Hide", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You crawl under the table. Markus yells at the empty chair and leaves. Problem postponed." 
            }
        ]
    },
    {
        id: "rep_markus_simple_bad_2c",
		char: "Markus",
        title: "Scope Creep",
        reqRep: { "Markus": -30 },
        reqStory: "path_markus_more",
        text: "Markus comes with a coffee (for himself). 'Müller. Voice control is working. But the client now also wants VR headset support. By noon today. You'll handle it, you're in the flow.'",
        opts: [
            { 
                t: "Obey: 'I'll try...'", 
                rep: { "Markus": 10 },
                m: 40, f: -20, a: 30, c: -10,
                r: "You work until you drop. Markus sells it as his success. You are now officially his technical serf." 
            },
            { 
                t: "Strike: 'That's enough!'", 
                rep: { "Markus": -15 },
                m: 5, f: 0, a: -5, c: 10, 
                r: "'Refusal to work?' Markus types on his phone. 'Too bad. I thought we were a team. Then I guess I'll have to outsource.'" 
            },
            { 
                t: "Sabotage: Crash computer", 
                m: 5, f: 5, a: -5, c: 5, 
                r: "'Oops. Bluescreen. I'm sorry, Markus. Everything's gone.' Markus stares at the black screen. 'You... you incompetent!' He leaves." 
            }
        ]
    },
    {
        id: "rep_markus_nemesis_1",
		char: "Markus",
        title: "The Replacement",
        reqRep: { "Markus": -60 },
        text: "Markus doesn't come alone. He has a young man in a slim-fit suit with him. 'Müller. This is Kai-Uwe from 'Cloud-Force'. He will take over your tasks. He's agile. You're... legacy code. Pack your things.'",
        opts: [
            { 
                t: "Fight: 'That guy has no idea!'", 
                next: "path_markus_outsourcing",
                rep: { "Markus": -10 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "You ask Kai-Uwe a trick question about DNS. He stammers. Markus waves it off. 'Details! Kai-Uwe has visions! You're a dinosaur. I'll make sure your budget is cut.'" 
            },
            { 
                t: "Redemption Offer: 'I can hack the competition for you.'", 
                next: "path_markus_blackhat",
                rep: { "Markus": 10 },
                m: 10, f: -10, a: -5, c: 0, 
                r: "Markus pauses. He sends Kai-Uwe out. 'Hack? You mean... industrial espionage? Tell me more. If that's true, Kai-Uwe stays out.'" 
            },
            { 
                t: "Sabotage: Spill coffee on Kai-Uwe", 
                next: "path_markus_coffee", 
                rep: { "Markus": -20 },
                m: 2, f: 5, a: -20, c: 20, 
                r: "'Oops! Slipped!' The brown stain spreads on the beige suit. Kai-Uwe whimpers. Markus rages: 'That's Italian silk! You'll pay for this!'" 
            }
        ]
    },
    {
        id: "rep_markus_nemesis_2a",
		char: "Markus",
        title: "Budget Cut",
        reqRep: { "Markus": -80 },
        reqStory: "path_markus_outsourcing",
        text: "Markus convinced the boss that internal IT is 'uneconomical'. Your monitor was taken away. 'Cost-cutting measures, Müller. Kai-Uwe is doing it via iPad now. You can... do filing.'",
        opts: [
            { 
                t: "Counterattack: Leak his expense report", 
                rep: { "Markus": -50, "Dr. Wichtig": -20 },
                m: 10, f: -5, a: -30, c: 50,
                r: "You send the receipts from the 'Club Velvet' to the boss. Markus storms in, red with rage. 'You're dead! Do you hear me?! I'll destroy you!' (State of war)." 
            },
            { 
                t: "Submission: Bring Kai-Uwe coffee", 
                rep: { "Markus": 10 },
                m: 5, f: -5, a: 30, c: -10, 
                r: "You serve the consultant. Markus grins. 'See? Everyone has their place in the food chain.'" 
            },
            { 
                t: "Lock Kai-Uwe's iPad", 
                m: 5, f: 0, a: 0, c: 10, 
                r: "'Password wrong?' You shrug. Kai-Uwe almost cries. Markus rages, but can't prove anything." 
            }
        ]
    },
    {
        id: "rep_markus_nemesis_2b",
		char: "Markus",
        title: "Black Hat Ops",
        reqRep: { "Markus": -50 },
        reqStory: "path_markus_blackhat",
        text: "Markus locks your office door. He whispers: 'Okay, Müller. Spill the beans. Get me the client list from 'Konkurrenz AG'. If you do that, we're partners. If not... Kai-Uwe comes back.'",
        opts: [
            { 
                t: "Go through with it: Deliver data (Illegal)", 
                rep: { "Markus": 30 }, 
                m: 20, f: -10, a: -20, c: 20,
                r: "You use an exploit and pull the CSV. Markus almost kisses the monitor. 'YES! That's millions! Müller, you're a genius! Forget Kai-Uwe. We'll share the glory!' (You're rehabilitated, but blackmailable)." 
            },
            { 
                t: "Back out: 'Too dangerous.'", 
                rep: { "Markus": -20 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "Markus's face hardens. 'Coward. I knew it. You have no bite.' He calls Kai-Uwe. You're done for." 
            },
            { 
                t: "Deliver fake data (Delay)", 
                m: 10, f: -5, a: -5, c: 0, 
                r: "You give him a list of generated names. He only realizes when he calls them. That'll cause real trouble later, but for today you have peace and Kai-Uwe is gone." 
            }
        ]
    },
    {
        id: "rep_markus_nemesis_2c",
		char: "Markus",
        title: "The Bill",
        reqRep: { "Markus": -70 },
        reqStory: "path_markus_coffee",
        text: "Markus slams a note on your desk. Kai-Uwe stands shivering in the background in a garbage bag poncho. 'Cleaning: 250 euros. Travel: 50 euros. Emotional damage: Priceless. Pay up. Cash. Now.'",
        opts: [
            { 
                t: "Pay privately (Vacation canceled)", 
                rep: { "Markus": 5 },
                m: 5, f: 0, a: 20, c: 0, 
                r: "You raid your emergency stash. It hurts. Markus counts the bills contentedly. 'Well then. Kai-Uwe, stop crying, we're going shopping.' You're broke, but the problem is gone." 
            },
            { 
                t: "Refuse: 'Business risk!'", 
                rep: { "Markus": -10, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: 10, c: 10, 
                r: "'Sue me!' Markus turns red. 'I will, Müller! My lawyer eats people like you for breakfast!' He storms out." 
            },
            { 
                t: "Offer replacement clothes: 'Company hoodie XL'", 
                rep: { "Markus": 10 }, 
                m: 10, f: 5, a: -5, c: 0, 
                r: "You toss Kai-Uwe an 'IT Support' hoodie. Markus laughs: 'My God, Kai-Uwe, you look like a sack of potatoes. Okay Müller, we're even. The sight was worth it.'" 
            }
        ]
    },
    {
        id: "rep_markus_filler_good_1",
		char: "Markus",
        title: "The Dongle Savior",
        reqRep: { "Markus": 10 }, 
        text: "Markus storms in, tie slightly loosened. 'Müller! Client pitch in 2 minutes! The damn projector cable doesn't fit my Mac. Do you have one of those... dongle-thingamajigs?'",
        opts: [
            { 
                t: "Help out: 'Here, take the adapter.'", 
                rep: { "Markus": 10 },
                m: 5, f: -5, a: -5, c: 0, 
                r: "You toss him the USB-C adapter. He catches it casually. 'Müller, you're the MVP! I'll mention you for the commission!' (He won't, but he likes you)." 
            },
            { 
                t: "Lecture: 'One should know their setup.'", 
                rep: { "Markus": -5 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "'Smart-ass!' he yells and rushes off to annoy someone else. You let him hang." 
            },
            { 
                t: "Trade: 'Get me an ice cream later.'", 
                rep: { "Markus": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "He laughs. 'Deal!' He takes the adapter. You actually get a Magnum ice cream placed on your desk later." 
            }
        ]
    },
    {
        id: "rep_markus_filler_good_2",
		char: "Markus",
        title: "High-Class Leftovers",
        reqRep: { "Markus": 30 }, 
        text: "Markus enters your office and places an elegant cardboard box on the table. 'The investor meeting is done. There are three premium truffle sandwiches left. For the elite IT.'",
        opts: [
            { 
                t: "Eat gratefully", 
                rep: { "Markus": 5 },
                m: 15, f: 10, a: -15, c: 0, 
                r: "You eat truffles. It's incredible. Markus leans against the doorway and tells you about his new Porsche. A good life." 
            },
            { 
                t: "Decline: 'I'm vegetarian.'", 
                rep: { "Markus": -2 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "He raises an eyebrow. 'Weak. Very weak, Müller.' He takes the box back." 
            },
            { 
                t: "Share with Kevin", 
                rep: { "Kevin": 10, "Markus": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "You call Kevin over. Markus shakes his head. 'Pearls before swine,' he mutters and leaves." 
            }
        ]
    },
    {
        id: "rep_markus_filler_bad_1",
		char: "Markus",
        title: "Priority 1: Mouse Battery",
        reqRep: { "Markus": -10 }, 
        text: "Your phone rings off the hook. It's Markus. 'Müller! Total outage! My wireless mouse is dead. I can't acquire clients like this! Bring batteries immediately! Priority 1!'",
        opts: [
            { 
                t: "Reluctantly go there", 
                rep: { "Markus": 5 },
                m: 15, f: -5, a: 15, c: 0, 
                r: "You interrupt your work and change his batteries like a butler. He types on his phone in the meantime. 'About time.'" 
            },
            { 
                t: "Decline: 'Get them at reception.'", 
                rep: { "Markus": -10 },
                m: 2, f: 0, a: 0, c: 5, 
                r: "'Service desert!', he snaps and hangs up. You have your peace, but he'll complain." 
            },
            { 
                t: "Recommend: 'Use the touchpad.'", 
                rep: { "Markus": -5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "'Touchpad? Do I look like a student at Starbucks?' He's indignant." 
            }
        ]
    },
    {
        id: "rep_markus_filler_bad_2",
		char: "Markus",
        title: "The Feature Lie",
        reqRep: { "Markus": -30 }, 
        text: "Markus claps you hard on the shoulder as he passes by. 'Landed the deal! Promised the client our software can now do blockchain and AI coffee. Build that by Friday. Ciao!'",
        opts: [
            { 
                t: "Call after him: 'That doesn't exist!'", 
                rep: { "Markus": -5 },
                m: 5, f: 0, a: 15, c: 0, 
                r: "He doesn't even turn around. 'Make it happen, Müller! Mindset!' You rub your temples in disbelief." 
            },
            { 
                t: "Immediately CC the boss", 
                rep: { "Markus": -15, "Dr. Wichtig": 10 },
                m: 10, f: -5, a: 5, c: -10, 
                r: "You write a formal email stating that it's not feasible. Markus comes in later, furious. 'You little rat...' The war rages." 
            },
            { 
                t: "Simply ignore", 
                rep: { "Markus": 5 },
                m: 2, f: 10, a: 5, c: 10, 
                r: "You do nothing at all. When the client calls on Friday, it'll be a disaster. But that's a problem for Future-Müller." 
            }
        ]
    },
    // === GABI: THE SOUL OF THE COMPANY ===
    {
        id: "rep_gabi_story_1",
		char: "Gabi",
        title: "Emergency Call from Reception",
        reqRep: { "Gabi": 60 },
        text: "The phone rings. It's Gabi, her voice trembling dangerously. 'There are five couriers here, the phone is ringing non-stop, and my Outlook is frozen. If one more person asks where the restroom is, I'm going to scream.'",
        opts: [
            { 
                t: "Reassure: 'I'll redirect your phone to me.'", 
                next: "path_gabi_rocker",
                rep: { "Gabi": 10 },
                m: 10, f: -10, a: -5, c: -5, 
                r: "You hear her take a deep breath. 'Silence... Thank you. You're my savior.' You answer calls for 10 minutes." 
            },
            { 
                t: "Dismiss: 'Write a ticket.'", 
                next: "path_gabi_ticket",
                rep: { "Gabi": -5 },
                m: 2, f: 10, a: 0, c: 5, 
                r: "She sharply inhales. 'Alright. Thanks for nothing.' She hangs up calmly. Too calmly." 
            },
            { 
                t: "Tech Solution: 'Remote Restart (Forced)'", 
                next: "path_gabi_anger",
                rep: { "Gabi": -10 },
                m: 2, f: 5, a: 5, c: 10, 
                r: "You click. Her PC shuts down. Gabi screams in the background: 'NO! I had an email open!' *Click*. She hangs up." 
            }
        ]
    },
    {
        id: "rep_gabi_story_2a",
		char: "Gabi",
        title: "Finale: Noise Protection",
        reqRep: { "Gabi": 75 },
        reqStory: "path_gabi_rocker",
        text: "Lunch break. Gabi has headphones on and is aggressively drumming on the counter with two pens. She notices you, grins, and makes the 'devil horns' sign. Suddenly, Dr. Wichtig storms into the hallway: 'Who's making this hellish noise?!'",
        opts: [
            { 
                t: "Rock along (Headbang)", 
                loot: "mixtape",
                rep: { "Gabi": 15, "Dr. Wichtig": -10 },
                m: 5, f: 5, a: -30, c: 15,
                r: "You shake your mane. The boss stares at you both in horror. 'A madhouse...', he mutters and flees. Gabi laughs dirtily: 'Soulmate! Here, take this tape. Only the elite understand.' (Item received!)" 
            },
            { 
                t: "Solidarity: 'That was my server test!'", 
                rep: { "Gabi": 10, "Dr. Wichtig": -2 },
                m: 5, f: -5, a: -10, c: 5, 
                r: "You professionally cover for her. The boss looks confused. 'Acoustic test? Well. Carry on.' Gabi wipes sweat from her brow. 'Phew. Thanks for the cover, partner.'" 
            },
            { 
                t: "Snitch: 'Gabi is to blame.'", 
                rep: { "Gabi": -30, "Dr. Wichtig": 5 },
                m: 2, f: 0, a: 0, c: -10,
                r: "The boss chews Gabi out. She looks at you with a gaze that freezes your blood. That was the end of your friendship." 
            }
        ]
    },
    {
        id: "rep_gabi_story_2b",
		char: "Gabi",
        title: "Finale: Passierschein A38",
        reqRep: { "Gabi": 55 },
        reqStory: "path_gabi_ticket",
        text: "You want to step out for a kebab. Gabi blocks the exit. 'Do you have a ticket for building egress? No? Well. Rules are rules. Write one to HR, processing time 3 business days.'",
        opts: [
            { 
                t: "Write ticket (Surrender)", 
                rep: { "Gabi": 5 },
                m: 15, f: -10, a: 20, c: 0, 
                r: "You type the ticket on your phone. Gabi slowly checks it. 'Typo in line 3. Rejected.' You don't get a kebab." 
            },
            { 
                t: "Apologize: 'I was an idiot.'", 
                rep: { "Gabi": 5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "Gabi sighs. 'Okay. Just this once.' She opens the barrier. 'But next week I want to see chocolate.'" 
            },
            { 
                t: "Take back exit", 
                rep: { "Gabi": -5 },
                m: 10, f: -5, a: 10, c: 5, 
                r: "You sneak through the basement. It's dark and smells of Egon. You get out, but you feel defeated." 
            }
        ]
    },
    {
        id: "rep_gabi_story_2c",
		char: "Gabi",
        title: "Finale: Unreachable",
        reqRep: { "Gabi": 45 },
        reqStory: "path_gabi_anger",
        text: "An important call from support doesn't go through. You go to reception. Gabi is filing her nails. The phone blinks silently. 'Oh, was that for you? Oops. My PC is still acting up since your restart.'",
        opts: [
            { 
                t: "Repair PC (Do penance)", 
                rep: { "Gabi": 10 },
                m: 30, f: -20, a: 20, c: 0, 
                r: "You check her PC. It's perfectly fine. You pretend to fix something. 'It's working again.' Gabi grins: 'Thanks. Must have been a Layer-8 problem.'" 
            },
            { 
                t: "Call boss", 
                rep: { "Gabi": -15, "Dr. Wichtig": 5 },
                m: 10, f: 0, a: -5, c: -5, 
                r: "The boss comes. 'Ms. Gabi! Put them through!' She obeys grudgingly, but your reputation is ruined." 
            },
            { 
                t: "Yell", 
                rep: { "Gabi": -5 },
                m: 2, f: 0, a: -10, c: 10, 
                r: "You yell into the receiver. Gabi is unimpressed. 'Bad vibes, Müller. Very bad vibes.'" 
            }
        ]
    },
    {
        id: "rep_gabi_simple_good_1",
		char: "Gabi",
        title: "The Private Package",
        reqRep: { "Gabi": 20 },
        text: "Gabi waves you over. She looks around conspiratorially. 'Psst. Here's an Amazon package for you. Private mail is actually forbidden, and I should send it back or burn it. But it rattles so interestingly.'",
        opts: [
            { 
                t: "Accept & Thank", 
                next: "path_gabi_secret",
                rep: { "Gabi": 5 },
                m: 5, f: 5, a: -5, c: 5,
                r: "'Thanks, Gabi!' You quickly make it disappear. Gabi winks. 'I saw nothing.'" 
            },
            { 
                t: "Share: 'It's chocolate inside.'", 
                next: "path_gabi_candy",
                rep: { "Gabi": 10 },
                m: 10, f: 5, a: -10, c: 5, 
                r: "You open it and give her some. 'Oh, nougat!' She's thrilled. 'Wait, I have a cookie left from the meeting. Trade deal!'" 
            },
            { 
                t: "Decline: 'Return to sender.'", 
                next: "path_gabi_rule",
                m: 5, f: 0, a: 5, c: -5,
                r: "Gabi rolls her eyes. 'Boring. Then I'll just fill out the return form.' She stamps it aggressively." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_good_2a",
		char: "Gabi",
        title: "The Office Grapevine",
        reqRep: { "Gabi": 40 },
        reqStory: "path_gabi_secret",
        text: "Gabi leans far over the counter. 'Since you can keep a secret... I just saw a fax. Dr. Wichtig ordered a 'stress management coach'. For himself. And he wrote 'urgent' on it.'",
        opts: [
            { 
                t: "Gossip: 'He needs a vacation more.'", 
                rep: { "Gabi": 5 },
                m: 10, f: 10, a: -10, c: 0,
                r: "You both giggle for 10 minutes about the boss. It feels good not to be alone in the madness." 
            },
            { 
                t: "Use info: Confront boss about it", 
                rep: { "Gabi": -10, "Dr. Wichtig": -10 },
                m: 5, f: 0, a: 10, c: 15,
                r: "You ask the boss about his stress. He turns pale. 'How did you know?! GABI!' That'll cause trouble for everyone." 
            },
            { 
                t: "Ignore: 'Have to work.'", 
                m: 2, f: -5, a: 5, c: 0, 
                r: "Gabi looks disappointed. 'You're not curious at all.' She turns back to her crossword puzzle." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_good_2b",
		char: "Gabi",
        title: "Leftover Recycling",
        reqRep: { "Gabi": 40 },
        reqStory: "path_gabi_candy",
        text: "Gabi calls you. 'Alarm level delicious. In Conference Room B, the clients are gone. They barely touched the sandwiches. Salmon, brie, everything. I'll give you 2 minutes head start before the sales reps.'",
        opts: [
            { 
                t: "Run & Plunder", 
                m: 10, f: 5, a: -20, c: 0,
                r: "You run. Gabi stands guard. You stuff your face. 'Bon appétit,' she whispers as you come out full and satisfied." 
            },
            { 
                t: "Bring Gabi something", 
                rep: { "Gabi": 10 },
                m: 15, f: 5, a: -15, c: 0, 
                r: "You secure a 'Best of' plate for Gabi. She's touched. 'You're my favorite colleague. Really.'" 
            },
            { 
                t: "No hunger", 
                m: 2, f: 0, a: 5, c: 0, 
                r: "You stay at your desk. Later you hear Markus yelling: 'Who ate the salmon?!' Opportunity lost." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_good_2c",
		char: "Gabi",
        title: "The VIP Visit",
        reqRep: { "Gabi": 30 },
        reqStory: "path_gabi_rule",
        text: "An important client stands at reception and forgot his ID. He's fuming. Gabi sees you coming. 'Ah, Mr. Müller! You're so meticulous. Can you confirm that this gentleman has NO access authorization?'",
        opts: [
            { 
                t: "Confirm: 'Sorry, rules are rules.'", 
                rep: { "Gabi": 10 },
                m: 5, f: -5, a: 5, c: -5,
                r: "Gabi grins triumphantly. 'See? Even IT says no.' The client has to wait outside. Gabi loves it when you're the bad cop." 
            },
            { 
                t: "Let client in (Betrayal)", 
                rep: { "Gabi": -10, "Markus": 5 },
                m: 5, f: 0, a: 5, c: 0, 
                r: "You wave him through. Gabi snorts. 'Great. Now I look like a bitch.' Markus thanks you, Gabi is angry." 
            },
            { 
                t: "Joke: 'Looks like a spy.'", 
                rep: { "Gabi": 5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Gabi laughs. The client doesn't. But you both have fun at his expense." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_bad_1",
		char: "Gabi",
        title: "The Package Hostage",
        reqRep: { "Gabi": -20 },
        text: "You see an Amazon package with your name behind the counter. Gabi protectively places her hand on it. 'Well, Mr. Müller. According to house rules §4, private mail is prohibited. I'll have to... thermally dispose of it. Or donate it to 'those in need'.'",
        opts: [
            { 
                t: "Aggression: 'Hand it over, or there'll be trouble!'", 
                next: "path_gabi_denied",
                rep: { "Gabi": -10 },
                m: 5, f: 0, a: -5, c: 5,
                r: "You get loud. Gabi smiles icily. 'Threats? Noted. The package stays here. For evidence.'" 
            },
            { 
                t: "Submission: 'Please! It's medicine!' (Lied)", 
                next: "path_gabi_beg",
                rep: { "Gabi": 5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "She scrutinizes you. 'You look very unwell too. Alright. But you fill out form 'Special Permit A'. Right now.'" 
            },
            { 
                t: "Cunning: Wait until she goes to the restroom", 
                next: "path_gabi_cam",
                m: 15, f: 5, a: 0, c: 0, 
                r: "You lurk behind a plant for 15 minutes. When she's gone, you snatch the package and run. The perfect heist. Or so you think." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_bad_2a",
		char: "Gabi",
        title: "Acceptance Denied",
        reqRep: { "Gabi": -40 },
        reqStory: "path_gabi_denied",
        text: "You're urgently waiting for server spare parts. You ask at reception. Gabi is filing her nails. 'Oh, the UPS man? I sent him away. 'Recipient unknown'. You're hardly ever at your desk, so I thought you didn't work here anymore.'",
        opts: [
            { 
                t: "Rage & Yell", 
                rep: { "Gabi": -5, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -10, c: 10,
                r: "You lose your composure. Gabi hums a tune. 'Should I call security? You seem hysterical.'" 
            },
            { 
                t: "Complain to the boss", 
                m: 10, f: 0, a: 5, c: 0, 
                r: "The boss shrugs. 'Gabi is just doing her job. Settle it. I need harmony in the foyer.'" 
            },
            { 
                t: "Drive to depot yourself", 
                m: 60, f: -20, a: 20, c: 0,
                r: "You drive for 1 hour through the city to pick up the package. You have the part, but your day is ruined." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_bad_2b",
		char: "Gabi",
        title: "Passierschein A38",
        reqRep: { "Gabi": -30 },
        reqStory: "path_gabi_beg",
        text: "Gabi holds out the form to you. 'You forgot field 4b (mother's maiden name) and field 9 (shoe size). Without complete data, I cannot hand over the package. General Data Protection Regulation.'",
        opts: [
            { 
                t: "Fill out everything (Obedience)", 
                rep: { "Gabi": 5 },
                m: 20, f: -10, a: 15, c: 0, 
                r: "You enter your shoe size. Gabi checks it critically. '43? Looks more like 44 to me. Alright.' She tosses you the package." 
            },
            { 
                t: "Argue: 'This is harassment!'", 
                rep: { "Gabi": -5 },
                m: 5, f: 0, a: 10, c: 0, 
                r: "'This is quality assurance.' She shreds the form. 'New attempt. Here's a fresh sheet.'" 
            },
            { 
                t: "Enter fantasy data", 
                m: 5, f: 5, a: -5, c: 0, 
                r: "Mother: 'Godzilla'. Shoe size: 'Clown'. Gabi doesn't notice and stamps it. A small victory against the system." 
            }
        ]
    },
    {
        id: "rep_gabi_simple_bad_2c",
		char: "Gabi",
        title: "Candid Camera",
        reqRep: { "Gabi": -30 },
        reqStory: "path_gabi_cam",
        text: "An email from Gabi: Subject: 'Thief in the Foyer'. Attached is a grainy surveillance video of you jumping out from behind the plant and taking the package. Text: 'Should I forward this to HR or will you bring me chocolate?'",
        opts: [
            { 
                t: "Bring chocolate (Blackmail)", 
                rep: { "Gabi": 5 },
                m: 10, f: 0, a: 10, c: 0, 
                r: "You buy her a bar from the vending machine. She deletes the email in front of your eyes. 'See? Honesty is the best policy.'" 
            },
            { 
                t: "Deny: 'That's my twin brother.'", 
                rep: { "Gabi": -5 },
                m: 5, f: 5, a: 0, c: 5, 
                r: "'Nice try.' She keeps the video. You're now blackmailable. That will resonate." 
            },
            { 
                t: "Counterattack: 'Filming is illegal!'", 
                rep: { "Gabi": -10, "Dr. Wichtig": -5 },
                m: 10, f: 0, a: 5, c: 10, 
                r: "You threaten with the works council. Gabi turns pale, but she now hates you to the core. 'You just watch out, Müller...'" 
            }
        ]
    },
    {
        id: "rep_gabi_nemesis_1",
		char: "Gabi",
        title: "Communication Blockade",
        reqRep: { "Gabi": -60 },
        text: "You wonder why your phone is dead. Gabi has redirected your extension to 'number not assigned'. Visitors for IT are also turned away with: 'Mr. Müller? He's unfortunately deceased.'",
        opts: [
            { 
                t: "Tech War: Hack her phone system", 
                next: "path_gabi_war",
                rep: { "Gabi": -10 },
                m: 10, f: -5, a: -10, c: 10,
                r: "You redirect all calls from reception to her private phone. Gabi storms into the hallway, red-faced. 'This is war, Müller!'" 
            },
            { 
                t: "Submission: Bring flowers", 
                next: "path_gabi_sub",
                rep: { "Gabi": 5 },
                m: 15, f: 0, a: 10, c: 0, 
                r: "You buy a bouquet at the gas station. Gabi wrinkles her nose. 'Carnations? Am I dead? But fine, I'll reactivate the line. For a trial run.'" 
            },
            { 
                t: "Offer: 'I know who's stealing the milk.'", 
                next: "path_gabi_spy",
                rep: { "Gabi": 10 },
                m: 5, f: 0, a: -5, c: 0, 
                r: "Gabi pauses. Her eyes gleam. 'Information? Interesting. Come to my office. We need to talk.'" 
            }
        ]
    },
    {
        id: "rep_gabi_nemesis_2a",
		char: "Gabi",
        title: "Announcement for Mr. Müller",
        reqRep: { "Gabi": -80 },
        reqStory: "path_gabi_war",
        text: "The loudspeaker system crackles. Gabi's voice echoes throughout the building: 'Attention! Mr. Müller from IT invites all colleagues to free beer and pizza! Right now in his office! Thank you, Mr. Müller!'",
        opts: [
            { 
                t: "Barricade door", 
                m: 10, f: 5, a: 20, c: 0, 
                r: "The horde rattles your door. 'Beer! Beer!' You sit in the dark, sweating. Gabi won." 
            },
            { 
                t: "Counter-announcement: 'Gabi's paying!'", 
                rep: { "Gabi": -20, "Dr. Wichtig": -10 },
                m: 5, f: 0, a: -10, c: 20,
                r: "You hack into the PA system. 'Correction! Gabi is celebrating her lottery win at reception!' Now everyone runs to her. Pure chaos." 
            },
            { 
                t: "Escape through window", 
                m: 5, f: 10, a: 0, c: 0, 
                r: "You climb out. Quitting time. Let them search." 
            }
        ]
    },
    {
        id: "rep_gabi_nemesis_2b",
		char: "Gabi",
        title: "Receptionist Müller",
        reqRep: { "Gabi": -50 },
        reqStory: "path_gabi_sub",
        text: "Gabi takes the flowers, but puts them in the trash. 'Nice. But I urgently need to get my nails done now. You take over reception. Woe betide if you're unfriendly to the guests.'",
        opts: [
            { 
                t: "Do the job (Humiliation)", 
                rep: { "Gabi": 10 },
                m: 60, f: -30, a: 30, c: -10,
                r: "You sit there for an hour, smiling at delivery drivers. 'Please sign here.' Gabi comes back and checks your work. 'See? You can do it.'" 
            },
            { 
                t: "Drive away guests", 
                rep: { "Gabi": -10, "Dr. Wichtig": -5 },
                m: 5, f: 0, a: -10, c: 10, 
                r: "You tell every visitor: 'Company is bankrupt.' Gabi comes back and has a fit. 'What have you done?!'" 
            },
            { 
                t: "Pull phone cable & leave", 
                rep: { "Gabi": -5 },
                m: 2, f: 5, a: 0, c: 0, 
                r: "You sabotage the station and leave. Gabi has to work overtime. Revenge is sweet." 
            }
        ]
    },
    {
        id: "rep_gabi_nemesis_2c",
		char: "Gabi",
        title: "The Black Book",
        reqRep: { "Gabi": -50 },
        reqStory: "path_gabi_spy",
        text: "Gabi closes the door. She pulls out a notebook. 'Okay, little bird. Sing. I need the chat logs from accounting. Who's gossiping about whom? If you give me that, we're even. If not...'",
        opts: [
            { 
                t: "Betray: Deliver real logs", 
                rep: { "Gabi": 35 }, 
                m: 10, f: -5, a: -10, c: 30,
                r: "You give her the USB stick. Gabi reads and giggles wickedly. 'Oh... Frau Elster is with the janitor?! That's gold, Müller! You're my new favorite.' (Peace made, but you're a rat)." 
            },
            { 
                t: "Fake logs: 'Everyone loves Gabi.'", 
                rep: { "Gabi": -5 },
                m: 15, f: -5, a: 5, c: 0, 
                r: "You forge chats. Gabi reads it and frowns. 'That sounds too nice. You're lying.' She's suspicious, but the war is paused." 
            },
            { 
                t: "Moral retreat", 
                rep: { "Gabi": -20 },
                m: 5, f: 0, a: 5, c: -5, 
                r: "'I'm not a snitch.' Gabi closes the book. 'Then you're useless. Get out.' The blockade continues." 
            }
        ]
    },
    {
        id: "rep_gabi_filler_good_1",
		char: "Gabi",
        title: "The Bouncer",
        reqRep: { "Gabi": 10 }, 
        text: "Gabi calls. 'Müller, there's a very pushy printer leasing representative here. He wants to come straight to you. Should I send him away or are you bored?'",
        opts: [
            { 
                t: "Grateful: 'Send him to the desert!'", 
                rep: { "Gabi": 10 },
                m: 5, f: -5, a: -10, c: 0, 
                r: "Gabi laughs. 'Alright, I'll tell him you're in exile indefinitely.' You hear her become authoritative in the background. Perfect assistance." 
            },
            { 
                t: "Sarcastic: 'Let him in, I need friends.'", 
                rep: { "Gabi": -2 },
                m: 15, f: 0, a: 15, c: 0, 
                r: "'As you wish, masochist.' The representative comes in and steals 15 minutes of your life with glossy brochures." 
            },
            { 
                t: "Redirect: 'Send him to Markus.'", 
                rep: { "Gabi": 5, "Markus": -5 },
                m: 5, f: 5, a: -5, c: 0, 
                r: "Gabi giggles. 'Evil. I like it.' The sales rep annoys the sales rep. A poetic ending." 
            }
        ]
    },
    {
        id: "rep_gabi_filler_good_2",
		char: "Gabi",
        title: "Gossip Update",
        reqRep: { "Gabi": 30 }, 
        text: "You pick up mail at reception. Gabi leans over the counter and whispers: 'Did you hear? Chantal from marketing secretly cried in the restroom this morning because her smoothie was sold out.'",
        opts: [
            { 
                t: "Listen & Gossip along", 
                rep: { "Gabi": 10 },
                m: 15, f: 10, a: -10, c: 0, 
                r: "You analyze the psychological stability of the marketing department. It's completely unproductive, but immensely satisfying." 
            },
            { 
                t: "Dismiss: 'Rumors don't interest me.'", 
                rep: { "Gabi": -10 },
                m: 2, f: 0, a: 5, c: 0, 
                r: "She narrows her eyes. 'Alright, Mr. Square. Then no more insider info for you.' Spoilsport." 
            },
            { 
                t: "Pity: 'Oh, the poor thing.'", 
                rep: { "Gabi": -5 },
                m: 5, f: 0, a: 0, c: 0, 
                r: "Gabi wrinkles her nose. 'Pff, pity? That's natural selection in the office.' You're not toxic enough for her grapevine." 
            }
        ]
    },
    {
        id: "rep_gabi_filler_bad_1",
		char: "Gabi",
        title: "Spam Floodgate",
        reqRep: { "Gabi": -10 }, 
        text: "Your phone rings. Again. It's the fifth time today that Gabi has forwarded an obvious spam call ('Win an iPhone') to your extension instead of cutting it off.",
        opts: [
            { 
                t: "Call Gabi & Yell", 
                rep: { "Gabi": -5 },
                m: 5, f: 0, a: 15, c: 0, 
                r: "'Why are you forwarding that?!' Gabi sweetly replies: 'Oh, sounded like IT topics. Sorry.' She's doing it on purpose." 
            },
            { 
                t: "Just stop answering", 
                rep: { "Dr. Wichtig": 5 },
                m: 10, f: 5, a: 5, c: 10, 
                r: "You ignore the phone. Later, the boss complains that IT is unreachable by phone. Gabi won." 
            },
            { 
                t: "Engage spammer in conversation", 
                m: 20, f: -10, a: -5, c: 0, 
                r: "You thoroughly explain the server architecture to the call center employee. He eventually hangs up crying. Time wasted, but funny." 
            }
        ]
    },
    {
        id: "rep_gabi_filler_bad_2",
		char: "Gabi",
        title: "By the Book",
        reqRep: { "Gabi": -30 }, 
        text: "An email from Gabi: 'Dear Mr. Müller, a package for you was refused because your name on the label was 'Muller' (without umlaut). According to Protocol 7B, inadmissible. It will be returned to the depot.'",
        opts: [
            { 
                t: "Storm to reception in a rage", 
                rep: { "Gabi": -10 },
                m: 10, f: 0, a: 20, c: 5, 
                r: "You stand there ranting. Gabi calmly files her nails. 'Incorrect addressing. My condolences.' She enjoys her power." 
            },
            { 
                t: "Email boss: 'This is sabotage!'", 
                rep: { "Gabi": -5, "Dr. Wichtig": -5 },
                m: 10, f: 0, a: 10, c: 10, 
                r: "The boss replies, annoyed: 'Handle your private matters on your own time, Müller.' Nobody helps you." 
            },
            { 
                t: "Resign and reorder package", 
                rep: { "Gabi": 5 },
                m: 5, f: 5, a: 15, c: 0, 
                r: "You give up and click 'Resend'. Gabi observes your resignation through the glass door and smiles thinly." 
            }
        ]
    }
    
];