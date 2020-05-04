export default
{
    1:
    {
        id: -1,
        name: 'campaign level 1',
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

        level_entities:
        [
            {
                layer:  6,
                tags:            ['player', 'movable', 'living'],
                components:
                {
                    CBoundingBox: [],
                    CHealth:         [100, true],
                    CWeapon: [],
                    CTransform:      [256, 256],
                    CAnimation:      ['air'],
                    CInput:          true,
                    CState:          'jumping',
                    CGravity:        [1],
                    CGrabber:       [],
                }
            },
            
            {
                name: 'basedoorgreen',
                layer: 2,
                tags: ['tile'],
                components:
                {
                    CBoundingBox: [],
                    CTransform: [256,500], 
                    CAnimation: ['basedoorgreen'],
                }
            },
        ]
    },
    2:
    {

    },
    3:
    {

    },
    4:
    {

    },
    5:
    {

    },
}