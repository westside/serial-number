export interface SerialNumber {
  applicationId: string;
  serialNumber: string;
  description: string;
  registerTime: number;
  lastAccessTime: number;
  validTime: number;
  isValid: boolean;

  isRegistered: boolean;
  requestToken: string;
}

export interface ApplicationInfo {
  id: string;
  name: string;
}

export interface ApplicationLimit {
  applicationId: string;
  maxNumber: number;
}

export interface SerialNumberIssuer {
  id: string;
  serialNumberPrefix: string;
  applicationLimits: ApplicationLimit[];
  name: string;
  description: string;
}

