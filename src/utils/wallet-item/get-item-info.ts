import { RecordType } from "../../lib/types/wallet-record.types";
import { FaMinus, FaPlus } from "react-icons/fa";

export function getWalletRecordIcon(type: RecordType) {
  const types = {
    [RecordType.EXPENSE]: FaMinus,
    [RecordType.INCOME]: FaPlus,
  };

  return types[type];
}
