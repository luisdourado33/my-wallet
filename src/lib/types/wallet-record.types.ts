export enum RecordType {
  EXPENSE,
  INCOME,
}

export interface WalletRecord {
  place: string;
  description: string;
  dateOfOccurrence: Date;
  category: string;
  value: number;
  type: RecordType;
}
