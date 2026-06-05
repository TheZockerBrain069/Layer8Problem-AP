export const party = [

	{
		id: 'party_start',
		title: 'SYSTEM OVERRIDE: Synergy Gala',
		text: '4:30 PM. You\'re just shutting down your PC, planning a stealthy exit through the back door. Suddenly, Chantal appears, slapping a garish "Hello my name is" sticker right onto your forehead as she breezes past. You\'re trapped: Welcome to the GlobalCorp Summer Party.\n\nThe event kicks off in the main hall. CEO Dr. Wichtig is delivering an excruciatingly dull, 45-minute presentation on "Agile Celebrations in the Age of AI." The projector is blurry, someone stole the laser pointer, and the AC has clearly given up the ghost.',
		opts: [
			{ t: 'Endure with applause', a: 25, r: 'You stand in the crowd, clapping dutifully to the rhythm of corporate platitudes. It\'s horribly embarrassing, sweat trickles down your back, and your aggression skyrockets with every new buzzword.', next: 'party_hub' },
			{ t: 'Unplug the projector', f: 10, a: -15, r: 'You pretend to trip. A "technical malfunction" ends the speech prematurely. A collective, quiet sigh of relief sweeps through the hall. You are the silent hero of the hour.', next: 'party_hub' },
			{ t: 'Stare at your phone and drift off', f: 20, a: 5, r: 'You apathetically scroll through Reddit. The CEO drones on and on, but your mind has long since clocked out. Very relaxing, even if standing is annoying.', next: 'party_hub' }
		]
	},
	{
		id: 'party_hub',
		title: 'The Party Hub',
		text: 'The neon lights flicker unhealthily, and the bass thumps from the speakers.\n\nYou\'re in the foyer. The air is thick, the noise deafening. You see colleagues doing things tonight they\'ll be mortified about come Monday. Where to now?',
		opts: [
			{ t: '🍻 To the Bar (Markus, Kevin & Co.)', action: "engine.goToPartyStation('bar')", checkPool: 'bar' },
			{ t: '🥗 To the Buffet (Food & Survival)', action: "engine.goToPartyStation('buffet')", checkPool: 'buffet' },
			{ t: '🕺 To the Dance Floor (Noise & Embarrassment)', action: "engine.goToPartyStation('dance')", checkPool: 'dance' },
			{ t: '🪴 To the Lounge (Gabi & Gossip)', action: "engine.goToPartyStation('lounge')", checkPool: 'lounge' },
			{ t: '🚬 Outside (Smoker\'s Corner)', action: "engine.goToPartyStation('outside')", checkPool: 'outside' },
			{ t: '🚽 Flee to the Restroom', action: "engine.goToPartyStation('toilet')", checkPool: 'toilet' }
		]
	},
        
	// --- BAR EVENTS (7) ---
	{
		id: 'party_bar_1', loc: 'bar',
		char: "Markus",
		title: 'The Crypto Sermon',
		text: 'You approach the bar. Markus from Sales has cornered intern Kevin. Markus clearly has three Scotches in him and is loudly explaining to the utterly overwhelmed intern how to invest "high-ticket synergies" into new crypto coins. Kevin looks like he\'s about to cry or throw up.',
		opts: [
			{ t: 'Rescue Kevin with a server emergency', a: -15, r: 'You push your way in with a look of utmost importance, frantically tapping on your phone. "Kevin! The data center\'s on fire, we have to go!" You drag him away. Markus doesn\'t even notice, continuing to explain the principle of Proof-of-Work to the empty wall.', next: 'party_hub' },
			{ t: 'Pitch Markus your own blockchain', a: 30, f: 15, r: 'You spontaneously invent the "GlobalCoin," backed by the cafeteria\'s coffee beans. It\'s incredibly embarrassing, but Markus excitedly pulls out his notepad. You feel your own soul shrivel a little from vicarious embarrassment.', next: 'party_hub' },
			{ t: 'Grab popcorn and enjoy the show', f: 25, a: 10, r: 'You leisurely grab a cold beer, lean comfortably against the counter, and watch the spectacle. Kevin\'s silent plea for help in his eyes is your personal, high-class entertainment for the evening.', next: 'party_hub' },
			{ t: 'Insult Markus directly', a: -10, f: -10, r: '"Markus, that\'s a glorified pyramid scheme for business majors," you say coldly. The music seems to stop briefly. Markus turns beet red, snorts contemptuously, and storms off to the restroom in a huff. Kevin whispers a quiet "Thanks" to you.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_2', loc: 'bar',
		title: 'Shots with Sales',
		text: 'A gaggle of sales reps has hijacked the bar. The department head orders a round of extremely cheap tequila for everyone nearby – including you. "To the basement dwellers from IT!" he roars. Everyone stares at you expectantly.',
		opts: [
			{ t: 'Down the shot ice-cold', f: 35, a: -20, r: 'The stuff burns like 90-proof disinfectant and tastes of regret. But the sales reps cheer and slap you on the back! You\'ve earned the respect of the suit-wearers and feel the day\'s tension suddenly vanish.', next: 'party_hub' },
			{ t: 'Secretly pour the shot into the Ficus', f: 15, a: 0, r: 'While the crowd roars and throws their heads back, you smoothly pour the poison into the poor Ficus next to you. The tree probably won\'t survive the weekend, but you keep a clear head.', next: 'party_hub' },
			{ t: 'Loudly and annoyed refuse', a: 25, r: '"I don\'t drink with people who can\'t even rotate a PDF," you announce loudly. The boisterous mood drops to zero in a split second. You stand proudly, but completely isolated at the bar.', next: 'party_hub' },
			{ t: 'Fake water in the shot glass', f: 10, a: -5, r: 'You subtly swap the glass for tap water, throw your arms up, and join in. Maximum integration with minimal brain damage. A truly seamless admin move.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_3', loc: 'bar',
		title: 'The Tapping Intern',
		text: 'The external bartender has gone for a smoke. Kevin is secretly trying to tap a beer. He yanks the tap open. The glass is 95% foam, the keg sputters, and the expensive Pilsner threatens to overflow.',
		opts: [
			{ t: 'Operate the tap professionally', f: -15, a: -10, r: 'You gently but firmly push Kevin aside and show him the sacred 45-degree angle of the pouring art. The golden liquid flows perfectly into the glass. Craftsmanship still has its golden touch, even outside of IT.', next: 'party_hub' },
			{ t: 'Laugh at him loudly', a: 20, r: 'You laugh so loud and dirty that Kevin flinches in panic. He drops the glass, and a sticky, foamy mess spills over his new sneakers. Mean, but extremely satisfying for you.', next: 'party_hub' },
			{ t: 'Take over the keg and serve', f: 40, a: -20, r: 'You take off your jacket and appoint yourself the unofficial tap master of the gala. Within minutes, you have a line of happy, thirsty colleagues in front of you. You\'re working again, but you\'re the undisputed king of the bar.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_4', loc: 'bar',
		title: 'Cocktail Roulette',
		text: 'A colleague from accounting is mixing himself a cocktail: blue peppermint syrup, vodka, and wheat beer. It looks like toxic dishwater. "Wanna try a sip?"',
		opts: [
			{ t: 'Let him try it and watch', a: 15, f: 10, r: 'The accountant takes a big gulp, his eyes widening in panicked regret. He gags, claps a hand over his mouth, and sprints towards the men\'s room. An absolutely legendary sight.', next: 'party_hub' },
			{ t: 'Slap the cup out of his hand', a: 10, f: -5, r: '"That\'s a crime against good taste and your liver!" you exclaim, slapping the cup out of his hand. He looks sadly at the sticky puddle, but you\'ve just prevented something worse.', next: 'party_hub' },
			{ t: 'Bravely take a tiny sip', f: 20, a: 20, r: 'You sacrifice yourself for science. It tastes like expired toothpaste, stale yeast, and pure pain. Your stomach immediately rebels. One of the worst decisions of your life.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_5', loc: 'bar',
		title: 'The Golden Company Card',
		text: 'You notice Dr. Wichtig has forgotten his black company credit card on the sticky counter. The bartender is currently asking, "Whose tab are those five bottles of champagne over there going on?"',
		opts: [
			{ t: 'Point to the company card', f: 20, a: -10, r: '"It\'s all on the boss!" you yell across the bar, pointing at the card. The bystanders cheer ecstatically. The bartender starts pouring. The boss will weep bitterly tomorrow when he sees the bill.', next: 'party_hub' },
			{ t: 'Return the card to the boss', f: -10, a: -5, r: 'You search for the CEO in the crowd and press the card into his hand. He merely grunts a curt "Thanks" and turns away again. You gain no glory, but at least a clear conscience.', next: 'party_hub' },
			{ t: 'Order 3 more cocktails for yourself', f: 30, a: -15, r: 'You ruthlessly seize the opportunity. The champagne was too risky, but three noble Mojitos surely won\'t make a dent in the bill. You feel like a criminal genius.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_6', loc: 'bar',
		title: 'The Health Apostle',
		text: 'You want to get a cold beer. A colleague from "Feel-Good Management" is blocking the fridge. "Alcohol is poison for synergies! Drink this energized ginger water!"',
		opts: [
			{ t: 'Drink ginger water (Submission)', f: 5, a: 15, r: 'You resign yourself to your fate and take a sip. It tastes like spicy soap mixed with dishwater. You\'re immensely annoyed by your own weakness and spinelessness.', next: 'party_hub' },
			{ t: 'Push him away: "I need hops!"', a: -10, f: 0, r: 'You firmly push him aside, yank open the fridge, and grab an ice-cold Pilsner. "Toxic masculinity!" he whispers in horror, as you hiss open the bottle cap.', next: 'party_hub' },
			{ t: 'Argue: "Beer is just grain smoothie too."', f: 15, a: 5, r: 'You engage him in a highly absurd, pseudo-scientific discussion about the isotonic benefits of wheat beer until he rolls his eyes in exasperation and gives up. Victory through annoyance.', next: 'party_hub' }
		]
	},
	{
		id: 'party_bar_7', loc: 'bar',
		title: 'The Pink Drink',
		text: 'The stressed bartender wordlessly shoves a huge, bright pink drink with three tiny umbrellas and a sparkler into your hand. "For Chantal, take it to her!"',
		opts: [
			{ t: 'Drink it yourself', f: 25, a: -10, r: 'You suck on the straw. An explosion of pure syrup-sugar and cheap vodka! You feel fantastic, even if you look utterly ridiculous with the glowing drink and sparkler.', next: 'party_hub' },
			{ t: ' dutifully take it to Chantal', f: -10, a: 5, r: 'You play the obedient waiter, balancing the monstrosity through the crowd. Chantal takes it without a single "thank you" and immediately turns away again. You feel utterly humiliated.', next: 'party_hub' },
			{ t: 'Just leave the glass there', f: 10, a: 0, r: 'You\'re a system administrator, not a butler. You just turn around and leave. Some poor intern will have to deal with the flaming glass.', next: 'party_hub' }
		]
	},

	// --- BUFFET EVENTS (7) ---
	{
		id: 'party_buffet_1', loc: 'buffet',
		char: "Egon",
		title: 'The Meat Hedgehog Guardian',
		text: 'Janitor Egon is guarding the buffet. He has a watchful eye on the gigantic meat hedgehog. "Halt! One roll per person! Management hasn\'t eaten yet!" he growls.',
		opts: [
			{ t: 'Confuse him with jargon', f: 15, r: 'You shout with feigned panic: "Egon, quick! The siphon is leaking at the distribution box in the hallway!" Egon\'s eyes widen, and he dashes off. You quietly laugh and pile a massive mountain of meat onto your plate undisturbed.', next: 'party_hub' },
			{ t: 'Argue and demand rights', a: 25, f: -5, r: 'You begin a heated, 10-minute debate about employee rights at the buffet. Egon crosses his arms and remains as stubborn as a concrete wall. You leave hungry, stressed, and with dangerously high blood pressure.', next: 'party_hub' },
			{ t: 'Aggressively grab food', a: -10, f: -10, r: 'You resolutely push Egon aside. "I work 60 hours a week, I\'m taking what I want now!" Egon is so perplexed by your sudden alpha energy that he lets you proceed with an open mouth.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_2', loc: 'buffet',
		char: "Frau Elster",
		title: 'The Tupperware Mafia',
		text: 'Ms. Elster is crouched half-hidden behind a tablecloth, secretly but extremely quickly shoveling vast quantities of expensive scampi into a huge plastic container. When she notices you, she freezes.',
		opts: [
			{ t: 'Wordlessly pull out your own container', f: 30, a: -15, r: 'You nod at each other in silent, deep understanding. Like a well-oiled syndicate, you plunder the buffet, stuffing the finest pieces into your Tupperware. An unholy, but extremely delicious alliance.', next: 'party_hub' },
			{ t: 'Loudly clear your throat and disapprove', a: 20, r: 'She turns bright red, panickedly shoves the half-full container into her handbag, and hisses "Snitch!" as she leaves. You stand as the moral victor before the full platters, grinning.', next: 'party_hub' },
			{ t: 'Blackmail: "That\'ll cost me a plate."', a: 0, f: 20, r: 'She sighs in extreme annoyance but piles a generous portion of expensive roast beef onto your plate. "For that, you keep your mouth shut, Müller!" Deal accepted. Silence tastes delicious.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_3', loc: 'buffet',
		title: 'Vegan War',
		text: 'The "High-Protein Tofu Salad" is dangerously close to the Bavarian sausage platter. Someone has swapped the serving spoons. The mood among the guests is tense.',
		opts: [
			{ t: 'Secretly clean and sort spoons', f: -15, a: -10, r: 'You meticulously wipe the spoons with a napkin and place them back in their exact correct spots. You have just prevented a bloody civil war at the buffet. No one notices, but you know you\'re the hero of the evening.', next: 'party_hub' },
			{ t: 'Pour oil on the fire', a: 40, f: 15, r: 'You stand in the middle of the crowd and theatrically shout: "Tell me, is there actually pork belly in this organic tofu for flavor?!" The loud chaos and outrage that erupt are absolutely cinematic.', next: 'party_hub' },
			{ t: 'Just take salad and leave', f: 10, a: 5, r: 'You don\'t get involved, hastily grab some greens, and leave the danger zone before the first insults start flying. Good for the nerves.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_4', loc: 'buffet',
		char: "Kevin",
		title: 'The Chocolate Fountain Drama',
		text: 'The chocolate fountain is overflowing! Kevin threw a gigantic piece of melon into it, blocking the drain. The sticky flood is approaching the white carpet.',
		opts: [
			{ t: 'Bravely fish out the melon', f: -20, a: 15, r: 'You bravely reach into the scalding hot, brown mass and pull out the sticky melon block. Your shirt sleeve is ruined and terribly sticky, but the white carpet is saved. A silent, sacrificial death.', next: 'party_hub' },
			{ t: 'Hold a strawberry skewer in it', f: 25, a: -10, r: 'After us, the deluge! You ruthlessly exploit the wild fountain of liquid chocolate. By the time the carpet is utterly ruined, you\'re long full and far away.', next: 'party_hub' },
			{ t: 'Pull the pump\'s plug', f: 0, a: 10, r: 'You crawl under the table and mercilessly pull the power plug. The fountain gurgles to a halt. The bystanders loudly boo you because dessert is canceled, but you\'ve prevented water damage.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_5', loc: 'buffet',
		title: 'The VIP Zone',
		text: 'At the end of the buffet, there\'s a bowl of real caviar and oysters. A sign says: "Management Only." Your mouth waters.',
		opts: [
			{ t: 'Ruthlessly grab some', a: -5, f: 20, r: 'You shovel absolute luxury onto your paper plate. A department head stares at you in disbelief, but is so shocked by your audacity that he can\'t utter a word. You eat like an emperor.', next: 'party_hub' },
			{ t: 'Follow the rules', a: 15, f: -5, r: 'You dutifully content yourself with the watery potato salad. As you chew, you have to watch Dr. Wichtig slurp down one expensive oyster after another. Class society hurts.', next: 'party_hub' },
			{ t: 'Subtly swap the sign', a: 10, f: 15, r: 'You swiftly swap the VIP sign with the one from the "Vegan Soy Stew." The confusion of the managers, suddenly bending over the mush, is simply priceless. A master-class prank.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_6', loc: 'buffet',
		title: 'The Sauce Accident',
		text: 'Someone in front of you spilled something. A thick blob of ketchup lies on the floor. The HR manager is tottering towards it in her expensive Prada heels.',
		opts: [
			{ t: 'Warn: "Watch out, ketchup!"', f: -5, a: -10, r: 'She stops at the last moment, wobbles briefly on her high heels, and sighs in relief. "Phew, thanks, Müller! That dress was expensive! You\'re my hero!" Your karma account fills up.', next: 'party_hub' },
			{ t: 'Stay silent and watch', f: 15, a: 25, r: '*Splat*. She slips completely, flails wildly with her arms, and ketchup splashes broadly onto her white dress. An extremely wicked, but fascinating spectacle that you watch with a silent grin.', next: 'party_hub' },
			{ t: 'Quickly walk through it yourself', f: 5, a: 5, r: 'You deliberately step right into it and smear the red puddle on the floor. Now your left shoe sticks with every step, but the treacherous trap for your colleague is disarmed.', next: 'party_hub' }
		]
	},
	{
		id: 'party_buffet_7', loc: 'buffet',
		char: "Kevin",
		title: 'Decoration Eater',
		text: 'You see Kevin desperately chewing on a piece of decorative lemon with the peel, thinking it\'s part of the main course. He looks like he\'s about to cry.',
		opts: [
			{ t: 'Put him out of his misery: "That\'s decoration, Kevin."', f: -5, a: -5, r: 'Kevin immediately spits the bitter piece into a napkin. "Ugh! I thought this was that trendy molecular cuisine..." He\'s infinitely grateful you saved his taste buds.', next: 'party_hub' },
			{ t: 'Praise him: "Eat the peel, it has vitamins!"', f: 10, a: 15, r: 'Kevin bravely swallows the tough, bitter piece of peel, trying to smile. "Very... healthy!" he croaks. You are a truly cruel, sadistic person.', next: 'party_hub' },
			{ t: 'Ignore him', f: 5, a: 0, r: 'You watch with relish. He\'ll eventually realize that lemon peels aren\'t a delicacy. One only learns in life through pain and bitter experiences.', next: 'party_hub' }
		]
	},

	// --- DANCEFLOOR EVENTS (7) ---
	{
		id: 'party_dance_1', loc: 'dance',
		char: "Chantal",
		title: 'The Agile Flashmob',
		text: 'Chantal has hijacked the microphone and is trying to start a choreographed "corporate dance" to promote synergy. She aggressively waves you onto the dance floor.',
		opts: [
			{ t: 'Join in and dance the Macarena', a: 60, f: -15, r: 'You step onto the floor and sacrifice your very last shred of dignity. The vicarious embarrassment is physically palpable throughout the room. But Chantal cheers, claps along, and adores you for it.', next: 'party_hub' },
			{ t: 'Stand perfectly still', a: 15, f: 10, r: 'You don\'t move a single muscle and just stare at her emotionlessly. Chantal eventually gives up, embarrassed, stops the dance, and the music awkwardly continues.', next: 'party_hub' },
			{ t: 'Pull the power plug', f: 10, a: -30, r: 'You yank the main plug of the PA system from the wall. The music dies with a nasty screech. "Oh, power outage," you innocently call into the silence. The entire staff secretly breathes a sigh of relief.', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_2', loc: 'dance',
		char: "Dr. Wichtig",
		title: 'The Boss Escalates',
		text: 'Dr. Wichtig has tied his tie around his head like Rambo and is attempting breakdancing in the middle of the circle. It looks dangerously like a slipped disc waiting to happen.',
		opts: [
			{ t: 'Secretly film (blackmail material)', a: 25, f: 10, r: 'You film him head-on. The boss writhes uncoordinatedly on the floor. This is prime, high-resolution blackmail material for your next salary negotiation. You grin wickedly.', next: 'party_hub' },
			{ t: 'Cheer and clap', f: 20, a: -5, r: 'Your clapping encourages the boss, who performs a crashing "worm" and audibly rips his suit pants. An absolute feast for everyone present.', next: 'party_hub' },
			{ t: 'Remove him from the floor out of pity', f: -10, a: 10, r: 'You go over, take him by the arm, and whisper: "Boss, the important investors are watching." He stops abruptly, turns pale, and adjusts his tie. You\'ve saved him from total ruin.', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_3', loc: 'dance',
		title: 'Music Requests for the DJ',
		text: 'The DJ has been playing unbearable German party hits for an hour. The audience is visibly suffering. The DJ grins behind cheap sunglasses.',
		opts: [
			{ t: 'Force him to play 90s Eurodance', f: 15, a: -10, r: '"Play Rhythm is a Dancer, or I\'ll cut off the guest Wi-Fi right now," you threaten. The DJ obeys, terrified. The beat drops, and the mood on the floor explodes into pure 90s ecstasy.', next: 'party_hub' },
			{ t: 'Bang your head on the table', a: 30, f: 0, r: 'You can\'t take the third Helene Fischer song anymore. You repeatedly lightly bang your head against the tabletop. The dull physical pain wonderfully distracts from the auditory suffering.', next: 'party_hub' },
			{ t: 'Hijack the Aux cable', a: -20, f: 5, r: 'You mercilessly yank out his Aux cable and blast hard, dark synthwave from your phone. The DJ almost cries, but the assembled IT department celebrates you as a god.', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_4', loc: 'dance',
		title: 'The Threatening Conga Line',
		text: 'A conga line snakes through the room, led by the controller with a whistle. The train is heading straight for you!',
		opts: [
			{ t: 'Dive for safety', f: 10, a: -10, r: 'With a skillful dive, you duck under a high-top table and crawl behind a pillar. You\'ve escaped absolute corporate madness at the last second.', next: 'party_hub' },
			{ t: 'Reluctantly join in', a: 40, f: -15, r: 'You grab the shoulders of the heavily sweating person in front of you and join the line. As you sway to the beat, you literally feel your will to live draining from your body.', next: 'party_hub' },
			{ t: 'Block the train', a: 20, f: 5, r: 'You stand wide-legged with crossed arms directly in their path. "The ride ends here!" you yell. The controller angrily whistles at you, but the chain breaks. Revolution!', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_5', loc: 'dance',
		title: 'The Slow Dance Song',
		text: 'The lights dim. Suddenly, "Careless Whisper" plays. A slightly tipsy colleague from accounting purposefully approaches you with a longing gaze.',
		opts: [
			{ t: 'Flee to the restroom', f: 15, a: 5, r: 'You turn on your heel and sprint towards the men\'s room. The colleague is confused and instead latches onto the utterly perplexed janitor Egon for the slow dance.', next: 'party_hub' },
			{ t: 'Dance with her', a: 40, f: -10, r: 'You sway stiffly like a board with her for what feels like an eternity. She slurs into your ear and painfully steps on your foot three times. Pure torture.', next: 'party_hub' },
			{ t: 'Offer Kevin as a substitute victim', f: 10, a: -5, r: 'You grab the intern by the collar and place him exactly between you and the colleague. She immediately embraces Kevin. He looks panicked, but you are free and get a beer.', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_6', loc: 'dance',
		title: 'The Bumping Dancer',
		text: 'A completely euphoric guy from logistics is dancing like a bouncy ball. He jumps wildly in circles and painfully rams his elbow into your ribs.',
		opts: [
			{ t: 'Bump back (start a mosh pit)', a: 20, f: -15, r: 'You dig in your shoulder and ram him back hard. He laughs loudly and shoves again. Suddenly, you\'ve started a small but fine IT mosh pit in the middle of the dance floor.', next: 'party_hub' },
			{ t: 'Angrily retreat', a: 15, f: 5, r: 'You rub your aching ribs and angrily retreat to the quiet edge. Wild, extroverted people are just terribly exhausting.', next: 'party_hub' },
			{ t: 'Discreetly trip him', a: -10, f: 0, r: 'You subtly stick out your foot. He stumbles inelegantly and falls flat on the parquet. Afterwards, he dances much more calmly and respectfully. Danger discreetly averted.', next: 'party_hub' }
		]
	},
	{
		id: 'party_dance_7', loc: 'dance',
		title: 'The Wallflowers',
		text: 'You\'re standing at the edge of the dance floor. Next to you are three other IT guys. All are holding their beers in front of their chests, nodding in millimeter-perfect sync to the beat.',
		opts: [
			{ t: 'Just nod along', f: 20, a: -5, r: 'You seamlessly integrate into the pack. You are a silent, nodding brotherhood of rhythm-illiterates. No words needed, just the beat and the beer.', next: 'party_hub' },
			{ t: 'Force the group to dance', a: 15, f: -10, r: 'You mercilessly drag the poor guys onto the illuminated floor. They look like frightened deer in headlights and now hate you with all their hearts.', next: 'party_hub' },
			{ t: 'Ironically dance the robot', f: 5, a: 10, r: 'You start doing extremely stiff, ironic robot moves. The other IT guys quietly laugh and toast you. You are the undisputed king of the nerds.', next: 'party_hub' }
		]
	},

	// --- LOUNGE EVENTS (7) ---
	{
		id: 'party_lounge_1', loc: 'lounge',
		char: "Gabi",
		title: 'Gabi\'s Gossip Corner',
		text: 'Gabi is sitting in an armchair. "Do you know why the sales manager is sweating so much today? He wrecked his company car and hasn\'t reported it yet."',
		opts: [
			{ t: 'Sit down and gossip along', f: 40, a: -20, r: 'You spend half an hour exchanging venom, bile, and the nastiest company rumors. An absolute feast for the soul that cures all your accumulated aggressions of the year.', next: 'party_hub' },
			{ t: 'Morally superior refusal', a: 15, f: -5, r: '"I don\'t participate in such things," you say loftily. "Party pooper," Gabi hisses, rolling her eyes. You go to the boring people at the bar.', next: 'party_hub' },
			{ t: 'Save information for later', f: 15, a: 5, r: 'Knowledge is power, especially in IT. You just nod slightly, but you remember the detail about the wrecked company car very precisely. That could be an excellent leverage point later.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_2', loc: 'lounge',
		title: 'The Power Nap',
		text: 'You find a secluded sofa. No music, no colleagues. The cushions look incredibly soft. Your body yearns for sleep.',
		opts: [
			{ t: 'Close your eyes for 5 minutes', f: 60, a: -40, r: 'You fall into a comatose deep sleep. When you wake up, someone has stuck a yellow Post-it with a smiley on your forehead, but you are deeply relaxed and feel reborn.', next: 'party_hub' },
			{ t: 'Stay vigilant', a: 20, f: -10, r: 'Your inner admin paranoia gives you no peace. You sit stiffly, continuously scanning the dim light for enemies or lurking superiors. Real relaxation looks different.', next: 'party_hub' },
			{ t: 'Build a fortress out of two cushions', f: 30, a: -10, r: 'It\'s utterly absurd, but you build an opaque wall of soft sofa cushions. You are now absolutely safe in your fortress from any social interaction. Wonderful.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_3', loc: 'lounge',
		title: 'The Hidden Bottle',
		text: 'You reach behind a sofa cushion. Your hand hits something cold and glass. A half-full, uncorked bottle of incredibly expensive red wine.',
		opts: [
			{ t: 'Take a decent swig', f: 35, a: -25, r: 'You take a swig and drink like a barbarian directly from the bottle. The vintage is noble and tastes excellent. The glaring lights and party noise suddenly become much softer and more bearable.', next: 'party_hub' },
			{ t: 'Ignore and leave it', f: 5, a: 10, r: 'You\'re still on duty, after all... somehow. You\'re a little annoyed by your own stuffy correctness and instead get a still water at the bar.', next: 'party_hub' },
			{ t: 'Pour the bottle down the toilet', a: 20, f: 0, r: 'Class struggle! You take the sinfully expensive bottle to the toilet and gleefully flush 300 euros down the drain. You feel like a modern Robin Hood, just a little dumber.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_4', loc: 'lounge',
		title: 'Deep Talk in the Dim Light',
		text: 'A colleague from logistics is sitting in the corner, crying. He grabs your sleeve and tells you about his divorce and his debts.',
		opts: [
			{ t: 'Comfort him and listen', f: -15, a: -15, r: 'You let him cry on your shirt for half an hour and listen to the tragedy. It costs an immense amount of emotional energy, but you were truly a good, empathetic person tonight.', next: 'party_hub' },
			{ t: 'Get him a beer and disappear', f: 15, a: 0, r: 'You wordlessly press a cold can into his hand, mumble something about "chin up," and flee backward into the saving darkness of the loud dance floor.', next: 'party_hub' },
			{ t: 'Coldly brush him off', a: 25, f: 5, r: '"Sorry, buddy, I\'m in IT, not a therapist." The colleague stares at you and cries even louder. You\'re an ice-cold monster, but you have your peace.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_5', loc: 'lounge',
		title: 'The Couch Blockade',
		text: 'Three interns have completely occupied the largest, most comfortable couch. They silently stare at their phones, watching TikToks with sound.',
		opts: [
			{ t: 'Squeeze in between them', f: 15, a: -5, r: 'You sit down with pure ignorance exactly in the middle of the group. The interns awkwardly move aside and fall silent. You\'ve conquered the best spot in the lounge.', next: 'party_hub' },
			{ t: 'Throttle the Wi-Fi on the router', a: 5, f: 20, r: 'You pull out your admin phone, remotely access the router, and kill the speed. The videos buffer. The interns curse, stand up, and leave. A flawless IT victory.', next: 'party_hub' },
			{ t: 'Sigh and remain standing', a: 15, f: 5, r: 'The youth of today has no respect. You defiantly stand next to them, staring angrily, and feel your chronic back pain slowly return.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_6', loc: 'lounge',
		title: 'The Lost Smartphone',
		text: 'A lonely iPhone blinks on the small side table. A message from "Honey ❤️" pops up: "When are you coming home?!"',
		opts: [
			{ t: 'Hand in the phone at reception', f: -5, a: 5, r: 'You dutifully take the ringing device to Gabi at reception. Someone will be very happy tomorrow. An absolutely decent and responsible move.', next: 'party_hub' },
			{ t: 'Reply: "Still at the afterparty!"', a: 20, f: 0, r: 'You quickly type the reply and send the message. That\'s guaranteed to cause a colossal relationship drama for the owner at home tonight.', next: 'party_hub' },
			{ t: 'Ignore it', f: 10, a: 0, r: 'Just look away. Not your phone, not your drama, not your problem. You stroll on, leaving the thing cheerfully blinking in the darkness.', next: 'party_hub' }
		]
	},
	{
		id: 'party_lounge_7', loc: 'lounge',
		title: 'Awkward Silence',
		text: 'You collapse into an armchair, exhausted. Only then do you realize the CEO is sitting in the armchair right next to you. He stares silently into his whiskey glass. He looks at you. You look at him. Silence.',
		opts: [
			{ t: 'Nod and sit in silence', f: 20, a: -10, r: 'You give each other a curt nod and then sit in absolute, respectful silence for 10 minutes. Without exchanging a word, a strong, masculine bond has formed between you.', next: 'party_hub' },
			{ t: 'Panickedly jump up and leave', a: 15, f: 5, r: 'You stammer an inarticulate "Oops!", jump up, and practically run out of the lounge. The CEO watches you go, shaking his head very slowly and disappointedly.', next: 'party_hub' },
			{ t: 'Break the silence: "Tough week, huh?"', f: 5, a: 5, r: 'He sighs extremely deeply and looks into his glass. "You have no idea about the pressure up there, Müller." Afterwards, the same oppressive silence returns as before.', next: 'party_hub' }
		]
	},

	// --- OUTSIDE EVENTS (7) ---
	{
		id: 'party_outside_1', loc: 'outside',
		title: 'Cold Air and Nicotine',
		text: 'You step outside. It\'s drizzling lightly. A few shivering colleagues from accounting stand under the awning, smoking in silence. The mood is pleasantly melancholic.',
		opts: [
			{ t: 'Silently join them', f: 20, a: -15, r: 'You lean against the cold, damp house wall. No one says a word, you only hear the soft crackle of cigarettes. A perfect, socially undemanding moment of relaxation.', next: 'party_hub' },
			{ t: 'Ask for a light (even though you don\'t smoke)', f: 5, a: 5, r: 'You desperately try to fit in. The smoking colleagues look at you suspiciously. You awkwardly pretend you forgot your cigarettes inside and sneak back in.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_2', loc: 'outside',
		title: 'The Taxi Drama',
		text: 'A completely unknown colleague from IT infrastructure is loudly cursing into his phone. His Uber stood him up. He\'s clearly had too much to drink.',
		opts: [
			{ t: 'Help him call a taxi', f: -10, a: -10, r: 'You get him a car through your app. He drunkenly falls into your arms, pressing you against him, damp and cheerful. A bit gross, but you\'ve done a truly good deed.', next: 'party_hub' },
			{ t: 'Ignore him', a: 10, f: 5, r: 'You shrug. Let the wolves in the industrial park get him. You turn around and go back inside to the warmth.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_3', loc: 'outside',
		title: 'Locked Out',
		text: 'The back door has slammed shut. Someone moved the paper cup. You and three others are now standing in the rain, unable to get back in.',
		opts: [
			{ t: 'Bang on the window', a: 20, f: -5, r: 'You bang like a madman against the thick pane. After what feels like an eternity, Kevin grins, opens the door, and laughs at you. You\'re soaking wet, and your mood is in the basement.', next: 'party_hub' },
			{ t: 'Seize the opportunity and go home', f: 40, a: -10, r: 'The universe has sent a clear sign. You use the perfect excuse, walk straight to your car, and (at least in your head) happily call it a day.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_4', loc: 'outside',
		title: 'Markus\' Masterpiece',
		text: 'A man in an expensive suit is smoking a cigar. He slurs: "Brilliant guy, this Markus! Just sold me your quantum blockchain. Live migration by Monday!" We don\'t even have enough RAM for the mail server.',
		opts: [
			{ t: 'Tell the truth', a: 40, f: -10, r: '"That\'s technically impossible and utter nonsense," you clarify. The client instantly sobers up, throws away his cigar, and storms inside to tear Markus\'s head off. This will have massive repercussions!', next: 'party_hub' },
			{ t: 'Play along and smile', f: 20, a: 15, r: '"Sure, everything will run smoothly by Monday!" You lie to him cold-bloodedly and grin. Let Markus figure out how to explain the disaster on Monday. Not your circus, not your monkeys.', next: 'party_hub' },
			{ t: 'Panic', a: 30, f: -10, r: 'You immediately calculate the nights and overtime this nonsense will cost. Cold sweat breaks out. You run to the bar and desperately need a double shot.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_5', loc: 'outside',
		title: 'The Frostbite',
		text: 'The new intern is standing in a thin party dress in the wind, shivering like a leaf, waiting for her Uber. She looks pathetic.',
		opts: [
			{ t: 'Gallantly offer your jacket/sweater', f: -10, a: -15, r: 'She accepts your warming jacket with extreme gratitude and wraps herself in it. You\'re now standing in the cold wind, freezing your butt off, but you\'re the absolute gentleman of the evening.', next: 'party_hub' },
			{ t: 'Give advice: "Move around, you\'ll get warm!"', a: 15, f: 5, r: 'You clap your hands and cheer her on. She stares at you, dumbfounded and hateful. "Thanks for nothing, asshole." Mission failed.', next: 'party_hub' },
			{ t: 'Go back inside (I\'m too cold)', f: 15, a: 0, r: 'You have absolutely no desire to catch pneumonia for someone else. You mumble a "Good luck" and quickly flee back into the heated lobby.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_6', loc: 'outside',
		title: 'The Parking Lot Crash',
		text: 'You see a car backing up and hitting the CFO\'s expensive SUV extremely hard. Glass shatters. The driver gets out: It\'s the head of the legal department. He sees you.',
		opts: [
			{ t: 'Blackmail: "This stays between us, for a favor."', f: 20, a: -10, r: 'He nods frantically, wipes sweat from his forehead, and speeds off with screeching tires. You now have a massive, illegal favor owed by the most powerful department in the company.', next: 'party_hub' },
			{ t: 'Dutifully take a photo for the CFO', a: 10, f: -5, r: 'You pull out your phone and secure evidence. The legal chief completely freaks out and yells at you across half the parking lot. But in the end, justice prevails.', next: 'party_hub' },
			{ t: 'Cover your eyes: "I saw nothing!"', f: 10, a: 5, r: 'You quickly turn away and whistle. The fleeing lawyer speeds off. You gleefully leave the upcoming office drama to others. You saw nothing.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_6', loc: 'outside',
		title: 'The Parking Lot Crash',
		text: 'You see a car backing up and hitting the CFO\'s expensive SUV extremely hard. Glass shatters. The driver gets out: It\'s the head of the legal department. He sees you.',
		opts: [
			{ t: 'Blackmail: "This stays between us, for a favor."', f: 20, a: -10, r: 'He nods frantically, wipes sweat from his forehead, and speeds off with screeching tires. You now have a massive, illegal favor owed by the most powerful department in the company.', next: 'party_hub' },
			{ t: 'Dutifully take a photo for the CFO', a: 10, f: -5, r: 'You pull out your phone and secure evidence. The legal chief completely freaks out and yells at you across half the parking lot. But in the end, justice prevails.', next: 'party_hub' },
			{ t: 'Cover your eyes: "I saw nothing!"', f: 10, a: 5, r: 'You quickly turn away and whistle. The fleeing lawyer speeds off. You gleefully leave the upcoming office drama to others. You saw nothing.', next: 'party_hub' }
		]
	},
	{
		id: 'party_outside_7', loc: 'outside',
		title: 'The Noise Complaint',
		text: 'An angry guy in a bathrobe is standing at the fence of the premises. "TURN THAT DAMN MUSIC DOWN OR I\'M CALLING THE COPS! I WANT TO SLEEP!"',
		opts: [
			{ t: 'Yell back: "THEN MOVE AWAY!"', a: 30, f: -5, r: '"THEN MOVE TO THE WOODS, OLD MAN!" you yell back. You engage in an epic shouting match over the fence. It feels incredibly good to finally vent all that pent-up frustration.', next: 'party_hub' },
			{ t: 'Appease: "I\'ll tell the DJ."', f: 5, a: -10, r: 'You nod understandingly. "You\'re absolutely right, I\'ll take care of it." You go inside and, of course, absolutely DO NOT tell the DJ, but the neighbor is appeased for now.', next: 'party_hub' },
			{ t: 'Provoke the police: "Call them then!"', a: 40, f: 10, r: '"Go on, call them, you coward!" you egg him on. Your brilliantly evil plan: If the police arrive and end the party, you can finally go home legally.', next: 'party_hub' }
		]
	},

	// --- TOILET EVENTS (7) ---
	{
		id: 'party_toilet_1', loc: 'toilet',
		title: 'The Moaning Stall',
		text: 'You enter the washroom. From the middle stall, you hear rhythmic squeaking and muffled moaning. Under the door, you see the HR manager\'s red pumps.',
		opts: [
			{ t: 'Loudly bang on the door: "Cleaning service!"', a: 30, f: -5, r: 'You slap the door with your flat hand and yell. Inside, pure, naked panic breaks out. Someone slips with a splat and curses. You laugh your head off.', next: 'party_hub' },
			{ t: 'Pull out your phone and film the feet', f: 25, a: -10, r: 'You hold your phone flat to the floor and silently take a high-resolution photo of the red shoes in a compromising position. A dirty, but incredibly powerful blackmail move.', next: 'party_hub' },
			{ t: 'Loudly wash your hands and leave', f: 15, a: 10, r: 'You want absolutely nothing to do with this HR scandal. You turn on the faucet extremely loudly, wash your hands, and almost flee the room.', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_2', loc: 'toilet',
		title: 'Mirror Talks',
		text: 'You\'re at the sink. A sales rep is washing his hands, staring deeply into the mirror, murmuring: "You\'re a tiger. You\'re a go-getter." He\'s preparing for flirting.',
		opts: [
			{ t: 'Agree: "Get \'em, tiger!"', f: 5, a: -5, r: 'He first looks completely surprised, then grins broadly and gives you finger guns with both hands. An extremely strange, slightly uncomfortable bro-moment at the sink.', next: 'party_hub' },
			{ t: 'Wordlessly dry your hands', a: 10, f: 0, r: 'You just shake your head slightly at so much contrived sales psychology, silently grab a paper towel, and leave the room. Some people just shouldn\'t exist.', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_3', loc: 'toilet',
		title: 'The Stall Gossip',
		text: 'You\'ve locked yourself in a stall to catch your breath. Two people come in. They\'re loudly gossiping at the sink: "Did you see Müller\'s sweater? IT really isn\'t keeping up anymore." They\'re talking about YOU!',
		opts: [
			{ t: 'Flush and step out', a: 25, f: -5, r: 'You loudly flush, yank open the door, and stand before them. The two instantly freeze into pillars of salt. Their shocked expression is priceless. You walk past them, wordless and triumphant.', next: 'party_hub' },
			{ t: 'Listen quietly', f: 20, a: 15, r: 'You don\'t move an inch and listen to the entire tirade of gossip. It makes you extremely angry, but now you know exactly who the sneaky snakes in the office are.', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_4', loc: 'toilet',
		title: 'The Toilet Paper Monopoly',
		text: 'From the stall next to you, someone desperately knocks on the partition. "Hello? Is anyone there? My paper\'s empty. Do you have any?" You look at your own full roll.',
		opts: [
			{ t: 'Slide a sheet under the door', f: -5, a: -10, r: 'You tear off a generous piece and slide it under the partition. "Oh my God, thank you! I\'ll never forget this!" a whimpering voice says from inside. You are the savior in dire need.', next: 'party_hub' },
			{ t: 'Blackmail: "What\'s it worth to you?"', f: 10, a: 20, r: '"Five euros?" the shaky voice asks. A crumpled bill appears under the door. You take the money and hand over the paper. Pure, dirty capitalism in its purest form.', next: 'party_hub' },
			{ t: 'Stay silent and quietly leave', f: 25, a: 5, r: 'You pretend you\'re not even there. You silently sneak out of the stall and leave the room. The poor guy is probably stuck there until dawn.', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_5', loc: 'toilet',
		title: 'The Missing Lock',
		text: 'You want to lock the stall, but the bolt is missing. Someone kicked it off. You have to sit on the toilet and simultaneously hold the door shut with your foot.',
		opts: [
			{ t: 'Perform the acrobatic act', f: 10, a: 10, r: 'You cramp your leg and brace your foot against the door while trying to do your business. It works somehow, but relaxation definitely looks different.', next: 'party_hub' },
			{ t: 'Just leave the door open', a: 30, f: 0, r: 'Whoever looks in is to blame! An unsuspecting colleague pushes the door open, stares at you dumbfounded, and immediately flees with a loud "Sorry!" You\'ve shown dominance.', next: 'party_hub' },
			{ t: 'Annoyed give up and leave', a: 15, f: 5, r: 'You pull up your pants again and curse as you leave the stall. This company can\'t even get simple door locks right. How is the network supposed to work?', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_6', loc: 'toilet',
		char: "Kevin",
		title: 'The Axe Effect',
		text: 'Two interns (including Kevin) have apparently doused themselves with an entire can of body spray in front of the mirror. The air shimmers. It smells of musk and impending suffocation.',
		opts: [
			{ t: 'Coughing scold: "Are you crazy?!"', a: 20, f: -5, r: 'You wheeze and wave your arms. Kevin grins stupidly: "This attracts the girls, boss!" You finally lose the last shred of faith in today\'s youth.', next: 'party_hub' },
			{ t: 'Take a deep breath: "Smells like 2005!"', f: 10, a: -10, r: 'You endure the biting stench with humor and high-five the guys. Your lung capacity suddenly drops by 5 percent, but you\'re a cool supervisor.', next: 'party_hub' },
			{ t: 'Throw open the window', a: 10, f: -10, r: 'You yank the window wide open. It\'s freezing cold outside, but the toxic musk fog finally dissipates. The lightly dressed interns shiver miserably, but you can breathe again.', next: 'party_hub' }
		]
	},
	{
		id: 'party_toilet_7', loc: 'toilet',
		title: 'Clog Level Red',
		text: 'You open a stall. The water in the bowl is up to the brim. On top floats an enormous amount of toilet paper. One more drop and disaster will strike.',
		opts: [
			{ t: 'Press the flush button', a: 30, f: 20, r: 'The water rises rapidly... and spills like a waterfall over the rim onto the tiles! You jump back in panic, run out of the room, and leave the disaster to the next visitor.', next: 'party_hub' },
			{ t: 'Write "BROKEN" sign', f: 10, a: -5, r: 'Very responsible. You stick a paper towel with the bold warning "BROKEN!" on the door. Janitor Egon will have a massive tantrum tomorrow morning.', next: 'party_hub' },
			{ t: 'Give the plunger a chance', f: -10, a: -15, r: 'You do hard, disgusting manual labor. After a few vigorous thrusts, the water finally drains with a loud *slurp*. You are the unsung, heroic savior of the sanitary facilities.', next: 'party_hub' }
		]
	},

	// ===============================================
	// THE 5 DIFFERENT ENDINGS (Chosen by the system)
	// ===============================================
	{
		id: 'party_finale_rage',
		title: 'FINALE: BOFH MELTDOWN',
		text: '11:00 PM. The music is terrible, colleagues are annoying, the vicarious embarrassment of tonight has destroyed every single one of your remaining brain cells. Your blood pressure is in the critical zone.\n\nSuddenly a loud bang! Someone tripped over the power cable. The music dies. The lights go out. From the total darkness, Dr. Wichtig frantically calls out: "MÜLLER! ARE YOU STILL THERE?! DO SOMETHING!"',
		opts: [
			{ 
				t: 'The Epic Rant (Rage-Quit)', 
				action: "engine.finishParty('LEGEND', 'Your pulse is at 180. You\'ve had enough. You grab the DJ\'s battery-powered emergency microphone. You scream a three-minute, epic tirade into the absolute darkness. You talk about the collective incompetence of the staff, recite the most absurd browser histories from memory, and call the CEO a glorified tie rack. You drop the microphone and leave the hall wordlessly through the emergency exit. No one will ever forget this evening. A legend was born.')"
			}
		]
	},
	{
		id: 'party_finale_houdini',
		title: 'FINALE: THE PHANTOM EXIT',
		text: '11:00 PM. You\'ve spent most of the evening extremely relaxed. You ducked away, slept, ignored people, and plundered the buffet. You\'ve become extremely lazy, quiet, and practically invisible.\n\nA loud bang! The main cable was ripped from the wall. The hall is pitch black. Colleagues scream in panic.',
		opts: [
			{ 
				t: 'Disappear in the dark (Houdini)', 
				action: "engine.finishParty('HOUDINI', 'While everyone stumbles over each other in the dark, screaming and looking for the emergency exit, you masterfully exploit the chaos. You shrug your shoulders, silently crawl under the catering buffet, blindly grab a full bottle of sparkling wine on your way, and glide like a shadow through the side door. By 11:15 PM, you\'re already on your couch in sweatpants. Perfect escape. No one will ever be able to prove exactly when you left.')"
			}
		]
	},
	{
		id: 'party_finale_hero',
		title: 'FINALE: THE SAVIOR',
		text: '11:00 PM. You helped Kevin, settled the buffet dispute, and kept a cool head despite all the madness. Your stats are absolutely in the green.\n\nSparks fly! The lights go out. Silence. Then pure panic breaks out. Chantal screams. Someone knocks over a glass. As the only one in the room, you know exactly where the main fuse box is.',
		opts: [
			{ 
				t: 'Blindly bypass the fuse', 
				action: "engine.finishParty('HERO OF LABOR', 'You blindly and unerringly feel your way through the screaming crowd to the distribution box on the back wall. You feel the contacts, bend a paperclip from your pocket, and bypass the fuse. A click. The light flickers and comes back on. The crowd falls silent. Then deafening cheers erupt. Even Dr. Wichtig stands on a chair and claps. You saved the party. You don\'t get paid for it, but tonight, you are the absolute hero of the company.')"
			}
		]
	},
	{
		id: 'party_finale_gossip',
		title: 'FINALE: THE GOSSIP KING',
		text: '11:00 PM. You spent the entire evening in the lounge and at the bar. You gossiped with Gabi, scored drinks, and observed the goings-on. You feel extremely relaxed and are full of dirty secrets.\n\nThe lights go out. The DJ curses loudly. In the dark, you hear two people whispering right next to you. It\'s the boss and Ms. Elster! They\'re clearly discussing the planned layoffs for next year.',
		opts: [
			{ 
				t: 'Hijack the VIP corner', 
				action: "engine.finishParty('INSIDER', 'You quietly clear your throat in the dark. The boss freezes. "Who\'s there?" You answer extremely calmly: "Just IT, boss. Don\'t worry, my silence can be bought." A quiet laugh comes from Ms. Elster. You simply join the inner circle of power in the dark. You exchange intrigues and secrets under the cover of darkness until the power comes back on. You are now unassailable. You have achieved absolute power in the office.')"
			}
		]
	},
	{
		id: 'party_finale_standard',
		title: 'FINALE: THE ESCALATION',
		text: '11:00 PM. You\'ve experienced a bit of everything. You danced, felt embarrassed, drank, and absorbed all the madness of this company. It was loud, it was embarrassing, it was completely crazy.\n\nThe lights suddenly go out. The power is dead. Absolute darkness. Out of nowhere, a tipsy colleague from logistics loudly calls out: "Kumbaya, my Lord!"',
		opts: [
			{ 
				t: 'Sing along in the dark', 
				action: "engine.finishParty('TEAM PLAYER', 'You actually want to scream, but somehow the madness has infected you. You quietly start singing along. Gradually, the entire staff joins in the dark. A bizarre, almost magical team-building moment emerges in the pitch-black hall. You stand between Kevin and Chantal, swaying to the beat, and you realize: Somehow, you actually like these idiots. An almost conciliatory end to a terrible workday.')"
			}
		]
	}
	
];