//%icon="\uf135" color="#458FAA"
namespace Hanoi {

    export enum difficulty {
        //% block="很简单"
        easy = 3,
        //% block="普普通通"
        normol = 4,
        //% block="有点难"
        difficult = 5
    }
    export enum pillars {
        //% block="一号"
        num1 = 1,
        //% block="二号"
        num2 = 2,
        //% block="三号"
        num3 = 3
    }

    export enum gamespeed{
        //% block="一倍"
        normol = 1000,
        //% block="二倍"
        double = 500,
        //% block="四倍"
        quadruple = 250,
        //% block="十倍"
        tenfold = 100,
    }

    //%block
    //%blockNamespace=Hanoi
    //%block="game start " 
    //%block.loc.zh-CN="自选难度 开始游戏"
    //%weight=76
    export function gamestart() {
        Hanoi.init()

        story.startCutscene(function () {
            story.printCharacterText("请选择游戏难度")
            story.showPlayerChoices("很简单", "普普通通", "有点难")
            if (story.checkLastAnswer("很简单")) {
                Hanoi.createDisk(3)
            }
            else if (story.checkLastAnswer("普普通通")) {
                Hanoi.createDisk(4)
            }
            else {
                Hanoi.createDisk(5)
            }

            story.cancelAllCutscenes()
            isgamestart = 1
        })
    }
    //%block
    //%blockNamespace=Hanoi
    //%block="transfor disk from %loc1 to %loc2" 
    //%block.loc.zh-CN="将 %loc1 的圆盘移动到 %loc2"
    //%loc1.defl = 1
    //%loc2.defl = 1
    //%weight=76
    export function transforDiskTo(loc1: pillars = 1, loc2: pillars = 1) {
        if(loc1!=loc2){
            if(!Hanoi.currentDisk){
                Hanoi.setCurrentDisk(loc1 - 1)
            }
            Hanoi.putDownDisk(Hanoi.currentDisk,loc2)
        }
    }
    //%block
    //%blockNamespace=Hanoi
    //%block="on game star set difficulty %l=difficulty set speed %s=gamespeed" 
    //%block.loc.zh-CN="当游戏以%l=difficulty的难度开始时 设置速度为%s=gamespeed"
    //%s.defl = gamespeed.normol
    //%l.defl = difficulty.normol
    //%weight=86
    export function onGameStart(l:difficulty=4,s:gamespeed=1000,f:()=>void){
        pause(5000)
        createDisk(l)
        Hanoi.isgamestart = 1
        f()
    }
}// 在此处添加您的代码
