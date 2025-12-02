il//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUUzcFJlRlpLZ0ZOL2VwSldzMHRZTkM4MWs5dE0wdyswcDZtOENib2xuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGdKdU0rcWliVlIwam9ZZUxaOVU4a2FGVHkzejJSQ1BwRmJ1Y1k4OUtpcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTGFTVDRKeUFMck1CVTRyRk84QzMwbDVOUmJ4V0dUYmJPVFBwZXRBa2xRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSnRzemRKMS9uUHJaK0RnNWkyekd4cjlObG1nR045NlpXdFFTQThiazJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHUEloZXd0TGNDSXNhUDRrUjk2S3RZVEhEam5jT0VEeFQvT28yaW42VWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhicWRJTkNVOURYYTNLa3JuVEpkVDlKQ2lUaFpRVHozcU90S2s3MVlRSEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU4valY3MTRTQ2ZqeVh5WVRreHdkQzc5c2tYZk4xVEdJNzRFS3ZyQmkwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGhNa0NLV0ZZSGlsay9MazRQVXl2MGN3MkgrVkFVb2lLU3paMkROc3J4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Wak54M0NpblhzNFB6WWdOTkFWVDZla3RocVlzdE9lVlhxdzh5TlREMUQ3MlNTZmJNUFdERkhhVkZEQUl3Wm1ZVmg5eURxckd1RGlHZnRhcEFCK2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IktIc2grSGZ5UFIvQlpQK0RpMVNyaFcxcVZFUmoxVFNXWi96OHJMeUpTOWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTA5MDI0NjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1QkJGNTA1REQ2RDkyQUNDQkY1NTQ4RDcxQzQzMkRGIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ3MTA4NTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyODkwOTAyNDYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTQzQjUxQTg2RDA2QTIzM0E5NjNCMTlFOUY3NzQ5MCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0NzEwODU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjg5MDkwMjQ2MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVGOTM4QUIzMzM0NDRGMzhGMzBEN0NCQTlGQzA0NjQiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDcxMDg1Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTA5MDI0NjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1RjQzQkY4MUEwQUMxMkUyN0NGODU0NjNGM0ZFRjYwIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ3MTA4NTZ9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWDRHRUJXSFoiLCJtZSI6eyJpZCI6IjIyODkwOTAyNDYyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidm9sdGFyYTUwIiwibGlkIjoiNTE5Mzk3NjA5NjM3OTM6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmeTkrWURFTFN6dmNrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5pczMvMVF0L2dwNjNSS21BSHJaU3BqdStiUzVJR0ZkdmhVMDczalp1U289IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZQZlRZcU1QckR6eDl5MzVCZkQ4bEtkOFJHNXA1bE4xSEl5K1VmVEVZSzZoYmJTb0pzMGI0ZWl6eW50WDFVTmRLZm42dEI4VVBheVFKbVQxbmVkUEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhc3QrQWQ1Y2lVdnNPNkpncklhbnpmc1F5MHgrb0JsVUE2Q1Y4T2ZDR2lKMlZ6UjJZeGJOSnRzS29IYk9NUEJIK2pWRG1LdENwUXdGNzBMbDI3KzlnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUxOTM5NzYwOTYzNzkzOjFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRZck4vOVVMZjRLZXQwU3BnQjYyVXFZN3ZtMHVTQmhYYjRWTk85NDJia3EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NDcxMDg1MCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBtMCJ9]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ KANGO XMD 😁😁 VOLTARA50  ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ +22890902462 ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '22890902462' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ VOLTARA50 ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[GG ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
