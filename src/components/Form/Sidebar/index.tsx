import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiStarLine } from "react-icons/ri";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
     <Box as="aside" w="64" mr="8">
       <Stack spacing="12"  align="flex-start">
       <NavSection title="GERAL">
       <Link display="flex" align="center" color="gray.200">
      <Icon as={RiDashboardLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">Dashboard</Text>
     </Link>
     <Link display="flex" align="center" color="gray.200">
      <Icon as={RiContactsLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">Usuários</Text>
     </Link>
       </NavSection>
       <NavSection title="RANKING">
       <Link display="flex" align="center" color="gray.200">
             <Icon as={RiInputMethodLine} fontSize="20" />
             <Text ml="4" fontWeight="medium">Formulário</Text>
            </Link>
            <Link display="flex" align="center" color="gray.200">
             <Icon as={RiStarLine} fontSize="20" />
             <Text ml="4" fontWeight="medium">Ranking de Atletas</Text>
            </Link>
       </NavSection>
         
       </Stack>
     </Box>
  );
}