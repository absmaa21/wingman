const dailyImageMapping = {
    0: require('../../assets/missions/daily0.png'),
    1: require('../../assets/missions/daily1.png'),
    2: require('../../assets/missions/daily2.png'),
    3: require('../../assets/missions/daily3.png'),
    4: require('../../assets/missions/daily4.png'),
};

const contentTier = {
    '12683d76-48d7-84a3-4e09-6985794f0445': '#5a9fe211',
    '0cebb8be-46d7-c12a-d306-e9907bfc5a25': '#00958711',
    '60bca009-4182-7998-dee7-b8a2558dc369': '#d1548d11',
    'e046854e-406c-37f4-6607-19a9ba8426fc': '#f5955b11',
    '411e4a55-4e59-7757-41f0-86a53f101bb5': '#fad66311'
}

const levelImage = {
    1: require('../../assets/levelBorders/level1.png'),
    20: require('../../assets/levelBorders/level20.png'),
    40: require('../../assets/levelBorders/level40.png'),
    60: require('../../assets/levelBorders/level60.png'),
    80: require('../../assets/levelBorders/level80.png'),
    100: require('../../assets/levelBorders/level100.png'),
    120: require('../../assets/levelBorders/level120.png'),
    140: require('../../assets/levelBorders/level140.png'),
    160: require('../../assets/levelBorders/level160.png'),
    180: require('../../assets/levelBorders/level180.png'),
    200: require('../../assets/levelBorders/level200.png'),
    220: require('../../assets/levelBorders/level220.png'),
    240: require('../../assets/levelBorders/level240.png'),
    260: require('../../assets/levelBorders/level260.png'),
    280: require('../../assets/levelBorders/level280.png'),
    300: require('../../assets/levelBorders/level300.png'),
    320: require('../../assets/levelBorders/level320.png'),
    340: require('../../assets/levelBorders/level340.png'),
    360: require('../../assets/levelBorders/level360.png'),
    380: require('../../assets/levelBorders/level380.png'),
    400: require('../../assets/levelBorders/level400.png'),
    420: require('../../assets/levelBorders/level420.png'),
    440: require('../../assets/levelBorders/level440.png'),
    460: require('../../assets/levelBorders/level460.png'),
    480: require('../../assets/levelBorders/level480.png'),
    500: require('../../assets/levelBorders/level500.png'),
};

const weaponInfo = {
    '63e6c2b6-4a8e-869c-3d4c-e38355226584': {
        name: 'Odin',
        type: 'Heavy'
    },
    '55d8a0f4-4274-ca67-fe2c-06ab45efdf58': {
        name: 'Ares',
        type: 'Heavy',
    },
    '9c82e19d-4575-0200-1a81-3eacf00cf872': {
        name: 'Vandal',
        type: 'Rifle'
    },
    'ae3de142-4d85-2547-dd26-4e90bed35cf7': {
        name: 'Bulldog',
        type: 'Rifle'
    },
    'ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a': {
        name: 'Phantom',
        type: 'Rifle'
    },
    'ec845bf4-4f79-ddda-a3da-0db3774b2794': {
        name: 'Judge',
        type: 'Shotgun'
    },
    '910be174-449b-c412-ab22-d0873436b21b': {
        name: 'Bucky',
        type: 'Shotgun'
    },
    '44d4e95c-4157-0037-81b2-17841bf2e8e3': {
        name: 'Frenzy',
        type: 'Sidearm'
    },
    '29a0cfab-485b-f5d5-779a-b59f85e204a8': {
        name: 'Classic',
        type: 'Sidearm'
    },
    '1baa85b4-4c70-1284-64bb-6481dfc3bb4e': {
        name: 'Ghost',
        type: 'Sidearm'
    },
    'e336c6b8-418d-9340-d77f-7a9e4cfe0702': {
        name: 'Sheriff',
        type: 'Sidearm'
    },
    '42da8ccc-40d5-affc-beec-15aa47b42eda': {
        name: 'Shorty',
        type: 'Sidearm'
    },
    'a03b24d3-4319-996d-0f8c-94bbfba1dfc7': {
        name: 'Operator',
        type: 'Sniper'
    },
    '4ade7faa-4cf1-8376-95ef-39884480959b': {
        name: 'Guardian',
        type: 'Rifle'
    },
    'c4883e50-4494-202c-3ec3-6b8a9284f00b': {
        name: 'Marshal',
        type: 'Sniper'
    },
    '462080d1-4035-2937-7c09-27aa2a5c27a7': {
        name: 'Spectre',
        type: 'SMG'
    },
    'f7e1b454-4ad4-1063-ec0a-159e56b58941': {
        name: 'Stinger',
        type: 'SMG'
    },
    '2f59173c-4bed-b6c3-2191-dea9b58be9c7': {
        name: 'Melee',
        type: 'Melee'
    }
};

const weeklyXpPerMission = {
    '1': 11213, //12960
    '2': 12340,
    '3': 13470,
    '4': 14600,
    '5': 15730,
    '6': 16860,
    '7': 17990,
    '8': 19120,
    '9': 20250,
}

export { dailyImageMapping, contentTier, levelImage, weaponInfo, weeklyXpPerMission }