import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react'
import React from 'react'

export const BalanceCard = () => {
  return (
    <Flex justifyContent='center' direction='column' alignItems='center' h='280px' w='350px' bg='white' borderRadius='12px' boxShadow='lg' mb='20px'>
      <Text> Total Balance</Text>
      <Heading mt='6px'> <Text as='span' fontSize='18px' pb='10px' >$</Text> 12,900 </Heading>
      <Tag variant='subtle' colorScheme='green' px='30px' py='8px' mt='10px'> +234 </Tag>
    </Flex>
  )
}
