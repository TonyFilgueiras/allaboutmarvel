import React from 'react';
import { Stories } from '../typescript/interfaces/apiInterfaces';
import useFetch from '../hooks/UseFetch';

interface StoriesDataProps {
    children: React.ReactNode;
  }

interface StoriesDataType {
  data?: Stories[];
  fetchData: (offset?: number, title?: string) => void;
  error?: string;
  loading: boolean;
  setApiOffset: React.Dispatch<React.SetStateAction<number>>;
  apiOffset: number;
  setDisableFirstRender: React.Dispatch<React.SetStateAction<boolean>>;
  disableFirstRender: boolean;
  typingText: string;
  setTypingText: React.Dispatch<React.SetStateAction<string>>;
}
const initialValue = {
  fetchData: () => { },
  loading: false,
  setApiOffset: () => { },
  apiOffset: 0,
  setDisableFirstRender: () => { },
  disableFirstRender: false,
  typingText: '',
  setTypingText: ()=>{},
};
  
const StoriesDataContext = React.createContext<StoriesDataType>(initialValue);

export const StoriesDataProvider = ({ children }:StoriesDataProps) => {
    const [apiOffset, setApiOffset] = React.useState(0)
    const [searched, setSearched] = React.useState(false)
    const [data, setData] = React.useState<Stories[]>()
    const {error,loading,request} = useFetch()
  const [disableFirstRender, setDisableFirstRender] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')

    async function fetchData(offset?: number, title?: string)  {
        if (title) {
            setApiOffset(0)
            setSearched(true)
            const json = await request("/stories", title, offset)
            setData(json?.results)
          } else {
            const json = await request("/stories", title, offset)
            if (!json || searched) {
              setSearched(false)
              setData(json?.results)
            } else {
              setData((chrt) => (chrt ? [...chrt, ...json?.results] : json?.results))
            }
          }
  };

  const contextValue: StoriesDataType = {
    data,
    fetchData,
    error,
    loading,
      setApiOffset,
      apiOffset,
      setDisableFirstRender,
    disableFirstRender,
    typingText,
    setTypingText,
    
  };

  return (
    <StoriesDataContext.Provider value={contextValue}>
      {children}
    </StoriesDataContext.Provider>
  );
};

export default StoriesDataContext;