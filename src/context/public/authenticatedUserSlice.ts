import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "./publicStore";
import {RecordType, WalletRecord} from "../../lib/types/wallet-record.types";

enum AccessLevelEnum {
  MEMBER = 0,
  PREMIUM_MEMBER,
  ADMINISTRATOR,
}

enum UserStatusEnum {
  INACTIVE = 0,
  ACTIVE = 1,
}

type UserProps = {
  firstName: string;
  lastName: string;
  accessLevel: AccessLevelEnum;
  walletRecords: WalletRecord[];
  salary: number;
  status: UserStatusEnum;
};

interface AuthenticatedUserState {
  user: UserProps;
  token: string;
}

const initialState = {
  user: {
    firstName: "John",
    lastName: "Doe",
    walletRecords: [],
    salary: 4999.0,
    accessLevel: AccessLevelEnum.MEMBER,
    status: UserStatusEnum.ACTIVE,
  },
  token: "EMPTY_TOKEN",
} as AuthenticatedUserState;

export const authenticatedUserSlice = createSlice({
  name: "authenticatedUser",
  initialState,
  reducers: {
    addNewRecord: (state, action: PayloadAction<WalletRecord>) => {
      const newRecord = action.payload;
      state.user.walletRecords.push(newRecord);
    },
  },
});

export const { addNewRecord } = authenticatedUserSlice.actions;
export const selectAuthenticatedUser = (state: RootState) =>
  state.authenticatedUser;
export default authenticatedUserSlice.reducer;
