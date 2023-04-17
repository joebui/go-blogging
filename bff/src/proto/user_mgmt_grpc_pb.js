// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_user_mgmt_pb = require('../proto/user_mgmt_pb.js');

function serialize_proto_SignInRequest(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.SignInRequest)) {
    throw new Error('Expected argument of type proto.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SignInRequest(buffer_arg) {
  return proto_user_mgmt_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SignInResponse(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.SignInResponse)) {
    throw new Error('Expected argument of type proto.SignInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SignInResponse(buffer_arg) {
  return proto_user_mgmt_pb.SignInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SignUpRequest(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.SignUpRequest)) {
    throw new Error('Expected argument of type proto.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SignUpRequest(buffer_arg) {
  return proto_user_mgmt_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SignUpResponse(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.SignUpResponse)) {
    throw new Error('Expected argument of type proto.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SignUpResponse(buffer_arg) {
  return proto_user_mgmt_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_VerifyJwtRequest(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.VerifyJwtRequest)) {
    throw new Error('Expected argument of type proto.VerifyJwtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_VerifyJwtRequest(buffer_arg) {
  return proto_user_mgmt_pb.VerifyJwtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_VerifyJwtResponse(arg) {
  if (!(arg instanceof proto_user_mgmt_pb.VerifyJwtResponse)) {
    throw new Error('Expected argument of type proto.VerifyJwtResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_VerifyJwtResponse(buffer_arg) {
  return proto_user_mgmt_pb.VerifyJwtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserMgmtService = exports.UserMgmtService = {
  signUp: {
    path: '/proto.UserMgmt/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_mgmt_pb.SignUpRequest,
    responseType: proto_user_mgmt_pb.SignUpResponse,
    requestSerialize: serialize_proto_SignUpRequest,
    requestDeserialize: deserialize_proto_SignUpRequest,
    responseSerialize: serialize_proto_SignUpResponse,
    responseDeserialize: deserialize_proto_SignUpResponse,
  },
  signIn: {
    path: '/proto.UserMgmt/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_mgmt_pb.SignInRequest,
    responseType: proto_user_mgmt_pb.SignInResponse,
    requestSerialize: serialize_proto_SignInRequest,
    requestDeserialize: deserialize_proto_SignInRequest,
    responseSerialize: serialize_proto_SignInResponse,
    responseDeserialize: deserialize_proto_SignInResponse,
  },
  verifyJwt: {
    path: '/proto.UserMgmt/VerifyJwt',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_mgmt_pb.VerifyJwtRequest,
    responseType: proto_user_mgmt_pb.VerifyJwtResponse,
    requestSerialize: serialize_proto_VerifyJwtRequest,
    requestDeserialize: deserialize_proto_VerifyJwtRequest,
    responseSerialize: serialize_proto_VerifyJwtResponse,
    responseDeserialize: deserialize_proto_VerifyJwtResponse,
  },
};

exports.UserMgmtClient = grpc.makeGenericClientConstructor(UserMgmtService);
