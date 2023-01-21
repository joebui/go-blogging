package main

import (
	"context"
	"go-blogging/user-mgmt-svc/internal/handlers"
	"go-blogging/user-mgmt-svc/internal/utils"
	"go-blogging/user-mgmt-svc/pb"
	"log"
	"net"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
)

type grpcServer struct {
	pb.UnimplementedUserMgmtServer
}

// type Users struct {
// 	ID        int64
// 	Username  string
// 	Email     string
// 	Password  string
// 	FirstName string
// 	LastName  string
// 	CreatedAt string
// 	UpdatedAt string
// }

// func QueryUsers() string {
// 	db, err := sql.Open("postgres", configs.GetEnv().PostgresUrl)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	rows, err := db.Query("SELECT * FROM users")
// 	if err != nil {
// 		log.Fatalln(err)
// 	}
// 	defer rows.Close()
// 	var username string
// 	for rows.Next() {
// 		var user Users
// 		if err = rows.Scan(
// 			&user.ID,
// 			&user.Username,
// 			&user.Email,
// 			&user.Password,
// 			&user.FirstName,
// 			&user.LastName,
// 			&user.CreatedAt,
// 			&user.UpdatedAt,
// 		); err != nil {
// 			fmt.Println(err)
// 		}

// 		username = user.Username
// 	}

// 	return username
// }

func (s *grpcServer) SignIn(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResponse, error) {
	utils.LogInfo("SignIn rpc called")
	jwtToken, err := handlers.SignInHandler(ctx, req)
	if err != nil {
		return nil, err
	}

	return jwtToken, nil
}

func main() {
	listen, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	gsrv := grpc.NewServer()
	pb.RegisterUserMgmtServer(gsrv, &grpcServer{})
	if err := gsrv.Serve(listen); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
