# vue3-vite-tempalte

vue3 + vite 项目模板

## 项目发件过程

### 1.初始化项目

```shell
# 创建基础模板
pnpm create vite vue3-demo -- --template vue-ts
```

```json
# 配置vscode 保存自定格式化代码
{
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
}
```

### 2. 删除多余文件 并且 node 支持 TS

```shell
# 安装ts-node
pnpm i @types/node --save-dev
```

### 2. 添加代码校验 Eslint

```
# 安装依赖
pnpm i eslint eslint-plugin-vue @typescript-eslint/parser eslint-import-resolver-alias --save-dev

# eslint 初始化
./node_modules/.bin/eslint --init
```

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · pnpm
