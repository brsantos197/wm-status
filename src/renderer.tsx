/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import React from 'react';
import { App } from './components/App';
import './index.css';
import { WhatsAppApi } from './preload';

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
export const root = createRoot(domNode);

root.render(<App qrcode='' ready={false} />)

interface ElectronWindow extends Window {
  WhatsApp: typeof WhatsAppApi
}

declare const window: ElectronWindow

window.WhatsApp.onqrcode((event, qrcode: string) => {
  console.log(qrcode);
  root.render(<App qrcode={qrcode} ready={false} />)
})
