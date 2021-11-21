import { useHeaderDrawer } from '../context/HeaderContextDrawer';
import {
  Box,
  Divider,
  Stack,
  useBreakpointValue,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
export function DrawerIcon() {
  const { onOpen, isOpen } = useHeaderDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {!isWideVersion && !isOpen && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open navigation"
          fontSize="30"
          variant="unstyled"
          onClick={onOpen}
          ml="4"
          mt="4"
        ></IconButton>
      )}
    </>
  );
}
