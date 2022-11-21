const mongoose = require('mongoose');


const chatBoxSchema = new mongoose.Schema({
    content: [{
        type: String,
        required: true
        
    }],
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
   
},{
    timestamps: true
});

const chatBox = mongoose.model('chatBox', chatBoxSchema);
module.exports = chatBox; 