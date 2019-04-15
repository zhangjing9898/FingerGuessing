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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.score = 0;
        _this.bg();
        _this.setHand();
        _this.setUIButton();
        return _this;
    }
    // 绘制背景
    Game.prototype.bg = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        // 添加背景img
        var stageH = GameData.getStageHeight();
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;
        // 增加top img
        var top = new egret.Bitmap();
        top.texture = RES.getRes("top_png");
        this.addChild(top);
        top.x = 0;
        top.y = 0;
        // 增加分数part
        var score_txt = new egret.TextField();
        score_txt.size = 40;
        score_txt.text = "0";
        score_txt.x = 80;
        score_txt.y = 100;
        this.addChild(score_txt);
        // TODO:
        // this.score_txt = score_txt;
        // TODO: add timerPanel
    };
    // build hand function
    Game.prototype.setHand = function () {
        var stageH = GameData.getStageHeight();
        var stageW = GameData.getStageWidth();
        // set hand size 
        var left_hand = new egret.Bitmap();
        left_hand.texture = RES.getRes("rock_png");
        this.addChild(left_hand);
        left_hand.anchorOffsetX = left_hand.height / 2;
        left_hand.x = -50;
        left_hand.y = stageH / 2 - 100;
        left_hand.scaleX = 0.6;
        left_hand.scaleY = 0.6;
        // TODO: need to tween
        // set right_hand size
        var right_hand = new egret.Bitmap();
        right_hand.texture = RES.getRes("rock_png");
        this.addChild(right_hand);
        right_hand.rotation = 180;
        right_hand.anchorOffsetX = 0;
        right_hand.anchorOffsetY = right_hand.height / 2;
        right_hand.x = stageW + 50;
        right_hand.y = stageH / 2 - 100;
        right_hand.scaleX = 0.6;
        right_hand.scaleY = 0.6;
        // TODO: need to tween
    };
    Game.prototype.setUIButton = function () {
        var stageH = GameData.getStageHeight();
        var left_btn = new egret.Bitmap();
        left_btn.texture = RES.getRes("left_png");
        this.addChild(left_btn);
        left_btn.anchorOffsetX = left_btn.width / 2;
        left_btn.anchorOffsetY = left_btn.height / 2;
        left_btn.x = left_btn.width / 2;
        left_btn.y = stageH - left_btn.height / 2;
        var middle_btn = new egret.Bitmap();
        middle_btn.texture = RES.getRes("middle_png");
        this.addChild(middle_btn);
        middle_btn.anchorOffsetX = middle_btn.width / 2;
        middle_btn.anchorOffsetY = middle_btn.height / 2;
        middle_btn.x = middle_btn.width / 2 + left_btn.width;
        middle_btn.y = stageH - middle_btn.height / 2;
        var right_btn = new egret.Bitmap();
        right_btn.texture = RES.getRes("right_png");
        this.addChild(right_btn);
        this.right_btn = right_btn;
        right_btn.anchorOffsetX = right_btn.width / 2;
        right_btn.anchorOffsetY = right_btn.height / 2;
        right_btn.x = right_btn.width / 2 + left_btn.width + middle_btn.width;
        right_btn.y = stageH - right_btn.height / 2;
    };
    // left-hand tween
    Game.prototype.lTween = function () {
        // TODO: time deal
        var time = 40;
        this.left_hand.texture = RES.getRes("rock_png");
        egret.Tween.get(this.left_hand).to({
            rotation: 20
        }, time)
            .to({
            rotation: -20
        }, time)
            .to({
            rotation: 20
        }, time)
            .to({
            rotation: -20
        }, time)
            .to({
            rotation: 20
        }, time)
            .to({
            rotation: -20
        }, time)
            .to({
            rotation: 0
        }, time)
            .call(this.left_change, this);
    };
    // replace left_hand img
    Game.prototype.left_change = function () {
        console.log('left-hand need to replace');
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
