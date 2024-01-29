import { CSSProperties } from 'react';

type StylesType = {
	ContentContainer: CSSProperties;
};

/**
 * @return {StylesType} styles
 */
function StylesContentAuthLayout(): StylesType {
  const width_ = window !== null ? window.innerWidth * 0.6 : 412;

  const ContentContainer: CSSProperties = {
    width: `${width_}px`,
    minHeight: '100vh',
    display: 'flex',
    background: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return {
    ContentContainer,
  };
}

export default StylesContentAuthLayout;
