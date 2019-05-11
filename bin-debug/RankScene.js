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
        this.commonTxt(50, true, false, 50);
        this.commonTxt(30, false, true, 120, 100);
        this.onComplete();
    };
    // typescript中参数名后加一个? 代表这个参数可以不传 
    RankScene.prototype.commonTxt = function (size, isCenter, isAssignment, y, x) {
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.y = y;
        if (x)
            txt.x = x;
        txt.textAlign = isCenter == true ? egret.HorizontalAlign.CENTER : egret.HorizontalAlign.LEFT;
        txt.size = size;
        txt.textColor = 0xffffff;
        isAssignment ? this.txt = txt : txt.text = "试玩榜";
    };
    RankScene.prototype.onComplete = function () {
        var url = "https://www.easy-mock.com/mock/5c88d010b3f8353242f22b91/awardInfo/text";
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        loader.load(request);
    };
    RankScene.prototype.onGetComplete = function (event) {
        var loader = event.target;
        var data = loader.data;
        // 采用js解析方法
        var res = eval("(" + data.toString() + ")");
        var value = res.data.array || '';
        if (value.length > 0) {
            for (var i = 0; i < value.length; i++) {
                if (value.length < 10) {
                    var rank_num = new egret.TextField();
                    this.addChild(rank_num);
                    rank_num.x = 100;
                    rank_num.y = 140 + 60 * i;
                    rank_num.size = 30;
                    rank_num.textColor = 0xffffff;
                    rank_num.text = "" + (i + 1);
                    var user_name = new egret.TextField();
                    this.addChild(user_name);
                    user_name.width = 300;
                    user_name.height = 30;
                    user_name.textAlign = egret.HorizontalAlign.CENTER;
                    user_name.x = 150;
                    user_name.y = 140 + 60 * i;
                    user_name.size = 24;
                    user_name.textColor = 0xffffff;
                    user_name.text = value[i].name;
                    var tscore = new egret.TextField();
                    this.addChild(tscore);
                    tscore.x = 500;
                    tscore.y = 140 + 60 * i;
                    tscore.size = 30;
                    tscore.textColor = 0xffffff;
                    tscore.text = value[i].score;
                }
            }
        }
    };
    return RankScene;
}(egret.Sprite));
__reflect(RankScene.prototype, "RankScene");
