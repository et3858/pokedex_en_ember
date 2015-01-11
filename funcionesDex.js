App = Ember.Application.create();

App.Router.map(function(){
	//this.resource
	this.resource('index', {path: '/'});
	this.resource('pokemon', { path: 'pokemon/:post_id' });
});







App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});






App.PokemonRoute = Ember.Route.extend({
	model: function(params){
		return names2.findBy('id', params.post_id);
	},
	renderTemplate: function(){
		this.render('pokemon', {path: '007'});
	}
});

App.PokemonController = Ember.ObjectController.extend({
	//esPlanta: function(){
	//	return this.get('valor') === 'grass';
	//}.property('valor'),
	//.property('tipo')
	//esFuego: Ember.computed.equal('valor', 'fire')
});

Ember.Handlebars.registerHelper('ifTipo', function(valor, fire, options){
	if (arguments.length < 3) {
		throw new Error("Handlebars helper necesita dos parametros");
	}

	var valor2 = Ember.Handlebars.get(this, valor, options);
	//console.log(valor2);

	var tipos = ['grass','fire','water','bug','poison','flying','normal','electric','ground','rock','steel','fight','psychic','ghost','dark','ice','dragon','fairy'];
	var tiposTraduccion = ['Planta','Fuego','Agua','Bicho','Veneno','Volador','Normal','Eléctrico','Tierra','Roca','Acero','Lucha','Psíquico','Fantasma','Siniestro','Hielo','Dragón','Hada'];

	//if (valor2 !== 'fire') {
	//	return options.inverse(this);
	//}else{
	//	var res = " <span class=\"spnType spnTypeGrass\">Planta</span> <span class=\"spnType spnTypeGrass\">Planta</span> ";
	//	return res;
	//	return options.fn(this);
	//}
	//AllOK

	var res;

	for (var i = 0; i < tipos.length; i++) {
		if (valor2 === tipos[i]) {
			res = " <span class=\"spnType spnType"+valor2.charAt(0).toUpperCase()+valor2.slice(1)+"\">"+tiposTraduccion[i]+"</span> ";
		}
	}
	return res;


	//if (valor2 === 'grass')
	//	var res = " <span class=\"spnType spnTypeGrass\">Planta</span> <span class=\"spnType spnTypeGrass\">Planta</span> ";
	//	return res;
	//else if (valor2 === 'fire')
	//	var res = " <span class=\"spnType spnTypeGrass\">Planta</span> <span class=\"spnType spnTypeFire\">Fuego</span> ";
	//	return res;
	//else
	//	return options.inverse(this);
});




Ember.Handlebars.registerHelper('imagenPrincipal', function(valor, options){
	var id = Ember.Handlebars.get(this, valor, options);
	//return "img-pokemon/"+id+".png";
	return "<img src=\"img-pokemon/"+id+".png\" width=\"300\" height=\"300\" border=\"0\">";
	//return options.fn(this);
});

Ember.Handlebars.registerHelper('imagenPorNombre', function(valor, options){
	//http://img.pokemondb.net/artwork/bulbasaur.jpg
	var nombreImg = Ember.Handlebars.get(this, valor, options);
	//return "img-pokemon/"+id+".png";
	if (nombreImg == 'Meowstic') {
		var primero = "<figure class=\"show\"><img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-male.jpg\" border=\"0\"></figure>";
		var segundo = "<figure><img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-female.jpg\" border=\"0\"></figure>";
		//var flechas = "<span class=\"prev\">&laquo;</span><span class=\"next\">&raquo;</span>";
		return primero+segundo;
		//return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-male.jpg\" border=\"0\">";
	}else if (nombreImg == 'Nidoran♀') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase().substr(0,nombreImg.length-1)+"-f.jpg\" border=\"0\">";
	}else if (nombreImg == 'Nidoran♂') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase().substr(0,nombreImg.length-1)+"-m.jpg\" border=\"0\">";
	}else if (nombreImg == 'Rotom') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-normal.jpg\" border=\"0\">";
	}else if (nombreImg == 'Kyurem') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-normal.jpg\" border=\"0\">";
	}else if (nombreImg == 'Giratina') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-altered.jpg\" border=\"0\">";
	}else if (nombreImg == 'Tornadus' || nombreImg == 'Thundurus' || nombreImg == 'Landorus') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-incarnate.jpg\" border=\"0\">";
	}else if (nombreImg == 'Keldeo') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-ordinary.jpg\" border=\"0\">";
	}else if (nombreImg == 'Meloetta') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-aria.jpg\" border=\"0\">";
	}else if (nombreImg == 'Shaymin') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-land.jpg\" border=\"0\">";
	}else if (nombreImg == 'Darmanitan') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-standard.jpg\" border=\"0\">";
	}else if (nombreImg == 'Aegislash') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-blade.jpg\" border=\"0\">";
	}else if (nombreImg == 'Deoxys') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-normal.jpg\" border=\"0\">";
	}else if (nombreImg == 'Wormadam') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-plant.jpg\" border=\"0\">";
	}else if (nombreImg == 'Pumpkaboo') {
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+"-average.jpg\" border=\"0\">";
	}else if (nombreImg == 'Bergmite') {
		return "<img src=\"http://img.pokemondb.net/artwork/dream/"+nombreImg.toLowerCase()+".png\" border=\"0\">";
	}else{
		return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+".jpg\" border=\"0\">";
	}
	//return "<img src=\"http://img.pokemondb.net/artwork/"+nombreImg.toLowerCase()+".jpg\" width=\"300\" height=\"300\" border=\"0\">";
	//return options.fn(this);
});


