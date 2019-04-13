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
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartScene.prototype.init = function () {
        // set bgColor = pink
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        // add img
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes("logo_png");
        this.addChild(logo);
        logo.x = 20;
        logo.y = 100;
        // add btn about：start game
        var start_btn = new egret.Bitmap();
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
        var rank_btn = new egret.Bitmap();
        rank_btn.texture = RES.getRes("rank_png");
        this.addChild(rank_btn);
        rank_btn.anchorOffsetX = rank_btn.width / 2;
        rank_btn.anchorOffsetY = rank_btn.height / 2;
        rank_btn.x = 550;
        rank_btn.y = 60;
        rank_btn.touchEnabled = true;
        // TODO:
    };
    StartScene.prototype.start_btnCallback = function (type, evt) {
        if (evt.type === egret.TouchEvent.TOUCH_BEGIN) {
            var current = evt.currentTarget;
            current.scaleX = 1.05;
            current.scaleY = current.scaleX;
        }
        else if (evt.type === egret.TouchEvent.TOUCH_END) {
            var current = evt.currentTarget;
            current.scaleX = 1;
            current.scaleY = current.scaleX;
        }
        else if (evt.type === egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            var current = evt.currentTarget;
            current.scaleX = 1;
            current.scaleY = current.scaleX;
        }
    };
    return StartScene;
}(egret.Sprite));
__reflect(StartScene.prototype, "StartScene");
