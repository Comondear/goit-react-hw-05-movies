import { FallingLines } from 'react-loader-spinner';
import { Top } from '../components/Styles';

const Loader = () => {
  return (
    <Top>
      <FallingLines
        margin-left="20px"
        color="black"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Top>
  );
};

export default Loader;
