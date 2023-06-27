import React from 'react';
import { Events } from '../typescript/interfaces/apiInterfaces';
import useFetch from '../hooks/UseFetch';

interface EventsDataProps {
    children: React.ReactNode;
  }

interface EventsDataType {
  data?: Events[];
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
  
const EventsDataContext = React.createContext<EventsDataType>(initialValue);

export const EventsDataProvider = ({ children }:EventsDataProps) => {
    const [apiOffset, setApiOffset] = React.useState(0)
    const [searched, setSearched] = React.useState(false)
    const [data, setData] = React.useState<Events[]>()
    const {error,loading,request} = useFetch()
  const [disableFirstRender, setDisableFirstRender] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')

    async function fetchData(offset?: number, title?: string)  {
        if (title) {
            setApiOffset(0)
            setSearched(true)
            const json = await request("/events", title, offset)
            setData(json?.results)
            console.log("eventos1")
        } else {
            console.log("eventos2")
            const json = await request("/events", title, offset)
            if (!json || searched) {
                setSearched(false)
                setData(json?.results)
            } else {
                setData((chrt) => (chrt ? [...chrt, ...json?.results] : json?.results))
            }
        }
  };

  const contextValue: EventsDataType = {
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
    <EventsDataContext.Provider value={contextValue}>
      {children}
    </EventsDataContext.Provider>
  );
};

export default EventsDataContext;