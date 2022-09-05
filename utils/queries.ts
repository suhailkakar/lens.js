import { gql } from '@urql/core';
import 'isomorphic-unfetch';

export const GET_PING = `
  query {
    ping
  }
`;

export const GET_DEFAULT_PROFILES = `
  query($request: DefaultProfileRequest!) {
    defaultProfile(request: $request) {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
         type
        }
        ... on RevertFollowModuleSettings {
         type
        }
      }
    }
  }
`;

export const GET_PROFILE_FROM_ID = `
query($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
          type
        }
        ... on RevertFollowModuleSettings {
          type
        }
      }
  }
}
`;

export const GET_RECOMMENDED_PROFILES = `
query RecommendedProfiles {
  recommendedProfiles {
        id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
        followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
         type
        }
        ... on RevertFollowModuleSettings {
         type
        }
      }
  }
}
`;

export const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const AUTHENTICATION = `
mutation($request: SignedAuthChallenge!) { 
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
`;

export const REFRESH_AUTHENTICATION = `
mutation($request: RefreshRequest!) { 
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
`;

export const VERIFY = `
  query($request: VerifyRequest!) {
    verify(request: $request)
  }
`;

export const EXPLORE_PUBLICATIONS = `
  query($request: ExplorePublicationRequest!) {
    explorePublications(request: $request) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
        isFollowedByMe
    isFollowing(who: null)
        followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
         ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
      type
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
        mirrors(by: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
      hidden
    reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
     ... on Post {
        ...PostFields          
     }
     ... on Comment {
        ...CommentFields          
     }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
      hidden
    reaction(request: null)
    mirrors(by: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }
`;

export const EXPLORE_PROFILES = `
query($request: ExploreProfilesRequest!) {
  exploreProfiles(request: $request) {
    items {
      id
      name
      bio
      isDefault
      attributes {
        displayType
        traitType
        key
        value
      }
      metadata
      handle
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          chainId
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          chainId
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          contractAddress
          amount {
            asset {
              name
              symbol
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
        type
        }
        ... on RevertFollowModuleSettings {
        type
        }
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
`;

export const GET_USERS_NFTS = `
  query($request: NFTsRequest!) {
    nfts(request: $request) {
      items {
        contractName
        contractAddress
        symbol
        tokenId
        owners {
          amount
          address
        }
        name
        description
        contentURI
        originalContent {
          uri
          metaType
        }
        chainId
        collectionName
        ercType
      }
    pageInfo {
        prev
        next
        totalCount
    }
  }
}
`;

export const GET_GLOBAL_PROTOCOL_STATS = `
query($request: GlobalProtocolStatsRequest) {
  globalProtocolStats(request: $request) {
      totalProfiles
      totalBurntProfiles
      totalPosts
      totalMirrors
      totalComments
      totalCollects
      totalFollows
      totalRevenue {
          asset {
              name
              symbol
              decimals
              address
          }
          value
      }
   }
}
`;

export const GET_PROFILE_REVENUE = `
query($request: ProfileRevenueQueryRequest!) {
  profileRevenue(request: $request) {
    items {
      publication {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      earnings {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}

fragment MediaFields on Media {
  url
  width
  height
  mimeType
}

fragment ProfileFields on Profile {
  id
  name
  bio
  location
  website
  twitterUrl
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
       ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  depatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
  }
}

fragment PublicationStatsFields on PublicationStats { 
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}

fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}

fragment CollectModuleFields on CollectModule {
  __typename
  ... on EmptyCollectModuleSettings {
    type
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
}

fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
   ... on Post {
      ...PostFields          
   }
   ... on Comment {
      ...CommentFields          
   }
  }
}

fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
           ...PostFields          
        }
        ... on Comment {
           ...CommentMirrorOfFields        
        }
      }
    }
  }
}

fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
       ...MirrorBaseFields
    }
  }
}
`;

export const GET_PUBLICATION_REVENUE = `
query($request: PublicationRevenueQueryRequest!) {
  publicationRevenue(request: $request) {
    publication {
      __typename 
      ... on Post {
          ...PostFields
      }
      ... on Comment {
          ...CommentFields
      }
      ... on Mirror {
          ...MirrorFields
      }
    }
    earnings {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
  }
}

fragment MediaFields on Media {
  url
  width
  height
  mimeType
}

fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
       ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
     type
    }
    ... on RevertFollowModuleSettings {
     type
    }
  }
}

fragment PublicationStatsFields on PublicationStats { 
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}

fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}

fragment CollectModuleFields on CollectModule {
  __typename
      ... on FreeCollectModuleSettings {
          type
    followerOnly
    contractAddress
    }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
}

fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
   ... on Post {
      ...PostFields          
   }
   ... on Comment {
      ...CommentFields          
   }
  }
}

fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
           ...PostFields          
        }
        ... on Comment {
           ...CommentMirrorOfFields        
        }
      }
    }
  }
}

fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
       ...MirrorBaseFields
    }
  }
}
`;

