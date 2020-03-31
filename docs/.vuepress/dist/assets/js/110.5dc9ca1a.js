(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{347:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Element Importers")]),t._v(" "),e("p",[t._v("Add support for importing any custom Element by creating a custom Element Importer integration. Element Importers allow you to take advantage of Craft's Element API and common behaviors consistent across Elements.")]),t._v(" "),e("h2",{attrs:{id:"craft-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3"}},[t._v("#")]),t._v(" Craft 3")]),t._v(" "),e("p",[t._v("To add support for your custom Element you will need to:")]),t._v(" "),e("div",{pre:!0},[e("ol",[e("li",[t._v("Create an Element Importer class that extends "),e("code",[t._v("barrelstrength\\sproutbase\\contracts\\sproutimport\\BaseElementImporter")])]),t._v(" "),e("li",[t._v("Register your Element Importer")])])]),e("div",{pre:!0},[e("p",[t._v("To register your Element Importer, you can register your custom Element Importer class using the "),e("code",[t._v("EVENT_REGISTER_IMPORTER_TYPES")]),t._v(" event:")])]),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutbase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutimport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Importers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Importers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Importers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_REGISTER_IMPORTER_TYPES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegisterComponentTypesEvent "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("types")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FormElementImporter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("types")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EntryElementImporter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{pre:!0},[e("p",[t._v("Please refer to example Element Importers in "),e("code",[t._v("sproutimport/src/integrations/sproutimport/elements")]),t._v(" and "),e("code",[t._v("sproutbase/src/contracts/sproutimport/Importer")]),t._v(" and "),e("code",[t._v("sproutbase/src/contracts/sproutimport/BaseElementImporter")]),t._v(" for more details.")])]),e("h2",{attrs:{id:"craft-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2"}},[t._v("#")]),t._v(" Craft 2")]),t._v(" "),e("p",[t._v("To add support for your custom Element you will need to:")]),t._v(" "),e("ol",[e("li",[t._v("Create an Element Importer class that extends BaseSproutImportElementImporter")]),t._v(" "),e("li",[t._v("Register your Element Importer")])]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Sprout Import extends itself to add support for the default Element Importers for Craft and Craft Commerce. Please refer to example Element Importers in "),e("code",[t._v("sproutimport/integrations/sproutimport")]),t._v(" and the "),e("code",[t._v("BaseSproutImportElementImporter")]),t._v(" and "),e("code",[t._v("BaseSproutImportImporter")]),t._v(" Classes for more details.")])]),e("div",{pre:!0},[e("p",[t._v("Once you have created your custom Element Importer you will need to register it in your primary plugin class via the "),e("code",[t._v("registerSproutImportImporters")]),t._v(" hook. For example:")])]),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerSproutImportImporters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutEmail_CampaignEmailSproutImportElementImporter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutEmail_NotificationEmailSproutImportElementImporter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"element-integrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-integrations"}},[t._v("#")]),t._v(" Element Integrations")]),t._v(" "),e("p",[t._v("The following Elements have Element Importer integrations:")]),t._v(" "),e("ul",[e("li",[t._v("Sprout Email Campaign Email Element")]),t._v(" "),e("li",[t._v("Sprout Email Notification Email Element")]),t._v(" "),e("li",[t._v("Sprout Forms Form Element")]),t._v(" "),e("li",[t._v("Sprout Forms Form Entry Element")]),t._v(" "),e("li",[t._v("Sprout SEO Redirect Element")])])])}),[],!1,null,null,null);s.default=r.exports}}]);