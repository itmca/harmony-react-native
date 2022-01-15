import axios from 'axios';

export default class NetworkUtil {
  static async getResponseDataAsMap(
    url: string,
  ): Promise<Record<string, string>> {
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
