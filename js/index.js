window.addEventListener('load', () => {

    let move = document.querySelector('.moveCommentaires')
    let up = document.querySelector('.fa-chevron-up')
    let down = document.querySelector('.fa-chevron-down')
    let count = move.childElementCount
    let i = 0
    let countDiv = document.querySelector('.count')
    countDiv.innerHTML = i + 1 + " / " + count

    up.addEventListener('click', event => {
        if (i + 1 >= count) {
            return
        }
        i++
        move.style.transform = "translateY(-" + (245 * i) + "px)"
        countDiv.innerHTML = i + 1 + " / " + count
    })

    down.addEventListener('click', event => {
        if (i <= 0) {
            return
        }
        i--
        move.style.transform = "translateY(-" + (245 * i) + "px)"
        countDiv.innerHTML = i + 1 + " / " + count
    })

});