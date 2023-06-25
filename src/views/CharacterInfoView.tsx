import React from 'react'
import { useParams } from 'react-router-dom'
import CharactersDataContext from '../contexts/CharactersContext'
import { Characters } from '../typescript/interfaces/apiInterfaces'
import Title, { StyledTitle } from '../components/Title'
import { styled } from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Loading from '../components/Loading'
import NavLink from '../components/NavLink'
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
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  li{
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    text-align: start;
  }
`

const UrlType = styled(StyledTitle)`
  text-align: end;
`

export default function CharacterInfoView() {
  const { id } = useParams()
  const [character, setCharacter] = React.useState<Characters>()
  const { characters } = React.useContext(CharactersDataContext)
  const { loading, error, request } = useFetch()
  const characterLinks: Links[] = [
    { text: 'Comics', url: `/characters/${id}/comics`},
    { text: 'Events', url: '/characters/:id/events'},
    { text: 'Series', url :'/characters/:id/series' },
    { text: 'Stories', url: '/characters/:id/stories' },
  ] 
  
  React.useEffect(() => {
    if (characters) {
      setCharacter(characters?.find(x => x.id === Number(id)))
      console.log(character)
    } else {
      request(`characters/${id}`, undefined, 0, true)
        .then((data) => setCharacter(data?.results[0])
      )
      console.log(character)
    }
  },[id])

  return (
    <InfoContainer>
      <Title>{character?.name}</Title>
      <InfoThumbnail src={`${character?.thumbnail?.path}/landscape_xlarge	.${character?.thumbnail?.extension}`} alt="" />
      <LabelContainer>
        <NavLink links={characterLinks } />
      </LabelContainer>
      <UrlContainer>{character?.urls?.map((url) => (url.type === "comiclink") &&
        <li>
          <UrlType>{url.type}:</UrlType>
          <a href={url.url} key={url.url} target="_blank" rel="noreferrer">{url.url}</a>
        </li>
      )}</UrlContainer>
      {loading  && <Loading/>}
      {error && <Title>Error</Title>}
    </InfoContainer>
    )
  }