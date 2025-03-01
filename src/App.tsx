import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Send as Telegram, 
  MessageCircle as WhatsApp, 
  Ghost as Snapchat,
  Linkedin,
  Twitter,
  Globe,
  MapPin,
  QrCode,
  Share2,
  Download,
  Copy
} from 'lucide-react';

function App() {
  const [copied, setCopied] = useState<string | null>(null);
  
  const profileData = {
    name: "Dt. Eshref Karahoda",
    title: "Special në Protetikë Fikse",
    company: "Blu Dent",
    location: "Prizren, Kosovo",
    about: "Eshref Karahoda ka 7 vite përvojë në fushën e protetikes fikse, duke ofruar zgjidhje të personalizuara dhe cilësi të lartë. Ai përdor teknika moderne për të siguruar rehati dhe funksionalitet maksimal për pacientët e tij.",
    photo: "foto.jpeg",
    contacts: [
      { type: "phone", value: "+383 (46) 105-798", icon: <Phone className="h-5 w-5" /> },
      { type: "email", value: "bluedental10@gmail.com", icon: <Mail className="h-5 w-5" /> },
      { type: "location", value: "Rr. Remzi Ademaj, Prizren Kosova", icon: <MapPin className="h-5 w-5" /> }
    ],
    social: [
      { name: "Instagram", handle: "@bludent04", icon: <Instagram className="h-5 w-5" />, link: "https://www.instagram.com/bludent04/" },
      { name: "WhatsApp", handle: "+383 (46) 105-798", icon: <WhatsApp className="h-5 w-5" />, link: "https://wa.me/38346105798" }
    ]
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-3">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with background pattern */}
        <div className="relative h-32 bg-gradient-to-r from-[#0a2351] to-[#1a3a6c] flex items-center justify-center">
          <div className="absolute w-full h-full opacity-10">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white" 
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* Profile photo that overlaps the header */}
          <div className="absolute -bottom-16 w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
            <img 
              src={profileData.photo} 
              alt={profileData.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Profile info */}
        <div className="pt-20 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{profileData.name}</h1>
          <p className="text-[#0a2351] font-medium">{profileData.title}</p>
          <p className="text-gray-500">{profileData.company}</p>
          <p className="text-gray-500 text-sm flex items-center justify-center mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {profileData.location}
          </p>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>{profileData.about}</p>
          </div>
          
        </div>
        
        {/* Contact info */}
        <div className="mt-8 px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h2>
          <div className="flex-col md:grid-cols-2 gap-4">
            {profileData.contacts.map((contact, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 border my-4 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => copyToClipboard(contact.value, contact.type)}
              >
                <div className="w-10 h-10 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#0a2351]">
                  {contact.icon}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-500 capitalize">{contact.type}</p>
                  <p className="text-gray-800 font-medium truncate">{contact.value}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4 text-gray-400" />
                </div>
                {copied === contact.type && (
                  <div className="absolute right-8 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Social media */}
        <div className="mt-8 px-6 pb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Social Media</h2>
          <div className="flex-col gap-2">
            {profileData.social.map((social, index) => (
              <a href={social.link}>
              <div 
                key={index} 
                className="flex my-2.5 items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => copyToClipboard(social.handle, social.name)}
              >
                <div className="w-10 h-10 p-2.5 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#0a2351]">
                  {social.icon}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-500">{social.name}</p>
                  <p className="text-gray-800 font-medium truncate">{social.handle}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4 text-gray-400" />
                </div>
                {copied === social.name && (
                  <div className="absolute right-8 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </div>
                )}
              </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* NFC indicator */}
        <div className="bg-gray-50 py-4 px-6 flex items-center justify-center border-t border-gray-200">
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
              <path d="M12 12a10 10 0 0 0 10 10V12H12z" />
              <path d="M12 12a10 10 0 0 1-10 10V12h10z" />
              <path d="M12 12a10 10 0 0 1-10-10h10v10z" />
            </svg>
            <span>Tap to share via NFC or scan QR code</span>
          </div>
        </div>
      </div>
      
      {/* Footer with branding */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        <p>Digital NFC Business Card</p>
        <p className="mt-1">Scan with your smartphone to save contact</p>
        <p className="mt-1">by Melih Takyaci</p>
      </div>
    </div>
  );
}

export default App;