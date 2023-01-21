package configs

import (
	"database/sql"
	"fmt"
)

var db *sql.DB = nil

func initPostgres() {
	var err error
	db, err = sql.Open("postgres", GetEnv().PostgresUrl)
	if err != nil {
		fmt.Println(err)
	}
}

func Db() *sql.DB {
	if db == nil {
		initPostgres()
	}
	return db
}
