(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{267:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Craft 3")]),t._v(" "),e("p",[t._v("Sprout Email installation and update instructions for Craft 3.")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("Craft CMS 3.0.0 or a more recent version of Craft")])]),t._v(" "),e("h2",{attrs:{id:"installation-via-plugin-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-via-plugin-store"}},[t._v("#")]),t._v(" Installation via Plugin Store")]),t._v(" "),e("ol",[e("li",[t._v("Find the plugin in the Plugin Store in your Craft Control Panel")]),t._v(" "),e("li",[t._v("Go to "),e("em",[t._v("Settings → Plugins")]),t._v(" and select “Install”")])]),t._v(" "),e("h2",{attrs:{id:"installation-via-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-via-composer"}},[t._v("#")]),t._v(" Installation via Composer")]),t._v(" "),e("div",{pre:!0},[e("ol",[e("li",[t._v("Open your terminal and go to your Craft project:"),e("br"),e("code",[t._v("cd /path/to/project")])]),t._v(" "),e("li",[t._v("Then tell Composer to load the plugin:"),e("br"),e("code",[t._v("composer require barrelstrength/sprout-forms")])]),t._v(" "),e("li",[t._v("In the Control Panel, go to "),e("em",[t._v("Settings → Plugins")]),t._v(" and select “Install”")])])]),e("h2",{attrs:{id:"upgrading-to-craft-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-craft-3"}},[t._v("#")]),t._v(" Upgrading to Craft 3")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("BEFORE YOU UPDATE")]),t._v(" "),e("p",[t._v("Make sure you have updated to the latest version of Sprout Email 3.x before updating to Sprout Email 4.x for Craft 3")])]),t._v(" "),e("h2",{attrs:{id:"upgrading-to-email-v4-1-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-email-v4-1-1"}},[t._v("#")]),t._v(" Upgrading to Email v4.1.1")]),t._v(" "),e("p",[t._v("Sprout Email v4.1.1 updates the Recipients settings. The behavior you see when sending emails should not change, but the way you see this information presented to you in the user interface will.")]),t._v(" "),e("p",[t._v('Previously, the default send method was as a "List" and you had the option to toggle a lightswitch field to send a "Single Email". In 4.1.1 you will see a dropdown with the options "List" and "Single Email" and when you have the "List" setting selected you will no longer see the CC and BCC fields. Any email addresses you previously had in the CC and BCC fields when sending to emails as a List will now be appended to the values in the "To" field. The behavior of how the emails are sent is the same.')]),t._v(" "),e("h2",{attrs:{id:"upgrading-to-email-v4-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-email-v4-2-0"}},[t._v("#")]),t._v(" Upgrading to Email v4.2.0")]),t._v(" "),e("p",[t._v("Sprout Email 4.2.0 is a recommended upgrade and fixes a vulnerability that could occur in some scenarios with custom Email Templates.")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("To better support extending Twig layouts and organizing your templates more flexibly throughout the top-level templates folder as you wish, "),e("RouterLink",{pre:!0,attrs:{to:"/email/custom-email-templates.html"}},[t._v("Email Templates Integrations")]),t._v(" have been updated to require a new "),e("code",[t._v("getTemplateRoot()")]),t._v(" method and change the behavior of the existing "),e("code",[t._v("getPath()")]),t._v(" method")],1)]),e("h4",[t._v("Personalized Email Templates")]),t._v(" "),e("p",[t._v("For improved security, Custom Email Templates no longer render objects in custom fields outside of the "),e("em",[t._v("Subject")]),t._v(" or "),e("em",[t._v("Default Body")]),t._v(" fields. Please let us know if you have additional use cases for this and we can consider them on a case by case basis.")]),t._v(" "),e("h4",[t._v("Email Templates Integrations")]),t._v(" "),e("h5",[t._v("OLD")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Craft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAlias")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'@sproutbaseemail/templates/_components/emailtemplates/basic'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h5",[t._v("NEW")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTemplateRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Craft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAlias")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'@sproutbaseemail/templates'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'_components/emailtemplates/basic'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);