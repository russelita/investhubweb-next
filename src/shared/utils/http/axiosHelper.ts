import AxiosInstance from "@/shared/api/axiosInstance";
import { AxiosRequestConfig } from "axios";

function handleError(error: any) {
  // Handle error
  if (error.response) {
    // Server merespons dengan status selain 2xx
    console.error('Error response:', error.response.status, error.response.data);
  } else if (error.request) {
    // Tidak ada respons dari server
    console.error('No response from server:', error.request);
    console.error('Error message:', error.message);
  } else {
    // Error lainnya
    console.error('Error:', error.message);
  }
  throw error;
}

async function getData({
  endpoint, config
}: { endpoint: string, config?: AxiosRequestConfig<any> }): Promise<any> {
  try {
    const response = await AxiosInstance.get(endpoint, config);
    return response;
  } catch (error: any) {
    handleError(error);
  }
}

async function postData({ 
  endpoint, data, config
}: { endpoint: string, data: any, config?: AxiosRequestConfig<any> }) {
  try {
    const response = await AxiosInstance.post(
      endpoint,
      data,
      config
    );
    return response;
  } catch (error: any) {
    handleError(error);
  }
}

async function putData({ 
  endpoint, data, config
}: { endpoint: string, data: any, config?: AxiosRequestConfig<any> }) {
  try {
    const response = await AxiosInstance.put(
      endpoint,
      data,
      config
    );
    return response;
  } catch (error: any) {
    handleError(error);
  }
}

async function deleteData({
  endpoint, config
}: { endpoint: string, config?: AxiosRequestConfig<any> }): Promise<any> {
  try {
    const response = await AxiosInstance.delete(endpoint, config);
    return response;
  } catch (error: any) {
    handleError(error);
  }
}

export {
  getData,
  postData,
  putData,
  deleteData,
};