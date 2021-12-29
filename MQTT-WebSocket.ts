class SocketTool{
    getMsgCb:any
    client:any
    constructor(paho:any,topic:string,getMsgCb:any,ip:string,port:number){
        this.getMsgCb = getMsgCb,
        this.client = undefined
        this.init(paho||Paho,topic,ip,port-0)
    }
    init(paho:any,topic:string,ip:string,port:number){
        this.client = new paho.MQTT.Client(ip, port, '');        
        topic&&this.clientConnect(topic)
    }
    //客户端订阅地址
    clientConnect(topic){
        this.client.connect({onSuccess:()=>{
            this.client.subscribe(topic)
        }})
        this.clientOnMessage()
    }
    //注册接受事件,并把接受到的数值回调出去
    clientOnMessage(){
        this.client.onMessageArrived = message=>{
            try{
                this.getMsgCb(message.payloadString)
            }catch(e){
                throw Error("接受方法错误："+e)
            }
        }
    }
    //断开链接
    disconnect() {
        this.client.isConnected()&&this.client.disconnect()
    };
}
export default SocketTool