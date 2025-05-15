const UPGRADEDATA = [{
        // level: new Decimal("0"),
        baseCost: new Decimal("10"),
        // cost: new Decimal("10"),
        increase: new Decimal("5"),
        // base: new Decimal("2"),
        // effect: new Decimal("1"),
        maxLevel: new Decimal("1000"),

    },
    {
        baseCost: new Decimal("100"),
        increase: new Decimal("10"),
        maxLevel: new Decimal("1000"),

    },
    {
        baseCost: new Decimal("500"),
        increase: new Decimal("7.5"),
        maxLevel: new Decimal("1000"),
    },
]

const AURAUPGRADEDATA = [{
        baseCost: new Decimal("1"),
        increase: new Decimal("5"),
    },
    {
        baseCost: new Decimal("10"),
        increase: new Decimal("250"),
        maxLevel: new Decimal("5"),
    },
    {
        baseCost: new Decimal("35000"),
        increase: new Decimal("1000"),
        maxLevel: new Decimal("1"),
    },
    {
        baseCost: new Decimal("1e20"),
        increase: new Decimal("1000"),
        maxLevel: new Decimal("1"),
    },
    {
        baseCost: new Decimal("1e50"),
        increase: new Decimal("1000"),
        maxLevel: new Decimal("1"),
    },
]

const EXPONENTIAUPGRADEDATA = [{
        baseCost: new Decimal("1e1000"),
        increase: new Decimal("1e100"),
        maxLevel: new Decimal("1"),
    },
    {

        baseCost: new Decimal("1e50"),
        increase: new Decimal("1e75"),
    },
    {
        baseCost: new Decimal("1e100"),
        increase: new Decimal("1e400"),
        maxLevel: new Decimal("4"),
    },
    {
        baseCost: new Decimal("1e300"),
        increase: new Decimal("1e350"),
        maxLevel: new Decimal("4"),

    },
    {
        baseCost: new Decimal("1e1200"),
        increase: new Decimal("1e10000"),
        maxLevel: new Decimal("1"),
    },
    {
        baseCost: new Decimal("1e1500"),
        increase: new Decimal("1e10000"),
        maxLevel: new Decimal("1"),
    },

]

const CONSONANCEUPGRADEDATA = [{
        baseCost: new Decimal("1"),
        increase: new Decimal("3"),
        maxLevel: new Decimal("5"),
    },
    {
        baseCost: new Decimal("1"),
        increase: new Decimal("1000"),
        maxLevel: new Decimal("1"),
    },
    {
        baseCost: new Decimal("3"),
        increase: new Decimal("4"),
        maxLevel: new Decimal("5"),
    },
    {
        baseCost: new Decimal("50"),
        increase: new Decimal("1000"),
        maxLevel: new Decimal("1"),
    },
    {
        baseCost: new Decimal("1e40000"),
        increase: new Decimal("1e40000"),
        maxLevel: new Decimal("1"),
    },
]

function buyUpgrade(index) {
    let u = player.upgrades
    
    if (Decimal.lt(player.flux, u[index].cost)) {
        return "no"
    } else {
        if (UPGRADEDATA[index].maxLevel) {
            if (Decimal.gte(u[index].level, UPGRADEDATA[index].maxLevel)) {
                return "no"
            }
        }
        player.flux = Decimal.minus(player.flux, u[index].cost)
        u[index].cost = upgradePriceCalc(u[index].level, index, "flux")
        u[index].level = Decimal.add(u[index].level, "1")
        return "yes"
    }
}

function buyMaxFlux() {
    let n = "yes"
    let arr = ["yes", "yes", "yes"]
    let idx = 0
    while (arr.filter(element => element === "yes").length > 0) {
        n = buyUpgrade(idx)
        arr.unshift(n)
        if (arr.length >= 3) {
            arr.pop()
        }
        if (idx == 2) {
            idx = 0
        } else {
            idx++
        }
    }
}

function buyAuraUpgrade(index) {
    let u = player.auraUpgrades
    if (Decimal.lt(player.aura, u[index].cost)) {
        return "no"
    } else {
        if (AURAUPGRADEDATA[index].maxLevel) {
            if (Decimal.gte(u[index].level, AURAUPGRADEDATA[index].maxLevel)) {
                return "no"
            }
        }
        player.aura = Decimal.minus(player.aura, u[index].cost)

        u[index].cost = upgradePriceCalc(u[index].level, index, "aura")
        u[index].level = Decimal.add(u[index].level, "1")
        if (index == 1) {
            setTimeout(() => {
                player.upgrades[0].cost = costRescale(player.upgrades[0].level, 0, "flux")
                player.upgrades[1].cost = costRescale(player.upgrades[1].level, 1, "flux")
                player.upgrades[2].cost = costRescale(player.upgrades[2].level, 2, "flux")

            }, 1000 / 20);
        }
        return "yes"
    }
}

