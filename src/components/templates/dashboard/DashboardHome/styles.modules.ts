import styled from "styled-components";

import { Flex } from "@chakra-ui/react";

export const Container = styled(Flex)`
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
