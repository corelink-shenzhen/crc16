import { _auchCRCHi } from './_authCRCHi';
import { _auchCRCLo } from './_auchCRCLo';

/*
 * @Author: Yu Chen 
 * @Date: 2018-11-05 10:13:48 
 * @Last Modified by: Yu Chen
 * @Last Modified time: 2018-11-05 11:46:42
 */

export function encrypt(u8a: Uint8Array): number {
  let crcId = 0;
  let crcL = 0;
  let crcH = 0;
  let crcValue = 0xffff;
  for (const n of u8a) {
    crcL = crcValue & 0x00ff;
    crcH = crcValue >> 8;
    crcId = crcH ^ n;
    crcH = crcL ^ _auchCRCHi[crcId];
    crcL = _auchCRCLo[crcId];
    crcValue = (crcH << 8) | crcL;
  }
  return crcValue;
}
