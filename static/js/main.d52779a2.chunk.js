(this["webpackJsonpmortgage-calc"]=this["webpackJsonpmortgage-calc"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(10),a(2));a(11);var l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-core-icons-V12.svg").then((function(e){return e.text()})).then((function(e){r(e)})).then((function(){window.dispatchEvent(new CustomEvent("icons-loaded"))}))}),[]),o.a.createElement("div",{"aria-hidden":"true",className:"spark-icons",dangerouslySetInnerHTML:{__html:a}})},i=a(1);var u=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(35e4),u=Object(s.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)(7e4),h=Object(s.a)(d,2),b=h[0],v=h[1],g=Object(n.useState)(89),f=Object(s.a)(g,2),y=f[0],k=f[1],w=Object(n.useState)(499),E=Object(s.a)(w,2),S=E[0],T=E[1],x=Object(n.useState)(0),O=Object(s.a)(x,2),j=O[0],I=O[1];Object(n.useEffect)((function(){C()}));var C=function(){var e=m-b,t=(Math.pow(1+.0314/12,360)-1)/(.0314/12*Math.pow(1+.0314/12,360));r((e/t+y+S+j).toFixed(2))};return o.a.createElement("main",{className:"App"},o.a.createElement(l,null),o.a.createElement(i.SprkCenteredColumn,{additionalClasses:"sprk-u-pal"},o.a.createElement(i.SprkHeading,{element:"h1",variant:"displayTwo",isPageTitle:!0},"Calc Ya' Later!"),o.a.createElement(i.SprkText,{additionalClasses:"sprk-u-FontStyle--italic sprk-u-mvm"},"An accessible and respectful mortgage calculator"),o.a.createElement(i.SprkText,{additionalClasses:"sprk-b-TypeBodyTwo sprk-u-mvl"},"Enter some info and get some numbers."),o.a.createElement(i.SprkTextInput,{label:"Home Price",name:"monetary",textIcon:!0,value:m,onChange:function(e){p(e.target.value)}}),o.a.createElement(i.SprkTextInput,{label:"Down Payment",textIcon:!0,name:"monetary",value:b,onChange:function(e){v(e.target.value)},valid:b<=m,errorMessage:"Down payment must be less than the purchase price."}),o.a.createElement(i.SprkTextInput,{label:"Homeowner's Insurance",helperText:"This amount is determined by your insurance provider.",textIcon:!0,name:"monetary",value:y,onChange:function(e){k(e.target.value)}}),o.a.createElement(i.SprkTextInput,{label:"Property Tax",helperText:"This amount is determined by the local government.",textIcon:!0,name:"monetary",value:S,onChange:function(e){T(e.target.value)}}),o.a.createElement(i.SprkTextInput,{label:"Homeowner's Association Fees",helperText:'Often called "HOA Fees". This amount is determined by the community that includes your home.',textIcon:!0,name:"monetary",value:j,onChange:function(e){I(e.target.value)}}),o.a.createElement(i.SprkHeading,{element:"h2",additionalClasses:"sprk-b-TypeDisplayFive"},"Estimated Monthly Payment: ",a)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d52779a2.chunk.js.map