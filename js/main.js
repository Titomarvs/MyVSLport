/**
 * VSL Portfolio — Main JavaScript
 */

(function () {
  'use strict';

  // ── Apply accent color from config ──
  document.documentElement.style.setProperty('--accent', SITE_CONFIG.accent);
  document.documentElement.style.setProperty('--accent-dim', hexToRgba(SITE_CONFIG.accent, 0.12));

  function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ── Populate site name & contact ──
  document.querySelectorAll('[data-name]').forEach((el) => {
    el.textContent = SITE_CONFIG.name;
  });

  const contactEmail = document.getElementById('contactEmail');
  const ctaEmail = document.getElementById('ctaEmail');
  const contactLinkedin = document.getElementById('contactLinkedin');
  const contactDiscord = document.getElementById('contactDiscord');

  contactEmail.textContent = SITE_CONFIG.email;
  contactEmail.href = `mailto:${SITE_CONFIG.email}`;
  ctaEmail.href = `mailto:${SITE_CONFIG.email}`;
  contactLinkedin.textContent = SITE_CONFIG.linkedin;
  contactLinkedin.href = SITE_CONFIG.linkedin.startsWith('http') ? SITE_CONFIG.linkedin : `https://${SITE_CONFIG.linkedin}`;
  contactDiscord.textContent = SITE_CONFIG.discord;

  // ── Hero rotating focus phrase ──
  const heroFocusWord = document.getElementById('heroFocusWord');
  const heroFocusPhrases = ['hooks', 'retention', 'storytelling', 'product education', 'conversion'];
  let heroFocusIndex = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setHeroFocusPhrase(nextIndex) {
    heroFocusIndex = nextIndex;
    heroFocusWord.textContent = heroFocusPhrases[heroFocusIndex];
  }

  function playHeroFocusEnter() {
    heroFocusWord.classList.remove('is-leaving', 'is-active');
    heroFocusWord.classList.add('is-entering');
    void heroFocusWord.offsetWidth;
    requestAnimationFrame(() => {
      heroFocusWord.classList.remove('is-entering');
      heroFocusWord.classList.add('is-active');
    });
  }

  function cycleHeroFocus() {
    const nextIndex = (heroFocusIndex + 1) % heroFocusPhrases.length;
    if (reduceMotion) {
      setHeroFocusPhrase(nextIndex);
      return;
    }

    heroFocusWord.classList.remove('is-active');
    heroFocusWord.classList.add('is-leaving');
    window.setTimeout(() => {
      setHeroFocusPhrase(nextIndex);
      playHeroFocusEnter();
    }, 380);
  }

  window.setInterval(cycleHeroFocus, 2300);

  // ── Projects Grid ──
  const projectsGrid = document.getElementById('projectsGrid');

  PROJECTS.forEach((project) => {
    const card = document.createElement('article');
    const hasPoster = Boolean(project.thumbnail);
    card.className = `project-card reveal${hasPoster ? '' : ' project-card--video-only'}`;
    card.innerHTML = `
      <div class="project-card__media">
        <span class="project-card__number">PROJECT ${project.number}</span>
        ${hasPoster ? `<img class="project-card__poster" src="${project.thumbnail}" alt="${project.name}" loading="lazy">` : ''}
        <video class="project-card__video" muted loop playsinline preload="metadata" data-src="${project.preview}"></video>
        <div class="project-card__overlay"></div>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__name">${project.name}</h3>
        <p class="project-card__category">${project.category}</p>
        <div class="project-card__tags">
          ${project.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join('')}
        </div>
        <span class="project-card__watch">WATCH →</span>
      </div>
    `;

    const video = card.querySelector('.project-card__video');
    card.addEventListener('mouseenter', () => {
      lazyLoadVideo(video, true);
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
    card.addEventListener('click', () => openProjectModal(project));

    projectsGrid.appendChild(card);
  });

  // ── VSL Timeline ──
  const timelineStages = document.getElementById('timelineStages');
  const timelineVideo = document.getElementById('timelineVideo');
  let activeStage = 0;

  VSL_TIMELINE.forEach((stage, i) => {
    const el = document.createElement('div');
    el.className = `timeline__stage${i === 0 ? ' active' : ''}`;
    el.dataset.index = i;
    el.innerHTML = `
      <div class="timeline__stage-header">
        <span class="timeline__stage-num">${stage.stage}</span>
        <span class="timeline__stage-title">${stage.title}</span>
      </div>
      <p class="timeline__stage-desc">${stage.description}</p>
    `;
    timelineStages.appendChild(el);
  });

  function setTimelineStage(index) {
    if (index === activeStage) return;
    activeStage = index;
    const stage = VSL_TIMELINE[index];

    document.querySelectorAll('.timeline__stage').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });

    timelineVideo.style.opacity = '0';
    setTimeout(() => {
      timelineVideo.src = stage.video;
      timelineVideo.poster = stage.poster;
      timelineVideo.load();
      timelineVideo.play().catch(() => {});
      timelineVideo.style.opacity = '1';
    }, 200);
  }

  timelineVideo.style.transition = 'opacity 0.3s';
  timelineVideo.src = VSL_TIMELINE[0].video;
  timelineVideo.poster = VSL_TIMELINE[0].poster;
  timelineVideo.play().catch(() => {});

  const stageEls = document.querySelectorAll('.timeline__stage');
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index, 10);
          setTimelineStage(index);
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );

  stageEls.forEach((el) => timelineObserver.observe(el));

  // ── Process ──
  const processGrid = document.getElementById('processGrid');

  PROCESS_STEPS.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'process-step';
    el.style.transitionDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <p class="process-step__num">${step.number}</p>
      <h3 class="process-step__title">${step.title}</h3>
      <p class="process-step__desc">${step.description}</p>
    `;
    processGrid.appendChild(el);
  });

  const processObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.process-step').forEach((el) => processObserver.observe(el));

  // ── About ──
  document.getElementById('aboutPhoto').src = ABOUT.photo;
  document.getElementById('aboutBio').textContent = ABOUT.bio;
  const aboutToolkit = document.getElementById('aboutToolkit');
  ABOUT.toolkit.forEach((tool) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="about__tool-name">${tool.name}</span><span class="about__tool-use">${tool.use}</span>`;
    aboutToolkit.appendChild(li);
  });

  // ── Project Modal ──
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalVideo = document.getElementById('modalVideo');

  function openProjectModal(project) {
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalDesc').textContent = project.description;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTools').textContent = project.tools.join(', ');

    const breakdown = document.getElementById('modalBreakdown');
    breakdown.innerHTML = '';
    project.breakdown.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      breakdown.appendChild(li);
    });

    const resultsEl = document.getElementById('modalResults');
    resultsEl.innerHTML = '';
    if (project.results) {
      Object.entries(project.results).forEach(([key, val]) => {
        resultsEl.innerHTML += `
          <div class="modal__result">
            <div class="modal__result-value">${val}</div>
            <div class="modal__result-label">${key.toUpperCase()}</div>
          </div>
        `;
      });
    }

    modalVideo.src = project.fullVideo;
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(() => {});
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.src = '';
  }

  modalClose.addEventListener('click', closeProjectModal);
  modalBackdrop.addEventListener('click', closeProjectModal);
  projectModal.querySelector('.modal__cta').addEventListener('click', closeProjectModal);

  // ── Navbar ──
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navMobile.setAttribute('aria-hidden', !isOpen);
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navMobile.setAttribute('aria-hidden', 'true');
    });
  });

  // ── Reveal on Scroll ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // ── Magnetic Buttons ──
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ── Cursor Glow ──
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  // ── Escape key closes modals ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('open')) closeProjectModal();
    }
  });

  // ── Lazy load video helper ──
  function lazyLoadVideo(video, autoplay) {
    const src = video.dataset.src;
    if (!src || video.src) {
      if (autoplay) video.play().catch(() => {});
      return;
    }
    video.src = src;
    video.load();
    if (autoplay) {
      video.play().catch(() => {});
    }
  }

  // Intersection-based lazy loading for off-screen videos
  const videoLazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (video.dataset.src && !video.src) {
            lazyLoadVideo(video);
          }
          videoLazyObserver.unobserve(video);
        }
      });
    },
    { rootMargin: '200px' }
  );

  document.querySelectorAll('video[data-src]').forEach((v) => {
    videoLazyObserver.observe(v);
  });

  // ── Smooth anchor offset for fixed nav ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
