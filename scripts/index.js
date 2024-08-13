const translationToShow = () => {
  const storedLang = localStorage.getItem('storedLang');

  const redirectToLanguagePage = lang => {
    const pages = {
      ru: 'index.html',
      en: 'index-en.html',
    };
    const page = pages[lang] || 'index.html';
    localStorage.setItem('storedLang', lang);
    window.location.href = page;
  };

  if (storedLang) {
    const currentUrl = window.location.href;
    const langPages = {
      ru: 'index.html',
      en: 'index-en.html',
    };

    if (!currentUrl.includes(langPages[storedLang])) {
      window.location.href = langPages[storedLang];
    }
  } else {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.toLowerCase();

    if (userLang.startsWith('ru')) {
      redirectToLanguagePage('ru');
    } else {
      redirectToLanguagePage('en');
    }
  }

  document.querySelectorAll('.header__language-switcher-select').forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      const selectedLang = event.target.getAttribute('data-lang');
      redirectToLanguagePage(selectedLang);
    });
  });
};

translationToShow();