Ember.Handlebars.registerHelper('generosTortaPoncentaje', function(vMacho, vHembra, options){
	var macho = Ember.Handlebars.get(this, vMacho, options);
	var hembra = Ember.Handlebars.get(this, vHembra, options);

	var pBackground, pSlice, pCake;

	if (parseFloat(macho) > parseFloat(hembra)) {
		var grados = (360*parseFloat(hembra))/100;
		pBackground = "<div class=\"pieBackground-prototype\" style=\"background: blue; position: absolute; width: 100px; height: 100px; border-radius: 50px;\"></div>";
		pSlice = "<div id=\"pieSlice1-prototype\" class=\"hold-prototype\" style=\"position: absolute;width: 100px;height: 100px;border-radius: 50px;clip: rect(0, 100px, 100px, 50px);transform: rotate("+(Math.round(grados)*-1)+"deg);\">";
		pCake = "<div class=\"pie-prototype\" style=\"position: absolute;width: 100px;height: 100px;border-radius: 50px;clip: rect(0px, 50px, 100px, 0px);background: pink;transform: rotate("+Math.round(grados)+"deg);\"></div></div>";
		return pBackground+pSlice+pCake;
	} else {
		var grados = (360*parseFloat(macho))/100;
		pBackground = "<div class=\"pieBackground-prototype\" style=\"background: pink; position: absolute; width: 100px; height: 100px; border-radius: 50px;\"></div>";
		pSlice = "<div id=\"pieSlice1-prototype\" class=\"hold-prototype\" style=\"position: absolute;width: 100px;height: 100px;border-radius: 50px;clip: rect(0, 100px, 100px, 50px);transform: rotate(0deg);\">";
		pCake = "<div class=\"pie-prototype\" style=\"position: absolute;width: 100px;height: 100px;border-radius: 50px;clip: rect(0px, 50px, 100px, 0px);background: blue;transform: rotate("+Math.round(grados)+"deg);\"></div></div>";
		return pBackground+pSlice+pCake;
	}
});

Ember.Handlebars.registerHelper('mostrarNumRealesGenero', function(valor, options){
	var pGenero = Ember.Handlebars.get(this, valor, options);
	//return pGenero.replace('.',',')+" %";
	return pGenero+" %";
});


Ember.Handlebars.registerHelper('ifJapones', function(valor, options){
	var nombres = Ember.Handlebars.get(this, valor, options);
	return nombres[0]+"<br>"+nombres[1];
});

Ember.Handlebars.registerHelper('ifCoreano', function(valor, options){
	var nombres = Ember.Handlebars.get(this, valor, options);
	return nombres[0]+"<br>"+nombres[1];
});





























Ember.Handlebars.registerHelper('comprobarPosicionEvolutiva', function(pre, nex, options){
	//
	//var preev = Ember.Handlebars.get(this, pre, options);
	//var nex = Ember.Handlebars.get(this, nex, options);



	if (Ember.Handlebars.get(this, pre, options) !== undefined && Ember.Handlebars.get(this, nex, options) !== undefined) {
		//console.log("Evolucion media");
		return "MID";
	}else{
		if (Ember.Handlebars.get(this, pre, options) !== undefined) {
			//console.log("Evolucion maxima");
			return "MAX";
		}else if (Ember.Handlebars.get(this, nex, options) !== undefined) {
			//console.log("Evolucion minima");
			return "MIN";
		}
	}
});


