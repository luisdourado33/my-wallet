import { RecordType, WalletRecord } from "../../lib/types/wallet-record.types";

export const getTotalByType = (
  records: WalletRecord[],
  type?: RecordType
): number => {
  // TIP: Why this function is commented? A: Decision was made because using for statement to calculate
  // this total by type, is faster than when we use Arr.prototype.reduce
  // const total = records.reduce((accumulator, currentRecord: WalletRecord) => {
  // 	if (currentRecord.type === type) {
  // 		console.log(accumulator + currentRecord.value)
  // 		return accumulator + currentRecord.value;
  // 	}
  //
  // }, 0);

  let total: number = 0;

  for (let index = 0; index < records.length; index++) {
    if (records[index].type === type) {
      total += records[index].value;
    }
  }

  return total;
};
