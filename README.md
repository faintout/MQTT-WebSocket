
<h1 align="center">MQTT-WebSocket</h1>


### 基于MQTT 的WebSocket连接订阅工具。

- 支持传入MQTT WebSocket的IP、端口及topic订阅。
- js引入方式则需注掉export default 等导出方法。
- import 引入需使用export 导出使用。

### MQTT-WebSocket使用方法

```html
<body>
    <!-- vue等框架中在html中引入 -->
    <script src="./mqttws31.min.js" type="text/javascript"></script>
    <script src="./MQTT-WebSocket.js" type="text/javascript"></script>
    <script>
        function getMessage(payload){
            console.log('外部接受',JSON.parse(payload));
        }
        let client = new SocketTool(Paho,'report/reatime/detail/#',getMessage,'172.17.13.28',8083)
    </script>
</body>
```
#### 配置项
```javascript
let client = new SocketTool(*$1,*$2,*$3,*$4,*$5)
//*$1(Paho) ：指MQTTWS的实例对象Paho，此值为固定Paho。
//*$2(topic) :指订阅的地址，如无则传递null/undefind。
//*$3(socketMsg) :指webSocket接受值的回调方法。
//*$4(IP) :指MQTT-WebSocket的IP。
//*$5(port) :指MQTT-WebSocket的端口。

//订阅方法,传递订阅地址
client.clientConnect(topic)
//断开方法
client.disconnect()
setVolumeVal(Val)
```
