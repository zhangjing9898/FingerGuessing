class StartScene extends egret.Sprite {

    public constructor() {
        super();
        this.init();
    }

    private start_btn: egret.Bitmap;
    
    private init() {

        // set bgColor = pink
        let shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);

        // add img
        let logo = new egret.Bitmap();
        logo.texture = RES.getRes("logo_png");
        this.addChild(logo);
        logo.x = 20;
        logo.y = 100;

        // add btn about：start game
        let start_btn = new egret.Bitmap();
        start_btn.texture = RES.getRes("btn_start_png");
        this.addChild(start_btn);
        this.start_btn = start_btn;
        start_btn.anchorOffsetX = start_btn.width / 2;
        start_btn.anchorOffsetY = start_btn.height / 2;
        start_btn.touchEnabled = true;
        start_btn.x = GameData.getStageWidth() / 2;
        start_btn.y = 800;
        start_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start_btnCallback(), this);
        start_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.start_btnCallback(), this);
        start_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.start_btnCallback(), this);

        // add rank img
        let rank_btn = new egret.Bitmap();
        rank_btn.texture = RES.getRes("rank_png");
        this.addChild(rank_btn);
        rank_btn.anchorOffsetX = rank_btn.width / 2;
        rank_btn.anchorOffsetY = rank_btn.height / 2;
        rank_btn.x = 550;
        rank_btn.y = 60;
        rank_btn.touchEnabled = true;
        // TODO:
    }

    private start_btnCallback(type, evt: egret.TouchEvent): void {
        if(evt.type === egret.TouchEvent.TOUCH_BEGIN) {
            let current = evt.currentTarget;
            current.scaleX = 1.05;
            current.scaleY = current.scaleX;
        } else if(evt.type === egret.TouchEvent.TOUCH_END) {
            let current = evt.currentTarget;
            current.scaleX = 1;
            current.scaleY = current.scaleX;
        } else if(evt.type === egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            let current = evt.currentTarget;
            current.scaleX = 1;
            current.scaleY = current.scaleX;
        }
    }
}