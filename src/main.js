import './style.css'

const state = {
  hero: {
    headline: 'Build Faster with FireFks',
    subheadline: 'The ultimate tool for generating stunning websites in seconds.',
    ctaText: 'Get Started',
    ctaLink: '#',
    themeColor: '#4f46e5', // Indigo-600
    template: 'nova',
    align: 'center',
    seoTitle: 'Nova | Premium Platform',
    seoDesc: 'The ultimate creative platform for modern teams.',
    buttonStyle: 'rounded',
    fontPairing: 'sans',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80', // Tech default
    showNav: true,
    feature1Title: 'Speed',
    feature1Desc: 'Optimized for speed. Loads in under 200ms.',
    feature2Title: 'Security',
    feature2Desc: 'State-of-the-art encryption.',
    feature3Title: 'Analytics',
    feature3Desc: 'Real-time data visualization.',
    testimonial1Name: 'Sarah Jenkins',
    testimonial1Role: 'Head of Design',
    testimonial1Text: 'Nova transformed our workflow entirely.',
    footerText: '© 2025 Nova Inc. All rights reserved.'
  }
};

document.querySelector('#app').innerHTML = `
  <aside class="editor-sidebar">
    <div class="brand-header">
      <div class="brand-logo">🔥 FireFks | Gen</div>
    </div>
    <div class="editor-controls">
      <div class="control-group">
        <label>Overview</label>
        <p style="font-size:0.8rem; color:#94a3b8; line-height:1.4;">
          Welcome to Project 1 (Week 1). This tool allows you to prototype landing pages for the CAPACITI collaboration.
        </p>
      </div>

      <!-- AI GENERATION SECTION -->
      <div class="control-group" style="background: linear-gradient(135deg, #4f46e5 0%, #a855f7 100%); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
        <label style="color: white; display: flex; align-items: center; gap: 8px; font-weight: bold; margin-bottom: 8px;">
           ✨ AI Magic Generator
        </label>
        <textarea id="aiPrompt" placeholder="Describe your dream site (e.g., 'A cyberpunk game studio with neon green accents')..." style="width: 100%; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.3); color: white; margin-bottom: 12px; min-height: 80px; padding: 10px; border-radius: 8px; font-family: inherit; font-size: 0.9rem; resize: vertical;"></textarea>
        <button id="aiBtn" style="width: 100%; background: white; color: #6366f1; border: none; font-weight: 800; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; display: flex; align-items: center; justify-content: center; gap: 6px;">
           <span>⚡</span> Generate Website
        </button>
      </div>

      <div class="control-group">
        <label>Hero Headline</label>
        <input type="text" id="inputHeadline" value="${state.hero.headline}">
      </div>
      <div class="control-group">
        <label>Design Template</label>
        <select id="inputTemplate">
          <option value="nova">Nova (Premium Tailwind)</option>
          <option value="adlendors">Adlendors (Agency)</option>
          <option value="design">Design (Portfolio)</option>
          <option value="tailwind">Tailwind (Dev Tool)</option>
          <option value="neon">Neon Cyberpunk</option>
          <option value="corporate">Corporate Pro</option>
          <option value="modern">Modern Quartz</option>
          <option value="saas">SaaS Dark</option>
          <option value="minimal">Minimal White</option>
        </select>
      </div>

      <div class="control-group">
        <label>Visual Theme (Stock Assets)</label>
        <select id="inputImage">
          <option value="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80">💻 Technology (Default)</option>
          <option value="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80">🏢 Corporate Office</option>
          <option value="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80">🎮 Gaming / Neon</option>
          <option value="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80">👗 Fashion / Luxury</option>
          <option value="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80">🏋️ Fitness / Gym</option>
          <option value="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80">🍕 Food / Dining</option>
          <option value="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80">🏙️ City / Urban</option>
          <option value="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80">🌿 Nature / Travel</option>
          <option value="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2614/1080p.mp4">🎥 Video: Typing (Tech)</option>
          <option value="https://cdn.coverr.co/videos/coverr-walking-in-a-city-at-night-4546/1080p.mp4">🎥 Video: Night City (Urban)</option>
        </select>
      </div>

      <div class="control-group">
        <label>Subheadline</label>
        <textarea id="inputSub">${state.hero.subheadline}</textarea>
      </div>
      <div class="control-group">
        <label>CTA Button Text</label>
        <input type="text" id="inputCTA" value="${state.hero.ctaText}">
      </div>
      <div class="control-group">
        <label>Primary Theme Color</label>
        <input type="color" id="inputColor" style="height:50px; cursor:pointer;" value="${state.hero.themeColor}">
      </div>
      <div class="control-group">
        <label>Hero Alignment</label>
        <select id="inputAlign">
          <option value="center">Center</option>
          <option value="left">Left Aligned</option>
        </select>
      </div>
      <div class="control-group">
        <label>Hero Alignment</label>
        <select id="inputAlign">
          <option value="center">Center</option>
          <option value="left">Left Aligned</option>
        </select>
      </div>
      <div class="control-group">
        <label>Typography</label>
        <select id="inputFont">
          <option value="sans">Modern Sans (Inter/Plus Jakarta)</option>
          <option value="serif">Elegant Serif (Playfair)</option>
          <option value="mono">Tech Mono (JetBrains)</option>
        </select>
      </div>
      <div class="control-group">
        <label>Button Style</label>
        <select id="inputBtnStyle">
          <option value="rounded">Rounded (Standard)</option>
          <option value="pill">Pill (Full Radius)</option>
          <option value="sharp">Sharp (Square)</option>
          <option value="ghost">Ghost (Minimal)</option>
        </select>
      </div>
      <div class="control-group">
        <label>Show Navigation</label>
        <select id="inputNav">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <h3 style="margin-top:1.5rem; border-top:1px solid #ffffff1a; padding-top:1rem; font-size:0.9rem; color:var(--primary);">⚙️ Page Settings (SEO)</h3>
      <div class="control-group">
        <label>Page Title</label>
        <input type="text" id="inputSeoTitle" value="${state.hero.seoTitle}">
      </div>
      
      <h3 style="margin-top:1.5rem; border-top:1px solid #ffffff1a; padding-top:1rem; font-size:0.9rem; color:var(--primary);">✨ Feature Grid</h3>
      <div class="control-group">
        <label>Feature 1</label>
        <input type="text" id="inputF1T" value="${state.hero.feature1Title}" placeholder="Title">
        <textarea id="inputF1D" style="min-height:50px">${state.hero.feature1Desc}</textarea>
      </div>
      <div class="control-group">
        <label>Feature 2</label>
        <input type="text" id="inputF2T" value="${state.hero.feature2Title}" placeholder="Title">
        <textarea id="inputF2D" style="min-height:50px">${state.hero.feature2Desc}</textarea>
      </div>
      <div class="control-group">
        <label>Feature 3</label>
        <input type="text" id="inputF3T" value="${state.hero.feature3Title}" placeholder="Title">
        <textarea id="inputF3D" style="min-height:50px">${state.hero.feature3Desc}</textarea>
      </div>

      <h3 style="margin-top:1.5rem; border-top:1px solid #ffffff1a; padding-top:1rem; font-size:0.9rem; color:var(--primary);">💬 Testimonials</h3>
      <div class="control-group">
        <label>Testimonial Name</label>
        <input type="text" id="inputT1Name" value="${state.hero.testimonial1Name}">
      </div>
      <div class="control-group">
        <label>Testimonial Role</label>
        <input type="text" id="inputT1Role" value="${state.hero.testimonial1Role}">
      </div>
      <div class="control-group">
        <label>Testimonial Text</label>
        <textarea id="inputT1Text" style="min-height:60px">${state.hero.testimonial1Text}</textarea>
      </div>

      <h3 style="margin-top:1.5rem; border-top:1px solid #ffffff1a; padding-top:1rem; font-size:0.9rem; color:var(--primary);">🦶 Footer</h3>
      <div class="control-group">
        <label>Copyright Text</label>
        <input type="text" id="inputFooter" value="${state.hero.footerText}">
      </div>
      <div style="height: 50px;"></div>
    </div>
  </aside>

  <main class="preview-container">
    <div class="preview-toolbar">
      <div class="toolbar-title">Desktop Preview</div>
      <button id="exportBtn" class="action-btn">⬇ Export HTML</button>
    </div>
    <div class="iframe-wrapper">
      <iframe id="previewFrame"></iframe>
    </div>
  </main>
`;

