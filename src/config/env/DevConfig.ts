import fs from "fs";
import { BaseConfig } from "./BaseConfig";

export class DevConfig extends BaseConfig {
    setAttributes(): void {
        try {
            // Note that jsonString will be a <Buffer> since we did not specify an
            // encoding type for the file. But it'll still work because JSON.parse() will
            // use <Buffer>.toString().
            const jsonString: string = fs.readFileSync("src/config/dev-files/dev-config.json", { encoding: 'utf-8' });
            const config = JSON.parse(jsonString);

            //zero ssl
            if(config.zeroSSLKey != undefined)
                this.zeroSSLKey =  config.zeroSSLKey
            else
                throw "Undefined file config attribute zeroSSLKey, is necessary to define it on src/config/dev-files/dev-config.json"

            //domain
            if(config.domain != undefined)
                this.domain = config.domain
            else
                throw "Undefined file config attribute domain, is necessary to define it on src/config/dev-files/dev-config.json"

        } catch (err) {
            console.error(err)
            throw "src/config/dev-files/dev-config.json not found please create the file as defined on src/config/dev-files/dev-config-template.json"
        }
    }
}