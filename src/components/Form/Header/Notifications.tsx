import { HStack, Icon } from "@chakra-ui/react";
import { RiNotification3Line, RiUserAddLine } from "react-icons/ri";

export function Notifications() {
  return (
    <HStack 
    spacing="4"
    mx="8"
    pr="8"
    py="1"
    color="gray.300"
    borderRightWidth="1"
    borderColor="gray.700"
    >
    <Icon as={RiNotification3Line} fontSize="20" />
    <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}