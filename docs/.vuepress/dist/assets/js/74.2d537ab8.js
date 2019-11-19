(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{340:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v("FAQ")]),t._v(" "),a("p",[t._v("Frequently asked questions about Sprout Forms.")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("Spam strategies are always evolving and sometimes the conventions you use on your website will also need to evolve. The default options provided don't depend on third-party services however, often, third-party services have a larger network of data to work with to provide effective spam prevention measures.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://plugins.craftcms.com/sprout-forms-google-recaptcha",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google ReCAPTCHA for Sprout Forms"),a("OutboundLink")],1),t._v(". If you continue to see spam after implementing ReCAPTCHA with the default settings, there is a setting to increase the security level.")]),t._v(" "),a("li",[t._v("Cloudflare offers several "),a("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/115002059131-Understanding-your-Site-Protection-Options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Site Protection Options"),a("OutboundLink")],1),t._v(", some of which are free, if you route your DNS through Cloudflare")])]),t._v(" "),a("p",[t._v("To better understand your spam traffic, you can enable Spam tracking and Sprout Forms will log all Failed Captcha error messages as well as capture meta information about each submission such as Remote IP Address, Referrer URL, and User Agent. The Spam Log report provides an overview of all of this information that can be used to analyze the data and detect trends.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Sprout Forms for Craft 3 comes with Email, Phone, and URL fields.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Install "),a("router-link",{attrs:{to:"./../fields/"}},[t._v("Sprout Fields")]),t._v("!  Sprout Fields provides you several additional field types to help ensure you're collecting clean and accurate data.")],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Sprout Forms for Craft 3 includes a native Sprout Reports integration to create and export reports for Sprout Forms Data Sources without ever needing to install Sprout Reports. Visit the Sprout Forms -> Reports tab in Sprout Forms to create reports and export CSVs.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("You can use "),a("router-link",{attrs:{to:"./../reports/"}},[t._v("Sprout Reports")]),t._v(" to export your Form Entries to CSV.")],1),t._v(" "),a("p",[t._v("To export all entries from a particular form, you can create a custom SQL query to target that form. Each form uses a different table in the database.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),a("p",[t._v("You will need to update your query to match your Craft database prefix and your form handle. Here is a generic example template of what this query should be using variables that you will need to update for your use case:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("When form submissions never make it to the database, usually something else is blocking them.")]),t._v(" "),a("p",[t._v("Do you have any spam plugins installed? Try disabling them or making their settings less strict.")]),t._v(" "),a("p",[t._v("Are your forms triggering any other events that may be causing errors? Spam filters or email notifications that are failing could affect your form entries from reaching the database.")]),t._v(" "),a("p",[t._v("Check your logs and see if there are any errors:")]),t._v(" "),a("p",[t._v("In your files (Craft 3):")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("In your files (Craft 2):")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Or in your Control Panel:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("The most frequent issue that causes notification emails to not be sent or behave erratically is the selected Email Protocol.  By default, this is usually set to PHP Mail.  PHP Mail and Sendmail are often misconfigured on local computers and may be configured in a variety of different ways by hosting providers.  They also do not provide much information to help troubleshoot what might be going wrong.")]),t._v(" "),a("p",[t._v("The first step necessary to better troubleshoot why notifications are not behaving as expected is to update your settings to a proper SMTP Protocol. "),a("a",{attrs:{href:"https://mandrill.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mandrill"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://www.mailgun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MailGun"),a("OutboundLink")],1),t._v(" are good options and MailGun has a free plan which allows you to send up to 10,000 emails a month, if cost is a concern.  Once you are sending email via Mandrill and MailGun, they also can provide more information on what is happening to your email after it is being sent.")]),t._v(" "),a("p",[t._v("Another decent option to troubleshoot with is Gmail. While Gmail doesn't provide as much information on how emails are behaving after they are sent, and can sometimes behave in unintuitive ways if you are sending and receiving from the same Gmail address, it is more reliable than PHP Mail and Sendmail and most people have a Gmail account.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"i-am-using-the-available-captchas-but-i-am-still-getting-spam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-am-using-the-available-captchas-but-i-am-still-getting-spam","aria-hidden":"true"}},[this._v("#")]),this._v(" I am using the available Captchas but I am still getting SPAM!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-do-i-validate-an-email-address-phone-number-or-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-validate-an-email-address-phone-number-or-url","aria-hidden":"true"}},[this._v("#")]),this._v(" How do I validate an Email Address, Phone Number, or URL?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-do-i-export-my-form-entries-to-csv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-export-my-form-entries-to-csv","aria-hidden":"true"}},[this._v("#")]),this._v(" How do I export my form Entries to CSV?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-3-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("For example, to export all data for a form with the handle "),e("code",[this._v("contact")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("SELECT")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("FROM")]),this._v(" craft_sproutformscontent_contact\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("SELECT")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("FROM")]),this._v(" {databasePrefix}_sproutformscontent_{formHandle}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken","aria-hidden":"true"}},[this._v("#")]),this._v(" My form submissions are not working. My submitted form entries never appear in my database. What is broken?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("storage/runtime/logs/web.log")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("craft/storage/runtime/logs/sproutforms.log")]),this._v(" "),e("li",[this._v("craft/storage/runtime/logs/craft.log")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("/admin/utils/logs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically","aria-hidden":"true"}},[this._v("#")]),this._v(" My form notification emails are not being sent. Or, my form notification emails are sometimes being sent but behaving erratically.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"where-can-i-install-example-forms-after-sprout-forms-is-installed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-install-example-forms-after-sprout-forms-is-installed","aria-hidden":"true"}},[this._v("#")]),this._v(" Where can I install example forms after Sprout Forms is installed?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("You can install the default example forms in the Control Panel at "),e("code",[this._v("admin/sproutforms/examples")]),this._v(" or find a link to install the Example Forms in the Sprout Forms Settings area.")])])}],!1,null,null,null);e.default=s.exports}}]);