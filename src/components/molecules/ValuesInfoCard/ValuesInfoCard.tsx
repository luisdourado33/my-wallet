import React, {useMemo} from "react";

import {getFormattedCurrencyByCountry} from "../../../utils/currency/get-formatted-currency-by-country";
import {getTotalByType} from "../../../utils/currency/get-total-in-currency-format";

import {
  Box,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel
} from "@chakra-ui/react";
import {CardContainer} from "./styles.modules";

import {RecordType, WalletRecord} from "../../../lib/types/wallet-record.types";
import {FaMoneyBillAlt} from "react-icons/fa";

interface Props {
  salary: number;
  walletRecords: WalletRecord[];
}

const ValuesInfoCard = (data: Props) => {
  const formattedSalary: string = getFormattedCurrencyByCountry(data.salary, "BR")
  const totalExpenses = useMemo(() => {
    return getTotalByType(data.walletRecords, RecordType.EXPENSE)
  }, [data]);

  const totalIncomes = useMemo(() => {
    return getTotalByType(data.walletRecords, RecordType.INCOME)
  }, [data]);

  const balance = (data.salary + totalIncomes) - totalExpenses;

  const isSpendingMoreThanReceives = balance < 0; // => set it to global state!!!

  return (
    <CardContainer cursor="pointer">
      <CardHeader mb={0} p={4}>
        <Box display={'flex'} alignItems={'center'}>
          {/*<Icon as={FaMoneyBillAlt} fontSize={'20px'} mr={1} color={'green'}/>*/}
          <Heading size="xs" fontWeight="light" >
            Balance
          </Heading>
        </Box>
        <Heading size="md" color={isSpendingMoreThanReceives ? 'red' : 'green'}>
          {getFormattedCurrencyByCountry(balance, 'BR')}
        </Heading>
      </CardHeader>

      <CardBody mt={0} p={4} pt={0}>
        <StatGroup>
          <Stat size={'sm'}>
            <StatLabel fontSize={'xs'}>Total incomes</StatLabel>
            <StatHelpText>
              <StatArrow type='increase'/>
              {getFormattedCurrencyByCountry(totalIncomes, 'BR')}
            </StatHelpText>
          </Stat>

          <Stat size={'sm'}>
            <StatLabel fontSize={'xs'}>Total expense</StatLabel>

            <StatHelpText>
              <StatArrow type='decrease'/>
              {getFormattedCurrencyByCountry(totalExpenses, 'BR')}
            </StatHelpText>
          </Stat>
        </StatGroup>
      </CardBody>
    </CardContainer>
  );
};

export default ValuesInfoCard;
