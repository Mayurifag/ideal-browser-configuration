///// source: https://github.com/farag2/Mozilla-Firefox/blob/master/user.js
// Do not show about:config warning message
// Не предупреждать при заходе на about:config
user_pref("browser.aboutConfig.showWarning", false);

// Enable Backspace to go back to a previous web page
// Включить переход на предыдущую страницу по нажатию Backspace
user_pref("browser.backspace_action", 0);

// Show the Compact option under Density in the customize menu
// Отображать опцию "Компактные" в разделе "Значки" в разделе персонализации панели инструментов
user_pref("browser.compactmode.show", true);

// Do not auto-hide Downloads button in toolbar
// Не скрывать кнопку "Загрузки" на панели инструментов
user_pref("browser.download.autohideButton", false);

// Turn off counting URIs in private browsing mode
// Отключить подсчета URI в приватном режиме просмотра
user_pref("browser.engagement.total_uri_count.pbm", false);

// Do not notify about new features
// Не уведомлять о новых функциях Firefox
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// Do not recommend extensions as you browse
// Не рекомендовать расширения при просмотре
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Do not recommend features as you browse
// Не рекомендовать функции при просмотре
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Turn off Snippets (Updates from Mozilla and Firefox)
// Отключить Заметки (Обновления от Mozilla и Firefox)
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Unpin Top Sites search shortcuts
// Открепить ярлыки поисковых сервисов в Топе сайтов
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);

// Does not offer import bookmarks, history and passwords from other browsers
// Не предлагать импорт закладок, истории и паролей из другого браузера
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);

// Show Highlights in 4 rows
// Отобразить избранные сайты в 4 столбца
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 4);

// Hide sponsored top sites in Firefox Home screen
// Скрыть топ сайтов спонсоров на домашней странице Firefox
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Show Top Sites in 4 rows
// Отобразить топ сайтов в 4 столбца
user_pref("browser.newtabpage.activity-stream.topSitesRows", 4);

// Turn on "Firefox Experiments" settings page
// Включить раздел "Эксперименты Firefox" в настройках
user_pref("browser.preferences.experimental", true);

// Show search suggestions in Private Windows
// Отображать поисковые предложения в Приватных вкладках
user_pref("browser.search.suggest.enabled.private", true);

// Do not warn when attempt to close multiple tabs
// Не предупреждать при закрытии нескольких вкладок
user_pref("browser.tabs.warnOnClose", false);

// Decode copied URLs, containing UTF8 symbols
// Декодировать URL, содержащий UTF8-символы
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Turn on lazy loading for images
// Включить отложенную загрузку для изображений
user_pref("dom.dom.image-lazy-loading.enabled", true);

// Turn off Extension Recommendations on the Add-ons Manager
// Отключить рекомендуемые расширения на странице "Дополнения"
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Turn off Pocket
// Отключить Pocket
user_pref("extensions.pocket.enabled", false);

// Highlight all occurrences of the phrase when searching
// Подстветить всех вхождения фразы в текст при поиске
user_pref("findbar.highlightAll", true);

// Use scrolling via middle-clicking
// Использовать прокрутку через колёсико мыши (отключает вставку из буфера)
user_pref("general.autoScroll", true);

// Dont use smoothScroll
// Не использовать "плавную" прокрутку
user_pref("general.smoothScroll", false);

// Turn on media control
// Включить элементы управления мультимедиа
user_pref("media.hardwaremediakeys.enabled", true);

// Do not select when double-clicking text the space following the text
// Не выделять при выделении слова двойным нажатием идущий за ним пробел
user_pref("layout.word_select.eat_space_to_next_word", false);

// Turn on UI customizations sync
// Включить синхронизацию кастомизации интерфейса
user_pref("services.sync.prefs.sync.browser.uiCustomization.state", true);

// Enable urlbar built-in calculator
// Включить встроенный в адресную строку калькулятор
user_pref("suggest.calculator", true);

// Show matches next on top of scrollbar
// Показывать совпадения поверх полосы прокрутки
user_pref("ui.textHighlightBackground", "Fireprick");

//// Personal settings
user_pref("browser.uidensity", 1);

// How do I enable search suggestions?
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// What settings are used to enable video conferencing?
user_pref("media.peerconnection.enabled", true);
user_pref("media.peerconnection.ice.no_host", false);
user_pref("media.getusermedia.screensharing.enabled", true);

// How do I enable IPv6?
user_pref("network.dns.disableIPv6", false);

// defaultPref("privacy.firstparty.isolate", true); // enable FPI
// defaultPref("network.cookie.cookieBehavior", 1); // block 3rd party cookies
// defaultPref("network.cookie.lifetimePolicy", 0); // keep cookies untill they expire

// Make scrolling faster
// Сделать скроллинг колёсиком мыши быстрее
user_pref("mousewheel.min_line_scroll_amount", 30);

// СКМ по скроллбару перемещает прокрутку в соответствующее положение
user_pref("middlemouse.scrollbarPosition", true)

// Скрытие плашки про фуллскрин. Работает не очень хорошо.
user_pref("full-screen-api.warning.timeout", 0)
