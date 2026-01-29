const bundlesData = {
  categories: [
    {
      id: 'fashion',
      name: 'Fashion',
      subCategories: [
        {
          id: 'bundles',
          name: 'Bundles',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 'b1', name: 'Cobra Strike Bundle', icon: '🐍', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Legendary cobra-themed outfit with venomous design', rarity: 'Legendary', price: '1999 Diamonds' },
            { id: 'b2', name: 'Dragon Fury Bundle', icon: '🐉', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Mythical dragon warrior set with fire effects', rarity: 'Mythic', price: '2999 Diamonds' },
            { id: 'b3', name: 'Shadow Assassin Bundle', icon: '🗡️', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Stealth ninja outfit for silent eliminations', rarity: 'Epic', price: '1499 Diamonds' },
            { id: 'b4', name: 'Cyber Punk Bundle', icon: '🤖', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Futuristic neon-lit combat gear', rarity: 'Epic', price: '1299 Diamonds' },
            { id: 'b5', name: 'Arctic Wolf Bundle', icon: '🐺', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Winter warrior outfit with wolf motifs', rarity: 'Legendary', price: '1799 Diamonds' },
            { id: 'b6', name: 'Phoenix Rising Bundle', icon: '🔥', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Immortal phoenix-themed legendary set', rarity: 'Mythic', price: '3499 Diamonds' },
            { id: 'b7', name: 'Thunder God Bundle', icon: '⚡', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Electric warrior with lightning powers', rarity: 'Legendary', price: '1999 Diamonds' },
            { id: 'b8', name: 'Samurai Honor Bundle', icon: '⚔️', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Traditional samurai armor with modern touch', rarity: 'Epic', price: '1599 Diamonds' },
            { id: 'b9', name: 'Venom Strike Bundle', icon: '☠️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Deadly poison-themed combat outfit', rarity: 'Epic', price: '1399 Diamonds' },
            { id: 'b10', name: 'Galaxy Warrior Bundle', icon: '🌌', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Cosmic themed outfit from the stars', rarity: 'Mythic', price: '2799 Diamonds' },
            { id: 'b11', name: 'Demon Hunter Bundle', icon: '😈', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Dark slayer outfit for demon hunting', rarity: 'Legendary', price: '1899 Diamonds' },
            { id: 'b12', name: 'Ocean King Bundle', icon: '🌊', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Ruler of the seas themed outfit', rarity: 'Epic', price: '1499 Diamonds' }
          ]
        },
        {
          id: 'head',
          name: 'Head',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop',
          items: [
            { id: 'h1', name: 'Cobra Hood', icon: '🐍', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous cobra-themed headgear', rarity: 'Legendary', price: '899 Diamonds' },
            { id: 'h2', name: 'Dragon Helmet', icon: '🐉', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Fierce dragon warrior helmet', rarity: 'Mythic', price: '1299 Diamonds' },
            { id: 'h3', name: 'Shadow Mask', icon: '🎭', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Stealth assassin head cover', rarity: 'Epic', price: '699 Diamonds' },
            { id: 'h4', name: 'Cyber Visor', icon: '🤖', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'High-tech holographic visor', rarity: 'Epic', price: '799 Diamonds' },
            { id: 'h5', name: 'Wolf Ears', icon: '🐺', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Arctic wolf ear accessory', rarity: 'Rare', price: '499 Diamonds' },
            { id: 'h6', name: 'Phoenix Crown', icon: '👑', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Fiery phoenix headdress', rarity: 'Mythic', price: '1499 Diamonds' },
            { id: 'h7', name: 'Thunder Helm', icon: '⚡', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Electric storm helmet', rarity: 'Legendary', price: '999 Diamonds' },
            { id: 'h8', name: 'Samurai Kabuto', icon: '⚔️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Traditional samurai helmet', rarity: 'Epic', price: '849 Diamonds' },
            { id: 'h9', name: 'Skull Mask', icon: '💀', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Intimidating skull face cover', rarity: 'Epic', price: '749 Diamonds' }
          ]
        },
        {
          id: 'mask',
          name: 'Mask',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop',
          items: [
            { id: 'm1', name: 'Cobra Fang Mask', icon: '🐍', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous cobra face mask', rarity: 'Legendary', price: '699 Diamonds' },
            { id: 'm2', name: 'Dragon Scale Mask', icon: '🐉', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Armored dragon scale mask', rarity: 'Mythic', price: '999 Diamonds' },
            { id: 'm3', name: 'Ninja Veil', icon: '🥷', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Traditional ninja face cover', rarity: 'Epic', price: '549 Diamonds' },
            { id: 'm4', name: 'Tech Respirator', icon: '🤖', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Cyberpunk breathing apparatus', rarity: 'Epic', price: '649 Diamonds' },
            { id: 'm5', name: 'Ice Wolf Mask', icon: '🐺', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Frozen wolf snout mask', rarity: 'Legendary', price: '799 Diamonds' },
            { id: 'm6', name: 'Flame Mask', icon: '🔥', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Burning ember face cover', rarity: 'Mythic', price: '1099 Diamonds' },
            { id: 'm7', name: 'Gas Mask', icon: '☢️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Military grade gas mask', rarity: 'Rare', price: '399 Diamonds' },
            { id: 'm8', name: 'Oni Mask', icon: '👹', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Japanese demon mask', rarity: 'Epic', price: '749 Diamonds' }
          ]
        },
        {
          id: 'eyes',
          name: 'Eyes',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop',
          items: [
            { id: 'e1', name: 'Cobra Eyes', icon: '🐍', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous serpent eye effect', rarity: 'Legendary', price: '599 Diamonds' },
            { id: 'e2', name: 'Dragon Gaze', icon: '🐉', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Fiery dragon eye contacts', rarity: 'Mythic', price: '899 Diamonds' },
            { id: 'e3', name: 'Shadow Vision', icon: '👁️', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Dark assassin eye effect', rarity: 'Epic', price: '449 Diamonds' },
            { id: 'e4', name: 'Cyber Optics', icon: '🤖', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Holographic digital eyes', rarity: 'Epic', price: '549 Diamonds' },
            { id: 'e5', name: 'Wolf Eyes', icon: '🐺', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Piercing predator gaze', rarity: 'Legendary', price: '649 Diamonds' },
            { id: 'e6', name: 'Phoenix Flame Eyes', icon: '🔥', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Burning immortal gaze', rarity: 'Mythic', price: '999 Diamonds' }
          ]
        },
        {
          id: 'shirt',
          name: 'Shirt',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 's1', name: 'Cobra Shirt', icon: '🐍', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous cobra scale top', rarity: 'Legendary', price: '799 Diamonds' },
            { id: 's2', name: 'Dragon Chest', icon: '🐉', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Armored dragon chest plate', rarity: 'Mythic', price: '1199 Diamonds' },
            { id: 's3', name: 'Shadow Vest', icon: '🗡️', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Stealth ninja torso armor', rarity: 'Epic', price: '649 Diamonds' },
            { id: 's4', name: 'Cyber Jacket', icon: '🤖', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Neon-lit tech jacket', rarity: 'Epic', price: '749 Diamonds' },
            { id: 's5', name: 'Wolf Fur Coat', icon: '🐺', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Arctic wolf fur jacket', rarity: 'Legendary', price: '899 Diamonds' },
            { id: 's6', name: 'Phoenix Feather Top', icon: '🔥', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Burning feather chest piece', rarity: 'Mythic', price: '1399 Diamonds' },
            { id: 's7', name: 'Thunder Armor', icon: '⚡', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Electric storm chest plate', rarity: 'Legendary', price: '999 Diamonds' },
            { id: 's8', name: 'Samurai Yoroi', icon: '⚔️', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Traditional samurai chest armor', rarity: 'Epic', price: '849 Diamonds' },
            { id: 's9', name: 'Toxic Shirt', icon: '☠️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Hazardous material top', rarity: 'Epic', price: '699 Diamonds' },
            { id: 's10', name: 'Galaxy Chest', icon: '🌌', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Cosmic star-studded armor', rarity: 'Mythic', price: '1299 Diamonds' }
          ]
        },
        {
          id: 'pants',
          name: 'Pants',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop',
          items: [
            { id: 'p1', name: 'Cobra Pants', icon: '🐍', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous cobra scale leggings', rarity: 'Legendary', price: '699 Diamonds' },
            { id: 'p2', name: 'Dragon Greaves', icon: '🐉', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Armored dragon leg plates', rarity: 'Mythic', price: '999 Diamonds' },
            { id: 'p3', name: 'Shadow Pants', icon: '🗡️', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Stealth ninja leg armor', rarity: 'Epic', price: '549 Diamonds' },
            { id: 'p4', name: 'Cyber Pants', icon: '🤖', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Neon-lit tech trousers', rarity: 'Epic', price: '649 Diamonds' },
            { id: 'p5', name: 'Wolf Fur Pants', icon: '🐺', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Arctic wolf fur leggings', rarity: 'Legendary', price: '799 Diamonds' },
            { id: 'p6', name: 'Phoenix Pants', icon: '🔥', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Burning feather leggings', rarity: 'Mythic', price: '1199 Diamonds' },
            { id: 'p7', name: 'Thunder Pants', icon: '⚡', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Electric storm leg plates', rarity: 'Legendary', price: '899 Diamonds' },
            { id: 'p8', name: 'Samurai Hakama', icon: '⚔️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Traditional samurai pants', rarity: 'Epic', price: '749 Diamonds' }
          ]
        },
        {
          id: 'shoes',
          name: 'Shoes',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop',
          items: [
            { id: 'sh1', name: 'Cobra Boots', icon: '🐍', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Venomous cobra scale boots', rarity: 'Legendary', price: '599 Diamonds' },
            { id: 'sh2', name: 'Dragon Claws', icon: '🐉', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Armored dragon claw boots', rarity: 'Mythic', price: '899 Diamonds' },
            { id: 'sh3', name: 'Shadow Steps', icon: '🗡️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Silent ninja footwear', rarity: 'Epic', price: '449 Diamonds' },
            { id: 'sh4', name: 'Cyber Kicks', icon: '🤖', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Neon-lit tech sneakers', rarity: 'Epic', price: '549 Diamonds' },
            { id: 'sh5', name: 'Wolf Paws', icon: '🐺', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Arctic wolf fur boots', rarity: 'Legendary', price: '699 Diamonds' },
            { id: 'sh6', name: 'Phoenix Talons', icon: '🔥', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Burning talon boots', rarity: 'Mythic', price: '999 Diamonds' },
            { id: 'sh7', name: 'Thunder Treads', icon: '⚡', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Electric storm boots', rarity: 'Legendary', price: '799 Diamonds' }
          ]
        },
        {
          id: 'full-bundles',
          name: 'Full Bundles',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop',
          items: [
            { id: 'fb1', name: 'Complete Cobra Set', icon: '🐍', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full cobra themed outfit set', rarity: 'Legendary', price: '3999 Diamonds' },
            { id: 'fb2', name: 'Complete Dragon Set', icon: '🐉', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full dragon warrior outfit', rarity: 'Mythic', price: '5999 Diamonds' },
            { id: 'fb3', name: 'Complete Shadow Set', icon: '🗡️', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full assassin outfit set', rarity: 'Epic', price: '2999 Diamonds' },
            { id: 'fb4', name: 'Complete Cyber Set', icon: '🤖', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full cyberpunk outfit', rarity: 'Epic', price: '2599 Diamonds' },
            { id: 'fb5', name: 'Complete Wolf Set', icon: '🐺', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full arctic wolf outfit', rarity: 'Legendary', price: '3599 Diamonds' },
            { id: 'fb6', name: 'Complete Phoenix Set', icon: '🔥', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Full phoenix warrior outfit', rarity: 'Mythic', price: '6999 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'emote',
      name: 'Emote',
      subCategories: [
        {
          id: 'dance',
          name: 'Dance',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 'em1', name: 'Victory Dance', icon: '💃', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Celebrate your wins in style', rarity: 'Epic', price: '399 Diamonds' },
            { id: 'em2', name: 'Hip Hop', icon: '🎤', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Street dance moves', rarity: 'Rare', price: '299 Diamonds' },
            { id: 'em3', name: 'Break Dance', icon: '🕺', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Show off your skills', rarity: 'Legendary', price: '599 Diamonds' },
            { id: 'em4', name: 'Robot Dance', icon: '🤖', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Mechanical moves', rarity: 'Epic', price: '449 Diamonds' }
          ]
        },
        {
          id: 'taunt',
          name: 'Taunt',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop',
          items: [
            { id: 'em5', name: 'LOL', icon: '😂', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Laugh at your enemies', rarity: 'Rare', price: '199 Diamonds' },
            { id: 'em6', name: 'Flex', icon: '💪', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Show your strength', rarity: 'Epic', price: '349 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'posture',
      name: 'Posture',
      subCategories: [
        {
          id: 'standing',
          name: 'Standing',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop',
          items: [
            { id: 'po1', name: 'Arms Crossed', icon: '🧍', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Confident standing pose', rarity: 'Rare', price: '249 Diamonds' },
            { id: 'po2', name: 'Battle Ready', icon: '⚔️', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Ready for combat', rarity: 'Epic', price: '399 Diamonds' }
          ]
        },
        {
          id: 'sitting',
          name: 'Sitting',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop',
          items: [
            { id: 'po3', name: 'Throne Sit', icon: '👑', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Sit like royalty', rarity: 'Legendary', price: '599 Diamonds' },
            { id: 'po4', name: 'Casual Sit', icon: '🪑', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Relaxed sitting pose', rarity: 'Rare', price: '199 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'skill-skin',
      name: 'Skill Skin',
      subCategories: [
        {
          id: 'gloo-wall',
          name: 'Gloo Wall',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 'sk1', name: 'Dragon Gloo', icon: '🐉', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Dragon-themed gloo wall', rarity: 'Legendary', price: '799 Diamonds' },
            { id: 'sk2', name: 'Neon Gloo', icon: '💜', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Cyberpunk gloo wall', rarity: 'Epic', price: '599 Diamonds' }
          ]
        },
        {
          id: 'airdrop',
          name: 'Airdrop',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop',
          items: [
            { id: 'sk3', name: 'Golden Drop', icon: '📦', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Luxurious golden airdrop', rarity: 'Mythic', price: '999 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'collection',
      name: 'Collection',
      subCategories: [
        {
          id: 'tokens',
          name: 'Tokens',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop',
          items: [
            { id: 'co1', name: 'Diamond Token', icon: '💎', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Premium collection token', rarity: 'Mythic', price: '1999 Diamonds' },
            { id: 'co2', name: 'Gold Token', icon: '🪙', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Valuable gold token', rarity: 'Legendary', price: '999 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'vehicle',
      name: 'Vehicle',
      subCategories: [
        {
          id: 'cars',
          name: 'Cars',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop',
          items: [
            { id: 've1', name: 'Monster Truck', icon: '🚗', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Dominating vehicle skin', rarity: 'Legendary', price: '1499 Diamonds' },
            { id: 've2', name: 'Sports Car', icon: '🏎️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Speed demon skin', rarity: 'Epic', price: '999 Diamonds' }
          ]
        },
        {
          id: 'bikes',
          name: 'Bikes',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 've3', name: 'Cyber Bike', icon: '🏍️', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Futuristic motorcycle', rarity: 'Epic', price: '899 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'profile',
      name: 'Profile',
      subCategories: [
        {
          id: 'banners',
          name: 'Banners',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop',
          items: [
            { id: 'pr1', name: 'Dragon Banner', icon: '🐉', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Mythical dragon profile banner', rarity: 'Legendary', price: '499 Diamonds' },
            { id: 'pr2', name: 'Fire Banner', icon: '🔥', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Blazing fire banner', rarity: 'Epic', price: '349 Diamonds' }
          ]
        },
        {
          id: 'avatars',
          name: 'Avatars',
          image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop',
          items: [
            { id: 'pr3', name: 'Elite Avatar', icon: '👤', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Premium elite avatar', rarity: 'Mythic', price: '699 Diamonds' }
          ]
        }
      ]
    },
    {
      id: 'others',
      name: 'Others',
      subCategories: [
        {
          id: 'loot-crates',
          name: 'Loot Crates',
          image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop',
          items: [
            { id: 'ot1', name: 'Mystery Crate', icon: '📦', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Unknown treasures await', rarity: 'Rare', price: '99 Diamonds' },
            { id: 'ot2', name: 'Premium Crate', icon: '🎁', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'High value items inside', rarity: 'Legendary', price: '499 Diamonds' }
          ]
        },
        {
          id: 'surfboards',
          name: 'Surfboards',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop',
          items: [
            { id: 'ot3', name: 'Dragon Surfboard', icon: '🏄', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', description: 'Ride the dragon waves', rarity: 'Legendary', price: '799 Diamonds' }
          ]
        }
      ]
    }
  ]
};