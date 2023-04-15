// package: proto
// file: article_svc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as article_svc_pb from "./article_svc_pb";

interface IArticleSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllArticles: IArticleSvcService_IGetAllArticles;
    getArticle: IArticleSvcService_IGetArticle;
}

interface IArticleSvcService_IGetAllArticles extends grpc.MethodDefinition<article_svc_pb.GetAllArticlesRequest, article_svc_pb.GetAllArticlesResponse> {
    path: "/proto.ArticleSvc/GetAllArticles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<article_svc_pb.GetAllArticlesRequest>;
    requestDeserialize: grpc.deserialize<article_svc_pb.GetAllArticlesRequest>;
    responseSerialize: grpc.serialize<article_svc_pb.GetAllArticlesResponse>;
    responseDeserialize: grpc.deserialize<article_svc_pb.GetAllArticlesResponse>;
}
interface IArticleSvcService_IGetArticle extends grpc.MethodDefinition<article_svc_pb.GetArticleRequest, article_svc_pb.GetArticleResponse> {
    path: "/proto.ArticleSvc/GetArticle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<article_svc_pb.GetArticleRequest>;
    requestDeserialize: grpc.deserialize<article_svc_pb.GetArticleRequest>;
    responseSerialize: grpc.serialize<article_svc_pb.GetArticleResponse>;
    responseDeserialize: grpc.deserialize<article_svc_pb.GetArticleResponse>;
}

export const ArticleSvcService: IArticleSvcService;

export interface IArticleSvcServer extends grpc.UntypedServiceImplementation {
    getAllArticles: grpc.handleUnaryCall<article_svc_pb.GetAllArticlesRequest, article_svc_pb.GetAllArticlesResponse>;
    getArticle: grpc.handleUnaryCall<article_svc_pb.GetArticleRequest, article_svc_pb.GetArticleResponse>;
}

export interface IArticleSvcClient {
    getAllArticles(request: article_svc_pb.GetAllArticlesRequest, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    getAllArticles(request: article_svc_pb.GetAllArticlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    getAllArticles(request: article_svc_pb.GetAllArticlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: article_svc_pb.GetArticleRequest, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: article_svc_pb.GetArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    getArticle(request: article_svc_pb.GetArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
}

export class ArticleSvcClient extends grpc.Client implements IArticleSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllArticles(request: article_svc_pb.GetAllArticlesRequest, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    public getAllArticles(request: article_svc_pb.GetAllArticlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    public getAllArticles(request: article_svc_pb.GetAllArticlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetAllArticlesResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: article_svc_pb.GetArticleRequest, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: article_svc_pb.GetArticleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
    public getArticle(request: article_svc_pb.GetArticleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: article_svc_pb.GetArticleResponse) => void): grpc.ClientUnaryCall;
}
