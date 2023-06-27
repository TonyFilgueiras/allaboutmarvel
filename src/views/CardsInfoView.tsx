import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import CharactersDataContext from '../contexts/CharactersContext'
import { Characters } from '../typescript/interfaces/apiInterfaces'
import Title, { StyledTitle } from '../components/Title'
import { styled } from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Loading from '../components/Loading'
import NavComponent from '../components/NavComponent'
import { Links } from '../typescript/types'

const InfoContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
`

const InfoThumbnail = styled.img`
  width: 100%;
  height: 40vh;
  `

const LabelContainer = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: bold;
  
  ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  a{
    width: 100%;
  }

  li {
    padding: 25px 0;
  }
`

const UrlContainer = styled.ul`
  margin-top: 20px;
  li {
    display: grid;
    grid-template-columns: 15% 85%;
    margin-top: 5px;
    text-align: start;
}
  a {
    color: ${({ theme }) => theme.colors.cyan};
    transition: all.2s;

    &:hover{
      text-decoration: underline;
    }
  }
`

const UrlType = styled.label`
  text-align: end;
  margin-right: 5px;
`

export default function CharacterInfoView() {
  const { cards, id, detail } = useParams()
  const [character, setCharacter] = React.useState<Characters>()
  const { data } = React.useContext(CharactersDataContext)
  const { loading, error, request } = useFetch()
  const characterLinks: Links[] = [
    {id: 1, text: 'Characters', url: `characters`},
    {id: 2, text: 'Comics', url: `comics`},
    {id: 3, text: 'Events', url: `events`},
    {id: 4, text: 'Series', url :`series` },
    {id: 5, text: 'Stories', url: `stories` },
  ] 
  React.useEffect(() => {
    if (data) {
      setCharacter(data?.find(x => x.id === Number(id)))
      console.log(character)
    } else {
      request(`characters/${id}`, undefined, 0, true)
        .then((data) => setCharacter(data?.results[0])
      )
      console.log(character)
      
    }

  },[id, detail])

  return (
    <InfoContainer>
      <Title>{character?.name}</Title>
      <InfoThumbnail src={`${character?.thumbnail?.path}/landscape_xlarge	.${character?.thumbnail?.extension}`} alt="" />
      <label>{character?.modified }</label>
      <UrlContainer>{character?.urls?.map((url) => 
        <li key={url.type}>
          <UrlType>{ url.type}: </UrlType>
          <a href={url.url} target="_blank" rel="noreferrer">{url.url}</a>
        </li>
      )}</UrlContainer>
      <LabelContainer>
        <NavComponent active={true} links={characterLinks.filter((item) => {
          if (cards === "comics") {
            return (item.url !== cards && item.url !== "series")           
          } else {
            return (item.url !== cards)
          }
        })} />
      </LabelContainer>
      <Outlet/>
      {loading  && <Loading/>}
      {error && <Title>Error</Title>}
    </InfoContainer>
    )
  }