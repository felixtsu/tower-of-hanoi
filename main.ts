let currentDisk : Sprite = null
let list1 : Sprite[] = []
let list2 : Sprite[] = []
let list3 : Sprite[] = []
function getDiskLength(disk: Sprite): number {
    return sprites.readDataNumber(disk, "length")
}

function setCurrentDisk(pos: number) {
    
    if (!currentDisk) {
        if (pos == 0 && list1.length > 0) {
            currentDisk = list1.pop()
        } else if (pos == 1 && list2.length > 0) {
            currentDisk = list2.pop()
        } else if (pos == 2 && list3.length > 0) {
            currentDisk = list3.pop()
        }
        
    }
    
}

function putDownDisk(disk2: Sprite, pos2: number): boolean {
    
    if (!currentDisk) {
        return false
    }
    
    if (pos2 == 0) {
        if (list1.length == 0 || getDiskLength(disk2) < getDiskLength(list1[list1.length - 1])) {
            list1.push(disk2)
            return true
        } else {
            return false
        }
        
    } else if (pos2 == 1) {
        if (list2.length == 0 || getDiskLength(disk2) < getDiskLength(list1[list2.length - 1])) {
            list2.push(disk2)
            return true
        } else {
            return false
        }
        
    } else if (list3.length == 0 || getDiskLength(disk2) < getDiskLength(list1[list3.length - 1])) {
        list3.push(disk2)
        return true
    } else {
        return false
    }
    
}

Hanoi.gamestart()
