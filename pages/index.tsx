import { Box, Stack } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"

const Home = () => {
  return (
    <Stack direction='row'  h='100vh' bg='brand.bg'>
      <Sidebar />
      <Box h='100vh' m='0'  position='relative' left='230px'>

      </Box>
    </Stack>
  )
}
export default Home