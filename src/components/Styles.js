import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const Top = styled.div`
  margin: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 8px 0;
  margin-bottom: 16px;

  box-shadow: 0px 0px 0px grey, 0px 0px 0px grey, 0px 0px 0px grey,
    0px 2px 3px grey;

  > nav {
    display: flex;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
  margin-left: 10px;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 250px;
  height: 42px;
  padding-left: 15px;
  border-radius: 42px;
  outline: none;
  position: relative;
  transition: 0.3s linear;
  &:focus {
    width: 300px;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 42px;
  height: 42px;
  background: none;
  border: none;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

export const Title = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px;
  &:hoder {
    color: red;
  }
`;

//------------------------------------reviews-------------------------------//

export const ReviewsStyle = styled.div`
  margin: 10px;
  padding: 15px;
`;

//-------------------------------------Cast----------------------------------//

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastCard = styled.li`
  border-radius: 10px;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 0 1px 1px black;
`;

export const CastName = styled.h3`
  font-weight: bold;
  color: black;
`;

export const CastP = styled.p`
  display: flex;
  flex-direction: column;
  color: black;
`;

export const CastSpan = styled.span`
  font-weight: bold;
  color: black;
`;

//----------------------------------MovieCard-----------------------------------//

export const MoviePage = styled.div`
  margin: 20px;
`;

export const MovieCard = styled.div`
  display: flex;
  margin: 10px;

  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 1px 1px black;
`;

export const MovieInfo = styled.div`
  display: block;
  padding: 15px;
  margin-left: 20px;
  color: black;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 1px 1px black;
  &.active {
    color: #black;
    box-shadow: 0 0 1px 1px red;
  }
`;

export const MovieH2 = styled.h2`
  color: black;
`;

export const MovieH3 = styled.h3`
  color: black;
`;

//------------------------header----------------------------//

export const LinkEl = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 1px 1px black;
  &.active {
    color: black;
    box-shadow: 0 0 1px 1px red;
  }
`;

//-----------------------------------Goback---------------------------//

export const GoBackBTN = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 0.1px 0.3px black;
`;
