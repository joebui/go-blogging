package handlers

import (
	"errors"
	"go-blogging/article-svc/internal/services"
	"go-blogging/article-svc/internal/types"
	"go-blogging/article-svc/pb"
)

const MAX_NUM_OF_RESULT = 30

func serializeArticlesProtobuf(dbArticles []types.Article) (articles []*pb.Article) {
	for i := 0; i < len(dbArticles); i++ {
		articles = append(articles, &pb.Article{
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

func GetAllArticlesHandler(page int32, limit int32) ([]*pb.Article, error) {
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
