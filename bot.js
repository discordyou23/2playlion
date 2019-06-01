const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('ready', () => {                           
client.user.setGame(`Role Mod Bot`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});



client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'sm-chat');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});       
});

	
	

client.on('guildMemberAdd', member =>{
    member.addRole(member.guild.roles.find(x => x.name === 'SM PLAYER'), "Auto-Role")
});




        		
	


client.login(process.env.BOT_TOKEN);
