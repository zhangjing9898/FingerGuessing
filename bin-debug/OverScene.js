var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var OverScene = (function (_super) {
    __extends(OverScene, _super);
    function OverScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    OverScene.prototype.init = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        var top = new egret.Bitmap();
        top.texture = RES.getRes("5541c88bb1fd0_wx_jpg");
        this.addChild(top);
        top.scaleX = 0.5;
        top.scaleY = 0.5;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("end1_png");
        this.addChild(bg);
        bg.x = 50;
        bg.y = 150;
        var game_score = egret.localStorage.getItem("game_score");
        var score = new egret.TextField();
        score.size = 80;
        score.text = game_score;
        score.x = 300;
        score.y = 500;
        score.textColor = 0xff0000;
        this.addChild(score);
        this.commonImgConf('replay_png', 150, 750, this.replay_btnCallback);
        this.commonImgConf('rank_png', 300, 750, this.rank_btnCallback);
        this.commonImgConf('home_png', 450, 750, this.home_btnCallback);
    };
    OverScene.prototype.replay_btnCallback = function () {
        console.log('replay_btnCallback');
    };
    OverScene.prototype.rank_btnCallback = function () {
        console.log('replay_btnCallback');
    };
    OverScene.prototype.home_btnCallback = function () {
    };
    OverScene.prototype.commonImgConf = function (name, x, y, callback) {
        var btn = new egret.Bitmap();
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
    };
    return OverScene;
}(egret.Sprite));
__reflect(OverScene.prototype, "OverScene");
