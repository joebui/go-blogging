package types

type InsertUserData struct {
	Username, Email, Password string
}

type User struct {
	Id, Username, Email, Password, CreatedAt, UpdatedAt string
	FirstName, LastName                                 *string
}

type UserSignInData struct {
	Email, Password string
}
