var traits = {
    "body": {
        "Gold": ["Gold", "Golden", "Glitter", "Lux", "Shiny", "Flashy", "Glimmer"],
        "Silver": ["Silver", "Shimmer", "Sleeko", "Spectro", "Lustro", "Gleamy", "Metal"],
        "Robot": ["Robo", "Cyber", "Metal", "Mecha", "Tech", "Nano", "Mecha"],
        "Zombie": ["Undead", "Dead", "Rotting", "Decay", "Cursed", "Ghouli", "Rotten", "Decaying"],
        "Orc": ["Smash", "Tusk", "Orci", "Grim", "Brute", "Savage", "Brute", "Bash", "Beast"],
        "Mage": ["Enchant", "Magi", "Wiz", "Sorce", "Magic", "Mystic", "Chanted", "Charming", "Witchin"],
        "Rainbow": ["Rainbow", "Colorful", "Chromati", "Prisma", "Vibrant", "Vibre", "Chromatic", "Spectrum"],
        "Tiger": ["Roaring", "Saber", "Striped", "Feroce", "Feral", "Roar"],
        "Gold armor": ["Golden", "Armored", "Gilded", "Shimmer", "Gold", "Armored", "Gilded"],
        "Gray armor": ["Steel", "Iron", "Metal", "Silver", "Gray", "Platinum", "Crusader", "Armored"],
        "Golden tattoo": ["Goldink", "Giltink", "Goldentat", "Aurumark", "Glimmertat", "Goldengraff", "Golden", "Glitter", "Aurorat", "Tatted", "Mark"],
        "White tattoo": ["Icyink", "Frosttat", "Snowskin", "Whitetat", "Ivoryink", "Blancotat", "Paleskin", "Wintermark", "Albinoart", "Pearlprint", "Tatted", "Mark"],
        "Brown": ["Rust", "Wood", "Mud", "Brown", "Coco", "Cinnamon", "Hickory", "Mocha", "Browni", "Chocola", "Mocha", "Cinna", "Nutella", "Fudgi", "Chestnut"],
        "Blue": ["Aqua", "Cyan", "Indigo", "Teal", "Sapphire", "Periwinkle", "Navy", "Cornflower", "Sky", "Turquoise", "Cold", "Ice"],
        "Carrot": ["Orange", "Tangerine", "Peach", "Apricot", "Pumpkin", "Mandarin", "Clementine", "Carrot", "Ginger", "Habanero"],
        "White": ["Vanilla", "Ivory", "Pearl", "Eggshell", "Chalk", "Frost", "Blizzard", "Snowstorm", "Alabaster", "Polar", "Cloud", "Ivory"],
        "Black": ["Onyx", "Obsidian", "Midnight", "Coal", "Jet", "Sable", "Raven", "Charcoal", "Pitch", "Ebony", "Shadow", "Dark", "Night", "Abyss"],
        "Regular": ["Ordinary", "Plain", "Boring", "Mundane", "Standard", "Everyday", "Typical", "Common", "Basic"]
    }
};

