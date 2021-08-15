# Ideal browser configuration

## Мотивация

Пока нет возможности декларативно описать нужную мне конфигурацию браузера или
написать что-нибудь вроде ansible-скриптов для установки, я решил сделать себе
(и тем, кто ознакомится с репозиторием) шпаргалку по настройке LibreWolf так,
как это вижу я — т.е. предпочитается приватность, но не в ущерб юзабилити.

Если вы используете этот репозиторий по прямому назначению, то инструкцию надо
использовать не как пошаговое руководство, а как пример, — с полным пониманием,
что вы делаете.

inb4: Да, это всё вместе уживается и не тормозит у меня в браузере на mid-end
конфигурациях лаптопа и пекарни.

## Какие браузеры есть на рынке

Из тех кроссплатформенных браузеров, которыми я пользовался, выделить можно
несколько:

1. **LW** LibreWolf (Firefox fork)
   <https://librewolf-community.gitlab.io/install/>
2. Ungoogled Chromium <https://github.com/Eloston/ungoogled-chromium>
3. **FF** Firefox Beta (если LibreWolf не подходит)
   <https://www.mozilla.org/en-US/firefox/channel/desktop/>

Далее повествование будет идти про LibreWolf, но это универсальные шаги,
доступные и на Firefox. Аналогичные расширения могут быть доступны и для
браузеров, основанных на Chromium.

## librewolf.overrides.cfg

Смотрим <https://gitlab.com/librewolf-community/settings/-/wikis/FAQ>

```sh
git clone https://github.com/Mayurifag/ideal-browser-configuration.git
cd ideal-browser-configuration
### Linux
mkdir -p $HOME/.librewolf/
cp librewolf.overrides.cfg $HOME/.librewolf/librewolf.overrides.cfg
### Win
mkdir -p %USERPROFILE%\.librewolf\
cp librewolf.overrides.cfg %USERPROFILE%\.librewolf\librewolf.overrides.cfg
```

## about:profiles

Удалить неиспользуемый default профиль, чтобы исключить путаницу в будущем.
Опционально можно создать новый профиль. Оставляем вкладку, чтобы был удобный
доступ к директории профиля.

Копируем `user.js`, `search.json.mozlz4` и директорию `chrome` в директорию
профиля.

В папке chrome лежит немного измененный стиль (убрал раскраску url bar и
вкладок) по
[инструкции](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme/tree/master/Full%20dark%20theme)
(оригинальный файл оставлен, чтобы в будущем patch легко сделать по диффу можно
было).

