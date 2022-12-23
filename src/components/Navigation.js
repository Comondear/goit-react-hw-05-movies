import { LinkEl } from '../components/Styles';
import { Top } from '../components/Styles';

const Navigation = () => (
  <Top>
    <LinkEl to="/">Home</LinkEl>
    <LinkEl to="/movies">Movies</LinkEl>
  </Top>
);

export default Navigation;
