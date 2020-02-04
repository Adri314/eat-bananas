namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 500)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.bubbles, 500)
})
let projectile: Sprite = null
let choice = 0
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000404040504050404050404050404040406040504040404050404040404040404050404050405040405040406040404040404040504040404050405040404040405040404040404040404040404040405`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
game.setDialogCursor(img`
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
1 2 1 2 1 2 2 2 2 2 2 2 2 2 1 . 
1 2 1 2 1 2 2 1 1 2 2 2 2 2 1 . 
1 2 1 2 1 2 1 2 2 2 2 1 1 2 1 . 
1 2 1 2 1 2 1 2 2 2 1 2 2 2 1 . 
1 2 2 1 2 2 1 2 2 2 1 1 1 2 1 . 
1 2 2 2 2 2 2 1 1 2 2 2 1 2 1 . 
1 2 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 1 . . 
. . 1 2 2 2 2 2 2 2 2 2 1 . . . 
. . . 1 2 2 2 2 2 2 2 1 . . . . 
. . . . 1 1 2 2 2 1 1 . . . . . 
. . . . . . 1 2 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
`)
game.splash("Eat bananas!")
let mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f . . . . . 
. c d f d d f d e e f f . . . . 
c d e e d d d d e e d d f . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e b d c . f f 
. f d d d d e e e f f c . f e f 
. f f f f f f e e e e f . f e f 
. f f f f e e e e e e e f f e f 
f d d f d d f e f e e e e f f . 
f d b f d b f e f e e e e f . . 
f f f f f f f f f f f f e f . . 
. . . . . . . . . f c d d f . . 
. . . . . . . . . . f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f f f . . . . 
. . f d d d e e e e d d f . . . 
. c d d d d d e e e b d c . . . 
. c d d d d d d e e b d c . . . 
c d d f d d f d e e f c . f f . 
c d d f d d f d e e f . . f e f 
c d e e d d d d e e f . . f e f 
. f d d d c d e e f f . . f e f 
. . f f f d e e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . . . f f e e e e e b f f . . 
. . . f e f f e e c d d f f . . 
. . f d d b d d c f f f . . . . 
. . f d d c d d d f f . . . . . 
. . . f f f f f f f . . . . . . 
`],
100,
true
)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    choice = Math.randomRange(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, -60, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`,img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`],
        100,
        true
        )
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 1 f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d d 1 1 d f . . . . . . 
. . . . . . f d d d d d d d 1 1 1 f . . . . . . 
. . . . . . f d d d d d d c f 1 1 f . . . . . . 
. . . . . . . f b d d d b 1 1 1 1 b f . . . . . 
. . . . . . . . f f f c f d b 1 b 1 f . . . . . 
. . . . . . . f f f f f f f f b f b f . . . . . 
. . . . f f . f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f . . . . . . . . . . . 
. . . . . f f f f f f b 1 b 1 f . . . . . . . . 
. . . . . . f f f f f f b f b f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, 60, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 1 f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d d 1 1 d f . . . . . . 
. . . . . . f d d d d d d d 1 1 1 f . . . . . . 
. . . . . . f d d d d d d c f 1 1 f . . . . . . 
. . . . . . . f b d d d b 1 1 1 1 b f . . . . . 
. . . . . . . . f f f c f d b 1 b 1 f . . . . . 
. . . . . . . f f f f f f f f b f b f . . . . . 
. . . . f f . f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f . . . . . . . . . . . 
. . . . . f f f f f f b 1 b 1 f . . . . . . . . 
. . . . . . f f f f f f b f b f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d b f d 1 d f . . . . . . 
. . . . . . f c b b b d c f d d b f . . . . . . 
. . . . . . . f c b b 1 1 1 1 1 f . . . . . . . 
. . . . . . . . f f f f f 1 b 1 f . . . . . . . 
. . . . . . . . f b 1 1 1 c f b f . . . . . . . 
. . . . . . . . f f b 1 b 1 f f . . . . . . . . 
. . . . . . f . f f f b f b f . . . . . . . . . 
. . . . . . f f f f f f f f . . . . . . . . . . 
. . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
        200,
        true
        )
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . e e . . . . 
. . . . . . . . . . e 6 . . . . 
. . . . . . . . . . . 5 6 . . . 
. . . . . . . . . . . 5 7 e . . 
. . . . . . . . . . . 5 7 e . . 
. . . . . . . . . . . d 5 4 e . 
. . . . . . . . . . . d 5 4 e . 
. . . . . . . . . . d 5 5 4 e . 
. . . . . . . . . . d 5 4 4 e . 
. . . . . . . . . d 5 5 4 e . . 
. . . . . . . d d 5 5 4 4 e . . 
. . . . . d d 5 5 5 4 4 e . . . 
. d d d d 5 5 5 4 4 4 e . . . . 
e 5 5 5 5 5 4 4 4 e e . . . . . 
. e e 4 4 4 4 e e . . . . . . . 
. . . e e e e . . . . . . . . . 
`, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = Math.randomRange(10, 110)
})
