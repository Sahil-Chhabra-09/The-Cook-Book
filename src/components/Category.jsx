import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiIndianPalace } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//NavLink gives us class called active

//in react we don't want to use anchor tag it basically refreshes the page and navigates to somewhere else.

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to={"/cuisine/Indian"}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  width: 30rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem
  }
  &.active{   //creating a class
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: white;
    }
    hr{
      color: white;
    }
  }
`

export default Category;