export const SEARCH = `
query($request: SearchQueryRequest!) {
  search(request: $request) {
          ... on PublicationSearchResult {
     __typename 
    items {
      __typename 
      ... on Comment {
        ...CommentFields
      }
      ... on Post {
        ...PostFields
      }
    }
    pageInfo {
      prev
      totalCount
      next
    }
  }
  ... on ProfileSearchResult {
    __typename 
    items {
      ... on Profile {
        ...ProfileFields
      }
    }
    pageInfo {
      prev
      totalCount
      next
    }
   }
  }
}

fragment MediaFields on Media {
url
mimeType
}

fragment MirrorBaseFields on Mirror {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
}

fragment ProfileFields on Profile {
profileId: id,
name
bio
attributes {
  displayType
  traitType
  key
  value
}
isFollowedByMe
isFollowing(who: null)
metadataUrl: metadata
isDefault
handle
picture {
  ... on NftImage {
    contractAddress
    tokenId
    uri
    verified
  }
  ... on MediaSet {
    original {
      ...MediaFields
    }
  }
}
coverPicture {
  ... on NftImage {
    contractAddress
    tokenId
    uri
    verified
  }
  ... on MediaSet {
    original {
      ...MediaFields
    }
  }
}
ownedBy
dispatcher {
  address
}
stats {
  totalFollowers
  totalFollowing
  totalPosts
  totalComments
  totalMirrors
  totalPublications
  totalCollects
}
followModule {
  ... on FeeFollowModuleSettings {
    type
    amount {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
    recipient
  }
  ... on ProfileFollowModuleSettings {
   type
  }
  ... on RevertFollowModuleSettings {
   type
  }
}
}

fragment PublicationStatsFields on PublicationStats { 
totalAmountOfMirrors
totalAmountOfCollects
totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
name
description
content
media {
  original {
    ...MediaFields
  }
}
attributes {
  displayType
  traitType
  value
}
}

fragment Erc20Fields on Erc20 {
name
symbol
decimals
address
}

fragment CollectModuleFields on CollectModule {
__typename
  ... on FreeCollectModuleSettings {
      type
  followerOnly
  contractAddress
}
... on FeeCollectModuleSettings {
  type
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
}
... on LimitedFeeCollectModuleSettings {
  type
  collectLimit
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
}
... on LimitedTimedFeeCollectModuleSettings {
  type
  collectLimit
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
  endTimestamp
}
... on RevertCollectModuleSettings {
  type
}
... on TimedFeeCollectModuleSettings {
  type
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
  endTimestamp
}
}

fragment PostFields on Post {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
  hidden
  reaction(request: null)
  mirrors(by: null)
hasCollectedByMe
}

fragment CommentBaseFields on Comment {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
hidden
reaction(request: null)
  mirrors(by: null)
hasCollectedByMe
}

fragment CommentFields on Comment {
...CommentBaseFields
mainPost {
  ... on Post {
    ...PostFields
  }
  ... on Mirror {
    ...MirrorBaseFields
    mirrorOf {
      ... on Post {
         ...PostFields          
      }
      ... on Comment {
         ...CommentMirrorOfFields        
      }
    }
  }
}
}

fragment CommentMirrorOfFields on Comment {
...CommentBaseFields
mainPost {
  ... on Post {
    ...PostFields
  }
  ... on Mirror {
     ...MirrorBaseFields
  }
}
}
`;

export const CREATE_FOLLOW_TYPED_DATA = `
mutation($request: FollowRequest!) { 
  createFollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        FollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        datas
      }
    }
  }
}
`;

export const GET_FOLLOWING = `
query($request: FollowingRequest!) {
  following(request: $request) { 
              items {
         profile {
            id
            name
            bio
            handle
                          attributes {
              displayType
              traitType
              key
              value
            }
                          followNftAddress
                          metadata
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  width
                  height
                  mimeType
                }
                medium {
                  url
                  width
                  height
                  mimeType
                }
                small {
                  url
                  width
                  height
                  mimeType
                }
              }
            }
            coverPicture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  width
                  height
                  mimeType
                }
                small {
                  width
                  url
                  height
                  mimeType
                }
                medium {
                  url
                  width
                  height
                  mimeType
                }
              }
            }
            ownedBy
            dispatcher {
              address
              canUseRelay
            }
            stats {
              totalFollowers
              totalFollowing
              totalPosts
              totalComments
              totalMirrors
              totalPublications
              totalCollects
            }
            followModule {
              ... on FeeFollowModuleSettings {
                type
                amount {
                  asset {
                    name
                    symbol
                    decimals
                    address
                  }
                  value
                }
                recipient
             }
                           ... on ProfileFollowModuleSettings {
               type
             }
             ... on RevertFollowModuleSettings {
               type
             }
          }
        }
      }
     pageInfo {
        prev
        next
        totalCount
     }
      }
}
`;

