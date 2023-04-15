// package: proto
// file: article_svc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetAllArticlesRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetAllArticlesRequest;
    getLimit(): number;
    setLimit(value: number): GetAllArticlesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllArticlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllArticlesRequest): GetAllArticlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllArticlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllArticlesRequest;
    static deserializeBinaryFromReader(message: GetAllArticlesRequest, reader: jspb.BinaryReader): GetAllArticlesRequest;
}

export namespace GetAllArticlesRequest {
    export type AsObject = {
        page: number,
        limit: number,
    }
}

export class GetArticleRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetArticleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticleRequest): GetArticleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticleRequest;
    static deserializeBinaryFromReader(message: GetArticleRequest, reader: jspb.BinaryReader): GetArticleRequest;
}

export namespace GetArticleRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetAllArticlesResponse extends jspb.Message { 
    clearArticlesList(): void;
    getArticlesList(): Array<Article>;
    setArticlesList(value: Array<Article>): GetAllArticlesResponse;
    addArticles(value?: Article, index?: number): Article;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllArticlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllArticlesResponse): GetAllArticlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllArticlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllArticlesResponse;
    static deserializeBinaryFromReader(message: GetAllArticlesResponse, reader: jspb.BinaryReader): GetAllArticlesResponse;
}

export namespace GetAllArticlesResponse {
    export type AsObject = {
        articlesList: Array<Article.AsObject>,
    }
}

export class GetArticleResponse extends jspb.Message { 

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): Article | undefined;
    setArticle(value?: Article): GetArticleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticleResponse): GetArticleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticleResponse;
    static deserializeBinaryFromReader(message: GetArticleResponse, reader: jspb.BinaryReader): GetArticleResponse;
}

export namespace GetArticleResponse {
    export type AsObject = {
        article?: Article.AsObject,
    }
}

export class Article extends jspb.Message { 
    getId(): string;
    setId(value: string): Article;
    getTitle(): string;
    setTitle(value: string): Article;

    hasSubtitle(): boolean;
    clearSubtitle(): void;
    getSubtitle(): string | undefined;
    setSubtitle(value: string): Article;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string | undefined;
    setContent(value: string): Article;
    getAuthorId(): string;
    setAuthorId(value: string): Article;
    getCreatedAt(): string;
    setCreatedAt(value: string): Article;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Article;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Article.AsObject;
    static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Article;
    static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
    export type AsObject = {
        id: string,
        title: string,
        subtitle?: string,
        content?: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
    }
}
