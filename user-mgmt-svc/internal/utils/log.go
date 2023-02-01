package utils

import "go.uber.org/zap"

var logger, _ = zap.NewDevelopment()
var sugar = logger.Sugar()

func LogError(msg string, values ...interface{}) {
	defer logger.Sync()
	sugar.Errorw(msg, values)
}

func LogInfo(msg string, values ...interface{}) {
	defer logger.Sync()
	sugar.Infow(msg, values)
}
