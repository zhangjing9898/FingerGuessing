class OverScene extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    private init() {
        let shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0 ,0 , GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);

        
    }
}