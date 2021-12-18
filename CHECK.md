# Links and features to check after installation

## Features

- Mic/cam works → go to <https://meet.google.com> or zoom
- Check referral aliexpress links working (take example from <vk.com/pcstonks>)
- Check cookies for extensions. Pushbullet has to be loginned after restart,
  etc.
- Right-click menu has to be working fine on sites that use its own menu. Check
  somewhere at <https://docs.google.com/spreadsheets/u/0/>
- Check pdf files to be shown somewhere you wish them to be opened

## Sites

- Check cloudflare → go to <https://2ch.hk/test> and message something
- Check cloudfront → go to <https://binance.com>
- Check punycodes → go to <https://гибдд.рф>

## Notes

### Check `CHECK.md` noted sites working

```sh
docker run -v ${PWD}:/tmp:ro --rm -i ghcr.io/tcort/markdown-link-check:stable /tmp/CHECK.md
```
