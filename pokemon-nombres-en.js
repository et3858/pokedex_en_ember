var names = [
"Bulbasaur",
"Ivysaur",
"Venusaur",
"Charmander",
"Charmeleon",
"Charizard",
"Squirtle",
"Wartortle",
"Blastoise",
"Caterpie",
"Metapod",
"Butterfree",
"Weedle",
"Kakuna",
"Beedrill",
"Pidgey",
"Pidgeotto",
"Pidgeot",
"Rattata",
"Raticate",
"Spearow",
"Fearow",
"Ekans",
"Arbok",
"Pikachu",
"Raichu",
"Sandshrew",
"Sandslash",
"Nidoran♀",
"Nidorina",
"Nidoqueen",
"Nidoran♂",
"Nidorino",
"Nidoking",
"Clefairy",
"Clefable",
"Vulpix",
"Ninetales",
"Jigglypuff",
"Wigglytuff",
"Zubat",
"Golbat",
"Oddish",
"Gloom",
"Vileplume",
"Paras",
"Parasect",
"Venonat",
"Venomoth",
"Diglett",
"Dugtrio",
"Meowth",
"Persian",
"Psyduck",
"Golduck",
"Mankey",
"Primeape",
"Growlithe",
"Arcanine",
"Poliwag",
"Poliwhirl",
"Poliwrath",
"Abra",
"Kadabra",
"Alakazam",
"Machop",
"Machoke",
"Machamp",
"Bellsprout",
"Weepinbell",
"Victreebel",
"Tentacool",
"Tentacruel",
"Geodude",
"Graveler",
"Golem",
"Ponyta",
"Rapidash",
"Slowpoke",
"Slowbro",
"Magnemite",
"Magneton",
"Farfetch'd",
"Doduo",
"Dodrio",
"Seel",
"Dewgong",
"Grimer",
"Muk",
"Shellder",
"Cloyster",
"Gastly",
"Haunter",
"Gengar",
"Onix",
"Drowzee",
"Hypno",
"Krabby",
"Kingler",
"Voltorb",
"Electrode",
"Exeggcute",
"Exeggutor",
"Cubone",
"Marowak",
"Hitmonlee",
"Hitmonchan",
"Lickitung",
"Koffing",
"Weezing",
"Rhyhorn",
"Rhydon",
"Chansey",
"Tangela",
"Kangaskhan",
"Horsea",
"Seadra",
"Goldeen",
"Seaking",
"Staryu",
"Starmie",
"Mr. Mime",
"Scyther",
"Jynx",
"Electabuzz",
"Magmar",
"Pinsir",
"Tauros",
"Magikarp",
"Gyarados",
"Lapras",
"Ditto",
"Eevee",
"Vaporeon",
"Jolteon",
"Flareon",
"Porygon",
"Omanyte",
"Omastar",
"Kabuto",
"Kabutops",
"Aerodactyl",
"Snorlax",
"Articuno",
"Zapdos",
"Moltres",
"Dratini",
"Dragonair",
"Dragonite",
"Mewtwo",
"Mew",

	//Segunda generacion
"Chikorita",
"Bayleef",
"Meganium",
"Cyndaquil",
"Quilava",
"Typhlosion",
"Totodile",
"Croconaw",
"Feraligatr",
"Sentret",
"Furret",
"Hoothoot",
"Noctowl",
"Ledyba",
"Ledian",
"Spinarak",
"Ariados",
"Crobat",
"Chinchou",
"Lanturn",
"Pichu",
"Cleffa",
"Igglybuff",
"Togepi",
"Togetic",
"Natu",
"Xatu",
"Mareep",
"Flaaffy",
"Ampharos",
"Bellossom",
"Marill",
"Azumarill",
"Sudowoodo",
"Politoed",
"Hoppip",
"Skiploom",
"Jumpluff",
"Aipom",
"Sunkern",
"Sunflora",
"Yanma",
"Wooper",
"Quagsire",
"Espeon",
"Umbreon",
"Murkrow",
"Slowking",
"Misdreavus",
"Unown",
"Wobbuffet",
"Girafarig",
"Pineco",
"Forretress",
"Dunsparce",
"Gligar",
"Steelix",
"Snubbull",
"Granbull",
"Qwilfish",
"Scizor",
"Shuckle",
"Heracross",
"Sneasel",
"Teddiursa",
"Ursaring",
"Slugma",
"Magcargo",
"Swinub",
"Piloswine",
"Corsola",
"Remoraid",
"Octillery",
"Delibird",
"Mantine",
"Skarmory",
"Houndour",
"Houndoom",
"Kingdra",
"Phanpy",
"Donphan",
"Porygon2",
"Stantler",
"Smeargle",
"Tyrogue",
"Hitmontop",
"Smoochum",
"Elekid",
"Magby",
"Miltank",
"Blissey",
"Raikou",
"Entei",
"Suicune",
"Larvitar",
"Pupitar",
"Tyranitar",
"Lugia",
"Ho-oh",
"Celebi",

	//Tercera generacion
"Treecko",
"Grovyle",
"Sceptile",
"Torchic",
"Combusken",
"Blaziken",
"Mudkip",
"Marshtomp",
"Swampert",
"Poochyena",
"Mightyena",
"Zigzagoon",
"Linoone",
"Wurmple",
"Silcoon",
"Beautifly",
"Cascoon",
"Dustox",
"Lotad",
"Lombre",
"Ludicolo",
"Seedot",
"Nuzleaf",
"Shiftry",
"Taillow",
"Swellow",
"Wingull",
"Pelipper",
"Ralts",
"Kirlia",
"Gardevoir",
"Surskit",
"Masquerain",
"Shroomish",
"Breloom",
"Slakoth",
"Vigoroth",
"Slaking",
"Nincada",
"Ninjask",
"Shedinja",
"Whismur",
"Loudred",
"Exploud",
"Makuhita",
"Hariyama",
"Azurill",
"Nosepass",
"Skitty",
"Delcatty",
"Sableye",
"Mawile",
"Aron",
"Lairon",
"Aggron",
"Meditite",
"Medicham",
"Electrike",
"Manectric",
"Plusle",
"Minun",
"Volbeat",
"Illumise",
"Roselia",
"Gulpin",
"Swalot",
"Carvanha",
"Sharpedo",
"Wailmer",
"Wailord",
"Numel",
"Camerupt",
"Torkoal",
"Spoink",
"Grumpig",
"Spinda",
"Trapinch",
"Vibrava",
"Flygon",
"Cacnea",
"Cacturne",
"Swablu",
"Altaria",
"Zangoose",
"Seviper",
"Lunatone",
"Solrock",
"Barboach",
"Whiscash",
"Corphish",
"Crawdaunt",
"Baltoy",
"Claydol",
"Lileep",
"Cradily",
"Anorith",
"Armaldo",
"Feebas",
"Milotic",
"Castform",
"Kecleon",
"Shuppet",
"Banette",
"Duskull",
"Dusclops",
"Tropius",
"Chimecho",
"Absol",
"Wynaut",
"Snorunt",
"Glalie",
"Spheal",
"Sealeo",
"Walrein",
"Clamperl",
"Huntail",
"Gorebyss",
"Relicanth",
"Luvdisc",
"Bagon",
"Shelgon",
"Salamence",
"Beldum",
"Metang",
"Metagross",
"Regirock",
"Regice",
"Registeel",
"Latias",
"Latios",
"Kyogre",
"Groudon",
"Rayquaza",
"Jirachi",
"Deoxys",

	//Cuarta generacion
"Turtwig",
"Grotle",
"Torterra",
"Chimchar",
"Monferno",
"Infernape",
"Piplup",
"Prinplup",
"Empoleon",
"Starly",
"Staravia",
"Staraptor",
"Bidoof",
"Bibarel",
"Kricketot",
"Kricketune",
"Shinx",
"Luxio",
"Luxray",
"Budew",
"Roserade",
"Cranidos",
"Rampardos",
"Shieldon",
"Bastiodon",
"Burmy",
"Wormadam",
"Mothim",
"Combee",
"Vespiquen",
"Pachirisu",
"Buizel",
"Floatzel",
"Cherubi",
"Cherrim",
"Shellos",
"Gastrodon",
"Ambipom",
"Drifloon",
"Drifblim",
"Buneary",
"Lopunny",
"Mismagius",
"Honchkrow",
"Glameow",
"Purugly",
"Chingling",
"Stunky",
"Skuntank",
"Bronzor",
"Bronzong",
"Bonsly",
"Mime Jr.",
"Happiny",
"Chatot",
"Spiritomb",
"Gible",
"Gabite",
"Garchomp",
"Munchlax",
"Riolu",
"Lucario",
"Hippopotas",
"Hippowdon",
"Skorupi",
"Drapion",
"Croagunk",
"Toxicroak",
"Carnivine",
"Finneon",
"Lumineon",
"Mantyke",
"Snover",
"Abomasnow",
"Weavile",
"Magnezone",
"Lickilicky",
"Rhyperior",
"Tangrowth",
"Electivire",
"Magmortar",
"Togekiss",
"Yanmega",
"Leafeon",
"Glaceon",
"Gliscor",
"Mamoswine",
"Porygon-Z",
"Gallade",
"Probopass",
"Dusknoir",
"Froslass",
"Rotom",
"Uxie",
"Mesprit",
"Azelf",
"Dialga",
"Palkia",
"Heatran",
"Regigigas",
"Giratina",
"Cresselia",
"Phione",
"Manaphy",
"Darkrai",
"Shaymin",
"Arceus",

	//Quinta generacion
"Victini",
"Snivy",
"Servine",
"Serperior",
"Tepig",
"Pignite",
"Emboar",
"Oshawott",
"Dewott",
"Samurott",
"Patrat",
"Watchog",
"Lillipup",
"Herdier",
"Stoutland",
"Purrloin",
"Liepard",
"Pansage",
"Simisage",
"Pansear",
"Simisear",
"Panpour",
"Simipour",
"Munna",
"Musharna",
"Pidove",
"Tranquill",
"Unfezant",
"Blitzle",
"Zebstrika",
"Roggenrola",
"Boldore",
"Gigalith",
"Woobat",
"Swoobat",
"Drilbur",
"Excadrill",
"Audino",
"Timburr",
"Gurdurr",
"Conkeldurr",
"Tympole",
"Palpitoad",
"Seismitoad",
"Throh",
"Sawk",
"Sewaddle",
"Swadloon",
"Leavanny",
"Venipede",
"Whirlipede",
"Scolipede",
"Cottonee",
"Whimsicott",
"Petilil",
"Lilligant",
"Basculin",
"Sandile",
"Krokorok",
"Krookodile",
"Darumaka",
"Darmanitan",
"Maractus",
"Dwebble",
"Crustle",
"Scraggy",
"Scrafty",
"Sigilyph",
"Yamask",
"Cofagrigus",
"Tirtouga",
"Carracosta",
"Archen",
"Archeops",
"Trubbish",
"Garbodor",
"Zorua",
"Zoroark",
"Minccino",
"Cinccino",
"Gothita",
"Gothorita",
"Gothitelle",
"Solosis",
"Duosion",
"Reuniclus",
"Ducklett",
"Swanna",
"Vanillite",
"Vanillish",
"Vanilluxe",
"Deerling",
"Sawsbuck",
"Emolga",
"Karrablast",
"Escavalier",
"Foongus",
"Amoonguss",
"Frillish",
"Jellicent",
"Alomomola",
"Joltik",
"Galvantula",
"Ferroseed",
"Ferrothorn",
"Klink",
"Klang",
"Klinklang",
"Tynamo",
"Eelektrik",
"Eelektross",
"Elgyem",
"Beheeyem",
"Litwick",
"Lampent",
"Chandelure",
"Axew",
"Fraxure",
"Haxorus",
"Cubchoo",
"Beartic",
"Cryogonal",
"Shelmet",
"Accelgor",
"Stunfisk",
"Mienfoo",
"Mienshao",
"Druddigon",
"Golett",
"Golurk",
"Pawniard",
"Bisharp",
"Bouffalant",
"Rufflet",
"Braviary",
"Vullaby",
"Mandibuzz",
"Heatmor",
"Durant",
"Deino",
"Zweilous",
"Hydreigon",
"Larvesta",
"Volcarona",
"Cobalion",
"Terrakion",
"Virizion",
"Tornadus",
"Thundurus",
"Reshiram",
"Zekrom",
"Landorus",
"Kyurem",
"Keldeo",
"Meloetta",
"Genesect",

	//Sexta generacion
"Chespin",
"Quilladin",
"Chesnaught",
"Fennekin",
"Braixen",
"Delphox",
"Froakie",
"Frogadier",
"Greninja",
"Bunnelby",
"Diggersby",
"Fletchling",
"Fletchinder",
"Talonflame",
"Scatterbug",
"Spewpa",
"Vivillon",
"Litleo",
"Pyroar",
"Flabébé",
"Floette",
"Florges",
"Skiddo",
"Gogoat",
"Pancham",
"Pangoro",
"Furfrou",
"Espurr",
"Meowstic",
"Honedge",
"Doublade",
"Aegislash",
"Spritzee",
"Aromatisse",
"Swirlix",
"Slurpuff",
"Inkay",
"Malamar",
"Binacle",
"Barbaracle",
"Skrelp",
"Dragalge",
"Clauncher",
"Clawitzer",
"Helioptile",
"Heliolisk",
"Tyrunt",
"Tyrantrum",
"Amaura",
"Aurorus",
"Sylveon",
"Hawlucha",
"Dedenne",
"Carbink",
"Goomy",
"Sliggoo",
"Goodra",
"Klefki",
"Phantump",
"Trevenant",
"Pumpkaboo",
"Gourgeist",
"Bergmite",
"Avalugg",
"Noibat",
"Noivern",
"Xerneas",
"Yveltal",
"Zygarde",
"Diancie",
"Hoopa",

];



