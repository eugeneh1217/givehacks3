import { Text, Link } from "@chakra-ui/react";
const MenuIt = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 8, md: 0 }}
        mr={{ base: 0, md: isLast ? 0 : 12 }}
        display="block"
        {...rest}
      >
        <Link href={to}>{children}</Link>
      </Text>
    );
  };
  
export default MenuIt