package configs

import "os"

type EnvConfig struct {
	PostgresUrl, JwtSecret, Env string
}

var envConfig = &EnvConfig{
	PostgresUrl: os.Getenv("POSTGRES_URL"),
	Env:         os.Getenv("ENV"),
}

func GetEnv() *EnvConfig {
	return envConfig
}
