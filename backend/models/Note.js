const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user: {                        //like foreign key
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        required: true
    },
    priority: {  // New field for priority
        type: String,
        enum: ['High', 'Moderate', 'Low'],  // Allow only these values
        default: 'Low'  // Default priority
    }
})

module.exports = mongoose.model('note', NotesSchema);  //in bracket first write modelname the schema
