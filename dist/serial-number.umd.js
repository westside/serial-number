(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.serialNumber = factory());
}(this, (function () { 'use strict';

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

  return SerialNumberComponent;

})));
//# sourceMappingURL=serial-number.umd.js.map
