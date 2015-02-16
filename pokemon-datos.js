var names2 = [
{
	id: '001',
	nombre: names[0], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Semilla',
	altura: [getAltura(0).pies, getAltura(0).metros], peso: [getPeso(0).libras, getPeso(0).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Clorofila'),habilidadDescripcion: habDescripcion('Clorofila')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '002',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '003',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '001',
		dexKanto: '001',
		dexJohtoGSC: '226',
		dexJohtoHGSS: '231',
		dexKalosCentral: '080'
	},
	idiomas: {frances: namesFR[0],aleman: namesDE[0],japones: [namesJP[0][1], namesJP[0][0]],coreano: [namesKO[0][1], namesKO[0][0]]}
},
{
	id: '002',
	nombre: names[1], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Semilla',
	altura: [getAltura(1).pies, getAltura(1).metros], peso: [getPeso(1).libras, getPeso(1).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Clorofila'),habilidadDescripcion: habDescripcion('Clorofila')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '001',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '003',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '002',
		dexKanto: '002',
		dexJohtoGSC: '227',
		dexJohtoHGSS: '232',
		dexKalosCentral: '081'
	},
	idiomas: {frances: namesFR[1],aleman: namesDE[1],japones: [namesJP[1][1], namesJP[1][0]],coreano: [namesKO[1][1], namesKO[1][0]]}
},
{
	id: '003',
	nombre: names[2], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Semilla',
	altura: [getAltura(2).pies, getAltura(2).metros], peso: [getPeso(2).libras, getPeso(2).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Clorofila'),habilidadDescripcion: habDescripcion('Clorofila')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '002',
			metodo: "Subiendo desde nivel 32",
			preevolucion: {
				numeroEspecie: '001',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	megaEvolucion: ['003'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5, hembra: 12.5},
	dexRegiones: {
		dexNacional: '003',
		dexKanto: '003',
		dexJohtoGSC: '228',
		dexJohtoHGSS: '233',
		dexKalosCentral: '082'
	},
	idiomas: {frances: namesFR[2],aleman: namesDE[2],japones: [namesJP[2][1], namesJP[2][0]],coreano: [namesKO[2][1], namesKO[2][0]]}
},




{
	id: '004',
	nombre: names[3], tipo: ['fire'], clasificacion: 'Pokémon Lagarto',
	altura: [getAltura(3).pies, getAltura(3).metros], peso: [getPeso(3).libras, getPeso(3).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '005',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '006',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '004',
		dexKanto: '004',
		dexJohtoGSC: '229',
		dexJohtoHGSS: '234',
		dexKalosCentral: '083'
	},
	idiomas: {frances: namesFR[3],aleman: namesDE[3],japones: [namesJP[3][1], namesJP[3][0]],coreano: [namesKO[3][1], namesKO[3][0]]}
},
{
	id: '005',
	nombre: names[4], tipo: ['fire'], clasificacion: 'Pokémon Llama',
	altura: [getAltura(4).pies, getAltura(4).metros], peso: [getPeso(4).libras, getPeso(4).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '004',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '006',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '005',
		dexKanto: '005',
		dexJohtoGSC: '230',
		dexJohtoHGSS: '235',
		dexKalosCentral: '084'
	},
	idiomas: {frances: namesFR[4],aleman: namesDE[4],japones: [namesJP[4][1], namesJP[4][0]],coreano: [namesKO[4][1], namesKO[4][0]]}
},
{
	id: '006',
	nombre: names[5], tipo: ['fire', 'flying'], clasificacion: 'Pokémon Llama',
	altura: [getAltura(5).pies, getAltura(5).metros], peso: [getPeso(5).libras, getPeso(5).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '005',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '004',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	megaEvolucion: ['006x', '006y'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '006',
		dexKanto: '006',
		dexJohtoGSC: '231',
		dexJohtoHGSS: '236',
		dexKalosCentral: '085'
	},
	idiomas: {frances: namesFR[5],aleman: namesDE[5],japones: [namesJP[5][1], namesJP[5][0]],coreano: [namesKO[5][1], namesKO[5][0]]}
},






{
	id: '007',
	nombre: names[6], tipo: ['water'], clasificacion: 'Pokémon Tortuguita',
	altura: [getAltura(6).pies, getAltura(6).metros], peso: [getPeso(6).libras, getPeso(6).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '008',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '009',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		//ps: '1',
		//ataque: '1',
		defensa: 1,
		//ataqueEspecial: '1',
		//defensaEspecial: '1',
		//velocidad: '1'
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '007',
		dexKanto: '007',
		dexJohtoGSC: '232',
		dexJohtoHGSS: '237',
		dexKalosCentral: '086'
	},
	idiomas: {frances: namesFR[6],aleman: namesDE[6],japones: [namesJP[6][1], namesJP[6][0]],coreano: [namesKO[6][1], namesKO[6][0]]}
},
{
	id: '008',
	nombre: names[7], tipo: ['water'], clasificacion: 'Pokémon Tortuga',
	altura: [getAltura(4).pies, getAltura(4).metros], peso: [getPeso(4).libras, getPeso(4).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '007',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '009',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '008',
		dexKanto: '008',
		dexJohtoGSC: '233',
		dexJohtoHGSS: '238',
		dexKalosCentral: '087'
	},
	idiomas: {frances: namesFR[7],aleman: namesDE[7],japones: [namesJP[7][1], namesJP[7][0]],coreano: [namesKO[7][1], namesKO[7][0]]}
},
{
	id: '009',
	nombre: names[8], tipo: ['water'], clasificacion: 'Pokémon Marisco',
	altura: [getAltura(8).pies, getAltura(8).metros], peso: [getPeso(8).libras, getPeso(8).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '008',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '007',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	megaEvolucion: ['009'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '009',
		dexKanto: '009',
		dexJohtoGSC: '234',
		dexJohtoHGSS: '239',
		dexKalosCentral: '088'
	},
	idiomas: {frances: namesFR[8],aleman: namesDE[8],japones: [namesJP[8][1], namesJP[8][0]],coreano: [namesKO[8][1], namesKO[8][0]]}
},







{
	id: '010',
	nombre: names[9], tipo: ['bug'], clasificacion: 'Pokémon Gusano',
	altura: [getAltura(9).pies, getAltura(9).metros], peso: [getPeso(9).libras, getPeso(9).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '011',
			metodo: "Subiendo desde nivel 7",
			evolucion: {
				numeroEspecie: '012',
				metodo: "Subiendo desde nivel 10",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '010',
		dexKanto: '010',
		dexJohtoGSC: '024',
		dexJohtoHGSS: '024',
		dexKalosCentral: '023'
	},
	idiomas: {frances: namesFR[9],aleman: namesDE[9],japones: [namesJP[9][1], namesJP[9][0]],coreano: [namesKO[9][1], namesKO[9][0]]}
},
{
	id: '011',
	nombre: names[10], tipo: ['bug'], clasificacion: 'Pokémon Capullo',
	altura: [getAltura(10).pies, getAltura(10).metros], peso: [getPeso(10).libras, getPeso(10).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '010',
			metodo: "Subiendo desde nivel 7",
		},
		evolucion: {
			numeroEspecie: '012',
			metodo: "Subiendo desde nivel 10",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '011',
		dexKanto: '011',
		dexJohtoGSC: '025',
		dexJohtoHGSS: '025',
		dexKalosCentral: '024'
	},
	idiomas: {frances: namesFR[10],aleman: namesDE[10],japones: [namesJP[10][1], namesJP[10][0]],coreano: [namesKO[10][1], namesKO[10][0]]}
},
{
	id: '012',
	nombre: names[11], tipo: ['bug','flying'], clasificacion: 'Pokémon Mariposa',
	altura: [getAltura(11).pies, getAltura(11).metros], peso: [getPeso(11).libras, getPeso(11).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '011',
			metodo: "Subiendo desde nivel 10",
			preevolucion: {
				numeroEspecie: '010',
				metodo: "Subiendo desde nivel 7",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '012',
		dexKanto: '012',
		dexJohtoGSC: '026',
		dexJohtoHGSS: '026',
		dexKalosCentral: '025'
	},
	idiomas: {frances: namesFR[11],aleman: namesDE[11],japones: [namesJP[11][1], namesJP[11][0]],coreano: [namesKO[11][1], namesKO[11][0]]}
},






{
	id: '013',
	nombre: names[12], tipo: ['bug','poison'], clasificacion: 'Pokémon Oruga',
	altura: [getAltura(12).pies, getAltura(12).metros], peso: [getPeso(12).libras, getPeso(12).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '014',
			metodo: "Subiendo desde nivel 7",
			evolucion: {
				numeroEspecie: '015',
				metodo: "Subiendo desde nivel 10",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '013',
		dexKanto: '013',
		dexJohtoGSC: '027',
		dexJohtoHGSS: '027',
		dexKalosCentral: '026'
	},
	idiomas: {frances: namesFR[12],aleman: namesDE[12],japones: [namesJP[12][1], namesJP[12][0]],coreano: [namesKO[12][1], namesKO[12][0]]}
},
{
	id: '014',
	nombre: names[13], tipo: ['bug','poison'], clasificacion: 'Pokémon Capullo',
	altura: [getAltura(13).pies, getAltura(13).metros], peso: [getPeso(13).libras, getPeso(13).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '013',
			metodo: "Subiendo desde nivel 7",
		},
		evolucion: {
			numeroEspecie: '015',
			metodo: "Subiendo desde nivel 10",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '014',
		dexKanto: '014',
		dexJohtoGSC: '028',
		dexJohtoHGSS: '028',
		dexKalosCentral: '027'
	},
	idiomas: {frances: namesFR[13],aleman: namesDE[13],japones: [namesJP[13][1], namesJP[13][0]],coreano: [namesKO[13][1], namesKO[13][0]]}
},
{
	id: '015',
	nombre: names[14], tipo: ['bug','poison'], clasificacion: 'Pokémon Abeja Venenosa',
	altura: [getAltura(14).pies, getAltura(14).metros], peso: [getPeso(14).libras, getPeso(14).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Francotirador'),habilidadDescripcion: habDescripcion('Francotirador')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '014',
			metodo: "Subiendo desde nivel 10",
			preevolucion: {
				numeroEspecie: '013',
				metodo: "Subiendo desde nivel 7",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 11, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '015',
		dexKanto: '015',
		dexJohtoGSC: '029',
		dexJohtoHGSS: '029',
		dexKalosCentral: '028'
	},
	idiomas: {frances: namesFR[14],aleman: namesDE[14],japones: [namesJP[14][1], namesJP[14][0]],coreano: [namesKO[14][1], namesKO[14][0]]}
},














{
	id: '016',
	nombre: names[15], tipo: ['normal','flying'], clasificacion: 'Pokémon Pajarito',
	altura: [getAltura(15).pies, getAltura(15).metros], peso: [getPeso(15).libras, getPeso(15).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '017',
			metodo: "Subiendo desde nivel 18",
			evolucion: {
				numeroEspecie: '018',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '016',
		dexKanto: '016',
		dexJohtoGSC: '010',
		dexJohtoHGSS: '010',
		dexKalosCentral: '017'
	},
	idiomas: {frances: namesFR[15],aleman: namesDE[15],japones: [namesJP[15][1], namesJP[15][0]],coreano: [namesKO[15][1], namesKO[15][0]]}
},
{
	id: '017',
	nombre: names[16], tipo: ['normal','flying'], clasificacion: 'Pokémon Pájaro',
	altura: [getAltura(16).pies, getAltura(16).metros], peso: [getPeso(16).libras, getPeso(16).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '016',
			metodo: "Subiendo desde nivel 18",
		},
		evolucion: {
			numeroEspecie: '018',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '017',
		dexKanto: '017',
		dexJohtoGSC: '011',
		dexJohtoHGSS: '011',
		dexKalosCentral: '018'
	},
	idiomas: {frances: namesFR[16],aleman: namesDE[16],japones: [namesJP[16][1], namesJP[16][0]],coreano: [namesKO[16][1], namesKO[16][0]]}
},
{
	id: '018',
	nombre: names[17], tipo: ['normal','flying'], clasificacion: 'Pokémon Pájaro',
	altura: [getAltura(17).pies, getAltura(17).metros], peso: [getPeso(17).libras, getPeso(17).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '017',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '016',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '018',
		dexKanto: '018',
		dexJohtoGSC: '012',
		dexJohtoHGSS: '012',
		dexKalosCentral: '019'
	},
	idiomas: {frances: namesFR[17],aleman: namesDE[17],japones: [namesJP[17][1], namesJP[17][0]],coreano: [namesKO[17][1], namesKO[17][0]]}
},











{
	id: '019',
	nombre: names[18], tipo: ['normal'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(18).pies, getAltura(18).metros], peso: [getPeso(18).libras, getPeso(18).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '020',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '019',
		dexKanto: '019',
		dexJohtoGSC: '017',
		dexJohtoHGSS: '017',
		dexUnovaB2W2: '059',
	},
	idiomas: {frances: namesFR[18],aleman: namesDE[18],japones: [namesJP[18][1], namesJP[18][0]],coreano: [namesKO[18][1], namesKO[18][0]]}
},
{
	id: '020',
	nombre: names[19], tipo: ['normal'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(19).pies, getAltura(19).metros], peso: [getPeso(19).libras, getPeso(19).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '019',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 127,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '020',
		dexKanto: '020',
		dexJohtoGSC: '018',
		dexJohtoHGSS: '018',
		dexUnovaB2W2: '060',
	},
	idiomas: {frances: namesFR[19],aleman: namesDE[19],japones: [namesJP[19][1], namesJP[19][0]],coreano: [namesKO[19][1], namesKO[19][0]]}
},





{
	id: '021',
	nombre: names[20], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Pajarito',
	altura: [getAltura(20).pies, getAltura(20).metros], peso: [getPeso(20).libras, getPeso(20).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '022',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '021',
		dexKanto: '021',
		dexJohtoGSC: '013',
		dexJohtoHGSS: '013',
		dexKalosMontana: '109',
	},
	idiomas: {frances: namesFR[20],aleman: namesDE[20],japones: [namesJP[20][1], namesJP[20][0]],coreano: [namesKO[20][1], namesKO[20][0]]}
},
{
	id: '022',
	nombre: names[21], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Pico',
	altura: [getAltura(21).pies, getAltura(21).metros], peso: [getPeso(21).libras, getPeso(21).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '021',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '021',
		dexKanto: '021',
		dexJohtoGSC: '014',
		dexJohtoHGSS: '014',
		dexKalosMontana: '110',
	},
	idiomas: {frances: namesFR[21],aleman: namesDE[21],japones: [namesJP[21][1], namesJP[21][0]],coreano: [namesKO[21][1], namesKO[21][0]]}
},





{
	id: '023',
	nombre: names[22], tipo: ['poison'], clasificacion: 'Pokémon Serpiente',
	altura: [getAltura(22).pies, getAltura(22).metros], peso: [getPeso(22).libras, getPeso(22).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('shed skin'),habilidadDescripcion: habDescripcion('shed skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '024',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Dragón'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '023',
		dexKanto: '023',
		dexJohtoGSC: '050',
		dexJohtoHGSS: '050',
		dexKalosMontana: '037',
	},
	idiomas: {frances: namesFR[22],aleman: namesDE[22],japones: [namesJP[22][1], namesJP[22][0]],coreano: [namesKO[22][1], namesKO[22][0]]}
},
{
	id: '024',
	nombre: names[23], tipo: ['poison'], clasificacion: 'Pokémon Cobra',
	altura: [getAltura(23).pies, getAltura(23).metros], peso: [getPeso(23).libras, getPeso(23).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('shed skin'),habilidadDescripcion: habDescripcion('shed skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '023',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Dragón'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '024',
		dexKanto: '024',
		dexJohtoGSC: '051',
		dexJohtoHGSS: '051',
		dexKalosMontana: '038',
	},
	idiomas: {frances: namesFR[23],aleman: namesDE[23],japones: [namesJP[23][1], namesJP[23][0]],coreano: [namesKO[23][1], namesKO[23][0]]}
},






{
	id: '025',
	nombre: names[24], tipo: ['electric'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(24).pies, getAltura(24).metros], peso: [getPeso(24).libras, getPeso(24).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '172',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
		evolucion: {
			numeroEspecie: '026',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '025',
		dexKanto: '025',
		dexJohtoGSC: '022',
		dexJohtoHGSS: '022',
		dexHoennRSE: '156',
		dexSinnohDPPt: '104',
		dexKalosCentral: '036',
	},
	idiomas: {frances: namesFR[24],aleman: namesDE[24],japones: [namesJP[24][1], namesJP[24][0]],coreano: [namesKO[24][1], namesKO[24][0]]}
},
{
	id: '026',
	nombre: names[25], tipo: ['electric'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(25).pies, getAltura(25).metros], peso: [getPeso(25).libras, getPeso(25).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '025',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
			preevolucion: {
				numeroEspecie: '172',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '026',
		dexKanto: '026',
		dexJohtoGSC: '023',
		dexJohtoHGSS: '023',
		dexHoennRSE: '157',
		dexSinnohDPPt: '105',
		dexKalosCentral: '037',
	},
	idiomas: {frances: namesFR[25],aleman: namesDE[25],japones: [namesJP[25][1], namesJP[25][0]],coreano: [namesKO[25][1], namesKO[25][0]]}
},




{
	id: '027',
	nombre: names[26], tipo: ['ground'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(26).pies, getAltura(26).metros], peso: [getPeso(26).libras, getPeso(26).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Rush'),habilidadDescripcion: habDescripcion('Sand Rush')}
		]
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '028',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '027',
		dexKanto: '027',
		dexJohtoGSC: '048',
		dexJohtoHGSS: '048',
		dexHoennRSE: '112',
		dexUnovaB2W2: '113',
		dexKalosMontana: '097',
	},
	idiomas: {frances: namesFR[26],aleman: namesDE[26],japones: [namesJP[26][1], namesJP[26][0]],coreano: [namesKO[26][1], namesKO[26][0]]}
},
{
	id: '028',
	nombre: names[27], tipo: ['ground'], clasificacion: 'Pokémon Ratón',
	altura: [getAltura(27).pies, getAltura(27).metros], peso: [getPeso(27).libras, getPeso(27).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Rush'),habilidadDescripcion: habDescripcion('Sand Rush')}
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '027',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '028',
		dexKanto: '028',
		dexJohtoGSC: '049',
		dexJohtoHGSS: '049',
		dexHoennRSE: '113',
		dexUnovaB2W2: '114',
		dexKalosMontana: '098',
	},
	idiomas: {frances: namesFR[27],aleman: namesDE[27],japones: [namesJP[27][1], namesJP[27][0]],coreano: [namesKO[27][1], namesKO[27][0]]}
},









{
	id: '029',
	nombre: names[28], tipo: ['poison'], clasificacion: 'Pokémon Pin Veneno',
	altura: [getAltura(28).pies, getAltura(28).metros], peso: [getPeso(28).libras, getPeso(28).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '030',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '031',
				metodo: "Aplicando Piedra Lunar",
				objeto: getEvolveItem('piedra lunar'),
			},
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Campo'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '029',
		dexKanto: '029',
		dexJohtoGSC: '095',
		dexJohtoHGSS: '095',
		dexKalosCosta: '104',
	},
	idiomas: {frances: namesFR[28],aleman: namesDE[28],japones: [namesJP[28][1], namesJP[28][0]],coreano: [namesKO[28][1], namesKO[28][0]]}
},














































{
	id: '030',
	nombre: names[29], tipo: ['poison'], clasificacion: 'Pokémon Pin Veneno',
	altura: [getAltura(29).pies, getAltura(29).metros], peso: [getPeso(29).libras, getPeso(29).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '029',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '031',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '030',
		dexKanto: '030',
		dexJohtoGSC: '096',
		dexJohtoHGSS: '096',
		dexKalosCosta: '105',
	},
	idiomas: {frances: namesFR[29],aleman: namesDE[29],japones: [namesJP[29][1], namesJP[29][0]],coreano: [namesKO[29][1], namesKO[29][0]]}
},
{
	id: '031',
	nombre: names[30], tipo: ['poison', 'ground'], clasificacion: 'Pokémon Taladro',
	altura: [getAltura(30).pies, getAltura(30).metros], peso: [getPeso(30).libras, getPeso(30).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
			numeroEspecie: '030',
			preevolucion: {
				numeroEspecie: '029',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '031',
		dexKanto: '031',
		dexJohtoGSC: '097',
		dexJohtoHGSS: '097',
		dexKalosCosta: '106',
	},
	idiomas: {frances: namesFR[30],aleman: namesDE[30],japones: [namesJP[30][1], namesJP[30][0]],coreano: [namesKO[30][1], namesKO[30][0]]}
},
{
	id: '032',
	nombre: names[31], tipo: ['poison'], clasificacion: 'Pokémon Pin Veneno',
	altura: [getAltura(31).pies, getAltura(31).metros], peso: [getPeso(31).libras, getPeso(31).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '033',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '034',
				metodo: "Aplicando Piedra Lunar",
				objeto: getEvolveItem('piedra lunar'),
			},
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Campo'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '032',
		dexKanto: '032',
		dexJohtoGSC: '098',
		dexJohtoHGSS: '098',
		dexKalosCosta: '107',
	},
	idiomas: {frances: namesFR[31],aleman: namesDE[31],japones: [namesJP[31][1], namesJP[31][0]],coreano: [namesKO[31][1], namesKO[31][0]]}
},
{
	id: '033',
	nombre: names[32], tipo: ['poison'], clasificacion: 'Pokémon Pin Veneno',
	altura: [getAltura(32).pies, getAltura(32).metros], peso: [getPeso(32).libras, getPeso(32).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '032',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '034',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Campo'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '033',
		dexKanto: '033',
		dexJohtoGSC: '099',
		dexJohtoHGSS: '099',
		dexKalosCosta: '108',
	},
	idiomas: {frances: namesFR[32],aleman: namesDE[32],japones: [namesJP[32][1], namesJP[32][0]],coreano: [namesKO[32][1], namesKO[32][0]]}
},
{
	id: '034',
	nombre: names[33], tipo: ['poison', 'ground'], clasificacion: 'Pokémon Taladro',
	altura: [getAltura(33).pies, getAltura(33).metros], peso: [getPeso(33).libras, getPeso(33).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '033',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
			preevolucion: {
				numeroEspecie: '032',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Campo'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '034',
		dexKanto: '034',
		dexJohtoGSC: '100',
		dexJohtoHGSS: '100',
		dexKalosCosta: '109',
	},
	idiomas: {frances: namesFR[33],aleman: namesDE[33],japones: [namesJP[33][1], namesJP[33][0]],coreano: [namesKO[33][1], namesKO[33][0]]}
},
{
	id: '035',
	nombre: names[34], tipo: ['fairy'], clasificacion: 'Pokémon Hada',
	altura: [getAltura(34).pies, getAltura(34).metros], peso: [getPeso(34).libras, getPeso(34).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '173',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
		evolucion: {
			numeroEspecie: '036',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 150,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 140,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '035',
		dexKanto: '035',
		dexJohtoGSC: '041',
		dexJohtoHGSS: '041',
		dexSinnohDPPt: '100',
		dexUnovaB2W2: '089',
	},
	idiomas: {frances: namesFR[34],aleman: namesDE[34],japones: [namesJP[34][1], namesJP[34][0]],coreano: [namesKO[34][1], namesKO[34][0]]}
},
{
	id: '036',
	nombre: names[35], tipo: ['fairy'], clasificacion: 'Pokémon Hada',
	altura: [getAltura(35).pies, getAltura(35).metros], peso: [getPeso(35).libras, getPeso(35).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '035',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
			preevolucion: {
				numeroEspecie: '173',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 140,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '036',
		dexKanto: '036',
		dexJohtoGSC: '042',
		dexJohtoHGSS: '042',
		dexSinnohDPPt: '101',
		dexUnovaB2W2: '090',
	},
	idiomas: {frances: namesFR[35],aleman: namesDE[35],japones: [namesJP[35][1], namesJP[35][0]],coreano: [namesKO[35][1], namesKO[35][0]]}
},
{
	id: '037',
	nombre: names[36], tipo: ['fire'], clasificacion: 'Pokémon Zorro',
	altura: [getAltura(36).pies, getAltura(36).metros], peso: [getPeso(36).libras, getPeso(36).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('drought'),habilidadDescripcion: habDescripcion('drought')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '038',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '037',
		dexKanto: '037',
		dexJohtoGSC: '125',
		dexJohtoHGSS: '127',
		dexHoennRSE: '153',
		dexUnovaB2W2: '248',
	},
	idiomas: {frances: namesFR[36],aleman: namesDE[36],japones: [namesJP[36][1], namesJP[36][0]],coreano: [namesKO[36][1], namesKO[36][0]]}
},
{
	id: '038',
	nombre: names[37], tipo: ['fire'], clasificacion: 'Pokémon Zorro',
	altura: [getAltura(37).pies, getAltura(37).metros], peso: [getPeso(37).libras, getPeso(37).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('drought'),habilidadDescripcion: habDescripcion('drought')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '037',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensaEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '038',
		dexKanto: '038',
		dexJohtoGSC: '126',
		dexJohtoHGSS: '128',
		dexHoennRSE: '154',
		dexUnovaB2W2: '249',
	},
	idiomas: {frances: namesFR[37],aleman: namesDE[37],japones: [namesJP[37][1], namesJP[37][0]],coreano: [namesKO[37][1], namesKO[37][0]]}
},
{
	id: '039',
	nombre: names[38], tipo: ['normal', 'fairy'], clasificacion: 'Pokémon Globo',
	altura: [getAltura(38).pies, getAltura(38).metros], peso: [getPeso(38).libras, getPeso(38).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '174',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
		evolucion: {
			numeroEspecie: '040',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 170,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '039',
		dexKanto: '039',
		dexJohtoGSC: '044',
		dexJohtoHGSS: '044',
		dexHoennRSE: '138',
		dexUnovaB2W2: '282',
		dexKalosMontana: '120',
	},
	idiomas: {frances: namesFR[38],aleman: namesDE[38],japones: [namesJP[38][1], namesJP[38][0]],coreano: [namesKO[38][1], namesKO[38][0]]}
},
{
	id: '040',
	nombre: names[39], tipo: ['normal', 'fairy'], clasificacion: 'Pokémon Globo',
	altura: [getAltura(39).pies, getAltura(39).metros], peso: [getPeso(39).libras, getPeso(39).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '039',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
			preevolucion: {
				numeroEspecie: '174',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '040',
		dexKanto: '040',
		dexJohtoGSC: '045',
		dexJohtoHGSS: '045',
		dexHoennRSE: '139',
		dexUnovaB2W2: '283',
		dexKalosMontana: '121',
	},
	idiomas: {frances: namesFR[39],aleman: namesDE[39],japones: [namesJP[39][1], namesJP[39][0]],coreano: [namesKO[39][1], namesKO[39][0]]}
},
{
	id: '041',
	nombre: names[40], tipo: ['poison', 'flying'], clasificacion: 'Pokémon Murciélago',
	altura: [getAltura(40).pies, getAltura(40).metros], peso: [getPeso(40).libras, getPeso(40).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '042',
			metodo: "Subiendo desde nivel 22",
			evolucion: {
				numeroEspecie: '169',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '041',
		dexKanto: '041',
		dexJohtoGSC: '037',
		dexJohtoHGSS: '037',
		dexHoennRSE: '063',
		dexSinnohDPPt: '028',
		dexUnovaB2W2: '061',
		dexKalosCentral: '145',
	},
	idiomas: {frances: namesFR[40],aleman: namesDE[40],japones: [namesJP[40][1], namesJP[40][0]],coreano: [namesKO[40][1], namesKO[40][0]]}
},
{
	id: '042',
	nombre: names[41], tipo: ['poison', 'flying'], clasificacion: 'Pokémon Murciélago',
	altura: [getAltura(41).pies, getAltura(41).metros], peso: [getPeso(41).libras, getPeso(41).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '042',
			metodo: "Subiendo desde nivel 22",
		},
		evolucion: {
			numeroEspecie: '169',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '042',
		dexKanto: '042',
		dexJohtoGSC: '038',
		dexJohtoHGSS: '038',
		dexHoennRSE: '064',
		dexSinnohDPPt: '029',
		dexUnovaB2W2: '062',
		dexKalosCentral: '146',
	},
	idiomas: {frances: namesFR[41],aleman: namesDE[41],japones: [namesJP[41][1], namesJP[41][0]],coreano: [namesKO[41][1], namesKO[41][0]]}
},
{
	id: '043',
	nombre: names[42], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Hierbajo',
	altura: [getAltura(42).pies, getAltura(42).metros], peso: [getPeso(42).libras, getPeso(42).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '044',
			metodo: "Subiendo desde nivel 21",
			evolucion: {
				numeroEspecie: '045',
				metodo: "Aplicando Piedra Hoja",
				objeto: getEvolveItem('piedra hoja'),
			},
		},
	},
	{
		evolucion: {
			numeroEspecie: '044',
			metodo: "Subiendo desde nivel 21",
			evolucion: {
				numeroEspecie: '182',
				metodo: "Aplicando Piedra Solar",
				objeto: getEvolveItem('piedra solar'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '043',
		dexKanto: '043',
		dexJohtoGSC: '083',
		dexJohtoHGSS: '083',
		dexHoennRSE: '088',
		dexKalosCentral: '105',
	},
	idiomas: {frances: namesFR[42],aleman: namesDE[42],japones: [namesJP[42][1], namesJP[42][0]],coreano: [namesKO[42][1], namesKO[42][0]]}
},
{
	id: '044',
	nombre: names[43], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Hierbajo',
	altura: [getAltura(43).pies, getAltura(43).metros], peso: [getPeso(43).libras, getPeso(43).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '043',
			metodo: "Subiendo desde nivel 21",
		},
		evolucion: {
			numeroEspecie: '045',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
		{
		preevolucion: {
			numeroEspecie: '043',
			metodo: "Subiendo desde nivel 21",
		},
		evolucion: {
			numeroEspecie: '182',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '044',
		dexKanto: '044',
		dexJohtoGSC: '084',
		dexJohtoHGSS: '084',
		dexHoennRSE: '089',
		dexKalosCentral: '106',
	},
	idiomas: {frances: namesFR[43],aleman: namesDE[43],japones: [namesJP[43][1], namesJP[43][0]],coreano: [namesKO[43][1], namesKO[43][0]]}
},
{
	id: '045',
	nombre: names[44], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Flor',
	altura: [getAltura(44).pies, getAltura(44).metros], peso: [getPeso(44).libras, getPeso(44).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '044',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
			preevolucion: {
				numeroEspecie: '043',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '044',
			otraEvolucion: {
				numeroEspecie: '182',
				metodo: "Aplicando Piedra Solar",
				objeto: getEvolveItem('piedra solar'),
			},
			preevolucion: {
				numeroEspecie: '043',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '045',
		dexKanto: '045',
		dexJohtoGSC: '085',
		dexJohtoHGSS: '085',
		dexHoennRSE: '090',
		dexKalosCentral: '107',
	},
	idiomas: {frances: namesFR[44],aleman: namesDE[44],japones: [namesJP[44][1], namesJP[44][0]],coreano: [namesKO[44][1], namesKO[44][0]]}
},
{
	id: '046',
	nombre: names[45], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(45).pies, getAltura(45).metros], peso: [getPeso(45).libras, getPeso(45).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '047',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '046',
		dexKanto: '046',
		dexJohtoGSC: '070',
		dexJohtoHGSS: '070',
	},
	idiomas: {frances: namesFR[45],aleman: namesDE[45],japones: [namesJP[45][1], namesJP[45][0]],coreano: [namesKO[45][1], namesKO[45][0]]}
},
{
	id: '047',
	nombre: names[46], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(46).pies, getAltura(46).metros], peso: [getPeso(46).libras, getPeso(46).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '046',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '047',
		dexKanto: '047',
		dexJohtoGSC: '071',
		dexJohtoHGSS: '071',
	},
	idiomas: {frances: namesFR[46],aleman: namesDE[46],japones: [namesJP[46][1], namesJP[46][0]],coreano: [namesKO[46][1], namesKO[46][0]]}
},
{
	id: '048',
	nombre: names[47], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Insecto',
	altura: [getAltura(47).pies, getAltura(47).metros], peso: [getPeso(47).libras, getPeso(47).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '049',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '048',
		dexKanto: '048',
		dexJohtoGSC: '108',
		dexJohtoHGSS: '109',
	},
	idiomas: {frances: namesFR[47],aleman: namesDE[47],japones: [namesJP[47][1], namesJP[47][0]],coreano: [namesKO[47][1], namesKO[47][0]]}
},
{
	id: '049',
	nombre: names[48], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Polilla Venenosa',
	altura: [getAltura(48).pies, getAltura(48).metros], peso: [getPeso(48).libras, getPeso(48).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('wonder skin'),habilidadDescripcion: habDescripcion('wonder skin')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '048',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '049',
		dexKanto: '049',
		dexJohtoGSC: '109',
		dexJohtoHGSS: '110',
	},
	idiomas: {frances: namesFR[48],aleman: namesDE[48],japones: [namesJP[48][1], namesJP[48][0]],coreano: [namesKO[48][1], namesKO[48][0]]}
},
{
	id: '050',
	nombre: names[49], tipo: ['ground'], clasificacion: 'Pokémon Topo',
	altura: [getAltura(49).pies, getAltura(49).metros], peso: [getPeso(49).libras, getPeso(49).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('arena trap'),habilidadDescripcion: habDescripcion('arena trap')},
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '051',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '050',
		dexKanto: '050',
		dexJohtoGSC: '132',
		dexJohtoHGSS: '134',
		dexKalosMontana: '001',
	},
	idiomas: {frances: namesFR[49],aleman: namesDE[49],japones: [namesJP[49][1], namesJP[49][0]],coreano: [namesKO[49][1], namesKO[49][0]]}
},
{
	id: '051',
	nombre: names[50], tipo: ['ground'], clasificacion: 'Pokémon Topo',
	altura: [getAltura(50).pies, getAltura(50).metros], peso: [getPeso(50).libras, getPeso(50).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('arena trap'),habilidadDescripcion: habDescripcion('arena trap')},
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '050',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '051',
		dexKanto: '051',
		dexJohtoGSC: '133',
		dexJohtoHGSS: '135',
		dexKalosMontana: '002',
	},
	idiomas: {frances: namesFR[50],aleman: namesDE[50],japones: [namesJP[50][1], namesJP[50][0]],coreano: [namesKO[50][1], namesKO[50][0]]}
},
{
	id: '052',
	nombre: names[51], tipo: ['normal'], clasificacion: 'Pokémon Gato Araña',
	altura: [getAltura(51).pies, getAltura(51).metros], peso: [getPeso(51).libras, getPeso(51).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '053',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '052',
		dexKanto: '052',
		dexJohtoGSC: '136',
		dexJohtoHGSS: '138',
	},
	idiomas: {frances: namesFR[51],aleman: namesDE[51],japones: [namesJP[51][1], namesJP[51][0]],coreano: [namesKO[51][1], namesKO[51][0]]}
},
{
	id: '053',
	nombre: names[52], tipo: ['normal'], clasificacion: 'Pokémon Gato Fino',
	altura: [getAltura(52).pies, getAltura(52).metros], peso: [getPeso(52).libras, getPeso(52).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '052',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '053',
		dexKanto: '053',
		dexJohtoGSC: '137',
		dexJohtoHGSS: '139',
	},
	idiomas: {frances: namesFR[52],aleman: namesDE[52],japones: [namesJP[52][1], namesJP[52][0]],coreano: [namesKO[52][1], namesKO[52][0]]}
},
{
	id: '054',
	nombre: names[53], tipo: ['water'], clasificacion: 'Pokémon Pato',
	altura: [getAltura(53).pies, getAltura(53).metros], peso: [getPeso(53).libras, getPeso(53).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '055',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '054',
		dexKanto: '054',
		dexJohtoGSC: '138',
		dexJohtoHGSS: '140',
		dexHoennRSE: '158',
		dexSinnohDPPt: '043',
		dexUnovaB2W2: '028',
		dexKalosCentral: '059',
	},
	idiomas: {frances: namesFR[53],aleman: namesDE[53],japones: [namesJP[53][1], namesJP[53][0]],coreano: [namesKO[53][1], namesKO[53][0]]}
},
{
	id: '055',
	nombre: names[54], tipo: ['water'], clasificacion: 'Pokémon Pato',
	altura: [getAltura(54).pies, getAltura(54).metros], peso: [getPeso(54).libras, getPeso(54).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '054',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '055',
		dexKanto: '055',
		dexJohtoGSC: '139',
		dexJohtoHGSS: '141',
		dexHoennRSE: '159',
		dexSinnohDPPt: '044',
		dexUnovaB2W2: '029',
		dexKalosCentral: '060',
	},
	idiomas: {frances: namesFR[54],aleman: namesDE[54],japones: [namesJP[54][1], namesJP[54][0]],coreano: [namesKO[54][1], namesKO[54][0]]}
},
{
	id: '056',
	nombre: names[55], tipo: ['fight'], clasificacion: 'Pokémon Mono Cerdo',
	altura: [getAltura(55).pies, getAltura(55).metros], peso: [getPeso(55).libras, getPeso(55).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '057',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '056',
		dexKanto: '056',
		dexJohtoGSC: '134',
		dexJohtoHGSS: '136',
	},
	idiomas: {frances: namesFR[55],aleman: namesDE[55],japones: [namesJP[55][1], namesJP[55][0]],coreano: [namesKO[55][1], namesKO[55][0]]}
},
{
	id: '057',
	nombre: names[56], tipo: ['fight'], clasificacion: 'Pokémon Mono Cerdo',
	altura: [getAltura(56).pies, getAltura(56).metros], peso: [getPeso(56).libras, getPeso(56).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '056',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '057',
		dexKanto: '057',
		dexJohtoGSC: '135',
		dexJohtoHGSS: '137',
	},
	idiomas: {frances: namesFR[56],aleman: namesDE[56],japones: [namesJP[56][1], namesJP[56][0]],coreano: [namesKO[56][1], namesKO[56][0]]}
},
{
	id: '058',
	nombre: names[57], tipo: ['fire'], clasificacion: 'Pokémon Perrito',
	altura: [getAltura(57).pies, getAltura(57).metros], peso: [getPeso(57).libras, getPeso(57).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '059',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '058',
		dexKanto: '058',
		dexJohtoGSC: '127',
		dexJohtoHGSS: '129',
		dexUnovaB2W2: '051',
	},
	idiomas: {frances: namesFR[57],aleman: namesDE[57],japones: [namesJP[57][1], namesJP[57][0]],coreano: [namesKO[57][1], namesKO[57][0]]}
},
{
	id: '059',
	nombre: names[58], tipo: ['fire'], clasificacion: 'Pokémon Legendario',
	altura: [getAltura(58).pies, getAltura(58).metros], peso: [getPeso(58).libras, getPeso(58).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '058',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '059',
		dexKanto: '059',
		dexJohtoGSC: '128',
		dexJohtoHGSS: '130',
		dexUnovaB2W2: '052',
	},
	idiomas: {frances: namesFR[58],aleman: namesDE[58],japones: [namesJP[58][1], namesJP[58][0]],coreano: [namesKO[58][1], namesKO[58][0]]}
},
{
	id: '060',
	nombre: names[59], tipo: ['water'], clasificacion: 'Pokémon Renacuajo',
	altura: [getAltura(59).pies, getAltura(59).metros], peso: [getPeso(59).libras, getPeso(59).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '061',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '062',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		evolucion: {
			numeroEspecie: '061',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '186',
				metodo: "Intercambio con objeto Roca del Rey",
				condicion: ['trade'],
				objeto: getEvolveItem('roca del rey'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '060',
		dexKanto: '060',
		dexJohtoGSC: '072',
		dexJohtoHGSS: '072',
		dexKalosMontana: '033',
	},
	idiomas: {frances: namesFR[59],aleman: namesDE[59],japones: [namesJP[59][1], namesJP[59][0]],coreano: [namesKO[59][1], namesKO[59][0]]}
},
{
	id: '061',
	nombre: names[60], tipo: ['water'], clasificacion: 'Pokémon Renacuajo',
	altura: [getAltura(60).pies, getAltura(60).metros], peso: [getPeso(60).libras, getPeso(60).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '061',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '062',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	{
		preevolucion: {
			numeroEspecie: '060',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '186',
			metodo: "Intercambio con objeto Roca del Rey",
			condicion: ['trade'],
			objeto: getEvolveItem('roca del rey'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '061',
		dexKanto: '061',
		dexJohtoGSC: '073',
		dexJohtoHGSS: '073',
		dexKalosMontana: '034',
	},
	idiomas: {frances: namesFR[60],aleman: namesDE[60],japones: [namesJP[60][1], namesJP[60][0]],coreano: [namesKO[60][1], namesKO[60][0]]}
},
{
	id: '062',
	nombre: names[61], tipo: ['water', 'fight'], clasificacion: 'Pokémon Renacuajo',
	altura: [getAltura(61).pies, getAltura(61).metros], peso: [getPeso(61).libras, getPeso(61).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '061',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
			preevolucion: {
				numeroEspecie: '060',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '061',
			otraEvolucion: {
				numeroEspecie: '186',
				metodo: "Intercambio con objeto Roca del Rey",
				condicion: ['trade'],
				objeto: getEvolveItem('roca del rey'),
			},
			preevolucion: {
				numeroEspecie: '060',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '062',
		dexKanto: '062',
		dexJohtoGSC: '074',
		dexJohtoHGSS: '074',
		dexKalosMontana: '035',
	},
	idiomas: {frances: namesFR[61],aleman: namesDE[61],japones: [namesJP[61][1], namesJP[61][0]],coreano: [namesKO[61][1], namesKO[61][0]]}
},
{
	id: '063',
	nombre: names[62], tipo: ['psychic'], clasificacion: 'Pokémon Psi',
	altura: [getAltura(62).pies, getAltura(62).metros], peso: [getPeso(62).libras, getPeso(62).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '064',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '065',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '063',
		dexKanto: '063',
		dexJohtoGSC: '089',
		dexJohtoHGSS: '089',
		dexHoennRSE: '039',
		dexSinnohDPPt: '020',
		dexKalosCentral: '102',
	},
	idiomas: {frances: namesFR[62],aleman: namesDE[62],japones: [namesJP[62][1], namesJP[62][0]],coreano: [namesKO[62][1], namesKO[62][0]]}
},
{
	id: '064',
	nombre: names[63], tipo: ['psychic'], clasificacion: 'Pokémon Psi',
	altura: [getAltura(63).pies, getAltura(63).metros], peso: [getPeso(63).libras, getPeso(63).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '063',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '065',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 100,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '064',
		dexKanto: '064',
		dexJohtoGSC: '090',
		dexJohtoHGSS: '090',
		dexHoennRSE: '040',
		dexSinnohDPPt: '021',
		dexKalosCentral: '103',
	},
	idiomas: {frances: namesFR[63],aleman: namesDE[63],japones: [namesJP[63][1], namesJP[63][0]],coreano: [namesKO[63][1], namesKO[63][0]]}
},
{
	id: '065',
	nombre: names[64], tipo: ['psychic'], clasificacion: 'Pokémon Psi',
	altura: [getAltura(64).pies, getAltura(64).metros], peso: [getPeso(64).libras, getPeso(64).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '064',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '063',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	megaEvolucion: ['065'],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '065',
		dexKanto: '065',
		dexJohtoGSC: '091',
		dexJohtoHGSS: '091',
		dexHoennRSE: '041',
		dexSinnohDPPt: '022',
		dexKalosCentral: '104',
	},
	idiomas: {frances: namesFR[64],aleman: namesDE[64],japones: [namesJP[64][1], namesJP[64][0]],coreano: [namesKO[64][1], namesKO[64][0]]}
},
{
	id: '066',
	nombre: names[65], tipo: ['fight'], clasificacion: 'Pokémon Superpoder',
	altura: [getAltura(65).pies, getAltura(65).metros], peso: [getPeso(65).libras, getPeso(65).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '067',
			metodo: "Subiendo desde nivel 28",
			evolucion: {
				numeroEspecie: '068',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '066',
		dexKanto: '066',
		dexJohtoGSC: '140',
		dexJohtoHGSS: '142',
		dexHoennRSE: '073',
		dexSinnohDPPt: '040',
		dexKalosCosta: '057',
	},
	idiomas: {frances: namesFR[65],aleman: namesDE[65],japones: [namesJP[65][1], namesJP[65][0]],coreano: [namesKO[65][1], namesKO[65][0]]}
},
{
	id: '067',
	nombre: names[66], tipo: ['fight'], clasificacion: 'Pokémon Superpoder',
	altura: [getAltura(66).pies, getAltura(66).metros], peso: [getPeso(66).libras, getPeso(66).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '066',
			metodo: "Subiendo desde nivel 28",
		},
		evolucion: {
			numeroEspecie: '068',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '067',
		dexKanto: '067',
		dexJohtoGSC: '141',
		dexJohtoHGSS: '143',
		dexHoennRSE: '074',
		dexSinnohDPPt: '041',
		dexKalosCosta: '058',
	},
	idiomas: {frances: namesFR[66],aleman: namesDE[66],japones: [namesJP[66][1], namesJP[66][0]],coreano: [namesKO[66][1], namesKO[66][0]]}
},
{
	id: '068',
	nombre: names[67], tipo: ['fight'], clasificacion: 'Pokémon Superpoder',
	altura: [getAltura(67).pies, getAltura(67).metros], peso: [getPeso(67).libras, getPeso(67).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '067',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '066',
				metodo: "Subiendo desde nivel 28",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '068',
		dexKanto: '068',
		dexJohtoGSC: '142',
		dexJohtoHGSS: '144',
		dexHoennRSE: '075',
		dexSinnohDPPt: '042',
		dexKalosCosta: '059',
	},
	idiomas: {frances: namesFR[67],aleman: namesDE[67],japones: [namesJP[67][1], namesJP[67][0]],coreano: [namesKO[67][1], namesKO[67][0]]}
},
{
	id: '069',
	nombre: names[68], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Flor',
	altura: [getAltura(68).pies, getAltura(68).metros], peso: [getPeso(68).libras, getPeso(68).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '070',
			metodo: "Subiendo desde nivel 21",
			evolucion: {
				numeroEspecie: '071',
				metodo: "Aplicando Piedra Hoja",
				objeto: getEvolveItem('piedra hoja'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '069',
		dexKanto: '069',
		dexJohtoGSC: '064',
		dexJohtoHGSS: '064',
		dexKalosMontana: '026',
	},
	idiomas: {frances: namesFR[68],aleman: namesDE[68],japones: [namesJP[68][1], namesJP[68][0]],coreano: [namesKO[68][1], namesKO[68][0]]}
},
{
	id: '070',
	nombre: names[69], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Matamoscas',
	altura: [getAltura(69).pies, getAltura(69).metros], peso: [getPeso(69).libras, getPeso(69).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '069',
			metodo: "Subiendo desde nivel 21",
		},
		evolucion: {
			numeroEspecie: '071',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '070',
		dexKanto: '070',
		dexJohtoGSC: '065',
		dexJohtoHGSS: '065',
		dexKalosMontana: '027',
	},
	idiomas: {frances: namesFR[69],aleman: namesDE[69],japones: [namesJP[69][1], namesJP[69][0]],coreano: [namesKO[69][1], namesKO[69][0]]}
},
{
	id: '071',
	nombre: names[70], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Matamoscas',
	altura: [getAltura(70).pies, getAltura(70).metros], peso: [getPeso(70).libras, getPeso(70).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '070',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
			preevolucion: {
				numeroEspecie: '069',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '071',
		dexKanto: '071',
		dexJohtoGSC: '066',
		dexJohtoHGSS: '066',
		dexKalosMontana: '028',
	},
	idiomas: {frances: namesFR[70],aleman: namesDE[70],japones: [namesJP[70][1], namesJP[70][0]],coreano: [namesKO[70][1], namesKO[70][0]]}
},
{
	id: '072',
	nombre: names[71], tipo: ['water', 'poison'], clasificacion: 'Pokémon Medusa',
	altura: [getAltura(71).pies, getAltura(71).metros], peso: [getPeso(71).libras, getPeso(71).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		{habilidadNombre: habNombre('liquid ooze'),habilidadDescripcion: habDescripcion('liquid ooze')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '073',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '072',
		dexKanto: '072',
		dexJohtoGSC: '162',
		dexJohtoHGSS: '164',
		dexHoennRSE: '066',
		dexSinnohDPPt: '136',
		dexKalosCosta: '025',
	},
	idiomas: {frances: namesFR[71],aleman: namesDE[71],japones: [namesJP[71][1], namesJP[71][0]],coreano: [namesKO[71][1], namesKO[71][0]]}
},
{
	id: '073',
	nombre: names[72], tipo: ['water', 'poison'], clasificacion: 'Pokémon Medusa',
	altura: [getAltura(72).pies, getAltura(72).metros], peso: [getPeso(72).libras, getPeso(72).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		{habilidadNombre: habNombre('liquid ooze'),habilidadDescripcion: habDescripcion('liquid ooze')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '072',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '073',
		dexKanto: '073',
		dexJohtoGSC: '163',
		dexJohtoHGSS: '165',
		dexHoennRSE: '067',
		dexSinnohDPPt: '137',
		dexKalosCosta: '026',
	},
	idiomas: {frances: namesFR[72],aleman: namesDE[72],japones: [namesJP[72][1], namesJP[72][0]],coreano: [namesKO[72][1], namesKO[72][0]]}
},
{
	id: '074',
	nombre: names[73], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Roca',
	altura: [getAltura(73).pies, getAltura(73).metros], peso: [getPeso(73).libras, getPeso(73).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '075',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '076',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '074',
		dexKanto: '074',
		dexJohtoGSC: '034',
		dexJohtoHGSS: '034',
		dexHoennRSE: '057',
		dexSinnohDPPt: '031',
		dexKalosMontana: '009',
	},
	idiomas: {frances: namesFR[73],aleman: namesDE[73],japones: [namesJP[73][1], namesJP[73][0]],coreano: [namesKO[73][1], namesKO[73][0]]}
},
{
	id: '075',
	nombre: names[74], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Roca',
	altura: [getAltura(74).pies, getAltura(74).metros], peso: [getPeso(74).libras, getPeso(74).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '074',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '076',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '075',
		dexKanto: '075',
		dexJohtoGSC: '035',
		dexJohtoHGSS: '035',
		dexHoennRSE: '058',
		dexSinnohDPPt: '032',
		dexKalosMontana: '010',
	},
	idiomas: {frances: namesFR[74],aleman: namesDE[74],japones: [namesJP[74][1], namesJP[74][0]],coreano: [namesKO[74][1], namesKO[74][0]]}
},
{
	id: '076',
	nombre: names[75], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Megatón',
	altura: [getAltura(75).pies, getAltura(75).metros], peso: [getPeso(75).libras, getPeso(75).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '075',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '074',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '076',
		dexKanto: '076',
		dexJohtoGSC: '036',
		dexJohtoHGSS: '036',
		dexHoennRSE: '059',
		dexSinnohDPPt: '033',
		dexKalosMontana: '011',
	},
	idiomas: {frances: namesFR[75],aleman: namesDE[75],japones: [namesJP[75][1], namesJP[75][0]],coreano: [namesKO[75][1], namesKO[75][0]]}
},
{
	id: '077',
	nombre: names[76], tipo: ['fire'], clasificacion: 'Pokémon Caballo Fuego',
	altura: [getAltura(76).pies, getAltura(76).metros], peso: [getPeso(76).libras, getPeso(76).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '078',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '077',
		dexKanto: '077',
		dexJohtoGSC: '201',
		dexJohtoHGSS: '206',
		dexSinnohDPPt: '090',
	},
	idiomas: {frances: namesFR[76],aleman: namesDE[76],japones: [namesJP[76][1], namesJP[76][0]],coreano: [namesKO[76][1], namesKO[76][0]]}
},
{
	id: '078',
	nombre: names[77], tipo: ['fire'], clasificacion: 'Pokémon Caballo Fuego',
	altura: [getAltura(77).pies, getAltura(77).metros], peso: [getPeso(77).libras, getPeso(77).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '077',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '078',
		dexKanto: '078',
		dexJohtoGSC: '202',
		dexJohtoHGSS: '207',
		dexSinnohDPPt: '091',
	},
	idiomas: {frances: namesFR[77],aleman: namesDE[77],japones: [namesJP[77][1], namesJP[77][0]],coreano: [namesKO[77][1], namesKO[77][0]]}
},
{
	id: '079',
	nombre: names[78], tipo: ['water', 'psychic'], clasificacion: 'Pokémon Atontado',
	altura: [getAltura(78).pies, getAltura(78).metros], peso: [getPeso(78).libras, getPeso(78).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '080',
			metodo: "Subiendo desde nivel 37",
		},
	},
	{
		evolucion: {
			numeroEspecie: '199',
			metodo: "Intercambio con objeto Roca del Rey",
			condicion: ['trade'],
			objeto: getEvolveItem('roca del rey'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '079',
		dexKanto: '079',
		dexJohtoGSC: '080',
		dexJohtoHGSS: '080',
		dexKalosCosta: '133',
	},
	idiomas: {frances: namesFR[78],aleman: namesDE[78],japones: [namesJP[78][1], namesJP[78][0]],coreano: [namesKO[78][1], namesKO[78][0]]}
},
{
	id: '080',
	nombre: names[79], tipo: ['water', 'psychic'], clasificacion: 'Pokémon Ermitaño',
	altura: [getAltura(79).pies, getAltura(79).metros], peso: [getPeso(79).libras, getPeso(79).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '079',
			metodo: "Subiendo desde nivel 37",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '079',
			otraEvolucion: {
				numeroEspecie: '199',
				metodo: "Intercambio con objeto Roca del Rey",
				condicion: ['trade'],
				objeto: getEvolveItem('roca del rey'),
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '080',
		dexKanto: '080',
		dexJohtoGSC: '081',
		dexJohtoHGSS: '081',
		dexKalosCosta: '134',
	},
	idiomas: {frances: namesFR[79],aleman: namesDE[79],japones: [namesJP[79][1], namesJP[79][0]],coreano: [namesKO[79][1], namesKO[79][0]]}
},
{
	id: '081',
	nombre: names[80], tipo: ['electric', 'steel'], clasificacion: 'Pokémon Imán',
	altura: [getAltura(80).pies, getAltura(80).metros], peso: [getPeso(80).libras, getPeso(80).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('magnet pull'),habilidadDescripcion: habDescripcion('magnet pull')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '082',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '462',
				metodo: "Subiendo de nivel en Monte Corona (D/P/Pt), Cueva Electroroca (B/W/B2/W2), Ruta 13 (X/Y) o Malvalanova (OR/AS)",
				condicion: ['location'],
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '081',
		dexKanto: '081',
		dexJohtoGSC: '118',
		dexJohtoHGSS: '119',
		dexHoennRSE: '082',
		dexSinnohPt: '178',
		dexUnovaB2W2: '048',
		dexKalosMontana: '069',
	},
	idiomas: {frances: namesFR[80],aleman: namesDE[80],japones: [namesJP[80][1], namesJP[80][0]],coreano: [namesKO[80][1], namesKO[80][0]]}
},
{
	id: '082',
	nombre: names[81], tipo: ['electric', 'steel'], clasificacion: 'Pokémon Imán',
	altura: [getAltura(81).pies, getAltura(81).metros], peso: [getPeso(81).libras, getPeso(81).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('magnet pull'),habilidadDescripcion: habDescripcion('magnet pull')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '081',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '462',
			metodo: "Subiendo de nivel en Monte Corona (D/P/Pt), Cueva Electroroca (B/W/B2/W2), Ruta 13 (X/Y) o Malvalanova (OR/AS)",
			condicion: ['location'],
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '082',
		dexKanto: '082',
		dexJohtoGSC: '119',
		dexJohtoHGSS: '120',
		dexHoennRSE: '083',
		dexSinnohPt: '179',
		dexUnovaB2W2: '049',
		dexKalosMontana: '070',
	},
	idiomas: {frances: namesFR[81],aleman: namesDE[81],japones: [namesJP[81][1], namesJP[81][0]],coreano: [namesKO[81][1], namesKO[81][0]]}
},
{
	id: '083',
	nombre: names[82], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Pato Salvaje',
	altura: [getAltura(82).pies, getAltura(82).metros], peso: [getPeso(82).libras, getPeso(82).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '083',
		dexKanto: '083',
		dexJohtoGSC: '158',
		dexJohtoHGSS: '160',
		dexKalosCentral: '061',
	},
	idiomas: {frances: namesFR[82],aleman: namesDE[82],japones: [namesJP[82][1], namesJP[82][0]],coreano: [namesKO[82][1], namesKO[82][0]]}
},
{
	id: '084',
	nombre: names[83], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Ave Gemela',
	altura: [getAltura(83).pies, getAltura(83).metros], peso: [getPeso(83).libras, getPeso(83).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '085',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '084',
		dexKanto: '084',
		dexJohtoGSC: '199',
		dexJohtoHGSS: '204',
		dexHoennRSE: '092',
		dexKalosCentral: '094',
	},
	idiomas: {frances: namesFR[83],aleman: namesDE[83],japones: [namesJP[83][1], namesJP[83][0]],coreano: [namesKO[83][1], namesKO[83][0]]}
},
{
	id: '085',
	nombre: names[84], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Ave Triple',
	altura: [getAltura(84).pies, getAltura(84).metros], peso: [getPeso(84).libras, getPeso(84).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '084',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '085',
		dexKanto: '085',
		dexJohtoGSC: '200',
		dexJohtoHGSS: '205',
		dexHoennRSE: '093',
		dexKalosCentral: '095',
	},
	idiomas: {frances: namesFR[84],aleman: namesDE[84],japones: [namesJP[84][1], namesJP[84][0]],coreano: [namesKO[84][1], namesKO[84][0]]}
},
{
	id: '086',
	nombre: names[85], tipo: ['water'], clasificacion: 'Pokémon León Marino',
	altura: [getAltura(85).pies, getAltura(85).metros], peso: [getPeso(85).libras, getPeso(85).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '087',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '086',
		dexKanto: '086',
		dexJohtoGSC: '176',
		dexJohtoHGSS: '178',
		dexUnovaB2W2: '265',
	},
	idiomas: {frances: namesFR[85],aleman: namesDE[85],japones: [namesJP[85][1], namesJP[85][0]],coreano: [namesKO[85][1], namesKO[85][0]]}
},
{
	id: '087',
	nombre: names[86], tipo: ['water', 'ice'], clasificacion: 'Pokémon León Marino',
	altura: [getAltura(86).pies, getAltura(86).metros], peso: [getPeso(86).libras, getPeso(86).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '086',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '087',
		dexKanto: '087',
		dexJohtoGSC: '177',
		dexJohtoHGSS: '179',
		dexUnovaB2W2: '266',
	},
	idiomas: {frances: namesFR[86],aleman: namesDE[86],japones: [namesJP[86][1], namesJP[86][0]],coreano: [namesKO[86][1], namesKO[86][0]]}
},
{
	id: '088',
	nombre: names[87], tipo: ['poison'], clasificacion: 'Pokémon Lodo',
	altura: [getAltura(87).pies, getAltura(87).metros], peso: [getPeso(87).libras, getPeso(87).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '089',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '088',
		dexKanto: '088',
		dexJohtoGSC: '116',
		dexJohtoHGSS: '117',
		dexHoennRSE: '106',
		dexUnovaB2W2: '064',
	},
	idiomas: {frances: namesFR[87],aleman: namesDE[87],japones: [namesJP[87][1], namesJP[87][0]],coreano: [namesKO[87][1], namesKO[87][0]]}
},
{
	id: '089',
	nombre: names[88], tipo: ['poison'], clasificacion: 'Pokémon Lodo',
	altura: [getAltura(88).pies, getAltura(88).metros], peso: [getPeso(88).libras, getPeso(88).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '088',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 1,
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '089',
		dexKanto: '089',
		dexJohtoGSC: '117',
		dexJohtoHGSS: '118',
		dexHoennRSE: '107',
		dexUnovaB2W2: '065',
	},
	idiomas: {frances: namesFR[88],aleman: namesDE[88],japones: [namesJP[88][1], namesJP[88][0]],coreano: [namesKO[88][1], namesKO[88][0]]}
},
{
	id: '090',
	nombre: names[89], tipo: ['water'], clasificacion: 'Pokémon Bivalvo',
	altura: [getAltura(89).pies, getAltura(89).metros], peso: [getPeso(89).libras, getPeso(89).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '091',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '090',
		dexKanto: '090',
		dexJohtoGSC: '169',
		dexJohtoHGSS: '171',
		dexKalosCosta: '036',
	},
	idiomas: {frances: namesFR[89],aleman: namesDE[89],japones: [namesJP[89][1], namesJP[89][0]],coreano: [namesKO[89][1], namesKO[89][0]]}
},
{
	id: '091',
	nombre: names[90], tipo: ['water', 'ice'], clasificacion: 'Pokémon Bivalvo',
	altura: [getAltura(90).pies, getAltura(90).metros], peso: [getPeso(90).libras, getPeso(90).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '090',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '091',
		dexKanto: '091',
		dexJohtoGSC: '170',
		dexJohtoHGSS: '172',
		dexKalosCosta: '037',
	},
	idiomas: {frances: namesFR[90],aleman: namesDE[90],japones: [namesJP[90][1], namesJP[90][0]],coreano: [namesKO[90][1], namesKO[90][0]]}
},
{
	id: '092',
	nombre: names[91], tipo: ['ghost', 'poison'], clasificacion: 'Pokémon Gas',
	altura: [getAltura(91).pies, getAltura(91).metros], peso: [getPeso(91).libras, getPeso(91).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '093',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '094',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '092',
		dexKanto: '092',
		dexJohtoGSC: '058',
		dexJohtoHGSS: '058',
		dexSinnohDPPt: '069',
		dexKalosMontana: '030',
	},
	idiomas: {frances: namesFR[91],aleman: namesDE[91],japones: [namesJP[91][1], namesJP[91][0]],coreano: [namesKO[91][1], namesKO[91][0]]}
},
{
	id: '093',
	nombre: names[92], tipo: ['ghost', 'poison'], clasificacion: 'Pokémon Gas',
	altura: [getAltura(92).pies, getAltura(92).metros], peso: [getPeso(92).libras, getPeso(92).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '092',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '094',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '093',
		dexKanto: '093',
		dexJohtoGSC: '059',
		dexJohtoHGSS: '059',
		dexSinnohDPPt: '070',
		dexKalosMontana: '031',
	},
	idiomas: {frances: namesFR[92],aleman: namesDE[92],japones: [namesJP[92][1], namesJP[92][0]],coreano: [namesKO[92][1], namesKO[92][0]]}
},
{
	id: '094',
	nombre: names[93], tipo: ['ghost', 'poison'], clasificacion: 'Pokémon Sombra',
	altura: [getAltura(93).pies, getAltura(93).metros], peso: [getPeso(93).libras, getPeso(93).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '093',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '092',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	megaEvolucion: ['094'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '094',
		dexKanto: '094',
		dexJohtoGSC: '060',
		dexJohtoHGSS: '060',
		dexSinnohDPPt: '071',
		dexKalosMontana: '032',
	},
	idiomas: {frances: namesFR[93],aleman: namesDE[93],japones: [namesJP[93][1], namesJP[93][0]],coreano: [namesKO[93][1], namesKO[93][0]]}
},
{
	id: '095',
	nombre: names[94], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Serpiente Roca',
	altura: [getAltura(94).pies, getAltura(94).metros], peso: [getPeso(94).libras, getPeso(94).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '208',
			metodo: "Intercambio con objeto Revestimiento Metálico",
			condicion: ['trade'],
			objeto: getEvolveItem('metal coat'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '095',
		dexKanto: '095',
		dexJohtoGSC: '062',
		dexJohtoHGSS: '062',
		dexSinnohDPPt: '034',
		dexUnovaB2W2: '071',
		dexKalosCosta: '053',
	},
	idiomas: {frances: namesFR[94],aleman: namesDE[94],japones: [namesJP[94][1], namesJP[94][0]],coreano: [namesKO[94][1], namesKO[94][0]]}
},
{
	id: '096',
	nombre: names[95], tipo: ['psychic'], clasificacion: 'Pokémon Hipnosis',
	altura: [getAltura(95).pies, getAltura(95).metros], peso: [getPeso(95).libras, getPeso(95).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '097',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '096',
		dexKanto: '096',
		dexJohtoGSC: '087',
		dexJohtoHGSS: '087',
	},
	idiomas: {frances: namesFR[95],aleman: namesDE[95],japones: [namesJP[95][1], namesJP[95][0]],coreano: [namesKO[95][1], namesKO[95][0]]}
},
{
	id: '097',
	nombre: names[96], tipo: ['psychic'], clasificacion: 'Pokémon Hipnosis',
	altura: [getAltura(96).pies, getAltura(96).metros], peso: [getPeso(96).libras, getPeso(96).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '096',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '097',
		dexKanto: '097',
		dexJohtoGSC: '088',
		dexJohtoHGSS: '088',
	},
	idiomas: {frances: namesFR[96],aleman: namesDE[96],japones: [namesJP[96][1], namesJP[96][0]],coreano: [namesKO[96][1], namesKO[96][0]]}
},
{
	id: '098',
	nombre: names[97], tipo: ['water'], clasificacion: 'Pokémon Cangrejo',
	altura: [getAltura(97).pies, getAltura(97).metros], peso: [getPeso(97).libras, getPeso(97).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '099',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '098',
		dexKanto: '098',
		dexJohtoGSC: '164',
		dexJohtoHGSS: '166',
	},
	idiomas: {frances: namesFR[97],aleman: namesDE[97],japones: [namesJP[97][1], namesJP[97][0]],coreano: [namesKO[97][1], namesKO[97][0]]}
},
{
	id: '099',
	nombre: names[98], tipo: ['water'], clasificacion: 'Pokémon Tenaza',
	altura: [getAltura(98).pies, getAltura(98).metros], peso: [getPeso(98).libras, getPeso(98).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '098',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '099',
		dexKanto: '099',
		dexJohtoGSC: '165',
		dexJohtoHGSS: '167',
	},
	idiomas: {frances: namesFR[98],aleman: namesDE[98],japones: [namesJP[98][1], namesJP[98][0]],coreano: [namesKO[98][1], namesKO[98][0]]}
},
{
	id: '100',
	nombre: names[99], tipo: ['electric'], clasificacion: 'Pokémon Bola',
	altura: [getAltura(99).pies, getAltura(99).metros], peso: [getPeso(99).libras, getPeso(99).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '101',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '100',
		dexKanto: '100',
		dexJohtoGSC: '120',
		dexJohtoHGSS: '121',
		dexHoennRSE: '084',
		dexKalosMontana: '072',
	},
	idiomas: {frances: namesFR[99],aleman: namesDE[99],japones: [namesJP[99][1], namesJP[99][0]],coreano: [namesKO[99][1], namesKO[99][0]]}
},
{
	id: '101',
	nombre: names[100], tipo: ['electric'], clasificacion: 'Pokémon Bola',
	altura: [getAltura(100).pies, getAltura(100).metros], peso: [getPeso(100).libras, getPeso(100).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '100',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '101',
		dexKanto: '101',
		dexJohtoGSC: '121',
		dexJohtoHGSS: '122',
		dexHoennRSE: '085',
		dexKalosMontana: '073',
	},
	idiomas: {frances: namesFR[100],aleman: namesDE[100],japones: [namesJP[100][1], namesJP[100][0]],coreano: [namesKO[100][1], namesKO[100][0]]}
},
{
	id: '102',
	nombre: names[101], tipo: ['grass', 'psychic'], clasificacion: 'Pokémon Huevo',
	altura: [getAltura(101).pies, getAltura(101).metros], peso: [getPeso(101).libras, getPeso(101).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cosecha'),habilidadDescripcion: habDescripcion('cosecha')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '103',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '102',
		dexKanto: '102',
		dexJohtoGSC: '104',
		dexJohtoHGSS: '105',
		dexKalosCosta: '136',
	},
	idiomas: {frances: namesFR[101],aleman: namesDE[101],japones: [namesJP[101][1], namesJP[101][0]],coreano: [namesKO[101][1], namesKO[101][0]]}
},
{
	id: '103',
	nombre: names[102], tipo: ['grass', 'psychic'], clasificacion: 'Pokémon Coco',
	altura: [getAltura(102).pies, getAltura(102).metros], peso: [getPeso(102).libras, getPeso(102).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cosecha'),habilidadDescripcion: habDescripcion('cosecha')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '102',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '103',
		dexKanto: '103',
		dexJohtoGSC: '105',
		dexJohtoHGSS: '106',
		dexKalosCosta: '137',
	},
	idiomas: {frances: namesFR[102],aleman: namesDE[102],japones: [namesJP[102][1], namesJP[102][0]],coreano: [namesKO[102][1], namesKO[102][0]]}
},
{
	id: '104',
	nombre: names[103], tipo: ['ground'], clasificacion: 'Pokémon Solitario',
	altura: [getAltura(103).pies, getAltura(103).metros], peso: [getPeso(103).libras, getPeso(103).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '105',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '104',
		dexKanto: '104',
		dexJohtoGSC: '203',
		dexJohtoHGSS: '208',
		dexKalosCosta: '060',
	},
	idiomas: {frances: namesFR[103],aleman: namesDE[103],japones: [namesJP[103][1], namesJP[103][0]],coreano: [namesKO[103][1], namesKO[103][0]]}
},
{
	id: '105',
	nombre: names[104], tipo: ['ground'], clasificacion: 'Pokémon Apilahueso',
	altura: [getAltura(104).pies, getAltura(104).metros], peso: [getPeso(104).libras, getPeso(104).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '104',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '105',
		dexKanto: '105',
		dexJohtoGSC: '204',
		dexJohtoHGSS: '209',
		dexKalosCosta: '061',
	},
	idiomas: {frances: namesFR[104],aleman: namesDE[104],japones: [namesJP[104][1], namesJP[104][0]],coreano: [namesKO[104][1], namesKO[104][0]]}
},
{
	id: '106',
	nombre: names[105], tipo: ['fight'], clasificacion: 'Pokémon Patada',
	altura: [getAltura(105).pies, getAltura(105).metros], peso: [getPeso(105).libras, getPeso(105).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '236',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es mayor que su Defensa",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '107',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es menor que su Defensa",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '237',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es igual que su Defensa",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '106',
		dexKanto: '106',
		dexJohtoGSC: '144',
		dexJohtoHGSS: '146',
	},
	idiomas: {frances: namesFR[105],aleman: namesDE[105],japones: [namesJP[105][1], namesJP[105][0]],coreano: [namesKO[105][1], namesKO[105][0]]}
},
{
	id: '107',
	nombre: names[106], tipo: ['fight'], clasificacion: 'Pokémon Puñetazo',
	altura: [getAltura(106).pies, getAltura(106).metros], peso: [getPeso(106).libras, getPeso(106).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '106',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es mayor que su Defensa",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es menor que su Defensa",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '237',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es igual que su Defensa",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '107',
		dexKanto: '107',
		dexJohtoGSC: '145',
		dexJohtoHGSS: '147',
	},
	idiomas: {frances: namesFR[106],aleman: namesDE[106],japones: [namesJP[106][1], namesJP[106][0]],coreano: [namesKO[106][1], namesKO[106][0]]}
},
{
	id: '108',
	nombre: names[107], tipo: ['normal'], clasificacion: 'Pokémon Lametazo',
	altura: [getAltura(107).pies, getAltura(107).metros], peso: [getPeso(107).libras, getPeso(107).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '463',
			metodo: "Subiendo de nivel con movimiento Desenrrollar",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '108',
		dexKanto: '108',
		dexJohtoGSC: '178',
		dexJohtoHGSS: '180',
		dexSinnohPt: '161',
		dexUnovaB2W2: '284',
		dexKalosMontana: '134',
	},
	idiomas: {frances: namesFR[107],aleman: namesDE[107],japones: [namesJP[107][1], namesJP[107][0]],coreano: [namesKO[107][1], namesKO[107][0]]}
},
{
	id: '109',
	nombre: names[108], tipo: ['poison'], clasificacion: 'Pokémon Gas Veneno',
	altura: [getAltura(108).pies, getAltura(108).metros], peso: [getPeso(108).libras, getPeso(108).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '110',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '109',
		dexKanto: '109',
		dexJohtoGSC: '114',
		dexJohtoHGSS: '115',
		dexHoennRSE: '108',
		dexUnovaB2W2: '046',
	},
	idiomas: {frances: namesFR[108],aleman: namesDE[108],japones: [namesJP[108][1], namesJP[108][0]],coreano: [namesKO[108][1], namesKO[108][0]]}
},
{
	id: '110',
	nombre: names[109], tipo: ['poison'], clasificacion: 'Pokémon Gas Veneno',
	altura: [getAltura(109).pies, getAltura(109).metros], peso: [getPeso(109).libras, getPeso(109).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '109',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '110',
		dexKanto: '110',
		dexJohtoGSC: '115',
		dexJohtoHGSS: '116',
		dexHoennRSE: '109',
		dexUnovaB2W2: '047',
	},
	idiomas: {frances: namesFR[109],aleman: namesDE[109],japones: [namesJP[109][1], namesJP[109][0]],coreano: [namesKO[109][1], namesKO[109][0]]}
},
{
	id: '111',
	nombre: names[110], tipo: ['ground', 'rock'], clasificacion: 'Pokémon Clavos',
	altura: [getAltura(110).pies, getAltura(110).metros], peso: [getPeso(110).libras, getPeso(110).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '112',
			metodo: "Subiendo desde nivel 42",
			evolucion: {
				numeroEspecie: '464',
				metodo: "Intercambio con objeto Protector",
				condicion: ['trade'],
				objeto: getEvolveItem('protector'),
			},
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '111',
		dexKanto: '111',
		dexJohtoGSC: '206',
		dexJohtoHGSS: '211',
		dexHoennRSE: '169',
		dexSinnohPt: '186',
		dexKalosCosta: '050',
	},
	idiomas: {frances: namesFR[110],aleman: namesDE[110],japones: [namesJP[110][1], namesJP[110][0]],coreano: [namesKO[110][1], namesKO[110][0]]}
},
{
	id: '112',
	nombre: names[111], tipo: ['ground', 'rock'], clasificacion: 'Pokémon Taladro',
	altura: [getAltura(111).pies, getAltura(111).metros], peso: [getPeso(111).libras, getPeso(111).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '111',
			metodo: "Subiendo desde nivel 42",
		},
		evolucion: {
			numeroEspecie: '464',
			metodo: "Intercambio con objeto Protector",
			condicion: ['trade'],
			objeto: getEvolveItem('protector'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '112',
		dexKanto: '112',
		dexJohtoGSC: '207',
		dexJohtoHGSS: '212',
		dexHoennRSE: '170',
		dexSinnohPt: '187',
		dexKalosCosta: '051',
	},
	idiomas: {frances: namesFR[111],aleman: namesDE[111],japones: [namesJP[111][1], namesJP[111][0]],coreano: [namesKO[111][1], namesKO[111][0]]}
},
{
	id: '113',
	nombre: names[112], tipo: ['normal'], clasificacion: 'Pokémon Huevo',
	altura: [getAltura(112).pies, getAltura(112).metros], peso: [getPeso(112).libras, getPeso(112).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '440',
			metodo: "Subiendo de nivel con objeto Piedra Oval",
			objeto: getEvolveItem('oval stone'),
		},
		evolucion: {
			numeroEspecie: '242',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 41, grupo: ['Hada'], amistad: 140,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '113',
		dexKanto: '113',
		dexJohtoGSC: '217',
		dexJohtoHGSS: '222',
		dexSinnohDPPt: '097',
	},
	idiomas: {frances: namesFR[112],aleman: namesDE[112],japones: [namesJP[112][1], namesJP[112][0]],coreano: [namesKO[112][1], namesKO[112][0]]}
},
{
	id: '114',
	nombre: names[113], tipo: ['grass'], clasificacion: 'Pokémon Enredadera',
	altura: [getAltura(113).pies, getAltura(113).metros], peso: [getPeso(113).libras, getPeso(113).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '465',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '114',
		dexKanto: '114',
		dexJohtoGSC: '179',
		dexJohtoHGSS: '182',
		dexSinnohPt: '181',
		dexUnovaB2W2: '217',
	},
	idiomas: {frances: namesFR[113],aleman: namesDE[113],japones: [namesJP[113][1], namesJP[113][0]],coreano: [namesKO[113][1], namesKO[113][0]]}
},
{
	id: '115',
	nombre: names[114], tipo: ['normal'], clasificacion: 'Pokémon Padres',
	altura: [getAltura(114).pies, getAltura(114).metros], peso: [getPeso(114).libras, getPeso(114).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	megaEvolucion: ['115'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '115',
		dexKanto: '115',
		dexJohtoGSC: '205',
		dexJohtoHGSS: '210',
		dexKalosCosta: '062',
	},
	idiomas: {frances: namesFR[114],aleman: namesDE[114],japones: [namesJP[114][1], namesJP[114][0]],coreano: [namesKO[114][1], namesKO[114][0]]}
},
{
	id: '116',
	nombre: names[115], tipo: ['water'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(115).pies, getAltura(115).metros], peso: [getPeso(115).libras, getPeso(115).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '117',
			metodo: "Subiendo desde nivel 32",
			evolucion: {
				numeroEspecie: '230',
				metodo: "Intercambio con objeto Escama Dragón",
				condicion: ['trade'],
				objeto: getEvolveItem('dragon scale'),
			},
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '116',
		dexKanto: '116',
		dexJohtoGSC: '186',
		dexJohtoHGSS: '190',
		dexHoennRSE: '184',
		dexKalosCosta: '039',
	},
	idiomas: {frances: namesFR[115],aleman: namesDE[115],japones: [namesJP[115][1], namesJP[115][0]],coreano: [namesKO[115][1], namesKO[115][0]]}
},
{
	id: '117',
	nombre: names[116], tipo: ['water'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(116).pies, getAltura(116).metros], peso: [getPeso(116).libras, getPeso(116).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '116',
			metodo: "Subiendo desde nivel 32",
		},
		evolucion: {
			numeroEspecie: '230',
			metodo: "Intercambio con objeto Escama Dragón",
			condicion: ['trade'],
			objeto: getEvolveItem('dragon scale'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '117',
		dexKanto: '117',
		dexJohtoGSC: '187',
		dexJohtoHGSS: '191',
		dexHoennRSE: '185',
		dexKalosCosta: '040',
	},
	idiomas: {frances: namesFR[116],aleman: namesDE[116],japones: [namesJP[116][1], namesJP[116][0]],coreano: [namesKO[116][1], namesKO[116][0]]}
},
{
	id: '118',
	nombre: names[117], tipo: ['water'], clasificacion: 'Pokémon Pez Color',
	altura: [getAltura(117).pies, getAltura(117).metros], peso: [getPeso(117).libras, getPeso(117).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '119',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '118',
		dexKanto: '118',
		dexJohtoGSC: '078',
		dexJohtoHGSS: '078',
		dexHoennRSE: '050',
		dexSinnohDPPt: '078',
		dexKalosCentral: '053',
	},
	idiomas: {frances: namesFR[117],aleman: namesDE[117],japones: [namesJP[117][1], namesJP[117][0]],coreano: [namesKO[117][1], namesKO[117][0]]}
},
{
	id: '119',
	nombre: names[118], tipo: ['water'], clasificacion: 'Pokémon Pez Color',
	altura: [getAltura(118).pies, getAltura(118).metros], peso: [getPeso(118).libras, getPeso(118).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '118',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '119',
		dexKanto: '119',
		dexJohtoGSC: '079',
		dexJohtoHGSS: '079',
		dexHoennRSE: '051',
		dexSinnohDPPt: '079',
		dexKalosCentral: '054',
	},
	idiomas: {frances: namesFR[118],aleman: namesDE[118],japones: [namesJP[118][1], namesJP[118][0]],coreano: [namesKO[118][1], namesKO[118][0]]}
},
{
	id: '120',
	nombre: names[119], tipo: ['water'], clasificacion: 'Pokémon Estrellada',
	altura: [getAltura(119).pies, getAltura(119).metros], peso: [getPeso(119).libras, getPeso(119).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '121',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	dexRegiones: {
		dexNacional: '120',
		dexKanto: '120',
		dexJohtoGSC: '167',
		dexJohtoHGSS: '169',
		dexHoennRSE: '143',
		dexUnovaB2W2: '238',
		dexKalosCosta: '034',
	},
	idiomas: {frances: namesFR[119],aleman: namesDE[119],japones: [namesJP[119][1], namesJP[119][0]],coreano: [namesKO[119][1], namesKO[119][0]]}
},
{
	id: '121',
	nombre: names[120], tipo: ['water', 'psychic'], clasificacion: 'Pokémon Misterioso',
	altura: [getAltura(120).pies, getAltura(120).metros], peso: [getPeso(120).libras, getPeso(120).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '120',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	dexRegiones: {
		dexNacional: '121',
		dexKanto: '121',
		dexJohtoGSC: '168',
		dexJohtoHGSS: '170',
		dexHoennRSE: '144',
		dexUnovaB2W2: '239',
		dexKalosCosta: '035',
	},
	idiomas: {frances: namesFR[120],aleman: namesDE[120],japones: [namesJP[120][1], namesJP[120][0]],coreano: [namesKO[120][1], namesKO[120][0]]}
},
{
	id: '122',
	nombre: names[121], tipo: ['psychic', 'fairy'], clasificacion: 'Pokémon Barrera',
	altura: [getAltura(121).pies, getAltura(121).metros], peso: [getPeso(121).libras, getPeso(121).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		{habilidadNombre: habNombre('filtro'),habilidadDescripcion: habDescripcion('filtro')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '439',
			metodo: "Subiendo de nivel con movimiento Mimético",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '122',
		dexKanto: '122',
		dexJohtoGSC: '156',
		dexJohtoHGSS: '158',
		dexSinnohDPPt: '095',
		dexKalosCosta: '114',
	},
	idiomas: {frances: namesFR[121],aleman: namesDE[121],japones: [namesJP[121][1], namesJP[121][0]],coreano: [namesKO[121][1], namesKO[121][0]]}
},
{
	id: '123',
	nombre: names[122], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Mantis',
	altura: [getAltura(122).pies, getAltura(122).metros], peso: [getPeso(122).libras, getPeso(122).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '212',
			metodo: "Intercambio con objeto Revestimiento Metálico",
			condicion: ['trade'],
			objeto: getEvolveItem('metal coat'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '123',
		dexKanto: '123',
		dexJohtoGSC: '110',
		dexJohtoHGSS: '111',
		dexSinnohPt: '195',
		dexKalosMontana: '136',
	},
	idiomas: {frances: namesFR[122],aleman: namesDE[122],japones: [namesJP[122][1], namesJP[122][0]],coreano: [namesKO[122][1], namesKO[122][0]]}
},
{
	id: '124',
	nombre: names[123], tipo: ['ice', 'psychic'], clasificacion: 'Pokémon Forma Humana',
	altura: [getAltura(123).pies, getAltura(123).metros], peso: [getPeso(123).libras, getPeso(123).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '238',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '124',
		dexKanto: '124',
		dexJohtoGSC: '153',
		dexJohtoHGSS: '155',
		dexKalosMontana: '084',
	},
	idiomas: {frances: namesFR[123],aleman: namesDE[123],japones: [namesJP[123][1], namesJP[123][0]],coreano: [namesKO[123][1], namesKO[123][0]]}
},
{
	id: '125',
	nombre: names[124], tipo: ['electric'], clasificacion: 'Pokémon Eléctrico',
	altura: [getAltura(124).pies, getAltura(124).metros], peso: [getPeso(124).libras, getPeso(124).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '239',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '466',
			metodo: "Intercambio con objeto Electrizador",
			condicion: ['trade'],
			objeto: getEvolveItem('electirizer'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '125',
		dexKanto: '125',
		dexJohtoGSC: '155',
		dexJohtoHGSS: '157',
		dexSinnohPt: '198',
		dexUnovaB2W2: '057',
	},
	idiomas: {frances: namesFR[124],aleman: namesDE[124],japones: [namesJP[124][1], namesJP[124][0]],coreano: [namesKO[124][1], namesKO[124][0]]}
},
{
	id: '126',
	nombre: names[125], tipo: ['fire'], clasificacion: 'Pokémon Escupfuego',
	altura: [getAltura(125).pies, getAltura(125).metros], peso: [getPeso(125).libras, getPeso(125).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '240',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '467',
			metodo: "Intercambio con objeto Magmatizador",
			condicion: ['trade'],
			objeto: getEvolveItem('magmarizer'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '126',
		dexKanto: '126',
		dexJohtoGSC: '151',
		dexJohtoHGSS: '153',
		dexSinnohPt: '201',
		dexUnovaB2W2: '054',
	},
	idiomas: {frances: namesFR[125],aleman: namesDE[125],japones: [namesJP[125][1], namesJP[125][0]],coreano: [namesKO[125][1], namesKO[125][0]]}
},
{
	id: '127',
	nombre: names[126], tipo: ['bug'], clasificacion: 'Pokémon Escarabajo',
	altura: [getAltura(126).pies, getAltura(126).metros], peso: [getPeso(126).libras, getPeso(126).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	megaEvolucion: ['127'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '127',
		dexKanto: '127',
		dexJohtoGSC: '112',
		dexJohtoHGSS: '113',
		dexHoennRSE: '167',
		dexUnovaB2W2: '146',
		dexKalosCosta: '130',
	},
	idiomas: {frances: namesFR[126],aleman: namesDE[126],japones: [namesJP[126][1], namesJP[126][0]],coreano: [namesKO[126][1], namesKO[126][0]]}
},
{
	id: '128',
	nombre: names[127], tipo: ['normal'], clasificacion: 'Pokémon Toro Bravo',
	altura: [getAltura(127).pies, getAltura(127).metros], peso: [getPeso(127).libras, getPeso(127).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '128',
		dexKanto: '128',
		dexJohtoGSC: '148',
		dexJohtoHGSS: '150',
		dexKalosCosta: '125',
	},
	idiomas: {frances: namesFR[127],aleman: namesDE[127],japones: [namesJP[127][1], namesJP[127][0]],coreano: [namesKO[127][1], namesKO[127][0]]}
},
{
	id: '129',
	nombre: names[128], tipo: ['water'], clasificacion: 'Pokémon Pez',
	altura: [getAltura(128).pies, getAltura(128).metros], peso: [getPeso(128).libras, getPeso(128).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '130',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 6, grupo: ['Dragón', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '129',
		dexKanto: '129',
		dexJohtoGSC: '076',
		dexJohtoHGSS: '076',
		dexHoennRSE: '052',
		dexSinnohDPPt: '023',
		dexKalosCentral: '049',
	},
	idiomas: {frances: namesFR[128],aleman: namesDE[128],japones: [namesJP[128][1], namesJP[128][0]],coreano: [namesKO[128][1], namesKO[128][0]]}
},
{
	id: '130',
	nombre: names[129], tipo: ['water', 'flying'], clasificacion: 'Pokémon Atrocidad',
	altura: [getAltura(129).pies, getAltura(129).metros], peso: [getPeso(129).libras, getPeso(129).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '129',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	megaEvolucion: ['130'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 6, grupo: ['Dragón', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '130',
		dexKanto: '130',
		dexJohtoGSC: '077',
		dexJohtoHGSS: '077',
		dexHoennRSE: '053',
		dexSinnohDPPt: '024',
		dexKalosCentral: '050',
	},
	idiomas: {frances: namesFR[129],aleman: namesDE[129],japones: [namesJP[129][1], namesJP[129][0]],coreano: [namesKO[129][1], namesKO[129][0]]}
},
{
	id: '131',
	nombre: names[130], tipo: ['water', 'ice'], clasificacion: 'Pokémon Transporte',
	altura: [getAltura(130).pies, getAltura(130).metros], peso: [getPeso(130).libras, getPeso(130).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 41, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '131',
		dexKanto: '131',
		dexJohtoGSC: '219',
		dexJohtoHGSS: '224',
		dexUnovaB2W2: '242',
		dexKalosCosta: '150',
	},
	idiomas: {frances: namesFR[130],aleman: namesDE[130],japones: [namesJP[130][1], namesJP[130][0]],coreano: [namesKO[130][1], namesKO[130][0]]}
},
{
	id: '132',
	nombre: names[131], tipo: ['normal'], clasificacion: 'Pokémon Transformación',
	altura: [getAltura(131).pies, getAltura(131).metros], peso: [getPeso(131).libras, getPeso(131).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impostor'),habilidadDescripcion: habDescripcion('impostor')},
		],
	},
	ratioCaptura: 35,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Ditto'], amistad: 70,
	dexRegiones: {
		dexNacional: '132',
		dexKanto: '132',
		dexJohtoGSC: '092',
		dexJohtoHGSS: '092',
		dexUnovaB2W2: '261',
		dexKalosMontana: '138',
	},
	idiomas: {frances: namesFR[131],aleman: namesDE[131],japones: [namesJP[131][1], namesJP[131][0]],coreano: [namesKO[131][1], namesKO[131][0]]}
},
{
	id: '133',
	nombre: names[132], tipo: ['normal'], clasificacion: 'Pokémon Evolución',
	altura: [getAltura(132).pies, getAltura(132).metros], peso: [getPeso(132).libras, getPeso(132).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '134',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	{
		evolucion: {
			numeroEspecie: '135',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
		},
	},
	{
		evolucion: {
			numeroEspecie: '136',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	{
		evolucion: {
			numeroEspecie: '196',
			metodo: "Felicidad máxima, subiendo de nivel en el día",
			condicion: ['happiness', 'daylight'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '197',
			metodo: "Felicidad máxima, subiendo de nivel en la noche",
			condicion: ['happiness', 'night'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '470',
			metodo: "Subiendo de nivel cerca de la Roca Musgo",
			condicion: ['location'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '471',
			metodo: "Subiendo de nivel cerca de la Roca Helada",
			condicion: ['location'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '700',
			metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
			condicion: ['happiness', 'movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '133',
		dexKanto: '133',
		dexJohtoGSC: '180',
		dexJohtoHGSS: '184',
		dexSinnohPt: '163',
		dexUnovaB2W2: '091',
		dexKalosCosta: '077',
	},
	idiomas: {frances: namesFR[132],aleman: namesDE[132],japones: [namesJP[132][1], namesJP[132][0]],coreano: [namesKO[132][1], namesKO[132][0]]}
},
{
	id: '134',
	nombre: names[133], tipo: ['water'], clasificacion: 'Pokémon Burbuja',
	altura: [getAltura(133).pies, getAltura(133).metros], peso: [getPeso(133).libras, getPeso(133).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '134',
		dexKanto: '134',
		dexJohtoGSC: '181',
		dexJohtoHGSS: '185',
		dexSinnohPt: '164',
		dexUnovaB2W2: '092',
		dexKalosCosta: '078',
	},
	idiomas: {frances: namesFR[133],aleman: namesDE[133],japones: [namesJP[133][1], namesJP[133][0]],coreano: [namesKO[133][1], namesKO[133][0]]}
},
{
	id: '135',
	nombre: names[134], tipo: ['electric'], clasificacion: 'Pokémon Relámpago',
	altura: [getAltura(134).pies, getAltura(134).metros], peso: [getPeso(134).libras, getPeso(134).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '135',
		dexKanto: '135',
		dexJohtoGSC: '182',
		dexJohtoHGSS: '186',
		dexSinnohPt: '165',
		dexUnovaB2W2: '093',
		dexKalosCosta: '079',
	},
	idiomas: {frances: namesFR[134],aleman: namesDE[134],japones: [namesJP[134][1], namesJP[134][0]],coreano: [namesKO[134][1], namesKO[134][0]]}
},
{
	id: '136',
	nombre: names[135], tipo: ['fire'], clasificacion: 'Pokémon Llama',
	altura: [getAltura(135).pies, getAltura(135).metros], peso: [getPeso(135).libras, getPeso(135).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '136',
		dexKanto: '136',
		dexJohtoGSC: '183',
		dexJohtoHGSS: '187',
		dexSinnohPt: '166',
		dexUnovaB2W2: '094',
		dexKalosCosta: '080',
	},
	idiomas: {frances: namesFR[135],aleman: namesDE[135],japones: [namesJP[135][1], namesJP[135][0]],coreano: [namesKO[135][1], namesKO[135][0]]}
},
{
	id: '137',
	nombre: names[136], tipo: ['normal'], clasificacion: 'Pokémon Virtual',
	altura: [getAltura(136).pies, getAltura(136).metros], peso: [getPeso(136).libras, getPeso(136).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('trace'),habilidadDescripcion: habDescripcion('trace')},
		{habilidadNombre: habNombre('descarga'),habilidadDescripcion: habDescripcion('descarga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '233',
			metodo: "Intercambio con objeto Mejora",
			condicion: ['trade'],
			objeto: getEvolveItem('mejora'),
			evolucion: {
				numeroEspecie: '474',
				metodo: "Intercambio con objeto Discoxtraño",
				condicion: ['trade'],
				objeto: getEvolveItem('dubiousdisc'),
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '137',
		dexKanto: '137',
		dexJohtoGSC: '215',
		dexJohtoHGSS: '220',
		dexSinnohPt: '192',
	},
	idiomas: {frances: namesFR[136],aleman: namesDE[136],japones: [namesJP[136][1], namesJP[136][0]],coreano: [namesKO[136][1], namesKO[136][0]]}
},
{
	id: '138',
	nombre: names[137], tipo: ['rock', 'water'], clasificacion: 'Pokémon Espiral',
	altura: [getAltura(137).pies, getAltura(137).metros], peso: [getPeso(137).libras, getPeso(137).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '139',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '138',
		dexKanto: '138',
		dexJohtoGSC: '220',
		dexJohtoHGSS: '225',
	},
	idiomas: {frances: namesFR[137],aleman: namesDE[137],japones: [namesJP[137][1], namesJP[137][0]],coreano: [namesKO[137][1], namesKO[137][0]]}
},
{
	id: '139',
	nombre: names[138], tipo: ['rock', 'water'], clasificacion: 'Pokémon Espiral',
	altura: [getAltura(138).pies, getAltura(138).metros], peso: [getPeso(138).libras, getPeso(138).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '138',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '139',
		dexKanto: '139',
		dexJohtoGSC: '221',
		dexJohtoHGSS: '226',
	},
	idiomas: {frances: namesFR[138],aleman: namesDE[138],japones: [namesJP[138][1], namesJP[138][0]],coreano: [namesKO[138][1], namesKO[138][0]]}
},
{
	id: '140',
	nombre: names[139], tipo: ['rock', 'water'], clasificacion: 'Pokémon Marisco',
	altura: [getAltura(139).pies, getAltura(139).metros], peso: [getPeso(139).libras, getPeso(139).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '141',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '140',
		dexKanto: '140',
		dexJohtoGSC: '222',
		dexJohtoHGSS: '227',
	},
	idiomas: {frances: namesFR[139],aleman: namesDE[139],japones: [namesJP[139][1], namesJP[139][0]],coreano: [namesKO[139][1], namesKO[139][0]]}
},
{
	id: '141',
	nombre: names[140], tipo: ['rock', 'water'], clasificacion: 'Pokémon Marisco',
	altura: [getAltura(140).pies, getAltura(140).metros], peso: [getPeso(140).libras, getPeso(140).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '140',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '141',
		dexKanto: '141',
		dexJohtoGSC: '223',
		dexJohtoHGSS: '228',
	},
	idiomas: {frances: namesFR[140],aleman: namesDE[140],japones: [namesJP[140][1], namesJP[140][0]],coreano: [namesKO[140][1], namesKO[140][0]]}
},
{
	id: '142',
	nombre: names[141], tipo: ['rock', 'flying'], clasificacion: 'Pokémon Fósil',
	altura: [getAltura(141).pies, getAltura(141).metros], peso: [getPeso(141).libras, getPeso(141).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	megaEvolucion: ['142'],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 31, grupo: ['Volador'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '142',
		dexKanto: '142',
		dexJohtoGSC: '224',
		dexJohtoHGSS: '229',
		dexKalosCosta: '068',
	},
	idiomas: {frances: namesFR[141],aleman: namesDE[141],japones: [namesJP[141][1], namesJP[141][0]],coreano: [namesKO[141][1], namesKO[141][0]]}
},
{
	id: '143',
	nombre: names[142], tipo: ['normal'], clasificacion: 'Pokémon Dormir',
	altura: [getAltura(142).pies, getAltura(142).metros], peso: [getPeso(142).libras, getPeso(142).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('inmunidad'),habilidadDescripcion: habDescripcion('inmunidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '446',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 41, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '143',
		dexKanto: '143',
		dexJohtoGSC: '225',
		dexJohtoHGSS: '230',
		dexSinnohDPPt: '113',
		dexKalosCentral: '139',
	},
	idiomas: {frances: namesFR[142],aleman: namesDE[142],japones: [namesJP[142][1], namesJP[142][0]],coreano: [namesKO[142][1], namesKO[142][0]]}
},
{
	id: '144',
	nombre: names[143], tipo: ['ice', 'flying'], clasificacion: 'Pokémon Congelar',
	altura: [getAltura(143).pies, getAltura(143).metros], peso: [getPeso(143).libras, getPeso(143).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '144',
		dexKanto: '144',
		dexJohtoGSC: '235',
		dexJohtoHGSS: '240',
		dexKalosCosta: '151',
	},
	idiomas: {frances: namesFR[143],aleman: namesDE[143],japones: [namesJP[143][1], namesJP[143][0]],coreano: [namesKO[143][1], namesKO[143][0]]}
},
{
	id: '145',
	nombre: names[144], tipo: ['electric', 'flying'], clasificacion: 'Pokémon Eléctrico',
	altura: [getAltura(144).pies, getAltura(144).metros], peso: [getPeso(144).libras, getPeso(144).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '145',
		dexKanto: '145',
		dexJohtoGSC: '236',
		dexJohtoHGSS: '241',
		dexKalosCosta: '152',
	},
	idiomas: {frances: namesFR[144],aleman: namesDE[144],japones: [namesJP[144][1], namesJP[144][0]],coreano: [namesKO[144][1], namesKO[144][0]]}
},
{
	id: '146',
	nombre: names[145], tipo: ['fire', 'flying'], clasificacion: 'Pokémon Llama',
	altura: [getAltura(145).pies, getAltura(145).metros], peso: [getPeso(145).libras, getPeso(145).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '146',
		dexKanto: '146',
		dexJohtoGSC: '237',
		dexJohtoHGSS: '242',
		dexKalosCosta: '153',
	},
	idiomas: {frances: namesFR[145],aleman: namesDE[145],japones: [namesJP[145][1], namesJP[145][0]],coreano: [namesKO[145][1], namesKO[145][0]]}
},
{
	id: '147',
	nombre: names[146], tipo: ['dragon'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(146).pies, getAltura(146).metros], peso: [getPeso(146).libras, getPeso(146).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('marvel scale'),habilidadDescripcion: habDescripcion('marvel scale')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '148',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '149',
				metodo: "Subiendo desde nivel 55",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Agua 1'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '147',
		dexKanto: '147',
		dexJohtoGSC: '241',
		dexJohtoHGSS: '246',
		dexKalosMontana: '145',
	},
	idiomas: {frances: namesFR[146],aleman: namesDE[146],japones: [namesJP[146][1], namesJP[146][0]],coreano: [namesKO[146][1], namesKO[146][0]]}
},
{
	id: '148',
	nombre: names[147], tipo: ['dragon'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(147).pies, getAltura(147).metros], peso: [getPeso(147).libras, getPeso(147).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('marvel scale'),habilidadDescripcion: habDescripcion('marvel scale')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '147',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '149',
			metodo: "Subiendo desde nivel 55",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Agua 1'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '148',
		dexKanto: '148',
		dexJohtoGSC: '242',
		dexJohtoHGSS: '247',
		dexKalosMontana: '146',
	},
	idiomas: {frances: namesFR[147],aleman: namesDE[147],japones: [namesJP[147][1], namesJP[147][0]],coreano: [namesKO[147][1], namesKO[147][0]]}
},
{
	id: '149',
	nombre: names[148], tipo: ['dragon', 'flying'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(148).pies, getAltura(148).metros], peso: [getPeso(148).libras, getPeso(148).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('multiscale'),habilidadDescripcion: habDescripcion('multiscale')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '148',
			metodo: "Subiendo desde nivel 55",
			preevolucion: {
				numeroEspecie: '147',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Agua 1'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '149',
		dexKanto: '149',
		dexJohtoGSC: '243',
		dexJohtoHGSS: '248',
		dexKalosMontana: '147',
	},
	idiomas: {frances: namesFR[148],aleman: namesDE[148],japones: [namesJP[148][1], namesJP[148][0]],coreano: [namesKO[148][1], namesKO[148][0]]}
},
{
	id: '150',
	nombre: names[149], tipo: ['psychic'], clasificacion: 'Pokémon Genético',
	altura: [getAltura(149).pies, getAltura(149).metros], peso: [getPeso(149).libras, getPeso(149).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	megaEvolucion: ['150x', '150y'],
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '150',
		dexKanto: '150',
		dexJohtoGSC: '249',
		dexJohtoHGSS: '254',
		dexKalosMontana: '151',
	},
	idiomas: {frances: namesFR[149],aleman: namesDE[149],japones: [namesJP[149][1], namesJP[149][0]],coreano: [namesKO[149][1], namesKO[149][0]]}
},
{
	id: '151',
	nombre: names[150], tipo: ['psychic'], clasificacion: 'Pokémon Nueva Especie',
	altura: [getAltura(150).pies, getAltura(150).metros], peso: [getPeso(150).libras, getPeso(150).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '151',
		dexKanto: '151',
		dexJohtoGSC: '250',
		dexJohtoHGSS: '255',
	},
	idiomas: {frances: namesFR[150],aleman: namesDE[150],japones: [namesJP[150][1], namesJP[150][0]],coreano: [namesKO[150][1], namesKO[150][0]]}
},
















{
	id: '152',
	nombre: names[151], tipo: ['grass'], clasificacion: 'Pokémon Hoja',
	altura: [getAltura(151).pies, getAltura(151).metros], peso: [getPeso(151).libras, getPeso(151).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '153',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '154',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '152',
		dexJohtoGSC: '001',
		dexJohtoHGSS: '001',
	},
	idiomas: {frances: namesFR[151],aleman: namesDE[151],japones: [namesJP[151][1], namesJP[151][0]],coreano: [namesKO[151][1], namesKO[151][0]]}
},
{
	id: '153',
	nombre: names[152], tipo: ['grass'], clasificacion: 'Pokémon Hoja',
	altura: [getAltura(152).pies, getAltura(152).metros], peso: [getPeso(152).libras, getPeso(152).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '152',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '154',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '153',
		dexJohtoGSC: '002',
		dexJohtoHGSS: '002',
	},
	idiomas: {frances: namesFR[152],aleman: namesDE[152],japones: [namesJP[152][1], namesJP[152][0]],coreano: [namesKO[152][1], namesKO[152][0]]}
},
{
	id: '154',
	nombre: names[153], tipo: ['grass'], clasificacion: 'Pokémon Hierba',
	altura: [getAltura(153).pies, getAltura(153).metros], peso: [getPeso(153).libras, getPeso(153).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '153',
			metodo: "Subiendo desde nivel 32",
			preevolucion: {
				numeroEspecie: '152',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '154',
		dexJohtoGSC: '003',
		dexJohtoHGSS: '003',
	},
	idiomas: {frances: namesFR[153],aleman: namesDE[153],japones: [namesJP[153][1], namesJP[153][0]],coreano: [namesKO[153][1], namesKO[153][0]]}
},
{
	id: '155',
	nombre: names[154], tipo: ['fire'], clasificacion: 'Pokémon Ratónfuego',
	altura: [getAltura(154).pies, getAltura(154).metros], peso: [getPeso(154).libras, getPeso(154).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '156',
			metodo: "Subiendo desde nivel 14",
			evolucion: {
				numeroEspecie: '157',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '155',
		dexJohtoGSC: '004',
		dexJohtoHGSS: '004',
	},
	idiomas: {frances: namesFR[154],aleman: namesDE[154],japones: [namesJP[154][1], namesJP[154][0]],coreano: [namesKO[154][1], namesKO[154][0]]}
},
{
	id: '156',
	nombre: names[155], tipo: ['fire'], clasificacion: 'Pokémon Volcán',
	altura: [getAltura(155).pies, getAltura(155).metros], peso: [getPeso(155).libras, getPeso(155).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '155',
			metodo: "Subiendo desde nivel 14",
		},
		evolucion: {
			numeroEspecie: '157',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '156',
		dexJohtoGSC: '005',
		dexJohtoHGSS: '005',
	},
	idiomas: {frances: namesFR[155],aleman: namesDE[155],japones: [namesJP[155][1], namesJP[155][0]],coreano: [namesKO[155][1], namesKO[155][0]]}
},
{
	id: '157',
	nombre: names[156], tipo: ['fire'], clasificacion: 'Pokémon Volcán',
	altura: [getAltura(156).pies, getAltura(156).metros], peso: [getPeso(156).libras, getPeso(156).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '156',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '155',
				metodo: "Subiendo desde nivel 14",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '157',
		dexJohtoGSC: '006',
		dexJohtoHGSS: '006',
	},
	idiomas: {frances: namesFR[156],aleman: namesDE[156],japones: [namesJP[156][1], namesJP[156][0]],coreano: [namesKO[156][1], namesKO[156][0]]}
},
{
	id: '158',
	nombre: names[157], tipo: ['water'], clasificacion: 'Pokémon Gran Fauce',
	altura: [getAltura(157).pies, getAltura(157).metros], peso: [getPeso(157).libras, getPeso(157).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '159',
			metodo: "Subiendo desde nivel 18",
			evolucion: {
				numeroEspecie: '160',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '158',
		dexJohtoGSC: '007',
		dexJohtoHGSS: '007',
	},
	idiomas: {frances: namesFR[157],aleman: namesDE[157],japones: [namesJP[157][1], namesJP[157][0]],coreano: [namesKO[157][1], namesKO[157][0]]}
},
{
	id: '159',
	nombre: names[158], tipo: ['water'], clasificacion: 'Pokémon Gran Fauce',
	altura: [getAltura(158).pies, getAltura(158).metros], peso: [getPeso(158).libras, getPeso(158).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '158',
			metodo: "Subiendo desde nivel 18",
		},
		evolucion: {
			numeroEspecie: '160',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '159',
		dexJohtoGSC: '008',
		dexJohtoHGSS: '008',
	},
	idiomas: {frances: namesFR[158],aleman: namesDE[158],japones: [namesJP[158][1], namesJP[158][0]],coreano: [namesKO[158][1], namesKO[158][0]]}
},
{
	id: '160',
	nombre: names[159], tipo: ['water'], clasificacion: 'Pokémon Gran Fauce',
	altura: [getAltura(159).pies, getAltura(159).metros], peso: [getPeso(159).libras, getPeso(159).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '159',
			metodo: "Subiendo desde nivel 30",
			preevolucion: {
				numeroEspecie: '158',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '160',
		dexJohtoGSC: '009',
		dexJohtoHGSS: '009',
	},
	idiomas: {frances: namesFR[159],aleman: namesDE[159],japones: [namesJP[159][1], namesJP[159][0]],coreano: [namesKO[159][1], namesKO[159][0]]}
},
{
	id: '161',
	nombre: names[160], tipo: ['normal'], clasificacion: 'Pokémon Explorador',
	altura: [getAltura(160).pies, getAltura(160).metros], peso: [getPeso(160).libras, getPeso(160).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '162',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '161',
		dexJohtoGSC: '019',
		dexJohtoHGSS: '019',
		dexKalosCentral: '109',
	},
	idiomas: {frances: namesFR[160],aleman: namesDE[160],japones: [namesJP[160][1], namesJP[160][0]],coreano: [namesKO[160][1], namesKO[160][0]]}
},
{
	id: '162',
	nombre: names[161], tipo: ['normal'], clasificacion: 'Pokémon Alargado',
	altura: [getAltura(161).pies, getAltura(161).metros], peso: [getPeso(161).libras, getPeso(161).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '161',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '162',
		dexJohtoGSC: '020',
		dexJohtoHGSS: '020',
		dexKalosCentral: '110',
	},
	idiomas: {frances: namesFR[161],aleman: namesDE[161],japones: [namesJP[161][1], namesJP[161][0]],coreano: [namesKO[161][1], namesKO[161][0]]}
},
{
	id: '163',
	nombre: names[162], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Búho',
	altura: [getAltura(162).pies, getAltura(162).metros], peso: [getPeso(162).libras, getPeso(162).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '164',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '163',
		dexJohtoGSC: '015',
		dexJohtoHGSS: '015',
		dexSinnohDPPt: '106',
		dexKalosMontana: '117',
	},
	idiomas: {frances: namesFR[162],aleman: namesDE[162],japones: [namesJP[162][1], namesJP[162][0]],coreano: [namesKO[162][1], namesKO[162][0]]}
},
{
	id: '164',
	nombre: names[163], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Búho',
	altura: [getAltura(163).pies, getAltura(163).metros], peso: [getPeso(163).libras, getPeso(163).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '163',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '164',
		dexJohtoGSC: '016',
		dexJohtoHGSS: '016',
		dexSinnohDPPt: '107',
		dexKalosMontana: '118',
	},
	idiomas: {frances: namesFR[163],aleman: namesDE[163],japones: [namesJP[163][1], namesJP[163][0]],coreano: [namesKO[163][1], namesKO[163][0]]}
},
{
	id: '165',
	nombre: names[164], tipo: ['bug', 'flying'], clasificacion: 'Pokémon 5estrellas',
	altura: [getAltura(164).pies, getAltura(164).metros], peso: [getPeso(164).libras, getPeso(164).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '166',
			metodo: "Subiendo desde nivel 18",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '165',
		dexJohtoGSC: '030',
		dexJohtoHGSS: '030',
		dexKalosCentral: '074',
	},
	idiomas: {frances: namesFR[164],aleman: namesDE[164],japones: [namesJP[164][1], namesJP[164][0]],coreano: [namesKO[164][1], namesKO[164][0]]}
},
{
	id: '166',
	nombre: names[165], tipo: ['bug', 'flying'], clasificacion: 'Pokémon 5estrellas',
	altura: [getAltura(165).pies, getAltura(165).metros], peso: [getPeso(165).libras, getPeso(165).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '165',
			metodo: "Subiendo desde nivel 18",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '166',
		dexJohtoGSC: '031',
		dexJohtoHGSS: '031',
		dexKalosCentral: '075',
	},
	idiomas: {frances: namesFR[165],aleman: namesDE[165],japones: [namesJP[165][1], namesJP[165][0]],coreano: [namesKO[165][1], namesKO[165][0]]}
},
{
	id: '167',
	nombre: names[166], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Escupesoga',
	altura: [getAltura(166).pies, getAltura(166).metros], peso: [getPeso(166).libras, getPeso(166).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '168',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '167',
		dexJohtoGSC: '032',
		dexJohtoHGSS: '032',
		dexKalosMontana: '107',
	},
	idiomas: {frances: namesFR[166],aleman: namesDE[166],japones: [namesJP[166][1], namesJP[166][0]],coreano: [namesKO[166][1], namesKO[166][0]]}
},
{
	id: '168',
	nombre: names[167], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Pata Larga',
	altura: [getAltura(167).pies, getAltura(167).metros], peso: [getPeso(167).libras, getPeso(167).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '167',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '168',
		dexJohtoGSC: '033',
		dexJohtoHGSS: '033',
		dexKalosMontana: '108',
	},
	idiomas: {frances: namesFR[167],aleman: namesDE[167],japones: [namesJP[167][1], namesJP[167][0]],coreano: [namesKO[167][1], namesKO[167][0]]}
},
{
	id: '169',
	nombre: names[168], tipo: ['poison', 'flying'], clasificacion: 'Pokémon Murciélago',
	altura: [getAltura(168).pies, getAltura(168).metros], peso: [getPeso(168).libras, getPeso(168).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '042',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			preevolucion: {
				numeroEspecie: '041',
				metodo: "Subiendo desde nivel 22",
			},
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '169',
		dexJohtoGSC: '039',
		dexJohtoHGSS: '039',
		dexHoennRSE: '065',
		dexSinnohDPPt: '030',
		dexUnovaB2W2: '063',
		dexKalosCentral: '147',
	},
	idiomas: {frances: namesFR[168],aleman: namesDE[168],japones: [namesJP[168][1], namesJP[168][0]],coreano: [namesKO[168][1], namesKO[168][0]]}
},
{
	id: '170',
	nombre: names[169], tipo: ['water', 'electric'], clasificacion: 'Pokémon Rape',
	altura: [getAltura(169).pies, getAltura(169).metros], peso: [getPeso(169).libras, getPeso(169).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '171',
			metodo: "Subiendo desde nivel 27",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '170',
		dexJohtoGSC: '174',
		dexJohtoHGSS: '176',
		dexHoennRSE: '181',
		dexKalosCosta: '147',
	},
	idiomas: {frances: namesFR[169],aleman: namesDE[169],japones: [namesJP[169][1], namesJP[169][0]],coreano: [namesKO[169][1], namesKO[169][0]]}
},
{
	id: '171',
	nombre: names[170], tipo: ['water', 'electric'], clasificacion: 'Pokémon Luz',
	altura: [getAltura(170).pies, getAltura(170).metros], peso: [getPeso(170).libras, getPeso(170).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '170',
			metodo: "Subiendo desde nivel 27",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '171',
		dexJohtoGSC: '175',
		dexJohtoHGSS: '177',
		dexHoennRSE: '182',
		dexKalosCosta: '148',
	},
	idiomas: {frances: namesFR[170],aleman: namesDE[170],japones: [namesJP[170][1], namesJP[170][0]],coreano: [namesKO[170][1], namesKO[170][0]]}
},
{
	id: '172',
	nombre: names[171], tipo: ['electric'], clasificacion: 'Pokémon Ratoncito',
	altura: [getAltura(171).pies, getAltura(171).metros], peso: [getPeso(171).libras, getPeso(171).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '025',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			evolucion: {
				numeroEspecie: '026',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '172',
		dexJohtoGSC: '021',
		dexJohtoHGSS: '021',
		dexHoennRSE: '155',
		dexSinnohDPPt: '103',
		dexKalosCentral: '035',
	},
	idiomas: {frances: namesFR[171],aleman: namesDE[171],japones: [namesJP[171][1], namesJP[171][0]],coreano: [namesKO[171][1], namesKO[171][0]]}
},
{
	id: '173',
	nombre: names[172], tipo: ['fairy'], clasificacion: 'Pokémon Estrellada',
	altura: [getAltura(172).pies, getAltura(172).metros], peso: [getPeso(172).libras, getPeso(172).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '035',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			evolucion: {
				numeroEspecie: '036',
				metodo: "Aplicando Piedra Lunar",
				objeto: getEvolveItem('piedra lunar'),
			},
		},
	},
	],
	ratioCaptura: 150,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 140,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '173',
		dexJohtoGSC: '040',
		dexJohtoHGSS: '040',
		dexSinnohDPPt: '099',
		dexUnovaB2W2: '088',
	},
	idiomas: {frances: namesFR[172],aleman: namesDE[172],japones: [namesJP[172][1], namesJP[172][0]],coreano: [namesKO[172][1], namesKO[172][0]]}
},
{
	id: '174',
	nombre: names[173], tipo: ['normal', 'fairy'], clasificacion: 'Pokémon Globo',
	altura: [getAltura(173).pies, getAltura(173).metros], peso: [getPeso(173).libras, getPeso(173).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '039',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			evolucion: {
				numeroEspecie: '040',
				metodo: "Aplicando Piedra Lunar",
				objeto: getEvolveItem('piedra lunar'),
			},
		},
	},
	],
	ratioCaptura: 170,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '174',
		dexJohtoGSC: '043',
		dexJohtoHGSS: '043',
		dexHoennRSE: '137',
		dexUnovaB2W2: '281',
		dexKalosMontana: '119',
	},
	idiomas: {frances: namesFR[173],aleman: namesDE[173],japones: [namesJP[173][1], namesJP[173][0]],coreano: [namesKO[173][1], namesKO[173][0]]}
},
{
	id: '175',
	nombre: names[174], tipo: ['fairy'], clasificacion: 'Pokémon Bola Clavos',
	altura: [getAltura(174).pies, getAltura(174).metros], peso: [getPeso(174).libras, getPeso(174).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '176',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			evolucion: {
				numeroEspecie: '468',
				metodo: "Aplicando Piedra Día",
				objeto: getEvolveItem('shiny stone'),
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 11, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '175',
		dexJohtoGSC: '046',
		dexJohtoHGSS: '046',
		dexSinnohPt: '173',
	},
	idiomas: {frances: namesFR[174],aleman: namesDE[174],japones: [namesJP[174][1], namesJP[174][0]],coreano: [namesKO[174][1], namesKO[174][0]]}
},
{
	id: '176',
	nombre: names[175], tipo: ['fairy', 'flying'], clasificacion: 'Pokémon Felicidad',
	altura: [getAltura(175).pies, getAltura(175).metros], peso: [getPeso(175).libras, getPeso(175).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '175',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
		evolucion: {
			numeroEspecie: '468',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 11, grupo: ['Hada', 'Volador'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '176',
		dexJohtoGSC: '047',
		dexJohtoHGSS: '047',
		dexSinnohPt: '174',
	},
	idiomas: {frances: namesFR[175],aleman: namesDE[175],japones: [namesJP[175][1], namesJP[175][0]],coreano: [namesKO[175][1], namesKO[175][0]]}
},
{
	id: '177',
	nombre: names[176], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Pajarito',
	altura: [getAltura(176).pies, getAltura(176).metros], peso: [getPeso(176).libras, getPeso(176).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic bounce'),habilidadDescripcion: habDescripcion('magic bounce')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '178',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '177',
		dexJohtoGSC: '159',
		dexJohtoHGSS: '161',
		dexHoennRSE: '162',
	},
	idiomas: {frances: namesFR[176],aleman: namesDE[176],japones: [namesJP[176][1], namesJP[176][0]],coreano: [namesKO[176][1], namesKO[176][0]]}
},
{
	id: '178',
	nombre: names[177], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Místico',
	altura: [getAltura(177).pies, getAltura(177).metros], peso: [getPeso(177).libras, getPeso(177).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic bounce'),habilidadDescripcion: habDescripcion('magic bounce')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '177',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '178',
		dexJohtoGSC: '160',
		dexJohtoHGSS: '162',
		dexHoennRSE: '163',
	},
	idiomas: {frances: namesFR[177],aleman: namesDE[177],japones: [namesJP[177][1], namesJP[177][0]],coreano: [namesKO[177][1], namesKO[177][0]]}
},
{
	id: '179',
	nombre: names[178], tipo: ['electric'], clasificacion: 'Pokémon Lana',
	altura: [getAltura(178).pies, getAltura(178).metros], peso: [getPeso(178).libras, getPeso(178).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '180',
			metodo: "Subiendo desde nivel 15",
			evolucion: {
				numeroEspecie: '181',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '179',
		dexJohtoGSC: '053',
		dexJohtoHGSS: '053',
		dexUnovaB2W2: '025',
		dexKalosCosta: '127',
	},
	idiomas: {frances: namesFR[178],aleman: namesDE[178],japones: [namesJP[178][1], namesJP[178][0]],coreano: [namesKO[178][1], namesKO[178][0]]}
},
{
	id: '180',
	nombre: names[179], tipo: ['electric'], clasificacion: 'Pokémon Lana',
	altura: [getAltura(179).pies, getAltura(179).metros], peso: [getPeso(179).libras, getPeso(179).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '179',
			metodo: "Subiendo desde nivel 15",
		},
		evolucion: {
			numeroEspecie: '181',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '180',
		dexJohtoGSC: '054',
		dexJohtoHGSS: '054',
		dexUnovaB2W2: '026',
		dexKalosCosta: '128',
	},
	idiomas: {frances: namesFR[179],aleman: namesDE[179],japones: [namesJP[179][1], namesJP[179][0]],coreano: [namesKO[179][1], namesKO[179][0]]}
},
{
	id: '181',
	nombre: names[180], tipo: ['electric'], clasificacion: 'Pokémon Luz',
	altura: [getAltura(180).pies, getAltura(180).metros], peso: [getPeso(180).libras, getPeso(180).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '180',
			metodo: "Subiendo desde nivel 30",
			preevolucion: {
				numeroEspecie: '179',
				metodo: "Subiendo desde nivel 15",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '181',
		dexJohtoGSC: '055',
		dexJohtoHGSS: '055',
		dexUnovaB2W2: '027',
		dexKalosCosta: '129',
	},
	idiomas: {frances: namesFR[180],aleman: namesDE[180],japones: [namesJP[180][1], namesJP[180][0]],coreano: [namesKO[180][1], namesKO[180][0]]}
},
{
	id: '182',
	nombre: names[181], tipo: ['grass'], clasificacion: 'Pokémon Flor',
	altura: [getAltura(181).pies, getAltura(181).metros], peso: [getPeso(181).libras, getPeso(181).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '044',
			otraEvolucion: {
				numeroEspecie: '045',
				metodo: "Aplicando Piedra Hoja",
				objeto: getEvolveItem('piedra hoja'),
			},
			preevolucion: {
				numeroEspecie: '043',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '044',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
			preevolucion: {
				numeroEspecie: '043',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '182',
		dexJohtoGSC: '086',
		dexJohtoHGSS: '086',
		dexHoennRSE: '091',
		dexKalosCentral: '108',
	},
	idiomas: {frances: namesFR[181],aleman: namesDE[181],japones: [namesJP[181][1], namesJP[181][0]],coreano: [namesKO[181][1], namesKO[181][0]]}
},
{
	id: '183',
	nombre: names[182], tipo: ['water', 'fairy'], clasificacion: 'Pokémon Ratón Agua',
	altura: [getAltura(182).pies, getAltura(182).metros], peso: [getPeso(182).libras, getPeso(182).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('potencia'),habilidadDescripcion: habDescripcion('potencia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '298',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
		evolucion: {
			numeroEspecie: '184',
			metodo: "Subiendo desde nivel 18",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 11, grupo: ['Hada', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '183',
		dexJohtoGSC: '130',
		dexJohtoHGSS: '132',
		dexHoennRSE: '055',
		dexSinnohDPPt: '125',
		dexUnovaB2W2: '031',
		dexKalosCentral: '042',
	},
	idiomas: {frances: namesFR[182],aleman: namesDE[182],japones: [namesJP[182][1], namesJP[182][0]],coreano: [namesKO[182][1], namesKO[182][0]]}
},
{
	id: '184',
	nombre: names[183], tipo: ['water', 'fairy'], clasificacion: 'Pokémon Conejoagua',
	altura: [getAltura(183).pies, getAltura(183).metros], peso: [getPeso(183).libras, getPeso(183).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('potencia'),habilidadDescripcion: habDescripcion('potencia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '183',
			metodo: "Subiendo desde nivel 18",
			preevolucion: {
				numeroEspecie: '298',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 11, grupo: ['Hada', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '184',
		dexJohtoGSC: '131',
		dexJohtoHGSS: '133',
		dexHoennRSE: '056',
		dexSinnohDPPt: '126',
		dexUnovaB2W2: '032',
		dexKalosCentral: '043',
	},
	idiomas: {frances: namesFR[183],aleman: namesDE[183],japones: [namesJP[183][1], namesJP[183][0]],coreano: [namesKO[183][1], namesKO[183][0]]}
},
{
	id: '185',
	nombre: names[184], tipo: ['rock'], clasificacion: 'Pokémon Imitación',
	altura: [getAltura(184).pies, getAltura(184).metros], peso: [getPeso(184).libras, getPeso(184).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '438',
			metodo: "Subiendo de nivel con movimiento Mimético",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '185',
		dexJohtoGSC: '106',
		dexJohtoHGSS: '107',
		dexSinnohDPPt: '093',
		dexKalosMontana: '130',
	},
	idiomas: {frances: namesFR[184],aleman: namesDE[184],japones: [namesJP[184][1], namesJP[184][0]],coreano: [namesKO[184][1], namesKO[184][0]]}
},
{
	id: '186',
	nombre: names[185], tipo: ['water'], clasificacion: 'Pokémon Rana',
	altura: [getAltura(185).pies, getAltura(185).metros], peso: [getPeso(185).libras, getPeso(185).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('drizzle'),habilidadDescripcion: habDescripcion('drizzle')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '061',
			otraEvolucion: {
				numeroEspecie: '062',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
			preevolucion: {
				numeroEspecie: '060',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '061',
			metodo: "Intercambio con objeto Roca del Rey",
			condicion: ['trade'],
			objeto: getEvolveItem('roca del rey'),
			preevolucion: {
				numeroEspecie: '060',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '186',
		dexJohtoGSC: '075',
		dexJohtoHGSS: '075',
		dexKalosMontana: '036',
	},
	idiomas: {frances: namesFR[185],aleman: namesDE[185],japones: [namesJP[185][1], namesJP[185][0]],coreano: [namesKO[185][1], namesKO[185][0]]}
},
{
	id: '187',
	nombre: names[186], tipo: ['grass', 'flying'], clasificacion: 'Pokémon Algodón',
	altura: [getAltura(186).pies, getAltura(186).metros], peso: [getPeso(186).libras, getPeso(186).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '188',
			metodo: "Subiendo desde nivel 18",
			evolucion: {
				numeroEspecie: '189',
				metodo: "Subiendo desde nivel 27",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '187',
		dexJohtoGSC: '067',
		dexJohtoHGSS: '067',
		dexKalosCentral: '135',
	},
	idiomas: {frances: namesFR[186],aleman: namesDE[186],japones: [namesJP[186][1], namesJP[186][0]],coreano: [namesKO[186][1], namesKO[186][0]]}
},
{
	id: '188',
	nombre: names[187], tipo: ['grass', 'flying'], clasificacion: 'Pokémon Algodón',
	altura: [getAltura(187).pies, getAltura(187).metros], peso: [getPeso(187).libras, getPeso(187).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '187',
			metodo: "Subiendo desde nivel 18",
		},
		evolucion: {
			numeroEspecie: '189',
			metodo: "Subiendo desde nivel 27",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '188',
		dexJohtoGSC: '068',
		dexJohtoHGSS: '068',
		dexKalosCentral: '136',
	},
	idiomas: {frances: namesFR[187],aleman: namesDE[187],japones: [namesJP[187][1], namesJP[187][0]],coreano: [namesKO[187][1], namesKO[187][0]]}
},
{
	id: '189',
	nombre: names[188], tipo: ['grass', 'flying'], clasificacion: 'Pokémon Algodón',
	altura: [getAltura(188).pies, getAltura(188).metros], peso: [getPeso(188).libras, getPeso(188).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '188',
			metodo: "Subiendo desde nivel 27",
			preevolucion: {
				numeroEspecie: '187',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '189',
		dexJohtoGSC: '069',
		dexJohtoHGSS: '069',
		dexKalosCentral: '137',
	},
	idiomas: {frances: namesFR[188],aleman: namesDE[188],japones: [namesJP[188][1], namesJP[188][0]],coreano: [namesKO[188][1], namesKO[188][0]]}
},
{
	id: '190',
	nombre: names[189], tipo: ['normal'], clasificacion: 'Pokémon Cola Larga',
	altura: [getAltura(189).pies, getAltura(189).metros], peso: [getPeso(189).libras, getPeso(189).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '424',
			metodo: "Subiendo de nivel con movimiento Doble Golpe",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '190',
		dexJohtoGSC: '122',
		dexJohtoHGSS: '123',
		dexSinnohDPPt: '063',
	},
	idiomas: {frances: namesFR[189],aleman: namesDE[189],japones: [namesJP[189][1], namesJP[189][0]],coreano: [namesKO[189][1], namesKO[189][0]]}
},
{
	id: '191',
	nombre: names[190], tipo: ['grass'], clasificacion: 'Pokémon Semilla',
	altura: [getAltura(190).pies, getAltura(190).metros], peso: [getPeso(190).libras, getPeso(190).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '192',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('sun stone'),
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '191',
		dexJohtoGSC: '102',
		dexJohtoHGSS: '103',
		dexUnovaB2W2: '020',
	},
	idiomas: {frances: namesFR[190],aleman: namesDE[190],japones: [namesJP[190][1], namesJP[190][0]],coreano: [namesKO[190][1], namesKO[190][0]]}
},
{
	id: '192',
	nombre: names[191], tipo: ['grass'], clasificacion: 'Pokémon Sol',
	altura: [getAltura(191).pies, getAltura(191).metros], peso: [getPeso(191).libras, getPeso(191).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '191',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('sun stone'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '192',
		dexJohtoGSC: '103',
		dexJohtoHGSS: '104',
		dexUnovaB2W2: '021',
	},
	idiomas: {frances: namesFR[191],aleman: namesDE[191],japones: [namesJP[191][1], namesJP[191][0]],coreano: [namesKO[191][1], namesKO[191][0]]}
},
{
	id: '193',
	nombre: names[192], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Ala Clara',
	altura: [getAltura(192).pies, getAltura(192).metros], peso: [getPeso(192).libras, getPeso(192).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '469',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '193',
		dexJohtoGSC: '101',
		dexJohtoHGSS: '101',
		dexSinnohPt: '183',
		dexUnovaB2W2: '286',
		dexKalosCosta: '087',
	},
	idiomas: {frances: namesFR[192],aleman: namesDE[192],japones: [namesJP[192][1], namesJP[192][0]],coreano: [namesKO[192][1], namesKO[192][0]]}
},
{
	id: '194',
	nombre: names[193], tipo: ['water', 'ground'], clasificacion: 'Pokémon Pez Agua',
	altura: [getAltura(193).pies, getAltura(193).metros], peso: [getPeso(193).libras, getPeso(193).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '195',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '194',
		dexJohtoGSC: '056',
		dexJohtoHGSS: '056',
		dexSinnohDPPt: '117',
		dexKalosMontana: '017',
	},
	idiomas: {frances: namesFR[193],aleman: namesDE[193],japones: [namesJP[193][1], namesJP[193][0]],coreano: [namesKO[193][1], namesKO[193][0]]}
},
{
	id: '195',
	nombre: names[194], tipo: ['water', 'ground'], clasificacion: 'Pokémon Pez Agua',
	altura: [getAltura(194).pies, getAltura(194).metros], peso: [getPeso(194).libras, getPeso(194).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '194',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '195',
		dexJohtoGSC: '057',
		dexJohtoHGSS: '057',
		dexSinnohDPPt: '118',
		dexKalosMontana: '018',
	},
	idiomas: {frances: namesFR[194],aleman: namesDE[194],japones: [namesJP[194][1], namesJP[194][0]],coreano: [namesKO[194][1], namesKO[194][0]]}
},
{
	id: '196',
	nombre: names[195], tipo: ['psychic'], clasificacion: 'Pokémon Sol',
	altura: [getAltura(195).pies, getAltura(195).metros], peso: [getPeso(195).libras, getPeso(195).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magic bounce'),habilidadDescripcion: habDescripcion('magic bounce')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Felicidad máxima, subiendo de nivel en el día",
			condicion: ['happiness', 'daylight'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '196',
		dexJohtoGSC: '184',
		dexJohtoHGSS: '188',
		dexSinnohPt: '167',
		dexUnovaB2W2: '095',
		dexKalosCosta: '081',
	},
	idiomas: {frances: namesFR[195],aleman: namesDE[195],japones: [namesJP[195][1], namesJP[195][0]],coreano: [namesKO[195][1], namesKO[195][0]]}
},
{
	id: '197',
	nombre: names[196], tipo: ['dark'], clasificacion: 'Pokémon Luz Lunar',
	altura: [getAltura(196).pies, getAltura(196).metros], peso: [getPeso(196).libras, getPeso(196).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Felicidad máxima, subiendo de nivel en la noche",
			condicion: ['happiness', 'night'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 35,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '197',
		dexJohtoGSC: '185',
		dexJohtoHGSS: '189',
		dexSinnohPt: '168',
		dexUnovaB2W2: '096',
		dexKalosCosta: '082',
	},
	idiomas: {frances: namesFR[196],aleman: namesDE[196],japones: [namesJP[196][1], namesJP[196][0]],coreano: [namesKO[196][1], namesKO[196][0]]}
},
{
	id: '198',
	nombre: names[197], tipo: ['dark', 'flying'], clasificacion: 'Pokémon Oscuridad',
	altura: [getAltura(197).pies, getAltura(197).metros], peso: [getPeso(197).libras, getPeso(197).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '430',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '198',
		dexJohtoGSC: '208',
		dexJohtoHGSS: '213',
		dexSinnohDPPt: '074',
		dexKalosMontana: '051',
	},
	idiomas: {frances: namesFR[197],aleman: namesDE[197],japones: [namesJP[197][1], namesJP[197][0]],coreano: [namesKO[197][1], namesKO[197][0]]}
},
{
	id: '199',
	nombre: names[198], tipo: ['water', 'psychic'], clasificacion: 'Pokémon Regio',
	altura: [getAltura(198).pies, getAltura(198).metros], peso: [getPeso(198).libras, getPeso(198).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '079',
			otraEvolucion: {
				numeroEspecie: '080',
				metodo: "Subiendo desde nivel 37",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '079',
			metodo: "Intercambio con objeto Roca del Rey",
			condicion: ['trade'],
			objeto: getEvolveItem('roca del rey'),
		},
	},
	],
	ratioCaptura: 70,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '199',
		dexJohtoGSC: '082',
		dexJohtoHGSS: '082',
		dexKalosCosta: '135',
	},
	idiomas: {frances: namesFR[198],aleman: namesDE[198],japones: [namesJP[198][1], namesJP[198][0]],coreano: [namesKO[198][1], namesKO[198][0]]}
},
{
	id: '200',
	nombre: names[199], tipo: ['ghost'], clasificacion: 'Pokémon Chirrido',
	altura: [getAltura(199).pies, getAltura(199).metros], peso: [getPeso(199).libras, getPeso(199).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '429',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '200',
		dexJohtoGSC: '214',
		dexJohtoHGSS: '219',
		dexSinnohDPPt: '072',
	},
	idiomas: {frances: namesFR[199],aleman: namesDE[199],japones: [namesJP[199][1], namesJP[199][0]],coreano: [namesKO[199][1], namesKO[199][0]]}
},
{
	id: '201',
	nombre: names[200], tipo: ['psychic'], clasificacion: 'Pokémon Símbolo',
	altura: [getAltura(200).pies, getAltura(200).metros], peso: [getPeso(200).libras, getPeso(200).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 41, grupo: ['Desconocido'], amistad: 70,
	dexRegiones: {
		dexNacional: '201',
		dexJohtoGSC: '061',
		dexJohtoHGSS: '061',
		dexSinnohDPPt: '114',
	},
	idiomas: {frances: namesFR[200],aleman: namesDE[200],japones: [namesJP[200][1], namesJP[200][0]],coreano: [namesKO[200][1], namesKO[200][0]]}
},
{
	id: '202',
	nombre: names[201], tipo: ['psychic'], clasificacion: 'Pokémon Paciente',
	altura: [getAltura(201).pies, getAltura(201).metros], peso: [getPeso(201).libras, getPeso(201).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '360',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '202',
		dexJohtoGSC: '107',
		dexJohtoHGSS: '108',
		dexHoennRSE: '161',
		dexKalosCosta: '119',
	},
	idiomas: {frances: namesFR[201],aleman: namesDE[201],japones: [namesJP[201][1], namesJP[201][0]],coreano: [namesKO[201][1], namesKO[201][0]]}
},
{
	id: '203',
	nombre: names[202], tipo: ['normal', 'psychic'], clasificacion: 'Pokémon Grancuello',
	altura: [getAltura(202).pies, getAltura(202).metros], peso: [getPeso(202).libras, getPeso(202).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '203',
		dexJohtoGSC: '147',
		dexJohtoHGSS: '149',
		dexHoennRSE: '164',
		dexSinnohDPPt: '121',
	},
	idiomas: {frances: namesFR[202],aleman: namesDE[202],japones: [namesJP[202][1], namesJP[202][0]],coreano: [namesKO[202][1], namesKO[202][0]]}
},
{
	id: '204',
	nombre: names[203], tipo: ['bug'], clasificacion: 'Pokémon Larva',
	altura: [getAltura(203).pies, getAltura(203).metros], peso: [getPeso(203).libras, getPeso(203).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '205',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '204',
		dexJohtoGSC: '093',
		dexJohtoHGSS: '093',
	},
	idiomas: {frances: namesFR[203],aleman: namesDE[203],japones: [namesJP[203][1], namesJP[203][0]],coreano: [namesKO[203][1], namesKO[203][0]]}
},
{
	id: '205',
	nombre: names[204], tipo: ['bug', 'steel'], clasificacion: 'Pokémon Larva',
	altura: [getAltura(204).pies, getAltura(204).metros], peso: [getPeso(204).libras, getPeso(204).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '204',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '205',
		dexJohtoGSC: '094',
		dexJohtoHGSS: '094',
	},
	idiomas: {frances: namesFR[204],aleman: namesDE[204],japones: [namesJP[204][1], namesJP[204][0]],coreano: [namesKO[204][1], namesKO[204][0]]}
},
{
	id: '206',
	nombre: names[205], tipo: ['normal'], clasificacion: 'Pokémon Serptierra',
	altura: [getAltura(205).pies, getAltura(205).metros], peso: [getPeso(205).libras, getPeso(205).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '206',
		dexJohtoGSC: '052',
		dexJohtoHGSS: '052',
		dexUnovaB2W2: '035',
		dexKalosCentral: '040',
	},
	idiomas: {frances: namesFR[205],aleman: namesDE[205],japones: [namesJP[205][1], namesJP[205][0]],coreano: [namesKO[205][1], namesKO[205][0]]}
},
{
	id: '207',
	nombre: names[206], tipo: ['ground', 'flying'], clasificacion: 'Pokémon Escorpiala',
	altura: [getAltura(206).pies, getAltura(206).metros], peso: [getPeso(206).libras, getPeso(206).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inmunidad'),habilidadDescripcion: habDescripcion('inmunidad')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '472',
			metodo: "Subiendo de nivel con objeto Colmillo Agudo en la noche",
			condicion: ['night'],
			objeto: getEvolveItem('razor fang'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '207',
		dexJohtoGSC: '189',
		dexJohtoHGSS: '193',
		dexSinnohPt: '153',
		dexUnovaB2W2: '221',
		dexKalosMontana: '115',
	},
	idiomas: {frances: namesFR[206],aleman: namesDE[206],japones: [namesJP[206][1], namesJP[206][0]],coreano: [namesKO[206][1], namesKO[206][0]]}
},
{
	id: '208',
	nombre: names[207], tipo: ['steel', 'ground'], clasificacion: 'Pokémon Serpférrea',
	altura: [getAltura(207).pies, getAltura(207).metros], peso: [getPeso(207).libras, getPeso(207).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '095',
			metodo: "Intercambio con objeto Revestimiento Metálico",
			condicion: ['trade'],
			objeto: getEvolveItem('metal coat'),
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '208',
		dexJohtoGSC: '063',
		dexJohtoHGSS: '063',
		dexSinnohDPPt: '035',
		dexUnovaB2W2: '072',
		dexKalosCosta: '054',
	},
	idiomas: {frances: namesFR[207],aleman: namesDE[207],japones: [namesJP[207][1], namesJP[207][0]],coreano: [namesKO[207][1], namesKO[207][0]]}
},
{
	id: '209',
	nombre: names[208], tipo: ['fairy'], clasificacion: 'Pokémon Hada',
	altura: [getAltura(208).pies, getAltura(208).metros], peso: [getPeso(208).libras, getPeso(208).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '210',
			metodo: "Subiendo desde nivel 23",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '209',
		dexJohtoGSC: '123',
		dexJohtoHGSS: '125',
		dexKalosCosta: '071',
	},
	idiomas: {frances: namesFR[208],aleman: namesDE[208],japones: [namesJP[208][1], namesJP[208][0]],coreano: [namesKO[208][1], namesKO[208][0]]}
},
{
	id: '210',
	nombre: names[209], tipo: ['fairy'], clasificacion: 'Pokémon Hada',
	altura: [getAltura(209).pies, getAltura(209).metros], peso: [getPeso(209).libras, getPeso(209).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '209',
			metodo: "Subiendo desde nivel 23",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '210',
		dexJohtoGSC: '124',
		dexJohtoHGSS: '126',
		dexKalosCosta: '072',
	},
	idiomas: {frances: namesFR[209],aleman: namesDE[209],japones: [namesJP[209][1], namesJP[209][0]],coreano: [namesKO[209][1], namesKO[209][0]]}
},
{
	id: '211',
	nombre: names[210], tipo: ['water', 'poison'], clasificacion: 'Pokémon Globo',
	altura: [getAltura(210).pies, getAltura(210).metros], peso: [getPeso(210).libras, getPeso(210).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '211',
		dexJohtoGSC: '161',
		dexJohtoHGSS: '163',
		dexKalosCosta: '038',
	},
	idiomas: {frances: namesFR[210],aleman: namesDE[210],japones: [namesJP[210][1], namesJP[210][0]],coreano: [namesKO[210][1], namesKO[210][0]]}
},
{
	id: '212',
	nombre: names[211], tipo: ['bug', 'steel'], clasificacion: 'Pokémon Tenaza',
	altura: [getAltura(211).pies, getAltura(211).metros], peso: [getPeso(211).libras, getPeso(211).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('light metal'),habilidadDescripcion: habDescripcion('light metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '123',
			metodo: "Intercambio con objeto Revestimiento Metálico",
			condicion: ['trade'],
			objeto: getEvolveItem('metal coat'),
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '212',
		dexJohtoGSC: '111',
		dexJohtoHGSS: '112',
		dexSinnohPt: '196',
		dexKalosMontana: '137',
	},
	idiomas: {frances: namesFR[211],aleman: namesDE[211],japones: [namesJP[211][1], namesJP[211][0]],coreano: [namesKO[211][1], namesKO[211][0]]}
},
{
	id: '213',
	nombre: names[212], tipo: ['bug', 'rock'], clasificacion: 'Pokémon Moho',
	altura: [getAltura(212).pies, getAltura(212).metros], peso: [getPeso(212).libras, getPeso(212).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
	},
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '213',
		dexJohtoGSC: '166',
		dexJohtoHGSS: '168',
		dexUnovaB2W2: '232',
		dexKalosMontana: '014',
	},
	idiomas: {frances: namesFR[212],aleman: namesDE[212],japones: [namesJP[212][1], namesJP[212][0]],coreano: [namesKO[212][1], namesKO[212][0]]}
},
{
	id: '214',
	nombre: names[213], tipo: ['bug', 'fight'], clasificacion: 'Pokémon Unicornio',
	altura: [getAltura(213).pies, getAltura(213).metros], peso: [getPeso(213).libras, getPeso(213).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '214',
		dexJohtoGSC: '113',
		dexJohtoHGSS: '114',
		dexHoennRSE: '168',
		dexSinnohDPPt: '062',
		dexUnovaB2W2: '145',
		dexKalosCosta: '131',
	},
	idiomas: {frances: namesFR[213],aleman: namesDE[213],japones: [namesJP[213][1], namesJP[213][0]],coreano: [namesKO[213][1], namesKO[213][0]]}
},
{
	id: '215',
	nombre: names[214], tipo: ['dark', 'ice'], clasificacion: 'Pokémon Garra Filo',
	altura: [getAltura(214).pies, getAltura(214).metros], peso: [getPeso(214).libras, getPeso(214).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '461',
			metodo: "Subiendo de nivel con objeto Garrafilada en la noche",
			condicion: ['night'],
			objeto: getEvolveItem('razor claw'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '215',
		dexJohtoGSC: '213',
		dexJohtoHGSS: '218',
		dexSinnohDPPt: '144',
		dexUnovaB2W2: '252',
		dexKalosMontana: '091',
	},
	idiomas: {frances: namesFR[214],aleman: namesDE[214],japones: [namesJP[214][1], namesJP[214][0]],coreano: [namesKO[214][1], namesKO[214][0]]}
},
{
	id: '216',
	nombre: names[215], tipo: ['normal'], clasificacion: 'Pokémon Osito',
	altura: [getAltura(215).pies, getAltura(215).metros], peso: [getPeso(215).libras, getPeso(215).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('honey gather'),habilidadDescripcion: habDescripcion('honey gather')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '217',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '216',
		dexJohtoGSC: '193',
		dexJohtoHGSS: '198',
		dexKalosMontana: '132',
	},
	idiomas: {frances: namesFR[215],aleman: namesDE[215],japones: [namesJP[215][1], namesJP[215][0]],coreano: [namesKO[215][1], namesKO[215][0]]}
},
{
	id: '217',
	nombre: names[216], tipo: ['normal'], clasificacion: 'Pokémon Hibernante',
	altura: [getAltura(216).pies, getAltura(216).metros], peso: [getPeso(216).libras, getPeso(216).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '216',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '217',
		dexJohtoGSC: '194',
		dexJohtoHGSS: '199',
		dexKalosMontana: '133',
	},
	idiomas: {frances: namesFR[216],aleman: namesDE[216],japones: [namesJP[216][1], namesJP[216][0]],coreano: [namesKO[216][1], namesKO[216][0]]}
},
{
	id: '218',
	nombre: names[217], tipo: ['fire'], clasificacion: 'Pokémon Lava',
	altura: [getAltura(217).pies, getAltura(217).metros], peso: [getPeso(217).libras, getPeso(217).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		{habilidadNombre: habNombre('magma armor'),habilidadDescripcion: habDescripcion('magma armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '219',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '218',
		dexJohtoGSC: '211',
		dexJohtoHGSS: '216',
		dexHoennRSE: '103',
		dexKalosMontana: '012',
	},
	idiomas: {frances: namesFR[217],aleman: namesDE[217],japones: [namesJP[217][1], namesJP[217][0]],coreano: [namesKO[217][1], namesKO[217][0]]}
},
{
	id: '219',
	nombre: names[218], tipo: ['fire', 'rock'], clasificacion: 'Pokémon Lava',
	altura: [getAltura(218).pies, getAltura(218).metros], peso: [getPeso(218).libras, getPeso(218).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		{habilidadNombre: habNombre('magma armor'),habilidadDescripcion: habDescripcion('magma armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '218',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '219',
		dexJohtoGSC: '212',
		dexJohtoHGSS: '217',
		dexHoennRSE: '104',
		dexKalosMontana: '013',
	},
	idiomas: {frances: namesFR[218],aleman: namesDE[218],japones: [namesJP[218][1], namesJP[218][0]],coreano: [namesKO[218][1], namesKO[218][0]]}
},
{
	id: '220',
	nombre: names[219], tipo: ['ice', 'ground'], clasificacion: 'Pokémon Cerdo',
	altura: [getAltura(219).pies, getAltura(219).metros], peso: [getPeso(219).libras, getPeso(219).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '221',
			metodo: "Subiendo desde nivel 33",
			evolucion: {
				numeroEspecie: '473',
				metodo: "Subiendo de nivel con movimiento Poder Pasado",
				condicion: ['movement'],
			},
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '220',
		dexJohtoGSC: '191',
		dexJohtoHGSS: '195',
		dexSinnohPt: '203',
		dexUnovaB2W2: '258',
		dexKalosMontana: '076',
	},
	idiomas: {frances: namesFR[219],aleman: namesDE[219],japones: [namesJP[219][1], namesJP[219][0]],coreano: [namesKO[219][1], namesKO[219][0]]}
},
{
	id: '221',
	nombre: names[220], tipo: ['ice', 'ground'], clasificacion: 'Pokémon Puerco',
	altura: [getAltura(220).pies, getAltura(220).metros], peso: [getPeso(220).libras, getPeso(220).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '220',
			metodo: "Subiendo desde nivel 33",
		},
		evolucion: {
			numeroEspecie: '473',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 1,
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '221',
		dexJohtoGSC: '192',
		dexJohtoHGSS: '196',
		dexSinnohPt: '204',
		dexUnovaB2W2: '259',
		dexKalosMontana: '077',
	},
	idiomas: {frances: namesFR[220],aleman: namesDE[220],japones: [namesJP[220][1], namesJP[220][0]],coreano: [namesKO[220][1], namesKO[220][0]]}
},
{
	id: '222',
	nombre: names[221], tipo: ['water', 'rock'], clasificacion: 'Pokémon Coral',
	altura: [getAltura(221).pies, getAltura(221).metros], peso: [getPeso(221).libras, getPeso(221).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '222',
		dexJohtoGSC: '171',
		dexJohtoHGSS: '173',
		dexHoennRSE: '180',
		dexUnovaB2W2: '237',
		dexKalosCosta: '146',
	},
	idiomas: {frances: namesFR[221],aleman: namesDE[221],japones: [namesJP[221][1], namesJP[221][0]],coreano: [namesKO[221][1], namesKO[221][0]]}
},
{
	id: '223',
	nombre: names[222], tipo: ['water'], clasificacion: 'Pokémon Reactor',
	altura: [getAltura(222).pies, getAltura(222).metros], peso: [getPeso(222).libras, getPeso(222).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '224',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '223',
		dexJohtoGSC: '172',
		dexJohtoHGSS: '174',
		dexSinnohDPPt: '132',
		dexUnovaB2W2: '235',
		dexKalosCosta: '144',
	},
	idiomas: {frances: namesFR[222],aleman: namesDE[222],japones: [namesJP[222][1], namesJP[222][0]],coreano: [namesKO[222][1], namesKO[222][0]]}
},
{
	id: '224',
	nombre: names[223], tipo: ['water'], clasificacion: 'Pokémon Reactor',
	altura: [getAltura(223).pies, getAltura(223).metros], peso: [getPeso(223).libras, getPeso(223).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ventosas'),habilidadDescripcion: habDescripcion('ventosas')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '223',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '224',
		dexJohtoGSC: '173',
		dexJohtoHGSS: '175',
		dexSinnohDPPt: '133',
		dexUnovaB2W2: '236',
		dexKalosCosta: '145',
	},
	idiomas: {frances: namesFR[223],aleman: namesDE[223],japones: [namesJP[223][1], namesJP[223][0]],coreano: [namesKO[223][1], namesKO[223][0]]}
},
{
	id: '225',
	nombre: names[224], tipo: ['ice', 'flying'], clasificacion: 'Pokémon Reparto',
	altura: [getAltura(224).pies, getAltura(224).metros], peso: [getPeso(224).libras, getPeso(224).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '225',
		dexJohtoGSC: '190',
		dexJohtoHGSS: '194',
		dexUnovaB2W2: '254',
		dexKalosMontana: '090',
	},
	idiomas: {frances: namesFR[224],aleman: namesDE[224],japones: [namesJP[224][1], namesJP[224][0]],coreano: [namesKO[224][1], namesKO[224][0]]}
},
{
	id: '226',
	nombre: names[225], tipo: ['water', 'flying'], clasificacion: 'Pokémon Milano',
	altura: [getAltura(225).pies, getAltura(225).metros], peso: [getPeso(225).libras, getPeso(225).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '458',
			metodo: "Subiendo de nivel con un Remoraid en el equipo",
			pokemon: '223',
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '226',
		dexJohtoGSC: '197',
		dexJohtoHGSS: '202',
		dexSinnohDPPt: '141',
		dexUnovaB2W2: '234',
		dexKalosCosta: '140',
	},
	idiomas: {frances: namesFR[225],aleman: namesDE[225],japones: [namesJP[225][1], namesJP[225][0]],coreano: [namesKO[225][1], namesKO[225][0]]}
},
{
	id: '227',
	nombre: names[226], tipo: ['steel', 'flying'], clasificacion: 'Pokémon Coraza Ave',
	altura: [getAltura(226).pies, getAltura(226).metros], peso: [getPeso(226).libras, getPeso(226).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	ratioCaptura: 25,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 26, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '227',
		dexJohtoGSC: '198',
		dexJohtoHGSS: '203',
		dexHoennRSE: '115',
		dexUnovaB2W2: '203',
		dexKalosMontana: '112',
	},
	idiomas: {frances: namesFR[226],aleman: namesDE[226],japones: [namesJP[226][1], namesJP[226][0]],coreano: [namesKO[226][1], namesKO[226][0]]}
},
{
	id: '228',
	nombre: names[227], tipo: ['dark', 'fire'], clasificacion: 'Pokémon Siniestro',
	altura: [getAltura(227).pies, getAltura(227).metros], peso: [getPeso(227).libras, getPeso(227).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '229',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '228',
		dexJohtoGSC: '209',
		dexJohtoHGSS: '214',
		dexSinnohPt: '176',
		dexKalosCosta: '075',
	},
	idiomas: {frances: namesFR[227],aleman: namesDE[227],japones: [namesJP[227][1], namesJP[227][0]],coreano: [namesKO[227][1], namesKO[227][0]]}
},
{
	id: '229',
	nombre: names[228], tipo: ['dark', 'fire'], clasificacion: 'Pokémon Siniestro',
	altura: [getAltura(228).pies, getAltura(228).metros], peso: [getPeso(228).libras, getPeso(228).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '228',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '229',
		dexJohtoGSC: '210',
		dexJohtoHGSS: '215',
		dexSinnohPt: '177',
		dexKalosCosta: '076',
	},
	idiomas: {frances: namesFR[228],aleman: namesDE[228],japones: [namesJP[228][1], namesJP[228][0]],coreano: [namesKO[228][1], namesKO[228][0]]}
},
{
	id: '230',
	nombre: names[229], tipo: ['water', 'dragon'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(229).pies, getAltura(229).metros], peso: [getPeso(229).libras, getPeso(229).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '117',
			metodo: "Intercambio con objeto Escama Dragón",
			condicion: ['trade'],
			objeto: getEvolveItem('dragon scale'),
			preevolucion: {
				numeroEspecie: '116',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '230',
		dexJohtoGSC: '188',
		dexJohtoHGSS: '192',
		dexHoennRSE: '186',
		dexKalosCosta: '041',
	},
	idiomas: {frances: namesFR[229],aleman: namesDE[229],japones: [namesJP[229][1], namesJP[229][0]],coreano: [namesKO[229][1], namesKO[229][0]]}
},
{
	id: '231',
	nombre: names[230], tipo: ['ground'], clasificacion: 'Pokémon Narizotas',
	altura: [getAltura(230).pies, getAltura(230).metros], peso: [getPeso(230).libras, getPeso(230).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '232',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '231',
		dexJohtoGSC: '195',
		dexJohtoHGSS: '200',
		dexHoennRSE: '165',
	},
	idiomas: {frances: namesFR[230],aleman: namesDE[230],japones: [namesJP[230][1], namesJP[230][0]],coreano: [namesKO[230][1], namesKO[230][0]]}
},
{
	id: '232',
	nombre: names[231], tipo: ['ground'], clasificacion: 'Pokémon Elefante',
	altura: [getAltura(231).pies, getAltura(231).metros], peso: [getPeso(231).libras, getPeso(231).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '231',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '232',
		dexJohtoGSC: '196',
		dexJohtoHGSS: '201',
		dexHoennRSE: '166',
	},
	idiomas: {frances: namesFR[231],aleman: namesDE[231],japones: [namesJP[231][1], namesJP[231][0]],coreano: [namesKO[231][1], namesKO[231][0]]}
},
{
	id: '233',
	nombre: names[232], tipo: ['normal'], clasificacion: 'Pokémon Virtual',
	altura: [getAltura(232).pies, getAltura(232).metros], peso: [getPeso(232).libras, getPeso(232).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('trace'),habilidadDescripcion: habDescripcion('trace')},
		{habilidadNombre: habNombre('descarga'),habilidadDescripcion: habDescripcion('descarga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '137',
			metodo: "Intercambio con objeto Mejora",
			condicion: ['trade'],
			objeto: getEvolveItem('mejora'),
		},
		evolucion: {
			numeroEspecie: '474',
			metodo: "Intercambio con objeto Discoxtraño",
			condicion: ['trade'],
			objeto: getEvolveItem('dubiousdisc'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '233',
		dexJohtoGSC: '216',
		dexJohtoHGSS: '221',
		dexSinnohPt: '193',
	},
	idiomas: {frances: namesFR[232],aleman: namesDE[232],japones: [namesJP[232][1], namesJP[232][0]],coreano: [namesKO[232][1], namesKO[232][0]]}
},
{
	id: '234',
	nombre: names[233], tipo: ['normal'], clasificacion: 'Pokémon Grancuerno',
	altura: [getAltura(233).pies, getAltura(233).metros], peso: [getPeso(233).libras, getPeso(233).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '234',
		dexJohtoGSC: '129',
		dexJohtoHGSS: '131',
	},
	idiomas: {frances: namesFR[233],aleman: namesDE[233],japones: [namesJP[233][1], namesJP[233][0]],coreano: [namesKO[233][1], namesKO[233][0]]}
},
{
	id: '235',
	nombre: names[234], tipo: ['normal'], clasificacion: 'Pokémon Pintor',
	altura: [getAltura(234).pies, getAltura(234).metros], peso: [getPeso(234).libras, getPeso(234).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '235',
		dexJohtoGSC: '157',
		dexJohtoHGSS: '159',
		dexKalosCentral: '124',
	},
	idiomas: {frances: namesFR[234],aleman: namesDE[234],japones: [namesJP[234][1], namesJP[234][0]],coreano: [namesKO[234][1], namesKO[234][0]]}
},
{
	id: '236',
	nombre: names[235], tipo: ['fight'], clasificacion: 'Pokémon Peleón',
	altura: [getAltura(235).pies, getAltura(235).metros], peso: [getPeso(235).libras, getPeso(235).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '106',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es mayor que su Defensa",
		},
	},
	{
		evolucion: {
			numeroEspecie: '107',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es menor que su Defensa",
		},
	},
	{
		evolucion: {
			numeroEspecie: '237',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es igual que su Defensa",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '236',
		dexJohtoGSC: '143',
		dexJohtoHGSS: '145',
	},
	idiomas: {frances: namesFR[235],aleman: namesDE[235],japones: [namesJP[235][1], namesJP[235][0]],coreano: [namesKO[235][1], namesKO[235][0]]}
},
{
	id: '237',
	nombre: names[236], tipo: ['fight'], clasificacion: 'Pokémon Boca Abajo',
	altura: [getAltura(236).pies, getAltura(236).metros], peso: [getPeso(236).libras, getPeso(236).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '106',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es mayor que su Defensa",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			otraEvolucion: {
				numeroEspecie: '107',
				metodo: "Subiendo desde nivel 20, sólo si su Ataque es menor que su Defensa",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '236',
			metodo: "Subiendo desde nivel 20, sólo si su Ataque es igual que su Defensa",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '237',
		dexJohtoGSC: '146',
		dexJohtoHGSS: '148',
	},
	idiomas: {frances: namesFR[236],aleman: namesDE[236],japones: [namesJP[236][1], namesJP[236][0]],coreano: [namesKO[236][1], namesKO[236][0]]}
},
{
	id: '238',
	nombre: names[237], tipo: ['ice', 'psychic'], clasificacion: 'Pokémon Beso',
	altura: [getAltura(237).pies, getAltura(237).metros], peso: [getPeso(237).libras, getPeso(237).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '124',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '238',
		dexJohtoGSC: '152',
		dexJohtoHGSS: '154',
		dexKalosMontana: '083',
	},
	idiomas: {frances: namesFR[237],aleman: namesDE[237],japones: [namesJP[237][1], namesJP[237][0]],coreano: [namesKO[237][1], namesKO[237][0]]}
},
{
	id: '239',
	nombre: names[238], tipo: ['electric'], clasificacion: 'Pokémon Eléctrico',
	altura: [getAltura(238).pies, getAltura(238).metros], peso: [getPeso(238).libras, getPeso(238).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '125',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '466',
				metodo: "Intercambio con objeto Electrizador",
				condicion: ['trade'],
				objeto: getEvolveItem('electirizer'),
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '239',
		dexJohtoGSC: '154',
		dexJohtoHGSS: '156',
		dexSinnohPt: '197',
		dexUnovaB2W2: '056',
	},
	idiomas: {frances: namesFR[238],aleman: namesDE[238],japones: [namesJP[238][1], namesJP[238][0]],coreano: [namesKO[238][1], namesKO[238][0]]}
},
{
	id: '240',
	nombre: names[239], tipo: ['fire'], clasificacion: 'Pokémon Ascuas',
	altura: [getAltura(239).pies, getAltura(239).metros], peso: [getPeso(239).libras, getPeso(239).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '126',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '467',
				metodo: "Intercambio con objeto Magmatizador",
				condicion: ['trade'],
				objeto: getEvolveItem('magmarizer'),
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '240',
		dexJohtoGSC: '150',
		dexJohtoHGSS: '152',
		dexSinnohPt: '200',
		dexUnovaB2W2: '053',
	},
	idiomas: {frances: namesFR[239],aleman: namesDE[239],japones: [namesJP[239][1], namesJP[239][0]],coreano: [namesKO[239][1], namesKO[239][0]]}
},
{
	id: '241',
	nombre: names[240], tipo: ['normal'], clasificacion: 'Pokémon Lechera',
	altura: [getAltura(240).pies, getAltura(240).metros], peso: [getPeso(240).libras, getPeso(240).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '241',
		dexJohtoGSC: '149',
		dexJohtoHGSS: '151',
		dexKalosCosta: '126',
	},
	idiomas: {frances: namesFR[240],aleman: namesDE[240],japones: [namesJP[240][1], namesJP[240][0]],coreano: [namesKO[240][1], namesKO[240][0]]}
},
{
	id: '242',
	nombre: names[241], tipo: ['normal'], clasificacion: 'Pokémon Felicidad',
	altura: [getAltura(241).pies, getAltura(241).metros], peso: [getPeso(241).libras, getPeso(241).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '113',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			preevolucion: {
				numeroEspecie: '440',
				metodo: "Subiendo de nivel con objeto Piedra Oval",
				objeto: getEvolveItem('oval stone'),
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 41, grupo: ['Hada'], amistad: 140,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '242',
		dexJohtoGSC: '218',
		dexJohtoHGSS: '223',
		dexSinnohDPPt: '098',
	},
	idiomas: {frances: namesFR[241],aleman: namesDE[241],japones: [namesJP[241][1], namesJP[241][0]],coreano: [namesKO[241][1], namesKO[241][0]]}
},
{
	id: '243',
	nombre: names[242], tipo: ['electric'], clasificacion: 'Pokémon Trueno',
	altura: [getAltura(242).pies, getAltura(242).metros], peso: [getPeso(242).libras, getPeso(242).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 2,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '243',
		dexJohtoGSC: '238',
		dexJohtoHGSS: '243',
	},
	idiomas: {frances: namesFR[242],aleman: namesDE[242],japones: [namesJP[242][1], namesJP[242][0]],coreano: [namesKO[242][1], namesKO[242][0]]}
},
{
	id: '244',
	nombre: names[243], tipo: ['fire'], clasificacion: 'Pokémon Volcán',
	altura: [getAltura(243).pies, getAltura(243).metros], peso: [getPeso(243).libras, getPeso(243).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 1,
		ataque: 2,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '244',
		dexJohtoGSC: '239',
		dexJohtoHGSS: '244',
	},
	idiomas: {frances: namesFR[243],aleman: namesDE[243],japones: [namesJP[243][1], namesJP[243][0]],coreano: [namesKO[243][1], namesKO[243][0]]}
},
{
	id: '245',
	nombre: names[244], tipo: ['water'], clasificacion: 'Pokémon Aurora',
	altura: [getAltura(244).pies, getAltura(244).metros], peso: [getPeso(244).libras, getPeso(244).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 2,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '245',
		dexJohtoGSC: '240',
		dexJohtoHGSS: '245',
	},
	idiomas: {frances: namesFR[244],aleman: namesDE[244],japones: [namesJP[244][1], namesJP[244][0]],coreano: [namesKO[244][1], namesKO[244][0]]}
},
{
	id: '246',
	nombre: names[245], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Piel Roca',
	altura: [getAltura(245).pies, getAltura(245).metros], peso: [getPeso(245).libras, getPeso(245).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '247',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '248',
				metodo: "Subiendo desde nivel 55",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '246',
		dexJohtoGSC: '244',
		dexJohtoHGSS: '249',
		dexUnovaB2W2: '292',
		dexKalosMontana: '102',
	},
	idiomas: {frances: namesFR[245],aleman: namesDE[245],japones: [namesJP[245][1], namesJP[245][0]],coreano: [namesKO[245][1], namesKO[245][0]]}
},
{
	id: '247',
	nombre: names[246], tipo: ['rock', 'ground'], clasificacion: 'Pokémon Caparazón',
	altura: [getAltura(246).pies, getAltura(246).metros], peso: [getPeso(246).libras, getPeso(246).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '246',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '248',
			metodo: "Subiendo desde nivel 55",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 41, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '247',
		dexJohtoGSC: '245',
		dexJohtoHGSS: '250',
		dexUnovaB2W2: '293',
		dexKalosMontana: '103',
	},
	idiomas: {frances: namesFR[246],aleman: namesDE[246],japones: [namesJP[246][1], namesJP[246][0]],coreano: [namesKO[246][1], namesKO[246][0]]}
},
{
	id: '248',
	nombre: names[247], tipo: ['rock', 'dark'], clasificacion: 'Pokémon Coraza',
	altura: [getAltura(247).pies, getAltura(247).metros], peso: [getPeso(247).libras, getPeso(247).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand stream'),habilidadDescripcion: habDescripcion('sand stream')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '247',
			metodo: "Subiendo desde nivel 55",
			preevolucion: {
				numeroEspecie: '246',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 41, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '248',
		dexJohtoGSC: '246',
		dexJohtoHGSS: '251',
		dexUnovaB2W2: '294',
		dexKalosMontana: '104',
	},
	idiomas: {frances: namesFR[247],aleman: namesDE[247],japones: [namesJP[247][1], namesJP[247][0]],coreano: [namesKO[247][1], namesKO[247][0]]}
},
{
	id: '249',
	nombre: names[248], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Buceo',
	altura: [getAltura(248).pies, getAltura(248).metros], peso: [getPeso(248).libras, getPeso(248).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('multiscale'),habilidadDescripcion: habDescripcion('multiscale')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '249',
		dexJohtoGSC: '247',
		dexJohtoHGSS: '252',
	},
	idiomas: {frances: namesFR[248],aleman: namesDE[248],japones: [namesJP[248][1], namesJP[248][0]],coreano: [namesKO[248][1], namesKO[248][0]]}
},
{
	id: '250',
	nombre: names[249], tipo: ['fire', 'flying'], clasificacion: 'Pokémon Arco Iris',
	altura: [getAltura(249).pies, getAltura(249).metros], peso: [getPeso(249).libras, getPeso(249).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '250',
		dexJohtoGSC: '248',
		dexJohtoHGSS: '253',
	},
	idiomas: {frances: namesFR[249],aleman: namesDE[249],japones: [namesJP[249][1], namesJP[249][0]],coreano: [namesKO[249][1], namesKO[249][0]]}
},
{
	id: '251',
	nombre: names[250], tipo: ['psychic', 'grass'], clasificacion: 'Pokémon Viajetiempo',
	altura: [getAltura(250).pies, getAltura(250).metros], peso: [getPeso(250).libras, getPeso(250).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '251',
		dexJohtoGSC: '251',
		dexJohtoHGSS: '256',
	},
	idiomas: {frances: namesFR[250],aleman: namesDE[250],japones: [namesJP[250][1], namesJP[250][0]],coreano: [namesKO[250][1], namesKO[250][0]]}
},
























{
	id: '252',
	nombre: names[251], tipo: ['grass'], clasificacion: 'Pokémon Geco Bosque',
	altura: [getAltura(251).pies, getAltura(251).metros], peso: [getPeso(251).libras, getPeso(251).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '253',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '254',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '252',
		dexHoennRSE: '001',
	},
	idiomas: {frances: namesFR[251],aleman: namesDE[251],japones: [namesJP[251][1], namesJP[251][0]],coreano: [namesKO[251][1], namesKO[251][0]]}
},
{
	id: '253',
	nombre: names[252], tipo: ['grass'], clasificacion: 'Pokémon Geco Bosque',
	altura: [getAltura(252).pies, getAltura(252).metros], peso: [getPeso(252).libras, getPeso(252).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '252',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '254',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '253',
		dexHoennRSE: '002',
	},
	idiomas: {frances: namesFR[252],aleman: namesDE[252],japones: [namesJP[252][1], namesJP[252][0]],coreano: [namesKO[252][1], namesKO[252][0]]}
},
{
	id: '254',
	nombre: names[253], tipo: ['grass'], clasificacion: 'Pokémon Monte',
	altura: [getAltura(253).pies, getAltura(253).metros], peso: [getPeso(253).libras, getPeso(253).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '253',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '252',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Dragón'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '254',
		dexHoennRSE: '003',
	},
	idiomas: {frances: namesFR[253],aleman: namesDE[253],japones: [namesJP[253][1], namesJP[253][0]],coreano: [namesKO[253][1], namesKO[253][0]]}
},
{
	id: '255',
	nombre: names[254], tipo: ['fire'], clasificacion: 'Pokémon Polluelo',
	altura: [getAltura(254).pies, getAltura(254).metros], peso: [getPeso(254).libras, getPeso(254).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '256',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '257',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '255',
		dexHoennRSE: '004',
	},
	idiomas: {frances: namesFR[254],aleman: namesDE[254],japones: [namesJP[254][1], namesJP[254][0]],coreano: [namesKO[254][1], namesKO[254][0]]}
},
{
	id: '256',
	nombre: names[255], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Ave Corral',
	altura: [getAltura(255).pies, getAltura(255).metros], peso: [getPeso(255).libras, getPeso(255).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '255',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '257',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '256',
		dexHoennRSE: '005',
	},
	idiomas: {frances: namesFR[255],aleman: namesDE[255],japones: [namesJP[255][1], namesJP[255][0]],coreano: [namesKO[255][1], namesKO[255][0]]}
},
{
	id: '257',
	nombre: names[256], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Llameante',
	altura: [getAltura(256).pies, getAltura(256).metros], peso: [getPeso(256).libras, getPeso(256).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '256',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '255',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '257',
		dexHoennRSE: '006',
	},
	idiomas: {frances: namesFR[256],aleman: namesDE[256],japones: [namesJP[256][1], namesJP[256][0]],coreano: [namesKO[256][1], namesKO[256][0]]}
},
{
	id: '258',
	nombre: names[257], tipo: ['water'], clasificacion: 'Pokémon Pez Lodo',
	altura: [getAltura(257).pies, getAltura(257).metros], peso: [getPeso(257).libras, getPeso(257).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '259',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '260',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '258',
		dexHoennRSE: '007',
	},
	idiomas: {frances: namesFR[257],aleman: namesDE[257],japones: [namesJP[257][1], namesJP[257][0]],coreano: [namesKO[257][1], namesKO[257][0]]}
},
{
	id: '259',
	nombre: names[258], tipo: ['water', 'ground'], clasificacion: 'Pokémon Pez Lodo',
	altura: [getAltura(258).pies, getAltura(258).metros], peso: [getPeso(258).libras, getPeso(258).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '258',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '260',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '259',
		dexHoennRSE: '008',
	},
	idiomas: {frances: namesFR[258],aleman: namesDE[258],japones: [namesJP[258][1], namesJP[258][0]],coreano: [namesKO[258][1], namesKO[258][0]]}
},
{
	id: '260',
	nombre: names[259], tipo: ['water', 'ground'], clasificacion: 'Pokémon Pez Lodo',
	altura: [getAltura(259).pies, getAltura(259).metros], peso: [getPeso(259).libras, getPeso(259).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '259',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '258',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '260',
		dexHoennRSE: '009',
	},
	idiomas: {frances: namesFR[259],aleman: namesDE[259],japones: [namesJP[259][1], namesJP[259][0]],coreano: [namesKO[259][1], namesKO[259][0]]}
},
{
	id: '261',
	nombre: names[260], tipo: ['dark'], clasificacion: 'Pokémon Mordisco',
	altura: [getAltura(260).pies, getAltura(260).metros], peso: [getPeso(260).libras, getPeso(260).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '262',
			metodo: "Subiendo desde nivel 18",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '261',
		dexHoennRSE: '010',
		dexKalosMontana: '044',
	},
	idiomas: {frances: namesFR[260],aleman: namesDE[260],japones: [namesJP[260][1], namesJP[260][0]],coreano: [namesKO[260][1], namesKO[260][0]]}
},
{
	id: '262',
	nombre: names[261], tipo: ['dark'], clasificacion: 'Pokémon Mordisco',
	altura: [getAltura(261).pies, getAltura(261).metros], peso: [getPeso(261).libras, getPeso(261).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '261',
			metodo: "Subiendo desde nivel 18",
		},
	},
	],
	ratioCaptura: 127,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '262',
		dexHoennRSE: '011',
		dexKalosMontana: '045',
	},
	idiomas: {frances: namesFR[261],aleman: namesDE[261],japones: [namesJP[261][1], namesJP[261][0]],coreano: [namesKO[261][1], namesKO[261][0]]}
},
{
	id: '263',
	nombre: names[262], tipo: ['normal'], clasificacion: 'Pokémon Mapachito',
	altura: [getAltura(262).pies, getAltura(262).metros], peso: [getPeso(262).libras, getPeso(262).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '264',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '263',
		dexHoennRSE: '012',
		dexKalosCentral: '012',
	},
	idiomas: {frances: namesFR[262],aleman: namesDE[262],japones: [namesJP[262][1], namesJP[262][0]],coreano: [namesKO[262][1], namesKO[262][0]]}
},
{
	id: '264',
	nombre: names[263], tipo: ['normal'], clasificacion: 'Pokémon Lanzado',
	altura: [getAltura(263).pies, getAltura(263).metros], peso: [getPeso(263).libras, getPeso(263).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '263',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '264',
		dexHoennRSE: '013',
		dexKalosCentral: '013',
	},
	idiomas: {frances: namesFR[263],aleman: namesDE[263],japones: [namesJP[263][1], namesJP[263][0]],coreano: [namesKO[263][1], namesKO[263][0]]}
},
{
	id: '265',
	nombre: names[264], tipo: ['bug'], clasificacion: 'Pokémon Gusano',
	altura: [getAltura(264).pies, getAltura(264).metros], peso: [getPeso(264).libras, getPeso(264).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '266',
			metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
			evolucion: {
				numeroEspecie: '267',
				metodo: "Subiendo desde nivel 10",
			},
		},
	},
	{
		evolucion: {
			numeroEspecie: '268',
			metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
			evolucion: {
				numeroEspecie: '269',
				metodo: "Subiendo desde nivel 10",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '265',
		dexHoennRSE: '014',
		dexSinnohDPPt: '048',
	},
	idiomas: {frances: namesFR[264],aleman: namesDE[264],japones: [namesJP[264][1], namesJP[264][0]],coreano: [namesKO[264][1], namesKO[264][0]]}
},
{
	id: '266',
	nombre: names[265], tipo: ['bug'], clasificacion: 'Pokémon Capullo',
	altura: [getAltura(265).pies, getAltura(265).metros], peso: [getPeso(265).libras, getPeso(265).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '265',
			metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
		},
		evolucion: {
			numeroEspecie: '267',
			metodo: "Subiendo desde nivel 10",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '265',
			otraEvolucion: {
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
				numeroEspecie: '268',
				evolucion: {
					numeroEspecie: '269',
					metodo: "Subiendo desde nivel 10",
				},
			},
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '266',
		dexHoennRSE: '015',
		dexSinnohDPPt: '049',
	},
	idiomas: {frances: namesFR[265],aleman: namesDE[265],japones: [namesJP[265][1], namesJP[265][0]],coreano: [namesKO[265][1], namesKO[265][0]]}
},
{
	id: '267',
	nombre: names[266], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Mariposa',
	altura: [getAltura(266).pies, getAltura(266).metros], peso: [getPeso(266).libras, getPeso(266).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '266',
			metodo: "Subiendo desde nivel 10",
			preevolucion: {
				numeroEspecie: '265',
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '265',
			otraEvolucion: {
				numeroEspecie: '268',
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
				evolucion: {
					numeroEspecie: '269',
					metodo: "Subiendo desde nivel 10",
				},
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '267',
		dexHoennRSE: '016',
		dexSinnohDPPt: '050',
	},
	idiomas: {frances: namesFR[266],aleman: namesDE[266],japones: [namesJP[266][1], namesJP[266][0]],coreano: [namesKO[266][1], namesKO[266][0]]}
},
{
	id: '268',
	nombre: names[267], tipo: ['bug'], clasificacion: 'Pokémon Capullo',
	altura: [getAltura(267).pies, getAltura(267).metros], peso: [getPeso(267).libras, getPeso(267).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '265',
			otraEvolucion: {
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
				numeroEspecie: '266',
				evolucion: {
					numeroEspecie: '267',
					metodo: "Subiendo desde nivel 10",
				},
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '265',
			metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
		},
		evolucion: {
			numeroEspecie: '269',
			metodo: "Subiendo desde nivel 10",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '268',
		dexHoennRSE: '017',
		dexSinnohDPPt: '051',
	},
	idiomas: {frances: namesFR[267],aleman: namesDE[267],japones: [namesJP[267][1], namesJP[267][0]],coreano: [namesKO[267][1], namesKO[267][0]]}
},
{
	id: '269',
	nombre: names[268], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Polilla Venenosa',
	altura: [getAltura(268).pies, getAltura(268).metros], peso: [getPeso(268).libras, getPeso(268).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '265',
			otraEvolucion: {
				numeroEspecie: '266',
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
				evolucion: {
					numeroEspecie: '267',
					metodo: "Subiendo desde nivel 10",
				},
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '268',
			metodo: "Subiendo desde nivel 10",
			preevolucion: {
				numeroEspecie: '265',
				metodo: "Subiendo desde nivel 7 (Evolución aleatoria)",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '269',
		dexHoennRSE: '018',
		dexSinnohDPPt: '052',
	},
	idiomas: {frances: namesFR[268],aleman: namesDE[268],japones: [namesJP[268][1], namesJP[268][0]],coreano: [namesKO[268][1], namesKO[268][0]]}
},
{
	id: '270',
	nombre: names[269], tipo: ['water', 'grass'], clasificacion: 'Pokémon Alga',
	altura: [getAltura(269).pies, getAltura(269).metros], peso: [getPeso(269).libras, getPeso(269).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '271',
			metodo: "Subiendo desde nivel 14",
			evolucion: {
				numeroEspecie: '272',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Planta', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '270',
		dexHoennRSE: '019',
		dexKalosMontana: '055',
	},
	idiomas: {frances: namesFR[269],aleman: namesDE[269],japones: [namesJP[269][1], namesJP[269][0]],coreano: [namesKO[269][1], namesKO[269][0]]}
},
{
	id: '271',
	nombre: names[270], tipo: ['water', 'grass'], clasificacion: 'Pokémon Alegre',
	altura: [getAltura(270).pies, getAltura(270).metros], peso: [getPeso(270).libras, getPeso(270).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '270',
			metodo: "Subiendo desde nivel 14",
		},
		evolucion: {
			numeroEspecie: '272',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 16, grupo: ['Planta', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '271',
		dexHoennRSE: '020',
		dexKalosMontana: '056',
	},
	idiomas: {frances: namesFR[270],aleman: namesDE[270],japones: [namesJP[270][1], namesJP[270][0]],coreano: [namesKO[270][1], namesKO[270][0]]}
},
{
	id: '272',
	nombre: names[271], tipo: ['water', 'grass'], clasificacion: 'Pokémon Optimista',
	altura: [getAltura(271).pies, getAltura(271).metros], peso: [getPeso(271).libras, getPeso(271).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '271',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
			preevolucion: {
				numeroEspecie: '270',
				metodo: "Subiendo desde nivel 14",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 16, grupo: ['Planta', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '272',
		dexHoennRSE: '021',
		dexKalosMontana: '057',
	},
	idiomas: {frances: namesFR[271],aleman: namesDE[271],japones: [namesJP[271][1], namesJP[271][0]],coreano: [namesKO[271][1], namesKO[271][0]]}
},
{
	id: '273',
	nombre: names[272], tipo: ['grass'], clasificacion: 'Pokémon Bellota',
	altura: [getAltura(272).pies, getAltura(272).metros], peso: [getPeso(272).libras, getPeso(272).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '274',
			metodo: "Subiendo desde nivel 14",
			evolucion: {
				numeroEspecie: '275',
				metodo: "Aplicando Piedra Hoja",
				objeto: getEvolveItem('piedra hoja'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '273',
		dexHoennRSE: '022',
	},
	idiomas: {frances: namesFR[272],aleman: namesDE[272],japones: [namesJP[272][1], namesJP[272][0]],coreano: [namesKO[272][1], namesKO[272][0]]}
},
{
	id: '274',
	nombre: names[273], tipo: ['grass', 'dark'], clasificacion: 'Pokémon Astuto',
	altura: [getAltura(273).pies, getAltura(273).metros], peso: [getPeso(273).libras, getPeso(273).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '273',
			metodo: "Subiendo desde nivel 14",
		},
		evolucion: {
			numeroEspecie: '275',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '274',
		dexHoennRSE: '023',
	},
	idiomas: {frances: namesFR[273],aleman: namesDE[273],japones: [namesJP[273][1], namesJP[273][0]],coreano: [namesKO[273][1], namesKO[273][0]]}
},
{
	id: '275',
	nombre: names[274], tipo: ['grass', 'dark'], clasificacion: 'Pokémon Malvado',
	altura: [getAltura(274).pies, getAltura(274).metros], peso: [getPeso(274).libras, getPeso(274).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('madrugar'),habilidadDescripcion: habDescripcion('madrugar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '274',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
			preevolucion: {
				numeroEspecie: '273',
				metodo: "Subiendo desde nivel 14",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '275',
		dexHoennRSE: '024',
	},
	idiomas: {frances: namesFR[274],aleman: namesDE[274],japones: [namesJP[274][1], namesJP[274][0]],coreano: [namesKO[274][1], namesKO[274][0]]}
},
{
	id: '276',
	nombre: names[275], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Pequebuche',
	altura: [getAltura(275).pies, getAltura(275).metros], peso: [getPeso(275).libras, getPeso(275).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '277',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '276',
		dexHoennRSE: '025',
		dexKalosCosta: '019',
	},
	idiomas: {frances: namesFR[275],aleman: namesDE[275],japones: [namesJP[275][1], namesJP[275][0]],coreano: [namesKO[275][1], namesKO[275][0]]}
},
{
	id: '277',
	nombre: names[276], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Buche',
	altura: [getAltura(276).pies, getAltura(276).metros], peso: [getPeso(276).libras, getPeso(276).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '276',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '277',
		dexHoennRSE: '026',
		dexKalosCosta: '020',
	},
	idiomas: {frances: namesFR[276],aleman: namesDE[276],japones: [namesJP[276][1], namesJP[276][0]],coreano: [namesKO[276][1], namesKO[276][0]]}
},
{
	id: '278',
	nombre: names[277], tipo: ['water', 'flying'], clasificacion: 'Pokémon Gaviota',
	altura: [getAltura(277).pies, getAltura(277).metros], peso: [getPeso(277).libras, getPeso(277).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '279',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Volador', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '278',
		dexHoennRSE: '027',
		dexSinnohDPPt: '119',
		dexUnovaB2W2: '212',
		dexKalosCosta: '017',
	},
	idiomas: {frances: namesFR[277],aleman: namesDE[277],japones: [namesJP[277][1], namesJP[277][0]],coreano: [namesKO[277][1], namesKO[277][0]]}
},
{
	id: '279',
	nombre: names[278], tipo: ['water', 'flying'], clasificacion: 'Pokémon Ave Agua',
	altura: [getAltura(278).pies, getAltura(278).metros], peso: [getPeso(278).libras, getPeso(278).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '278',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Volador', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '279',
		dexHoennRSE: '028',
		dexSinnohDPPt: '120',
		dexUnovaB2W2: '213',
		dexKalosCosta: '018',
	},
	idiomas: {frances: namesFR[278],aleman: namesDE[278],japones: [namesJP[278][1], namesJP[278][0]],coreano: [namesKO[278][1], namesKO[278][0]]}
},
{
	id: '280',
	nombre: names[279], tipo: ['psychic', 'fairy'], clasificacion: 'Pokémon Sensible',
	altura: [getAltura(279).pies, getAltura(279).metros], peso: [getPeso(279).libras, getPeso(279).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('trace'),habilidadDescripcion: habDescripcion('trace')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '281',
			metodo: "Subiendo desde nivel 20",
			evolucion: {
				numeroEspecie: '282',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	{
		evolucion: {
			numeroEspecie: '281',
			metodo: "Subiendo desde nivel 20",
			evolucion: {
				numeroEspecie: '475',
				metodo: "Aplicando Piedra Alba sólo si es Macho",
				condicion: ['male'],
				objeto: getEvolveItem('dawn stone'),
			},
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '280',
		dexHoennRSE: '029',
		dexSinnohPt: '157',
		dexKalosCentral: '064',
	},
	idiomas: {frances: namesFR[279],aleman: namesDE[279],japones: [namesJP[279][1], namesJP[279][0]],coreano: [namesKO[279][1], namesKO[279][0]]}
},
{
	id: '281',
	nombre: names[280], tipo: ['psychic', 'fairy'], clasificacion: 'Pokémon Sensorio',
	altura: [getAltura(280).pies, getAltura(280).metros], peso: [getPeso(280).libras, getPeso(280).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('trace'),habilidadDescripcion: habDescripcion('trace')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '280',
			metodo: "Subiendo desde nivel 20",
		},
		evolucion: {
			numeroEspecie: '282',
			metodo: "Subiendo desde nivel 30",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '280',
			metodo: "Subiendo desde nivel 20",
		},
		evolucion: {
			numeroEspecie: '475',
			metodo: "Aplicando Piedra Alba sólo si es Macho",
			condicion: ['male'],
			objeto: getEvolveItem('dawn stone'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '281',
		dexHoennRSE: '030',
		dexSinnohPt: '158',
		dexKalosCentral: '065',
	},
	idiomas: {frances: namesFR[280],aleman: namesDE[280],japones: [namesJP[280][1], namesJP[280][0]],coreano: [namesKO[280][1], namesKO[280][0]]}
},
{
	id: '282',
	nombre: names[281], tipo: ['psychic', 'fairy'], clasificacion: 'Pokémon Envolvente',
	altura: [getAltura(281).pies, getAltura(281).metros], peso: [getPeso(281).libras, getPeso(281).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('trace'),habilidadDescripcion: habDescripcion('trace')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '281',
			metodo: "Subiendo desde nivel 30",
			preevolucion: {
				numeroEspecie: '280',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '281',
			otraEvolucion: {
				numeroEspecie: '475',
				metodo: "Aplicando Piedra Alba sólo si es Macho",
				condicion: ['male'],
				objeto: getEvolveItem('dawn stone'),
			},
			preevolucion: {
				numeroEspecie: '280',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '282',
		dexHoennRSE: '031',
		dexSinnohPt: '159',
		dexKalosCentral: '066',
	},
	idiomas: {frances: namesFR[281],aleman: namesDE[281],japones: [namesJP[281][1], namesJP[281][0]],coreano: [namesKO[281][1], namesKO[281][0]]}
},
{
	id: '283',
	nombre: names[282], tipo: ['bug', 'water'], clasificacion: 'Pokémon Zapatero',
	altura: [getAltura(282).pies, getAltura(282).metros], peso: [getPeso(282).libras, getPeso(282).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cura Lluvia'),habilidadDescripcion: habDescripcion('Cura Lluvia')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '284',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '283',
		dexHoennRSE: '032',
		dexKalosCentral: '047',
	},
	idiomas: {frances: namesFR[282],aleman: namesDE[282],japones: [namesJP[282][1], namesJP[282][0]],coreano: [namesKO[282][1], namesKO[282][0]]}
},
{
	id: '284',
	nombre: names[283], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Globocular',
	altura: [getAltura(283).pies, getAltura(283).metros], peso: [getPeso(283).libras, getPeso(283).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '283',
			metodo: "Subiendo desde nivel 22",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '284',
		dexHoennRSE: '033',
		dexKalosCentral: '048',
	},
	idiomas: {frances: namesFR[283],aleman: namesDE[283],japones: [namesJP[283][1], namesJP[283][0]],coreano: [namesKO[283][1], namesKO[283][0]]}
},
{
	id: '285',
	nombre: names[284], tipo: ['grass'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(284).pies, getAltura(284).metros], peso: [getPeso(284).libras, getPeso(284).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		{habilidadNombre: habNombre('poison heal'),habilidadDescripcion: habDescripcion('poison heal')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '286',
			metodo: "Subiendo desde nivel 23",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 16, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '285',
		dexHoennRSE: '034',
	},
	idiomas: {frances: namesFR[284],aleman: namesDE[284],japones: [namesJP[284][1], namesJP[284][0]],coreano: [namesKO[284][1], namesKO[284][0]]}
},
{
	id: '286',
	nombre: names[285], tipo: ['grass', 'fight'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(285).pies, getAltura(285).metros], peso: [getPeso(285).libras, getPeso(285).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		{habilidadNombre: habNombre('poison heal'),habilidadDescripcion: habDescripcion('poison heal')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '285',
			metodo: "Subiendo desde nivel 23",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '286',
		dexHoennRSE: '035',
	},
	idiomas: {frances: namesFR[285],aleman: namesDE[285],japones: [namesJP[285][1], namesJP[285][0]],coreano: [namesKO[285][1], namesKO[285][0]]}
},
{
	id: '287',
	nombre: names[286], tipo: ['normal'], clasificacion: 'Pokémon Gandul',
	altura: [getAltura(286).pies, getAltura(286).metros], peso: [getPeso(286).libras, getPeso(286).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('truant'),habilidadDescripcion: habDescripcion('truant')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '288',
			metodo: "Subiendo desde nivel 18",
			evolucion: {
				numeroEspecie: '289',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '287',
		dexHoennRSE: '036',
		dexUnovaB2W2: '276',
	},
	idiomas: {frances: namesFR[286],aleman: namesDE[286],japones: [namesJP[286][1], namesJP[286][0]],coreano: [namesKO[286][1], namesKO[286][0]]}
},
{
	id: '288',
	nombre: names[287], tipo: ['normal'], clasificacion: 'Pokémon Mono Feroz',
	altura: [getAltura(287).pies, getAltura(287).metros], peso: [getPeso(287).libras, getPeso(287).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '287',
			metodo: "Subiendo desde nivel 18",
		},
		evolucion: {
			numeroEspecie: '289',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '288',
		dexHoennRSE: '037',
		dexUnovaB2W2: '277',
	},
	idiomas: {frances: namesFR[287],aleman: namesDE[287],japones: [namesJP[287][1], namesJP[287][0]],coreano: [namesKO[287][1], namesKO[287][0]]}
},
{
	id: '289',
	nombre: names[288], tipo: ['normal'], clasificacion: 'Pokémon Holgazán',
	altura: [getAltura(288).pies, getAltura(288).metros], peso: [getPeso(288).libras, getPeso(288).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('truant'),habilidadDescripcion: habDescripcion('truant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '288',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '287',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '289',
		dexHoennRSE: '038',
		dexUnovaB2W2: '278',
	},
	idiomas: {frances: namesFR[288],aleman: namesDE[288],japones: [namesJP[288][1], namesJP[288][0]],coreano: [namesKO[288][1], namesKO[288][0]]}
},
{
	id: '290',
	nombre: names[289], tipo: ['bug', 'ground'], clasificacion: 'Pokémon Aprendiz',
	altura: [getAltura(289).pies, getAltura(289).metros], peso: [getPeso(289).libras, getPeso(289).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '291',
			metodo: "Subiendo desde nivel 20",
		},
	},
	{
		evolucion: {
			numeroEspecie: '292',
			metodo: "Dejar un espacio libre en el equipo cuando evolucione a Ninjask",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '290',
		dexHoennRSE: '042',
		dexKalosCentral: '111',
	},
	idiomas: {frances: namesFR[289],aleman: namesDE[289],japones: [namesJP[289][1], namesJP[289][0]],coreano: [namesKO[289][1], namesKO[289][0]]}
},
{
	id: '291',
	nombre: names[290], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Ninja',
	altura: [getAltura(290).pies, getAltura(290).metros], peso: [getPeso(290).libras, getPeso(290).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '290',
			metodo: "Subiendo desde nivel 20",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '290',
			otraEvolucion: {
				numeroEspecie: '292',
				metodo: "Dejar un espacio libre en el equipo cuando evolucione a Ninjask",
			},
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '291',
		dexHoennRSE: '043',
		dexKalosCentral: '112',
	},
	idiomas: {frances: namesFR[290],aleman: namesDE[290],japones: [namesJP[290][1], namesJP[290][0]],coreano: [namesKO[290][1], namesKO[290][0]]}
},
{
	id: '292',
	nombre: names[291], tipo: ['bug', 'ghost'], clasificacion: 'Pokémon Muda',
	altura: [getAltura(291).pies, getAltura(291).metros], peso: [getPeso(291).libras, getPeso(291).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('superguarda'),habilidadDescripcion: habDescripcion('superguarda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '290',
			otraEvolucion: {
				numeroEspecie: '291',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '290',
			metodo: "Dejar un espacio libre en el equipo cuando evolucione a Ninjask",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '292',
		dexHoennRSE: '044',
		dexKalosCentral: '113',
	},
	idiomas: {frances: namesFR[291],aleman: namesDE[291],japones: [namesJP[291][1], namesJP[291][0]],coreano: [namesKO[291][1], namesKO[291][0]]}
},
{
	id: '293',
	nombre: names[292], tipo: ['normal'], clasificacion: 'Pokémon Susurro',
	altura: [getAltura(292).pies, getAltura(292).metros], peso: [getPeso(292).libras, getPeso(292).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '294',
			metodo: "Subiendo desde nivel 20",
			evolucion: {
				numeroEspecie: '295',
				metodo: "Subiendo desde nivel 40",
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '293',
		dexHoennRSE: '045',
		dexKalosCentral: '140',
	},
	idiomas: {frances: namesFR[292],aleman: namesDE[292],japones: [namesJP[292][1], namesJP[292][0]],coreano: [namesKO[292][1], namesKO[292][0]]}
},
{
	id: '294',
	nombre: names[293], tipo: ['normal'], clasificacion: 'Pokémon Chillón',
	altura: [getAltura(293).pies, getAltura(293).metros], peso: [getPeso(293).libras, getPeso(293).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '293',
			metodo: "Subiendo desde nivel 20",
		},
		evolucion: {
			numeroEspecie: '295',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '294',
		dexHoennRSE: '046',
		dexKalosCentral: '141',
	},
	idiomas: {frances: namesFR[293],aleman: namesDE[293],japones: [namesJP[293][1], namesJP[293][0]],coreano: [namesKO[293][1], namesKO[293][0]]}
},
{
	id: '295',
	nombre: names[294], tipo: ['normal'], clasificacion: 'Pokémon Escandaloso',
	altura: [getAltura(294).pies, getAltura(294).metros], peso: [getPeso(294).libras, getPeso(294).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '294',
			metodo: "Subiendo desde nivel 40",
			preevolucion: {
				numeroEspecie: '293',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '295',
		dexHoennRSE: '047',
		dexKalosCentral: '142',
	},
	idiomas: {frances: namesFR[294],aleman: namesDE[294],japones: [namesJP[294][1], namesJP[294][0]],coreano: [namesKO[294][1], namesKO[294][0]]}
},
{
	id: '296',
	nombre: names[295], tipo: ['fight'], clasificacion: 'Pokémon Valiente',
	altura: [getAltura(295).pies, getAltura(295).metros], peso: [getPeso(295).libras, getPeso(295).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '297',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '296',
		dexHoennRSE: '048',
		dexKalosCosta: '095',
	},
	idiomas: {frances: namesFR[295],aleman: namesDE[295],japones: [namesJP[295][1], namesJP[295][0]],coreano: [namesKO[295][1], namesKO[295][0]]}
},
{
	id: '297',
	nombre: names[296], tipo: ['fight'], clasificacion: 'Pokémon Empuje',
	altura: [getAltura(296).pies, getAltura(296).metros], peso: [getPeso(296).libras, getPeso(296).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '296',
			metodo: "Subiendo desde nivel 24",
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '297',
		dexHoennRSE: '049',
		dexKalosCosta: '096',
	},
	idiomas: {frances: namesFR[296],aleman: namesDE[296],japones: [namesJP[296][1], namesJP[296][0]],coreano: [namesKO[296][1], namesKO[296][0]]}
},
{
	id: '298',
	nombre: names[297], tipo: ['normal', 'fairy'], clasificacion: 'Pokémon A Topos',
	altura: [getAltura(297).pies, getAltura(297).metros], peso: [getPeso(297).libras, getPeso(297).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('potencia'),habilidadDescripcion: habDescripcion('potencia')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '183',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			evolucion: {
				numeroEspecie: '184',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 150,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 11, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '298',
		dexHoennRSE: '054',
		dexSinnohDPPt: '124',
		dexUnovaB2W2: '030',
		dexKalosCentral: '041',
	},
	idiomas: {frances: namesFR[297],aleman: namesDE[297],japones: [namesJP[297][1], namesJP[297][0]],coreano: [namesKO[297][1], namesKO[297][0]]}
},
{
	id: '299',
	nombre: names[298], tipo: ['rock'], clasificacion: 'Pokémon Brújula',
	altura: [getAltura(298).pies, getAltura(298).metros], peso: [getPeso(298).libras, getPeso(298).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('magnet pull'),habilidadDescripcion: habDescripcion('magnet pull')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '476',
			metodo: "Subiendo de nivel en Monte Corona (D/P/Pt), Cueva Electroroca (B/W/B2/W2), Ruta 13 (X/Y) o Malvalanova (OR/AS)",
			condicion: ['location'],
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '299',
		dexHoennRSE: '060',
		dexSinnohPt: '155',
		dexUnovaB2W2: '164',
		dexKalosCosta: '093',
	},
	idiomas: {frances: namesFR[298],aleman: namesDE[298],japones: [namesJP[298][1], namesJP[298][0]],coreano: [namesKO[298][1], namesKO[298][0]]}
},
{
	id: '300',
	nombre: names[299], tipo: ['normal'], clasificacion: 'Pokémon Gatito',
	altura: [getAltura(299).pies, getAltura(299).metros], peso: [getPeso(299).libras, getPeso(299).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('normalize'),habilidadDescripcion: habDescripcion('normalize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('wonder skin'),habilidadDescripcion: habDescripcion('wonder skin')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '301',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '300',
		dexHoennRSE: '061',
		dexUnovaB2W2: '078',
		dexKalosCentral: '078',
	},
	idiomas: {frances: namesFR[299],aleman: namesDE[299],japones: [namesJP[299][1], namesJP[299][0]],coreano: [namesKO[299][1], namesKO[299][0]]}
},
{
	id: '301',
	nombre: names[300], tipo: ['normal'], clasificacion: 'Pokémon Cursi',
	altura: [getAltura(300).pies, getAltura(300).metros], peso: [getPeso(300).libras, getPeso(300).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('normalize'),habilidadDescripcion: habDescripcion('normalize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('wonder skin'),habilidadDescripcion: habDescripcion('wonder skin')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '300',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ps: 1,
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '301',
		dexHoennRSE: '062',
		dexUnovaB2W2: '079',
		dexKalosCentral: '079',
	},
	idiomas: {frances: namesFR[300],aleman: namesDE[300],japones: [namesJP[300][1], namesJP[300][0]],coreano: [namesKO[300][1], namesKO[300][0]]}
},
{
	id: '302',
	nombre: names[301], tipo: ['dark', 'ghost'], clasificacion: 'Pokémon Oscuridad',
	altura: [getAltura(301).pies, getAltura(301).metros], peso: [getPeso(301).libras, getPeso(301).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('stall'),habilidadDescripcion: habDescripcion('stall')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '302',
		dexHoennRSE: '068',
		dexKalosCosta: '123',
	},
	idiomas: {frances: namesFR[301],aleman: namesDE[301],japones: [namesJP[301][1], namesJP[301][0]],coreano: [namesKO[301][1], namesKO[301][0]]}
},
{
	id: '303',
	nombre: names[302], tipo: ['steel', 'fairy'], clasificacion: 'Pokémon Tramposo',
	altura: [getAltura(302).pies, getAltura(302).metros], peso: [getPeso(302).libras, getPeso(302).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '303',
		dexHoennRSE: '069',
		dexKalosCosta: '063',
	},
	idiomas: {frances: namesFR[302],aleman: namesDE[302],japones: [namesJP[302][1], namesJP[302][0]],coreano: [namesKO[302][1], namesKO[302][0]]}
},
{
	id: '304',
	nombre: names[303], tipo: ['steel', 'rock'], clasificacion: 'Pokémon Coraza Férrea',
	altura: [getAltura(303).pies, getAltura(303).metros], peso: [getPeso(303).libras, getPeso(303).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('heavy metal'),habilidadDescripcion: habDescripcion('heavy metal')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '305',
			metodo: "Subiendo desde nivel 32",
			evolucion: {
				numeroEspecie: '306',
				metodo: "Subiendo desde nivel 42",
			},
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 36, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '304',
		dexHoennRSE: '070',
		dexUnovaB2W2: '166',
		dexKalosMontana: '099',
	},
	idiomas: {frances: namesFR[303],aleman: namesDE[303],japones: [namesJP[303][1], namesJP[303][0]],coreano: [namesKO[303][1], namesKO[303][0]]}
},
{
	id: '305',
	nombre: names[304], tipo: ['steel', 'rock'], clasificacion: 'Pokémon Coraza Férrea',
	altura: [getAltura(304).pies, getAltura(304).metros], peso: [getPeso(304).libras, getPeso(304).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('heavy metal'),habilidadDescripcion: habDescripcion('heavy metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '304',
			metodo: "Subiendo desde nivel 32",
		},
		evolucion: {
			numeroEspecie: '306',
			metodo: "Subiendo desde nivel 42",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 36, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '305',
		dexHoennRSE: '071',
		dexUnovaB2W2: '167',
		dexKalosMontana: '100',
	},
	idiomas: {frances: namesFR[304],aleman: namesDE[304],japones: [namesJP[304][1], namesJP[304][0]],coreano: [namesKO[304][1], namesKO[304][0]]}
},
{
	id: '306',
	nombre: names[305], tipo: ['steel', 'rock'], clasificacion: 'Pokémon Coraza Férrea',
	altura: [getAltura(305).pies, getAltura(305).metros], peso: [getPeso(305).libras, getPeso(305).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('heavy metal'),habilidadDescripcion: habDescripcion('heavy metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '305',
			metodo: "Subiendo desde nivel 42",
			preevolucion: {
				numeroEspecie: '304',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 36, grupo: ['Monstruo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '306',
		dexHoennRSE: '072',
		dexUnovaB2W2: '168',
		dexKalosMontana: '101',
	},
	idiomas: {frances: namesFR[305],aleman: namesDE[305],japones: [namesJP[305][1], namesJP[305][0]],coreano: [namesKO[305][1], namesKO[305][0]]}
},
{
	id: '307',
	nombre: names[306], tipo: ['fight', 'psychic'], clasificacion: 'Pokémon Meditador',
	altura: [getAltura(306).pies, getAltura(306).metros], peso: [getPeso(306).libras, getPeso(306).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pure power'),habilidadDescripcion: habDescripcion('pure power')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '308',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '307',
		dexHoennRSE: '076',
		dexSinnohDPPt: '086',
		dexKalosCentral: '143',
	},
	idiomas: {frances: namesFR[306],aleman: namesDE[306],japones: [namesJP[306][1], namesJP[306][0]],coreano: [namesKO[306][1], namesKO[306][0]]}
},
{
	id: '308',
	nombre: names[307], tipo: ['fight', 'psychic'], clasificacion: 'Pokémon Meditador',
	altura: [getAltura(307).pies, getAltura(307).metros], peso: [getPeso(307).libras, getPeso(307).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pure power'),habilidadDescripcion: habDescripcion('pure power')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '307',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '308',
		dexHoennRSE: '077',
		dexSinnohDPPt: '087',
		dexKalosCentral: '144',
	},
	idiomas: {frances: namesFR[307],aleman: namesDE[307],japones: [namesJP[307][1], namesJP[307][0]],coreano: [namesKO[307][1], namesKO[307][0]]}
},
{
	id: '309',
	nombre: names[308], tipo: ['electric'], clasificacion: 'Pokémon Calambre',
	altura: [getAltura(308).pies, getAltura(308).metros], peso: [getPeso(308).libras, getPeso(308).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '310',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '309',
		dexHoennRSE: '078',
		dexKalosCosta: '073',
	},
	idiomas: {frances: namesFR[308],aleman: namesDE[308],japones: [namesJP[308][1], namesJP[308][0]],coreano: [namesKO[308][1], namesKO[308][0]]}
},
{
	id: '310',
	nombre: names[309], tipo: ['electric'], clasificacion: 'Pokémon Descarga',
	altura: [getAltura(309).pies, getAltura(309).metros], peso: [getPeso(309).libras, getPeso(309).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '309',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '310',
		dexHoennRSE: '079',
		dexKalosCosta: '074',
	},
	idiomas: {frances: namesFR[309],aleman: namesDE[309],japones: [namesJP[309][1], namesJP[309][0]],coreano: [namesKO[309][1], namesKO[309][0]]}
},
{
	id: '311',
	nombre: names[310], tipo: ['electric'], clasificacion: 'Pokémon Ánimo',
	altura: [getAltura(310).pies, getAltura(310).metros], peso: [getPeso(310).libras, getPeso(310).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '311',
		dexHoennRSE: '080',
		dexKalosCentral: '096',
	},
	idiomas: {frances: namesFR[310],aleman: namesDE[310],japones: [namesJP[310][1], namesJP[310][0]],coreano: [namesKO[310][1], namesKO[310][0]]}
},
{
	id: '312',
	nombre: names[311], tipo: ['electric'], clasificacion: 'Pokémon Ánimo',
	altura: [getAltura(311).pies, getAltura(311).metros], peso: [getPeso(311).libras, getPeso(311).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '312',
		dexHoennRSE: '081',
		dexKalosCentral: '097',
	},
	idiomas: {frances: namesFR[311],aleman: namesDE[311],japones: [namesJP[311][1], namesJP[311][0]],coreano: [namesKO[311][1], namesKO[311][0]]}
},
{
	id: '313',
	nombre: names[312], tipo: ['bug'], clasificacion: 'Pokémon Luciérnaga',
	altura: [getAltura(312).pies, getAltura(312).metros], peso: [getPeso(312).libras, getPeso(312).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	ratioCaptura: 150,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho', 'Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '313',
		dexHoennRSE: '086',
		dexKalosCentral: '133',
	},
	idiomas: {frances: namesFR[312],aleman: namesDE[312],japones: [namesJP[312][1], namesJP[312][0]],coreano: [namesKO[312][1], namesKO[312][0]]}
},
{
	id: '314',
	nombre: names[313], tipo: ['bug'], clasificacion: 'Pokémon Luciérnaga',
	altura: [getAltura(313).pies, getAltura(313).metros], peso: [getPeso(313).libras, getPeso(313).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	ratioCaptura: 150,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho', 'Humanoide'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '314',
		dexHoennRSE: '087',
		dexKalosCentral: '134',
	},
	idiomas: {frances: namesFR[313],aleman: namesDE[313],japones: [namesJP[313][1], namesJP[313][0]],coreano: [namesKO[313][1], namesKO[313][0]]}
},
{
	id: '315',
	nombre: names[314], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Espina',
	altura: [getAltura(314).pies, getAltura(314).metros], peso: [getPeso(314).libras, getPeso(314).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '406',
			metodo: "Felicidad máxima, subiendo de nivel en el día",
			condicion: ['happiness', 'daylight'],
		},
		evolucion: {
			numeroEspecie: '407',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
		},
	},
	],
	ratioCaptura: 150,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '315',
		dexHoennRSE: '094',
		dexSinnohDPPt: '026',
		dexUnovaB2W2: '134',
		dexKalosCentral: '072',
	},
	idiomas: {frances: namesFR[314],aleman: namesDE[314],japones: [namesJP[314][1], namesJP[314][0]],coreano: [namesKO[314][1], namesKO[314][0]]}
},
{
	id: '316',
	nombre: names[315], tipo: ['poison'], clasificacion: 'Pokémon Estómago',
	altura: [getAltura(315).pies, getAltura(315).metros], peso: [getPeso(315).libras, getPeso(315).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		{habilidadNombre: habNombre('liquid ooze'),habilidadDescripcion: habDescripcion('liquid ooze')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '317',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '316',
		dexHoennRSE: '095',
		dexKalosCentral: '098',
	},
	idiomas: {frances: namesFR[315],aleman: namesDE[315],japones: [namesJP[315][1], namesJP[315][0]],coreano: [namesKO[315][1], namesKO[315][0]]}
},
{
	id: '317',
	nombre: names[316], tipo: ['poison'], clasificacion: 'Pokémon Bolsa Veneno',
	altura: [getAltura(316).pies, getAltura(316).metros], peso: [getPeso(316).libras, getPeso(316).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		{habilidadNombre: habNombre('liquid ooze'),habilidadDescripcion: habDescripcion('liquid ooze')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '316',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '317',
		dexHoennRSE: '096',
		dexKalosCentral: '099',
	},
	idiomas: {frances: namesFR[316],aleman: namesDE[316],japones: [namesJP[316][1], namesJP[316][0]],coreano: [namesKO[316][1], namesKO[316][0]]}
},
{
	id: '318',
	nombre: names[317], tipo: ['water', 'dark'], clasificacion: 'Pokémon Feroz',
	altura: [getAltura(317).pies, getAltura(317).metros], peso: [getPeso(317).libras, getPeso(317).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '319',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '318',
		dexHoennRSE: '097',
		dexKalosCentral: '055',
	},
	idiomas: {frances: namesFR[317],aleman: namesDE[317],japones: [namesJP[317][1], namesJP[317][0]],coreano: [namesKO[317][1], namesKO[317][0]]}
},
{
	id: '319',
	nombre: names[318], tipo: ['water', 'dark'], clasificacion: 'Pokémon Voraz',
	altura: [getAltura(318).pies, getAltura(318).metros], peso: [getPeso(318).libras, getPeso(318).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '318',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '319',
		dexHoennRSE: '098',
		dexKalosCentral: '056',
	},
	idiomas: {frances: namesFR[318],aleman: namesDE[318],japones: [namesJP[318][1], namesJP[318][0]],coreano: [namesKO[318][1], namesKO[318][0]]}
},
{
	id: '320',
	nombre: names[319], tipo: ['water'], clasificacion: 'Pokémon Ballenabola',
	altura: [getAltura(319).pies, getAltura(319).metros], peso: [getPeso(319).libras, getPeso(319).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '321',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 125,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 41, grupo: ['Campo', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '320',
		dexHoennRSE: '099',
		dexUnovaB2W2: '240',
		dexKalosCosta: '027',
	},
	idiomas: {frances: namesFR[319],aleman: namesDE[319],japones: [namesJP[319][1], namesJP[319][0]],coreano: [namesKO[319][1], namesKO[319][0]]}
},
{
	id: '321',
	nombre: names[320], tipo: ['water'], clasificacion: 'Pokémon Ballenaflot',
	altura: [getAltura(320).pies, getAltura(320).metros], peso: [getPeso(320).libras, getPeso(320).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '320',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 41, grupo: ['Campo', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '321',
		dexHoennRSE: '100',
		dexUnovaB2W2: '241',
		dexKalosCosta: '028',
	},
	idiomas: {frances: namesFR[320],aleman: namesDE[320],japones: [namesJP[320][1], namesJP[320][0]],coreano: [namesKO[320][1], namesKO[320][0]]}
},
{
	id: '322',
	nombre: names[321], tipo: ['fire', 'ground'], clasificacion: 'Pokémon Torpe',
	altura: [getAltura(321).pies, getAltura(321).metros], peso: [getPeso(321).libras, getPeso(321).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('simple'),habilidadDescripcion: habDescripcion('simple')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '323',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '322',
		dexHoennRSE: '101',
		dexUnovaB2W2: '204',
	},
	idiomas: {frances: namesFR[321],aleman: namesDE[321],japones: [namesJP[321][1], namesJP[321][0]],coreano: [namesKO[321][1], namesKO[321][0]]}
},
{
	id: '323',
	nombre: names[322], tipo: ['fire', 'ground'], clasificacion: 'Pokémon Erupción',
	altura: [getAltura(322).pies, getAltura(322).metros], peso: [getPeso(322).libras, getPeso(322).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('solid rock'),habilidadDescripcion: habDescripcion('solid rock')},
		{habilidadNombre: habNombre('magma armor'),habilidadDescripcion: habDescripcion('magma armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '322',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 150,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '323',
		dexHoennRSE: '102',
		dexUnovaB2W2: '205',
	},
	idiomas: {frances: namesFR[322],aleman: namesDE[322],japones: [namesJP[322][1], namesJP[322][0]],coreano: [namesKO[322][1], namesKO[322][0]]}
},
{
	id: '324',
	nombre: names[323], tipo: ['fire'], clasificacion: 'Pokémon Carbón',
	altura: [getAltura(323).pies, getAltura(323).metros], peso: [getPeso(323).libras, getPeso(323).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('white smoke'),habilidadDescripcion: habDescripcion('white smoke')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '324',
		dexHoennRSE: '105',
		dexKalosMontana: '096',
	},
	idiomas: {frances: namesFR[323],aleman: namesDE[323],japones: [namesJP[323][1], namesJP[323][0]],coreano: [namesKO[323][1], namesKO[323][0]]}
},
{
	id: '325',
	nombre: names[324], tipo: ['psychic'], clasificacion: 'Pokémon Saltarín',
	altura: [getAltura(324).pies, getAltura(324).metros], peso: [getPeso(324).libras, getPeso(324).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '326',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '325',
		dexHoennRSE: '110',
		dexUnovaB2W2: '206',
		dexKalosCosta: '007',
	},
	idiomas: {frances: namesFR[324],aleman: namesDE[324],japones: [namesJP[324][1], namesJP[324][0]],coreano: [namesKO[324][1], namesKO[324][0]]}
},
{
	id: '326',
	nombre: names[325], tipo: ['psychic'], clasificacion: 'Pokémon Manipulador',
	altura: [getAltura(325).pies, getAltura(325).metros], peso: [getPeso(325).libras, getPeso(325).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '325',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '326',
		dexHoennRSE: '111',
		dexUnovaB2W2: '207',
		dexKalosCosta: '008',
	},
	idiomas: {frances: namesFR[325],aleman: namesDE[325],japones: [namesJP[325][1], namesJP[325][0]],coreano: [namesKO[325][1], namesKO[325][0]]}
},
{
	id: '327',
	nombre: names[326], tipo: ['normal'], clasificacion: 'Pokémon Panda Topos',
	altura: [getAltura(326).pies, getAltura(326).metros], peso: [getPeso(326).libras, getPeso(326).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
	},
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '327',
		dexHoennRSE: '114',
		dexKalosMontana: '131',
	},
	idiomas: {frances: namesFR[326],aleman: namesDE[326],japones: [namesJP[326][1], namesJP[326][0]],coreano: [namesKO[326][1], namesKO[326][0]]}
},
{
	id: '328',
	nombre: names[327], tipo: ['ground'], clasificacion: 'Pokémon Hormigaleón',
	altura: [getAltura(327).pies, getAltura(327).metros], peso: [getPeso(327).libras, getPeso(327).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('arena trap'),habilidadDescripcion: habDescripcion('arena trap')},
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '329',
			metodo: "Subiendo desde nivel 35",
			evolucion: {
				numeroEspecie: '330',
				metodo: "Subiendo desde nivel 45",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '328',
		dexHoennRSE: '116',
		dexUnovaB2W2: '121',
		dexKalosMontana: '003',
	},
	idiomas: {frances: namesFR[327],aleman: namesDE[327],japones: [namesJP[327][1], namesJP[327][0]],coreano: [namesKO[327][1], namesKO[327][0]]}
},
{
	id: '329',
	nombre: names[328], tipo: ['ground', 'dragon'], clasificacion: 'Pokémon Vibrante',
	altura: [getAltura(328).pies, getAltura(328).metros], peso: [getPeso(328).libras, getPeso(328).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '328',
			metodo: "Subiendo desde nivel 35",
		},
		evolucion: {
			numeroEspecie: '330',
			metodo: "Subiendo desde nivel 45",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '329',
		dexHoennRSE: '117',
		dexUnovaB2W2: '122',
		dexKalosMontana: '004',
	},
	idiomas: {frances: namesFR[328],aleman: namesDE[328],japones: [namesJP[328][1], namesJP[328][0]],coreano: [namesKO[328][1], namesKO[328][0]]}
},
{
	id: '330',
	nombre: names[329], tipo: ['ground', 'dragon'], clasificacion: 'Pokémon Místico',
	altura: [getAltura(329).pies, getAltura(329).metros], peso: [getPeso(329).libras, getPeso(329).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '329',
			metodo: "Subiendo desde nivel 45",
			preevolucion: {
				numeroEspecie: '328',
				metodo: "Subiendo desde nivel 35",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '330',
		dexHoennRSE: '118',
		dexUnovaB2W2: '123',
		dexKalosMontana: '005',
	},
	idiomas: {frances: namesFR[329],aleman: namesDE[329],japones: [namesJP[329][1], namesJP[329][0]],coreano: [namesKO[329][1], namesKO[329][0]]}
},
{
	id: '331',
	nombre: names[330], tipo: ['grass'], clasificacion: 'Pokémon Cactus',
	altura: [getAltura(330).pies, getAltura(330).metros], peso: [getPeso(330).libras, getPeso(330).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '332',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide', 'Planta'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '331',
		dexHoennRSE: '119',
	},
	idiomas: {frances: namesFR[330],aleman: namesDE[330],japones: [namesJP[330][1], namesJP[330][0]],coreano: [namesKO[330][1], namesKO[330][0]]}
},
{
	id: '332',
	nombre: names[331], tipo: ['grass', 'dark'], clasificacion: 'Pokémon Espantajo',
	altura: [getAltura(331).pies, getAltura(331).metros], peso: [getPeso(331).libras, getPeso(331).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '331',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide', 'Planta'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '332',
		dexHoennRSE: '120',
	},
	idiomas: {frances: namesFR[331],aleman: namesDE[331],japones: [namesJP[331][1], namesJP[331][0]],coreano: [namesKO[331][1], namesKO[331][0]]}
},
{
	id: '333',
	nombre: names[332], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Ave Algodón',
	altura: [getAltura(332).pies, getAltura(332).metros], peso: [getPeso(332).libras, getPeso(332).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '334',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '333',
		dexHoennRSE: '121',
		dexSinnohPt: '171',
		dexUnovaB2W2: '246',
		dexKalosMontana: '139',
	},
	idiomas: {frances: namesFR[332],aleman: namesDE[332],japones: [namesJP[332][1], namesJP[332][0]],coreano: [namesKO[332][1], namesKO[332][0]]}
},
{
	id: '334',
	nombre: names[333], tipo: ['dragon', 'flying'], clasificacion: 'Pokémon Cantor',
	altura: [getAltura(333).pies, getAltura(333).metros], peso: [getPeso(333).libras, getPeso(333).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '333',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '334',
		dexHoennRSE: '122',
		dexSinnohPt: '172',
		dexUnovaB2W2: '247',
		dexKalosMontana: '140',
	},
	idiomas: {frances: namesFR[333],aleman: namesDE[333],japones: [namesJP[333][1], namesJP[333][0]],coreano: [namesKO[333][1], namesKO[333][0]]}
},
{
	id: '335',
	nombre: names[334], tipo: ['normal'], clasificacion: 'Pokémon Gato Hurón',
	altura: [getAltura(334).pies, getAltura(334).metros], peso: [getPeso(334).libras, getPeso(334).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inmunidad'),habilidadDescripcion: habDescripcion('inmunidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('toxic boost'),habilidadDescripcion: habDescripcion('toxic boost')},
		],
	},
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '335',
		dexHoennRSE: '123',
		dexUnovaB2W2: '186',
		dexKalosCosta: '005',
	},
	idiomas: {frances: namesFR[334],aleman: namesDE[334],japones: [namesJP[334][1], namesJP[334][0]],coreano: [namesKO[334][1], namesKO[334][0]]}
},
{
	id: '336',
	nombre: names[335], tipo: ['poison'], clasificacion: 'Pokémon Colmillos',
	altura: [getAltura(335).pies, getAltura(335).metros], peso: [getPeso(335).libras, getPeso(335).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Dragón'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '336',
		dexHoennRSE: '124',
		dexUnovaB2W2: '187',
		dexKalosCosta: '006',
	},
	idiomas: {frances: namesFR[335],aleman: namesDE[335],japones: [namesJP[335][1], namesJP[335][0]],coreano: [namesKO[335][1], namesKO[335][0]]}
},
{
	id: '337',
	nombre: names[336], tipo: ['rock', 'psychic'], clasificacion: 'Pokémon Meteorito',
	altura: [getAltura(336).pies, getAltura(336).metros], peso: [getPeso(336).libras, getPeso(336).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '337',
		dexHoennRSE: '125',
		dexUnovaB2W2: '214',
		dexKalosCosta: '012',
	},
	idiomas: {frances: namesFR[336],aleman: namesDE[336],japones: [namesJP[336][1], namesJP[336][0]],coreano: [namesKO[336][1], namesKO[336][0]]}
},
{
	id: '338',
	nombre: names[337], tipo: ['rock', 'psychic'], clasificacion: 'Pokémon Meteorito',
	altura: [getAltura(337).pies, getAltura(337).metros], peso: [getPeso(337).libras, getPeso(337).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '338',
		dexHoennRSE: '126',
		dexUnovaB2W2: '215',
		dexKalosCosta: '013',
	},
	idiomas: {frances: namesFR[337],aleman: namesDE[337],japones: [namesJP[337][1], namesJP[337][0]],coreano: [namesKO[337][1], namesKO[337][0]]}
},
{
	id: '339',
	nombre: names[338], tipo: ['water', 'ground'], clasificacion: 'Pokémon Bigotudo',
	altura: [getAltura(338).pies, getAltura(338).metros], peso: [getPeso(338).libras, getPeso(338).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '340',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '339',
		dexHoennRSE: '127',
		dexSinnohDPPt: '080',
		dexKalosMontana: '040',
	},
	idiomas: {frances: namesFR[338],aleman: namesDE[338],japones: [namesJP[338][1], namesJP[338][0]],coreano: [namesKO[338][1], namesKO[338][0]]}
},
{
	id: '340',
	nombre: names[339], tipo: ['water', 'ground'], clasificacion: 'Pokémon Bigotudo',
	altura: [getAltura(339).pies, getAltura(339).metros], peso: [getPeso(339).libras, getPeso(339).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '339',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '340',
		dexHoennRSE: '128',
		dexSinnohDPPt: '081',
		dexKalosMontana: '041',
	},
	idiomas: {frances: namesFR[339],aleman: namesDE[339],japones: [namesJP[339][1], namesJP[339][0]],coreano: [namesKO[339][1], namesKO[339][0]]}
},
{
	id: '341',
	nombre: names[340], tipo: ['water'], clasificacion: 'Pokémon Rufián',
	altura: [getAltura(340).pies, getAltura(340).metros], peso: [getPeso(340).libras, getPeso(340).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '342',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 205,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '341',
		dexHoennRSE: '129',
		dexUnovaB2W2: '279',
		dexKalosCentral: '051',
	},
	idiomas: {frances: namesFR[340],aleman: namesDE[340],japones: [namesJP[340][1], namesJP[340][0]],coreano: [namesKO[340][1], namesKO[340][0]]}
},
{
	id: '342',
	nombre: names[341], tipo: ['water', 'dark'], clasificacion: 'Pokémon Granuja',
	altura: [getAltura(341).pies, getAltura(341).metros], peso: [getPeso(341).libras, getPeso(341).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '341',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 155,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '342',
		dexHoennRSE: '130',
		dexUnovaB2W2: '280',
		dexKalosCentral: '052',
	},
	idiomas: {frances: namesFR[341],aleman: namesDE[341],japones: [namesJP[341][1], namesJP[341][0]],coreano: [namesKO[341][1], namesKO[341][0]]}
},
{
	id: '343',
	nombre: names[342], tipo: ['ground', 'psychic'], clasificacion: 'Pokémon Muñeco Barro',
	altura: [getAltura(342).pies, getAltura(342).metros], peso: [getPeso(342).libras, getPeso(342).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '344',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '343',
		dexHoennRSE: '131',
		dexUnovaB2W2: '169',
	},
	idiomas: {frances: namesFR[342],aleman: namesDE[342],japones: [namesJP[342][1], namesJP[342][0]],coreano: [namesKO[342][1], namesKO[342][0]]}
},
{
	id: '344',
	nombre: names[343], tipo: ['ground', 'psychic'], clasificacion: 'Pokémon Muñeco Barro',
	altura: [getAltura(343).pies, getAltura(343).metros], peso: [getPeso(343).libras, getPeso(343).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '343',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '344',
		dexHoennRSE: '132',
		dexUnovaB2W2: '170',
	},
	idiomas: {frances: namesFR[343],aleman: namesDE[343],japones: [namesJP[343][1], namesJP[343][0]],coreano: [namesKO[343][1], namesKO[343][0]]}
},
{
	id: '345',
	nombre: names[344], tipo: ['rock', 'grass'], clasificacion: 'Pokémon Lila Mar',
	altura: [getAltura(344).pies, getAltura(344).metros], peso: [getPeso(344).libras, getPeso(344).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ventosas'),habilidadDescripcion: habDescripcion('ventosas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '346',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 31, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '345',
		dexHoennRSE: '133',
	},
	idiomas: {frances: namesFR[344],aleman: namesDE[344],japones: [namesJP[344][1], namesJP[344][0]],coreano: [namesKO[344][1], namesKO[344][0]]}
},
{
	id: '346',
	nombre: names[345], tipo: ['rock', 'grass'], clasificacion: 'Pokémon Percebe',
	altura: [getAltura(345).pies, getAltura(345).metros], peso: [getPeso(345).libras, getPeso(345).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ventosas'),habilidadDescripcion: habDescripcion('ventosas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '345',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 31, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '346',
		dexHoennRSE: '134',
	},
	idiomas: {frances: namesFR[345],aleman: namesDE[345],japones: [namesJP[345][1], namesJP[345][0]],coreano: [namesKO[345][1], namesKO[345][0]]}
},
{
	id: '347',
	nombre: names[346], tipo: ['rock', 'bug'], clasificacion: 'Pokémon Camarón',
	altura: [getAltura(346).pies, getAltura(346).metros], peso: [getPeso(346).libras, getPeso(346).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '348',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 31, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '347',
		dexHoennRSE: '135',
	},
	idiomas: {frances: namesFR[346],aleman: namesDE[346],japones: [namesJP[346][1], namesJP[346][0]],coreano: [namesKO[346][1], namesKO[346][0]]}
},
{
	id: '348',
	nombre: names[347], tipo: ['rock', 'bug'], clasificacion: 'Pokémon Armadura',
	altura: [getAltura(347).pies, getAltura(347).metros], peso: [getPeso(347).libras, getPeso(347).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '347',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '348',
		dexHoennRSE: '136',
	},
	idiomas: {frances: namesFR[347],aleman: namesDE[347],japones: [namesJP[347][1], namesJP[347][0]],coreano: [namesKO[347][1], namesKO[347][0]]}
},
{
	id: '349',
	nombre: names[348], tipo: ['water'], clasificacion: 'Pokémon Pez',
	altura: [getAltura(348).pies, getAltura(348).metros], peso: [getPeso(348).libras, getPeso(348).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '350',
			metodo: "Belleza al máximo, subiendo de nivel (RSE, DPPt, ORAS)",
			condicion: ['beautiful'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '350',
			metodo: "Intercambio con objeto Escama Bella (BW, B2W2, XY)",
			condicion: ['trade'],
			objeto: getEvolveItem('prism scale'),
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '349',
		dexHoennRSE: '140',
		dexSinnohDPPt: '138',
	},
	idiomas: {frances: namesFR[348],aleman: namesDE[348],japones: [namesJP[348][1], namesJP[348][0]],coreano: [namesKO[348][1], namesKO[348][0]]}
},
{
	id: '350',
	nombre: names[349], tipo: ['water'], clasificacion: 'Pokémon Tierno',
	altura: [getAltura(349).pies, getAltura(349).metros], peso: [getPeso(349).libras, getPeso(349).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		{habilidadNombre: habNombre('marvel scale'),habilidadDescripcion: habDescripcion('marvel scale')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '349',
			metodo: "Belleza al máximo, subiendo de nivel (RSE, DPPt, ORAS)",
			condicion: ['beautiful'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '349',
			metodo: "Intercambio con objeto Escama Bella (BW, B2W2, XY)",
			condicion: ['trade'],
			objeto: getEvolveItem('prism scale'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '350',
		dexHoennRSE: '141',
		dexSinnohDPPt: '139',
	},
	idiomas: {frances: namesFR[349],aleman: namesDE[349],japones: [namesJP[349][1], namesJP[349][0]],coreano: [namesKO[349][1], namesKO[349][0]]}
},
{
	id: '351',
	nombre: names[350], tipo: ['normal'], clasificacion: 'Pokémon Clima',
	altura: [getAltura(350).pies, getAltura(350).metros], peso: [getPeso(350).libras, getPeso(350).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('forecast'),habilidadDescripcion: habDescripcion('forecast')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo', 'Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '351',
		dexHoennRSE: '142',
		dexUnovaB2W2: '163',
	},
	idiomas: {frances: namesFR[350],aleman: namesDE[350],japones: [namesJP[350][1], namesJP[350][0]],coreano: [namesKO[350][1], namesKO[350][0]]}
},
{
	id: '352',
	nombre: names[351], tipo: ['normal'], clasificacion: 'Pokémon Camaleónico',
	altura: [getAltura(351).pies, getAltura(351).metros], peso: [getPeso(351).libras, getPeso(351).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cambio color'),habilidadDescripcion: habDescripcion('cambio color')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('protean'),habilidadDescripcion: habDescripcion('protean')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '352',
		dexHoennRSE: '145',
		dexKalosCentral: '116',
	},
	idiomas: {frances: namesFR[351],aleman: namesDE[351],japones: [namesJP[351][1], namesJP[351][0]],coreano: [namesKO[351][1], namesKO[351][0]]}
},
{
	id: '353',
	nombre: names[352], tipo: ['ghost'], clasificacion: 'Pokémon Títere',
	altura: [getAltura(352).pies, getAltura(352).metros], peso: [getPeso(352).libras, getPeso(352).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cursed body'),habilidadDescripcion: habDescripcion('cursed body')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '354',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '353',
		dexHoennRSE: '146',
		dexUnovaB2W2: '210',
		dexKalosMontana: '122',
	},
	idiomas: {frances: namesFR[352],aleman: namesDE[352],japones: [namesJP[352][1], namesJP[352][0]],coreano: [namesKO[352][1], namesKO[352][0]]}
},
{
	id: '354',
	nombre: names[353], tipo: ['ghost'], clasificacion: 'Pokémon Marioneta',
	altura: [getAltura(353).pies, getAltura(353).metros], peso: [getPeso(353).libras, getPeso(353).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cursed body'),habilidadDescripcion: habDescripcion('cursed body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '353',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '354',
		dexHoennRSE: '147',
		dexUnovaB2W2: '211',
		dexKalosMontana: '123',
	},
	idiomas: {frances: namesFR[353],aleman: namesDE[353],japones: [namesJP[353][1], namesJP[353][0]],coreano: [namesKO[353][1], namesKO[353][0]]}
},
{
	id: '355',
	nombre: names[354], tipo: ['ghost'], clasificacion: 'Pokémon Réquiem',
	altura: [getAltura(354).pies, getAltura(354).metros], peso: [getPeso(354).libras, getPeso(354).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '356',
			metodo: "Subiendo desde nivel 37",
			evolucion: {
				numeroEspecie: '477',
				metodo: "Intercambio con objeto Telaterrible",
				condicion: ['trade'],
				objeto: getEvolveItem('reaper cloth'),
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '355',
		dexHoennRSE: '148',
		dexSinnohPt: '189',
	},
	idiomas: {frances: namesFR[354],aleman: namesDE[354],japones: [namesJP[354][1], namesJP[354][0]],coreano: [namesKO[354][1], namesKO[354][0]]}
},
{
	id: '356',
	nombre: names[355], tipo: ['ghost'], clasificacion: 'Pokémon Atrayente',
	altura: [getAltura(355).pies, getAltura(355).metros], peso: [getPeso(355).libras, getPeso(355).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '355',
			metodo: "Subiendo desde nivel 37",
		},
		evolucion: {
			numeroEspecie: '477',
			metodo: "Intercambio con objeto Telaterrible",
			condicion: ['trade'],
			objeto: getEvolveItem('reaper cloth'),
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '356',
		dexHoennRSE: '149',
		dexSinnohPt: '190',
	},
	idiomas: {frances: namesFR[355],aleman: namesDE[355],japones: [namesJP[355][1], namesJP[355][0]],coreano: [namesKO[355][1], namesKO[355][0]]}
},
{
	id: '357',
	nombre: names[356], tipo: ['grass', 'flying'], clasificacion: 'Pokémon Fruto',
	altura: [getAltura(356).pies, getAltura(356).metros], peso: [getPeso(356).libras, getPeso(356).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cosecha'),habilidadDescripcion: habDescripcion('cosecha')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 26, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '357',
		dexHoennRSE: '150',
		dexSinnohPt: '185',
		dexUnovaB2W2: '288',
	},
	idiomas: {frances: namesFR[356],aleman: namesDE[356],japones: [namesJP[356][1], namesJP[356][0]],coreano: [namesKO[356][1], namesKO[356][0]]}
},
{
	id: '358',
	nombre: names[357], tipo: ['psychic'], clasificacion: 'Pokémon Sonido Aire',
	altura: [getAltura(357).pies, getAltura(357).metros], peso: [getPeso(357).libras, getPeso(357).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '433',
			metodo: "Felicidad máxima, subiendo de nivel en la noche",
			condicion: ['happiness', 'night'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '358',
		dexHoennRSE: '151',
		dexSinnohDPPt: '083',
		dexKalosCosta: '112',
	},
	idiomas: {frances: namesFR[357],aleman: namesDE[357],japones: [namesJP[357][1], namesJP[357][0]],coreano: [namesKO[357][1], namesKO[357][0]]}
},
{
	id: '359',
	nombre: names[358], tipo: ['dark'], clasificacion: 'Pokémon Catástrofe',
	altura: [getAltura(358).pies, getAltura(358).metros], peso: [getPeso(358).libras, getPeso(358).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Campo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '359',
		dexHoennRSE: '152',
		dexSinnohPt: '209',
		dexUnovaB2W2: '216',
		dexKalosCosta: '009',
	},
	idiomas: {frances: namesFR[358],aleman: namesDE[358],japones: [namesJP[358][1], namesJP[358][0]],coreano: [namesKO[358][1], namesKO[358][0]]}
},
{
	id: '360',
	nombre: names[359], tipo: ['psychic'], clasificacion: 'Pokémon Radiante',
	altura: [getAltura(359).pies, getAltura(359).metros], peso: [getPeso(359).libras, getPeso(359).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '202',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 125,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '360',
		dexHoennRSE: '160',
		dexKalosCosta: '118',
	},
	idiomas: {frances: namesFR[359],aleman: namesDE[359],japones: [namesJP[359][1], namesJP[359][0]],coreano: [namesKO[359][1], namesKO[359][0]]}
},
{
	id: '361',
	nombre: names[360], tipo: ['ice'], clasificacion: 'Pokémon Gorro Nieve',
	altura: [getAltura(360).pies, getAltura(360).metros], peso: [getPeso(360).libras, getPeso(360).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '362',
			metodo: "Subiendo desde nivel 42",
		},
	},
	{
		evolucion: {
			numeroEspecie: '478',
			metodo: "Aplicando Piedra Alba sólo si es Hembra",
			condicion: ['female'],
			objeto: getEvolveItem('dawn stone'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '361',
		dexHoennRSE: '171',
		dexSinnohPt: '206',
	},
	idiomas: {frances: namesFR[360],aleman: namesDE[360],japones: [namesJP[360][1], namesJP[360][0]],coreano: [namesKO[360][1], namesKO[360][0]]}
},
{
	id: '362',
	nombre: names[361], tipo: ['ice'], clasificacion: 'Pokémon Cara',
	altura: [getAltura(361).pies, getAltura(361).metros], peso: [getPeso(361).libras, getPeso(361).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '361',
			metodo: "Subiendo desde nivel 42",
		},
	},
	{
		preevolucion: {
			numeroEspecie: '361',
			otraEvolucion: {
				numeroEspecie: '478',
				metodo: "Aplicando Piedra Alba sólo si es Hembra",
				condicion: ['female'],
				objeto: getEvolveItem('dawn stone'),
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '362',
		dexHoennRSE: '172',
		dexSinnohPt: '207',
	},
	idiomas: {frances: namesFR[361],aleman: namesDE[361],japones: [namesJP[361][1], namesJP[361][0]],coreano: [namesKO[361][1], namesKO[361][0]]}
},
{
	id: '363',
	nombre: names[362], tipo: ['ice', 'water'], clasificacion: 'Pokémon Aplauso',
	altura: [getAltura(362).pies, getAltura(362).metros], peso: [getPeso(362).libras, getPeso(362).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '364',
			metodo: "Subiendo desde nivel 32",
			evolucion: {
				numeroEspecie: '365',
				metodo: "Subiendo desde nivel 44",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '363',
		dexHoennRSE: '173',
		dexUnovaB2W2: '243',
	},
	idiomas: {frances: namesFR[362],aleman: namesDE[362],japones: [namesJP[362][1], namesJP[362][0]],coreano: [namesKO[362][1], namesKO[362][0]]}
},
{
	id: '364',
	nombre: names[363], tipo: ['ice', 'water'], clasificacion: 'Pokémon Rodabola',
	altura: [getAltura(363).pies, getAltura(363).metros], peso: [getPeso(363).libras, getPeso(363).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '363',
			metodo: "Subiendo desde nivel 32",
		},
		evolucion: {
			numeroEspecie: '365',
			metodo: "Subiendo desde nivel 44",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '364',
		dexHoennRSE: '174',
		dexUnovaB2W2: '244',
	},
	idiomas: {frances: namesFR[363],aleman: namesDE[363],japones: [namesJP[363][1], namesJP[363][0]],coreano: [namesKO[363][1], namesKO[363][0]]}
},
{
	id: '365',
	nombre: names[364], tipo: ['ice', 'water'], clasificacion: 'Pokémon Rompehielo',
	altura: [getAltura(364).pies, getAltura(364).metros], peso: [getPeso(364).libras, getPeso(364).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '364',
			metodo: "Subiendo desde nivel 44",
			preevolucion: {
				numeroEspecie: '363',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '365',
		dexHoennRSE: '175',
		dexUnovaB2W2: '245',
	},
	idiomas: {frances: namesFR[364],aleman: namesDE[364],japones: [namesJP[364][1], namesJP[364][0]],coreano: [namesKO[364][1], namesKO[364][0]]}
},
{
	id: '366',
	nombre: names[365], tipo: ['water'], clasificacion: 'Pokémon Bivalvo',
	altura: [getAltura(365).pies, getAltura(365).metros], peso: [getPeso(365).libras, getPeso(365).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '367',
			metodo: "Intercambio con objeto Diente Marino",
			condicion: ['trade'],
			objeto: getEvolveItem('deep sea tooth'),
		},
	},
	{
		evolucion: {
			numeroEspecie: '368',
			metodo: "Intercambio con objeto Escama Marina",
			condicion: ['trade'],
			objeto: getEvolveItem('deep sea scale'),
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '366',
		dexHoennRSE: '176',
		dexKalosCosta: '141',
	},
	idiomas: {frances: namesFR[365],aleman: namesDE[365],japones: [namesJP[365][1], namesJP[365][0]],coreano: [namesKO[365][1], namesKO[365][0]]}
},
{
	id: '367',
	nombre: names[366], tipo: ['water'], clasificacion: 'Pokémon Abisal',
	altura: [getAltura(366).pies, getAltura(366).metros], peso: [getPeso(366).libras, getPeso(366).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '366',
			metodo: "Intercambio con objeto Diente Marino",
			condicion: ['trade'],
			objeto: getEvolveItem('deep sea tooth'),
		},
	},
	{
		preevolucion: {
			numeroEspecie: '366',
			otraEvolucion: {
				numeroEspecie: '368',
				metodo: "Intercambio con objeto Escama Marina",
				condicion: ['trade'],
				objeto: getEvolveItem('deep sea scale'),
			},
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '367',
		dexHoennRSE: '177',
		dexKalosCosta: '142',
	},
	idiomas: {frances: namesFR[366],aleman: namesDE[366],japones: [namesJP[366][1], namesJP[366][0]],coreano: [namesKO[366][1], namesKO[366][0]]}
},
{
	id: '368',
	nombre: names[367], tipo: ['water'], clasificacion: 'Pokémon Mar Del Sur',
	altura: [getAltura(367).pies, getAltura(367).metros], peso: [getPeso(367).libras, getPeso(367).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '366',
			otraEvolucion: {
				numeroEspecie: '367',
				metodo: "Intercambio con objeto Diente Marino",
				condicion: ['trade'],
				objeto: getEvolveItem('deep sea tooth'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '366',
			metodo: "Intercambio con objeto Escama Marina",
			condicion: ['trade'],
			objeto: getEvolveItem('deep sea scale'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '368',
		dexHoennRSE: '178',
		dexKalosCosta: '143',
	},
	idiomas: {frances: namesFR[367],aleman: namesDE[367],japones: [namesJP[367][1], namesJP[367][0]],coreano: [namesKO[367][1], namesKO[367][0]]}
},
{
	id: '369',
	nombre: names[368], tipo: ['water', 'rock'], clasificacion: 'Pokémon Longevo',
	altura: [getAltura(368).pies, getAltura(368).metros], peso: [getPeso(368).libras, getPeso(368).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
	},
	ratioCaptura: 25,
	valoresEsfuerzo: {
		ps: 1,
		defensa: 1,
	},
	pasos: 255 * 41, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '369',
		dexHoennRSE: '179',
		dexKalosCosta: '042',
	},
	idiomas: {frances: namesFR[368],aleman: namesDE[368],japones: [namesJP[368][1], namesJP[368][0]],coreano: [namesKO[368][1], namesKO[368][0]]}
},
{
	id: '370',
	nombre: names[369], tipo: ['water'], clasificacion: 'Pokémon Cita',
	altura: [getAltura(369).pies, getAltura(369).metros], peso: [getPeso(369).libras, getPeso(369).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	ratioCaptura: 225,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '370',
		dexHoennRSE: '183',
		dexKalosCosta: '029',
	},
	idiomas: {frances: namesFR[369],aleman: namesDE[369],japones: [namesJP[369][1], namesJP[369][0]],coreano: [namesKO[369][1], namesKO[369][0]]}
},
{
	id: '371',
	nombre: names[370], tipo: ['dragon'], clasificacion: 'Pokémon Cabeza Roca',
	altura: [getAltura(370).pies, getAltura(370).metros], peso: [getPeso(370).libras, getPeso(370).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '372',
			metodo: "Subiendo desde nivel 30",
			evolucion: {
				numeroEspecie: '373',
				metodo: "Subiendo desde nivel 50",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '371',
		dexHoennRSE: '187',
		dexKalosCosta: '014',
	},
	idiomas: {frances: namesFR[370],aleman: namesDE[370],japones: [namesJP[370][1], namesJP[370][0]],coreano: [namesKO[370][1], namesKO[370][0]]}
},
{
	id: '372',
	nombre: names[371], tipo: ['dragon'], clasificacion: 'Pokémon Resistencia',
	altura: [getAltura(371).pies, getAltura(371).metros], peso: [getPeso(371).libras, getPeso(371).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '371',
			metodo: "Subiendo desde nivel 30",
		},
		evolucion: {
			numeroEspecie: '373',
			metodo: "Subiendo desde nivel 50",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '372',
		dexHoennRSE: '188',
		dexKalosCosta: '015',
	},
	idiomas: {frances: namesFR[371],aleman: namesDE[371],japones: [namesJP[371][1], namesJP[371][0]],coreano: [namesKO[371][1], namesKO[371][0]]}
},
{
	id: '373',
	nombre: names[372], tipo: ['dragon', 'flying'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(372).pies, getAltura(372).metros], peso: [getPeso(372).libras, getPeso(372).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '372',
			metodo: "Subiendo desde nivel 50",
			preevolucion: {
				numeroEspecie: '371',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '373',
		dexHoennRSE: '189',
		dexKalosCosta: '016',
	},
	idiomas: {frances: namesFR[372],aleman: namesDE[372],japones: [namesJP[372][1], namesJP[372][0]],coreano: [namesKO[372][1], namesKO[372][0]]}
},
{
	id: '374',
	nombre: names[373], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Bola Hierro',
	altura: [getAltura(373).pies, getAltura(373).metros], peso: [getPeso(373).libras, getPeso(373).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('light metal'),habilidadDescripcion: habDescripcion('light metal')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '375',
			metodo: "Subiendo desde nivel 20",
			evolucion: {
				numeroEspecie: '376',
				metodo: "Subiendo desde nivel 45",
			},
		},
	},
	],
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 41, grupo: ['Mineral'], amistad: 35,
	dexRegiones: {
		dexNacional: '374',
		dexHoennRSE: '190',
		dexUnovaB2W2: '262',
	},
	idiomas: {frances: namesFR[373],aleman: namesDE[373],japones: [namesJP[373][1], namesJP[373][0]],coreano: [namesKO[373][1], namesKO[373][0]]}
},
{
	id: '375',
	nombre: names[374], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Garrahierro',
	altura: [getAltura(374).pies, getAltura(374).metros], peso: [getPeso(374).libras, getPeso(374).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('light metal'),habilidadDescripcion: habDescripcion('light metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '374',
			metodo: "Subiendo desde nivel 20",
		},
		evolucion: {
			numeroEspecie: '376',
			metodo: "Subiendo desde nivel 45",
		},
	},
	],
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 41, grupo: ['Mineral'], amistad: 35,
	dexRegiones: {
		dexNacional: '375',
		dexHoennRSE: '191',
		dexUnovaB2W2: '263',
	},
	idiomas: {frances: namesFR[374],aleman: namesDE[374],japones: [namesJP[374][1], namesJP[374][0]],coreano: [namesKO[374][1], namesKO[374][0]]}
},
{
	id: '376',
	nombre: names[375], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Pata Hierro',
	altura: [getAltura(375).pies, getAltura(375).metros], peso: [getPeso(375).libras, getPeso(375).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('light metal'),habilidadDescripcion: habDescripcion('light metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '375',
			metodo: "Subiendo desde nivel 45",
			preevolucion: {
				numeroEspecie: '374',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	],
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 41, grupo: ['Mineral'], amistad: 35,
	dexRegiones: {
		dexNacional: '376',
		dexHoennRSE: '192',
		dexUnovaB2W2: '264',
	},
	idiomas: {frances: namesFR[375],aleman: namesDE[375],japones: [namesJP[375][1], namesJP[375][0]],coreano: [namesKO[375][1], namesKO[375][0]]}
},
{
	id: '377',
	nombre: names[376], tipo: ['rock'], clasificacion: 'Pokémon Pico Roca',
	altura: [getAltura(376).pies, getAltura(376).metros], peso: [getPeso(376).libras, getPeso(376).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '377',
		dexHoennRSE: '193',
	},
	idiomas: {frances: namesFR[376],aleman: namesDE[376],japones: [namesJP[376][1], namesJP[376][0]],coreano: [namesKO[376][1], namesKO[376][0]]}
},
{
	id: '378',
	nombre: names[377], tipo: ['ice'], clasificacion: 'Pokémon Iceberg',
	altura: [getAltura(377).pies, getAltura(377).metros], peso: [getPeso(377).libras, getPeso(377).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '378',
		dexHoennRSE: '194',
	},
	idiomas: {frances: namesFR[377],aleman: namesDE[377],japones: [namesJP[377][1], namesJP[377][0]],coreano: [namesKO[377][1], namesKO[377][0]]}
},
{
	id: '379',
	nombre: names[378], tipo: ['steel'], clasificacion: 'Pokémon Hierro',
	altura: [getAltura(378).pies, getAltura(378).metros], peso: [getPeso(378).libras, getPeso(378).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('light metal'),habilidadDescripcion: habDescripcion('light metal')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '379',
		dexHoennRSE: '195',
	},
	idiomas: {frances: namesFR[378],aleman: namesDE[378],japones: [namesJP[378][1], namesJP[378][0]],coreano: [namesKO[378][1], namesKO[378][0]]}
},
{
	id: '380',
	nombre: names[379], tipo: ['dragon', 'psychic'], clasificacion: 'Pokémon Eón',
	altura: [getAltura(379).pies, getAltura(379).metros], peso: [getPeso(379).libras, getPeso(379).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 90,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '380',
		dexHoennRSE: '196',
	},
	idiomas: {frances: namesFR[379],aleman: namesDE[379],japones: [namesJP[379][1], namesJP[379][0]],coreano: [namesKO[379][1], namesKO[379][0]]}
},
{
	id: '381',
	nombre: names[380], tipo: ['dragon', 'psychic'], clasificacion: 'Pokémon Eón',
	altura: [getAltura(380).pies, getAltura(380).metros], peso: [getPeso(380).libras, getPeso(380).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 90,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '381',
		dexHoennRSE: '197',
	},
	idiomas: {frances: namesFR[380],aleman: namesDE[380],japones: [namesJP[380][1], namesJP[380][0]],coreano: [namesKO[380][1], namesKO[380][0]]}
},
{
	id: '382',
	nombre: names[381], tipo: ['water'], clasificacion: 'Pokémon Cuenca Mar',
	altura: [getAltura(381).pies, getAltura(381).metros], peso: [getPeso(381).libras, getPeso(381).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('drizzle'),habilidadDescripcion: habDescripcion('drizzle')},
		],
	},
	ratioCaptura: 5,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '382',
		dexHoennRSE: '198',
	},
	idiomas: {frances: namesFR[381],aleman: namesDE[381],japones: [namesJP[381][1], namesJP[381][0]],coreano: [namesKO[381][1], namesKO[381][0]]}
},
{
	id: '383',
	nombre: names[382], tipo: ['ground'], clasificacion: 'Pokémon Continente',
	altura: [getAltura(382).pies, getAltura(382).metros], peso: [getPeso(382).libras, getPeso(382).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('drought'),habilidadDescripcion: habDescripcion('drought')},
		],
	},
	ratioCaptura: 5,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '383',
		dexHoennRSE: '199',
	},
	idiomas: {frances: namesFR[382],aleman: namesDE[382],japones: [namesJP[382][1], namesJP[382][0]],coreano: [namesKO[382][1], namesKO[382][0]]}
},
{
	id: '384',
	nombre: names[383], tipo: ['dragon', 'flying'], clasificacion: 'Pokémon Cielo',
	altura: [getAltura(383).pies, getAltura(383).metros], peso: [getPeso(383).libras, getPeso(383).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('air lock'),habilidadDescripcion: habDescripcion('air lock')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 2,
		ataqueEspecial: 1,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '384',
		dexHoennRSE: '200',
	},
	idiomas: {frances: namesFR[383],aleman: namesDE[383],japones: [namesJP[383][1], namesJP[383][0]],coreano: [namesKO[383][1], namesKO[383][0]]}
},
{
	id: '385',
	nombre: names[384], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Deseo',
	altura: [getAltura(384).pies, getAltura(384).metros], peso: [getPeso(384).libras, getPeso(384).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '385',
		dexHoennRSE: '201',
	},
	idiomas: {frances: namesFR[384],aleman: namesDE[384],japones: [namesJP[384][1], namesJP[384][0]],coreano: [namesKO[384][1], namesKO[384][0]]}
},
{
	id: '386',
	nombre: names[385], tipo: ['psychic'], clasificacion: 'Pokémon ADN',
	altura: [getAltura(385).pies, getAltura(385).metros], peso: [getPeso(385).libras, getPeso(385).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(Solo en Deoxys forma Ataque) ataque: 2,
		//(Solo en Deoxys forma Ataque) ataqueEspecial: 1,
		//(Solo en Deoxys forma Defensa) defensa: 2,
		//(Solo en Deoxys forma Defensa) defensaEspecial: 1,
		//(Solo en Deoxys forma Velocidad) velocidad: 3,
		ataque: 1,
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '386',
		dexHoennRSE: '202',
	},
	idiomas: {frances: namesFR[385],aleman: namesDE[385],japones: [namesJP[385][1], namesJP[385][0]],coreano: [namesKO[385][1], namesKO[385][0]]}
},















{
	id: '387',
	nombre: names[386], tipo: ['grass'], clasificacion: 'Pokémon Hojita',
	altura: [getAltura(386).pies, getAltura(386).metros], peso: [getPeso(386).libras, getPeso(386).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '388',
			metodo: "Subiendo desde nivel 18",
			evolucion: {
				numeroEspecie: '389',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '387',
		dexSinnohDPPt: '001',
	},
	idiomas: {frances: namesFR[386],aleman: namesDE[386],japones: [namesJP[386][1], namesJP[386][0]],coreano: [namesKO[386][1], namesKO[386][0]]}
},
{
	id: '388',
	nombre: names[387], tipo: ['grass'], clasificacion: 'Pokémon Arboleda',
	altura: [getAltura(387).pies, getAltura(387).metros], peso: [getPeso(387).libras, getPeso(387).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '387',
			metodo: "Subiendo desde nivel 18",
		},
		evolucion: {
			numeroEspecie: '389',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '388',
		dexSinnohDPPt: '002',
	},
	idiomas: {frances: namesFR[387],aleman: namesDE[387],japones: [namesJP[387][1], namesJP[387][0]],coreano: [namesKO[387][1], namesKO[387][0]]}
},
{
	id: '389',
	nombre: names[388], tipo: ['grass', 'ground'], clasificacion: 'Pokémon Continente',
	altura: [getAltura(388).pies, getAltura(388).metros], peso: [getPeso(388).libras, getPeso(388).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '388',
			metodo: "Subiendo desde nivel 32",
			preevolucion: {
				numeroEspecie: '387',
				metodo: "Subiendo desde nivel 18",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '389',
		dexSinnohDPPt: '003',
	},
	idiomas: {frances: namesFR[388],aleman: namesDE[388],japones: [namesJP[388][1], namesJP[388][0]],coreano: [namesKO[388][1], namesKO[388][0]]}
},
{
	id: '390',
	nombre: names[389], tipo: ['fire'], clasificacion: 'Pokémon Chimpancé',
	altura: [getAltura(389).pies, getAltura(389).metros], peso: [getPeso(389).libras, getPeso(389).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '391',
			metodo: "Subiendo desde nivel 14",
			evolucion: {
				numeroEspecie: '392',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '390',
		dexSinnohDPPt: '004',
	},
	idiomas: {frances: namesFR[389],aleman: namesDE[389],japones: [namesJP[389][1], namesJP[389][0]],coreano: [namesKO[389][1], namesKO[389][0]]}
},
{
	id: '391',
	nombre: names[390], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Juguetón',
	altura: [getAltura(390).pies, getAltura(390).metros], peso: [getPeso(390).libras, getPeso(390).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '390',
			metodo: "Subiendo desde nivel 14",
		},
		evolucion: {
			numeroEspecie: '392',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '391',
		dexSinnohDPPt: '005',
	},
	idiomas: {frances: namesFR[390],aleman: namesDE[390],japones: [namesJP[390][1], namesJP[390][0]],coreano: [namesKO[390][1], namesKO[390][0]]}
},
{
	id: '392',
	nombre: names[391], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Llama',
	altura: [getAltura(391).pies, getAltura(391).metros], peso: [getPeso(391).libras, getPeso(391).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '391',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '390',
				metodo: "Subiendo desde nivel 14",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '392',
		dexSinnohDPPt: '006',
	},
	idiomas: {frances: namesFR[391],aleman: namesDE[391],japones: [namesJP[391][1], namesJP[391][0]],coreano: [namesKO[391][1], namesKO[391][0]]}
},
{
	id: '393',
	nombre: names[392], tipo: ['water'], clasificacion: 'Pokémon Pingüino',
	altura: [getAltura(392).pies, getAltura(392).metros], peso: [getPeso(392).libras, getPeso(392).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '394',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '395',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '393',
		dexSinnohDPPt: '007',
	},
	idiomas: {frances: namesFR[392],aleman: namesDE[392],japones: [namesJP[392][1], namesJP[392][0]],coreano: [namesKO[392][1], namesKO[392][0]]}
},
{
	id: '394',
	nombre: names[393], tipo: ['water'], clasificacion: 'Pokémon Pingüino',
	altura: [getAltura(393).pies, getAltura(393).metros], peso: [getPeso(393).libras, getPeso(393).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '393',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '395',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '394',
		dexSinnohDPPt: '008',
	},
	idiomas: {frances: namesFR[393],aleman: namesDE[393],japones: [namesJP[393][1], namesJP[393][0]],coreano: [namesKO[393][1], namesKO[393][0]]}
},
{
	id: '395',
	nombre: names[394], tipo: ['water', 'steel'], clasificacion: 'Pokémon Emperador',
	altura: [getAltura(394).pies, getAltura(394).metros], peso: [getPeso(394).libras, getPeso(394).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '394',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '393',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '395',
		dexSinnohDPPt: '009',
	},
	idiomas: {frances: namesFR[394],aleman: namesDE[394],japones: [namesJP[394][1], namesJP[394][0]],coreano: [namesKO[394][1], namesKO[394][0]]}
},
{
	id: '396',
	nombre: names[395], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Estornino',
	altura: [getAltura(395).pies, getAltura(395).metros], peso: [getPeso(395).libras, getPeso(395).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '397',
			metodo: "Subiendo desde nivel 14",
			evolucion: {
				numeroEspecie: '398',
				metodo: "Subiendo desde nivel 34",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '396',
		dexSinnohDPPt: '010',
		dexKalosCosta: '099',
	},
	idiomas: {frances: namesFR[395],aleman: namesDE[395],japones: [namesJP[395][1], namesJP[395][0]],coreano: [namesKO[395][1], namesKO[395][0]]}
},
{
	id: '397',
	nombre: names[396], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Estornino',
	altura: [getAltura(396).pies, getAltura(396).metros], peso: [getPeso(396).libras, getPeso(396).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '396',
			metodo: "Subiendo desde nivel 14",
		},
		evolucion: {
			numeroEspecie: '398',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '397',
		dexSinnohDPPt: '011',
		dexKalosCosta: '100',
	},
	idiomas: {frances: namesFR[396],aleman: namesDE[396],japones: [namesJP[396][1], namesJP[396][0]],coreano: [namesKO[396][1], namesKO[396][0]]}
},
{
	id: '398',
	nombre: names[397], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Depredador',
	altura: [getAltura(397).pies, getAltura(397).metros], peso: [getPeso(397).libras, getPeso(397).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '397',
			metodo: "Subiendo desde nivel 34",
			preevolucion: {
				numeroEspecie: '396',
				metodo: "Subiendo desde nivel 14",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '398',
		dexSinnohDPPt: '012',
		dexKalosCosta: '101',
	},
	idiomas: {frances: namesFR[397],aleman: namesDE[397],japones: [namesJP[397][1], namesJP[397][0]],coreano: [namesKO[397][1], namesKO[397][0]]}
},
{
	id: '399',
	nombre: names[398], tipo: ['normal'], clasificacion: 'Pokémon Gran Ratón',
	altura: [getAltura(398).pies, getAltura(398).metros], peso: [getPeso(398).libras, getPeso(398).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		{habilidadNombre: habNombre('simple'),habilidadDescripcion: habDescripcion('simple')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '400',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '399',
		dexSinnohDPPt: '013',
		dexKalosCentral: '038',
	},
	idiomas: {frances: namesFR[398],aleman: namesDE[398],japones: [namesJP[398][1], namesJP[398][0]],coreano: [namesKO[398][1], namesKO[398][0]]}
},
{
	id: '400',
	nombre: names[399], tipo: ['normal', 'water'], clasificacion: 'Pokémon Castor',
	altura: [getAltura(399).pies, getAltura(399).metros], peso: [getPeso(399).libras, getPeso(399).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		{habilidadNombre: habNombre('simple'),habilidadDescripcion: habDescripcion('simple')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moody'),habilidadDescripcion: habDescripcion('moody')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '399',
			metodo: "Subiendo desde nivel 15",
		},
	},
	],
	ratioCaptura: 127,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '400',
		dexSinnohDPPt: '014',
		dexKalosCentral: '039',
	},
	idiomas: {frances: namesFR[399],aleman: namesDE[399],japones: [namesJP[399][1], namesJP[399][0]],coreano: [namesKO[399][1], namesKO[399][0]]}
},
{
	id: '401',
	nombre: names[400], tipo: ['bug'], clasificacion: 'Pokémon Grillo',
	altura: [getAltura(400).pies, getAltura(400).metros], peso: [getPeso(400).libras, getPeso(400).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '402',
			metodo: "Subiendo desde nivel 10",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '401',
		dexSinnohDPPt: '015',
	},
	idiomas: {frances: namesFR[400],aleman: namesDE[400],japones: [namesJP[400][1], namesJP[400][0]],coreano: [namesKO[400][1], namesKO[400][0]]}
},
{
	id: '402',
	nombre: names[401], tipo: ['bug'], clasificacion: 'Pokémon Grillo',
	altura: [getAltura(401).pies, getAltura(401).metros], peso: [getPeso(401).libras, getPeso(401).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '401',
			metodo: "Subiendo desde nivel 10",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '402',
		dexSinnohDPPt: '016',
	},
	idiomas: {frances: namesFR[401],aleman: namesDE[401],japones: [namesJP[401][1], namesJP[401][0]],coreano: [namesKO[401][1], namesKO[401][0]]}
},
{
	id: '403',
	nombre: names[402], tipo: ['electric'], clasificacion: 'Pokémon Flash',
	altura: [getAltura(402).pies, getAltura(402).metros], peso: [getPeso(402).libras, getPeso(402).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '404',
			metodo: "Subiendo desde nivel 15",
			evolucion: {
				numeroEspecie: '405',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 235,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '403',
		dexSinnohDPPt: '017',
	},
	idiomas: {frances: namesFR[402],aleman: namesDE[402],japones: [namesJP[402][1], namesJP[402][0]],coreano: [namesKO[402][1], namesKO[402][0]]}
},
{
	id: '404',
	nombre: names[403], tipo: ['electric'], clasificacion: 'Pokémon Chispa',
	altura: [getAltura(403).pies, getAltura(403).metros], peso: [getPeso(403).libras, getPeso(403).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '403',
			metodo: "Subiendo desde nivel 15",
		},
		evolucion: {
			numeroEspecie: '405',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 100,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '404',
		dexSinnohDPPt: '018',
	},
	idiomas: {frances: namesFR[403],aleman: namesDE[403],japones: [namesJP[403][1], namesJP[403][0]],coreano: [namesKO[403][1], namesKO[403][0]]}
},
{
	id: '405',
	nombre: names[404], tipo: ['electric'], clasificacion: 'Pokémon Chispa Ojos',
	altura: [getAltura(404).pies, getAltura(404).metros], peso: [getPeso(404).libras, getPeso(404).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '404',
			metodo: "Subiendo desde nivel 30",
			preevolucion: {
				numeroEspecie: '403',
				metodo: "Subiendo desde nivel 15",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '405',
		dexSinnohDPPt: '019',
	},
	idiomas: {frances: namesFR[404],aleman: namesDE[404],japones: [namesJP[404][1], namesJP[404][0]],coreano: [namesKO[404][1], namesKO[404][0]]}
},
{
	id: '406',
	nombre: names[405], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Brote',
	altura: [getAltura(405).pies, getAltura(405).metros], peso: [getPeso(405).libras, getPeso(405).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '315',
			metodo: "Felicidad máxima, subiendo de nivel en el día",
			condicion: ['happiness', 'daylight'],
			evolucion: {
				numeroEspecie: '407',
				metodo: "Aplicando Piedra Día",
				objeto: getEvolveItem('shiny stone'),
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '406',
		dexSinnohDPPt: '025',
		dexUnovaB2W2: '133',
		dexKalosCentral: '071',
	},
	idiomas: {frances: namesFR[405],aleman: namesDE[405],japones: [namesJP[405][1], namesJP[405][0]],coreano: [namesKO[405][1], namesKO[405][0]]}
},
{
	id: '407',
	nombre: names[406], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Ramillete',
	altura: [getAltura(406).pies, getAltura(406).metros], peso: [getPeso(406).libras, getPeso(406).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '315',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
			preevolucion: {
				numeroEspecie: '406',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '407',
		dexSinnohDPPt: '027',
		dexUnovaB2W2: '135',
		dexKalosCentral: '073',
	},
	idiomas: {frances: namesFR[406],aleman: namesDE[406],japones: [namesJP[406][1], namesJP[406][0]],coreano: [namesKO[406][1], namesKO[406][0]]}
},
{
	id: '408',
	nombre: names[407], tipo: ['rock'], clasificacion: 'Pokémon Cabezazo',
	altura: [getAltura(407).pies, getAltura(407).metros], peso: [getPeso(407).libras, getPeso(407).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '409',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '408',
		dexSinnohDPPt: '036',
	},
	idiomas: {frances: namesFR[407],aleman: namesDE[407],japones: [namesJP[407][1], namesJP[407][0]],coreano: [namesKO[407][1], namesKO[407][0]]}
},
{
	id: '409',
	nombre: names[408], tipo: ['rock'], clasificacion: 'Pokémon Cabezazo',
	altura: [getAltura(408).pies, getAltura(408).metros], peso: [getPeso(408).libras, getPeso(408).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '408',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '409',
		dexSinnohDPPt: '037',
	},
	idiomas: {frances: namesFR[408],aleman: namesDE[408],japones: [namesJP[408][1], namesJP[408][0]],coreano: [namesKO[408][1], namesKO[408][0]]}
},
{
	id: '410',
	nombre: names[409], tipo: ['rock', 'steel'], clasificacion: 'Pokémon Escudo',
	altura: [getAltura(409).pies, getAltura(409).metros], peso: [getPeso(409).libras, getPeso(409).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '411',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '410',
		dexSinnohDPPt: '038',
	},
	idiomas: {frances: namesFR[409],aleman: namesDE[409],japones: [namesJP[409][1], namesJP[409][0]],coreano: [namesKO[409][1], namesKO[409][0]]}
},
{
	id: '411',
	nombre: names[410], tipo: ['rock', 'steel'], clasificacion: 'Pokémon Escudo',
	altura: [getAltura(410).pies, getAltura(410).metros], peso: [getPeso(410).libras, getPeso(410).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '410',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '411',
		dexSinnohDPPt: '039',
	},
	idiomas: {frances: namesFR[410],aleman: namesDE[410],japones: [namesJP[410][1], namesJP[410][0]],coreano: [namesKO[410][1], namesKO[410][0]]}
},
{
	id: '412',
	nombre: names[411], tipo: ['bug'], clasificacion: 'Pokémon Larva',
	altura: [getAltura(411).pies, getAltura(411).metros], peso: [getPeso(411).libras, getPeso(411).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '413',
			metodo: "Subiendo desde nivel 20, sólo si es Hembra",
			condicion: ['female'],
		},
	},
	{
		evolucion: {
			numeroEspecie: '414',
			metodo: "Subiendo desde nivel 20, sólo si es Macho",
			condicion: ['male'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '412',
		dexSinnohDPPt: '045',
		dexKalosCentral: '044',
	},
	idiomas: {frances: namesFR[411],aleman: namesDE[411],japones: [namesJP[411][1], namesJP[411][0]],coreano: [namesKO[411][1], namesKO[411][0]]}
},
{
	id: '413',
	nombre: names[412], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Larva',
	altura: [getAltura(412).pies, getAltura(412).metros], peso: [getPeso(412).libras, getPeso(412).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '412',
			metodo: "Subiendo desde nivel 20, sólo si es Hembra",
			condicion: ['female'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '412',
			otraEvolucion: {
				numeroEspecie: '414',
				metodo: "Subiendo desde nivel 20, sólo si es Macho",
				condicion: ['male'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		//(Solo en Wormadam forma Arena) defensa: 2,
		//(Solo en Wormadam forma Basura) defensa: 1,
		//(Solo en Wormadam forma Basura) defensaEspecial: 1,
		defensaEspecial: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '413',
		dexSinnohDPPt: '046',
		dexKalosCentral: '045',
	},
	idiomas: {frances: namesFR[412],aleman: namesDE[412],japones: [namesJP[412][1], namesJP[412][0]],coreano: [namesKO[412][1], namesKO[412][0]]}
},
{
	id: '414',
	nombre: names[413], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Polilla',
	altura: [getAltura(413).pies, getAltura(413).metros], peso: [getPeso(413).libras, getPeso(413).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '412',
			otraEvolucion: {
				numeroEspecie: '413',
				metodo: "Subiendo desde nivel 20, sólo si es Hembra",
				condicion: ['female'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '412',
			metodo: "Subiendo desde nivel 20, sólo si es Macho",
			condicion: ['male'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '414',
		dexSinnohDPPt: '047',
		dexKalosCentral: '046',
	},
	idiomas: {frances: namesFR[413],aleman: namesDE[413],japones: [namesJP[413][1], namesJP[413][0]],coreano: [namesKO[413][1], namesKO[413][0]]}
},
{
	id: '415',
	nombre: names[414], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Abejita',
	altura: [getAltura(414).pies, getAltura(414).metros], peso: [getPeso(414).libras, getPeso(414).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('honey gather'),habilidadDescripcion: habDescripcion('honey gather')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '416',
			metodo: "Subiendo desde nivel 21, sólo si es Hembra",
			condicion: ['female'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '415',
		dexSinnohDPPt: '053',
		dexUnovaB2W2: '142',
		dexKalosCentral: '076',
	},
	idiomas: {frances: namesFR[414],aleman: namesDE[414],japones: [namesJP[414][1], namesJP[414][0]],coreano: [namesKO[414][1], namesKO[414][0]]}
},
{
	id: '416',
	nombre: names[415], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Colmena',
	altura: [getAltura(415).pies, getAltura(415).metros], peso: [getPeso(415).libras, getPeso(415).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '415',
			metodo: "Subiendo desde nivel 21, sólo si es Hembra",
			condicion: ['female'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '416',
		dexSinnohDPPt: '054',
		dexUnovaB2W2: '143',
		dexKalosCentral: '077',
	},
	idiomas: {frances: namesFR[415],aleman: namesDE[415],japones: [namesJP[415][1], namesJP[415][0]],coreano: [namesKO[415][1], namesKO[415][0]]}
},
{
	id: '417',
	nombre: names[416], tipo: ['electric'], clasificacion: 'Pokémon Ardillalec',
	altura: [getAltura(416).pies, getAltura(416).metros], peso: [getPeso(416).libras, getPeso(416).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: habDescripcion('volt absorb')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 11, grupo: ['Campo', 'Hada'], amistad: 100,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '417',
		dexSinnohDPPt: '055',
		dexKalosCosta: '132',
	},
	idiomas: {frances: namesFR[416],aleman: namesDE[416],japones: [namesJP[416][1], namesJP[416][0]],coreano: [namesKO[416][1], namesKO[416][0]]}
},
{
	id: '418',
	nombre: names[417], tipo: ['water'], clasificacion: 'Pokémon Nutria Marina',
	altura: [getAltura(417).pies, getAltura(417).metros], peso: [getPeso(417).libras, getPeso(417).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '419',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '418',
		dexSinnohDPPt: '056',
		dexUnovaB2W2: '149',
		dexKalosMontana: '058',
	},
	idiomas: {frances: namesFR[417],aleman: namesDE[417],japones: [namesJP[417][1], namesJP[417][0]],coreano: [namesKO[417][1], namesKO[417][0]]}
},
{
	id: '419',
	nombre: names[418], tipo: ['water'], clasificacion: 'Pokémon Nutria Marina',
	altura: [getAltura(418).pies, getAltura(418).metros], peso: [getPeso(418).libras, getPeso(418).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '418',
			metodo: "Subiendo desde nivel 26",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '419',
		dexSinnohDPPt: '057',
		dexUnovaB2W2: '150',
		dexKalosMontana: '059',
	},
	idiomas: {frances: namesFR[418],aleman: namesDE[418],japones: [namesJP[418][1], namesJP[418][0]],coreano: [namesKO[418][1], namesKO[418][0]]}
},
{
	id: '420',
	nombre: names[419], tipo: ['grass'], clasificacion: 'Pokémon Cereza',
	altura: [getAltura(419).pies, getAltura(419).metros], peso: [getPeso(419).libras, getPeso(419).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '421',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '420',
		dexSinnohDPPt: '058',
	},
	idiomas: {frances: namesFR[419],aleman: namesDE[419],japones: [namesJP[419][1], namesJP[419][0]],coreano: [namesKO[419][1], namesKO[419][0]]}
},
{
	id: '421',
	nombre: names[420], tipo: ['grass'], clasificacion: 'Pokémon Floración',
	altura: [getAltura(420).pies, getAltura(420).metros], peso: [getPeso(420).libras, getPeso(420).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('don floral'),habilidadDescripcion: habDescripcion('don floral')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '420',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '421',
		dexSinnohDPPt: '059',
	},
	idiomas: {frances: namesFR[420],aleman: namesDE[420],japones: [namesJP[420][1], namesJP[420][0]],coreano: [namesKO[420][1], namesKO[420][0]]}
},
{
	id: '422',
	nombre: names[421], tipo: ['water'], clasificacion: 'Pokémon Babosa Marina',
	altura: [getAltura(421).pies, getAltura(421).metros], peso: [getPeso(421).libras, getPeso(421).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '423',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '422',
		dexSinnohDPPt: '060',
	},
	idiomas: {frances: namesFR[421],aleman: namesDE[421],japones: [namesJP[421][1], namesJP[421][0]],coreano: [namesKO[421][1], namesKO[421][0]]}
},
{
	id: '423',
	nombre: names[422], tipo: ['water', 'ground'], clasificacion: 'Pokémon Babosa Marina',
	altura: [getAltura(422).pies, getAltura(422).metros], peso: [getPeso(422).libras, getPeso(422).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '422',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '423',
		dexSinnohDPPt: '061',
	},
	idiomas: {frances: namesFR[422],aleman: namesDE[422],japones: [namesJP[422][1], namesJP[422][0]],coreano: [namesKO[422][1], namesKO[422][0]]}
},
{
	id: '424',
	nombre: names[423], tipo: ['normal'], clasificacion: 'Pokémon Cola Larga',
	altura: [getAltura(423).pies, getAltura(423).metros], peso: [getPeso(423).libras, getPeso(423).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '190',
			metodo: "Subiendo de nivel con movimiento Doble Golpe",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 100,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '424',
		dexJohtoHGSS: '124',
		dexSinnohDPPt: '064',
	},
	idiomas: {frances: namesFR[423],aleman: namesDE[423],japones: [namesJP[423][1], namesJP[423][0]],coreano: [namesKO[423][1], namesKO[423][0]]}
},
{
	id: '425',
	nombre: names[424], tipo: ['ghost', 'flying'], clasificacion: 'Pokémon Globo',
	altura: [getAltura(424).pies, getAltura(424).metros], peso: [getPeso(424).libras, getPeso(424).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flare boost'),habilidadDescripcion: habDescripcion('flare boost')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '426',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 125,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 31, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '425',
		dexSinnohDPPt: '065',
		dexUnovaB2W2: '208',
		dexKalosCosta: '001',
	},
	idiomas: {frances: namesFR[424],aleman: namesDE[424],japones: [namesJP[424][1], namesJP[424][0]],coreano: [namesKO[424][1], namesKO[424][0]]}
},
{
	id: '426',
	nombre: names[425], tipo: ['ghost', 'flying'], clasificacion: 'Pokémon Dirigible',
	altura: [getAltura(425).pies, getAltura(425).metros], peso: [getPeso(425).libras, getPeso(425).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flare boost'),habilidadDescripcion: habDescripcion('flare boost')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '425',
			metodo: "Subiendo desde nivel 28",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 31, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '426',
		dexSinnohDPPt: '066',
		dexUnovaB2W2: '209',
		dexKalosCosta: '002',
	},
	idiomas: {frances: namesFR[425],aleman: namesDE[425],japones: [namesJP[425][1], namesJP[425][0]],coreano: [namesKO[425][1], namesKO[425][0]]}
},
{
	id: '427',
	nombre: names[426], tipo: ['normal'], clasificacion: 'Pokémon Conejo',
	altura: [getAltura(426).pies, getAltura(426).metros], peso: [getPeso(426).libras, getPeso(426).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '428',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 0,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '427',
		dexSinnohDPPt: '067',
		dexUnovaB2W2: '080',
	},
	idiomas: {frances: namesFR[426],aleman: namesDE[426],japones: [namesJP[426][1], namesJP[426][0]],coreano: [namesKO[426][1], namesKO[426][0]]}
},
{
	id: '428',
	nombre: names[427], tipo: ['normal'], clasificacion: 'Pokémon Conejo',
	altura: [getAltura(427).pies, getAltura(427).metros], peso: [getPeso(427).libras, getPeso(427).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '427',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Humanoide'], amistad: 140,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '428',
		dexSinnohDPPt: '068',
		dexUnovaB2W2: '081',
	},
	idiomas: {frances: namesFR[427],aleman: namesDE[427],japones: [namesJP[427][1], namesJP[427][0]],coreano: [namesKO[427][1], namesKO[427][0]]}
},
{
	id: '429',
	nombre: names[428], tipo: ['ghost'], clasificacion: 'Pokémon Mágico',
	altura: [getAltura(428).pies, getAltura(428).metros], peso: [getPeso(428).libras, getPeso(428).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '200',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '429',
		dexSinnohDPPt: '073',
	},
	idiomas: {frances: namesFR[428],aleman: namesDE[428],japones: [namesJP[428][1], namesJP[428][0]],coreano: [namesKO[428][1], namesKO[428][0]]}
},
{
	id: '430',
	nombre: names[429], tipo: ['dark', 'flying'], clasificacion: 'Pokémon Gran Jefe',
	altura: [getAltura(429).pies, getAltura(429).metros], peso: [getPeso(429).libras, getPeso(429).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '198',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '430',
		dexSinnohDPPt: '075',
		dexKalosMontana: '052',
	},
	idiomas: {frances: namesFR[429],aleman: namesDE[429],japones: [namesJP[429][1], namesJP[429][0]],coreano: [namesKO[429][1], namesKO[429][0]]}
},
{
	id: '431',
	nombre: names[430], tipo: ['normal'], clasificacion: 'Pokémon Gastuto',
	altura: [getAltura(430).pies, getAltura(430).metros], peso: [getPeso(430).libras, getPeso(430).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '432',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '431',
		dexSinnohDPPt: '076',
	},
	idiomas: {frances: namesFR[430],aleman: namesDE[430],japones: [namesJP[430][1], namesJP[430][0]],coreano: [namesKO[430][1], namesKO[430][0]]}
},
{
	id: '432',
	nombre: names[431], tipo: ['normal'], clasificacion: 'Pokémon Tigre Gato',
	altura: [getAltura(431).pies, getAltura(431).metros], peso: [getPeso(431).libras, getPeso(431).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '431',
			metodo: "Subiendo desde nivel 38",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '432',
		dexSinnohDPPt: '077',
	},
	idiomas: {frances: namesFR[431],aleman: namesDE[431],japones: [namesJP[431][1], namesJP[431][0]],coreano: [namesKO[431][1], namesKO[431][0]]}
},
{
	id: '433',
	nombre: names[432], tipo: ['psychic'], clasificacion: 'Pokémon Campana',
	altura: [getAltura(432).pies, getAltura(432).metros], peso: [getPeso(432).libras, getPeso(432).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '358',
			metodo: "Felicidad máxima, subiendo de nivel en la noche",
			condicion: ['happiness', 'night'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '433',
		dexSinnohDPPt: '082',
		dexKalosCosta: '111',
	},
	idiomas: {frances: namesFR[432],aleman: namesDE[432],japones: [namesJP[432][1], namesJP[432][0]],coreano: [namesKO[432][1], namesKO[432][0]]}
},
{
	id: '434',
	nombre: names[433], tipo: ['poison', 'dark'], clasificacion: 'Pokémon Mofeta',
	altura: [getAltura(433).pies, getAltura(433).metros], peso: [getPeso(433).libras, getPeso(433).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '435',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '434',
		dexSinnohDPPt: '084',
		dexKalosCosta: '102',
	},
	idiomas: {frances: namesFR[433],aleman: namesDE[433],japones: [namesJP[433][1], namesJP[433][0]],coreano: [namesKO[433][1], namesKO[433][0]]}
},
{
	id: '435',
	nombre: names[434], tipo: ['poison', 'dark'], clasificacion: 'Pokémon Mofeta',
	altura: [getAltura(434).pies, getAltura(434).metros], peso: [getPeso(434).libras, getPeso(434).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '434',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '435',
		dexSinnohDPPt: '085',
		dexKalosCosta: '103',
	},
	idiomas: {frances: namesFR[434],aleman: namesDE[434],japones: [namesJP[434][1], namesJP[434][0]],coreano: [namesKO[434][1], namesKO[434][0]]}
},
{
	id: '436',
	nombre: names[435], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Bronce',
	altura: [getAltura(435).pies, getAltura(435).metros], peso: [getPeso(435).libras, getPeso(435).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		{habilidadNombre: habNombre('heatproof'),habilidadDescripcion: habDescripcion('heatproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('heavy metal'),habilidadDescripcion: habDescripcion('heavy metal')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '437',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '436',
		dexSinnohDPPt: '088',
		dexUnovaB2W2: '250',
	},
	idiomas: {frances: namesFR[435],aleman: namesDE[435],japones: [namesJP[435][1], namesJP[435][0]],coreano: [namesKO[435][1], namesKO[435][0]]}
},
{
	id: '437',
	nombre: names[436], tipo: ['steel', 'psychic'], clasificacion: 'Pokémon Campana Bronce',
	altura: [getAltura(436).pies, getAltura(436).metros], peso: [getPeso(436).libras, getPeso(436).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		{habilidadNombre: habNombre('heatproof'),habilidadDescripcion: habDescripcion('heatproof')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('heavy metal'),habilidadDescripcion: habDescripcion('heavy metal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '436',
			metodo: "Subiendo desde nivel 33",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '437',
		dexSinnohDPPt: '089',
		dexUnovaB2W2: '251',
	},
	idiomas: {frances: namesFR[436],aleman: namesDE[436],japones: [namesJP[436][1], namesJP[436][0]],coreano: [namesKO[436][1], namesKO[436][0]]}
},
{
	id: '438',
	nombre: names[437], tipo: ['rock'], clasificacion: 'Pokémon Bonsái',
	altura: [getAltura(437).pies, getAltura(437).metros], peso: [getPeso(437).libras, getPeso(437).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '185',
			metodo: "Subiendo de nivel con movimiento Mimético",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '438',
		dexSinnohDPPt: '092',
		dexKalosMontana: '129',
	},
	idiomas: {frances: namesFR[437],aleman: namesDE[437],japones: [namesJP[437][1], namesJP[437][0]],coreano: [namesKO[437][1], namesKO[437][0]]}
},
{
	id: '439',
	nombre: names[438], tipo: ['psychic', 'fairy'], clasificacion: 'Pokémon Mimo',
	altura: [getAltura(438).pies, getAltura(438).metros], peso: [getPeso(438).libras, getPeso(438).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		{habilidadNombre: habNombre('filtro'),habilidadDescripcion: habDescripcion('filtro')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '122',
			metodo: "Subiendo de nivel con movimiento Mimético",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 145,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '439',
		dexSinnohDPPt: '094',
		dexKalosCosta: '113',
	},
	idiomas: {frances: namesFR[438],aleman: namesDE[438],japones: [namesJP[438][1], namesJP[438][0]],coreano: [namesKO[438][1], namesKO[438][0]]}
},
{
	id: '440',
	nombre: names[439], tipo: ['normal'], clasificacion: 'Pokémon Casita',
	altura: [getAltura(439).pies, getAltura(439).metros], peso: [getPeso(439).libras, getPeso(439).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '113',
			metodo: "Subiendo de nivel con objeto Piedra Oval",
			objeto: getEvolveItem('oval stone'),
			evolucion: {
				numeroEspecie: '242',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 130,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 41, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '440',
		dexSinnohDPPt: '096',
	},
	idiomas: {frances: namesFR[439],aleman: namesDE[439],japones: [namesJP[439][1], namesJP[439][0]],coreano: [namesKO[439][1], namesKO[439][0]]}
},
{
	id: '441',
	nombre: names[440], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Corchea',
	altura: [getAltura(440).pies, getAltura(440).metros], peso: [getPeso(440).libras, getPeso(440).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Tumbos'),habilidadDescripcion: habDescripcion('Tumbos')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
	},
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '441',
		dexSinnohDPPt: '102',
		dexKalosCosta: '138',
	},
	idiomas: {frances: namesFR[440],aleman: namesDE[440],japones: [namesJP[440][1], namesJP[440][0]],coreano: [namesKO[440][1], namesKO[440][0]]}
},
{
	id: '442',
	nombre: names[441], tipo: ['ghost', 'dark'], clasificacion: 'Pokémon Prohibido',
	altura: [getAltura(441).pies, getAltura(441).metros], peso: [getPeso(441).libras, getPeso(441).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	ratioCaptura: 100,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 31, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '442',
		dexSinnohDPPt: '108',
	},
	idiomas: {frances: namesFR[441],aleman: namesDE[441],japones: [namesJP[441][1], namesJP[441][0]],coreano: [namesKO[441][1], namesKO[441][0]]}
},
{
	id: '443',
	nombre: names[442], tipo: ['dragon', 'ground'], clasificacion: 'Pokémon Terrascualo',
	altura: [getAltura(442).pies, getAltura(442).metros], peso: [getPeso(442).libras, getPeso(442).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '444',
			metodo: "Subiendo desde nivel 24",
			evolucion: {
				numeroEspecie: '445',
				metodo: "Subiendo desde nivel 48",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '443',
		dexSinnohDPPt: '109',
		dexKalosMontana: '006',
	},
	idiomas: {frances: namesFR[442],aleman: namesDE[442],japones: [namesJP[442][1], namesJP[442][0]],coreano: [namesKO[442][1], namesKO[442][0]]}
},
{
	id: '444',
	nombre: names[443], tipo: ['dragon', 'ground'], clasificacion: 'Pokémon Cueva',
	altura: [getAltura(443).pies, getAltura(443).metros], peso: [getPeso(443).libras, getPeso(443).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '443',
			metodo: "Subiendo desde nivel 24",
		},
		evolucion: {
			numeroEspecie: '445',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '444',
		dexSinnohDPPt: '110',
		dexKalosMontana: '007',
	},
	idiomas: {frances: namesFR[443],aleman: namesDE[443],japones: [namesJP[443][1], namesJP[443][0]],coreano: [namesKO[443][1], namesKO[443][0]]}
},
{
	id: '445',
	nombre: names[444], tipo: ['dragon', 'ground'], clasificacion: 'Pokémon Mach',
	altura: [getAltura(444).pies, getAltura(444).metros], peso: [getPeso(444).libras, getPeso(444).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '444',
			metodo: "Subiendo desde nivel 48",
			preevolucion: {
				numeroEspecie: '443',
				metodo: "Subiendo desde nivel 24",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '445',
		dexSinnohDPPt: '111',
		dexKalosMontana: '008',
	},
	idiomas: {frances: namesFR[444],aleman: namesDE[444],japones: [namesJP[444][1], namesJP[444][0]],coreano: [namesKO[444][1], namesKO[444][0]]}
},
{
	id: '446',
	nombre: names[445], tipo: ['normal'], clasificacion: 'Pokémon Comilón',
	altura: [getAltura(445).pies, getAltura(445).metros], peso: [getPeso(445).libras, getPeso(445).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '143',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 41, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '446',
		dexSinnohDPPt: '112',
		dexKalosCentral: '138',
	},
	idiomas: {frances: namesFR[445],aleman: namesDE[445],japones: [namesJP[445][1], namesJP[445][0]],coreano: [namesKO[445][1], namesKO[445][0]]}
},
{
	id: '447',
	nombre: names[446], tipo: ['fight'], clasificacion: 'Pokémon Emanación',
	altura: [getAltura(446).pies, getAltura(446).metros], peso: [getPeso(446).libras, getPeso(446).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '448',
			metodo: "Felicidad máxima, subiendo desde nivel en el día",
			condicion: ['happiness', 'daylight'],
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '447',
		dexSinnohDPPt: '115',
		dexUnovaB2W2: '033',
		dexKalosCentral: '062',
	},
	idiomas: {frances: namesFR[446],aleman: namesDE[446],japones: [namesJP[446][1], namesJP[446][0]],coreano: [namesKO[446][1], namesKO[446][0]]}
},
{
	id: '448',
	nombre: names[447], tipo: ['fight', 'steel'], clasificacion: 'Pokémon Aura',
	altura: [getAltura(447).pies, getAltura(447).metros], peso: [getPeso(447).libras, getPeso(447).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '447',
			metodo: "Felicidad máxima, subiendo desde nivel en el día",
			condicion: ['happiness', 'daylight'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '448',
		dexSinnohDPPt: '116',
		dexUnovaB2W2: '034',
		dexKalosCentral: '063',
	},
	idiomas: {frances: namesFR[447],aleman: namesDE[447],japones: [namesJP[447][1], namesJP[447][0]],coreano: [namesKO[447][1], namesKO[447][0]]}
},
{
	id: '449',
	nombre: names[448], tipo: ['ground'], clasificacion: 'Pokémon Hipo',
	altura: [getAltura(448).pies, getAltura(448).metros], peso: [getPeso(448).libras, getPeso(448).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand stream'),habilidadDescripcion: habDescripcion('sand stream')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '450',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 140,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 31, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '449',
		dexSinnohDPPt: '122',
		dexKalosCosta: '048',
	},
	idiomas: {frances: namesFR[448],aleman: namesDE[448],japones: [namesJP[448][1], namesJP[448][0]],coreano: [namesKO[448][1], namesKO[448][0]]}
},
{
	id: '450',
	nombre: names[449], tipo: ['ground'], clasificacion: 'Pokémon Peso Pesado',
	altura: [getAltura(449).pies, getAltura(449).metros], peso: [getPeso(449).libras, getPeso(449).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand stream'),habilidadDescripcion: habDescripcion('sand stream')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '449',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 31, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '450',
		dexSinnohDPPt: '123',
		dexKalosCosta: '049',
	},
	idiomas: {frances: namesFR[449],aleman: namesDE[449],japones: [namesJP[449][1], namesJP[449][0]],coreano: [namesKO[449][1], namesKO[449][0]]}
},
{
	id: '451',
	nombre: names[450], tipo: ['poison', 'bug'], clasificacion: 'Pokémon Escorpión',
	altura: [getAltura(450).pies, getAltura(450).metros], peso: [getPeso(450).libras, getPeso(450).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '452',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '451',
		dexSinnohDPPt: '127',
		dexUnovaB2W2: '201',
		dexKalosMontana: '015',
	},
	idiomas: {frances: namesFR[450],aleman: namesDE[450],japones: [namesJP[450][1], namesJP[450][0]],coreano: [namesKO[450][1], namesKO[450][0]]}
},
{
	id: '452',
	nombre: names[451], tipo: ['poison', 'dark'], clasificacion: 'Pokémon Escorpiogro',
	altura: [getAltura(451).pies, getAltura(451).metros], peso: [getPeso(451).libras, getPeso(451).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('battle armor'),habilidadDescripcion: habDescripcion('battle armor')},
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '451',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '452',
		dexSinnohDPPt: '128',
		dexUnovaB2W2: '202',
		dexKalosMontana: '016',
	},
	idiomas: {frances: namesFR[451],aleman: namesDE[451],japones: [namesJP[451][1], namesJP[451][0]],coreano: [namesKO[451][1], namesKO[451][0]]}
},
{
	id: '453',
	nombre: names[452], tipo: ['poison', 'fight'], clasificacion: 'Pokémon Boca Tóxica',
	altura: [getAltura(452).pies, getAltura(452).metros], peso: [getPeso(452).libras, getPeso(452).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '454',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 140,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 11, grupo: ['Humanoide'], amistad: 100,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '453',
		dexSinnohDPPt: '129',
		dexUnovaB2W2: '290',
		dexKalosCentral: '125',
	},
	idiomas: {frances: namesFR[452],aleman: namesDE[452],japones: [namesJP[452][1], namesJP[452][0]],coreano: [namesKO[452][1], namesKO[452][0]]}
},
{
	id: '454',
	nombre: names[453], tipo: ['poison', 'fight'], clasificacion: 'Pokémon Boca Tóxica',
	altura: [getAltura(453).pies, getAltura(453).metros], peso: [getPeso(453).libras, getPeso(453).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '453',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 11, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '454',
		dexSinnohDPPt: '130',
		dexUnovaB2W2: '291',
		dexKalosCentral: '126',
	},
	idiomas: {frances: namesFR[453],aleman: namesDE[453],japones: [namesJP[453][1], namesJP[453][0]],coreano: [namesKO[453][1], namesKO[453][0]]}
},
{
	id: '455',
	nombre: names[454], tipo: ['grass'], clasificacion: 'Pokémon Caza Bichos',
	altura: [getAltura(454).pies, getAltura(454).metros], peso: [getPeso(454).libras, getPeso(454).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '455',
		dexSinnohDPPt: '131',
		dexUnovaB2W2: '289',
		dexKalosMontana: '029',
	},
	idiomas: {frances: namesFR[454],aleman: namesDE[454],japones: [namesJP[454][1], namesJP[454][0]],coreano: [namesKO[454][1], namesKO[454][0]]}
},
{
	id: '456',
	nombre: names[455], tipo: ['water'], clasificacion: 'Pokémon Pez Ala',
	altura: [getAltura(455).pies, getAltura(455).metros], peso: [getPeso(455).libras, getPeso(455).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '457',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '456',
		dexSinnohDPPt: '134',
	},
	idiomas: {frances: namesFR[455],aleman: namesDE[455],japones: [namesJP[455][1], namesJP[455][0]],coreano: [namesKO[455][1], namesKO[455][0]]}
},
{
	id: '457',
	nombre: names[456], tipo: ['water'], clasificacion: 'Pokémon Neón',
	altura: [getAltura(456).pies, getAltura(456).metros], peso: [getPeso(456).libras, getPeso(456).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '456',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '457',
		dexSinnohDPPt: '135',
	},
	idiomas: {frances: namesFR[456],aleman: namesDE[456],japones: [namesJP[456][1], namesJP[456][0]],coreano: [namesKO[456][1], namesKO[456][0]]}
},
{
	id: '458',
	nombre: names[457], tipo: ['water', 'flying'], clasificacion: 'Pokémon Milano',
	altura: [getAltura(457).pies, getAltura(457).metros], peso: [getPeso(457).libras, getPeso(457).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Water Veil'),habilidadDescripcion: habDescripcion('Water Veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '226',
			metodo: "Subiendo de nivel con un Remoraid en el equipo",
			pokemon: '223',
		},
	},
	],
	ratioCaptura: 25,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '458',
		dexSinnohDPPt: '140',
		dexUnovaB2W2: '233',
		dexKalosCosta: '139',
	},
	idiomas: {frances: namesFR[457],aleman: namesDE[457],japones: [namesJP[457][1], namesJP[457][0]],coreano: [namesKO[457][1], namesKO[457][0]]}
},
{
	id: '459',
	nombre: names[458], tipo: ['grass', 'ice'], clasificacion: 'Pokémon Árbol Nieve',
	altura: [getAltura(458).pies, getAltura(458).metros], peso: [getPeso(458).libras, getPeso(458).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('nevada'),habilidadDescripcion: habDescripcion('nevada')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '460',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '459',
		dexSinnohDPPt: '142',
		dexKalosMontana: '088',
	},
	idiomas: {frances: namesFR[458],aleman: namesDE[458],japones: [namesJP[458][1], namesJP[458][0]],coreano: [namesKO[458][1], namesKO[458][0]]}
},
{
	id: '460',
	nombre: names[459], tipo: ['grass', 'ice'], clasificacion: 'Pokémon Árbol Nieve',
	altura: [getAltura(459).pies, getAltura(459).metros], peso: [getPeso(459).libras, getPeso(459).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('nevada'),habilidadDescripcion: habDescripcion('nevada')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '459',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '460',
		dexSinnohDPPt: '143',
		dexKalosMontana: '089',
	},
	idiomas: {frances: namesFR[459],aleman: namesDE[459],japones: [namesJP[459][1], namesJP[459][0]],coreano: [namesKO[459][1], namesKO[459][0]]}
},
{
	id: '461',
	nombre: names[460], tipo: ['dark', 'ice'], clasificacion: 'Pokémon Garra Filo',
	altura: [getAltura(460).pies, getAltura(460).metros], peso: [getPeso(460).libras, getPeso(460).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '215',
			metodo: "Subiendo de nivel con objeto Garrafilada en la noche",
			condicion: ['night'],
			objeto: getEvolveItem('razor claw'),
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '461',
		dexSinnohDPPt: '145',
		dexUnovaB2W2: '253',
		dexKalosMontana: '092',
	},
	idiomas: {frances: namesFR[460],aleman: namesDE[460],japones: [namesJP[460][1], namesJP[460][0]],coreano: [namesKO[460][1], namesKO[460][0]]}
},
{
	id: '462',
	nombre: names[461], tipo: ['electric', 'steel'], clasificacion: 'Pokémon Magnético',
	altura: [getAltura(461).pies, getAltura(461).metros], peso: [getPeso(461).libras, getPeso(461).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('magnet pull'),habilidadDescripcion: habDescripcion('magnet pull')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '082',
			metodo: "Subiendo de nivel en Monte Corona (D/P/Pt), Cueva Electroroca (B/W/B2/W2), Ruta 13 (X/Y) o Malvalanova (OR/AS)",
			condicion: ['location'],
			preevolucion: {
				numeroEspecie: '081',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '462',
		dexSinnohPt: '180',
		dexUnovaB2W2: '050',
		dexKalosMontana: '071',
	},
	idiomas: {frances: namesFR[461],aleman: namesDE[461],japones: [namesJP[461][1], namesJP[461][0]],coreano: [namesKO[461][1], namesKO[461][0]]}
},
{
	id: '463',
	nombre: names[462], tipo: ['normal'], clasificacion: 'Pokémon Lametazo',
	altura: [getAltura(462).pies, getAltura(462).metros], peso: [getPeso(462).libras, getPeso(462).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cloud nine'),habilidadDescripcion: habDescripcion('cloud nine')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '108',
			metodo: "Subiendo de nivel con movimiento Desenrrollar",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '463',
		dexJohtoHGSS: '181',
		dexSinnohPt: '162',
		dexUnovaB2W2: '285',
		dexKalosMontana: '135',
	},
	idiomas: {frances: namesFR[462],aleman: namesDE[462],japones: [namesJP[462][1], namesJP[462][0]],coreano: [namesKO[462][1], namesKO[462][0]]}
},
{
	id: '464',
	nombre: names[463], tipo: ['ground', 'rock'], clasificacion: 'Pokémon Taladro',
	altura: [getAltura(463).pies, getAltura(463).metros], peso: [getPeso(463).libras, getPeso(463).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('solid rock'),habilidadDescripcion: habDescripcion('solid rock')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '112',
			metodo: "Intercambio con objeto Protector",
			condicion: ['trade'],
			objeto: getEvolveItem('protector'),
			preevolucion: {
				numeroEspecie: '111',
				metodo: "Subiendo desde nivel 42",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '464',
		dexSinnohPt: '188',
		dexKalosCosta: '052',
	},
	idiomas: {frances: namesFR[463],aleman: namesDE[463],japones: [namesJP[463][1], namesJP[463][0]],coreano: [namesKO[463][1], namesKO[463][0]]}
},
{
	id: '465',
	nombre: names[464], tipo: ['grass'], clasificacion: 'Pokémon Enredadera',
	altura: [getAltura(464).pies, getAltura(464).metros], peso: [getPeso(464).libras, getPeso(464).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '114',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '465',
		dexJohtoHGSS: '183',
		dexSinnohPt: '182',
		dexUnovaB2W2: '218',
	},
	idiomas: {frances: namesFR[464],aleman: namesDE[464],japones: [namesJP[464][1], namesJP[464][0]],coreano: [namesKO[464][1], namesKO[464][0]]}
},
{
	id: '466',
	nombre: names[465], tipo: ['electric'], clasificacion: 'Pokémon Rayo',
	altura: [getAltura(465).pies, getAltura(465).metros], peso: [getPeso(465).libras, getPeso(465).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('motor drive'),habilidadDescripcion: habDescripcion('motor drive')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '125',
			metodo: "Intercambio con objeto Electrizador",
			condicion: ['trade'],
			objeto: getEvolveItem('electirizer'),
			preevolucion: {
				numeroEspecie: '239',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '466',
		dexSinnohPt: '199',
		dexUnovaB2W2: '058',
	},
	idiomas: {frances: namesFR[465],aleman: namesDE[465],japones: [namesJP[465][1], namesJP[465][0]],coreano: [namesKO[465][1], namesKO[465][0]]}
},
{
	id: '467',
	nombre: names[466], tipo: ['fire'], clasificacion: 'Pokémon Explosión',
	altura: [getAltura(466).pies, getAltura(466).metros], peso: [getPeso(466).libras, getPeso(466).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '126',
			metodo: "Intercambio con objeto Magmatizador",
			condicion: ['trade'],
			objeto: getEvolveItem('magmarizer'),
			preevolucion: {
				numeroEspecie: '240',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 26, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '467',
		dexSinnohPt: '202',
		dexUnovaB2W2: '055',
	},
	idiomas: {frances: namesFR[466],aleman: namesDE[466],japones: [namesJP[466][1], namesJP[466][0]],coreano: [namesKO[466][1], namesKO[466][0]]}
},
{
	id: '468',
	nombre: names[467], tipo: ['fairy', 'flying'], clasificacion: 'Pokémon Festejo',
	altura: [getAltura(467).pies, getAltura(467).metros], peso: [getPeso(467).libras, getPeso(467).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '176',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
			preevolucion: {
				numeroEspecie: '175',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 11, grupo: ['Hada', 'Volador'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '468',
		dexSinnohPt: '175',
	},
	idiomas: {frances: namesFR[467],aleman: namesDE[467],japones: [namesJP[467][1], namesJP[467][0]],coreano: [namesKO[467][1], namesKO[467][0]]}
},
{
	id: '469',
	nombre: names[468], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Libélula',
	altura: [getAltura(468).pies, getAltura(468).metros], peso: [getPeso(468).libras, getPeso(468).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '193',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '469',
		dexJohtoHGSS: '102',
		dexSinnohPt: '184',
		dexUnovaB2W2: '287',
		dexKalosCosta: '088',
	},
	idiomas: {frances: namesFR[468],aleman: namesDE[468],japones: [namesJP[468][1], namesJP[468][0]],coreano: [namesKO[468][1], namesKO[468][0]]}
},
{
	id: '470',
	nombre: names[469], tipo: ['grass'], clasificacion: 'Pokémon Verdor',
	altura: [getAltura(469).pies, getAltura(469).metros], peso: [getPeso(469).libras, getPeso(469).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Subiendo de nivel cerca de la Roca Musgo",
			condicion: ['location'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 35,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '470',
		dexSinnohPt: '169',
		dexUnovaB2W2: '097',
		dexKalosCosta: '083',
	},
	idiomas: {frances: namesFR[469],aleman: namesDE[469],japones: [namesJP[469][1], namesJP[469][0]],coreano: [namesKO[469][1], namesKO[469][0]]}
},
{
	id: '471',
	nombre: names[470], tipo: ['ice'], clasificacion: 'Pokémon Nievefresca',
	altura: [getAltura(470).pies, getAltura(470).metros], peso: [getPeso(470).libras, getPeso(470).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Subiendo de nivel cerca de la Roca Helada",
			condicion: ['location'],
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '700',
				metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
				condicion: ['happiness', 'movement'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 35,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '471',
		dexSinnohPt: '170',
		dexUnovaB2W2: '098',
		dexKalosCosta: '084',
	},
	idiomas: {frances: namesFR[470],aleman: namesDE[470],japones: [namesJP[470][1], namesJP[470][0]],coreano: [namesKO[470][1], namesKO[470][0]]}
},
{
	id: '472',
	nombre: names[471], tipo: ['ground', 'flying'], clasificacion: 'Pokémon Colmicorpio',
	altura: [getAltura(471).pies, getAltura(471).metros], peso: [getPeso(471).libras, getPeso(471).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hyper cutter'),habilidadDescripcion: habDescripcion('hyper cutter')},
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('poison heal'),habilidadDescripcion: habDescripcion('poison heal')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '207',
			metodo: "Subiendo de nivel con objeto Colmillo Agudo en la noche",
			condicion: ['night'],
			objeto: getEvolveItem('razor fang'),
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '472',
		dexSinnohPt: '154',
		dexUnovaB2W2: '222',
		dexKalosMontana: '116',
	},
	idiomas: {frances: namesFR[471],aleman: namesDE[471],japones: [namesJP[471][1], namesJP[471][0]],coreano: [namesKO[471][1], namesKO[471][0]]}
},
{
	id: '473',
	nombre: names[472], tipo: ['ice', 'ground'], clasificacion: 'Pokémon 2colmillos',
	altura: [getAltura(472).pies, getAltura(472).metros], peso: [getPeso(472).libras, getPeso(472).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('despiste'),habilidadDescripcion: habDescripcion('despiste')},
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '221',
			metodo: "Subiendo de nivel con movimiento Poder Pasado",
			condicion: ['movement'],
			preevolucion: {
				numeroEspecie: '220',
				metodo: "Subiendo desde nivel 33",
			},
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '473',
		dexJohtoHGSS: '197',
		dexSinnohPt: '205',
		dexUnovaB2W2: '260',
		dexKalosMontana: '078',
	},
	idiomas: {frances: namesFR[472],aleman: namesDE[472],japones: [namesJP[472][1], namesJP[472][0]],coreano: [namesKO[472][1], namesKO[472][0]]}
},
{
	id: '474',
	nombre: names[473], tipo: ['normal'], clasificacion: 'Pokémon Virtual',
	altura: [getAltura(473).pies, getAltura(473).metros], peso: [getPeso(473).libras, getPeso(473).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		{habilidadNombre: habNombre('descarga'),habilidadDescripcion: habDescripcion('descarga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '233',
			metodo: "Intercambio con objeto Discoxtraño",
			condicion: ['trade'],
			objeto: getEvolveItem('dubiousdisc'),
			preevolucion: {
				numeroEspecie: '137',
				metodo: "Intercambio con objeto Mejora",
				condicion: ['trade'],
				objeto: getEvolveItem('mejora'),
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '474',
		dexSinnohPt: '194',
	},
	idiomas: {frances: namesFR[473],aleman: namesDE[473],japones: [namesJP[473][1], namesJP[473][0]],coreano: [namesKO[473][1], namesKO[473][0]]}
},
{
	id: '475',
	nombre: names[474], tipo: ['psychic', 'fight'], clasificacion: 'Pokémon Cuchilla',
	altura: [getAltura(474).pies, getAltura(474).metros], peso: [getPeso(474).libras, getPeso(474).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('impasible'),habilidadDescripcion: habDescripcion('impasible')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '281',
			otraEvolucion: {
				numeroEspecie: '282',
				metodo: "Subiendo desde nivel 30",
			},
			preevolucion: {
				numeroEspecie: '280',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '281',
			metodo: "Aplicando Piedra Alba sólo si es Macho",
			condicion: ['male'],
			objeto: getEvolveItem('dawn stone'),
			preevolucion: {
				numeroEspecie: '280',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '475',
		dexSinnohPt: '160',
		dexKalosCentral: '067',
	},
	idiomas: {frances: namesFR[474],aleman: namesDE[474],japones: [namesJP[474][1], namesJP[474][0]],coreano: [namesKO[474][1], namesKO[474][0]]}
},
{
	id: '476',
	nombre: names[475], tipo: ['rock', 'steel'], clasificacion: 'Pokémon Brújula',
	altura: [getAltura(475).pies, getAltura(475).metros], peso: [getPeso(475).libras, getPeso(475).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('magnet pull'),habilidadDescripcion: habDescripcion('magnet pull')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '299',
			metodo: "Subiendo de nivel en Monte Corona (D/P/Pt), Cueva Electroroca (B/W/B2/W2), Ruta 13 (X/Y) o Malvalanova (OR/AS)",
			condicion: ['location'],
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '476',
		dexSinnohPt: '156',
		dexUnovaB2W2: '165',
		dexKalosCosta: '094',
	},
	idiomas: {frances: namesFR[475],aleman: namesDE[475],japones: [namesJP[475][1], namesJP[475][0]],coreano: [namesKO[475][1], namesKO[475][0]]}
},
{
	id: '477',
	nombre: names[476], tipo: ['ghost'], clasificacion: 'Pokémon Grilletes',
	altura: [getAltura(476).pies, getAltura(476).metros], peso: [getPeso(476).libras, getPeso(476).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '356',
			metodo: "Intercambio con objeto Telaterrible",
			condicion: ['trade'],
			objeto: getEvolveItem('reaper cloth'),
			preevolucion: {
				numeroEspecie: '355',
				metodo: "Subiendo desde nivel 37",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '477',
		dexSinnohPt: '191',
	},
	idiomas: {frances: namesFR[476],aleman: namesDE[476],japones: [namesJP[476][1], namesJP[476][0]],coreano: [namesKO[476][1], namesKO[476][0]]}
},
{
	id: '478',
	nombre: names[477], tipo: ['ice', 'ghost'], clasificacion: 'Pokémon Tierra Fría',
	altura: [getAltura(477).pies, getAltura(477).metros], peso: [getPeso(477).libras, getPeso(477).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cursed body'),habilidadDescripcion: habDescripcion('cursed body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '361',
			otraEvolucion: {
				numeroEspecie: '362',
				metodo: "Subiendo desde nivel 42",
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '478',
			metodo: "Aplicando Piedra Alba sólo si es Hembra",
			condicion: ['female'],
			objeto: getEvolveItem('dawn stone'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Mineral'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '478',
		dexSinnohPt: '208',
	},
	idiomas: {frances: namesFR[477],aleman: namesDE[477],japones: [namesJP[477][1], namesJP[477][0]],coreano: [namesKO[477][1], namesKO[477][0]]}
},
{
	id: '479',
	nombre: names[478], tipo: ['electric', 'ghost'], clasificacion: 'Pokémon Plasma',
	altura: [getAltura(478).pies, getAltura(478).metros], peso: [getPeso(478).libras, getPeso(478).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	dexRegiones: {
		dexNacional: '479',
		dexSinnohPt: '152',
		dexKalosMontana: '068',
	},
	idiomas: {frances: namesFR[478],aleman: namesDE[478],japones: [namesJP[478][1], namesJP[478][0]],coreano: [namesKO[478][1], namesKO[478][0]]}
},
{
	id: '480',
	nombre: names[479], tipo: ['psychic'], clasificacion: 'Pokémon Sabiduría',
	altura: [getAltura(479).pies, getAltura(479).metros], peso: [getPeso(479).libras, getPeso(479).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 140,
	dexRegiones: {
		dexNacional: '480',
		dexSinnohDPPt: '146',
	},
	idiomas: {frances: namesFR[479],aleman: namesDE[479],japones: [namesJP[479][1], namesJP[479][0]],coreano: [namesKO[479][1], namesKO[479][0]]}
},
{
	id: '481',
	nombre: names[480], tipo: ['psychic'], clasificacion: 'Pokémon Sensorio',
	altura: [getAltura(480).pies, getAltura(480).metros], peso: [getPeso(480).libras, getPeso(480).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 140,
	dexRegiones: {
		dexNacional: '481',
		dexSinnohDPPt: '147',
	},
	idiomas: {frances: namesFR[480],aleman: namesDE[480],japones: [namesJP[480][1], namesJP[480][0]],coreano: [namesKO[480][1], namesKO[480][0]]}
},
{
	id: '482',
	nombre: names[481], tipo: ['psychic'], clasificacion: 'Pokémon Voluntad',
	altura: [getAltura(481).pies, getAltura(481).metros], peso: [getPeso(481).libras, getPeso(481).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 2,
		ataqueEspecial: 1,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 140,
	dexRegiones: {
		dexNacional: '482',
		dexSinnohDPPt: '148',
	},
	idiomas: {frances: namesFR[481],aleman: namesDE[481],japones: [namesJP[481][1], namesJP[481][0]],coreano: [namesKO[481][1], namesKO[481][0]]}
},
{
	id: '483',
	nombre: names[482], tipo: ['steel', 'dragon'], clasificacion: 'Pokémon Temporal',
	altura: [getAltura(482).pies, getAltura(482).metros], peso: [getPeso(482).libras, getPeso(482).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '483',
		dexSinnohDPPt: '149',
	},
	idiomas: {frances: namesFR[482],aleman: namesDE[482],japones: [namesJP[482][1], namesJP[482][0]],coreano: [namesKO[482][1], namesKO[482][0]]}
},
{
	id: '484',
	nombre: names[483], tipo: ['water', 'dragon'], clasificacion: 'Pokémon Espacial',
	altura: [getAltura(483).pies, getAltura(483).metros], peso: [getPeso(483).libras, getPeso(483).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '484',
		dexSinnohDPPt: '150',
	},
	idiomas: {frances: namesFR[483],aleman: namesDE[483],japones: [namesJP[483][1], namesJP[483][0]],coreano: [namesKO[483][1], namesKO[483][0]]}
},
{
	id: '485',
	nombre: names[484], tipo: ['fire', 'steel'], clasificacion: 'Pokémon Domo Lava',
	altura: [getAltura(484).pies, getAltura(484).metros], peso: [getPeso(484).libras, getPeso(484).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 11, grupo: ['Desconocido'], amistad: 100,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '485',
	},
	idiomas: {frances: namesFR[484],aleman: namesDE[484],japones: [namesJP[484][1], namesJP[484][0]],coreano: [namesKO[484][1], namesKO[484][0]]}
},
{
	id: '486',
	nombre: names[485], tipo: ['normal'], clasificacion: 'Pokémon Colosal',
	altura: [getAltura(485).pies, getAltura(485).metros], peso: [getPeso(485).libras, getPeso(485).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('slow start'),habilidadDescripcion: habDescripcion('slow start')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '486',
	},
	idiomas: {frances: namesFR[485],aleman: namesDE[485],japones: [namesJP[485][1], namesJP[485][0]],coreano: [namesKO[485][1], namesKO[485][0]]}
},
{
	id: '487',
	nombre: names[486], tipo: ['ghost', 'dragon'], clasificacion: 'Pokémon Renegado',
	altura: [getAltura(486).pies, getAltura(486).metros], peso: [getPeso(486).libras, getPeso(486).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: "(Sólo en Giratina forma Alterada) "+habDescripcion('pressure')},
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: "(Sólo en Giratina forma Origen) "+habDescripcion('levitate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: "(Sólo en Giratina forma Alterada) "+habDescripcion('telepathy')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '487',
		dexSinnohPt: '210',
	},
	idiomas: {frances: namesFR[486],aleman: namesDE[486],japones: [namesJP[486][1], namesJP[486][0]],coreano: [namesKO[486][1], namesKO[486][0]]}
},
{
	id: '488',
	nombre: names[487], tipo: ['psychic'], clasificacion: 'Pokémon Lunar',
	altura: [getAltura(487).pies, getAltura(487).metros], peso: [getPeso(487).libras, getPeso(487).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '488',
	},
	idiomas: {frances: namesFR[487],aleman: namesDE[487],japones: [namesJP[487][1], namesJP[487][0]],coreano: [namesKO[487][1], namesKO[487][0]]}
},
{
	id: '489',
	nombre: names[488], tipo: ['water'], clasificacion: 'Pokémon Marino',
	altura: [getAltura(488).pies, getAltura(488).metros], peso: [getPeso(488).libras, getPeso(488).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 41, grupo: ['Hada', 'Agua 1'], amistad: 70,
	dexRegiones: {
		dexNacional: '489',
	},
	idiomas: {frances: namesFR[488],aleman: namesDE[488],japones: [namesJP[488][1], namesJP[488][0]],coreano: [namesKO[488][1], namesKO[488][0]]}
},
{
	id: '490',
	nombre: names[489], tipo: ['water'], clasificacion: 'Pokémon Náutico',
	altura: [getAltura(489).pies, getAltura(489).metros], peso: [getPeso(489).libras, getPeso(489).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 11, grupo: ['Hada', 'Agua 1'], amistad: 70,
	dexRegiones: {
		dexNacional: '490',
		dexSinnohDPPt: '151',
	},
	idiomas: {frances: namesFR[489],aleman: namesDE[489],japones: [namesJP[489][1], namesJP[489][0]],coreano: [namesKO[489][1], namesKO[489][0]]}
},
{
	id: '491',
	nombre: names[490], tipo: ['dark'], clasificacion: 'Pokémon Oscuridad',
	altura: [getAltura(490).pies, getAltura(490).metros], peso: [getPeso(490).libras, getPeso(490).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('bad dreams'),habilidadDescripcion: habDescripcion('bad dreams')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
		velocidad: 1,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '491',
	},
	idiomas: {frances: namesFR[490],aleman: namesDE[490],japones: [namesJP[490][1], namesJP[490][0]],coreano: [namesKO[490][1], namesKO[490][0]]}
},
{
	id: '492',
	nombre: names[491], tipo: ['grass'], clasificacion: 'Pokémon Gratitud',
	altura: [getAltura(491).pies, getAltura(491).metros], peso: [getPeso(491).libras, getPeso(491).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: "(Sólo en Shaymin forma Ordinaria) "+habDescripcion('natural cure')},
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: "(Sólo en Shaymin forma Cielo) "+habDescripcion('dicha')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		//(Solo en Shaymin forma Cielo) velocidad: 3,
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '492',
	},
	idiomas: {frances: namesFR[491],aleman: namesDE[491],japones: [namesJP[491][1], namesJP[491][0]],coreano: [namesKO[491][1], namesKO[491][0]]}
},
{
	id: '493',
	nombre: names[492], tipo: ['normal'], clasificacion: 'Pokémon Alfa',
	altura: [getAltura(492).pies, getAltura(492).metros], peso: [getPeso(492).libras, getPeso(492).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('multitipo'),habilidadDescripcion: habDescripcion('multitipo')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '493',
	},
	idiomas: {frances: namesFR[492],aleman: namesDE[492],japones: [namesJP[492][1], namesJP[492][0]],coreano: [namesKO[492][1], namesKO[492][0]]}
},


















{
	id: '494',
	nombre: names[493], tipo: ['psychic', 'fire'], clasificacion: 'Pokémon Victoria',
	altura: [getAltura(493).pies, getAltura(493).metros], peso: [getPeso(493).libras, getPeso(493).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('victory star'),habilidadDescripcion: habDescripcion('victory star')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 70,
	dexRegiones: {
		dexNacional: '494',
		dexUnovaBW: '000',
		dexUnovaB2W2: '000',
	},
	idiomas: {frances: namesFR[493],aleman: namesDE[493],japones: [namesJP[493][1], namesJP[493][0]],coreano: [namesKO[493][1], namesKO[493][0]]}
},
{
	id: '495',
	nombre: names[494], tipo: ['grass'], clasificacion: 'Pokémon Serpiente Hierba',
	altura: [getAltura(494).pies, getAltura(494).metros], peso: [getPeso(494).libras, getPeso(494).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '496',
			metodo: "Subiendo desde nivel 17",
			evolucion: {
				numeroEspecie: '497',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '495',
		dexUnovaBW: '001',
		dexUnovaB2W2: '001',
	},
	idiomas: {frances: namesFR[494],aleman: namesDE[494],japones: [namesJP[494][1], namesJP[494][0]],coreano: [namesKO[494][1], namesKO[494][0]]}
},
{
	id: '496',
	nombre: names[495], tipo: ['grass'], clasificacion: 'Pokémon Serpiente Hierba',
	altura: [getAltura(495).pies, getAltura(495).metros], peso: [getPeso(495).libras, getPeso(495).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '495',
			metodo: "Subiendo desde nivel 17",
		},
		evolucion: {
			numeroEspecie: '497',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '496',
		dexUnovaBW: '002',
		dexUnovaB2W2: '002',
	},
	idiomas: {frances: namesFR[495],aleman: namesDE[495],japones: [namesJP[495][1], namesJP[495][0]],coreano: [namesKO[495][1], namesKO[495][0]]}
},
{
	id: '497',
	nombre: names[496], tipo: ['grass'], clasificacion: 'Pokémon Realeza',
	altura: [getAltura(496).pies, getAltura(496).metros], peso: [getPeso(496).libras, getPeso(496).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '496',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '495',
				metodo: "Subiendo desde nivel 17",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Planta'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '497',
		dexUnovaBW: '003',
		dexUnovaB2W2: '003',
	},
	idiomas: {frances: namesFR[496],aleman: namesDE[496],japones: [namesJP[496][1], namesJP[496][0]],coreano: [namesKO[496][1], namesKO[496][0]]}
},
{
	id: '498',
	nombre: names[497], tipo: ['fire'], clasificacion: 'Pokémon Cerdo Fuego',
	altura: [getAltura(497).pies, getAltura(497).metros], peso: [getPeso(497).libras, getPeso(497).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '499',
			metodo: "Subiendo desde nivel 17",
			evolucion: {
				numeroEspecie: '500',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '498',
		dexUnovaBW: '004',
		dexUnovaB2W2: '004',
	},
	idiomas: {frances: namesFR[497],aleman: namesDE[497],japones: [namesJP[497][1], namesJP[497][0]],coreano: [namesKO[497][1], namesKO[497][0]]}
},
{
	id: '499',
	nombre: names[498], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Cerdo Fuego',
	altura: [getAltura(498).pies, getAltura(498).metros], peso: [getPeso(498).libras, getPeso(498).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sebo'),habilidadDescripcion: habDescripcion('sebo')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '498',
			metodo: "Subiendo desde nivel 17",
		},
		evolucion: {
			numeroEspecie: '500',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '499',
		dexUnovaBW: '005',
		dexUnovaB2W2: '005',
	},
	idiomas: {frances: namesFR[498],aleman: namesDE[498],japones: [namesJP[498][1], namesJP[498][0]],coreano: [namesKO[498][1], namesKO[498][0]]}
},
{
	id: '500',
	nombre: names[499], tipo: ['fire', 'fight'], clasificacion: 'Pokémon Cerdo Ígneo',
	altura: [getAltura(499).pies, getAltura(499).metros], peso: [getPeso(499).libras, getPeso(499).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '499',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '498',
				metodo: "Subiendo desde nivel 17",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '500',
		dexUnovaBW: '006',
		dexUnovaB2W2: '006',
	},
	idiomas: {frances: namesFR[499],aleman: namesDE[499],japones: [namesJP[499][1], namesJP[499][0]],coreano: [namesKO[499][1], namesKO[499][0]]}
},
{
	id: '501',
	nombre: names[500], tipo: ['water'], clasificacion: 'Pokémon Nutria',
	altura: [getAltura(500).pies, getAltura(500).metros], peso: [getPeso(500).libras, getPeso(500).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '502',
			metodo: "Subiendo desde nivel 17",
			evolucion: {
				numeroEspecie: '503',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '501',
		dexUnovaBW: '007',
		dexUnovaB2W2: '007',
	},
	idiomas: {frances: namesFR[500],aleman: namesDE[500],japones: [namesJP[500][1], namesJP[500][0]],coreano: [namesKO[500][1], namesKO[500][0]]}
},
{
	id: '502',
	nombre: names[501], tipo: ['water'], clasificacion: 'Pokémon Superación',
	altura: [getAltura(501).pies, getAltura(501).metros], peso: [getPeso(501).libras, getPeso(501).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '501',
			metodo: "Subiendo desde nivel 17",
		},
		evolucion: {
			numeroEspecie: '503',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '502',
		dexUnovaBW: '008',
		dexUnovaB2W2: '008',
	},
	idiomas: {frances: namesFR[501],aleman: namesDE[501],japones: [namesJP[501][1], namesJP[501][0]],coreano: [namesKO[501][1], namesKO[501][0]]}
},
{
	id: '503',
	nombre: names[502], tipo: ['water'], clasificacion: 'Pokémon Majestuoso',
	altura: [getAltura(502).pies, getAltura(502).metros], peso: [getPeso(502).libras, getPeso(502).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '502',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '501',
				metodo: "Subiendo desde nivel 17",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '503',
		dexUnovaBW: '009',
		dexUnovaB2W2: '009',
	},
	idiomas: {frances: namesFR[502],aleman: namesDE[502],japones: [namesJP[502][1], namesJP[502][0]],coreano: [namesKO[502][1], namesKO[502][0]]}
},
{
	id: '504',
	nombre: names[503], tipo: ['normal'], clasificacion: 'Pokémon Explorador',
	altura: [getAltura(503).pies, getAltura(503).metros], peso: [getPeso(503).libras, getPeso(503).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '505',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '504',
		dexUnovaBW: '010',
		dexUnovaB2W2: '010',
		dexKalosMontana: '046',
	},
	idiomas: {frances: namesFR[503],aleman: namesDE[503],japones: [namesJP[503][1], namesJP[503][0]],coreano: [namesKO[503][1], namesKO[503][0]]}
},
{
	id: '505',
	nombre: names[504], tipo: ['normal'], clasificacion: 'Pokémon Alerta',
	altura: [getAltura(504).pies, getAltura(504).metros], peso: [getPeso(504).libras, getPeso(504).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illuminate'),habilidadDescripcion: habDescripcion('illuminate')},
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '504',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '505',
		dexUnovaBW: '011',
		dexUnovaB2W2: '011',
		dexKalosMontana: '047',
	},
	idiomas: {frances: namesFR[504],aleman: namesDE[504],japones: [namesJP[504][1], namesJP[504][0]],coreano: [namesKO[504][1], namesKO[504][0]]}
},
{
	id: '506',
	nombre: names[505], tipo: ['normal'], clasificacion: 'Pokémon Perrito',
	altura: [getAltura(505).pies, getAltura(505).metros], peso: [getPeso(505).libras, getPeso(505).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('vital spirit'),habilidadDescripcion: habDescripcion('vital spirit')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Fuga'),habilidadDescripcion: habDescripcion('Fuga')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '507',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '508',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '506',
		dexUnovaBW: '012',
		dexUnovaB2W2: '022',
	},
	idiomas: {frances: namesFR[505],aleman: namesDE[505],japones: [namesJP[505][1], namesJP[505][0]],coreano: [namesKO[505][1], namesKO[505][0]]}
},
{
	id: '507',
	nombre: names[506], tipo: ['normal'], clasificacion: 'Pokémon Leal',
	altura: [getAltura(506).pies, getAltura(506).metros], peso: [getPeso(506).libras, getPeso(506).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('sand rush'),habilidadDescripcion: habDescripcion('sand rush')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '506',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '508',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '507',
		dexUnovaBW: '013',
		dexUnovaB2W2: '023',
	},
	idiomas: {frances: namesFR[506],aleman: namesDE[506],japones: [namesJP[506][1], namesJP[506][0]],coreano: [namesKO[506][1], namesKO[506][0]]}
},
{
	id: '508',
	nombre: names[507], tipo: ['normal'], clasificacion: 'Pokémon Magnánimo',
	altura: [getAltura(507).pies, getAltura(507).metros], peso: [getPeso(507).libras, getPeso(507).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('sand rush'),habilidadDescripcion: habDescripcion('sand rush')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '507',
			metodo: "Subiendo desde nivel 32",
			preevolucion: {
				numeroEspecie: '506',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '508',
		dexUnovaBW: '014',
		dexUnovaB2W2: '024',
	},
	idiomas: {frances: namesFR[507],aleman: namesDE[507],japones: [namesJP[507][1], namesJP[507][0]],coreano: [namesKO[507][1], namesKO[507][0]]}
},
{
	id: '509',
	nombre: names[508], tipo: ['dark'], clasificacion: 'Pokémon Malicioso',
	altura: [getAltura(508).pies, getAltura(508).metros], peso: [getPeso(508).libras, getPeso(508).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '510',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '509',
		dexUnovaBW: '015',
		dexUnovaB2W2: '012',
		dexKalosMontana: '042',
	},
	idiomas: {frances: namesFR[508],aleman: namesDE[508],japones: [namesJP[508][1], namesJP[508][0]],coreano: [namesKO[508][1], namesKO[508][0]]}
},
{
	id: '510',
	nombre: names[509], tipo: ['dark'], clasificacion: 'Pokémon Calculador',
	altura: [getAltura(509).pies, getAltura(509).metros], peso: [getPeso(509).libras, getPeso(509).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '509',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '510',
		dexUnovaBW: '016',
		dexUnovaB2W2: '013',
		dexKalosMontana: '043',
	},
	idiomas: {frances: namesFR[509],aleman: namesDE[509],japones: [namesJP[509][1], namesJP[509][0]],coreano: [namesKO[509][1], namesKO[509][0]]}
},
{
	id: '511',
	nombre: names[510], tipo: ['grass'], clasificacion: 'Pokémon Mono Hierba',
	altura: [getAltura(510).pies, getAltura(510).metros], peso: [getPeso(510).libras, getPeso(510).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '512',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '511',
		dexUnovaBW: '017',
		dexUnovaB2W2: '037',
		dexKalosCentral: '029',
	},
	idiomas: {frances: namesFR[510],aleman: namesDE[510],japones: [namesJP[510][1], namesJP[510][0]],coreano: [namesKO[510][1], namesKO[510][0]]}
},
{
	id: '512',
	nombre: names[511], tipo: ['grass'], clasificacion: 'Pokémon Mono Pincho',
	altura: [getAltura(511).pies, getAltura(511).metros], peso: [getPeso(511).libras, getPeso(511).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '511',
			metodo: "Aplicando Piedra Hoja",
			objeto: getEvolveItem('piedra hoja'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '512',
		dexUnovaBW: '018',
		dexUnovaB2W2: '038',
		dexKalosCentral: '030',
	},
	idiomas: {frances: namesFR[511],aleman: namesDE[511],japones: [namesJP[511][1], namesJP[511][0]],coreano: [namesKO[511][1], namesKO[511][0]]}
},
{
	id: '513',
	nombre: names[512], tipo: ['fire'], clasificacion: 'Pokémon Ardiente',
	altura: [getAltura(512).pies, getAltura(512).metros], peso: [getPeso(512).libras, getPeso(512).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '514',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '513',
		dexUnovaBW: '019',
		dexUnovaB2W2: '039',
		dexKalosCentral: '031',
	},
	idiomas: {frances: namesFR[512],aleman: namesDE[512],japones: [namesJP[512][1], namesJP[512][0]],coreano: [namesKO[512][1], namesKO[512][0]]}
},
{
	id: '514',
	nombre: names[513], tipo: ['fire'], clasificacion: 'Pokémon Lumbre',
	altura: [getAltura(513).pies, getAltura(513).metros], peso: [getPeso(513).libras, getPeso(513).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '513',
			metodo: "Aplicando Piedra Fuego",
			objeto: getEvolveItem('firestone'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '514',
		dexUnovaBW: '020',
		dexUnovaB2W2: '040',
		dexKalosCentral: '032',
	},
	idiomas: {frances: namesFR[513],aleman: namesDE[513],japones: [namesJP[513][1], namesJP[513][0]],coreano: [namesKO[513][1], namesKO[513][0]]}
},
{
	id: '515',
	nombre: names[514], tipo: ['water'], clasificacion: 'Pokémon Salpicadura',
	altura: [getAltura(514).pies, getAltura(514).metros], peso: [getPeso(514).libras, getPeso(514).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '516',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '515',
		dexUnovaBW: '021',
		dexUnovaB2W2: '041',
		dexKalosCentral: '033',
	},
	idiomas: {frances: namesFR[514],aleman: namesDE[514],japones: [namesJP[514][1], namesJP[514][0]],coreano: [namesKO[514][1], namesKO[514][0]]}
},
{
	id: '516',
	nombre: names[515], tipo: ['water'], clasificacion: 'Pokémon Drenaje',
	altura: [getAltura(515).pies, getAltura(515).metros], peso: [getPeso(515).libras, getPeso(515).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '515',
			metodo: "Aplicando Piedra Agua",
			objeto: getEvolveItem('waterstone'),
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '516',
		dexUnovaBW: '022',
		dexUnovaB2W2: '042',
		dexKalosCentral: '034',
	},
	idiomas: {frances: namesFR[515],aleman: namesDE[515],japones: [namesJP[515][1], namesJP[515][0]],coreano: [namesKO[515][1], namesKO[515][0]]}
},
{
	id: '517',
	nombre: names[516], tipo: ['psychic'], clasificacion: 'Pokémon Comesueños',
	altura: [getAltura(516).pies, getAltura(516).metros], peso: [getPeso(516).libras, getPeso(516).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '518',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 11, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '517',
		dexUnovaBW: '023',
		dexUnovaB2W2: '086',
	},
	idiomas: {frances: namesFR[516],aleman: namesDE[516],japones: [namesJP[516][1], namesJP[516][0]],coreano: [namesKO[516][1], namesKO[516][0]]}
},
{
	id: '518',
	nombre: names[517], tipo: ['psychic'], clasificacion: 'Pokémon Duermevela',
	altura: [getAltura(517).pies, getAltura(517).metros], peso: [getPeso(517).libras, getPeso(517).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('alerta'),habilidadDescripcion: habDescripcion('alerta')},
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '517',
			metodo: "Aplicando Piedra Lunar",
			objeto: getEvolveItem('piedra lunar'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 11, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '518',
		dexUnovaBW: '024',
		dexUnovaB2W2: '087',
	},
	idiomas: {frances: namesFR[517],aleman: namesDE[517],japones: [namesJP[517][1], namesJP[517][0]],coreano: [namesKO[517][1], namesKO[517][0]]}
},
{
	id: '519',
	nombre: names[518], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Pichón',
	altura: [getAltura(518).pies, getAltura(518).metros], peso: [getPeso(518).libras, getPeso(518).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '520',
			metodo: "Subiendo desde nivel 21",
			evolucion: {
				numeroEspecie: '521',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '519',
		dexUnovaBW: '025',
		dexUnovaB2W2: '014',
	},
	idiomas: {frances: namesFR[518],aleman: namesDE[518],japones: [namesJP[518][1], namesJP[518][0]],coreano: [namesKO[518][1], namesKO[518][0]]}
},
{
	id: '520',
	nombre: names[519], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Torcaz',
	altura: [getAltura(519).pies, getAltura(519).metros], peso: [getPeso(519).libras, getPeso(519).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '519',
			metodo: "Subiendo desde nivel 21",
		},
		evolucion: {
			numeroEspecie: '521',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '520',
		dexUnovaBW: '026',
		dexUnovaB2W2: '015',
	},
	idiomas: {frances: namesFR[519],aleman: namesDE[519],japones: [namesJP[519][1], namesJP[519][0]],coreano: [namesKO[519][1], namesKO[519][0]]}
},
{
	id: '521',
	nombre: names[520], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Altanero',
	altura: [getAltura(520).pies, getAltura(520).metros], peso: [getPeso(520).libras, getPeso(520).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		{habilidadNombre: habNombre('afortunado'),habilidadDescripcion: habDescripcion('afortunado')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '520',
			metodo: "Subiendo desde nivel 32",
			preevolucion: {
				numeroEspecie: '519',
				metodo: "Subiendo desde nivel 21",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '521',
		dexUnovaBW: '027',
		dexUnovaB2W2: '016',
	},
	idiomas: {frances: namesFR[520],aleman: namesDE[520],japones: [namesJP[520][1], namesJP[520][0]],coreano: [namesKO[520][1], namesKO[520][0]]}
},
{
	id: '522',
	nombre: names[521], tipo: ['electric'], clasificacion: 'Pokémon Electrizado',
	altura: [getAltura(521).pies, getAltura(521).metros], peso: [getPeso(521).libras, getPeso(521).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('motor drive'),habilidadDescripcion: habDescripcion('motor drive')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '523',
			metodo: "Subiendo desde nivel 27",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '522',
		dexUnovaBW: '028',
		dexUnovaB2W2: '147',
	},
	idiomas: {frances: namesFR[521],aleman: namesDE[521],japones: [namesJP[521][1], namesJP[521][0]],coreano: [namesKO[521][1], namesKO[521][0]]}
},
{
	id: '523',
	nombre: names[522], tipo: ['electric'], clasificacion: 'Pokémon Rayo',
	altura: [getAltura(522).pies, getAltura(522).metros], peso: [getPeso(522).libras, getPeso(522).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('motor drive'),habilidadDescripcion: habDescripcion('motor drive')},
		{habilidadNombre: habNombre('Lightningrod'),habilidadDescripcion: habDescripcion('Lightningrod')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '522',
			metodo: "Subiendo desde nivel 27",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '523',
		dexUnovaBW: '029',
		dexUnovaB2W2: '148',
	},
	idiomas: {frances: namesFR[522],aleman: namesDE[522],japones: [namesJP[522][1], namesJP[522][0]],coreano: [namesKO[522][1], namesKO[522][0]]}
},
{
	id: '524',
	nombre: names[523], tipo: ['rock'], clasificacion: 'Pokémon Manto',
	altura: [getAltura(523).pies, getAltura(523).metros], peso: [getPeso(523).libras, getPeso(523).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '525',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '526',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '524',
		dexUnovaBW: '030',
		dexUnovaB2W2: '068',
		dexKalosCosta: '120',
	},
	idiomas: {frances: namesFR[523],aleman: namesDE[523],japones: [namesJP[523][1], namesJP[523][0]],coreano: [namesKO[523][1], namesKO[523][0]]}
},
{
	id: '525',
	nombre: names[524], tipo: ['rock'], clasificacion: 'Pokémon Mineral',
	altura: [getAltura(524).pies, getAltura(524).metros], peso: [getPeso(524).libras, getPeso(524).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '524',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '526',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '525',
		dexUnovaBW: '031',
		dexUnovaB2W2: '069',
		dexKalosCosta: '121',
	},
	idiomas: {frances: namesFR[524],aleman: namesDE[524],japones: [namesJP[524][1], namesJP[524][0]],coreano: [namesKO[524][1], namesKO[524][0]]}
},
{
	id: '526',
	nombre: names[525], tipo: ['rock'], clasificacion: 'Pokémon Presurizado',
	altura: [getAltura(525).pies, getAltura(525).metros], peso: [getPeso(525).libras, getPeso(525).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '525',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '524',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '526',
		dexUnovaBW: '032',
		dexUnovaB2W2: '070',
		dexKalosCosta: '122',
	},
	idiomas: {frances: namesFR[525],aleman: namesDE[525],japones: [namesJP[525][1], namesJP[525][0]],coreano: [namesKO[525][1], namesKO[525][0]]}
},
{
	id: '527',
	nombre: names[526], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Murciélago',
	altura: [getAltura(526).pies, getAltura(526).metros], peso: [getPeso(526).libras, getPeso(526).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('simple'),habilidadDescripcion: habDescripcion('simple')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '528',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '527',
		dexUnovaBW: '033',
		dexUnovaB2W2: '066',
		dexKalosCosta: '055',
	},
	idiomas: {frances: namesFR[526],aleman: namesDE[526],japones: [namesJP[526][1], namesJP[526][0]],coreano: [namesKO[526][1], namesKO[526][0]]}
},
{
	id: '528',
	nombre: names[527], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Galante',
	altura: [getAltura(527).pies, getAltura(527).metros], peso: [getPeso(527).libras, getPeso(527).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unaware'),habilidadDescripcion: habDescripcion('unaware')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('simple'),habilidadDescripcion: habDescripcion('simple')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '527',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '528',
		dexUnovaBW: '034',
		dexUnovaB2W2: '067',
		dexKalosCosta: '056',
	},
	idiomas: {frances: namesFR[527],aleman: namesDE[527],japones: [namesJP[527][1], namesJP[527][0]],coreano: [namesKO[527][1], namesKO[527][0]]}
},
{
	id: '529',
	nombre: names[528], tipo: ['ground'], clasificacion: 'Pokémon Topo',
	altura: [getAltura(528).pies, getAltura(528).metros], peso: [getPeso(528).libras, getPeso(528).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		{habilidadNombre: habNombre('sand rush'),habilidadDescripcion: habDescripcion('sand rush')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '530',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '529',
		dexUnovaBW: '035',
		dexUnovaB2W2: '076',
	},
	idiomas: {frances: namesFR[528],aleman: namesDE[528],japones: [namesJP[528][1], namesJP[528][0]],coreano: [namesKO[528][1], namesKO[528][0]]}
},
{
	id: '530',
	nombre: names[529], tipo: ['ground', 'steel'], clasificacion: 'Pokémon Subterráneo',
	altura: [getAltura(529).pies, getAltura(529).metros], peso: [getPeso(529).libras, getPeso(529).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: habDescripcion('sand force')},
		{habilidadNombre: habNombre('sand rush'),habilidadDescripcion: habDescripcion('sand rush')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '529',
			metodo: "Subiendo desde nivel 31",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '530',
		dexUnovaBW: '036',
		dexUnovaB2W2: '077',
	},
	idiomas: {frances: namesFR[529],aleman: namesDE[529],japones: [namesJP[529][1], namesJP[529][0]],coreano: [namesKO[529][1], namesKO[529][0]]}
},
{
	id: '531',
	nombre: names[530], tipo: ['normal'], clasificacion: 'Pokémon Escucha',
	altura: [getAltura(530).pies, getAltura(530).metros], peso: [getPeso(530).libras, getPeso(530).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
	},
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '531',
		dexUnovaBW: '037',
		dexUnovaB2W2: '036',
		dexKalosCentral: '123',
	},
	idiomas: {frances: namesFR[530],aleman: namesDE[530],japones: [namesJP[530][1], namesJP[530][0]],coreano: [namesKO[530][1], namesKO[530][0]]}
},
{
	id: '532',
	nombre: names[531], tipo: ['fight'], clasificacion: 'Pokémon Musculoso',
	altura: [getAltura(531).pies, getAltura(531).metros], peso: [getPeso(531).libras, getPeso(531).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '533',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '534',
				metodo: "Intercambio",
				condicion: ['trade'],
			},
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '532',
		dexUnovaBW: '038',
		dexUnovaB2W2: '073',
		dexKalosMontana: '093',
	},
	idiomas: {frances: namesFR[531],aleman: namesDE[531],japones: [namesJP[531][1], namesJP[531][0]],coreano: [namesKO[531][1], namesKO[531][0]]}
},
{
	id: '533',
	nombre: names[532], tipo: ['fight'], clasificacion: 'Pokémon Musculoso',
	altura: [getAltura(532).pies, getAltura(532).metros], peso: [getPeso(532).libras, getPeso(532).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '532',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '534',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '533',
		dexUnovaBW: '039',
		dexUnovaB2W2: '074',
		dexKalosMontana: '094',
	},
	idiomas: {frances: namesFR[532],aleman: namesDE[532],japones: [namesJP[532][1], namesJP[532][0]],coreano: [namesKO[532][1], namesKO[532][0]]}
},
{
	id: '534',
	nombre: names[533], tipo: ['fight'], clasificacion: 'Pokémon Musculoso',
	altura: [getAltura(533).pies, getAltura(533).metros], peso: [getPeso(533).libras, getPeso(533).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '533',
			metodo: "Intercambio",
			condicion: ['trade'],
			preevolucion: {
				numeroEspecie: '532',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 75,hembra: 25},
	dexRegiones: {
		dexNacional: '534',
		dexUnovaBW: '040',
		dexUnovaB2W2: '075',
		dexKalosMontana: '095',
	},
	idiomas: {frances: namesFR[533],aleman: namesDE[533],japones: [namesJP[533][1], namesJP[533][0]],coreano: [namesKO[533][1], namesKO[533][0]]}
},
{
	id: '535',
	nombre: names[534], tipo: ['water'], clasificacion: 'Pokémon Renacuajo',
	altura: [getAltura(534).pies, getAltura(534).metros], peso: [getPeso(534).libras, getPeso(534).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '536',
			metodo: "Subiendo desde nivel 25",
			evolucion: {
				numeroEspecie: '537',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '535',
		dexUnovaBW: '041',
		dexUnovaB2W2: '228',
	},
	idiomas: {frances: namesFR[534],aleman: namesDE[534],japones: [namesJP[534][1], namesJP[534][0]],coreano: [namesKO[534][1], namesKO[534][0]]}
},
{
	id: '536',
	nombre: names[535], tipo: ['water', 'ground'], clasificacion: 'Pokémon Vibrante',
	altura: [getAltura(535).pies, getAltura(535).metros], peso: [getPeso(535).libras, getPeso(535).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '535',
			metodo: "Subiendo desde nivel 25",
		},
		evolucion: {
			numeroEspecie: '537',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '536',
		dexUnovaBW: '042',
		dexUnovaB2W2: '229',
	},
	idiomas: {frances: namesFR[535],aleman: namesDE[535],japones: [namesJP[535][1], namesJP[535][0]],coreano: [namesKO[535][1], namesKO[535][0]]}
},
{
	id: '537',
	nombre: names[536], tipo: ['water', 'ground'], clasificacion: 'Pokémon Vibrante',
	altura: [getAltura(536).pies, getAltura(536).metros], peso: [getPeso(536).libras, getPeso(536).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '536',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '535',
				metodo: "Subiendo desde nivel 25",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '537',
		dexUnovaBW: '043',
		dexUnovaB2W2: '230',
	},
	idiomas: {frances: namesFR[536],aleman: namesDE[536],japones: [namesJP[536][1], namesJP[536][0]],coreano: [namesKO[536][1], namesKO[536][0]]}
},
{
	id: '538',
	nombre: names[537], tipo: ['fight'], clasificacion: 'Pokémon Judo',
	altura: [getAltura(537).pies, getAltura(537).metros], peso: [getPeso(537).libras, getPeso(537).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('Agallas'),habilidadDescripcion: habDescripcion('Agallas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '538',
		dexUnovaBW: '044',
		dexUnovaB2W2: '267',
		dexKalosCosta: '097',
	},
	idiomas: {frances: namesFR[537],aleman: namesDE[537],japones: [namesJP[537][1], namesJP[537][0]],coreano: [namesKO[537][1], namesKO[537][0]]}
},
{
	id: '539',
	nombre: names[538], tipo: ['fight'], clasificacion: 'Pokémon Karate',
	altura: [getAltura(538).pies, getAltura(538).metros], peso: [getPeso(538).libras, getPeso(538).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '539',
		dexUnovaBW: '045',
		dexUnovaB2W2: '268',
		dexKalosCosta: '098',
	},
	idiomas: {frances: namesFR[538],aleman: namesDE[538],japones: [namesJP[538][1], namesJP[538][0]],coreano: [namesKO[538][1], namesKO[538][0]]}
},
{
	id: '540',
	nombre: names[539], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Sastre',
	altura: [getAltura(539).pies, getAltura(539).metros], peso: [getPeso(539).libras, getPeso(539).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '541',
			metodo: "Subiendo desde nivel 20",
			evolucion: {
				numeroEspecie: '542',
				metodo: "Felicidad máxima, subiendo de nivel",
				condicion: ['happiness'],
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '540',
		dexUnovaBW: '046',
		dexUnovaB2W2: '017',
	},
	idiomas: {frances: namesFR[539],aleman: namesDE[539],japones: [namesJP[539][1], namesJP[539][0]],coreano: [namesKO[539][1], namesKO[539][0]]}
},
{
	id: '541',
	nombre: names[540], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Arropado',
	altura: [getAltura(540).pies, getAltura(540).metros], peso: [getPeso(540).libras, getPeso(540).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '540',
			metodo: "Subiendo desde nivel 20",
		},
		evolucion: {
			numeroEspecie: '542',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '541',
		dexUnovaBW: '047',
		dexUnovaB2W2: '018',
	},
	idiomas: {frances: namesFR[540],aleman: namesDE[540],japones: [namesJP[540][1], namesJP[540][0]],coreano: [namesKO[540][1], namesKO[540][0]]}
},
{
	id: '542',
	nombre: names[541], tipo: ['bug', 'grass'], clasificacion: 'Pokémon Cuidador',
	altura: [getAltura(541).pies, getAltura(541).metros], peso: [getPeso(541).libras, getPeso(541).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '541',
			metodo: "Felicidad máxima, subiendo de nivel",
			condicion: ['happiness'],
			preevolucion: {
				numeroEspecie: '540',
				metodo: "Subiendo desde nivel 20",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '542',
		dexUnovaBW: '048',
		dexUnovaB2W2: '019',
	},
	idiomas: {frances: namesFR[541],aleman: namesDE[541],japones: [namesJP[541][1], namesJP[541][0]],coreano: [namesKO[541][1], namesKO[541][0]]}
},
{
	id: '543',
	nombre: names[542], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Ciempiés',
	altura: [getAltura(542).pies, getAltura(542).metros], peso: [getPeso(542).libras, getPeso(542).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '544',
			metodo: "Subiendo desde nivel 22",
			evolucion: {
				numeroEspecie: '545',
				metodo: "Subiendo desde nivel 30",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '543',
		dexUnovaBW: '049',
		dexUnovaB2W2: '043',
		dexKalosCentral: '120',
	},
	idiomas: {frances: namesFR[542],aleman: namesDE[542],japones: [namesJP[542][1], namesJP[542][0]],coreano: [namesKO[542][1], namesKO[542][0]]}
},
{
	id: '544',
	nombre: names[543], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Pupaciempiés',
	altura: [getAltura(543).pies, getAltura(543).metros], peso: [getPeso(543).libras, getPeso(543).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '543',
			metodo: "Subiendo desde nivel 22",
		},
		evolucion: {
			numeroEspecie: '545',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '544',
		dexUnovaBW: '050',
		dexUnovaB2W2: '044',
		dexKalosCentral: '121',
	},
	idiomas: {frances: namesFR[543],aleman: namesDE[543],japones: [namesJP[543][1], namesJP[543][0]],coreano: [namesKO[543][1], namesKO[543][0]]}
},
{
	id: '545',
	nombre: names[544], tipo: ['bug', 'poison'], clasificacion: 'Pokémon Megaciempiés',
	altura: [getAltura(544).pies, getAltura(544).metros], peso: [getPeso(544).libras, getPeso(544).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('quick feet'),habilidadDescripcion: habDescripcion('quick feet')},
		{habilidadNombre: habNombre('impulso'),habilidadDescripcion: habDescripcion('impulso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '544',
			metodo: "Subiendo desde nivel 30",
			preevolucion: {
				numeroEspecie: '543',
				metodo: "Subiendo desde nivel 22",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '545',
		dexUnovaBW: '051',
		dexUnovaB2W2: '045',
		dexKalosCentral: '122',
	},
	idiomas: {frances: namesFR[544],aleman: namesDE[544],japones: [namesJP[544][1], namesJP[544][0]],coreano: [namesKO[544][1], namesKO[544][0]]}
},
{
	id: '546',
	nombre: names[545], tipo: ['grass', 'fairy'], clasificacion: 'Pokémon Bolalgodón',
	altura: [getAltura(545).pies, getAltura(545).metros], peso: [getPeso(545).libras, getPeso(545).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '547',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '546',
		dexUnovaBW: '052',
		dexUnovaB2W2: '082',
	},
	idiomas: {frances: namesFR[545],aleman: namesDE[545],japones: [namesJP[545][1], namesJP[545][0]],coreano: [namesKO[545][1], namesKO[545][0]]}
},
{
	id: '547',
	nombre: names[546], tipo: ['grass', 'fairy'], clasificacion: 'Pokémon Vuelalviento',
	altura: [getAltura(546).pies, getAltura(546).metros], peso: [getPeso(546).libras, getPeso(546).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '546',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Hada', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '547',
		dexUnovaBW: '053',
		dexUnovaB2W2: '083',
	},
	idiomas: {frances: namesFR[546],aleman: namesDE[546],japones: [namesJP[546][1], namesJP[546][0]],coreano: [namesKO[546][1], namesKO[546][0]]}
},
{
	id: '548',
	nombre: names[547], tipo: ['grass'], clasificacion: 'Pokémon Bulbo',
	altura: [getAltura(547).pies, getAltura(547).metros], peso: [getPeso(547).libras, getPeso(547).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '549',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '548',
		dexUnovaBW: '054',
		dexUnovaB2W2: '084',
	},
	idiomas: {frances: namesFR[547],aleman: namesDE[547],japones: [namesJP[547][1], namesJP[547][0]],coreano: [namesKO[547][1], namesKO[547][0]]}
},
{
	id: '549',
	nombre: names[548], tipo: ['grass'], clasificacion: 'Pokémon Adornofloral',
	altura: [getAltura(548).pies, getAltura(548).metros], peso: [getPeso(548).libras, getPeso(548).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('leaf guard'),habilidadDescripcion: habDescripcion('leaf guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '548',
			metodo: "Aplicando Piedra Solar",
			objeto: getEvolveItem('piedra solar'),
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '549',
		dexUnovaBW: '055',
		dexUnovaB2W2: '085',
	},
	idiomas: {frances: namesFR[548],aleman: namesDE[548],japones: [namesJP[548][1], namesJP[548][0]],coreano: [namesKO[548][1], namesKO[548][0]]}
},
{
	id: '550',
	nombre: names[549], tipo: ['water'], clasificacion: 'Pokémon Violento',
	altura: [getAltura(549).pies, getAltura(549).metros], peso: [getPeso(549).libras, getPeso(549).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	ratioCaptura: 25,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 41, grupo: ['Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '550',
		dexUnovaBW: '056',
		dexUnovaB2W2: '104',
		dexKalosMontana: '060',
	},
	idiomas: {frances: namesFR[549],aleman: namesDE[549],japones: [namesJP[549][1], namesJP[549][0]],coreano: [namesKO[549][1], namesKO[549][0]]}
},
{
	id: '551',
	nombre: names[550], tipo: ['ground', 'dark'], clasificacion: 'Pokémon Desierdrilo',
	altura: [getAltura(550).pies, getAltura(550).metros], peso: [getPeso(550).libras, getPeso(550).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '552',
			metodo: "Subiendo desde nivel 29",
			evolucion: {
				numeroEspecie: '553',
				metodo: "Subiendo desde nivel 40",
			},
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '551',
		dexUnovaBW: '057',
		dexUnovaB2W2: '099',
		dexKalosCosta: '043',
	},
	idiomas: {frances: namesFR[550],aleman: namesDE[550],japones: [namesJP[550][1], namesJP[550][0]],coreano: [namesKO[550][1], namesKO[550][0]]}
},
{
	id: '552',
	nombre: names[551], tipo: ['ground', 'dark'], clasificacion: 'Pokémon Desierdrilo',
	altura: [getAltura(551).pies, getAltura(551).metros], peso: [getPeso(551).libras, getPeso(551).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '551',
			metodo: "Subiendo desde nivel 29",
		},
		evolucion: {
			numeroEspecie: '553',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '552',
		dexUnovaBW: '058',
		dexUnovaB2W2: '100',
		dexKalosCosta: '044',
	},
	idiomas: {frances: namesFR[551],aleman: namesDE[551],japones: [namesJP[551][1], namesJP[551][0]],coreano: [namesKO[551][1], namesKO[551][0]]}
},
{
	id: '553',
	nombre: names[552], tipo: ['ground', 'dark'], clasificacion: 'Pokémon Amenazador',
	altura: [getAltura(552).pies, getAltura(552).metros], peso: [getPeso(552).libras, getPeso(552).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('punto ira'),habilidadDescripcion: habDescripcion('punto ira')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '552',
			metodo: "Subiendo desde nivel 40",
			preevolucion: {
				numeroEspecie: '551',
				metodo: "Subiendo desde nivel 29",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '553',
		dexUnovaBW: '059',
		dexUnovaB2W2: '101',
		dexKalosCosta: '045',
	},
	idiomas: {frances: namesFR[552],aleman: namesDE[552],japones: [namesJP[552][1], namesJP[552][0]],coreano: [namesKO[552][1], namesKO[552][0]]}
},
{
	id: '554',
	nombre: names[553], tipo: ['fire'], clasificacion: 'Pokémon Daruma',
	altura: [getAltura(553).pies, getAltura(553).metros], peso: [getPeso(553).libras, getPeso(553).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '555',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '554',
		dexUnovaBW: '060',
		dexUnovaB2W2: '102',
	},
	idiomas: {frances: namesFR[553],aleman: namesDE[553],japones: [namesJP[553][1], namesJP[553][0]],coreano: [namesKO[553][1], namesKO[553][0]]}
},
{
	id: '555',
	nombre: names[554], tipo: ['fire'], clasificacion: 'Pokémon Candente',
	altura: [getAltura(554).pies, getAltura(554).metros], peso: [getPeso(554).libras, getPeso(554).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		{habilidadNombre: habNombre('zen mode'),habilidadDescripcion: habDescripcion('zen mode')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('zen mode'),habilidadDescripcion: "(Sólo en Darmanitan modo Normal) "+habDescripcion('zen mode')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '554',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		//(Solo en Darmanitan modo Zen/Daruma) ataqueEspecial: 2,
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '555',
		dexUnovaBW: '061',
		dexUnovaB2W2: '103',
	},
	idiomas: {frances: namesFR[554],aleman: namesDE[554],japones: [namesJP[554][1], namesJP[554][0]],coreano: [namesKO[554][1], namesKO[554][0]]}
},
{
	id: '556',
	nombre: names[555], tipo: ['grass'], clasificacion: 'Pokémon Cactus',
	altura: [getAltura(555).pies, getAltura(555).metros], peso: [getPeso(555).libras, getPeso(555).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('colector'),habilidadDescripcion: habDescripcion('colector')},
		],
	},
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '556',
		dexUnovaBW: '062',
		dexUnovaB2W2: '119',
	},
	idiomas: {frances: namesFR[555],aleman: namesDE[555],japones: [namesJP[555][1], namesJP[555][0]],coreano: [namesKO[555][1], namesKO[555][0]]}
},
{
	id: '557',
	nombre: names[556], tipo: ['bug', 'rock'], clasificacion: 'Pokémon Casapiedra',
	altura: [getAltura(556).pies, getAltura(556).metros], peso: [getPeso(556).libras, getPeso(556).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '558',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '557',
		dexUnovaBW: '063',
		dexUnovaB2W2: '115',
		dexKalosCosta: '023',
	},
	idiomas: {frances: namesFR[556],aleman: namesDE[556],japones: [namesJP[556][1], namesJP[556][0]],coreano: [namesKO[556][1], namesKO[556][0]]}
},
{
	id: '558',
	nombre: names[557], tipo: ['bug', 'rock'], clasificacion: 'Pokémon Casarroca',
	altura: [getAltura(557).pies, getAltura(557).metros], peso: [getPeso(557).libras, getPeso(557).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '557',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho', 'Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '558',
		dexUnovaBW: '064',
		dexUnovaB2W2: '116',
		dexKalosCosta: '024',
	},
	idiomas: {frances: namesFR[557],aleman: namesDE[557],japones: [namesJP[557][1], namesJP[557][0]],coreano: [namesKO[557][1], namesKO[557][0]]}
},
{
	id: '559',
	nombre: names[558], tipo: ['dark', 'fight'], clasificacion: 'Pokémon Mudapiel',
	altura: [getAltura(558).pies, getAltura(558).metros], peso: [getPeso(558).libras, getPeso(558).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '560',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Dragón'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '559',
		dexUnovaBW: '065',
		dexUnovaB2W2: '117',
		dexKalosCentral: '100',
	},
	idiomas: {frances: namesFR[558],aleman: namesDE[558],japones: [namesJP[558][1], namesJP[558][0]],coreano: [namesKO[558][1], namesKO[558][0]]}
},
{
	id: '560',
	nombre: names[559], tipo: ['dark', 'fight'], clasificacion: 'Pokémon Gamberro',
	altura: [getAltura(559).pies, getAltura(559).metros], peso: [getPeso(559).libras, getPeso(559).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: habDescripcion('Intimidate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '559',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Campo', 'Dragón'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '560',
		dexUnovaBW: '066',
		dexUnovaB2W2: '118',
		dexKalosCentral: '101',
	},
	idiomas: {frances: namesFR[559],aleman: namesDE[559],japones: [namesJP[559][1], namesJP[559][0]],coreano: [namesKO[559][1], namesKO[559][0]]}
},
{
	id: '561',
	nombre: names[560], tipo: ['psychic', 'flying'], clasificacion: 'Pokémon Pseudopájaro',
	altura: [getAltura(560).pies, getAltura(560).metros], peso: [getPeso(560).libras, getPeso(560).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		{habilidadNombre: habNombre('wonder skin'),habilidadDescripcion: habDescripcion('wonder skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Cromolente'),habilidadDescripcion: habDescripcion('Cromolente')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '561',
		dexUnovaBW: '067',
		dexUnovaB2W2: '120',
		dexKalosCosta: '090',
	},
	idiomas: {frances: namesFR[560],aleman: namesDE[560],japones: [namesJP[560][1], namesJP[560][0]],coreano: [namesKO[560][1], namesKO[560][0]]}
},
{
	id: '562',
	nombre: names[561], tipo: ['ghost'], clasificacion: 'Pokémon Espíritu',
	altura: [getAltura(561).pies, getAltura(561).metros], peso: [getPeso(561).libras, getPeso(561).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mummy'),habilidadDescripcion: habDescripcion('mummy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '563',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 26, grupo: ['Amorfo', 'Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '562',
		dexUnovaBW: '068',
		dexUnovaB2W2: '124',
	},
	idiomas: {frances: namesFR[561],aleman: namesDE[561],japones: [namesJP[561][1], namesJP[561][0]],coreano: [namesKO[561][1], namesKO[561][0]]}
},
{
	id: '563',
	nombre: names[562], tipo: ['ghost'], clasificacion: 'Pokémon Sepultura',
	altura: [getAltura(562).pies, getAltura(562).metros], peso: [getPeso(562).libras, getPeso(562).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mummy'),habilidadDescripcion: habDescripcion('mummy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '562',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 26, grupo: ['Amorfo', 'Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '563',
		dexUnovaBW: '069',
		dexUnovaB2W2: '125',
	},
	idiomas: {frances: namesFR[562],aleman: namesDE[562],japones: [namesJP[562][1], namesJP[562][0]],coreano: [namesKO[562][1], namesKO[562][0]]}
},
{
	id: '564',
	nombre: names[563], tipo: ['water', 'rock'], clasificacion: 'Pokémon Pretortuga',
	altura: [getAltura(563).pies, getAltura(563).metros], peso: [getPeso(563).libras, getPeso(563).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('solid rock'),habilidadDescripcion: habDescripcion('solid rock')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '565',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '564',
		dexUnovaBW: '070',
		dexUnovaB2W2: '126',
	},
	idiomas: {frances: namesFR[563],aleman: namesDE[563],japones: [namesJP[563][1], namesJP[563][0]],coreano: [namesKO[563][1], namesKO[563][0]]}
},
{
	id: '565',
	nombre: names[564], tipo: ['water', 'rock'], clasificacion: 'Pokémon Pretortuga',
	altura: [getAltura(564).pies, getAltura(564).metros], peso: [getPeso(564).libras, getPeso(564).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		{habilidadNombre: habNombre('solid rock'),habilidadDescripcion: habDescripcion('solid rock')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '564',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 31, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '565',
		dexUnovaBW: '071',
		dexUnovaB2W2: '127',
	},
	idiomas: {frances: namesFR[564],aleman: namesDE[564],japones: [namesJP[564][1], namesJP[564][0]],coreano: [namesKO[564][1], namesKO[564][0]]}
},
{
	id: '566',
	nombre: names[565], tipo: ['rock', 'flying'], clasificacion: 'Pokémon Protopájaro',
	altura: [getAltura(565).pies, getAltura(565).metros], peso: [getPeso(565).libras, getPeso(565).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flaqueza'),habilidadDescripcion: habDescripcion('flaqueza')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '567',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 31, grupo: ['Volador', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '566',
		dexUnovaBW: '072',
		dexUnovaB2W2: '128',
	},
	idiomas: {frances: namesFR[565],aleman: namesDE[565],japones: [namesJP[565][1], namesJP[565][0]],coreano: [namesKO[565][1], namesKO[565][0]]}
},
{
	id: '567',
	nombre: names[566], tipo: ['rock', 'flying'], clasificacion: 'Pokémon Protopájaro',
	altura: [getAltura(566).pies, getAltura(566).metros], peso: [getPeso(566).libras, getPeso(566).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flaqueza'),habilidadDescripcion: habDescripcion('flaqueza')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '566',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Volador', 'Agua 3'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '567',
		dexUnovaBW: '073',
		dexUnovaB2W2: '129',
	},
	idiomas: {frances: namesFR[566],aleman: namesDE[566],japones: [namesJP[566][1], namesJP[566][0]],coreano: [namesKO[566][1], namesKO[566][0]]}
},
{
	id: '568',
	nombre: names[567], tipo: ['poison'], clasificacion: 'Pokémon Bolsabasura',
	altura: [getAltura(567).pies, getAltura(567).metros], peso: [getPeso(567).libras, getPeso(567).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '569',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '568',
		dexUnovaBW: '074',
		dexUnovaB2W2: '105',
		dexKalosMontana: '074',
	},
	idiomas: {frances: namesFR[567],aleman: namesDE[567],japones: [namesJP[567][1], namesJP[567][0]],coreano: [namesKO[567][1], namesKO[567][0]]}
},
{
	id: '569',
	nombre: names[568], tipo: ['poison'], clasificacion: 'Pokémon Vertedero',
	altura: [getAltura(568).pies, getAltura(568).metros], peso: [getPeso(568).libras, getPeso(568).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hedor'),habilidadDescripcion: habDescripcion('hedor')},
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('resquicio'),habilidadDescripcion: habDescripcion('resquicio')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '568',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '569',
		dexUnovaBW: '075',
		dexUnovaB2W2: '106',
		dexKalosMontana: '075',
	},
	idiomas: {frances: namesFR[568],aleman: namesDE[568],japones: [namesJP[568][1], namesJP[568][0]],coreano: [namesKO[568][1], namesKO[568][0]]}
},
{
	id: '570',
	nombre: names[569], tipo: ['dark'], clasificacion: 'Pokémon Zorropillo',
	altura: [getAltura(569).pies, getAltura(569).metros], peso: [getPeso(569).libras, getPeso(569).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illusion'),habilidadDescripcion: habDescripcion('illusion')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '571',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '570',
		dexUnovaBW: '076',
		dexUnovaB2W2: '151',
		dexKalosMontana: '124',
	},
	idiomas: {frances: namesFR[569],aleman: namesDE[569],japones: [namesJP[569][1], namesJP[569][0]],coreano: [namesKO[569][1], namesKO[569][0]]}
},
{
	id: '571',
	nombre: names[570], tipo: ['dark'], clasificacion: 'Pokémon Disfrazorro',
	altura: [getAltura(570).pies, getAltura(570).metros], peso: [getPeso(570).libras, getPeso(570).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('illusion'),habilidadDescripcion: habDescripcion('illusion')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '570',
			metodo: "Subiendo desde nivel 30",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '571',
		dexUnovaBW: '077',
		dexUnovaB2W2: '152',
		dexKalosMontana: '125',
	},
	idiomas: {frances: namesFR[570],aleman: namesDE[570],japones: [namesJP[570][1], namesJP[570][0]],coreano: [namesKO[570][1], namesKO[570][0]]}
},
{
	id: '572',
	nombre: names[571], tipo: ['normal'], clasificacion: 'Pokémon Chinchilla',
	altura: [getAltura(571).pies, getAltura(571).metros], peso: [getPeso(571).libras, getPeso(571).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '573',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '572',
		dexUnovaBW: '078',
		dexUnovaB2W2: '107',
	},
	idiomas: {frances: namesFR[571],aleman: namesDE[571],japones: [namesJP[571][1], namesJP[571][0]],coreano: [namesKO[571][1], namesKO[571][0]]}
},
{
	id: '573',
	nombre: names[572], tipo: ['normal'], clasificacion: 'Pokémon Estola',
	altura: [getAltura(572).pies, getAltura(572).metros], peso: [getPeso(572).libras, getPeso(572).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		{habilidadNombre: habNombre('experto'),habilidadDescripcion: habDescripcion('experto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('encadenado'),habilidadDescripcion: habDescripcion('encadenado')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '572',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '573',
		dexUnovaBW: '079',
		dexUnovaB2W2: '108',
	},
	idiomas: {frances: namesFR[572],aleman: namesDE[572],japones: [namesJP[572][1], namesJP[572][0]],coreano: [namesKO[572][1], namesKO[572][0]]}
},
{
	id: '574',
	nombre: names[573], tipo: ['psychic'], clasificacion: 'Pokémon Inquisitivo',
	altura: [getAltura(573).pies, getAltura(573).metros], peso: [getPeso(573).libras, getPeso(573).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '575',
			metodo: "Subiendo desde nivel 32",
			evolucion: {
				numeroEspecie: '576',
				metodo: "Subiendo desde nivel 41",
			},
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '574',
		dexUnovaBW: '080',
		dexUnovaB2W2: '136',
		dexKalosMontana: '126',
	},
	idiomas: {frances: namesFR[573],aleman: namesDE[573],japones: [namesJP[573][1], namesJP[573][0]],coreano: [namesKO[573][1], namesKO[573][0]]}
},
{
	id: '575',
	nombre: names[574], tipo: ['psychic'], clasificacion: 'Pokémon Manipulador',
	altura: [getAltura(574).pies, getAltura(574).metros], peso: [getPeso(574).libras, getPeso(574).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '574',
			metodo: "Subiendo desde nivel 32",
		},
		evolucion: {
			numeroEspecie: '576',
			metodo: "Subiendo desde nivel 41",
		},
	},
	],
	ratioCaptura: 100,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '575',
		dexUnovaBW: '081',
		dexUnovaB2W2: '137',
		dexKalosMontana: '127',
	},
	idiomas: {frances: namesFR[574],aleman: namesDE[574],japones: [namesJP[574][1], namesJP[574][0]],coreano: [namesKO[574][1], namesKO[574][0]]}
},
{
	id: '576',
	nombre: names[575], tipo: ['psychic'], clasificacion: 'Pokémon Astro',
	altura: [getAltura(575).pies, getAltura(575).metros], peso: [getPeso(575).libras, getPeso(575).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: habDescripcion('Tenacidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '575',
			metodo: "Subiendo desde nivel 41",
			preevolucion: {
				numeroEspecie: '574',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '576',
		dexUnovaBW: '082',
		dexUnovaB2W2: '138',
		dexKalosMontana: '128',
	},
	idiomas: {frances: namesFR[575],aleman: namesDE[575],japones: [namesJP[575][1], namesJP[575][0]],coreano: [namesKO[575][1], namesKO[575][0]]}
},
{
	id: '577',
	nombre: names[576], tipo: ['psychic'], clasificacion: 'Pokémon Célula',
	altura: [getAltura(576).pies, getAltura(576).metros], peso: [getPeso(576).libras, getPeso(576).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '578',
			metodo: "Subiendo desde nivel 32",
			evolucion: {
				numeroEspecie: '579',
				metodo: "Subiendo desde nivel 41",
			},
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '577',
		dexUnovaBW: '083',
		dexUnovaB2W2: '139',
		dexKalosCosta: '115',
	},
	idiomas: {frances: namesFR[576],aleman: namesDE[576],japones: [namesJP[576][1], namesJP[576][0]],coreano: [namesKO[576][1], namesKO[576][0]]}
},
{
	id: '578',
	nombre: names[577], tipo: ['psychic'], clasificacion: 'Pokémon Mitosis',
	altura: [getAltura(577).pies, getAltura(577).metros], peso: [getPeso(577).libras, getPeso(577).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '577',
			metodo: "Subiendo desde nivel 32",
		},
		evolucion: {
			numeroEspecie: '579',
			metodo: "Subiendo desde nivel 41",
		},
	},
	],
	ratioCaptura: 100,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '578',
		dexUnovaBW: '084',
		dexUnovaB2W2: '140',
		dexKalosCosta: '116',
	},
	idiomas: {frances: namesFR[577],aleman: namesDE[577],japones: [namesJP[577][1], namesJP[577][0]],coreano: [namesKO[577][1], namesKO[577][0]]}
},
{
	id: '579',
	nombre: names[578], tipo: ['psychic'], clasificacion: 'Pokémon Ampliación',
	altura: [getAltura(578).pies, getAltura(578).metros], peso: [getPeso(578).libras, getPeso(578).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		{habilidadNombre: habNombre('magic guard'),habilidadDescripcion: habDescripcion('magic guard')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '578',
			metodo: "Subiendo desde nivel 41",
			preevolucion: {
				numeroEspecie: '577',
				metodo: "Subiendo desde nivel 32",
			},
		},
	},
	],
	ratioCaptura: 50,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '579',
		dexUnovaBW: '085',
		dexUnovaB2W2: '141',
		dexKalosCosta: '117',
	},
	idiomas: {frances: namesFR[578],aleman: namesDE[578],japones: [namesJP[578][1], namesJP[578][0]],coreano: [namesKO[578][1], namesKO[578][0]]}
},
{
	id: '580',
	nombre: names[579], tipo: ['water', 'flying'], clasificacion: 'Pokémon Ave Agua',
	altura: [getAltura(579).pies, getAltura(579).metros], peso: [getPeso(579).libras, getPeso(579).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '581',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Volador', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '580',
		dexUnovaBW: '086',
		dexUnovaB2W2: '153',
		dexKalosCentral: '127',
	},
	idiomas: {frances: namesFR[579],aleman: namesDE[579],japones: [namesJP[579][1], namesJP[579][0]],coreano: [namesKO[579][1], namesKO[579][0]]}
},
{
	id: '581',
	nombre: names[580], tipo: ['water', 'flying'], clasificacion: 'Pokémon Cisne',
	altura: [getAltura(580).pies, getAltura(580).metros], peso: [getPeso(580).libras, getPeso(580).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '580',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Volador', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '581',
		dexUnovaBW: '087',
		dexUnovaB2W2: '154',
		dexKalosCentral: '128',
	},
	idiomas: {frances: namesFR[580],aleman: namesDE[580],japones: [namesJP[580][1], namesJP[580][0]],coreano: [namesKO[580][1], namesKO[580][0]]}
},
{
	id: '582',
	nombre: names[581], tipo: ['ice'], clasificacion: 'Pokémon Nievefresca',
	altura: [getAltura(581).pies, getAltura(581).metros], peso: [getPeso(581).libras, getPeso(581).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '583',
			metodo: "Subiendo desde nivel 35",
			evolucion: {
				numeroEspecie: '584',
				metodo: "Subiendo desde nivel 47",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '582',
		dexUnovaBW: '088',
		dexUnovaB2W2: '255',
		dexKalosMontana: '085',
	},
	idiomas: {frances: namesFR[581],aleman: namesDE[581],japones: [namesJP[581][1], namesJP[581][0]],coreano: [namesKO[581][1], namesKO[581][0]]}
},
{
	id: '583',
	nombre: names[582], tipo: ['ice'], clasificacion: 'Pokémon Nievehelada',
	altura: [getAltura(582).pies, getAltura(582).metros], peso: [getPeso(582).libras, getPeso(582).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '582',
			metodo: "Subiendo desde nivel 35",
		},
		evolucion: {
			numeroEspecie: '584',
			metodo: "Subiendo desde nivel 47",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '583',
		dexUnovaBW: '089',
		dexUnovaB2W2: '256',
		dexKalosMontana: '086',
	},
	idiomas: {frances: namesFR[582],aleman: namesDE[582],japones: [namesJP[582][1], namesJP[582][0]],coreano: [namesKO[582][1], namesKO[582][0]]}
},
{
	id: '584',
	nombre: names[583], tipo: ['ice'], clasificacion: 'Pokémon Nievegélida',
	altura: [getAltura(583).pies, getAltura(583).metros], peso: [getPeso(583).libras, getPeso(583).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '583',
			metodo: "Subiendo desde nivel 47",
			preevolucion: {
				numeroEspecie: '582',
				metodo: "Subiendo desde nivel 35",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '584',
		dexUnovaBW: '090',
		dexUnovaB2W2: '257',
		dexKalosMontana: '087',
	},
	idiomas: {frances: namesFR[583],aleman: namesDE[583],japones: [namesJP[583][1], namesJP[583][0]],coreano: [namesKO[583][1], namesKO[583][0]]}
},
{
	id: '585',
	nombre: names[584], tipo: ['normal', 'grass'], clasificacion: 'Pokémon Estacional',
	altura: [getAltura(584).pies, getAltura(584).metros], peso: [getPeso(584).libras, getPeso(584).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '586',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '585',
		dexUnovaBW: '091',
		dexUnovaB2W2: '159',
	},
	idiomas: {frances: namesFR[584],aleman: namesDE[584],japones: [namesJP[584][1], namesJP[584][0]],coreano: [namesKO[584][1], namesKO[584][0]]}
},
{
	id: '586',
	nombre: names[585], tipo: ['normal', 'grass'], clasificacion: 'Pokémon Estacional',
	altura: [getAltura(585).pies, getAltura(585).metros], peso: [getPeso(585).libras, getPeso(585).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Chlorophyll'),habilidadDescripcion: habDescripcion('Chlorophyll')},
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '585',
			metodo: "Subiendo desde nivel 34",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '586',
		dexUnovaBW: '092',
		dexUnovaB2W2: '160',
	},
	idiomas: {frances: namesFR[585],aleman: namesDE[585],japones: [namesJP[585][1], namesJP[585][0]],coreano: [namesKO[585][1], namesKO[585][0]]}
},
{
	id: '587',
	nombre: names[586], tipo: ['electric', 'flying'], clasificacion: 'Pokémon Vuelardilla',
	altura: [getAltura(586).pies, getAltura(586).metros], peso: [getPeso(586).libras, getPeso(586).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('motor drive'),habilidadDescripcion: habDescripcion('motor drive')},
		],
	},
	ratioCaptura: 200,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '587',
		dexUnovaBW: '093',
		dexUnovaB2W2: '144',
		dexKalosCosta: '086',
	},
	idiomas: {frances: namesFR[586],aleman: namesDE[586],japones: [namesJP[586][1], namesJP[586][0]],coreano: [namesKO[586][1], namesKO[586][0]]}
},
{
	id: '588',
	nombre: names[587], tipo: ['bug'], clasificacion: 'Pokémon Bocado',
	altura: [getAltura(587).pies, getAltura(587).metros], peso: [getPeso(587).libras, getPeso(587).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '589',
			metodo: "Intercambio con Shelmet",
			condicion: ['trade'],
			pokemon: '616',
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '588',
		dexUnovaBW: '094',
		dexUnovaB2W2: '155',
		dexKalosMontana: '022',
	},
	idiomas: {frances: namesFR[587],aleman: namesDE[587],japones: [namesJP[587][1], namesJP[587][0]],coreano: [namesKO[587][1], namesKO[587][0]]}
},
{
	id: '589',
	nombre: names[588], tipo: ['bug', 'steel'], clasificacion: 'Pokémon Soldado',
	altura: [getAltura(588).pies, getAltura(588).metros], peso: [getPeso(588).libras, getPeso(588).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '588',
			metodo: "Intercambio con Shelmet",
			condicion: ['trade'],
			pokemon: '616',
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '589',
		dexUnovaBW: '095',
		dexUnovaB2W2: '156',
		dexKalosMontana: '023',
	},
	idiomas: {frances: namesFR[588],aleman: namesDE[588],japones: [namesJP[588][1], namesJP[588][0]],coreano: [namesKO[588][1], namesKO[588][0]]}
},
{
	id: '590',
	nombre: names[589], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(589).pies, getAltura(589).metros], peso: [getPeso(589).libras, getPeso(589).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '591',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '590',
		dexUnovaBW: '096',
		dexUnovaB2W2: '161',
		dexKalosMontana: '053',
	},
	idiomas: {frances: namesFR[589],aleman: namesDE[589],japones: [namesJP[589][1], namesJP[589][0]],coreano: [namesKO[589][1], namesKO[589][0]]}
},
{
	id: '591',
	nombre: names[590], tipo: ['grass', 'poison'], clasificacion: 'Pokémon Hongo',
	altura: [getAltura(590).pies, getAltura(590).metros], peso: [getPeso(590).libras, getPeso(590).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('effect spore'),habilidadDescripcion: habDescripcion('effect spore')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '590',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '591',
		dexUnovaBW: '097',
		dexUnovaB2W2: '162',
		dexKalosMontana: '054',
	},
	idiomas: {frances: namesFR[590],aleman: namesDE[590],japones: [namesJP[590][1], namesJP[590][0]],coreano: [namesKO[590][1], namesKO[590][0]]}
},
{
	id: '592',
	nombre: names[591], tipo: ['water', 'ghost'], clasificacion: 'Pokémon Ingrávido',
	altura: [getAltura(591).pies, getAltura(591).metros], peso: [getPeso(591).libras, getPeso(591).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		{habilidadNombre: habNombre('cursed body'),habilidadDescripcion: habDescripcion('cursed body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '593',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '592',
		dexUnovaBW: '098',
		dexUnovaB2W2: '180',
	},
	idiomas: {frances: namesFR[591],aleman: namesDE[591],japones: [namesJP[591][1], namesJP[591][0]],coreano: [namesKO[591][1], namesKO[591][0]]}
},
{
	id: '593',
	nombre: names[592], tipo: ['water', 'ghost'], clasificacion: 'Pokémon Ingrávido',
	altura: [getAltura(592).pies, getAltura(592).metros], peso: [getPeso(592).libras, getPeso(592).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('water absorb'),habilidadDescripcion: habDescripcion('water absorb')},
		{habilidadNombre: habNombre('cursed body'),habilidadDescripcion: habDescripcion('cursed body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('damp'),habilidadDescripcion: habDescripcion('damp')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '592',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '593',
		dexUnovaBW: '099',
		dexUnovaB2W2: '181',
	},
	idiomas: {frances: namesFR[592],aleman: namesDE[592],japones: [namesJP[592][1], namesJP[592][0]],coreano: [namesKO[592][1], namesKO[592][0]]}
},
{
	id: '594',
	nombre: names[593], tipo: ['water'], clasificacion: 'Pokémon Socorrista',
	altura: [getAltura(593).pies, getAltura(593).metros], peso: [getPeso(593).libras, getPeso(593).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
	},
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 41, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '594',
		dexUnovaBW: '100',
		dexUnovaB2W2: '182',
		dexKalosCosta: '149',
	},
	idiomas: {frances: namesFR[593],aleman: namesDE[593],japones: [namesJP[593][1], namesJP[593][0]],coreano: [namesKO[593][1], namesKO[593][0]]}
},
{
	id: '595',
	nombre: names[594], tipo: ['bug', 'electric'], clasificacion: 'Pokémon Lapa',
	altura: [getAltura(594).pies, getAltura(594).metros], peso: [getPeso(594).libras, getPeso(594).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '596',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '595',
		dexUnovaBW: '101',
		dexUnovaB2W2: '173',
	},
	idiomas: {frances: namesFR[594],aleman: namesDE[594],japones: [namesJP[594][1], namesJP[594][0]],coreano: [namesKO[594][1], namesKO[594][0]]}
},
{
	id: '596',
	nombre: names[595], tipo: ['bug', 'electric'], clasificacion: 'Pokémon Electroaraña',
	altura: [getAltura(595).pies, getAltura(595).metros], peso: [getPeso(595).libras, getPeso(595).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '595',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '596',
		dexUnovaBW: '102',
		dexUnovaB2W2: '174',
	},
	idiomas: {frances: namesFR[595],aleman: namesDE[595],japones: [namesJP[595][1], namesJP[595][0]],coreano: [namesKO[595][1], namesKO[595][0]]}
},
{
	id: '597',
	nombre: names[596], tipo: ['grass', 'steel'], clasificacion: 'Pokémon Frutoespina',
	altura: [getAltura(596).pies, getAltura(596).metros], peso: [getPeso(596).libras, getPeso(596).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('iron barbs'),habilidadDescripcion: habDescripcion('iron barbs')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '598',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '597',
		dexUnovaBW: '103',
		dexUnovaB2W2: '175',
		dexKalosCosta: '069',
	},
	idiomas: {frances: namesFR[596],aleman: namesDE[596],japones: [namesJP[596][1], namesJP[596][0]],coreano: [namesKO[596][1], namesKO[596][0]]}
},
{
	id: '598',
	nombre: names[597], tipo: ['grass', 'steel'], clasificacion: 'Pokémon Bolaespina',
	altura: [getAltura(597).pies, getAltura(597).metros], peso: [getPeso(597).libras, getPeso(597).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('iron barbs'),habilidadDescripcion: habDescripcion('iron barbs')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('anticipation'),habilidadDescripcion: habDescripcion('anticipation')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '597',
			metodo: "Subiendo desde nivel 40",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral', 'Planta'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '598',
		dexUnovaBW: '104',
		dexUnovaB2W2: '176',
		dexKalosCosta: '070',
	},
	idiomas: {frances: namesFR[597],aleman: namesDE[597],japones: [namesJP[597][1], namesJP[597][0]],coreano: [namesKO[597][1], namesKO[597][0]]}
},
{
	id: '599',
	nombre: names[598], tipo: ['steel'], clasificacion: 'Pokémon Engranaje',
	altura: [getAltura(598).pies, getAltura(598).metros], peso: [getPeso(598).libras, getPeso(598).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '600',
			metodo: "Subiendo desde nivel 38",
			evolucion: {
				numeroEspecie: '601',
				metodo: "Subiendo desde nivel 49",
			},
		},
	},
	],
	ratioCaptura: 130,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '599',
		dexUnovaBW: '105',
		dexUnovaB2W2: '130',
	},
	idiomas: {frances: namesFR[598],aleman: namesDE[598],japones: [namesJP[598][1], namesJP[598][0]],coreano: [namesKO[598][1], namesKO[598][0]]}
},
{
	id: '600',
	nombre: names[599], tipo: ['steel'], clasificacion: 'Pokémon Engranaje',
	altura: [getAltura(599).pies, getAltura(599).metros], peso: [getPeso(599).libras, getPeso(599).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '599',
			metodo: "Subiendo desde nivel 38",
		},
		evolucion: {
			numeroEspecie: '601',
			metodo: "Subiendo desde nivel 49",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '600',
		dexUnovaBW: '106',
		dexUnovaB2W2: '131',
	},
	idiomas: {frances: namesFR[599],aleman: namesDE[599],japones: [namesJP[599][1], namesJP[599][0]],coreano: [namesKO[599][1], namesKO[599][0]]}
},
{
	id: '601',
	nombre: names[600], tipo: ['steel'], clasificacion: 'Pokémon Engranaje',
	altura: [getAltura(600).pies, getAltura(600).metros], peso: [getPeso(600).libras, getPeso(600).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		{habilidadNombre: habNombre('minus'),habilidadDescripcion: habDescripcion('minus')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '600',
			metodo: "Subiendo desde nivel 49",
			preevolucion: {
				numeroEspecie: '599',
				metodo: "Subiendo desde nivel 38",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '601',
		dexUnovaBW: '107',
		dexUnovaB2W2: '132',
	},
	idiomas: {frances: namesFR[600],aleman: namesDE[600],japones: [namesJP[600][1], namesJP[600][0]],coreano: [namesKO[600][1], namesKO[600][0]]}
},
{
	id: '602',
	nombre: names[601], tipo: ['electric'], clasificacion: 'Pokémon Electropez',
	altura: [getAltura(601).pies, getAltura(601).metros], peso: [getPeso(601).libras, getPeso(601).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '603',
			metodo: "Subiendo desde nivel 39",
			evolucion: {
				numeroEspecie: '604',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '602',
		dexUnovaBW: '108',
		dexUnovaB2W2: '177',
	},
	idiomas: {frances: namesFR[601],aleman: namesDE[601],japones: [namesJP[601][1], namesJP[601][0]],coreano: [namesKO[601][1], namesKO[601][0]]}
},
{
	id: '603',
	nombre: names[602], tipo: ['electric'], clasificacion: 'Pokémon Electropez',
	altura: [getAltura(602).pies, getAltura(602).metros], peso: [getPeso(602).libras, getPeso(602).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '602',
			metodo: "Subiendo desde nivel 39",
		},
		evolucion: {
			numeroEspecie: '604',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '603',
		dexUnovaBW: '109',
		dexUnovaB2W2: '178',
	},
	idiomas: {frances: namesFR[602],aleman: namesDE[602],japones: [namesJP[602][1], namesJP[602][0]],coreano: [namesKO[602][1], namesKO[602][0]]}
},
{
	id: '604',
	nombre: names[603], tipo: ['electric'], clasificacion: 'Pokémon Electropez',
	altura: [getAltura(603).pies, getAltura(603).metros], peso: [getPeso(603).libras, getPeso(603).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '603',
			metodo: "Aplicando Piedra Trueno",
			objeto: getEvolveItem('thunderstone'),
			preevolucion: {
				numeroEspecie: '602',
				metodo: "Subiendo desde nivel 39",
			},
		},
	},
	],
	ratioCaptura: 30,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '604',
		dexUnovaBW: '110',
		dexUnovaB2W2: '179',
	},
	idiomas: {frances: namesFR[603],aleman: namesDE[603],japones: [namesJP[603][1], namesJP[603][0]],coreano: [namesKO[603][1], namesKO[603][0]]}
},
{
	id: '605',
	nombre: names[604], tipo: ['psychic'], clasificacion: 'Pokémon Cerebro',
	altura: [getAltura(604).pies, getAltura(604).metros], peso: [getPeso(604).libras, getPeso(604).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '606',
			metodo: "Subiendo desde nivel 42",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '605',
		dexUnovaBW: '111',
		dexUnovaB2W2: '188',
	},
	idiomas: {frances: namesFR[604],aleman: namesDE[604],japones: [namesJP[604][1], namesJP[604][0]],coreano: [namesKO[604][1], namesKO[604][0]]}
},
{
	id: '606',
	nombre: names[605], tipo: ['psychic'], clasificacion: 'Pokémon Cerebro',
	altura: [getAltura(605).pies, getAltura(605).metros], peso: [getPeso(605).libras, getPeso(605).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('synchronize'),habilidadDescripcion: habDescripcion('synchronize')},
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('analytic'),habilidadDescripcion: habDescripcion('analytic')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '605',
			metodo: "Subiendo desde nivel 42",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '606',
		dexUnovaBW: '112',
		dexUnovaB2W2: '189',
	},
	idiomas: {frances: namesFR[605],aleman: namesDE[605],japones: [namesJP[605][1], namesJP[605][0]],coreano: [namesKO[605][1], namesKO[605][0]]}
},
{
	id: '607',
	nombre: names[606], tipo: ['ghost', 'fire'], clasificacion: 'Pokémon Vela',
	altura: [getAltura(606).pies, getAltura(606).metros], peso: [getPeso(606).libras, getPeso(606).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '608',
			metodo: "Subiendo desde nivel 41",
			evolucion: {
				numeroEspecie: '609',
				metodo: "Aplicando Piedra Noche",
				objeto: getEvolveItem('dusk stone'),
			},
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '607',
		dexUnovaBW: '113',
		dexUnovaB2W2: '190',
		dexKalosMontana: '065',
	},
	idiomas: {frances: namesFR[606],aleman: namesDE[606],japones: [namesJP[606][1], namesJP[606][0]],coreano: [namesKO[606][1], namesKO[606][0]]}
},
{
	id: '608',
	nombre: names[607], tipo: ['ghost', 'fire'], clasificacion: 'Pokémon Farolillo',
	altura: [getAltura(607).pies, getAltura(607).metros], peso: [getPeso(607).libras, getPeso(607).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '607',
			metodo: "Subiendo desde nivel 41",
		},
		evolucion: {
			numeroEspecie: '609',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '608',
		dexUnovaBW: '114',
		dexUnovaB2W2: '191',
		dexKalosMontana: '066',
	},
	idiomas: {frances: namesFR[607],aleman: namesDE[607],japones: [namesJP[607][1], namesJP[607][0]],coreano: [namesKO[607][1], namesKO[607][0]]}
},
{
	id: '609',
	nombre: names[608], tipo: ['ghost', 'fire'], clasificacion: 'Pokémon Señuelo',
	altura: [getAltura(608).pies, getAltura(608).metros], peso: [getPeso(608).libras, getPeso(608).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		{habilidadNombre: habNombre('sombratrampa'),habilidadDescripcion: habDescripcion('sombratrampa')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '608',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
			preevolucion: {
				numeroEspecie: '607',
				metodo: "Subiendo desde nivel 41",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '609',
		dexUnovaBW: '115',
		dexUnovaB2W2: '192',
		dexKalosMontana: '067',
	},
	idiomas: {frances: namesFR[608],aleman: namesDE[608],japones: [namesJP[608][1], namesJP[608][0]],coreano: [namesKO[608][1], namesKO[608][0]]}
},
{
	id: '610',
	nombre: names[609], tipo: ['dragon'], clasificacion: 'Pokémon Colmillo',
	altura: [getAltura(609).pies, getAltura(609).metros], peso: [getPeso(609).libras, getPeso(609).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '611',
			metodo: "Subiendo desde nivel 38",
			evolucion: {
				numeroEspecie: '612',
				metodo: "Subiendo desde nivel 48",
			},
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '610',
		dexUnovaBW: '116',
		dexUnovaB2W2: '183',
		dexKalosCentral: '148',
	},
	idiomas: {frances: namesFR[609],aleman: namesDE[609],japones: [namesJP[609][1], namesJP[609][0]],coreano: [namesKO[609][1], namesKO[609][0]]}
},
{
	id: '611',
	nombre: names[610], tipo: ['dragon'], clasificacion: 'Pokémon Bocahacha',
	altura: [getAltura(610).pies, getAltura(610).metros], peso: [getPeso(610).libras, getPeso(610).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '610',
			metodo: "Subiendo desde nivel 38",
		},
		evolucion: {
			numeroEspecie: '612',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '611',
		dexUnovaBW: '117',
		dexUnovaB2W2: '184',
		dexKalosCentral: '149',
	},
	idiomas: {frances: namesFR[610],aleman: namesDE[610],japones: [namesJP[610][1], namesJP[610][0]],coreano: [namesKO[610][1], namesKO[610][0]]}
},
{
	id: '612',
	nombre: names[611], tipo: ['dragon'], clasificacion: 'Pokémon Bocahacha',
	altura: [getAltura(611).pies, getAltura(611).metros], peso: [getPeso(611).libras, getPeso(611).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '611',
			metodo: "Subiendo desde nivel 48",
			preevolucion: {
				numeroEspecie: '610',
				metodo: "Subiendo desde nivel 38",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón', 'Monstruo'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '612',
		dexUnovaBW: '118',
		dexUnovaB2W2: '185',
		dexKalosCentral: '150',
	},
	idiomas: {frances: namesFR[611],aleman: namesDE[611],japones: [namesJP[611][1], namesJP[611][0]],coreano: [namesKO[611][1], namesKO[611][0]]}
},
{
	id: '613',
	nombre: names[612], tipo: ['ice'], clasificacion: 'Pokémon Congelación',
	altura: [getAltura(612).pies, getAltura(612).metros], peso: [getPeso(612).libras, getPeso(612).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rattled'),habilidadDescripcion: habDescripcion('rattled')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '614',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '613',
		dexUnovaBW: '119',
		dexUnovaB2W2: '195',
		dexKalosMontana: '081',
	},
	idiomas: {frances: namesFR[612],aleman: namesDE[612],japones: [namesJP[612][1], namesJP[612][0]],coreano: [namesKO[612][1], namesKO[612][0]]}
},
{
	id: '614',
	nombre: names[613], tipo: ['ice'], clasificacion: 'Pokémon Glaciación',
	altura: [getAltura(613).pies, getAltura(613).metros], peso: [getPeso(613).libras, getPeso(613).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('snow cloak'),habilidadDescripcion: habDescripcion('snow cloak')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('swift swim'),habilidadDescripcion: habDescripcion('swift swim')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '613',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '614',
		dexUnovaBW: '120',
		dexUnovaB2W2: '196',
		dexKalosMontana: '082',
	},
	idiomas: {frances: namesFR[613],aleman: namesDE[613],japones: [namesJP[613][1], namesJP[613][0]],coreano: [namesKO[613][1], namesKO[613][0]]}
},
{
	id: '615',
	nombre: names[614], tipo: ['ice'], clasificacion: 'Pokémon Cristal',
	altura: [getAltura(614).pies, getAltura(614).metros], peso: [getPeso(614).libras, getPeso(614).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	ratioCaptura: 25,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '615',
		dexUnovaBW: '121',
		dexUnovaB2W2: '197',
		dexKalosMontana: '111',
	},
	idiomas: {frances: namesFR[614],aleman: namesDE[614],japones: [namesJP[614][1], namesJP[614][0]],coreano: [namesKO[614][1], namesKO[614][0]]}
},
{
	id: '616',
	nombre: names[615], tipo: ['bug'], clasificacion: 'Pokémon Caracol',
	altura: [getAltura(615).pies, getAltura(615).metros], peso: [getPeso(615).libras, getPeso(615).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('shell armor'),habilidadDescripcion: habDescripcion('shell armor')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '617',
			metodo: "Intercambio con Karrablast",
			condicion: ['trade'],
			pokemon: '588',
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '616',
		dexUnovaBW: '122',
		dexUnovaB2W2: '157',
		dexKalosMontana: '024',
	},
	idiomas: {frances: namesFR[615],aleman: namesDE[615],japones: [namesJP[615][1], namesJP[615][0]],coreano: [namesKO[615][1], namesKO[615][0]]}
},
{
	id: '617',
	nombre: names[616], tipo: ['bug'], clasificacion: 'Pokémon Sincaparazón',
	altura: [getAltura(616).pies, getAltura(616).metros], peso: [getPeso(616).libras, getPeso(616).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('viscosidad'),habilidadDescripcion: habDescripcion('viscosidad')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '616',
			metodo: "Intercambio con Karrablast",
			condicion: ['trade'],
			pokemon: '588',
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '617',
		dexUnovaBW: '123',
		dexUnovaB2W2: '158',
		dexKalosMontana: '025',
	},
	idiomas: {frances: namesFR[616],aleman: namesDE[616],japones: [namesJP[616][1], namesJP[616][0]],coreano: [namesKO[616][1], namesKO[616][0]]}
},
{
	id: '618',
	nombre: names[617], tipo: ['ground', 'electric'], clasificacion: 'Pokémon Trampa',
	altura: [getAltura(617).pies, getAltura(617).metros], peso: [getPeso(617).libras, getPeso(617).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Static'),habilidadDescripcion: habDescripcion('Static')},
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		],
	},
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo', 'Agua 1'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '618',
		dexUnovaBW: '124',
		dexUnovaB2W2: '231',
		dexKalosMontana: '039',
	},
	idiomas: {frances: namesFR[617],aleman: namesDE[617],japones: [namesJP[617][1], namesJP[617][0]],coreano: [namesKO[617][1], namesKO[617][0]]}
},
{
	id: '619',
	nombre: names[618], tipo: ['fight'], clasificacion: 'Pokémon Artemarcial',
	altura: [getAltura(618).pies, getAltura(618).metros], peso: [getPeso(618).libras, getPeso(618).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '620',
			metodo: "Subiendo desde nivel 50",
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '619',
		dexUnovaBW: '125',
		dexUnovaB2W2: '219',
		dexKalosCosta: '003',
	},
	idiomas: {frances: namesFR[618],aleman: namesDE[618],japones: [namesJP[618][1], namesJP[618][0]],coreano: [namesKO[618][1], namesKO[618][0]]}
},
{
	id: '620',
	nombre: names[619], tipo: ['fight'], clasificacion: 'Pokémon Artemarcial',
	altura: [getAltura(619).pies, getAltura(619).metros], peso: [getPeso(619).libras, getPeso(619).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: habDescripcion('regenerator')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '619',
			metodo: "Subiendo desde nivel 50",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '620',
		dexUnovaBW: '126',
		dexUnovaB2W2: '220',
		dexKalosCosta: '004',
	},
	idiomas: {frances: namesFR[619],aleman: namesDE[619],japones: [namesJP[619][1], namesJP[619][0]],coreano: [namesKO[619][1], namesKO[619][0]]}
},
{
	id: '621',
	nombre: names[620], tipo: ['dragon'], clasificacion: 'Pokémon Cueva',
	altura: [getAltura(620).pies, getAltura(620).metros], peso: [getPeso(620).libras, getPeso(620).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('piel tosca'),habilidadDescripcion: habDescripcion('piel tosca')},
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '621',
		dexUnovaBW: '127',
		dexUnovaB2W2: '270',
		dexKalosMontana: '141',
	},
	idiomas: {frances: namesFR[620],aleman: namesDE[620],japones: [namesJP[620][1], namesJP[620][0]],coreano: [namesKO[620][1], namesKO[620][0]]}
},
{
	id: '622',
	nombre: names[621], tipo: ['ground', 'ghost'], clasificacion: 'Pokémon Autómata',
	altura: [getAltura(621).pies, getAltura(621).metros], peso: [getPeso(621).libras, getPeso(621).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '623',
			metodo: "Subiendo desde nivel 43",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '622',
		dexUnovaBW: '128',
		dexUnovaB2W2: '271',
		dexKalosCosta: '091',
	},
	idiomas: {frances: namesFR[621],aleman: namesDE[621],japones: [namesJP[621][1], namesJP[621][0]],coreano: [namesKO[621][1], namesKO[621][0]]}
},
{
	id: '623',
	nombre: names[622], tipo: ['ground', 'ghost'], clasificacion: 'Pokémon Autómata',
	altura: [getAltura(622).pies, getAltura(622).metros], peso: [getPeso(622).libras, getPeso(622).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		{habilidadNombre: habNombre('klutz'),habilidadDescripcion: habDescripcion('klutz')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '622',
			metodo: "Subiendo desde nivel 43",
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '623',
		dexUnovaBW: '129',
		dexUnovaB2W2: '272',
		dexKalosCosta: '092',
	},
	idiomas: {frances: namesFR[622],aleman: namesDE[622],japones: [namesJP[622][1], namesJP[622][0]],coreano: [namesKO[622][1], namesKO[622][0]]}
},
{
	id: '624',
	nombre: names[623], tipo: ['dark', 'steel'], clasificacion: 'Pokémon Tajo',
	altura: [getAltura(623).pies, getAltura(623).metros], peso: [getPeso(623).libras, getPeso(623).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '625',
			metodo: "Subiendo desde nivel 52",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '624',
		dexUnovaBW: '130',
		dexUnovaB2W2: '223',
		dexKalosMontana: '048',
	},
	idiomas: {frances: namesFR[623],aleman: namesDE[623],japones: [namesJP[623][1], namesJP[623][0]],coreano: [namesKO[623][1], namesKO[623][0]]}
},
{
	id: '625',
	nombre: names[624], tipo: ['dark', 'steel'], clasificacion: 'Pokémon Filo',
	altura: [getAltura(624).pies, getAltura(624).metros], peso: [getPeso(624).libras, getPeso(624).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('inner focus'),habilidadDescripcion: habDescripcion('inner focus')},
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '624',
			metodo: "Subiendo desde nivel 52",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '625',
		dexUnovaBW: '131',
		dexUnovaB2W2: '224',
		dexKalosMontana: '049',
	},
	idiomas: {frances: namesFR[624],aleman: namesDE[624],japones: [namesJP[624][1], namesJP[624][0]],coreano: [namesKO[624][1], namesKO[624][0]]}
},
{
	id: '626',
	nombre: names[625], tipo: ['normal'], clasificacion: 'Pokémon Torocabezazo',
	altura: [getAltura(625).pies, getAltura(625).metros], peso: [getPeso(625).libras, getPeso(625).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		{habilidadNombre: habNombre('reckless'),habilidadDescripcion: habDescripcion('reckless')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Soundproof'),habilidadDescripcion: habDescripcion('Soundproof')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '626',
		dexUnovaBW: '132',
		dexUnovaB2W2: '269',
	},
	idiomas: {frances: namesFR[625],aleman: namesDE[625],japones: [namesJP[625][1], namesJP[625][0]],coreano: [namesKO[625][1], namesKO[625][0]]}
},
{
	id: '627',
	nombre: names[626], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Aguilucho',
	altura: [getAltura(626).pies, getAltura(626).metros], peso: [getPeso(626).libras, getPeso(626).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '628',
			metodo: "Subiendo desde nivel 54",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '627',
		dexUnovaBW: '133',
		dexUnovaB2W2: '109',
	},
	idiomas: {frances: namesFR[626],aleman: namesDE[626],japones: [namesJP[626][1], namesJP[626][0]],coreano: [namesKO[626][1], namesKO[626][0]]}
},
{
	id: '628',
	nombre: names[627], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Aguerrido',
	altura: [getAltura(627).pies, getAltura(627).metros], peso: [getPeso(627).libras, getPeso(627).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '627',
			metodo: "Subiendo desde nivel 54",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '628',
		dexUnovaBW: '134',
		dexUnovaB2W2: '110',
	},
	idiomas: {frances: namesFR[627],aleman: namesDE[627],japones: [namesJP[627][1], namesJP[627][0]],coreano: [namesKO[627][1], namesKO[627][0]]}
},
{
	id: '629',
	nombre: names[628], tipo: ['dark', 'flying'], clasificacion: 'Pokémon Pañal',
	altura: [getAltura(628).pies, getAltura(628).metros], peso: [getPeso(628).libras, getPeso(628).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '630',
			metodo: "Subiendo desde nivel 54",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 35,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '629',
		dexUnovaBW: '135',
		dexUnovaB2W2: '111',
	},
	idiomas: {frances: namesFR[628],aleman: namesDE[628],japones: [namesJP[628][1], namesJP[628][0]],coreano: [namesKO[628][1], namesKO[628][0]]}
},
{
	id: '630',
	nombre: names[629], tipo: ['dark', 'flying'], clasificacion: 'Pokémon Aguilahueso',
	altura: [getAltura(629).pies, getAltura(629).metros], peso: [getPeso(629).libras, getPeso(629).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('funda'),habilidadDescripcion: habDescripcion('funda')},
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('weak armor'),habilidadDescripcion: habDescripcion('weak armor')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '629',
			metodo: "Subiendo desde nivel 54",
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 35,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '630',
		dexUnovaBW: '136',
		dexUnovaB2W2: '112',
	},
	idiomas: {frances: namesFR[629],aleman: namesDE[629],japones: [namesJP[629][1], namesJP[629][0]],coreano: [namesKO[629][1], namesKO[629][0]]}
},
{
	id: '631',
	nombre: names[630], tipo: ['fire'], clasificacion: 'Pokémon Hormiguero',
	altura: [getAltura(630).pies, getAltura(630).metros], peso: [getPeso(630).libras, getPeso(630).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flash fire'),habilidadDescripcion: habDescripcion('flash fire')},
		{habilidadNombre: habNombre('gula'),habilidadDescripcion: habDescripcion('gula')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('white smoke'),habilidadDescripcion: habDescripcion('white smoke')},
		],
	},
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '631',
		dexUnovaBW: '137',
		dexUnovaB2W2: '193',
		dexKalosMontana: '105',
	},
	idiomas: {frances: namesFR[630],aleman: namesDE[630],japones: [namesJP[630][1], namesJP[630][0]],coreano: [namesKO[630][1], namesKO[630][0]]}
},
{
	id: '632',
	nombre: names[631], tipo: ['bug', 'steel'], clasificacion: 'Pokémon Hormigacero',
	altura: [getAltura(631).pies, getAltura(631).metros], peso: [getPeso(631).libras, getPeso(631).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('truant'),habilidadDescripcion: habDescripcion('truant')},
		],
	},
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '632',
		dexUnovaBW: '138',
		dexUnovaB2W2: '194',
		dexKalosMontana: '106',
	},
	idiomas: {frances: namesFR[631],aleman: namesDE[631],japones: [namesJP[631][1], namesJP[631][0]],coreano: [namesKO[631][1], namesKO[631][0]]}
},
{
	id: '633',
	nombre: names[632], tipo: ['dark', 'dragon'], clasificacion: 'Pokémon Tosco',
	altura: [getAltura(632).pies, getAltura(632).metros], peso: [getPeso(632).libras, getPeso(632).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '634',
			metodo: "Subiendo desde nivel 50",
			evolucion: {
				numeroEspecie: '635',
				metodo: "Subiendo desde nivel 64",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '633',
		dexUnovaBW: '139',
		dexUnovaB2W2: '273',
		dexKalosMontana: '142',
	},
	idiomas: {frances: namesFR[632],aleman: namesDE[632],japones: [namesJP[632][1], namesJP[632][0]],coreano: [namesKO[632][1], namesKO[632][0]]}
},
{
	id: '634',
	nombre: names[633], tipo: ['dark', 'dragon'], clasificacion: 'Pokémon Violento',
	altura: [getAltura(633).pies, getAltura(633).metros], peso: [getPeso(633).libras, getPeso(633).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hustle'),habilidadDescripcion: habDescripcion('hustle')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '633',
			metodo: "Subiendo desde nivel 50",
		},
		evolucion: {
			numeroEspecie: '635',
			metodo: "Subiendo desde nivel 64",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '634',
		dexUnovaBW: '140',
		dexUnovaB2W2: '274',
		dexKalosMontana: '143',
	},
	idiomas: {frances: namesFR[633],aleman: namesDE[633],japones: [namesJP[633][1], namesJP[633][0]],coreano: [namesKO[633][1], namesKO[633][0]]}
},
{
	id: '635',
	nombre: names[634], tipo: ['dark', 'dragon'], clasificacion: 'Pokémon Voraz',
	altura: [getAltura(634).pies, getAltura(634).metros], peso: [getPeso(634).libras, getPeso(634).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('levitate'),habilidadDescripcion: habDescripcion('levitate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '634',
			metodo: "Subiendo desde nivel 64",
			preevolucion: {
				numeroEspecie: '633',
				metodo: "Subiendo desde nivel 50",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '635',
		dexUnovaBW: '141',
		dexUnovaB2W2: '275',
		dexKalosMontana: '144',
	},
	idiomas: {frances: namesFR[634],aleman: namesDE[634],japones: [namesJP[634][1], namesJP[634][0]],coreano: [namesKO[634][1], namesKO[634][0]]}
},
{
	id: '636',
	nombre: names[635], tipo: ['bug', 'fire'], clasificacion: 'Pokémon Antorcha',
	altura: [getAltura(635).pies, getAltura(635).metros], peso: [getPeso(635).libras, getPeso(635).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '637',
			metodo: "Subiendo desde nivel 59",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 41, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '636',
		dexUnovaBW: '142',
		dexUnovaB2W2: '171',
	},
	idiomas: {frances: namesFR[635],aleman: namesDE[635],japones: [namesJP[635][1], namesJP[635][0]],coreano: [namesKO[635][1], namesKO[635][0]]}
},
{
	id: '637',
	nombre: names[636], tipo: ['bug', 'fire'], clasificacion: 'Pokémon Sol',
	altura: [getAltura(636).pies, getAltura(636).metros], peso: [getPeso(636).libras, getPeso(636).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Enjambre'),habilidadDescripcion: habDescripcion('Enjambre')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '636',
			metodo: "Subiendo desde nivel 59",
		},
	},
	],
	ratioCaptura: 15,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 41, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50, hembra: 50},
	dexRegiones: {
		dexNacional: '637',
		dexUnovaBW: '143',
		dexUnovaB2W2: '172',
	},
	idiomas: {frances: namesFR[636],aleman: namesDE[636],japones: [namesJP[636][1], namesJP[636][0]],coreano: [namesKO[636][1], namesKO[636][0]]}
},
{
	id: '638',
	nombre: names[637], tipo: ['steel', 'fight'], clasificacion: 'Pokémon Tesón Acero',
	altura: [getAltura(637).pies, getAltura(637).metros], peso: [getPeso(637).libras, getPeso(637).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '638',
		dexUnovaBW: '144',
		dexUnovaB2W2: '225',
	},
	idiomas: {frances: namesFR[637],aleman: namesDE[637],japones: [namesJP[637][1], namesJP[637][0]],coreano: [namesKO[637][1], namesKO[637][0]]}
},
{
	id: '639',
	nombre: names[638], tipo: ['rock', 'fight'], clasificacion: 'Pokémon Gruta',
	altura: [getAltura(638).pies, getAltura(638).metros], peso: [getPeso(638).libras, getPeso(638).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '639',
		dexUnovaBW: '145',
		dexUnovaB2W2: '226',
	},
	idiomas: {frances: namesFR[638],aleman: namesDE[638],japones: [namesJP[638][1], namesJP[638][0]],coreano: [namesKO[638][1], namesKO[638][0]]}
},
{
	id: '640',
	nombre: names[639], tipo: ['grass', 'fight'], clasificacion: 'Pokémon Prado',
	altura: [getAltura(639).pies, getAltura(639).metros], peso: [getPeso(639).libras, getPeso(639).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '640',
		dexUnovaBW: '146',
		dexUnovaB2W2: '227',
	},
	idiomas: {frances: namesFR[639],aleman: namesDE[639],japones: [namesJP[639][1], namesJP[639][0]],coreano: [namesKO[639][1], namesKO[639][0]]}
},
{
	id: '641',
	nombre: names[640], tipo: ['flying'], clasificacion: 'Pokémon Torbellino',
	altura: [getAltura(640).pies, getAltura(640).metros], peso: [getPeso(640).libras, getPeso(640).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: "(Sólo en Tornadus forma Ávatar) "+habDescripcion('Bromista')},
		{habilidadNombre: habNombre('regenerator'),habilidadDescripcion: "(Sólo en Tornadus forma Totem) "+habDescripcion('regenerator')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(Solo en Tornadus forma Totem) velocidad: 3,
		ataque: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 90,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '641',
		dexUnovaBW: '147',
		dexUnovaB2W2: '198',
	},
	idiomas: {frances: namesFR[640],aleman: namesDE[640],japones: [namesJP[640][1], namesJP[640][0]],coreano: [namesKO[640][1], namesKO[640][0]]}
},
{
	id: '642',
	nombre: names[641], tipo: ['electric', 'flying'], clasificacion: 'Pokémon Centella',
	altura: [getAltura(641).pies, getAltura(641).metros], peso: [getPeso(641).libras, getPeso(641).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: "(Sólo en Thundurus forma Ávatar) "+habDescripcion('Bromista')},
		{habilidadNombre: habNombre('volt absorb'),habilidadDescripcion: "(Sólo en Thundurus forma Totem) "+habDescripcion('volt absorb')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('defiant'),habilidadDescripcion: habDescripcion('defiant')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(Solo en Thundururs forma Totem) ataqueEspecial: 3,
		ataque: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 90,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '642',
		dexUnovaBW: '148',
		dexUnovaB2W2: '199',
	},
	idiomas: {frances: namesFR[641],aleman: namesDE[641],japones: [namesJP[641][1], namesJP[641][0]],coreano: [namesKO[641][1], namesKO[641][0]]}
},
{
	id: '643',
	nombre: names[642], tipo: ['dragon', 'fire'], clasificacion: 'Pokémon Blanco Veraz',
	altura: [getAltura(642).pies, getAltura(642).metros], peso: [getPeso(642).libras, getPeso(642).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('turboblaze'),habilidadDescripcion: habDescripcion('turboblaze')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '643',
		dexUnovaBW: '149',
		dexUnovaB2W2: '295',
	},
	idiomas: {frances: namesFR[642],aleman: namesDE[642],japones: [namesJP[642][1], namesJP[642][0]],coreano: [namesKO[642][1], namesKO[642][0]]}
},
{
	id: '644',
	nombre: names[643], tipo: ['dragon', 'electric'], clasificacion: 'Pokémon Negro Puro',
	altura: [getAltura(643).pies, getAltura(643).metros], peso: [getPeso(643).libras, getPeso(643).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('teravolt'),habilidadDescripcion: habDescripcion('teravolt')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '644',
		dexUnovaBW: '150',
		dexUnovaB2W2: '296',
	},
	idiomas: {frances: namesFR[643],aleman: namesDE[643],japones: [namesJP[643][1], namesJP[643][0]],coreano: [namesKO[643][1], namesKO[643][0]]}
},
{
	id: '645',
	nombre: names[644], tipo: ['ground', 'flying'], clasificacion: 'Pokémon Fertilidad',
	altura: [getAltura(644).pies, getAltura(644).metros], peso: [getPeso(644).libras, getPeso(644).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sand force'),habilidadDescripcion: "(Sólo en Landorus forma Ávatar) "+habDescripcion('sand force')},
		{habilidadNombre: habNombre('Intimidate'),habilidadDescripcion: "(Sólo en Landorus forma Totem) "+habDescripcion('Intimidate')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('sheer force'),habilidadDescripcion: habDescripcion('sheer force')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(solo en Landorus forma Totem) ataque: 3,
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 90,
	generos: {macho: 100,hembra: 0},
	dexRegiones: {
		dexNacional: '645',
		dexUnovaBW: '151',
		dexUnovaB2W2: '200',
	},
	idiomas: {frances: namesFR[644],aleman: namesDE[644],japones: [namesJP[644][1], namesJP[644][0]],coreano: [namesKO[644][1], namesKO[644][0]]}
},
{
	id: '646',
	nombre: names[645], tipo: ['dragon', 'ice'], clasificacion: 'Pokémon Frontera',
	altura: [getAltura(645).pies, getAltura(645).metros], peso: [getPeso(645).libras, getPeso(645).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pressure'),habilidadDescripcion: habDescripcion('pressure')},
		{habilidadNombre: habNombre('turboblaze'),habilidadDescripcion: "(Sólo en Kyurem Blanco) "+habDescripcion('turboblaze')},
		{habilidadNombre: habNombre('teravolt'),habilidadDescripcion: "(Sólo en Kyurem Negro) "+habDescripcion('teravolt')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(Solo en Kyurem Blanco) ataqueEspecial: 3,
		//(Solo en Kyurem Negro) ataque: 3,
		ps: 1,
		ataque: 1,
		ataqueEspecial: 1,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '646',
		dexUnovaBW: '152',
		dexUnovaB2W2: '297',
	},
	idiomas: {frances: namesFR[645],aleman: namesDE[645],japones: [namesJP[645][1], namesJP[645][0]],coreano: [namesKO[645][1], namesKO[645][0]]}
},
{
	id: '647',
	nombre: names[646], tipo: ['water', 'fight'], clasificacion: 'Pokémon Potro',
	altura: [getAltura(646).pies, getAltura(646).metros], peso: [getPeso(646).libras, getPeso(646).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('justified'),habilidadDescripcion: habDescripcion('justified')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 81, grupo: ['Desconocido'], amistad: 35,
	dexRegiones: {
		dexNacional: '647',
		dexUnovaBW: '153',
		dexUnovaB2W2: '298',
	},
	idiomas: {frances: namesFR[646],aleman: namesDE[646],japones: [namesJP[646][1], namesJP[646][0]],coreano: [namesKO[646][1], namesKO[646][0]]}
},
{
	id: '648',
	nombre: names[647], tipo: ['normal', 'psychic'], clasificacion: 'Pokémon Melodía',
	altura: [getAltura(647).pies, getAltura(647).metros], peso: [getPeso(647).libras, getPeso(647).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dicha'),habilidadDescripcion: habDescripcion('dicha')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		//(Solo en Meloetta forma Danza) ataque: 1,
		//(Solo en Meloetta forma Danza) defensa: 1,
		//(Solo en Meloetta forma Danza) velocidad: 1,
		ataqueEspecial: 1,
		defensaEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '648',
		dexUnovaBW: '154',
		dexUnovaB2W2: '299',
	},
	idiomas: {frances: namesFR[647],aleman: namesDE[647],japones: [namesJP[647][1], namesJP[647][0]],coreano: [namesKO[647][1], namesKO[647][0]]}
},
{
	id: '649',
	nombre: names[648], tipo: ['bug', 'steel'], clasificacion: 'Pokémon Paleozoico',
	altura: [getAltura(648).pies, getAltura(648).metros], peso: [getPeso(648).libras, getPeso(648).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('descarga'),habilidadDescripcion: habDescripcion('descarga')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataque: 1,
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '649',
		dexUnovaBW: '155',
		dexUnovaB2W2: '300',
	},
	idiomas: {frances: namesFR[648],aleman: namesDE[648],japones: [namesJP[648][1], namesJP[648][0]],coreano: [namesKO[648][1], namesKO[648][0]]}
},












{
	id: '650',
	nombre: names[649], tipo: ['grass'], clasificacion: 'Pokémon Erizo',
	altura: [getAltura(649).pies, getAltura(649).metros], peso: [getPeso(649).libras, getPeso(649).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('antibalas'),habilidadDescripcion: habDescripcion('antibalas')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '651',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '652',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '650',
		dexKalosCentral: '001',
	},
	idiomas: {frances: namesFR[649],aleman: namesDE[649],japones: [namesJP[649][1], namesJP[649][0]],coreano: [namesKO[649][1], namesKO[649][0]]}
},
{
	id: '651',
	nombre: names[650], tipo: ['grass'], clasificacion: 'Pokémon Corazaespín',
	altura: [getAltura(650).pies, getAltura(650).metros], peso: [getPeso(650).libras, getPeso(650).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('antibalas'),habilidadDescripcion: habDescripcion('antibalas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '650',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '652',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '651',
		dexKalosCentral: '002',
	},
	idiomas: {frances: namesFR[650],aleman: namesDE[650],japones: [namesJP[650][1], namesJP[650][0]],coreano: [namesKO[650][1], namesKO[650][0]]}
},
{
	id: '652',
	nombre: names[651], tipo: ['grass', 'fight'], clasificacion: 'Pokémon Corazaespín',
	altura: [getAltura(651).pies, getAltura(651).metros], peso: [getPeso(651).libras, getPeso(651).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Espesura'),habilidadDescripcion: habDescripcion('Espesura')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('antibalas'),habilidadDescripcion: habDescripcion('antibalas')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '651',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '650',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '652',
		dexKalosCentral: '003',
	},
	idiomas: {frances: namesFR[651],aleman: namesDE[651],japones: [namesJP[651][1], namesJP[651][0]],coreano: [namesKO[651][1], namesKO[651][0]]}
},
{
	id: '653',
	nombre: names[652], tipo: ['fire'], clasificacion: 'Pokémon Zorro',
	altura: [getAltura(652).pies, getAltura(652).metros], peso: [getPeso(652).libras, getPeso(652).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magician'),habilidadDescripcion: habDescripcion('magician')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '654',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '655',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '653',
		dexKalosCentral: '004',
	},
	idiomas: {frances: namesFR[652],aleman: namesDE[652],japones: [namesJP[652][1], namesJP[652][0]],coreano: [namesKO[652][1], namesKO[652][0]]}
},
{
	id: '654',
	nombre: names[653], tipo: ['fire'], clasificacion: 'Pokémon Zorro',
	altura: [getAltura(653).pies, getAltura(653).metros], peso: [getPeso(653).libras, getPeso(653).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magician'),habilidadDescripcion: habDescripcion('magician')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '653',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '655',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '654',
		dexKalosCentral: '005',
	},
	idiomas: {frances: namesFR[653],aleman: namesDE[653],japones: [namesJP[653][1], namesJP[653][0]],coreano: [namesKO[653][1], namesKO[653][0]]}
},
{
	id: '655',
	nombre: names[654], tipo: ['fire', 'psychic'], clasificacion: 'Pokémon Zorro',
	altura: [getAltura(654).pies, getAltura(654).metros], peso: [getPeso(654).libras, getPeso(654).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mar Llamas'),habilidadDescripcion: habDescripcion('Mar Llamas')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magician'),habilidadDescripcion: habDescripcion('magician')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '654',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '653',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '655',
		dexKalosCentral: '006',
	},
	idiomas: {frances: namesFR[654],aleman: namesDE[654],japones: [namesJP[654][1], namesJP[654][0]],coreano: [namesKO[654][1], namesKO[654][0]]}
},
{
	id: '656',
	nombre: names[655], tipo: ['water'], clasificacion: 'Pokémon Burburrana',
	altura: [getAltura(655).pies, getAltura(655).metros], peso: [getPeso(655).libras, getPeso(655).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('protean'),habilidadDescripcion: habDescripcion('protean')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '657',
			metodo: "Subiendo desde nivel 16",
			evolucion: {
				numeroEspecie: '658',
				metodo: "Subiendo desde nivel 36",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '656',
		dexKalosCentral: '007',
	},
	idiomas: {frances: namesFR[655],aleman: namesDE[655],japones: [namesJP[655][1], namesJP[655][0]],coreano: [namesKO[655][1], namesKO[655][0]]}
},
{
	id: '657',
	nombre: names[656], tipo: ['water'], clasificacion: 'Pokémon Burburrana',
	altura: [getAltura(656).pies, getAltura(656).metros], peso: [getPeso(656).libras, getPeso(656).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('protean'),habilidadDescripcion: habDescripcion('protean')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '656',
			metodo: "Subiendo desde nivel 16",
		},
		evolucion: {
			numeroEspecie: '658',
			metodo: "Subiendo desde nivel 36",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '657',
		dexKalosCentral: '008',
	},
	idiomas: {frances: namesFR[656],aleman: namesDE[656],japones: [namesJP[656][1], namesJP[656][0]],coreano: [namesKO[656][1], namesKO[656][0]]}
},
{
	id: '658',
	nombre: names[657], tipo: ['water', 'dark'], clasificacion: 'Pokémon Ninja',
	altura: [getAltura(657).pies, getAltura(657).metros], peso: [getPeso(657).libras, getPeso(657).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Torrente'),habilidadDescripcion: habDescripcion('Torrente')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('protean'),habilidadDescripcion: habDescripcion('protean')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '657',
			metodo: "Subiendo desde nivel 36",
			preevolucion: {
				numeroEspecie: '656',
				metodo: "Subiendo desde nivel 16",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 21, grupo: ['Agua 1'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '658',
		dexKalosCentral: '009',
	},
	idiomas: {frances: namesFR[657],aleman: namesDE[657],japones: [namesJP[657][1], namesJP[657][0]],coreano: [namesKO[657][1], namesKO[657][0]]}
},
{
	id: '659',
	nombre: names[658], tipo: ['normal'], clasificacion: 'Pokémon Excavador',
	altura: [getAltura(658).pies, getAltura(658).metros], peso: [getPeso(658).libras, getPeso(658).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('carrillo'),habilidadDescripcion: habDescripcion('carrillo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('potencia'),habilidadDescripcion: habDescripcion('potencia')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '660',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '659',
		dexKalosCentral: '010',
	},
	idiomas: {frances: namesFR[658],aleman: namesDE[658],japones: [namesJP[658][1], namesJP[658][0]],coreano: [namesKO[658][1], namesKO[658][0]]}
},
{
	id: '660',
	nombre: names[659], tipo: ['normal', 'ground'], clasificacion: 'Pokémon Excavador',
	altura: [getAltura(659).pies, getAltura(659).metros], peso: [getPeso(659).libras, getPeso(659).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('carrillo'),habilidadDescripcion: habDescripcion('carrillo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('potencia'),habilidadDescripcion: habDescripcion('potencia')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '659',
			metodo: "Subiendo desde nivel 20",
		},
	},
	],
	ratioCaptura: 127,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 16, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '660',
		dexKalosCentral: '011',
	},
	idiomas: {frances: namesFR[659],aleman: namesDE[659],japones: [namesJP[659][1], namesJP[659][0]],coreano: [namesKO[659][1], namesKO[659][0]]}
},
{
	id: '661',
	nombre: names[660], tipo: ['normal', 'flying'], clasificacion: 'Pokémon Petirrojo',
	altura: [getAltura(660).pies, getAltura(660).metros], peso: [getPeso(660).libras, getPeso(660).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sacapecho'),habilidadDescripcion: habDescripcion('Sacapecho')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gale wings'),habilidadDescripcion: habDescripcion('gale wings')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '662',
			metodo: "Subiendo desde nivel 17",
			evolucion: {
				numeroEspecie: '663',
				metodo: "Subiendo desde nivel 35",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '661',
		dexKalosCentral: '014',
	},
	idiomas: {frances: namesFR[660],aleman: namesDE[660],japones: [namesJP[660][1], namesJP[660][0]],coreano: [namesKO[660][1], namesKO[660][0]]}
},
{
	id: '662',
	nombre: names[661], tipo: ['fire', 'flying'], clasificacion: 'Pokémon Petirrojo',
	altura: [getAltura(661).pies, getAltura(661).metros], peso: [getPeso(661).libras, getPeso(661).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gale wings'),habilidadDescripcion: habDescripcion('gale wings')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '661',
			metodo: "Subiendo desde nivel 17",
		},
		evolucion: {
			numeroEspecie: '663',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '662',
		dexKalosCentral: '015',
	},
	idiomas: {frances: namesFR[661],aleman: namesDE[661],japones: [namesJP[661][1], namesJP[661][0]],coreano: [namesKO[661][1], namesKO[661][0]]}
},
{
	id: '663',
	nombre: names[662], tipo: ['fire', 'flying'], clasificacion: 'Pokémon Flamígero',
	altura: [getAltura(662).pies, getAltura(662).metros], peso: [getPeso(662).libras, getPeso(662).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flame body'),habilidadDescripcion: habDescripcion('flame body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gale wings'),habilidadDescripcion: habDescripcion('gale wings')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '662',
			metodo: "Subiendo desde nivel 35",
			preevolucion: {
				numeroEspecie: '661',
				metodo: "Subiendo desde nivel 17",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 3,
	},
	pasos: 255 * 16, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '663',
		dexKalosCentral: '016',
	},
	idiomas: {frances: namesFR[662],aleman: namesDE[662],japones: [namesJP[662][1], namesJP[662][0]],coreano: [namesKO[662][1], namesKO[662][0]]}
},
{
	id: '664',
	nombre: names[663], tipo: ['bug'], clasificacion: 'Pokémon Tiraescamas',
	altura: [getAltura(663).pies, getAltura(663).metros], peso: [getPeso(663).libras, getPeso(663).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '665',
			metodo: "Subiendo desde nivel 9",
			evolucion: {
				numeroEspecie: '666',
				metodo: "Subiendo desde nivel 12",
			},
		},
	},
	],
	ratioCaptura: 255,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '664',
		dexKalosCentral: '020',
	},
	idiomas: {frances: namesFR[663],aleman: namesDE[663],japones: [namesJP[663][1], namesJP[663][0]],coreano: [namesKO[663][1], namesKO[663][0]]}
},
{
	id: '665',
	nombre: names[664], tipo: ['bug'], clasificacion: 'Pokémon Tiraescamas',
	altura: [getAltura(664).pies, getAltura(664).metros], peso: [getPeso(664).libras, getPeso(664).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Mudar'),habilidadDescripcion: habDescripcion('Mudar')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '664',
			metodo: "Subiendo desde nivel 9",
		},
		evolucion: {
			numeroEspecie: '666',
			metodo: "Subiendo desde nivel 12",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '665',
		dexKalosCentral: '021',
	},
	idiomas: {frances: namesFR[664],aleman: namesDE[664],japones: [namesJP[664][1], namesJP[664][0]],coreano: [namesKO[664][1], namesKO[664][0]]}
},
{
	id: '666',
	nombre: names[665], tipo: ['bug', 'flying'], clasificacion: 'Pokémon Escamaposa',
	altura: [getAltura(665).pies, getAltura(665).metros], peso: [getPeso(665).libras, getPeso(665).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Polvo Escudo'),habilidadDescripcion: habDescripcion('Polvo Escudo')},
		{habilidadNombre: habNombre('Ojo Compuesto'),habilidadDescripcion: habDescripcion('Ojo Compuesto')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('friend guard'),habilidadDescripcion: habDescripcion('friend guard')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '665',
			metodo: "Subiendo desde nivel 12",
			preevolucion: {
				numeroEspecie: '664',
				metodo: "Subiendo desde nivel 9",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 1,
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 16, grupo: ['Bicho'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '666',
		dexKalosCentral: '022',
	},
	idiomas: {frances: namesFR[665],aleman: namesDE[665],japones: [namesJP[665][1], namesJP[665][0]],coreano: [namesKO[665][1], namesKO[665][0]]}
},
{
	id: '667',
	nombre: names[666], tipo: ['fire', 'normal'], clasificacion: 'Pokémon Leoncito',
	altura: [getAltura(666).pies, getAltura(666).metros], peso: [getPeso(666).libras, getPeso(666).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '668',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 220,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '667',
		dexKalosCentral: '057',
	},
	idiomas: {frances: namesFR[666],aleman: namesDE[666],japones: [namesJP[666][1], namesJP[666][0]],coreano: [namesKO[666][1], namesKO[666][0]]}
},
{
	id: '668',
	nombre: names[667], tipo: ['fire', 'normal'], clasificacion: 'Pokémon Regio',
	altura: [getAltura(667).pies, getAltura(667).metros], peso: [getPeso(667).libras, getPeso(667).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('unnerve'),habilidadDescripcion: habDescripcion('unnerve')},
		{habilidadNombre: habNombre('rivalry'),habilidadDescripcion: habDescripcion('rivalry')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('moxie'),habilidadDescripcion: habDescripcion('moxie')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '667',
			metodo: "Subiendo desde nivel 35",
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 25,hembra: 75},
	dexRegiones: {
		dexNacional: '668',
		dexKalosCentral: '058',
	},
	idiomas: {frances: namesFR[667],aleman: namesDE[667],japones: [namesJP[667][1], namesJP[667][0]],coreano: [namesKO[667][1], namesKO[667][0]]}
},
{
	id: '669',
	nombre: names[668], tipo: ['fairy'], clasificacion: 'Pokémon Monoflor',
	altura: [getAltura(668).pies, getAltura(668).metros], peso: [getPeso(668).libras, getPeso(668).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flower veil'),habilidadDescripcion: habDescripcion('flower veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('symbiosis'),habilidadDescripcion: habDescripcion('symbiosis')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '670',
			metodo: "Subiendo desde nivel 19",
			evolucion: {
				numeroEspecie: '671',
				metodo: "Aplicando Piedra Día",
				objeto: getEvolveItem('shiny stone'),
			},
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '669',
		dexKalosCentral: '068',
	},
	idiomas: {frances: namesFR[668],aleman: namesDE[668],japones: [namesJP[668][1], namesJP[668][0]],coreano: [namesKO[668][1], namesKO[668][0]]}
},
{
	id: '670',
	nombre: names[669], tipo: ['fairy'], clasificacion: 'Pokémon Monoflor',
	altura: [getAltura(669).pies, getAltura(669).metros], peso: [getPeso(669).libras, getPeso(669).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flower veil'),habilidadDescripcion: habDescripcion('flower veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('symbiosis'),habilidadDescripcion: habDescripcion('symbiosis')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '669',
			metodo: "Subiendo desde nivel 19",
		},
		evolucion: {
			numeroEspecie: '671',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '670',
		dexKalosCentral: '069',
	},
	idiomas: {frances: namesFR[669],aleman: namesDE[669],japones: [namesJP[669][1], namesJP[669][0]],coreano: [namesKO[669][1], namesKO[669][0]]}
},
{
	id: '671',
	nombre: names[670], tipo: ['fairy'], clasificacion: 'Pokémon Jardín',
	altura: [getAltura(670).pies, getAltura(670).metros], peso: [getPeso(670).libras, getPeso(670).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('flower veil'),habilidadDescripcion: habDescripcion('flower veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('symbiosis'),habilidadDescripcion: habDescripcion('symbiosis')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '670',
			metodo: "Aplicando Piedra Día",
			objeto: getEvolveItem('shiny stone'),
			preevolucion: {
				numeroEspecie: '669',
				metodo: "Subiendo desde nivel 19",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 0, hembra: 100},
	dexRegiones: {
		dexNacional: '671',
		dexKalosCentral: '070',
	},
	idiomas: {frances: namesFR[670],aleman: namesDE[670],japones: [namesJP[670][1], namesJP[670][0]],coreano: [namesKO[670][1], namesKO[670][0]]}
},
{
	id: '672',
	nombre: names[671], tipo: ['grass'], clasificacion: 'Pokémon Montura',
	altura: [getAltura(671).pies, getAltura(671).metros], peso: [getPeso(671).libras, getPeso(671).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('grass pelt'),habilidadDescripcion: habDescripcion('grass pelt')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '673',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '672',
		dexKalosCentral: '089',
	},
	idiomas: {frances: namesFR[671],aleman: namesDE[671],japones: [namesJP[671][1], namesJP[671][0]],coreano: [namesKO[671][1], namesKO[671][0]]}
},
{
	id: '673',
	nombre: names[672], tipo: ['grass'], clasificacion: 'Pokémon Montura',
	altura: [getAltura(672).pies, getAltura(672).metros], peso: [getPeso(672).libras, getPeso(672).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('grass pelt'),habilidadDescripcion: habDescripcion('grass pelt')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '672',
			metodo: "Subiendo desde nivel 32",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '673',
		dexKalosCentral: '090',
	},
	idiomas: {frances: namesFR[672],aleman: namesDE[672],japones: [namesJP[672][1], namesJP[672][0]],coreano: [namesKO[672][1], namesKO[672][0]]}
},
{
	id: '674',
	nombre: names[673], tipo: ['fight'], clasificacion: 'Pokémon Juguetón',
	altura: [getAltura(673).pies, getAltura(673).metros], peso: [getPeso(673).libras, getPeso(673).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '675',
			metodo: "Subiendo desde nivel 32 con un Pokémon tipo Siniestro en el equipo",
			condicion: ['ally'],
		},
	},
	],
	ratioCaptura: 220,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 26, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '674',
		dexKalosCentral: '091',
	},
	idiomas: {frances: namesFR[673],aleman: namesDE[673],japones: [namesJP[673][1], namesJP[673][0]],coreano: [namesKO[673][1], namesKO[673][0]]}
},
{
	id: '675',
	nombre: names[674], tipo: ['fight', 'dark'], clasificacion: 'Pokémon Rostro Fiero',
	altura: [getAltura(674).pies, getAltura(674).metros], peso: [getPeso(674).libras, getPeso(674).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		{habilidadNombre: habNombre('iron fist'),habilidadDescripcion: habDescripcion('iron fist')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('scrappy'),habilidadDescripcion: habDescripcion('scrappy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '674',
			metodo: "Subiendo desde nivel 32 con un Pokémon tipo Siniestro en el equipo",
			condicion: ['ally'],
		},
	},
	],
	ratioCaptura: 65,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 26, grupo: ['Campo', 'Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '675',
		dexKalosCentral: '092',
	},
	idiomas: {frances: namesFR[674],aleman: namesDE[674],japones: [namesJP[674][1], namesJP[674][0]],coreano: [namesKO[674][1], namesKO[674][0]]}
},
{
	id: '676',
	nombre: names[675], tipo: ['normal'], clasificacion: 'Pokémon Caniche',
	altura: [getAltura(675).pies, getAltura(675).metros], peso: [getPeso(675).libras, getPeso(675).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('fur coat'),habilidadDescripcion: habDescripcion('fur coat')},
		],
	},
	ratioCaptura: 160,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '676',
		dexKalosCentral: '093',
	},
	idiomas: {frances: namesFR[675],aleman: namesDE[675],japones: [namesJP[675][1], namesJP[675][0]],coreano: [namesKO[675][1], namesKO[675][0]]}
},
{
	id: '677',
	nombre: names[676], tipo: ['psychic'], clasificacion: 'Pokémon Moderación',
	altura: [getAltura(676).pies, getAltura(676).metros], peso: [getPeso(676).libras, getPeso(676).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '678',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '677',
		dexKalosCentral: '114',
	},
	idiomas: {frances: namesFR[676],aleman: namesDE[676],japones: [namesJP[676][1], namesJP[676][0]],coreano: [namesKO[676][1], namesKO[676][0]]}
},
/*
{
	id: '678',
	nombre: names[677], tipo: [''], clasificacion: 'Pokémon Autocontrol',
	altura: [getAltura(677).pies, getAltura(677).metros], peso: [getPeso(677).libras, getPeso(677).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre(''),habilidadDescripcion: habDescripcion('')},
		],
	},
	ratioCaptura: 75,
	valoresEsfuerzo: {
	velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
	dexNacional: '678',
	dexKalosCentral: '115',
	},
	idiomas: {frances: namesFR[677],aleman: namesDE[677],japones: [namesJP[677][1], namesJP[677][0]],coreano: [namesKO[677][1], namesKO[677][0]]}
},
*/
{
	id: '679',
	nombre: names[678], tipo: ['steel', 'ghost'], clasificacion: 'Pokémon Tizona',
	altura: [getAltura(678).pies, getAltura(678).metros], peso: [getPeso(678).libras, getPeso(678).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '680',
			metodo: "Subiendo desde nivel 35",
			evolucion: {
				numeroEspecie: '681',
				metodo: "Aplicando Piedra Noche",
				objeto: getEvolveItem('dusk stone'),
			},
		},
	},
	],
	ratioCaptura: 180,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '679',
		dexKalosCentral: '117',
	},
	idiomas: {frances: namesFR[678],aleman: namesDE[678],japones: [namesJP[678][1], namesJP[678][0]],coreano: [namesKO[678][1], namesKO[678][0]]}
},
{
	id: '680',
	nombre: names[679], tipo: ['steel', 'ghost'], clasificacion: 'Pokémon Tizona',
	altura: [getAltura(679).pies, getAltura(679).metros], peso: [getPeso(679).libras, getPeso(679).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('indefenso'),habilidadDescripcion: habDescripcion('indefenso')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '679',
			metodo: "Subiendo desde nivel 35",
		},
		evolucion: {
			numeroEspecie: '681',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '680',
		dexKalosCentral: '118',
	},
	idiomas: {frances: namesFR[679],aleman: namesDE[679],japones: [namesJP[679][1], namesJP[679][0]],coreano: [namesKO[679][1], namesKO[679][0]]}
},
{
	id: '681',
	nombre: names[680], tipo: ['steel', 'ghost'], clasificacion: 'Pokémon Espada Real',
	altura: [getAltura(680).pies, getAltura(680).metros], peso: [getPeso(680).libras, getPeso(680).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('stance change'),habilidadDescripcion: habDescripcion('stance change')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '680',
			metodo: "Aplicando Piedra Noche",
			objeto: getEvolveItem('dusk stone'),
			preevolucion: {
				numeroEspecie: '679',
				metodo: "Subiendo desde nivel 35",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensa: 2,
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '681',
		dexKalosCentral: '119',
	},
	idiomas: {frances: namesFR[680],aleman: namesDE[680],japones: [namesJP[680][1], namesJP[680][0]],coreano: [namesKO[680][1], namesKO[680][0]]}
},
{
	id: '682',
	nombre: names[681], tipo: ['fairy'], clasificacion: 'Pokémon Aroma',
	altura: [getAltura(681).pies, getAltura(681).metros], peso: [getPeso(681).libras, getPeso(681).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('aroma veil'),habilidadDescripcion: habDescripcion('aroma veil')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '683',
			metodo: "Intercambio con objeto Saquito Fragante",
			condicion: ['trade'],
			objeto: getEvolveItem('sachet'),
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '682',
		dexKalosCentral: '129',
	},
	idiomas: {frances: namesFR[681],aleman: namesDE[681],japones: [namesJP[681][1], namesJP[681][0]],coreano: [namesKO[681][1], namesKO[681][0]]}
},
{
	id: '683',
	nombre: names[682], tipo: ['fairy'], clasificacion: 'Pokémon Fragancia',
	altura: [getAltura(682).pies, getAltura(682).metros], peso: [getPeso(682).libras, getPeso(682).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('healer'),habilidadDescripcion: habDescripcion('healer')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('aroma veil'),habilidadDescripcion: habDescripcion('aroma veil')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '682',
			metodo: "Intercambio con objeto Saquito Fragante",
			condicion: ['trade'],
			objeto: getEvolveItem('sachet'),
		},
	},
	],
	ratioCaptura: 140,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '683',
		dexKalosCentral: '130',
	},
	idiomas: {frances: namesFR[682],aleman: namesDE[682],japones: [namesJP[682][1], namesJP[682][0]],coreano: [namesKO[682][1], namesKO[682][0]]}
},
{
	id: '684',
	nombre: names[683], tipo: ['fairy'], clasificacion: 'Pokémon Chuchería',
	altura: [getAltura(683).pies, getAltura(683).metros], peso: [getPeso(683).libras, getPeso(683).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sweet veil'),habilidadDescripcion: habDescripcion('sweet veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '685',
			metodo: "Intercambio con objeto Dulce de Nata",
			condicion: ['trade'],
			objeto: getEvolveItem('whipped dream'),
		},
	},
	],
	ratioCaptura: 200,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '684',
		dexKalosCentral: '131',
	},
	idiomas: {frances: namesFR[683],aleman: namesDE[683],japones: [namesJP[683][1], namesJP[683][0]],coreano: [namesKO[683][1], namesKO[683][0]]}
},
{
	id: '685',
	nombre: names[684], tipo: ['fairy'], clasificacion: 'Pokémon Nata',
	altura: [getAltura(684).pies, getAltura(684).metros], peso: [getPeso(684).libras, getPeso(684).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sweet veil'),habilidadDescripcion: habDescripcion('sweet veil')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '684',
			metodo: "Intercambio con objeto Dulce de Nata",
			condicion: ['trade'],
			objeto: getEvolveItem('whipped dream'),
		},
	},
	],
	ratioCaptura: 140,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '685',
		dexKalosCentral: '132',
	},
	idiomas: {frances: namesFR[684],aleman: namesDE[684],japones: [namesJP[684][1], namesJP[684][0]],coreano: [namesKO[684][1], namesKO[684][0]]}
},
{
	id: '686',
	nombre: names[685], tipo: ['dark', 'psychic'], clasificacion: 'Pokémon Rotación',
	altura: [getAltura(685).pies, getAltura(685).metros], peso: [getPeso(685).libras, getPeso(685).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ventosas'),habilidadDescripcion: habDescripcion('ventosas')},
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '687',
			metodo: "Subiendo desde nivel 30 manteniendo la consola 3DS cabeza abajo",
			condicion: ['console-upside-down'],
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '686',
		dexKalosCosta: '010',
	},
	idiomas: {frances: namesFR[685],aleman: namesDE[685],japones: [namesJP[685][1], namesJP[685][0]],coreano: [namesKO[685][1], namesKO[685][0]]}
},
{
	id: '687',
	nombre: names[686], tipo: ['dark', 'psychic'], clasificacion: 'Pokémon Revolución',
	altura: [getAltura(686).pies, getAltura(686).metros], peso: [getPeso(686).libras, getPeso(686).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ventosas'),habilidadDescripcion: habDescripcion('ventosas')},
		{habilidadNombre: habNombre('contrary'),habilidadDescripcion: habDescripcion('contrary')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '686',
			metodo: "Subiendo desde nivel 30 manteniendo la consola 3DS cabeza abajo",
			condicion: ['console-upside-down'],
		},
	},
	],
	ratioCaptura: 90,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 1', 'Agua 2'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '687',
		dexKalosCosta: '011',
	},
	idiomas: {frances: namesFR[686],aleman: namesDE[686],japones: [namesJP[686][1], namesJP[686][0]],coreano: [namesKO[686][1], namesKO[686][0]]}
},
{
	id: '688',
	nombre: names[687], tipo: ['rock', 'water'], clasificacion: 'Pokémon Dos Manos',
	altura: [getAltura(687).pies, getAltura(687).metros], peso: [getPeso(687).libras, getPeso(687).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		{habilidadNombre: habNombre('tough claws'),habilidadDescripcion: habDescripcion('tough claws')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '689',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '688',
		dexKalosCosta: '021',
	},
	idiomas: {frances: namesFR[687],aleman: namesDE[687],japones: [namesJP[687][1], namesJP[687][0]],coreano: [namesKO[687][1], namesKO[687][0]]}
},
{
	id: '689',
	nombre: names[688], tipo: ['rock', 'water'], clasificacion: 'Pokémon Combinación',
	altura: [getAltura(688).pies, getAltura(688).metros], peso: [getPeso(688).libras, getPeso(688).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('sniper'),habilidadDescripcion: habDescripcion('sniper')},
		{habilidadNombre: habNombre('tough claws'),habilidadDescripcion: habDescripcion('tough claws')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('hurto'),habilidadDescripcion: habDescripcion('hurto')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '688',
			metodo: "Subiendo desde nivel 39",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '689',
		dexKalosCosta: '022',
	},
	idiomas: {frances: namesFR[688],aleman: namesDE[688],japones: [namesJP[688][1], namesJP[688][0]],coreano: [namesKO[688][1], namesKO[688][0]]}
},
{
	id: '690',
	nombre: names[689], tipo: ['poison', 'water'], clasificacion: 'Pokémon Pseudoalga',
	altura: [getAltura(689).pies, getAltura(689).metros], peso: [getPeso(689).libras, getPeso(689).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '691',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '690',
		dexKalosCosta: '030',
	},
	idiomas: {frances: namesFR[689],aleman: namesDE[689],japones: [namesJP[689][1], namesJP[689][0]],coreano: [namesKO[689][1], namesKO[689][0]]}
},
{
	id: '691',
	nombre: names[690], tipo: ['poison', 'dragon'], clasificacion: 'Pokémon Pseudoalga',
	altura: [getAltura(690).pies, getAltura(690).metros], peso: [getPeso(690).libras, getPeso(690).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('poison point'),habilidadDescripcion: habDescripcion('poison point')},
		{habilidadNombre: habNombre('poison touch'),habilidadDescripcion: habDescripcion('poison touch')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('adaptable'),habilidadDescripcion: habDescripcion('adaptable')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '690',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 55,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Agua 1'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '691',
		dexKalosCosta: '031',
	},
	idiomas: {frances: namesFR[690],aleman: namesDE[690],japones: [namesJP[690][1], namesJP[690][0]],coreano: [namesKO[690][1], namesKO[690][0]]}
},
{
	id: '692',
	nombre: names[691], tipo: ['water'], clasificacion: 'Pokémon Proyectagua',
	altura: [getAltura(691).pies, getAltura(691).metros], peso: [getPeso(691).libras, getPeso(691).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mega launcher'),habilidadDescripcion: habDescripcion('mega launcher')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '693',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 225,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
	},
	pasos: 255 * 16, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '692',
		dexKalosCosta: '032',
	},
	idiomas: {frances: namesFR[691],aleman: namesDE[691],japones: [namesJP[691][1], namesJP[691][0]],coreano: [namesKO[691][1], namesKO[691][0]]}
},
{
	id: '693',
	nombre: names[692], tipo: ['water'], clasificacion: 'Pokémon Lanzachorro',
	altura: [getAltura(692).pies, getAltura(692).metros], peso: [getPeso(692).libras, getPeso(692).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('mega launcher'),habilidadDescripcion: habDescripcion('mega launcher')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '692',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 55,
	valoresEsfuerzo: {
		ataqueEspecial: 2,
	},
	pasos: 255 * 16, grupo: ['Agua 1', 'Agua 3'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '693',
		dexKalosCosta: '033',
	},
	idiomas: {frances: namesFR[692],aleman: namesDE[692],japones: [namesJP[692][1], namesJP[692][0]],coreano: [namesKO[692][1], namesKO[692][0]]}
},
{
	id: '694',
	nombre: names[693], tipo: ['electric', 'normal'], clasificacion: 'Pokémon Generador',
	altura: [getAltura(693).pies, getAltura(693).metros], peso: [getPeso(693).libras, getPeso(693).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '695',
			metodo: "Aplicando Piedra Solar",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '694',
		dexKalosCosta: '046',
	},
	idiomas: {frances: namesFR[693],aleman: namesDE[693],japones: [namesJP[693][1], namesJP[693][0]],coreano: [namesKO[693][1], namesKO[693][0]]}
},
{
	id: '695',
	nombre: names[694], tipo: ['electric', 'normal'], clasificacion: 'Pokémon Lagarto Generador',
	altura: [getAltura(694).pies, getAltura(694).metros], peso: [getPeso(694).libras, getPeso(694).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Sand Veil'),habilidadDescripcion: habDescripcion('Sand Veil')},
		{habilidadNombre: habNombre('dry skin'),habilidadDescripcion: habDescripcion('dry skin')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Poder Solar'),habilidadDescripcion: habDescripcion('Poder Solar')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '694',
			metodo: "Aplicando Piedra Solar",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		ataqueEspecial: 1,
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '695',
		dexKalosCosta: '047',
	},
	idiomas: {frances: namesFR[694],aleman: namesDE[694],japones: [namesJP[694][1], namesJP[694][0]],coreano: [namesKO[694][1], namesKO[694][0]]}
},
{
	id: '696',
	nombre: names[695], tipo: ['rock', 'dragon'], clasificacion: 'Pokémon Heredero',
	altura: [getAltura(695).pies, getAltura(695).metros], peso: [getPeso(695).libras, getPeso(695).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('strong jaw'),habilidadDescripcion: habDescripcion('strong jaw')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '697',
			metodo: "Subiendo desde nivel 39 en el día",
			condicion: ['daylight'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 31, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '696',
		dexKalosCosta: '064',
	},
	idiomas: {frances: namesFR[695],aleman: namesDE[695],japones: [namesJP[695][1], namesJP[695][0]],coreano: [namesKO[695][1], namesKO[695][0]]}
},
{
	id: '697',
	nombre: names[696], tipo: ['rock', 'dragon'], clasificacion: 'Pokémon Tirano',
	altura: [getAltura(696).pies, getAltura(696).metros], peso: [getPeso(696).libras, getPeso(696).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('strong jaw'),habilidadDescripcion: habDescripcion('strong jaw')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('rock head'),habilidadDescripcion: habDescripcion('rock head')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '696',
			metodo: "Subiendo desde nivel 39 en el día",
			condicion: ['daylight'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 31, grupo: ['Dragón', 'Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '697',
		dexKalosCosta: '065',
	},
	idiomas: {frances: namesFR[696],aleman: namesDE[696],japones: [namesJP[696][1], namesJP[696][0]],coreano: [namesKO[696][1], namesKO[696][0]]}
},
{
	id: '698',
	nombre: names[697], tipo: ['rock', 'ice'], clasificacion: 'Pokémon Tundra',
	altura: [getAltura(697).pies, getAltura(697).metros], peso: [getPeso(697).libras, getPeso(697).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('piel helada'),habilidadDescripcion: habDescripcion('piel helada')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('nevada'),habilidadDescripcion: habDescripcion('nevada')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '699',
			metodo: "Subiendo desde nivel 39 en la noche",
			condicion: ['night'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 1,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '698',
		dexKalosCosta: '066',
	},
	idiomas: {frances: namesFR[697],aleman: namesDE[697],japones: [namesJP[697][1], namesJP[697][0]],coreano: [namesKO[697][1], namesKO[697][0]]}
},
{
	id: '699',
	nombre: names[698], tipo: ['rock', 'ice'], clasificacion: 'Pokémon Tundra',
	altura: [getAltura(698).pies, getAltura(698).metros], peso: [getPeso(698).libras, getPeso(698).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('piel helada'),habilidadDescripcion: habDescripcion('piel helada')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('nevada'),habilidadDescripcion: habDescripcion('nevada')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '698',
			metodo: "Subiendo desde nivel 39 en la noche",
			condicion: ['night'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 2,
	},
	pasos: 255 * 31, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '699',
		dexKalosCosta: '067',
	},
	idiomas: {frances: namesFR[698],aleman: namesDE[698],japones: [namesJP[698][1], namesJP[698][0]],coreano: [namesKO[698][1], namesKO[698][0]]}
},
{
	id: '700',
	nombre: names[699], tipo: ['fairy'], clasificacion: 'Pokémon Vínculo',
	altura: [getAltura(699).pies, getAltura(699).metros], peso: [getPeso(699).libras, getPeso(699).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('cute charm'),habilidadDescripcion: habDescripcion('cute charm')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('pixilate'),habilidadDescripcion: habDescripcion('pixilate')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '134',
				metodo: "Aplicando Piedra Agua",
				objeto: getEvolveItem('waterstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '135',
				metodo: "Aplicando Piedra Trueno",
				objeto: getEvolveItem('thunderstone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '136',
				metodo: "Aplicando Piedra Fuego",
				objeto: getEvolveItem('firestone'),
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '196',
				metodo: "Felicidad máxima, subiendo de nivel en el día",
				condicion: ['happiness', 'daylight'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '197',
				metodo: "Felicidad máxima, subiendo de nivel en la noche",
				condicion: ['happiness', 'night'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '470',
				metodo: "Subiendo de nivel cerca de la Roca Musgo",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			otraEvolucion: {
				numeroEspecie: '471',
				metodo: "Subiendo de nivel cerca de la Roca Helada",
				condicion: ['location'],
			},
		},
	},
	{
		preevolucion: {
			numeroEspecie: '133',
			metodo: "Felicidad máxima, subiendo de nivel con movimiento de tipo Hada",
			condicion: ['happiness', 'movement'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 36, grupo: ['Campo'], amistad: 70,
	generos: {macho: 87.5,hembra: 12.5},
	dexRegiones: {
		dexNacional: '700',
		dexKalosCosta: '085',
	},
	idiomas: {frances: namesFR[699],aleman: namesDE[699],japones: [namesJP[699][1], namesJP[699][0]],coreano: [namesKO[699][1], namesKO[699][0]]}
},
{
	id: '701',
	nombre: names[700], tipo: ['fight', 'flying'], clasificacion: 'Pokémon Lucha Libre',
	altura: [getAltura(700).pies, getAltura(700).metros], peso: [getPeso(700).libras, getPeso(700).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('limber'),habilidadDescripcion: habDescripcion('limber')},
		{habilidadNombre: habNombre('liviano'),habilidadDescripcion: habDescripcion('liviano')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('mold breaker'),habilidadDescripcion: habDescripcion('mold breaker')},
		],
	},
	ratioCaptura: 100,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Humanoide'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '701',
		dexKalosCosta: '089',
	},
	idiomas: {frances: namesFR[700],aleman: namesDE[700],japones: [namesJP[700][1], namesJP[700][0]],coreano: [namesKO[700][1], namesKO[700][0]]}
},
{
	id: '702',
	nombre: names[701], tipo: ['electric', 'fairy'], clasificacion: 'Pokémon Antenas',
	altura: [getAltura(701).pies, getAltura(701).metros], peso: [getPeso(701).libras, getPeso(701).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		{habilidadNombre: habNombre('carrillo'),habilidadDescripcion: habDescripcion('carrillo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('plus'),habilidadDescripcion: habDescripcion('plus')},
		],
	},
	ratioCaptura: 100,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo', 'Hada'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '702',
		dexKalosCosta: '110',
	},
	idiomas: {frances: namesFR[701],aleman: namesDE[701],japones: [namesJP[701][1], namesJP[701][0]],coreano: [namesKO[701][1], namesKO[701][0]]}
},
{
	id: '703',
	nombre: names[702], tipo: ['rock', 'fairy'], clasificacion: 'Pokémon Joya',
	altura: [getAltura(702).pies, getAltura(702).metros], peso: [getPeso(702).libras, getPeso(702).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
	},
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 1,
	},
	pasos: 255 * 26, grupo: ['Hada', 'Mineral'], amistad: 70,
	dexRegiones: {
		dexNacional: '703',
		dexKalosCosta: '124',
	},
	idiomas: {frances: namesFR[702],aleman: namesDE[702],japones: [namesJP[702][1], namesJP[702][0]],coreano: [namesKO[702][1], namesKO[702][0]]}
},
{
	id: '704',
	nombre: names[703], tipo: ['dragon'], clasificacion: 'Pokémon Molusco',
	altura: [getAltura(703).pies, getAltura(703).metros], peso: [getPeso(703).libras, getPeso(703).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gooey'),habilidadDescripcion: habDescripcion('gooey')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '705',
			metodo: "Subiendo desde nivel 40",
			evolucion: {
				numeroEspecie: '706',
				metodo: 'Subiendo desde nivel 50 en la Lluvia',
				condicion: ['rain'],
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 1,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '704',
		dexKalosMontana: '019',
	},
	idiomas: {frances: namesFR[703],aleman: namesDE[703],japones: [namesJP[703][1], namesJP[703][0]],coreano: [namesKO[703][1], namesKO[703][0]]}
},
{
	id: '705',
	nombre: names[704], tipo: ['dragon'], clasificacion: 'Pokémon Molusco',
	altura: [getAltura(704).pies, getAltura(704).metros], peso: [getPeso(704).libras, getPeso(704).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gooey'),habilidadDescripcion: habDescripcion('gooey')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '704',
			metodo: "Subiendo desde nivel 40",
		},
		evolucion: {
			numeroEspecie: '706',
			metodo: 'Subiendo desde nivel 50 en la Lluvia',
			condicion: ['rain'],
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 2,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '705',
		dexKalosMontana: '020',
	},
	idiomas: {frances: namesFR[704],aleman: namesDE[704],japones: [namesJP[704][1], namesJP[704][0]],coreano: [namesKO[704][1], namesKO[704][0]]}
},
{
	id: '706',
	nombre: names[705], tipo: ['dragon'], clasificacion: 'Pokémon Dragón',
	altura: [getAltura(705).pies, getAltura(705).metros], peso: [getPeso(705).libras, getPeso(705).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('hydration'),habilidadDescripcion: habDescripcion('hydration')},
		{habilidadNombre: habNombre('sap sipper'),habilidadDescripcion: habDescripcion('sap sipper')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('gooey'),habilidadDescripcion: habDescripcion('gooey')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '705',
			metodo: 'Subiendo desde nivel 50 en la Lluvia',
			condicion: ['rain'],
			preevolucion: {
				numeroEspecie: '704',
				metodo: "Subiendo desde nivel 40",
			},
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		defensaEspecial: 3,
	},
	pasos: 255 * 41, grupo: ['Dragón'], amistad: 35,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '706',
		dexKalosMontana: '021',
	},
	idiomas: {frances: namesFR[705],aleman: namesDE[705],japones: [namesJP[705][1], namesJP[705][0]],coreano: [namesKO[705][1], namesKO[705][0]]}
},
{
	id: '707',
	nombre: names[706], tipo: ['steel', 'fairy'], clasificacion: 'Pokémon Llavero',
	altura: [getAltura(706).pies, getAltura(706).metros], peso: [getPeso(706).libras, getPeso(706).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: habDescripcion('Bromista')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('magician'),habilidadDescripcion: habDescripcion('magician')},
		],
	},
	ratioCaptura: 75,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Mineral'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '707',
		dexKalosMontana: '050',
	},
	idiomas: {frances: namesFR[706],aleman: namesDE[706],japones: [namesJP[706][1], namesJP[706][0]],coreano: [namesKO[706][1], namesKO[706][0]]}
},
{
	id: '708',
	nombre: names[707], tipo: ['ghost', 'grass'], clasificacion: 'Pokémon Tronco',
	altura: [getAltura(707).pies, getAltura(707).metros], peso: [getPeso(707).libras, getPeso(707).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cosecha'),habilidadDescripcion: habDescripcion('cosecha')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '709',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		ataque: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '708',
		dexKalosMontana: '061',
	},
	idiomas: {frances: namesFR[707],aleman: namesDE[707],japones: [namesJP[707][1], namesJP[707][0]],coreano: [namesKO[707][1], namesKO[707][0]]}
},
{
	id: '709',
	nombre: names[708], tipo: ['ghost', 'grass'], clasificacion: 'Pokémon Árbol Viejo',
	altura: [getAltura(708).pies, getAltura(708).metros], peso: [getPeso(708).libras, getPeso(708).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('natural cure'),habilidadDescripcion: habDescripcion('natural cure')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('cosecha'),habilidadDescripcion: habDescripcion('cosecha')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '708',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		ataque: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo', 'Planta'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '709',
		dexKalosMontana: '062',
	},
	idiomas: {frances: namesFR[708],aleman: namesDE[708],japones: [namesJP[708][1], namesJP[708][0]],coreano: [namesKO[708][1], namesKO[708][0]]}
},
{
	id: '710',
	nombre: names[709], tipo: ['ghost', 'grass'], clasificacion: 'Pokémon Calabaza',
	altura: [getAltura(709).pies, getAltura(709).metros], peso: [getPeso(709).libras, getPeso(709).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '711',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 120,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '710',
		dexKalosMontana: '063',
	},
	idiomas: {frances: namesFR[709],aleman: namesDE[709],japones: [namesJP[709][1], namesJP[709][0]],coreano: [namesKO[709][1], namesKO[709][0]]}
},
{
	id: '711',
	nombre: names[710], tipo: ['ghost', 'grass'], clasificacion: 'Pokémon Calabaza',
	altura: [getAltura(710).pies, getAltura(710).metros], peso: [getPeso(710).libras, getPeso(710).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('pickup'),habilidadDescripcion: habDescripcion('pickup')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('insomnio'),habilidadDescripcion: habDescripcion('insomnio')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '710',
			metodo: "Intercambio",
			condicion: ['trade'],
		},
	},
	],
	ratioCaptura: 60,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Amorfo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '711',
		dexKalosMontana: '064',
	},
	idiomas: {frances: namesFR[710],aleman: namesDE[710],japones: [namesJP[710][1], namesJP[710][0]],coreano: [namesKO[710][1], namesKO[710][0]]}
},
{
	id: '712',
	nombre: names[711], tipo: ['ice'], clasificacion: 'Pokémon Témpano',
	altura: [getAltura(711).pies, getAltura(711).metros], peso: [getPeso(711).libras, getPeso(711).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '713',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		defensa: 1,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '712',
		dexKalosMontana: '079',
	},
	idiomas: {frances: namesFR[711],aleman: namesDE[711],japones: [namesJP[711][1], namesJP[711][0]],coreano: [namesKO[711][1], namesKO[711][0]]}
},
{
	id: '713',
	nombre: names[712], tipo: ['ice'], clasificacion: 'Pokémon Iceberg',
	altura: [getAltura(712).pies, getAltura(712).metros], peso: [getPeso(712).libras, getPeso(712).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('ice body'),habilidadDescripcion: habDescripcion('ice body')},
		{habilidadNombre: habNombre('own tempo'),habilidadDescripcion: habDescripcion('own tempo')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Sturdy'),habilidadDescripcion: habDescripcion('Sturdy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '712',
			metodo: "Subiendo desde nivel 37",
		},
	},
	],
	ratioCaptura: 55,
	valoresEsfuerzo: {
		defensa: 2,
	},
	pasos: 255 * 21, grupo: ['Monstruo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '713',
		dexKalosMontana: '080',
	},
	idiomas: {frances: namesFR[712],aleman: namesDE[712],japones: [namesJP[712][1], namesJP[712][0]],coreano: [namesKO[712][1], namesKO[712][0]]}
},
{
	id: '714',
	nombre: names[713], tipo: ['flying', 'dragon'], clasificacion: 'Pokémon Onda Sónica',
	altura: [getAltura(713).pies, getAltura(713).metros], peso: [getPeso(713).libras, getPeso(713).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		evolucion: {
			numeroEspecie: '715',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 190,
	valoresEsfuerzo: {
		velocidad: 1,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '714',
		dexKalosMontana: '113',
	},
	idiomas: {frances: namesFR[713],aleman: namesDE[713],japones: [namesJP[713][1], namesJP[713][0]],coreano: [namesKO[713][1], namesKO[713][0]]}
},
{
	id: '715',
	nombre: names[714], tipo: ['flying', 'dragon'], clasificacion: 'Pokémon Onda Sónica',
	altura: [getAltura(714).pies, getAltura(714).metros], peso: [getPeso(714).libras, getPeso(714).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('frisk'),habilidadDescripcion: habDescripcion('frisk')},
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('telepathy'),habilidadDescripcion: habDescripcion('telepathy')},
		],
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '714',
			metodo: "Subiendo desde nivel 48",
		},
	},
	],
	ratioCaptura: 45,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Volador'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '715',
		dexKalosMontana: '114',
	},
	idiomas: {frances: namesFR[714],aleman: namesDE[714],japones: [namesJP[714][1], namesJP[714][0]],coreano: [namesKO[714][1], namesKO[714][0]]}
},
{
	id: '716',
	nombre: names[715], tipo: ['fairy'], clasificacion: 'Pokémon Creación',
	altura: [getAltura(715).pies, getAltura(715).metros], peso: [getPeso(715).libras, getPeso(715).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('fairy aura'),habilidadDescripcion: habDescripcion('fairy aura')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '716',
		dexKalosMontana: '148',
	},
	idiomas: {frances: namesFR[715],aleman: namesDE[715],japones: [namesJP[715][1], namesJP[715][0]],coreano: [namesKO[715][1], namesKO[715][0]]}
},
{
	id: '717',
	nombre: names[716], tipo: ['dark', 'flying'], clasificacion: 'Pokémon Destrucción',
	altura: [getAltura(716).pies, getAltura(716).metros], peso: [getPeso(716).libras, getPeso(716).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('dark aura'),habilidadDescripcion: habDescripcion('dark aura')},
		],
	},
	ratioCaptura: 45,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '717',
		dexKalosMontana: '149',
	},
	idiomas: {frances: namesFR[716],aleman: namesDE[716],japones: [namesJP[716][1], namesJP[716][0]],coreano: [namesKO[716][1], namesKO[716][0]]}
},
{
	id: '718',
	nombre: names[717], tipo: ['dragon', 'ground'], clasificacion: 'Pokémon Equilibrio',
	altura: [getAltura(717).pies, getAltura(717).metros], peso: [getPeso(717).libras, getPeso(717).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('rompeaura'),habilidadDescripcion: habDescripcion('rompeaura')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ps: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 0,
	dexRegiones: {
		dexNacional: '718',
		dexKalosMontana: '150',
	},
	idiomas: {frances: namesFR[717],aleman: namesDE[717],japones: [namesJP[717][1], namesJP[717][0]],coreano: [namesKO[717][1], namesKO[717][0]]}
},
{
	id: '719',
	nombre: names[718], tipo: ['rock', 'fairy'], clasificacion: 'Pokémon Joya',
	altura: [getAltura(718).pies, getAltura(718).metros], peso: [getPeso(718).libras, getPeso(718).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('clear body'),habilidadDescripcion: habDescripcion('clear body')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		defensa: 1,
		defensaEspecial: 2,
	},
	pasos: 255 * 26, grupo: ['Desconocido'], amistad: 70,
	dexRegiones: {
		dexNacional: '719',
		dexKalosCentral: '151',
	},
	idiomas: {frances: namesFR[718],aleman: namesDE[718],japones: [namesJP[718][1], namesJP[718][0]],coreano: [namesKO[718][1], namesKO[718][0]]}
},
{
	id: '720',
	nombre: names[719], tipo: ['psychic', 'ghost'], clasificacion: 'Pokémon Travesura',
	altura: [getAltura(719).pies, getAltura(719).metros], peso: [getPeso(719).libras, getPeso(719).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('magician'),habilidadDescripcion: habDescripcion('magician')},
		],
	},
	ratioCaptura: 3,
	valoresEsfuerzo: {
		ataqueEspecial: 3,
	},
	pasos: 255 * 121, grupo: ['Desconocido'], amistad: 100,
	dexRegiones: {
		dexNacional: '720',
		dexKalosCentral: '152',
	},
	idiomas: {frances: namesFR[719],aleman: namesDE[719],japones: [namesJP[719][1], namesJP[719][0]],coreano: [namesKO[719][1], namesKO[719][0]]}
},












































































{
	id: '678',
	nombre: names[677], tipo: ['psychic'], clasificacion: 'Pokémon Autocontrol',
	altura: [getAltura(677).pies, getAltura(677).metros], peso: [getPeso(677).libras, getPeso(677).kilogramos],
	habilidades: {
		habilidadesNormales: [
		{habilidadNombre: habNombre('Vista Lince'),habilidadDescripcion: habDescripcion('Vista Lince')},
		{habilidadNombre: habNombre('Allanamiento'),habilidadDescripcion: habDescripcion('Allanamiento')},
		],
		habilidadesOcultas: [
		{habilidadNombre: habNombre('Bromista'),habilidadDescripcion: "(Sólo en machos) "+habDescripcion('Bromista')},
		{habilidadNombre: habNombre('Tenacidad'),habilidadDescripcion: "(Sólo en hembras) "+habDescripcion('Tenacidad')},
		]
	},
	cadenaEvolutiva: [
	{
		preevolucion: {
			numeroEspecie: '677',
			metodo: "Subiendo desde nivel 25",
		},
	},
	],
	ratioCaptura: 75,
	valoresEsfuerzo: {
		velocidad: 2,
	},
	pasos: 255 * 21, grupo: ['Campo'], amistad: 70,
	generos: {macho: 50,hembra: 50},
	dexRegiones: {
		dexNacional: '678',
		dexKalosCentral: '115',
	},
	idiomas: {frances: namesFR[677],aleman: namesDE[677],japones: [namesJP[677][1], namesJP[677][0]],coreano: [namesKO[677][1], namesKO[677][0]]}
},


];