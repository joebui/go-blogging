package configs

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

var db *sql.DB = nil

func initPostgres() {
	var err error
	if db, err = sql.Open("postgres", GetEnv().PostgresUrl); err != nil {
		fmt.Println(err)
	}
}

func Db() *sql.DB {
	if db == nil {
		initPostgres()
	}
	return db
}
