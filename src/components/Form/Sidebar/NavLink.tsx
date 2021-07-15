
import { ElementType } from "react";

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink() {
  return(
    <Link display="flex" align="center" color="gray.200">
      <Icon as={RiDashboardLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">Dashboard</Text>
     </Link>
  );
}