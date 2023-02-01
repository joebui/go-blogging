package services

import (
	"go-blogging/user-mgmt-svc/configs"
	"go-blogging/user-mgmt-svc/internal/utils"
	"time"

	"github.com/golang-jwt/jwt"
)

var secret = []byte(configs.GetEnv().JwtSecret)

func GenerateJwt(username string) (string, error) {
	token := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		jwt.MapClaims{
			"exp":      time.Now().Add(60 * time.Minute),
			"username": username,
		},
	)
	jwt, err := token.SignedString(secret)
	if err != nil {
		utils.LogError("Error generating token", err)
		return "", err
	}

	return jwt, nil
}
