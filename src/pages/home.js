import Title from "../components/pageTitle"
import Container from "../components/Container";
import ItemWraper from "../components/ui/itemInFactorWrap";
import FactorContextProvider from "../context/factorContext";
import { FactorContext } from "../context/factorContext";
import { useContext, useEffect } from "react";

const Home = () => {

  const factorcTX = useContext(FactorContext)
  console.log(factorcTX.factors , 'factor in home' )


  return <Container>
    <FactorContextProvider>
      <Title name="خانه" />
      <ItemWraper>

      </ItemWraper>
    </FactorContextProvider>
  </Container>
}
export default Home