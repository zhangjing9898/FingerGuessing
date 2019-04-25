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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
        this.score_txt = score_txt;
        // TODO: add timerPanel
        var timerPanel = new TimerPanel();
        this.addChild(timerPanel);
        timerPanel.start();
        // TODO:游戏结束面板
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
        this.left_hand = left_hand;
        this.lTween();
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
        this.right_hand = right_hand;
        this.rTween();
    };
    Game.prototype.setUIButton = function () {
        var stageH = GameData.getStageHeight();
        var left_btn = new egret.Bitmap();
        left_btn.texture = RES.getRes("left_png");
        this.addChild(left_btn);
        this.left_btn = left_btn;
        left_btn.anchorOffsetX = left_btn.width / 2;
        left_btn.anchorOffsetY = left_btn.height / 2;
        left_btn.x = left_btn.width / 2;
        left_btn.y = stageH - left_btn.height / 2;
        left_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.left_btnCallback, this);
        left_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.left_btnCallback, this);
        left_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.left_btnCallback, this);
        var middle_btn = new egret.Bitmap();
        middle_btn.texture = RES.getRes("middle_png");
        this.addChild(middle_btn);
        this.middle_btn = middle_btn;
        middle_btn.anchorOffsetX = middle_btn.width / 2;
        middle_btn.anchorOffsetY = middle_btn.height / 2;
        middle_btn.x = middle_btn.width / 2 + left_btn.width;
        middle_btn.y = stageH - middle_btn.height / 2;
        var right_btn = new egret.Bitmap();
        right_btn.texture = RES.getRes("right_png");
        this.addChild(right_btn);
        this.right_btn = right_btn;
        this.right_btn = right_btn;
        right_btn.anchorOffsetX = right_btn.width / 2;
        right_btn.anchorOffsetY = right_btn.height / 2;
        right_btn.x = right_btn.width / 2 + left_btn.width + middle_btn.width;
        right_btn.y = stageH - right_btn.height / 2;
    };
    // left-hand tween
    Game.prototype.lTween = function () {
        // 根据游戏所剩时间，控制time，达到控制缓动效果
        // 距离游戏结束时间越短，hand摇动越快
        var game_time = parseInt(egret.localStorage.getItem("default_time"));
        var time = 40;
        if (game_time >= 30) {
            time = 130;
        }
        else if (game_time >= 15 && game_time < 30) {
            time = 70;
        }
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
    Game.prototype.rTween = function () {
        var game_time = parseInt(egret.localStorage.getItem("default_time"));
        var time = 40;
        if (game_time >= 30) {
            time = 130;
        }
        else if (game_time >= 15 && game_time < 30) {
            time = 70;
        }
        this.right_hand.texture = RES.getRes("rock_png");
        egret.Tween.get(this.right_hand).to({
            rotation: -20 + 180
        }, time)
            .to({
            rotation: 20 + 180
        }, time)
            .to({
            rotation: -20 + 180
        }, time)
            .to({
            rotation: 20 + 180
        }, time)
            .to({
            rotation: -20 + 180
        }, time)
            .to({
            rotation: 20 + 180
        }, time)
            .to({
            rotation: 180
        }, time)
            .call(this.right_change, this);
    };
    // replace left_hand img
    Game.prototype.left_change = function () {
        this.left_btn.touchEnabled = true;
        this.middle_btn.touchEnabled = true;
        this.right_btn.touchEnabled = true;
        var ran = Math.random() * 3;
        if (ran >= 0 && ran < 1) {
            this.left_hand.texture = RES.getRes("rock_png");
            this.left_type = 0;
        }
        else if (ran >= 1 && ran < 2) {
            this.left_hand.texture = RES.getRes("paper_png");
            this.left_type = 1;
        }
        else {
            this.left_hand.texture = RES.getRes("scissor_png");
            this.left_type = 2;
        }
    };
    // 禁止touched 下方按钮
    Game.prototype.un_touch = function () {
        this.left_btn.touchEnabled = false;
        this.middle_btn.touchEnabled = false;
        this.right_btn.touchEnabled = false;
    };
    Game.prototype.left_btnCallback = function (evt) {
        var _this = this;
        var curX = evt.currentTarget.scaleX;
        var curY = evt.currentTarget.scaleY;
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            curX = 1.05;
            curY = 1.05;
            this.left_btn.texture = RES.getRes("left_press_png");
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            curX = 1.0;
            curY = 1.0;
            this.left_btn.texture = RES.getRes("left_png");
            this.un_touch();
            var actions = function () {
                var answerFalse = function () { _this.answer_type = false; };
                var answerTrue = function () { _this.answer_type = true; };
                var addScore = function () { _this.score++; _this.answer_type = true; };
                return new Map([
                    [{ left_type: 0, right_type: 0 }, answerFalse],
                    [{ left_type: 0, right_type: 1 }, answerFalse],
                    [{ left_type: 0, right_type: 2 }, answerTrue],
                    [{ left_type: 1, right_type: 0 }, addScore],
                    [{ left_type: 1, right_type: 1 }, answerFalse],
                    [{ left_type: 1, right_type: 2 }, answerFalse],
                    [{ left_type: 2, right_type: 0 }, answerFalse],
                    [{ left_type: 2, right_type: 1 }, addScore],
                    [{ left_type: 2, right_type: 2 }, answerFalse]
                ]);
            };
            var action = __spread(actions()).filter(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return (key.left_type == _this.left_type && key.right_type == _this.right_type);
            });
            action.forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return value.call(_this);
            });
            // 更新得分
            this.score_txt.text = "" + this.score;
            // 显示弹框
            this.resultPopup();
            // 0.3s后 移除弹框
            setTimeout(function () {
                if (_this.alert_img.parent) {
                    _this.alert_img.parent.removeChild(_this.alert_img);
                }
                _this.lTween();
                _this.rTween();
            }, 300);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            curX = 1.0;
            curY = 1.0;
            this.left_btn.texture = RES.getRes("left_png");
        }
    };
    Game.prototype.right_change = function () {
        var ran = Math.random() * 3;
        if (ran >= 0 && ran < 1) {
            this.right_hand.texture = RES.getRes("rock_png");
            this.right_type = 0;
        }
        else if (ran >= 1 && ran < 2) {
            this.right_hand.texture = RES.getRes("paper_png");
            this.right_type = 1;
        }
        else {
            this.right_hand.texture = RES.getRes("scissor_png");
            this.right_type = 2;
        }
    };
    // 对错弹框
    Game.prototype.resultPopup = function () {
        var img = new egret.Bitmap();
        this.answer_type == false ? img.texture = RES.getRes("fault_png") : img.texture = RES.getRes("true_png");
        this.addChild(img);
        this.alert_img = img;
        img.x = 0;
        img.y = GameData.getStageHeight() / 2 - img.height / 2 - 80;
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
