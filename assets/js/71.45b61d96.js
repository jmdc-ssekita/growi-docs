(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{437:function(e,a,t){"use strict";t.r(a);var s=t(7),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"multiple-sites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-sites","aria-hidden":"true"}},[e._v("#")]),e._v(" Multiple Sites")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This cookbook supposes the usage of "),t("router-link",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[e._v("docker-compose")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This chapter introduces how to launch three GROWI sites.")]),e._v(" "),t("h3",{attrs:{id:"build-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Build Image")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weseek/growi-docker-compose.git growi\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" growi\ndocker build -t growimulti_app "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),t("h3",{attrs:{id:"replace-docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replace-docker-compose-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" Replace docker-compose.yml")]),e._v(" "),t("p",[e._v("Edit "),t("code",[e._v("./docker-compose.yml")]),e._v(" and duplicate the app container and volumes. On this example, these GROWI apps share the use of one Mongo DB contatiner and one Elasticsearch container for saving of resources.")]),e._v(" "),t("div",{staticClass:"language-text:docker-compose.yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('...\n\nservices:\n  app-1:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3001:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-1 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-1\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_1:/data\n\n  app-2:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3002:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-2 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-2\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_2:/data\n\n  app-3:\n    # Specify the image built in the previous step\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3003:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # Use the same paths for app-3 in MONGO_URI and ELASTICSEARCH_URI\n      - MONGO_URI=mongodb://mongo:27017/growi-3\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-3\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_3:/data\n...\n\nvolumes:\n  # Write the volumes each GROWI uses\n  growi_data_1:\n  growi_data_2:\n  growi_data_3:\n\n...\n')])])]),t("h3",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" Start")]),e._v(" "),t("p",[e._v("Execute this command and access to each sites.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker-compose up\n")])])]),t("p",[e._v("and access to:")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3001"),t("OutboundLink")],1),e._v(" (app-1)")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://localhost:3002",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3002"),t("OutboundLink")],1),e._v(" (app-2)")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://localhost:3003",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3003"),t("OutboundLink")],1),e._v(" (app-3)")]),e._v(" "),t("h2",{attrs:{id:"upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),t("h3",{attrs:{id:"stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[e._v("#")]),e._v(" Stop")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker-compose stop\n")])])]),t("h3",{attrs:{id:"remove-app-containers-and-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-app-containers-and-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove app containers and images")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" app-1\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" app-2\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" app-3\ndocker rmi growimulti_app\ndocker rmi weseek/growi:3\n")])])]),t("h3",{attrs:{id:"rebuild-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Rebuild Image")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\ndocker build -t growimulti_app "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),t("h3",{attrs:{id:"start-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Start")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker-compose up\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);