var adjectives = {
    "body": {
        "Gold": ["Gold", "Goldin", "Golden", "Auror", "Aurum", "Glitter", "Luxi", "Shiny", "Lux", "Flashy", "Glimmer"],
        "Silver": ["Silver", "Mercure", "Argent", "Shimmer", "Sleeko", "Spectro", "Lustrous", "Mirror", "Gleam", "Metal"],
        "Robot": ["Robo", "Cyber", "Metal", "Mecha", "Circuit", "Tech", "Gear", "Nano", "Mech", "Cyb", "Bot", "Droid"],
        "Zombie": ["Brain", "Flesh", "Zombie", "Undead", "Guts", "Dead", "Rot", "Decay", "Curse", "Virus", "Ghouli", "Cranium", "Rotten", "Decay", "Flesh"],
        "Orc": ["Smash", "Tusk", "Orci", "Grim", "Bruta", "Goblin", "Clang", "Orc", "Savage", "Brute", "Bash", "Beast"],
        "Mage": ["Spell", "Enchantin", "Magimon", "Wizze", "Sorce", "Mage", "Mystic", "Chant", "Charm", "Witchin", "Arcane", "Sorcer"],
        "Rainbow": ["Rainbow", "Color", "Chromati", "Prism", "Vibrant", "Vibre", "Chromatic", "Spectrum"],
        "Tiger": ["Tiger", "Roaring", "Tigron", "Saber", "Jungle", "Strip", "Feroci", "Stripe", "Claw", "Feral", "Roar"],
        "Gold armor": ["Golden", "Auror", "Gilded", "Shimmer", "Gold", "Regal", "Gilded", "Aurum", "Defend", "Guard"],
        "Gray armor": ["Steel", "Iron", "Metal", "Silver", "Gray", "Gunmetal", "Platinum", "Knight", "Crusade", "Paladin"],
        "Golden tattoo": ["Goldink", "Giltink", "Goldentat", "Aurumark", "Glimmertat", "Goldengraff", "Golden", "Glitter", "Aurorat", "Tatted", "Mark"],
        "White tattoo": ["Icyink", "Frosttat", "Snowskin", "Whitetat", "Ivoryink", "Blancotat", "Paleskin", "Wintermark", "Albinoart", "Pearlprint", "Tatted", "Mark"],
        "Brown": ["Rust", "Wood", "Mud", "Brown", "Coco", "Cinnamon", "Hickory", "Mocha", "Browni", "Chocola", "Mocha", "Cinna", "Nutella", "Fudgi", "Chestnut"],
        "Blue": ["Aqua", "Cyan", "Indigo", "Teal", "Sapphire", "Periwinkle", "Navy", "Cornflower", "Sky", "Turquoise", "Cold", "Ice"],
        "Carrot": ["Orange", "Tangerine", "Peach", "Apricot", "Pumpkin", "Mandarin", "Clementine", "Carrot", "Ginger", "Habanero"],
        "White": ["Vanilla", "Ivory", "Pearl", "Eggshell", "Chalk", "Frost", "Blizzard", "Snowstorm", "Alabaster", "Polar", "Cloud", "Ivory"],
        "Black": ["Onyx", "Obsidian", "Midnight", "Coal", "Jet", "Sable", "Raven", "Charcoal", "Pitch", "Ebony", "Shadow", "Dark", "Night", "Abyss"],
        "Regular": ["Ordinary", "Plain", "Boring", "Mundane", "Standard", "Everyday", "Typical", "Common", "Basic"]
    },
    "mane": {
        "Dragon": ["scaly", "fiery", "majestic", "fierce", "imposing"],
        "Whale": ["sleek", "smooth", "streamlined", "waterresistant", "whalelike"],
        "Fire": ["blazing", "burning", "intense", "passionate", "combustible"],
        "Blue fire": ["cool", "icy", "sparkling", "electric", "sapphire"],
        "Rainbow": ["colorful", "vibrant", "prismatic", "bright", "radiant"],
        "Greenish": ["earthy", "natural", "sustainable", "verdant", "lush"],
        "Light blue": ["calming", "tranquil", "peaceful", "serene", "oceanic"],
        "Toxic green": ["hazardous", "poisonous", "dangerous", "radioactive", "toxic"],
        "Blonde": ["sunkissed", "golden", "shiny", "luminous", "bright"],
        "Black": ["dark", "mysterious", "elegant", "sleek", "powerful"],
        "White": ["pure", "clean", "crisp", "minimal", "bright"]
    },
    "claws": {
        "Diamond hands": ["invincible", "strong", "resilient", "unbreakable", "rocksolid"],
        "Golden": ["shiny", "metallic", "valuable", "precious", "gleaming"],
        "Fire": ["blazing", "burning", "intense", "passionate", "combustible"],
        "Blue fire": ["cool", "icy", "sparkling", "electric", "sapphire"],
        "Bloody": ["dangerous", "deadly", "gory", "violent", "ferocious"],
        "Honey pot": ["sweet", "sticky", "delectable", "irresistible", "fragrant"],
        "Wrapped": ["boxing", "protective", "wrapped", "mysterious", "intriguing"],
        "BTC Whitepaper": ["revolutionary", "groundbreaking", "innovative", "disruptive", "gamechanging"],
        "Long claws": ["dangerous", "deadly", "sharp", "pointed", "ferocious"],
        "Regular": ["basic", "simple", "ordinary", "standard", "conventional"]
    },
    "headgear": {
        "Crown": ["royal", "regal", "imperial", "majestic", "ornate"],
        "Badger": ["fierce", "tough", "tenacious", "determined", "scrappy"],
        "Skull": ["macabre", "ominous", "threatening", "sinister", "gruesome"],
        "Undead": ["creepy", "ghostly", "haunting", "spooky", "zombielike"],
        "Thief": ["sneaky", "sly", "stealthy", "mysterious", "intriguing"],
        "Unicorn": ["magical", "enchanting", "rare", "mystical", "fantastical"],
        "Bull horns": ["powerful", "aggressive", "ferocious", "wild", "imposing"],
        "Purple wizard hat": ["mysterious", "enchanting", "magical", "mystical", "witchy"],
        "Dark wizard hat": ["mysterious", "enchanting", "magical", "mystical", "witchy"],
        "Mohawk": ["punk", "rebellious", "edgy", "cool", "unique"],
        "None": ["bare", "unadorned", "simple", "uncomplicated", "unembellished"]
    },
    "artifact": {
        "Pepe": ["whimsical", "cute", "playful", "memeworthy", "adorable"],
        "Lightning bolt": ["electrifying", "dynamic", "powerful", "striking", "energizing"],
        "Dragon wings": ["majestic", "aweinspiring", "fearsome", "powerful", "formidable"],
        "Broadsword": ["mighty", "imposing", "lethal", "formidable", "potent"],
        "Quiver": ["stocked", "prepared", "ready", "organized", "supplied"],
        "Frozen staff": ["chilling", "icy", "frosty", "freezing", "glacial"],
        "Undead staff": ["necrotic", "eerie", "spooky", "haunting", "sinister"],
        "Fire sword": ["blazing", "fiery", "infernolike", "incandescent", "scorching"],
        "Ghostly companion": ["ethereal", "otherworldly", "haunting", "spectral", "wraithlike"],
        "Poisoned Dagger": ["toxic", "venomous", "lethal", "deadly", "poisonous"],
        "Arrow wounds": ["battlescarred", "veteran", "experienced", "hardened", "tested"],
        "Bag": ["roomy", "spacious", "capacious", "ample", "generous"],
        "Pauldron": ["protective", "defensive", "fortifying", "armored", "shielding"],
        "Parrot": ["tropical", "colorful", "exotic", "raucous", "vibrant"],
        "Lamp": ["radiant", "luminous", "glowing", "illuminating", "bright"],
        "Eagle": ["regal", "majestic", "soaring", "powerful", "dominant"],
        "Cape": ["dramatic", "flowing", "billowing", "heroic", "mysterious"],
        "Dagger": ["sleek", "sharp", "swift", "lethal", "deadly"],
        "Sword": ["mighty", "imposing", "lethal", "formidable", "potent"],
        "Pickaxe": ["sturdy", "reliable", "efficient", "versatile", "useful"],
        "Axe": ["mighty", "powerful", "formidable", "lethal", "potent"],
        "Wizard staff": ["enchanting", "mystical", "powerful", "enchanted", "magical"],
        "Bindle": ["humble", "resourceful", "simple", "basic", "utilitarian"],
        "Pirate flag": ["fearsome", "intimidating", "menacing", "dreaded", "terrifying"],
        "Shield": ["protective", "defensive", "fortifying", "armored", "shielding"],
        "None": ["unadorned", "bare", "plain", "simple", "unembellished"]
    },
    "eyes": {
        "Noggles": ["quirky", "geeky", "nerdy", "fun", "playful"],
        "Laser beams": ["powerful", "intense", "fierce", "unyielding", "dazzling"],
        "Laser eyes": ["focused", "penetrating", "piercing", "determined", "unwavering"],
        "Golden": ["luminous", "radiant", "brilliant", "shimmering", "glimmering"],
        "Green": ["emerald", "jade", "chartreuse", "forest", "mossy"],
        "Blue": ["sapphire", "azure", "cerulean", "navy", "sky"],
        "White": ["milky", "pearly", "opalescent", "pure", "ivory"],
        "Red": ["fiery", "intense", "passionate", "ferocious", "fierce"],
        "Regular": ["ordinary", "typical", "common", "usual", "standard"]
    }
};