const inputs = {
  headline: document.getElementById('inputHeadline'),
  sub: document.getElementById('inputSub'),
  cta: document.getElementById('inputCTA'),
  template: document.getElementById('inputTemplate'),
  color: document.getElementById('inputColor'),
  align: document.getElementById('inputAlign'),
  font: document.getElementById('inputFont'),
  btnStyle: document.getElementById('inputBtnStyle'),
  image: document.getElementById('inputImage'),
  nav: document.getElementById('inputNav'),
  seoTitle: document.getElementById('inputSeoTitle'),
  f1t: document.getElementById('inputF1T'),
  f1d: document.getElementById('inputF1D'),
  f2t: document.getElementById('inputF2T'),
  f2d: document.getElementById('inputF2D'),
  f3t: document.getElementById('inputF3T'),
  f3d: document.getElementById('inputF3D'),
  t1n: document.getElementById('inputT1Name'),
  t1r: document.getElementById('inputT1Role'),
  t1t: document.getElementById('inputT1Text'),
  foot: document.getElementById('inputFooter')
};

const updatePreview = () => {
  const frame = document.getElementById('previewFrame');
  const doc = frame.contentDocument || frame.contentWindow.document;
  

  
  /* DYNAMIC ASSETS & STYLES */
  const btnRadius = inputs.btnStyle.value === 'pill' ? 'rounded-full' : inputs.btnStyle.value === 'sharp' ? 'rounded-none' : 'rounded-xl';
  const fontFamily = inputs.font.value === 'serif' ? 'font-serif' : inputs.font.value === 'mono' ? 'font-mono' : 'font-sans';
  
  // Dynamic Media Helper
  const isVideo = inputs.image.value.endsWith('.mp4');
  const mediaUrl = inputs.image.value;
  const mediaContent = isVideo 
    ? `<video src="${mediaUrl}" autoplay loop muted playsinline class="w-full h-full object-cover"></video>`
    : `<img src="${mediaUrl}" class="w-full h-full object-cover" alt="Hero Background">`;

  const fontLink = inputs.font.value === 'serif' 
    ? '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap" rel="stylesheet">'
    : inputs.font.value === 'mono'
    ? '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">'
    : '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">';

  // Helper for font class
  const getFont = (type) => {
    if (inputs.font.value === 'serif') return type === 'head' ? 'font-serif' : 'font-sans';
    if (inputs.font.value === 'mono') return 'font-mono';
    return 'font-sans';
  }

  // NOVA TEMPLATE (Premium)
  if (inputs.template.value === 'nova') {
    const content = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <title>${inputs.seoTitle.value}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    ${fontLink}
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: { brand: '${inputs.color.value}' },
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
              serif: ['"Playfair Display"', 'serif'],
              mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
              'hero-glow': 'radial-gradient(circle at 50% 50%, ${inputs.color.value}40 0%, transparent 70%)',
            }
          }
        }
      }
    </script>
    <style>
      .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
      .reveal.active { opacity: 1; transform: translateY(0); }
      .glass-nav {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .hero-mask {
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      }
    </style>
</head>
<body class="bg-[#050505] text-white min-h-screen overflow-x-hidden ${getFont('body')}">

    <!-- Floating Nav -->
    <div class="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center">
      <nav class="glass-nav rounded-full px-8 py-4 flex items-center justify-between w-full max-w-5xl shadow-2xl">
          <a href="#" class="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-brand"></span> FireFks
          </a>
          
          <div class="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <a href="#features" class="hover:text-white transition">Features</a>
              <a href="#about" class="hover:text-white transition">About</a>
              <a href="#product" class="hover:text-white transition">Product</a>
              <a href="#contact" class="hover:text-white transition">Contact</a>
          </div>

          <a href="#contact" class="bg-brand hover:opacity-90 text-white px-5 py-2 ${btnRadius} text-sm font-bold transition shadow-lg shadow-brand/20">
            ${inputs.cta.value}
          </a>
      </nav>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-2/3 h-full bg-hero-glow blur-3xl opacity-50 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-2/3 bg-purple-900/20 blur-3xl rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
           
           <!-- Text Content -->
           <div class="reveal">
              <div class="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wide mb-8 backdrop-blur text-brand">
                 ✨ NEW TEMPLATE RELEASE
              </div>
              <h1 class="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                  ${inputs.headline.value}
              </h1>
              <p class="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                  ${inputs.sub.value}
              </p>
              <div class="flex flex-wrap gap-4">
                  <a href="#contact" class="bg-white text-black px-8 py-4 ${btnRadius} font-bold hover:bg-slate-200 transition inline-flex items-center gap-2">
                    Get Started <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="#features" class="px-8 py-4 ${btnRadius} font-bold text-white border border-white/20 hover:bg-white/5 transition">
                    View Showreel
                  </a>
              </div>
           </div>

           <!-- Visual Content -->
           <div class="relative lg:h-[800px] flex items-center justify-center reveal delay-200">
              <!-- Abstract Shape (Simulated with Hero Image) -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none">
                 <img src="${mediaUrl}" class="w-full h-full object-contain opacity-80 mix-blend-screen animate-pulse duration-[5000ms]" alt="Abstract Flow">
              </div>
              
              <!-- Floating Slider Cards -->
              <div class="relative w-full aspect-square max-w-md">
                 <div class="absolute bottom-0 right-0 w-64 h-80 bg-slate-800/80 backdrop-blur border border-white/10 rounded-3xl p-4 transform rotate-6 shadow-2xl hover:rotate-0 transition duration-500 z-20">
                    <div class="w-full h-full bg-slate-900 rounded-2xl overflow-hidden relative group">
                       ${mediaContent}
                       <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                          <span class="font-bold">Analytics Preview</span>
                       </div>
                    </div>
                 </div>
                 <div class="absolute bottom-12 right-12 w-64 h-80 bg-slate-800/80 backdrop-blur border border-white/10 rounded-3xl p-4 transform -rotate-3 hover:rotate-0 transition duration-500 z-10">
                    <div class="w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
                       ${isVideo ? '<div class="w-full h-full bg-slate-800"></div>' : `<img src="${mediaUrl}" class="w-full h-full object-cover grayscale opacity-50">`}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
           <span class="text-xs uppercase tracking-widest">Scroll</span>
           <div class="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
    </section>

    <!-- Content Sections (Preserved) -->
    <section id="features" class="py-32 px-6 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 max-w-3xl mx-auto reveal">
           <h2 class="text-4xl font-bold mb-6">Why designers switch to Nova</h2>
           <p class="text-slate-400 text-lg">Experience the future of digital creation with tools that adapt to your workflow, not the other way around.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${[1, 2, 3].map(i => `
          <div class="p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition duration-300 border border-white/5 group reveal">
            <div class="w-14 h-14 bg-gradient-to-br from-brand to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand/20 group-hover:scale-110 transition">
               <span class="text-2xl font-bold text-white">${i}</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 ${getFont('head')}">${inputs['f'+i+'t'].value}</h3>
            <p class="text-slate-400 leading-relaxed">${inputs['f'+i+'d'].value}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <footer class="py-20 border-t border-white/10 text-center">
      <div class="text-2xl font-bold mb-8">FireFks</div>
      <div class="flex justify-center gap-8 mb-8 text-sm font-medium text-slate-400">
         <a href="#" class="hover:text-white">Privacy</a>
         <a href="#" class="hover:text-white">Terms</a>
         <a href="#" class="hover:text-white">Twitter</a>
         <a href="#" class="hover:text-white">GitHub</a>
      </div>
      <p class="text-sm opacity-50">${inputs.foot.value}</p>
    </footer>

    <script>
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => e.isIntersecting && e.target.classList.add('active'));
      });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    </script>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }

  // ADLENDORS (Creative/Agency)
  if (inputs.template.value === 'adlendors') {
    const content = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <title>${inputs.seoTitle.value}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Inter', sans-serif; background: #fffcf8; color: #1c1917; }
      h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }
      .marquee { white-space: nowrap; overflow: hidden; }
      .marquee-content { display: inline-block; animation: scroll 20s linear infinite; }
      @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    </style>
</head>
<body class="selection:bg-orange-200">
    <nav class="fixed w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
       <div class="text-2xl font-bold italic serif">Adlen.</div>
       <a href="#contact" class="border border-white/40 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Get in touch</a>
    </nav>

    <section class="h-screen flex flex-col justify-center px-6 pt-20">
       <div class="max-w-7xl mx-auto w-full">
         <p class="text-lg md:text-xl mb-4 text-orange-600 font-medium">EST. 2025</p>
         <h1 class="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-12">
            ${inputs.headline.value}<span class="text-orange-500">.</span>
         </h1>
         <div class="flex flex-col md:flex-row gap-8 items-start border-t border-black/10 pt-8">
            <p class="max-w-md text-xl text-neutral-600 leading-relaxed">${inputs.sub.value}</p>
            <a href="#work" style="background: ${inputs.color.value}" class="ml-auto px-10 py-12 rounded-full text-white font-bold text-xl hover:scale-110 transition duration-500 shadow-xl">
               Explore
            </a>
         </div>
       </div>
    </section>

    <div class="bg-black text-white py-4 overflow-hidden">
       <div class="marquee-content text-4xl font-bold uppercase tracking-wider opacity-50">
          Strategy • Branding • Digital • Future • Identity • Strategy • Branding • Digital • Future • Identity •
       </div>
    </div>

    <section id="work" class="py-32 px-6">
       <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-24">
          <div class="group cursor-pointer">
             <div class="aspect-[0.8] overflow-hidden mb-6">
                ${mediaContent}
             </div>
             <h3 class="text-4xl font-bold mb-2">${inputs.f1t.value}</h3>
             <p class="text-neutral-500 border-b border-black/10 pb-4 inline-block">UI/UX Design</p>
          </div>
          <div class="group cursor-pointer md:mt-32">
             <div class="aspect-[0.8] overflow-hidden mb-6">
                ${mediaContent}
             </div>
             <h3 class="text-4xl font-bold mb-2">${inputs.f2t.value}</h3>
             <p class="text-neutral-500 border-b border-black/10 pb-4 inline-block">Development</p>
          </div>
       </div>
    </section>

    <footer id="contact" class="bg-neutral-900 text-white py-32 px-6 text-center">
       <h2 class="text-5xl md:text-8xl font-bold mb-12 serif tracking-tight hover:text-orange-500 transition cursor-pointer">Let's Talk.</h2>
       <div class="flex justify-center gap-8 text-neutral-500">
          <a href="#" class="hover:text-white transition">Instagram</a>
          <a href="#" class="hover:text-white transition">LinkedIn</a>
          <a href="#" class="hover:text-white transition">Twitter</a>
       </div>
       <p class="mt-12 text-sm text-neutral-700">${inputs.foot.value}</p>
    </footer>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }

  // TAILWIND (Tech/SaaS)
  if (inputs.template.value === 'tailwind') {
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${inputs.seoTitle.value}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Inter', sans-serif; background: #0b1120; color: #fff; }
      .mono { font-family: 'JetBrains Mono', monospace; }
      .glow-text { text-shadow: 0 0 30px ${inputs.color.value}; }
    </style>
</head>
<body class="selection:bg-indigo-500/30">
    <nav class="border-b border-slate-800 bg-slate-900/50 backdrop-blur fixed w-full z-50">
       <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2">
             <div style="background: ${inputs.color.value}" class="w-6 h-6 rounded"></div>
             <span class="font-bold tracking-tight">TechStack</span>
          </div>
          <a href="#" style="color: ${inputs.color.value}" class="font-mono text-sm hover:underline">Documentation -></a>
       </div>
    </nav>

    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
       <!-- Grid Background -->
       <div class="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20"></div>
       <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black, transparent 80%);"></div>
       
       <div class="relative z-10 max-w-4xl">
          <div class="inline-block border border-slate-700 bg-slate-800/50 rounded-full px-4 py-1 text-sm font-medium mb-8 text-slate-300">
             <span class="w-2 h-2 rounded-full inline-block mr-2 animate-pulse" style="background: ${inputs.color.value}"></span> 
             v2.0 is now available
          </div>
          <h1 class="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
             ${inputs.headline.value}
          </h1>
          <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">${inputs.sub.value}</p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
             <button style="background: ${inputs.color.value}" class="px-8 py-3 rounded-md font-bold hover:brightness-110 transition shadow-[0_0_20px_rgba(0,0,0,0.5)] shadow-${inputs.color.value}/50">
                ${inputs.cta.value}
             </button>
             <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md opacity-75 group-hover:opacity-100 transition blur"></div>
                <button class="relative px-8 py-3 bg-slate-900 rounded-md font-bold flex items-center gap-2">
                   <span class="mono">npm i firefks</span>
                   <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </button>
             </div>
          </div>
       </div>
    </section>

    <section class="py-24 border-t border-slate-800 bg-slate-900/50">
       <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          ${[1, 2, 3].map(i => `
          <div class="p-6 border border-slate-800 bg-slate-900 rounded-xl hover:border-slate-600 transition group">
             <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition" style="background: ${inputs.color.value}20; color: ${inputs.color.value}">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <h3 class="font-bold text-lg mb-2 mono">${inputs['f'+i+'t'].value}</h3>
             <p class="text-slate-400 text-sm leading-relaxed">${inputs['f'+i+'d'].value}</p>
          </div>`).join('')}
       </div>
    </section>

    <footer class="py-12 border-t border-slate-800 text-center text-slate-600 text-xs mono">
       ${inputs.foot.value}
    </footer>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }
 
  // DESIGN (Minimalist/Portfolio)
  if (inputs.template.value === 'design') {
     const content = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>${inputs.seoTitle.value}</title>
   <script src="https://cdn.tailwindcss.com"></script>
   <style>
     @import url('https://fonts.googleapis.com/css2?family=Helvetica+Now:wght@100;400;900&display=swap');
     body { font-family: 'Arial', sans-serif; background: #f3f3f3; color: #000; }
     .brutal-border { border: 2px solid black; box-shadow: 4px 4px 0px black; }
     .brutal-btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px black; }
     .brutal-btn:active { transform: translate(0, 0); box-shadow: 0 0 0 black; }
   </style>
</head>
<body class="p-4 md:p-8">
   <div class="border-2 border-black bg-white min-h-[calc(100vh-4rem)] relative">
      <nav class="flex justify-between p-6 border-b-2 border-black items-center">
         <div class="w-8 h-8 bg-black rounded-full"></div>
         <div class="space-x-4 font-bold uppercase text-sm hidden md:block">
            <a href="#" class="hover:underline">Index</a>
            <a href="#" class="hover:underline">Archive</a>
            <a href="#" class="hover:underline">Info</a>
         </div>
         <button class="bg-black text-white px-6 py-2 font-bold uppercase text-xs hover:bg-neutral-800 transition">Menu</button>
      </nav>

      <main class="grid md:grid-cols-12 min-h-[80vh]">
         <div class="md:col-span-7 flex flex-col justify-center p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <h1 class="text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-8 tracking-tighter">
               ${inputs.headline.value}
            </h1>
            <p class="text-xl font-medium max-w-md mb-8 space-y-4">
               ${inputs.sub.value}
            </p>
            <div class="flex gap-4">
               <button class="bg-[${inputs.color.value}] border-2 border-black px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                  ${inputs.cta.value}
               </button>
            </div>
         </div>
         <div class="md:col-span-5 bg-[url(./assets/hero-tech.png)] bg-cover bg-center grayscale contrast-125 border-black/10">
            <div class="h-full w-full bg-black/10 backdrop-blur-[2px]"></div>
         </div>
      </main>
      
      <div class="grid grid-cols-3 text-center divide-x-2 divide-black border-t-2 border-black bg-amber-200">
         <div class="py-4 font-bold border-black hover:bg-white transition cursor-pointer">${inputs.f1t.value}</div>
         <div class="py-4 font-bold border-black hover:bg-white transition cursor-pointer">${inputs.f2t.value}</div>
         <div class="py-4 font-bold border-black hover:bg-white transition cursor-pointer">${inputs.f3t.value}</div>
      </div>
   </div>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }


  // NEON CYBERPUNK
  if (inputs.template.value === 'neon') {
     const content = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>${inputs.seoTitle.value}</title>
   <script src="https://cdn.tailwindcss.com"></script>
   <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600&display=swap" rel="stylesheet">
   <style>
     body { font-family: 'Rajdhani', sans-serif; background: #050505; color: #fff; }
     h1, h2, h3, .cyber-font { font-family: 'Orbitron', sans-serif; }
     .neon-text { text-shadow: 0 0 10px ${inputs.color.value}, 0 0 20px ${inputs.color.value}, 0 0 40px ${inputs.color.value}; }
     .neon-border { box-shadow: 0 0 10px ${inputs.color.value}, inset 0 0 10px ${inputs.color.value}; border: 1px solid ${inputs.color.value}; }
     .crt::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 2;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
     }
     .clip-path-slant { clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%); }
   </style>
</head>
<body class="crt overflow-x-hidden min-h-screen">
   <div class="fixed top-0 w-full h-1 bg-gradient-to-r from-transparent via-${inputs.color.value}-500 to-transparent z-50"></div>
   
   <nav class="flex justify-between items-center p-6 border-b border-white/10 relative z-10 backdrop-blur-sm">
      <div class="text-3xl font-bold cyber-font tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
         CYBER<span style="color: ${inputs.color.value}">FKS</span>
      </div>
      <div class="hidden md:flex gap-8 text-xl font-bold tracking-widest uppercase text-gray-500">
         <a href="#" class="hover:text-white hover:neon-text transition">Net</a>
         <a href="#" class="hover:text-white hover:neon-text transition">Data</a>
         <a href="#" class="hover:text-white hover:neon-text transition">Core</a>
      </div>
      <button class="neon-border bg-black/50 px-8 py-2 font-bold uppercase tracking-widest hover:bg-[${inputs.color.value}] hover:text-black transition duration-300 clip-path-slant">
         ${inputs.cta.value}
      </button>
   </nav>

   <section class="min-h-screen flex items-center px-6 relative">
      <div class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-color-dodge" style="background-image: url('${mediaUrl}')"></div>
      <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 relative z-10">
         <div>
            <div class="border-l-4 pl-6 mb-8" style="border-color: ${inputs.color.value}">
               <p class="text-xl tracking-[0.3em] text-gray-400 mb-2">SYSTEM.INIT</p>
               <h1 class="text-6xl md:text-8xl font-black uppercase leading-none mb-6 cyber-font glitch-effect">
                  ${inputs.headline.value}
               </h1>
            </div>
            <p class="text-2xl text-gray-300 mb-12 border border-white/10 bg-black/50 p-6 backdrop-blur-md max-w-xl">
               ${inputs.sub.value} >>_
            </p>
            <div class="flex flex-col sm:flex-row gap-6">
               <button style="background: ${inputs.color.value}; box-shadow: 0 0 30px ${inputs.color.value}80" class="px-10 py-4 text-black font-black text-xl uppercase tracking-widest hover:scale-105 transition clip-path-slant">
                  Initialize
               </button>
               <button class="px-10 py-4 border border-white/30 text-white font-bold text-xl uppercase tracking-widest hover:bg-white/10 transition clip-path-slant">
                  Read_Docs
               </button>
            </div>
         </div>
         <div class="hidden md:flex items-center justify-center">
            <div class="relative w-80 h-80">
               <div class="absolute inset-0 border-2 border-dashed rounded-full animate-spin-slow" style="border-color: ${inputs.color.value}40"></div>
               <div class="absolute inset-4 border-2 border-dotted rounded-full animate-spin-reverse-slower" style="border-color: ${inputs.color.value}40"></div>
               <div class="absolute inset-0 bg-gradient-to-tr from-${inputs.color.value}/20 to-transparent rounded-full blur-xl"></div>
            </div>
         </div>
      </div>
   </section>

   <section class="py-24 border-t border-white/10 bg-black/80">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
         ${[1, 2, 3].map(i => `
         <div class="bg-gray-900/50 p-8 border border-white/5 hover:border-[${inputs.color.value}] transition duration-500 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-[${inputs.color.value}]/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            <h3 class="text-3xl font-bold mb-4 cyber-font text-white group-hover:neon-text transition">0${i} ${inputs['f'+i+'t'].value}</h3>
            <p class="text-gray-400 text-lg">${inputs['f'+i+'d'].value}</p>
         </div>`).join('')}
      </div>
   </section>

   <footer class="py-12 border-t border-white/10 bg-black text-center text-gray-500 tracking-widest uppercase text-xs">
      // ${inputs.foot.value} // END_OF_LINE
   </footer>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }

  // CORPORATE PRO
  if (inputs.template.value === 'corporate') {
     const content = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>${inputs.seoTitle.value}</title>
   <script src="https://cdn.tailwindcss.com"></script>
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
   <style>
     body { font-family: 'Roboto', sans-serif; color: #1f2937; }
     .hero-pattern { background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 32px 32px; }
   </style>
</head>
<body class="bg-gray-50">
   <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
         <div class="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <div class="w-8 h-8 rounded bg-[${inputs.color.value}]"></div>
            FireFks
         </div>
         <div class="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" class="hover:text-${inputs.color.value}-600 transition">Solutions</a>
            <a href="#" class="hover:text-${inputs.color.value}-600 transition">Enterprise</a>
            <a href="#" class="hover:text-${inputs.color.value}-600 transition">Pricing</a>
            <a href="#" class="hover:text-${inputs.color.value}-600 transition">Resources</a>
         </div>
         <div class="flex gap-4">
            <button class="text-gray-600 font-medium hover:text-gray-900">Log in</button>
            <button style="background: ${inputs.color.value}" class="text-white px-5 py-2.5 rounded shadow-sm hover:opacity-90 transition font-medium">
               ${inputs.cta.value}
            </button>
         </div>
      </div>
   </nav>

   <section class="hero-pattern py-20 px-6 lg:py-32">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <h1 class="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
               ${inputs.headline.value}
            </h1>
            <p class="text-xl text-gray-600 mb-10 leading-relaxed">
               ${inputs.sub.value}
            </p>
            <div class="flex gap-4">
               <button style="background: ${inputs.color.value}" class="text-white px-8 py-4 rounded text-lg font-medium shadow hover:opacity-90 transition">
                  Start Free Trial
               </button>
               <button class="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded text-lg font-medium hover:bg-gray-50 transition">
                  Contact Sales
               </button>
            </div>
            <div class="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium">
               <span class="flex items-center gap-2">✓ SOC2 Certified</span>
               <span class="flex items-center gap-2">✓ 99.9% Uptime</span>
               <span class="flex items-center gap-2">✓ 24/7 Support</span>
            </div>
         </div>
         <div class="relative">
            ${mediaContent} <!-- Corporate Image -->
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100 max-w-xs hidden lg:block">
               <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                  <div>
                     <div class="font-bold text-gray-900">Efficiency Up</div>
                     <div class="text-xs text-gray-500">+240% this week</div>
                  </div>
               </div>
               <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 w-3/4"></div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section class="py-24 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
         <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Enterprise-grade features</h2>
            <p class="text-gray-600 text-lg">Everything you need to scale your business securely.</p>
         </div>
         <div class="grid md:grid-cols-3 gap-12">
            ${[
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', bg: 'bg-blue-50', text: 'text-blue-600' },
              { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', bg: 'bg-indigo-50', text: 'text-indigo-600' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6', bg: 'bg-teal-50', text: 'text-teal-600' }
            ].map((style, i) => `
            <div class="flex gap-4 items-start">
               <div class="w-12 h-12 rounded-lg ${style.bg} ${style.text} flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${style.icon}"></path></svg>
               </div>
               <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">${inputs['f'+(i+1)+'t'].value}</h3>
                  <p class="text-gray-600 leading-relaxed">${inputs['f'+(i+1)+'d'].value}</p>
               </div>
            </div>
            `).join('')}
         </div>
      </div>
   </section>

   <footer class="bg-gray-50 py-12 border-t border-gray-200 text-center text-sm text-gray-500">
      ${inputs.foot.value}
   </footer>
</body>
</html>`;
    doc.open(); doc.write(content); doc.close(); return;
  }

  // --- EXISTING TEMPLATES FALLBACK ---
  
  const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${inputs.seoTitle.value}</title>
      <style>
        body { margin: 0; font-family: 'Segoe UI', sans-serif; background: #fff; color: #333; overflow-x: hidden; }
        
        /* THEMES */
        ${inputs.template.value === 'saas' ? `
          body { background: #0f172a; color: #e2e8f0; font-family: 'Inter', sans-serif; }
          nav { background: rgba(15, 23, 42, 0.9) !important; border-bottom: 1px solid #1e293b; }
          .nav-logo { color: white !important; }
          .nav-link { color: #94a3b8 !important; } .nav-link:hover { color: white !important; }
          .hero { background: radial-gradient(circle at top right, ${inputs.color.value}20, transparent), #0f172a !important; text-align: left !important; align-items: flex-start !important; }
          h1 { color: white !important; } p { color: #cbd5e1 !important; }
          .feat-card, .testimonial { background: #1e293b !important; border: 1px solid #334155 !important; }
          .feat-title, .test-author { color: white !important; }
          .feat-desc, .test-text { color: #94a3b8 !important; }
          .badge { background: ${inputs.color.value} !important; color: white !important; }
        ` : ''}

        ${inputs.template.value === 'minimal' ? `
          body { font-family: 'Courier New', monospace; background: #fafafa; }
          nav { border-bottom: 2px solid black; background: white !important; }
          .btn { border-radius: 4px !important; box-shadow: none !important; border: 2px solid black; background: transparent !important; color: black !important; }
          .btn:hover { background: black !important; color: white !important; }
          .hero { background: white !important; padding-top: 10rem !important; }
          .badge { background: black !important; color: white !important; border-radius: 4px !important; }
          .feat-card { border: 2px solid black !important; border-radius: 0 !important; box-shadow: 4px 4px 0 black !important; }
          .feat-card:hover { transform: translate(-2px, -2px) !important; box-shadow: 6px 6px 0 black !important; }
        ` : ''}

        /* Navigation */
        nav { 
          padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; 
          position: fixed; width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); z-index: 100;
        }
        .nav-logo { font-weight: 800; font-size: 1.5rem; color: #111; text-decoration: none; }
        .nav-link { color: #555; text-decoration: none; margin-left: 1.5rem; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: ${inputs.color.value}; }

        /* Hero */
        .hero { 
          background: linear-gradient(135deg, ${inputs.color.value}10 0%, #fff 100%);
          padding: 8rem 2rem 4rem 2rem; 
          text-align: ${inputs.align.value}; 
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: ${inputs.align.value === 'center' ? 'center' : 'flex-start'};
        }
        h1 { font-size: 3.5rem; margin-bottom: 1rem; color: #111; letter-spacing: -1px; line-height: 1.2; max-width: 800px; }
        p { font-size: 1.25rem; color: #555; max-width: 600px; margin-bottom: 2rem; line-height: 1.6; }
        
        .btn { 
          background: ${inputs.color.value}; 
          color: white; 
          padding: 1rem 2.5rem; 
          border-radius: 50px; 
          text-decoration: none; 
          font-weight: 600; 
          font-size: 1.1rem;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
          box-shadow: 0 4px 15px ${inputs.color.value}40;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px ${inputs.color.value}60; }
        
        .badge {
          background: ${inputs.color.value}20;
          color: ${inputs.color.value};
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }

        /* Features */
        .features { padding: 6rem 2rem; background: #f8fafc; text-align: center; }
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1000px; margin: 0 auto; }
        .feat-card { 
          background: white; padding: 2.5rem; border-radius: 16px; 
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05); transition: transform 0.3s;
          border: 1px solid #f1f5f9;
        }
        .feat-card:hover { transform: translateY(-5px); border-color: ${inputs.color.value}40; }
        .feat-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.8rem; color: #1e293b; }
        .feat-desc { font-size: 1rem; color: #64748b; line-height: 1.6; }

        /* Testimonials */
        .testimonial { padding: 6rem 2rem; text-align: center; background: white; }
        .test-box { max-width: 700px; margin: 0 auto; }
        .test-text { font-size: 1.5rem; font-weight: 500; color: #334155; font-style: italic; margin-bottom: 2rem; line-height: 1.4; }
        .test-author { font-weight: 700; color: #111; }
        .test-role { color: ${inputs.color.value}; font-size: 0.9rem; margin-top: 0.2rem; }

        /* Footer */
        footer { padding: 3rem 2rem; background: #0f172a; color: white; text-align: center; }
        .foot-text { opacity: 0.6; font-size: 0.9rem; }
      </style>
    </head>
    <body>
      ${inputs.nav.value === 'true' ? `
      <nav>
        <a href="#" class="nav-logo">FireFks</a>
        <div>
           <a href="#" class="nav-link" style="color:${inputs.color.value}">Home</a>
           <a href="#" class="nav-link">Features</a>
           <a href="#contact" class="nav-link">Contact</a>
        </div>
      </nav>` : ''}
      
      <div class="hero">
        <div class="badge">🔥 New Release</div>
        <h1>${inputs.headline.value}</h1>
        <p>${inputs.sub.value}</p>
        <a href="#active" class="btn">${inputs.cta.value}</a>
      </div>
      
      <div class="features">
        <div class="feat-grid">
          <div class="feat-card">
            <div class="feat-title">${inputs.f1t.value}</div>
            <div class="feat-desc">${inputs.f1d.value}</div>
          </div>
          <div class="feat-card">
            <div class="feat-title">${inputs.f2t.value}</div>
            <div class="feat-desc">${inputs.f2d.value}</div>
          </div>
          <div class="feat-card">
            <div class="feat-title">${inputs.f3t.value}</div>
            <div class="feat-desc">${inputs.f3d.value}</div>
          </div>
        </div>
      </div>

      <div class="testimonial">
        <div class="test-box">
          <div class="test-text">"${inputs.t1t.value}"</div>
          <div class="test-author">${inputs.t1n.value}</div>
          <div class="test-role">${inputs.t1r.value}</div>
        </div>
      </div>

      <footer>
        <div class="foot-text">${inputs.foot.value}</div>
      </footer>
    </body>
    </html>
  `;
  
  doc.open();
  doc.write(content);
  doc.close();
};

const downloadHTML = () => {
  const frame = document.getElementById('previewFrame');
  const doc = frame.contentDocument || frame.contentWindow.document;
  const htmlContent = doc.documentElement.outerHTML;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'firefks_landing_page.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// Event Listeners
Object.values(inputs).forEach(input => {
  input.addEventListener('input', updatePreview);
});

document.getElementById('exportBtn').onclick = downloadHTML;

// AI GENERATION LOGIC
const generateFromPrompt = () => {
  const prompt = document.getElementById('aiPrompt').value.toLowerCase();
  const btn = document.getElementById('aiBtn');
  
  // 1. Content Presets (The "Brain")
  const presets = {
    fitness: {
      tags: ['gym', 'fitness', 'workout', 'sport', 'train', 'coach'],
      headline: 'Transform Your Body Today',
      sub: 'Join the #1 rated fitness community. expert coaching, premium equipment, and results that last.',
      cta: 'Start Free Trial',
      f1t: 'Expert Coaching', f1d: '1-on-1 plans tailored to your goals.',
      f2t: 'Modern Equipment', f2d: 'State of the art machines.',
      f3t: 'Community', f3d: 'Join 50,000+ members worldwide.',
      template: 'modern',
      color: '#ef4444',
      font: 'sans',
      btn: 'sharp',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80'
    },
    gaming: {
      tags: ['game', 'esport', 'stream', 'twitch', 'cyber', 'neon', 'play'],
      headline: 'Level Up Your Gaming',
      sub: 'The ultimate platform for competitive gamers. Track stats, join tournaments, and win prizes.',
      cta: 'Join The Squad',
      f1t: 'Low Latency', f1d: 'Servers optimized for <20ms ping.',
      f2t: 'Tournaments', f2d: 'Daily cash prize cups.',
      f3t: 'Anti-Cheat', f3d: 'Kernel-level protection.',
      template: 'neon',
      color: '#10b981', // Emerald/Neon Green
      font: 'mono',
      btn: 'sharp',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80'
    },
    finance: {
      tags: ['finance', 'bank', 'money', 'invest', 'crypto', 'stock', 'wealth', 'corp', 'consult'],
      headline: 'Smart Banking for Growth',
      sub: 'Secure, scalable, and simple financial solutions for modern enterprises.',
      cta: 'Open Account',
      f1t: 'Secure', f1d: 'Bank-grade 256-bit encryption.',
      f2t: 'Global', f2d: 'Transact in 140+ currencies.',
      f3t: '24/7 Support', f3d: 'Dedicated account managers.',
      template: 'corporate',
      color: '#1e40af', // Blue
      font: 'sans',
      btn: 'rounded',
      image: 'https://images.unsplash.com/photo-1565514020176-dbf2277e4973?auto=format&fit=crop&w=1920&q=80' // Finance Skyscraper
    },
    fashion: {
      tags: ['fashion', 'style', 'cloth', 'luxury', 'brand', 'shop', 'store', 'boutique'],
      headline: 'Redefining Modern Luxury',
      sub: 'Sustainable fabrics meeting timeless design. Discover the new collection.',
      cta: 'Shop Collection',
      f1t: 'Premium Materials', f1d: 'Sourced from Italian mills.',
      f2t: 'Hand-Crafted', f2d: 'Made by artisans.',
      f3t: 'Lifetime Warranty', f3d: 'Quality that endures.',
      template: 'adlendors',
      color: '#f59e0b', // Amber/Gold
      font: 'serif',
      btn: 'pill',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80'
    },
    food: {
      tags: ['food', 'restaurant', 'coffee', 'cafe', 'eat', 'drink', 'organic'],
      headline: 'Taste the Extraordinary',
      sub: 'Farm-to-table ingredients, prepared by award-winning chefs. Experience dining reimagined.',
      cta: 'Book a Table',
      f1t: 'Fresh Ingredients', f1d: 'Direct from local farms.',
      f2t: 'Master Chefs', f2d: '3 Michelin star experience.',
      f3t: 'Ambiance', f3d: 'Perfect for any occasion.',
      template: 'nova',
      color: '#d97706', // Orange/Brown
      font: 'serif',
      btn: 'rounded',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80'
    },
    saas: {
      tags: ['saas', 'tech', 'app', 'software', 'start', 'platform', 'ai', 'cloud'],
      headline: 'Ship Software Faster',
      sub: 'The all-in-one platform for developers who want to focus on code, not infrastructure.',
      cta: 'Deploy Now',
      f1t: 'Auto-Scaling', f1d: 'Handle millions of requests.',
      f2t: 'Global Edge', f2d: 'Deploy to 35+ regions.',
      f3t: 'CI/CD Built-in', f3d: 'Push to deploy instantly.',
      template: 'tailwind',
      color: '#6366f1', // Indigo
      font: 'sans',
      btn: 'rounded',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80'
    },
    portfolio: {
      tags: ['design', 'art', 'portfolio', 'work', 'studio', 'minimal', 'create'],
      headline: 'Creating Digital Experiences',
      sub: 'Strategic design for forward-thinking brands. Let’s build something amazing.',
      cta: 'View Work',
      f1t: 'Product Design', f1d: 'UI/UX that converts.',
      f2t: 'Branding', f2d: 'Identities that stick.',
      f3t: 'Development', f3d: 'Code that scales.',
      template: 'design',
      color: '#000000',
      font: 'sans',
      btn: 'sharp',
      image: 'https://images.unsplash.com/photo-1506784365371-ebd6140e1306?auto=format&fit=crop&w=1920&q=80' // Minimal Nature
    }
  };

  // Loading State
  const originalText = btn.innerText;
  btn.innerText = 'Analyzing... 🧠';
  btn.disabled = true;

  setTimeout(() => {
    let match = null;

    // 2. Find best preset match
    for (const [key, data] of Object.entries(presets)) {
      if (data.tags.some(tag => prompt.includes(tag))) {
        match = data;
        break;
      }
    }

    // Default Fallback if no match
    if (!match) {
       match = {
         headline: document.getElementById('aiPrompt').value.split(' ').slice(0, 6).join(' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Your Amazing Website',
         sub: 'We help you achieve your goals with our premium services.',
         template: 'nova',
         color: '#ec4899',
         font: 'sans',
         cta: 'Get Started',
         f1t: 'Quality', f1d: 'Best in class service.',
         f2t: 'Speed', f2d: 'Fast automated results.',
         f3t: 'Support', f3d: 'We are here to help.',
         btn: 'rounded'
       }
    }

    // 3. Apply Style Overrides (User explicitly asked for color/font)
    if (prompt.includes('serif')) match.font = 'serif';
    if (prompt.includes('mono')) match.font = 'mono';
    
    if (prompt.includes('blue')) match.color = '#3b82f6';
    if (prompt.includes('red')) match.color = '#ef4444';
    if (prompt.includes('green')) match.color = '#22c55e';
    if (prompt.includes('purple')) match.color = '#a855f7';
    if (prompt.includes('orange')) match.color = '#f97316';
    if (prompt.includes('pink')) match.color = '#ec4899';
    if (prompt.includes('black')) match.color = '#000000';
    if (prompt.includes('cyan')) match.color = '#06b6d4';

    // 4. Update Inputs
    inputs.headline.value = match.headline;
    inputs.sub.value = match.sub;
    inputs.cta.value = match.cta;
    inputs.template.value = match.template;
    inputs.color.value = match.color;
    inputs.font.value = match.font;
    inputs.btnStyle.value = match.btn;
    inputs.image.value = match.image; // Update Image Selector
    
    // Update Features
    inputs.f1t.value = match.f1t; inputs.f1d.value = match.f1d;
    inputs.f2t.value = match.f2t; inputs.f2d.value = match.f2d;
    inputs.f3t.value = match.f3t; inputs.f3d.value = match.f3d;

    // Trigger Update
    updatePreview();
    
    // Reset Button
    btn.innerText = '✨ Generated!';
    setTimeout(() => { btn.innerText = originalText; btn.disabled = false; }, 2000);
    
    // Smooth scroll
    document.getElementById('inputTemplate').scrollIntoView({behavior: 'smooth'});
    
  }, 1000);
};

document.getElementById('aiBtn').onclick = generateFromPrompt;

// Initialize Preview Immediately
updatePreview();
