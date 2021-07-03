import {Flex, SimpleGrid, Box, Text} from "@chakra-ui/react"
import { Header } from "../components/Form/Header"
import { Sidebar } from "../components/Form/Sidebar"

export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh">
    <Header />

    <Flex w="100%" m="6" maxWidth={1480} mx="auto" px="6">
    <Sidebar />

    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
    
    <Box
    p="8"
    bg="gray.800"
    borderRadius={8}

    >
      <Text fontSize="lg" mb="4">Taxa de abertura</Text>
    </Box>
    <Box
    p="8"
    bg="gray.800"
    borderRadius={8}

    >
      <Text fontSize="lg" mb="4">Inscritos da semana</Text>
    </Box>
    </SimpleGrid>
    </Flex>

    </Flex>
  )
}