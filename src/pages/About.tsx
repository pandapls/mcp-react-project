import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">关于我们</h1>
      <div className="text-gray-600 space-y-4">
        <p>
          MCP React Project 是一个示例项目，展示了如何使用 TypeScript 和 Webpack 手动配置 React 应用程序。
        </p>
        <p>
          这个项目集成了以下技术：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">React</span> - 用于构建用户界面的 JavaScript 库
          </li>
          <li>
            <span className="font-medium">TypeScript</span> - JavaScript 的超集，提供类型安全
          </li>
          <li>
            <span className="font-medium">Webpack</span> - JavaScript 模块打包工具
          </li>
          <li>
            <span className="font-medium">React Router</span> - React 应用程序的导航和路由
          </li>
          <li>
            <span className="font-medium">Tailwind CSS</span> - 实用优先的 CSS 框架
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