var abilities = [

['Espesura',      'Overgrow', "Aumenta la fuerza de los movimientos tipo Planta en un 50% si los PS del pokémon están a 1/3 del máximo."],
['Mar Llamas',    'Blaze', "Aumenta la fuerza de los movimientos tipo Fuego en un 50% si los PS del pokémon están a 1/3 del máximo."],
['Torrente',      'Torrent', "Aumenta la fuerza de los movimientos tipo Agua en un 50% si los PS del pokémon están a 1/3 del máximo."],

['Polvo Escudo',  'Shield Dust', "Bloquea los posibles efectos secundarios provocados por ataques de daño directo del pokémon rival."],
['Fuga',          'Run Away', "El pokémon siempre podrá huir de batallas sólo si es contra pokémon salvajes, incluso si esta bajo movimientos o habilidades de trampa."],
['Mudar',         'Shed Skin', "Tiene 1 de 3 oportunidades de curarse de cualquier condición de estado en cada turno (sólo si está paralizado, envenenado, dormido, quemado o congelado)."],
['Ojo Compuesto', 'Compoundeyes', "Aumenta la precisión del pokémon en un 30%."],
['Enjambre',      'Swarm', "Aumenta la fuerza de los movimientos tipo Bicho en un 50% si los PS del pokémon están a 1/3 del máximo."],
['Francotirador', 'Sniper', "Aumenta en un 225% la posibilidad de acertar un golpe crítico."],


['Clorofila',     'Chlorophyll',"Aumenta al doble la Velocidad del pokémon cuando el clima es Soleado."],
['Poder Solar',   'Solar Power', "Aumenta en 1.5 el Ataque Especial del pokémon en Día Soleado, pero baja 1/8 de sus PS máximos en cada turno."],
['Cura Lluvia',   'Rain Dish', "Recupera 1/16 de sus PS máximos al final de cada turno cuando el clima es Lluvioso"],


['Vista Lince',   'Keen Eye', "El rival no puede bajar la precisión del pokémon. Ignora el aumento de la evasión del pokémon rival."],
['Tumbos',        'Tangled Feet', "La evasión del pokémon sube un nivel cuando está en estado de confusión."],
['Sacapecho',     'Big Pecks', "Su Defensa no puede ser reducida por el rival."],





['Hedor',         'Stench', "Reduce en un 50% la probabilidad de encontrar pokémon salvajes si es el lider del equipo."],
['Agallas',       'Guts', "Incrementa su Ataque en un 50% cuando está paralizado, quemado, envenenado, dormido o congelado. Si es quemado, su ataque no baja sino sube."],
['Entusiasmo',    'Hustle', "Incrementa en un 50% la potencia de los ataques Físicos, pero reduce en un 20% la precisión de los mismos."],
['Allanamiento',  'Infiltrator', "Ignora movimientos de salvaguarda como Protección, Sustituto, Reflejo, Pantalla Luz y Velo Sagrado por parte del rival."],
['Bromista',      'Prankster', "Los movimientos de cambios de estado ven incrementado su prioridad a +1."],
['Tenacidad',     'Competitive', "Aumenta x2 el Ataque Especial si uno de sus stats son reducidas por el pokémon rival."],
['Impulso',       'Speed Boost', "Sube un nivel la velocidad del pokémon por cada turno."],

['Robustez', 'Sturdy', "Resiste a los movimientos de KO del pokémon rival, dejándolo con 1 PS. Sólo funciona si el usuario tiene sus PS al máximo."],

['Armadura Batalla', 'Battle Armor', "Los ataques del rival nunca serán Golpes Críticos."],
['Caparazón', 'Shell Armor', "Los ataques del rival nunca serán Golpes Críticos."],

['Humedad', 'Damp', "Anula movimientos y habilidades de explosión como Autodestrucción mientras el pokémon esté en el campo."],

['Flexibilidad', 'Limber', "Inmune a quedar Paralizado."],
['Despiste',     'Oblivious', "Inmune a la Atracción."],
['Insomnio',     'Insomnia', "Inmune a quedar Dormido"],
['Inmunidad',    'Immunity', "Inmune a quedar Envenenado."],
['Ritmo Propio', 'Own Tempo', "Inmune a quedar en estado de Confusión."],
['Espíritu Vital', 'Vital Spirit', "Inmune a quedar Dormido."],

['Velo Arena',   'Sand Veil', "Su evasión aumenta temporalmente cuando hay Tormenta de Arena. La precisión de los movimientos del rival serán de 80%."],

['Electricidad Estática', 'Static', "30% de probabilidad de que el pokémon rival quede Paralizado si usa un movimiento de contacto directo."],
['Puño Tóxico', 'Poison Point', "30% de probabilidad de que el pokémon rival quede Envenenado si usa un movimiento de contacto directo."],
['Cuerpo Llama', 'Flame Body', "30% de probabilidad de que el pokémon rival quede Quemado si usa un movimiento de contacto directo."],
['Gran Encanto', 'Cute Charm', "30% de probabilidad de que el pokémon rival de sexo opuesto quede Enamorado si usa un movimiento de contacto directo."],

['Absorbe Electricidad', 'Volt Absorb', "Recupera 1/4 de sus PS si es atacado por movimientos de tipo Eléctrico."],
['Absorbe Agua', 'Water Absorb', "Recupera 1/4 de sus PS si es atacado por movimientos de tipo Agua."],

['Aclimatación', 'Cloud Nine', "Evita los efectos de clima provocados por movimientos y habilidades del mismo."],
['Cambio Color', 'Color Change', "El pokémon cambiará su tipo al del último movimiento que logre dañarlo."],
['Absorbe Fuego', 'Flash Fire', "Aumenta en un 50% los ataques de tipo Fuego si es atacado por movimientos de tipo Fuego."],
['Ventosas', 'Suction Cups', "El pokémon no puede ser sacado ni intercambiado forzadamente por movimientos Rugido y Remolino."],

['Intimidación', 'Intimidate', "Reduce un nivel el Ataque de los pokémon rivales cuando entra en batalla."],

['Sombratrampa', 'Shadow Tag', "Los pokémon rivales no pueden ser intercambiados ni huir de la batalla mientras el usuario permanezca en el campo."],
['Trampa Arena', 'Arena Trap', "Los pokémon rivales terrestres no pueden ser intercambiados ni huir de la batalla mientras el usuario permanezca en el campo."],

['Piel Tosca', 'Rough Skin', "Todo pokémon que lo golpee con un ataque de contacto directo pierde 1/16 de sus PS máximos."],

['Superguarda', 'Wonder Guard', "Sólo recibe daño de ataques que sean muy efectivos con sus tipos y de vías indirectas (como Púas, Granizo, etc.)."],

['Levitación', 'Levitate', "Inmune a movimientos de tipo Tierra, a Púas, a Púas Tóxicas y a la habilidad Trampa Arena."],

['Efecto Espora', 'Effect Spore', "10% de probabilidad de que el pokémon rival quede Paralizado, Dormido o Envenenado si usa un movimiento de contacto directo."],

['Sincronía', 'Synchronize', "El pokémon rival quedará Paralizado, Quemado o Envenenado si el usuario también está en la misma condición."],

['Cuerpo Puro', 'Clear Body', "Sus estadísticas no serán reducidas por acciones de los pokémon rivales."],
['Humo Blanco', 'White Smoke', "Sus estadísticas no serán reducidas por acciones de los pokémon rivales."],

['Cura Natural', 'Natural Cure', "El pokémon se ve curado de sus problemas de estado si es intercambiado en batalla."],

['Pararrayos', 'Lightningrod', "El pokémon atrae hacia si mismo todos los ataques de tipo Eléctrico, será inmune a ellos y aumenta un nivel su Ataque Especial."],

['Dicha', 'Serene Grace', "Duplica las probabilidades de activar los efectos secundarios de los movimientos utilizados por el usuario."],

['Nado Rápido', 'Swift Swim', "Aumenta al 100% la Velocidad del pokémon cuando el clima es Lluvioso."],

['Iluminación', 'Illuminate', "Aumenta al 100% la probabilidad de encontrar pokémon salvajes si es el lider del equipo."],

['Rastro', 'Trace', "Copia la habilidad del pokémon rival, y ésta permanece mientras continue en batalla."],

['Potencia', 'Huge Power', "El Ataque del pokémon se duplica."],
['Energía Pura', 'Pure Power', "El Ataque del pokémon se duplica."],

['Foco Interno', 'Inner Focus', "El pokémon nunca retrocederá"],

['Escudo Magma', 'Magma Armor', "Inmune al quedar Congelado"],
['Velo Agua', 'Water Veil', "Inmune a quedar Quemado"],

['Imán', 'Magnet Pull', "Los pokémon en batalla no pueden ser intercambiados ni huir mientras el usuario esté en el campo."],

['Insonorizar', 'Soundproof', "Inmune a movimientos que funcionan por sonido."],

['Chorro Arena', 'Sand Stream', "Produce una Tormenta de Arena perpetua al entrar en batalla."],
['Sequía', 'Drought', "Produce una clima Soleado perpetuo al entrar en batalla."],
['Llovizna', 'Drizzle', "Produce una clima Lluvioso perpetuo al entrar en batalla."],
['Nevada', 'Snow Warning', "Produce una clima de Granizo perpetuo al entrar en batalla."],
['Bucle Aire', 'Air Lock', "Evita los efectos de clima provocados por movimientos y habilidades del mismo."],

['Presión', 'Pressure', "Todo movimiento que cualquier pokémon use contra el usuario será descontado 2 PP."],

['Sebo', 'Thick Fat', "Los ataques de tipo Hielo y Fuego sólo le hacen un 50% menos de daño."],

['Madrugar', 'Early Bird', "Muy probable de despertar si está Dormido por un tiempo promedio."],

['Corte Fuerte', 'Hyper Cutter', "Su Ataque no puede ser reducido por el rival."],

['Recogida', 'Pickup', "10% de probabilidad de recoger un objeto del suelo tras cada batalla."],
['Recogemiel', 'Honey Gather', "10% de probabilidad de recoger el objeto Miel tras cada batalla."],

['Ausente', 'Truant', "No puede efectuar un mismo movimiento 2 turnos seguidos."],


['Más', 'Plus', "Su Ataque Especial aumenta un 50% si tiene a un pokémon compañero en batalla con la habilidad Menos."],
['Menos', 'Minus', "Su Ataque Especial aumenta un 50% si tiene a un pokémon compañero en batalla con la habilidad Más."],

['Predicción', 'Forecast', "El tipo y la figura del pokémon cambian con el clima."],

['Viscosidad', 'Sticky Hold', "El objeto que el pokémon lleve equipado no puede ser retirado."],

['Escama Especial', 'Marvel Scale', "Incrementa su Defensa en un 50% cuando está paralizado, quemado, envenenado, dormido o congelado."],

['Lodo Líquido', 'Liquid Ooze', "El pokémon rival pierde PS si usa movimientos de absorción de PS."],

['Cabeza Roca', 'Rock Head', "Previene el daño de los ataques de autoinfligición como efecto secundario."],

['Electromotor', 'Motor Drive', "Inmune a los movimientos tipo Eléctrico y aumenta su Velocidad en 1 nivel."],

['Rivalidad', 'Rivalry', "Su Ataque aumenta un 25% si su rival es del mismo sexo y reduce un 25% si su rival es del sexo opuesto."],

['Impasible', 'Steadfast', "Su Velocidad aumenta 1 nivel cuando es atacado por ataques de retroceso."],

['Manto Niveo', 'Snow Cloak', "Reduce en un 20% la precisión de los pokémon rivales cuando el clima es Granizo."],

['Gula', 'Gluttony', "Come una baya que esté portando cuando está 3/4 de sus PS máximos."],

['Punto Ira', 'Anger Point', "Aumenta el Ataque en 6 niveles si el pokémon es golpeado con Golpe Crítico."],

['Liviano', 'Unburden', "Aumenta su Velocidad al 100% si el pokémon consume un objeto equipado."],

['Ignífugo', 'Heatproof', "Rebaja a la mitad el daño que recibe de un ataque de tipo Fuego."],

['Simple', 'Simple', "Duplica el efecto de las alteraciones de las estadísticas que sufra el pokémon."],

['Piel Seca', 'Dry Skin', "Recupera o pierde 1/8 de sus PS máximos cuando el clima es Lluvioso o Soleado respectivamente, y recupera o pierde 1/4 cuando recibe un ataque de tipo Agua o Fuego respectivamente."],

['Descarga', 'Download', "Aumenta su Ataque si los pokémon rivales tienen Defensa y Defensa Especial menores que el usuario."],

['Puño Férreo', 'Iron Fist', "Aumenta un 20% el poder de los ataques que usan los puños."],

['Antídoto', 'Poison Heal', "Cura 1/8 de sus PS máximos cuando está Envenenado en vez de reducirlo."],

['Adaptable', 'Adaptability', "Duplica el poder de los ataques que sean del mismo tipo del pokémon."],

['Encadenado', 'Skill Link', "Garantiza el máximo de golpes posibles al usar ataques de multi-golpes."],

['Hidratación', 'Hydration', "Se recupera de cualquier cambio de estado al final de cada turno cuando el clima es Lluvioso."],

['Pies Rápidos', 'Quick Feet', "Aumenta su Velocidad en un 50% si el pokémon sufre un cambio de estado."],

['Normalidad', 'Normalize', "Todos los ataques del pokémon son de tipo Normal."],

['Muro Mágico', 'Magic Guard', "Sólo es afectado por ataques de daño directo."],

['Indefenso', 'No Guard', "Todo ataque que cause daño y sea usado por o contra el pokémon tiene una precisión del 100%."],

['Rezagado', 'Stall', "El pokémon siempre se moverá en último lugar."],

['Experto', 'Technician', "Aumenta el poder de los ataques débiles."],

['Defensa Hoja', 'Leaf Guard', "El pokémon es protegido de cualquier cambio de estado cuando el clima es Soleado."],

['Zoquete', 'Klutz', "El pokémon no puede usar objetos equipados, salvo los que hacen ganar experiencia o esfuerzo."],

['Rompemoldes', 'Mold Breaker', "La habilidad del pokémon rival deja de surtir efecto sólo si son habilidades defensivas."],

['Afortunado', 'Super Luck', "El pokémon tiene una mayor probabilidad de realizar un Golpe Crítico."],

['Resquicio', 'Aftermath', "El rival pierde 1/4 de sus PS máximos si el usuario es debilitado con un ataque de contacto directo."],

['Anticipación', 'Anticipation', "Predice los ataques de KO y los ataques que sean muy efectivos contra su tipo."],

['Alerta', 'Forewarn', "Predice los ataques de mayor poder de los pokémon rivales."],

['Ignorante', 'Unaware', "Anula el aumento de las estadísticas de los pokémon rivales mientras esté en el campo."],

['Cromolente', 'Tinted Lens', "Duplica el poder de un ataque cuando es poco efectivo contra el rival."],

['Filtro', 'Filter', "Reduce 1/4 el poder de los ataques muy efectivos contra el pokémon."],
['Roca Sólida', 'Solid Rock', "Reduce 1/4 el poder de los ataques muy efectivos contra el pokémon."],

['Inicio Lento', 'Slow Start', "El Ataque y la Velocidad del pokémon son reducidos a la mitad durante los primeros 5 turnos."],

['Intrépido', 'Scrappy', "Puede dañar a los pokémon tipo Fantasma con movimientos tipo Normal y Lucha."],

['Colector', 'Storm Drain', "El pokémon atrae hacia sí mismo todos los ataques de tipo Agua."],

['Gélido', 'Ice Body', "Recupera 1/16 de sus PS máximos mientras el clima sea Granizo."],

['Cacheo', 'Frisk', "Permite ver el objeto equipado del rival al entrar en batalla."],

['Audaz', 'Reckless', "Incrementa en un 20% el poder de los ataques de autoinfligición como efecto secundario"],

['Don Floral', 'Flower Gift', "Aumenta el Ataque  y el Ataque Especial en un 50% y cambia de forma cuando el clima es Soleado."],

['Mal Sueño', 'Bad Dreams', "Los pokémon rivales pierden 1/8 de sus PS máximos por cada turno mientras estén Dormidos y el usuario esté en el campo."],

['Multitipo', 'Multitype', "El tipo y forma del pokémon varía con la Tabla equipada."],



///






['Hurto', 'Pickpocket', "El pokémon roba el objeto del rival si éste hace un movimiento de contacto directo."],


['Potencia Bruta', 'Sheer Force', "Anulas los efectos secundarios de cualquier ataque empleado, y aumenta su poder en un 30%, sin embargo no niega el efecto negativo de algunos movimientos."],



['Respondón', 'Contrary', "Revierte las alteraciones de las estadísticas del pokémon."],

['Nerviosismo', 'Unnerve', "Los pokémon rivales no pueden utilizar su baja equipada."],

['Competitivo', 'Defiant', "Aumenta en dos niveles su Ataque sólo si el pokémon rival utiliza un movimiento que reduzca algunas de sus estadísticas."],

['Flaqueza', 'Defeatist', "Reduce su Ataque y Ataque Especial a la mitad si el pokémon tiene menos de la mitad  de sus PS máximos."],

['Cuerpo Maldito', 'Cursed Body', "30% de probabilidad de anular temporalmente el movimiento utilizado por el pokémon rival si usa un movimiento de contacto directo."],

['Alma Cura', 'Healer', "30% de probabilidad de curar cualquier cambio de estado de un compañero pokémon en una batalla en equipo."],

['Compiescolta', 'Friend Guard', "Reduce en un 25% el daño causado hacia un compañero pokémon en una batalla en equipo."],

['Armadura Frágil', 'Weak Armor', "Reduce su Defensa y aumenta su Velocidad, 1 nivel en cada uno cuando el pokémon es golpeado."],

['Metal Pesado', 'Heavy Metal', "El pokémon con esta habilidad tiene el doble de peso."],
['Metal Liviano', 'Light Metal', "El pokémon con esta habilidad tiene la mitad de peso."],

['Compensación', 'Multiscale', "Reduce a la mitad el daño recibido del ataque de un pokémon rival si el usuario tiene sus PS al máximo."],

['Ímpulso Tóxico', 'Toxic Boost', "Aumenta su Ataque en un 50% cuando el pokémon está Envenenado."],
['Ímpulso Ardiente', 'Flare Boost', "Aumenta su Ataque Especial en un 50% cuando el pokémon está Quemado."],

['Cosecha', 'Harvest', "Probabilidad de recuperar una baya utilizada al final de cada turno. Siempre recupera la baya cuando el clima es Soleado."],

['Telepatía', 'Telepathy', "Protege al pokémon del daño procedente de los ataques de los pokémon del propio equipo en batallas en equipo."],

['Veleta', 'Moody', "Aumenta 2 niveles una estadística al azar y reduce 1 un nivel otra estadística al azar, siempre al  final de cada turno."],

['Funda', 'Overcoat', "Impide que el pokémon reciba daño derivado del clima (Tormenta Arena, Granizo)."],

['Toque Tóxico', 'Poison Touch', "20% de probabilidad de que el pokémon rival quede Envenenado si el usuario utiliza un movimiento de contacto directo."],

['Regeneración', 'Regenerator', "Recupera 1/3 de sus PS máximos cuando el pokémon es intercambiado."],

['Ímpetu Arena', 'Sand Rush', "Duplica la Velocidad del pokémon durante una Tormenta de Arena. El pokémon también es inmune al daño de la Tormenta de Arena."],

['Piel Milagro', 'Wonder Skin', "Reduce en un 50% la precisión de los movimientos de estado de los pokémon rivales dirigidos al usuario."],

['Cálculo Final', 'Analytic', "Aumenta en un 30% el poder del ataque del pokémon, siempre si el pokémon objetivo golgea primero al usuario."],

['Ilusión', 'Illusion', "Adopta sólo la apariencia y nombre de cualquier otro pokémon, dependiendo de si es un pokémon salvaje o de un equipo rival."],

['Impostor', 'Imposter', "El pokémon se transforma automáticamente en el Pokémon rival al entrar en batalla."],

['Momia', 'Mummy', "Todo pokémon que le haga daño de contacto directo pasa a tener esta habilidad. No puede sustituir a las habilidades Multitipo o Superguarda."],

['Autoestima', 'Moxie', "Aumenta 1 nivel el Ataque del pokémon cuando debilita a un pokémon rival con un ataque de contacto directo."],

['Justiciero', 'Justified', "Aumenta 1 nivel el Ataque del Pokémon cuando es golpeado con un ataque de tipo Siniestro. Funciona 1 vez por cada movimiento."],
['Cobardía', 'Rattled', "Aumenta 1 nivel la Velocidad del Pokémon cuando es golpeado con un ataque de tipo Siniestro, Fantasma o Bicho. Funciona 1 vez por cada movimiento."],

['Espejomágico', 'Magic Bounce', "Refleja el efecto de determinados movimientos de cambio de estadísticas hacia el pokémon que los aplicó."],

['Herbívoro', 'Sap Sipper', "Inmune a los movimientos tipo Planta, salvo Aromaterapia, y aumenta su Ataque en 1 nivel."],

['Poder Arena', 'Sand Force', "Aumenta en un 30% los ataques de tipo Roca, Tierra y Acero durante una Tormenta de Arena. El pokémon también es inmune al daño de la Tormenta de Arena"],

['Punta Acero', 'Iron Barbs', "Todo pokémon que lo golpee con un ataque de contacto directo pierde 1/16 de sus PS máximos."],

['Modo Daruma', 'Zen Mode', "Permite al pokémon cambiar de forma si tiene menos de la mitad de sus PS máximos. Sólo funciona con Darmanitan."],

['Tinovictoria', 'Victory Star', "Aumenta en un 10% la Precisión del pokémon, y la de sus compañeros en batalla."],


['Turbollama', 'Turboblaze', "Impide el efecto de las habilidades que impiden, anulan el efecto secundario o reducen el poder de cualquier movimiento."],
['Terravoltaje', 'Teravolt', "Impide el efecto de las habilidades que impiden, anulan el efecto secundario o reducen el poder de cualquier movimiento."],








////////





['Velo Aroma', 'Aroma Veil', "Impide que los compañeros pokémon sean afectados por efectos sobre su mente, como Atracción o Confusión."],
['Velo Flor', 'Flower Veil', "Impide que las características de un compañero pokémon de tipo Planta sean reducidas."],
['Velo Dulce', 'Sweet Veil', "Impide que los compañeros pokémon sean Dormidos en combate."],

['Carrillo', 'Cheek Pouch', "El pokémon recupera PS cuando utiliza una Baya en combate."],

['Mutatipo', 'Protean', "El tipo del pokémon cambia al tipo del último movimiento que ha utilizado."],

['Pelaje Recio', 'Fur Coat', "Reduce a la mitad el daño de los ataques de contacto directo."],

['Prestidigitador', 'Magician', "El pokémon puede robarle el objeto al pokémon rival al usar un ataque sobre el mismo."],

['Antibalas', 'Bulletproof', "Anula el daño de los ataques basados en proyectiles."],

['Mandíbula Fuerte', 'Strong Jaw', "Aumenta en un 50% el poder de los ataques basados en mordiscos."],

['Piel Helada', 'Refrigerate', "Todos los movimientos del pokémon que sean de tipo Normal se vuelven de tipo Hielo."],
['Piel Feérica', 'Pixilate', "Todos los movimientos del pokémon que sean de tipo Normal se vuelven de tipo Hada."],
['Piel Celeste', 'Aerilate', "Todos los movimientos del pokémon que sean de tipo Normal se vuelven de tipo Volador."],

['Cambio Táctico', 'Stance Change', "El pokémon cambia de forma en función de su último movimiento."],

['Alas Vendaval', 'Gale Wings', "Los movimientos de tipo Volador tienen prioridad cuando los usa el usuario."],

['Megadisparador', 'Mega Launcher', "Aumenta en un 50% el poder de los ataques basados en pulsos o auras."],

['Manto Frondoso', 'Grass Pelt', "Aumenta la Defensa del Pokémon cuando está en un campo de hierba."],

['Simbiosis', 'Symbiosis', "El usuario puede transferirle un objeto a un compañero pokémon en combate."],
['Garra Dura', 'Tough Claws', "Aumenta el poder de los ataques de contacto directo."],

['Baba', 'Gooey', "Reduce 1 nivel la Velocidad del pokémon rival si usa un movimiento de contacto directo."],

['Amor Filial', 'Parental Bond', "El pokémon puede golpear 2 veces en el mismo turno. El segundo golpe hace un 50% de daño."],

['Aura Oscura', 'Dark Aura', "Aumenta el poder de todos los movimientos de tipo Siniestro."],
['Aura Feérica', 'Fairy Aura', "Aumenta el poder de todos los movimientos de tipo Hada."],
['Rompeaura', 'Aura Break', "Invierte los efectos de las habilidades basadas en aura."],




['Mar del Albor', 'Primordial Sea', "Produce una clima poderosamente Lluvioso y perpetuo al entrar en batalla, impide los movimientos de tipo Fuego y anula los efectos de clima provocados por movimientos y habilidades del mismo."],
['Tierra del Ocaso', 'Desolate Land', "Produce una clima abrasadoramente Soleado y perpetuo al entrar en batalla, impide los movimientos de tipo Agua y anula los efectos de clima provocados por movimientos y habilidades del mismo."],
['Ráfaga Delta', 'Delta Stream', "Produce una clima muy Turbulento y perpetuo al entrar en batalla, debilita la efectividad de los movimientos que sean efectivos contra los pokémon de tipo Volador y anula los efectos de clima provocados por movimientos y habilidades del mismo."],

];



















