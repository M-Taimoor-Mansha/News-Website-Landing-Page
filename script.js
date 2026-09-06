const newsData = [
  {
    category: 'IT',
    title:
      "NVIDIA Unveils 'Sovereign AI' Clusters Optimized for Indian Data Privacy Laws",
    summary:
      'The new localized chip clusters allow Indian enterprises to train massive LLMs without exporting data, a major strategic move to capture the government and healthcare tech sectors.',
    meta: 'STRATEGY • 2H AGO',
    location: 'HYDERABAD',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/nvidia-deal-clean.webp',
  },
  {
    category: 'Defence',
    title:
      'Lockheed Martin and Tata Advanced Systems Formalize C-130J Production in India',
    summary:
      'The Memorandum of Understanding (MoU) establishes a full assembly line for the tactical airlifter, making India a critical hub for global C-130 maintenance and exports.',
    meta: 'AEROSPACE • 5H AGO',
    location: 'JODHPUR',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/c-130j-clean.webp',
  },
  {
    category: 'Energy',
    title:
      "Adani Green Energy Secures $2.5B for World's Largest Renewable Park Expansion",
    summary:
      'Financing round led by a consortium of global banks will fund the integration of next-gen wind turbine tech at the Khavda complex, targeting 30GW by 2029.',
    meta: 'RENEWABLES • 8H AGO',
    location: 'GUJARAT',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/adani-green-energy-clean.webp',
  },
  {
    category: 'Infrastructure',
    title:
      'Siemens Mobility Signs €3B Agreement for Digital Rail Infrastructure in Egypt',
    summary:
      'The project includes signaling, electrification, and long-term maintenance of the high-speed link connecting the Mediterranean to the Red Sea.',
    meta: 'TRANSPORT • 1D AGO',
    location: 'CAIRO',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/siemens-mobility-clean.webp',
  },
  {
    category: 'Health',
    title:
      'Merck KGaA Announces Strategic Board Reorganization to Accelerate Oncology R&D',
    summary:
      'In a surprise executive move, the company plans to carve out its life sciences division into a more agile corporate structure focused on targeted cancer therapies.',
    meta: 'BOARDROOM • 12H AGO',
    location: 'DARMSTADT',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/merck-kgaa-clean.webp',
  },
  {
    category: 'Transportation',
    title:
      'Tesla Finalizes Local Component Sourcing Deal with Indian Tier-1 Suppliers',
    summary:
      "Documents show Tesla has signed framework agreements with 5 major Indian auto-component manufacturers to supply castings and electronics for the 'Model 2' project.",
    meta: 'EV SECTOR • 1D AGO',
    location: 'PUNE',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/tesla-deal-clean.webp',
  },
  {
    category: 'Environment',
    title:
      'Chevron and Exxon Joint Venture to Build Giga-Scale Carbon Hub in Gulf of Mexico',
    summary:
      'The facility will capture and store up to 100 million metric tons of CO2 annually from neighboring industrial clusters, the largest sequestration project of its kind.',
    meta: 'ESG • 2D AGO',
    location: 'HOUSTON',
    img: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/News%20Website%20Landing%20Page/carbon-hub-clean.webp',
  },
];

function renderNews(data) {
  const container = document.getElementById('news-container');
  container.innerHTML = '';

  data.forEach((item, index) => {
    const card = `
    <div class="flex flex-col md:flex-row gap-8 lg:gap-12 group cursor-pointer">
    <div class="w-full md:w-1/3 aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden relative shadow-sm border border-slate-100">
        <img src="${item.img}"
             alt="${item.title}"
             class="absolute inset-0 w-full h-full object-cover img-transition [overflow-clip-margin:unset]">
    </div>
    <div class="w-full md:w-2/3">
        <div class="flex items-center space-x-3 mb-4">
            <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest">${
              item.category
            }</span>
            <span class="text-slate-300">/</span>
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">${
              item.location
            }</span>
        </div>
        <h3 class="serif-heading text-2xl lg:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight italic">
            ${item.title}
        </h3>
        <p class="text-slate-500 text-base leading-relaxed mb-6 line-clamp-3">
            ${item.summary}
        </p>
        <div class="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span>${item.meta}</span>
            <span class="mx-4 text-slate-100">|</span>
            <span class="group-hover:text-slate-900 transition flex items-center">
                Read Analysis
                <svg class="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
        </div>
    </div>
</div>
                    ${
                      index < data.length - 1
                        ? '<div class="h-px bg-slate-100 my-12"></div>'
                        : ''
                    }
                `;
    container.innerHTML += card;
  });
}

function filterCategory(cat) {
  const btns = document.querySelectorAll('.category-btn');
  btns.forEach((btn) => {
    if (
      btn.innerText.toLowerCase() === cat.toLowerCase() ||
      (cat === 'All' && btn.innerText.toLowerCase() === 'all sectors')
    ) {
      btn.className =
        'category-btn px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap';
    } else {
      btn.className =
        'category-btn px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap';
    }
  });

  if (cat === 'All') {
    renderNews(newsData);
    document.getElementById('hero-block').style.display = 'grid';
  } else {
    const filtered = newsData.filter((item) =>
      item.category.toLowerCase().includes(cat.toLowerCase())
    );
    renderNews(filtered);
    document.getElementById('hero-block').style.display = 'none';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews(newsData);
});
