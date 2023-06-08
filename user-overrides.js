/*** MY OVERRIDES ***/
// arkenfox's user.js commit: Dec 15, 2021 https://github.com/arkenfox/user.js/commit/bb56056a68906ddd178f64ab0b016c8bbe9786fb
user_pref("_user.js.parrot", "overrides section syntax error");

/*** my user.js overrides ***/
user_pref("intl.accept_languages", "en-US, en, ru"); // 0204 i need russian maybe
user_pref("javascript.use_us_english_locale", false); // 0211 dont see any profit
user_pref("browser.download.skipConfirmLaunchExecutable", true);
user_pref("devtools.selfxss.count", 1000); // disable 'allow pasting' protection in devtools
user_pref("layout.css.has-selector.enabled", true) // for youtube enhancer to hide shorts
user_pref("browser.tabs.loadInBackground", true)
user_pref("browser.tabs.loadBookmarksInBackground", true)

// 0400 safe browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref(
  "browser.safebrowsing.downloads.remote.block_potentially_unwanted",
  false
);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("keyword.enabled", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.suggest.engines", false);

/*** [SECTION 1000]: DISK AVOIDANCE ***/
user_pref("browser.shell.shortcutFavicons", true); // 1006 favicons in shortcuts

// 1021: enable storing extra session data
user_pref("browser.sessionstore.privacy_level", 0);

/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
/* 1201: require safe negotiation
 * Blocks connections (SSL_ERROR_UNSAFE_NEGOTIATION) to servers that don't support RFC 5746 [2]
 * as they're potentially vulnerable to a MiTM attack [3]. A server without RFC 5746 can be
 * safe from the attack if it disables renegotiations but the problem is that the browser can't
 * know that. Setting this pref to true is the only way for the browser to ensure there will be
 * no unsafe renegotiations on the channel between the browser and the server.
 * [STATS] SSL Labs (July 2021) reports over 99% of top sites have secure renegotiation [4]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://datatracker.ietf.org/doc/html/rfc5746
 * [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555
 * [4] https://www.ssllabs.com/ssl-pulse/ ***/
 user_pref("security.ssl.require_safe_negotiation", false);

/* 1211: enforce OCSP fetching to confirm current validity of certificates
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only */
user_pref("security.OCSP.enabled", 0); // [DEFAULT: 1]
user_pref("security.OCSP.require", false);

/*** [SECTION 1600]: HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginPolicy", 0); // 1600 may break websites :( - may use ext. for this
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

/*** [SECTION 1700]: CONTAINERS ***/
user_pref("privacy.userContext.enabled", false); // no need for containers
user_pref("privacy.userContext.ui.enabled", false);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
user_pref("media.gmp-widevinecdm.enabled", true); // 2021 default-inactive in user.js
user_pref("media.eme.enabled", true); // 2022

/*** [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) ***/
// These might break sites i guess
user_pref("dom.disable_beforeunload", false); // 2401: disable "Confirm you want to leave" dialog on page close
user_pref("dom.disable_window_move_resize", false); // 2402: prevent scripts from moving and resizing open windows
user_pref("dom.disable_open_during_load", false); // 2403: block popup windows
//// --- comment-out --- 'dom.popup_allowed_events' -2404- may break something idk
user_pref("dom.push.enabled", true); // 2411 enable push notifications
// 2404: enable clipboard commands (cut/copy) from "non-privileged" content [FF41+]
user_pref("dom.allow_cut_copy", true);

/*** [SECTION 2600]: MISCELLANEOUS ***/
user_pref("network.IDN_show_punycode", false); // 2619: use Punycode in Internationalized Domain Names to eliminate possible spoofing

/** 2651 DOWNLOADS ***/
user_pref("browser.download.useDownloadDir", true);

user_pref("extensions.webextensions.restrictedDomains", ""); // 2662: disable webextension restrictions on certain mozilla domains (you also need 4503)

/* 2810: enable Firefox to clear items on shutdown (2811)
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes ***/
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

// 2811: disable clear history on shutdown
user_pref("privacy.clearOnShutdown.cookies", false);

/*** [SECTION 4500]: RFP (RESIST FINGERPRINTING) ***/
user_pref("privacy.resistFingerprinting", false);
// user_pref("privacy.window.maxInnerWidth", 1600);
// user_pref("privacy.window.maxInnerHeight", 900);
//// --- comment-out --- 'privacy.window.maxInnerWidth'
//// --- comment-out --- 'privacy.window.maxInnerHeight'
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]
user_pref("webgl.disabled", false); // 4520

user_pref("signon.rememberSignons", false); // 5003: disable saving passwords

/*** [SECTION 6000]: DON'T TOUCH ***/
user_pref("security.dialog_enable_delay", 0); // [DEFAULT: 1000]

user_pref("privacy.donottrackheader.enabled", true);

