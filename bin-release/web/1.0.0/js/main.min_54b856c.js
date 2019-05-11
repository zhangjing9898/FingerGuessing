var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},__read=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,a,i=n.call(t),o=[];try{for(;(void 0===e||e-->0)&&!(r=i.next()).done;)o.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(a)throw a.error}}return o},__spread=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function o(t){try{h(r.next(t))}catch(e){i(e)}}function s(t){try{h(r["throw"](t))}catch(e){i(e)}}function h(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(o,s)}h((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(a)throw new TypeError("Generator is already executing.");for(;h;)try{if(a=1,i&&(o=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,i=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){h.label=n[1];break}if(6===n[0]&&h.label<o[1]){h.label=o[1],o=n;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(n);break}o[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(r){n=[6,r],i=0}finally{a=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,i,o,s,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Game=function(t){function e(){var e=t.call(this)||this;return e.score=0,e.bg(),e.setHand(),e.setUIButton(),e}return __extends(e,t),e.prototype.bg=function(){var t=new egret.Shape;t.graphics.beginFill(15087730),t.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight()),t.graphics.endFill(),this.addChild(t);var e=GameData.getStageHeight(),n=new egret.Bitmap;n.texture=RES.getRes("bg_png"),this.addChild(n),n.height=e;var r=new egret.Bitmap;r.texture=RES.getRes("top_png"),this.addChild(r),r.x=0,r.y=0;var a=new egret.TextField;a.size=40,a.text="0",a.x=80,a.y=100,this.addChild(a),this.score_txt=a;var i=new TimerPanel;this.addChild(i),i.start(),i.addEventListener(GameEvent.GAME_OVER,this.gameOver,this)},e.prototype.gameOver=function(){var t="game_score",e=""+this.score;egret.localStorage.setItem(t,e);var n=new GameEvent(GameEvent.GAME_OVER);this.dispatchEvent(n)},e.prototype.setHand=function(){var t=GameData.getStageHeight(),e=GameData.getStageWidth(),n=new egret.Bitmap;n.texture=RES.getRes("rock_png"),this.addChild(n),n.anchorOffsetX=n.height/2,n.x=-50,n.y=t/2-100,n.scaleX=.6,n.scaleY=.6,this.left_hand=n,this.lTween();var r=new egret.Bitmap;r.texture=RES.getRes("rock_png"),this.addChild(r),r.rotation=180,r.anchorOffsetX=0,r.anchorOffsetY=r.height/2,r.x=e+50,r.y=t/2-100,r.scaleX=.6,r.scaleY=.6,this.right_hand=r,this.rTween()},e.prototype.setUIButton=function(){var t=GameData.getStageHeight(),e=new egret.Bitmap;e.texture=RES.getRes("left_png"),this.addChild(e),this.left_btn=e,e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.x=e.width/2,e.y=t-e.height/2,e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.left_btnCallback,this),e.addEventListener(egret.TouchEvent.TOUCH_END,this.left_btnCallback,this),e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.left_btnCallback,this);var n=new egret.Bitmap;n.texture=RES.getRes("middle_png"),this.addChild(n),this.middle_btn=n,n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.x=n.width/2+e.width,n.y=t-n.height/2,n.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.middle_btnCallback,this),n.addEventListener(egret.TouchEvent.TOUCH_END,this.middle_btnCallback,this),n.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.middle_btnCallback,this);var r=new egret.Bitmap;r.texture=RES.getRes("right_png"),this.addChild(r),this.right_btn=r,this.right_btn=r,r.anchorOffsetX=r.width/2,r.anchorOffsetY=r.height/2,r.x=r.width/2+e.width+n.width,r.y=t-r.height/2,r.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.right_btnCallback,this),r.addEventListener(egret.TouchEvent.TOUCH_END,this.right_btnCallback,this),r.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.right_btnCallback,this)},e.prototype.lTween=function(){var t=parseInt(egret.localStorage.getItem("default_time")),e=40;t>=30?e=130:t>=15&&30>t&&(e=70),this.left_hand.texture=RES.getRes("rock_png"),egret.Tween.get(this.left_hand).to({rotation:20},e).to({rotation:-20},e).to({rotation:20},e).to({rotation:-20},e).to({rotation:20},e).to({rotation:-20},e).to({rotation:0},e).call(this.left_change,this)},e.prototype.rTween=function(){var t=parseInt(egret.localStorage.getItem("default_time")),e=40;t>=30?e=130:t>=15&&30>t&&(e=70),this.right_hand.texture=RES.getRes("rock_png"),egret.Tween.get(this.right_hand).to({rotation:160},e).to({rotation:200},e).to({rotation:160},e).to({rotation:200},e).to({rotation:160},e).to({rotation:200},e).to({rotation:180},e).call(this.right_change,this)},e.prototype.left_change=function(){this.left_btn.touchEnabled=!0,this.middle_btn.touchEnabled=!0,this.right_btn.touchEnabled=!0;var t=3*Math.random();t>=0&&1>t?(this.left_hand.texture=RES.getRes("rock_png"),this.left_type=0):t>=1&&2>t?(this.left_hand.texture=RES.getRes("paper_png"),this.left_type=1):(this.left_hand.texture=RES.getRes("scissor_png"),this.left_type=2)},e.prototype.un_touch=function(){this.left_btn.touchEnabled=!1,this.middle_btn.touchEnabled=!1,this.right_btn.touchEnabled=!1},e.prototype.commonCallback=function(t,e,n,r){var a=this,i=t.currentTarget.scaleX,o=t.currentTarget.scaleY;if(t.type==egret.TouchEvent.TOUCH_BEGIN)i=1.05,o=1.05,r.texture=RES.getRes(e+"_press_png");else if(t.type==egret.TouchEvent.TOUCH_END){i=1,o=1,r.texture=RES.getRes(e+"_png"),this.un_touch();var s=__spread(n()).filter(function(t){var e=__read(t,2),n=e[0];e[1];return n.left_type==a.left_type&&n.right_type==a.right_type});s.forEach(function(t){var e=__read(t,2),n=(e[0],e[1]);return n.call(a)}),this.score_txt.text=""+this.score,this.resultPopup(),setTimeout(function(){a.alert_img.parent&&a.alert_img.parent.removeChild(a.alert_img),a.lTween(),a.rTween()},300)}else t.type==egret.TouchEvent.TOUCH_RELEASE_OUTSIDE&&(i=1,o=1,r.texture=RES.getRes('"'+e+'_png"'))},e.prototype.left_btnCallback=function(t){var e=this,n=function(){var t=function(){e.answer_type=!1},n=function(){e.score++,e.answer_type=!0};return new Map([[{left_type:0,right_type:0},t],[{left_type:0,right_type:1},t],[{left_type:0,right_type:2},n],[{left_type:1,right_type:0},n],[{left_type:1,right_type:1},t],[{left_type:1,right_type:2},t],[{left_type:2,right_type:0},t],[{left_type:2,right_type:1},n],[{left_type:2,right_type:2},t]])};this.commonCallback(t,"left",n,this.left_btn)},e.prototype.middle_btnCallback=function(t){var e=this,n=function(){var t=function(){e.answer_type=!1},n=function(){e.score++,e.answer_type=!0};return new Map([[{left_type:0,right_type:0},n],[{left_type:0,right_type:1},t],[{left_type:0,right_type:2},t],[{left_type:1,right_type:0},t],[{left_type:1,right_type:1},n],[{left_type:1,right_type:2},t],[{left_type:2,right_type:0},t],[{left_type:2,right_type:1},t],[{left_type:2,right_type:2},n]])};this.commonCallback(t,"middle",n,this.middle_btn)},e.prototype.right_btnCallback=function(t){var e=this,n=function(){var t=function(){e.answer_type=!1},n=function(){e.score++,e.answer_type=!0};return new Map([[{left_type:0,right_type:0},t],[{left_type:0,right_type:1},n],[{left_type:0,right_type:2},t],[{left_type:1,right_type:0},t],[{left_type:1,right_type:1},t],[{left_type:1,right_type:2},n],[{left_type:2,right_type:0},n],[{left_type:2,right_type:1},t],[{left_type:2,right_type:2},t]])};this.commonCallback(t,"right",n,this.right_btn)},e.prototype.right_change=function(){var t=3*Math.random();t>=0&&1>t?(this.right_hand.texture=RES.getRes("rock_png"),this.right_type=0):t>=1&&2>t?(this.right_hand.texture=RES.getRes("paper_png"),this.right_type=1):(this.right_hand.texture=RES.getRes("scissor_png"),this.right_type=2)},e.prototype.resultPopup=function(){var t=new egret.Bitmap;0==this.answer_type?t.texture=RES.getRes("fault_png"):t.texture=RES.getRes("true_png"),this.addChild(t),this.alert_img=t,t.x=0,t.y=GameData.getStageHeight()/2-t.height/2-80},e}(egret.Sprite);__reflect(Game.prototype,"Game");var GameData=function(){function t(){}return t.getStageWidth=function(){return egret.MainContext.instance.stage.stageWidth},t.getStageHeight=function(){return egret.MainContext.instance.stage.stageHeight},t}();__reflect(GameData.prototype,"GameData");var GameEvent=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.GAME_OVER="game_over_event",e.GAME_HIT="game_hit_event",e.GAME_START="game_start_event",e.GAME_GO="game_go_event",e.GAME_CONTINUE="game_continue_event",e.GAME_BLEED="game_bleed_event",e.GAME_HELP="game_help_event",e.GAME_RANK="game_rank_event",e.GAME_HINT="game_hint_event",e.GAME_TORANK="game_torank_event",e}(egret.Event);__reflect(GameEvent.prototype,"GameEvent");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.anchorOffsetY=this.textField.textHeight/2,this.textField.y=GameData.getStageHeight()/2,this.textField.width=GameData.getStageWidth(),this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="正在加载中..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=new StartScene;this.addChild(t),t.addEventListener(GameEvent.GAME_GO,this.go,this),t.addEventListener(GameEvent.GAME_BLEED,this.rank,this)},e.prototype.go=function(){console.log("进入游戏！"),this.removeEventListener(GameEvent.GAME_GO,this.go,this),this.removeChildren();var t=new Game;this.addChild(t),t.addEventListener(GameEvent.GAME_OVER,this.gameOver,this)},e.prototype.gameOver=function(){console.log("game over页面"),this.removeChildren();var t=new OverScene;this.addChild(t),t.addEventListener(GameEvent.GAME_CONTINUE,this.go,this),t.addEventListener(GameEvent.GAME_RANK,this.rank,this),t.addEventListener(GameEvent.GAME_HIT,this.goHome,this)},e.prototype.rank=function(){this.removeChildren();var t=new RankScene;this.addChild(t),t.addEventListener(GameEvent.GAME_START,this.goHome,this)},e.prototype.goHome=function(){this.removeChildren(),this.createGameScene()},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,r=t.map(function(t){return n.parse(t)}),a=this.textfield,i=-1,o=function(){i++,i>=r.length&&(i=0);var t=r[i];a.textFlow=t;var n=egret.Tween.get(a);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(o,e)};o()},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var OverScene=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var t=new egret.Shape;t.graphics.beginFill(15087730),t.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight()),t.graphics.endFill(),this.addChild(t);var e=new egret.Bitmap;e.texture=RES.getRes("5541c88bb1fd0_wx_jpg"),this.addChild(e),e.scaleX=.5,e.scaleY=.5;var n=new egret.Bitmap;n.texture=RES.getRes("end1_png"),this.addChild(n),n.x=50,n.y=150;var r=egret.localStorage.getItem("game_score"),a=new egret.TextField;a.size=80,a.text=r,a.x=250,a.y=500,a.textColor=16711680,this.addChild(a),this.commonImgConf("replay_png",150,750,this.replay_btnCallback),this.commonImgConf("rank_png",300,750,this.rank_btnCallback),this.commonImgConf("home_png",450,750,this.home_btnCallback)},e.prototype.replay_btnCallback=function(t){this.commonCallback(t,GameEvent.GAME_CONTINUE)},e.prototype.rank_btnCallback=function(t){this.commonCallback(t,GameEvent.GAME_RANK)},e.prototype.home_btnCallback=function(t){this.commonCallback(t,GameEvent.GAME_HIT)},e.prototype.commonCallback=function(t,e){var n=t.currentTarget.scaleX,r=t.currentTarget.scaleY;if(t.type==egret.TouchEvent.TOUCH_BEGIN)n=1.05,r=1.05;else if(t.type==egret.TouchEvent.TOUCH_END){n=1,r=1;var a=new GameEvent(e);this.dispatchEvent(a)}else n=1,r=1},e.prototype.commonImgConf=function(t,e,n,r){var a=new egret.Bitmap;a.texture=RES.getRes(t),this.addChild(a),a.anchorOffsetX=a.width/2,a.anchorOffsetY=a.height/2,a.x=e,a.y=n,a.touchEnabled=!0,a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,r,this),a.addEventListener(egret.TouchEvent.TOUCH_END,r,this),a.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,r,this)},e}(egret.Sprite);__reflect(OverScene.prototype,"OverScene");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var RankScene=function(_super){function RankScene(){var t=_super.call(this)||this;return t.init(),t}return __extends(RankScene,_super),RankScene.prototype.init=function(){var t=GameData.getStageWidth(),e=GameData.getStageHeight(),n=new egret.Shape;n.graphics.beginFill(15087730),n.graphics.drawRect(0,0,t,e),n.graphics.endFill(),this.addChild(n);var r=new egret.Bitmap;r.texture=RES.getRes("bg_png"),this.addChild(r),r.height=e,this.commonTxt(50,!0,!1,50),this.commonTxt(30,!1,!0,120,100);var a=new egret.Bitmap;a.texture=RES.getRes("back_png"),this.addChild(a),a.anchorOffsetX=a.width/2,a.anchorOffsetY=a.height/2,a.x=t/2,a.y=.76*e,a.touchEnabled=!0,a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.homeBtnCallback,this),a.addEventListener(egret.TouchEvent.TOUCH_END,this.homeBtnCallback,this),a.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.homeBtnCallback,this),this.onComplete()},RankScene.prototype.commonTxt=function(t,e,n,r,a){var i=new egret.TextField;i.width=egret.MainContext.instance.stage.stageWidth,this.addChild(i),i.y=r,a&&(i.x=a),i.textAlign=1==e?egret.HorizontalAlign.CENTER:egret.HorizontalAlign.LEFT,i.size=t,i.textColor=16777215,n?this.txt=i:i.text="试玩榜"},RankScene.prototype.onComplete=function(){var t="https://www.easy-mock.com/mock/5c88d010b3f8353242f22b91/awardInfo/text",e=new egret.URLLoader;e.dataFormat=egret.URLLoaderDataFormat.TEXT,e.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);var n=new egret.URLRequest(t);n.method=egret.URLRequestMethod.GET,e.load(n)},RankScene.prototype.onGetComplete=function(event){var loader=event.target,data=loader.data,res=eval("("+data.toString()+")"),value=res.data.array||"";if(value.length>0)for(var i=0;i<value.length;i++)if(value.length<10){var rank_num=new egret.TextField;this.addChild(rank_num),rank_num.x=100,rank_num.y=140+60*i,rank_num.size=30,rank_num.textColor=16777215,rank_num.text=""+(i+1);var user_name=new egret.TextField;this.addChild(user_name),user_name.width=300,user_name.height=30,user_name.textAlign=egret.HorizontalAlign.CENTER,user_name.x=150,user_name.y=140+60*i,user_name.size=24,user_name.textColor=16777215,user_name.text=value[i].name;var tscore=new egret.TextField;this.addChild(tscore),tscore.x=500,tscore.y=140+60*i,tscore.size=30,tscore.textColor=16777215,tscore.text=value[i].score}},RankScene.prototype.homeBtnCallback=function(t){if(t.type==egret.TouchEvent.TOUCH_BEGIN)t.currentTarget.scaleX=1.05,t.currentTarget.scaleY=1.05;else if(t.type==egret.TouchEvent.TOUCH_END){t.currentTarget.scaleX=1,t.currentTarget.scaleY=1;var e=new GameEvent(GameEvent.GAME_START);this.dispatchEvent(e)}else t.type==egret.TouchEvent.TOUCH_RELEASE_OUTSIDE&&(t.currentTarget.scaleX=1,t.currentTarget.scaleY=1)},RankScene}(egret.Sprite);__reflect(RankScene.prototype,"RankScene");var StartScene=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var t=new egret.Shape;t.graphics.beginFill(15087730),t.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight()),t.graphics.endFill(),this.addChild(t);var e=new egret.Bitmap;e.texture=RES.getRes("logo_png"),this.addChild(e),e.x=20,e.y=100;var n=new egret.Bitmap;n.texture=RES.getRes("btn_start_png"),this.addChild(n),this.start_btn=n,n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.touchEnabled=!0,n.x=GameData.getStageWidth()/2,n.y=800,n.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.start_btnCallback,this),n.addEventListener(egret.TouchEvent.TOUCH_END,this.start_btnCallback,this),n.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.start_btnCallback,this);var r=new egret.Bitmap;r.texture=RES.getRes("rank_png"),this.addChild(r),r.anchorOffsetX=r.width/2,r.anchorOffsetY=r.height/2,r.x=550,r.y=60,r.touchEnabled=!0,r.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.rank_btnCallback,this),r.addEventListener(egret.TouchEvent.TOUCH_END,this.rank_btnCallback,this),r.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.rank_btnCallback,this)},e.prototype.start_btnCallback=function(t){if(t.type===egret.TouchEvent.TOUCH_BEGIN){var e=t.currentTarget;e.scaleX=1.05,e.scaleY=e.scaleX}else if(t.type===egret.TouchEvent.TOUCH_END){var e=t.currentTarget;e.scaleX=1,e.scaleY=e.scaleX;var n=new GameEvent(GameEvent.GAME_GO);this.dispatchEvent(n)}else if(t.type===egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){var e=t.currentTarget;e.scaleX=1,e.scaleY=e.scaleX}},e.prototype.rank_btnCallback=function(t){if(t.type===egret.TouchEvent.TOUCH_BEGIN){var e=t.currentTarget;e.scaleX=1.05,e.scaleY=e.scaleX}else if(t.type===egret.TouchEvent.TOUCH_END){var e=t.currentTarget;e.scaleX=1,e.scaleY=e.scaleX;var n=new GameEvent(GameEvent.GAME_BLEED);this.dispatchEvent(n)}else if(t.type===egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){var e=t.currentTarget;e.scaleX=1,e.scaleY=e.scaleX}},e}(egret.Sprite);__reflect(StartScene.prototype,"StartScene");var TimerPanel=function(t){function e(){var e=t.call(this)||this;return e._num=45,e._timers=e._num,e.draw(),e.createTimer(),e}return __extends(e,t),e.prototype.draw=function(){this.txt=new egret.TextField,this.txt.width=egret.MainContext.instance.stage.stageWidth,this.txt.size=40,this.txt.y=110,this.txt.x=250,this.txt.textColor=16711680,this.txt.text=this._num+"'00'",this.addChild(this.txt)},e.prototype.createTimer=function(){var t="default_time",e=""+this._num;egret.localStorage.setItem(t,e),this._timer=new egret.Timer(1e3,this._num),this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this),this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerCom,this)},e.prototype.onTimer=function(){this._timers-=1,this.txt.text=this._timers+"'00'";var t="default_time",e=""+this._timers;egret.localStorage.setItem(t,e)},e.prototype.onTimerCom=function(){this.txt.text="00'00''";var t=new GameEvent(GameEvent.GAME_OVER);this.dispatchEvent(t)},e.prototype.start=function(){this.txt.text=this._num+"'00'",this._timers=this._num,this._timer.reset(),this._timer.start()},e}(egret.Sprite);__reflect(TimerPanel.prototype,"TimerPanel");