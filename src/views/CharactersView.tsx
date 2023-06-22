import React from 'react'
import BaseTitle from "../styles/BaseTitle"
import styled from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Input from '../components/Input'
import { Characters } from '../typescript/interfaces'
import SortIcon from '@mui/icons-material/Sort';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

const ViewContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
`

const Title = styled.h1`
  ${BaseTitle};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0,1fr));
  grid-gap: 5px;
  margin-bottom: 40px;
`
const CharactersContainers = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`
const CharactersImg = styled.img`
  margin: 0 auto;
  height: 50px;
  width: 50px;
  border-radius: 10px;
`
const OptionsContainer = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  `

const OptionItem = styled.li`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0px 0 10px;
`

const OptionLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.containers};
  font-weight: bold;
  margin: 0 8px;
  
  `

const StyledIconButton = styled.button`
  padding: 5px;
  transition: all.2s;

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.cyan};

  }

`


export default function CharactersView() {
  const { loading, error, request } = useFetch()
  const [characters, setCharacters] = React.useState<Characters[]>()

    React.useEffect(() => {
      async function fetchCharacters() {
        if (!characters) {
          console.log('consultando como quem n quer nada kkkk se fode ae seu cuzao')
          const data = await request("/characters")
          setCharacters(data?.results)

        }  
      } 
          
      fetchCharacters()
      console.log(characters)  
    },[request])
    
  return (
    <ViewContainer>
      <Title>Characters</Title>
      <Input type='text' placeholder='Search for Character' />
      <OptionsContainer>
        <OptionItem>
          <OptionLabel>Sort</OptionLabel>
          <StyledIconButton ><SortIcon/></StyledIconButton>
        </OptionItem>
          
        <OptionItem>
          <OptionLabel>Resize</OptionLabel>
          <StyledIconButton><AspectRatioIcon/></StyledIconButton>
        </OptionItem>

      </OptionsContainer>
      <GridContainer>
        {loading && <Title>Carregando</Title>}
        {error && <Title>Error</Title>}
        {characters && characters.map((character) => (
          <CharactersContainers key={character.id}>
            <CharactersImg src={ `${character.thumbnail?.path}/portrait_small.${character.thumbnail?.extension}` } alt={character.name} />
            {character.name}
          </CharactersContainers>
        ))}
      </GridContainer>
    </ViewContainer>
  )
}