Ember.Handlebars.registerHelper('comprobarEvoInicio', function(pre, nex, options){
	//
	if (Ember.Handlebars.get(this, nex, options) !== undefined && Ember.Handlebars.get(this, pre, options) === undefined) {
		return options.fn(this);
		//return "1";
	}
});
Ember.Handlebars.registerHelper('comprobarEvoMedio', function(pre, nex, options){
	//
	if (Ember.Handlebars.get(this, pre, options) !== undefined && Ember.Handlebars.get(this, nex, options) !== undefined) {
		return options.fn(this);
		//return "2";
	}
});
Ember.Handlebars.registerHelper('comprobarEvoFinal', function(pre, nex, options){
	//
	if (Ember.Handlebars.get(this, pre, options) !== undefined && Ember.Handlebars.get(this, nex, options) === undefined) {
		return options.fn(this);
		//return "3";
	}
});




Ember.Handlebars.registerHelper('mostrarSpriteEvolucion', function(valor, options){
	//var sprite = "<img src=\"http://www.serebii.net/pokedex-xy/icon/"+Ember.Handlebars.get(this, valor, options)+".png\" width=\"50\" height=\"50\">";
	var sprite = "<img src=\"http://www.serebii.net/pokedex-xy/icon/"+Ember.Handlebars.get(this, valor, options)+".png\">";
	return sprite;
});

Ember.Handlebars.registerHelper('mostrarObjetoEvolucion', function(valor, options){
	//console.log(Ember.Handlebars.get(this, valor, options));
	if (Ember.Handlebars.get(this, valor, options) !== undefined) {
		return "<img src=\""+Ember.Handlebars.get(this, valor, options) +"\" width=\"24\" height=\"24\">";
	}
});

Ember.Handlebars.registerHelper('mostrarPokemonEvolucion', function(valor, options){
	//console.log(Ember.Handlebars.get(this, valor, options));
	if (Ember.Handlebars.get(this, valor, options) !== undefined) {
		var sprite = "<span class=\"pokemon\"><img src=\"http://www.serebii.net/pokedex-xy/icon/"+Ember.Handlebars.get(this, valor, options)+".png\"><\/span>";
		return sprite;
	}
});


Ember.Handlebars.registerHelper('mostrarCondicionEvolucion', function(valor, options){
	//console.log(Ember.Handlebars.get(this, valor, options));
	if (Ember.Handlebars.get(this, valor, options) !== undefined) {
		var condicion = Ember.Handlebars.get(this, valor, options);
		if (condicion == 'happiness') {
			return "<span class=\"flaticon-heart15 happiness\"></span>";
		}else if (condicion == 'daylight') {
			return "<span class=\"flaticon-dark26 daylight\"></span>";
		}else if (condicion == 'night') {
			return "<span class=\"flaticon-camera70 night\"></span>";
		}else if (condicion == 'location') {
			return "<span class=\"flaticon-facebook30 location\"></span>";
		}else if (condicion == 'movement') {
			return "<span class=\"flaticon-compactdisc1 movement\"></span>";
		}else if (condicion == 'trade') {
			return "<span class=\"flaticon-two347 trade\"></span>";
		}else if (condicion == 'male') {
			return "<span class=\"flaticon-male201 male\"></span>";
		}else if (condicion == 'female') {
			return "<span class=\"flaticon-female204 female\"></span>";
		}else if (condicion == 'beautiful') {
			return "<span class=\"flaticon-3d64 beautiful\"></span>";
		}else if (condicion == 'ally') {
			return "<span class=\"flaticon-black22 ally\"></span>";
		}else if (condicion == 'console-upside-down') {
			return "<span class=\"flaticon-nintendo5 console-upside-down\"></span>";
		}else if (condicion == 'rain') {
			return "<span class=\"flaticon-raindrops2 rain\"></span>";
		}
	}
});












Ember.Handlebars.registerHelper('mostrarEvolucion', function(valor, options){
	//
	var evo = Ember.Handlebars.get(this, valor, options);
	return evo.evolucion.numeroEspecie;
	//return names2[0].id;
	//return names2[parseInt(evo.evolucion.numeroEspecie)-1].nombre;
});







