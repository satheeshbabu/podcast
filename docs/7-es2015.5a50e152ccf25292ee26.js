(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{SLk2:function(n,t,e){"use strict";e.r(t);var o=e("lJxs"),s=e("fXoL"),c=e("sbAP"),i=e("tyNb"),r=e("ofXK"),a=e("UN6A");function p(n,t){if(1&n&&(s.Lb(0,"div"),s.hc(1,"\n  "),s.Lb(2,"app-episode-summary",2),s.Lb(3,"app-episode-summary"),s.hc(4," "),s.Kb(),s.Kb(),s.hc(5,"\n  "),s.Lb(6,"section",3),s.hc(7,"\n    "),s.Jb(8,"audio",4),s.hc(9,"\n    "),s.Jb(10,"scully-content"),s.hc(11,"\n  "),s.Kb(),s.hc(12,"\n"),s.Kb()),2&n){const n=s.Vb();s.wb(2),s.ac("episode",n.currentEpisode)("showPlayer",!1),s.wb(6),s.ac("src",n.currentEpisode.audio,s.cc)}}function d(n,t){1&n&&(s.Lb(0,"div",5),s.hc(1,"\n  Loading...\n"),s.Kb())}let b=(()=>{class n{constructor(n,t){this._srs=n,this._router=t}ngOnInit(){this._srs.available$.pipe(Object(o.a)(n=>n.map((n,t)=>Object.assign(Object.assign({},n),{number:t})).filter(n=>n.route===this._router.routerState.snapshot.url).pop())).subscribe(n=>{this.currentEpisode=n})}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(c.c),s.Ib(i.b))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-episode"]],decls:4,vars:2,consts:[[4,"ngIf"],["class","loading",4,"ngIf"],[3,"episode","showPlayer"],[1,"episode-content"],["controls","",3,"src"],[1,"loading"]],template:function(n,t){1&n&&(s.gc(0,p,13,3,"div",0),s.hc(1,"\n"),s.gc(2,d,2,0,"div",1),s.hc(3,"\n")),2&n&&(s.ac("ngIf",t.currentEpisode),s.wb(2),s.ac("ngIf",!t.currentEpisode))},directives:[r.j,a.a,c.b],styles:[".loading[_ngcontent-%COMP%]{text-align:center}.episode-content[_ngcontent-%COMP%]{padding:20px;border-radius:5px;font-size:1.4em;width:60%;max-width:1200px;min-width:300px;margin:auto}audio[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}"]}),n})();var u=e("PCNd");e.d(t,"EpisodeModule",(function(){return l}));let l=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[r.b,u.a,c.a,i.d.forChild([{path:":slug",component:b}])]]}),n})()}}]);