// fire an event to the server so that the server knows the client has spawned
on('playerSpawned', () => {
    emitNet('s_onPlayerSpawn');
    console.log('playerSpawned event fired!');
});