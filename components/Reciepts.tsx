import { Box, Flex, Square, Stack, Text } from '@chakra-ui/react'

export const Reciept = () => {
  return (
    <Flex justifyContent='space-between' alignItems="center" mb='10px'>
      <Stack spacing='3' direction={'row'} mt='10px'>
        <Square borderRadius='10px' size='50px' bg='white' boxShadow='md' color='black'>
          AB
        </Square>
        <Box>
          <Text fontSize='20px'> User </Text>
          <Text fontSize='12px'> Sub user </Text>
        </Box>
      </Stack>
      <Text color='gray.500'> $40.00</Text>
    </Flex>
  )
}
