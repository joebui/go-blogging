// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_article_svc_pb = require('../proto/article_svc_pb.js');

function serialize_proto_GetAllArticlesRequest(arg) {
  if (!(arg instanceof proto_article_svc_pb.GetAllArticlesRequest)) {
    throw new Error('Expected argument of type proto.GetAllArticlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAllArticlesRequest(buffer_arg) {
  return proto_article_svc_pb.GetAllArticlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetAllArticlesResponse(arg) {
  if (!(arg instanceof proto_article_svc_pb.GetAllArticlesResponse)) {
    throw new Error('Expected argument of type proto.GetAllArticlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAllArticlesResponse(buffer_arg) {
  return proto_article_svc_pb.GetAllArticlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetArticleRequest(arg) {
  if (!(arg instanceof proto_article_svc_pb.GetArticleRequest)) {
    throw new Error('Expected argument of type proto.GetArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetArticleRequest(buffer_arg) {
  return proto_article_svc_pb.GetArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetArticleResponse(arg) {
  if (!(arg instanceof proto_article_svc_pb.GetArticleResponse)) {
    throw new Error('Expected argument of type proto.GetArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetArticleResponse(buffer_arg) {
  return proto_article_svc_pb.GetArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ArticleSvcService = exports.ArticleSvcService = {
  getAllArticles: {
    path: '/proto.ArticleSvc/GetAllArticles',
    requestStream: false,
    responseStream: false,
    requestType: proto_article_svc_pb.GetAllArticlesRequest,
    responseType: proto_article_svc_pb.GetAllArticlesResponse,
    requestSerialize: serialize_proto_GetAllArticlesRequest,
    requestDeserialize: deserialize_proto_GetAllArticlesRequest,
    responseSerialize: serialize_proto_GetAllArticlesResponse,
    responseDeserialize: deserialize_proto_GetAllArticlesResponse,
  },
  getArticle: {
    path: '/proto.ArticleSvc/GetArticle',
    requestStream: false,
    responseStream: false,
    requestType: proto_article_svc_pb.GetArticleRequest,
    responseType: proto_article_svc_pb.GetArticleResponse,
    requestSerialize: serialize_proto_GetArticleRequest,
    requestDeserialize: deserialize_proto_GetArticleRequest,
    responseSerialize: serialize_proto_GetArticleResponse,
    responseDeserialize: deserialize_proto_GetArticleResponse,
  },
};

exports.ArticleSvcClient = grpc.makeGenericClientConstructor(ArticleSvcService);
