import {
  Article,
  GetAllArticlesRequest,
  GetAllArticlesResponse,
  GetArticleRequest,
  GetArticleResponse,
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

  export const getArticleById = async (
    id: string
  ): Promise<Article.AsObject> => {
    const request = new GetArticleRequest().setId(id);

    const response = await promisify<GetArticleRequest, GetArticleResponse>(
      articleGrpcClient.getArticle.bind(articleGrpcClient)
    )(request);

    return response.toObject().article;
  };
}
