import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateRoom = {
  roomName: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type JoinRoom = {
  roomId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom: Room;
  joinRoom: Room;
  register: RegisterComplete;
};


export type MutationCreateRoomArgs = {
  room: CreateRoom;
};


export type MutationJoinRoomArgs = {
  join: JoinRoom;
};


export type MutationRegisterArgs = {
  regist: Register;
};

export type Query = {
  __typename?: 'Query';
  song: Array<Song>;
};


export type QuerySongArgs = {
  keyword: Scalars['String']['input'];
};

export type Register = {
  age: Array<Scalars['String']['input']>;
  genre: Array<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};

export type RegisterComplete = {
  __typename?: 'RegisterComplete';
  age: Array<Scalars['String']['output']>;
  genre: Array<Scalars['String']['output']>;
  userId: Scalars['Int']['output'];
};

export type Room = {
  __typename?: 'Room';
  name: Scalars['String']['output'];
  roomId: Scalars['Int']['output'];
  userId: Array<Scalars['Int']['output']>;
};

export type Song = {
  __typename?: 'Song';
  category: Array<Scalars['String']['output']>;
  songName: Scalars['String']['output'];
};

export type SongQueryVariables = Exact<{
  songName: Scalars['String']['input'];
}>;


export type SongQuery = { __typename?: 'Query', song: Array<{ __typename?: 'Song', songName: string, category: Array<string> }> };

export type JoinRoomMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  roomId: Scalars['Int']['input'];
}>;


export type JoinRoomMutation = { __typename?: 'Mutation', joinRoom: { __typename?: 'Room', userId: Array<number>, roomId: number } };

export type CreateRoomMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  roomName: Scalars['String']['input'];
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', roomId: number, userId: Array<number>, name: string } };


export const SongDocument = gql`
    query Song($songName: String!) {
  song(keyword: $songName) {
    songName
    category
  }
}
    `;

/**
 * __useSongQuery__
 *
 * To run a query within a React component, call `useSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongQuery({
 *   variables: {
 *      songName: // value for 'songName'
 *   },
 * });
 */
export function useSongQuery(baseOptions: Apollo.QueryHookOptions<SongQuery, SongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongQuery, SongQueryVariables>(SongDocument, options);
      }
export function useSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongQuery, SongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongQuery, SongQueryVariables>(SongDocument, options);
        }
export type SongQueryHookResult = ReturnType<typeof useSongQuery>;
export type SongLazyQueryHookResult = ReturnType<typeof useSongLazyQuery>;
export type SongQueryResult = Apollo.QueryResult<SongQuery, SongQueryVariables>;
export const JoinRoomDocument = gql`
    mutation JoinRoom($userId: Int!, $roomId: Int!) {
  joinRoom(join: {userId: $userId, roomId: $roomId}) {
    userId
    roomId
  }
}
    `;
export type JoinRoomMutationFn = Apollo.MutationFunction<JoinRoomMutation, JoinRoomMutationVariables>;

/**
 * __useJoinRoomMutation__
 *
 * To run a mutation, you first call `useJoinRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinRoomMutation, { data, loading, error }] = useJoinRoomMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useJoinRoomMutation(baseOptions?: Apollo.MutationHookOptions<JoinRoomMutation, JoinRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinRoomMutation, JoinRoomMutationVariables>(JoinRoomDocument, options);
      }
export type JoinRoomMutationHookResult = ReturnType<typeof useJoinRoomMutation>;
export type JoinRoomMutationResult = Apollo.MutationResult<JoinRoomMutation>;
export type JoinRoomMutationOptions = Apollo.BaseMutationOptions<JoinRoomMutation, JoinRoomMutationVariables>;
export const CreateRoomDocument = gql`
    mutation createRoom($userId: Int!, $roomName: String!) {
  createRoom(room: {userId: $userId, roomName: $roomName}) {
    roomId
    userId
    name
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      roomName: // value for 'roomName'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;