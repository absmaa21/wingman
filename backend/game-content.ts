import gameContentStatics from "./statics/game-content-statics";
import * as FileSystem from "./utils/file-system/file-system";
import * as LogSystem from "./utils/log-system/log-system";
import { ApiState } from "./api-state";
import axios from "axios";


export async function initGameContent(apiState: ApiState) {
    if (!apiState.gameContent) apiState.gameContent = {};

    const version = (await axios.get(gameContentStatics.gameContentApiEndpoints.version)).data.data;

    const fetchNewGameContent = async () => {
        if (!apiState.gameContent) apiState.gameContent = {};

        LogSystem.logInfo("Attempting to fetch game content data...");

        apiState.gameContent.version = version;

        await fetchGameContent(apiState);
        await FileSystem.writeFile(gameContentStatics.filePaths.gameContent, apiState.gameContent!);

        LogSystem.logInfo("Game content data successfully fetched...");
    }

    LogSystem.logInfo("Attempting to load game content file...");
    await FileSystem.readFile(gameContentStatics.filePaths.gameContent)
        .then(async (fileContent: any) => {
            if (!apiState.gameContent) apiState.gameContent = {};

            if (fileContent['version']['riotClientBuild'] === version['riotClientBuild']) {

                Object.assign(apiState.gameContent, fileContent);

                LogSystem.logInfo("Game content file successfully loaded.");
            } else {
                await fetchNewGameContent();
            }
        })
        .catch(async error  => {
            LogSystem.logInfo("Failed to load game content file. " + error);

            await fetchNewGameContent();
        })
}


async function fetchGameContent(apiState: ApiState) {
    if (!apiState.gameContent) apiState.gameContent = {};

    const agents = (await axios.get(gameContentStatics.gameContentApiEndpoints.agents)).data.data;
    apiState.gameContent.agents = agents.filter((agent: { [x: string]: any; }) => agent["isPlayableCharacter"]);

    apiState.gameContent.buddies = (await axios.get(gameContentStatics.gameContentApiEndpoints.buddies)).data.data;
    apiState.gameContent.bundles = (await axios.get(gameContentStatics.gameContentApiEndpoints.bundles)).data.data;
    apiState.gameContent.ceremonies = (await axios.get(gameContentStatics.gameContentApiEndpoints.ceremonies)).data.data;
    apiState.gameContent.competitiveTiers = (await axios.get(gameContentStatics.gameContentApiEndpoints.competitiveTiers)).data.data;
    apiState.gameContent.contentTiers = (await axios.get(gameContentStatics.gameContentApiEndpoints.contracts)).data.data;
    apiState.gameContent.contracts = (await axios.get(gameContentStatics.gameContentApiEndpoints.contracts)).data.data;
    apiState.gameContent.currencies = (await axios.get(gameContentStatics.gameContentApiEndpoints.currencies)).data.data;
    apiState.gameContent.events = (await axios.get(gameContentStatics.gameContentApiEndpoints.events)).data.data;
    apiState.gameContent.gameModes = (await axios.get(gameContentStatics.gameContentApiEndpoints.gameModes)).data.data;
    apiState.gameContent.gear = (await axios.get(gameContentStatics.gameContentApiEndpoints.gear)).data.data;
    apiState.gameContent.levelBorders = (await axios.get(gameContentStatics.gameContentApiEndpoints.levelBorders)).data.data;

    const maps = (await axios.get(gameContentStatics.gameContentApiEndpoints.maps)).data.data;
    apiState.gameContent.maps = maps.filter((map: { uuid: string; }) => !gameContentStatics.mapUuidBlackList.includes(map.uuid))

    apiState.gameContent.playerCards = (await axios.get(gameContentStatics.gameContentApiEndpoints.playerCards)).data.data;
    apiState.gameContent.playerTitles = (await axios.get(gameContentStatics.gameContentApiEndpoints.playerTitles)).data.data;
    apiState.gameContent.seasons = (await axios.get(gameContentStatics.gameContentApiEndpoints.seasons)).data.data;
    apiState.gameContent.sprays = (await axios.get(gameContentStatics.gameContentApiEndpoints.sprays)).data.data;
    apiState.gameContent.themes = (await axios.get(gameContentStatics.gameContentApiEndpoints.themes)).data.data;
    apiState.gameContent.weapons = (await axios.get(gameContentStatics.gameContentApiEndpoints.weapons)).data.data;
}