var endings = {
    "body": {
        "Gold": ["Gold", "Gold", "Auror", "Aurum", "Glitter", "Lux", "Shine", "Luxury", "Flash", "Glimmer"],
        "Silver": ["Silver", "Mercure", "Argent", "Shimmer", "Lustre", "Mirror", "Gleam", "Metal"],
        "Robot": ["Robot", "Cybro", "Metal", "Mech", "Circuit", "Tech", "Gear", "Nano", "Cyborg", "Cyb", "Bot", "Droid"],
        "Zombie": ["Brain", "Flesh", "Zombie", "Undead", "Guts", "Dead", "Rot", "Decay", "Curse", "Virus", "Ghoule", "Cranium", "Flesh"],
        "Orc": ["Smash", "Tusk", "Orc", "Grim", "Clang", "Savage", "Brute", "Bash", "Beast"],
        "Mage": ["Spell", "Enchantor", "Magimon", "Wizz", "Sorcerer", "Mage", "Mystic", "Chanter", "Charmer", "Witch", "Arcane", "Sorcer"],
        "Rainbow": ["Rainbow", "Color", "Chromati", "Prism", "Vibrant", "Vibre", "Chromatic", "Spectrum"],
        "Tiger": ["Tiger", "Roar", "Tigron", "Saber", "Stripes", "Feroce", "Claws"],
        "Gold armor": ["Golden", "Auror", "Gilded", "Shimmer", "Gold", "Regal", "Gilded", "Aurum", "Defend", "Guard"],
        "Gray armor": ["Steel", "Iron", "Metal", "Silver", "Gray", "Gunmetal", "Platinum", "Knight", "Crusade", "Paladin"],
        "Golden tattoo": ["Goldink", "Giltink", "Goldentat", "Aurumark", "Glimmertat", "Goldengraff", "Golden", "Glitter", "Aurorat", "Tatted", "Mark"],
        "White tattoo": ["Icyink", "Frosttat", "Snowskin", "Whitetat", "Ivoryink", "Blancotat", "Paleskin", "Wintermark", "Albinoart", "Pearlprint", "Tatted", "Mark"],
        "Brown": ["Rust", "Wood", "Mud", "Brown", "Coco", "Cinnamon", "Hickory", "Mocha", "Browni", "Chocola", "Mocha", "Cinna", "Nutella", "Fudgi", "Chestnut"],
        "Blue": ["Aqua", "Cyan", "Indigo", "Teal", "Sapphire", "Periwinkle", "Navy", "Cornflower", "Sky", "Turquoise", "Cold", "Ice"],
        "Carrot": ["Orange", "Tangerine", "Peach", "Apricot", "Pumpkin", "Mandarin", "Clementine", "Carrot", "Ginger", "Habanero"],
        "White": ["Vanilla", "Ivory", "Pearl", "Eggshell", "Chalk", "Frost", "Blizzard", "Snowstorm", "Alabaster", "Polar", "Cloud", "Ivory"],
        "Black": ["Onyx", "Obsidian", "Midnight", "Coal", "Jet", "Sable", "Raven", "Charcoal", "Pitch", "Ebony", "Shadow", "Dark", "Night", "Abyss"],
        "Regular": ["Ordinary", "Plain", "Boring", "Mundane", "Standard", "Everyday", "Typical", "Common", "Basic"]
    },
    "mane": {
        "Dragon": ["burn", "wings", "fury", "flame", "claw", "scale", "fire", "tail"],
        "Whale": ["splash", "spout", "dive", "blow", "bubble","Tail"],
        "Fire": ["spark", "flame", "ember", "heat", "blaze", "ignite"],
        "Blue fire": ["frost", "glow", "chill", "ice", "shiver", "arctic"],
        "Rainbow": ["gleam", "glow", "prism", "flash", "rainbow", "color"],
        "Greenish": ["leaf", "vine", "moss", "jungle", "forest", "verdant"],
        "Light blue": ["sky", "cloud", "heaven", "breeze", "azure", "serene"],
        "Toxic green": ["slime", "ooze", "pollution", "toxin", "venom", "infection"],
        "Blonde": ["gold", "shine", "radiance", "glimmer", "honey", "bright"],
        "Black": ["shadow", "darkness", "midnight", "coal", "eclipse", "onyx"],
        "White": ["pearl", "ivory", "alabaster", "snow", "angel", "pure"]
    },
    "claws": {
        "Diamond hands": ["fist", "grip", "crusher"],
        "Golden": ["strike", "slash", "grab"],
        "Fire": ["burn", "embers", "scorch"],
        "Blue fire": ["frost", "ice", "blaze"],
        "Bloody": ["gore", "slash", "maul"],
        "Honey pot": ["sticky", "syrup", "sweet"],
        "Bandaged": ["wound", "heal", "treat"],
        "BTC Whitepaper": ["paper", "bitcoin", "crypto"],
        "Long": ["reach", "stretch", "extend"],
        "Regular": ["scratch", "claw", "rip"]
    },
    "headgear": {
        "Crown": ["Jewel", "King", "Queen", "Emperor", "Empress", "Regent"],
        "Badger": ["Stripe", "Fierce", "Streak", "Bold", "Blaze", "Flare"],
        "Skull": ["Cranium", "Grim", "Bone", "Shade", "Ghost", "Phantom"],
        "Undead": ["Zombie", "Specter", "Ghoul", "Banshee", "Wraith", "Poltergeist"],
        "Thief": ["Rogue", "Bandit", "Sneak", "Shadow", "Phantom", "Ninja"],
        "Unicorn": ["Magic", "Glitter", "Sparkle", "Shimmer", "Radiance"],
        "Bull horns": ["Rampage", "Fury", "Rage", "Charge", "Blitz", "Bullrush"],
        "Purple wizard hat": ["Mystic", "Enigma", "Arcane", "Sorcerer", "Magic", "Illusion"],
        "Dark wizard hat": ["Shadow", "Night", "Void", "Abyss", "Necromancer", "Warlock"],
        "Mohawk": ["Spike", "Punk", "Rebel", "Wild", "Fury", "Outlaw"],
        "None": ["Bald", "Shaved", "Bare", "Clean", "Sleek", "Smooth"]
    }
};