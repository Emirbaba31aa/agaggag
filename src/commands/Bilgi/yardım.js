const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`- ${config.bot.prefix}avatar [@Emir/ID]
- ${config.bot.prefix}ban-sorgu [@Emir/ID]
- ${config.bot.prefix}ceza-bilgi (#CezaID)
- ${config.bot.prefix}isimler [@Emir/ID]
- ${config.bot.prefix}git [@Emir/ID]
- ${config.bot.prefix}çek [@Emir/ID]
- ${config.bot.prefix}öp [@Emir/ID]
- ${config.bot.prefix}banner [@Emir/ID]
- ${config.bot.prefix}cihaz-bilgi [@Emir/ID]
- ${config.bot.prefix}kke [@Emir/ID]
- ${config.bot.prefix}nerede [@Emir/ID]
- ${config.bot.prefix}ship [@Emir/ID]
- ${config.bot.prefix}profil [@Emir/ID]
- ${config.bot.prefix}rol-bilgi [@Rol/ID]
- ${config.bot.prefix}rol-log [@Emir/ID]
- ${config.bot.prefix}rol-sorgu [@Rol/ID]
- ${config.bot.prefix}say
- ${config.bot.prefix}sesli
- ${config.bot.prefix}sicil [@Emir/ID]
- ${config.bot.prefix}snipe
- ${config.bot.prefix}sunucu-bilgi
- ${config.bot.prefix}teyitler
- ${config.bot.prefix}yetkili-bilgi
- ${config.bot.prefix}afk (sebep)
- ${config.bot.prefix}booster (isim)
- ${config.bot.prefix}kayıtsız-etiketle
- ${config.bot.prefix}ping
- ${config.bot.prefix}sil (sayı)
- ${config.bot.prefix}erkek [@Emir/ID] (isim-yaş)
- ${config.bot.prefix}kadın [@Emir/ID] (isim-yaş)
- ${config.bot.prefix}isim [@Emir/ID] (isim-yaş)
- ${config.bot.prefix}kayıtsız
- ${config.bot.prefix}teyit-sıfırla
- ${config.bot.prefix}top-kayıt [@Emir/ID]
- ${config.bot.prefix}ban [@Emir/ID] (sebep)
- ${config.bot.prefix}chat-mute [@Emir/ID] (sebep)
- ${config.bot.prefix}voice-mute [@Emir/ID] (sebep)
- ${config.bot.prefix}jail [@Emir/ID] (sebep)
- ${config.bot.prefix}reklam [@Emir/ID] (sebep)
- ${config.bot.prefix}warn [@Emir/ID] (sebep)
- ${config.bot.prefix}unban [@Emir/ID]
- ${config.bot.prefix}unjail [@Emir/ID]
- ${config.bot.prefix}unmute [@Emir/ID]
- ${config.bot.prefix}unvmute [@Emir/ID]
- ${config.bot.prefix}müzisyen [@Emir/ID]
- ${config.bot.prefix}rol (ver/al) [@Emir/ID] [@Rol/ID]
- ${config.bot.prefix}sponsor [@Emir/ID]
- ${config.bot.prefix}vip [@Emir/ID]
- ${config.bot.prefix}yetkili-yap [@Emir/ID]
- ${config.bot.prefix}yetkili-say
- ${config.bot.prefix}rol-dm [@Rol/ID]
- ${config.bot.prefix}dm-mesaj [@Emir/ID] (atılacak-mesaj)
- ${config.bot.prefix}emoji-ekle (emoji)
- ${config.bot.prefix}veri-sıfırla [@Emir/ID]
- ${config.bot.prefix}eval (kod)
- ${config.bot.prefix}kilit (kapat/aç)
- ${config.bot.prefix}allmute
- ${config.bot.prefix}allunmute
- ${config.bot.prefix}allmove (taşınacak-kanal-id) (taşıyacağınız-kanal-id) [belirtilen kanaldakileri çeker]
- ${config.bot.prefix}herkesi-çek (ses-kanalı-id) [herkesi çeker]
- ${config.bot.prefix}rolsüz (ver)
- ${config.bot.prefix}uptime-süresi
- ${config.bot.prefix}reklam-engel
- ${config.bot.prefix}küfür-engel
- ${config.bot.prefix}yetkili-say
- ${config.bot.prefix}ban-say\`
`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 60000));

    }
}
