package main

import (
	"context"
	"go-blogging/article-svc/internal/handlers"
	"go-blogging/article-svc/pb"
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
