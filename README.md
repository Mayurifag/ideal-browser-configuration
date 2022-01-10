# My ideal Firefox browser configuration

## Мотивация

Пока нет возможности декларативно описать нужную мне конфигурацию браузера или
написать что-нибудь вроде ansible-скриптов для установки, я решил сделать себе
(и тем, кто ознакомится с репозиторием) шпаргалку по настройке браузера так,
как это вижу я — т.е. предпочитается приватность, но не в ущерб юзабилити.

Если вы используете этот репозиторий по прямому назначению, то инструкцию надо
использовать не как пошаговое руководство, а как пример, — с полным пониманием,
что вы делаете.

## Первичная конфигурация

Используется шаблон `user.js` от Arkenfox, сабмодуль.

```sh
git clone --recurse-submodules https://github.com/Mayurifag/ideal-browser-configuration.git
cd ideal-browser-configuration
export BROWSERCONFPATH=$(pwd)
```

## about:profiles

Удалить неиспользуемый default профиль, чтобы исключить путаницу в будущем.
Опционально можно создать новый профиль. Оставляем вкладку, чтобы был удобный
доступ к директории профиля. Копируем путь к профилю и вставляем туда нужные
файлы софтлинком или копированием.

```sh
export FFPROFILEPATH="/home/user/.mozilla/firefox/ide54w4i.test" # директория профиля
ln -s $BROWSERCONFPATH/user.js/updater.sh $FFPROFILEPATH/updater.sh
chmod +x $FFPROFILEPATH/updater.sh
rm $FFPROFILEPATH/search.json.mozlz4
ln -s $BROWSERCONFPATH/search.json.mozlz4 $FFPROFILEPATH/search.json.mozlz4
ln -s $BROWSERCONFPATH/user-overrides.js $FFPROFILEPATH/user-overrides.js
$FFPROFILEPATH/updater.sh -p $FFPROFILEPATH # -u doesnt work, needs confirmation via 'y'

# TODO: prefsCleaner.sh / scratchpad-scripts / etc.?
```

Затем браузер лучше перезапустить.

## about:preferences

### General

- Set default browser
- Settings for applications by your tastes. Suggesting pdf/torrent changes.
- Unset Show a touch keyboard when necessary

### Search

- Set Default Search Engine
- Search Shortcuts: Remove trash positions / Untick all the things

![Search engines screenshot](./github_readme_images/search_shortcuts.png?raw=true)

## Extensions and Themes

Ниже перечислены аддоны, которыми я пользуюсь, либо же которые достойны
упоминания. Значки перед названием аддона:

- :page_facing_up: — Бекапы настроек для расширений имеются в директории
  `addons_settings`. Часть зашифрована git-crypt.
- :exclamation: — Расширение требует доп. настройки / не умеет в бекап / проч.
- Если значка нет, то скорее всего расширение удовлетворительно работает на
  дефолтных настройках.

### Must have

