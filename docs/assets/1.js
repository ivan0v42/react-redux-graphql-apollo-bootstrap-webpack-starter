(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{708:function(e,n,t){"use strict";t.r(n);var r=t(67),o=t(32),i=t(179),u=t.n(i),a=t(113),c=t(88),s=t.n(c),f=t(66),l=t(2),p=t(114),d=t(699),b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var v=b("div",{},"homeView",b(p.a,{},void 0,b("h1",{},void 0,"Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap"),b("h2",{},void 0,"with Hot Reload!!!"),b("h2",{},void 0,"with React Router (Server Side rendered SPA)"),b("h1",{},void 0,"Starter"),b("p",{},void 0,b(d.a,{className:"btn btn-success btn-lg",to:"/about"},void 0,b("i",{className:"fa fa-info"}),"  go to about")))),y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,l["PureComponent"]),h(n,[{key:"componentDidMount",value:function(){(0,this.props.enterHome)()}},{key:"componentWillUnmount",value:function(){(0,this.props.leaveHome)()}},{key:"render",value:function(){return v}}]),n}(),m=t(89),w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"],["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"]);var O=u()(g),j={options:function(e){var n=e.userAuth;return{variables:{user:n.id?n.id:""}}},skip:function(e){return!e.isAuthenticated},name:"getCurrentUser",props:function(e){e.ownProps;var n=e.getCurrentUser,t=n.loading,r=n.getUser,o=n.getRole,i=n.refetch;return{userLoading:t,user:w({},o,r),refetchUser:i}}};n.default=s()(Object(m.a)(),Object(r.b)(function(e){return{currentView:e.views.currentView,userAuth:e.userAuth}},function(e){return Object(o.bindActionCreators)(w({},f),e)}),Object(a.graphql)(O,j))(y)}}]);