package handlers

import (
	"context"
	"go-blogging/user-mgmt-svc/internal/services"
	"go-blogging/user-mgmt-svc/internal/types"

	"github.com/go-playground/validator/v10"
)

type SignIn struct {
	Email    string `validate:"required,email"`
	Password string `validate:"required"`
}

func validateSignInRequest(data *SignIn) error {
	err := validator.New().Struct(data)
	if err != nil {
		return err
	}
	return nil
}

func SignInHandler(ctx context.Context, input *types.UserSignInData) (string, error) {
	signInData := SignIn{
		Email:    input.Email,
		Password: input.Password,
	}
	if valErr := validateSignInRequest(&signInData); valErr != nil {
		return "", valErr
	}

	username, err := services.SignedInUsername(input)
	if err != nil {
		return "", err
	}

	jwt, jwtErr := services.GenerateJwt(username)
	if jwtErr != nil {
		return "", jwtErr
	}
	return jwt, nil
}
