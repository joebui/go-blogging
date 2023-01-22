package repositories

import (
	"go-blogging/user-mgmt-svc/configs"
	"go-blogging/user-mgmt-svc/internal/types"
	"go-blogging/user-mgmt-svc/internal/utils"
)

func InsertUser(data *types.InsertUserData) error {
	_, dbErr := configs.Db().Exec(
		"INSERT INTO users (username, email, password) VALUES ( $1, $2, $3 )",
		data.Username,
		data.Email,
		data.Password,
	)
	if dbErr != nil {
		utils.LogError("Insert user error", dbErr)
		return dbErr
	}
	return nil
}
