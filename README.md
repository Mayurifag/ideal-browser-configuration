# Ideal browser configuration

## Мотивация

Пока нет возможности декларативно описать нужную мне конфигурацию браузера или написать что-нибудь вроде ansible-скриптов для установки, я решил сделать себе (и тем, кто ознакомится с репозиторием) шпаргалку по настройке LibreWolf так, как это вижу я — т.е. предпочитается приватность, но не в ущерб юзабилити.

Настройка делается на ваш страх и риск, инструкцию надо использовать не как пошаговое руководство, а как пример, с полным пониманием, что вы делаете.

## Какие браузеры есть на рынке

Из тех кроссплатформенных браузеров, которыми я пользовался, выделить можно несколько:

1. **LW** LibreWolf (Firefox fork) <https://librewolf-community.gitlab.io/install/>
2. Ungoogled Chromium <https://github.com/Eloston/ungoogled-chromium>
3. **FF** Firefox Beta (если LibreWolf не подходит) <https://www.mozilla.org/en-US/firefox/channel/desktop/>

Далее повествование будет идти про LibreWolf, но это универсальные шаги, доступные и на Firefox. Аналогичные расширения могут быть доступны и для браузеров, основанных на Chromium.


## about:profiles

Удалить неиспользуемый default профиль, чтобы исключить путаницу в будущем. Оставляем вкладку, чтобы был удобный доступ к директории профиля.

## about:preferences

### General

- Set default browser
- Unset 'Enable Container Tabs'
- "Colors..." button > Background -> Set dark
- Unset 'Check your spelling as you type'
- Settings for applications by your tastes. Suggesting pdf/torrent changes.
- Unset 'Use recommended perfomance settings' -> Unset 'Use hardware acceleration when available'
- Unset 'Enable picture-in-picture video controls'

Nothing to do at «Home» section.

### Search

- Set Default Search Engine
- Tick Provide search suggestions -> Tick all 3 options
- Search Shortcuts: Remove everything except favourite search engine. Set 'g' shortcut.

### Ставим нужные поиски (если не используем whoogle/searchx)

- Выставляем настройку «Добавить панель поиска на панель инструментов»
- Переходим на <https://mycroftproject.com/search-engines.html>
- Ищем `Google Encrypted (NCR, No PWS, Safe Off, en-US)` (должна быть единственной)
- Добавляем в браузер
- Убираем настройку «Добавить панель поиска на панель инструментов»

### Privacy & Security

- Untick 'Delete cookies and site data when LibreWolf is closed'
- History -> Remember things; Clear history Settings -> Pick what you dont need after browser reboot

## Addons and backuped settings

Ниже перечислены аддоны, которыми я пользуюсь, либо же которые достойны упоминания. Значки перед названием аддона:

- :page_facing_up: — Бекапы настроек для расширений имеются в директории `addons_settings`. Часть зашифрована git-crypt.
- :exclamation: — Расширение требует доп. настройки / не умеет в бекап / проч.
- Если значка нет, то скорее всего расширение удовлетворительно работает на дефолтных настройках.

### Must have

[:page_facing_up:**uBlock Origin**](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) — блокировка мусорного контента. Возможно больше подошёл бы форк AdNauseam.

Импортируемые настройки с бекапа включают сторонние фильтры, включая и мои собственные из файла `ublock-filters.txt`, которые можно импортировать в uBlock такой строкой:

```txt
https://raw.githubusercontent.com/Mayurifag/ideal-browser-configuration/main/ublock-filters.txt
```

