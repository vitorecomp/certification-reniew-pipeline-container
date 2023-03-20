import {Config} from "./src/config/Config"
import logger from "./src/config/logger/Logger"
import { ZeroSSL } from "zerossl"
import { Certificate } from "zerossl/dist/lib/types"
import fs from "fs";


const config : Config = new Config()
logger.debug(config)


const zerossl = new ZeroSSL({ accessKey: config.zeroSSLKey })

const main = async (): Promise<any> => {
    const certificatesRecords = await zerossl.listCertificates()

    const certificatesIds : string[] = certificatesRecords.results
        .filter(certificate => certificate.status == 'issued')
        .filter(certificate => certificate.common_name == config.domain)
        .map(certificate => {
            logger.info(`${certificate.id}, ${certificate.status}, ${certificate.common_name}`)
            return certificate.id
        })
        
    if(certificatesIds.length == 0)
        throw "Certificate not found"

    const certificateId = certificatesIds[0]
    if(certificatesIds.length > 1){
        logger.warn(`multiple certifications identified, using ${certificateId}`)
    }

    const certificate: Certificate = await zerossl.downloadCertificate(certificateId)

    if (!fs.existsSync(config.resultPath)){
        fs.mkdirSync(config.resultPath);
    }

    logger.debug(certificate)

    logger.debug('certificate.crt')
    logger.debug('\n' + certificate['certificate.crt'])
    fs.writeFileSync(config.getCertificationPath(), certificate['certificate.crt']);
    
    
    logger.debug('ca_bundle.crt')
    logger.debug('\n' + certificate['ca_bundle.crt'])
    fs.writeFileSync(config.getBundleCertificationPath(), certificate['ca_bundle.crt']);
}

main()

