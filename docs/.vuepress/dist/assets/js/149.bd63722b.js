(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{276:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",[t._v("Settings")]),t._v(" "),i("p",[t._v("Customize your Redirects with the following settings.")]),t._v(" "),i("div",{staticClass:"table"},[i("table",[t._m(0),t._v(" "),i("tbody",[t._m(1),t._v(" "),i("tr",[t._m(2),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("How to match 404 requests with Redirect records already captured in the database. Defaults to matching the entire URL including query strings. Selecting 'without query strings' will remove all parameters from the request URL before searching for a match. See "),i("router-link",{attrs:{to:"./query-strings-in-redirects.html"}},[t._v("Query String Examples")]),t._v(".")],1)]),t._v(" "),i("tr",[t._m(3),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("How to treat query strings after processing a redirect. 'Remove query strings' will remove the query string from the incoming URL entirely. 'Append query strings' will add any query string from the incoming URL to the New Url. See "),i("router-link",{attrs:{to:"./query-strings-in-redirects.html"}},[t._v("Query String Examples")]),t._v(".")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Setting")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Log 404 Redirects")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Log 'Page Not Found' errors as 404 Redirects. 404 Redirects will appear on the Redirects tab as a disabled 404 Redirect Element and can be updated to 301 or 302 Redirects.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Redirect Match Strategy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Query String Strategy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Track Remote IP")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Enable to capture the IP Address used when a 404 request is saved. IP Addresses may be considered personal information.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v(" Redirect Limit")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The total number of 404 Redirects that will be stored in the database per-site. When the limit is reached, the least recently updated 404 Redirects will be deleted from the Redirects stored for that site.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Cleanup Probability")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The probability that the 404 Redirect cleanup task will run each web request. A lower probability will trigger a cleanup task less often and the number of 404 Redirects stored in the database may be higher than the 404 Redirect Limit target until the cleanup task is triggered.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[this._v("Excluded URL Patterns")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Add any regular expression patterns you wish to exclude from the Redirect log. Add each pattern on a new line. Comments can be added by starting a line with the hash # character")])])}],!1,null,null,null);e.default=s.exports}}]);