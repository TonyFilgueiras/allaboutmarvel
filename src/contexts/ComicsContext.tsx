import React from 'react';
import { Comics } from '../typescript/interfaces/apiInterfaces';
import useFetch from '../hooks/UseFetch';

interface ComicsDataProps {
    children: React.ReactNode;
  }

interface ComicsDataType {
  data?: Comics[];
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
  
const ComicsDataContext = React.createContext<ComicsDataType>(initialValue);

export const ComicsDataProvider = ({ children }:ComicsDataProps) => {
    const [apiOffset, setApiOffset] = React.useState(0)
    const [searched, setSearched] = React.useState(false)
    const [data, setData] = React.useState<Comics[]>()
    const {error,loading,request} = useFetch()
  const [disableFirstRender, setDisableFirstRender] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')

    async function fetchData(offset?: number, title?: string)  {
        if (title) {
            setApiOffset(0)
            setSearched(true)
            const json = await request("/comics", title, offset)
            setData(json?.results)
          } else {
            const json = await request("/comics", title, offset)
            if (!json || searched) {
              setSearched(false)
              setData(json?.results)
            } else {
              setData((chrt) => (chrt ? [...chrt, ...json?.results] : json?.results))
            }
          }
  };

  const contextValue: ComicsDataType = {
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
    <ComicsDataContext.Provider value={contextValue}>
      {children}
    </ComicsDataContext.Provider>
  );
};

export default ComicsDataContext;