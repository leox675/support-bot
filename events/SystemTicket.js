const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('supp')
                    .setPlaceholder('Sélectionner pour supprimer le ticket !')
					.addOptions([
						{
							label: '🗑️ Supprimer le ticket',
							description: 'Supprime le salon',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "935958305627598998"
        let roleStaff = interaction.guild.roles.cache.get('935955778320347177')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:4247off:912015084035907665> Vous avez déja un ticket d\'ouvert sur le serveur.', ephemeral: true})
            if (interaction.values[0] == "aide") {
                interaction.guild.channels.create(`ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Ticket pour une aide')
                    .setDescription('Veuillez bien détailler votre demande pour qu\'un modérateur puisse vous aider.')
                    .setFooter('LucBots')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "bugreport") {
                interaction.guild.channels.create(`ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('Ticket pour report un bug')
                    .setDescription('Veuillez bien détailler le bug pour qu\'un modérateur puisse vous aider.')
                    .setFooter('LucBots')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "recrutement") {
                interaction.guild.channels.create(`ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour faire une candidature de recrutement')
                    .setDescription('Veuillez bien détailler votre candidature pour qu\'un modérateur puisse vous aider.')
                    .setFooter('LucBots')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}