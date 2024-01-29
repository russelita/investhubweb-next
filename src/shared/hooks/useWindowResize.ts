import { useState, useEffect } from 'react';

type UseWindowResizeType = {
	persentage?: number;
	defaultWidth?: number;
};

const useWindowResize = ({
  defaultWidth = 412,
  persentage = 0.6,
}: UseWindowResizeType) => {
  // state
  const [widthContainer, setWidthContainer] = useState(
    window !== null ? window.innerWidth * persentage : defaultWidth,
  );

  // effect
  useEffect(() => {
    const handleResize = () => {
      setWidthContainer(
        window !== null ? window.innerWidth * persentage : defaultWidth,
      );
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [defaultWidth, persentage]);

  return { width: widthContainer };
};

export default useWindowResize;
