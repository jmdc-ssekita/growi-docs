(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{509:function(t,a,e){"use strict";e.r(a);var r=e(7),_=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ファイルアップロード設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイルアップロード設定","aria-hidden":"true"}},[t._v("#")]),t._v(" ファイルアップロード設定")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概要"}},[t._v("概要")])]),e("li",[e("a",{attrs:{href:"#アップロード先の指定"}},[t._v("アップロード先の指定")])]),e("li",[e("a",{attrs:{href:"#添付ファイルのサイズ制限"}},[t._v("添付ファイルのサイズ制限")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),e("p",[t._v("GROWI ページへのファイルアップロードに関する設定について紹介します。")]),t._v(" "),e("h2",{attrs:{id:"アップロード先の指定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#アップロード先の指定","aria-hidden":"true"}},[t._v("#")]),t._v(" アップロード先の指定")]),t._v(" "),e("p",[t._v("GROWI ページの添付ファイルの保存先は、環境変数によりMongoDB GridFS、AWS S3、Google Cloud Storage、ローカルファイルシステムから選択できます。デフォルトでは AWS S3 が選択されています。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。")])]),t._v(" "),e("h3",{attrs:{id:"mongodb-gridfs-へのアップロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-gridfs-へのアップロード","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB GridFS へのアップロード")]),t._v(" "),e("p",[t._v("GROWI データの保存先に指定している MongoDB に "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/core/gridfs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GridFS"),e("OutboundLink")],1),t._v(" を利用し、ファイルを保存します。")]),t._v(" "),e("p",[t._v("利用するには以下のように環境変数を設定し、GROWI を再起動してください。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FILE_UPLOAD")]),t._v(" : 'mongodb'")])]),t._v(" "),e("h3",{attrs:{id:"aws-s3-へのアップロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-s3-へのアップロード","aria-hidden":"true"}},[t._v("#")]),t._v(" AWS S3 へのアップロード")]),t._v(" "),e("p",[t._v("App 設定画面の AWS 設定にて登録されている AWS S3 Bucketにファイルを保存します。")]),t._v(" "),e("p",[t._v("利用するには以下のように環境変数を設定し、GROWI を再起動してください。"),e("code",[t._v("FILE_UPLOAD")]),t._v(" が未設定の場合も AWS S3 へのファイルアップロードが採用されます。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FILE_UPLOAD")]),t._v(" : 'aws' (Default)")])]),t._v(" "),e("p",[t._v("AWS S3 Bucket のセットアップが未完了の場合は、"),e("router-link",{attrs:{to:"/ja/admin-guide/management-cookbook/app-settings.html#aws-設定"}},[t._v("こちら")]),t._v("を参考にセットアップしてください。")],1),t._v(" "),e("h3",{attrs:{id:"google-cloud-storage-へのアップロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-storage-へのアップロード","aria-hidden":"true"}},[t._v("#")]),t._v(" Google Cloud Storage へのアップロード")]),t._v(" "),e("p",[t._v("環境変数で指定された Google Cloud Storage にファイルを保存します。")]),t._v(" "),e("p",[t._v("利用するには、"),e("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),e("OutboundLink")],1),t._v(" を参考に、GCP のサービスアカウントキー の JSON ファイルを用意した後、以下のように環境変数を設定し、GROWI を再起動してください。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FILE_UPLOAD")]),t._v(" : 'gcs'")]),t._v(" "),e("li",[e("code",[t._v("GCS_API_KEY_JSON_PATH")]),t._v(" : [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の JSON ファイルのパス]")]),t._v(" "),e("li",[e("code",[t._v("GCS_BUCKET")]),t._v(" : [GCS のバケット名]")])]),t._v(" "),e("h3",{attrs:{id:"ファイルシステムへのアップロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイルシステムへのアップロード","aria-hidden":"true"}},[t._v("#")]),t._v(" ファイルシステムへのアップロード")]),t._v(" "),e("p",[t._v("GROWI サーバーから見たローカルファイルシステムにファイルを保存します。")]),t._v(" "),e("p",[t._v("利用するには以下のように環境変数を設定し、GROWI を再起動してください。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FILE_UPLOAD")]),t._v(" : 'local'")])]),t._v(" "),e("h2",{attrs:{id:"添付ファイルのサイズ制限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添付ファイルのサイズ制限","aria-hidden":"true"}},[t._v("#")]),t._v(" 添付ファイルのサイズ制限")]),t._v(" "),e("p",[t._v("以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は "),e("code",[t._v("bytes")]),t._v(" です。デフォルトではいずれの値も "),e("code",[t._v("Infinity")]),t._v(" となっており、ファイルサイズは制限されません。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MAX_FILE_SIZE")]),t._v(" : [アップロード可能なファイルのサイズ上限(bytes)]")]),t._v(" "),e("li",[e("code",[t._v("FILE_UPLOAD_TOTAL_LIMIT")]),t._v(" : [アップロードされたファイルの累計サイズ上限(bytes)]")])])])},[],!1,null,null,null);a.default=_.exports}}]);