package services

import (
	"go-blogging/user-mgmt-svc/internal/repositories"
	"go-blogging/user-mgmt-svc/internal/types"
	"go-blogging/user-mgmt-svc/internal/utils"

	"golang.org/x/crypto/bcrypt"
)

func verifyPassword(hashedPassword string, rawPassword string) error {
	utils.LogInfo("passwords", map[string]string{hashedPassword: hashedPassword, rawPassword: rawPassword})
	bcryptErr := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(rawPassword))
	if bcryptErr != nil {
		return bcryptErr
	}

	return nil
}

func SignedInUserId(data *types.UserSignInData) (int64, error) {
	user, repoErr := repositories.UserByEmail(&data.Email)
	if repoErr != nil {
		return 0, repoErr
	}

	err := verifyPassword(user.Password, data.Password)
	if err != nil {
		return 0, err
	}

	return user.Id, nil
}
