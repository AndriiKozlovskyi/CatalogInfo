import BookData from "@/data/book_data";
import BookResponse from "@/dtos/book_response";
import AuthManager from "@/managers/auth_manager";
import BaseApiResponse from "@/response/base_api_response";
import ApiFactory from "./api_factory";
import ApiOptions, {defaultApiOptions} from "./api_options";

export default class BookApi {

    static baseUrl = 'http://localhost:8081'

    static getOptions(): ApiOptions {
        return {
          ...defaultApiOptions,
          baseUrl: this.baseUrl,
          useAuth: true,
          getAccessToken: async () => AuthManager.getToken(),
        };
      }
}