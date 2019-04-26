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
    }

}
