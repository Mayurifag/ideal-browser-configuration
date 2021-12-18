# Удалённые или неиспользуемые часто расширения

## Disabled

Absolute Enable Right Click & Copy (+ аналоги) — изредка можно включить, когда
надо что-то с дурацких сайтов скопировать.

[:exclamation: **User-Agent Switcher and Manager**](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/)
— рандом аддон для смены Useragent. В моем редком сценарии использования не
имеет смысл бекапить настройки — нужно только убрать галку «Открывать страницу
FAQ при обновлении», а затем выставить при надобности один из предлагаемых
юзерагентов.

[:exclamation: **Skip Redirect**](https://addons.mozilla.org/en-US/firefox/addon/skip-redirect/)
— не тратить время на сокращенных и редирект ссылках. Универсальные правила,
работают, например, на смарт-лабе, но могут ломать что-нибудь другое.

Чтобы корректно работал, например, поиск по картинкам (в т.ч. с расширения Image
Search Options), надо добавить в `No-skip-urls-list` регэксп с исключениями.
Пример для Яндекса:

```txt
yandex.(ru|com)/images/search*
```

## Deleted

[:exclamation: **Clear URLs**](https://addons.mozilla.org/en-US/firefox/addon/clearurls/)
— чистка URL от лишних маркетинговых и прочих меток. Надо сравнить с
альтернативами типа Pure URL / Neat URL. После установки снять галки со
статистики и бэджа. Заменяется фильтром в юблоке.

Blockchain DNS — можно было удобно заходить на \*.lib сайты без пердолинга, но
сейчас не нужно.

Buster: Captcha Solver for Humans — такое ощущение, что не работает или я не
понял как им пользоваться.

Trace/Sidebery/Chameleon/CanvasBlocker/Canvas Fingerprint Defender

Authenticator — Удобная замена смартфонному Google Authenticator, использую TOTP из KeepassXC

Tree Style Tabs - древовидная структура вкладок. Я так и не смог переехать, даже
несмотря на то, что сейчас у меня ультравайд 4к монитор. Возможно потому что в
моем сценарии использования нет 300 вкладок открытых 24/7/365.

Vimium (+ аналоги) — управление браузером с клавиатуры

TrackMeNot — гугл блочит на стандартных настройках. Поресёрчить.

## Ссылки с объяснением для удаления/отключения расширений

- <https://github.com/The-OP/Fox/blob/master/greylist.md#user-content-stylish>
- <https://github.com/arkenfox/user.js/wiki/4.1-Extensions>

### Check `NOT_USED_EXTENSIONS.md` noted sites working

```sh
docker run -v ${PWD}:/tmp:ro --rm -i ghcr.io/tcort/markdown-link-check:stable /tmp/NOT_USED_EXTENSIONS.md
```
