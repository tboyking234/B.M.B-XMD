const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "bmb",
    desc: "menu the bot",
    category: "menu",
    react: "🔥",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━〔𝐁.𝐌.𝐁-𝐗𝐌𝐃〕━━┈⊷
┃★╭────────────
┃★│ Owner : *${config.OWNER_NAME}*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Mode : *[${config.MODE}]*
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *1.0.0 *
┃★╰────────────
〔 *Ai Menu* 〕━━┈⊷
┃🔸╭───────────·๏
┃🔸┃🔸 ai
┃🔸┃🔸 gpt
┃🔸┃🔸 meta
┃🔸┃🔸 blackbox
┃🔸┃🔸 gpt4
┃🔸┃🔸 bing
┃🔸┃🔸 copilot
┃🔸└───────────┈⊷
〔 *Menu List* 〕━━┈⊷
┃🔸╭────────────·๏
┃🔸┃🔸 aimenu
┃🔸┃🔸 anmiemenu
┃🔸┃🔸 convertmenu
┃🔸┃🔸 funmenu
┃🔸┃🔸 dlmenu
┃🔸┃🔸 listcmd
┃🔸┃🔸 mainmenu
┃🔸┃🔸 groupmenu
┃🔸┃🔸 allmenu
┃🔸┃🔸 ownermenu
┃🔸┃🔸 othermenu
┃🔸┃🔸 logo <text>
┃🔸┃🔸 repo
┃🔸└───────────┈⊷
〔 *Download Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 facebook
┃🔸┃🔸 mediafire
┃🔸┃🔸 tiktok
┃🔸┃🔸 twitter
┃🔸┃🔸 Insta
┃🔸┃🔸 apk
┃🔸┃🔸 img
┃🔸┃🔸 spotify
┃🔸┃🔸 play
┃🔸┃🔸 play2
┃🔸┃🔸 play3
┃🔸┃🔸 tt2
┃🔸┃🔸 audio
┃🔸┃🔸 video
┃🔸┃🔸 video2
┃🔸┃🔸 ytmp3
┃🔸┃🔸 ytmp4
┃🔸┃🔸 song
┃🔸┃🔸 darama
┃🔸┃🔸 git
┃🔸┃🔸 gdrive
┃🔸┃🔸 smovie
┃🔸┃🔸 baiscope 
┃🔸┃🔸 ginisilia 
┃🔸└───────────┈⊷
〔 *Group Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 grouplink
┃🔸┃🔸 kickall
┃🔸┃🔸 kickall2
┃🔸┃🔸 kickall3
┃🔸┃🔸 add
┃🔸┃🔸 remove
┃🔸┃🔸 kick
┃🔸┃🔸 promote 
┃🔸┃🔸 demote
┃🔸┃🔸 dismiss 
┃🔸┃🔸 revoke
┃🔸┃🔸 setgoodbye
┃🔸┃🔸 setwelcome
┃🔸┃🔸 delete 
┃🔸┃🔸 getpic
┃🔸┃🔸 ginfo
┃🔸┃🔸 delete 
┃🔸┃🔸 disappear on
┃🔸┃🔸 disappear off
┃🔸┃🔸 disappear 7D,24H
┃🔸┃🔸 allreq
┃🔸┃🔸 updategname
┃🔸┃🔸 updategdesc
┃🔸┃🔸 joinrequests
┃🔸┃🔸 senddm
┃🔸┃🔸 nikal
┃🔸┃🔸 mute
┃🔸┃🔸 unmute
┃🔸┃🔸 lockgc
┃🔸┃🔸 unlockgc
┃🔸┃🔸 invite
┃🔸┃🔸 tag
┃🔸┃🔸 hidetag
┃🔸┃🔸 tagall
┃🔸┃🔸 tagadmins
┃🔸└───────────┈⊷
〔 *Fun Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 insult
┃🔸┃🔸 pickup
┃🔸┃🔸 ship
┃🔸┃🔸 character
┃🔸┃🔸 hack
┃🔸┃🔸 joke
┃🔸┃🔸 hrt
┃🔸┃🔸 hpy
┃🔸┃🔸 syd
┃🔸┃🔸 anger
┃🔸┃🔸 shy
┃🔸┃🔸 kiss
┃🔸┃🔸 mon
┃🔸┃🔸 cunfuzed
┃🔸┃🔸 setpp
┃🔸┃🔸 hand
┃🔸┃🔸 nikal
┃🔸┃🔸 hold
┃🔸┃🔸 hug
┃🔸┃🔸 nikal
┃🔸┃🔸 hifi
┃🔸┃🔸 poke
┃🔸└───────────┈⊷
〔 *Other Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 vv
┃🔸┃🔸 pair
┃🔸┃🔸 pair2
┃🔸┃🔸 fact
┃🔸┃🔸 font
┃🔸┃🔸 define
┃🔸┃🔸 news
┃🔸┃🔸 movie
┃🔸┃🔸 weather
┃🔸┃🔸 srepo
┃🔸┃🔸 insult
┃🔸┃🔸 save
┃🔸┃🔸 wikipedia
┃🔸┃🔸 gpass
┃🔸┃🔸 githubstalk
┃🔸┃🔸 yts
┃🔸┃🔸 ytv
┃🔸└───────────┈⊷
〔 *Main Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 ping
┃🔸┃🔸 live 
┃🔸┃🔸 alive
┃🔸┃🔸 runtime
┃🔸┃🔸 uptime 
┃🔸┃🔸 repo
┃🔸┃🔸 owner
┃🔸┃🔸 menu
┃🔸┃🔸 menu2
┃🔸┃🔸 restart
┃🔸└───────────┈⊷
〔 *Owner Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 owner
┃🔸┃🔸 menu
┃🔸┃🔸 menu2
┃🔸┃🔸 listcmd
┃🔸┃🔸 allmenu
┃🔸┃🔸 repo
┃🔸┃🔸 block
┃🔸┃🔸 unblock
┃🔸┃🔸 fullpp
┃🔸┃🔸 setpp
┃🔸┃🔸 restart
┃🔸┃🔸 shutdown
┃🔸┃🔸 updatecmd
┃🔸┃🔸 alive
┃🔸┃🔸 ping 
┃🔸┃🔸 gjid
┃🔸┃🔸 jid
┃🔸└───────────┈⊷
〔 *Convert Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 sticker
┃🔸┃🔸 sticker2
┃🔸┃🔸 fancy
┃🔸┃🔸 take
┃🔸┃🔸 tomp3
┃🔸┃🔸 tts
┃🔸┃🔸 trt
┃🔸└───────────┈⊷
〔 *Anime Menu* 〕━━┈⊷
┃🔸╭─────────────·๏
┃🔸┃🔸 fack
┃🔸┃🔸 dog
┃🔸┃🔸 awoo
┃🔸┃🔸 garl
┃🔸┃🔸 waifu
┃🔸┃🔸 neko
┃🔸┃🔸 megnumin
┃🔸┃🔸 neko
┃🔸┃🔸 maid
┃🔸┃🔸 loli
┃🔸┃🔸 animegirl
┃🔸┃🔸 animegirl
┃🔸┃🔸 animegirl1
┃🔸┃🔸 animegirl2
┃🔸┃🔸 animegirl3
┃🔸┃🔸 animegirl4
┃🔸┃🔸 animegirl5
┃🔸┃🔸 anime1
┃🔸┃🔸 anime1
┃🔸┃🔸 anime2
┃🔸┃🔸 anime3
┃🔸┃🔸 anime4
┃🔸┃🔸 anime5
┃🔸┃🔸 animenews
┃🔸┃🔸 foxgirl
┃🔸┃🔸 naruto
┃🔸└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/BY2HCkh/nexus-xmd.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: '🔥 𝐁.𝐌.𝐁-𝐗𝐌𝐃 🔥',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/wify3q.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

    
