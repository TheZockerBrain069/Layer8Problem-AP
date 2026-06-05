export const tutorial = [

	// SCHRITT 1: Anruf
	{
		id: 'tut_call_1',
		type: 'calls',
		step: 1,
		title: 'The Classic',
		text: 'The phone rings shrilly. A user loudly complains that their "internet was deleted" because the blue E is missing from their desktop. Your ticket counter ticks mercilessly onward.',
		opts: [
			{
				t: 'Take a deep breath and create a shortcut.',
				m: 15, f: 5, a: 15, c: 0,
				r: 'You\'ve wasted precious life minutes, but the ticket is closed. The sheer stupidity of the request, however, noticeably raised your pulse.'
			},
			{
				t: 'Tell them the internet is closed today for maintenance.',
				m: 5, f: 0, a: 30, c: 10,
				r: 'The user is confused, but quiet. That was quick! Your pulse, however, skyrockets, as you know this statement will have consequences.'
			}
		]
	},
	
	// SCHRITT 2: Kaffee
	{
		id: 'tut_coffee_1',
		type: 'coffee',
		step: 4,
		title: 'Black Gold',
		text: 'You stand before the machine in the break room. The sludge smells of burnt earth and despair, but it\'s your only chance to get your pulse back under 180.',
		opts: [
			{
				t: 'Close your eyes and chug it down.',
				m: 5, f: 0, a: -15, c: 5,
				r: 'Your stomach cramps briefly, but the homicidal urge towards the last caller noticeably subsides. The system registers your absence.'
			},
			{
				t: 'Complain extensively to colleagues while drinking.',
				m: 20, f: 15, a: -25, c: 0,
				r: 'The impromptu therapy session helped. The system, however, registers this extended chat as a cultivated act of work refusal.'
			}
		]
	},

	// SCHRITT 3: Dienstgang
	{
		id: 'tut_sq_1',
		type: 'sidequest',
		step: 5,
		title: 'The Abandoned Kitchen',
		text: 'You sneak into the kitchenette. Someone left half a box of donuts. A colleague approaches.',
		opts: [
			{
				t: 'Quickly grab a donut and disappear.',
				m: 5, f: 5, a: 0, c: 5,
				loot: 'donut', // <-- Garantiert den Donut
				r: 'You secured a donut, but received a slightly strange look.'
			},
			{
				t: 'Engage the colleague in conversation and discreetly grab one.',
				m: 10, f: 10, a: 0, c: 0,
				loot: 'donut', // <-- Garantiert den Donut
				r: 'The conversation was excruciatingly boring, but the donut is yours!'
			}
		]
	},

	// SCHRITT 4: Serverraum
	{
		id: 'tut_srv_1',
		type: 'server',
		step: 6,
		title: 'The Sanctum',
		text: 'The thick security door clangs shut. The constant, loud hum of the fans drowns out the users\' lamentations. It\'s freezing, dark, and absolutely peaceful.',
		opts: [
			{
				t: 'Enjoy the sacred silence and breathe.',
				m: 15, f: 15, a: -20, c: 0,
				r: 'You lean against a 19-inch rack and feel your blood pressure drop. The relaxation is glorious, but your laziness metric shoots up.'
			},
			{
				t: 'Rummage through the junk bin for hardware.',
				m: 10, f: 0, a: 0, c: 0, loot: 'wifi_note',
				r: 'You find a worn-out Wi-Fi note. Might be useful for bribing other departments later.'
			}
		]
	}
];