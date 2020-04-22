(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{439:function(e,t,a){"use strict";a.r(t);var r=a(7),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"heroku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[e._v("#")]),e._v(" Heroku")]),e._v(" "),a("h2",{attrs:{id:"launch-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch App")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("a",{attrs:{href:"https://github.com/weseek/growi/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("the latest release page on GitHub"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Go to file tree URL like https://github.com/weseek/growi/tree/vX.X.x")]),e._v(" "),a("li",[e._v('Click "Deploy to Heroku" button at the top of README.md\n'),a("ol",[a("li",[e._v("Your browser will jump to Heroku")]),e._v(" "),a("li",[e._v("Login if you need")])])]),e._v(" "),a("li",[e._v("Deploy app")])]),e._v(" "),a("h2",{attrs:{id:"upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),a("h3",{attrs:{id:"install-heroku-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-heroku-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Install Heroku CLI")]),e._v(" "),a("p",[e._v("Please install Heroku CLI according to the "),a("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli#download-and-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Heroku page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"update-app-s-repository-using-heroku-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-app-s-repository-using-heroku-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Update app's repository using Heroku CLI")]),e._v(" "),a("p",[e._v("At first, login to Heroku with following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ heroku login\n")])])]),a("p",[e._v("Then, clone the app's repository from your Heroku account. Note that [App Name] should be replaced by your App's name. When you execute these comannds, you may see a message like "),a("code",[e._v("warning: You appear to have cloned an empty repository.")]),e._v(", it can be ignored safely.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("heroku git:clone -a [App Name]\n")])])]),a("p",[e._v("Check if "),a("strong",[e._v("remote")]),e._v(" registered correctly with "),a("code",[e._v("git remote")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git remote -v\nheroku\thttps://git.heroku.com/[App Name].git (fetch)\nheroku\thttps://git.heroku.com/[App Name].git (push)\n")])])]),a("p",[e._v("Register the GROWI repository on GitHub as "),a("strong",[e._v("remote")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git remote add origin https://github.com/weseek/growi.git\n")])])]),a("p",[e._v("Get the tag list from GROWI repository.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git pull origin --tags\n")])])]),a("p",[e._v("Create a "),a("strong",[e._v("branch")]),e._v(" which is the version you want to use and checkout.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b growi-vX.X.X refs/tags/vX.X.X\n")])])]),a("p",[e._v("Push created branch to master branch of your Heroku repository. As a result, Heroku will build and deploy your app and complete upgrade, if you will not see any errors. (In some cases it may be necessary to give "),a("code",[e._v("--force")]),e._v(" option with the command.)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git push heroku growi-vX.X.X:master\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);