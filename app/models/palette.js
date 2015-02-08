var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    

PaletteSchema = new Schema({
    name: { type: String },
    hexList: { type: Array }
});

Palette = mongoose.model('palettes', PaletteSchema);

module.exports.Palette = Palette;
module.exports.Schema = PaletteSchema;