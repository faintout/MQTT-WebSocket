"use strict";
// exports.__esModule = true;
var SocketTool = /** @class */ (function () {
    function SocketTool(paho, topic, getMsgCb, ip, port) {
        this.getMsgCb = getMsgCb,
            this.client = undefined;
        this.init(paho || Paho, topic, ip, port - 0);
    }
    SocketTool.prototype.init = function (paho, topic, ip, port) {
        this.client = new paho.MQTT.Client(ip, port, '');
        topic && this.clientConnect(topic);
    };
    //客户端订阅地址
    SocketTool.prototype.clientConnect = function (topic) {
        var _this = this;
        this.client.connect({ onSuccess: function () {
                _this.client.subscribe(topic);
            } });
        this.clientOnMessage();
    };
    //注册接受事件,并把接受到的数值回调出去
    SocketTool.prototype.clientOnMessage = function () {
        var _this = this;
        this.client.onMessageArrived = function (message) {
            try {
                _this.getMsgCb(message.payloadString);
            }
            catch (e) {
                throw Error("接受方法错误：" + e);
            }
        };
    };
    //断开链接
    SocketTool.prototype.disconnect = function () {
        this.client.isConnected()&&this.client.disconnect();
    };
    ;
    return SocketTool;
}());
// exports["default"] = SocketTool;
