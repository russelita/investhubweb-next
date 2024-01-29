import type { Color } from "@/shared/types/colors";
import React from "react";
import useGetList from "../hooks/useGetList";
import { Row, Spin } from "antd";

// eslint-disable-next-line no-unused-vars
const SectionData = ({ initialData }: { initialData?: any }) => {
  // Queries
  const { fetchQuery } = useGetList();
  const { isLoading, isError, error, data } = fetchQuery;

  if (isLoading) return (
    <Row align="middle" justify="center">
      <Spin />
    </Row>
  );

  if (isError) return (
    <Row align="middle" justify="center">
      An error has occurred: ${(error as Error).message}
    </Row>
  );

  return (
    <Row>
      <div>
        {data?.data.map((color: Color) => (
          <p key={color.id}
            style={{
              color: color.color
            }}>
            {color.name}
          </p>
        ))}
      </div>
    </Row>
  );
};

export default SectionData;