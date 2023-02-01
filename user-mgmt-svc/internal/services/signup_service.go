package services

import (
	"go-blogging/user-mgmt-svc/internal/repositories"
	"go-blogging/user-mgmt-svc/internal/types"
	"go-blogging/user-mgmt-svc/internal/utils"

	"golang.org/x/crypto/bcrypt"
)

func passwordHash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		utils.LogError("Cannot encrypt password", err)
		return "", err
	}

	return string(hash), nil
}

func UserSignUp(user *types.InsertUserData) (int64, error) {
	hash, hashErr := passwordHash(user.Password)
	if hashErr != nil {
		return 0, hashErr
	}

	user.Password = hash
	if err := repositories.InsertUser(user); err != nil {
		return 0, err
	}

	newUser, err := repositories.UserByEmail(&user.Email)
	if err != nil {
		return 0, err
	}

	return newUser.Id, nil
}
