(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{161:function(t,s,a){t.exports=a.p+"assets/img/email-select-settings.ebd5ca99.png"},162:function(t,s,a){t.exports=a.p+"assets/img/email-select-code.618f4ace.png"},163:function(t,s,a){t.exports=a.p+"assets/img/email-select-sprout-email.48bc0225.png"},277:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",[t._v("Email Dropdown Field")]),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),n("p",[t._v("The Sprout Forms Email Select field will continue to be available in Craft 3 with the new name: Email Dropdown. The Craft Email Select field is deprecated and will be removed in Craft 3.")])]),n("p",[t._v("The Email Select field allows a user to select a spam-protected Email Address from a dropdown list and trigger a notification to that email address using Sprout Forms or Sprout Email.")]),n("h2",{attrs:{id:"email-select-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#email-select-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Email Select Field")]),n("p",[n("img",{attrs:{src:a(161),alt:"Sprout Email Select Field"}})]),n("p",[t._v("Setup your Email Select Field just like you would setup up a Dropdown field. The only difference is in how the Email Select field behaves.")]),n("p",[t._v("When you output your Email Select field on the front-end of your website using Sprout Forms, the Email Select field will mask the email addresses from your settings so they cannot be harvested for spam or seen by the public.")]),n("p",[n("img",{attrs:{src:a(162),alt:"Email Select doesn't display email addresses in your template code"}})]),n("p",[t._v("Additionally, after your Email Select field is submitted, the selected email will be unmasked and can be used to trigger dynamic emails notifications using Sprout Forms or Sprout Email.")]),n("h3",{attrs:{id:"multiple-email-addresses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiple-email-addresses","aria-hidden":"true"}},[t._v("#")]),t._v(" Multiple email addresses")]),n("p",[t._v("If you would like to add multiple email addresses to an option, separate each email address with a comma:")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("email1@website.com, email2.website.com\n")])])]),n("h2",{attrs:{id:"using-the-email-select-field-with-sprout-email"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-email-select-field-with-sprout-email","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Email Select Field with Sprout Email")]),n("div",{pre:!0},[n("p",[t._v("Once you have setup your Email Select Field and assigned it to a Sprout Form, you can setup a notification to be sent to the selected email address when your form is submitted. Add your Email Select field handle "),n("code",[t._v("{emailSelectFieldHandle}")]),t._v(" to your Sprout Email Notification Recipients setting and select the Event "),n("em",[t._v("When a Sprout Forms Entry is saved")]),t._v(" along with the appropriate settings to target your specific form.")])]),n("p",[n("img",{attrs:{src:a(163),alt:"Send dynamic emails with Email Select and Sprout Email"}})]),n("h2",{attrs:{id:"using-the-email-select-field-with-sprout-forms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-email-select-field-with-sprout-forms","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Email Select Field with Sprout Forms")]),n("div",{pre:!0},[n("p",[t._v("Once you have setup your Email Select Field and assigned it to a form, you can setup a notification to be sent to the selected email address when your form is submitted.  Add your Email Select field handle "),n("code",[t._v("{emailSelectFieldHandle}")]),t._v(" to your Notifications Recipients setting.")])]),n("p",[t._v("If you need to manage your Email Select field in custom HTML, there is a helper method to obfuscate your email addresses:")]),n("div",{staticClass:"language-Twig extra-class"},[n("pre",{pre:!0,attrs:{class:"language-twig"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("craft")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("sproutForms")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("emailSelectField")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("contact")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("getField")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("emailSelect"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token other"}},[t._v('<select name="fields[')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("emailSelectField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v(']">')]),t._v("\n\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("contact")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("emailSelect")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("options")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("craft")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("sproutFields")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("obfuscateEmailAddresses")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token property"}},[t._v("emailSelectField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("settings")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("option")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("options")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n      "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token property"}},[t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n      "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token property"}},[t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n    "),n("span",{attrs:{class:"token other"}},[t._v('<option value="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('"')]),t._v(" "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("selected")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),n("span",{attrs:{class:"token other"}},[t._v("selected")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),n("span",{attrs:{class:"token other"}},[t._v(">")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("label")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token other"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports}}]);