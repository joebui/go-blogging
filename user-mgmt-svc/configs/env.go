package configs

import "os"

type EnvConfig struct {
	PostgresUrl string
	JwtSecret   string
	Env         string
}

var envConfig = &EnvConfig{
	PostgresUrl: os.Getenv("POSTGRES_URL"),
	JwtSecret:   "VERY_SECRET_VALUE123",
	Env:         "development",
}

func GetEnv() *EnvConfig {
	return envConfig
}
