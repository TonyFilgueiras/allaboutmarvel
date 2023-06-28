import React from 'react'
import { styled } from 'styled-components'
import SortIcon from '@mui/icons-material/Sort';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import MethodNotImplementedContext from '../contexts/MethodNotImplementedContext';
import { MousePosition, PopUpMenuItensInterface } from '../typescript/interfaces/appInterfaces';
import PopUpMenu from './PopUpMenu';

const StyledOptionsContainer = styled.ul`
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

export default function OptionsContainer() {
    const { toggleBox } = React.useContext(MethodNotImplementedContext)
    const [isSortMenuOpened, setIsSortMenuOpened] = React.useState(false)
    const [isAspectRatioOpened, setIsAspectRatioOpened] = React.useState(false)
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({x: 0, y: 0})

      function handleSortIconClick(event :React.MouseEvent<HTMLButtonElement>) {
    const { clientX, clientY} = event;
    setMousePosition({ x: clientX, y: clientY });
    setIsSortMenuOpened(!isSortMenuOpened)
  }
  function handleAspectRatioIconClick(event :React.MouseEvent<HTMLButtonElement>) {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
    setIsAspectRatioOpened(!isAspectRatioOpened)
  }

  const PopUpMenuItens : PopUpMenuItensInterface= {
    SortItens: [
      { text: "A → Z", id: 1, onClick: handleSort(1) },
      { text: "Z → A", id: 2, onClick: handleSort(2) },
      { text: "Most Recent ", id: 3, onClick: handleSort(3) },
      { text: "Oldest", id: 4, onClick: handleSort(4) },
    ],
    AspectRatio: [
      { text: "Small icons", id: 1, onClick: handleResize(1) },
      { text: "Medium icons", id: 2, onClick: handleResize(2) },
      { text: "Large icons", id: 3, onClick: handleResize(3) }
    ],
  }
  
  function handleSort(id: number) {
    console.log(`id: ${id}`)
  }
  function handleResize(id: number) {
    console.log(`id: ${id}`)
  }
  return (
    <StyledOptionsContainer>
        <OptionItem>
          <OptionLabel>Sort</OptionLabel>
          <StyledIconButton onClick={handleSortIconClick}><SortIcon /></StyledIconButton>
          <PopUpMenu mousePosition={mousePosition}  isOpened={isSortMenuOpened} onClick={handleSort(2)} itens={PopUpMenuItens.SortItens}/>
        </OptionItem>
          
        <OptionItem>
          <OptionLabel>Resize</OptionLabel>
          <StyledIconButton onClick={toggleBox}><AspectRatioIcon/></StyledIconButton>
          <PopUpMenu  mousePosition={mousePosition} isOpened={isAspectRatioOpened} onClick={handleResize(3)} itens={PopUpMenuItens.AspectRatio}/>
        </OptionItem>
    </StyledOptionsContainer>
  )
}