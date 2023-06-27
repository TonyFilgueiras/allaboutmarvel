import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import SortIcon from '@mui/icons-material/Sort';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
// import PopUpMenu from '../components/PopUpMenu'
import MethodNotImplementedContext from '../contexts/MethodNotImplementedContext'
import Loading from '../components/Loading'
import CardsContainer from '../components/CardsContainer'
import Cards from '../components/Cards'
import CharactersDataContext from '../contexts/CharactersContext'
import Title from '../components/Title';
import { useParams } from 'react-router-dom';
import ComicsDataContext from '../contexts/ComicsContext';
import EventsDataContext from '../contexts/EventsContext';
import SeriesDataContext from '../contexts/SeriesContext';
import StoriesDataContext from '../contexts/StoriesContext';
import Error from '../components/Error';



const ViewContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  text-align: center;
`

const OptionsContainer = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  `

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
`

const OptionLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.containers};
  font-weight: bold;
  margin: 0 8px;
  
  `

const StyledIconButton = styled.button`
  padding: 20px;
  transition: all.2s;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.cyan};

  }
  &:active{
    transform: scale(.9);
  }
  
  `

export default React.memo(function CharactersView() {
  const { toggleBox } = React.useContext(MethodNotImplementedContext)
  const { cards } = useParams()
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const characterData = React.useContext(CharactersDataContext);
  const comicsData = React.useContext(ComicsDataContext);
  const eventsData = React.useContext(EventsDataContext);
  const seriesData = React.useContext(SeriesDataContext);
  const storiesData = React.useContext(StoriesDataContext);
  const [contextUsing, setContextUsing] = React.useState<number>(0)
  const contextData = [ characterData, comicsData, eventsData, seriesData, storiesData ];
  // const [isSortMenuOpened, setIsSortMenuOpened] = React.useState(false)
  // const [isAspectRatioOpened, setIsAspectRatioOpened] = React.useState(false)

  React.useEffect(() => {
    switch (cards) {
      case 'characters':
        setContextUsing(0);
        break;
      case 'comics':
        setContextUsing(1);
        break;
      case 'events':
        setContextUsing(2);
        break;
      case 'series':
        setContextUsing(3);
        break;
      case 'stories':
        setContextUsing(4);
        break;
    }
  },[cards,contextUsing])

  React.useEffect(() => {
      if (!contextData[contextUsing].disableFirstRender) {
        if (searchTerm) {
          contextData[contextUsing].fetchData(contextData[contextUsing].apiOffset, searchTerm)
        } else {
          contextData[contextUsing].fetchData(contextData[contextUsing].apiOffset);
        }
    }
    contextData[contextUsing].setDisableFirstRender(false)
    
    return () => {
      contextData[contextUsing].setDisableFirstRender(true)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextData[contextUsing].apiOffset, searchTerm, contextUsing])
    
    React.useEffect(() => {
      function handleScroll() {
        // Calculate the scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if scrolled to the bottom
        if (scrollTop + windowHeight >= documentHeight && !contextData[contextUsing].typingText && !contextData[contextUsing].loading) {
          contextData[contextUsing].setApiOffset(contextData[contextUsing].apiOffset + 100)
        }
      }
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contextData[contextUsing].apiOffset, contextData[contextUsing].typingText]);
  
  React.useEffect(() => {
    if (!contextData[contextUsing].disableFirstRender) {
      setIsTyping(true)
      const typingTimer = setTimeout(() => {
        setIsTyping(false)
        setSearchTerm(contextData[contextUsing].typingText)
      }, 2500)
      
      return () => clearTimeout(typingTimer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[contextData[contextUsing].typingText])
  
  // function handleSortIconClick(event :React.MouseEvent<HTMLButtonElement>) {
  //   const { clientX, clientY} = event;
  //   setMousePosition({ x: clientX, y: clientY });
  //   setIsSortMenuOpened(!isSortMenuOpened)
  // }
  // function handleAspectRatioIconClick(event :React.MouseEvent<HTMLButtonElement>) {
  //   const { clientX, clientY } = event;
  //   setMousePosition({ x: clientX, y: clientY });
  //   setIsAspectRatioOpened(!isAspectRatioOpened)
  // }

  // const PopUpMenuItens : PopUpMenuItensInterface= {
  //   SortItens: [
  //     { text: "A → Z", id: 1, onClick: handleSort(1) },
  //     { text: "Z → A", id: 2, onClick: handleSort(2) },
  //     { text: "Most Recent ", id: 3, onClick: handleSort(3) },
  //     { text: "Oldest", id: 4, onClick: handleSort(4) },
  //   ],
  //   AspectRatio: [
  //     { text: "Small icons", id: 1, onClick: handleResize(1) },
  //     { text: "Medium icons", id: 2, onClick: handleResize(2) },
  //     { text: "Large icons", id: 3, onClick: handleResize(3) }
  //   ],
  // }
  
  // function handleSort(id: number) {
  //   console.log(`id: ${id}`)
  // }
  // function handleResize(id: number) {
  //   console.log(`id: ${id}`)
  // }

  return (
    <ViewContainer>
      <Title>{cards![0].toUpperCase() + cards?.slice(1)}</Title>
      <Input value={contextData[contextUsing].typingText} type='text' placeholder='Search for Character' onChange={(event) => contextData[contextUsing].setTypingText(event.target.value)} />
      <OptionsContainer>
        <OptionItem>
          <OptionLabel>Sort</OptionLabel>
          <StyledIconButton onClick={toggleBox}><SortIcon /></StyledIconButton>
          {/* <PopUpMenu mousePosition={mousePosition}  isOpened={isSortMenuOpened} onClick={handleSort(2)} itens={PopUpMenuItens.SortItens}/> */}
        </OptionItem>
          
        <OptionItem>
          <OptionLabel>Resize</OptionLabel>
          <StyledIconButton onClick={toggleBox}><AspectRatioIcon/></StyledIconButton>
          {/* <PopUpMenu  mousePosition={mousePosition} isOpened={isAspectRatioOpened} onClick={handleResize} itens={PopUpMenuItens.AspectRatio}/> */}
        </OptionItem>

      </OptionsContainer>
        <CardsContainer>
          {contextData[contextUsing].data && contextData[contextUsing].data!.map((card) => <Cards card={card} key={card.id}/>)}
        </CardsContainer>
      {(contextData[contextUsing].loading || isTyping) && <Loading/>}
      {contextData[contextUsing].error && <Error/>}
    </ViewContainer>
  )
})