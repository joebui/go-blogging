package handlers

import (
	"context"
	"fmt"
	"go-blogging/user-mgmt-svc/configs"
	"go-blogging/user-mgmt-svc/internal/utils"
	"go-blogging/user-mgmt-svc/pb"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt"
)

type SignIn struct {
	Username string `validate:"required,min=3,max=10"`
	Email    string `validate:"required,email"`
	Password string `validate:"required,min=5"`
}

var secret = []byte(configs.GetEnv().JwtSecret)

func generateJwt(user *SignIn) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"exp":      time.Now().Add(60 * time.Minute),
		"username": user.Username,
	})
	jwt, err := token.SignedString(secret)
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	return jwt, nil
}

func addUser(signInData *SignIn) error {
	_, dbErr := configs.Db().Exec(
		"INSERT INTO users (username, email, password) VALUES ( $1, $2, $3 )",
		signInData.Username,
		signInData.Email,
		signInData.Password,
	)
	if dbErr != nil {
		utils.LogError("Insert user error", dbErr)
		return dbErr
	}
	return nil
}

func SignInHandler(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	signInData := SignIn{
		Username: req.Username,
		Email:    req.Email,
		Password: req.Password,
	}

	valErr := validator.New().Struct(signInData)
	if valErr != nil {
		return nil, valErr
	}

	dbErr := addUser(&signInData)
	if dbErr != nil {
		return nil, dbErr
	}

	jwt, jwtErr := generateJwt(&signInData)
	if jwtErr != nil {
		return nil, jwtErr
	}
	return &pb.SignUpResponse{Token: jwt}, nil
}
