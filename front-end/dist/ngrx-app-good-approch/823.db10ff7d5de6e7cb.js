"use strict";(self.webpackChunkngrx_app_good_approch=self.webpackChunkngrx_app_good_approch||[]).push([[823],{5823:(M,d,n)=>{n.r(d),n.d(d,{LoginModule:()=>B});var l=n(7799),g=n(7950),u=n(6248),c=n(657),v=n(9751),f=n(5831),o=n(4650),p=n(6814),e=n(4006),i=n(6895),h=n(608),Z=n(6526);function A(t,r){1&t&&(o.TgZ(0,"div",23),o._uU(1," The username/password combination you entered was invalid. "),o.qZA())}const L=[{path:"",component:(()=>{class t{constructor(a,s){this.store=a,this.formBuilder=s,this.errorShow$=new v.y,this.formLogin=this.formBuilder.group({username:[""],password:[""]})}ngOnInit(){f.B$(),this.errorShow$=this.store.select(g.QJ).pipe(c.gb)}login(){const a={email:this.formLogin.get("username")?.value,password:this.formLogin.get("password")?.value};this.store.dispatch((0,u.wl)({request:a}))}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(p.yh),o.Y36(e.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:52,vars:9,consts:[["id","navbar",1,"navbar","navbar-default","navbar-fixed-top"],[1,"container-fluid"],[1,"navbar-header"],["href","#",1,"navbar-brand"],["alt","NBA Database","src","../../assets/css/img/nba_logo.png"],[1,"hidden-xs","hidden-sm"],[1,"row"],[1,"col-md-12"],[1,"container-padding"],[1,"text-center"],[1,"lead","text-center"],[1,"well","pgui-login"],["alt","User avatar","src","../../assets/css/img/login_avatar.png",1,"pgui-login-avatar"],[3,"formGroup"],[1,"form-group"],["formControlName","username",3,"data","placeholder"],["formControlName","password",3,"data","placeholder","type"],["class","alert alert-danger",4,"ngIf"],[1,"form-group","text-center"],[1,"btn-group"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"col-lg-8","col-lg-offset-2"],[1,"table","table-bordered"],[1,"alert","alert-danger"]],template:function(a,s){1&a&&(o.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"img",4),o.TgZ(5,"strong",5),o._uU(6,"NBA Database"),o.qZA()()()()(),o.TgZ(7,"div",1)(8,"div",6)(9,"div",7)(10,"div",8)(11,"h1",9),o._uU(12,"Welcome to the Angular NBA demo!"),o.qZA(),o.TgZ(13,"p",10),o._uU(14,"It is application that uses redux, ngrx and rxjs, try to make best practices ."),o.qZA(),o.TgZ(15,"div",11)(16,"p",9),o._UZ(17,"img",12),o.qZA(),o.TgZ(18,"form",13)(19,"div",14),o._UZ(20,"app-input-custom",15),o.qZA(),o.TgZ(21,"div",14),o._UZ(22,"app-input-custom",16),o.qZA(),o.YNc(23,A,2,0,"div",17),o.ALo(24,"async"),o.TgZ(25,"div",18)(26,"div",19)(27,"button",20),o.NdJ("click",function(){return s.login()}),o._uU(28,"Login"),o.qZA()()()()(),o.TgZ(29,"div",6)(30,"div",21)(31,"h2"),o._uU(32,"Available demo users"),o.qZA(),o.TgZ(33,"table",22)(34,"thead")(35,"tr")(36,"th"),o._uU(37,"Username"),o.qZA(),o.TgZ(38,"th"),o._uU(39,"Password"),o.qZA(),o.TgZ(40,"th"),o._uU(41,"Description"),o.qZA()()(),o.TgZ(42,"tbody")(43,"tr")(44,"td"),o._uU(45,"admin@admin.com"),o.qZA(),o.TgZ(46,"td"),o._uU(47,"admin"),o.qZA(),o.TgZ(48,"td"),o._uU(49,"User demo to login to the application"),o.qZA()()()()()(),o._UZ(50,"hr")(51,"app-footer"),o.qZA()()()()),2&a&&(o.xp6(18),o.Q6J("formGroup",s.formLogin),o.xp6(2),o.Q6J("data","")("placeholder","username"),o.xp6(2),o.Q6J("data","")("placeholder","password")("type","password"),o.xp6(1),o.Q6J("ngIf",o.lcZ(24,7,s.errorShow$)))},dependencies:[e._Y,e.JJ,e.JL,i.O5,e.sg,e.u,h.H,Z.c,i.Ov]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(L),l.Bz]}),t})();var U=n(4294),y=n(529),x=n(493),C=n(1647),J=n(5564),b=n(8534);let B=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[J.r,b.a],imports:[T,e.u5,i.ez,y.JF,p.Aw.forFeature("tokendata",g.I6),x.sQ.forFeature([C.h]),U.m8]}),t})()}}]);