let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let teamsEl=document.getElementById("team-el")
let totalEl=document.getElementById("total-el")
let count = 0
let teams = 0
let total = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    if(count>0){
    teams += 1
    teamsEl.innerText=teams

    total += count
    totalEl.innerText= total
    
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0}
}
