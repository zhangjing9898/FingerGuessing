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
// TODO: 声明接口
var RankScene = (function (_super) {
    __extends(RankScene, _super);
    function RankScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    RankScene.prototype.init = function () {
        var stageW = GameData.getStageWidth();
        var stageH = GameData.getStageHeight();
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, stageW, stageH);
        shape.graphics.endFill();
        this.addChild(shape);
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;
        this.commonTxt(50, true, 50);
        this.commonTxt(30, false, 120, 100);
    };
    // typescript中参数名后加一个? 代表这个参数可以不传 
    RankScene.prototype.commonTxt = function (size, isCenter, y, x) {
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.y = y;
        if (x)
            txt.x = x;
        txt.textAlign = isCenter == true ? egret.HorizontalAlign.CENTER : egret.HorizontalAlign.LEFT;
        txt.size = size;
        txt.textColor = 0x00ff00;
        txt.text = "排行榜(前十)";
    };
    return RankScene;
}(egret.Sprite));
__reflect(RankScene.prototype, "RankScene");
