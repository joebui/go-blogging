package services

import (
	"github.com/joebui/go-blogging/article-svc/internal/repositories"
	"github.com/joebui/go-blogging/article-svc/pkg/types"
)

func GetAllArticles(page int32, limit int32) ([]types.Article, error) {
	articles, err := repositories.GetAllArticles(page, limit)
	if err != nil {
		return nil, err
	}

	return articles, nil
}

func GetArticleById(id string) (*types.Article, error) {
	article, err := repositories.GetArticleById(id)
	if err != nil {
		return nil, err
	}

	return article, nil
}
