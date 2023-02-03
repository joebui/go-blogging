package services

import (
	"go-blogging/article-svc/internal/repositories"
	"go-blogging/article-svc/internal/types"
)

func GetAllArticles(page int32, limit int32) ([]types.Article, error) {
	articles, err := repositories.GetAllArticles(page, limit)
	if err != nil {
		return nil, err
	}

	return articles, nil
}
