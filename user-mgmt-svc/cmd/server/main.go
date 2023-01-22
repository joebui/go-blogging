package main

import (
	"go-blogging/user-mgmt-svc/pb"
	"log"
	"net"

	"google.golang.org/grpc"
)

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
// 	}

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
