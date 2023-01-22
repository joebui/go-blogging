package main

import (
	"context"
	"go-blogging/user-mgmt-svc/internal/handlers"
	"go-blogging/user-mgmt-svc/internal/utils"
	"go-blogging/user-mgmt-svc/pb"
)

type grpcServer struct {
	pb.UnimplementedUserMgmtServer
}

func (s *grpcServer) SignUp(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	utils.LogInfo("SignIn rpc called")
	jwtToken, err := handlers.SignUpHandler(ctx, req)
	if err != nil {
		return nil, err
	}

	return jwtToken, nil
}
