const weaponClasses = [
    {
        id: 'ar',
        name: 'Assault Rifles',
        weapons: [
            { id: 'm4a1', name: 'M4A1' },
            { id: 'ak47', name: 'AK47' },
            { id: 'scar', name: 'SCAR' },
            { id: 'groza', name: 'GROZA' },
            { id: 'famas', name: 'FAMAS' },
            { id: 'xm8', name: 'XM8' },
            { id: 'an94', name: 'AN94' },
            { id: 'plasma', name: 'PLASMA' },
            { id: 'aug', name: 'AUG' },
            { id: 'parafal', name: 'PARAFAL' },
            { id: 'kingfisher', name: 'KINGFISHER' },
            { id: 'g36', name: 'G36' }

        ]
    },
    {
        id: 'marksman rifle',
        name: 'Marksman Rifle',
        weapons: [
            { id: 'm14', name: 'M14' },
            { id: 'sks', name: 'SKS' },
            { id: 'svd', name: 'SVD' },
            { id: 'woodpecker', name: 'WOODPECKER' },
            { id: 'ac80', name: 'AC80' },
            { id: 'winchester', name: 'WINCHESTER' }
        ],
    },

    {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'sub-machine gun',
        name:'Sub-Machine Gun',
        weapons: [
            { id: 'ump', name: 'UMP' },
            { id: 'mp5', name: 'MP5' },
            { id: 'vss', name: 'VSS' },
            { id: 'mp40', name: 'MP40' },
            { id: 'p90', name: 'P90' },
            { id: 'cg15', name: 'CG15' },
            { id: 'thompson', name: 'THOMPSON' },
            { id: 'vector', name: 'VECTOR' },
            { id: 'mac10', name: 'MAC10' },
            { id: 'bizon', name: 'BIZON' }
        ],
    },

        {
        id:'shotgun',
        name:'SHOTGUN',
        weapons: [
            { id: 'm1014', name: 'M1014' },
            { id: 'spas12', name: 'SPAS12' },
            { id: 'm1887', name: 'M1887' },
            { id: 'mag-7', name: 'MAG-7' },
            { id: 'charge-buster', name: 'CHARGE BUSTER' },
            { id: 'trogon', name: 'TROGON' },
            { id: 'm1917', name: 'M1917' }
        ],
    },

        {
        id:'sniper',
        name:'SNIPER',
        weapons: [
            { id: 'awm', name: 'AWM' },
            { id: 'kar98k', name: 'KAR98K' },
            { id: 'm82b', name: 'M82B' },
            { id: 'm24', name: 'M24' },
            { id: 'heal sniper', name: 'HEAL SNIPER' },
            { id: 'vsk94', name: 'VSK94' }
        ],
    },

        {
        id:'pistol',
        name:'PISTOL',
        weapons: [
            { id: 'usp', name: 'USP' },
            { id: 'desert eagle', name: 'DESERT EAGLE' },
            { id: 'g18', name: 'G18' },
            { id: 'm1873', name: 'M1873' },
            { id: 'm500', name: 'M500' },
            { id: 'm1917', name: 'M1917' },
            { id: 'usp-2', name: 'USP-2' },
            { id: 'mini-uzi', name: 'MINI UZI' },
            { id: 'heal-pistol', name: 'HEAL PISTOL' },
            { id: 'hand-cannon', name: 'HAND CANNON' },
            { id: 'ice-gun', name: 'ICE GUN' }
        ],
    },

        {
        id:'melee',
        name:'MELEE',
        weapons: [
            { id: 'pan', name: 'PAN' },
            { id: 'parang', name: 'PARANG' },
            { id: 'bat', name: 'BAT' },
            { id: 'katana', name: 'KATANA' },
            { id: 'scythe', name: 'SCYTHE' },
            { id: 'ff knife', name: 'FF KNIFE' }
        ],
    },

        {
        id:'fist',
        name:'FIST',
        weapons: [
            { id: 'fist', name: 'FIST' }
        ],
    },

        {
        id:'grenade',
        name:'GRENADE',
        weapons: [
            { id: 'grenade', name: 'GRENADE' },
            { id: 'smoke-grenade', name: 'SMOKE GRENADE' },
            { id: 'gloo wall', name: 'GLOO WALL' }
        ],
    },
        {
        id:'others',
        name:'OTHERS',
        weapons: [
            { id: 'crossbow', name: 'CROSSBOW' },
            { id: 'm79', name: 'M79' },
            { id: 'mgl140', name: 'MGL140' },
            { id: 'rgs-50', name: 'RGS-50' },
            { id: 'gatling', name: 'GATLING' },
            { id: 'fgl-24', name: 'FGL-24' },
        ]
    },

];

const weaponImages = {
    m4a1:'./images/m4a1.png',
    ak47:'ak47.png',
};

function getWeaponSkins(weaponId) {
    const skinNames = ['Dragon Fury', 'Neon Strike', 'Blood Moon', 'Golden Legacy'];
    const skinImages = [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop'
    ];

    return skinNames.map((name, index) => ({
        id: `${weaponId}-skin-${index + 1}`,
        name: name,
        image: skinImages[index] || skinImages[0]
    }));
}

function getWeaponImage(weaponId) {
    return weaponImages[weaponId] ||weaponImages.ak47;
}