/* Yongwoo Son — portfolio
   Data-driven publications + talks, accessible <dialog> modals,
   theme toggle, scroll reveal, sticky-nav shadow.            */

(function () {
  'use strict';

  const SCHOLAR = 'https://scholar.google.com/citations?user=r_A57E0AAAAJ&hl=en';

  /* ---------------- Data ---------------- */
  const ME = 'Son Y';

  const PUBLICATIONS = [
    {
      year: 2026, cofirst: true,
      title: 'Isolation and whole genome sequencing of an Avian orthoavulavirus 16 from cinereous vulture (Aegypius monachus) in South Korea, 2023',
      authors: 'Son Y, Lee SH, Lee DY, Cho H, Son Y, Kim D, Song CS, Lee DH',
      venue: '<em>Frontiers in Veterinary Science</em>, 13',
      doi: 'https://doi.org/10.3389/fvets.2026.1739779',
    },
    {
      year: 2026, cofirst: true,
      title: 'Black-tailed Gull (Larus crassirostris): A Novel Host for Trichomonas gypaetinii with High Prevalence of Avian Trichomonads in South Korea',
      authors: 'Kim J, Son Y, Hwang B, Kim Y, Kim J, Min W, Kim WH',
      venue: '<em>Journal of Wildlife Diseases</em>, 62(1), 192–197',
      doi: 'https://doi.org/10.7589/JWD-D-25-00039',
    },
    {
      year: 2025, cofirst: false,
      title: 'An rpoB Sequence Type Network as a Framework for the Evolutionary Investigation of Clostridium perfringens',
      authors: 'Ahn SM, Son S, Son Y, Lim SJ, Kim D, Choi KS, Kwon HJ',
      venue: '<em>Microorganisms</em>, 13(12), 2768',
      doi: 'https://doi.org/10.3390/microorganisms13122768',
    },
    {
      year: 2025, cofirst: false,
      title: 'Discovery, phylogenetic, and comparative genomic analysis of novel avian gammacoronaviruses identified in feral pigeons (Columba livia domestica)',
      authors: 'El Zowalaty ME, Taylor LJ, Son Y, Lee H, Rubrum AM, Webby RJ, Bustin SA, Young SG, Lee S-H, Lee D-H, Frieman MB',
      venue: '<em>Journal of Virology</em>, 99(9), e01112-25',
      doi: 'https://doi.org/10.1128/jvi.01112-25',
    },
    {
      year: 2024, cofirst: true,
      title: 'Comparative Analysis of Antibiotic Resistance and Biofilm Characteristics of Two Major Enterococcus Species from Poultry Slaughterhouses in South Korea',
      authors: 'Son Y, Jin YB, Cho EJ, Park AR, Flores RA, Nguyen TB, Lee SY, Altanzul B, Park KI, Min W, Kim WH',
      venue: '<em>Veterinary Sciences</em>, 11(4), 180',
      doi: 'https://doi.org/10.3390/vetsci11040180',
    },
    {
      year: 2024, cofirst: false,
      title: 'Genetic Characterization and Phylogeographic Analysis of the First H13N6 Avian Influenza Virus Isolated from Vega Gull in South Korea',
      authors: 'Flores RA, Cammayo-Fletcher PLT, Nguyen BT, Villavicencio AGM, Lee SY, Son Y, Kim JH, Park KI, Yoo WG, Jin YB, Min W, Kim WH',
      venue: '<em>Viruses</em>, 16(2), 285',
      doi: 'https://doi.org/10.3390/v16020285',
    },
    {
      year: 2023, cofirst: true,
      title: 'The prevalence of viral diseases in wild boars (Sus scrofa) in Gyeongsangnam-do, South Korea',
      authors: 'Kim CH, Son Y, Choi YJ, Ko BH, Kang WH, Kim GA, Lee S, Kim WH',
      venue: '<em>Korean Journal of Veterinary Service</em>, 46(1), 59–66',
      doi: 'https://doi.org/10.7853/kjvs.2023.46.1.59',
    },
    {
      year: 2022, cofirst: true,
      title: 'Prevalence study of bovine viral diarrhea virus (BVDV) from cattle farms in Gyeongsangnam-do, South Korea in 2021',
      authors: 'Son Y, Cho S, Ji JM, Cho JK, Bang SY, Choi YJ, Kim CH, Kim WH',
      venue: '<em>Korean Journal of Veterinary Service</em>, 45(3), 211–219',
      doi: 'https://doi.org/10.7853/kjvs.2022.45.3.211',
    },
  ];

  const TALKS = [
    {
      badge: 'Field · ongoing',
      title: 'Genomic sequencing field training — arboviruses',
      meta: 'Laos &amp; Tanzania',
      desc: 'Delivering hands-on next-generation sequencing training to local laboratory teams and analyzing dengue and chikungunya virus genomes — building in-country capacity to characterize circulating strains and reconstruct arbovirus transmission.',
    },
    {
      badge: 'Field & lab',
      title: 'Wildlife pathogen surveillance & diagnostics',
      meta: 'Korea · 2020–present',
      desc: 'Field and laboratory research across wild-bird pathology, virus and bacteria propagation, and molecular diagnosis — including work at the WOAH Reference Laboratory for Brucellosis (APQA), the National Institute of Wildlife Disease Control and Prevention, and the Avian Disease Laboratory at Seoul National University.',
    },
  ];

  /* ---------------- Helpers ---------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const boldMe = (s) => s.split(ME).join('<strong>' + ME + '</strong>');
  const shortAuthors = (s) => {
    const parts = s.split(', ');
    return parts.length > 4 ? parts.slice(0, 3).join(', ') + ', et al.' : s;
  };

  /* ---------------- Render publications ---------------- */
  const pubsList = $('#pubs-list');
  if (pubsList) {
    PUBLICATIONS.forEach((p, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pub reveal';
      btn.innerHTML =
        '<span class="pub__year">' + p.year + '</span>' +
        '<span class="pub__main"><h3>' + p.title + '</h3>' +
        '<span class="pub__venue">' + boldMe(shortAuthors(p.authors)) + ' · ' + p.venue +
        (p.cofirst ? ' <span class="chip">Co-first</span>' : '') + '</span></span>' +
        '<span class="pub__arrow" aria-hidden="true">→</span>';
      btn.addEventListener('click', () => openPubModal(p));
      li.appendChild(btn);
      pubsList.appendChild(li);
    });
  }

  /* ---------------- Render talks ---------------- */
  const talksGrid = $('#talks-grid');
  if (talksGrid) {
    TALKS.forEach((t) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'tile reveal';
      card.style.textAlign = 'left';
      card.style.cursor = 'pointer';
      card.innerHTML =
        '<span class="status status--solid" style="animation:none">' + t.badge + '</span>' +
        '<h3>' + t.title + '</h3>' +
        '<p class="tile__meta">' + t.meta + '</p>';
      card.addEventListener('click', () => openTalkModal(t));
      talksGrid.appendChild(card);
    });
  }

  /* ---------------- Modal ---------------- */
  const modal = $('#modal');
  const modalBody = $('#modal-body');

  function showModal(html) {
    if (!modal) return;
    modalBody.innerHTML = html;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  }
  function openPubModal(p) {
    showModal(
      '<span class="m-year">' + p.year + (p.cofirst ? ' · Co-first author' : '') + '</span>' +
      '<h3>' + p.title + '</h3>' +
      '<p class="m-authors">' + boldMe(p.authors) + '</p>' +
      '<p class="m-venue">' + p.venue + '</p>' +
      '<a class="m-link" href="' + p.doi + '" target="_blank" rel="noopener">View article (DOI) →</a>'
    );
  }
  function openTalkModal(t) {
    showModal(
      '<span class="m-year">' + t.badge + '</span>' +
      '<h3>' + t.title + '</h3>' +
      '<p class="m-venue">' + t.meta + '</p>' +
      '<p class="m-desc">' + t.desc + '</p>'
    );
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.hasAttribute('data-close')) modal.close();
    });
  }

  /* ---------------- Theme toggle ---------------- */
  const root = document.documentElement;
  const toggle = $('#theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  /* ---------------- Footer year ---------------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------------- Nav shadow ---------------- */
  const nav = $('#nav');
  const onScroll = () => { if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Reveal ---------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observeReveals = () => {
    const reveals = document.querySelectorAll('.reveal:not(.is-visible)');
    if (prefersReduced || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-visible');
        obs.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el, i) => { el.style.transitionDelay = Math.min(i % 4, 3) * 60 + 'ms'; io.observe(el); });
  };
  observeReveals(); // includes dynamically rendered cards
})();
