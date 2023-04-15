import {
  Article,
  GetAllArticlesRequest,
  GetAllArticlesResponse,
} from "@proto/article_svc_pb";
import { articleGrpcClient } from "@config/grpc";
import { promisify } from "util";

export namespace ArticleRepository {
  export const getAllArticles = async (
    page: number,
    limit: number
  ): Promise<Article.AsObject[]> => {
    const request = new GetAllArticlesRequest().setPage(page).setLimit(limit);

    const response = await promisify<
      GetAllArticlesRequest,
      GetAllArticlesResponse
    >(articleGrpcClient.getAllArticles.bind(articleGrpcClient))(request);

    return response.toObject().articlesList;
  };
}
