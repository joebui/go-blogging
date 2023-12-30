package configs

import "os"

type EnvConfig struct {
	PostgresUrl, JwtSecret, Env string
}

var envConfig = &EnvConfig{
	PostgresUrl: os.Getenv("POSTGRES_URL"),
	JwtSecret:   os.Getenv("JWT_SECRET"),
	Env:         os.Getenv("ENV"),
}

func GetEnv() *EnvConfig {
	return envConfig
}
