class TimerPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
    }

    private txt: egret.TextField;

    private draw() {
        this.txt = new egret.TextField();
        // 获取舞台宽度
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.size = 40;
        this.txt.y = 110;
        this.txt.x = 250;
        this.txt.textColor = 0xff0000;
        this.txt.text = "45'00'";
        this.addChild(this.txt);
    }

}