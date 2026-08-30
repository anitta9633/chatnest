import { Container, Row } from "react-bootstrap"
import LipstickCard from "../components/LipstickCard";
import HomeCarousel from "../components/HomeCarousel";

const Home = ({lipsticks,handleIncrement})=>{ //{a:[{},{}]}
  console.log("lipsticks------>",lipsticks);
    return(
      <>
      <HomeCarousel/>
<Container>
    <Row>
        
     {lipsticks.map((lipstick,i) =>(
      <LipstickCard lipstick={lipstick} key ={i} handleIncrement = {handleIncrement }/>
    ))}
        
    </Row>
</Container>
</>
    )
}
export default Home