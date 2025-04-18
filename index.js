let fighters = [
    "🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩",
    "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆","🦕",
    "🦁"
]

let stageEl = document.getElementById("stage");
let pickFightersEl = document.getElementById("pick-fighters");

pickFightersEl.addEventListener("click", function(){
    let randomFightersOne = Math.floor(Math.random() * fighters.length);
    let randomFightersTwo = Math.floor(Math.random() * fighters.length);
    

    stageEl.textContent = fighters[randomFightersOne] + "VS" + fighters[randomFightersTwo];
})