function buyMaxAura() {
    let n = "yes"
    let arr = ["yes", "yes", "yes"]
    let idx = 0
    while (arr.filter(element => element === "yes").length > 0) {
        n = buyAuraUpgrade(idx)
        arr.unshift(n)
        if (arr.length >= 3) {
            arr.pop()
        }
        if (idx == 2) {
            idx = 0
        } else {
            idx++
        }
    }
}


function buyExponentiaUpgrade(index) {
    let u = player.exponentiaUpgrades
    if (Decimal.lt(player.exponentia, u[index].cost)) {
        return "no"
    } else {
        player.exponentia = new Decimal("2")
        u[index].cost = upgradePriceCalc(u[index].level, index, "exponentia")
        u[index].level = Decimal.add(u[index].level, "1")
        return "yes"
    }
}

function buyConsonanceUpgrade(index) {
    let u = player.consonanceUpgrades
    if (Decimal.lt(player.consonance, u[index].cost)) {
        return "no"
    } else {
        player.consonance = Decimal.minus(player.consonance, u[index].cost)
        u[index].cost = upgradePriceCalc(u[index].level, index, "consonance")
        u[index].level = Decimal.add(u[index].level, "1")
        return "yes"
    }
}

function upgradePriceCalc(n, index, cur) {
    let u
    let ud
    let s
    let e
    let c
    if (cur == "flux") {
        s = player.upgradeCostScaling
        u = player.upgrades
        ud = UPGRADEDATA
        e = new Decimal("0.015")
    }
    if (cur == "aura") {
        s = player.auraUpgradeCostScaling
        u = player.auraUpgrades
        ud = AURAUPGRADEDATA
        e = new Decimal("0.23")
    }
    if (cur == "exponentia") {
        s = player.exponentiaCostScaling
        u = player.exponentiaUpgrades
        ud = EXPONENTIAUPGRADEDATA
        e = new Decimal("1e200")
        if (index == 0) {
            c = Decimal.times(ud[index].baseCost,Decimal.pow("1e100",ud[index].level))
            return c
        }
    }
    if (cur == "consonance") {
        s = player.consonanceUpgradeCostScaling
        u = player.consonanceUpgrades
        ud = CONSONANCEUPGRADEDATA
        e = new Decimal("0.3")
    }
    c = u[index].cost
    // c = ud[index].baseCost
    // for (let i = 0; i < n; i++) {
    //     c = Decimal.times(c, Decimal.times(Decimal.times(ud[index].increase, s), Decimal.add(Decimal.floor(Decimal.times(e, (Decimal.pow(i, "2")))), "1")))
    //     // if(cur=="flux"){
    //     //     c = Decimal.times(c, Decimal.times(Decimal.times(ud[index].increase, s), Decimal.add(Decimal.floor(Decimal.times(Decimal.times(e,"1e-1000"), (Decimal.pow(i, "2")))), "1")))
    //     // }
    // }
    if (Decimal.lt(n, "0")) {
        c = ud[index].baseCost
    } else {
        c = Decimal.times(c, Decimal.times(Decimal.times(ud[index].increase, s), Decimal.add(Decimal.floor(Decimal.times(e, (Decimal.pow(n, "2")))), "1")))
    }
    return c
}

function costRescale(n, index, cur) {
    let u
    let ud
    let s
    let e
    if (cur == "flux") {
        s = player.upgradeCostScaling
        u = player.upgrades
        ud = UPGRADEDATA
        e = new Decimal("0.015")
    }
    if (cur == "aura") {
        s = player.auraUpgradeCostScaling
        u = player.auraUpgrades
        ud = AURAUPGRADEDATA
        e = new Decimal("0.23")
    }
    if (cur == "exponentia") {
        s = player.exponentiaCostScaling
        u = player.exponentiaUpgrades
        ud = EXPONENTIAUPGRADEDATA
        e = new Decimal("1e200")
        if (index == 0) {
            c = player.exponentiaCap
            return c
        }
    }
    if (cur == "consonance") {
        s = player.consonanceUpgradeCostScaling
        u = player.consonanceUpgrades
        ud = CONSONANCEUPGRADEDATA
        e = new Decimal("0.3")
    }
    let c = u[index].cost
    c = ud[index].baseCost
    for (let i = 0; i < n; i++) {
        c = Decimal.times(c, Decimal.times(Decimal.times(ud[index].increase, s), Decimal.add(Decimal.floor(Decimal.times(e, (Decimal.pow(i, "2")))), "1")))
    }
    // if (Decimal.lt(n,"0")){
    //     c = ud[index].baseCost
    // } else {
    //     c = Decimal.times(c, Decimal.times(Decimal.times(ud[index].increase, s), Decimal.add(Decimal.floor(Decimal.times(e, (Decimal.pow(n, "2")))), "1")))
    // }
    return c
}