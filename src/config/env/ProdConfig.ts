import { BaseConfig } from "./BaseConfig";

export class ProdConfig extends BaseConfig {
    setAttributes(): void {
        if(process.env.ZERO_SSL_KEY != undefined)
            this.zeroSSLKey =  process.env.ZERO_SSL_KEY
        else
            throw "Undefined process.env.ZERO_SSL_KEY, is necessary to set it in production mode"

        if(process.env.DOMAIN != undefined)
            this.domain = process.env.DOMAIN
        else
            throw "Undefined process.env.DOMAIN, is necessary to set it in production mode"
        
    }
}