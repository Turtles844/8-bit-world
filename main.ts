namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Sign = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Dummy = SpriteKind.create()
    export const Playerprojectile = SpriteKind.create()
    export const screen = SpriteKind.create()
    export const shop = SpriteKind.create()
}
namespace StatusBarKind {
    export const Houseenemyhealth = StatusBarKind.create()
    export const Bigguyhealth = StatusBarKind.create()
    export const Playerhealth = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    Houseenemy = true
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    if (Enemy_gone == false) {
        if (Hardmode == true) {
            My_enemy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(My_enemy, assets.tile`Floor`)
            My_enemy.follow(mySprite, 60)
            statusbar2 = statusbars.create(30, 4, StatusBarKind.Houseenemyhealth)
            Enemyhealth1 = true
            statusbar2.attachToSprite(My_enemy)
            statusbar2.setColor(7, 2)
            statusbar2.setBarBorder(0.5, 15)
        } else {
            My_enemy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(My_enemy, assets.tile`Floor`)
            My_enemy.follow(mySprite, 50)
            statusbar2 = statusbars.create(20, 4, StatusBarKind.Houseenemyhealth)
            Enemyhealth1 = true
            statusbar2.attachToSprite(My_enemy)
            statusbar2.setColor(7, 2)
            statusbar2.setBarBorder(0.5, 15)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Up = 1
    Down = 0
    Left = 0
    Right = 0
})
sprites.onOverlap(SpriteKind.Playerprojectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Damage_2 = true
    sprites.destroy(sprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SH_open == true) {
        myMenu6.close()
        SH_open = false
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile23`)
        controller.moveSprite(mySprite, 100, 100)
    }
    if (Phire == true) {
        if (spellsopen != true) {
            if (Up == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f 2 2 2 f f f . . . 
                    . . . f f 2 2 2 2 2 4 4 f . . . 
                    . . f f 4 4 2 4 4 2 2 4 f . . . 
                    . . f 2 4 2 4 5 4 4 2 2 f f . . 
                    . . f 2 4 4 2 4 5 4 2 2 2 f . . 
                    . . f 2 4 2 2 2 4 5 2 4 2 f . . 
                    . . f f 2 2 4 5 4 5 2 4 2 f . . 
                    . . f 2 2 2 2 4 5 4 2 2 2 f . . 
                    . . f f f 2 2 2 2 4 2 f f f . . 
                    . . . . f f 4 2 2 2 2 2 f . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -50)
                projectile.setKind(SpriteKind.Playerprojectile)
            } else if (Down == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f 2 2 2 f f f . . . 
                    . . . f f 2 2 2 2 2 4 4 f . . . 
                    . . f f 4 4 2 4 4 2 2 4 f . . . 
                    . . f 2 4 2 4 5 4 4 2 2 f f . . 
                    . . f 2 4 4 2 4 5 4 2 2 2 f . . 
                    . . f 2 4 2 2 2 4 5 2 4 2 f . . 
                    . . f f 2 2 4 5 4 5 2 4 2 f . . 
                    . . f 2 2 2 2 4 5 4 2 2 2 f . . 
                    . . f f f 2 2 2 2 4 2 f f f . . 
                    . . . . f f 4 2 2 2 2 2 f . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 60)
                projectile.setKind(SpriteKind.Playerprojectile)
            } else if (Left == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f 2 2 2 f f f . . . 
                    . . . f f 2 2 2 2 2 4 4 f . . . 
                    . . f f 4 4 2 4 4 2 2 4 f . . . 
                    . . f 2 4 2 4 5 4 4 2 2 f f . . 
                    . . f 2 4 4 2 4 5 4 2 2 2 f . . 
                    . . f 2 4 2 2 2 4 5 2 4 2 f . . 
                    . . f f 2 2 4 5 4 5 2 4 2 f . . 
                    . . f 2 2 2 2 4 5 4 2 2 2 f . . 
                    . . f f f 2 2 2 2 4 2 f f f . . 
                    . . . . f f 4 2 2 2 2 2 f . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -50, 0)
                projectile.setKind(SpriteKind.Playerprojectile)
            } else if (Right == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f 2 2 2 f f f . . . 
                    . . . f f 2 2 2 2 2 4 4 f . . . 
                    . . f f 4 4 2 4 4 2 2 4 f . . . 
                    . . f 2 4 2 4 5 4 4 2 2 f f . . 
                    . . f 2 4 4 2 4 5 4 2 2 2 f . . 
                    . . f 2 4 2 2 2 4 5 2 4 2 f . . 
                    . . f f 2 2 4 5 4 5 2 4 2 f . . 
                    . . f 2 2 2 2 4 5 4 2 2 2 f . . 
                    . . f f f 2 2 2 2 4 2 f f f . . 
                    . . . . f f 4 2 2 2 2 2 f . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 50, 0)
                projectile.setKind(SpriteKind.Playerprojectile)
            }
        }
    } else if (Lignig == true) {
        if (spellsopen != true) {
            if (Up == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -100)
                projectile2.setKind(SpriteKind.Playerprojectile)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . d d 5 1 1 1 1 1 1 1 5 d d . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                250,
                true
                )
            } else if (Down == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 100)
                projectile2.setKind(SpriteKind.Playerprojectile)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . d d 5 1 1 1 1 1 1 1 5 d d . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                250,
                true
                )
            } else if (Left == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -100, 0)
                projectile2.setKind(SpriteKind.Playerprojectile)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . d d 5 1 1 1 1 1 1 1 5 d d . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                250,
                true
                )
            } else if (Right == 1) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 100, 0)
                projectile2.setKind(SpriteKind.Playerprojectile)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . b d d 5 5 5 5 5 5 5 d d b . 
                    . . . b c c d 5 5 5 d c c b . . 
                    . . . . . . c d 5 d c . . . . . 
                    . . . . . . . c 5 c . . . . . . 
                    . . . . . . . c d c . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . d d 5 1 1 1 1 1 1 1 5 d d . 
                    . . b b 5 5 5 1 1 1 5 5 5 b b . 
                    . . . c c 5 5 5 1 5 5 5 c c . . 
                    . . . . b 5 5 5 1 5 5 5 b . . . 
                    . . . . b b c 5 5 5 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                250,
                true
                )
            }
        }
    } else if (None == true) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Floor0`, function (sprite, location) {
    if (Newmapfix == true) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 40))
})
statusbars.onZero(StatusBarKind.Playerhealth, function (status) {
	
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    Damage = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (SH_open == false) {
        myMenu6 = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem("apple $2", img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `),
        miniMenu.createMenuItem("carrot $4", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 7 . 7 7 7 
            . . . . . . . . 4 4 4 . 7 7 . . 
            . . . . . . . . 4 4 4 7 7 7 7 . 
            . . . . . . . 4 4 4 4 4 4 . 7 7 
            . . . . . . 4 4 4 4 4 4 4 . . . 
            . . . . . 4 5 5 4 4 5 5 5 4 . . 
            . . . . . 4 4 5 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . . . 5 5 4 4 5 5 5 . . . . . . 
            . . 4 4 5 5 4 4 4 . . . . . . . 
            . . 4 4 4 4 4 . . . . . . . . . 
            . 4 4 4 4 . . . . . . . . . . . 
            5 5 4 4 . . . . . . . . . . . . 
            4 4 . . . . . . . . . . . . . . 
            4 . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("liging $30", assets.image`myImage3`),
        miniMenu.createMenuItem("sell", img`
            . . . . . . . 7 7 . . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . 7 7 7 . . 7 7 . . . . 7 7 . 
            . . 7 7 . . . 7 7 . . . . . 7 . 
            . . 7 7 . . . 7 7 . . . . . . . 
            . . 7 7 . . . 7 7 . . . . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . . . . . . 7 7 . . . 7 7 7 . 
            . . . . . . . 7 7 . . . . 7 7 . 
            . . . . . . . 7 7 . . . . 7 7 . 
            . 7 7 . . . . 7 7 . . . 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . . . . 7 7 . . . . . . . 
            `)
        ])
        myMenu6.setStayInScreen(true)
        myMenu6.setTitle("Shop")
        myMenu6.setDimensions(100, 100)
        myMenu6.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        myMenu6.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 5)
        myMenu6.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                if (info.score() >= 2) {
                    Inventory.push(miniMenu.createMenuItem("Apple", img`
                        . . . . . . . e c 7 . . . . . . 
                        . . . . e e e c 7 7 e e . . . . 
                        . . c e e e e c 7 e 2 2 e e . . 
                        . c e e e e e c 6 e e 2 2 2 e . 
                        . c e e e 2 e c c 2 4 5 4 2 e . 
                        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                        . . . 2 2 e e 4 4 4 2 e e . . . 
                        . . . . . 2 2 e e e e . . . . . 
                        `))
                    info.changeScoreBy(-2)
                }
            } else if (selectedIndex == 1) {
                if (info.score() >= 4) {
                    Inventory.push(miniMenu.createMenuItem("Apple", img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . 7 . 7 7 7 
                        . . . . . . . . 4 4 4 . 7 7 . . 
                        . . . . . . . . 4 4 4 7 7 7 7 . 
                        . . . . . . . 4 4 4 4 4 4 . 7 7 
                        . . . . . . 4 4 4 4 4 4 4 . . . 
                        . . . . . 4 5 5 4 4 5 5 5 4 . . 
                        . . . . . 4 4 5 4 4 4 4 . . . . 
                        . . . 4 4 4 4 4 4 4 4 4 . . . . 
                        . . . 5 5 4 4 5 5 5 . . . . . . 
                        . . 4 4 5 5 4 4 4 . . . . . . . 
                        . . 4 4 4 4 4 . . . . . . . . . 
                        . 4 4 4 4 . . . . . . . . . . . 
                        5 5 4 4 . . . . . . . . . . . . 
                        4 4 . . . . . . . . . . . . . . 
                        4 . . . . . . . . . . . . . . . 
                        `))
                    info.changeScoreBy(-4)
                }
            } else if (selectedIndex == 2) {
                if (info.score() >= 30) {
                    spell[1] = miniMenu.createMenuItem("liging", assets.image`myImage3`)
                    info.changeScoreBy(-30)
                    lignig_on = true
                }
            } else if (selectedIndex == 3) {
                game.splash("Coming soon")
            }
        })
        SH_open = true
        controller.moveSprite(mySprite, 0, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spellsopen != true) {
        if (OptionsOpen != true || Shop_is_open != true) {
            if (SH_open != true) {
                if (Minimapopen != true) {
                    if (Up == 1) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . 7 . . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . . 7 9 7 . . . . . . . 
                            . . . . . f f f f f . . . . . . 
                            . . . . . . f f f . . . . . . . 
                            . . . . . . . f . . . . . . . . 
                            . . . . . . . f . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mySprite, 0, -50)
                        projectile.setKind(SpriteKind.Playerprojectile)
                    } else if (Down == 1) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . f . . . . . . . 
                            . . . . . . . . f . . . . . . . 
                            . . . . . . . f f f . . . . . . 
                            . . . . . . f f f f f . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . 7 9 7 . . . . . . 
                            . . . . . . . . 7 . . . . . . . 
                            `, mySprite, 0, 50)
                        projectile.setKind(SpriteKind.Playerprojectile)
                    } else if (Left == 1) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . f . . . . . 
                            . 7 7 7 7 7 7 7 7 7 f f . . . . 
                            7 9 9 9 9 9 9 9 9 9 f f f f . . 
                            . 7 7 7 7 7 7 7 7 7 f f . . . . 
                            . . . . . . . . . . f . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mySprite, -50, 0)
                        projectile.setKind(SpriteKind.Playerprojectile)
                    } else if (Right == 1) {
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . f . . . . . . . . . . 
                            . . . . f f 7 7 7 7 7 7 7 7 7 . 
                            . . f f f f 9 9 9 9 9 9 9 9 9 7 
                            . . . . f f 7 7 7 7 7 7 7 7 7 . 
                            . . . . . f . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, mySprite, 50, 0)
                        projectile.setKind(SpriteKind.Playerprojectile)
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    Damage4 = true
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Up = 0
    Down = 0
    Left = 1
    Right = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Up = 0
    Down = 0
    Left = 0
    Right = 1
})
statusbars.onZero(StatusBarKind.Bigguyhealth, function (status) {
    sprites.destroy(BigGyattGary)
    sprites.destroy(statusbar3)
    Inventory[2] = miniMenu.createMenuItem("Gary", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f f 2 2 f 2 2 2 f f f . . 
        . . f 2 f f 2 f 2 f f f 2 f . . 
        . . f f 2 3 3 3 3 3 3 2 2 f . . 
        f f f f 3 3 3 3 3 3 3 2 f f f f 
        f 2 2 3 3 1 f 3 3 1 1 3 3 2 2 f 
        f f 2 3 3 1 1 3 3 f 1 3 3 2 f f 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 d d d d 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    GaryOn = true
    Inventory.push(miniMenu.createMenuItem("Apple", img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `))
    info.changeScoreBy(25)
    spell[0] = miniMenu.createMenuItem("phire", assets.image`myImage2`)
    phire_on = true
})
sprites.onOverlap(SpriteKind.Playerprojectile, SpriteKind.Dummy, function (sprite, otherSprite) {
    Dummy_killed += 1
    sprites.destroy(otherSprite, effects.ashes, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Playerprojectile)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Damage = true
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Up = 0
    Down = 1
    Left = 0
    Right = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Heal = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    if (Enemy_gone == true) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 7))
        if (IsGaryGone == true) {
            sprites.destroy(BigGyattGary)
        }
        if (Hardmode == true) {
            if (IsGaryGone == false) {
                BigGyattGary = sprites.create(assets.image`Boss`, SpriteKind.Boss)
            }
            BigGyattGary.follow(mySprite, 21)
            statusbar3 = statusbars.create(40, 4, StatusBarKind.Bigguyhealth)
            statusbar3.attachToSprite(BigGyattGary)
            statusbar3.setColor(7, 2)
            statusbar3.setBarBorder(0.75, 15)
            Fix = true
            Entered_boss = true
        } else {
            if (IsGaryGone == false) {
                BigGyattGary = sprites.create(assets.image`Boss`, SpriteKind.Boss)
            }
            BigGyattGary.follow(mySprite, 10)
            statusbar3 = statusbars.create(20, 4, StatusBarKind.Bigguyhealth)
            statusbar3.attachToSprite(BigGyattGary)
            statusbar3.setColor(7, 2)
            statusbar3.setBarBorder(0.75, 15)
            Fix = true
            Entered_boss = true
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spellsopen == true) {
        myMenu6.close()
        controller.moveSprite(mySprite, 100, 100)
        spellsopen = false
    }
    if (OptionsOpen == true) {
        if (Shop_is_open == true) {
            myMenu.close()
            Shop_is_open = false
            controller.moveSprite(mySprite)
        }
        if (Minimapopen == true) {
            sprites.destroy(Minimap)
        }
        myMenu2.close()
        OptionsOpen = false
        controller.moveSprite(mySprite)
    } else {
        OptionsOpen = true
        myMenu2 = miniMenu.createMenuFromArray(myMenu3)
        myMenu2.setTitle("Options")
        myMenu2.setDimensions(100, 76)
        myMenu2.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 8)
        controller.moveSprite(mySprite, 0, 0)
        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 12)
        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 15)
        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
        myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                myMenu2.close()
                Shop_is_open = true
                myMenu = miniMenu.createMenuFromArray(Inventory)
                myMenu.setTitle("Inventory")
                myMenu.setDimensions(100, 100)
                myMenu.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
                myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 8)
                controller.moveSprite(mySprite, 0, 0)
                myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 12)
                myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 15)
                myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
                myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 1 && GreenOn == true) {
                        mySprite.setImage(assets.image`Hero`)
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`myAnim`,
                        200,
                        true
                        )
                    }
                    if (selectedIndex == 2 && GaryOn == true) {
                        mySprite.setImage(assets.image`Hero1`)
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`myAnim1`,
                        200,
                        true
                        )
                    }
                    if (selectedIndex == 0) {
                        mySprite.setImage(assets.image`Hero0`)
                        animation.runImageAnimation(
                        mySprite,
                        assets.animation`myAnim0`,
                        200,
                        true
                        )
                    }
                    if (selectedIndex >= 3) {
                        statusbar.value += 20
                        Inventory.removeAt(selectedIndex)
                    }
                })
            } else if (selectedIndex == 1) {
                myMenu2.close()
                myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 15)
                minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.Double)
                Minimap = sprites.create(minimap.getImage(myMinimap), SpriteKind.MiniMenu)
                Minimap.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
                Minimapopen = true
                if (shop_made == true) {
                    minimap.includeSprite(myMinimap, shop_guy, MinimapSpriteScale.Octuple)
                }
            } else if (selectedIndex == 2) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                if (spellsopen == true) {
                    myMenu6.close()
                } else if (spellsopen == false) {
                    myMenu2.close()
                    spellsmade = true
                    myMenu6 = miniMenu.createMenuFromArray(spell)
                    controller.moveSprite(mySprite, 0, 0)
                    myMenu6.setDimensions(100, 100)
                    myMenu6.setTitle("Spells")
                    spellsopen = true
                    myMenu6.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
                    myMenu6.onButtonPressed(controller.A, function (selection, selectedIndex) {
                        if (selectedIndex == 0) {
                            if (phire_on == true) {
                                Phire = true
                                Lignig = false
                                None = false
                                Phire = true
                            }
                        } else if (selectedIndex == 1) {
                            if (lignig_on == true) {
                                Lignig = true
                                None = false
                                Phire = false
                                Lignig = true
                            }
                        } else if (selectedIndex == 2) {
                            None = true
                            Phire = false
                            Lignig = false
                        }
                    })
                }
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 1))
    if (true) {
        sprites.destroy(BigGyattGary)
    }
    Entered_boss = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Playerprojectile, SpriteKind.Boss, function (sprite, otherSprite) {
    if (sprite == projectile) {
        Damage_3 = true
        sprites.destroy(sprite)
    }
})
statusbars.onZero(StatusBarKind.Houseenemyhealth, function (status) {
    sprites.destroy(My_enemy)
    Enemy_gone = true
    sprites.destroy(statusbar2)
    Inventory[1] = miniMenu.createMenuItem("Green tunic", img`
        . . . . . . . . . . . . . . . . 
        . . . . e 7 7 6 6 6 6 e . . . . 
        . 7 7 7 e e 6 6 6 6 e e 7 7 7 . 
        7 7 7 7 7 e e e 6 e e 7 7 7 7 7 
        7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 . 7 7 7 7 7 7 7 7 7 7 . 7 7 
        7 7 . 7 7 7 7 7 7 7 7 7 7 . 7 7 
        7 e . 7 7 7 7 7 7 7 7 7 7 . e 7 
        e e . 7 7 7 7 7 7 7 7 7 7 . e e 
        . . . e 5 5 e e e e e e e . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        `)
    GreenOn = true
    Inventory.push(miniMenu.createMenuItem("Apple", img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `))
    info.changeScoreBy(15)
})
let Gossipgirl: Sprite = null
let Farmer2: Sprite = null
let Farmer1: Sprite = null
let Flameball: Sprite = null
let spellsmade = false
let shop_guy: Sprite = null
let myMinimap: minimap.Minimap = null
let GreenOn = false
let myMenu2: miniMenu.MenuSprite = null
let Minimap: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let Entered_boss = false
let GaryOn = false
let statusbar3: StatusBarSprite = null
let BigGyattGary: Sprite = null
let Damage4 = false
let Minimapopen = false
let Shop_is_open = false
let projectile2: Sprite = null
let projectile: Sprite = null
let spellsopen = false
let None = false
let Lignig = false
let Phire = false
let myMenu6: miniMenu.MenuSprite = null
let SH_open = false
let statusbar2: StatusBarSprite = null
let My_enemy: Sprite = null
let spell: miniMenu.MenuItem[] = []
let lignig_on = false
let phire_on = false
let Mapspawned = false
let Hardmode = false
let Easymode = false
let myMenu4: miniMenu.MenuSprite = null
let myMenu3: miniMenu.MenuItem[] = []
let OptionsOpen = false
let Inventory: miniMenu.MenuItem[] = []
let shop_made = false
let IsGaryGone = false
let Fix = false
let Damage_3 = false
let Damage_2 = false
let Damage = false
let Left_animation = false
let No_new_map = false
let Newmapfix = false
let New_map = false
let Heal = false
let Enemy_gone = false
let Enemyhealth1 = false
let Houseenemy = false
let Left = 0
let Right = 0
let Down = 0
let Up = 0
let Openmap = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let Dummy_killed = 0
let Traininguy8: Sprite = null
let Traininguy7: Sprite = null
let Traininguy6: Sprite = null
let Traininguy5: Sprite = null
let Traininguy4: Sprite = null
let Traininguy3: Sprite = null
let Traininguy2: Sprite = null
let Traininguy1: Sprite = null
let loading_1: Sprite = null
let firstLoad = true
if (firstLoad == true) {
    tiles.setCurrentTilemap(tilemap`level1`)
    loading_1 = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff11111111111fffffffff111fffffffff111111111ffff111ff1111ffff111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff11111111111ffffffff1111fffffffff111111111ffff111ff1111ffff111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff11111111111ffffffff11111ffffffff11111111111ff111ff11111fff111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffffff111111ffffffff111fffff111ff111ff11111fff111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffffff111111ffffffff111fffff111fffffff11111fff111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffffff1111111fffffff111fffff111fffffff111111ff111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111ffffff11111111fffffff111fffff111ff111ff111111ff111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111ffffff1111f1111ffffff111fffff111ff111ff1111111f111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffff1111ff1111ffffff111fffff111ff111ff1111111f111ff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffff1111fff111ffffff111fffff111ff111ff111f1111111ff111fff1111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fffff111ffff1111fffff111fffff111ff111ff111f1111111ff111fff1111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111ffff1111ffff1111fffff111fffff111ff111ff111ff111111ff111fff1111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111ffff1111111111111ffff111fffff111ff111ff111ff111111ff111fffffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fff11111111111111ffff111fffff111ff111ff111fff11111ff111fffffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fff11111111111111ffff111fffff111ff111ff111fff11111ff111fffffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111fff111ffffffff1111fff111fffff111ff111ff111fff11111ff111fffffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111ffffffffff111fffff111ff1111ffffffff1111fff111fffff111ff111ff111ffff1111ff111fffffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111111ff11111111111ff1111fffffffff1111ff11111111111ff111ff111ffff1111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111111ff11111111111ff111ffffffffff1111ff111111111ffff111ff111fffff111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111111ff11111111111ff111fffffffffff111ff111111111ffff111ff111fffff111ff1111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.screen)
    for (let index = 0; index < 4; index++) {
        animation.runImageAnimation(
        loading_1,
        assets.animation`myAnim2`,
        400,
        true
        )
    }
    pause(5000)
    animation.runMovementAnimation(
    loading_1,
    animation.animationPresets(animation.easeDown),
    3000,
    false
    )
    pause(3000)
    sprites.destroy(loading_1, effects.disintegrate, 100)
    pause(500)
    Traininguy1 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy2 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy3 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy4 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy5 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy6 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy7 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    Traininguy8 = sprites.create(img`
        . . 9 . . . . 2 2 . . . . . . . 
        . 9 6 . . b b b b b b . . . . . 
        . 9 6 . . b f d d f b . . . . . 
        . 9 6 . . b b d d b b . . . . . 
        . 9 6 . . . . d d . . . . . . . 
        . b b b d d d d d d d b b b b b 
        . . e d d d d d d d d b e e e b 
        . . d d . d 2 d d 2 d b e b e b 
        . . e . . d d 2 2 d d b e e e b 
        . . b . . d d 2 2 d d b b b b b 
        . . . . . d 2 d d 2 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . e e e e e e e e . . . . 
        `, SpriteKind.Dummy)
    tiles.placeOnRandomTile(Traininguy1, assets.tile`myTile10`)
    tiles.placeOnRandomTile(Traininguy2, assets.tile`myTile11`)
    tiles.placeOnRandomTile(Traininguy3, assets.tile`myTile12`)
    tiles.placeOnRandomTile(Traininguy4, assets.tile`myTile13`)
    tiles.placeOnRandomTile(Traininguy5, assets.tile`myTile14`)
    tiles.placeOnRandomTile(Traininguy6, assets.tile`myTile15`)
    tiles.placeOnRandomTile(Traininguy7, assets.tile`myTile16`)
    tiles.placeOnRandomTile(Traininguy8, assets.tile`myTile17`)
    game.splash("Welcome to 8-bIT world!")
    game.showLongText("First, Choose your difficulty then, go towards a dummy and press A.", DialogLayout.Bottom)
    game.showLongText("When you are done, finish off the rest", DialogLayout.Bottom)
    Dummy_killed = 0
    mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
    statusbar = statusbars.create(8, 100, StatusBarKind.Playerhealth)
    statusbar.setBarBorder(2, 15)
    statusbar.setColor(7, 2)
    statusbar.setLabel("HP", 15)
    statusbar.setPosition(153, 65)
    Openmap = 1
    Up = 0
    Down = 0
    Right = 0
    Left = 0
    Houseenemy = false
    Enemyhealth1 = false
    Enemy_gone = false
    Heal = false
    New_map = false
    Newmapfix = false
    No_new_map = false
    Left_animation = false
    Damage = false
    Damage_2 = false
    Damage_3 = false
    Fix = false
    IsGaryGone = false
    shop_made = false
    Inventory = [
    miniMenu.createMenuItem("Default tunic", assets.image`myImage0`),
    miniMenu.createMenuItem("Empty ", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Empty", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
    OptionsOpen = false
    myMenu3 = [
    miniMenu.createMenuItem("Inventory", img`
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f 2 f . . . . . . . . . . . . 
        . f f f . f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f 2 f . . . . . . . . . . . . 
        . f f f . f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f 7 f . . . . . . . . . . . . 
        . f f f . f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . f 8 f . . . . . . . . . . . . 
        . f f f . f f f f f f f f f f . 
        `),
    miniMenu.createMenuItem("Map", img`
        4 e e e 4 4 e e e 4 4 e e e 4 4 
        e 8 8 e e e 8 8 e e e 8 8 8 e e 
        e 8 8 e e 8 8 8 8 8 8 8 8 8 8 e 
        e 8 8 8 8 8 8 7 8 8 7 7 7 8 8 e 
        e e 8 8 7 7 8 8 8 8 7 7 7 8 e e 
        e 8 8 7 7 7 7 8 8 8 8 7 7 e e 4 
        e 8 7 7 7 7 7 8 8 8 8 7 8 8 e 4 
        e 8 7 7 7 7 7 8 8 8 8 8 8 8 e e 
        e e 8 7 7 8 7 7 8 8 7 8 8 7 8 e 
        4 e 8 8 7 7 7 7 8 7 7 8 8 8 8 e 
        4 e 8 8 8 8 7 8 8 8 8 8 7 7 8 e 
        e e 8 8 8 8 8 8 8 8 8 7 7 7 7 e 
        e 8 8 7 8 8 7 8 8 8 8 7 7 7 7 e 
        e 8 8 8 8 7 8 8 8 8 8 8 7 7 7 e 
        e e e 8 8 8 8 e e e 8 7 7 e e e 
        4 4 e e e e e e 4 e e e e e 4 4 
        `),
    miniMenu.createMenuItem("Spells", img`
        . . . . . . . . b b . . . . . . 
        . . . . . . . b 9 1 b . . . . . 
        . . b b . . . b 9 9 b . . . . . 
        . b 9 1 b . . b b b . . b b b . 
        . b 3 9 b . b b b b . b 9 9 1 b 
        . b b b b b 9 9 1 1 b b 3 9 9 b 
        . . . . b 9 d 9 1 1 b b b b b . 
        . . . . b 5 3 9 9 9 b . . . . . 
        . . b b b 5 3 3 d 9 b . . . . . 
        . b 5 1 b b 5 5 9 b b b b . . . 
        . b 5 5 b b b b b b 3 9 9 3 . . 
        . b b b b b b b . b 9 1 1 9 b . 
        . . . b 5 5 1 b . b 9 1 1 9 b . 
        . . . b 5 5 5 b . b 3 9 9 3 b . 
        . . . . b b b . . . b b b b . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
    myMenu4 = miniMenu.createMenuFromArray([miniMenu.createMenuItem("Easy", img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 7 7 f 7 7 7 f 7 7 9 9 9 9 
        9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 9 
        9 9 7 7 7 7 f f f 7 7 7 7 9 9 9 
        9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 9 
        9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 9 
        9 9 7 9 9 7 7 9 7 9 9 9 7 9 9 9 
        9 7 7 9 7 7 9 7 7 7 9 9 7 7 9 9 
        9 7 9 9 9 7 9 7 9 7 7 9 9 7 9 9 
        7 7 9 9 9 7 9 7 9 9 7 9 9 7 7 9 
        7 9 9 7 7 7 9 9 9 9 7 9 9 9 7 9 
        9 9 9 9 9 9 9 9 9 9 7 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `), miniMenu.createMenuItem("Hard", assets.image`myImage1`)])
    myMenu4.setDimensions(150, 100)
    myMenu4.setTitle("Choose Your difficulty ")
    controller.moveSprite(mySprite, 0, 0)
    myMenu4.setPosition(75, 115)
    myMenu4.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            myMenu4.close()
            Easymode = true
            controller.moveSprite(mySprite)
        } else if (selectedIndex == 1) {
            myMenu4.close()
            Hardmode = true
            controller.moveSprite(mySprite)
        }
    })
    Mapspawned = true
    firstLoad = false
    phire_on = false
    lignig_on = false
    spell = [
    miniMenu.createMenuItem("empty", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("empty", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("none", img`
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . 2 2 . . . . . . . 2 2 . . 
        . 2 2 . . . . . . . . . . 2 . 
        . 2 . 2 . . . . . . . . . 2 . 
        2 . . . 2 . . . . . . . . . 2 
        2 . . . . 2 . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . 2 
        2 . . . . . . 2 . . . . . . 2 
        2 . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . 2 . . . . 2 
        2 . . . . . . . . . 2 . . . 2 
        . 2 . . . . . . . . . 2 . 2 . 
        . 2 . . . . . . . . . . 2 2 . 
        . . 2 2 . . . . . . . 2 2 . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        `)
    ]
}
game.onUpdateInterval(5000, function () {
    if (IsGaryGone != true) {
        if (Easymode == true) {
            if (Entered_boss == true) {
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(45, 55), randint(0, 0))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(-45, -55), randint(0, 0))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(0, 0), randint(45, 55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(0, 0), randint(-45, -55))
            }
        }
    }
})
game.onUpdateInterval(2500, function () {
    if (Enemy_gone == true) {
        if (Heal == true) {
            statusbar.value += 10
            Heal = false
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (IsGaryGone != true) {
        if (Hardmode == true) {
            if (Entered_boss == true) {
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(45, 55), randint(0, 0))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(-45, -55), randint(0, 0))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(0, 0), randint(45, 55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(0, 0), randint(-45, -55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(45, 55), randint(-45, -55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(-45, -55), randint(45, 55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(-45, -55), randint(-45, -55))
                Flameball = sprites.createProjectileFromSprite(img`
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 1 1 1 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 1 5 5 4 4 5 2 4 
                    4 2 5 4 4 5 5 5 5 5 4 4 5 2 4 
                    2 2 4 4 5 4 4 4 4 4 5 4 4 2 2 
                    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . 
                    . 2 4 2 4 5 5 5 5 5 4 2 4 2 . 
                    . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 4 4 4 4 4 2 . . . . 
                    `, BigGyattGary, randint(45, 55), randint(45, 55))
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (Damage4 == true) {
        statusbar.value += -10
        Damage4 = false
    }
})
game.onUpdateInterval(1, function () {
    if (statusbar.value == 0) {
        tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
        statusbar.value = 100
        tiles.setCurrentTilemap(tilemap`level2`)
    }
})
game.onUpdateInterval(1, function () {
    if (Enemyhealth1 == true) {
        if (statusbar2.value == 0) {
            sprites.destroy(My_enemy)
            Enemy_gone = true
        }
    }
})
game.onUpdateInterval(1, function () {
    if (Fix == true) {
        if (statusbar3.value == 0) {
            sprites.destroy(BigGyattGary)
            IsGaryGone = true
        }
    }
})
game.onUpdateInterval(1500, function () {
    if (Damage == true) {
        statusbar.value += -10
        Damage = false
    }
})
forever(function () {
    if (Dummy_killed == 8 && Mapspawned == true) {
        info.changeScoreBy(30)
        pause(500)
        game.showLongText("You did it, good job completing the tutorial ", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
        scene.cameraFollowSprite(mySprite)
        Farmer1 = sprites.create(img`
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 f f f f f 5 5 . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f f . . . f f . . . . . 
            `, SpriteKind.NPC)
        Farmer2 = sprites.create(img`
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 f f f f f 5 5 . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f f . . . f f . . . . . 
            `, SpriteKind.NPC)
        Gossipgirl = sprites.create(img`
            e e e e e e e e e e e e e e e e 
            e e 4 e 4 e 4 e e e 4 4 e 4 e e 
            e e 4 e e e 4 e e e 4 e e 4 e e 
            e e e e e e 4 e 4 e 4 e e 4 4 e 
            e e e e e e e e e e e e e e e e 
            e e e 4 e e e e 4 4 e e e 4 e e 
            e e e 4 e 4 e e 4 e 4 4 e 4 e e 
            e e e e e e e e 4 4 e 4 e 4 e e 
            e e e e e e e e e e e e e e e e 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            `, SpriteKind.Sign)
        tiles.placeOnRandomTile(Farmer1, assets.tile`Dirt`)
        tiles.placeOnRandomTile(Farmer2, assets.tile`Dirt`)
        tiles.placeOnRandomTile(Gossipgirl, assets.tile`myTile4`)
        Farmer1.sayText("A Plentyful harvest!")
        Farmer2.sayText("A Plentyful harvest!")
        Gossipgirl.sayText("Jake’s House")
        controller.moveSprite(mySprite)
        Mapspawned = false
        game.showLongText("Here are some apples for the effort", DialogLayout.Bottom)
        Inventory.push(miniMenu.createMenuItem("Apple", img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `))
        Inventory.push(miniMenu.createMenuItem("Apple", img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `))
        shop_guy = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 2 1 1 2 2 1 1 2 2 1 1 2 2 1 f 
            f 2 1 1 2 2 1 1 2 2 1 1 2 2 1 f 
            f 2 1 1 2 2 1 1 2 2 1 1 2 2 1 f 
            f f e f f f f f f f f f f e f f 
            e f e f e e 4 4 4 4 e e f e f e 
            e f e f e e f 4 4 f e e f e f e 
            e f e f e e 4 2 2 4 e e f e f e 
            f f e f f f f f f f f f f e f f 
            f e e e e e e e e e e e e e e f 
            f 6 6 e 6 e e e 6 6 6 e 6 6 6 f 
            f 6 e e 6 e e e 6 e 6 e 6 e 6 f 
            f 6 6 e 6 6 6 e 6 e 6 e 6 6 6 f 
            f e 6 e 6 e 6 e 6 e 6 e 6 e e f 
            f 6 6 e 6 e 6 e 6 6 6 e 6 e e f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.shop)
        tiles.placeOnRandomTile(shop_guy, assets.tile`myTile22`)
        shop_made = true
    }
})
game.onUpdateInterval(500, function () {
    if (Damage_2 == true) {
        if (Hardmode == true) {
            statusbar2.value += -10
            Damage_2 = false
        } else {
            statusbar2.value += -25
            Damage_2 = false
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Damage_3 == true) {
        if (Hardmode == true) {
            statusbar3.value += -2
            Damage_3 = false
        } else {
            statusbar3.value += -10
            Damage_3 = false
        }
    }
})
