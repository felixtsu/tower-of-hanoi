currentDisk: Sprite = None
list1: List[Sprite] = []
list2: List[Sprite] = []
list3: List[Sprite] = []
def setCurrentDisk(pos: number):
    global currentDisk
    if not currentDisk:
        if pos == 0 and len(list1) > 0:
            currentDisk = list1.pop()
        elif pos == 1 and len(list2) > 0:
            currentDisk = list2.pop()
        elif pos == 2 and len(list3) > 0:
            currentDisk = list3.pop()
def putDownDisk(disk2: Sprite, pos2: number):
    global currentDisk
    if not currentDisk:
        return False
    if pos2 == 0:
        if len(list1) == 0 or sprites.read_data_number(disk2, "length") < sprites.read_data_number(list1[len(list1) - 1], "length"):
            list1.append(disk2)
            return True
        else:
            return False
    elif pos2 == 1:
        if len(list2) == 0 or sprites.read_data_number(disk2, "length") < sprites.read_data_number(list2[len(list2) - 1], "length"):
            list2.append(disk2)
            return True
        else:
            return False
    elif len(list3) == 0 or sprites.read_data_number(disk2, "length") < sprites.read_data_number(list3[len(list3) - 1], "length"):
        list3.append(disk2)
        return True
    else:
        return False
Hanoi.gamestart()