[:page_facing_up: **uBlock Origin**](https://github.com/gorhill/uBlock/releases)
— блокировка мусорного контента. Возможно больше подошёл бы форк AdNauseam.
Встроенный, думаю, лучше удалить и поставить из github, т.к. тёмная тема пока
только в dev билде.

Импортируемые настройки с бекапа включают сторонние фильтры, включая и мои
собственные из файла `ublock-filters.txt`, которые можно импортировать в uBlock
такой строкой:

```txt
https://raw.githubusercontent.com/Mayurifag/ideal-browser-configuration/main/ublock-filters.txt
```

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

Из скриптов сейчас я использую только:

- [:page_facing_up: **Dollchan Extension Tools**](https://raw.githubusercontent.com/SthephanShinkufag/Dollchan-Extension-Tools/master/src/Dollchan_Extension_Tools.es6.user.js).
  Скрипту обновления приходят лучше, чем расширению.
- [**Back2source**](https://github.com/vladgba/Back2source)

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

Часть используемых мной стилей (в бекапе уже импортированы):

- <https://userstyles.org/styles/165011/2ch-reborn> со своим микрофиксом
  спойлеров (кажется, эта проблема только у меня)
- <https://userstyles.org/styles/166963/dark-and-fix-width-for-rutor> - добавить 6tor.org
- <https://userstyles.org/styles/146887/stylus-deepdark>
- <https://userstyles.org/styles/148112/userstyles-deepdark>
- <https://uso.kkx.one/style/159780> dark addons.mozilla.org

#### Youtube

[**DF YouTube (Distraction Free)**](https://addons.mozilla.org/en-US/firefox/addon/df-youtube/)
— изучение материалов на ютьюбе без мусора, включается изредкa.

[:page_facing_up: **Enhancer for Youtube**](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/)
— дополнительные возможности, темы, etc.

[:page_facing_up: **SponsorBlock**](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/)
— скип встроенной в видео херни (рекламы, сегменты без музыки в музыкальных
видео и т.д.).

#### Other sites

[:page_facing_up: **Augmented Steam** -> https://steam.com](https://addons.mozilla.org/en-US/firefox/addon/augmented-steam/):
Бекап импортируется в настройках внизу справа.

[:page_facing_up: **Better Tweetdeck** -> https://tweetdeck.twitter.com](https://addons.mozilla.org/en-US/firefox/addon/better-tweetdeck-17/)

[:page_facing_up: **BetterTTV** -> https://twitch.tv](https://addons.mozilla.org/en-US/firefox/addon/betterttv/)

[**Global Aliexpress**](https://addons.mozilla.org/en-US/firefox/addon/global-aliexpress/)
— редирект ru->en на алиэкспрессе, тем самым убирая всратый тамошний
автоперевод.

[:page_facing_up: **VkOpt** -> https://vk.com](https://vkopt.net/download/)

[:exclamation: **Pushbullet**](https://addons.mozilla.org/en-US/firefox/addon/pushbullet/)

[:exclamation: **Privacy Redirect**](https://addons.mozilla.org/en-US/firefox/addon/privacy-redirect/)
оставить Bibliogram/Reddit

[**Redirect AMP to HTML**](https://addons.mozilla.org/en-US/firefox/addon/amp2html/)

[**Bypass Paywalls Clean (custom)**](https://addons.mozilla.org/en-US/firefox/addon/bypass-paywalls-clean-custom/)
— иногда скрывает пэйволлы.

### Useful

[**Image Search Options**](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/)
— удобный поиск по картинке из контекстного меню.

[:page_facing_up: **KeepassXC-Browser**](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/)
— компаньон KeepassXC. Использую пароли оттуда, встроенный парольный менеджер
отключен.

[:page_facing_up: **Dynamic History**](https://addons.mozilla.org/en-US/firefox/addon/dynamichistory/)
— не сохранять часть сайтов в истории, как по URL, так и по совпадению регулярки
в контенте вебстраницы. Помимо очевидных примеров использования от мамки — если
я не захочу в порыве прокрастинации заходить на какой-либо сайт (либо сайты по
тематике), то первым делом я добавляю его сюда, чтобы мне было лень вбивать
полный URL.

[:exclamation: **ff2mpv**](https://github.com/woodruffw/ff2mpv) — открыть
контент в mpv. Нужно дополнительно поставить в систему хелпер.

[:page_facing_up: **Tab Session Manager**](https://addons.mozilla.org/en-US/firefox/addon/tab-session-manager/)
— открытие сессии при случайном закрытии браузера или запоминание текущей сессии
при необходимости.

[**Bloody Vikings!**](https://addons.mozilla.org/en-US/firefox/addon/bloody-vikings/) 10 min mail

[:page_facing_up: **FoxyProxy Standard**](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)
— аддон для прокси. В бекапе список сайтов на которых прокси должен включаться.
Настроен на `127.0.0.1:1080` (стандартный эндпоинт shadowsocks)

### Development / productivity

В отдельном файле [JOB.md](JOB.md)

## Настройка криптовалютных кошельков

В отдельном файле [CRYPTO.md](CRYPTO.md)

## Check sites and features you need are working

There is [checklist](CHECK.md) to see if everything you need is working after
repository changes.

## Закладки

- Удалить все имеющиеся закладки (CTRL+B)
- Сделать синхронизацию в
  [:page_facing_up: **floccus**](https://addons.mozilla.org/en-US/firefox/addon/floccus/)
  (у меня бекап в webdav в nextcloud)
- (Опционально) Восстановить favicon'ки через
  [:exclamation: **Checkmarks**](https://addons.mozilla.org/en-US/firefox/addon/checkmarks-web-ext/)

## Отключенные и удалённые расширения

В отдельном файле [NOT_USED_EXTENSIONS.md](NOT_USED_EXTENSIONS.md)

## Внешний вид

Около URL поля на панели кликаем ПКМ и выбираем `Customize Toolbar`. Убираем
пробелы, выбираем темную тему, убираем ненужные расширения с панелей.

## Изменение хоткеев

Здесь должно быть описание того, как я в системе отключаю CTRL+SHIFT+W /
CTRL+SHIFT+Q / CTRL+Q хоткеи, инструкции нужны будут под \*nix и win.

## Примечания

### search.json.mozlz4

В файле `search.json.mozlz4` — используемые мной поисковые движки. Делается из
файла `search.json` через [mozlz4](https://github.com/jusw85/mozlz4). Как
вариант — добавлять движок через [Add custom search engine](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/)
И потом экспортировать из браузера через [mozlz4-edit](https://addons.mozilla.org/en-US/firefox/addon/mozlz4-edit/)

### Agebox

Extension settings are encrypted via [Agebox](https://github.com/slok/agebox).
Cheatsheet:

```sh
agebox encrypt ./addons_settings/sponsor-block/sponsor-block-backup.json # alias to enc
agebox decrypt --all --force --private-keys ./private # alias to dec
agebox reencrypt # alias to e

# initialization
# Install age and agebox
agebox init
age-keygen -o ./private/key.txt
# make ./keys/key.txt with public key from ./private/key.txt
```

### Check `README.md` noted sites working

```sh
docker run -v ${PWD}:/tmp:ro --rm -i ghcr.io/tcort/markdown-link-check:stable /tmp/README.md
```

## Полезные ссылки

- <https://enchiridion.red/2019/1/18/firefox-extensions/>
- <https://librewolf-community.gitlab.io/docs/>
- /s -> Firefox Thread
- <https://github.com/black7375/Firefox-UI-Fix>
- <https://github.com/arkenfox/user.js/wiki/4.1-Extensions>
- <https://enchiridion.red/2019/1/18/firefox-extensions/>

## TODO

- [ ] Suggest folders for automatical downloads, automatically save content to
      Videos/Pictures/etc. Launch torrents automatically. Extension «Save
      In...», InlineDisposition, Cute Save Button. Works on Linux?
- [ ] Productivity addons - block vk.com (but with exception for audio), etc.
- [ ] Twitter View Original Images
- [ ] Session Alive + rules for vtb/tinkoff/etc
- [ ] copy selection as markdown
- [x] Phantom App (Solana Wallet)
- [x] React Developer Tools / Apollo Client DevTools
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/seekingalpha-mfonda/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/tinvest/>
- [ ] Make beautiful user-overrides.js
- [x] Move deleted/disabled extensions to another .md file
- [x] Make «crypto» section at readme.md
- [ ] Section about git submodule update / user.js arkenfox updates
- [x] Make Check.md with instructions to check that firefox works on some sites correctly
- [ ] <https://libreddit.kavin.rocks/r/firefox/comments/rj7ce2/-/hp1s52c>
- [ ] Web pages scanner
- [ ] [FastForward](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/)
- [ ] <https://addons.mozilla.org/mn/firefox/addon/youtube-anti-translate/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/privacy-pass/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/lovely-forks/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/blocktube/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/consent-o-matic/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/torrent-control/>
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/trockerapp/>
- [ ] Ublock settings one click download link for mobile browsers
- [ ] <https://addons.mozilla.org/en-US/firefox/addon/zoom-redirector/>
- [ ] Add github.com search (via gh)
- [ ] Add translations - translate from eng to rus and vice versa (via ten & tru)
