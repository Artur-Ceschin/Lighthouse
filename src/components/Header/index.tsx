import {
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { useHeaderDrawer } from '../../context/HeaderContextDrawer';
import { HeaderNav } from './HeaderNav';

export function Header() {
  const { isOpen, onClose } = useHeaderDrawer();

  const isDrawerHeader = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerHeader) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <HeaderNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return <HeaderNav />;
}
