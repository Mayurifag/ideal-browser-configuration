# Настройка криптовалютных кошельков

## Расширения

[:exclamation: **Metamask**](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
— кошелек для ETH/BNB/Polygon (Matic).

[:exclamation: **Phantom**](https://addons.mozilla.org/en-US/firefox/addon/phantom-app/)
— кошелек для Solana.

## Настройка Metamask

Импорт ETH кошелька по секрет фразе. Отклонить передачу телеметрии. Включить
экспериментальную подгрузку токенов.

У аккаунта лучше нажать **Expand View** для более удобной настройки в
дальнейшем.

### ETH Mainnet

<!-- etherscan sometimes doesnt like checks and gives 403 :S -->

<!-- markdown-link-check-disable -->

Можно добавить используемые токены. Удобно это сделать через web3 интерфейс
к метамаску, к примеру, с <https://etherscan.io>. Это не очень актуально, т.к.
Metamask благодаря настройке их сам подгрузит.

<!-- markdown-link-check-enable-->

### BSC Mainnet

Добавить по ссылке внизу на <https://bscscan.com/> или вручную:

```yml
Network Name: Binance Smart Chain
New RPC URL: https://bsc-dataseed.binance.org/
ChainID: 56
Symbol: BNB
Block Explorer URL: https://bscscan.com
```

### Matic Mainnet

Добавить по ссылке внизу на <https://polygonscan.com/> или вручную:

```yml
Network name: Matic Mainnet
New RPC URL: https://rpc-mainnet.maticvigil.com/
Chain ID: 137
Currency symbol: MATIC
Block Explorer URL: https://explorer.matic.network/
```

Добавить токены, присутствующие на кошельке, к примеру:
<https://polygonscan.com/tokenholdings> + адрес.

## Настройка Phantom

Импорт SOL кошелька по секрет фразе.

## Notes

### Check `CRYPTO.md` noted sites working

```sh
docker run -v ${PWD}:/tmp:ro --rm -i ghcr.io/tcort/markdown-link-check:stable /tmp/CRYPTO.md
```
