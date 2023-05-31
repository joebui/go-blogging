import { Article } from "@proto/article_svc_pb";
import { ArticleRepository } from "@repository/article.repository";

export namespace ArticleService {
  export const getAllArticles = (
    page: number,
    limit: number
  ): Promise<Article.AsObject[]> => {
    return ArticleRepository.getAllArticles(page, limit);
  };

  export const getArticle = (id: string): Promise<Article.AsObject> => {
    return ArticleRepository.getArticleById(id);
  };
}
