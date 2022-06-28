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

### 3. 添加代码校验 Eslint

```
# 安装依赖
pnpm i eslint eslint-plugin-vue @typescript-eslint/parser eslint-import-resolver-alias --save-dev

# eslint 初始化
./node_modules/.bin/eslint --init
```

> √ How would you like to use ESLint? · style
> √ What type of modules does your project use? · esm
> √ Which framework does your project use? · vue
> √ Does your project use TypeScript? · No / Yes
> √ Where does your code run? · browser, node
> √ How would you like to define a style for your project? · guide
> √ Which style guide do you want to follow? · airbnb
> √ What format do you want your config file to be in? · JavaScript
> Checking peerDependencies of eslint-config-airbnb-base@latest
> The config that you've selected requires the following dependencies:
>
> eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest
> √ Would you like to install them now? · No / Yes
> √ Which package manager do you want to use? · pnpm

#### 配置文件

```
// .eslintrc.js
module.exports = {
    // 语言环境支持
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // 扩展
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: [2, 4],
        'no-undef': [0],
        'import/no-unresolved': [2, { ignore: ['virtual:generated-pages', 'virtual:windi.css'] }],
        'import/extensions': [0],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'never',
                allow: [],
                ignoreOnInitialization: false,
            },
        ],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['login', 'index'],
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 3,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
    // 别名设置
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['#', './types'],
                ],
                extensions: ['.ts', '.d.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
```

```
// .eslintignore
node_modules/
dist/
index.html
package.json
```

#### 添加eslint 脚本

```json
{
	"eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src"
}
```

### 4.添加EditorConfig

```
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 4 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false

```

### 5.添加prettier

