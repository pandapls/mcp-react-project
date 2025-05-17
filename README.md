# MCP React Project

使用 TypeScript 和 Webpack 手动配置的 React 项目。

## 技术栈

- React
- TypeScript
- Webpack
- Babel
- React Router
- Tailwind CSS

## 功能

- 使用 TypeScript 进行类型安全的开发
- 使用 Webpack 进行模块打包和构建优化
- 使用 React Router 实现路由和导航
- 使用 Tailwind CSS 进行现代化的样式设计
- 响应式布局，适配不同设备

## 安装

```bash
npm install
```

## 开发

```bash
npm start
```

## 构建

```bash
npm run build
```

## 项目结构

```
mcp-react-project/
├── public/             # 静态资源
│   └── index.html      # HTML 模板
├── src/                # 源代码
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── About.tsx   # 关于页面
│   │   └── Contact.tsx # 联系页面
│   ├── App.tsx         # 应用主组件
│   ├── App.css         # 应用样式
│   ├── index.tsx       # 入口文件
│   └── index.css       # 全局样式
├── .babelrc            # Babel 配置
├── .gitignore          # Git 忽略文件
├── package.json        # 项目依赖和脚本
├── postcss.config.js   # PostCSS 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
├── webpack.config.js   # Webpack 配置
└── README.md           # 项目说明
```
