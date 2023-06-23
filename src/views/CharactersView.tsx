import React from 'react'
import BaseTitle from "../styles/BaseTitle"
import styled from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Input from '../components/Input'
import { Characters } from '../typescript/interfaces/apiInterfaces'
import SortIcon from '@mui/icons-material/Sort';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
// import PopUpMenu from '../components/PopUpMenu'
import MethodNotImplementedContext from '../contexts/MethodNotImplementedContext'
import Loading from '../components/Loading'


const ViewContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  ${BaseTitle};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 5px;
  /* justify-content: space-between; */
  margin-bottom: 20px;
  /* border: 1px solid lime; */
  `
const CharactersContainers = styled.div`
  display: flex;
  flex-direction: column;
  &:hover img{
    border: 3px inset red;
  } &:hover{
    cursor: pointer;
  }
  
  `
const CharactersImg = styled.img`
  margin: 0 auto;
  /* height: 50px;
  width: 50px; */
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all.2s;
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

export default function CharactersView() {
  const { toggleBox } = React.useContext(MethodNotImplementedContext)
  const { loading, error, request } = useFetch()
  const [characters, setCharacters] = React.useState<Characters[]>()
  const [apiOffset, setApiOffset] = React.useState(0)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [typingText, setTypingText] = React.useState('')
  const [typing, setTyping] = React.useState(false)
  // const [isSortMenuOpened, setIsSortMenuOpened] = React.useState(false)
  // const [isAspectRatioOpened, setIsAspectRatioOpened] = React.useState(false)

    React.useEffect(() => {
      async function fetchCharacters(offset?: number, name?: string) {
        console.log('consultando como quem n quer nada kkkk se fode ae seu cuzao')

        if (name) {
          setApiOffset(0)
          const data = await request("/characters", apiOffset, name)
          setCharacters(data?.results)
        } else {
          const data = await request("/characters", offset, name)
          if (!characters) {
            setCharacters(data?.results)
          } else {
            setCharacters((chrt)=> chrt!.concat(data?.results))
          }
          
        }

      }  
      
      console.log(characters)  
      // if (!characters) {
        if (searchTerm) {
          fetchCharacters(apiOffset, searchTerm)
          
        } else {
          fetchCharacters(apiOffset);
        }
      // }
    }, [request, apiOffset, searchTerm])
  
    React.useEffect(() => {
      function handleScroll() {
        // Calculate the scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if scrolled to the bottom
        if (scrollTop + windowHeight >= documentHeight) {
          setApiOffset(apiOffset + 100)
          console.log(apiOffset)
          console.log('Scrolled to the bottom');
        }
      }
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [apiOffset]);
  
  React.useEffect(() => {
      setTyping(true)
      const typingTimer = setTimeout(() => {
        setTyping(false)
        setSearchTerm(typingText)
      }, 2500)
      
      return ()=> clearTimeout(typingTimer)
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
      <Input type='text' placeholder='Search for Character' onChange={(event) => setTypingText(event.target.value)} />
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
      <GridContainer>
        {characters && characters.map((character) => (
          <CharactersContainers key={character.id}>
            <CharactersImg src={ `${character.thumbnail?.path}/portrait_xlarge.${character.thumbnail?.extension}` } alt={character.name} />
            {character.name}
          </CharactersContainers>
        ))}
      </GridContainer>
      {(loading || typing) && <Loading/>}
      {error && <Title>Error</Title>}
    </ViewContainer>
  )
}