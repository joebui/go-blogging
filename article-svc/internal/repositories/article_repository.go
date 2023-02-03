package repositories

import (
	"go-blogging/article-svc/configs"
	"go-blogging/article-svc/internal/types"
	"go-blogging/article-svc/internal/utils"
)

func GetAllArticles(page int32, limit int32) ([]types.Article, error) {
	rows, err := configs.Db().Query(
		"SELECT * FROM articles ORDER BY title LIMIT $1 OFFSET $2",
		limit,
		utils.GetOffsetFromPageLimit(page, limit),
	)
	if err != nil {
		return nil, err
	}

	var articles []types.Article
	var article types.Article
	for rows.Next() {
		if err := rows.Scan(
			&article.Id,
			&article.Title,
			&article.Subtitle,
			&article.Content,
			&article.AuthorId,
			&article.CreatedAt,
			&article.UpdatedAt,
		); err != nil {
			defer rows.Close()
			return nil, err
		}

		articles = append(articles, article)
	}

	return articles, nil
}
