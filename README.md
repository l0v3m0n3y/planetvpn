# planetvpn
JavaScript library for planetvpn
# main
```js
const {planetvpn} = require('./planetvpn');

const vpn = new planetvpn();
vpn.offers().then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
