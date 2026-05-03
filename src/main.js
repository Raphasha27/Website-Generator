import './style.css'
import { renderNexusTemplate } from './templates.js'

const state = {
  hero: {
    headline: 'Build Faster with FireFks',
    subheadline: 'The ultimate tool for generating stunning websites in seconds.',
    ctaText: 'Get Started',
    ctaLink: '#',
    themeColor: '#4f46e5', // Indigo-600
    template: 'nexus',
    align: 'center',
    seoTitle: 'Nexus | Enterprise Intelligence',
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
    testimonial1Text: 'Nexus transformed our workflow entirely.',
    footerText: '© 2025 Kirov Dynamics. All rights reserved.'
  }
};

document.querySelector('#app').innerHTML = `
  <aside class="editor-sidebar">
    <div class="brand-header">
      <div class="brand-logo">🔥 FireFks | Nexus</div>
    </div>
    <div class="editor-controls">
      <div class="control-group">
        <label>Overview</label>
        <p style="font-size:0.8rem; color:#94a3b8; line-height:1.4;">
          Welcome to Project 1. Powered by Kirov Dynamics Infrastructure.
        </p>
      </div>

      <!-- AI GENERATION SECTION -->
      <div class="control-group" style="background: linear-gradient(135deg, #4f46e5 0%, #a855f7 100%); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
        <label style="color: white; display: flex; align-items: center; gap: 8px; font-weight: bold; margin-bottom: 8px;">
           ✨ AI Magic Generator
        </label>
        <textarea id="aiPrompt" placeholder="Describe your dream site (e.g., 'A cyberpunk game studio')..." style="width: 100%; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.3); color: white; margin-bottom: 12px; min-height: 80px; padding: 10px; border-radius: 8px; font-family: inherit; font-size: 0.9rem; resize: vertical;"></textarea>
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
          <option value="nexus">Nexus (Enterprise) ✨</option>
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
  
  if (inputs.template.value === 'nexus') {
    doc.open();
    doc.write(renderNexusTemplate(inputs));
    doc.close();
    return;
  }

  // Fallback to basic rendering for other templates (Modularization ongoing)
  doc.open();
  doc.write(renderNovaTemplate(inputs)); // Using Nova as high-quality fallback
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
