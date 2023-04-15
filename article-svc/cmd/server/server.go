package main

import (
	"context"
	"github.com/joebui/go-blogging/article-svc/internal/handlers"
	"github.com/joebui/go-blogging/article-svc/pb"
)

type grpcServer struct {
	pb.UnimplementedArticleSvcServer
}

func (s *grpcServer) GetAllArticles(ctx context.Context, req *pb.GetAllArticlesRequest) (*pb.GetAllArticlesResponse, error) {
	articles, err := handlers.GetAllArticlesHandler(req.GetPage(), req.GetLimit())
	if err != nil {
		return nil, err
	}

	return &pb.GetAllArticlesResponse{
		Articles: articles,
	}, nil
}

func (s *grpcServer) GetArticle(ctx context.Context, req *pb.GetArticleRequest) (*pb.GetArticleResponse, error) {
	article, err := handlers.GetArticleById(req.GetId())
	if err != nil {
		return nil, err
	}

	return &pb.GetArticleResponse{
		Article: article,
	}, nil
}
