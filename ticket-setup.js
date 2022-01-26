const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez une raison.')
					.addOptions([
						{
							label: '🙋‍♀️ | Aide',
							description: 'Ouvre un ticket pour de l\'aide avec le bot.',
							value: 'aide',
						},
						{
							label: '📛 | Bug Report',
							description: 'Ouvre un ticket pour un Bug Report.',
							value: 'bugreport',
						},
                        {
							label: '👥 | Recrutement',
							description: 'Ouvre un ticket pour un recrutement.',
							value: 'recrutement',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Open ticket',
                description: '**__How To Open A Ticket :__**\nPlease choose the type of ticket you wish to open.',
                color: "BLURPLE",
                footer: {text: 'DevFr Support'}
            }],
            components: [row]
        })
    }
}