// TODO: 声明接口
class RankScene extends egret.Sprite {

    public constructor() {
        super();
        this.init();
    }

    private txt: egret.TextField;
    private init() {
        const stageW = GameData.getStageWidth();
        const stageH = GameData.getStageHeight();

        const shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, stageW, stageH);
        shape.graphics.endFill();
        this.addChild(shape);

        const bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;

        this.commonTxt(50, true, 50);
        this.commonTxt(30, false, 120, 100);

        this.onComplete();
    }
    // typescript中参数名后加一个? 代表这个参数可以不传 
    private commonTxt(size: number, isCenter: boolean, y: number, x?: number) {
        const txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.y = y;
        if (x) txt.x = x;
        txt.textAlign = isCenter == true ? egret.HorizontalAlign.CENTER : egret.HorizontalAlign.LEFT;
        txt.size = size;
        txt.textColor = 0xffffff;
    }

    private onComplete(): void {
        const url: string = "https://www.easy-mock.com/mock/5c88d010b3f8353242f22b91/awardInfo/text";
        const loader: egret.URLLoader = new egret.URLLoader();

        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);

        const request: egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        loader.load(request);
    }

    private onGetComplete(event: egret.Event):void {
        const loader:egret.URLLoader = <egret.URLLoader> event.target;
        let data:egret.URLVariables = loader.data;
        // 采用js解析方法
        let res = eval("("+data.toString()+")");
        let value = res.data.array || '';
        if(value.length === 0){
            this.txt.text = "还没有排行，快来参与吧";
        }else{
			for(var i = 0; i < value.length; i++){
                if(value.length < 10){
                    var rank_num = new egret.TextField();
                    this.addChild(rank_num);
                    rank_num.x = 100;
                    rank_num.y = 140 + 60*i;
                    rank_num.size = 30;
                    rank_num.textColor = 0xffffff;
                    rank_num.text = "" + (i+1);

                    var user_name = new egret.TextField();
                    this.addChild(user_name);
                    user_name.width = 300;
                    user_name.height = 30;
                    user_name.textAlign = egret.HorizontalAlign.CENTER;
                    user_name.x = 150;
                    user_name.y = 140 + 60*i;
                    user_name.size = 24;
                    user_name.textColor = 0xffffff;
                    user_name.text = value[i].name;

                    var tscore = new egret.TextField();
                    this.addChild(tscore);
                    tscore.x = 500;
                    tscore.y = 140 + 60*i;
                    tscore.size = 30;
                    tscore.textColor = 0xffffff;
                    tscore.text = value[i].score;
                }
			}
        }
    }
}
