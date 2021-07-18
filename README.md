# Ideal browser configuration [WIP]

## Мотивация

Пока нет возможности декларативно описать нужную мне конфигурацию браузера или написать что-нибудь вроде ansible-скриптов для установки, я решил сделать себе (и тем, кто ознакомится с репозиторием) шпаргалку по настройке LibreWolf так, как это вижу я.

Настройка делается на ваш страх и риск, инструкцию надо использовать не как пошаговое руководство, а с полным пониманием, что вы делаете.

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

Выставляем настройку Добавить панель поиска на панель инструментов
Переходим на <https://mycroftproject.com/search-engines.html>
Ищем `Google Encrypted (NCR, No PWS, Safe Off, en-US)` (должна быть единственной)
Добавляем в браузер
Убираем настройку Добавить панель поиска на панель инструментов

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

#### Home

- Set blank pages

#### Search

- Set Default Search Engine
- Tick Provide search suggestions -> Tick all 3 options
- Search Shortcuts: Remove everything except favourite search engine. Set 'g' shortcut.

#### Privacy & Security

- Untick 'Delete cookies and site data when LibreWolf is closed'
- History -> Remember things; Clear history Settings ->

## Полезные ссылки

- <https://librewolf-community.gitlab.io/docs/>
- <https://github.com/black7375/Firefox-UI-Fix>
- <https://gitlab.com/librewolf-community/settings/-/wikis/FAQ>

## TODO

- Make search configuration via `search.json.mozlz4` file. Need to add 4pda/amo/yt shortcuts
- Suggest extension for bookmarks
- Suggest folders for automatical downloads, automatically save content to Videos/Pictures/etc. Launch torrents automatically.
- Suggest restore session solution (not by default, but via button if needed)
