import { SerialNumberIssuer, SerialNumber, ApplicationInfo, ApplicationLimit } from './SerialNumber'

export default class SerialNumberComponent {
  public generateApplication = (name: string) :ApplicationInfo => {
    return {
      id: name,
      name,
    }
  }

  public generateIssuer = (name: string,
                           description: string,
                           maxNumber: number, applicationLimits: ApplicationLimit[]) : SerialNumberIssuer => {


    return {
      description,
      name,
      id: '',
      serialNumberPrefix: 'prefix',
      applicationLimits,
    }
  }

  public generateSerialNumber = (issuer: SerialNumberIssuer): SerialNumber => {
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

    }
  }
}

export {
  SerialNumberIssuer,
  SerialNumber,
  ApplicationLimit,
  ApplicationInfo,
}

