import { Socket, io } from "socket.io-client";

type FunctionData = (data: number[]) => void

export default class AppSocket {
  private engine: Socket;

  constructor(url: string) {
    this.engine = io(url, {
      reconnectionDelayMax: 10000,
    });
  }

  public handleDataReception(trigger:string, _handler:FunctionData) {
      const functionData = this.engine.on(trigger, _handler)
      return functionData
  }

  isError() {
    return !this.engine.connected;
  }

  close() {
    this.engine.close();
  }
}
