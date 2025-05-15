function reset() {
    player = {
        lastTick: Date.now(),
        // Options
        lineBreaksOn: false,
        // Unlocks
        unlockedAura: false,
        unlockedBuyMaxFlux: false,
        unlockedExponentia: false,
        unlockedConsonance: false,
        unlockedBuyMaxAura: false,
        // Currencies
        flux: new Decimal("0"),
        fluxBase: new Decimal("1"),
        fluxIncome: new Decimal("1"),
        fluxMulti: new Decimal("1"),
        fluxMultis: [
            new Decimal("1"), // upgrade 0
            new Decimal("1"), // aura upgrade 0
            new Decimal("1"), // aura upgrade 2
            new Decimal("1"), // consonance upgrade 0
        ],
        aura: new Decimal("0"),
        potentialAura: new Decimal("0"),
        auraIncome: new Decimal("0"),
        auraMulti: new Decimal("1"),
        auraMultis: [
            new Decimal("1") // consonance upgrade 0
        ],
        exponentia: new Decimal("2"),
        exponentiaCap: new Decimal("1e1000"),
        exponentiaExponent: new Decimal("1"),
        consonance: new Decimal("0"),
        potentialConsonance: new Decimal("0"),

        // Upgrades
        upgradeCostScaling: new Decimal("1"),
        upgrades: [{
                level: new Decimal("0"),
                cost: new Decimal("10"),
                base: new Decimal("2"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("100"),
                base: new Decimal("0.5"),
                effect: new Decimal("0"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("500"),
                base: new Decimal("1"),
                effect: new Decimal("0"),
            },
        ],
        auraUpgradeCostScaling: new Decimal("1"),
        auraUpgrades: [{
                level: new Decimal("0"),
                cost: new Decimal("1"),
                base: new Decimal("5"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("10"),
                base: new Decimal("1.1"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("50000"),
                base: null,
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e20"),
                base: null,
                effect: null,
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e50"),
                base: null,
                effect: null,
            },
        ],
        exponentiaCostScaling: new Decimal("1"),
        exponentiaUpgrades: [{
                level: new Decimal("0"),
                cost: new Decimal("1e1000"),
                base: new Decimal("1e100"),
                effect: new Decimal("1"),
                maxLevelT: new Decimal("0"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e50"),
                base: new Decimal("0.0085"),
                effect: new Decimal("0"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e100"),
                base: new Decimal("8.5"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e300"),
                base: new Decimal("0.123"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e1200"),
                base: null,
                effect: null,
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e1500"),
                base: new Decimal("1"),
                effect: new Decimal("1"),
            },
            
        ],
        consonanceUpgradeCostScaling: new Decimal("1"),
        consonanceUpgrades: [{
                level: new Decimal("0"),
                cost: new Decimal("1"),
                base: new Decimal("1000000"),
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1"),
                base: null,
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("3"),
                base: new Decimal("1"),
                effect: new Decimal("0"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("50"),
                base: null,
                effect: new Decimal("1"),
            },
            {
                level: new Decimal("0"),
                cost: new Decimal("1e40000"),
                base: null,
                effect: null,
            },

        ],
        restartMultiplier: new Decimal("1"),
    }
}

function finishGame() {
    devspeed = 0
    document.getElementById("finish-window").classList.add("shown")
    setTimeout(() => {
        document.getElementById("finish-window").style.backgroundColor = "black"
    }, 500);
    document.getElementById("app").style.display = "none"
}

function replayGame() {
    document.getElementById("restart-button").style.pointerEvents = "none"
    restartPrestige()
    rehideUI()
    setTimeout(() => {
        document.getElementById("finish-window").classList.remove("shown")
        document.getElementById("finish-window").style.backgroundColor = "white"
        document.getElementById("app").style.display = "flex"
        document.getElementById("restart-button").style.pointerEvents = "auto"
        devspeed = 1
    }, 1000);
}

const PRESTIGEREQS = [new Decimal("1e40")]

var saveItemName = "boxes 2 save";

function save() {
    localStorage.setItem(saveItemName, btoa(JSON.stringify(player)));
}

// function load() {
//     reset()
//     var loadedSave = localStorage.getItem(saveItemName);
//     if (loadedSave === null) return;
//     decoded = JSON.parse(atob(loadedSave));
//     for (let item in decoded) player[item] = decoded[item]
// }

function load() {
    reset()
    let loadgame = JSON.parse(atob(localStorage.getItem("boxes 2 save")))
    if (loadgame != null) {
        loadGame(loadgame)
    } else {
        // document.getElementById("loadingScreenCover").style.display = "none"
    }
}

//load()

function loadGame(loadgame) {



    //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
    let loadKeys = Object.keys(loadgame);
    for (i = 0; i < loadKeys.length; i++) {
        if (loadgame[loadKeys[i]] != "undefined") {
            let thisKey = loadKeys[i];
            if (typeof loadgame[thisKey] == "string" && thisKey != "dragonName") {
                player[thisKey] = new Decimal(loadgame[thisKey])
            } else if (Array.isArray(loadgame[thisKey]) && player[loadKeys[i]]) { // If the value is an array and the corresponding key exists in the game object
                for (j = 0; j < loadgame[thisKey].length; j++) { // Iterate through the array elements
                    //if (typeof loadgame[thisKey][j] == "string" && !isNaN(parseFloat(loadgame[thisKey][j]))) { // If the array element is a string that can be converted to a Decimal, do so
                    if (typeof loadgame[thisKey][j] == "string") {
                        player[loadKeys[i]][j] = new Decimal(loadgame[thisKey][j])
                    } else { // Otherwise, copy the value directly
                        player[loadKeys[i]][j] = loadgame[thisKey][j]
                    }
                }
            }
            //else {game[Object.keys(game)[i]] = loadgame[loadKeys[i]]}
            else {
                player[loadKeys[i]] = loadgame[loadKeys[i]]
            }
        }
    }
}

function importSave() {
    let importedSave = prompt("Paste your save below.")
    if (importedSave && importedSave != null && importedSave != "") {
        localStorage.setItem(saveItemName, importedSave);
        location.reload()
    } else {
        alert("Not a valid save.")
    }
}

function hardReset() {
    if (confirm("Are you SURE you want to COMPLETELY RESET your save?")) {
        if (confirm("Like... /srs fr..???")) {
            reset()
            save()
            location.reload()
        }
    }
}

function exportSave() {
    save()
    navigator.clipboard.writeText(btoa(JSON.stringify(player))).then(function () {
        alert("Save exported to clipboard successfully.")
    }, function () {
        alert("Error exporting to clipboard.")
    });
}

setInterval(function () { // auto save
    save();
}, 15000);