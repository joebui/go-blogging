package handlers

import (
	"context"
	"go-blogging/user-mgmt-svc/internal/services"
)

func VerifyJwtHandler(ctx context.Context, token string) (string, error) {
	userId, err := services.ExtractUserIdFromJwt(token)

	if err != nil {
		return "", err
	}

	return userId, nil
}
