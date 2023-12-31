import React from 'react';
import { Characters } from '../typescript/interfaces/apiInterfaces';
import useFetch from '../hooks/UseFetch';

interface CharactersDataProps {
    children: React.ReactNode;
  }

interface CharactersDataType {
  data?: Characters[];
  fetchData: (offset?: number, name?: string) => void;
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
  
const CharactersDataContext = React.createContext<CharactersDataType>(initialValue);

export const CharactersDataProvider = ({ children }:CharactersDataProps) => {
  const [apiOffset, setApiOffset] = React.useState(0)
  const [searched, setSearched] = React.useState(false)
  const [data, setData] = React.useState<Characters[]>()
  const {error,loading,request} = useFetch()
  const [disableFirstRender, setDisableFirstRender] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')

    async function fetchData(offset?: number, name?: string)  {
        if (name) {
            setApiOffset(0)
            setSearched(true)
            const json = await request("/characters", name, offset)
            setData(json?.results)
          } else {
            const json = await request("/characters", name, offset)
            if (!json || searched) {
              setSearched(false)
              setData(json?.results)
            } else {
              setData((chrt) => (chrt ? [...chrt, ...json?.results] : json?.results))
            }
          }
  };

  const contextValue: CharactersDataType = {
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
    <CharactersDataContext.Provider value={contextValue}>
      {children}
    </CharactersDataContext.Provider>
  );
};

export default CharactersDataContext;