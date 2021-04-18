module.exports = {
  // BatWing: {
  //   name: 'Bag Wings',
  //   description: `Creppy stuff.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 2,
  //     con: 2,
  //     int: 0,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 5
  //   }
  // },
  // BatScepter: {
  //   name: 'Bat Scepter',
  //   description: `Just a Bat head on a long stick, disgusting.`,
  //   type: 'weapon',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 3,
  //     wis: 1,
  //     car: 0,
  //     wil: 0,
  //     luk: 1,
  //     defense: 0
  //   }
  // },
  // OldRags: {
  //   name: 'Old rags',
  //   description: `Old rags.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 1,
  //     int: 0,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 0
  //   }
  // },
  // TornPriestAttire: {
  //   name: 'Torn Priest Attire',
  //   description: `Torn Priest Attire.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 1,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 0
  //   }
  // },
  // FireWhip: {
  //   name: 'Fire Whip',
  //   description: `A whip made of pure blue fire, for some reason it doesn't seem to burn you.`,
  //   type: 'weapon',
  //   bonuses: {
  //     str: 15,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 0,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 0
  //   }
  // },
  // HylianShield: {
  //   name: 'Hylian Shield',
  //   description: `A gorgeous blue and silver shield once used by a great hero.`,
  //   type: 'shield',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 50,
  //     int: 0,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 100
  //   }
  // },
  // DiamondArmor: {
  //   name: 'Diamond Armor',
  //   description: `Looks a bit blocky, but it does it's job.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 0,
  //     wis: 0,
  //     car: 10,
  //     wil: 0,
  //     luk: 0,
  //     defense: 100
  //   }
  // },
  // RingOfNibelung: {
  //   name: 'Ring of Nibelung',
  //   description: `Ominous ring, emits a sickly light purple glow.`,
  //   type: 'ring',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 10,
  //     wis: 0,
  //     car: 0,
  //     wil: 0,
  //     luk: 0,
  //     defense: 0
  //   }
  // },
  // CursedHand: {
  //   name: 'Cursed Hand',
  //   description: `A literal cursed hand, why would anyone even pick this up?.`,
  //   type: 'trinket',
  //   bonuses: {
  //     str: 1,
  //     dex: 1,
  //     agi: 1,
  //     con: 1,
  //     int: 1,
  //     wis: 1,
  //     car: 1,
  //     wil: 1,
  //     luk: 1,
  //     defense: 1
  //   }
  // },
  // WoodenArmor: {
  //   name: 'Wooden Armor',
  //   description: `Man, it looks like a shit, but its better than nothing.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 0,
  //     wis: 0,
  //     car: 10,
  //     wil: 0,
  //     luk: 0,
  //     defense: 10
  //   }
  // },
  // IronArmor: {
  //   name: 'Iron Armor',
  //   description: `Ok, it is better than the wooden one.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 0,
  //     wis: 0,
  //     car: 10,
  //     wil: 0,
  //     luk: 0,
  //     defense: 20
  //   }
  // },
  // GoldenArmor: {
  //   name: 'Golden Armor',
  //   description: `Fancy and heavy, also not very practical.`,
  //   type: 'armor',
  //   bonuses: {
  //     str: 0,
  //     dex: 0,
  //     agi: 0,
  //     con: 0,
  //     int: 0,
  //     wis: 0,
  //     car: 99,
  //     wil: 0,
  //     luk: 0,
  //     defense: 0
  //   }
  // },
  BronzeDagger: {
    name: 'Bronze Dagger',
    description: `A beatup Bronze Dagger.`,
    type: 'weapon',
    availableClasses: [0, 1, 2, 3, 4],
    baseBonuses: {
      str: 1,
      dex: 0,
      agi: 2,
      con: 0,
      int: 0,
      wis: 0,
      wil: 0,
      luk: 0,
      defense: 0
    },
    possibleModifiers: [
      {
        prefix: 'Regular',
        odds: 40,
        modifier: {}
      },
      {
        prefix: 'Broken',
        odds: 40,
        modifier: {
          str: -1,
          agi: -2,
        }
      },
      {
        prefix: 'Rusted',
        odds: 10,
        modifier: {
          str: -1,
          agi: -1,
        }
      },
      {
        prefix: 'Sharpened',
        odds: 8,
        modifier: {
          str: 0,
          agi: 0,
        }
      },
      {
        prefix: 'Pristine',
        odds: 2,
        modifier: {
          str: 1,
          agi: 1,
        }
      },
    ],
  },
  GoldDagger: {
    name: 'Gold Dagger',
    description: `A Gold Dagger.`,
    type: 'weapon',
    availableClasses: [0, 1, 2, 3, 4],
    baseBonuses: {
      str: 1,
      dex: 0,
      agi: 2,
      con: 0,
      int: 20,
      wis: 0,
      wil: 0,
      luk: 15,
      defense: 0
    },
    possibleModifiers: [
      {
        prefix: 'Regular',
        odds: 40,
        modifier: {}
      },
      {
        prefix: 'Broken',
        odds: 40,
        modifier: {
          str: -1,
          agi: -2,
        }
      },
      {
        prefix: 'Rusted',
        odds: 10,
        modifier: {
          str: -1,
          agi: -1,
        }
      },
      {
        prefix: 'Sharpened',
        odds: 8,
        modifier: {
          str: 0,
          agi: 0,
        }
      },
      {
        prefix: 'Pristine',
        odds: 2,
        modifier: {
          str: 1,
          agi: 1,
        }
      },
    ],
  },
  WoodenArmor: {
    name: 'Wooden Armor',
    description: `Looks like a stump with arms slots, cant be that bad, right?.`,
    type: 'body',
    availableClasses: [0, 2, 3, 4],
    baseBonuses: {
      str: 1,
      dex: 0,
      agi: -2,
      con: 0,
      int: 0,
      wis: 0,
      wil: 0,
      luk: 0,
      defense: 3
    },
    possibleModifiers: [
      {
        prefix: 'Regular',
        odds: 10,
        modifier: {}
      },
      {
        prefix: 'Broken',
        odds: 10,
        modifier: {
          str: -1,
          defense: -3,
        }
      },
      {
        prefix: 'Heavy',
        odds: 80,
        modifier: {
          agi: -2,
          defense: 5,
        }
      },
    ],
  },
  TestDagger: {
    name: 'Test Dagger',
    description: `Weird Test Dagger.`,
    type: 'weapon',
    availableClasses: [0, 1, 2, 3, 4],
    baseBonuses: {
      str: 99,
      dex: 99,
      agi: 99,
      con: 99,
      int: 99,
      wis: 99,
      wil: 99,
      luk: 99,
      defense: 99
    },
    possibleModifiers: [
      {
        prefix: 'Godly',
        odds: 40,
        modifier: {}
      },
    ],
  },
}