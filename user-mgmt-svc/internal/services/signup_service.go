package services

import (
	"github.com/joebui/go-blogging/user-mgmt-svc/internal/repositories"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/types"

	"golang.org/x/crypto/bcrypt"
)

func passwordHash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}

	return string(hash), nil
}

func UserSignUp(user *types.InsertUserData) (string, error) {
	hash, hashErr := passwordHash(user.Password)
	if hashErr != nil {
		return "", hashErr
	}

	user.Password = hash
	if err := repositories.InsertUser(user); err != nil {
		return "", err
	}

	newUser, err := repositories.UserByEmail(&user.Email)
	if err != nil {
		return "", err
	}

	return newUser.Id, nil
}
