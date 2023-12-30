package handlers

import (
	"errors"

	"github.com/joebui/go-blogging/article-svc/api/grpc"
	"github.com/joebui/go-blogging/article-svc/internal/services"
	"github.com/joebui/go-blogging/article-svc/pkg/types"
)

const MAX_NUM_OF_RESULT = 30

func serializeArticlesProtobuf(dbArticles []types.Article) (articles []*grpc.Article) {
	for i := 0; i < len(dbArticles); i++ {
		articles = append(articles, &grpc.Article{
			Id:        dbArticles[i].Id,
			Title:     dbArticles[i].Title,
			Subtitle:  dbArticles[i].Subtitle,
			Content:   dbArticles[i].Subtitle,
			AuthorId:  dbArticles[i].AuthorId,
			CreatedAt: dbArticles[i].CreatedAt,
			UpdatedAt: dbArticles[i].UpdatedAt,
		})
	}

	return
}

func serializeArticleProtobuf(dbArticle *types.Article) (article *grpc.Article) {
	article = &grpc.Article{
		Id:        dbArticle.Id,
		Title:     dbArticle.Title,
		Subtitle:  dbArticle.Subtitle,
		Content:   dbArticle.Subtitle,
		AuthorId:  dbArticle.AuthorId,
		CreatedAt: dbArticle.CreatedAt,
		UpdatedAt: dbArticle.UpdatedAt,
	}
	return
}

func GetAllArticlesHandler(page int32, limit int32) ([]*grpc.Article, error) {
	if page <= 0 {
		return nil, errors.New("invalid page")
	}
	if limit > MAX_NUM_OF_RESULT || limit <= 0 {
		return nil, errors.New("invalid limit")
	}

	dbArticles, err := services.GetAllArticles(page, limit)
	if err != nil {
		return nil, err
	}

	return serializeArticlesProtobuf(dbArticles), nil
}

func GetArticleById(id string) (*grpc.Article, error) {
	article, err := services.GetArticleById(id)
	if err != nil {
		return nil, err
	}

	return serializeArticleProtobuf(article), nil
}
