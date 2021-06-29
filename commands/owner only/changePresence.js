const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "presence",
  aliases: ["change-status"],
  usage: "<text>",
  description: "Change Custom Presence Status Text",
  hidden: false,
  premium: false,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "788260234409672754") return;
    const text = args.join(" ");
    if (!text) return message.lineReply("Please define a text bro, noob");
    if (text === "default") {
      client.user.setActivity(`${prefix}help`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/falcxxr",
      });
      message.lineReplyNoMention(
        `Successfully Set Presence to Default.\nWith Presence Type : **Streaming**\nStreaming URL : \`https://twitch.tv/falcxxr\``
      );
    } else {
      client.user.setActivity(`${text}`, {
        type: "PLAYING",
      });
      message.lineReplyNoMention(
        `Successfully Set Presence to => \`${text}\`.\nWith Presence Type : **Playing**`
      );
    }
  },
};
