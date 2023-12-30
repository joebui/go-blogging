package main

import (
	"net"
	"os"

	"github.com/joebui/go-blogging/user-mgmt-svc/api/grpc"
	"github.com/joebui/go-blogging/user-mgmt-svc/pkg/configs"
	"github.com/pkg/errors"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/rs/zerolog/pkgerrors"
	grpcServ "google.golang.org/grpc"

	_ "go.uber.org/automaxprocs"
)

func main() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
	zerolog.ErrorStackMarshaler = pkgerrors.MarshalStack
	if configs.GetEnv().Env == "development" {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}

	listen, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "net.Listen")).Msg("error listening to port")
		panic(err)
	}

	gsrv := grpcServ.NewServer()
	grpc.RegisterUserMgmtServer(gsrv, &grpcServer{})
	if err := gsrv.Serve(listen); err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "gsrv.Serve")).Msg("error starting grpc server")
		panic(err)
	}
}
