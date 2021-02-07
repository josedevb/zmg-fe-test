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
import { icons } from '~/config/constants/assets';
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
              src={icons.wikipedia}
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
  person: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

BlurContent.defaultProps = {};

export default BlurContent;