В файле `search.json.mozlz4` — используемые мной поисковые движки. Делается из
файла `search.json` через [mozlz4](https://github.com/jusw85/mozlz4).

![Search engines screenshot](./github_readme_images/search_shortcuts.png?raw=true)

После копирования всех файлов браузер лучше перезапустить.

## about:preferences

### General

- Set default browser
- Unset 'Check your spelling as you type'
- Settings for applications by your tastes. Suggesting pdf/torrent changes.
- Unset 'Use recommended perfomance settings' -> Unset 'Use hardware
  acceleration when available'
- Network Settings -> Enable DNS-over-HTTPS

### Home

- Set blank pages

### Search

- Set Default Search Engine
- Tick Provide search suggestions -> Tick all 3 options
- Search Shortcuts: Remove trash positions

### Privacy & Security

- Untick 'Delete cookies and site data when LibreWolf is closed'
- History -> Remember things; Untick «Clear history when LibreWolf closes»
- Block VR devices

## Extensions and Themes

Надо включить 'Update Add-ons automatically' в настройках.

Ниже перечислены аддоны, которыми я пользуюсь, либо же которые достойны
упоминания. Значки перед названием аддона:

- :page_facing_up: — Бекапы настроек для расширений имеются в директории
  `addons_settings`. Часть зашифрована git-crypt.
- :exclamation: — Расширение требует доп. настройки / не умеет в бекап / проч.
- Если значка нет, то скорее всего расширение удовлетворительно работает на
  дефолтных настройках.

### Must have

[:page_facing_up: **uBlock Origin**](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
— блокировка мусорного контента. Возможно больше подошёл бы форк AdNauseam.
Встроенный, думаю, лучше удалить и поставить из AMO.

Импортируемые настройки с бекапа включают сторонние фильтры, включая и мои
собственные из файла `ublock-filters.txt`, которые можно импортировать в uBlock
такой строкой:

```txt
https://raw.githubusercontent.com/Mayurifag/ideal-browser-configuration/main/ublock-filters.txt
```

Остальные сторонние фильтры:

- Hello, Goodbye!
- I don't care about cookies
- RU AdList: BitBlock + Fanboy's General
- RU AdList: Counters

По настройкам фильтров можно ссылаться на статью по
[ссылке](https://forums.lanik.us/viewtopic.php?f=102&t=22512). Так же
[для блокировки рекламы Яндекса](https://forums.lanik.us/viewtopic.php?f=102&t=22749)
нужно расширение
[**Scriptlet Doctor**](https://github.com/JustOff/scriptlet-doctor/releases).

[:page_facing_up: **Dark Reader**](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
— универсальная темная тема.

[**Select Link Text**](https://addons.mozilla.org/en-US/firefox/addon/select-link-text/)
— форк Select Like a Boss, расширение, чтобы выделять ссылки для копирования без
перехода после отпускания ЛКМ.

### Privacy

[**Smart Referer**](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/)
— спуфинг реферер заголовка с автообновляемым whitelist.

[:exclamation: **Clear URLs**](https://addons.mozilla.org/en-US/firefox/addon/clearurls/)
— чистка URL от лишних маркетинговых и прочих меток. Надо сравнить с
альтернативами типа Pure URL / Neat URL. После установки снять галки со
статистики и бэджа.

[:exclamation: **User-Agent Switcher and Manager**](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/)
— рандом аддон для смены Useragent. В моем редком сценарии использования не
имеет смысл бекапить настройки — нужно только убрать галку «Открывать страницу
FAQ при обновлении», а затем выставить при надобности один из предлагаемых
юзерагентов.

[:exclamation: **CanvasBlocker**](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)
— Stealth settings/reCAPTCHA exception apply

[**Smart HTTPS**](https://addons.mozilla.org/en-US/firefox/addon/smart-https-revived/)
— то, как встроенный https редиректинг в браузере должен работать из коробки.

### Sites enhancements

#### Userscripts

Стоит предпочесть то расширение, которое рекомендует создатель используемых вами
юзерскриптов. Примеры:

- [:page_facing_up: **Violentmonkey**](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/):
  опенсорс, актуальное расширение для FF
- Greasemonkey: было популярно раньше, но стало менее активно разрабатываться
- Tampermonkey: проприетарное решение, разрабатывалось изначально под Chromium
- Firemonkey: опенсорс, наиболее перспективное из упомянутых. Так же может быть
  использовано для стилей.

Из скриптов сейчас я использую только
[:page_facing_up: **куклу**](https://raw.githubusercontent.com/SthephanShinkufag/Dollchan-Extension-Tools/master/src/Dollchan_Extension_Tools.es6.user.js).
У неё есть расширение для Firefox со своими преимуществами, однако на практике
скрипт для меня лучше, т.к. частенько нужны хотфиксы, которые получается
использовать быстрее именно через скрипт.

#### Userstyles

Dark Reader покрывает большую часть моих потребностей, но есть стили, которые
улучшают сайт по вкусу авторов.

Cтили можно искать на <https://userstyles.org>, но лучше использовать более
юзабельное зеркало <https://uso.kkx.one>. Ещё есть <https://userstyles.world>,
на данный момент там работающие свежие годные стили, но в не очень большом
количестве.

Есть несколько расширений для юзерстилей:

- [:page_facing_up: **Stylus**](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
- Stylish: старое расширение, скурвилось после продажи userstyles.org
- Firemonkey: упоминалось выше. Не использую, т.к. нет удобной киллерфичи —
  установки стилей не заходя на userstyles.org

Используемые мной стили (в бекапе уже импортированы):

- <https://userstyles.org/styles/165011/2ch-reborn> со своим микрофиксом
  спойлеров (кажется, эта проблема только у меня)
- <https://userstyles.org/styles/129171/reddit-minimal-dark>
- <https://userstyles.org/styles/134432/wikia-fandom-uncluttered-and-unbranded>
- <https://userstyles.org/styles/167022/material-dark-wikipedia>
- <https://userstyles.org/styles/166963/dark-and-fix-width-for-rutor>
- <https://userstyles.org/styles/204678/material-dark-for-google>
- <https://userstyles.org/styles/146887/stylus-deepdark>
- <https://userstyles.org/styles/148112/userstyles-deepdark>

#### Bypass

[**Bypass Paywalls Clean (custom)**](https://addons.mozilla.org/en-US/firefox/addon/bypass-paywalls-clean-custom/)
— иногда скрывает пэйволлы.

[:exclamation: **Skip Redirect**](https://addons.mozilla.org/en-US/firefox/addon/skip-redirect/)
— не тратить время на сокращенных и редирект ссылках. Универсальные правила,
работают, например, на смарт-лабе, но могут ломать что-нибудь другое.

Чтобы корректно работал, например, поиск по картинкам (в т.ч. с расширения Image
Search Options), надо добавить в `No-skip-urls-list` регэксп с исключениями.
Пример для Яндекса:

```txt
yandex.(ru|com)/images/search*
```

[:page_facing_up: **FoxyProxy Standard**](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)
— аддон для прокси. В бекапе список сайтов на которых прокси должен включаться.
Настроен на `127.0.0.1:1080` (стандартный эндпоинт shadowsocks)

#### Youtube

[**DF YouTube (Distraction Free)**](https://addons.mozilla.org/en-US/firefox/addon/df-youtube/)
— изучение материалов на ютьюбе без мусора, включается изредкa.

[:page_facing_up: **Enhancer for Youtube**](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/)
— дополнительные возможности, темы, etc.

[:page_facing_up: **SponsorBlock**](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/)
— скип встроенной в видео херни (рекламы, сегменты без музыки в музыкальных
видео и т.д.).

#### Other sites

[:page_facing_up: **Augmented Steam** -> https://steam.com](https://addons.mozilla.org/en-US/firefox/addon/enhanced-steam-an-itad-fork/):
Бекап импортируется в настройках внизу справа.

[:page_facing_up: **Better Tweetdeck** -> https://tweetdeck.twitter.com](https://addons.mozilla.org/en-US/firefox/addon/better-tweetdeck-17/)

[:page_facing_up: **BetterTTV** -> https://twitch.tv](https://addons.mozilla.org/en-US/firefox/addon/betterttv/)

[**Global Aliexpress**](https://addons.mozilla.org/en-US/firefox/addon/global-aliexpress/)
— редирект ru->en на алиэкспрессе, тем самым убирая всратый тамошний
автоперевод.

[:page_facing_up: **VkOpt** -> https://vk.com](https://vkopt.net/download/)

### Useful

[**Image Search Options**](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/)
— удобный поиск по картинке из контекстного меню.

[:page_facing_up: **KeepassXC-Browser**](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/)
— компаньон KeepassXC. Использую пароли оттуда, встроенный парольный менеджер
отключен.

[:exclamation: **Metamask**](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
— ETH кошелёк. Необходимо настроить сам кошелек и binance подсеть. TODO:
добавить инструкцию

[:page_facing_up: **Dynamic History**](https://addons.mozilla.org/en-US/firefox/addon/dynamichistory/)
— не сохранять часть сайтов в истории, как по URL, так и по совпадению регулярки
в контенте вебстраницы. Помимо очевидных примеров использования от мамки — если
я не захочу в порыве прокрастинации заходить на какой-либо сайт (либо сайты по
тематике), то первым делом я добавляю его сюда, чтобы мне было лень вбивать
полный URL.

[:exclamation: **ff2mpv**](https://github.com/woodruffw/ff2mpv) — открыть
контент в mpv. Нужно дополнительно поставить в систему хелпер.

[**To Deepl**](https://addons.mozilla.org/en-US/firefox/addon/to-deepl/) —
первый попавшийся переводчик для deepl, почти не использую.

[:exclamation: **Tab Session Manager**](https://addons.mozilla.org/en-US/firefox/addon/tab-session-manager/)
— открытие сессии при случайном закрытии браузера или запоминание текущей сессии
при необходимости. Нет встроенного бекапа настроек, жду пока девелопер запилит
([issue](https://github.com/sienori/Tab-Session-Manager/issues/350)).

### Development / РАБота

[**Pinned Google Calendar**](https://addons.mozilla.org/en-US/firefox/addon/pinned-google-calendar/)
— периодами необходимое расширение

[**JSON Lite**](https://addons.mozilla.org/en-US/firefox/addon/json-lite/) —
смотреть большие json-чики со свистелками без смс

[**Vue.js devtools**](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Disabled, but worth mentioning

Absolute Enable Right Click & Copy (+ аналоги) — изредка можно включить, когда
надо что-то с дурацких сайтов скопировать.

Authenticator — Удобная замена смартфонному Google Authenticator, пока не
настраивал.

Tree Style Tabs - древовидная структура вкладок. Я так и не смог переехать, даже
несмотря на то, что сейчас у меня ультравайд 4к монитор. Возможно потому что в
моем сценарии использования нет 300 вкладок открытых 24/7/365.

Vimium (+ аналоги) — управление браузером с клавиатуры + много других
возможностей. Мне пока не подходит.

TrackMeNot — гугл блочит на стандартных настройках. Поресёрчить.

### Deleted

<https://github.com/The-OP/Fox/blob/master/greylist.md#user-content-stylish>

Blockchain DNS — можно было удобно заходить на \*.lib сайты без пердолинга, но
сейчас не нужно.

Buster: Captcha Solver for Humans — такое ощущение, что не работает или я не
понял как им пользоваться.

Decentraleyes / LocalCDN (fork) — задумка хорошая, но на практике может ломать
сайты и не приносит особой пользы. Можно использовать в отдельном браузере на
знакомых сайтах, где всё работает или изредка париться с исключенями.

## Внешний вид

Около URL поля на панели кликаем ПКМ и выбираем `Customize Toolbar`. Убираем
пробелы, выбираем темную тему, убираем ненужные расширения с панелей.

Опционально потребуется после установок аддонов с помощью
[Addons UUID Replacer](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme/releases/)
сгенерировать addons.css, чтобы ublock и другие расширения тоже были темными.
Для этого понадобится указать путь к профилю в cmd.

## Закладки

- Удалить все имеющиеся закладки (CTRL+B)
- Сделать синхронизацию в
  [:page_facing_up: **floccus**](https://addons.mozilla.org/en-US/firefox/addon/floccus/)
  (у меня бекап в webdav в nextcloud)
- (Опционально) Восстановить favicon'ки через
  [:exclamation: **Checkmarks**](https://addons.mozilla.org/en-US/firefox/addon/checkmarks-web-ext/)

## Изменение хоткеев

Здесь должно быть описание того, как я в системе отключаю CTRL+SHIFT+W /
CTRL+SHIFT+Q / CTRL+Q хоткеи, инструкции нужны будут под \*nix и win.

## Полезные ссылки

- <https://ffprofile.com/>
- <https://librewolf-community.gitlab.io/docs/>
- <https://2ch.hk/s> -> Firefox Thread
- <https://github.com/black7375/Firefox-UI-Fix>
- <https://gitlab.com/librewolf-community/settings/-/wikis/FAQ>
- <https://github.com/arkenfox/user.js/wiki/4.1-Extensions>
- <https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme>

## TODO

- [x] Make search configuration via `search.json.mozlz4` file. Need to add
      4pda/amo(addons.mozilla.org)/yt(youtube)/gp(google play)/t(tinkoff pulse)
      shortcuts
- [x] Suggest extension for bookmarks
- [ ] Suggest folders for automatical downloads, automatically save content to
      Videos/Pictures/etc. Launch torrents automatically. Extension «Save
      In...», InlineDisposition, Cute Save Button
- [ ] Pushbullet
- [ ] Reddit enhancement suite
- [ ] Privacy Redirect
- [x] Suggest restore session solution (not by default, but via button if
      needed) (mysessions or smth)
- [x] Any way to make addons.mozilla.org dark? — done via chrome folder
- [x] ~~Fix dark theme input boxes instruction. maybe extension or smth. Check
      if its needed actually somehow. Seems not.~~
- [x] Make extensions collections list on addons.mozilla.org ~~to install all of
      them via single install button~~ (yea you cant do it right now..)
- [x] Move personal ublock list / ~~dollchan spells~~ into this repository +
      archive previous
  - [x] Move ublock list
  - [x] ~~Move dollchan spells (do i really need it to be shared?)~~
- [x] Find «Select like a boss» working alternative
- [x] Proxy extension for several sites
