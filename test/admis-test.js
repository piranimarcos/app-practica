/*var Admin = require('../models/admins');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudtest');

var a = new Admin({ email:"admin@admin.com", password: "123456" });
a.save(function(err, doc){
    console.log(err, doc);    
});*/


var Admin = require('../models/admins'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudtest');

var a = new Admin({email:"admin@admin", password: "1234"});

a.save(function(err, doc){
	console.log(err,doc);
});