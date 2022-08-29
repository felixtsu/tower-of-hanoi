namespace SpriteKind {
    export const pointer = SpriteKind.create()
    export const disk = SpriteKind.create()
    export const column = SpriteKind.create()
}


namespace Hanoi {

    export let currentDisk: Sprite = null

    export function  setCurrentDisk(pos: number) {
        let currentDisk: Sprite;
        if (!currentDisk) {
            if (pos == 0 && Hanoi.list1.length > 0) {
                currentDisk = Hanoi.list1.pop()
            } else if (pos == 1 && Hanoi.list2.length > 0) {
                currentDisk = Hanoi.list2.pop()
            } else if (pos == 2 && Hanoi.list3.length > 0) {
                currentDisk = Hanoi.list3.pop()
            }
            
        }
    }
    
    export function  putDownDisk(disk2: Sprite, pos2: number): boolean {
        if (!currentDisk) {
            return false
        }
        
        if (pos2 == 0) {
            if (Hanoi.list1.length == 0 || sprites.readDataNumber(disk2, "length") < sprites.readDataNumber(Hanoi.list1[Hanoi.list1.length - 1], "length")) {
                Hanoi.list1.push(disk2)
                return true
            } else {
                return false
            }
            
        } else if (pos2 == 1) {
            if (Hanoi.list2.length == 0 || sprites.readDataNumber(disk2, "length") < sprites.readDataNumber(Hanoi.list2[Hanoi.list2.length - 1], "length")) {
                Hanoi.list2.push(disk2)
                return true
            } else {
                return false
            }
            
        } else if (Hanoi.list3.length == 0 || sprites.readDataNumber(disk2, "length") < sprites.readDataNumber(Hanoi.list3[Hanoi.list3.length - 1], "length")) {
            Hanoi.list3.push(disk2)
            return true
        } else {
            return false
        }
        
    }
    
}

Hanoi.gamestart()
