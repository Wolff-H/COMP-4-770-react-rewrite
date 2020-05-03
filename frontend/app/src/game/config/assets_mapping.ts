export default
{
    /**
     * @description 
     * object structure ->
     * animation_name: [src_path, slides_total, play_interval, if_repeat]
     */
    animation_mapping:
    {
        block:              ['mario/block.png',     1, 0, 1],
        brick:              ['mario/brick.png',     1, 0, 1],
        ground:             ['mario/ground.png',    1, 0, 1],
        flag:               ['mario/flag.png',      1, 0, 1],
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