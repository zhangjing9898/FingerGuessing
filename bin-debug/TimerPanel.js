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
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        var _this = _super.call(this) || this;
        _this.draw();
        return _this;
    }
    TimerPanel.prototype.draw = function () {
        this.txt = new egret.TextField();
        // 获取舞台宽度
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.size = 40;
        this.txt.y = 110;
        this.txt.x = 250;
        this.txt.textColor = 0xff0000;
        this.txt.text = "45'00'";
        this.addChild(this.txt);
    };
    return TimerPanel;
}(egret.Sprite));
__reflect(TimerPanel.prototype, "TimerPanel");
