const songs = ['world', 'peter', 'dancing', 'shanty', 'nights', 'wellerman']

songs.forEach(song => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = song
    
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(song).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    songs.forEach(song => {
        const songStop = document.getElementById(song);

        songStop.pause()
        songStop.currentTime = 0;
    })
}