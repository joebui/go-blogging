import { ArticleService } from "@domain/article.service";
import {
  Article
} from "@proto/article_svc_pb";
import { PaginationRequest } from "src/types";

export const articles = async (
  _: unknown,
  { page, limit }: PaginationRequest
): Promise<Article.AsObject[]> => {
  return ArticleService.getAllArticles(page, limit);
};
