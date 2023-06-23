import React from 'react';
import { MousePosition } from '../typescript/interfaces/appInterfaces';

interface MethodNotImplementedProps {
    children: React.ReactNode;
  }

interface MethodNotImplementedType {
  isOpen: boolean;
    toggleBox: (event: React.MouseEvent<HTMLButtonElement>) => void;
    mousePosition : MousePosition;
}
const initialValue = {
    isOpen: false,
    toggleBox: () => { },
    mousePosition: { x: 0, y: 0 },
};
  
const MethodNotImplementedContext = React.createContext<MethodNotImplementedType>(initialValue);

export const MethodNotImplementedProvider = ({ children }:MethodNotImplementedProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [clickEnabled, setClickEnabled] = React.useState(true);
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });

    const toggleBox = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (clickEnabled) {
            setClickEnabled(false)
            const { clientX, clientY} = event;
            setMousePosition({ x: clientX, y: clientY });
            setIsOpen(true)
            setTimeout(() => {
                setClickEnabled(true)
                setIsOpen(false);
            },2000)
          
      }
  };

  const contextValue: MethodNotImplementedType = {
    isOpen,
    toggleBox,
    mousePosition,
  };

  return (
    <MethodNotImplementedContext.Provider value={contextValue}>
      {children}
    </MethodNotImplementedContext.Provider>
  );
};

export default MethodNotImplementedContext;