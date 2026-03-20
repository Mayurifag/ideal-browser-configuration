# ideal-browser-configuration

Previously this repository contained a comprehensive Firefox browser configuration guide, including:

- [Arkenfox user.js](https://github.com/arkenfox/user.js) submodule for privacy hardening
- Custom `user-overrides.js` and `userChrome.css` / `userContent.css`
- Custom search engines (`search.json.mozlz4`)
- Curated extension lists — privacy tools, userscripts, userstyles, YouTube enhancers, productivity
- Crypto wallet setup notes, developer extension notes
- Checklist for verifying Firefox works correctly after changes

The repository has been simplified and now contains only a personal **uBlock Origin** filter list.

You should use Helium browser, but it does not have sync abilities, so I can't recommend to use it yet.

## uBlock Origin filter list

Add in uBlock Origin → Filter lists → Custom → Import:

```txt
https://raw.githubusercontent.com/Mayurifag/ideal-browser-configuration/main/ublock-filters.txt
```
