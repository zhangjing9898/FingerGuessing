class TimerPanel extends egret.Sprite {
    public constructor() {
        super();
        this.draw();
        this.createTimer();
    }

    private txt: egret.TextField;

    private draw() {
        this.txt = new egret.TextField();
        // 获取舞台宽度
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.size = 40;
        this.txt.y = 110;
        this.txt.x = 250;
        this.txt.textColor = 0xff0000;
        this.txt.text = `${this._num}'00'`;
        this.addChild(this.txt);
    }

    private _timer: egret.Timer;
    private _num = 1;

    private createTimer(){
        // 存入缓存
        let key: string = "default_time";
        let value: string = "" + this._num;
        egret.localStorage.setItem(key, value);

        // public Timer( delay:number,repeatCount:number )delay:以毫秒为单位
        this._timer = new egret.Timer(1000, this._num);

        // 每次计时 1000ms之后要做的事
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        // 侦听计时结束
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom , this);
    }

    private _timers = this._num;
    private onTimer() {
        this._timers -= 1;
        this.txt.text = this._timers + "'00'";

        let key: string = "default_time";
        let value: string = "" + this._timers;
        egret.localStorage.setItem(key, value);
    }

    private onTimerCom() {
        this.txt.text = "00'00''";
        // 结束
        // 调出结束面板
        let event: GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    }

    public start() {
        this.txt.text = `${this._num}'00'`;
        this._timers = this._num;
        this._timer.reset();
        this._timer.start();
    }
}