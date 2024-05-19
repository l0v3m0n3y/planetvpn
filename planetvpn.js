class planetvpn{
    constructor(){
        this.api = "https://5jyqi1fq.zapov2.xyz"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","Content-Type":"application/vnd.api+json"}
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.text()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async my_ip(){
        return (await this.req(`${this.api}/ip`));
    }
    async register(email){
        return (await this.req(`${this.api}/register`,{"email":email,"visitor_id":"none","affiliate_stamp":"{\"a_aid\":\"500\",\"btag\":\"a500-b1-p0-cRU\"}"}));
    }
    async forgot_password(email){
        return (await this.req(`${this.api}/forgot`,{"email":email}));
    }
    async offers(){
        return (await this.req(`${this.api}/offers`));
    }
}
module.exports = {planetvpn};