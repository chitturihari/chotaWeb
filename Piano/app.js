const whiteKeys = Array.from(document.querySelectorAll(".white-key")); // converting node list into array
const blackKeys = Array.from(document.querySelectorAll(".black-key"));
const volumeSlider = document.getElementById("volume-range");

whiteKeys.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`)
    element.addEventListener("mousemove", () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
    element.addEventListener("click", () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
})

blackKeys.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`)
    element.addEventListener('mousemove', () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
})

document.addEventListener("keydown", (e) => {
    blackKeys.forEach((element) => {
        if (element.id == e.key) {
            element.click()
            element.classList.add('active-black')
            setTimeout(() => {
                element.classList.remove('active-black')
            }, 150)
        }
    })
    
    whiteKeys.forEach((element) => {
        if (element.id == e.key) {
            element.click()
            element.classList.add('active-white')
            setTimeout(() => {
                element.classList.remove('active-white')
            }, 150)
        }
    })
})