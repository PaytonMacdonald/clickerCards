let cherry = 0;
let pickPower = 1;
let cherryPickers = 0;
let cherryValue = 1;
let money = 0;
let cherryPickersSpeed = 1;
let time = 5000;
let marketPrice = 1;

// LOGIC
function getCherry() {
    cherry += pickPower
    drawCherry()
}
function sellCherry() {
    money += (cherry * cherryValue)
    cherry -= cherry
    drawCherry()
    drawMoney()
}

// UPGRADES
function upgradePickPower() {
    pickPower++
    drawPickPower()
}
function upgradeCherryValue() {
    cherryValue++
    drawCherryValue()
}
function upgradeCherryPickers() {
    cherryPickers++
    drawCherryPickers()
}
function upgradeCherryPickersSpeed() {
    time *= 0.9
    console.log(time)
    cherryPickersSpeed++
    drawCherryPickersSpeed()
    clearInterval(autoCherry)
    autoCherry = setInterval(
        function autoMake() {
            cherry += cherryPickers
            drawCherry()
        }, time)
}

//AUTOMATIONS
let autoCherry = setInterval(
    function autoMake() {
        cherry += cherryPickers
        drawCherry()
    }, time)

// DRAWS
function drawCherry() {
    document.getElementById('cherry').innerText = cherry
}
function drawMoney() {
    document.getElementById('money').innerText = money
}
function drawPickPower() {
    document.getElementById('pickPower').innerText = pickPower
}
function drawCherryValue() {
    document.getElementById('cherryValue').innerText = cherryValue
}
function drawCherryPickers() {
    document.getElementById('cherryPickers').innerText = cherryPickers
}
function drawCherryPickersSpeed() {
    document.getElementById('cherryPickersSpeed').innerText = cherryPickersSpeed
}

// MARKET
let marketTimer = setInterval(
    function marketNum() {
        let marketRNG = Math.floor((Math.random() * 7) + 1);
        if (marketRNG > marketPrice) { highPriceDraw() }
        if (marketRNG < marketPrice) { lowPriceDraw() }
        if (marketRNG == marketPrice) { noChangeDraw() }
        marketPrice = marketRNG
        marketPriceDraw()
    }, 3000)
function marketPriceDraw() {
    document.getElementById('marketPrice').innerHTML = `<span>$${marketPrice}.00</span>`
}
function highPriceDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="bi bi-arrow-up-circle-fill text-success"></i>`
}
function lowPriceDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="bi bi-arrow-down-circle-fill text-danger"></i>`
}
function noChangeDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="bi bi-dash-circle-fill text-dark"></i>`
}