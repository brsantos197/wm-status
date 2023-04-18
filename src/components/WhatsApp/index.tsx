import { QRCodeCanvas } from "qrcode.react";
import colors from 'tailwindcss/colors'
import React from "react";

interface WhatsAppProps {
  qrcode: string
  ready: boolean
  loading: boolean
  disconnected: boolean
}

export const WhatsApp = ({ qrcode, ready, loading, disconnected }: WhatsAppProps) => {
  return (
    <div className="h-screen bg-zinc-50 text-center flex flex-col justify-center items-center gap-4">
      {
        !ready ? (
          <>
            {loading ? (
              <>
                <h1 className="text-lg font-bold text-green-600">{ qrcode ? 'Conectando' : 'Carregando' }</h1>
                <div className="animate-spin rounded-full border-4 border-t-teal-500  w-10 h-10 " ></div>
              </>
            ) :
              null
            }
            {(qrcode && !loading) && !disconnected ? (
              <>
                <h1 className="text-lg font-bold text-green-600">
                  Escaneie o QRCODE abaixo pelo aplicativo do WhatsApp com o seu celular!
                </h1>
                <QRCodeCanvas
                  value={qrcode}
                  size={256}
                  fgColor={colors.teal['500']}
                />
              </>
            ) :
              null
            }
            {
              disconnected ? (
                <h1 className="text-2xl text-green-500">Dispositivo Desconectado!</h1>
              ) : null
            }

          </>
        ) : (
          <h1 className="text-2xl text-green-500">Conectado com sucesso você já pode minimizar essa janela!</h1>
        )
      }

    </div >
  );
}
