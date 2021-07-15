import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiStarLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
     <Box as="aside" w="64" mr="8">
       <Stack spacing="12"  align="flex-start">
       <NavSection title="GERAL">       
     <NavLink icon={RiContactsLine}>Usuários</NavLink>     
     <NavLink icon={RiInputMethodLine}>Formulário</NavLink>     
       </NavSection>
       <NavSection title="RANKING">           
     <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
     <NavLink icon={RiStarLine}>Ranking de Atletas</NavLink>            
       </NavSection>
         
       </Stack>
     </Box>
  );
}