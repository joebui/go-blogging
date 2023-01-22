package handlers

import (
	"context"
	"go-blogging/user-mgmt-svc/internal/services"
	"go-blogging/user-mgmt-svc/internal/types"
	"go-blogging/user-mgmt-svc/pb"

	"github.com/go-playground/validator/v10"
)

func validateRequest(data *services.SignUp) error {
	err := validator.New().Struct(data)
	if err != nil {
		return err
	}
	return nil
}

func SignUpHandler(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	signUpData := services.SignUp{
		Username: req.Username,
		Email:    req.Email,
		Password: req.Password,
	}

	if valErr := validateRequest(&signUpData); valErr != nil {
		return nil, valErr
	}

	err := services.UserSignUp(
		&types.InsertUserData{
			Username: signUpData.Username,
			Email:    signUpData.Email,
			Password: signUpData.Password,
		},
	)
	if err != nil {
		return nil, err
	}

	jwt, jwtErr := services.GenerateJwt(signUpData.Username)
	if jwtErr != nil {
		return nil, jwtErr
	}
	return &pb.SignUpResponse{Token: jwt}, nil
}
