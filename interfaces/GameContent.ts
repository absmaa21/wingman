export default interface GameContent {
    version?: {
        riotClientBuild: string,
        riotClientVersion: string,
    },

    agents?: {},
    buddies?: {},
    bundles?: {},
    ceremonies?: {},
    competitiveTiers?: {},
    contentTiers?: {},
    contracts?: {},
    currencies?: {},
    events?: {},
    gameModes?: {},
    gear?: {},
    levelBorders?: {},
    maps?: {},
    playerCards?: {},
    playerTitles?: {},
    seasons?: {},
    sprays?: {},
    themes?: {},
    weapons?: {},
    ranks?: {},

    /*
    apiState.gameContent.agents = agents.filter(agent => agent["isPlayableCharacter"]);

        gameContentManager.buddies = (await axios.get(gameContentStatics.gameContentApiEndpoints.buddies)).data.data;
        gameContentManager.bundles = (await axios.get(gameContentStatics.gameContentApiEndpoints.bundles)).data.data;
        gameContentManager.ceremonies = (await axios.get(gameContentStatics.gameContentApiEndpoints.ceremonies)).data.data;
        gameContentManager.competitiveTiers = (await axios.get(gameContentStatics.gameContentApiEndpoints.competitiveTiers)).data.data;
        gameContentManager.contentTiers = (await axios.get(gameContentStatics.gameContentApiEndpoints.contracts)).data.data;
        gameContentManager.contracts = (await axios.get(gameContentStatics.gameContentApiEndpoints.contracts)).data.data;
        gameContentManager.currencies = (await axios.get(gameContentStatics.gameContentApiEndpoints.currencies)).data.data;
        gameContentManager.events = (await axios.get(gameContentStatics.gameContentApiEndpoints.events)).data.data;
        gameContentManager.gameModes = (await axios.get(gameContentStatics.gameContentApiEndpoints.gameModes)).data.data;
        gameContentManager.gear = (await axios.get(gameContentStatics.gameContentApiEndpoints.gear)).data.data;
        gameContentManager.levelBorders = (await axios.get(gameContentStatics.gameContentApiEndpoints.levelBorders)).data.data;

        const maps = (await axios.get(gameContentStatics.gameContentApiEndpoints.maps)).data.data;
        gameContentManager.maps = maps.filter(map => !gameContentStatics.mapUuidBlackList.includes(map.uuid))

        gameContentManager.playerCards = (await axios.get(gameContentStatics.gameContentApiEndpoints.playerCards)).data.data;
        gameContentManager.playerTitles = (await axios.get(gameContentStatics.gameContentApiEndpoints.playerTitles)).data.data;
        gameContentManager.seasons = (await axios.get(gameContentStatics.gameContentApiEndpoints.seasons)).data.data;
        gameContentManager.sprays = (await axios.get(gameContentStatics.gameContentApiEndpoints.sprays)).data.data;
        gameContentManager.themes = (await axios.get(gameContentStatics.gameContentApiEndpoints.themes)).data.data;
        gameContentManager.weapons = (await axios.get(gameContentStatics.gameContentApiEndpoints.weapons)).data.data;
     */
}
