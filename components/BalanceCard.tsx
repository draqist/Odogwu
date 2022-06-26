import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

export const BalanceCard = () => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      alignItems="center"
      h="280px"
      w="100%"
      bg="white"
      borderRadius="12px"
      boxShadow="md"
      mb="20px"
    >
      <Text> Total Balance</Text>
      <Heading mt="6px">
        {' '}
        <Text as="span" fontSize="18px" pb="10px">
          $
        </Text>{' '}
        12,900{' '}
      </Heading>
      <Tag variant="subtle" colorScheme="green" color='whatsapp.800' px="20px" py="10px" mt="10px">
        {' '}
        <BsArrowUp color=''/> <Text ml='4px'> +234{' '} </Text>
      </Tag>
    </Flex>
  );
};
