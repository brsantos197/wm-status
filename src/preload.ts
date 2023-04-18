// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

export const WhatsAppApi = {
  onqrcode: (callback: (event: any, qrcode: string) => void) => ipcRenderer.on('onqrcode', callback),
  onconnected: (callback: (event: any, value: boolean) => void) => ipcRenderer.on('onconnected', callback),
  ondisconnected: (callback: (event: any, value: boolean) => void) => ipcRenderer.on('ondisconnected', callback),
}

contextBridge.exposeInMainWorld('WhatsApp', WhatsAppApi)

ipcRenderer.on('log', (event, value) => {
  console.log(value, 'aqui');
})