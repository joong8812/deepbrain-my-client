import axios, { AxiosResponse } from "axios";

const SERVER = "http://127.0.0.1:5000";
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege...",
};

export interface CampsiteType {
  name: string;
  type: string;
  address: string;
  glamping: string;
  caravan: string;
  toilet: string;
  shower: string;
  wash: string;
}

export const addApi = async (payload: {
  name: string;
  type: string;
  address: string;
  glamping: string;
  caravan: string;
  toilet: string;
  shower: string;
  wash: string;
}) => {
  try {
    const response: AxiosResponse<unknown, CampsiteType[]> = await axios.post(
      `${SERVER}/campsites`,
      payload,
      { headers }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const updateApi = async (payload: {
  id: string;
  name: string;
  type: string;
  address: string;
  glamping: string;
  caravan: string;
  toilet: string;
  shower: string;
  wash: string;
}) => {
  try {
    const response: AxiosResponse<unknown, CampsiteType[]> = await axios.patch(
      `${SERVER}/campsites/${payload.id}`,
      payload,
      { headers }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteApi = async (payload: {
  id: string;
}) => {
  try {
    const response: AxiosResponse<unknown, CampsiteType[]> = await axios.delete(
      `${SERVER}/campsites/${payload.id}`,
      { headers }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};