var numbers = ['001','002','003','004','005','006','007','008','009',
'010','011','012','013','014','015','016','017','018','019',
'020','021','022','023','024','025','026','027','028','029',
'030','031','032','033','034','035','036','037','038','039',
'040','041','042','043','044','045','046','047','048','049',
'050','051','052','053','054','055','056','057','058','059',
'060','061','062','063','064','065','066','067','068','069',
'070','071','072','073','074','075','076','077','078','079',
'080','081','082','083','084','085','086','087','088','089',
'090','091','092','093','094','095','096','097','098','099',
'100','101','102','103','104','105','106','107','108','109',
'110','111','112','113','114','115','116','117','118','119',
'120','121','122','123','124','125','126','127','128','129',
'130','131','132','133','134','135','136','137','138','139',
'140','141','142','143','144','145','146','147','148','149',
'150','151','152','153','154','155','156','157','158','159',
'160','161','162','163','164','165','166','167','168','169',
'170','171','172','173','174','175','176','177','178','179',
'180','181','182','183','184','185','186','187','188','189',
'190','191','192','193','194','195','196','197','198','199',
'200','201','202','203','204','205','206','207','208','209',
'210','211','212','213','214','215','216','217','218','219',
'220','221','222','223','224','225','226','227','228','229',
'230','231','232','233','234','235','236','237','238','239',
'240','241','242','243','244','245','246','247','248','249',
'250','251','252','253','254','255','256','257','258','259',
'260','261','262','263','264','265','266','267','268','269',
'270','271','272','273','274','275','276','277','278','279',
'280','281','282','283','284','285','286','287','288','289',
'290','291','292','293','294','295','296','297','298','299',
'300','301','302','303','304','305','306','307','308','309',
'310','311','312','313','314','315','316','317','318','319',
'320','321','322','323','324','325','326','327','328','329',
'330','331','332','333','334','335','336','337','338','339',
'340','341','342','343','344','345','346','347','348','349',
'350','351','352','353','354','355','356','357','358','359',
'360','361','362','363','364','365','366','367','368','369',
'370','371','372','373','374','375','376','377','378','379',
'380','381','382','383','384','385','386','387','388','389',
'390','391','392','393','394','395','396','397','398','399',
'400','401','402','403','404','405','406','407','408','409',
'410','411','412','413','414','415','416','417','418','419',
'420','421','422','423','424','425','426','427','428','429',
'430','431','432','433','434','435','436','437','438','439',
'440','441','442','443','444','445','446','447','448','449',
'450','451','452','453','454','455','456','457','458','459',
'460','461','462','463','464','465','466','467','468','469',
'470','471','472','473','474','475','476','477','478','479',
'480','481','482','483','484','485','486','487','488','489',
'490','491','492','493','494','495','496','497','498','499',
'500','501','502','503','504','505','506','507','508','509',
'510','511','512','513','514','515','516','517','518','519',
'520','521','522','523','524','525','526','527','528','529',
'530','531','532','533','534','535','536','537','538','539',
'540','541','542','543','544','545','546','547','548','549',
'550','551','552','553','554','555','556','557','558','559',
'560','561','562','563','564','565','566','567','568','569',
'570','571','572','573','574','575','576','577','578','579',
'580','581','582','583','584','585','586','587','588','589',
'590','591','592','593','594','595','596','597','598','599',
'600','601','602','603','604','605','606','607','608','609',
'610','611','612','613','614','615','616','617','618','619',
'620','621','622','623','624','625','626','627','628','629',
'630','631','632','633','634','635','636','637','638','639',
'640','641','642','643','644','645','646','647','648','649',
'650','651','652','653','654','655','656','657','658','659',
'660','661','662','663','664','665','666','667','668','669',
'670','671','672','673','674','675','676','677','678','679',
'680','681','682','683','684','685','686','687','688','689',
'690','691','692','693','694','695','696','697','698','699',
'700','701','702','703','704','705','706','707','708','709',
'710','711','712','713','714','715','716','717','718','719'
];