function habNombre(valor){
	var encontrado = "No se encontro";
	for (var i = 0; i < abilities.length; i++) {
		//console.log(abilities[i].length);
		for (var j = 0; j < abilities[i].length-1; j++) {
			//console.log(abilities[i][j]);
			if (abilities[i][j].toLowerCase() == valor.toLowerCase()) {
				encontrado = "";
				//encontrado = abilities[i][j];
				encontrado = abilities[i][0];
				break;
			}
		}
	}
	return encontrado;
}


function habDescripcion(valor){
	var encontrado = "(No se encontro)";
	for (var i = 0; i < abilities.length; i++) {
		//console.log(abilities[i].length);
		for (var j = 0; j < abilities[i].length-1; j++) {
			//console.log(abilities[i][j]);
			if (abilities[i][j].toLowerCase() == valor.toLowerCase()) {
				encontrado = "";
				//encontrado = abilities[i][j];
				encontrado = abilities[i][abilities[i].length-1];
				break;
			}
		}
	}
	return encontrado;
}









var evolveItems = [

['Piedra Fuego', 'Fire Stone', "http://www.serebii.net/itemdex/sprites/firestone.png"],
['Piedra Trueno', 'Thunder Stone', "http://www.serebii.net/itemdex/sprites/thunderstone.png"],
['Piedra Agua', 'Water Stone', "http://www.serebii.net/itemdex/sprites/waterstone.png"],
['Piedra Hoja', 'Leaf Stone', "http://www.serebii.net/itemdex/sprites/leafstone.png"],
['Piedra Alba', 'Dawn Stone', "http://www.serebii.net/itemdex/sprites/dawnstone.png"],
['Piedra Día', 'Shiny Stone', "http://www.serebii.net/itemdex/sprites/shinystone.png"],
['Piedra Noche', 'Dusk Stone', "http://www.serebii.net/itemdex/sprites/duskstone.png"],
['Piedra Solar', 'Sun Stone', "http://www.serebii.net/itemdex/sprites/sunstone.png"],
['Piedra Lunar', 'Moon Stone', "http://www.serebii.net/itemdex/sprites/moonstone.png"],


['Mejora', 'Up-grade', "http://www.serebii.net/itemdex/sprites/up-grade.png"],
['Discoxtraño', 'Dubious Disc', "http://www.serebii.net/itemdex/sprites/dubiousdisc.png"],

['Escama Marina', 'Deep Sea Scale', "http://www.serebii.net/itemdex/sprites/deepseascale.png"],
['Diente Marino', 'Deep Sea Tooth', "http://www.serebii.net/itemdex/sprites/deepseatooth.png"],

['Escamadragón', 'Dragon Scale', "http://www.serebii.net/itemdex/sprites/dragonscale.png"],
['Escama Bella', 'Prism Scale', "http://www.serebii.net/itemdex/sprites/prismscale.png"],
['Electrizador', 'Electirizer', "http://www.serebii.net/itemdex/sprites/electirizer.png"],
['Magmatizador', 'Magmarizer', "http://www.serebii.net/itemdex/sprites/magmarizer.png"],
['Roca del Rey', 'King\'s Rock', "http://www.serebii.net/itemdex/sprites/king'srock.png"],
['Revestimiento Metálico', 'Metal Coat', "http://www.serebii.net/itemdex/sprites/metalcoat.png"],
['Piedra Oval', 'Oval Stone', "http://www.serebii.net/itemdex/sprites/ovalstone.png"],
['Protector', 'Protector', "http://www.serebii.net/itemdex/sprites/protector.png"],
['Telaterrible', 'Reaper Cloth', "http://www.serebii.net/itemdex/sprites/reapercloth.png"],
['Saquito Fragante', 'Sachet', "http://www.serebii.net/itemdex/sprites/sachet.png"],
['Dulce de Nata', 'Whipped Dream', "http://www.serebii.net/itemdex/sprites/whippeddream.png"],

['Garrafilada', 'Razor Claw', "http://www.serebii.net/itemdex/sprites/razorclaw.png"],
['Colmillo Agudo', 'Razor Fang', "http://www.serebii.net/itemdex/sprites/razorfang.png"],

];








