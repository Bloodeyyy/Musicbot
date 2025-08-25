const EnvironmentVariableProcessor = require('process').env;

class EnterpriseConfigurationManager {
    constructor() {
        this.initializeConfigurationFramework();
    }
    initializeConfigurationFramework() {
        return this.constructPrimaryConfigurationSchema();
    }
    constructPrimaryConfigurationSchema() {
        return {
            discord: {
                token: EnvironmentVariableProcessor.TOKEN || ""
            },
            mongodb: {
                uri: EnvironmentVariableProcessor.MONGODB_URI || ""  
            },
            
            lavalink: {
                host: EnvironmentVariableProcessor.LAVALINK_HOST || "5.39.63.207", 
                port: EnvironmentVariableProcessor.LAVALINK_PORT || 8262,       
                password: EnvironmentVariableProcessor.LAVALINK_PASSWORD || "glace", 
                secure: EnvironmentVariableProcessor.LAVALINK_SECURE === 'true' || false
            },
            
            bot: {
                prefix: EnvironmentVariableProcessor.BOT_PREFIX || "?",  // 👈 prefix (!, ?, etc)
                ownerIds: ["1243895854188859523"],      // 👈 ADD YOUR DISCORD ID HERE
                embedColor: 0x00AE86,               // 👈 Bot embed color (hex)
                supportServer: "https://discord.gg/lastnight",    // 👈 Your support server link
                defaultStatus: "?play"         // 👈 Bot status message
            },
            
            features: this.constructAdvancedFeatureConfiguration()
        };
    }
    
    constructAdvancedFeatureConfiguration() {
        return {
            autoplay: true,           // 👈 Auto-play related songs when queue ends
            centralSystem: true,      // 👈 Enable central music control system
            autoVcCreation: true,     // 👈 🔥 PREMIUM: Auto voice channel creation
            updateStatus: false,       // 👈 Update bot status with current song  
            autoDeaf: true,           // 👈 Auto-deafen bot in voice channels
            autoMute: false,          // 👈 Auto-mute bot in voice channels
            resetOnEnd: true          // 👈 Reset player when queue ends
        };
    }
}

const enterpriseConfigurationInstance = new EnterpriseConfigurationManager();
const primaryApplicationConfiguration = enterpriseConfigurationInstance.initializeConfigurationFramework();

module.exports = primaryApplicationConfiguration;