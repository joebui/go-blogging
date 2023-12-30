package types

type InsertUserData struct {
	Username, Email, Password string
}

type User struct {
	FirstName, LastName                                 *string
	Id, Username, Email, Password, CreatedAt, UpdatedAt string
}

type UserSignInData struct {
	Email, Password string
}
