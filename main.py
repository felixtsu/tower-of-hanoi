def setCurrentDisk(pos: number):
    global currentDisk
    if not (currentDisk):
        if pos == 0 and len(list1) > 0:
            currentDisk = list1.pop()
        elif pos == 1 and len(list2) > 0:
            currentDisk = list2.pop()
        elif pos == 2 and len(list3) > 0:
            currentDisk = list3.pop()
def putDownDisk(disk2: Sprite, pos2: number):
    if not (currentDisk):
        return False
    if pos2 == 0:
        if len(list1) == 0 or getDiskLength(disk2) < getDiskLength(list1[len(list1) - 1]):
            list1.append(disk2)
            return True
        else:
            return False
    elif pos2 == 1:
        if len(list2) == 0 or getDiskLength(disk2) < getDiskLength(list2[len(list2) - 1]):
            list2.append(disk2)
            return True
        else:
            return False
    elif len(list3) == 0 or getDiskLength(disk2) < getDiskLength(list3[len(list3) - 1]):
        list3.append(disk2)
        return True
    else:
        return False
def getDiskLength(disk: Sprite):
    return sprites.read_data_number(disk, "length")
list3: List[Sprite] = []
list2: List[Sprite] = []
list1: List[Sprite] = []
currentDisk: Sprite = None
Hanoi.gamestart()