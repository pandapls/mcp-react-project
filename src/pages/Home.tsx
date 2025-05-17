import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">首页</h1>
      <p className="text-gray-600">
        欢迎来到 MCP React Project! 这是一个使用 TypeScript、React Router 和 Tailwind CSS 的示例项目。
      </p>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700">React</h3>
            <p className="text-gray-600">用于构建用户界面的 JavaScript 库</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-green-700">TypeScript</h3>
            <p className="text-gray-600">JavaScript 的超集，提供类型安全</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-purple-700">Tailwind CSS</h3>
            <p className="text-gray-600">实用优先的 CSS 框架</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
