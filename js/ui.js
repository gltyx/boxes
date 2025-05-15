// etc.
let breakers = document.querySelectorAll(".breaker")

// Currencies
let fluxValue = document.getElementById("flux-value")
let fluxRate = document.getElementById("flux-rate")
let fluxBuyMax = document.getElementById("flux-buy-max")

let auraValue = document.getElementById("aura-value")
let auraRate = document.getElementById("aura-rate")
let auraBuyMax = document.getElementById("aura-buy-max")


let consonanceValue = document.getElementById("consonance-value")
let consonanceRate = document.getElementById("consonance-rate")

let exponentiaValue = document.getElementById("exponentia-value")
let exponentiaRate = document.getElementById("exponentia-rate")
let exponentiaCurrencyRate = document.getElementById("exponentia-currency-rate")
let exponentiaCapped = document.getElementById("exponentia-capped")

// Prestiges
let auraGainDisplay = document.getElementById("aura-prestige-gain")
let consonanceGainDisplay = document.getElementById("consonance-prestige-gain")

// Boxes
let boxesDisplay = []
let boxesElem = document.querySelectorAll(".box")
boxesElem.forEach(box => {
    boxesDisplay.push(box)
});



// Upgrades
let upgradeBoxesDisplay = [
    document.getElementById("box-1"),
    document.getElementById("box-2"),
    document.getElementById("box-3"),
]

let upgradeCostsDisplay = [
    document.getElementById("upgrade-cost-0"),
    document.getElementById("upgrade-cost-1"),
    document.getElementById("upgrade-cost-2"),
]

let upgradeLevelsDisplay = [
    document.getElementById("upgrade-level-0"),
    document.getElementById("upgrade-level-1"),
    document.getElementById("upgrade-level-2"),

]

let upgradeBasesDisplay = [
    document.getElementById("upgrade-base-0"),
    document.getElementById("upgrade-base-1"),
    document.getElementById("upgrade-base-2"),

]

let upgradeEffectsDisplay = [
    document.getElementById("upgrade-effect-0"),
    document.getElementById("upgrade-effect-1"),
    document.getElementById("upgrade-effect-2"),
]

let upgradeMaxedDisplay = [
    document.getElementById("upgrade-maxed-0"),
    document.getElementById("upgrade-maxed-1"),
    document.getElementById("upgrade-maxed-2"),
]

let auraUpgradeBoxesDisplay = [
    document.getElementById("box-6"),
    document.getElementById("box-7"),
    document.getElementById("box-8"),
    document.getElementById("box-9"),
    document.getElementById("box-10"),
]

let auraUpgradeCostsDisplay = [
    document.getElementById("aura-upgrade-cost-0"),
    document.getElementById("aura-upgrade-cost-1"),
    document.getElementById("aura-upgrade-cost-2"),
    document.getElementById("aura-upgrade-cost-3"),
    document.getElementById("aura-upgrade-cost-4"),

]

let auraUpgradeLevelsDisplay = [
    document.getElementById("aura-upgrade-level-0"),
    document.getElementById("aura-upgrade-level-1"),
    document.getElementById("aura-upgrade-level-2"),
    document.getElementById("aura-upgrade-level-3"),
    document.getElementById("aura-upgrade-level-4"),

]

let auraUpgradeBasesDisplay = [
    document.getElementById("aura-upgrade-base-0"),
    document.getElementById("aura-upgrade-base-1"),
    null,
    null,
    null,

]

let auraUpgradeEffectsDisplay = [
    document.getElementById("aura-upgrade-effect-0"),
    document.getElementById("aura-upgrade-effect-1"),
    document.getElementById("aura-upgrade-effect-2"),
    document.getElementById("aura-upgrade-effect-3"),
    document.getElementById("aura-upgrade-effect-4"),

]

let auraMaxedDisplay = [
    null,
    document.getElementById("aura-maxed-1"),
    document.getElementById("aura-maxed-2"),
    document.getElementById("aura-maxed-3"),
    document.getElementById("aura-maxed-4"),

]

let exponentiaUpgradeBoxesDisplay = [
    document.getElementById("box-12"),
    document.getElementById("box-13"),
    document.getElementById("box-14"),
    document.getElementById("box-15"),
    document.getElementById("box-16"),
    document.getElementById("box-17"),
]

let exponentiaUpgradeCostsDisplay = [
    document.getElementById("exponentia-upgrade-cost-0"),
    document.getElementById("exponentia-upgrade-cost-1"),
    document.getElementById("exponentia-upgrade-cost-2"),
    document.getElementById("exponentia-upgrade-cost-3"),
    document.getElementById("exponentia-upgrade-cost-4"),
    document.getElementById("exponentia-upgrade-cost-5"),

]

