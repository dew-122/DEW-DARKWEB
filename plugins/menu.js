const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
| *DOWNLOAD COMMANDS* |
    ▫️.song <https://song.lk/>
    ▫️.video <aouto>
    ▫️.fb <https://www.facebook.com/profile.php?id=100089624648632>
| *GROUP COMMANDS* |
${menu.group}
| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️.sticker <reply img>
    ▫️.img <reply sticker>
    ▫️.tr <lang><text>
    ▫️.tts <text>
| *SEARCH COMMANDS* |
${menu.search}


🥶𝐌𝐚𝐝𝐞 𝐛𝐲 DEW WEB DEVOLOPER🥶

> ROBIN MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/dew-122/DEW-DARKWEB/refs/heads/main/anonymous-binary-5120x2880-15647.png",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
