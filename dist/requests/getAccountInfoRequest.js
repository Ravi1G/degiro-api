"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountInfoRequest = void 0;
// Import modules
var node_fetch_1 = __importDefault(require("node-fetch"));
// Import debug console log
var utils_1 = require("../utils");
// Importamos constantes
var enums_1 = require("../enums");
var GET_ACCOUNT_INFO = enums_1.DEGIRO_API_PATHS.GET_ACCOUNT_INFO;
function getAccountInfoRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
        };
        // Do the request to get a account config data
        var uri = "" + accountConfig.data.tradingUrl + GET_ACCOUNT_INFO + accountData.data.intAccount + ";jsessionid=" + accountConfig.data.sessionId;
        utils_1.debug("Making request to " + uri);
        node_fetch_1.default(uri, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            utils_1.debug('Response:\n', JSON.stringify(res, null, 2));
            var data = res.data;
            resolve(data);
        })
            .catch(reject);
    });
}
exports.getAccountInfoRequest = getAccountInfoRequest;
//# sourceMappingURL=getAccountInfoRequest.js.map