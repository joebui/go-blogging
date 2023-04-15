package handlers

import (
	"context"

	"github.com/joebui/go-blogging/user-mgmt-svc/internal/services"
)

func VerifyJwtHandler(ctx context.Context, token string) (string, error) {
	userId, err := services.ExtractUserIdFromJwt(token)

	if err != nil {
		return "", err
	}

	return userId, nil
}
