(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{524:function(_,v,e){"use strict";e.r(v);var i=e(7),a=Object(i.a)({},function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"ldap-連携"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldap-連携","aria-hidden":"true"}},[_._v("#")]),_._v(" LDAP 連携")]),_._v(" "),e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[_._v("#")]),_._v(" 概要")]),_._v(" "),e("p",[_._v("LDAP サーバーを登録することで、LDAP によるログインが可能となります。")]),_._v(" "),e("h2",{attrs:{id:"ldap-サーバー設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldap-サーバー設定","aria-hidden":"true"}},[_._v("#")]),_._v(" LDAP サーバー設定")]),_._v(" "),e("ol",[e("li",[_._v("管理画面のセキュリティ設定ページ(/admin/security)にアクセスし、認証機構設定の LDAP タグを開きます。")]),_._v(" "),e("li",[_._v("「Use LDAP」を ON にし、必要事項を入力します。")])]),_._v(" "),e("ul",[e("li",[_._v("サーバ URL: "),e("code",[_._v("ldaps://ホスト:ポート/BaseDN")]),_._v(" というフォーマットで入力します。\n"),e("ul",[e("li",[_._v("スキーマは "),e("code",[_._v("ldap")]),_._v(" or "),e("code",[_._v("ldaps")])]),_._v(" "),e("li",[_._v("ポートは省略化")])])]),_._v(" "),e("li",[_._v("Bind モード: LDAP サーバーに接続してユーザー検索する際の挙動を選べます。\n"),e("ul",[e("li",[_._v("Manager Bind: 予め特定の DN を設定しておき、それを用いて LDAP ユーザーを検索するモード。"),e("code",[_._v("uid=admin")]),_._v(" などに権限がある場合はこちらを選択してください。")]),_._v(" "),e("li",[_._v("User Bind: GROWI のログインフォームに入力したユーザー名から動的に DN を作成し、それを用いて LDAP ユーザーを検索するモード。")])])]),_._v(" "),e("li",[_._v("Bind DN\n"),e("ul",[e("li",[_._v("ディレクトリサービスに認証する際のアカウント DN を入力してください。")]),_._v(" "),e("li",[_._v("User Bind にて、ログイン時に入力されるユーザー名を使用するには "),e("code",[_._v(_._s(_.username))]),_._v(" の形式を使用してください。\n"),e("ul",[e("li",[_._v("例: "),e("code",[_._v("uid="+_._s(_.username)+",dc=domain,dc=com")])])])])])]),_._v(" "),e("li",[_._v("Bind DN パスワード\n"),e("ul",[e("li",[_._v("Manager Bind の場合のみ、使用するパスワードを入力してください。（注: MongoDB 内には当該 DN の平文パスワードが保存されます）")]),_._v(" "),e("li",[_._v("User Bind の場合は、ログイン時のパスワードが使用されます。")])])]),_._v(" "),e("li",[_._v("検索フィルター\n"),e("ul",[e("li",[_._v("検索フィルターを用いると、認証されるユーザーを一意に決定させることができます。")]),_._v(" "),e("li",[_._v("ログイン時のユーザー名を使用するには "),e("code",[_._v(_._s(_.username))]),_._v(" の形式を使用してください。")]),_._v(" "),e("li",[_._v("空欄の場合は "),e("code",[_._v("(uid="+_._s(_.username)+")")]),_._v(" が使用されます。")]),_._v(" "),e("li",[_._v("例1: "),e("code",[_._v("(uid="+_._s(_.username)+")")]),_._v(" "),e("ul",[e("li",[_._v("ログインフォームに入力したユーザー名が uid 属性と一致する LDAP ユーザーをピックアップ")])])]),_._v(" "),e("li",[_._v("例2: "),e("code",[_._v("(|(uid="+_._s(_.username)+")(mail="+_._s(_.username)+"))")]),_._v(" "),e("ul",[e("li",[_._v("ログインフォームに入力したユーザー名が uid 属性または mail 属性と一致する LDAP ユーザーをピックアップ")])])]),_._v(" "),e("li",[_._v("例3: "),e("code",[_._v("(&(uid="+_._s(_.username)+")(memberOf=cn=manager,ou=group,dc=example,dc=com))")]),_._v(" "),e("ul",[e("li",[_._v("アクセス可能なユーザーを絞る")])])])])])]),_._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[_._v("設定が反映されているか確認します。")])]),_._v(" "),e("ul",[e("li",[_._v("ログアウトし、ログイン画面(/login)にアクセスします。")]),_._v(" "),e("li",[_._v("LDAP に登録されているアカウントでログインできれば設定完了です。")])]),_._v(" "),e("h2",{attrs:{id:"attribute-mapping-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribute-mapping-オプション","aria-hidden":"true"}},[_._v("#")]),_._v(" Attribute Mapping (オプション)")]),_._v(" "),e("p",[_._v("LDAP アカウントをもとに GROWI アカウントを新規作成する際に、GROWI アカウントの以下の情報に対して LDAP アカウントのどの値( "),e("code",[_._v("uid")]),_._v(", "),e("code",[_._v("cn")]),_._v(" 等)を紐づけるか指定できます。")]),_._v(" "),e("ul",[e("li",[_._v("username: デフォルトでは LDAP アカウントの "),e("code",[_._v("uid")]),_._v(" が適用されます。")]),_._v(" "),e("li",[_._v("Mail: デフォルトでは LDAP アカウントの "),e("code",[_._v("mail")]),_._v(" が適用されます。")]),_._v(" "),e("li",[_._v("Name: 未指定の場合 Name は空欄になります。")])]),_._v(" "),e("p",[_._v("新規にログインしたユーザーの "),e("code",[_._v("username")]),_._v(" が一致するローカルアカウントが存在した場合に自動に紐付けを行いたい場合は "),e("code",[_._v("新規ログイン時、username が一致したローカルアカウントが存在した場合は自動的に紐付ける")]),_._v(" にチェックを入れてください。(注: username の一致を以て同一ユーザーであるとみなすので、セキュリティに注意してください)")]),_._v(" "),e("h2",{attrs:{id:"グループ検索フィルター（オプション）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#グループ検索フィルター（オプション）","aria-hidden":"true"}},[_._v("#")]),_._v(" グループ検索フィルター（オプション）")]),_._v(" "),e("p",[_._v("指定した条件を見たす posixGroup が存在した場合のみログインを行えるようにします。この機能を有効にする場合は、セキュリティ設定ページの認証機構設定内の LDAP タグにて、以下の値を設定してください。")]),_._v(" "),e("ul",[e("li",[_._v("グループ検索ベース DN: グループを検索する際にベース DN として扱われる DN\n例: "),e("code",[_._v("ou=group,dc=domain,dc=com")])]),_._v(" "),e("li",[_._v("グループ検索フィルター: グループフィルターに用いるクエリです。このクエリにヒットするグループがあった時のみ\b、LDAP でのログインが成功します。ログイン対象ユーザーオブジェクトのプロパティーで置換する場合は "),e("code",[_._v(_._s(_.dn))]),_._v(" を用いてください。\n例: "),e("code",[_._v("(&(cn=group1)(memberUid="+_._s(_.dn)+"))")]),_._v(" とすると "),e("code",[_._v("cn=group1")]),_._v(" と、ユーザーの "),e("code",[_._v("uid")]),_._v(" を含む "),e("code",[_._v("memberUid")]),_._v(" を持つグループにヒットします("),e("code",[_._v("ユーザーの DN プロパティー")]),_._v(" がデフォルトの "),e("code",[_._v("uid")]),_._v(" から変更されていない場合)")]),_._v(" "),e("li",[_._v("ユーザーの DN プロパティー: グループ検索フィルター内の "),e("code",[_._v(_._s(_.dn))]),_._v(" に置換される、ユーザーオブジェクトのプロパティー\nデフォルト: uid")])])])},[],!1,null,null,null);v.default=a.exports}}]);