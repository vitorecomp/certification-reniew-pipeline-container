export abstract class BaseConfig {
    protected zeroSSLKey: string = ""
    protected domain: string = ""

    abstract setAttributes(): void

    constructor(){
        this.setAttributes()
    }

    copyAttributes(baseConfig : BaseConfig): void {
        this.zeroSSLKey = baseConfig.zeroSSLKey
        this.domain = baseConfig.domain
    }
}