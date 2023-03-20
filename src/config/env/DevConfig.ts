import { BaseConfig } from "./BaseConfig";

export class DevConfig extends BaseConfig {
    setAttributes(): void {
        this.zeroSSLKey = ""
        this.domain = ""
    }
}