import { MessageData } from "./types";

// 消息处理函数
type MessageHandler = (data: any) => void;

/**
 * 创建一个发送给 go 的消息
 * @param name    消息的名字
 * @param payload 附加数据
 * @returns 
 */
export const createMessage = (name: string, payload = '') => {
    return {
        name,
        payload
    }
}

/**
 * 注册时间
 */
export const registerEvent = () => {
    
    Message.addListener('test', (data) => {
        window.console.log(data);
        return 'test back'
    })
}

export class Message {

    // 监听器
    static _listener: Map<string, Function> = new Map();

    // 注册监听事件
    static addListener(eventName: string, handler: MessageHandler) {
        if (this._listener.has(eventName)) {
            console.error(`${eventName} has register before, register fail`);
            return;
        }
        this._listener.set(eventName, handler);
    }

    /**
     * 移除已注册的监听事件
     * @param eventName 
     */
    static removeListener(eventName: string) {
        if (this._listener.has(eventName)) {
            this._listener.delete(eventName);
        }
    }

    // 开始监听
    static startListen() {
        // @ts-ignore
        astilectron!.onMessage(message => {
            // 事件处理
            let { name, payload } = message;
            if (this._listener.has(name)) {
                // 回调
                let cb = this._listener.get(name) as MessageHandler;
                cb(payload);
            } else {
                console.error(`unreigister event ${name}`);
            }
        });
    }

    /**
     * 发送消息给 go
     * @param message 
     * @param callback 
     * @returns 
     */
    static send(message: MessageData, callback: Function = (message: MessageData) => { }) {

        // @ts-ignore
        if (!astilectron) {
            console.log(`astilectron not exists send message [${message.name}] fial`);
            return;
        }

        // @ts-ignore
        astilectron!.sendMessage(message, callback);
    }

}




