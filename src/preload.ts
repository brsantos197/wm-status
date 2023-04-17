// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

export const WhatsAppApi = {
  onqrcode: (callback: (event: any, qrcode: string) => void) => ipcRenderer.on('qrcode', callback),
  connected: (callback: (event: any, qrcode: string) => void) => ipcRenderer.on('connected', callback),
}

contextBridge.exposeInMainWorld('WhatsApp', WhatsAppApi)

console.log('asdasd');

ipcRenderer.on('log', (event, value) => {
  console.log(value, 'aqui');
})