let exponentiaUpgradeLevelsDisplay = [
    document.getElementById("exponentia-upgrade-level-0"),
    document.getElementById("exponentia-upgrade-level-1"),
    document.getElementById("exponentia-upgrade-level-2"),
    document.getElementById("exponentia-upgrade-level-3"),
    document.getElementById("exponentia-upgrade-level-4"),
    document.getElementById("exponentia-upgrade-level-5"),

]

let exponentiaUpgradeBasesDisplay = [
    document.getElementById("exponentia-upgrade-base-0"),
    document.getElementById("exponentia-upgrade-base-1"),
    document.getElementById("exponentia-upgrade-base-2"),
    document.getElementById("exponentia-upgrade-base-3"),
    null,
    document.getElementById("exponentia-upgrade-base-5"),

]

let exponentiaUpgradeEffectsDisplay = [
    document.getElementById("exponentia-upgrade-effect-0"),
    document.getElementById("exponentia-upgrade-effect-1"),
    document.getElementById("exponentia-upgrade-effect-2"),
    document.getElementById("exponentia-upgrade-effect-3"),
    null,
    document.getElementById("exponentia-upgrade-effect-5"),

]

let exponentiaMaxedDisplay = [
    document.getElementById("exponentia-maxed-0"),
    null,
    document.getElementById("exponentia-maxed-2"),
    document.getElementById("exponentia-maxed-3"),
    document.getElementById("exponentia-maxed-4"),
    document.getElementById("exponentia-maxed-5"),
]

let consonanceUpgradeBoxesDisplay = [
    document.getElementById("box-20"),
    document.getElementById("box-21"),
    document.getElementById("box-22"),
    document.getElementById("box-23"),
    document.getElementById("box-24"),

]

let consonanceUpgradeCostsDisplay = [
    document.getElementById("consonance-upgrade-cost-0"),
    document.getElementById("consonance-upgrade-cost-1"),
    document.getElementById("consonance-upgrade-cost-2"),
    document.getElementById("consonance-upgrade-cost-3"),
    document.getElementById("consonance-upgrade-cost-4"),

]

let consonanceUpgradeLevelsDisplay = [
    document.getElementById("consonance-upgrade-level-0"),
    document.getElementById("consonance-upgrade-level-1"),
    document.getElementById("consonance-upgrade-level-2"),
    document.getElementById("consonance-upgrade-level-3"),
    document.getElementById("consonance-upgrade-level-4"),

]

let consonanceUpgradeBasesDisplay = [
    document.getElementById("consonance-upgrade-base-0"),
    null,
    document.getElementById("consonance-upgrade-base-2"),
    null,
    null,

]

let consonanceUpgradeEffectsDisplay = [
    document.getElementById("consonance-upgrade-effect-0"),
    document.getElementById("consonance-upgrade-effect-1"),
    document.getElementById("consonance-upgrade-effect-2"),
    document.getElementById("consonance-upgrade-effect-3"),
    null,
]

let consonanceMaxedDisplay = [
    document.getElementById("consonance-maxed-0"),
    document.getElementById("consonance-maxed-1"),
    document.getElementById("consonance-maxed-2"),
    document.getElementById("consonance-maxed-3"),
    document.getElementById("consonance-maxed-4"),

]

let currentReplayMulti = document.getElementById("current-replay-multi")

let exponentiaTMax0 = document.getElementById("exponentia-tmax-level-0")


