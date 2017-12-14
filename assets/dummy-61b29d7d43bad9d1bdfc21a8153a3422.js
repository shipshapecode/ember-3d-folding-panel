"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,i.default.modulePrefix),e.default=o}),define("dummy/components/close-button/component",["exports","ember-3d-folding-panel/components/close-button/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ember-3d-folding-panel/component",["exports","ember-3d-folding-panel/components/ember-3d-folding-panel/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/flexi-container",["exports","flexi-layouts/components/flexi-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/flexi-grid",["exports","flexi-layouts/components/flexi-grid"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/flexi-layout",["exports","flexi-layouts/components/flexi-layout"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/folding-panel/component",["exports","ember-3d-folding-panel/components/folding-panel/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/item-square/component",["exports","ember-3d-folding-panel/components/item-square/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/event_dispatcher",["exports","ember-native-dom-event-dispatcher"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/-inject-layout",["exports","flexi-layouts/helpers/-inject-layout"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"injectLayout",{enumerable:!0,get:function(){return t.injectLayout}})}),define("dummy/initializers/component-styles",["exports","ember-component-css/pod-names","dummy/mixins/style-namespacing-extras"],function(e,t,n){function i(){}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i
var o=Ember.Component,a=Ember.ComponentLookup,r=Ember.computed,u=Ember.computed.alias,l=Ember.getOwner
a.reopen({componentFor:function(e,n){return n=n.hasRegistration?n:l(this),t.default[e]&&!n.hasRegistration("component:"+e)&&n.register("component:"+e,o),this._super.apply(this,arguments)}}),o.reopen(n.default,{styleNamespace:r({get:function(){return t.default[this.get("_componentIdentifier")]||""}}),componentCssClassName:u("styleNamespace"),init:function(){this._super.apply(this,arguments),this.get("_shouldAddNamespacedClassName")&&(this.classNames=this.classNames.concat(this.get("styleNamespace")))}}),e.default={name:"component-styles",initialize:i}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,o=t.default.exportApplicationGlobal
i="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/route-styles",["exports","ember-component-css/pod-names"],function(e,t){function n(){}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n
var i=Ember.Router,o=Ember.getOwner
i.reopen({didTransition:function(e){this._super.apply(this,arguments)
var n=[],i=!0,a=!1,r=void 0
try{for(var u,l=e[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){var s=u.value,m=s.name.replace(/\./g,"/")
t.default[m]&&(o(this).lookup("controller:"+s.name).set("styleNamespace",t.default[m]),n.push(t.default[m]))}}catch(e){a=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(a)throw r}}o(this).lookup("controller:application").set("routeStyleNamespaceClassSet",n.join(" "))}}),e.default={name:"route-styles",initialize:n}}),define("dummy/mixins/style-namespacing-extras",["exports","ember-component-css/mixins/style-namespacing-extras"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route,n=(0,Ember.String.htmlSafe)("<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum\n  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi\n  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia\n  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa\n  esse, aut est repellendus porro, maiores corporis illo!\n</p>\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum\n  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi\n  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia\n  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa\n  esse, aut est repellendus porro, maiores corporis illo!\n</p>\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quidem, dolor!\n  Necessitatibus libero suscipit voluptatum, ex voluptates. Ab, sit nam eum,\n  officiis natus sunt totam aperiam id quo sed obcaecati itaque hic quia, facilis\n  magni est sequi minima ex placeat commodi et modi eos consectetur recusandae.\n  Adipisci quaerat voluptatum dolorem doloribus, ullam molestiae praesentium,\n  saepe, voluptate quasi suscipit iure. Ipsam, iste excepturi dolore, explicabo\n  numquam debitis ducimus laudantium? Aperiam perferendis accusantium quis magnam,\n  odit doloribus, officia nesciunt voluptatum quidem voluptatibus veritatis temporibus\n  adipisci dignissimos dolor quod beatae aliquam similique expedita! Distinctio\n  rem tempora temporibus molestias veritatis accusamus ipsa pariatur iusto!\n</p>")
e.default=t.extend({model:function(){return[{heading:"Client 1",subheading:"Lorem ipsum dolor sit amet, consectetur.",panelHeading:"Client 1",panelSubheading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?",imageURL:"img/logo1-c9dff642bed59c2a94dcf8c2713ff8fb.png",panelInfo:n},{heading:"Client 2",subheading:"Lorem ipsum dolor sit amet, consectetur.",panelHeading:"Client 2",panelSubheading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?",imageURL:"img/logo2-4d12743076fd614f6282ec9bbb634855.png",panelInfo:n},{heading:"Client 3",subheading:"Lorem ipsum dolor sit amet, consectetur.",panelHeading:"Client 3",panelSubheading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?",imageURL:"img/logo3-189642c1afb50ffd21bd790dc621b497.png",panelInfo:n},{heading:"Client 4",subheading:"Lorem ipsum dolor sit amet, consectetur.",panelHeading:"Client 4",panelSubheading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?",imageURL:"img/logo4-8da58b809945b2ee35646e771bce4e78.png",panelInfo:n}]}})}),define("dummy/services/device/layout",["exports","dummy/config/environment","flexi-layouts/services/device/layout"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default.extend({breakpoints:t.default.flexi.breakpoints})}),define("dummy/services/panel",["exports","ember-3d-folding-panel/services/panel"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"KNErTTFR",block:'{"symbols":["item"],"statements":[[6,"header"],[7],[0,"\\n  "],[6,"h1"],[7],[6,"span"],[9,"class","pacifico"],[7],[0,"ember"],[8],[0," 3D Folding Panel"],[8],[0,"\\n"],[8],[0,"\\n\\n"],[1,[18,"folding-panel"],false],[0,"\\n"],[4,"ember-3d-folding-panel",null,null,{"statements":[[4,"each",[[20,["model"]]],null,{"statements":[[4,"item-square",null,[["item"],[[19,1,[]]]],{"statements":[[0,"      "],[6,"img"],[9,"class","client-image"],[10,"src",[26,[[19,1,["imageURL"]]]]],[7],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
