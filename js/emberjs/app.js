App = Ember.Application.create();
/*
App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
*/




App.Router.map(function(){
	this.resource('index', {path: '/'});
	this.resource('about');
	this.resource('posts', function(){
		this.resource('post', { path: ':post_id' });
	});

	//this.resource('posts');
	//this.resource('post', { path: ':post_id' });
});

App.PostsRoute = Ember.Route.extend({
	//Bajo este bloque entrego la lista de todos los  datos almacenados en json para la vista
	model: function(){
		//return posts;



		//Bajo el bloque model lo que se hace es retornar un objeto en JSON el cual son los articulos llamados mediante APIs en jQuery
		return $.getJSON('http://tomdale.net/api/get_recent_posts?callback=?').then(function(data){
			return data.posts.map(function(post){
				post.body = post.content;
				return post;
			});
		});
	}
});

App.PostRoute = Ember.Route.extend({
	//Bajo este bloque entrego la lista de un dato en json que este seleccionado por parametro(s) para la vista
	model: function(params){
		//return posts.findBy('id', params.post_id);

		//Bajo el bloque model lo que se hace es retornar un objeto en JSON el cual es un articulo llamado mediante APIs en jQuery bajo parametro
		return $.getJSON('http://tomdale.net/api/get_post?id='+params.post_id+'&callback=?').then(function(data){
			data.post.body = data.post.content;
			return data.post;
		});
	}
});

App.PostController = Ember.ObjectController.extend({
	//En este bloque se puede modificar los datos de json de forma asincrona
	isEditing: false,

	actions: {
		edit: function(){
			this.set('isEditing', true);
		},

		doneEditing: function(){
			this.set('isEditing', false);
		}
	}
});




Ember.Handlebars.helper('format-date', function(date){
	//Este bloque hace que cualquier formato de fecha tenga como mensaje la cantidad de tiempo que ha pasado desde la fecha definida
	return moment(date).fromNow();
});


var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input){
	//Bajo este bloque se retorna una cadena de texto que es convertida en formato html, estandarizando cualquier linea de texto e incluso convertirlo en un titulo
	return new Handlebars.SafeString(showdown.makeHtml(input));
});




/*
var posts = [
{
	id: '1',
	title: "Rails in Omakase",
	author: {name: "d2h"},
	date: new Date('12-27-2012'),
	excerpt: "There are lots of à la carte software environments in this world. Places where in or...",
	body: "I want this for my ORM, I want that for my template language, and let's finish it off ..."
},
{
	id: '2',
	title: "The Parley Letter",
	author: {name: "d2h"},
	date: new Date('12-24-2012'),
	excerpt: "My [appareance on the Ruby Rogues podcast](http://rubyrogues.com/856-rr-david-heinem...)...",
	body: "A long list of topics were raised and I took a time to ramble at large about all of the ..."
}
];
*/