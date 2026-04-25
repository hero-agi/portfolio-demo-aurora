export function AuroraBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0F0F1A' }}>
      <div
        className="absolute rounded-full blur-[120px] animate-aurora-1"
        style={{
          width: '700px',
          height: '700px',
          background: '#6366F1',
          opacity: 0.2,
          top: '-200px',
          left: '-150px',
        }}
      />
      <div
        className="absolute rounded-full blur-[120px] animate-aurora-2"
        style={{
          width: '650px',
          height: '650px',
          background: '#EC4899',
          opacity: 0.15,
          top: '-100px',
          right: '-150px',
        }}
      />
      <div
        className="absolute rounded-full blur-[120px] animate-aurora-3"
        style={{
          width: '800px',
          height: '800px',
          background: '#06B6D4',
          opacity: 0.12,
          bottom: '-300px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 80px) scale(1.15); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, 120px) scale(1.1); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(calc(-50% + 60px)) scale(1.2); }
        }
        .animate-aurora-1 { animation: aurora-1 15s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-2 18s ease-in-out infinite; }
        .animate-aurora-3 { animation: aurora-3 20s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
