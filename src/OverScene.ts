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

        let top = new egret.Bitmap();
        top.texture = RES.getRes("5541c88bb1fd0_wx_jpg");
        this.addChild(top);
        top.scaleX = 0.5;
        top.scaleY = 0.5;

        let bg = new egret.Bitmap();
        bg.texture = RES.getRes("end1_png");
        this.addChild(bg);
        bg.x = 50;
        bg.y = 150;

        let game_score: string = egret.localStorage.getItem("game_score");
        let score = new egret.TextField();
        score.size = 80;
        score.text = game_score;
        score.x = 300;
        score.y = 500;
        score.textColor = 0xff0000;
        this.addChild(score);

        this.commonImgConf('replay_png', 150, 750, this.replay_btnCallback);
        this.commonImgConf('rank_png', 300, 750, this.rank_btnCallback);
        this.commonImgConf('home_png', 450, 750, this.home_btnCallback);
    }

    private replay_btnCallback() {
      console.log('replay_btnCallback');   
    }

    private rank_btnCallback() {
        console.log('replay_btnCallback');   
    }

    private home_btnCallback() {

    }

    private commonImgConf(name: string, x: number, y:number, callback: Function) {
        let btn = new egret.Bitmap();
        btn.texture = RES.getRes(name);
        this.addChild(btn);
        btn.anchorOffsetX = btn.width / 2;
        btn.anchorOffsetY = btn.height / 2;
        btn.x = x;
        btn.y = y;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, callback, this);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, callback, this);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, callback, this);
    }
}