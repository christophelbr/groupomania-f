(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/groupomania/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"011e":function(t,e,n){"use strict";n("e432")},"03de":function(t,e,n){t.exports=n.p+"img/icon.18dcd8fd.svg"},"09b2":function(t,e,n){},"1ab2":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("7a23");function c(t,e,n,c,r,a){var i=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(i)}},"1c30":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var o=n("1ab2"),c=n("42d8");n("f8b6");c["default"].render=o["a"],e["default"]=c["default"]},4124:function(t,e,n){t.exports=n.p+"img/pouce.41e87972.png"},"42d8":function(t,e,n){"use strict";var o=n("527a"),c=n.n(o);n.d(e,"default",(function(){return c.a}))},"45c2":function(t,e,n){"use strict";n("9e13")},"527a":function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("3dfd"),r=n("6c02"),a={id:"app"};function i(t,e,n,c,r,i){var s=Object(o["w"])("home-header");return Object(o["p"])(),Object(o["d"])("div",a,[Object(o["g"])(s)])}var s=n("03de"),u=n.n(s),l={class:"home"},d={id:"nav"},m=Object(o["f"])("Accueil"),b=Object(o["f"])(" | "),p=Object(o["f"])("Connexion"),f=Object(o["f"])(" | "),g=Object(o["f"])("Inscription"),O=Object(o["g"])("div",{class:"title"},[Object(o["g"])("img",{src:u.a,alt:"logo goupomania"}),Object(o["g"])("h1",null,"Groupomania")],-1);function j(t,e,n,c,r,a){var i=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",l,[Object(o["g"])("div",d,[Object(o["g"])(i,{to:"/"},{default:Object(o["C"])((function(){return[m]})),_:1}),b,Object(o["g"])(i,{to:"/login"},{default:Object(o["C"])((function(){return[p]})),_:1}),f,Object(o["g"])(i,{to:"/register"},{default:Object(o["C"])((function(){return[g]})),_:1})]),O])}var h={name:"HomeHeader",components:{}};h.render=j;var v=h,y={name:"app",components:{HomeHeader:v}};y.render=i;var C=y,k={class:"home"},w={id:"app"},S={class:"form-group"},E=Object(o["g"])("label",null,"Adresse email",-1),I={class:"form-group"},P=Object(o["g"])("label",null,"Mot de passe",-1),T=Object(o["g"])("button",{class:"btn btn-dark btn-lg btn-block"},"Connexion",-1);function _(t,e,n,c,r,a){var i=Object(o["w"])("home-header");return Object(o["p"])(),Object(o["d"])("div",k,[Object(o["g"])("div",w,[Object(o["g"])(i)]),Object(o["g"])("form",{onSubmit:e[3]||(e[3]=Object(o["E"])((function(){return a.loginUser&&a.loginUser.apply(a,arguments)}),["prevent"]))},[Object(o["g"])("div",S,[E,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.user.email=t}),type:"email",name:"email",class:"form-control form-control-lg"},null,512),[[o["A"],r.user.email]])]),Object(o["g"])("div",I,[P,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.user.password=t}),type:"password",name:"password",class:"form-control form-control-lg"},null,512),[[o["A"],r.user.password]])]),T],32)])}n("0d03"),n("d3b7"),n("25f0");var N=n("d4ec"),U=function t(e,n,o,c,r,a){Object(N["a"])(this,t),this.bio=e,this.email=o,this.username=n,this.password=c,this.photo=r,this.isAdmin=a},A={name:"Login",data:function(){return{user:new U("",""),message:""}},components:{HomeHeader:v},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/wall")},methods:{loginUser:function(){var t=this;this.user.email&&this.user.password?this.$store.dispatch("auth/login",this.user).then((function(){t.$router.push("/wall"),console.log(t.$store.state.auth.status)})):console.log("nok")}}};A.render=_;var $=A,M={class:"home"},D={id:"app"},x={class:"form-group"},F=Object(o["g"])("label",null,"Pseudo",-1),J={class:"form-group"},G=Object(o["g"])("label",null,"Adresse mail",-1),B={class:"form-group"},L=Object(o["g"])("label",null,"Mot de passe",-1),z=Object(o["g"])("button",{type:"submit",class:"btn btn-dark btn-lg btn-block"}," Inscription ",-1);function H(t,e,n,c,r,a){var i=Object(o["w"])("home-header");return Object(o["p"])(),Object(o["d"])("div",M,[Object(o["g"])("div",D,[Object(o["g"])(i)]),Object(o["g"])("form",{name:"form",onSubmit:e[4]||(e[4]=Object(o["E"])((function(){return a.handleRegister&&a.handleRegister.apply(a,arguments)}),["prevent"]))},[Object(o["g"])("div",x,[F,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.user.username=t}),name:"username",type:"text",class:"form-control form-control-lg"},null,512),[[o["A"],r.user.username]])]),Object(o["g"])("div",J,[G,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.user.email=t}),name:"email",type:"email",class:"form-control form-control-lg"},null,512),[[o["A"],r.user.email]])]),Object(o["g"])("div",B,[L,Object(o["D"])(Object(o["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.user.password=t}),name:"password",type:"password",class:"form-control form-control-lg"},null,512),[[o["A"],r.user.password]])]),z],32)])}var R={name:"Register",data:function(){return{user:new U("","",""),submitted:!1,successful:!1,message:""}},components:{HomeHeader:v},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/wall")},methods:{handleRegister:function(){var t=this;this.message="",this.submitted=!0,this.user.email&&this.user.username&&this.user.password&&this.$store.dispatch("auth/register",this.user).then((function(){t.$store.dispatch("auth/login",t.user).then((function(){t.$router.push("/wall"),console.log(t.$store.state.auth.status)}))}))}}};R.render=H;var V=R,q=n("4124"),W=n.n(q),K=n("78fa"),Q=n.n(K),X=Object(o["F"])("data-v-63ea4dc7");Object(o["s"])("data-v-63ea4dc7");var Y={class:"home"},Z={id:"app"},tt={class:"wall"},et={class:"likecomment"},nt=Object(o["g"])("img",{src:W.a,alt:"pouce"},null,-1),ot={class:"downPost"},ct={style:{display:"none"}},rt={key:2},at=Object(o["g"])("p",null,"Souhaitez-vous vraiment supprimer ce post ?",-1);Object(o["q"])();var it=X((function(t,e,n,c,r,a){var i=Object(o["w"])("logged-header"),s=Object(o["w"])("new-post-button"),u=Object(o["w"])("comment-button"),l=Object(o["w"])("display-comment");return Object(o["p"])(),Object(o["d"])("div",Y,[Object(o["g"])("div",Z,[Object(o["g"])(i)]),Object(o["g"])("div",tt,[Object(o["g"])(s),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.content,(function(t){return Object(o["p"])(),Object(o["d"])("div",{class:"post",key:t.title},[Object(o["g"])("h3",null,Object(o["y"])(t.title),1),Object(o["g"])("div",null,[Object(o["g"])("span",null,Object(o["y"])(t.User.username),1),t.User.photo?(Object(o["p"])(),Object(o["d"])("img",{key:0,class:"miniature",src:t.User.photo},null,8,["src"])):Object(o["e"])("",!0)]),Object(o["g"])("span",null,Object(o["y"])(t.createdAt),1),Object(o["g"])("div",null,[a.isImage(t.attachment)?(Object(o["p"])(),Object(o["d"])("img",{key:0,class:"attachment",src:t.attachment},null,8,["src"])):Object(o["e"])("",!0),a.isVideo(t.attachment)?(Object(o["p"])(),Object(o["d"])("video",{key:1,class:"attachment",src:t.attachment,width:"320",height:"240",controls:""},null,8,["src"])):Object(o["e"])("",!0),Object(o["g"])("p",null,Object(o["y"])(t.content),1)]),Object(o["g"])("div",et,[Object(o["g"])("div",null,[Object(o["g"])("button",{onClick:function(e){return a.like(t.id)},id:"pouce"},[nt],8,["onClick"]),Object(o["g"])("span",null,Object(o["y"])(t.likes),1)]),Object(o["g"])(u,{class:"commenter",id:t.id},null,8,["id"])]),Object(o["g"])("div",ot,[Object(o["g"])("div",ct,Object(o["y"])(a.comments),1),Object(o["g"])(l,{comments:t.Comments},null,8,["comments"]),Object(o["g"])("div",null,[a.user.id===t.UserId?(Object(o["p"])(),Object(o["d"])("button",{key:0,onClick:e[1]||(e[1]=function(t){return r.displayDeletePost=!0}),class:"corbeille"},[Object(o["g"])("img",{id:t.id+.1,src:Q.a,alt:"corbeille"},null,8,["id"])])):a.isAdmin?(Object(o["p"])(),Object(o["d"])("button",{key:1,id:t.id+.1,onClick:e[2]||(e[2]=function(t){return r.displayDeletePost=!0}),class:"corbeille"},[Object(o["g"])("img",{id:t.id+.1,src:Q.a,alt:"corbeille"},null,8,["id"])],8,["id"])):Object(o["e"])("",!0),r.displayDeletePost&&a.getPostId()==t.id+.1?(Object(o["p"])(),Object(o["d"])("div",rt,[at,Object(o["g"])("div",null,[Object(o["g"])("button",{onClick:function(e){return a.delPost(t.id)}},"oui",8,["onClick"]),Object(o["g"])("button",{onClick:e[3]||(e[3]=function(t){return r.displayDeletePost=!1})},"non")])])):Object(o["e"])("",!0)])])])})),128))])])})),st=(n("ac1f"),n("caad"),{class:"home"}),ut={id:"nav"},lt=Object(o["f"])("Accueil"),dt=Object(o["f"])(" | "),mt=Object(o["f"])("Mon profile"),bt=Object(o["f"])(" | "),pt=Object(o["f"])("Déconnexion"),ft=Object(o["g"])("div",{class:"title"},[Object(o["g"])("img",{src:u.a,alt:"logo goupomania"}),Object(o["g"])("h1",null,"Groupomania")],-1);function gt(t,e,n,c,r,a){var i=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",st,[Object(o["g"])("div",ut,[Object(o["g"])(i,{to:"/wall"},{default:Object(o["C"])((function(){return[lt]})),_:1}),dt,Object(o["g"])(i,{to:{name:"Profile",params:{id:a.user.id}}},{default:Object(o["C"])((function(){return[mt]})),_:1},8,["to"]),bt,Object(o["g"])(i,{to:"/",onClick:Object(o["E"])(a.logOut,["prevent"])},{default:Object(o["C"])((function(){return[pt]})),_:1},8,["onClick"])]),ft])}var Ot={name:"LoggedHeader",computed:{user:function(){return this.$store.state.auth.user}},components:{},methods:{logOut:function(){this.$store.dispatch("auth/logout")}}};Ot.render=gt;var jt=Ot,ht=Object(o["F"])("data-v-a743116a");Object(o["s"])("data-v-a743116a");var vt={key:0},yt=Object(o["g"])("div",null,[Object(o["g"])("label",{for:"title"},"Titre :"),Object(o["g"])("input",{type:"text",id:"title",name:"title"})],-1),Ct=Object(o["g"])("div",null,[Object(o["g"])("label",{for:"content"},"Message :"),Object(o["g"])("textarea",{id:"content",name:"content"})],-1),kt=Object(o["g"])("label",{for:"file"},"Média : ",-1),wt=Object(o["g"])("div",{class:"button"},[Object(o["g"])("button",{type:"submit"},"Publier")],-1);Object(o["q"])();var St=ht((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("button",{id:"addpub",onClick:e[1]||(e[1]=function(t){return r.visible=!0})}," Ajouter une publication "),r.visible?(Object(o["p"])(),Object(o["d"])("div",vt,[Object(o["g"])("form",{onSubmit:e[4]||(e[4]=Object(o["E"])((function(t){return a.newPost()}),["prevent"]))},[yt,Ct,Object(o["g"])("div",null,[kt,Object(o["g"])("input",{type:"file",id:"file",ref:"file",name:"file",onChange:e[2]||(e[2]=function(t){return a.handleFileUpload()}),multiple:""},null,544)]),wt,r.visible?(Object(o["p"])(),Object(o["d"])("button",{key:0,id:"x",onClick:e[3]||(e[3]=function(t){return r.visible=!1})},"x")):Object(o["e"])("",!0)],32)])):Object(o["e"])("",!0)])})),Et={name:"new-post-button",data:function(){return{visible:!1,file:""}},components:{},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0]},newPost:function(){var t=document.getElementById("title").value,e=document.getElementById("content").value,n=new FormData;n.append("image",this.file),n.append("title",t),n.append("content",e),this.$store.dispatch("createPost",n),this.visible=!1}}};n("45c2");Et.render=St,Et.__scopeId="data-v-a743116a";var It=Et,Pt=Object(o["F"])("data-v-3ebe2b80");Object(o["s"])("data-v-3ebe2b80");var Tt={key:0},_t=Object(o["g"])("div",null,[Object(o["g"])("textarea",{id:"comment",placeholder:"Laisser un commentaire..."})],-1),Nt=Object(o["g"])("div",{class:"button"},[Object(o["g"])("button",{type:"submit"},"Publier")],-1);Object(o["q"])();var Ut=Pt((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("button",{id:t.uuid,onClick:e[1]||(e[1]=function(t){return r.visible=!0})},"Commenter",8,["id"]),r.visible?(Object(o["p"])(),Object(o["d"])("div",Tt,[Object(o["g"])("form",{onSubmit:e[3]||(e[3]=Object(o["E"])((function(t){return a.newComment()}),["prevent"]))},[_t,Nt,r.visible?(Object(o["p"])(),Object(o["d"])("button",{key:0,class:"x",onClick:e[2]||(e[2]=function(t){return r.visible=!1})},"x")):Object(o["e"])("",!0)],32)])):Object(o["e"])("",!0)])})),At=0,$t={name:"comment-button",beforeCreate:function(){this.uuid=At.toString(),At+=1},data:function(){return{visible:!1}},components:{},methods:{newComment:function(){var t=document.getElementById(this.uuid).parentElement,e=t.id;this.$store.dispatch("postComment",e),this.visible=!1}}};n("c1f3");$t.render=Ut,$t.__scopeId="data-v-3ebe2b80";var Mt=$t,Dt=Object(o["F"])("data-v-4365a249");Object(o["s"])("data-v-4365a249");var xt={key:0},Ft={key:1},Jt=Object(o["g"])("p",null,"Souhaitez-vous vraiment supprimer ce commentaire ?",-1);Object(o["q"])();var Gt=Dt((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",null,[Object(o["g"])("div",null,[Object(o["g"])("button",{class:"comments",onClick:e[1]||(e[1]=function(t){return r.commentvisible=!0})},Object(o["y"])(n.comments.length)+" "+Object(o["y"])(a.isCommentaireOrCommentaires(n.comments)),1),r.commentvisible?(Object(o["p"])(),Object(o["d"])("div",xt,[Object(o["g"])("button",{id:"closeComm",onClick:e[2]||(e[2]=function(t){return r.commentvisible=!1})},"x"),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.comments,(function(t){return Object(o["p"])(),Object(o["d"])("div",{class:"comment",key:t.postId},[Object(o["g"])("div",null,[Object(o["g"])("span",null,Object(o["y"])(t.username),1),Object(o["g"])("p",null,Object(o["y"])(t.comment),1),a.isAdmin?(Object(o["p"])(),Object(o["d"])("button",{key:0,onClick:e[3]||(e[3]=function(t){return r.displayDeleteComment=!0}),class:"corbeilleCom"},[Object(o["g"])("img",{id:t.id,src:Q.a,alt:"corbeille"},null,8,["id"])])):Object(o["e"])("",!0),r.displayDeleteComment&&a.getId()==t.id?(Object(o["p"])(),Object(o["d"])("div",Ft,[Jt,Object(o["g"])("div",null,[Object(o["g"])("button",{onClick:function(e){return a.delComment(t.id)}},"oui",8,["onClick"]),Object(o["g"])("button",{onClick:e[4]||(e[4]=function(t){return r.displayDeleteComment=!1})},"non")])])):Object(o["e"])("",!0)])])})),128))])):Object(o["e"])("",!0)])])])})),Bt={name:"display-comment",props:["comments"],computed:{isAdmin:function(){var t=JSON.parse(localStorage.getItem("user"));return t.user.isAdmin}},data:function(){return{commentvisible:!1,displayDeleteComment:!1}},methods:{getId:function(){var t=event.target.id;return t},isCommentaireOrCommentaires:function(t){return t.length<2?"Commentaire":"Commentaires"},delComment:function(t){this.$store.dispatch("deleteComment",t),this.displayDeleteComment=!1}}};n("011e");Bt.render=Gt,Bt.__scopeId="data-v-4365a249";var Lt=Bt,zt={name:"Wall",computed:{content:function(){return this.$store.getters.content},comments:function(){return this.$store.getters.comments},user:function(){return this.$store.getters.user},currentUser:function(){return this.$store.state.auth.user},isAdmin:function(){var t=JSON.parse(localStorage.getItem("user"));return t.user.isAdmin}},data:function(){return{commentvisible:!1,displayDeletePost:!1,displayDeleteComment:!1}},beforeCreate:function(){this.$store.dispatch("getContent"),this.$store.dispatch("getUserBoard")},methods:{isCommentaireOrCommentaires:function(t){return t.length<2?"Commentaire":"Commentaires"},isModerator:function(){var t=JSON.parse(localStorage.getItem("user"));if("true"==t.isAdmin)return!0},isImage:function(t){var e=/(?:\.([^.]+))?$/,n=e.exec(t)[1],o=["jpg","png","jpeg"];return o.includes(n)},isVideo:function(t){var e=/(?:\.([^.]+))?$/,n=e.exec(t)[1],o=["mp4"];return o.includes(n)},like:function(t){this.$store.dispatch("likePost",t)},delComment:function(t){this.$store.dispatch("deleteComment",t),this.displayDeleteComment=!1},delPost:function(t){this.$store.dispatch("deletePost",t),this.displayDeletePost=!1},getPostId:function(){var t=event.target.id;return t}},components:{LoggedHeader:jt,NewPostButton:It,CommentButton:Mt,DisplayComment:Lt}};n("fa4e");zt.render=it,zt.__scopeId="data-v-63ea4dc7";var Ht=zt,Rt=Object(o["F"])("data-v-851dd750");Object(o["s"])("data-v-851dd750");var Vt={class:"home"},qt={id:"app"},Wt={class:"profile"},Kt=Object(o["g"])("button",{type:"submit"},"Modifier",-1),Qt={class:"infoprofile"},Xt=Object(o["g"])("strong",null,"Email:",-1),Yt=Object(o["g"])("strong",null,"Description:",-1),Zt={key:0},te=Object(o["g"])("div",null,[Object(o["g"])("label",{for:"bio"},"Description :"),Object(o["g"])("textarea",{id:"bio",name:"bio"})],-1),ee=Object(o["g"])("div",{class:"button"},[Object(o["g"])("button",{type:"submit"},"Mettre à jour")],-1),ne=Object(o["g"])("strong",null,"Admin:",-1);Object(o["q"])();var oe=Rt((function(t,e,n,c,r,a){var i=Object(o["w"])("logged-header");return Object(o["p"])(),Object(o["d"])("div",Vt,[Object(o["g"])("div",qt,[Object(o["g"])(i),Object(o["g"])("h2",null,[Object(o["g"])("strong",null,Object(o["y"])(a.user.username),1)]),Object(o["g"])("div",Wt,[Object(o["g"])("form",{class:"photoprofile",onSubmit:e[2]||(e[2]=Object(o["E"])((function(t){return a.newPhoto()}),["prevent"]))},[Object(o["g"])("img",{src:a.user.photo},null,8,["src"]),Object(o["g"])("input",{type:"file",id:"file",ref:"file",name:"file",onChange:e[1]||(e[1]=function(t){return a.handleFileUpload()}),multiple:""},null,544),Kt],32),Object(o["g"])("div",Qt,[Object(o["g"])("p",null,[Xt,Object(o["f"])(" "+Object(o["y"])(a.user.email),1)]),Object(o["g"])("p",null,[Yt,Object(o["f"])(" "+Object(o["y"])(a.user.bio),1)]),Object(o["g"])("button",{type:"submit",onClick:e[3]||(e[3]=function(t){return r.visible=!0})},"Modifier"),r.visible?(Object(o["p"])(),Object(o["d"])("div",Zt,[Object(o["g"])("form",{onSubmit:e[5]||(e[5]=Object(o["E"])((function(t){return a.newBio()}),["prevent"]))},[te,ee,r.visible?(Object(o["p"])(),Object(o["d"])("button",{key:0,id:"x",onClick:e[4]||(e[4]=function(t){return r.visible=!1})},"x")):Object(o["e"])("",!0)],32),Object(o["g"])("ul",null,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.user.isAdmin,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:e},[ne,Object(o["f"])(" "+Object(o["y"])(t),1)])})),128))])])):Object(o["e"])("",!0)])])]),Object(o["g"])("button",{onClick:e[6]||(e[6]=function(t){return a.delProfile()})},"Supprimer mon profil")])})),ce={name:"Profile",data:function(){return{visible:!1,selectedFile:null,file:""}},components:{LoggedHeader:jt},computed:{user:function(){return this.$store.getters.user},currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.$store.dispatch("getUserBoard"),this.currentUser||this.$router.push("/login")},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0]},newPhoto:function(){var t=new FormData;t.append("image",this.file),this.$store.dispatch("updateUserPhoto",t).then((function(){console.log("SUCCESS!!")}))["catch"]((function(){console.log("FAILURE!!")}))},newBio:function(){this.visible=!1;var t=document.getElementById("bio").value,e=new FormData;e.append("bio",t),this.$store.dispatch("updateUserBio",e).then((function(){console.log("SUCCESS!!")}))["catch"]((function(){console.log("FAILURE!!")}))},delProfile:function(){this.$store.dispatch("deleteUserProfile"),this.$store.dispatch("auth/logout")}}};n("b10d");ce.render=oe,ce.__scopeId="data-v-851dd750";var re=ce,ae=Object(o["F"])("data-v-9d695788");Object(o["s"])("data-v-9d695788");var ie={class:"home"},se={id:"app"},ue=Object(o["g"])("h2",null," Votre profil a bien été supprmé! ",-1),le=Object(o["g"])("p",null," Vous allez nous manquer !",-1);Object(o["q"])();var de=ae((function(t,e,n,c,r,a){var i=Object(o["w"])("home-header");return Object(o["p"])(),Object(o["d"])("div",ie,[Object(o["g"])("div",se,[Object(o["g"])(i),ue,le])])})),me={name:"app",components:{HomeHeader:v}};me.render=de,me.__scopeId="data-v-9d695788";var be=me,pe=[{path:"/",name:"Home",component:C},{path:"/login",name:"Login",component:$},{path:"/register",name:"Register",component:V},{path:"/profile/:id",name:"Profile",component:re},{path:"/wall",name:"Wall",component:Ht},{path:"/wall/post/:postId",name:"Comments",component:Ht},{path:"/goodbye",name:"Goodbye",component:be}],fe=Object(r["a"])({history:Object(r["b"])("/groupomania/"),routes:pe}),ge=fe,Oe=n("3835"),je=n("b85c"),he=n("2909"),ve=(n("99af"),n("7db0"),n("4de4"),n("ddb0"),n("5502")),ye=n("bee2"),Ce=n("bc3a"),ke=n.n(Ce),we="http://localhost:3000/api/auth/",Se=function(){function t(){Object(N["a"])(this,t)}return Object(ye["a"])(t,[{key:"login",value:function(t){return ke.a.post(we+"login",{email:t.email,password:t.password}).then((function(t){return console.log(t.data.token),t.data.token&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return ke.a.post(we+"register",{username:t.username,email:t.email,password:t.password}).then((function(t){return console.log(t.data.token),t.data.token&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}}]),t}(),Ee=new Se,Ie=JSON.parse(localStorage.getItem("user")),Pe=Ie?{status:{loggedIn:!0},user:Ie}:{status:{loggedIn:!1},user:null},Te={namespaced:!0,state:Pe,actions:{login:function(t,e){var n=t.commit;return Ee.login(e).then((function(t){return n("loginSuccess",t),Promise.resolve(t)}),(function(t){return n("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;Ee.logout(),e("logout")},register:function(t,e){var n=t.commit;return Ee.register(e).then((function(t){return n("registerSuccess"),Promise.resolve(t.data)}),(function(t){return n("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}},_e=function(){function t(){Object(N["a"])(this,t)}return Object(ye["a"])(t,[{key:"getContent",value:function(){var t="http://localhost:3000/api/",e=JSON.parse(localStorage.getItem("user")),n=e.token;return ke.a.get(t+"wall/post",{headers:{Authorization:"".concat(n)}})}},{key:"createPost",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token;return ke.a.post(e+"wall/post",t,{headers:{Authorization:"".concat(o)}})}},{key:"deletePost",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token;return ke.a["delete"]("".concat(e,"wall/post/").concat(t),{headers:{Authorization:"".concat(o)}})}}]),t}(),Ne=new _e,Ue=function(){function t(){Object(N["a"])(this,t)}return Object(ye["a"])(t,[{key:"getComments",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token;return ke.a.get("".concat(e,"wall/post/").concat(t),{headers:{Authorization:"".concat(o)}})}},{key:"postComment",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token,c=document.getElementById("comment").value;return ke.a.post("".concat(e,"wall/post/").concat(t),{comment:c},{headers:{"Content-Type":"application/json",Authorization:"".concat(o)}})}},{key:"deleteComment",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token;return ke.a["delete"]("".concat(e,"wall/post/comment/").concat(t),{headers:{Authorization:"".concat(o)}})}}]),t}(),Ae=new Ue;function $e(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.accessToken?{"x-access-token":t.accessToken}:{}}var Me=function(){function t(){Object(N["a"])(this,t)}return Object(ye["a"])(t,[{key:"getPublicContent",value:function(){var t="http://localhost:3000/api";return ke.a.get(t+"wall/post")}},{key:"getUserBoard",value:function(){var t="http://localhost:3000/api",e=JSON.parse(localStorage.getItem("user")),n=e.token,o=e.user.id;return ke.a.get("".concat(t,"/auth/profile/").concat(o),{headers:{Authorization:"".concat(n)}})}},{key:"updateUserPhoto",value:function(t){var e="http://localhost:3000/api",n=JSON.parse(localStorage.getItem("user")),o=n.token,c=n.user.id;return ke.a.put("".concat(e,"/auth/profile/").concat(c),t,{headers:{"Content-Type":"multipart/form-data",Authorization:"".concat(o)}})}},{key:"updateUserBio",value:function(t){var e="http://localhost:3000/api",n=JSON.parse(localStorage.getItem("user")),o=n.token,c=n.user.id;return ke.a.put("".concat(e,"/auth/profile/").concat(c),t,{headers:{"Content-Type":"multipart/form-data",Authorization:"".concat(o)}})}},{key:"deleteUserProfile",value:function(){var t="http://localhost:3000/api",e=JSON.parse(localStorage.getItem("user")),n=e.token,o=e.user.id;return console.log(o),ke.a["delete"]("".concat(t,"/auth/profile/").concat(o),{headers:{Authorization:"".concat(n)}})}},{key:"getModeratorBoard",value:function(){var t="http://localhost:3000/api";return ke.a.get(t+"mod",{headers:$e()})}},{key:"getAdminBoard",value:function(){var t="http://localhost:3000/api";return ke.a.get(t+"admin",{headers:$e()})}}]),t}(),De=new Me,xe=function(){function t(){Object(N["a"])(this,t)}return Object(ye["a"])(t,[{key:"likePost",value:function(t){var e="http://localhost:3000/api/",n=JSON.parse(localStorage.getItem("user")),o=n.token;return ke.a.post("".concat(e,"wall/post/").concat(t,"/like"),1,{headers:{Authorization:"".concat(o)}})}}]),t}(),Fe=new xe,Je=Object(ve["a"])({strict:!0,state:{content:[],post:{},comments:[],comment:{},users:[],user:{}},getters:{content:function(t){return t.content},post:function(t){return t.post},comments:function(t){return t.comments},comment:function(t){return t.comment},users:function(t){return t.users},user:function(t){return t.auth.user}},mutations:{GET_CONTENT:function(t,e){t.content=e},ADD_COMMENT:function(t,e){t.comments=[e].concat(Object(he["a"])(t.comments))},GET_COMMENT:function(t,e){t.comments=e},GET_PROFILE:function(t,e){t.auth.user=e},UPDATE_PROFILE:function(t,e,n){Object.assign(t.users.find((function(t){return t.id===e})),n)},DELETE_PROFILE:function(t,e){t.users=Object(he["a"])(t.users.filter((function(t){return t.id!==e}))),t.message="compte supprimé"}},actions:{getContent:function(t){var e=t.commit;Ne.getContent().then((function(t){var n,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(n.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,e("GET_COMMENT",o[c].Comments)}))};for(c.s();!(n=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}e("GET_CONTENT",o)}))},createPost:function(t,e){var n=t.commit;Ne.createPost(e).then((function(){Ne.getContent().then((function(t){var e,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(e.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,n("GET_COMMENT",o[c].Comments)}))};for(c.s();!(e=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}n("GET_CONTENT",o)}))}))},deletePost:function(t,e){var n=t.commit;Ne.deletePost(e).then(console.log("post supprimé")).then((function(){Ne.getContent().then((function(t){var e,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(e.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,n("GET_COMMENT",o[c].Comments)}))};for(c.s();!(e=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}n("GET_CONTENT",o)}))}))},getComments:function(t){var e=t.commit;Ne.getContent().then((function(t){var n,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(n.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,e("GET_COMMENT",o[c].Comments)}))};for(c.s();!(n=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}}))},postComment:function(t,e){var n=t.commit;Ae.postComment(e).then((function(t){var e=t.data;n("ADD_COMMENT",e)})).then((function(){Ne.getContent().then((function(t){var e,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(e.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,n("GET_COMMENT",o[c].Comments)}))};for(c.s();!(e=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}n("GET_CONTENT",o)}))}))},deleteComment:function(t,e){var n=t.commit;Ae.deleteComment(e).then(console.log("commentaire supprimé")).then((function(){Ne.getContent().then((function(t){var e,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(e.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,n("GET_COMMENT",o[c].Comments)}))};for(c.s();!(e=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}n("GET_CONTENT",o)}))}))},likePost:function(t,e){var n=t.commit;Fe.likePost(e).then((function(){Ne.getContent().then((function(t){var e,o=t.data,c=Object(je["a"])(o.entries());try{var r=function(){var t=Object(Oe["a"])(e.value,2),c=t[0],r=t[1];Ae.getComments(r.id).then((function(t){o[c].Comments=t.data?t.data:0,n("GET_COMMENT",o[c].Comments)}))};for(c.s();!(e=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}n("GET_CONTENT",o)}))}))},getUserBoard:function(t,e){var n=t.commit;De.getUserBoard(e).then((function(t){var e=t.data;n("GET_PROFILE",e)}))},updateUserPhoto:function(t,e){var n=t.commit,o=JSON.parse(localStorage.getItem("user")),c=o.token;De.updateUserPhoto(e).then((function(t){var e=t.data.user;localStorage.setItem("user",JSON.stringify({token:c,user:e,message:"photo modifiée !"})),n("GET_PROFILE",e)}))},updateUserBio:function(t,e){var n=t.commit,o=JSON.parse(localStorage.getItem("user"));console.log("user",o);var c=o.token;De.updateUserPhoto(e).then((function(t){var e=t.data.user;console.log("raiponse",e),localStorage.setItem("user",JSON.stringify({token:c,user:e,message:"photo modifiée !"})),n("GET_PROFILE",e)}))},deleteUserProfile:function(t,e){var n=t.commit;De.deleteUserProfile().then(console.log("profil supprimé")).then((function(){ge.push("/goodbye")})),n("DELETE_PROFILE",e)}},modules:{auth:Te}});n("ab8b");Object(o["c"])(c["default"]).use(Je).use(ge).mount("#app")},"78fa":function(t,e,n){t.exports=n.p+"img/corbeille.37b689d6.png"},"9e13":function(t,e,n){},b10d:function(t,e,n){"use strict";n("1c30")},c1f3:function(t,e,n){"use strict";n("09b2")},cd87:function(t,e,n){},d93d:function(t,e,n){},e432:function(t,e,n){},f8b6:function(t,e,n){"use strict";n("d93d")},fa4e:function(t,e,n){"use strict";n("cd87")}});
//# sourceMappingURL=app.2433bd91.js.map