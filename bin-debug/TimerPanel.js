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
        _this._num = 45;
        _this._timers = 45;
        _this.draw();
        _this.createTimer();
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
    TimerPanel.prototype.createTimer = function () {
        // 存入缓存
        var key = "default_time";
        var value = "" + 45;
        egret.localStorage.setItem(key, value);
        // public Timer( delay:number,repeatCount:number )delay:以毫秒为单位
        this._timer = new egret.Timer(1000, this._num);
        // 每次计时 1000ms之后要做的事
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        // 侦听计时结束
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._timers -= 1;
        this.txt.text = this._timers + "'00'";
        var key = "default_time";
        var value = "" + this._timers;
        egret.localStorage.setItem(key, value);
    };
    TimerPanel.prototype.onTimerCom = function () {
        this.txt.text = "00'00''";
        // 结束
        // TODO:调出结束面板
    };
    TimerPanel.prototype.start = function () {
        this.txt.text = "45'00'";
        this._timers = 45;
        this._timer.reset();
        this._timer.start();
    };
    return TimerPanel;
}(egret.Sprite));
__reflect(TimerPanel.prototype, "TimerPanel");
