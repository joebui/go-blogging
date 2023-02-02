package repositories

import (
	"go-blogging/user-mgmt-svc/configs"
	"go-blogging/user-mgmt-svc/internal/types"
)

func InsertUser(data *types.InsertUserData) error {
	_, dbErr := configs.Db().Exec(
		"INSERT INTO users (username, email, password) VALUES ( $1, $2, $3 )",
		data.Username,
		data.Email,
		data.Password,
	)
	if dbErr != nil {
		return dbErr
	}

	return nil
}

func UserByEmail(email *string) (*types.User, error) {
	rows, dbErr := configs.Db().Query(
		"SELECT * FROM users WHERE email = $1 LIMIT 1",
		*email,
	)
	if dbErr != nil {
		return nil, dbErr
	}

	var user types.User
	for rows.Next() {
		if err := rows.Scan(
			&user.Id,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.FirstName,
			&user.LastName,
			&user.CreatedAt,
			&user.UpdatedAt,
		); err != nil {
			return nil, err
		}
	}

	return &user, nil
}
