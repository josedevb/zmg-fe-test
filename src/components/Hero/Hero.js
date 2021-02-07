import Image from 'next/image';
import PropTypes from 'prop-types';

import StyledContainer from './Hero.styled';
import BlurContent from './BlurContent/BlurContent';
import ClosingDays from './ClosingDays/ClosingDays';

const Hero = ({ person }) => (
  <StyledContainer>
    <Image
      priority
      src={person.image}
      quality={100}
      layout='fill'
      loading='eager'
      objectFit='cover'
    />
    <BlurContent person={person} />
    <ClosingDays days={person.closingDays} />
  </StyledContainer>
);

Hero.propTypes = {
  person: PropTypes.shape({
    image: PropTypes.string,
    closingDays: PropTypes.number
  }).isRequired
};

Hero.defaultProps = {};

export default Hero;
