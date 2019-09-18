onNet('s_onPlayerSpawn', () => {
    console.log('s_onPlayerSpawn event fired!');
    const source = global.source;

    console.log(GetPlayerName(source));
});