/*** [SECTION 9000]: PERSONAL ***/
/* WELCOME & WHAT'S NEW NOTICES ***/
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
/* WARNINGS ***/
user_pref("browser.tabs.warnOnClose", false); // [DEFAULT false FF94+]
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuitShortcut", false); // [FF94+]
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
/* APPEARANCE ***/
user_pref("browser.download.autohideButton", false); // [FF57+]
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
user_pref("ui.prefersReducedMotion", 1); // disable chrome animations [FF77+] [RESTART] [HIDDEN PREF]
// 0=no-preference, 1=reduce: with RFP this only affects chrome
user_pref("ui.systemUsesDarkTheme", 1); // [FF67+] [HIDDEN PREF]
// 0=light, 1=dark: with RFP this only affects chrome
user_pref("browser.in-content.dark-mode", true);
// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);
/* CONTENT BEHAVIOR ***/
user_pref("accessibility.typeaheadfind", false); // enable "Find As You Type"
user_pref("clipboard.autocopy", true); // enable autocopy default [LINUX]
user_pref("layout.spellcheckDefault", 0); // 0=none, 1-multi-line, 2=multi-line & single-line
/* UX BEHAVIOR ***/
user_pref("browser.backspace_action", 0); // 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.quitShortcut.disabled", true); // disable Ctrl-Q quit shortcut [LINUX] [MAC] [FF87+]
user_pref("browser.tabs.closeWindowWithLastTab", true);
user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab [FF57+]
user_pref("browser.urlbar.decodeURLsOnCopy", true); // see bugzilla 1320061 [FF53+]
user_pref("general.autoScroll", true); // middle-click enabling auto-scrolling [DEFAULT: false on Linux]
user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar [RESTART]
user_pref("view_source.tab", true); // view "page/selection source" in a new window [FF68+, FF59 and under]
/* UX FEATURES ***/
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", false); // Reader View
/* OTHER ***/
user_pref("browser.bookmarks.max_backups", 2);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false
); // disable CFR [FF67+]
// [SETTING] General>Browsing>Recommend extensions as you browse
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false
); // disable CFR [FF67+]
// [SETTING] General>Browsing>Recommend features as you browse
user_pref("network.manage-offline-status", false); // see bugzilla 620472
// user_pref("xpinstall.signatures.required", false); // enforced extension signing (Nightly/ESR)

// My own settings
// Show the Compact option under Density in the customize menu
// Отображать опцию "Компактные" в разделе "Значки" в разделе персонализации панели инструментов
user_pref("browser.compactmode.show", true);

// Highlight all occurrences of the phrase when searching
// Подстветить всех вхождения фразы в текст при поиске
user_pref("findbar.highlightAll", true);

// Dont use smoothScroll
// Не использовать "плавную" прокрутку
user_pref("general.smoothScroll", false);

// Turn on media control
// Включить элементы управления мультимедиа
user_pref("media.hardwaremediakeys.enabled", true);

// Do not select when double-clicking text the space following the text
// Не выделять при выделении слова двойным нажатием идущий за ним пробел
user_pref("layout.word_select.eat_space_to_next_word", false);

// Enable urlbar built-in calculator
// Включить встроенный в адресную строку калькулятор
user_pref("browser.urlbar.suggest.calculator", true);

// Compact mode
user_pref("browser.uidensity", 1);

// Use system backend for notifications (for pushbullet)
user_pref("alerts.useSystemBackend", true);

// Make scrolling faster
// Сделать скроллинг колёсиком мыши быстрее
user_pref("mousewheel.min_line_scroll_amount", 35);

// СКМ по скроллбару перемещает прокрутку в соответствующее положение
user_pref("middlemouse.scrollbarPosition", true);

// Разрешать несекурные загрузки (например, скачает iCloud установщик)
user_pref("dom.block_download_insecure", false);

// Отключить title bar
user_pref("browser.tabs.inTitlebar", 1);

// Disable picture-in-picture
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Cache into RAM
// src: https://lifehacker.com/speed-up-firefox-by-moving-your-cache-to-ram-no-ram-di-5687850
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 1024000);

// Pref : 2663: enable warning when websites try to install add-ons
// [SETTING] Privacy & Security>Permissions>Warn you when websites try to install add-ons
user_pref("xpinstall.whitelist.required", false); // default: true

user_pref("browser.urlbar.suggest.topsites", false);

user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);

// CSS Blur Filter [FF88+]
user_pref("layout.css.backdrop-filter.enabled", true);
// [SETUP-PERF]
user_pref("gfx.webrender.all", true);

// 2022: Enable screensharing
user_pref("media.getusermedia.screensharing.enabled", true);
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);

user_pref("signon.management.page.breach-alerts.enabled", false); // disable password breach allerts It's annoying

user_pref("dom.security.https_only_mode", false); // [FF76+]

//
/////// END
//
// thinking about this / TODO:
// user_pref("network.file.disable_unc_paths", false); // [HIDDEN PREF] 0703 - false for fixes
// user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] 0704 - reset
//
// user_pref("security.mixed_content.block_display_content", false); // 1241-1246 check also
//
// 2620: enforce PDFJS, disable PDFJS scripting [SETUP-CHROME]
// 2621 disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
//
// 2660 EXTENSIONS
// yay success
user_pref("_user.js.parrot", "overrides section passed successfully! yay");
