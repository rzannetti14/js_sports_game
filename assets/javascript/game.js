const resetButton =document.querySelector ('#reset-button')
const numreset = document.querySelector('#num-resets')
const teamonenumshots =document.querySelector('#teamone-numshots')
const teamonenumgoals = document.querySelector('#teamone-numgoals')
const teamtwonumshots =document.querySelector('#teamtwo-numshots')
const teamtwonumgoals = document.querySelector('#teamtwo-numgoals')
const teamoneshootbutton = document.querySelector ('#teamone-shoot-button')
const teamtwoshootbutton = document.querySelector ('#teamtwo-shoot-button')

let t1shots = 0
let t1goals = 0
let t2shots = 0
let t2goals = 0
let NR = 0

teamoneshootbutton.addEventListener('click',function() {
    teamonenumshots.innerHTML = t1shots +=1
    if (Math.random() <0.5) {
        teamonenumgoals.innerHTML = t1goals +=1
    }
})

teamtwoshootbutton.addEventListener('click',function(){
    teamtwonumshots.innerHTML = t2shots += 1
    if (Math.random() <0.5) {
        teamtwonumgoals.innerHTML =t2goals +=1
    }
})

resetButton.addEventListener('click',function() {
    teamonenumgoals.innerHTML = t1goals =0
    teamonenumshots.innerHTML = t1shots =0
    teamtwonumshots.innerHTML =t2shots =0
    teamtwonumgoals.innerHTML = t2goals =0
    numreset.innerHTML = NR += 1
})