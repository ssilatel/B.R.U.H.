const { SlashCommandBuilder } = require("discord.js");

getInsult = () => {
    word1 = ["artless","bawdy","beslubbering","bootless","churlish","clouted",
    "cockered","craven","currish","dankish","dissembling","droning","errant","fawning",
    "fobbing","frothy","froward","gleeking","goatish","gorbellied","impertinent",
    "infectious","jarring","loggerheaded","lumpish","mammering","mangled","mewling",
    "paunchy","pribbling","puking","puny","qualling","rank","reeky","roguish","ruttish",
    "saucy","spleeny","spongy","surly","tottering","unmuzzled","vain","venomed",
    "villainous","warped","wayward","weedy","yeasty","abominable","accursed","adulterate","arrogant","babbling",
    "barbarous","base","mumbling","overwheening","perfidious","pestilent","poisonous","pragging","rancorous","rascally",
    "sanctimonious","shameless","slanderous","soulless","spongey","crusty","withered","loathed",
    "tongueless","traitorous","unwholesome","viperous","greasy","obscene","beggarly","scandalous","creeping",
    "lascivious","degenerate","meddling"];
    
    word2 = ["base-court","prick-eared","puisny-tilted","puke-stockinged","open-arsed","bat-fowling","beef-witted","beetle-headed",
    "boil-brained","clapper-clawed","clay-brained","common-kissing","crook-pated",
    "dismal-dreaming","dizzy-eyed","doghearted","dread-bolted","earth-vexing",
    "elf-skinned","fat-kidneyed","fen-sucked","flap-mouthed","fly-bitten",
    "folly-fallen","fool-born","full-gorged","guts-griping","half-faced","hasty-witted",
    "hedge-born","hell-hated","idle-headed","ill-bred","ill-nurtured","knotty-pated",
    "milk-livered","motley-minded","onion-eyed","plume-plucked","pottle-deep",
    "pox-marked","reeling-ripe","rough-hewn","rude-growing","rump-fed","shard-borne",
    "sheep-biting","spur-galled","swag-bellied","tardy-gaited","tickle-brained","white-livered",
    "toad-spotted","urchin-snouted","weather-bitten","shag-haired","tallow-faced","beef-witted",
    "decayed","deformed","muddy-mottled","hag-born","long-tongued","toad-spotted"];
    
    word3 = ["baggage","barnacle","bladder","boar-pig","bugbear",
    "bum-bailey","canker-blossom","clack-dish","clotpole","codpiece","coxcomb","death-token",
    "dewberry","flap-dragon","flax-wench","flirt-gill","foot-licker","fustilarian",
    "giglet","gudgeon","haggard","harpy","hedge-pig","horn-beast","hugger-mugger",
    "joithead","lewdster","lout","maggot-pie","malt-worm","mammet","measle","minnow",
    "miscreant","moldwarp","mumble-news","nut-hook","pigeon-egg","pignut","pumpion",
    "puttock","ratsbane","scut","skainsmate","strumpet","varlet","vassal","wagtail",
    "whey-face","scullion","serpents-egg","callet","slug","bag of guts","punk","bitch-wolf","botch","withered-hag",
    "mangy-dog","foul deformity","odiferous stench","no bowels","drunkard","turd","bear-whelp","eunuch",
    "devil-incarnate","filthy rogue","vile worm","writhled shrimp","scurvy-knave","whore-master","malt-horse",
    "varlet","worms-meat","canker-blossom","carrion","hag-seed","ruinous-butt","contriver","hypocrite","infection",
    "imbossed carbunkle","eternal devil","execrable-wretch","murderous coward","foul adulterer","ingested-lump","wrinkled-witch",
    "plebian","strumpet","horse-drench","promise-breaker","incontinent varlet","leprous witch","babbling gossip",
    "tyrant","purified-cur","misbegotten-divel","mildewed-ear"];
    
    const index1 = Math.floor(Math.random() * word1.length);
    const index2 = Math.floor(Math.random() * word2.length);
    const index3 = Math.floor(Math.random() * word3.length);
    
    return `thou ${word1[index1]} ${word2[index2]} ${word3[index3]}`;
}

module.exports = {
    data: new SlashCommandBuilder()
            .setName("insult")
            .setDescription("Insult a user (Shakespeare style)!")
            .addUserOption(option => 
                option.setName("target")
                    .setDescription("The user to be insulted")
                    .setRequired(true)),
        async execute(interaction) {
            await interaction.reply(`${interaction.options.getUser("target")}, ${getInsult()}`);
        }
}