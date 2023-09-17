import { ThreeCircles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeCircles
        height={70}
        width={70}
        radius={5}
        color="blueviolet"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Wrapper>
  );
};
