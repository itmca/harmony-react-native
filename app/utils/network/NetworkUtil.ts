import axios from 'axios';

export default class NetworkUtil {
  static async getResponseData(url: string): Promise<Record<string, string>> {
    const response = await axios.get(url);
    console.log('response :: ', response);
    return response.data;
  }
}
