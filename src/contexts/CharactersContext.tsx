import React from 'react';
import { Characters } from '../typescript/interfaces/apiInterfaces';
import useFetch from '../hooks/UseFetch';

interface CharactersDataProps {
    children: React.ReactNode;
  }

interface CharactersDataType {
  characters?: Characters[];
  fetchCharacters: (offset?: number, name?: string) => void;
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
  fetchCharacters: () => { },
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
    const [characters, setCharacters] = React.useState<Characters[]>()
    const {error,loading,request} = useFetch()
  const [disableFirstRender, setDisableFirstRender] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')

    async function fetchCharacters(offset?: number, name?: string)  {
        if (name) {
            setApiOffset(0)
            setSearched(true)
            const data = await request("/characters", name, offset)
            setCharacters(data?.results)
          } else {
            const data = await request("/characters", name, offset)
            if (!characters || searched) {
              setSearched(false)
              setCharacters(data?.results)
            } else {
              setCharacters((chrt)=> chrt!.concat(data?.results))
            }
          }
  };

  const contextValue: CharactersDataType = {
    characters,
    fetchCharacters,
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