import React from 'react'
import Input from '../components/Input'
import Loading from '../components/Loading'
import CardsContainer from '../components/CardsContainer'
import Cards from '../components/Cards'
import Title from '../components/Title';
import Error from '../components/Error';
import SeriesDataContext from '../contexts/SeriesContext';
import OptionsContainer from '../components/OptionsContainer'
import CardsViewContainer from '../components/CardsViewContainer'

export default React.memo(function ComicsView() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const { typingText, setTypingText, apiOffset, setApiOffset, disableFirstRender, setDisableFirstRender, fetchData, loading, data, error } = React.useContext(SeriesDataContext)

  
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

  return (
    <CardsViewContainer>
      <Title>Series</Title>
      <Input value={typingText} type='text' placeholder='Search for Character' onChange={(event) => setTypingText(event.target.value)} />
      {/* <OptionsContainer/> */}
        <CardsContainer>
          {data && data!.map((card) => <Cards card={card} key={card.id}/>)}
        </CardsContainer>
      {(loading || isTyping) && <Loading/>}
      {error && <Error/>}
    </CardsViewContainer>
  )
})