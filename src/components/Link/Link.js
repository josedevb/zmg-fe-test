import Link from 'next/link';
import PropTypes from 'prop-types';

import StyledAnchor from './Link.styled';
import isAValidExternalUrl from '~/config/utils/validUrl';

const InternalLink = ({ children, href, target, ...rest }) => {
  const isAnExternalUrl = isAValidExternalUrl(href);
  const anchorProps = isAnExternalUrl
    ? { target, rel: 'noopener noreferrer external nofollow' }
    : {};

  return (
    <Link {...rest} href={href} passHref={isAnExternalUrl}>
      <StyledAnchor {...anchorProps}>{children}</StyledAnchor>
    </Link>
  );
};

InternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};

InternalLink.defaultProps = {
  target: '_blank'
};

export default InternalLink;
