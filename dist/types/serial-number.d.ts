import { SerialNumberIssuer, SerialNumber, ApplicationInfo, ApplicationLimit } from './SerialNumber';
export default class SerialNumberComponent {
    generateApplication: (name: string) => ApplicationInfo;
    generateIssuer: (name: string, description: string, maxNumber: number, applicationLimits: ApplicationLimit[]) => SerialNumberIssuer;
    generateSerialNumber: (issuer: SerialNumberIssuer) => SerialNumber;
}
export { SerialNumberIssuer, SerialNumber, ApplicationLimit, ApplicationInfo, };
