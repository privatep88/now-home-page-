import React, { useState, useEffect, useRef } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated Background Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle High DPI (Retina) Screens for crisp lines
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Set actual size in memory (scaled to account for extra pixel density)
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(dpr, dpr);

    // Set visible style size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const particles: Particle[] = [];
    // Density calculation based on CSS pixels (width/height)
    const particleCount = Math.min(Math.floor((width * height) / 5000), 300); 
    const connectionDistance = 120;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.6)'; 
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Re-apply High DPI settings on resize
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (username === 'user' && password === 'user') {
        onLogin();
      } else {
        setError('اسم المستخدم أو كلمة المرور غير صحيحة');
        setLoading(false);
      }
    }, 800);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 25).toFixed(2);
    const rotateY = (-(x - centerX) / 25).toFixed(2);

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-[#172133]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#172133]/30 via-transparent to-[#172133]/80 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="mb-10 text-right">
            <h1 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-gray-400 text-sm">مرحباً بك مجدداً في لوحة التحكم</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-gray-400 block text-right">اسم المستخدم</label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#1E293B]/50 border border-slate-700 rounded-lg py-3.5 px-4 pl-10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-right placeholder:text-right"
                  placeholder="أدخل اسم المستخدم"
                />
                <span className="material-icons-outlined absolute left-3 top-3.5 text-gray-500 group-focus-within:text-primary transition-colors">person</span>
                <div className="absolute inset-y-0 right-0 w-1 bg-transparent group-focus-within:bg-primary rounded-r-lg transition-colors"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 block text-right">كلمة المرور</label>
              <div className="relative group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1E293B]/50 border border-slate-700 rounded-lg py-3.5 px-4 pl-10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-right placeholder:text-right"
                  placeholder="أدخل كلمة المرور"
                />
                <span className="material-icons-outlined absolute left-3 top-3.5 text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
                <div className="absolute inset-y-0 right-0 w-1 bg-transparent group-focus-within:bg-primary rounded-r-lg transition-colors"></div>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-xs bg-red-900/20 p-2 rounded border border-red-900/50 flex items-center gap-2">
                <span className="material-icons-outlined text-sm">error_outline</span>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-900/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4 group"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>دخول للنظام</span>
                  <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform rtl:rotate-180">arrow_back</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-auto pt-8 border-t border-white/5 text-center md:text-right">
             <p className="text-[10px] text-gray-500 tracking-wider">SAAHER SMART SERVICES SYSTEM © 2026</p>
          </div>
        </div>

        {/* Right Side: Visuals (Interactive) */}
        <div 
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="w-full md:w-1/2 relative bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center p-8 overflow-hidden group [perspective:1000px]"
          style={{ '--mouse-x': '0px', '--mouse-y': '0px', '--rotate-x': '0deg', '--rotate-y': '0deg' } as React.CSSProperties}
        >
          {/* Islamic Pattern Overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' stroke-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Spotlight Effect */}
          <div 
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
            style={{
              background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%)`
            }}
          />

          {/* Background Gradient Base (Static) */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
          </div>

          {/* 3D Container for Content */}
          <div 
             className="relative z-10 text-center transition-transform duration-100 ease-out [transform-style:preserve-3d]"
             style={{
               transform: 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))'
             }}
          >
            {/* Floating Element - Logo */}
            <div className="[transform:translateZ(50px)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-orange-400 mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)] cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] hover:-translate-y-2 group/icon">
                   <span className="material-icons-outlined text-3xl text-white transition-transform duration-700 ease-in-out group-hover/icon:rotate-[360deg]">memory</span>
                </div>
            </div>

            {/* Main Text */}
            <div className="[transform:translateZ(30px)]">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">المستقبل يبدأ</h2>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">بخدمات ذكية</h2>

                <div className="flex items-center justify-center gap-4 mb-8">
                   <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>

                <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed border-r-2 border-primary pr-4 text-right">
                  منصة ساهر الرقمية: دقة في البيانات، سرعة في الإنجاز، وكفاءة لا حدود لها. نظام متكامل لإدارة الموارد بذكاء اصطناعي.
                </p>
            </div>

            {/* Badges */}
            <div className="flex justify-center gap-3 mt-8 [transform:translateZ(40px)]">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-blue-300 backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors cursor-default">AI Powered</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-blue-300 backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors cursor-default">Secure</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-blue-300 backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors cursor-default">Fast</span>
            </div>
            
            {/* Credits */}
            <div className="[transform:translateZ(20px)]">
                <p className="mt-4 text-[10px] text-blue-200/40 font-light">إعداد وتصميم / خالد الجفري</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;