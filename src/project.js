window.__require=function t(o,e,i){function c(n,r){if(!e[n]){if(!o[n]){var a=n.split("/");if(a=a[a.length-1],!o[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+n+"'")}n=a}var l=e[n]={exports:{}};o[n][0].call(l.exports,function(t){return c(o[n][1][t]||t)},l,l.exports,t,o,e,i)}return e[n].exports}for(var s="function"==typeof __require&&__require,n=0;n<i.length;n++)c(i[n]);return c}({Control:[function(t,o,e){"use strict";cc._RF.push(o,"a1dae+y/vtPtKkvz80JG/NP","Control"),cc.Class({extends:cc.Component,properties:{blockPrefab:cc.Prefab,camera:cc.Camera,background:cc.Node,canvas:cc.Node,scrollView:cc.Node,scrollViewContent:cc.Node,cameraNode:cc.Node,block:cc.Node,button:cc.Button,slider:cc.Slider,play:cc.SpriteFrame,suspend:cc.SpriteFrame,blockWidth:40,blockHeight:40,velocity:1,minScale:.1,maxScale:10,Rows:100,Cols:100,blockInitCount:100,switchOn:0,updateRound:0,spaceBetweenBlock:.15,intervalMax:1},onLoad:function(){console.log("Control.js init"),this.button.node.on("click",function(t){var o=t.getComponent(cc.Sprite);0==this.switchOn?(this.switchOn=1,console.log("Switch On"),o.spriteFrame=this.suspend):(this.switchOn=0,console.log("Switch Off"),o.spriteFrame=this.play)},this);var t=cc.instantiate(this.blockPrefab);this.blockWidth=t.width,this.blockHeight=t.height,t.destroy();var o=this;this.map=new Array;for(var e=0;e<this.Rows;e++){this.map[e]=new Array;for(var i=0;i<this.Cols;i++){this.map[e][i]=new Array;for(var c=0;c<2;c++)this.map[e][i][c]=0}}this.blockPool=new cc.NodePool;for(var s=0;s<this.blockInitCount;++s){var n=cc.instantiate(this.blockPrefab);this.blockPool.put(n)}function r(){if(1==this.switchOn){for(var t=new Array(0,1,-1),o=0;o<this.Rows;o++)for(var e=0;e<this.Cols;e++){for(var i=0,c=0;c<3;c++)for(var s=0;s<3;s++)if(0!=t[c]||0!=t[s]){var n=o+t[c],r=e+t[s];n<this.Rows&&n>=0&&r<this.Cols&&r>=0&&1==Math.abs(this.map[n][r][0])&&(i+=1)}1==this.map[o][e][0]&&(i<2||i>3)&&(this.map[o][e][0]=-1),0==this.map[o][e][0]&&3==i&&(this.map[o][e][0]=2)}for(o=0;o<this.Rows;o++)for(e=0;e<this.Cols;e++)2==this.map[o][e][0]?(this.map[o][e][0]=0,this.createBlock(this.background,o,e)):-1==this.map[o][e][0]&&(this.map[o][e][0]=1,this.createBlock(this.background,o,e))}}o=this;this.interval=1,this.slider.node.on("slide",function(t){o.interval=(1-t.progress)*this.intervalMax,o.unschedule(r),o.schedule(r,o.interval)},this),this.schedule(r,this.interval),this.isMoving=!1,this.background.on(cc.Node.EventType.TOUCH_END,function(t){var e=t.getTouches();if(console.log("touch end"),1==e.length){var i=e[0].getLocation(),c=t.getStartLocation();if(i.x==c.x&&i.y==c.y){console.log("chick");var s=this.background.convertToNodeSpaceAR(i),n=Math.floor(s.x/this.blockWidth)+this.Rows/2,r=Math.floor(s.y/this.blockHeight)+this.Cols/2;console.log("Chick "+n+" "+r+i),this.createBlock(this.background,n,r)}}else if(e.length>=2){console.log("touch move! touches >=2");var a=e[0],h=e[1];this.scrollView.anchorX=this.scrollView.convertToNodeSpaceAR(a)/this.scrollView.width;var l=a.getDelta(),u=h.getDelta();console.log("parent "+parent);var p=parent.convertToNodeSpaceAR(a.getLocation()),d=parent.convertToNodeSpaceAR(h.getLocation());console.log("touch1 "+a+"2 "+h+l+u);var f=p.sub(d),v=l.sub(u),m=1;(m=Math.abs(f.x)>Math.abs(f.y)?(f.x+v.x)/f.x:(f.y+v.y)/f.y)<o.minScale?m=o.minScale:m>=o.minScale&&m<=o.maxScale?m=m:m>o.maxScale&&(m=o.maxScale)}},this)},start:function(){},createBlock:function(t,o,e){var i=null;if(0==this.map[o][e][0])(i=this.blockPool.size()>0?this.blockPool.get():cc.instantiate(this.blockPrefab)).parent=t,this.map[o][e][0]=1,this.map[o][e][1]=i.uuid,i.x=o*i.width-this.background.width/2+(o+1)*this.spaceBetweenBlock,i.y=e*i.height-this.background.height/2+(e+1)*this.spaceBetweenBlock,console.log("create Block X:"+o+" Y:"+e);else{var c=this.map[o][e][1];this.map[o][e][0]=0,i=t.getChildByUuid(c),this.map[o][e][1]=0,this.blockPool.put(i),console.log("remove X:"+o+" Y:"+e)}}}),cc._RF.pop()},{}],firstControl:[function(t,o,e){"use strict";cc._RF.push(o,"f3fb9k4dvNGrauZV6PDl5ke","firstControl"),cc.Class({extends:cc.Component,properties:{startGameButton:cc.Button},onLoad:function(){this.startGameButton.node.on("click",function(t){cc.director.loadScene("secondScene")},this)},start:function(){}}),cc._RF.pop()},{}]},{},["Control","firstControl"]);