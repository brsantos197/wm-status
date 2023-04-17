import { QRCodeCanvas } from "qrcode.react";
import colors from 'tailwindcss/colors'
import React from "react";

interface AppProps {
  qrcode: string;
  ready: boolean
}

export const App = ({ qrcode, ready }: AppProps) => {
  return (
    <div className="h-screen bg-zinc-50 text-center flex flex-col justify-center items-center gap-4">
      {
        !ready ? (
          <>
            <h1 className="text-lg font-bold text-green-600">
              {qrcode ? 'Escaneie o QRCODE abaixo pelo aplicativo do WhatsApp com o seu celular!' : 'Carregando QRCODE'}
            </h1>
            {qrcode ? (
              <QRCodeCanvas
                value={qrcode}
                size={256}
                fgColor={colors.teal['500']}
              />
            ) : (
              <div className="animate-spin rounded-full border-4 border-t-teal-500  w-10 h-10 " ></div>
            )}
          </>
        ) : null
      }

    </div>
  );
}
