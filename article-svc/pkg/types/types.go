package types

type Article struct {
	Id, Title, AuthorId, CreatedAt, UpdatedAt string
	Subtitle, Content                         *string
}
