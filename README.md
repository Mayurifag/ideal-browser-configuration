# Ideal browser configuration [WIP]

## Мотивация

Пока нет возможности декларативно описать нужную мне конфигурацию браузера или написать что-нибудь вроде ansible-скриптов для установки, я решил сделать себе (и тем, кто ознакомится с репозиторием) шпаргалку по настройке LibreWolf так, как это вижу я — т.е. предпочитается приватность, но не в ущерб юзабилити.

Настройка делается на ваш страх и риск, инструкцию надо использовать не как пошаговое руководство, а как пример, с полным пониманием, что вы делаете.

Часть файлов зашифрована git-crypt.

## Какие браузеры есть на рынке

Из тех кроссплатформенных браузеров, которыми я пользовался, выделить можно несколько:

1. **LW** LibreWolf (Firefox fork) <https://librewolf-community.gitlab.io/install/>
2. Ungoogled Chromium <https://github.com/Eloston/ungoogled-chromium>
3. **FF** Firefox Beta (если LibreWolf не подходит) <https://www.mozilla.org/en-US/firefox/channel/desktop/>

Далее повествование будет идти про LibreWolf, но это универсальные шаги, доступные и на Firefox. Аналогичные расширения могут быть доступны и для браузеров, основанных на Chromium.

## Первичная настройка

### Внешний вид

Около URL поля на панели кликаем ПКМ и выбираем `Customize Toolbar`. Убираем пробелы, редактируем закладки, выбираем темную тему.

### about:profiles

Удалить неиспользуемый default профиль, чтобы исключить путаницу в будущем. Оставляем вкладку, чтобы был удобный доступ к директории профиля.

### Ставим нужные поиски (если не используем whoogle/searchx)

- Выставляем настройку Добавить панель поиска на панель инструментов
- Переходим на <https://mycroftproject.com/search-engines.html>
- Ищем `Google Encrypted (NCR, No PWS, Safe Off, en-US)` (должна быть единственной)
- Добавляем в браузер
- Убираем настройку Добавить панель поиска на панель инструментов

### Копируем user.js

... в папку профиля. TODO: добавить команду здесь.

### about:preferences

#### General

- Set default browser
- Unset 'Enable Container Tabs'
- Unset 'Check your spelling as you type'
- Settings for applications by your tastes. Suggesting pdf/torrent changes.
- Unset 'Use recommended perfomance settings' -> Unset 'Use hardware acceleration when available'
- Unset 'Enable picture-in-picture video controls'

Nothing to do at «Home» section.

#### Search

- Set Default Search Engine
- Tick Provide search suggestions -> Tick all 3 options
- Search Shortcuts: Remove everything except favourite search engine. Set 'g' shortcut.

#### Privacy & Security

- Untick 'Delete cookies and site data when LibreWolf is closed'
- History -> Remember things; Clear history Settings -> Pick what you dont need after browser reboot

## Addons and backuped settings

Ниже перечислены аддоны, которыми я пользуюсь, либо же которые достойны упоминания. Бекапы настроек по возможности и надобности имеются в директории `addons_settings`.

### Must have FF Recommended

[**uBlock Origin**](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) — блокировка мусорного контента.

Импортируемые настройки с бекапа включают сторонние фильтры, включая и мои собственные.
По настройкам фильтров можно ссылаться на статью по [ссылке](https://forums.lanik.us/viewtopic.php?f=102&t=22512). Так же [для блокировки рекламы Яндекса](https://forums.lanik.us/viewtopic.php?f=102&t=22749) нужно расширение [**Scriptlet Doctor**](https://github.com/JustOff/scriptlet-doctor/releases).

[**Dark Reader**](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) — универсальная темная тема. Имеется бекап настроек в репозитории.

[**Image Search Options**](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/) — удобный поиск по картинке из контекстного меню. Стандартных настроек более чем достаточно.

[**Bypass Paywalls**](https://github.com/iamadamdev/bypass-paywalls-chrome) — иногда скрывает пэйволлы.

[**KeepassXC-Browser**](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/) — компаньон KeepassXC. Использую пароли оттуда, встроенный парольный менеджер отключен. Имеется бекап настроек.

### Privacy

[**Smart Referer**](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/) — спуфинг реферер заголовка с автообновляемым whitelist.

[**Clear URLs**](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) — чистка URL от лишних маркетинговых и прочих меток. Есть бекап настроек, но, кажется, это стандартные. И, судя по .conf файлу, лучше с нуля прощёлкать нужные настройки. Надо сравнить с альтернативами типа Pure URL / Neat URL.

### Sites enhancements

#### Userscripts

Стоит предпочесть то расширение, которое рекомендует создатель используемых вами юзерскриптов. Примеры:

- [**Violentmonkey**](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/): опенсорс, актуальное расширение для FF
- Greasemonkey: было популярно раньше, но стало менее активно разрабатываться
- Tampermonkey: проприетарное решение, разрабатывалось изначально под Chromium
- Firemonkey: опенсорс, наиболее перспективное из упомянутых. Так же может быть использовано для стилей.

Из скриптов сейчас я использую только [**куклу**](https://raw.githubusercontent.com/SthephanShinkufag/Dollchan-Extension-Tools/master/src/Dollchan_Extension_Tools.es6.user.js). У неё есть расширение для Firefox со своими преимуществами, однако на практике скрипт для меня лучше, т.к. частенько нужны хотфиксы, которые получается использовать быстрее именно через скрипт.

#### Userstyles

#### Youtube

[**Enhancer for Youtube**](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/) — дополнительные возможности, темы, etc. Есть бекап.

[**SponsorBlock**](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/) — скип встроенной в видео херни (рекламы, сегменты без музыки в музыкальных видео и т.д.). Есть бекап.

[**DF YouTube (Distraction Free)**](https://addons.mozilla.org/en-US/firefox/addon/df-youtube/) — изучение материалов на ютьюбе без мусора, включается изредкa.

### Disabled, but worth mentioning

Bookmark Dupes / Checkmarks — расширения для работы с закладками. Думаю использовать универсальные сервисы, вместо хранения закладок в браузере.

Absolute Enable Right Click & Copy (+ аналоги) — изредка можно включить, когда надо что-то с дурацких сайтов скопировать.

### Deleted

Blockchain DNS — можно было удобно заходить на *.lib сайты без пердолинга, но сейчас не нужно.

Decentraleyes / LocalCDN (fork) — задумка хорошая, но на практике может ломать сайты и не приносит особой пользы. Можно использовать в отдельном браузере на знакомых сайтах, где всё работает или изредка париться с исключенями.

HTTPZ / Smart HTTPS / HTTPS Everywhere — не вижу практической пользы. Сайты с банками/паролями и так HTTPS. Встроенные инструменты в браузерах закрывают потребность. Более того, можно через http сайты посмотреть заглушки ISP или бесплатного Wi-Fi, если не работает интернет.

## Полезные ссылки

- <https://librewolf-community.gitlab.io/docs/>
- <https://github.com/black7375/Firefox-UI-Fix>
- <https://gitlab.com/librewolf-community/settings/-/wikis/FAQ>
- <https://github.com/arkenfox/user.js/wiki/4.1-Extensions>

## TODO

- Make search configuration via `search.json.mozlz4` file. Need to add 4pda/amo(addons.mozilla.org)/yt(youtube)/gp(google play) shortcuts
- Suggest extension for bookmarks
- Suggest folders for automatical downloads, automatically save content to Videos/Pictures/etc. Launch torrents automatically.
- Suggest restore session solution (not by default, but via button if needed)
