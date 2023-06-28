import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
// import CharactersDataContext from '../contexts/CharactersContext'
import { Characters } from '../typescript/interfaces/apiInterfaces'
import Title from '../components/Title'
import { styled } from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Loading from '../components/Loading'
import NavComponent from '../components/NavComponent'
import { Links } from '../typescript/types'
// import ComicsDataContext from '../contexts/ComicsContext'
// import EventsDataContext from '../contexts/EventsContext'
// import SeriesDataContext from '../contexts/SeriesContext'
import getCardDisplayName from '../utils/GetCardDisplayName'
import Error from '../components/Error'
import { device } from '../styles/Breakpoints'
import useScreenWidth from '../hooks/UseScreenWidth'

const InfoContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  @media ${device.sm}{
    width: 100vw;
    overflow-x: hidden;
  }
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
  @media ${device.sm}{
    margin-bottom: 20px;
  }
`

const UrlContainer = styled.ul`
  margin-top: 20px;
  li {
    display: grid;
    grid-template-columns: 15% auto;
    margin-top: 5px;
    text-align: start;
    @media ${device.sm}{
      grid-template-columns: 25% auto;
    }
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

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
  @media ${device.md}{
    grid-template-columns: auto ;
  }
`

export default function CharacterInfoView() {
  const { cards, id, detail } = useParams()
  const [cardInfo, setCardInfo] = React.useState<Characters>()
  // const characterData = React.useContext(CharactersDataContext);
  // const comicsData = React.useContext(ComicsDataContext);
  // const eventsData = React.useContext(EventsDataContext);
  // const seriesData = React.useContext(SeriesDataContext);
  const [contextUsing, setContextUsing] = React.useState<number>(0)
  // const contextData = [ characterData, comicsData, eventsData, seriesData ];
  const { loading, error, request } = useFetch()
  const [imgText, setImgText] = React.useState('landscape_medium')
  const below600 = useScreenWidth(600)
  const infoLinks: Links[] = [
    {id: 1, text: 'Characters', url: `characters`},
    {id: 2, text: 'Comics', url: `comics`},
    {id: 3, text: 'Events', url: `events`},
    {id: 4, text: 'Series', url :`series` },
  ]   

  React.useEffect(() => {
    if (below600) {
      setImgText('landscape_medium')
    } else {
      setImgText('landscape_xlarge')
    }
  },[below600])


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
    }
    
  },[cards,contextUsing])

  React.useEffect(() => {
    request(`${cards}/${id}`, undefined, 0, true)
      .then((data) => setCardInfo(data?.results[0]))
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id, detail])

  return (
    <InfoContainer>
      {cardInfo && 
      <Title>{getCardDisplayName(cardInfo)}</Title>
      
      }
      {cardInfo?.thumbnail &&
        <InfoThumbnail src={`${cardInfo?.thumbnail?.path}/${imgText}.${cardInfo?.thumbnail?.extension}`} alt="" />
      }
      <label>{cardInfo?.modified }</label>
      <UrlContainer>{cardInfo?.urls?.map((url) => 
        <li key={url.type}>
          <UrlType>{ url.type}: </UrlType>
          <a href={url.url} target="_blank" rel="noreferrer">{url.url}</a>
        </li>
      )}</UrlContainer>
      {cardInfo?.description && <DescriptionContainer>
        <Title>Description: </Title>
        <label>{cardInfo?.description }</label>
      </DescriptionContainer>}
      <LabelContainer>
        <NavComponent active={true} links={infoLinks.filter((item) => {
          if (cards === "comics") {
            return (item.url !== cards && item.url !== "series")           
          } else {
            return (item.url !== cards)
          }
        })} />
      </LabelContainer>
      <Outlet/>
      {loading  && <Loading/>}
      {error && <Error/>}
    </InfoContainer>
    )
  }