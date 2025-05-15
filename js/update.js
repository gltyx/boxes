devspeed = 1

setInterval(() => {
    let u = player.upgrades
    let au = player.auraUpgrades
    let eu = player.exponentiaUpgrades
    let cu = player.consonanceUpgrades

    let dt = (Date.now() - player.lastTick) / (1000 / devspeed);
    player.lastTick = Date.now();
    // Unlocks
    if (Decimal.gte(player.flux, "1e40")) {
        player.unlockedAura = true
    }
    if (Decimal.gte(player.aura, "1")) {
        player.unlockedBuyMaxFlux = true
    }
    if (Decimal.gte(au[3].level, "1")) {
        player.unlockedExponentia = true
    }
    if (Decimal.gte(player.aura, "1e400")) {
        player.unlockedConsonance = true
    }
    if (Decimal.gte(player.consonance, "1")) {
        player.unlockedBuyMaxAura = true
    }
    // Currency Income
    player.fluxIncome = Decimal.pow(Decimal.times(player.fluxBase, player.fluxMulti), eu[3].effect)
    player.flux = Decimal.add(player.flux, Decimal.times(player.fluxIncome, dt))

    if (Decimal.gte(eu[4].level, "1")) {
        player.auraIncome = player.potentialAura
        player.aura = Decimal.add(player.aura, Decimal.times(player.potentialAura, dt))
    } else {
        player.auraIncome = new Decimal("0")
    }

    if (Decimal.lt(player.exponentia, player.exponentiaCap)) {
        if (Decimal.gt(player.exponentiaExponent, "1")) {
            player.exponentia = Decimal.add(player.exponentia, Decimal.times(Decimal.minus(Decimal.pow(player.exponentia, player.exponentiaExponent), "1"), dt))
            if (Decimal.gte(Decimal.add(player.exponentia, Decimal.times(Decimal.minus(Decimal.pow(player.exponentia, player.exponentiaExponent), "1"), dt)), player.exponentiaCap)) {
                player.exponentia = player.exponentiaCap
            }
        }
    } else {
        player.exponentia = player.exponentiaCap
    }


    // Multis
    player.fluxMultis[0] = u[0].effect
    player.fluxMultis[1] = au[0].effect
    player.fluxMultis[2] = au[2].effect
    player.fluxMultis[3] = cu[0].effect
    player.fluxMultis[4] = cu[3].effect
    player.fluxMultis[5] = player.restartMultiplier

    player.fluxMulti = player.fluxMultis.reduce((a, b) => Decimal.times(a, b))

    player.auraMultis[0] = cu[0].effect
    player.auraMultis[1] = player.restartMultiplier

    player.auraMulti = player.auraMultis.reduce((a, b) => Decimal.times(a, b))

    // Upgrade Costs
    // for (let i = 0; i < u.length; i++) {

    //     u[i].cost = upgradePriceCalc(u[i].level, i, "flux")

    // }
    // for (let i = 0; i < au.length; i++) {
    //     au[i].cost = upgradePriceCalc(au[i].level, i, "aura")
    // }
    // for (let i = 0; i < eu.length; i++) {
    //     eu[i].cost = upgradePriceCalc(eu[i].level, i, "exponentia")
    // }

    // for (let i = 0; i < cu.length; i++) {
    //     cu[i].cost = upgradePriceCalc(cu[i].level, i, "consonance")
    // }
    // Upgrades
    u[0].effect = Decimal.pow(u[0].base, u[0].level)
    u[1].effect = Decimal.times(u[1].base, u[1].level)
    u[0].base = Decimal.add("2", u[1].effect)
    u[2].effect = Decimal.pow(Decimal.times(u[2].base, u[2].level), eu[2].effect)
    player.fluxBase = Decimal.add("1", u[2].effect)
    // Aura Upgrades
    au[0].effect = Decimal.pow(au[0].base, au[0].level)
    au[1].effect = Decimal.pow(au[1].base, au[1].level)
    if (Decimal.lt(au[2].level, "1")) {
        au[2].effect = new Decimal("1")
    } else {
        au[2].effect = player.aura
    }
    player.upgradeCostScaling = Decimal.divide("1", au[1].effect)
    if (Decimal.gte(au[3].level, "1")) {
        player.exponentiaExponent = Decimal.add("1",Decimal.times("0.0005",player.restartMultiplier))
    }
    if (Decimal.gte(au[4].level, "1") && consonancePrestiging == false) {
        buyUpgrade(0)
        buyUpgrade(1)
        buyUpgrade(2)
    }
    // Exponentia Upgrades
    eu[0].effect = Decimal.pow(eu[0].base, eu[0].level)
    if (Decimal.gte(eu[5].level, "1")) {
        player.exponentiaCap = new Decimal("10^^307")
    } else {
        player.exponentiaCap = Decimal.times("1e1000", eu[0].effect)
    }
    eu[1].effect = Decimal.times(eu[1].base, eu[1].level)
    player.exponentiaExponent = Decimal.times(Decimal.times(Decimal.add(player.exponentiaExponent, eu[1].effect), cu[1].effect),player.restartMultiplier)
    eu[2].effect = Decimal.add("1", Decimal.times(eu[2].base, eu[2].level))
    eu[3].effect = Decimal.add("1", Decimal.times(eu[3].base, eu[3].level))

    //Consonance Upgrades
    cu[0].effect = Decimal.pow(cu[0].base, cu[0].level)
    if (Decimal.gte(cu[1].level, "1")) {
        cu[1].effect = Decimal.pow(Decimal.add(player.aura, "1"), "0.001")
    } else {
        cu[1].effect = new Decimal("1")
    }
    cu[2].effect = Decimal.times(cu[2].base, cu[2].level)
    eu[0].maxLevelT = cu[2].effect
    if (Decimal.gte(cu[3].level, "1")) {
        cu[3].effect = Decimal.pow(Decimal.log2(Decimal.add(player.exponentia, 1)), "10")
    } else {
        cu[3].effect = new Decimal("1")
    }

    // Prestiges
    player.potentialAura = Decimal.floor(Decimal.times(Decimal.pow(Decimal.divide(player.flux, "1e40"), "0.1"), player.auraMulti))
    player.potentialConsonance = Decimal.floor(Decimal.times(Decimal.pow(Decimal.divide(player.aura, "1e400"), "0.0301"),player.restartMultiplier))

}, 1000 / 30);