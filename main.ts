import {Config} from "./src/config/Config"
import logger from "./src/config/logger/Logger"

const config : Config = new Config()

logger.debug(config)