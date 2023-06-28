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
import Title from '../components/Title';
import Error from '../components/Error';
import CharactersDataContext from '../contexts/CharactersContext';
import OptionsContainer from '../components/OptionsContainer';

const ViewContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  text-align: center;
`

export default React.memo(function ComicsView() {
  const { toggleBox } = React.useContext(MethodNotImplementedContext)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const { typingText, setTypingText, apiOffset, setApiOffset, disableFirstRender, setDisableFirstRender, fetchData, loading, data, error } = React.useContext(CharactersDataContext)

  // const [isSortMenuOpened, setIsSortMenuOpened] = React.useState(false)
  // const [isAspectRatioOpened, setIsAspectRatioOpened] = React.useState(false)
  
    React.useEffect(() => {
      if (!disableFirstRender) {
          if (searchTerm) {
              fetchData(apiOffset, searchTerm)
          
          } else {
              fetchData(apiOffset);
            }
    }
    setDisableFirstRender(false)
    
    return () => {
      setDisableFirstRender(true)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiOffset, searchTerm])
    
    React.useEffect(() => {
      function handleScroll() {
        // Calculate the scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if scrolled to the bottom
          if (scrollTop + windowHeight >= documentHeight && !typingText && !loading) {
          setApiOffset(apiOffset + 100)
        }
      }
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiOffset, typingText]);
  
  React.useEffect(() => {
    if (!disableFirstRender) {
      setIsTyping(true)
      const typingTimer = setTimeout(() => {
        setIsTyping(false)
        setSearchTerm(typingText)
      }, 2500)
      
      return () => clearTimeout(typingTimer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[typingText])
  
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
      <Title>Characters</Title>
      <Input value={typingText} type='text' placeholder='Search for Character' onChange={(event) => setTypingText(event.target.value)} />
        <OptionsContainer />
        <CardsContainer>
          {data && data!.map((card) => <Cards card={card} key={card.id}/>)}
        </CardsContainer>
      {(loading || isTyping) && <Loading/>}
      {error && <Error/>}
    </ViewContainer>
  )
})