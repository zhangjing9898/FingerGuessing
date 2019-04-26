// TODO: 声明接口
class RankScene extends egret.Sprite {

    public constructor() {
        super();
        this.init();
    }

    private txt: egret.TextField;
    private init() {

        const stageW = GameData.getStageWidth();
        const stageH = GameData.getStageHeight();

        const shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, stageW, stageH);
        shape.graphics.endFill();
        this.addChild(shape);

        const bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;  
        
        this.commonTxt(50, true, 50);
        this.commonTxt(30, false, 120, 100);
    }
    // typescript中参数名后加一个? 代表这个参数可以不传 
    private commonTxt(size: number ,isCenter: boolean, y: number, x?: number) {
        const txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.y = y;
        if (x) txt.x = x;
        txt.textAlign = isCenter == true ? egret.HorizontalAlign.CENTER : egret.HorizontalAlign.LEFT;
        txt.size = size;
        txt.textColor = 0x00ff00;
        txt.text = "排行榜(前十)";
    }

}
