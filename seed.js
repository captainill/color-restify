var mongo =  require ('mongodb');
var objectId = mongo.ObjectID;
var mongoose = require('mongoose');
var config = require('./app/config.js')
var Palette = require('./app/models/palette.js').Palette;

var seedPalettes = [
	{
		name:	"Palette 1",
		hexList: ["#1BE0FA", "#E780FF", "#FCD253", "#8082FF", "#DEE7DB", "#FFFFFF", "#2C2C2C", "#000000"],
		_id: objectId("503cf4730e9f580200000004")
	},
	{
		name:	"Palette 2",
		hexList: ["#1BE0FA", "#E780FF", "#FCD253", "#8082FF", "#DEE7DB", "#FFFFFF", "#2C2C2C", "#000000"],
		_id: objectId("503cf4730e9f580200000005")
	}	
];

mongoose.connect(process.env.MONGOLAB_URI || config.db)

mongoose.connection.on("open", function(error){
	if (error) throw error;
	else {

		Palette.create(seedPalettes, function(err, result){
			mongoose.connection.db.close();
		})		

	}

});