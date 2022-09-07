# webpack5+vue3自定义配置

## 下载依赖
`npm i`

## 运行
`npm run server`

## 打包
`npm run build`


## js 向go 发送消息
格式需要为对象， 一个 name 一个 payload
返回对象，内容为payload
```javascript
          // @ts-ignore
          astilectron.sendMessage({name: 'hello', payload: 's'}, function(message) {
              console.log("received " + message.payload)
          });
```