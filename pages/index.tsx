import { Box, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import {BsArrowRightSquare,BsArrowUpSquare} from 'react-icons/bs'
import {BiBarChartSquare} from 'react-icons/bi'
import { Activities } from "../components/Activities"
import { BalanceCard } from "../components/BalanceCard"
import { ExpenseCard } from "../components/ExpenseCard"
import { TransactionOverview } from "../components/TransactionOverview"

const Home = () => {
  return (
    <Stack direction='row' h='100%' pos='absolute' bg='brand.bg'>
      <Box>
        <Sidebar />
      </Box>
      <Box w='calc(100vw - 530px)' py='20px' px='40px' position='absolute' left='222px' minH='100%' bg='brand.bg'>
        <Heading> Dashboard</Heading>
        <Tabs h='100px' bg='white' boxShadow='md' mt='30px' borderRadius='16px' variant='unstyled'>
          <TabList w='100%' h='100%'>
            <Tab
              w='33.3%'
              borderRadius='16px'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white'
              }}
              _active={{
                focusBorderColor:'none',
              }}>
              <BsArrowRightSquare fontSize='20px'/>
              <Text ml='10px'>Send Money</Text>
              </Tab>
            <Tab
              w='33.3%'
              borderRadius='16px'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white'
              }}
              _active={{
                focusBorderColor:'none',
              }}>
              <BiBarChartSquare fontSize='20px'/>
              <Text ml='10px'>Statements</Text>
              </Tab>
            <Tab
              w='33.3%'
              borderRadius='16px'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white'
              }}
              _active={{
                focusBorderColor:'none',
              }}>
              <BsArrowUpSquare fontSize='20px'/>
              <Text ml='10px'>Top up</Text>
              </Tab>
          </TabList>
            <Box mx='-40px' mt='20px' px='32px' bg='brand.bg' >
              <TabPanels>
                <TabPanel>
                  <Flex justifyContent='space-between' alignItems='center' mb='30px'>
                    <BalanceCard/>
                    <ExpenseCard/>  
                  </Flex>
                  <TransactionOverview/>
                </TabPanel>
                <TabPanel>
                  <BalanceCard/>
                  <BalanceCard/>
                  <BalanceCard/>
                </TabPanel>
                <TabPanel>
                  <BalanceCard/>
                  <BalanceCard/>
                  <BalanceCard/>
                </TabPanel>
              </TabPanels>    
          </Box>
        </Tabs>
      </Box>
      <Box pos='absolute' left='calc(100vw - 310px)'>
        <Activities/>
      </Box>
    </Stack>
  )
}
export default Home