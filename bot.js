const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('ready', () => {                           
client.user.setGame(`Role Mod Bot`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});





	
	

client.on('guildMemberAdd', member =>{
    member.addRole(member.guild.roles.find(x => x.name === 'SM PLAYER'), "Auto-Role")
});




        		
	


client.login(process.env.BOT_TOKEN);
