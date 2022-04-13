# taro-demo-pr-11589

关于 https://github.com/NervJS/taro/pull/11589 的 Demo

当 babel.config.js 中配置 "dynamic-import-node": false 时。微信小程序编译会报错

## 启动命令

```
npm run dev:weapp
```

## 报错信息
```
编译  发现入口  src/app.tsx
编译  发现页面  src/pages/index.tsx
🙅   编译失败. 4/13/2022, 4:06:02 PM

./src/pages/index.tsx)
Module parse failed: baseVisitor[type] is not a function
File was processed with these loaders:
 * ./node_modules/babel-loader/lib/index.js
 * ./node_modules/babel-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
TypeError: baseVisitor[type] is not a function
```