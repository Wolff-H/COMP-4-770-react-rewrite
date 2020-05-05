export default
{
    id: -1,
    name: 'demo level',
    author: '*official*',
    description: 'this is a demo level config for campaign level 1',

    victory_conditions:
    {
        eliminate:
        {
            all_explicit_enemies: true,
            entities_by_tag:
            {
                enemy: 3,
                block: 10,
                brick: 15,
            }
        },
        survive:
        {
            time: 8000,
        },
        trigger:
        {
            flag: 5,
        },
    },

    failure_conditions:
    {
        player_deaths: 3,
        // time_limit: 5000,    // 失败条件的时限与胜利条件的时限是互斥的
    },

    available_equipments:
    {
        // 物品     可购买数量上限（0不可用，-1无限）
        double_health:       1,    // 填非零值为可用，规范填1
        double_energy:       1,    // 填非零值为可用，规范填1
        damage_scroll:      -1,
        defense_scroll:     -1,
        health_scroll:      -1,
        energy_scroll:      -1,
        speed_scroll:       -1,
        gravity_scroll:     -1,
        health_potion:      -1,
        energy_potion:      -1,
    },

    player_config:
    {
        speeds:
        {
            move: 6,
            jump: 20,
            freefall_limit: 10,
        },
        weapons:
        {    //        消耗能量  间隔帧数  伤害
            melee:          [  0,  25,  15],
            pistol:         [  0,  50,  10],
            rifle:          [ 10,  25,  10],
            machine_gun:    [ 10,   5,  10],
            laser:          [200, 400, 300],
            grenade:        [ 50,  75,  50],
        },
    },

    entities:
    [
        {
            layer:              6,
            tags:               ['player'],
            components:
            {
                CTransform:     [256, 256],
                CBoundingBox:   [],
                CHealth:        [100, true],
                CPlayerWeapon:  [],
                CInput:         [1, 1],
                CState:         'jumping',
                CGravity:       1,
            }
        },
        {
            layer:              2,
            tags:               ['tile'],
            components:
            {
                CTransform:     [256,500], 
                CBoundingBox:   [],
                CAnimation:     ['basedoorgreen'],
            }
        },
    ]
}
//     {
//         id: -2,
//         name: 'campaign level 2',
//         author: '*official*',
//         description: 'this is a demo level config for campaign level 2',
//     },
//     {
//         id: -3,
//         name: 'campaign level 3',
//         author: '*official*',
//         description: 'this is a demo level config for campaign level 3',
//     },
//     {
//         id: -4,
//         name: 'campaign level 4',
//         author: '*official*',
//         description: 'this is a demo level config for campaign level 4',
//     },
//     {
//         id: -5,
//         name: 'campaign level 5',
//         author: '*official*',
//         description: 'this is a demo level config for campaign level 5',
//     },