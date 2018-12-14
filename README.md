# Jam

一个基于 TypeScript+React+webpack(Parcel)的项目脚手架

## 特点

- 基于 webpack4
- 使用 babel7 替换 ts-loader 或 awesome-typescript-loader，使用 babel-plugin-import 实现[antd 组件按需加载](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)，配置 less-laoder 实现[antd 全局配色](https://ant.design/docs/react/customize-theme-cn)
- 使用 thread-loader + cache-loader 替换非官方的 happypack 优化打包速度
- 使用 prettier+husky 保证团队代码格式一致性
- 使用 react-loadable 实现代码分割

### 版本环境

```html
node v8.9.4 npm v6.4.1
```

### 项目结构

```html
|--.cache           parcel打包生成的缓存文件
|--.cache-loader    webpack cache-loader生成的缓存文件 
|--scripts 
  |--rules 
    |--fileRules.js
    |--jsRules.js
    |--loaders.js
    |--styleRules.js 
  |--tpl
    |--index.html 
  |--cleanup-folder.js
  |--config.js
  |--constants.js
  |--env.json
  |--optimization.js
  |--plugins.js
  |--utils.js
  |--webpack.config.js
|--dist              打包后生成文件 
|--node_modules
|--src
|--.editorconfig     editorconfig配置文件
|--.gitignore
|--.prettierrc       代码格式化工具prettier配置
|--.stylelintrc.js   样式检查工具stylelint配置
|--CHANGELOG.md
|--package.json
|--postcss.config.js
|--theme.js          antd全局配色文件
|--tsconfig.json
|--tsconfig.webpack.json
|--tslint.json
```

### 安装依赖

- use `npm install`

### 开发环境

- use `npm run dev`
- use `npm run dev:parcel`   使用 parcel 启动, 实验

### 打包

- use `npm run build:prod`   打包正式环境
- use `npm run build:parcel` 使用 parcel 打包, 实验
- use `npm run build:qa`     打包测试环境

### 查看打包后文件体积分布

- use `npm run analyze`

### 注意安装依赖

```html
1.建议使用npm而不是yarn
2.开发时不建议全局翻墙, 有可能导致webpack-dev-server报错
```
