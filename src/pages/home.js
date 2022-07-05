import Title from "../components/pageTitle"
import Container from "../components/Container";
import ItemWraper from "../components/ui/itemInFactorWrap";
import FactorContextProvider from "../context/factorContext";
import LastIncomeHandler from "../components/LastIncomeInHome";
import LastFActor from "../components/LastFactorInHome";
import { useContext } from "react";
import { FactorContext } from "../context/factorContext";
import { useNavigate } from "react-router-dom";
import Testing from "./testing";


const Home = () => {

  let navigate = useNavigate();
  
  const factorContext = useContext(FactorContext)

  const onbtnsubmit = () => {
    navigate('/new-factor');
    console.log('hi')
  }
  const factors = factorContext.factors;
 
  return <Container>
    <FactorContextProvider>
      <Title name="خانه" />
      <ItemWraper>
         <LastFActor factors={factors} />
        <LastIncomeHandler factors={factors}/>
      </ItemWraper>
    </FactorContextProvider>
  </Container>
}
export default Home