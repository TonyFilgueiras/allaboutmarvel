import React from "react";


export default function useScreenWidth(maxWidth:number) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    
      React.useEffect(() => {
        // Update the window width when the window is resized
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    const isBelowMaxWidth = windowWidth <= maxWidth;

    return isBelowMaxWidth
    

}
