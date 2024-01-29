import React from "react";

// next
import Image from "next/image";

// styled
import styled from "styled-components";

// image
// import LogoCms from 'src/shared/images/logo-cms.png';

// hooks
import useWindowResize from "@/shared/hooks/useWindowResize";

type ContentLayoutAuthProps = {
  children: React.ReactNode;
};

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  background: #ffffff;
  justify-content: center;
  align-items: center;
`;

const ContentLayoutAuth = (props: ContentLayoutAuthProps) => {
  // hooks
  const { width } = useWindowResize({ defaultWidth: 412, persentage: 0.6 });

  return (
    <StyledDiv style={{ width: width }}>
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.children}
      </div>
    </StyledDiv>
  );
};

export default ContentLayoutAuth;
