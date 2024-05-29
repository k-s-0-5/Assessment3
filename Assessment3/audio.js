function playAudio(letter) {
    const audio = new Audio()
    audio.src = `/Alphabet/${letter}.mp3`
    audio.play()
}

