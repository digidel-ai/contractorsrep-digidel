import React from 'react';

interface ComingSoonPageProps {
  pageName: string;
}

function ComingSoonPage({ pageName }: ComingSoonPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020203]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 capitalize">
          {pageName}
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Coming Soon
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#00d4ff] mx-auto"></div>
      </div>
    </div>
  );
}

export { ComingSoonPage };
