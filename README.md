# 工程项目构建 flow

- 参考文档
- 流程说明

## 参考文档

- [从零开始配置 TypeScript 项目](https://juejin.im/post/6856410900577026061)
- [从零开始配置 react + typescript(一)：dotfiles](https://juejin.im/post/6844904055618158600)
- [从零开始配置 react + typescript(二)：linters 和 formatter](https://juejin.im/post/6844904055618158600)
- [从零开始配置 react + typescript(三)：配置开发环境](https://juejin.im/post/6844904055618158600)

## 流程说明

- init
- git commit message
- typescript
- lint
- webpack
- test
- docs

### init

1. 新建项目文件夹, 且初始化 git 仓库`git init`
2. 添加`.gitignore`文件
   - `.gitignore`文件可手动添加, 亦可使用一些插件智能添加
   - VSCode 的 gitignore 扩展插件可自动为项目创建用户选项类型的 gitignore 内容
   - 使用: `ctrl+shift+p`调出命令面板, 选择`Add gitignore`命令, 然后根据需要选择配置,可多次追加, 一般输入的选择类目有: Node、VisualStudioCode、Windows、Linux、macOS、SublimeText 等
   - 在自动生成的 gitignore 文件需要注意删除 typings/ 和 Icon, 因为他们是需要添加到 git 版本库的
   - typings 文件夹我们会用来保存 ts 的类型定义文件，icon 文件夹我们一般用来保存图标
3. yarn init -y 直接生成默认的 package.json
4. `node --version > ./.nvmrc` 生成项目 node 版本

### git commit message

主要使用工具: cz 工具集(适配器、校验以及日志)
git 提交三部分: Header, Body, Footer - Header: <type>(<scope>): <subject>
type(必需)、scope(可选)和 subject(必需) - type 用于说明`commit`的提交性质
值 | 描述
---|---
feat | 新增功能
fix | 修复 bug
docs | 文档变更
style | 代码格式(不影响功能, 例如空格、分号等格式修正)
refactor | 代码重构
perf | 改善性能
test | 测试
build | 变更项目构建或外部依赖(如 scopers: webpack、gulp、npm 等)
ci | 更改持续集成软件的配置文件或 package 中 script 命令(如 scopes: Travis, Circle 等)
chore | 变更构建流程或辅助工具
revert | 代码回退 - scope 用于说明`commit`影响的范围 - subject 用于说明`commit`的简短描述

    - Body: 详细描述
    - Footer: 没重大变更的话, 可省略

- 安装 cz 工具: yarn global add commitizen
- 安装适配器 cz-conventional-changelog:

### typescript

<!-- todo -->

### lint

- editorconfig
- prettier
- eslint
- eslint-config-prettier

#### editorconfig

editorconfig 是一个跨项目的格式化文档的插件, 作用于编辑器

1. vscode 安装 editorconfig 插件
2. 项目中添加.editorconfig 配置文件

#### prettier

prettier 是一个‘约定大于配置’的格式化工具

1. 安装: `yarn add prettier -D`
2. 生成配置: `npx eslint --init`
   根据 cli 回答自动生成相关配置, 生成.eslintrc.js
3. 最后一个命令可能要用 npm 安装, 那么假如一开始使用 yarn 工具的, 可以先确认安装, 再删除 node_modules, package-lock.json, yarn.lock 三个文件, 重新再使用 yarn 安装

#### eslint

1. 安装 `yarn add eslint -D`

#### eslint-config-prettier

eslint-config-prettier 用来解决 linters 和 prettier 冲突的问题
一般的, lint 工具用来检查代码风格, prettier 用来格式化代码

1. 安装: `yarn add eslint-config-prettier -D`
2. 在.eslintrc.js 文件中 extends 最后添加选项'prettier'

### webpack

使用 express + webpack devServer 相关中间件配置

- [Configuration Languages](https://webpack.js.org/configuration/configuration-languages/)

### test

<!-- todo -->

### test

<!-- docs -->
