export const emails = [

	{
		id: "mail_cake_1",
		sender: "HR (Sabine)",
		subj: "Cake in the Kitchen! 🍰",
		body: "Dear all,\n\nI've baked a vegan, gluten-free zucchini cake! Help yourselves!\n\n(Please, only one slice per person!)",
		opts: [
			{ btn: "Take a slice", r: "Tastes like cardboard and sadness.", m: 2, f: 0, a: 5, c: 0 },
			{ btn: "Reply All: 'Where's the minced meat?'", r: "You send the joke to the entire distribution list.", m: 1, f: 5, a: -5, c: 5, nextEmail: "mail_cake_2" },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_cake_2",
		linked: true,
		sender: "HR (Sabine)",
		subj: "Re: Cake in the Kitchen! 🍰",
		body: "I don't find that funny at all, Mr. Müller!\n\nWe're trying to foster an inclusive atmosphere here! I've added your name to the 'No-Christmas-Bonus' list.",
		opts: [
			{ btn: "It was worth it.", r: "You secretly grab a minced meat sandwich.", m: 5, f: -5, a: -5, c: 5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_ticket_fire",
		sender: "Ticket System", 
		subj: "TICKET #9942: Mouse on fire.",
		body: "PRIORITY: CRITICAL \nUSER: Gabi (Reception) \nDESCRIPTION: 'Help, smoke is coming out of my mouse and it smells like burnt plastic. I tried to put it out with coffee, now it's sparking blue.' \nSTATUS: OPEN",
		opts: [
			{ btn: "Delete ticket", r: "Deleted. Problem solved (for you).", m: 1, f: 5, a: 0, c: 5 },
			{ btn: "Call the fire department", r: "Major incident. It was just an LED.", m: 2, f: -5, a: -5, c: 10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_workshop_breathing",
		sender: "Works Council", 
		subj: "Invitation: 'Proper Breathing at the Workplace'",
		body: "Namaste dear fellow slaves... uh, employees. \n\nWe invite you to the workshop 'Breathing Against Burnout'. Together, we'll learn how to convert anger into CO2. There will be vegan spelt cookies (gluten-free, sugar-free, flavor-free). Attendance is recommended.",
		opts: [
			{ btn: "Attend", r: "You breathe. 30 minutes of doing nothing.", m: 30, f: 15, a: -10, c: 5 },
			{ btn: "Mark as Spam", r: "Get rid of it. Time is money.", m: 1, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_toilet_1",
		sender: "Facility Mgt",
		subj: "3rd Floor Toilets Closed (Burst Pipe).",
		body: "ATTENTION: Due to an... incident... involving an unnamed employee and half a roll of paper towels, the restroom area on the 3rd floor is closed. The water is 5cm deep.\n\nPlease wear rubber boots or hold it in.",
		opts: [
			{ btn: "Reply All: 'This is what budget cuts get us!'", r: "You incite a rebellion against management.", m: 2, f: 5, a: 10, c: 5, nextEmail: "mail_toilet_revolution" },
			{ btn: "Reply All: 'Thanks, Greens!!!11'", r: "You start a wild, pointless political debate.", m: 2, f: 5, a: 10, c: 5, nextEmail: "mail_toilet_politics" },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_toilet_revolution",
		linked: true,
		sender: "Works Council (Uwe)",
		subj: "RE: 3rd Floor Toilets Closed",
		body: "COMRADES! Müller is right!\n\nThe 1-ply paper is a crime against humanity! Management probably uses silk!\n\nWe demand: 4-ply for everyone! Starting tomorrow: GENERAL STRIKE in front of the loo!",
		opts: [
			{ btn: "Show solidarity.", r: "You accidentally started a communist revolution on the 3rd floor.", m: 2, f: 10, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_toilet_politics",
		linked: true,
		sender: "All Employees",
		subj: "RE: RE: RE: 3rd Floor Toilets Closed",
		body: "System Message: This email thread has 400 new replies.\n\nSubjects include: 'Climate Change', 'Flat Earth', 'Speed Limits', 'Schnitzel Ban'.\n\nThe mail server is smoking. Nobody is working anymore.",
		opts: [
			{ btn: "Grab popcorn.", r: "The company is burning, but you're well entertained.", m: 2, f: 15, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_phish_test_bonus",
		sender: "IT-Sec", 
		subj: "Phishing Test: Click here for bonus!",
		body: "Dear employee. \n\nWe've noticed your salary is too low. To receive your immediate bonus of 5,000 EUR, please enter your Windows password and the name of your first pet on the following page: \n[Change-MyPassword.ru]",
		opts: [
			{ btn: "Click immediately!", r: "TEST FAILED! A red window pops up: 'CAN'T YOU SEE THIS IS FAKE?!' Report sent to boss.", m: 2, f: 0, a: 10, c: 20 },
			{ btn: "Report as Phishing", r: "Exemplary. IT sends you a thumbs-up emoji.", m: 2, f: 0, a: 0, c: -5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_kevin_noise",
		sender: "Trainee Kevin", 
		subj: "Help!! My PC is making weird noises",
		body: "Hey? My PC is making 'Krrrrtzzz Krrrrtzz' noises and smells weird, like electricity. I kicked it hard, now it's smoking a bit. Is this a new feature? Should I pour water on it?",
		opts: [
			{ btn: "Reply: 'Run away!'", r: "Kevin runs out screaming.", m: 2, f: 5, a: 0, c: 5 },
			{ btn: "Go there", r: "It was the fan. You fixed it.", m: 5, f: -5, a: -5, c: -5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_leak_1",
		sender: "Dr. Important",
		subj: "FW: Q4 Layoffs (CONFIDENTIAL)",
		body: "To: Board\nCc: (Accidentally) All Employees\n\nGentlemen, attached is the list of 50 employees we'll be firing next Monday. Please handle discreetly.\n\n[Attachment: List_FINAL_v3.pdf]",
		opts: [
			{ btn: "Reply All: 'AM I ON IT TOO?!'", r: "You replied to the entire distribution list. Panic ensues.", m: 2, f: -10, a: 10, c: 5, nextEmail: "mail_leak_2" },
			{ btn: "️️🗑️ Delete & Ignore", r: "You pretend you saw nothing. Your heart races.", m: 1, f: 0, a: 5, c: -5 }
		]
	},
	{
		id: "mail_leak_2",
		linked: true,
		sender: "Dr. Important",
		subj: "RE: FW: Q4 Layoffs (CONFIDENTIAL)",
		body: "MÜLLER?! \n\nHow dare you?! That was a test! To... assess loyalty! Get to my office IMMEDIATELY!\n\n(This is going to be a long conversation...)",
		opts: [
			{ btn: "Oops...", r: "The boss yells at you for 20 minutes.", m: 20, f: 0, a: 20, c: 10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_chantal_affair_1",
		sender: "Chantal (Private)",
		subj: "Re: Weekend",
		body: "Hey sweetie 🐰, the boss is so annoying. Meet me in the archive in 5 mins? I smuggled coffee and these amazing chocolate cookies. No one will find us among the 1990 files. 😘",
		opts: [
			{ btn: "Forward to: Dr. Important", r: "You forward the email to the boss without comment. Cold-blooded.", m: 2, f: 0, a: -10, c: -20, nextEmail: "mail_chantal_boss_reply" },
			{ btn: "Reply: 'I know everything. Hush money?'", r: "You ruthlessly exploit her misfortune.", m: 2, f: 5, a: 0, c: 0, nextEmail: "mail_chantal_panic" },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_chantal_boss_reply",
		linked: true,
		sender: "Dr. Important",
		subj: "RE: FW: Re: Weekend",
		body: "Mr. Müller,\n\nExcellent vigilance. Laziness is a cancer in this company.\n\nI have just summoned Ms. Chantal for a 'discussion'. Feel free to grab a cookie from her office while she's gone.\n\nCarry on.",
		opts: [
			{ btn: "The cookie tastes like betrayal.", r: "You feel safe, but lonely.", m: 2, f: 0, a: -5, c: -10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_chantal_panic",
		linked: true,
		sender: "Chantal (Private)",
		subj: "Re: Re: Weekend",
		body: "OMG MÜLLER?! 😱😱😱\n\nPlease don't say anything!! That was for... uh... my grandma! If you keep quiet, I'll make your PowerPoint pretty for tomorrow! And you get all the cookies! DEAL?!",
		opts: [
			{ btn: "Deal.", r: "Chantal now works for you. Life is good.", m: 2, f: 15, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_compliance_sitting",
		sender: "HR Compliance Bot", 
		subj: "URGENT: E-Learning 'Proper Sitting' Overdue",
		body: "Dear employee, our system indicates that you have not yet completed the mandatory module 'Workplace Ergonomics Part 4b: The Perfect 90-Degree Angle'. The video is 45 minutes long and cannot be skipped. Please complete this by EOB, otherwise your access will be blocked.",
		opts: [
			{ btn: "Let video play", r: "You let the video play in the background. The sound is annoying, but you're compliant.", m: 5, f: 10, a: 5, c: -5 },
			{ btn: "Mark as 'Completed'", r: "You manipulate the database. Risky, but saves time.", m: 2, f: 0, a: -5, c: 5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. The next reminder will surely come.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_replyall_cat",            
		sender: "Distribution List: ALL (Re: Re: Re: Cat)", 
		subj: "RE: RE: RE: Who's missing 'Mimi'?",
		body: "PLEASE REMOVE ME FROM THIS DISTRIBUTION LIST!!!! I DO NOT HAVE A CAT!!! THIS IS A WORK EMAIL!!! (Previous message from Gabi: 'Oh how cute, so fluffy!'). (Previous message from Klaus: 'Mimi is back, thanks everyone!').",
		opts: [
			{ btn: "Reply-All: 'QUIET!'", r: "You contributed to the escalation. Now 50 people are replying 'Stop replying to all!'. The mail server is smoking.", m: 1, f: 0, a: 20, c: 10 },
			{ btn: "Create filter rule", r: "You filter 'Mimi' directly to the trash. Heavenly peace.", m: 5, f: -5, a: -10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_chantal_wording",
		sender: "Chantal (Marketing)", 
		subj: "Wording Check - ASAP!!!",
		body: "Hiiii! 👋 We're printing the flyers for the fair right now. Can you quickly take a look? It says: 'Our cloud solution synergizes with blockchain AI to optimize the Wi-Fi cable.' Does that sound techy enough? Need the GO in 2 minutes!!! 😘",
		opts: [
			{ btn: "Reply: 'Perfect!'", r: "You approved the nonsense. The IT community will laugh at us, but Chantal is happy.", m: 2, f: 10, a: -5, c: 0 },
			{ btn: "Correct the text", r: "You painstakingly explain to her that Wi-Fi cables don't exist. She doesn't get it. 'But it sounds good!'", m: 5, f: -10, a: 10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_krause_fridge",
		sender: "Janitor Krause", 
		subj: "Fridge 3rd Floor",
		body: "Morning. I found a Tupperware in the fridge that says 'Lunch 2019'. The contents now have fur and growl at me when I turn on the light. The owner should report to me with a flamethrower, otherwise I'll dispose of it along with the fridge.",
		opts: [
			{ btn: "That's mine!", r: "You rescue your... whatever that was. It smells awful.", m: 2, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. Not your problem. Let it burn.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_ceo_vision",
		sender: "The CEO (Dr. Important)", 
		subj: "Vision 2030 - Your Ideas!",
		body: "Dear Team, I had a vision last night at the wellness retreat. We need to become more 'Agile'. I want each of you to send me a 10-page concept by 12 PM on how we can use AI to save coffee. Think 'Out of the Box'! Go, Go, Go!",
		opts: [
			{ btn: "Use ChatGPT", r: "You let an AI write the bullshit concept. The boss is thrilled: 'Visionary!'", m: 5, f: 10, a: -5, c: -10 },
			{ btn: "Reply honestly", r: "You write: 'This is nonsense.' The boss remembers your name and was not pleased.", m: 5, f: 0, a: 10, c: 20 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. Hopefully he forgets about it.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_wuttke_excel",
		sender: "H. Wuttke (Accounting)", 
		subj: "HELP! EXCEL IS RED!",
		body: "Mr. IT!!! I didn't do anything, honestly! I just wanted to delete column G and now everything is red and blinking! The balance sheet has to go out in 10 minutes! If this is gone, I'm dead! Come here immediately! Why does this always happen to me?!",
		opts: [
			{ btn: "Demand a ticket", r: "You write back: 'Please open a ticket.' Cold-blooded.", m: 2, f: 5, a: -5, c: 5 },
			{ btn: "Go there", r: "He was sitting on the 'Delete' key. Problem solved in 2 seconds.", m: 5, f: -10, a: 10, c: -5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_circle_mindfulness",
		sender: "Works Council", 
		subj: "Invitation: 'Mindfulness' Circle",
		body: "Dear colleagues, due to high stress levels, we are offering a circle today. We will breathe together and dance our names. There will be vegan spelt cookies. Participation is voluntary (but will be noted).",
		opts: [
			{ btn: "Attend", r: "You spent 30 minutes breathing, and the few cookies were dry.", m: 30, f: 20, a: -10, c: 5 },
			{ btn: "Mark as Spam", r: "Get rid of it. I have real work to do.", m: 1, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_phish_1",
		sender: "Security Service",
		subj: "Urgent: Your password is expiring!",
		body: "Hello User,\n\nyour password is too old. Click HERE to change it and receive a 500€ Amazon voucher as a reward!\n\nLink: http://bit.ly/hacker-klaus",
		opts: [
			{ btn: "Click link", r: "You click the link. A red window opens.", m: 1, f: 5, a: 0, c: 0, nextEmail: "mail_phish_2" },
			{ btn: "Report as Phishing", r: "Well done. IT-Sec is proud.", m: 1, f: 0, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_phish_2",
		linked: true,
		sender: "IT-Security Bot",
		subj: "ALERT: YOU FAILED",
		body: "This was an internal security test.\nYou failed.\n\nConsequence: Your internet access has been throttled to 'modem speed' until you complete the 'Mouse Operation for Beginners' training.",
		opts: [
			{ btn: "Damn it.", r: "Everything loads super slowly now. Your aggro increases.", m: 1, f: -5, a: 10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_erna_virus",
		sender: "Aunt Erna (Private)", 
		subj: "FWD: FWD: FWD: Funny!!!!",
		body: "Look, boy, you have to see this! 😂😂😂 The cat falls off the chair! I laughed so hard! Show this to your colleagues! Regards Aunt Erna. PS: How do I turn on the internet? (Attachment: funny.ppt.exe - 50MB)",
		opts: [
			{ btn: "Open attachment", r: "VIRUS ALERT! It was malware. The scanner screams. You have to clean the PC.", m: 10, f: -20, a: 20, c: 20 },
			{ btn: "Reply nicely and lie", r: "You lie: 'Haha, very funny Aunt Erna.'", m: 2, f: 0, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_scam_package",
		sender: "Unknown", 
		subj: "Your package could not be delivered",
		body: "Hello customer. Your package is at customs. Please transfer a 2.50€ fee via this link, otherwise we will burn your package. Link: www.totally-legit-dhl-scam.ru",
		opts: [
			{ btn: "Open website", r: "Phishing page! You almost entered your data. IT-Sec noticed.", m: 2, f: 0, a: 10, c: 15 },
			{ btn: "Mark as Spam", r: "Nice try.", m: 2, f: 0, a: 0, c: 0 },
			{ btn: "Reply: 'Keep it'", r: "The email bounced (Mail Delivery Failure).", m: 2, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_wuttke_1",
		sender: "H. Wuttke (Accounting)",
		subj: "(No Subject)",
		body: "Goulash recipe easy quick without paprika",
		opts: [
			{ btn: "Reply: 'Horst, this is Outlook.'", r: "You enlighten him. Hopefully he understands.", m: 2, f: 0, a: 5, c: 0, nextEmail: "mail_wuttke_ai" },
			{ btn: "Forward to: Dr. Important", r: "Cold-blooded. You immediately report the private use.", m: 1, f: 0, a: -5, c: -10, nextEmail: "mail_wuttke_boss" },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_wuttke_ai",
		linked: true,
		sender: "H. Wuttke (Accounting)",
		subj: "RE: (No Subject)",
		body: "Thanks Outlook.\n\nPlease also order 2 cups of cream and noodles. But not the spiral noodles, my wife doesn't like those.\n\nSend.",
		opts: [
			{ btn: "You just don't get it, do you?", r: "You stare at the screen. There's no patch for this kind of stupidity.", m: 2, f: 5, a: 10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{
		id: "mail_wuttke_boss",
		linked: true,
		sender: "Dr. Important",
		subj: "FW: (No Subject)",
		body: "Müller,\n\nthanks for forwarding.\n\nTell Wuttke to put paprika in it, otherwise it won't taste good. And if he's already cooking, he should bring me a portion to the 4th floor.\n\n(You won't get anything, nobody likes a snitch.)",
		opts: [
			{ btn: "Oh great..", r: "The boss gets goulash, Wuttke gets praise, you get nothing.", m: 2, f: 0, a: 15, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_sabine_tupper",
		sender: "Sabine (Reception)", 
		subj: "WHO HAS MY TUPPERWARE?!",
		body: "This is the third time! My red container with the sticker 'SABINE' is gone! I'm searching all desks now! If I find it, God help you! I'm calling the police!",
		opts: [
			{ btn: "Reply-All: 'Chill out'", r: "Mistake! Sabine freaks out. She throws a stapler across the office. You have to hide under the desk.", m: 2, f: 0, a: 20, c: 10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. Not your problem. Let them fight.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_alert_login",
		sender: "SYSTEM ALERT (Automated)", 
		subj: "CRITICAL: Suspicious Login (CEO Account)",
		body: "Detected Login attempt for user 'CEO' from IP Address: 192.168.x.x (Location: Pyongyang, North Korea). Success: TRUE. \nAction required immediately!",
		opts: [
			{ btn: "Block account immediately", r: "You kicked the CEO out in the middle of a video conference. He's angry, but you saved the company from North Korea. Hero!", m: 5, f: -10, a: 0, c: -20 },
			{ btn: "Dismiss as VPN error", r: "It wasn't a VPN. All company data is now on the dark web. The stock price plummets to 0.", m: 2, f: 0, a: 50, c: 100 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_juergen_admin",
		sender: "Jürgen (Sales)", 
		subj: "Need Admin Rights FAST",
		body: "I need to convert this PDF for the client. Found a tool 'Free_PDF_Converter_Pro_Cracked.exe'. Windows is complaining about a virus, but it's a false alarm. Give me the password, client is waiting!!!",
		opts: [
			{ btn: "Just enter the password", r: "BAM. Ransomware. Everything encrypted. A skull laughs on your monitor. Guess it wasn't a false alarm.", m: 2, f: 0, a: 30, c: 50 },
			{ btn: "Go there & say 'No'", r: "You explain security to him. He doesn't listen, but you prevented the installation.", m: 5, f: -10, a: 10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_yoga_laugh",
		sender: "HR Feel Good Management", 
		subj: "MANDATORY ATTENDANCE: The 'Laughter Yoga' Break",
		body: "To boost morale, we're all meeting in the hallway for synchronous laughter! 'Hahahaha hihihi'! Anyone not laughing gets a note in their file for negative attitude! 😊😊😊",
		opts: [
			{ btn: "Go & participate", r: "You stand in the hallway doing 'Hahahaha'. You die inside, but HR is satisfied.", m: 10, f: 10, a: 20, c: -5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. You continue working. Later, HR asks why you're so negative.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_chantal_mac",
		sender: "Chantal (Marketing)", 
		subj: "My Mac is too sloooow!!! 😭",
		body: "I can't work like this! When I have Spotify, Photoshop, 50 Chrome tabs, and Sims 4 open at the same time, the mouse lags! I need the new MacBook Pro M3 Max with 96GB RAM! IMMEDIATELY! Otherwise, I'll tell the CEO!",
		opts: [
			{ btn: "Just order it", r: "You burned through 5000€ of budget. Chantal now uses the processing power for Instagram filters. The CFO hates you.", m: 5, f: 10, a: -10, c: 20 },
			{ btn: "Clean up Task Manager", r: "You close 'Sims 4' and 48 Chrome tabs. PC runs smoothly again. Chantal pouts.", m: 5, f: -5, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_legal_warning",
		sender: "Law Firm Abmahn & Sons", 
		subj: "WARNING: Copyright Infringement",
		body: "Dear Sir or Madam, the film 'Barbie vs. Oppenheimer' was illegally shared via your connection yesterday. We demand 900€ or we will sue you for millions.",
		opts: [
			{ btn: "Check the logs", r: "It was trainee Kevin. You make him pay the 900€ from his pocket money. Lesson learned.", m: 10, f: -10, a: 0, c: -5 },
			{ btn: "Immediately delete all traces", r: "You delete the evidence. Now the company is liable because no perpetrator can be identified. The boss has to pay and rages.", m: 5, f: 0, a: 10, c: 30 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_heating_war",
		sender: "All (Distribution List)", 
		subj: "HEATING TO 5!!!",
		body: "I'm cold! I've turned the heating to 5 and broken the knob so it stays that way! Anyone who opens the window will get it! Regards, Ms. Frost (from accounting)",
		opts: [
			{ btn: "Secretly open window", r: "You provide fresh air. Ms. Frost sneezes and glares at you.", m: 5, f: 5, a: 5, c: 0 },
			{ btn: "Work in swim trunks", r: "It's 35 degrees in the office. You're sweating. Productivity is at zero.", m: 2, f: 10, a: 10, c: 5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_chain_letter",
		sender: "Bernd (Sales)", 
		subj: "FWD: FWD: Must read or bad luck!!!",
		body: "This is the ghost of the dead server! 👻 Send this email to 10 colleagues, or your Wi-Fi will be slow forever! Don't ignore this, it happened to my cousin!!!",
		opts: [
			{ btn: "Forward to All", r: "You crashed the mail server. 500 people now hate you.", m: 1, f: 0, a: 20, c: 20 },
			{ btn: "Block Bernd", r: "Bernd is blacklisted. Finally peace.", m: 2, f: 0, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_bonus_fail",
		sender: "The Board", 
		subj: "IMPORTANT: Your Annual Bonus",
		body: "Dear employees, due to record sales, we have decided to give something back to you! Instead of a boring cash bonus, each of you will receive... a 5% discount voucher for the canteen (valid only on Mondays)! Thank you for your efforts!",
		opts: [
			{ btn: "Print & burn email", r: "The small fire in the trash warms your cold heart. Your aggro slightly decreases.", m: 5, f: 5, a: -5, c: 0 },
			{ btn: "Write thank-you email", r: "You brown-nose. Colleagues call you 'traitor', but the boss notes it positively.", m: 2, f: 0, a: 10, c: -10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_phish_iphone",
		sender: "Amaz0n-Giveaway-Official", 
		subj: "CONGRATULATIONS! You won an iPhone 15!!!",
		body: "Hello customer. You have been selected! Click HERE to receive your iPhone 15 Pro Max (Titan) immediately! Only valid for 5 more minutes! 📱🎁",
		opts: [
			{ btn: "CLICK! Bring it on!", r: "A window pops up: 'THIS WAS AN IT PHISHING TEST! YOU FAILED!' You now have to watch a 20-minute security video. Your day is ruined.", m: 20, f: -10, a: 50, c: 20 },
			{ btn: "Report as Phishing", r: "IT replies: 'Well done, Müller. You were the only one who didn't click.' A gold star in the system.", m: 2, f: 0, a: -5, c: -10 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_cleaner_fridge",
		sender: "Cleaning Team", 
		subj: "Fridge Level 3 (URGENT)",
		body: "We refuse to open the fridge on the 3rd floor. There's a Tupperware in there that... breathes. Mushrooms are already growing out of the seal. If it's not removed by 12 PM, we're calling pest control (at the department's expense)!",
		opts: [
			{ btn: "Bravely dispose", r: "You open the container. The stench is so foul you almost vomit. You're green in the face for the rest of the day. But the danger is averted.", m: 5, f: -5, a: 20, c: 0 },
			{ btn: "Seal fridge door", r: "You just tape the door shut and write 'BROKEN' on it. Problem preserved for eternity.", m: 5, f: 5, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. Not your food, not your fungus.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_thought_parking",
		sender: "You (Thoughts)", 
		subj: "Illegally Parked Car in Parking Lot 42",
		body: "You look out the window. A fat, new Porsche SUV is parked crookedly in YOUR parking spot! The audacity!",
		opts: [
			{ btn: "Call tow truck!", r: "The tow truck comes and takes the Porsche away. You feel satisfaction. 10 mins later the CEO yells: 'WHO HAD MY LOANER CAR TOWED?!' Oh crap...", m: 10, f: 0, a: 50, c: 80 },
			{ btn: "Flip up windshield wipers", r: "A small, passive-aggressive act of revenge. Feels good and no one saw it.", m: 5, f: 0, a: -10, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_chantal_printername",
		sender: "Chantal (Marketing)", 
		subj: "Brainstorming: Name for the Printer 🖨️✨",
		body: "Heeey Team! We want to give the printers 'personality'! Please everyone come to the 'Unicorn' meeting room and bring ideas! There will be vegan cookies (made from sawdust)!",
		opts: [
			{ btn: "Go & suggest 'Printy McPrintface'", r: "Everyone stares at you. Chantal finds it 'uninspired'. You wasted 15 minutes of your life.", m: 15, f: 10, a: 15, c: 0 },
			{ btn: "Reply: 'Paper Jam Paul'", r: "Your email is ignored, but at least you didn't have to get up.", m: 2, f: 5, a: -5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_gdpr_request",
		sender: "Former Employee (via Lawyer)", 
		subj: "GDPR Request Art. 15",
		body: "I hereby demand that you send me ALL data you have stored about me within the deadline. Including chat logs and internal notes!",
		opts: [
			{ btn: "Send everything (incl. chat logs)", r: "You actually send him everything. Even the logs where the boss calls him a 'loser'. He sues the company for bullying. The boss rages.", m: 10, f: -10, a: 20, c: 60 },
			{ btn: "Send standard text module", r: "You send a meaningless PDF: 'We unfortunately no longer have any relevant data'. He calms down. Bureaucracy wins.", m: 2, f: 5, a: -5, c: -5 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_xmas_vote",
		sender: "Works Council (Survey)", 
		subj: "Christmas Party: Bowling or Opera?",
		body: "Dear colleagues, for this year's party we have two options: \n1. 'Cosmic Bowling' (with blacklight and canned beer) \n2. 'The Magic Flute' (3.5 hours, suit required). \nPlease vote!",
		opts: [
			{ btn: "Team 'Bowling'", r: "You vote for bowling. IT cheers. Chantal is horrified ('My shoes!'). Mood +1.", m: 1, f: 5, a: -5, c: 0 },
			{ btn: "Team 'Opera'", r: "You vote for culture. Nobody likes you anymore. Kevin calls you 'nerd'.", m: 1, f: 0, a: 5, c: 5 },
			{ btn: "Reply-All: 'Booze!'", r: "Egon replies: 'My man!'. The boss reprimands you for 'unprofessional communication'.", m: 1, f: 0, a: 10, c: 15 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. You don't care. As long as there's food.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_egon_ball",
		sender: "Janitor Egon", 
		subj: "Lost and Found: Red Ball",
		body: "Morning. Found a red play-doh ball while sweeping. Stuck under the radiator in the hallway. Anyone missing it? If not, my dachshund gets it.",
		opts: [
			{ btn: "Reply: 'MINE! I'll pick it up!'", loot: "stressball", r: "You quickly run down to Egon before the dog snatches it. The ball is dusty, but still good.", m: 5, f: 0, a: -5, c: 0, },
			{ btn: "Reply: 'Let the dachshund have it'", r: "Egon is happy: 'Waldi thanks you!'. You did a good deed. The dachshund loves you now.", m: 1, f: 5, a: 0, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. The ball disappears into the dachshund. Opportunity lost.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_vacation_denied",
		sender: "HR (Automated)", 
		subj: "Your Vacation Request 2028",
		body: "Status update on your 'Summer Vacation' request: DENIED. \nReason: 'A server could theoretically fail during this time. We need you on standby.'",
		opts: [
			{ btn: "File an objection", r: "You write a two-page email with legal excerpts. HR doesn't reply, but you feel justified.", m: 15, f: -10, a: 20, c: 10 },
			{ btn: "Plan a sick leave", r: "If you can't get time off, you're just 'sick'. You grin wickedly and plan your 'cough'.", m: 5, f: 10, a: -10, c: 0 },
			{ btn: "Silently accept", r: "You stare at the wall. The wall stares back. Your soul dies a little.", m: 1, f: 0, a: 10, c: -5, },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_chantal_cat",
		sender: "Chantal (Marketing)", 
		subj: "Cat content for the website? 😻",
		body: "Heeeey! I photographed my cat 'Princess' as the company mascot! She's sitting on a server in the rack! Isn't that cute?! Should I put it live?",
		opts: [
			{ btn: "NO! Static electricity!", r: "You rush over. Cat gone, but server full of hair. Chantal pouts: 'You hate animals!'", m: 5, f: 0, a: 10, c: 0 },
			{ btn: "Reply: 'Sure, looks great!'", r: "The picture goes viral. 'Company relies on cat content'. Customers find it unprofessional, but traffic skyrockets. The boss is confused.", m: 2, f: 10, a: -5, c: 20 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. She just uploads it. The server overheats shortly after due to cat hair in the fan. You'll have to fix it later.", m: 1, f: 0, a: 0, c: 20, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_ticket_rating",
		sender: "IT-Support (Ticket-Bot)", 
		subj: "Please rate your solution",
		body: "You have closed the ticket 'PC on fire'. How satisfied were you with your own performance? \n(Star 1-5)",
		opts: [
			{ btn: "Give myself 5 stars", r: "You pat yourself on the back. 'Good man, this Müller.' The system saves: 'Excellent employee'.", m: 2, f: 5, a: -5, c: 0 },
			{ btn: "Give myself 1 star", r: "You're honest with yourself. That was pretty shoddy work. But at least it's not burning anymore.", m: 2, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_ceo_blockchain",
		sender: "Dr. Important (CEO)", 
		subj: "Idea: Blockchain Coffee Machine",
		body: "Müller! I read that blockchain is the future. Integrate it into the coffee machine! Every espresso should be minted as an NFT! Deadline: Tomorrow!",
		opts: [
			{ btn: "Reply: 'That's technically impossible'", r: "He disappointedly calls you an 'innovation killer'. Your radar rises because you 'lack vision'.",  m: 2, f: 0, a: 10, c: 10 },
			{ btn: "Reply: 'Brilliant idea, will implement!'", r: "You just stick a 'Blockchain Certified' sticker on the water tank. He doesn't notice the difference, but suddenly finds the coffee 'more decentralized'.", m: 2, f: 10, a: 0, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment. You pretend you never got the email. Risky. If he asks tomorrow, you have a real problem.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
	{ 
		id: "mail_canteen_menu",
		sender: "Canteen (Newsletter)", 
		subj: "Menu: 'Week of Experiments'",
		body: "Mon: Kale with Nutella \nTue: Pizza 'Hawaii' (pineapple only, no ham) \nWed: Surprise Stew (leftovers from Mon+Tue) \nThu: Schnitzel (vegan, made of cardboard) \nFri: Fish Stick Casserole",
		opts: [
			{ btn: "Print & Warn", r: "You hang the plan in the hallway as a warning. You saved lives.", m: 2, f: 0, a: 5, c: 0,  },
			{ btn: "Plan a fasting week", r: "You decide not to eat this week. Your stomach growls just thinking about it.", m: 1, f: 0, a: 5, c: 0 },
			{ btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
		]
	},
    {
        id: "mail_yogurt_1",
        sender: "Sandra (Accounting)",
        subj: "WHO WAS THAT?!",
        body: "There's a spoon in my yogurt ('The Big Farmer', Strawberry). It's half empty. Who does something like that?! I'm calling the police!",
        opts: [
            { btn: "Confession: 'I had low blood sugar.'", r: "Sandra screams through the hallway. But she appreciates the honesty.", m: 2, f: 0, a: 5, c: 0, nextEmail: "mail_yogurt_2" },
            { btn: "Lie: 'It was the cleaner.'", r: "You blame the innocent. Your radar rises.", m: 2, f: 0, a: -5, c: 10 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_yogurt_2",
        linked: true,
        sender: "Sandra (Accounting)",
        subj: "Re: WHO WAS THAT?!",
        body: "Low blood sugar?! That was my lunch! You owe me a kebab. With feta. Immediately.",
        opts: [
            { btn: "Offer a kebab", r: "You'll have to buy her a kebab during the next lunch break. Peace is expensive.", m: 2, f: -5, a: -10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_noise_1",
        sender: "Colleague Bernd",
        subj: "Your music...",
        body: "Morning, we can all hear your 'Death Metal' mix through your headphones. Could you turn it down? My plants are already dying.",
        opts: [
            { btn: "Turn down the music", r: "You're considerate. Boring, but nice.", m: 2, f: 0, a: -5, c: 0 },
            { btn: "Turn up the music", r: "Now at least they'll hear it in good quality.", m: 2, f: 5, a: 0, c: 5, nextEmail: "mail_noise_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_noise_2",
        linked: true,
        sender: "Colleague Bernd",
        subj: "Re: Your music...",
        body: "Okay, that's enough. I just cut your LAN cable. Enjoy the silence.",
        opts: [
            { btn: "Crap.", r: "No internet. You have to pretend it doesn't bother you.", m: 2, f: -5, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_bet_1",
        sender: "Kevin (Private)",
        subj: "Betting office opened! 💰",
        body: "Hey boss, we're currently betting on when the new project manager will have his first nervous breakdown. Stake: 5€. Wanna join?",
        opts: [
            { btn: "I bet on 'Today'", r: "You're in. Risky!", m: 2, f: 5, a: 0, c: 5, nextEmail: "mail_bet_win" },
            { btn: "I bet on 'Never'", r: "Optimist. You lose immediately.", m: 2, f: 0, a: 0, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_bet_win",
        linked: true,
        sender: "Kevin (Private)",
        subj: "WON!",
        body: "Dude! He just cried in the meeting because the projector didn't work! You won the pot! Here's 20€ (in canteen vouchers).",
        opts: [
            { btn: "That was easier than expected.", r: "You feel like an oracle.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_plant_1",
        sender: "Gabi (Reception)",
        subj: "My Bonsai 🌳",
        body: "Did anyone water my bonsai? It looks so... brown. And it smells like coffee.",
        opts: [
            { btn: "I just wanted to help!", r: "Coffee is fertilizer, right?", m: 2, f: 0, a: 0, c: 5, nextEmail: "mail_plant_2" },
            { btn: "It wasn't me.", r: "Lie. Your cup is still next to it.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_plant_2",
        linked: true,
        sender: "Gabi (Reception)",
        subj: "Re: My Bonsai 🌳",
        body: "You killed it! That was a family heirloom! It was 40 years old! You monster!",
        opts: [
            { btn: "Oops.", r: "Gabi isn't talking to you anymore. Finally peace at reception. Hopefully for a while.", m: 1, f: 5, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment.", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_cc_fail_1",
        sender: "Sales Manager Markus",
        subj: "Q3 Strategy (Top Secret)",
        body: "Hello Team, here's the plan on how we're going to rip off the customers. Please DO NOT forward!",
        opts: [
            { btn: "Reply All: 'Sounds illegal.'", r: "You sent that to all customers in CC...", m: 2, f: 0, a: 20, c: 20, nextEmail: "mail_cc_fail_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 5, ignoreEmail: true }
		]
    },
    {
        id: "mail_cc_fail_2",
        linked: true,
        sender: "Legal Department",
        subj: "IMMEDIATE SUMMONS",
        body: "Mr. Müller, report to the office immediately. Bring your lawyer. And a box for your belongings.",
        opts: [
            { btn: "It was nice knowing you all.", r: "Maximum stress.", m: 5, f: -20, a: 30, c: 40 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_survey_1",
        sender: "HR Survey Bot",
        subj: "Employee Satisfaction",
        body: "How happy are you on a scale of 1 (Very) to 10 (Extremely)?",
        opts: [
            { btn: "I am the happiest employee here. 10!", r: "You lie to the system. The bot is happy.", f: 5, a: -5, c: 0, nextEmail: "mail_survey_2" },
            { btn: "I'm still waiting for the company therapist's appointment. 1! ", r: "Error: Value not allowed.", f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_survey_2",
        linked: true,
        sender: "HR Survey Bot",
        subj: "Thanks!",
        body: "Great! Since you're so happy, we've canceled your salary increase. Happy employees don't need money!",
        opts: [
            { btn: "I hate you all.", r: "Irony of fate.", m: 2, f: 0, a: 15, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_coffee_1",
        sender: "Kitchen",
        subj: "Coffee Machine BROKEN",
        body: "Someone filled the water tank with milk. The machine is now making cheese.",
        opts: [
            { btn: "I'll fix it.", r: "You sacrifice yourself for the team.", m: 10, f: -10, a: -10, c: 0, nextEmail: "mail_coffee_2" },
            { btn: "I'll drink tea.", r: "You monster.", m: 2, f: 5, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_coffee_2",
        linked: true,
        sender: "All Colleagues",
        subj: "THANKS!!",
        body: "You're our hero! The coffee is flowing again! We'd build you a monument, but we don't have the budget.",
        opts: [
            { btn: "You're welcome.", r: "You feel needed. You feel better for the moment.", m: 1, f: 0, a: -20, c: -10 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_lottery_1",
        sender: "Betting Pool",
        subj: "Jackpot 90 Million!",
        body: "We're collecting for the Eurojackpot. 10€ stake. If we win, we all quit!",
        opts: [
            { btn: "I'm in! (10€)", r: "Hope dies last.", m: 2, f: 5, a: 0, c: 0, nextEmail: "mail_lottery_2" },
            { btn: "Gambling is a sin.", r: "You save money and fun.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_lottery_2",
        linked: true,
        sender: "Betting Pool",
        subj: "Result...",
        body: "We won! ... 12.50€. Everyone gets 40 cents back. Guess we're staying here after all. Keep working.",
        opts: [
            { btn: "Oh great.", r: "Reality kicks in.", m: 1, f: -5, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_borrow_1",
        sender: "Chantal",
        subj: "Stapler borrowed",
        body: "Hii, I borrowed your stapler for a bit. Mine... kinda exploded. I'll bring it right back!",
        opts: [
            { btn: "That was yesterday!", r: "You demand your property back.", m: 1, f: 0, a: 5, c: 0, nextEmail: "mail_borrow_2" },
            { btn: "Keep it.", r: "You have nothing to staple anyway and never used the thing.", m: 1, f: 5, a: 0, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_borrow_2",
        linked: true,
        sender: "Chantal",
        subj: "Re: Stapler borrowed",
        body: "Oops... 😬 It fell into the toilet. Sorryyy! I'll buy you a new one! (Eventually)",
        opts: [
            { btn: "Breathe...", r: "Your aggro slightly increases. Chantal is your arch-nemesis.", m: 1, f: 0, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_cleaner_1",
        sender: "Olga (Cleaning)",
        subj: "Unplugged",
        body: "Hello, I had to vacuum. I unplugged the noisy box with all the lights. It's nice and quiet now. Hope it's okay?",
        opts: [
            { btn: "Run to the server room!", r: "Panic! That was the main server!", m: 5, f: -10, a: 20, c: 10, nextEmail: "mail_cleaner_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. Probably just the coffee machine. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_cleaner_2",
        linked: true,
        sender: "System Alert",
        subj: "CRITICAL FAILURE",
        body: "Server 'BACKUP_MASTER' unreachable. Uptime: 0 seconds. Data loss imminent.",
        opts: [
            { btn: "Cry.", r: "The day is ruined. Olga deleted the company.", m: 5, f: -20, a: 20, c: 20 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_ceo_scam_1",
        sender: "Dr. Wlchtig (CEO)",
        subj: "Urgent Transfer",
        body: "Hello Mr. Müller, I'm in a secret meeting. Please immediately buy 10x 100€ Apple Gift Cards and send me the codes. Don't tell anyone!",
        opts: [
            { btn: "Alright, boss! Codes coming right up", r: "You fall for the oldest trick in the book.", m: 5, f: 0, a: 5, c: 5, nextEmail: "mail_ceo_scam_fail" },
            { btn: "Reply: 'Nice try.'", r: "You saw through the scammer.", m: 1, f: 0, a: -5, c: 0, nextEmail: "mail_ceo_scam_win" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_ceo_scam_fail",
        linked: true,
        sender: "Dr. Important",
        subj: "FW: Urgent Transfer",
        body: "Why is accounting deducting 1000€ from your cost center?! Get to my office. Immediately.",
        opts: [
            { btn: "Oh no.", r: "This is going to be expensive for you.", m: 2, f: 0, a: 20, c: 20 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_ceo_scam_win",
        linked: true,
        sender: "Dr. Wlchtig (CEO)",
        subj: "Re: Urgent Transfer",
        body: "F*** you, you little IT nerd! I'll find you!",
        opts: [
            { btn: "Smile contentedly and reply with a thumbs up.", r: "A victory for intelligence.", m: 2, f: 5, a: -5, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_meeting_1",
        sender: "Agile Coach Torben",
        subj: "Meeting: 'Feel Good Management'",
        body: "Invitation: We want to dance about our feelings for 20 minutes. Attendance mandatory for everyone!",
        opts: [
            { btn: "Attend", r: "You dance your name. It's humiliating, but relaxing. The boss is looking for you in the meantime.", m: 20, f: 20, a: -10, c: 20, nextEmail: "mail_meeting_2" },
            { btn: "Decline: 'Server on fire'", r: "You shirk work.", m: 1, f: 0, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_meeting_2",
        linked: true,
        sender: "Agile Coach Torben",
        subj: "Feedback Round",
        body: "Great how you opened up! Your aura was very... grey. We need to work on your chakra.",
        opts: [
            { btn: "Leave me alone.", r: "Never again.", m: 1, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_video_1",
        sender: "Distribution List: All",
        subj: "FWD: FWD: Funny Video!! 😂",
        body: "Check this out! The cat falls off the table! (Attachment: funny.mp4 - 450 MB)",
        opts: [
            { btn: "Watch", r: "You laugh. But the network lags.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Block sender", r: "The network is sacred to you. The user is angry.", m: 2, f: 0, a: 5, c: 0, nextEmail: "mail_video_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_video_2",
        linked: true,
        sender: "Colleague Bernd",
        subj: "My account isn't working?!",
        body: "I can't send emails anymore! Did you do something? I just wanted to spread joy!",
        opts: [
            { btn: "Joy is forbidden. How are you even emailing me if you're blocked?", r: "You feel like a dictator. Good.", m: 2, f: 0, a: -5, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_ac_1",
        sender: "Facility Mgt",
        subj: "Air conditioning broken",
        body: "The air conditioning is no longer cooling. It's heating now. Room temperature: 38 degrees. Good luck.",
        opts: [
            { btn: "Take off pants", r: "No one sees it under the desk. (Hopefully).", m: 2, f: 10, a: -5, c: 10, nextEmail: "mail_ac_pants" },
            { btn: "Suffer", r: "You sweat on the keyboard.", m: 2, f: -10, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_ac_pants",
        linked: true,
        sender: "HR (Sabine)",
        subj: "Dress Code",
        body: "Mr. Müller, we have received complaints. Please put your pants back on. This is not a nudist beach.",
        opts: [
            { btn: "Too bad.", r: "It was so nice and airy.", m: 1, f: -5, a: 5, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_key_1",
        sender: "Reception",
        subj: "Keys found",
        body: "A set of keys with a 'My Little Pony' charm has been found. Whose is it?",
        opts: [
            { btn: "That's mine!", r: "Embarrassing. You pick it up, blushing.", m: 2, f: 0, a: 5, c: 0, nextEmail: "mail_key_2" },
            { btn: "Stay silent", r: "You won't get into your apartment today.", m: 1, f: 0, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_key_2",
        linked: true,
        sender: "Gabi (Reception)",
        subj: "Re: Keys found",
        body: "Here it is. Cute charm. Suits you. *giggle*",
        opts: [
            { btn: "It belongs to my niece!", r: "Lie. Gabi doesn't believe a word you say.", m: 1, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_print_color_1",
        sender: "Controlling",
        subj: "Color Printing Ban",
        body: "Effective immediately, color printing is forbidden! Each color page costs 5 cents and will be deducted from your salary.",
        opts: [
            { btn: "Print everything in B&W", r: "The world is grey. Your soul too.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Print in color anyway", r: "Rebellion! You print a rainbow picture.", m: 2, f: 5, a: -5, c: 5, nextEmail: "mail_print_color_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_print_color_2",
        linked: true,
        sender: "Controlling",
        subj: "Payslip Correction",
        body: "Deduction for private color prints (motif: rainbow): 0.05€. We're watching you.",
        opts: [
            { btn: "It was worth it.", r: "You proudly hang the picture.", m: 1, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_dog_1",
        sender: "Chantal",
        subj: "Can Bello come along? 🐶",
        body: "My dog sitter is sick. Can Bello come to the office today? He only bites if he smells fear.",
        opts: [
            { btn: "Yes, I love dogs!", r: "Bello comes. He smells strong.", m: 2, f: 5, a: -5, c: 0, nextEmail: "mail_dog_bite" },
            { btn: "No, allergy.", r: "Chantal is offended.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_dog_bite",
        linked: true,
        sender: "Chantal",
        subj: "Oops...",
        body: "Sorry he ate your LAN cable and bit you. He probably smelled your fear (of work)!",
        opts: [
            { btn: "Call a doctor.", r: "You need a plaster and a new cable.", m: 2, f: -10, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_fridge_1",
        sender: "Kitchen",
        subj: "Mold Alert",
        body: "Something is alive in the fridge. It has fur and breathes. Anyone who doesn't pick up their Tupperware immediately will be fired.",
        opts: [
            { btn: "Get my container", r: "You dispose of the experiment in bio-hazard fashion.", m: 5, f: -5, a: 0, c: 0, nextEmail: "mail_fridge_2" },
            { btn: "Not my problem", r: "You hope it's not your container.", m: 2, f: 0, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_fridge_2",
        linked: true,
        sender: "Kitchen",
        subj: "Thanks",
        body: "Thanks for disposing of it. We briefly thought it was going to attack us. The fridge is safe again.",
        opts: [
            { btn: "Hero of labor.", r: "You saved humanity.", m: 2, f: 5, a: -5, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_software_1",
        sender: "Horst (Sales)",
        subj: "Great Free Software!",
        body: "I installed 'SpeedUpMyPC_Free.exe'. My PC is much more colorful now! Should I send you the link?",
        opts: [
            { btn: "Immediately disconnect PC!", r: "You run to Horst and pull the plug.", m: 5, f: -10, a: 10, c: -10, nextEmail: "mail_software_2" },
            { btn: "Go ahead...", r: "You want to watch the world burn.", m: 2, f: 5, a: -10, c: 20 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_software_2",
        linked: true,
        sender: "System",
        subj: "Threat Defense",
        body: "145 viruses, 20 Trojans, and 1 crypto-miner removed. Horst is banned from typing for 24 hours.",
        opts: [
            { btn: "Good.", r: "Another victory for IT.", m: 2, f: 0, a: -5, c: -10 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_canteen_1",
        sender: "Canteen",
        subj: "Today: 'Pot of Surprise'",
        body: "Dear diners, we've thrown all the week's leftovers into one pot. It's grey and bubbling. Price: 2.50€.",
        opts: [
            { btn: "I'm brave! (Eat)", r: "It tastes like fish and pudding.", m: 5, f: 0, a: 10, c: 0, nextEmail: "mail_canteen_2" },
            { btn: "I'd rather fast.", r: "You're hungry. Your stomach growls loudly.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_canteen_2",
        linked: true,
        sender: "Canteen",
        subj: "Re: Today: 'Pot of Surprise'",
        body: "Small warning: If you experience hallucinations, that's normal. It's due to Monday's mushroom risotto.",
        opts: [
            { btn: "The walls are melting...", r: "You're 'unfit for work' (high) for 30 minutes.", m: 30, f: 15, a: -5, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_tiktok_1",
        sender: "Marketing (Chantal)",
        subj: "We're on TikTok now! 💃",
        body: "Heyy! We need to appear 'young and dynamic'! Everyone come to the hallway for the 'Corporate Dance Challenge'!",
        opts: [
            { btn: "Participate (Dance)", r: "You make a fool of yourself. Chantal films everything.", m: 10, f: 5, a: 5, c: 0, nextEmail: "mail_tiktok_2" },
            { btn: "Hide", r: "You lock yourself in the toilet.", m: 10, f: 0, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_tiktok_2",
        linked: true,
        sender: "Marketing (Chantal)",
        subj: "VIRAL!!!",
        body: "OMG! Your 'robot dance' has 1 million views! The comments are asking if we need help. But: Fame is Fame!",
        opts: [
            { btn: "I want royalties.", r: "You are now the face of the company (unfortunately).", m: 2, f: 0, a: -10, c: 10 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_salary_1",
        sender: "HR System",
        subj: "Payslip CORRECTION",
        body: "Due to an error, we overpaid you by 5,000€ this month. Please do not spend it!",
        opts: [
            { btn: "Immediately transfer back", r: "Honesty is the best policy. How boring.", m: 2, f: 0, a: -5, c: 5, nextEmail: "mail_salary_honest" },
            { btn: "Keep the money & stay silent", r: "You immediately book a flight to the Maldives.", m: 2, f: 0, a: 0, c: -20, nextEmail: "mail_salary_fraud" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_salary_honest",
        linked: true,
        sender: "HR System",
        subj: "Thanks",
        body: "Thanks for your honesty. As a reward, you'll receive a company ballpoint pen (as soon as budget allows).",
        opts: [
            { btn: "Yay...", r: "You feel morally superior, but poor.", m: 2, f: 0, a: 0, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_salary_fraud",
        linked: true,
        sender: "Legal Department",
        subj: "FINAL WARNING",
        body: "We know you have the money. We are now seizing your office chair and coffee mug.",
        opts: [
            { btn: "Crap.", r: "You're sitting on the floor now.", m: 2, f: -5, a: 15, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_charging_1",
        sender: "Facility Mgt",
        subj: "EV Charging Station Blocked",
        body: "An old diesel Golf is blocking the only charging station for electric cars. License plate: DU-MM 123.",
        opts: [
            { btn: "Call tow truck", r: "Order must prevail!", m: 5, f: -5, a: -5, c: 0, nextEmail: "mail_charging_tow" },
            { btn: "Leave a note: 'Idiot'", r: "Passive-aggressive is your style.", m: 5, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_charging_tow",
        linked: true,
        sender: "Janitor Egon",
        subj: "My Car!!!",
        body: "Hey! Who had my car towed?! I just wanted to grab some rolls! Come down here!",
        opts: [
            { btn: "Hide.", r: "You messed with Egon. Bad idea.", m: 10, f: 5, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

    {
        id: "mail_lights_1",
        sender: "Smart Office App",
        subj: "Lighting Control: Beta Test",
        body: "You now have access to the lights in your department. Please use responsibly.",
        opts: [
            { btn: "Mode: 'Disco Strobe'", r: "Everything blinks colorfully. Colleagues have seizures.", m: 2, f: 10, a: -5, c: 0, nextEmail: "mail_lights_disco" },
            { btn: "Mode: 'Darkroom'", r: "Lights out. Time for a nap.", m: 2, f: 15, a: 0, c: 5, nextEmail: "mail_lights_dark" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_lights_disco",
        linked: true,
        sender: "Dr. Important",
        subj: "EYE CANCER",
        body: "Who's partying here?! I'm trying to make a call! Turn that off immediately, or I'll turn YOU off!",
        opts: [
            { btn: "Sorry, finger slipped.", r: "Quickly switch back to 'Boring White'.", m: 2, f: 0, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_lights_dark",
        linked: true,
        sender: "Colleague Bernd",
        subj: "Power outage?",
        body: "It's pitch black. I just ran into the copier. Are you still there?",
        opts: [
            { btn: "Shhh, I'm sleeping.", r: "You enjoy the darkness.", m: 2, f: 10, a: 0, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_intern_db_1",
        sender: "Kevin (Trainee)",
        subj: "Question about 'DELETE ALL'",
        body: "Boss? If it says 'Do you really want to delete the customer database?', do I have to click 'Yes' to make the window go away? It's annoying.",
        opts: [
            { btn: "NO!!! FOR GOD'S SAKE!", r: "You run off.", m: 5, f: -10, a: 20, c: 10, nextEmail: "mail_intern_db_panic" },
            { btn: "Sarcasm: 'Sure, go ahead.'", r: "You think he gets the joke.", m: 2, f: 5, a: 0, c: 0, nextEmail: "mail_intern_db_fail" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_intern_db_panic",
        linked: true,
        sender: "Kevin (Trainee)",
        subj: "Re: Question about 'DELETE ALL'",
        body: "Phew, okay. I clicked 'Cancel'. But now the screen is blue. Is that good?",
        opts: [
            { btn: "Better than deleted.", r: "Just a crash. Lucky break.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_intern_db_fail",
        linked: true,
        sender: "System Alert",
        subj: "DATABASE EMPTY",
        body: "Table 'Customers' contains 0 entries. Last backup: 1999.",
        opts: [
            { btn: "I quit.", r: "Pack your bags.", m: 10, f: 0, a: 50, c: -20 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_coffee_decaf_1",
        sender: "Health Committee",
        subj: "Heart Health Week",
        body: "For your own good, this week there's only decaf coffee (made from spelt). Stay healthy!",
        opts: [
            { btn: "Accept", r: "You fall asleep for a moment.", m: 15, f: 10, a: 0, c: 0 },
            { btn: "Organize contraband", r: "You deal Red Bull in the men's room.", m: 5, f: -5, a: -5, c: 10, nextEmail: "mail_coffee_decaf_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_coffee_decaf_2",
        linked: true,
        sender: "Colleague Bernd",
        subj: "Got any stuff?",
        body: "I heard you have real caffeine? I'll pay any price! My hands are already shaking!",
        opts: [
            { btn: "5€ per can.", r: "You become the office drug lord.", m: 2, f: 0, a: -10, c: 15 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_dsgvo_1",
        sender: "Data Protection Officer",
        subj: "GDPR Violation: Post-It",
        body: "There's a note on your monitor with 'Password123'. This is a red-level security risk.",
        opts: [
            { btn: "Eat the note", r: "Evidence destroyed. Tastes like paper and fear.", m: 2, f: 0, a: 5, c: -5, nextEmail: "mail_dsgvo_eaten" },
            { btn: "Lie: 'That's a Wi-Fi code'", r: "He doesn't believe it, but leaves you alone.", m: 2, f: 0, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_dsgvo_eaten",
        linked: true,
        sender: "Data Protection Officer",
        subj: "Re: GDPR Violation",
        body: "Did you just... swallow the note? I'm impressed by your dedication. Case closed.",
        opts: [
            { btn: "*Burp*", r: "Indigestion, but the job is safe.", m: 1, f: 0, a: -5, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_buzzword_1",
        sender: "Project Manager",
        subj: "Quick Sync re: Low Hanging Fruits",
        body: "Let's quickly brainstorm how we can shift the mindset. We need more agility in the backend!",
        opts: [
            { btn: "Reply: 'Bullshit Bingo!'", r: "You send him a completed bingo card.", m: 2, f: 5, a: -5, c: 5, nextEmail: "mail_buzzword_fail" },
            { btn: "Reply: 'I'm totally committed.'", r: "You die inside, but he's happy.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_buzzword_fail",
        linked: true,
        sender: "Project Manager",
        subj: "Re: Quick Sync",
        body: "Very funny. Your attitude isn't exactly 'Customer Centric'. We'll talk about this in your annual review.",
        opts: [
            { btn: "Whatever.", r: "Buzzwords can't hurt you.", m: 1, f: 0, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_birthday_wrong_1",
        sender: "HR System",
        subj: "Happy Birthday! 🎉",
        body: "Dear employee, happy 50th birthday! Pick up your free apple in the canteen!",
        opts: [
            { btn: "I'm only 28?!", r: "You email back angrily.", m: 2, f: 0, a: 10, c: 0, nextEmail: "mail_birthday_fix" },
            { btn: "Get apple", r: "Free is free. Even if you're officially old now.", m: 5, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_birthday_fix",
        linked: true,
        sender: "HR System",
        subj: "Ticket #9921",
        body: "Changing your date of birth requires form A38, notarized. Processing time: 6 months.",
        opts: [
            { btn: "I hate you all.", r: "You give up and age from stress.", m: 2, f: 0, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_mouse_1",
        sender: "Kevin (Trainee)",
        subj: "Mouse not working",
        body: "Boss, my mouse is broken. When I lift it up, the pointer doesn't move anymore. Huh?",
        opts: [
            { btn: "Seriously? 'Put it down.'", r: "You explain physics to him.", m: 5, f: 0, a: 5, c: 0, nextEmail: "mail_mouse_2" },
            { btn: "Buy a new one.", r: "Not your budget, not your problem.", m: 2, f: 5, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_mouse_2",
        linked: true,
        sender: "Kevin (Trainee)",
        subj: "WOW!",
        body: "It works!! You're a magician! I thought it was like with the remote control!",
        opts: [
            { btn: "Head -> Desk.", r: "Faith in humanity declines.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_temperature_1",
        sender: "Colleague Petra",
        subj: "It's drafty!",
        body: "Can you close the window? I'm getting a stiff neck! It's only 28 degrees outside!",
        opts: [
            { btn: "Window stays open!", r: "Fresh air is a human right.", m: 2, f: 0, a: -5, c: 5, nextEmail: "mail_temperature_war" },
            { btn: "Window closed (suffocation hazard)", r: "Oxygen level drops to 0%. You get tired.", m: 10, f: 10, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_temperature_war",
        linked: true,
        sender: "Colleague Petra",
        subj: "Re: It's drafty!",
        body: "Then I'm turning the heating to 5! That'll show you!",
        opts: [
            { btn: "Sauna war.", r: "It begins. No one works anymore, everyone sweats.", m: 2, f: 5, a: 15, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_printer_name_1",
        sender: "Office Management",
        subj: "Name for new printer",
        body: "Suggestions: 1. Printy McPrintface, 2. Paper Jam Paul, 3. The Beast. Please vote.",
        opts: [
            { btn: "Printy McPrintface", r: "Classic. Everyone laughs.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "The Beast", r: "Fitting. It looks evil.", m: 2, f: 0, a: 0, c: 0, nextEmail: "mail_printer_beast" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_printer_beast",
        linked: true,
        sender: "Office Management",
        subj: "Naming Ceremony: The Beast",
        body: "The printer is now called 'The Beast'. To celebrate, it immediately spat toner onto the carpet.",
        opts: [
            { btn: "Fitting name.", r: "You nod respectfully.", m: 2, f: 0, a: 0, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_darkmode_1",
        sender: "Design Team",
        subj: "Dark Mode Mandatory?",
        body: "We're considering switching everything to black. Saves power and looks cool. Thoughts?",
        opts: [
            { btn: "YES! MY EYES!", r: "Finally no more snow blindness.", m: 2, f: 5, a: -5, c: 0, nextEmail: "mail_darkmode_win" },
            { btn: "No, I like white.", r: "You monster. All developers hate you.", m: 2, f: 0, a: 5, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_darkmode_win",
        linked: true,
        sender: "Design Team",
        subj: "Welcome to the Dark Side",
        body: "Everything is black now. Unfortunately, so is the font color. We're working on it.",
        opts: [
            { btn: "I see nothing..", r: "But it looks cool.", m: 2, f: 10, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_secret_santa_1",
        sender: "Organizing Committee",
        subj: "Secret Santa in July",
        body: "We want to boost morale! Mandatory Secret Santa! You have to get a gift for 'Dr. Important'. Budget: 5€.",
        opts: [
            { btn: "Wrap toilet paper", r: "A practical gift. Bold.", m: 5, f: 0, a: -5, c: 10, nextEmail: "mail_santa_fail" },
            { btn: "Buy chocolate", r: "Boring, but safe.", m: 5, f: -5, a: 0, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_santa_fail",
        linked: true,
        sender: "Dr. Important",
        subj: "Your Gift",
        body: "Müller? Was that a dig at my work methods? Come to my office.",
        opts: [
            { btn: "Oops.", r: "That might have been too bold.", m: 5, f: 0, a: 20, c: 10 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_scam_prince_1",
        sender: "Prince Zamunda",
        subj: "FREE GOLD",
        body: "Hello my friend. I have 50 million gold bars. I need your account. 50/50 split?",
        opts: [
            { btn: "Reply: 'Send a sample first!'", r: "You troll the scammer.", m: 2, f: 5, a: 0, c: 0, nextEmail: "mail_scam_prince_2" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_scam_prince_2",
        linked: true,
        sender: "Prince Zamunda",
        subj: "Re: FREE GOLD",
        body: "Okay, I transferred 1 cent to you. Do you trust me now? Please send password.",
        opts: [
            { btn: "He actually transferred it!", r: "You're 1 cent richer. Profit.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_parking_scooter_1",
        sender: "Janitor Egon",
        subj: "E-Scooter in the Hallway",
        body: "Who parked their 'Lime-Scooter' in the server room? It beeps every 30 seconds.",
        opts: [
            { btn: "That's my company car.", r: "You're too lazy to walk.", m: 2, f: 5, a: 0, c: 5, nextEmail: "mail_parking_scooter_2" },
            { btn: "Throw it out", r: "You throw the scooter out the window.", m: 5, f: 0, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_parking_scooter_2",
        linked: true,
        sender: "Janitor Egon",
        subj: "Re: E-Scooter",
        body: "I connected it to the Wi-Fi. It's downloading updates now and blocking the line. Your problem.",
        opts: [
            { btn: "Crap.", r: "The internet is dead because of a scooter.", m: 2, f: -5, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_vegan_war_1",
        sender: "Canteen Committee",
        subj: "Schnitzel Ban?",
        body: "Discussion: Should we replace 'Schnitzel Tuesday' with 'Tofu Tornado Day'?",
        opts: [
            { btn: "NEVER! (Pro Schnitzel)", r: "You fight for your meat. IT stands behind you.", m: 2, f: 0, a: -5, c: 0, nextEmail: "mail_vegan_schnitzel" },
            { btn: "Yes, tofu is great.", r: "Everyone hates you. Seriously, everyone.", m: 2, f: 0, a: 15, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_vegan_schnitzel",
        linked: true,
        sender: "Canteen Committee",
        subj: "Voting Result",
        body: "The schnitzel stays! But it now costs 9.50€ (climate surcharge).",
        opts: [
            { btn: "An expensive victory.", r: "As long as it's breaded.", m: 2, f: 5, a: 0, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_pen_thief_1",
        sender: "Secretariat",
        subj: "Ballpoint Pen Shrinkage",
        body: "500 ballpoint pens are missing. Whoever has them, please return them. Anonymous box available.",
        opts: [
            { btn: "Return my 40 pieces", r: "You empty your drawer. It rattles loudly.", m: 5, f: 0, a: 0, c: 5, nextEmail: "mail_pen_thief_2" },
            { btn: "I know nothing.", r: "You build a fortress of pens.", m: 2, f: 5, a: 0, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_pen_thief_2",
        linked: true,
        sender: "Secretariat",
        subj: "Thanks...",
        body: "Thanks for returning them. Why were they all chewed?! We're throwing them away.",
        opts: [
            { btn: "I was nervous.", r: "Embarrassing.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_fire_alarm_1",
        sender: "Security",
        subj: "ANNOUNCED FIRE ALARM",
        body: "Today at 2 PM we will test the siren. Please DO NOT panic and DO NOT jump out the window.",
        opts: [
            { btn: "Put in earplugs", r: "You ignore everything. Pro.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Shout 'FIRE!' at 2 PM", r: "You provide realistic conditions.", m: 5, f: 0, a: 0, c: 10, nextEmail: "mail_fire_chaos" },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_fire_chaos",
        linked: true,
        sender: "Security",
        subj: "Post-Mortem",
        body: "Thanks to Mr. Müller, 3 colleagues jumped into the fountain. The exercise was a 'complete success'.",
        opts: [
            { btn: "You're welcome.", r: "Safety first.", m: 2, f: 0, a: -10, c: -5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_meme_1",
        sender: "Funny Günther",
        subj: "Weekend!!! 🍺🍺",
        body: "Here's a funny picture of a Minion drinking beer! Hahaha! Get it? Because work sucks!",
        opts: [
            { btn: "Reply with fake laughter", r: "You write 'LOL Günther!'. Your soul dies.", m: 2, f: 0, a: 5, c: 0 },
            { btn: "Block Günther", r: "Finally peace.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_consultant_1",
        sender: "McKinsey & Partner",
        subj: "Efficiency Analysis",
        body: "We are reviewing your department. Please log every toilet break in Excel.",
        opts: [
            { btn: "Fill out Excel", r: "You type: '09:00 - Pee'. Humiliating.", m: 5, f: -10, a: 15, c: 0, nextEmail: "mail_consultant_2" },
            { btn: "Falsify Excel", r: "You write that you never go. You are a robot.", m: 2, f: 5, a: 0, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_consultant_2",
        linked: true,
        sender: "McKinsey & Partner",
        subj: "Result",
        body: "You go too often. We recommend a catheter at the workplace to increase efficiency by 2%.",
        opts: [
            { btn: "I quit right now.", r: "Aggro at its limit.", m: 2, f: 0, a: 20, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_lottery_win_fake",
        sender: "Notary Dr. Fake",
        subj: "Inheritance from Nigeria",
        body: "Your distant uncle has died. He leaves you a diamond mine. Please transfer a 500€ fee.",
        opts: [
            { btn: "Seems legit. (Pay)", r: "You are so stupid.", m: 2, f: 0, a: 20, c: -20 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. You're not stupid, are you? ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_smell_1",
        sender: "Anonymous",
        subj: "Odor Nuisance",
        body: "Someone in this office smells like old cheese and despair. Please shower.",
        opts: [
            { btn: "Do I smell that?", r: "You sniff yourself. Maybe?", m: 2, f: 0, a: 5, c: 5, nextEmail: "mail_smell_2" },
            { btn: "That's Kevin.", r: "It's always Kevin.", m: 2, f: 5, a: -5, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_smell_2",
        linked: true,
        sender: "Anonymous",
        subj: "Re: Odor Nuisance",
        body: "Yes, it's you. Deodorant helps. Thanks.",
        opts: [
            { btn: "Ouch.", r: "That hurt. Self-esteem drops.", m: 2, f: 0, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_teambuilding_1",
        sender: "HR (Sabine)",
        subj: "Team Event: Forest Survival",
        body: "We're dropping you in the forest. No phones. Whoever gets back first won't be fired.",
        opts: [
            { btn: "Call in sick", r: "Suddenly you have 'back pain'.", m: 2, f: 10, a: -5, c: 0 },
            { btn: "I'm bringing a knife.", r: "You're ready for the 'Hunger Games'.", m: 2, f: 0, a: 5, c: 5 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },
    {
        id: "mail_printer_color_cyan",
        sender: "Printer",
        subj: "TONER EMPTY",
        body: "Cyan is empty. I cannot print this black and white document because I need Cyan to mix black.",
        opts: [
            { btn: "Hit the printer", r: "It doesn't help, but it feels good.", m: 5, f: 0, a: 5, c: 0 },
            { btn: "Copy by hand with a pen", r: "Back to the Middle Ages.", m: 10, f: -10, a: 10, c: 0 },
            { btn: "Delete & Ignore", r: "Email deleted without comment. ", m: 1, f: 0, a: 0, c: 10, ignoreEmail: true }
        ]
    },

];