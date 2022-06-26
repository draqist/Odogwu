import { Box, Flex, Stack, Text, Link, Avatar } from '@chakra-ui/react';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { RiExchangeBoxLine } from 'react-icons/ri';
import { BsCreditCard2Back } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoIosLogOut } from 'react-icons/io';
import NextLink from 'next/link';
import { Reciept } from './Reciepts';

export const Activities = () => {
  return (
    <Box
      w="300px"
      bg="white"
      h="100vh"
      borderRightRadius="10px"
      boxShadow="md"
      px="20px"
      py="20px"
      position="fixed"
    >
      <Flex textStyle='logo' justifyContent='space-between' alignItems="center">
        <Text fontSize="20px"> Hello Draq. </Text>
        <Avatar src='https://bit.ly/kent-c-dodds' name ='Draq' width='43px' h='43px'/>
      </Flex>
      <Box px="10px" w="100%" h='250px' textStyle="nav">
        
      </Box>
      <Box w="100%" alignItems="center" h="" textStyle='h1'>
        <Text> Recent Activity </Text>
        <Box>
          <Reciept/>
          <Reciept/>
          <Reciept/>
          <Reciept/>
        </Box>
      </Box>
    </Box>
  );
};
