// package: proto
// file: user_mgmt.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_mgmt_pb from "./user_mgmt_pb";

interface IUserMgmtService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IUserMgmtService_ISignUp;
    signIn: IUserMgmtService_ISignIn;
    verifyJwt: IUserMgmtService_IVerifyJwt;
}

interface IUserMgmtService_ISignUp extends grpc.MethodDefinition<user_mgmt_pb.SignUpRequest, user_mgmt_pb.SignUpResponse> {
    path: "/proto.UserMgmt/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_mgmt_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<user_mgmt_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<user_mgmt_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<user_mgmt_pb.SignUpResponse>;
}
interface IUserMgmtService_ISignIn extends grpc.MethodDefinition<user_mgmt_pb.SignInRequest, user_mgmt_pb.SignInResponse> {
    path: "/proto.UserMgmt/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_mgmt_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<user_mgmt_pb.SignInRequest>;
    responseSerialize: grpc.serialize<user_mgmt_pb.SignInResponse>;
    responseDeserialize: grpc.deserialize<user_mgmt_pb.SignInResponse>;
}
interface IUserMgmtService_IVerifyJwt extends grpc.MethodDefinition<user_mgmt_pb.VerifyJwtRequest, user_mgmt_pb.VerifyJwtResponse> {
    path: "/proto.UserMgmt/VerifyJwt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_mgmt_pb.VerifyJwtRequest>;
    requestDeserialize: grpc.deserialize<user_mgmt_pb.VerifyJwtRequest>;
    responseSerialize: grpc.serialize<user_mgmt_pb.VerifyJwtResponse>;
    responseDeserialize: grpc.deserialize<user_mgmt_pb.VerifyJwtResponse>;
}

export const UserMgmtService: IUserMgmtService;

export interface IUserMgmtServer extends grpc.UntypedServiceImplementation {
    signUp: grpc.handleUnaryCall<user_mgmt_pb.SignUpRequest, user_mgmt_pb.SignUpResponse>;
    signIn: grpc.handleUnaryCall<user_mgmt_pb.SignInRequest, user_mgmt_pb.SignInResponse>;
    verifyJwt: grpc.handleUnaryCall<user_mgmt_pb.VerifyJwtRequest, user_mgmt_pb.VerifyJwtResponse>;
}

export interface IUserMgmtClient {
    signUp(request: user_mgmt_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: user_mgmt_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: user_mgmt_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signIn(request: user_mgmt_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: user_mgmt_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: user_mgmt_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
    verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
    verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
}

export class UserMgmtClient extends grpc.Client implements IUserMgmtClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signUp(request: user_mgmt_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: user_mgmt_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: user_mgmt_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: user_mgmt_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: user_mgmt_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: user_mgmt_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
    public verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
    public verifyJwt(request: user_mgmt_pb.VerifyJwtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_mgmt_pb.VerifyJwtResponse) => void): grpc.ClientUnaryCall;
}
