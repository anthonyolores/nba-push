(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(80)},44:function(e,t,a){},45:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){var s={"./logo.png":78};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=n,e.exports=o,o.id=77},78:function(e,t,a){e.exports=a.p+"static/media/logo.ec8c9be4.png"},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),n=a(13),r=a.n(n),i=(a(44),a(5)),c=a(6),l=a(9),m=a(7),p=a(8),d=(a(45),a(20)),u=a(19),h=a(16),y=a(3),v=a(21),g=a.n(v);function E(e){return new Promise(function(t,a){g()({method:"post",url:"/getgames",params:{gameDate:e},headers:{"Content-Type":"application/json"}}).then(function(e){t(e.data)}).catch(function(e){return a(e)})})}function f(e,t,a){return new Promise(function(s,o){g()({method:"post",url:"/getplaybyplay",params:{gameDate:e,gameId:t,gamePeriod:a},headers:{"Content-Type":"application/json"}}).then(function(e){s(e.data.game)}).catch(function(e){return o(e)})})}var b=a(38),P=function(e){return(e<10?"0":"")+e},N={getFormattedDate:function(e){return e.getFullYear()+"-"+P(e.getMonth()+1)+"-"+P(e.getDate())},addZero:P},S=(a(73),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.setDatePicker(e),this.props.updateDate(e.getFullYear()+""+N.addZero(e.getMonth()+1)+N.addZero(e.getDate())),this.setState(this.state)}},{key:"render",value:function(){return o.a.createElement(b.a,{selected:this.props.datePicker,onChange:this.handleChange})}}]),t}(s.Component)),w=a(37),T=a.n(w),O=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(T.a,{type:this.props.type,color:this.props.color,height:"50px",width:"50px"})}}]),t}(s.Component),C={season:["Regular Season","Regular Season","Playoffs","Playoffs","NBA Finals"],teams:{ATL:"Gawks",BKN:"Nets",BOS:"Celtics",CHA:"Hornets",CHI:"Bulls",CLE:"Cavaliers",DAL:"Mavericks",DEN:"Nuggets",DET:"Pistons",GSW:"Warriors",HOU:"Rockets",IND:"Pacers",LAC:"Clippers",LAL:"Lakers",MEM:"Grizzlies",MIA:"Heat",MIL:"Bucks",MIN:"Timberwolves",NOP:"Pelicans",NYK:"Knicks",OKC:"Thunder",ORL:"Magic",PHI:"76ers",PHX:"Suns",POR:"Blazers",SAC:"Kings",SAS:"Spurs",TOR:"Raptors",UTA:"Jazz",WAS:"Wizards"},teamColor:{ATL:"#e03a3e",BKN:"#000000",BOS:"#008348",CHA:"#00788c",CHI:"#ce1141",CLE:"#6f263d",DAL:"#0053bc",DEN:"#0e2240",DET:"#1d428a",GSW:"#fdb927",HOU:"#ce1141",IND:"#002d62",LAC:"#c8102e",LAL:"#552583",MEM:"#5d76a9",MIA:"#98002e",MIL:"#00471b",MIN:"#0c2340",NOP:"#b4975a",NYK:"#f58426",OKC:"#007ac1",ORL:"#0077c0",PHI:"#ed174c",PHX:"#1d1160",POR:"#e03a3e",SAC:"#5a2b81",SAS:"#c4ced4",TOR:"#ce1141",UTA:"#002b5c",WAS:"#002b5c"}},B=(a(74),a(14)),_=a.n(B),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"gamelist-container"},o.a.createElement("div",{className:"gamelist-header",style:{display:null===this.props.title?"none":""}},"\xa0",o.a.createElement("h1",null,this.props.title)),o.a.createElement("div",{className:"gamelist-games"},this.props.gameList.map(function(t,a){return o.a.createElement("div",{onClick:e.props.showBoxScore.bind(e,t),className:"game-box",key:t.gameId},o.a.createElement("div",{className:"game-schedule"},_()(t.startDateEastern).format("dddd, MMMM Do")),o.a.createElement("div",{className:"game-team-container"},o.a.createElement("div",{className:"game-team"},o.a.createElement("div",{className:"team-title",style:{color:C.teamColor[t.hTeam.triCode]}},C.teams[t.hTeam.triCode]),o.a.createElement("div",{className:"team-standing"},"(",t.hTeam.win+"-"+t.hTeam.loss,")"),o.a.createElement("div",{className:"team-logo"},o.a.createElement("img",{title:C.teams[t.hTeam.triCode],src:"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+t.hTeam.triCode.toLowerCase()+".png"})),o.a.createElement("div",{className:(parseInt(t.hTeam.score)>parseInt(t.vTeam.score)?"winner ":"")+"team-score"},t.hTeam.score)),o.a.createElement("div",{className:"game-team"},o.a.createElement("div",{className:"team-title",style:{color:C.teamColor[t.vTeam.triCode]}},C.teams[t.vTeam.triCode]),o.a.createElement("div",{className:"team-standing"},"(",t.vTeam.win+"-"+t.vTeam.loss,")"),o.a.createElement("div",{className:"team-logo"},o.a.createElement("img",{title:C.teams[t.vTeam.triCode],src:"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+t.vTeam.triCode.toLowerCase()+".png"})),o.a.createElement("div",{className:(parseInt(t.vTeam.score)>parseInt(t.hTeam.score)?"winner ":"")+"team-score"},t.vTeam.score)),t.hasGameBookPdf?"":0==t.period.current?o.a.createElement("div",{className:"game-not-started"},"Not Started"):""),t.isGameActivated?o.a.createElement("div",{className:"game-live"},"Live Now"):"",o.a.createElement("div",{className:"game-detail"},o.a.createElement("div",{className:"detail-season"},null!=t.playoffs?t.playoffs.seriesSummaryText:"Season "+t.seasonYear+" "+C.season[t.seasonStageId-1]),o.a.createElement("div",{className:"detail-arena"},t.arena.name+" "+t.arena.city+", "+t.arena.country)))})))}}]),t}(s.Component),k=(a(76),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).isPlayByPlay=!1,a.pbpPeriod=1,a.updatePooling=null,a.showPlayByPlay=a.showPlayByPlay.bind(Object(y.a)(a)),a.pushMessage=a.pushMessage.bind(Object(y.a)(a)),a.pushUpdate=a.pushUpdate.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"showPlayByPlay",value:function(e,t){var a=this;this.pbpPeriod=t,this.props.setPlayByPlay(null),0===t?this.props.setShowPlayByPlay(!1):(this.props.setShowPlayByPlay(!0),f(e.startDateEastern,e.gameId,t).then(function(e){null!=e?a.props.setPlayByPlay(e.play):a.props.setPlayByPlay(null)},function(e){console.log(e)}))}},{key:"pushMessage",value:function(e,t){document.dispatchEvent(new CustomEvent("pushbaby",{detail:{title:e,message:t}}))}},{key:"pushUpdate",value:function(e){this.props.setPushUpdate(!this.props.pushUpdate),this.props.pushUpdate?clearInterval(this.updatePooling):this.updatePooling=setInterval(this.getLatestUpdate.bind(null,e,this.props.gameBoxScore.period.current,this),5e3)}},{key:"closeBoxScore",value:function(){this.props.setBoxScore(0),this.props.setPushUpdate(!1),this.props.setPushData(null),clearInterval(this.updatePooling)}},{key:"getLatestUpdate",value:function(e,t,a){f(e.startDateEastern,e.gameId,t).then(function(t){if(t.play[t.play.length-1].description!==a.props.pushData){var s=t.play[t.play.length-1];a.props.setPushData(s.description),a.pushMessage("("+(""===s.clock?"12:00":s.clock)+") "+e.vTeam.triCode+" "+N.addZero(s.visitor_score)+"-"+N.addZero(s.home_score)+" "+e.hTeam.triCode,s.description),console.log(s)}else console.log("No Updates")},function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.gameBoxScore,a=this.props.boxScore;return o.a.createElement("div",{className:"boxscore-container",key:t.gameId},o.a.createElement("div",{className:"boxscore-arena"},t.arena.name+" "+t.arena.city+", "+t.arena.country),o.a.createElement("div",{className:"boxscore-schedule"},_()(t.startDateEastern).format("dddd, MMMM Do YYYY"),t.isGameActivated?o.a.createElement("div",{className:"boxscore-live"},"Live Now"):""),o.a.createElement("div",{className:"boxscore-team-container"},o.a.createElement("div",{className:"boxscore-team"},o.a.createElement("div",{className:"team-title",style:{color:C.teamColor[t.hTeam.triCode]}},C.teams[t.hTeam.triCode]),o.a.createElement("div",{className:"team-standing"},"(",t.hTeam.win+"-"+t.hTeam.loss,")"),o.a.createElement("div",{className:"team-logo"},o.a.createElement("img",{title:C.teams[t.hTeam.triCode],src:"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+t.hTeam.triCode.toLowerCase()+".png"})),o.a.createElement("div",{className:(parseInt(t.hTeam.score)>parseInt(t.vTeam.score)?"winner ":"")+"team-score"},t.hTeam.score)),o.a.createElement("div",{className:"boxscore-team"},o.a.createElement("div",{className:"team-title",style:{color:C.teamColor[t.vTeam.triCode]}},C.teams[t.vTeam.triCode]),o.a.createElement("div",{className:"team-standing"},"(",t.vTeam.win+"-"+t.vTeam.loss,")"),o.a.createElement("div",{className:"team-logo"},o.a.createElement("img",{title:C.teams[t.vTeam.triCode],src:"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+t.vTeam.triCode.toLowerCase()+".png"})),o.a.createElement("div",{className:(parseInt(t.vTeam.score)>parseInt(t.hTeam.score)?"winner ":"")+"team-score"},t.vTeam.score)),t.hasGameBookPdf?"":0==t.period.current?o.a.createElement("div",{className:"boxscore-not-started"},"Not Started"):t.period.current<=4&&t.period.isEndOfPeriod?o.a.createElement("div",{className:"boxscore-live"},"Live Now"):"",""!==a.visitor.score?o.a.createElement("div",{className:"boxscore-period"},o.a.createElement("div",{className:"period-row"},o.a.createElement("div",{className:"period-team head"},"Team"),o.a.createElement("div",{className:"period-quarter"},"Q1"),o.a.createElement("div",{className:"period-quarter"},"Q2"),o.a.createElement("div",{className:"period-quarter"},"Q3"),o.a.createElement("div",{className:"period-quarter"},"Q4")),[a.home,a.visitor].map(function(e,t){return o.a.createElement("div",{className:"period-row"},o.a.createElement("div",{style:{color:C.teamColor[e.abbreviation]},className:"period-team",key:"x"+t},e.nickname),e.linescores.period.map(function(e,a){return a<5?o.a.createElement("div",{key:"y"+t+a},e.score):""}))}),o.a.createElement("div",{className:"playbyplay-container"},o.a.createElement("div",{className:"playbyplay-button"},o.a.createElement("button",{onClick:this.showPlayByPlay.bind(this,t,this.props.showPlayByPlay?0:1)},(this.props.showPlayByPlay?"Hide":"Show")+" ","Plays"),o.a.createElement("button",{onClick:this.pushUpdate.bind(this,t)},this.props.pushUpdate?"Stop ":"","Push Updates"),o.a.createElement("button",{className:"close",onClick:this.closeBoxScore.bind(this)},"Close Boxscore")),this.props.showPlayByPlay?o.a.createElement("div",null,o.a.createElement("div",{className:"period-instruct"},"Click an item below to push the data to your machine."),o.a.createElement("div",{className:"period-container"},o.a.createElement("div",{className:"period "+(1===this.pbpPeriod?"pbp":""),onClick:this.showPlayByPlay.bind(this,t,1)},"Q1"),o.a.createElement("div",{className:"period "+(2===this.pbpPeriod?"pbp":""),onClick:this.showPlayByPlay.bind(this,t,2)},"Q2"),o.a.createElement("div",{className:"period "+(3===this.pbpPeriod?"pbp":""),onClick:this.showPlayByPlay.bind(this,t,3)},"Q3"),o.a.createElement("div",{className:"period "+(4===this.pbpPeriod?"pbp":""),onClick:this.showPlayByPlay.bind(this,t,4)},"Q4")),null===this.props.playByPlay?o.a.createElement("div",{className:"loading-container"},o.a.createElement(O,{type:"spin",color:"#8d8f9b"})):"",null!==this.props.playByPlay?o.a.createElement("div",{className:"playbyplay-list"},this.props.playByPlay.reverse().map(function(a,s){return o.a.createElement("div",{className:"play",key:"pbp"+s,onClick:e.pushMessage.bind(e,"("+(""===a.clock?"12:00":a.clock)+") "+t.vTeam.triCode+" "+N.addZero(a.visitor_score)+"-"+N.addZero(a.home_score)+" "+t.hTeam.triCode,a.description)},o.a.createElement("div",{className:"play-time"},o.a.createElement("div",{className:"time-time"},""===a.clock?"12:00":a.clock),o.a.createElement("div",{className:"play-description"},a.description),o.a.createElement("div",{className:"time-score"},o.a.createElement("span",null,o.a.createElement("span",{style:{color:C.teamColor[t.vTeam.triCode]}},t.vTeam.triCode+" "),o.a.createElement("span",{style:{fontWeight:"bold"}},N.addZero(a.visitor_score)+" - "+N.addZero(a.home_score)),o.a.createElement("span",{style:{color:C.teamColor[t.hTeam.triCode]}}," "+t.hTeam.triCode))),o.a.createElement("div",{className:"play-logo"},o.a.createElement("img",{src:"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/"+(a.visitor_score>a.home_score?t.vTeam.triCode:t.hTeam.triCode).toLowerCase()+".png"}))))})):""):"")):""))}}]),t}(s.Component)),x=a(77),j={};x.keys().forEach(function(e){var t=e.split("./").pop().substring(0,e.length-6);j[t]=x(e)});var A=j,I=(a(79),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).pastDays=3,a.updateDate=a.updateDate.bind(Object(y.a)(a)),a.showBoxScore=a.showBoxScore.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=[],a=0,s=this.pastDays,o=1;o<=s;o++)t.push(_()("20190421").subtract(o,"days").format("YYYYMMDD"));var n=this.props.setGameHistory;!function o(r){E(r).then(function(r){e=[].concat(Object(h.a)(e),Object(h.a)(r)),++a<s?o(t[a]):(0===e.length&&(e=[0]),console.log(e),n(e))},function(e){console.log(e)})}(t[a]),this.props.setDate("20190313")}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.date!==this.props.date&&(this.props.setDateGames([]),E(e.date).then(function(e){console.log(e),t.props.setDateGames(0===e.length?[0]:e)},function(e){console.log(e)}))}},{key:"updateDate",value:function(e){this.props.setDate(e)}},{key:"showBoxScore",value:function(e){var t,a,s=this;s.props.setShowPlayByPlay(!1),s.props.setPlayByPlay(null),s.props.setGameBoxScore(e),(t=e.startDateEastern,a=e.gameId,new Promise(function(e,s){g()({method:"post",url:"/getboxscore",params:{gameDate:t,gameId:a},headers:{"Content-Type":"application/json"}}).then(function(t){e(t.data.game)}).catch(function(e){return s(e)})})).then(function(e){console.log(e),s.props.setBoxScore(e),window.scrollTo({top:0,behavior:"smooth"})},function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"parent"},o.a.createElement("div",{className:"header-container"},o.a.createElement("div",{className:"parent-container"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{alt:"NBA push",src:A.logo})," ",o.a.createElement("span",null,"push"))))),o.a.createElement("div",{className:"parent-container"},void 0!==this.props.boxScore&&0!==this.props.boxScore&&null!==this.props.gameBoxScore?o.a.createElement("section",null,o.a.createElement(k,{showPlayByPlay:this.props.showPlayByPlay,setShowPlayByPlay:this.props.setShowPlayByPlay,playByPlay:this.props.playByPlay,setPlayByPlay:this.props.setPlayByPlay,gameBoxScore:this.props.gameBoxScore,boxScore:this.props.boxScore,setBoxScore:this.props.setBoxScore,setPushUpdate:this.props.setPushUpdate,pushUpdate:this.props.pushUpdate,setPushData:this.props.setPushData,pushData:this.props.pushData})):"",o.a.createElement("section",null,o.a.createElement("div",{className:"game-content"},o.a.createElement("div",{className:"date-picker"},o.a.createElement("div",{className:"selected-title"},o.a.createElement("h1",null,""===this.props.date?"Select date to show scheduled games":this.props.dateGames.length>0&&0===this.props.dateGames[0]?"Selected date has no games":_()(this.props.date).format("dddd, MMMM Do YYYY"))),o.a.createElement("div",{className:"selected-date-container"},o.a.createElement("span",null,"Select"),o.a.createElement(S,{setDate:this.props.setDate,datePicker:this.props.datePicker,setDatePicker:this.props.setDatePicker,updateDate:this.updateDate}))),""===this.props.date?"":this.props.dateGames.length>0?0===this.props.dateGames[0]?"":o.a.createElement(D,{showBoxScore:this.showBoxScore,gameList:this.props.dateGames,title:null}):o.a.createElement("div",{className:"loading-container"},o.a.createElement(O,{type:"spin",color:"#8d8f9b"})))),o.a.createElement("section",null,o.a.createElement("div",{className:"game-content"},this.props.gameHistory.length>0?0===this.props.gameHistory[0]?o.a.createElement("h1",{className:"game-nofound"},"No previous games found"):o.a.createElement(D,{showBoxScore:this.showBoxScore,gameList:this.props.gameHistory,title:"Previous Games"}):o.a.createElement("div",{className:"loading-container"},o.a.createElement(O,{type:"spin",color:"#8d8f9b"}))))),o.a.createElement("div",{className:"footer"},"Copyright \xa9 2019 NBA push. All rights reserved."))}}]),t}(s.Component));var L=Object(d.b)(function(e){return{notif:e.notif,isNotif:e.isNotif,date:e.date,dateGames:e.dateGames,gameHistory:e.gameHistory,datePicker:e.datePicker,boxScore:e.boxScore,gameBoxScore:e.gameBoxScore,showPlayByPlay:e.showPlayByPlay,playByPlay:e.playByPlay,pushUpdate:e.pushUpdate,pushData:e.pushData}},function(e){return{setNotif:function(t){return e(function(e){return{type:"SET_NOTIF",payload:e}}(t))},setIsNotif:function(t){return e(function(e){return{type:"SET_IS_NOTIF",payload:e}}(t))},setDate:function(t){return e(function(e){return{type:"SET_DATE",payload:e}}(t))},setDateGames:function(t){return e(function(e){return{type:"SET_DATE_GAMES",payload:e}}(t))},setBoxScore:function(t){return e(function(e){return{type:"SET_BOX_SCORE",payload:e}}(t))},setGameHistory:function(t){return e(function(e){return{type:"SET_GAME_HISTORY",payload:e}}(t))},setDatePicker:function(t){return e(function(e){return{type:"SET_DATE_PICKER",payload:e}}(t))},setGameBoxScore:function(t){return e(function(e){return{type:"SET_GAME_BOX_SCORE",payload:e}}(t))},setShowPlayByPlay:function(t){return e({type:"SET_SHOW_PLAY_BY_PLAY",payload:t})},setPlayByPlay:function(t){return e({type:"SET_PLAY_BY_PLAY",payload:t})},setPushUpdate:function(t){return e({type:"SET_PUSH_UPDATE",payload:t})},setPushData:function(t){return e({type:"SET_PUSH_DATA",payload:t})}}})(I),M={notif:{score:0,quarter:1,teamFould:0},isNotif:{score:!1,quarter:!1,teamFoul:!1},date:"",datePicker:new Date,dateGames:[],gameHistory:[],boxScore:0,gameBoxScore:null,showPlayByPlay:!1,playByPlay:null,pushUpdate:!1,pushData:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIF":return Object.assign({},e,{notif:t.payload});case"SET_IS_NOTIF":return Object.assign({},e,{isNotif:t.payload});case"SET_DATE":return Object.assign({},e,{date:t.payload});case"SET_DATE_PICKER":return Object.assign({},e,{datePicker:t.payload});case"SET_DATE_GAMES":return Object.assign({},e,{dateGames:t.payload});case"SET_BOX_SCORE":return Object.assign({},e,{boxScore:t.payload});case"SET_GAME_BOX_SCORE":return Object.assign({},e,{gameBoxScore:t.payload});case"SET_GAME_HISTORY":var a=e.gameHistory.slice();return Object.assign({},e,{gameHistory:[].concat(Object(h.a)(a),Object(h.a)(t.payload))});case"SET_SHOW_PLAY_BY_PLAY":return Object.assign({},e,{showPlayByPlay:t.payload});case"SET_PLAY_BY_PLAY":return Object.assign({},e,{playByPlay:t.payload});case"SET_PUSH_UPDATE":return Object.assign({},e,{pushUpdate:t.payload});case"SET_PUSH_DATA":return Object.assign({},e,{pushData:t.payload});default:return e}},G=Object(u.b)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),H=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:G},o.a.createElement(L,null))}}]),t}(s.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Y?(function(e,t){fetch(e).then(function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.496a0614.chunk.js.map