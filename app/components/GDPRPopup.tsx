'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

export default function GDPRPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      // Show popup after a short delay to ensure page loads
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gdpr-consent', JSON.stringify(allConsent));
    setIsVisible(false);
    
    // Initialize tracking if user accepts
    initializeTracking();
  };

  const handleDeclineAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gdpr-consent', JSON.stringify(minimalConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('gdpr-consent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Initialize tracking based on preferences
    if (preferences.analytics || preferences.marketing) {
      initializeTracking();
    }
  };

  const initializeTracking = () => {
    // Add your tracking scripts here
    // Example: Google Analytics, Facebook Pixel, etc.
    console.log('Tracking initialized based on user consent');
    
    // Example Google Analytics implementation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
        functionality_storage: preferences.functional ? 'granted' : 'denied'
      });
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Can't change necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Popup */}
      <div className="relative w-full max-w-2xl bg-black border border-zinc-800 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFCC00]/20 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
              <p className="text-sm text-gray-400">We respect your privacy</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!showSettings ? (
          /* Simple Accept/Decline View */
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Your data is protected and never shared with third parties</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDeclineAll}
                className="flex-1 px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Decline All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Customize
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-[#FFCC00] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Settings View */
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Cookie Settings</h4>
              <p className="text-gray-400 text-sm mb-6">
                Choose which cookies you want to allow. You can change these settings at any time.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
                <div>
                  <h5 className="font-semibold text-white">Necessary Cookies</h5>
                  <p className="text-sm text-gray-400">Required for the website to function properly</p>
                </div>
                <div className="w-12 h-6 bg-[#FFCC00] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
                <div>
                  <h5 className="font-semibold text-white">Analytics Cookies</h5>
                  <p className="text-sm text-gray-400">Help us understand how visitors interact with our website</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.analytics ? 'bg-[#FFCC00] justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
                <div>
                  <h5 className="font-semibold text-white">Marketing Cookies</h5>
                  <p className="text-sm text-gray-400">Used to deliver personalized advertisements</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.marketing ? 'bg-[#FFCC00] justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
                <div>
                  <h5 className="font-semibold text-white">Functional Cookies</h5>
                  <p className="text-sm text-gray-400">Enable enhanced functionality and personalization</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('functional')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.functional ? 'bg-[#FFCC00] justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-[#FFCC00] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
