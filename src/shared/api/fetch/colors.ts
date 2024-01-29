import { FETCH_COLORS } from "@/shared/constants/endpoint";
import { getData } from "@/shared/utils/http/axiosHelper";

type Props = {
	key: string[];
	api: () => Promise<any>;
};

function fetchColors(params?: string): Props {
  const KEY = ['colors'];

  const API = async () => {
    const dataColors = await getData({
      endpoint: FETCH_COLORS(params)
    });

    return dataColors?.data;
  };

  return { key: KEY, api: API };
}

export {
  fetchColors,
};