export const GET_FOLLOWERS = `
  query($request: FollowersRequest!) {
    followers(request: $request) { 
             items {
        wallet {
          address
          defaultProfile {
            id
            name
            bio
            handle
                        followNftAddress
                        metadata
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            coverPicture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            ownedBy
            dispatcher {
              address
              canUseRelay
            }
            stats {
              totalFollowers
              totalFollowing
              totalPosts
              totalComments
              totalMirrors
              totalPublications
              totalCollects
            }
            followModule {
              ... on FeeFollowModuleSettings {
                type
                contractAddress
                amount {
                  asset {
                    name
                    symbol
                    decimals
                    address
                  }
                  value
                }
                recipient
              }
              ... on ProfileFollowModuleSettings {
               type
              }
              ... on RevertFollowModuleSettings {
               type
              }
            }
          }
        }
        totalAmountOfTimesFollowed
      }
      pageInfo {
        prev
        next
        totalCount
      }
        }
  }
`;

export const GET_TIMELINE = `
  query($request: TimelineRequest!) {
    timeline(request: $request) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
        isFollowedByMe
    isFollowing(who: null)
        followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
         ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on EmptyCollectModuleSettings {
      type
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    collectedBy {
      ...WalletFields
    }
        hidden
        reaction(request: null)
        mirrors(by: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    hidden
    reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
     ... on Post {
        ...PostFields          
     }
     ... on Comment {
        ...CommentFields          
     }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
    collectedBy {
      ...WalletFields
    }
    hidden
        reaction(request: null)
        mirrors(by: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }

fragment WalletFields on Wallet {
   address,
   defaultProfile {
    ...ProfileFields
   }
  }
`;

export const REPORT_PUBLICATION = `
  mutation($request: ReportPublicationRequest!) { 
   reportPublication(request: $request)
 }
`;

export const ADD_REACTION = `
  mutation($request: ReactionRequest!) { 
   addReaction(request: $request)
 }
`;

export const REMOVE_REACTION = `
  mutation($request: ReactionRequest!) { 
   removeReaction(request: $request)
 }
`;

export const CREATE_POST_TYPED_DATA = `
  mutation($request: CreatePublicPostRequest!) { 
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
     }
   }
 }
`;

export const CREATE_COMMENT_TYPED_DATA = `
  mutation($request: CreatePublicCommentRequest!) { 
    createCommentTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          CommentWithSig {
            name
            type
          }
        }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
                referenceModuleData
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
     }
   }
 }
`;

export const CREATE_MIRROR_TYPED_DATA = `
mutation($request: CreateMirrorRequest!) { 
  createMirrorTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        MirrorWithSig {
          name
          type
        }
      }
    domain {
      name
      chainId
      version
      verifyingContract
    }
    value {
      nonce
      deadline
      profileId
      profileIdPointed
      pubIdPointed
              referenceModule
      referenceModuleData
      referenceModuleInitData
    }
   }
 }
}
`;

export const GET_PUBLICATIONS = `
  query($request: PublicationsQueryRequest!) {
    publications(request: $request) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  fragment MediaFields on Media {
    url
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
        isFollowedByMe
    isFollowing(who: null)
        followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on EmptyCollectModuleSettings {
      type
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
    mirrors(profileId: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
     ... on Post {
        ...PostFields          
     }
     ... on Comment {
        ...CommentFields          
     }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
    mirrors(profileId: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }
`;

