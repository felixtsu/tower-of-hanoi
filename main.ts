namespace SpriteKind {
    export const pointer = SpriteKind.create()
    export const disk = SpriteKind.create()
    export const column = SpriteKind.create()
}
// 在此处添加您的代码
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    setCurrentDisk(pointPosition)
})
function createDisk (count: number) {
    color = 1
    length = 32
    DiskY = 100
    for (let index = 0; index < count; index++) {
        picture = image.create(length, 8)
        picture.drawRect(0, 0, length, 8, color)
        color += 1
        picture.fillRect(1, 1, length - 2, 6, color)
        color += 1
        圆盘 = sprites.create(picture, SpriteKind.disk)
        圆盘.setPosition(40, DiskY)
        length += -4
        DiskY += -10
        sprites.changeDataNumberBy(圆盘, "length", length)
        list1.push(圆盘)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isgamestart) {
        putDownDisk(currenDisk, pointPosition)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pointPosition += 1
    pointPosition = pointPosition % 3
    setPosition()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Hanoi.transforDiskTo(Hanoi.pillars.num1, Hanoi.pillars.num3)
})
function setPosition () {
    pause(speed)
    if (pointPosition == 0) {
        光标.setPosition(40, 20)
    } else if (pointPosition == 1) {
        光标.setPosition(40 + 16 * 3, 20)
    } else {
        光标.setPosition(40 + 16 * 6, 20)
    }
    if (currenDisk) {
        currenDisk.setPosition(光标.x, 光标.y + 16)
    }
}
function setCurrentDisk (pos: number) {
    pause(speed)
    if (!(currenDisk)) {
        if (pos == 0 && list1.length > 0) {
            currenDisk = list1.pop()
            currenDisk.setPosition(光标.x, 光标.y + 16)
        } else if (pos == 1 && list2.length > 0) {
            currenDisk = list2.pop()
            currenDisk.setPosition(光标.x, 光标.y + 16)
        } else if (pos == 2 && list3.length > 0) {
            currenDisk = list3.pop()
            currenDisk.setPosition(光标.x, 光标.y + 16)
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pointPosition += -1
    pointPosition = (pointPosition + 3) % 3
    setPosition()
})
function putDownDisk (disk: Sprite, pos: number) {
    pause(speed)
    if (currenDisk) {
        if (pos == 0) {
            if (list1.length == 0 || sprites.readDataNumber(disk, "length") < sprites.readDataNumber(list1[list1.length - 1], "length")) {
                list1.push(disk)
                disk.setPosition(40, 100 - (list1.length - 1) * 10)
                currenDisk = null
            } else {
                scene.cameraShake(6, 500)
            }
        } else if (pos == 1) {
            if (list2.length == 0 || sprites.readDataNumber(disk, "length") < sprites.readDataNumber(list2[list2.length - 1], "length")) {
                list2.push(disk)
                disk.setPosition(40 + 16 * 3, 100 - (list2.length - 1) * 10)
                currenDisk = null
            } else {
                scene.cameraShake(6, 500)
            }
        } else {
            if (list3.length == 0 || sprites.readDataNumber(disk, "length") < sprites.readDataNumber(list3[list3.length - 1], "length")) {
                list3.push(disk)
                disk.setPosition(40 + 16 * 6, 100 - (list3.length - 1) * 10)
                currenDisk = null
            } else {
                scene.cameraShake(6, 500)
            }
        }
        info.changeScoreBy(1)
    }
}

let speed = 0
let 圆盘: Sprite = null
let picture: Image = null
let DiskY = 0
let length = 0
let color = 0
let list3: Sprite[] = []
let list2: Sprite[] = []
let list1: Sprite[] = []
let 柱子: Sprite = null
let isgamestart = 0
let pointPosition = 0
let 光标: Sprite = null
let currenDisk: Sprite = null
tiles.setCurrentTilemap(tilemap`级别1`)
scene.centerCameraAt(88, 0)
let distance = 2
光标 = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    1 1 1 . . . 1 1 1 . . . 1 1 1 
    1 1 1 1 . . 1 1 1 . . 1 1 1 1 
    1 1 1 1 1 . 1 1 1 . 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    `, SpriteKind.pointer)
pointPosition = 0
isgamestart = 0
setPosition()
for (let index = 0; index < 3; index++) {
    柱子 = sprites.create(img`
        ......dddd......
        ......dddd......
        ......dddd......
        ......dddd......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        ......bbbb......
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        `, SpriteKind.column)
    tiles.placeOnTile(柱子, tiles.getTileLocation(distance, 4))
    distance += 3
    柱子.y += 6
}
list1 = []
list2 = []
list3 = []
