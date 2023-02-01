package types

type InsertUserData struct {
	Username, Email, Password string
}

type User struct {
	Id                                              int64
	FirstName, LastName                             *string
	Username, Email, Password, CreatedAt, UpdatedAt string
}

type UserSignInData struct {
	Email, Password string
}
