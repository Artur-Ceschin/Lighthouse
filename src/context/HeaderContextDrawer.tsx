import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface HeaderContextDrawerProps {
  children: ReactNode;
}

type HeaderDrawerContextData = UseDisclosureReturn;
const HeaderContextDrawer = createContext({} as HeaderDrawerContextData);

export function HeaderContextDrawerProvider({
  children,
}: HeaderContextDrawerProps) {
  const disclosure = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return (
    <HeaderContextDrawer.Provider value={disclosure}>
      {children}
    </HeaderContextDrawer.Provider>
  );
}

export const useHeaderDrawer = () => useContext(HeaderContextDrawer);
