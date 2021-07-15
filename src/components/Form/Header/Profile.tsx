import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Bruna Calheiros</Text>
      <Text color="gray.300" fontSize="small">
        calheiros.bruna@gmail.com
        </Text>
    </Box>

    <Avatar size="md" name="Bruna Calheiros" src="https://github.com/bruna15lima.png"/>
    </Flex> 
  );
}