$(document).on('ready', function(){
	var charMap = {
		"à": "a",
		"á": "a",
		"â": "a",
		"é": "e",
		"è": "e",
		"ê": "e",
		"ë": "e",
		"É": "e",
		"ï": "i",
		"î": "i",
		"ô": "o",
		"ö": "o",
		"û": "u",
		"ù": "u",
		"ü": "u",
		"ñ": "n"
	};

	//var names = ["Sánchez", "Árbol", "Müller", "Ératio", "Niño"];
	
	
	
	var normalize = function (input) {
		$.each(charMap, function (unnormalizedChar, normalizedChar) {
			var regex = new RegExp(unnormalizedChar, 'gi');
			input = input.replace(regex, normalizedChar);
		});
		return input;
	};
	
	var queryTokenizer = function (q) {
		var normalized = normalize(q);
		return Bloodhound.tokenizers.whitespace(normalized);
	};


	
	var nombres = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		queryTokenizer: queryTokenizer,
		limit: 20,
		/*
		prefetch: {
			url: 'listaPaises.json',
			filter: function(names){
				return $.map(names, function(name){
					var normalized = normalize(name);
					return {
						value: normalized,
						displayValue: name
					};
				});
			}
		}
		*/

		//local: $.map(numbers, function (name) {
		local: $.map(names, function (name) {
			// Normalize the name - use this for searching
			var normalized = normalize(name);
			return {
				value: normalized,
				// Include the original name - use this for display purposes
				displayValue: name
			};
		})
	});
	
	nombres.initialize();

	$('#txtSearchDex').typeahead({
		minLength: 1,
		hint: false,
		highlight: true
	}, {
		name: 'nombres',
		displayKey: 'displayValue',
		source: nombres.ttAdapter()
	})
	.on('typeahead:selected', function(e, dato){
		console.log("Evento accionado por seleccionar un item en la lista");
		console.log(dato.displayValue);
		//console.log(document.URL);
		//console.log(window.location.href);
		//window.location.href = "http:www.google.cl";
		//App.LegacyBridge.transitionTo('pokemon/1');
		//App.Router.reopen({
		//	location: 'pokemon'
		//});

		//var urlVar = document.URL.substr(0,document.URL.length-3);
		var urlVar;



		if (isNaN(dato.displayValue)) {
			for (var i = 0; i < names.length; i++) {
				if (buscarPorNombre(dato.displayValue, names[i], i)){
					var indiceNumero = numbers[i];
					//console.log(document.URL);
					if (document.URL.indexOf("#") === -1) {
						urlVar = document.URL+"#/pokemon/";
						window.location.href = urlVar+indiceNumero;
					}else{
						urlVar = document.URL.substr(0,document.URL.length-3);
						window.location.href = urlVar+indiceNumero;
					}
					break;
				}
			}
		}else {
			console.log("es numero");
			urlVar = document.URL.substr(0,document.URL.length-3);
			window.location.href = urlVar+dato.displayValue;
		}



		//console.log(urlVar);
		//window.location.href = urlVar+dato.value;
	});


	inicio();

});




function buscarPorNombre(nombre, nomArray){
	if (nombre == nomArray) {
		return true;
	}
	return false
}





















function inicio(){
	//
	var habilidades = document.getElementById("abilities-menu");
	habilidades.addEventListener("click", mostrarHabilidades);

	var puntajes = document.getElementById("points-menu");
	puntajes.addEventListener("click", mostrarPuntajes);

	var crianza = document.getElementById("breeding-menu");
	crianza.addEventListener("click", mostrarCrianza);

	var dexRegionales = document.getElementById("regions-dex-menu");
	dexRegionales.addEventListener("click", mostrarDexRegionales);

	var idiomas = document.getElementById("languages-menu");
	idiomas.addEventListener("click", mostrarIdiomas);

}







function mostrarHabilidades(){
	var visible = document.getElementById("abilities-cont");
	if (visible.style.display == "" || visible.style.display == undefined || visible.style.display == "none") {
		visible.style.display = "block";
	}else if (visible.style.display == "block") {
		visible.style.display = "none";
	}
	//console.log(document.getElementById("abilities-cont").style.display);
}


function mostrarPuntajes(){
	var visible = document.getElementById("points-cont");
	if (visible.style.display == "" || visible.style.display == undefined || visible.style.display == "none") {
		visible.style.display = "block";
	}else if (visible.style.display == "block") {
		visible.style.display = "none";
	}
}


function mostrarCrianza(){
	var visible = document.getElementById("breeding-cont");
	if (visible.style.display == "" || visible.style.display == undefined || visible.style.display == "none") {
		visible.style.display = "block";
	}else if (visible.style.display == "block") {
		visible.style.display = "none";
	}
}


function mostrarDexRegionales(){
	var visible = document.getElementById("regions-dex-cont");
	if (visible.style.display == "" || visible.style.display == undefined || visible.style.display == "none") {
		visible.style.display = "block";
	}else if (visible.style.display == "block") {
		visible.style.display = "none";
	}
}


function mostrarIdiomas(){
	var visible = document.getElementById("languages-cont");
	if (visible.style.display == "" || visible.style.display == undefined || visible.style.display == "none") {
		visible.style.display = "block";
	}else if (visible.style.display == "block") {
		visible.style.display = "none";
	}
}