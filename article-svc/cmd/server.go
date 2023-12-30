package main

import (
	"context"

	"github.com/joebui/go-blogging/article-svc/api/grpc"
	"github.com/joebui/go-blogging/article-svc/internal/handlers"
)

type grpcServer struct {
	grpc.UnimplementedArticleSvcServer
}

func (s *grpcServer) GetAllArticles(
	ctx context.Context, req *grpc.GetAllArticlesRequest,
) (*grpc.GetAllArticlesResponse, error) {
	articles, err := handlers.GetAllArticlesHandler(
		req.GetPage(),
		req.GetLimit(),
	)
	if err != nil {
		return nil, err
	}

	return &grpc.GetAllArticlesResponse{
		Articles: articles,
	}, nil
}

func (s *grpcServer) GetArticle(
	ctx context.Context, req *grpc.GetArticleRequest,
) (*grpc.GetArticleResponse, error) {
	article, err := handlers.GetArticleById(req.GetId())
	if err != nil {
		return nil, err
	}

	return &grpc.GetArticleResponse{
		Article: article,
	}, nil
}
