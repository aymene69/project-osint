import React from 'react';
import { Terminal } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 bg-slate-900/50 border-t border-white/10">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Guide OSINT</span>
          </div>
          <div className="text-gray-400">
            Projet éducatif sur l'Open Source Intelligence
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;