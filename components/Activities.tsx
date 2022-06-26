import { Box, Flex, Stack, Text, Link } from '@chakra-ui/react'
import { MdOutlineInsertChartOutlined } from 'react-icons/md'
import { RiExchangeBoxLine } from 'react-icons/ri'
import { BsCreditCard2Back } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import {IoIosLogOut} from 'react-icons/io'
import NextLink from 'next/link'

export const Activities = () => {
  return (
    <Flex alignItems='center' direction='column' justifyContent='space-between' w='300px' bg='white' h='100vh' borderRightRadius='10px' boxShadow='md' px='20px' py='20px' position='fixed'>
      <Box cursor='pointer' as='a'>
        <NextLink passHref href='/'>
            <Text textStyle='logo' > 🤑DOGWU </Text>
        </NextLink>
      </Box>
      <Stack gap='10' px='10px' w='100%' flexBasis='60%' textStyle='nav'>
        <NextLink passHref href='/'>
          <Link>
            <Flex cursor='pointer' alignItems='center'>
              <MdOutlineInsertChartOutlined fontSize='24px' color='purple' />
              <Text ml='1rem'>Dashboard</Text>
            </Flex>  
          </Link>
        </NextLink>
        <NextLink passHref href='/'>
          <Link>
            <Flex cursor='pointer' alignItems='center'>
              <RiExchangeBoxLine fontSize='24px' color='purple' />
              <Text ml='1rem'>Transactions</Text>
            </Flex>
          </Link>
        </NextLink>
        <NextLink passHref href='/'>
          <Link>
            <Flex cursor='pointer' alignItems='center'>
              <BsCreditCard2Back fontSize='24px' color='purple' />
              <Text ml='1rem'>Cards</Text>
            </Flex>
          </Link>
        </NextLink>
        <NextLink passHref href='/'>
          <Link>
            <Flex cursor='pointer' alignItems='center'>
              <CgProfile fontSize='24px' color='purple' />
              <Text ml='1rem'>
                Profile</Text>
            </Flex>
          </Link>
        </NextLink>
      </Stack>
      <Flex w='100%' alignItems='center' h='80px'>
        <Flex textStyle='nav' alignItems='center'>
          <IoIosLogOut fontSize='24px' color='red' />
          <Text ml='6px'> Log Out </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}