```shell
# 安装 perttier 依赖
pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

#### 配置文件

```js
//.prettier.js
module.exports = {
    printWidth: 100, // 一行最多 80 字符
    tabWidth: 4, // 使用 4 个空格缩进
    useTabs: false, // 不使用 tab 缩进，而使用空格
    semi: true, // 行尾需要有分号
    singleQuote: true, // 使用单引号代替双引号
    quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
    jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
    trailingComma: 'all', // 末尾使用逗号
    bracketSpacing: true, // 大括号内的首尾需要空格 { foo: bar }
    arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
    rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
    rangeEnd: Infinity, // 不需要写文件开头的 @prettier
    requirePragma: false,
    insertPragma: false, // 不需要自动在文件开头插入 @prettier
    proseWrap: 'preserve', // 使用默认的折行标准
    htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
    endOfLine: 'auto', // 换行符使用 lf
};
```

```
// .prettierignore
/dist/*
.local
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

#### 添加 prettier 脚本

```json
{
    "prettier:comment": "自动格式化当前目录下的所有文件",
    "prettier": "prettier --write ."
}
```

### 6.添加stylelint

```shell
# 安装依赖
pnpm i stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order stylelint-config-prettier --save-dev

# vue 支持
pnpm i stylelint-config-recommended stylelint-config-recommended-vue postcss postcss-html --save-dev
# less 支持
pnpm i postcss stylelint-less postcss-less --save-dev

```

#### 配置文件

```js
// .stylelintrc.js
// https://stylelint.io/user-guide/rules/list/indentation/
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
        'stylelint-config-html/vue',
        'stylelint-config-recommended-vue'
    ],
    plugins: ['stylelint-order', "stylelint-less"],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': null,
        'color-no-invalid-hex': true,
        'less/color-no-invalid-hex': true
    }
};

```

```
// .stylelintignore

/dist/*
.local
/node_modules/**

**/*.svg
**/*.sh

/public/*

```

### 7.CommitLint

```shell
# 依赖安装
pnpm i @commitlint/config-conventional @commitlint/cli  commitizen cz-conventional-changelog  cz-customizable commitlint-config-cz lint-staged husky --save-dev
```

#### 执行以下操作

```shell
# husky 安装 会生成 .husky 的目录
npx husky install

# 创建脚本lint staged commit 前对暂存文件进行校验 生成 pre-commit 脚本
npx husky add .husky/pre-commit "npx lint-staged"

# package.json 配置
{
    "lint-staged": {
        "{*.{js,ts,vue,tsx,jsx}}": [
            "pnpm run lint",
            "pnpm run prettier"
        ]
    },
}

# 创建脚本 校验 commit 信息 生成 commit-msg 脚本
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 

# 终端提交脚本 cz
# package.json 配置
{
    "config": {
        "commitizen": {
            "path": "node_modules/cz-customizable"
        }
    },
}

```

配置文件

```js
// .cz-config.js
module.exports = {
    types: [
        { value: 'feat', name: 'feature:  增加新功能' },
        { value: 'bug', name: 'bug:      测试反馈bug列表中的bug号' },
        { value: 'fix', name: 'fix:      修复bug' },
        { value: 'ui', name: 'ui:       更新UI' },
        { value: 'docs', name: 'docs:     文档变更' },
        { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
        { value: 'perf', name: 'perf:     性能优化' },
        {
            value: 'refactor',
            name: 'refactor: 重构(既不是增加feature，也不是修复bug)',
        },
        { value: 'release', name: 'release:  发布' },
        { value: 'deploy', name: 'deploy:   部署' },
        { value: 'test', name: 'test:     增加测试' },
        {
            value: 'chore',
            name: 'chore:    构建过程或辅助工具的变动(更改配置文件)',
        },
        { value: 'revert', name: 'revert:   回退' },
        { value: 'build', name: 'build:    打包' },
    ],
    // override the messages, defaults are as follows
    messages: {
        type: '请选择提交类型:',
        customScope: '请输入您修改的范围(可选):',
        subject: '请简要描述提交 message (必填):',
        body: '请输入详细描述(可选，待优化去除，跳过即可):',
        footer: '请输入要关闭的issue(待优化去除，跳过即可):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72,
};

```

```js
// .commitlintrc.js
module.exports = {
    extends: ['@commitlint/config-conventional', 'cz'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能（feature）
                'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
                'fix', // 修补bug
                'ui', // 更新 ui
                'docs', // 文档（documentation）
                'style', // 格式（不影响代码运行的变动）
                'perf', // 性能优化
                'release', // 发布
                'deploy', // 部署
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
                'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
                'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
                'build', // 打包
            ],
        ],
        // <type> 格式 小写
        'type-case': [2, 'always', 'lower-case'],
        // <type> 不能为空
        'type-empty': [2, 'never'],
        // <scope> 范围不能为空
        'scope-empty': [2, 'never'],
        // <scope> 范围格式
        'scope-case': [0],
        // <subject> 主要 message 不能为空
        'subject-empty': [2, 'never'],
        // <subject> 以什么为结束标志，禁用
        'subject-full-stop': [0, 'never'],
        // <subject> 格式，禁用
        'subject-case': [0, 'never'],
        // <body> 以空行开头
        'body-leading-blank': [1, 'always'],
        'header-max-length': [0, 'always', 72],
    },
};

```

### 8. vite 插件安装 

```shell
# 安装依赖
pnpm i vite-plugin-compression vite-plugin-progress vite-plugin-restart vite-plugin-svg-icons rollup-plugin-visualizer @vitejs/plugin-vue-jsx vite-plugin-windicss vite-plugin-mkcert vite-plugin-vue-setup-extend vite-plugin-pages --save-dev
```



| 插件名称                     | 文档地址                                              | 备注 | 介绍                       |
| ---------------------------- | ----------------------------------------------------- | ---- | -------------------------- |
| unplugin-auto-import         | https://www.npmjs.com/package/unplugin-auto-import    |      | 自动导入插件               |
| unplugin-vue-components      | https://www.npmjs.com/package/unplugin-vue-components |      | Vue 的按需组件自动导入。   |
| vite-plugin-compression      |                                                       |      | 开启.gz压缩                |
| vite-plugin-progress         |                                                       |      | 打包进度条                 |
| vite-plugin-restart          |                                                       |      | 修改vite.config.js 重启    |
| vite-plugin-svg-icons        |                                                       |      | vite svg icon 支持         |
| rollup-plugin-visualizer     |                                                       |      | rollup 打包分析插件        |
| @vitejs/plugin-vue-jsx       |                                                       |      | jsx 支持                   |
| vite-plugin-windicss         |                                                       |      | windicss                   |
| vite-plugin-mkcert           |                                                       |      | https 开发服务提供证书支持 |
| vite-plugin-vue-setup-extend |                                                       |      | setup 支持name             |

### 9.业务必须包 安装

```shell
# 安装依赖
pnpm i pinia vue-router axios element-plus  @vueuse/core --save

#element plus 自动导入 
pnpm i unplugin-vue-components unplugin-auto-import --save-dev
```

#### 配置文件

```ts
// router/index.html
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (_to, _from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;

```

