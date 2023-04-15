package main

import (
	"context"

	"github.com/joebui/go-blogging/user-mgmt-svc/internal/handlers"
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/types"
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/utils"
	"github.com/joebui/go-blogging/user-mgmt-svc/pb"
)

type grpcServer struct {
	pb.UnimplementedUserMgmtServer
}

func (s *grpcServer) SignUp(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	jwtToken, err := handlers.SignUpHandler(ctx, req)
	if err != nil {
		return nil, err
	}
	return jwtToken, nil
}

func (s *grpcServer) SignIn(ctx context.Context, req *pb.SignInRequest) (*pb.SignInResponse, error) {
	jwtToken, err := handlers.SignInHandler(
		ctx,
		&types.UserSignInData{Email: req.GetEmail(), Password: req.GetPassword()},
	)
	if err != nil {
		return nil, err
	}

	return &pb.SignInResponse{Token: jwtToken, ExpiresIn: int32(utils.JWT_EXPIRY_IN_S)}, nil
}

func (s *grpcServer) VerifyJwt(ctx context.Context, req *pb.VerifyJwtRequest) (*pb.VerifyJwtResponse, error) {
	userId, err := handlers.VerifyJwtHandler(ctx, req.GetToken())
	if err != nil {
		return nil, err
	}

	return &pb.VerifyJwtResponse{UserId: userId}, nil
}
