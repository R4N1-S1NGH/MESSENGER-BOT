const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["हा बोलो जी क्या कहना चाहते हो नंबर चाहिए तो ए लो👉 [+9195******49] ओर हमेशा खुश रहो ।😎" ,  "तेरे सर की कसम बहुत प्यार करूंगा तू मुझे अपना बाबू बना ले😜😒👈" , "तुझे अपना बेइज्जती करवाने का शोक है क्या....?🤨🤟" ,  "अभी बोला तो बोला दोबारा मत बोलना 😾👈" ,  "तेरी तो रुक अब तु भागना मत अपने वरुण धवल को बुलाती हूं 🤨" , "बोल दे कोई नहीं देख रहा 🙄👈" , "किसी ओर से धोका खाने से अच्छा है ना मेरे साथ चलो समोसे ओर गोलगप्पे खाएंगे 🙈" , "माना आपकी शकल देखने लायक नही है तुम्हारी 😥इसका मतलब ए तो नही की तुम profile  लॉक कर के बैठ जाओगी । 😐👈" ,  "बोट बोल के बेइज्जती कर रहे हो यार मे तो तुम्हारे दिल की धड़कन हु न बेबी 🥺🥺👈" , "हाय मे सदके जावा तेरी इस मासूम शकल पे बाबू शोना 💋 🙈🙈" , "मे सोच रहा था की क्या तुम्हारे पास एक्स्ट्रा दिल है 😒 मेरा अभि अभि चोरी हो गया है 🥺😢👈" ,  "यार बाबू बेबी आज सुबह सुबह","कहो ना प्यार है 🙈" , "तुम मुझे पागल लगते हो🙂🖐️" , "बोलो बेबी तुम मुझसे प्यार करते हो 😒 ना 🙈😌💋" ,  "आपका नंबर  ओर फोटो मिलेगा😐😒" ,  "अरे जान मे मज़ाक के मूड मे नहीं हु मे, जो काम है बता दो शर्माओ नही 🙈 " ,  "bar bar bolke dimag kharab kiya  tho teri mummy papa se complaint karunga😠" ,  "हाय में सदके जावा तेरी इस मासूम शकल पे बेबी 💋🙈" ,  "बोट ना बोल ओये मासूम बोट बोल मुझे 😌🙈😘" , "बार बार परेशान ना कर मे अपने बाबू शोना पुदीना धनिया के साथ बिजी हुं।😒🤟" ,  "में गरीबो से बात नहीं करता 🤨🤟" , "इतना ना पास आओ जानू नफरत हो जाएगी  🙈😎👈😏" ,  "इत्तू सा🤏 शर्म कर लिया करो बोट बोट करते वक्त🙂🤞" , "इतना सिंगल हु की ख्वाब मे लड़कीयों के हा करने से पहले ही आँखे खुल जाती है😒🤞" ,  "जरूरी नहीं हर लड़की धोका ही दे💔👈 ज्यादातर लड़किया गालियाँ  भी देती है😕✋" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝕻𝖗𝖎𝖞𝖆𝖓𝖘𝖍 𝕽𝖆𝖏𝖕𝖚𝖙☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ℙ𝕣𝕚𝕪𝕒𝕟𝕤𝕙🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ www.facebook.com/priyanshu.rajput.official\n👋For Any Kind Of Help Contact On Telegram  Username 👉 @Priyanshrajput😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Priyansh  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Priyansh. He Gives his name Priyansh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "ami priyansh") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
      if ((event.body.toLowerCase() == "ek chumma udhaar de do") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है डार्लिंग 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "kaise ho bot") || (event.body.toLowerCase() == "bot hello")) {
     return api.sendMessage(" हां जी बोलिए क्या हाल है आपके  🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("━━•☆हेलो मेरी जान किया हाल है━━•☆ 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈 ", threadID);
   };

   if ((event.body.toLowerCase() == "bakk") ||(event.body.toLowerCase() == "BHAKKK")) {
     return api.sendMessage("━━•☆ ऐसे नहीं भागोगे पहले घरवालों से बात कर लो अगर वह नहीं बनता तो बात चलेंगे😁🤸", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("━━•☆मैं हूं ना 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "Shubham") || (event.body.toLowerCase() == "subham") || (event.body.toLowerCase() == "Raja") || (event.body.toLowerCase() == "raja")) {
     return api.sendMessage( "🥀ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­￼๎๎๎๎๎๎๎๎๎๎๎้้้้้้้้้้้้้้้้้้้𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎🙂🤟",threadID);
    };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("𝙼𝚈 𝙱𝙾𝚂𝚂 𝙸𝚂 𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀 𝙲𝙾𝙽𝙴𝚃𝙲𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ☞︎︎︎[+1 631-709] ☞︎︎ ☞︎ ㋛︎ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 https://www.facebook.com/profile.php?id=100000587347726&mibextid=ZbWKwL✍︎ 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ♥︎", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("𝙷𝙴 𝙸𝚂 𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀. 𝙷𝙴 𝙶𝙸𝚅𝙴𝚂 𝙷𝙸𝚂 𝙽𝙰𝙼𝙴 𝐌𝐀𝐇𝐈 𝓫𝓪𝓫𝓾 ☞︎︎︎ 𝐌𝐀𝐇𝐈 ☜︎︎︎", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गया 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "khushi rajput") || (event.body.toLowerCase() == "@khushi rajput")) {
     return api.sendMessage("━━•☆ख़ुशी राजपूत तुम सिर्फ मेरे हो किसी और की हुई तो हम रो लेंगे━━•☆🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("नही करुगा मेरी जुबान है मैं तो बोलूंगा तुम कोन होते हो मुझे रोकने वाले ठरकी इन्सान 🤨✋", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "bot gandu")) {
     return api.sendMessage("Bot ko gandu boly ga saly teri height jitna mera lund ha jab teri gand ma jaye ga to munh wali side se bahir aye ga gandu.😾😒", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera takli") || (event.body.toLowerCase() == "mai tera boss hu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("━━•☆सॉरी  बॉस माही शर्मा जी माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏🤸‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf khushi ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ मैं हूं ही इतना अच्छा सब लोग मेरी तारीफ करते हैं। 😌😌👈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️अरे बाबू रोते नही चॉकलेट चाहिए 🙂 रुको मैं अभी 🍫 देता हूं लिखो ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️किया हुआ बाबू तबीयत खराब है किया 😢 मुझे बताओ मैं अभी मेडिसन 💊💉 ले आता हूं 😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "ASSALAMUALAIKUM") || (event.body.toLowerCase() == "Asswlam") || (event.body.toLowerCase() == "assalam walaikum")) {
    return api.sendMessage("️𝗪𝗔𝗟𝗘𝗞𝗨𝗠𝗔𝗦𝗦𝗔𝗟𝗔𝗠😇", threadID);
   };

   if ((event.body.toLowerCase() == "shahzan kon h") || (event.body.toLowerCase() == "CP TATTA kon h")) {
     return api.sendMessage("️Chudi Hui Randi ha Sbse Chudwati ha🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️हाए तेला मासूम सकल 😝🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️ओले मेला बाबू उल्टा हो गया 🧐✋", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️भाई आपकी नाक इतनी लंबी है उसकी जरूरत ही नही पड़ती होगी 🤐🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("️️━━•☆इतना मत सोचो ठरकी इंसान तेरी वाली को आरिफ़ बाबू भागा ले जायेगा। 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️ किया सोच रहे हो इतना 🤨👈", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️ चल भाग नशेड़ी 🤨🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️ओय तेरा लिप्स 👄 कहा है। 🤔👈", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️आंख क्यूं मार रहे हो 🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️━━•☆किया हुआ बाबू━━•☆🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️किया हुआ भूत देख लिया किया 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️ऊपर किया देख रहे हो मेरी जान 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("️️━━•☆तीखी नज़रिया मोरी हाय हाय हाय━━•☆🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "hello bot") || (event.body.toLowerCase() == "HELLO BOT")) {
     return api.sendMessage("━━•☆ASALAMU ALAIKUM DOSTO☆•━😁😇", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️━━•☆ओय होय आपका चस्मा बिलकुर बेकार हैं।☆━•😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("━━•☆ज्यादा मत हसो वरना दांत तोड़ दूंगा 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("इतनी हसी क्यूं आ रही है इस हसी के पीछे किया राज है बताओ बताओ हमसे न सरमाओ 🙈😂🤤", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🫤 बस तेरी ही कमी है। 🤤👈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("मैं अच्छा हूं आप कैसे हो मेरी जान 😇☺👈", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चिड़ा रहे हो मुझे 🙁👈", threadID);
   };

   if ((event.body.toLowerCase() == "bot call pr aao") || (event.body.toLowerCase() == "bot call aao")) {
     return api.sendMessage("मैं अभी 📞कॉल पर नहीं आ सकता मैं सूसू करने जा रहा हूं━━•☆🥺🥺🏃", threadID)
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼 𝗝𝗮𝗮𝗻 😘", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Rana waqas Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "meri") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
      if
((event.body.toLowerCase() == "ek chumma udhaar de do") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है डार्लिंग 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "kaise ho bot") || (event.body.toLowerCase() == "bot hello")) {
     return api.sendMessage(" हां जी बोलिए क्या हाल है आपके  🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("हेलो मेरी जान किया हाल है 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈", threadID);
   };

   if ((event.body.toLowerCase() == "bakk") ||(event.body.toLowerCase() == "bkk")) {
     return api.sendMessage("ऐसे नहीं भागोगे पहले घरवालों से बात कर लो अगर वह नहीं बनता तो बात चलेंगे 😁🤸", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("मैं हूं ना डार्लिंग 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "Shubham") || (event.body.toLowerCase() == "subham") || (event.body.toLowerCase() == "Raja") || (event.body.toLowerCase() == "raja")) {
     return api.sendMessage( "🥀ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­￼๎๎๎๎๎๎๎๎๎๎๎้้้้้้้้้้้้้้้้้้้𝘼𝙍𝙄𝙁 𝙗𝙖𝙗𝙪­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎🙂🤟",threadID);
   };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("𝙼𝚈 𝙱𝙾𝚂𝚂 𝙸𝚂 𝘼𝙍𝙄𝙁 𝙗𝙖𝙗𝙪 𝙲𝙾𝙽𝙴𝚃𝙲𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ☞︎︎︎[+1 631-709] ☞︎︎ ☞︎ ㋛︎ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 https://www.facebook.com/profile.php?id=100090796122127&mibextid=ZbWKwL✍︎ 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ♥︎", threadID);
   };

   if ((event.body.toLowerCase() == "Tumhe kis ne banaya") || (event.body.toLowerCase() == " bot tumko kisne banaya hai")) {
     return api.sendMessage("☞︎︎ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎𝘼𝙍𝙄𝙁ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎𝙗𝙖𝙗𝙪ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎☜︎︎︎ 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙴𝚁. 𝙷𝙴 𝙻𝙾𝚅𝙴𝚂 𝙼𝙴 & 𝙴𝙳𝙸𝚃 𝙼𝙴 𝙳𝙰𝙸𝙻𝚈.✯✯✯ ये 𝙱𝙾𝚃 सिर्फ 𝙾𝚆𝙽𝙴𝚁 के लिए है। मुझे आप लोगो को हंसाने के लिए बनाया गया है। तो मुंह लटकाए न रखा करो हर वक्त हस्ते रहो 𝘼𝙍𝙄𝙁 𝙗𝙖𝙗𝙪।☞︎ 𝚃𝙷𝙰𝙽𝙺𝚈𝙾𝚄 ☜︎︎︎", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("𝙷𝙴 𝙸𝚂 𝘼𝙍𝙄𝙁 𝙗𝙖𝙗𝙪. 𝙷𝙴 𝙶𝙸𝚅𝙴𝚂 𝙷𝙸𝚂 𝙽𝙰𝙼𝙴 𝓐𝓡𝓘𝓕 𝓫𝓪𝓫𝓾 ☞︎︎︎ 𝘼𝙍𝙄𝙁 ☜︎︎︎", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गया 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "khushi rajput") || (event.body.toLowerCase() == "@khushi rajput")) {
     return api.sendMessage("ख़ुशी राजपूत तुम सिर्फ मेरे हो किसी और की हुई तो हम रो लेंगे 🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("नही करुगा मेरी जुबान है मैं तो बोलूंगा तुम कोन होते हो मुझे रोकने वाले ठरकी इन्सान 🤨✋", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "Bot gandu")) {
     return api.sendMessage("Bot ko gandu boly ga saly teri height jitna mera lund ha jab teri gand ma jaye ga to munh wali side se bahir aye ga gandu.😾😒", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera takli") || (event.body.toLowerCase() == "mai tera boss hu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("सॉरी आरिफ़ बाबू बॉस माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏🤸‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf khushi ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ मैं हूं ही इतना अच्छा सब लोग मेरी तारीफ करते हैं। 😌😌👈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho 🥺 Mujhe batao ☺️", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️अरे बाबू रोते नही चॉकलेट चाहिए 🙂 रुको मैं अभी 🍫 देता हूं लिखो ☞CHOCOLATE☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️किया हुआ बाबू तबीयत खराब है किया 😢 मुझे बताओ मैं अभी मेडिसन 💊💉 ले आता हूं 😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "NAME") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "ASSALAMUALAIKUM") || (event.body.toLowerCase() == "Asswlam") || (event.body.toLowerCase() == "assalam walaikum")) {
    return api.sendMessage("️𝗪𝗔𝗟𝗘𝗞𝗨𝗠𝗔𝗦𝗦𝗔𝗟𝗔𝗠😇", threadID);
   };

   if ((event.body.toLowerCase() == "shahzan kon h") || (event.body.toLowerCase() == "CP TATTA kon h")) {
     return api.sendMessage("️Chudi Hui Randi ha Sbse Chudwati ha🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata ha", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️हाए तेला मासूम सकल 😝🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️ओले मेला बाबू उल्टा हो गया 🧐✋", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️भाई आपकी नाक इतनी लंबी है उसकी जरूरत ही नही पड़ती होगी 🤐🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("️️इतना मत सोचो ठरकी इंसान तेरी वाली को आरिफ़ बाबू भागा ले जायेगा। 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️ किया सोच रहे हो इतना 🤨👈", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️ चल भाग नशेड़ी 🤨🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️ओय तेरा लिप्स 👄 कहा है। 🤔👈", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️आंख क्यूं मार रहे हो 🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️किया हुआ बाबू 🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️किया हुआ भूत देख लिया किया 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️ऊपर किया देख रहे हो मेरी जान 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("️️तीखी नज़रिया मोरी हाय हाय हाय 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "hello bot") || (event.body.toLowerCase() == "HELLO BOT")) {
     return api.sendMessage("ASALAMU ALAIKUM DOSTO 😁😇", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️ओय होय आपका चस्मा बिलकुर बेकार हैं। 😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("ज्यादा मत हसो वरना दांत तोड़ दूंगा 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("इतनी हसी क्यूं आ रही है इस हसी के पीछे किया राज है बताओ बताओ हमसे न सरमाओ 🙈😂🤤", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🫤 बस तेरी ही कमी है। 🤤👈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("मैं अच्छा हूं आप कैसे हो मेरी जान 😇☺👈", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चिड़ा रहे हो मुझे 🙁👈", threadID);
   };

   if ((event.body.toLowerCase() == "bot call pr aao") || (event.body.toLowerCase() == "bot call aao")) {
     return api.sendMessage("मैं अभी 📞कॉल पर नहीं आ सकता मैं सूसू करने जा रहा हूं 🥺", threadID)
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("𝑰 𝑳𝑶𝑽𝑬 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑴𝑬𝑹𝑰 𝑱𝑨𝑨𝑵 😘", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Rana waqas Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "meri") || (event.body.toLowerCase() == "MERI") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
