import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { use2FA } from '../shared/hooks/use2FA';
import { toast } from 'sonner';
import { ShieldCheck, Copy, Check, RefreshCw, KeyRound, Smartphone } from 'lucide-react';

const TwoFactorAuth = () => {
  const navigate = useNavigate();
  const { start2FA, verify2FA, isLoading } = use2FA();
  const [qrCode, setQrCode] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [fetchingQR, setFetchingQR] = useState(false);

  const fetchQRCode = async () => {
    setFetchingQR(true);
    try {
      const response = await start2FA();
      if (response && response.qrCode) {
        setQrCode(response.qrCode);
        setSecretKey(response.manualEntryKey || '');
      } else {
        toast.error('No se pudo generar el código QR. Intenta de nuevo.');
      }
    } catch (err) {
      console.error('Error fetching 2FA QR:', err);
    } finally {
      setFetchingQR(false);
    }
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  const copyToClipboard = () => {
    if (!secretKey) return;
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    toast.success('Clave copiada al portapapeles');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleVerification = async () => {
    const cleanCode = verificationCode.trim();
    if (!cleanCode || cleanCode.length !== 6) {
      toast.error('Código incompleto', {
        description: 'Por favor ingresa el código numérico de 6 dígitos de tu app de autenticación.',
      });
      return;
    }

    const response = await verify2FA({ twoFactorCode: cleanCode });
    if (response) {
      toast.success('¡Autenticación en Dos Factores activada con éxito!');
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-8 shadow-2xl backdrop-blur-md">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-inner">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">
            Autenticación en Dos Factores (2FA)
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {step === 1
              ? 'Escanea este código QR con Google Authenticator, Microsoft Authenticator o Authy'
              : 'Ingresa el código temporal de 6 dígitos que muestra tu aplicación'}
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {step === 1 ? (
            <div className="space-y-6">
              {/* Contenedor del Código QR */}
              <div className="flex flex-col items-center justify-center">
                {fetchingQR ? (
                  <div className="flex h-64 w-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-gray-900 text-gray-400">
                    <RefreshCw className="h-8 w-8 animate-spin text-teal-400 mb-3" />
                    <p className="text-sm font-medium">Generando código QR seguro...</p>
                  </div>
                ) : qrCode ? (
                  <div className="rounded-2xl bg-white p-4 shadow-xl border border-gray-200">
                    <img
                      src={qrCode}
                      alt="Código QR 2FA"
                      className="h-56 w-56 object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-64 w-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-4 text-center">
                    <p className="text-sm text-gray-400 mb-3">No se pudo cargar el QR</p>
                    <Button onClick={fetchQRCode} size="sm" variant="outline" className="gap-2">
                      <RefreshCw className="h-4 w-4" /> Reintentar
                    </Button>
                  </div>
                )}
              </div>

              {/* Clave Manual */}
              {secretKey && (
                <div className="rounded-xl border border-gray-800 bg-gray-950/80 p-3.5">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                    <span className="flex items-center gap-1.5 font-medium">
                      <KeyRound className="h-3.5 w-3.5 text-teal-400" /> Clave de configuración manual:
                    </span>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copied ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                  <div className="rounded bg-gray-900 px-3 py-2 text-center font-mono text-sm tracking-wider text-teal-300 select-all border border-gray-800">
                    {secretKey}
                  </div>
                </div>
              )}

              {/* Apps recomendadas */}
              <div className="rounded-xl bg-gray-950/50 border border-gray-800/80 p-3 text-xs text-gray-400 flex items-start gap-2.5">
                <Smartphone className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                <span>
                  Abre tu app autenticadora favorita (<strong>Google Authenticator</strong>, <strong>Authy</strong> o <strong>Microsoft Authenticator</strong>), pulsa <strong>(+)</strong> y selecciona <strong>Escanear código QR</strong>.
                </span>
              </div>

              <Button
                onClick={() => setStep(2)}
                className="w-full h-11 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold"
                disabled={fetchingQR || !qrCode}
              >
                Ya lo escaneé, Continuar →
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="verificationCode"
                  className="block text-sm font-medium text-gray-300 text-center mb-2"
                >
                  Código de 6 dígitos generado por tu app:
                </label>
                <input
                  type="text"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  autoFocus
                  autoComplete="one-time-code"
                  className="block w-full text-center tracking-[0.5em] font-mono text-2xl font-bold rounded-xl border border-gray-700 bg-gray-950 py-3 text-white placeholder-gray-600 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  placeholder="000000"
                />
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleVerification}
                  className="w-full h-11 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold"
                  disabled={isLoading || verificationCode.length !== 6}
                >
                  {isLoading ? 'Verificando...' : 'Activar y Entrar al Banco'}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="w-full text-gray-400 hover:text-white"
                >
                  ← Volver a ver el Código QR
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
