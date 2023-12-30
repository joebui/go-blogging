package handlers

import (
	"context"

	"github.com/joebui/go-blogging/user-mgmt-svc/internal/services"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/types"
	"github.com/pkg/errors"
	"github.com/rs/zerolog/log"

	"github.com/go-playground/validator/v10"
)

type SignIn struct {
	Email    string `validate:"required,email"`
	Password string `validate:"required"`
}

func validateSignInRequest(data *SignIn) error {
	err := validator.New().Struct(data)
	if err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "validator.New")).Msg("sign in request validation error")
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

	id, err := services.SignedInUserId(input)
	if err != nil {
		return "", err
	}

	jwt, jwtErr := services.GenerateJwt(id)
	if jwtErr != nil {
		return "", jwtErr
	}
	return jwt, nil
}
