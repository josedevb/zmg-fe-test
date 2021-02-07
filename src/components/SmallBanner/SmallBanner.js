import Image from 'next/image';

import {
  StyledMessage,
  StyledContainer,
  StyledOutlinedButton
} from './SmallBanner.styled';
import { images } from '~/config/constants/assets';
import useTranslations from '~/hooks/useTranslation';
import Container from '~/components/Container/Container';

const SmallBanner = () => {
  const { t } = useTranslations();

  return (
    <Container>
      <Image
        quality={100}
        loading='lazy'
        layout='fill'
        objectFit='cover'
        src={images.banner}
      />
      <StyledContainer>
        <StyledMessage>{t('smallbanner.text')}</StyledMessage>
        <StyledOutlinedButton text={t('smallbanner.submit')} type='secondary' />
      </StyledContainer>
    </Container>
  );
};

export default SmallBanner;
