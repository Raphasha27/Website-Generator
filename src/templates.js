// Template rendering helper
const renderAdlendorsTemplate = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${inputs.seoTitle.value}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Playfair Display', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
    .gradient-mesh {
      background: 
        radial-gradient(at 0% 0%, ${inputs.color.value}20 0%, transparent 50%),
        radial-gradient(at 100% 100%, #f43f5e20 0%, transparent 50%),
        radial-gradient(at 100% 0%, #8b5cf620 0%, transparent 50%);
    }
    .text-gradient {
      background: linear-gradient(135deg, ${inputs.color.value}, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>
</head>
<body class="bg-white text-gray-900">
  <nav class="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-display font-black tracking-tight">ADLEN.</div>
      <div class="hidden md:flex gap-8 text-sm">
        <a href="#work" class="hover:opacity-60 transition">Work</a>
        <a href="#about" class="hover:opacity-60 transition">About</a>
        <a href="#contact" class="hover:opacity-60 transition">Contact</a>
      </div>
      <button style="background: ${inputs.color.value}" class="px-6 py-2 text-white text-sm font-semibold rounded-full">${inputs.cta.value}</button>
    </div>
  </nav>

  <section class="min-h-screen flex items-center justify-center gradient-mesh px-6 pt-32">
    <div class="max-w-6xl text-center">
      <h1 class="text-6xl md:text-8xl font-display font-black mb-6 leading-none">
        ${inputs.headline.value.split(' ')[0]}<br>
        <span class="text-gradient">${inputs.headline.value.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">${inputs.sub.value}</p>
      <button style="background: ${inputs.color.value}" class="px-10 py-4 text-white font-semibold rounded-full shadow-2xl hover:scale-105 transition">Explore Projects</button>
    </div>
  </section>

  <section id="work" class="py-32 px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div class="group cursor-pointer">
        <div class="aspect-[4/5] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl mb-4 overflow-hidden relative">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </div>
        <h3 class="text-2xl font-display font-bold mb-2">${inputs.f1t.value}</h3>
        <p class="text-gray-500">${inputs.f1d.value}</p>
      </div>
      <div class="group cursor-pointer">
        <div class="aspect-[4/5] bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl mb-4 overflow-hidden relative">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </div>
        <h3 class="text-2xl font-display font-bold mb-2">${inputs.f2t.value}</h3>
        <p class="text-gray-500">${inputs.f2d.value}</p>
      </div>
      <div class="group cursor-pointer">
        <div class="aspect-[4/5] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl mb-4 overflow-hidden relative">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </div>
        <h3 class="text-2xl font-display font-bold mb-2">${inputs.f3t.value}</h3>
        <p class="text-gray-500">${inputs.f3d.value}</p>
      </div>
    </div>
  </section>

  <section class="py-32 bg-gray-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <blockquote class="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
        "${inputs.t1t.value}"
      </blockquote>
      <cite class="not-italic">
        <div class="font-semibold">${inputs.t1n.value}</div>
        <div class="text-gray-500">${inputs.t1r.value}</div>
      </cite>
    </div>
  </section>

  <footer class="py-12 border-t text-center text-gray-500 text-sm">
    ${inputs.foot.value}
  </footer>
</body>
</html>`;
};

// Export this for use in main.js
export { renderAdlendorsTemplate };
