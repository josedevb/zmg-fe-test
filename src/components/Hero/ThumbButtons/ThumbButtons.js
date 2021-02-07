import Image from 'next/image';

import {
  StyledButton,
  StyledContainer,
  StyledImageContainer
} from './ThumbButtons.styled';

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
          src='/icons/like.svg'
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
          src='/icons/dislike.svg'
        />
      </StyledImageContainer>
    </StyledButton>
  </StyledContainer>
);

export default ThumbButtons;
