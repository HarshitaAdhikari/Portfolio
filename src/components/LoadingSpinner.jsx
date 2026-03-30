
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="relative">
        {/* Outer ring – rotating gradient */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-spin-slow" />
        
        {/* Inner solid mask */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
        
        {/* Central core – pulsing glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute w-3 h-3 bg-cyan-400 rounded-full" />
        </div>
        
        {/* Particle dots – optional, adds flair */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150" />
        <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 -left-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  );
}
