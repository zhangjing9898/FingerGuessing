class Game extends egret.Sprite {
    
    public constructor() {
        super();
        this.bg();
        this.setHand();
        this.setUIButton();
    }

    private alert_img: egret.Bitmap;
    private score_txt: egret.TextField;
    private score = 0;

    // 绘制背景
    private bg() {
        let shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);

        // 添加背景img
        let stageH = GameData.getStageHeight();
        let bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;

        // 增加top img
        let top = new egret.Bitmap();
        top.texture = RES.getRes("top_png");
        this.addChild(top);
        top.x = 0;
        top.y = 0;

        // 增加分数part
        let score_txt = new egret.TextField();
        score_txt.size = 40;
        score_txt.text = "0";
        score_txt.x = 80;
        score_txt.y = 100;
        this.addChild(score_txt);
        this.score_txt = score_txt;

        // TODO: add timerPanel
        let timerPanel = new TimerPanel();
        this.addChild(timerPanel);
        timerPanel.start();
        // TODO:游戏结束面板
    }

    // set hand related const
    private left_hand: egret.Bitmap;
    private right_hand: egret.Bitmap;
    private left_tween: egret.Tween;
    private right_tween: egret.Tween;

    // build hand function
    private setHand() {
        let stageH = GameData.getStageHeight();
        let stageW = GameData.getStageWidth();

        // set hand size 
        let left_hand = new egret.Bitmap();
        left_hand.texture = RES.getRes("rock_png");
        this.addChild(left_hand);
        left_hand.anchorOffsetX = left_hand.height / 2;
        left_hand.x = -50;
        left_hand.y = stageH / 2 -100;
        left_hand.scaleX = 0.6;
        left_hand.scaleY = 0.6;
        this.left_hand = left_hand;
        this.lTween();

        // set right_hand size
        let right_hand = new egret.Bitmap();
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
    }

    private left_btn: egret.Bitmap;
    private middle_btn: egret.Bitmap;
    private right_btn: egret.Bitmap;
    private answer_type: boolean;

    private setUIButton() {
        let stageH = GameData.getStageHeight();

        let left_btn = new egret.Bitmap();
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

        let middle_btn = new egret.Bitmap();
		middle_btn.texture = RES.getRes("middle_png");
        this.addChild(middle_btn);
        this.middle_btn = middle_btn;
		middle_btn.anchorOffsetX = middle_btn.width / 2;
		middle_btn.anchorOffsetY = middle_btn.height / 2;
		middle_btn.x = middle_btn.width / 2 + left_btn.width;
		middle_btn.y = stageH - middle_btn.height / 2;
        
        let right_btn = new egret.Bitmap();
		right_btn.texture = RES.getRes("right_png");
        this.addChild(right_btn);
        this.right_btn = right_btn;
		this.right_btn = right_btn;
		right_btn.anchorOffsetX = right_btn.width / 2;
		right_btn.anchorOffsetY = right_btn.height / 2;
		right_btn.x = right_btn.width / 2 + left_btn.width + middle_btn.width;
		right_btn.y = stageH - right_btn.height / 2; 
    }

    // left-hand tween
    private lTween() {
        // 根据游戏所剩时间，控制time，达到控制缓动效果
        // 距离游戏结束时间越短，hand摇动越快
        let game_time = parseInt(egret.localStorage.getItem("default_time"));
        let time = 40;
        if (game_time >= 30) {
            time = 130;
        } else if (game_time >= 15 && game_time < 30) {
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
    }

    private rTween(){
        let game_time = parseInt(egret.localStorage.getItem("default_time"));
        let time = 40;
        if (game_time >= 30) {
            time = 130;
        } else if (game_time >= 15 && game_time < 30) {
            time = 70;
        }
        this.right_hand.texture = RES.getRes("rock_png");
        egret.Tween.get(this.right_hand).to({
            rotation: -20+180
        }, time)
        .to({
            rotation: 20+180
        }, time)
        .to({
            rotation: -20+180
        }, time)
        .to({
            rotation: 20+180
        }, time)
        .to({
            rotation: -20+180
        }, time)
        .to({
            rotation: 20+180
        }, time)
        .to({
            rotation: 180
        }, time)
        .call(this.right_change, this);
    }
    // type用于定义出拳的情况，0 石头；1 布；2剪刀
    private left_type: number;
    private right_type: number;
    // replace left_hand img
    private left_change() {
        this.left_btn.touchEnabled = true;
        this.middle_btn.touchEnabled = true;
        this.right_btn.touchEnabled = true;
        let ran = Math.random()*3;
        if (ran >= 0 && ran < 1) {
            this.left_hand.texture = RES.getRes("rock_png");
            this.left_type = 0;
        } else if (ran >= 1 && ran < 2) {
            this.left_hand.texture = RES.getRes("paper_png");
            this.left_type = 1;
        } else {
            this.left_hand.texture = RES.getRes("scissor_png");
            this.left_type = 2;
        }
    }
    // 禁止touched 下方按钮
    private un_touch() {
        this.left_btn.touchEnabled = false;
        this.middle_btn.touchEnabled = false;
        this.right_btn.touchEnabled = false;
    }
    private left_btnCallback(evt: egret.TouchEvent): void {
        console.log('evt.type', evt.type);
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            
            evt.currentTarget.scaleX= 1.05;
            evt.currentTarget.scaleY = 1.05;
            this.left_btn.texture = RES.getRes("left_press_png");
        } else if (evt.type == egret.TouchEvent.TOUCH_END) {
            console.log('end');
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            this.left_btn.texture = RES.getRes("left_png");
            this.un_touch();

            const actions = () => {
				const functionA = () => { this.answer_type = false };
				const functionB = () => { this.answer_type = true };
				const functionC = () => { this.score++, this.answer_type = true};
				return new Map([
					[{ left_type: 0, right_type: 0 }, functionA],
					[{ left_type: 0, right_type: 1 }, functionA],
					[{ left_type: 0, right_type: 2 }, functionB],
					[{ left_type: 1, right_type: 0 }, functionC],
					[{ left_type: 1, right_type: 1 }, functionA],
					[{ left_type: 1, right_type: 2 }, functionA],
					[{ left_type: 2, right_type: 0 }, functionA],
					[{ left_type: 2, right_type: 1 }, functionC],
					[{ left_type: 2, right_type: 2 }, functionA]
				])
			}	
			let action = [...actions()].filter(([key, value]) => (
				key.left_type == this.left_type && key.right_type == this.right_type
            ));
			action.forEach(([key, value]) => value.call(this));
           
            // 更新得分
            this.score_txt.text = "" + this.score;
            // 显示弹框
            this.resultPopup();
            // 0.3s后 移除弹框
            setTimeout(() => {
                if (this.alert_img.parent) {
                    this.alert_img.parent.removeChild(this.alert_img);
                }
                this.lTween();
                this.rTween();
            }, 300);

        } else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
           
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            this.left_btn.texture = RES.getRes("left_png");
        }   
    }

    private right_change() {
        let ran = Math.random()*3;
        if (ran >= 0 && ran < 1) {
            this.right_hand.texture = RES.getRes("rock_png");
            this.right_type = 0;
        } else if (ran >= 1 && ran < 2) {
            this.right_hand.texture = RES.getRes("paper_png");
            this.right_type = 1;
        } else {
            this.right_hand.texture = RES.getRes("scissor_png");
            this.right_type = 2;
        }
    }

    // 对错弹框
    private resultPopup() {
        let img = new egret.Bitmap();
        this.answer_type == false ? img.texture = RES.getRes("fault_png") : img.texture = RES.getRes("true_png");
        this.addChild(img);
        this.alert_img = img;
        img.x = 0;
        img.y = GameData.getStageHeight() / 2 - img.height / 2 - 80;
    }
}