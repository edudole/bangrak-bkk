/* LP360 central site configuration
 * แก้ URL /exec หลักของทุกเว็บไซต์ และ Student Profile เฉพาะเว็บไซต์ที่ใช้งาน ที่ไฟล์นี้ไฟล์เดียว
 * เวลาเพิ่มตำบล: copy /tambon1 -> /tambon4 แล้วเพิ่ม entry tambon4 ด้านล่าง
 */
(() => {
  'use strict';
  // ===== Global shared icon =====
  const GLOBAL_ICON_URL = 'https://static.wixstatic.com/media/a503e5_b1f34c9cb73e40a0b027042bb3f6c959~mv2.png';

  // ===== User iframe pages =====

const USER_PAGES = Object.freeze({
  '1': Object.freeze({
    EXEC_URL: 'https://script.google.com/macros/s/AKfycbzdAKhonGUj6_kCjxqaFC-C-ZpDWx1BDNLYB5Rr_PdnNgeNYshkUTu9dL7LP24Uu1PQlg/exec',
    SEO_TITLE: 'ศกร.ระดับแขวงมหาพฤฒาราม',
    SEO_DESCRIPTION: 'เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย'
  }),
  '2': Object.freeze({
    EXEC_URL: 'https://script.google.com/macros/s/AKfycbwW-IiQe1mZNtGZYSAk1Je21U6G1oV8VDwkRpBHhLQFjSksD2jjulQ5WPP7gy2_OCBXgg/exec',
    SEO_TITLE: 'ศกร.ระดับแขวงสี่พระยา',
    SEO_DESCRIPTION: 'เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย'
  }),
    '3': Object.freeze({
    EXEC_URL: 'https://script.google.com/macros/s/AKfycbxbrG5aYd2c0Fzz7aZ0qjqY3I1lDgnw4Wm2DUWo_oRzlfXP453wHSXgdv8Y3K5ZgMic/exec',
    SEO_TITLE: 'ศกร.ระดับแขวงสีลม',
    SEO_DESCRIPTION: 'เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย'
  }),
    '4': Object.freeze({
    EXEC_URL: 'https://script.google.com/macros/s/AKfycbwVcmoq6s7FIyjn8KRSoWbcsU936-HgTHGJAMeoP87y2amc__RGHbNPWyUUIwYhDtEH7A/exec',
    SEO_TITLE: 'ศกร.ระดับแขวงสุริยวงศ์',
    SEO_DESCRIPTION: 'เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย'
  }),
  '5': Object.freeze({
    EXEC_URL: 'https://script.google.com/macros/s/AKfycbytWX0psf7c4a88mgfeDnnOy13x4KcPSpS32G66NTm32igiHb2y-c0QqzkrgWpf4l0J/exec',
    SEO_TITLE: 'ศกร.ระดับระดับแขวงบางรัก',
    SEO_DESCRIPTION: 'เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย'
  })
});

  const SITES = Object.freeze({
    district: Object.freeze({
      SITE_TYPE: 'DISTRICT',
      SEO_TITLE: "ศกร.ระดับเขตบางรัก",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzGOcbm-5oerlRH5T0z_HPn-wddQVySLeUqL29zObB8LcHmFTW7L101G3zxX_ucfX-y/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbxbrG5aYd2c0Fzz7aZ0qjqY3I1lDgnw4Wm2DUWo_oRzlfXP453wHSXgdv8Y3K5ZgMic/exec',
      CACHE_PREFIX: 'LP360:DISTRICT:ROOT:'
    }),
    silom: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับแขวงสีลม",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzdxC1rPWTuehzRtKKgzKOhiwFLYz5i6-e4Ak9wsDnRd3lMtNnI2KqKS90PdOPUPsVH/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbxbrG5aYd2c0Fzz7aZ0qjqY3I1lDgnw4Wm2DUWo_oRzlfXP453wHSXgdv8Y3K5ZgMic/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:SILOM:'
    }),
   mahaphruettharam: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับแขวงมหาพฤฒาราม",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbyXrG7HZVrpflXKo-rr4jf2Ez79NqWpSEgh6bBD0OXSrk5oX9_SWl4CatDBFX5gS8c-RA/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzdAKhonGUj6_kCjxqaFC-C-ZpDWx1BDNLYB5Rr_PdnNgeNYshkUTu9dL7LP24Uu1PQlg/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:MAHAPHRUETTHARAM:'
    }),
    suriyawong: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับแขวงสุริยวงศ์",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbx3crJbF9_X-uCceAGffUWWbzRUYY8XMidD606YEIPbF_IzDtqbmy2cD-qa2JCGRBP3/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwVcmoq6s7FIyjn8KRSoWbcsU936-HgTHGJAMeoP87y2amc__RGHbNPWyUUIwYhDtEH7A/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:SURIYAWONG:'
    }),
    siphraya: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับแขวงสี่พระยา",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycby4zrYBs2oTyzy_NdWxRimVFTEJUdvb6_TclonS4MlFLlVqmOdaYFucnVnXV3FaFPQs_A/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwW-IiQe1mZNtGZYSAk1Je21U6G1oV8VDwkRpBHhLQFjSksD2jjulQ5WPP7gy2_OCBXgg/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:SIPHRAYA:'
    }),
      bangrak: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับแขวงบางรัก",
      SEO_DESCRIPTION: "เรียนได้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwuKYgVZRYIbujm1hHv4lQchRIPaKN-X300y7jOHgcNyvK_60-CFOzadomro0e4HVS59A/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbytWX0psf7c4a88mgfeDnnOy13x4KcPSpS32G66NTm32igiHb2y-c0QqzkrgWpf4l0J/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:BANGRAK:'
    }),
    library: Object.freeze({
      SITE_TYPE: 'LIBRARY',
      SEO_TITLE: "เว็บไซต์ห้องสมุด",
      SEO_DESCRIPTION: "เว็บไซต์ห้องสมุดประชาชน",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwjxamEm78z1EzEg29ZdAOlsicha9sBB_c0wqYaVU8vqm8YBcbk1fxlOeApojTfJkb9/exec',
      CACHE_PREFIX: 'LP360:LIBRARY:MAIN:'
    }),
  });

  function detectSiteKey() {
    const script = document.currentScript;
    let basePath = '/';
    try {
      if (script && script.src) basePath = new URL('.', script.src).pathname;
    } catch (_) {}
    let path = location.pathname || '/';
    if (path.startsWith(basePath)) path = path.slice(basePath.length);
    path = path.replace(/^\/+/, '');
    const first = (path.split('/')[0] || '').toLowerCase();
    if (first && Object.prototype.hasOwnProperty.call(SITES, first)) return first;
    return 'district';
  }

  const SITE_KEY = detectSiteKey();
  const site = SITES[SITE_KEY] || SITES.district;
  const cfg = Object.freeze({
    SITE_KEY,
    SITE_TYPE: site.SITE_TYPE,
    SEO_TITLE: site.SEO_TITLE || '',
    SEO_DESCRIPTION: site.SEO_DESCRIPTION || '',
    EXEC_URL: site.MAIN_EXEC_URL,
    API_URL: site.MAIN_EXEC_URL,
    MAIN_EXEC_URL: site.MAIN_EXEC_URL,
    STUDENT_PROFILE_EXEC_URL: site.STUDENT_PROFILE_EXEC_URL || '',
    CACHE_PREFIX: site.CACHE_PREFIX,
    GLOBAL_ICON_URL: GLOBAL_ICON_URL
  });

  function applyGlobalIcon_() {
    if (!GLOBAL_ICON_URL || !document || !document.head) return;
    const defs = [
      ['icon', 'image/png'],
      ['shortcut icon', 'image/png'],
      ['apple-touch-icon', ''],
      ['apple-touch-icon-precomposed', '']
    ];
    defs.forEach(([rel, type]) => {
      let el = document.head.querySelector('link[data-lp360-global-icon="' + rel + '"]');
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        el.setAttribute('data-lp360-global-icon', rel);
        document.head.appendChild(el);
      }
      if (type) el.type = type;
      el.href = GLOBAL_ICON_URL;
    });
  }

  window.LP360_SITES_CONFIG = SITES;
  window.LP360_USER_PAGES_CONFIG = USER_PAGES;
  window.LP360_GLOBAL_ICON_URL = GLOBAL_ICON_URL;
  window.LP360_CURRENT_SITE_KEY = SITE_KEY;
  window.APP_CONFIG = cfg;
  if (cfg.STUDENT_PROFILE_EXEC_URL) {
    window.STUDENT_PROFILE_WEB_APP_URL = cfg.STUDENT_PROFILE_EXEC_URL;
  }
  applyGlobalIcon_();
})();
