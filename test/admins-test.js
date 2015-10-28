var Admin = require('../models/admins'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudtest');

var a = new Admin({email:"admin@admin", password: "1234"});

a.save(function(err, doc){
	console.log(err,doc);

	console.log("PasswordOK", a.authenticate("1234"));
    console.log("PasswordFAIL", a.authenticate("incorrect"));
});