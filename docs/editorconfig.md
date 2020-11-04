# EditorConfig

EditorConfig 很简单, 由两部分组成, 一个是.editorconfig配置文件, 一个是编辑器插件
.editorconfig 文件定义了编码风格，编辑器插件读取该文件并应用这些规则
.editorconfig 规则:

rules | value | description
---|---|---
root                      |  true, false, unset   | -
charset                   |  -                    |  文件编码
end_of_line               |  cr, crlf, lf, unset  |  换行符
trim_trailing_whitespace  |  true,  false, unset  | 去除多余的空格
inset_final_newline       |  true,  false, unset  |  在尾部插入一行
indent_style              |  tab,  space, unset   |  缩进方式
indent_size               |  1-8, unset           |  缩进大小
tab_width                 |  1-8, unset           | tab大小

## 常见的配置

```js
[*]
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.{js,ts}]
indent_style = space
indent_size = 2
tab_width = 2
```