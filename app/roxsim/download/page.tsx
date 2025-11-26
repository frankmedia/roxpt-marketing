'use client';

import { useEffect } from 'react';
import { Smartphone } from 'lucide-react';

export default function RoxSimDownload() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = 'https://apps.apple.com/gb/app/roxsim/id6755498664';
    }
    // Android detection
    else if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.roxsims.app';
    }
    // Desktop - show QR codes
    // If desktop, the component will render below
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Smartphone className="w-20 h-20 mx-auto text-[#FFCC00] mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download RoxSIM
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Scan the QR code below to download on your mobile device
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* iOS QR Code */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">iOS</h3>
            <div className="bg-white p-4 rounded-xl inline-block mb-4">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://apps.apple.com/gb/app/roxsim/id6755498664')}`}
                alt="iOS App Store QR Code"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <a 
              href="https://apps.apple.com/gb/app/roxsim/id6755498664"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFCC00] hover:underline block"
            >
              Or click here for App Store
            </a>
          </div>

          {/* Android QR Code */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Android</h3>
            <div className="bg-white p-4 rounded-xl inline-block mb-4">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://play.google.com/store/apps/details?id=com.roxsims.app')}`}
                alt="Google Play QR Code"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <a 
              href="https://play.google.com/store/apps/details?id=com.roxsims.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFCC00] hover:underline block"
            >
              Or click here for Google Play
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          On mobile? You should be redirected automatically.
        </p>
      </div>
    </div>
  );
}

