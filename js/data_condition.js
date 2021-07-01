data_condition = [
    {
        title: "Blessed",
        icon: "beams-aura",
        subtitle: "You are blessed",
        description: "You are blessed",
        reference: "PHB, pg. 219.",
        bullets: [
            "You can roll 1d4 whenever you make an attack roll or saving throw and add it to the total for the roll."
        ]
    },
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Concentrating",
        icon: "brain",
        subtitle: "You are concentrating",
        description: "You are concentrating",
        reference: "PHB, pgs. 203, 204.",
        bullets: [
            "You can end concentration at any time (no action required).",
            "You lose concentration on a spell if you cast another spell that requires concentration. You cannot concentrate on two spells at once.",
	    "Whenever you take damage, you must make a Constitution saving throw to maintain concentration. The DC equals 10 or half the damage taken, whichever is higher. If you are damaged by multiple sources, you repeat the save for each source.",
	    "You lose concentration if you are incapacitated or die.",
	    "Environmental phenomena, such as a sudden flash of lightning or a wave crashing over you, may require you to make a DC 10 Constitution saving throw at the DM's discretion.",
            "If you lose concentration, the spell ends."
        ]
    },
    {
        title: "Cursed",
        icon: "imp-laugh",
        subtitle: "You are cursed",
        description: "You are cursed",
        reference: "PHB, pg. 218.",
        bullets: [
            "Curses are often limited to one of the effects listed below.",
	    "You have disadvantage on ability checks and saving throws made with the affected ability score.",
            "You have disadvantage on attack rolls against the bestower of your curse.",
            "You must make a Wisdom saving throw at the start of each of your turns, else lose your action.",
	    "You take additional damage from the bestower of your curse."
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ]
    },
    {
        title: "Enlarged",
        icon: "inner-self",
        subtitle: "You are enlarged",
        description: "You are enlarged",
        reference: "PHB, pg. 237.",
        bullets: [
            "Your size doubles in all dimensions and your weight multiplies by eight. Your size category increases by one.",
            "You have advantage on Strength checks and Strength saving throws.",
 	    "If your weapons are enlarged with you, you deal an additional 1d4 damage with them."
        ]
    },
    {
        title: "Exhaustion",
        icon: "crawl",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink.",
            "Also, being raised from the dead reduces a creature’s exhaustion level by 1."
        ]
    },
    {
        title: "Falling",
        icon: "falling",
        subtitle: "You are falling",
        reference: "PHB, pg. 183 | XGE, pg. 77.",
        description: "Descend up to 500ft per turn",
        bullets: [
            "When you start to fall, you immediately descend up to 500 feet.",
            "If you're still falling on your next turn, you descend up to 500 feet at the end of that turn. You continue falling until you hit the ground or the fall is halted.",
	    "At the end of a fall, you take 1d6 bludgeoning damage for every 10 feet you fell, up to a maximum of 20d6. You land prone unless you avoid taking damage from the fall.",
            "If you have a non-zero flying speed, and are falling at the start of your turn, you can spend half your flying speed to counter the fall (as if standing up from the prone condition)."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Flying",
        icon: "feathered-wing",
        subtitle: "You are flying",
        reference: "PHB, pg. 191.",
        description: "You are flying",
        bullets: [
            "If you are knocked prone, have your speed reduced to zero, or are otherwise unable to move, you begin to fall, unless you have the ability to hover or are held aloft by magic such as the fly spell."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Hastened",
        icon: "wingfoot",
        subtitle: "You are hastened",
        description: "You are hastened",
        reference: "PHB, pg. 250.",
        bullets: [
            "Your speed is doubled.",
	    "You have a +2 bonus to your AC.",
	    "You have advantage on Dexterity saving throws.",
	    "You can take an additional action on each of your turns. The action can only be used to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
	    "When the hastened condition ends, you cannot move or take actions until after your next turn."
        ]
    },
    {
        title: "Hexed",
        icon: "barbed-wire",
        subtitle: "You are hexed",
        description: "You are hexed",
        reference: "PHB, pg. 251.",
        bullets: [
            "You take oadditional damage from the source of your hex.",
            "You have disadvantage on ability checks made with the affected ability."
        ]
    },
    {
        title: "Hunter's Mark",
        icon: "high-shot",
        subtitle: "You are marked",
        description: "You are marked",
        reference: "PHB, pg. 251.",
        bullets: [
            "You take additional damage from the source of your Hunter's Mark."
	]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        reference: "PHB, pg. 291.",
	bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage.", 
	    "If you are flying, you start to fall and immediately descend up to 500 feet."
        ]
    },
    {
        title: "Raging",
        icon: "muscle-up",
        subtitle: "You are raging",
        description: "You are raging",
        reference: "PHB, pg. 48.",
        bullets: [
            "While raging, you gain the following benefits if you aren't wearing heavy armour.",
            "You have advantage on Strength checks and Strength saving throws.",
            "When you make a melee weapon attack using Strength, you gain a bonus to the damage roll determined by your level.",
	    "You have resistance to bludgeoning, piercing and slashing damage.",
	    "You cannot cast or concentrate on spells whilst raging.",
	    "You may gain additional benefits from your subclass whilst raging."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    }
]
