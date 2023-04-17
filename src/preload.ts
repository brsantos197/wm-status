// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

export const WhatsAppApi = {
  onqrcode: (callback: (event: any, qrcode: string) => void) => ipcRenderer.on('qrcode', callback)
}

contextBridge.exposeInMainWorld('WhatsApp', WhatsAppApi)