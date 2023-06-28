import React from 'react'
import { useParams } from 'react-router-dom'
import { Characters, Comics, Events, Series } from '../typescript/interfaces/apiInterfaces'
import Title from '../components/Title'
import { styled } from 'styled-components'
import useFetch from '../hooks/UseFetch'
import Loading from '../components/Loading'
import CardsContainer from '../components/CardsContainer'
import Cards from '../components/Cards'
import NotFound from '../components/NotFound'
import Error from '../components/Error'
import { device } from '../styles/Breakpoints'

const InfoContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  @media ${device.sm} {
    width: 100vw;
    
  }
`

export default function InfoInfoView() {
  type DataType = Characters[] | Comics[] | Events[] | Series[] ;
  const { cards, id, detail } = useParams()
  const [detailCards, setDetailCards] = React.useState<DataType>()
  const [apiOffset, setApiOffset] = React.useState(0)
  const [maxApiOffset, setMaxApiOffset] = React.useState<number>(999)
  const { loading, error, request } = useFetch()
  const [urlParam, setUrlParam] = React.useState<string>()
  
  React.useEffect(() => {
    if (urlParam !== detail) {
      setApiOffset(0);
      request(`${cards}/${id}/${detail}`, undefined, apiOffset, false)
      .then((data) => {
        setDetailCards(data?.results)
        setMaxApiOffset(data!.total)
      })
    } else {
      request(`${cards}/${id}/${detail}`, undefined, apiOffset, false)
        .then((data) => {
          setDetailCards((chrt) => (chrt ? [...chrt, ...data?.results] : data?.results))
          setMaxApiOffset(data!.total)
        })

    }

    setUrlParam(detail)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, detail, apiOffset])
  
  React.useEffect(() => {
    function handleScroll() {
      // Calculate the scroll position
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if scrolled to the bottom
      if (scrollTop + windowHeight >= documentHeight && !loading && apiOffset < maxApiOffset && maxApiOffset > 100) {
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
  }, [apiOffset]);
  return (
    <InfoContainer>
      <Title>{detail![0].toUpperCase() + detail?.slice(1)}</Title>
      <CardsContainer>
        {detailCards && detailCards.map((detail) => <Cards card={detail} key={detail.id}/>)}
      </CardsContainer>
      {loading && <Loading />}
      {detailCards?.length === 0 && <NotFound/>}
      {error && <Error/>}
    </InfoContainer>
    )
  }