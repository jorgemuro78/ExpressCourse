const mongoose = require('mongoose');
const { Shema } = mongoose;

const NoteShema = new Shema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    date: {type: Date, default: Date.now}
});

module.export = mongoose.model('Note', NoteShema)