let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {

  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true

  let chat = global.DATABASE.data.chats[m.chat]

  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {

    await m.reply(`*「 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 」*\n*𝐂𝐇𝐎𝐋𝐎 𝐑𝐄𝐂𝐎𝐍𝐂𝐇𝐀𝐃𝐄𝐓𝐔𝐌𝐀𝐃𝐑𝐄 𝐐𝐔𝐄 𝐂𝐇𝐂𝐇 𝐄𝐍𝐕𝐈𝐀𝐒 𝐓𝐔 𝐋𝐈𝐍𝐊 𝐀🐟𝐓🐻, ${await this.getName(m.sender)} 𝐒𝐀𝐅𝐀 𝐍𝐎 𝐌𝐀𝐒 𝐈𝐃𝐈𝐎𝐓𝐎𝐍*`)

    if (isAdmin) return m.reply('*𝐓𝐄 𝐒𝐀𝐋𝐕𝐀𝐒𝐓𝐄 𝐂𝐀𝐆𝐎𝐍 𝐄𝐑𝐄𝐒 𝐀𝐃𝐌𝐈𝐍, 𝐍𝐎 𝐏𝐔𝐄𝐃𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑𝐓𝐄🤴*')

    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')

    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))

    let isLinkThisGc = new RegExp(linkGC, 'i')

    let isgclink = isLinkThisGc.test(m.text)

    if (isgclink) return m.reply('*𝐓𝐄𝐑𝐑𝐈𝐁𝐋𝐄 𝐋𝐈𝐍𝐊*')

    await this.groupRemove(m.chat, [m.sender])

  }

  return true

}

module.exports = handler