const GET_PUBLICATION = `
  query($request: PublicationQueryRequest!) {
    publication(request: $request) {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
      }
    }
  }

  fragment MediaFields on Media {
    url
    mimeType
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
        isFollowedByMe
    isFollowing(who: null)
    followNftAddress
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment Erc20Fields on Erc20 {
    name
    symbol
    decimals
    address
  }

  fragment CollectModuleFields on CollectModule {
    __typename
    ... on FreeCollectModuleSettings {
        type
        followerOnly
        contractAddress
    }
    ... on FeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
    ... on RevertCollectModuleSettings {
      type
    }
    ... on TimedFeeCollectModuleSettings {
      type
      amount {
        asset {
          ...Erc20Fields
        }
        value
      }
      recipient
      referralFee
      endTimestamp
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
        mirrors(by: null)
    hasCollectedByMe
  }

  fragment MirrorBaseFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
    hasCollectedByMe
  }

  fragment MirrorFields on Mirror {
    ...MirrorBaseFields
    mirrorOf {
     ... on Post {
        ...PostFields          
     }
     ... on Comment {
        ...CommentFields          
     }
    }
  }

  fragment CommentBaseFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    collectModule {
      ...CollectModuleFields
    }
    referenceModule {
      ... on FollowOnlyReferenceModuleSettings {
        type
      }
    }
    appId
        hidden
        reaction(request: null)
        mirrors(by: null)
    hasCollectedByMe
  }

  fragment CommentFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
        ...MirrorBaseFields
        mirrorOf {
          ... on Post {
             ...PostFields          
          }
          ... on Comment {
             ...CommentMirrorOfFields        
          }
        }
      }
    }
  }

  fragment CommentMirrorOfFields on Comment {
    ...CommentBaseFields
    mainPost {
      ... on Post {
        ...PostFields
      }
      ... on Mirror {
         ...MirrorBaseFields
      }
    }
  }
`;

export const HIDE_PUBLICATION = `
  mutation($request: HidePublicationRequest!) { 
   hidePublication(request: $request)
 }
`;

export const GET_NOTIFICATIONS = `
  mutation($request: NotificationRequest!) { 
    items {
      ... on NewFollowerNotification {
        ...NewFollowerNotificationFields
      }

      ... on NewMirrorNotification {
        ...NewMirrorNotificationFields
      }

      ... on NewCollectNotification {
        ...NewCollectNotificationFields
      }

      ... on NewCommentNotification {
        ...NewCommentNotificationFields
      }

      ... on NewMentionNotification {
        mentionPublication {
           ... on Post {
              ...CompactPost
            }
            ... on Comment {
              ...CompactComment
            }
        }
        createdAt
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfo
    }
  }
 }
 
 fragment CommentWithCommentedPublicationFields on Comment {
  ...CompactComment
  commentOn {
    ... on Post {
      ...CompactPost
    }
    ... on Mirror {
      ...CompactMirror
    }
    ... on Comment {
      ...CompactComment
    }
  }
}

fragment NewFollowerNotificationFields on NewFollowerNotification {
  __typename
  createdAt
  isFollowedByMe
  wallet {
    ...Wallet
  }
}

fragment NewCollectNotificationFields on NewCollectNotification {
  __typename
  createdAt
  wallet {
    ...Wallet
  }
  collectedPublication {
    __typename
    ... on Post {
      ...CompactPost
    }

    ... on Mirror {
      ...CompactMirror
    }

    ... on Comment {
      ...CompactComment
    }
  }
}

fragment NewMirrorNotificationFields on NewMirrorNotification {
  __typename
  createdAt
  profile {
    ...CompactProfile
  }
  publication {
    ... on Post {
      ...CompactPost
    }
    ... on Comment {
      ...CompactComment
    }
  }
}

fragment NewCommentNotificationFields on NewCommentNotification {
  __typename
  createdAt
  profile {
    ...CompactProfile
  }
  comment {
    ...CommentWithCommentedPublicationFields
  }
}

fragment CompactProfile on Profile {
  id
  name
  handle
  picture {
    ...ProfileMediaFields
  }
}
fragment CompactPublicationStats on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}

fragment CompactMetadata on MetadataOutput {
  name
  description
  content
  media {
    ...ProfileMediaFields
  }
}

fragment CompactPost on Post {
  id
  stats {
    ...CompactPublicationStats
  }
  metadata {
    ...CompactMetadata
  }
  profile {
    ...CompactProfile
  }
  collectedBy {
    ...Wallet
  }
  createdAt
}

fragment CompactMirror on Mirror {
  id
  stats {
    ...CompactPublicationStats
  }
  metadata {
    ...CompactMetadata
  }
  profile {
    ...CompactProfile
  }
  createdAt
}

fragment CompactComment on Comment {
  id
  stats {
    ...CompactPublicationStats
  }
  metadata {
    ...CompactMetadata
  }
  profile {
    ...CompactProfile
  }
  collectedBy {
    ...Wallet
  }
  createdAt
}

fragment CommonPaginatedResultInfo on PaginatedResultInfo {
  prev
  next
  totalCount
}

fragment MediaFields on Media {
  url
  width
  height
  mimeType
}

fragment ProfileMediaFields on ProfileMedia {
  ... on NftImage {
    contractAddress
    tokenId
    uri
    verified
  }

  ... on MediaSet {
    original {
      ...MediaFields
    }

    small {
      ...MediaFields
    }

    medium {
      ...MediaFields
    }
  }
}

fragment Wallet on Wallet {
  address
  defaultProfile {
    ...CompactProfile
  }
  totalAmountOfProfiles
}
`;
