import axios from 'axios';

export default class NetworkUtil {
  static async getResponseData<R>(url: string): Promise<R> {
    const response = await axios.get(url);
    return response.data;
  }

  static async getResponseDataAsArray(
    url: string,
  ): Promise<Array<Record<string, string>>> {
    const response = await axios.get(url);
    return response.data;
  }
}
