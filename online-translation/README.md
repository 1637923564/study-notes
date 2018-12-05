## 调用的后台接口所在网站：[yandex](https://tech.yandex.com/)
1. 进入页脚的 [translate API](https://tech.yandex.com/translate/)
2. 进入 [documentation](https://tech.yandex.com/translate/doc/dg/concepts/About-docpage/)选项
3. 选择 [Translate text](https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/) ，将Request syntax中的模板作为访问的接口：
>* key： 在 [translate API](https://tech.yandex.com/translate/) 页面中访问 [API key](https://translate.yandex.com/developers/keys) , 登录 yandex 账号，选择 "+ Create a new key" 选项创建一个key值。
>* text： 需要翻译的文本
>* lang： [OverView](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/) 下 Supported languages表格中code列的值（每一个值对应一个语言）