function getEvolveItem(valor){
	var encontrado = "(N/A)";
	for(var i = 0; i < evolveItems.length; i++){
		for(var j = 0; j < evolveItems[i].length-1; j++){
			if (evolveItems[i][j].replace(/ /g, '').toLowerCase() == valor.trim().replace(/ /g, '').toLowerCase()) {
				encontrado = "";
				encontrado = evolveItems[i][evolveItems[i].length-1];
				break;
			}
		}
	}
	return encontrado;
}










































//Funciones unicamente aplicables megaevoluciones


function getDexRegiones(array, id){
	//
	var regiones;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			regiones = array[i]["dexRegiones"];
		}
	}
	return regiones;
}

function getRatioCaptura(array, id){
	//
	var ratio;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			ratio = array[i]["ratioCaptura"];
		}
	}
	return ratio;
}

function getValoresEsfuerzo(array, id){
	//
	var valores;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			valores = array[i]["valoresEsfuerzo"];
		}
	}
	return valores;
}

function getPasos(array, id){
	//
	var pasos;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			pasos = array[i]["pasos"];
		}
	}
	return pasos;
}

function getGrupos(array, id){
	//
	var grupos;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			grupos = array[i]["grupo"];
		}
	}
	return grupos;
}

function getAmistad(array, id){
	//
	var amistad;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			amistad = array[i]["amistad"];
		}
	}
	return amistad;
}

function getGeneros(array, id){
	//
	var generos;
	for(var i = 0; i < array.length; i++){
		//
		if (array[i].id == id) {
			generos = array[i]["generos"];
		}
	}
	return generos;
}