По настройкам фильтров можно ссылаться на статью по [ссылке](https://forums.lanik.us/viewtopic.php?f=102&t=22512). Так же [для блокировки рекламы Яндекса](https://forums.lanik.us/viewtopic.php?f=102&t=22749) нужно расширение [**Scriptlet Doctor**](https://github.com/JustOff/scriptlet-doctor/releases).

[:page_facing_up:**Dark Reader**](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) — универсальная темная тема.

### Privacy

[**Smart Referer**](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/) — спуфинг реферер заголовка с автообновляемым whitelist.

[**Clear URLs**](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) — чистка URL от лишних маркетинговых и прочих меток. Есть бекап настроек, но, кажется, это стандартные. И, судя по гигантскому .conf файлу, лучше с нуля прощёлкать нужные настройки. Надо сравнить с альтернативами типа Pure URL / Neat URL.

### Sites enhancements

#### Userscripts

Стоит предпочесть то расширение, которое рекомендует создатель используемых вами юзерскриптов. Примеры:

- [:page_facing_up:**Violentmonkey**](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/): опенсорс, актуальное расширение для FF
- Greasemonkey: было популярно раньше, но стало менее активно разрабатываться
- Tampermonkey: проприетарное решение, разрабатывалось изначально под Chromium
- Firemonkey: опенсорс, наиболее перспективное из упомянутых. Так же может быть использовано для стилей.

Из скриптов сейчас я использую только [:page_facing_up:**куклу**](https://raw.githubusercontent.com/SthephanShinkufag/Dollchan-Extension-Tools/master/src/Dollchan_Extension_Tools.es6.user.js). У неё есть расширение для Firefox со своими преимуществами, однако на практике скрипт для меня лучше, т.к. частенько нужны хотфиксы, которые получается использовать быстрее именно через скрипт.

#### Userstyles

Dark Reader покрывает большую часть моих потребностей, но есть стили, которые улучшают сайт по вкусу авторов.

Cтили можно искать на <https://userstyles.org>, но лучше использовать более юзабельное зеркало <https://uso.kkx.one>.

Есть несколько расширений для юзерстилей:

- [:page_facing_up:**Stylus**](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
- Stylish: старое расширение, скурвилось после продажи userstyles.org
- Firemonkey: упоминалось выше. Не использую, т.к. нет удобной киллерфичи — установки стилей не заходя на userstyles.org

Используемые мной стили (в бекапе уже импортированы):

- <https://userstyles.org/styles/165011/2ch-reborn> со своим микрофиксом спойлеров (кажется, эта проблема только у меня)
- <https://userstyles.org/styles/129171/reddit-minimal-dark>
- <https://userstyles.org/styles/134432/wikia-fandom-uncluttered-and-unbranded>
- <https://userstyles.org/styles/167022/material-dark-wikipedia>

#### Bypass

[**Bypass Paywalls**](https://github.com/iamadamdev/bypass-paywalls-chrome) — иногда скрывает пэйволлы.

[**Universal Bypass**](https://addons.mozilla.org/en-US/firefox/addon/universal-bypass/) — не тратить время на сокращенных ссылках.

#### Youtube

[**DF YouTube (Distraction Free)**](https://addons.mozilla.org/en-US/firefox/addon/df-youtube/) — изучение материалов на ютьюбе без мусора, включается изредкa.

[:page_facing_up:**Enhancer for Youtube**](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/) — дополнительные возможности, темы, etc.

[:page_facing_up:**SponsorBlock**](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/) — скип встроенной в видео херни (рекламы, сегменты без музыки в музыкальных видео и т.д.).

#### Other sites

[:page_facing_up:**Augmented Steam** -> https://steam.com](https://addons.mozilla.org/en-US/firefox/addon/enhanced-steam-an-itad-fork/): Бекап импортируется в настройках внизу справа.

[:page_facing_up:**Better Tweetdeck** -> https://tweetdeck.twitter.com](https://addons.mozilla.org/en-US/firefox/addon/better-tweetdeck-17/)

[:page_facing_up:**BetterTTV** -> https://twitch.tv](https://addons.mozilla.org/en-US/firefox/addon/betterttv/)

[**Global Aliexpress**](https://addons.mozilla.org/en-US/firefox/addon/global-aliexpress/) — редирект ru->en на алиэкспрессе, тем самым убирая всратый тамошний автоперевод.

[:page_facing_up:**VkOpt** -> https://vk.com](https://vkopt.net/download/)

### Useful

[**Image Search Options**](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/) — удобный поиск по картинке из контекстного меню.

[:page_facing_up:**KeepassXC-Browser**](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/) — компаньон KeepassXC. Использую пароли оттуда, встроенный парольный менеджер отключен.

[:exclamation:**Metamask**](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/) — ETH кошелёк. Необходимо настроить сам кошелек и binance подсеть.

[:page_facing_up:**Dynamic History**](https://addons.mozilla.org/en-US/firefox/addon/dynamichistory/) — не сохранять часть сайтов в истории, как по URL, так и по совпадению регулярки в контенте вебстраницы. Помимо очевидных примеров использования от мамки — если я не захочу в порыве прокрастинации заходить на какой-либо сайт (либо сайты по тематике), то первым делом я добавляю его сюда, чтобы мне было лень вбивать полный URL.

[:exclamation:**ff2mpv**](https://github.com/woodruffw/ff2mpv) — открыть контент в mpv. Нужно дополнительно поставить в систему хелпер.

[**To Deepl**](https://github.com/rewkha/firefox-to-deepl) — первый попавшийся переводчик для deepl, почти не использую.

### Development / РАБота

[**Pinned Google Calendar**](https://addons.mozilla.org/en-US/firefox/addon/pinned-google-calendar/) — периодами необходимое расширение

[**JSON Lite**](https://addons.mozilla.org/en-US/firefox/addon/json-lite/) — смотреть большие json-чики со свистелками без смс

[**Vue.js devtools**](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Disabled, but worth mentioning

Absolute Enable Right Click & Copy (+ аналоги) — изредка можно включить, когда надо что-то с дурацких сайтов скопировать.

Authenticator — Удобная замена смартфонному Google Authenticator, пока не настраивал.

Bookmark Dupes / Checkmarks — расширения для работы с закладками. Думаю использовать универсальные сервисы, вместо хранения закладок в браузере.

Tree Style Tabs - древовидная структура вкладок. Я так и не смог переехать, даже несмотря на то, что сейчас у меня ультравайд 4к монитор. Возможно потому что в моем сценарии использования нет 300 вкладок открытых 24/7/365.

Vimium (+ аналоги) — управление браузером с клавиатуры + много других возможностей. Мне пока не подходит.

### Deleted

<https://github.com/The-OP/Fox/blob/master/greylist.md#user-content-stylish>

Blockchain DNS — можно было удобно заходить на *.lib сайты без пердолинга, но сейчас не нужно.

Buster: Captcha Solver for Humans — такое ощущение, что не работает или я не понял как им пользоваться.

Decentraleyes / LocalCDN (fork) — задумка хорошая, но на практике может ломать сайты и не приносит особой пользы. Можно использовать в отдельном браузере на знакомых сайтах, где всё работает или изредка париться с исключенями.

HTTPZ / Smart HTTPS / HTTPS Everywhere — не вижу практической пользы. Сайты с банками/паролями и так HTTPS. Встроенные инструменты в браузерах закрывают потребность. Более того, можно через http сайты посмотреть заглушки ISP или бесплатного Wi-Fi, если не работает интернет.

## Внешний вид

Около URL поля на панели кликаем ПКМ и выбираем `Customize Toolbar`. Убираем пробелы, редактируем закладки, выбираем темную тему, убираем ненужные расширения с панелей.

Копируем `user.js` и директорию `chrome` в директорию профиля. В папке chrome лежит немного измененный стиль (убрал раскраску url bar и вкладок) по [инструкции](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme/tree/master/Full%20dark%20theme) (оригинальный файл оставлен, чтобы в будущем patch легко сделать по диффу можно было).

Нужно посмотреть упомянутую инструкцию и с помощью [Addons UUID Replacer](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme/releases/tag/1.1.0) сделать UUID установленных расширений нужными для css, чтобы ublock и другие расширения тоже были темными.

## Изменение хоткеев

Здесь должно быть описание того, как я в системе отключаю CTRL+SHIFT+W / CTRL+SHIFT+Q / CTRL+Q хоткеи, инструкции нужны будут под *nix и win.

## Полезные ссылки

- <https://librewolf-community.gitlab.io/docs/>
- <https://2ch.hk/s> -> Firefox Thread
- <https://github.com/black7375/Firefox-UI-Fix>
- <https://gitlab.com/librewolf-community/settings/-/wikis/FAQ>
- <https://github.com/arkenfox/user.js/wiki/4.1-Extensions>
- <https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme>

## TODO

- [ ] Make search configuration via `search.json.mozlz4` file. Need to add 4pda/amo(addons.mozilla.org)/yt(youtube)/gp(google play) shortcuts
- [ ] Suggest extension for bookmarks
- [ ] Suggest folders for automatical downloads, automatically save content to Videos/Pictures/etc. Launch torrents automatically. Extension «Save In...», InlineDisposition, Cute Save Button
- [ ] Suggest restore session solution (not by default, but via button if needed)
- [ ] Any way to make addons.mozilla.org dark?
- [ ] Fix dark theme input boxes instruction. maybe extension or smth
- [ ] Make extensions list on addons.mozilla.org to install all of them via single install button
- [ ] Move personal ublock list / dollchan spells into this repository + archive previous
- [ ] Find «Select like a boss» working alternative
- [ ] Proxy extension for several sites
