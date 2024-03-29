package services

import (
	"time"

	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/configs"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/utils"

	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"github.com/pkg/errors"
	"github.com/rs/zerolog/log"
)

var secret = []byte(configs.GetEnv().JwtSecret)

func GenerateJwt(userId string) (string, error) {
	current := time.Now()
	iat := current.Unix()
	exp := current.Add(utils.JWT_EXPIRY).Unix()
	jti := uuid.New().String()

	token := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		jwt.MapClaims{
			"user_id": userId,
			"iat":     iat,
			"exp":     exp,
			"jti":     jti,
			"iss":     "user-mgmt-svc",
			"aud":     "go-blogging",
		},
	)
	jwt, err := token.SignedString(secret)
	if err != nil {
		return "", err
	}

	return jwt, nil
}

func ExtractUserIdFromJwt(token string) (string, error) {
	claims := jwt.MapClaims{}
	jwtToken, err := jwt.ParseWithClaims(
		token,
		claims,
		func(jwtToken *jwt.Token) (interface{}, error) {
			return secret, nil
		},
	)

	if err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "jwt.ParseWithClaims")).Msg("[IsJwtValid] error parsing token")
		return "", err
	}
	if !jwtToken.Valid {
		log.Error().Msg("[IsJwtValid] invalid token")
		return "", errors.New("invalid token")
	}

	return claims["user_id"].(string), nil
}
