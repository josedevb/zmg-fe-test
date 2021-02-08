import Image from 'next/image';

import {
  StyledButton,
  StyledContainer,
  StyledImageContainer
} from './ThumbButtons.styled';
import { icons } from '~/config/constants/assets';

const ThumbButtons = () => (
  <StyledContainer>
    <StyledButton isLike>
      <StyledImageContainer>
        <Image
          priority
          quality={100}
          layout='fill'
          loading='eager'
          objectFit='cover'
          src={icons.like}
        />
      </StyledImageContainer>
    </StyledButton>
    <StyledButton>
      <StyledImageContainer>
        <Image
          priority
          quality={100}
          layout='fill'
          loading='eager'
          objectFit='cover'
          src={icons.dislike}
        />
      </StyledImageContainer>
    </StyledButton>
  </StyledContainer>
);

export default ThumbButtons;
