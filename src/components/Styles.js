import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
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
  margin: 0 auto;
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
  &:hover {
    color: red;
  }
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

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
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
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const CastName = styled.h3`
  font-weight: bold;
  color: #de14b9;
`;

export const CastP = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #7bd4eb;
`;

export const CastSpan = styled.span`
  font-weight: bold;
  color: #7bd4eb;
`;

export const MovieHorizontal = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px 1px #7bd4eb;
  background-image: repeating-linear-gradient(
    -45deg,
    #7bd4eb,
    #7bd4eb 15px,
    #fcfcfc 15px,
    #fcfcfc 30px
  );
`;

export const MovieCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const MovieInfo = styled.div`
  display: block;
  padding: 15px;
  margin-left: 20px;
  color: #7bd4eb;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  &.active {
    color: #de14b9;
    box-shadow: 0 0 13px 3px #de14b9;
  }
`;

export const MovieH2 = styled.h2`
  color: #7bd4eb;
`;

export const MovieH3 = styled.h3`
  color: #7bd4eb;
`;
