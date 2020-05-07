export default
{
    /**
     * @description 
     * object structure ->
     * animation_name: [src_path, slides_total, play_interval]
     */
    animation_mapping:
    {
        base_block:             ['blocks/base_block.png',           1, 0],
        base_block_breakable:   ['blocks/base_block_breakable.png', 1, 0],
        dirt:                   ['blocks/dirt.png',                 1, 0],
        dirt_grass:             ['blocks/dirt_grass.png',           1, 0],
        stand:                  ['player/stand.png',                1, 0],
        unset_dec:              ['misc/unset_dec.png',              1, 0],
        unset_tile:             ['misc/unset_tile.png',             1, 0],

    },
    /**
     * @description
     * object structure ->
     * sound_name: src_path
     */
    sound_mapping:
    {
        explosion:          'weapons/explosion.wav',
        gun_shot:           'weapons/gun_shot.wav',
    },
    /**
     * @description
     * object structure ->
     * texture_name: src_path
     */
    texture_mapping:
    {
        planet_ground:      'backgrounds/planet_ground.jpg',
        nebula_highland:    'backgrounds/nebula_highland.png',
        starry_night:       'backgrounds/starry_night.png',
    },
}