(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(53)},36:function(e,t,a){},50:function(e,t){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(36),a(4)),i=a(5),s=a(7),u=a(6),m=a(8),p=(a(25),a(18)),h=a.n(p),d=(a(24),["5c","mist","vulcan"]),f=d[0],v=(r.a.Component,[{id:1,fileName:"config.json"},{id:2,fileName:"repoType.json"},{id:3,fileName:"git-log-anamoly.json"},{id:4,fileName:"processStatus.json"},{id:5,fileName:"emailAliases.json"}]),j=[{repospath:"repos",sonarCommand:'"../../sonar-scanner/bin/sonar-scanner.bat" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ -Dsonar.language=$repotype',sonarCommandWithoutType:'"../../sonar-scanner/bin/sonar-scanner" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ ',cleanuprepos:"Drones-SW-DartService,Drones-SW-DartService",ciceroServerHost:"172.19.101.120",ciceroServerPort:"9393",anamolyLOCCount:1e3,anamolyLOCCountPerCommit:5e3,exCludeFiles:["package-lock.json"],projectName:"vulcan"},{projectName:"5c",anamolyLOCCountPerCommit:5e3,anamolyLOCCount:1e3,ciceroServerHost:"172.19.101.120",ciceroServerPort:9393,cleanuprepos:"",repospath:"repos",sonarCommand:'"../../sonar-scanner/bin/sonar-scanner.bat" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ -Dsonar.language=$repotype',sonarCommandWithoutType:'"../../sonar-scanner/bin/sonar-scanner" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ ',exCludeFiles:"package-lock.json"}],b=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={configArr:[],backState:"",globalArr:[],projectName:a.props.projectName};return j.map(function(e){a.state.globalArr.push({key:e.projectName,value:e})}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({projectName:e.projectName,backState:""})}},{key:"handleSubmit",value:function(){var e=Object.assign({},this.state);this.setState(e)}},{key:"createRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.key},r.a.createElement("td",null," ",e.key),"projectName"==e.key?r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"title",defaultValue:e.value,readOnly:!0})):r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"title",defaultValue:e.value,onBlur:function(a){return t.onBlur(e.key,a)}})))}},{key:"onBlur",value:function(e,t){var a=Object.assign({},this.state);a.globalArr.map(function(n){n.key==a.projectName&&Object.keys(n.value).forEach(function(a){a==e&&(n.value[a]=t.target.value)})}),console.log(a.globalArr),this.setState(a)}},{key:"handleBackButton",value:function(){var e=Object.assign({},this.state);e.backState="true",e.projectName=this.state.projectName,e.configArr=this.state.configArr,this.setState(e),console.log(this.state)}},{key:"render",value:function(){var e,t=this,a=[];return this.state.globalArr.forEach(function(a){a.key==t.props.projectName&&(e=a.value)}),Object.keys(e).forEach(function(t){a.push({key:t,value:e[t]})}),""!=this.state.backState?r.a.createElement(C,{projectName:this.state.projectName,backState:this.state.backState}):r.a.createElement("form",null,r.a.createElement("table",null,a.map(this.createRow,this)),r.a.createElement("tr",null,r.a.createElement("input",{type:"button",value:"Submit",onClick:function(){return t.handleSubmit(t)}}),r.a.createElement("input",{type:"button",value:"Back",onClick:function(){return t.handleBackButton(t)}})))}}]),t}(r.a.Component),y=[{email:"calvin.iyer@gmail.com",alias:"calvin.iyer@gmail.com"},{email:"t-karli@vulcan.com",alias:"t-karli@vulcan.com"},{email:"calvin-iyer@users.noreply.github.com",alias:"calvin-iyer@users.noreply.github.com"},{email:"37868878+pankajpardhi@users.noreply.github.com",alias:"37868878+pankajpardhi@users.noreply.github.com"},{email:"gaurav.sharma@talentica.com",alias:"gaurav.sharma@talentica.com"},{email:"Pankaj.Pardhi@talentica.com",alias:"pankaj.pardhi@talentica.com"},{email:"PankajP@talentica-all.com",alias:"pankajp@talentica-all.com"},{email:"sailajay@vulcan.com",alias:"sailajay@vulcan.com"},{email:"Gaurav.Sharma@talentica.com",alias:"gaurav.sharma@talentica.com"},{email:"johnch@vulcan.com",alias:"johnch@vulcan.com"},{email:"t-tylers@vulcan.com",alias:"t-tylers@vulcan.com"},{email:"tsellon@gmail.com",alias:"tsellon@gmail.com"}],k=a(30),E=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),console.log(y),a.state={address:y,typed:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"createRow1",value:function(e){var t,a=this;return t="calvin.iyer@gmail.com"!=e.email?r.a.createElement("div",null,r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.alias)):r.a.createElement("td",null,e.alias),r.a.createElement("tr",{key:e.email},t,r.a.createElement("td",{onClick:function(){return a.readFile()}},"Edit"))}},{key:"readFile",value:function(){var e=k.readFile("E:\\abc.txt");console.log(e)}},{key:"onBlur",value:function(e){this.setState({address:y,typed:e.target.value})}},{key:"createRow2",value:function(e){var t=this;return r.a.createElement("tr",{key:e.email},r.a.createElement("td",null,e.email),"calvin.iyer@gmail.com"==e.email?r.a.createElement("td",null," ",e.alias):r.a.createElement("td",{onClick:function(){return t.handleClick(e.email)}},"Edit"))}},{key:"createRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.email},r.a.createElement("td",null," ",e.email),r.a.createElement("td",null,r.a.createElement("input",{id:"x",type:"text",name:"title",defaultValue:e.alias,onBlur:this.onBlur.bind(this)})),r.a.createElement("td",{onClick:function(){return t.handleClick(e.email,t.state.typed)}},"Edit"))}},{key:"handleClick1",value:function(e){o.a.render(r.a.createElement("label",null,e),document.getElementById("x"))}},{key:"handleClick",value:function(e,t){var a=Object.assign({},this.state);a.address;a.address.map(function(a){a.email==e&&(a.alias=t)}),this.setState(a)}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Aliases"))),r.a.createElement("tbody",null,this.state.address.map(this.createRow,this))))}}]),t}(r.a.Component),g={checkEnvironment:!0,main:!0,mainGitAnalysis:!0,prepareConfigurationList:!0,mainCiceroAnalysis:!0,mainSonarAnalysis:!0,sonarAnalysis:!0,productivityjob:!0,sonarETL:!0,analytics:!0,prepareMainStatus:!0,combineCeicroModelsOfall:!0},N=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),console.log(a.state),a.state={statusArr:[]},Object.keys(g).forEach(function(e){a.state.statusArr.push({key:e,value:g[e]})}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(){var e=Object.assign({},this.state);this.setState(e)}},{key:"createRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.key},r.a.createElement("td",null," ",e.key),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"title",defaultValue:e.value,onBlur:function(a){return t.onBlur(e.key,a)}})))}},{key:"onBlur",value:function(e,t){console.log(t.target.value);var a=Object.assign({},this.state);a.statusArr.map(function(n){n.key==e&&(n.value=t.target.value),console.log(a.statusArr)}),this.setState(a),console.log(this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("table",null,this.state.statusArr.map(this.createRow,this)),r.a.createElement("tr",null,r.a.createElement("input",{type:"button",value:"Submit",onClick:function(){return e.handleSubmit(e)}})))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={files:v,projectName:e.projectName},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onclickHandle",value:function(e){this.setState({fileName:e})}},{key:"componentWillReceiveProps",value:function(e){this.setState({projectName:e.projectName,fileName:""})}},{key:"createFileRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.fileName),r.a.createElement("td",{onClick:function(){return t.onclickHandle(e.fileName)}},"Edit"))}},{key:"render",value:function(){return"config.json"==this.state.fileName?r.a.createElement(b,{projectName:this.props.projectName}):"emailAliases.json"==this.state.fileName?r.a.createElement(E,{projectName:this.state.projectName}):"processStatus.json"==this.state.fileName?r.a.createElement(N,{projectName:this.state.projectName}):r.a.createElement("div",null,r.a.createElement("h1",null,"Configurations:"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Configuration File Name"))),r.a.createElement("tbody",null,this.state.files.map(this.createFileRow,this))))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={projectName:e.projectName},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({projectName:e.projectName,backState:""})}},{key:"showConfigrationPage",value:function(){this.setState({projectName:this.state.project})}},{key:"showExecutionPage",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{projectName:this.props.projectName}))}}]),t}(r.a.Component),S=["5c","mist","vulcan"],D=S[0],w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={projectName:D},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleProjectChange",value:function(e){this.setState({projectName:e.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",null,r.a.createElement("b",null,"Talentica")),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h6",null,"Select Project:"),r.a.createElement(h.a,{options:S,value:D,placeholder:"Select an option",onChange:function(t){return e.handleProjectChange(t)}})),r.a.createElement(C,{projectName:this.state.projectName}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50),a(51);o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.549e8f86.chunk.js.map