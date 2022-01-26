module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Je suis connecté à ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Support.`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "PLAYING",
                    url: "https://www.twitch.tv/erziug"
                  }],
                  status: "dnd"})
        }, 5000);
    }
}