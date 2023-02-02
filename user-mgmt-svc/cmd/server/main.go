package main

import (
	"go-blogging/user-mgmt-svc/configs"
	"go-blogging/user-mgmt-svc/pb"
	"net"
	"os"

	"github.com/pkg/errors"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/rs/zerolog/pkgerrors"
	"google.golang.org/grpc"
)

func main() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
	zerolog.ErrorStackMarshaler = pkgerrors.MarshalStack
	if configs.GetEnv().Env == "development" {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}

	listen, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "net.Listen")).Msg("[main] error listening to port")
		panic(err)
	}

	gsrv := grpc.NewServer()
	pb.RegisterUserMgmtServer(gsrv, &grpcServer{})
	if err := gsrv.Serve(listen); err != nil {
		log.Error().Stack().Err(errors.Wrap(err, "gsrv.Serve")).Msg("[main] error starting grpc server")
		panic(err)
	}
}