setInterval(() => {
    let p = player
    // Unlocks
    if (p.unlockedAura) {
        boxesDisplay[4].classList.remove("hidden")
        boxesDisplay[5].classList.remove("hidden")
    }
    if (p.unlockedBuyMaxFlux) {
        auraUpgradeBoxesDisplay.forEach(element => {
            element.classList.remove("hidden")
        });
        fluxBuyMax.classList.remove("hidden")
    }
    if (p.unlockedExponentia) {
        boxesDisplay[11].classList.remove("hidden")
        exponentiaUpgradeBoxesDisplay.forEach(element => {
            element.classList.remove("hidden")
        });
    }
    if (p.unlockedConsonance) {
        boxesDisplay[18].classList.remove("hidden")
        boxesDisplay[19].classList.remove("hidden")
    }
    if (p.unlockedBuyMaxAura) {
        consonanceUpgradeBoxesDisplay.forEach(element => {
            element.classList.remove("hidden")
        });
        auraBuyMax.classList.remove("hidden")
    }

    // Currencies
    fluxValue.textContent = formatWhole(p.flux, true)
    fluxRate.textContent = format(p.fluxIncome)

    auraValue.textContent = formatWhole(p.aura, true)
    auraRate.textContent = format(p.auraIncome)
    consonanceValue.textContent = formatWhole(p.consonance, true)
    consonanceRate.textContent = format(p.consonanceIncome)
    exponentiaValue.textContent = formatWhole(p.exponentia, true)
    exponentiaRate.textContent = format(p.exponentiaExponent, 4)
    if (Decimal.gte(player.exponentia, player.exponentiaCap)) {
        exponentiaCurrencyRate.classList.add("hidden")
        exponentiaCapped.classList.remove("hidden")
    } else {
        exponentiaCurrencyRate.classList.remove("hidden")
        exponentiaCapped.classList.add("hidden")
    }
    // Prestiges
    auraGainDisplay.textContent = format(p.potentialAura)
    if (Decimal.gt(p.potentialAura, "0")) {
        boxesDisplay[5].classList.add("can-prestige")
    } else {
        boxesDisplay[5].classList.remove("can-prestige")
    }

    consonanceGainDisplay.textContent = format(p.potentialConsonance)
    if (Decimal.gt(p.potentialConsonance, "0")) {
        boxesDisplay[19].classList.add("can-prestige")
    } else {
        boxesDisplay[19].classList.remove("can-prestige")
    }
    // Upgrades
    for (let i = 0; i < upgradeBoxesDisplay.length; i++) {
        if (Decimal.gte(p.flux, p.upgrades[i].cost)) {
            upgradeBoxesDisplay[i].classList.add("can-buy")
        } else {
            upgradeBoxesDisplay[i].classList.remove("can-buy")
        }
        upgradeCostsDisplay[i].textContent = formatWhole(p.upgrades[i].cost, true)
        upgradeLevelsDisplay[i].textContent = formatWhole(p.upgrades[i].level, true)
        upgradeBasesDisplay[i].textContent = format(p.upgrades[i].base)
        upgradeEffectsDisplay[i].textContent = format(p.upgrades[i].effect)
        if (UPGRADEDATA[i].maxLevel) {
            if (Decimal.gte(p.upgrades[i].level, UPGRADEDATA[i].maxLevel)) {
                upgradeBoxesDisplay[i].classList.add("maxed")
                upgradeMaxedDisplay[i].classList.add("invisible")
            } else {
                upgradeBoxesDisplay[i].classList.remove("maxed")
                upgradeMaxedDisplay[i].classList.remove("invisible")
            }
        }
    }

    for (let i = 0; i < auraUpgradeBoxesDisplay.length; i++) {
        if (Decimal.gte(p.aura, p.auraUpgrades[i].cost)) {
            auraUpgradeBoxesDisplay[i].classList.add("can-buy")
        } else {
            auraUpgradeBoxesDisplay[i].classList.remove("can-buy")
        }
        auraUpgradeCostsDisplay[i].textContent = formatWhole(p.auraUpgrades[i].cost, true)
        auraUpgradeLevelsDisplay[i].textContent = formatWhole(p.auraUpgrades[i].level, true)
        if (auraUpgradeBasesDisplay[i]) {
            auraUpgradeBasesDisplay[i].textContent = format(p.auraUpgrades[i].base)
        }
        if (auraUpgradeEffectsDisplay[i]) {
            auraUpgradeEffectsDisplay[i].textContent = format(p.auraUpgrades[i].effect)
        }
    }

    for (let i = 0; i < p.auraUpgrades.length; i++) {
        if (AURAUPGRADEDATA[i].maxLevel) {
            if (Decimal.gte(p.auraUpgrades[i].level, AURAUPGRADEDATA[i].maxLevel)) {
                auraUpgradeBoxesDisplay[i].classList.add("maxed")
                auraMaxedDisplay[i].classList.add("invisible")
            } else {
                auraUpgradeBoxesDisplay[i].classList.remove("maxed")
                auraMaxedDisplay[i].classList.remove("invisible")
            }
        }
    }



    for (let i = 0; i < exponentiaUpgradeBoxesDisplay.length; i++) {
        if (Decimal.gte(p.exponentia, p.exponentiaUpgrades[i].cost)) {
            exponentiaUpgradeBoxesDisplay[i].classList.add("can-buy")
        } else {
            exponentiaUpgradeBoxesDisplay[i].classList.remove("can-buy")
        }
        exponentiaUpgradeCostsDisplay[i].textContent = formatWhole(p.exponentiaUpgrades[i].cost, true)
        exponentiaUpgradeLevelsDisplay[i].textContent = formatWhole(p.exponentiaUpgrades[i].level, true)
        if (i == 1) {
            exponentiaUpgradeBasesDisplay[i].textContent = format(p.exponentiaUpgrades[i].base, 4)
            exponentiaUpgradeEffectsDisplay[i].textContent = format(p.exponentiaUpgrades[i].effect, 4)

        } else if (i == 3) {
            exponentiaUpgradeBasesDisplay[i].textContent = format(p.exponentiaUpgrades[i].base, 3)
            exponentiaUpgradeEffectsDisplay[i].textContent = format(p.exponentiaUpgrades[i].effect, 3)
        } else {
            if (exponentiaUpgradeBasesDisplay[i]) {
                exponentiaUpgradeBasesDisplay[i].textContent = format(p.exponentiaUpgrades[i].base)
            }
            if (exponentiaUpgradeEffectsDisplay[i]) {
                exponentiaUpgradeEffectsDisplay[i].textContent = format(p.exponentiaUpgrades[i].effect)
            }

        }

        for (let i = 0; i < p.exponentiaUpgrades.length; i++) {
            if (EXPONENTIAUPGRADEDATA[i].maxLevel) {
                if (Decimal.gte(p.exponentiaUpgrades[i].level, EXPONENTIAUPGRADEDATA[i].maxLevel)) {
                    exponentiaUpgradeBoxesDisplay[i].classList.add("maxed")
                    exponentiaMaxedDisplay[i].classList.add("invisible")
                } else {
                    exponentiaUpgradeBoxesDisplay[i].classList.remove("maxed")
                    exponentiaMaxedDisplay[i].classList.remove("invisible")
                }
            }
        }
        if (Decimal.gte(p.exponentiaUpgrades[0].level, p.exponentiaUpgrades[0].maxLevelT)) {
            exponentiaUpgradeBoxesDisplay[0].classList.add("maxed")
            exponentiaMaxedDisplay[0].classList.add("invisible")
        } else {
            exponentiaUpgradeBoxesDisplay[0].classList.remove("maxed")
            exponentiaMaxedDisplay[0].classList.remove("invisible")

        }


        exponentiaTMax0.textContent = p.exponentiaUpgrades[0].maxLevelT
    }

    for (let i = 0; i < consonanceUpgradeBoxesDisplay.length; i++) {
        if (Decimal.gte(p.consonance, p.consonanceUpgrades[i].cost)) {
            consonanceUpgradeBoxesDisplay[i].classList.add("can-buy")
        } else {
            consonanceUpgradeBoxesDisplay[i].classList.remove("can-buy")
        }
        consonanceUpgradeCostsDisplay[i].textContent = formatWhole(p.consonanceUpgrades[i].cost, true)
        consonanceUpgradeLevelsDisplay[i].textContent = formatWhole(p.consonanceUpgrades[i].level, true)
        if (consonanceUpgradeBasesDisplay[i]) {
            consonanceUpgradeBasesDisplay[i].textContent = format(p.consonanceUpgrades[i].base)
        }
        if (consonanceUpgradeEffectsDisplay[i]) {
            consonanceUpgradeEffectsDisplay[i].textContent = format(p.consonanceUpgrades[i].effect)
        }
    }

    for (let i = 0; i < p.consonanceUpgrades.length; i++) {
        if (CONSONANCEUPGRADEDATA[i].maxLevel) {
            if (Decimal.gte(p.consonanceUpgrades[i].level, CONSONANCEUPGRADEDATA[i].maxLevel)) {
                consonanceUpgradeBoxesDisplay[i].classList.add("maxed")
                consonanceMaxedDisplay[i].classList.add("invisible")
            } else {
                consonanceUpgradeBoxesDisplay[i].classList.remove("maxed")
                consonanceMaxedDisplay[i].classList.remove("invisible")
            }
        }
    }

    // Options
    if (player.lineBreaksOn) {
        breakers.forEach(brk => {
            brk.classList.add("breaker-activated")
        });
    } else {
        breakers.forEach(brk => {
            brk.classList.remove("breaker-activated")
        });
    }

    currentReplayMulti.textContent = "Current replay multiplier: " + formatWhole(player.restartMultiplier, true) + "x"
}, 1000 / 30);

function rehideUI() {
    boxesDisplay[4].classList.add("hidden")
    boxesDisplay[5].classList.add("hidden")
    auraUpgradeBoxesDisplay.forEach(element => {
        element.classList.add("hidden")
    });
    fluxBuyMax.classList.add("hidden")
    boxesDisplay[11].classList.add("hidden")
    exponentiaUpgradeBoxesDisplay.forEach(element => {
        element.classList.add("hidden")
    });
    boxesDisplay[18].classList.add("hidden")
    boxesDisplay[19].classList.add("hidden")
    consonanceUpgradeBoxesDisplay.forEach(element => {
        element.classList.add("hidden")
    });
    auraBuyMax.classList.add("hidden")
}