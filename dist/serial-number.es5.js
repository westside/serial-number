var SerialNumberComponent = /** @class */ (function () {
    function SerialNumberComponent() {
        this.generateApplication = function (name) {
            return {
                id: name,
                name: name,
            };
        };
        this.generateIssuer = function (name, description, maxNumber, applicationLimits) {
            return {
                description: description,
                name: name,
                id: '',
                serialNumberPrefix: 'prefix',
                applicationLimits: applicationLimits,
            };
        };
        this.generateSerialNumber = function (issuer) {
            return {
                isRegistered: false,
                description: issuer.name,
                applicationId: '',
                isValid: true,
                lastAccessTime: -1,
                registerTime: -1,
                requestToken: '',
                serialNumber: '',
                validTime: new Date().getTime(),
            };
        };
    }
    return SerialNumberComponent;
}());

export default SerialNumberComponent;
//# sourceMappingURL=serial-number.es5.js.map
