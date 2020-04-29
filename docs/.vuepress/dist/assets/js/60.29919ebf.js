(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{292:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("Captchas")]),t._v(" "),s("p",[t._v("Captchas enable you to add additional methods to protect your form from Spam.")]),t._v(" "),s("h2",{attrs:{id:"captcha-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#captcha-class"}},[t._v("#")]),t._v(" Captcha Class")]),t._v(" "),s("p",[t._v("See examples of how to build your Captcha Class from the default Captchas in Sprout Forms:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/DuplicateCaptcha.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Duplicate Submission Captcha"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/JavascriptCaptcha.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript Captcha"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms/blob/v3/src/captchas/HoneypotCaptcha.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Honeypot Captcha"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms-google-recaptcha",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Recaptcha for Sprout Forms"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"register-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-event"}},[t._v("#")]),t._v(" Register Event")]),t._v(" "),s("p",[t._v("Once you have created your Custom Captcha, register your Captcha class with Sprout Forms to display your Captcha in the Spam Protection settings and enable it for your forms.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("mycompany"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mycaptchaplugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("mycompany"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("myplugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("integrations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("captchas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MyCaptcha")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Forms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("yii"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCaptchaPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_REGISTER_CAPTCHAS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Event "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyCaptcha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);