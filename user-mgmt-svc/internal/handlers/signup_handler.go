package handlers

import (
	"context"

	"github.com/joebui/go-blogging/user-mgmt-svc/internal/services"
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/types"
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/utils"
	"github.com/joebui/go-blogging/user-mgmt-svc/pb"

	"github.com/go-playground/validator/v10"
)

type SignUp struct {
	Username string `validate:"required,min=3,max=10"`
	Email    string `validate:"required,email"`
	Password string `validate:"required,min=5"`
}

func validateSignUpRequest(data *SignUp) error {
	err := validator.New().Struct(data)
	if err != nil {
		return err
	}
	return nil
}

func SignUpHandler(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	signUpData := SignUp{
		Username: req.Username,
		Email:    req.Email,
		Password: req.Password,
	}

	if valErr := validateSignUpRequest(&signUpData); valErr != nil {
		return nil, valErr
	}

	id, err := services.UserSignUp(
		&types.InsertUserData{
			Username: signUpData.Username,
			Email:    signUpData.Email,
			Password: signUpData.Password,
		},
	)
	if err != nil {
		return nil, err
	}

	jwt, jwtErr := services.GenerateJwt(id)
	if jwtErr != nil {
		return nil, jwtErr
	}
	return &pb.SignUpResponse{Token: jwt, ExpiresIn: int32(utils.JWT_EXPIRY_IN_S)}, nil
}
