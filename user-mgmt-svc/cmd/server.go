package main

import (
	"context"

	"github.com/joebui/go-blogging/user-mgmt-svc/api/grpc"
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/handlers"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/types"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/utils"
)

type grpcServer struct {
	grpc.UnimplementedUserMgmtServer
}

func (s *grpcServer) SignUp(
	ctx context.Context, req *grpc.SignUpRequest,
) (*grpc.SignUpResponse, error) {
	jwtToken, err := handlers.SignUpHandler(ctx, req)
	if err != nil {
		return nil, err
	}
	return jwtToken, nil
}

func (s *grpcServer) SignIn(
	ctx context.Context, req *grpc.SignInRequest,
) (*grpc.SignInResponse, error) {
	jwtToken, err := handlers.SignInHandler(
		ctx,
		&types.UserSignInData{Email: req.GetEmail(), Password: req.GetPassword()},
	)
	if err != nil {
		return nil, err
	}

	return &grpc.SignInResponse{Token: jwtToken, ExpiresIn: int32(utils.JWT_EXPIRY_IN_S)}, nil
}

func (s *grpcServer) VerifyJwt(
	ctx context.Context, req *grpc.VerifyJwtRequest,
) (*grpc.VerifyJwtResponse, error) {
	userId, err := handlers.VerifyJwtHandler(ctx, req.GetToken())
	if err != nil {
		return nil, err
	}

	return &grpc.VerifyJwtResponse{UserId: userId}, nil
}
