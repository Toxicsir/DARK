const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/P47w0P3.jpeg", { responseType: 'arraybuffer' })

 await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ππππ πππ πππππππ ππ ππππππ*
 
____________________________________________________________________________
|*πππππππ ππππππ : wa.me/916238560742?text=Hi%20ANSHID%20.%20*
|_____________________________________________________________________________
|*ππππππ πππ πππππ* : https://chat.whatsapp.com/CTqoTm0dnX8FsNmaFRYmJ4
|_____________________________________________________________________________
|*ππππππ ππππ (Setup)* :    https://github.com/ANUSER1/DARK
|______________________________________________________________________________
|*πππππ ππππππππ* :   https://github.com/ANUSER1/DARK/tree/master/uploads
|_____________________________________________________________________________
|*πππππππ ππππππππ* : https://github.com/ANUSER1/DARK/tree/master/sticker
|___________________________________________________________________________
|*ππ πππππππππ  * :  https://www.instagram.com/_0anshid0_/
|_______________________________|
|*ππ ππππππ*     : 916238560742|
|_______________________________|
|β·οΈβοΈβοΈ βοΈβΆοΈβοΈβΊοΈ : ππππ            |
|_______________________________|
|*For More Updates cantact me β*
`}) 

}));
