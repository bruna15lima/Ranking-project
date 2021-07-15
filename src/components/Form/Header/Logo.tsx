import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
    fontSize="3x1" 
    fontWeight="bold" 
    letterSpacing="tight" 
    w="64"
    >
    Ranking de Atletas
    <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  );
}