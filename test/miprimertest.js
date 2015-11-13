var Person = require('../models/persons');
var mongoose = require('mongoose');
var assert = require('assert')

mongoose.connect('mongodb://localhost/crudtest');

describe('MI ABM', function(){

	it('Crear doc personas en la BD', function (done) {
		var p = new Person({ name:"Cristian", age:27 });
			p.save(function(err,doc){
			assert.ok(doc.name === 'cristian99', 'Los nombres no coinciden');
			done(err);
		});
	});

	it('Paso perfecto', function (done){
		done();
	});

	/*it('Puede fallar', function (done){
		done(new Error('Algo raro paso'));
	});*/

});
