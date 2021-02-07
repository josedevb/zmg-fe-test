import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledBlur,
  StyledName,
  StyledVerdict,
  StyledCaption,
  StyledContainer,
  StyledDescription,
  StyledInformation,
  StyledInformationIcon
} from './BlurContent.styled';
import useTranslation from '~/hooks/useTranslation';
import ThumbButtons from '../ThumbButtons/ThumbButtons';

const BlurContent = ({ person }) => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledBlur>
        <StyledCaption>{t('hero.opinion')}</StyledCaption>
        <StyledName>{person.name}?</StyledName>
        <StyledDescription>{person.description}</StyledDescription>
        <StyledInformation>
          <StyledInformationIcon>
            <Image
              priority
              layout='fill'
              quality={100}
              loading='eager'
              objectFit='contain'
              src='/icons/wikipedia.png'
            />
          </StyledInformationIcon>
          <Link href='https://google.co'>{t('hero.moreInformation')}</Link>
        </StyledInformation>
        <StyledVerdict>{t('hero.verdict')}</StyledVerdict>
      </StyledBlur>
      <ThumbButtons />
    </StyledContainer>
  );
};

BlurContent.propTypes = {
  person: PropTypes.oneOfType({}).isRequired
};

BlurContent.defaultProps = {};

export default BlurContent;
