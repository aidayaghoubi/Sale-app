import Title from "../components/pageTitle"
import Container from "../components/Container";
import ItemWraper from "../components/ui/itemInFactorWrap";
import FactorContextProvider from "../context/factorContext";

const Home = () => {


  return <Container>
    <FactorContextProvider>
      <Title name="خانه" />
      <ItemWraper>

      </ItemWraper>
    </FactorContextProvider>
  </Container>
}
export default Home