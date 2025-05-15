let consonancePrestiging = false

function auraPrestige() {
    let p = player

    if (Decimal.lte(p.potentialAura, "0")) return
    p.aura = Decimal.add(p.aura, p.potentialAura)
    if (Decimal.gte(p.auraUpgrades[4].level, "1")) {

    } else {
        p.upgrades = [{
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
        ]
    }

    p.fluxMulti = new Decimal("1")
    p.fluxIncome = new Decimal("0")
    p.flux = new Decimal("0")
}

function consonancePrestige() {
    let p = player
    consonancePrestiging = true

    let eu4l = player.exponentiaUpgrades[4].level
    let eu5l = player.exponentiaUpgrades[5].level


    if (Decimal.lte(p.potentialConsonance, "0")) return
    p.consonance = Decimal.add(p.consonance, p.potentialConsonance)
    p.exponentiaUpgrades = [
        {
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
            base: new Decimal("1"),
            effect: new Decimal("1"),
        },
        {
            level: new Decimal("0"),
            cost: new Decimal("1e1500"),
            base: new Decimal("1"),
            effect: new Decimal("1"),
        },
    ]
    if (Decimal.gte(eu4l, "1")) {
        player.exponentiaUpgrades[4] = {
            level: new Decimal("1"),
            cost: new Decimal("1e1200"),
            base: new Decimal("1"),
            effect: new Decimal("1"),
        }
    }
    if (Decimal.gte(eu5l, "1")) {
        player.exponentiaUpgrades[5] = {
            level: new Decimal("1"),
            cost: new Decimal("1e1500"),
            base: new Decimal("1"),
            effect: new Decimal("1"),
        }
        player.exponentiaUpgrades[0].level = new Decimal("5")
    }
    p.auraUpgrades = [
        {
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
            level: new Decimal("1"),
            cost: new Decimal("1e20"),
            base: null,
            effect: null,
        },
        {
            level: new Decimal("1"),
            cost: new Decimal("1e50"),
            base: null,
            effect: null,
        },
    ]
    p.upgrades = [{
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
    ]

    p.exponentiaCap = new Decimal("1e1000")
    p.exponentia = new Decimal("2")
    p.exponentiaExponent = new Decimal("1")



    p.auraMulti = new Decimal("1")
    p.auraIncome = new Decimal("0")
    p.aura = new Decimal("0")

    p.fluxMulti = new Decimal("1")
    p.fluxIncome = new Decimal("0")
    p.flux = new Decimal("0")

    setTimeout(() => {
        p.flux = new Decimal("0")
        p.aura = new Decimal("0")

        consonancePrestiging = false

    }, 50);

}

function restartPrestige() {
    let p = player

    p.unlockedAura = false,
        p.unlockedBuyMaxFlux = false,
        p.unlockedExponentia = false,
        p.unlockedConsonance = false,
        p.unlockedBuyMaxAura = false,
        // Currencies
        p.flux = new Decimal("0"),
        p.fluxBase = new Decimal("1"),
        p.fluxIncome = new Decimal("1"),
        p.fluxMulti = new Decimal("1"),
        p.fluxMultis = [
            new Decimal("1"), // upgrade 0
            new Decimal("1"), // aura upgrade 0
            new Decimal("1"), // aura upgrade 2
            new Decimal("1"), // consonance upgrade 0
        ],
        p.aura = new Decimal("0"),
        p.potentialAura = new Decimal("0"),
        p.auraIncome = new Decimal("0"),
        p.auraMulti = new Decimal("1"),
        p.auraMultis = [
            new Decimal("1") // consonance upgrade 0
        ],
        p.exponentia = new Decimal("2"),
        p.exponentiaCap = new Decimal("1e1000"),
        p.exponentiaExponent = new Decimal("1"),
        p.consonance = new Decimal("0"),
        p.potentialConsonance = new Decimal("0"),

        // Upgrades
        p.upgradeCostScaling = new Decimal("1"),
        p.upgrades = [{
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
        p.auraUpgradeCostScaling = new Decimal("1"),
        p.auraUpgrades = [{
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
        p.exponentiaCostScaling = new Decimal("1"),
        p.exponentiaUpgrades = [{
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
        p.consonanceUpgradeCostScaling = new Decimal("1"),
        p.consonanceUpgrades = [{
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

        ]

        player.restartMultiplier = Decimal.times(player.restartMultiplier, "2")
}