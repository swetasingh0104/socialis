// const  ChatMessage = require('../../models/chatBox');
// const  User= require('../../models/user');

// let saveMessage = async (data) => {
//     const user = await User.findOne({email: data.user_email})

//     if(!user){
//         return ;
//     }
//    await ChatMessage.create({ content: data.message, user});
// }

// module.exports= {saveMessage};