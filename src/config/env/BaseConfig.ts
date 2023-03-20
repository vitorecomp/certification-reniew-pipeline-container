export abstract class BaseConfig {
    public zeroSSLKey: string = ""
    public domain: string = ""
    public resultPath: string = "./result"
    protected certificatePath: string = "certificate.crt"
    protected bundleCertificationPath: string = "ca_bundle.crt"

    abstract setAttributes(): void

    constructor(){
        this.setAttributes()
    }

    copyAttributes(baseConfig : BaseConfig): void {
        this.zeroSSLKey = baseConfig.zeroSSLKey
        this.domain = baseConfig.domain
    }


    getCertificationPath(): string {
        return this.resultPath + '/' + this.certificatePath
    }
    getBundleCertificationPath(): string {
        return this.resultPath + '/' + this.bundleCertificationPath
    }
}