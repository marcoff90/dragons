'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const dragons = [
      {
        name: 'Toothless',
        heads: 1,
        attack: 0.6,
        speed: 1.0,
        armor: 0.7,
        firepower: 0.6,
        shot_limit: 0.7,
        venom: 1.0,
        jaw_strength: 0.3,
        stealth: 0.8,
        intro:
          'Once thought of as the “unholy offspring of lightning and death itself,” Toothless (20 in dragon years) has proven to be much more of a giant, winged pussycat than the stuff of nightmares.',
        about:
          'Playful, inquisitive, and intelligent, Toothless is more Hiccup’s best friend than his pet. He is extremely protective of his Viking soul mate, and will stop at nothing to guard him from all harm. As the last known specimen of the Night Fury species, Toothless is indisputably special. He commands respect from dragons and humans alike.',
        summary: 'Loyal and empathic with boundless, puppy-like energy',
        profile_image:
          'http://localhost:3333/assets/dragons/toothless/profile_toothless.png',
        main_image:
          'http://localhost:3333/assets/dragons/toothless/toothless.png',
        height_image:
          'http://localhost:3333/assets/dragons/toothless/toothless_dragon-height.png',
        class_id: 1,
        species_id: 1,
      },
      {
        name: 'Stormfly',
        heads: 1,
        attack: 0.4,
        speed: 0.45,
        armor: 0.6,
        firepower: 0.7,
        shot_limit: 0.6,
        venom: 1.0,
        jaw_strength: 0.2,
        stealth: 0.4,
        intro:
          'Although she preens and grooms herself like the most fastidious of birds, Stormfly actually possesses a playful spirit.',
        about:
          "Whether it's winning dragon races with Astrid or fetching shiny objects, Stormfly is as game for a fun time as she is deadly in battle!",
        summary:
          'Precise and cunning in battle, yet warm and affectionate with friends old and new',
        profile_image:
          'http://localhost:3333/assets/dragons/stormfly/profile_stormfly.png',
        main_image:
          'http://localhost:3333/assets/dragons/stormfly/stormfly.png',
        height_image:
          'http://localhost:3333/assets/dragons/stormfly/stormfly_dragon-height.png',
        class_id: 6,
        species_id: 2,
      },
      {
        name: 'Barf & Belch',
        heads: 2,
        attack: 0.4,
        speed: 0.5,
        armor: 0.3,
        firepower: 0.5,
        shot_limit: 0.6,
        venom: 0.0,
        jaw_strength: 0.25,
        stealth: 1.0,
        intro:
          'Much like the twins who ride them, Barf & Belch spend more time bickering than working in concert.',
        about:
          'The only time they do see eye-to-eye, however, is when enjoying a nice display of destruction—usually caused by Ruffnut & Tuffnut!',
        summary:
          'Truly a split personality! Barf & Belch are each fiercely independent, yet inextricably linked',
        profile_image:
          'http://localhost:3333/assets/dragons/barf-and-belch/profile_barf_and_belch.png',
        main_image:
          'http://localhost:3333/assets/dragons/barf-and-belch/barf_and_belch.png',
        height_image:
          'http://localhost:3333/assets/dragons/barf-and-belch/barf_and_belch_dragon-height.png',
        class_id: 3,
        species_id: 3,
      },
      {
        name: 'Grump',
        heads: 1,
        attack: 0.3,
        speed: 0.2,
        armor: 0.7,
        firepower: 0.5,
        shot_limit: 0.6,
        venom: 0.0,
        jaw_strength: 0.4,
        stealth: 0.25,
        intro:
          "Grump is not a Gronckle. He's a related, but different breed of Boulder Class dragon known as a Hotburple.",
        about:
          "Like a Gronckle, the Hotburple also makes lava slugs out of molten minerals, but he prefers iron ore over the Gronckle's love of rocks. As such, he eats the scraps around Gobber's stall and keeps the forge fired up with molten loogies. Personality wise, he's like a walrus -- a loud, fussy, lazy lay-about who snores obnoxiously and easily falls asleep at any given moment, even while flying. He's always in the way in Gobber's stall and he's the perfect match for Gobber's put-upon attitude. They banter like an old married couple. Otherwise, he's a lot like a Gronckle in most other ways.",
        summary: "A loyal, lava-launching helper -- when he isn't napping",
        profile_image:
          'http://localhost:3333/assets/dragons/grump/profile_grump.png',
        main_image: 'http://localhost:3333/assets/dragons/grump/grump.png',
        height_image:
          'http://localhost:3333/assets/dragons/grump/grump_dragon-height.png',
        class_id: 2,
        species_id: 4,
      },
      {
        name: 'HookFang',
        heads: 1,
        attack: 0.5,
        speed: 0.8,
        armor: 0.4,
        firepower: 0.5,
        shot_limit: 1.0,
        venom: 0.0,
        jaw_strength: 0.2,
        stealth: 0.4,
        intro: 'Hookfang and Snotlout have a... complicated relationship.',
        about:
          'Whereas most dragons obey their riders’ commands, Hookfang often enjoys doing the opposite of what Snotlout says. However, despite their occasional disagreements, Snotlout and Hookfang are both warriors at heart and work very well together in combat or competition with the other dragon riders.',
        summary:
          'Incendiary in temperament and short on patience, Hookfang would rather ignite 1st and think 2nd',
        profile_image:
          'http://localhost:3333/assets/dragons/hookfang/profile_hookfang.png',
        main_image:
          'http://localhost:3333/assets/dragons/hookfang/hookfang.png',
        height_image:
          'http://localhost:3333/assets/dragons/hookfang/hookfang_dragon-height.png',
        class_id: 7,
        species_id: 5,
      },
      {
        name: 'Light Fury',
        heads: 1,
        attack: 0.5,
        speed: 1.0,
        armor: 0.6,
        firepower: 0.5,
        shot_limit: 0.6,
        venom: 0.0,
        jaw_strength: 0.3,
        stealth: 0.8,
        intro: 'Hookfang and Snotlout have a... complicated relationship.',
        about:
          'Whereas most dragons obey their riders’ commands, Hookfang often enjoys doing the opposite of what Snotlout says. However, despite their occasional disagreements, Snotlout and Hookfang are both warriors at heart and work very well together in combat or competition with the other dragon riders.',
        summary:
          'Incendiary in temperament and short on patience, Hookfang would rather ignite 1st and think 2nd',
        profile_image:
          'http://localhost:3333/assets/dragons/hookfang/profile_hookfang.png',
        main_image:
          'http://localhost:3333/assets/dragons/hookfang/hookfang.png',
        height_image:
          'http://localhost:3333/assets/dragons/hookfang/hookfang_dragon-height.png',
        class_id: 1,
        species_id: 6,
      },
      {
        name: 'Meatlug',
        heads: 1,
        attack: 0.3,
        speed: 0.2,
        armor: 0.75,
        firepower: 0.5,
        shot_limit: 0.6,
        venom: 0.0,
        jaw_strength: 0.4,
        stealth: 0.2,
        intro:
          'Unlike other Gronckles, Meatlug is actually a very sweet and affectionate dragon, especially with her rider, Fishlegs.',
        about:
          'Meatlug and Fishlegs do everything together -- fly, research dragon trivia and, of course, eat!',
        summary:
          'Exceedingly demonstrative and sweet, yet quite self-conscious despite her thick hide',
        profile_image:
          'http://localhost:3333/assets/dragons/meatlug/profile_meatlug.png',
        main_image: 'http://localhost:3333/assets/dragons/meatlug/meatlug.png',
        height_image:
          'http://localhost:3333/assets/dragons/meatlug/meatlug_dragon-height.png',
        class_id: 2,
        species_id: 7,
      },
      {
        name: 'CloudJumper',
        heads: 1,
        attack: 0.3,
        speed: 0.4,
        armor: 0.2,
        firepower: 0.0,
        shot_limit: 0.8,
        venom: 0.0,
        jaw_strength: 0.0,
        stealth: 0.0,
        intro:
          "The owl-like Cloudjumper has been Valka's companion of choice for flying and rescuing other dragons over the last twenty years. Cloudjumper's pride, confidence, and large size lead him to think of himself as the top dragon in Valka's mountain fortress, second only to the Bewilderbeast, who is the king of all dragons in the nest.",
        about:
          'Due to their two decades of experience together, Cloudjumper and Valka share a wordless shorthand when flying. Whereas other dragon riders need to call out commands to turn or shoot, Cloudjumper instinctively knows when Valka wants him to move or attack, adding to their combined mystique and prowess in battle.',
        summary: 'Proud and confident',
        profile_image:
          'http://localhost:3333/assets/dragons/cloudjumper/profile_cloud_jumper.jpeg',
        main_image:
          'http://localhost:3333/assets/dragons/cloudjumper/cloudjumper.png',
        height_image:
          'http://localhost:3333/assets/dragons/cloudjumper/cloudjumper_dragon-height.png',
        class_id: 4,
        species_id: 8,
      },
      {
        name: 'SkullCrusher',
        heads: 1,
        attack: 0.4,
        speed: 0.35,
        armor: 0.4,
        firepower: 0.4,
        shot_limit: 0.4,
        venom: 0.0,
        jaw_strength: 0.2,
        stealth: 0.0,
        intro:
          "From the Rumblehorn species, Skullcrusher is part of a previously undiscovered class -- tracker class, being that he's the bloodhound of dragons.",
        about:
          "He can find anything on scent, like when he found Hiccup in Valka's nest based only on Hiccup's lost helmet. Skullcrusher looks like a truffle pig mixed with a rhino, but much bigger. He has the chitinous green-red iridescent coloring and surfacing of a scarab beetle and keeps his battle axe-shaped muzzle in the dirt, sniffing things out.",
        summary: "Doggedly determined when he's caught a scent",
        profile_image:
          'http://localhost:3333/assets/dragons/skullcrusher/profile_skullcrusher.jpeg',
        main_image:
          'http://localhost:3333/assets/dragons/skullcrusher/skullcrusher.png',
        height_image:
          'http://localhost:3333/assets/dragons/skullcrusher/skullcrusher_dragon-height.png',
        class_id: 6,
        species_id: 9,
      },
      {
        name: 'ArmorWing',
        heads: 1,
        attack: 0.2,
        speed: 0.2,
        armor: 1.0,
        firepower: 0.15,
        shot_limit: 0.1,
        venom: 0.0,
        jaw_strength: 0.2,
        stealth: 0.03,
        intro:
          'Sitting atop its hoarded pile of looted metal on Iron Isle, the Armorwing dragon appears at once impregnable and invincible, but appearances can be deceiving.',
        about:
          'With its welding torch-like flames and chain-whip tail, the Armorwing keeps enemies at bay long enough for it to attract new scraps of metal to its magnetic body and fuse them into an ever-expanding coat of armor.\n' +
          '\n' +
          'However, that armor is just a shell used for protection and intimidation. Beneath that reinforced hide lies a much different dragon that would prefer to remain in isolation with its private trove of discarded metal treasures.',
        summary: 'Metal-Plated Plunderer',
        profile_image:
          'http://localhost:3333/assets/dragons/armorwing/profile_armorwing.png',
        main_image:
          'http://localhost:3333/assets/dragons/armorwing/armorwing.png',
        height_image:
          'http://localhost:3333/assets/dragons/armorwing/armorwing_dragon-height.png',
        class_id: 3,
        species_id: 10,
      },
      {
        name: 'Eruptodon',
        heads: 1,
        attack: 0.2,
        speed: 0.3,
        armor: 0.8,
        firepower: 0.15,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.3,
        stealth: 0.03,
        intro:
          'Revered as a “great protector,” the Eruptodon eats the lava from inside Caldera Cay’s volcano to defend the Defenders of the Wing!',
        about:
          'With its craggy igneous hide, heat-shielded eyes, and endless appetite for magma, the Eruptodon prefers to live inside volcanos to be nearer to his main food source. This natural give and take between Geology and dragon protects the Defenders of the Wing from catastrophe and, as a result, the warrior tribe worships their loyal Eruptodon. Although not much of a fighter, the Eruptodon provides tremendous damage control by eating any runaway lava — even if it’s been regurgitated by Gronckles!',
        summary: 'Volcanic & valiant',
        profile_image:
          'http://localhost:3333/assets/dragons/eruptodon/profile_eruptodon.png',
        main_image:
          'http://localhost:3333/assets/dragons/eruptodon/eruptodon.png',
        height_image: null,
        class_id: 2,
        species_id: 11,
      },
      {
        name: 'Night Terror',
        heads: 1,
        attack: 0.15,
        speed: 0.3,
        armor: 0.1,
        firepower: 0.3,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.1,
        stealth: 0.35,
        intro:
          'While these nocturnal, bat-like dragons may not seem menacing on their own, Night Terrors are a formidable force to be reckoned with when united.',
        about:
          "Night Terrors are incredibly fast and strong fliers, and their ability to take the form of a larger dragon makes them a great threat to potential predators. As a result, they are quite useful serving as sentries of Dragon's Edge. Similar to other dragons who travel in packs, the Night Terrors respond to an alpha, a slightly larger white dragon who is leader of all the others. Without the alpha, the strength of the Night Terrors is lost and they become easy prey.",
        summary: 'Shy at first, but great as allies once trust is built',
        profile_image:
          'http://localhost:3333/assets/dragons/night-terror/profile_night_terror.png',
        main_image:
          'http://localhost:3333/assets/dragons/night-terror/night_terror.png',
        height_image:
          'http://localhost:3333/assets/dragons/night-terror/night_terror_dragon-height.png',
        class_id: 2,
        species_id: 12,
      },
      {
        name: 'SeaShocker',
        heads: 2,
        attack: 0.35,
        speed: 0.55,
        armor: 0.4,
        firepower: 0.1,
        shot_limit: 0.35,
        venom: 0.8,
        jaw_strength: 0.2,
        stealth: 0.2,
        intro:
          'Supremely furtive, Seashockers share attributes with many of the ocean’s most extraordinary creatures: the morphology of a manta ray, the sonar of a dolphin, and the bioluminescence of a deep dweller.',
        about:
          'Similar to Hideous Zipplebacks, Seashockers also possess two heads. But unlike their airborne cousins, Seashockers only have one thing on their twin brains: predation. If you ever see their dark fins amongst the waves, it’s already too late for you – the rest of their pod has already moved in to attack!\n' +
          '\n' +
          'Being water-based dragons, Seashockers do not breathe fire. Instead, their bites paralyze victims with an electrical charge that stuns even the biggest prey into submission. Perhaps this is the reason why all dragons fear the a Seashocker’s closest evolutionary relative – the electric eel!\n',
        summary: 'Masters of the sneak attack',
        profile_image:
          'http://localhost:3333/assets/dragons/seashocker/profile_seashocker.png',
        main_image:
          'http://localhost:3333/assets/dragons/seashocker/seashocker.png',
        height_image:
          'http://localhost:3333/assets/dragons/seashocker/seashocker_dragon-height.png',
        class_id: 5,
        species_id: 13,
      },
      {
        name: 'Skrill',
        heads: 1,
        attack: 0.3,
        speed: 0.65,
        armor: 0.2,
        firepower: 0.2,
        shot_limit: 0.1,
        venom: 0.0,
        jaw_strength: 0.1,
        stealth: 0.3,
        intro:
          'One of the most mysterious and feared species in the Book of Dragons, the Skrill is aggressive, powerful and nearly untrainable.',
        about:
          'Skrills do not breathe fire. Instead, they channel lightning down their metallic spines, firing it from their mouths in a shower of destructive blasts. They can also store this electrical power in their bodies and release it later on.\n' +
          '\n' +
          'Because of this unique firepower, Skrills tend to gravitate towards stormy weather. If you find yourself flying through a thunderstorm, watch out!\n' +
          '\n' +
          'Skrills are also tough. They can take a lot of damage in battle, and give as good as they get. However, the Skrill has one weakness… it cannot fire its lightning from the water. Force a Skrill into the ocean, and it loses the upper hand. Game code: SKRILLUP\n',
        summary: 'Belligerent and as unpredictable as lightning strikes',
        profile_image:
          'http://localhost:3333/assets/dragons/skrill/profile_skrill.png',
        main_image: 'http://localhost:3333/assets/dragons/skrill/skrill.png',
        height_image:
          'http://localhost:3333/assets/dragons/skrill/skrill_dragon_height.png',
        class_id: 1,
        species_id: 14,
      },
      {
        name: 'SnapTrapper',
        heads: 4,
        attack: 0.2,
        speed: 0.15,
        armor: 0.1,
        firepower: 0.15,
        shot_limit: 0.15,
        venom: 0.9,
        jaw_strength: 0.6,
        stealth: 1.0,
        intro:
          'While as beautiful and serene as an exotic flower upon first blush, the four-headed Snaptrapper is actually one of the most insidious and deadly dragons ever discovered.',
        about:
          'Upon opening their triple-split jaws, Snaptrappers release a sweetly intoxicating scent, stimulating hunger in nearby dragons and humans. When the unlucky victim goes foraging through the deceitful dragon’s leaf-like wings and fins, the Snaptrapper unfurls and strikes!',
        summary: 'Temptation and terror to the fourth power',
        profile_image:
          'http://localhost:3333/assets/dragons/snaptrapper/profile_snaptrapper.png',
        main_image:
          'http://localhost:3333/assets/dragons/snaptrapper/snaptrapper.png',
        height_image:
          'http://localhost:3333/assets/dragons/snaptrapper/snaptrapper_dragon-height.png',
        class_id: 3,
        species_id: 15,
      },
      {
        name: 'Terrible Terror',
        heads: 1,
        attack: 0.2,
        speed: 0.4,
        armor: 0.2,
        firepower: 0.3,
        shot_limit: 0.4,
        venom: 0.65,
        jaw_strength: 0.08,
        stealth: 0.2,
        intro: 'Known to sing on the rooftops of Berk.',
        about:
          'One of the smallest of all of the known dragons. But don’t let its tiny stature fool you. This pesky dragon has caused Vikings all sorts of problems, especially considering their affinity to travel in groups ranging from five to upwards of ten. They also pack a pretty lethal puff of fire if you upset them.',
        summary:
          'Inquisitive and curious animals, their only downfall is their territorial in-fighting',
        profile_image:
          'http://localhost:3333/assets/dragons/terrible-terror/profile_terrible_terror.png',
        main_image:
          'http://localhost:3333/assets/dragons/terrible-terror/terrible_terror.png',
        height_image:
          'http://localhost:3333/assets/dragons/terrible-terror/terrible_terror_dragon-height.png',
        class_id: 7,
        species_id: 16,
      },
      {
        name: 'ThunderDrum',
        heads: 1,
        attack: 0.3,
        speed: 0.5,
        armor: 0.2,
        firepower: 0.3,
        shot_limit: 0.4,
        venom: 0.0,
        jaw_strength: 0.2,
        stealth: 0.2,
        intro:
          'Instead of breathing fire, the Thunderdrum produces a strong concussive sound that can kill a human at close range. The blast is so powerful that the dragon is said to "get its power from Thor himself."',
        about:
          'Legend also has it that when a Thunderdrum hatches from its egg, it makes a sound so loud it rattles the sky!\n',
        summary:
          'Strident and assertive, the loud Thunderdrum always makes its feelings known',
        profile_image:
          'http://localhost:3333/assets/dragons/thunderdrum/profile_thunderdrum.png',
        main_image:
          'http://localhost:3333/assets/dragons/thunderdrum/thunderdrum.png',
        height_image:
          'http://localhost:3333/assets/dragons/thunderdrum/thunderdrum_dragon-height.png',
        class_id: 5,
        species_id: 17,
      },
      {
        name: 'TimberJack',
        heads: 1,
        attack: 0.2,
        speed: 0.4,
        armor: 0.15,
        firepower: 0.15,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.05,
        stealth: 0.2,
        intro:
          'Native to dense, wooded areas, Timberjacks are acutely sensitive creatures that prefer the peace and solace found in their beloved forests.',
        about:
          'But don’t let their introspective demeanor fool you. When attacked, betrayed, or offended, Timberjacks will start flailing their expansive wings, whose edges are razor-sharp – sharp enough to shear through the thickest tree trunk and still not slow down a Timberjack’s flight!',
        summary:
          'Modest serenity balanced with fierce protection of their riders',
        profile_image:
          'http://localhost:3333/assets/dragons/timberjack/profile_timberjack.png',
        main_image:
          'http://localhost:3333/assets/dragons/timberjack/timberjack.png',
        height_image:
          'http://localhost:3333/assets/dragons/timberjack/timberjack_dragon-height.png',
        class_id: 4,
        species_id: 18,
      },
      {
        name: 'Whispering Death',
        heads: 1,
        attack: 0.2,
        speed: 0.3,
        armor: 0.2,
        firepower: 0.08,
        shot_limit: 0.04,
        venom: 0.1,
        jaw_strength: 0.09,
        stealth: 0.2,
        intro:
          'Constantly hungry and always burrowing for unwitting food, the Whispering Death is one dragon that actually prefers being on the ground (or, more accurately, under it) to flying freely across the skies.',
        about:
          'Although plagued with poor eyesight and a terrible sense of direction that often gets them lost, Whispering Deaths more than make up for these weak points with their multiple rows of buzz-saw teeth that can bore through any solid material, including rock. It is this signature drilling power that creates the hushed rumbling sound which always announces a Whispering Death before it bursts out of the earth to attack.\n',
        summary:
          'Blindly aggressive and capable of holding a grudge like no other dragon',
        profile_image:
          'http://localhost:3333/assets/dragons/whispering-death/profile_whispering_death.png',
        main_image:
          'http://localhost:3333/assets/dragons/whispering-death/whispering_death.png',
        height_image:
          'http://localhost:3333/assets/dragons/whispering-death/whispering_death_dragon-height.png',
        class_id: 2,
        species_id: 19,
      },
      {
        name: 'Baby Gronckle',
        heads: 1,
        attack: 0.1,
        speed: 0.08,
        armor: 0.4,
        firepower: 0.2,
        shot_limit: 0.1,
        venom: 0.0,
        jaw_strength: 0.1,
        stealth: 0.05,
        intro:
          'Even at an early age, baby Gronckles mirror their adult counterparts with their robust bodies and relatively tiny wings.',
        about:
          'Baby Gronckles make up for their small wing size with tremendous flapping velocity, like hummingbirds. As such, Gronckles young and old are the only dragons that can fly backwards or side to side like a helicopter. Like most children, baby Gronckles need lots of naps and have occasionally been observed to fall asleep mid-flight. And while they may seem cranky if awakened too early, baby Gronckles’ barks are far worse than their bites. Although they bellow and open their mouths to display their growing tusks as they are teething, baby Gronckles seldom attack one another.',
        summary:
          'Bouncing boulders of joy that need lots of sleep, food, and attention',
        profile_image:
          'http://localhost:3333/assets/dragons/baby-gronckle/profile_baby_gronckle.png',
        main_image:
          'http://localhost:3333/assets/dragons/baby-gronckle/baby_gronckle.png',
        height_image:
          'http://localhost:3333/assets/dragons/baby-gronckle/baby_gronckle_dragon-height.png',
        class_id: 2,
        species_id: 7,
      },
      {
        name: 'Baby Nadder',
        heads: 1,
        attack: 0.1,
        speed: 0.15,
        armor: 0.1,
        firepower: 0.1,
        shot_limit: 0.15,
        venom: 0.2,
        jaw_strength: 0.05,
        stealth: 0.08,
        intro:
          'Much like their adult counterparts, baby Deadly Nadders are as beautiful as they are deadly with their tropical colorations.',
        about:
          'Hatching from spiked eggs, baby Nadders are notable for their spryness and alert senses, as well as their ability to fly a bit sooner than other hatchlings, such as baby Gronckles or baby Zipplebacks. Baby Nadders tend to flock around their mothers for protection and nourishment (usually in the form of regurgitated fish) and only start to strike out on their own once they reach maturity in their broad wing stage.',
        summary:
          'Quick, Curious, and prone to temper-tantrums - Like the toddlers of the dragon world',
        profile_image:
          'http://localhost:3333/assets/dragons/baby-nadder/profile_baby_nadder.png',
        main_image:
          'http://localhost:3333/assets/dragons/baby-nadder/baby_nadder.png',
        height_image:
          'http://localhost:3333/assets/dragons/baby-nadder/baby_nadder_dragon-height.png',
        class_id: 6,
        species_id: 2,
      },
      {
        name: 'Baby Nightmare',
        heads: 1,
        attack: 0.3,
        speed: 0.35,
        armor: 0.0,
        firepower: 0.3,
        shot_limit: 0.25,
        venom: 0.2,
        jaw_strength: 0.08,
        stealth: 0.1,
        intro:
          'Hatching fast and fiery, baby Monstrous Nightmares are quick to separate from the rest of the litter and assert their independence within minutes of their birth.',
        about:
          'Much like their adult counterparts, baby Nightmares are skilled hunters and adaptive survivors, making them one of the hardiest dragon breeds.\n' +
          '\n' +
          'Despite their self-reliance and solitary natures, Nightmares grow up to be some of the most devoted dragons and are particularly protective of their Viking riders, even if they have a funny way of showing it sometimes -- just ask Snotlout!',
        summary: 'Willful, yet warm-hearted',
        profile_image:
          'http://localhost:3333/assets/dragons/baby-nightmare/profile_baby_nightmare.png',
        main_image:
          'http://localhost:3333/assets/dragons/baby-nightmare/baby_nightmare.png',
        height_image:
          'http://localhost:3333/assets/dragons/baby-nightmare/baby_nightmare_dragon-height.png',
        class_id: 7,
        species_id: 5,
      },
      {
        name: 'Baby Zippleback',
        heads: 2,
        attack: 0.1,
        speed: 0.2,
        armor: 0.1,
        firepower: 0.14,
        shot_limit: 0.12,
        venom: 0.0,
        jaw_strength: 0.1,
        stealth: 0.2,
        intro:
          'As any parent of twins might attest, sometimes double the babies can equal quadruple the headaches! Such is the case with baby Zipplebacks, whose two ornery heads typically want different things at the same time.',
        about:
          'While sometimes fussy, baby Zipplebacks do benefit from having a close relationship with their siblings, from increased hunting and defense skills (one head watches while the other makes sure the coast is clear) to higher levels of problem solving abilities (one head scares prey right into the waiting jaws of the other).\n' +
          '\n' +
          'Perhaps it is because of this close interpersonal relationship that makes some Zipplebacks seem aloof to humans. However, as those lucky (or crazy) enough to train a Zippleback soon discover, riding one of these double dragons is like having two friends in one!\n',
        summary: 'Double Trouble',
        profile_image:
          'http://localhost:3333/assets/dragons/baby-zippleback/profile_baby_zippleback.png',
        main_image:
          'http://localhost:3333/assets/dragons/baby-zippleback/baby_zippleback.png',
        height_image:
          'http://localhost:3333/assets/dragons/baby-zippleback/baby_zippleback_dragon-height.png',
        class_id: 3,
        species_id: 3,
      },
      {
        name: "Drago's BeWilderBeast",
        heads: 1,
        attack: 1.0,
        speed: 0.2,
        armor: 0.8,
        firepower: 1.0,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.95,
        stealth: 0.0,
        intro:
          'Found as a hatchling during one of Drago Bludvist’s earliest conquests, this particular Bewilderbeast suffered the misfortune of being raised by a madman.',
        about:
          'Unlike Hiccup or Valka’s warm and empathic approach with dragons, Drago routinely abused his Bewilderbeast to cull out any perceived weakness and to establish a blind loyalty to the self-proclaimed “Dragon God.” What emerged from this torturous crucible was Drago’s perfect secret weapon: A vicious Bewilderbeast that has known nothing but hatred and a single goal… to end the reign of Valka’s alpha Bewilderbeast once and for all.',
        summary: 'Scarred and bred for battle',
        profile_image:
          'http://localhost:3333/assets/dragons/dragos-bewilderbeast/profile_dragos_bewilderbeast.png',
        main_image:
          'http://localhost:3333/assets/dragons/dragos-bewilderbeast/dragos_bewilderbeast.png',
        height_image:
          'http://localhost:3333/assets/dragons/dragos-bewilderbeast/dragos_bewilderbeast_dragon-height.png',
        class_id: 5,
        species_id: 20,
      },
      {
        name: "Valka's BeWilderBeast",
        heads: 1,
        attack: 1.0,
        speed: 0.2,
        armor: 0.7,
        firepower: 1.0,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.95,
        stealth: 0.0,
        intro:
          'As with all members of the animal kingdom, dragons, too, must follow a hierarchy of power and leadership.',
        about:
          'At the apex of that chain of command rules an exceedingly rare alpha dragon to which all others bow – the Bewilderbeast. However, Bewilderbeasts are not born to that alpha status; it is earned through combat, vigilance and, most importantly, a desire to protect the dragons in its nest. Fortunately for Bewilderbeasts, there are few other dragons in the world that can match their intimidating stature and ever hope to compete for the designation of "king of all dragons."',
        summary: 'The benevolent and leonine king of all dragons',
        profile_image:
          'http://localhost:3333/assets/dragons/valkas-bewilderbeast/profile_valkas_bewilderbeast.png',
        main_image:
          'http://localhost:3333/assets/dragons/valkas-bewilderbeast/valkas_bewilderbeast.png',
        height_image:
          'http://localhost:3333/assets/dragons/valkas-bewilderbeast/valkas_bewilderbeast_dragon-height.png',
        class_id: 5,
        species_id: 20,
      },
      {
        name: 'Death Song',
        heads: 1,
        attack: 0.4,
        speed: 0.6,
        armor: 0.35,
        firepower: 0.2,
        shot_limit: 0.2,
        venom: 0.0,
        jaw_strength: 0.2,
        stealth: 0.0,
        intro:
          'Rather than shooting fire, the Death Song spits thick amber-like substance at its prey to form an impenetrable cocoon.',
        about:
          "Although deceptively beautiful in appearance and melody, the Death Song has a lethal quality that is reminiscent of the Black Widow. Inhabiting a lush island beyond the archipelago, this dragon vocalizes its beautiful and hypnotic siren call in order to lure other dragons, which it then targets as prey. Rather than using fire to attack, the Death Song shoots out a liquid substance which traps and preserves victims as it hardens into a stiff amber cocoon that is penetrable only by flame. Typically, the Death Song chooses to entrap dragons only, but it also preys upon any humans unfortunate enough to make their way to its island. Its key weaknesses are Thunderdrums, which find themselves mostly immune due to the Death Song's lethal lullaby due to poor hearing, and small enclosed spaces which can render it vulnerable to its own song.",
        summary:
          'Enticing and siren-like, this species of dragon is decidedly solitary',
        profile_image:
          'http://localhost:3333/assets/dragons/death-song/profile_death_song.png',
        main_image:
          'http://localhost:3333/assets/dragons/death-song/death_song.png',
        height_image:
          'http://localhost:3333/assets/dragons/death-song/death_song_dragon-height.png',
        class_id: 3,
        species_id: 21,
      },
      {
        name: 'Dramillion',
        heads: 1,
        attack: 0.35,
        speed: 0.5,
        armor: 0.2,
        firepower: 0.4,
        shot_limit: 1.0,
        venom: 0.0,
        jaw_strength: 0.1,
        stealth: 0.1,
        intro:
          'Although normally withdrawn and wary of humans, Dramillions mimic the fire blasts of any type of dragon they encounter.',
        about:
          'With their striking coloration, peaked crowns, and curved beaks, Dramillions have often been called the parrots of the dragon world. But the similarity extends beyond the surface level, for these uncanny creatures can also repeat any kind of dragon fire they see. The Dramillion duplicates blasts that look — and burn — like the real thing. It’s no wonder, then, that Dragon Hunters once forced Dramillions to reproduce their many fire forms for training drills. Dramillions have the highest shot count of any dragon species by far. But even these copycats will hit empty after enough blasts. Fortunately, Dramillions can also transfer flames to each other. If one runs out of heat, the rest of the pack shares their reserves with the spent Dramillion so it can fire up again!',
        summary: 'Imitative',
        profile_image:
          'http://localhost:3333/assets/dragons/dramillion/profile_dramillion.png',
        main_image:
          'http://localhost:3333/assets/dragons/dramillion/dramillion.png',
        height_image:
          'http://localhost:3333/assets/dragons/dramillion/dramillion_dragon-height.png',
        class_id: 3,
        species_id: 21,
      },
    ];

    await queryInterface.bulkInsert('dragon', dragons, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dragon', null, {});
  },
};
