/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecordInput = {
  id?: string | null,
  productId: number,
  count: number,
  _version?: number | null,
};

export type ModelRecordConditionInput = {
  productId?: ModelIntInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelRecordConditionInput | null > | null,
  or?: Array< ModelRecordConditionInput | null > | null,
  not?: ModelRecordConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type Record = {
  __typename: "Record",
  id: string,
  productId: number,
  count: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRecordInput = {
  id: string,
  productId?: number | null,
  count?: number | null,
  _version?: number | null,
};

export type DeleteRecordInput = {
  id: string,
  _version?: number | null,
};

export type ModelRecordFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIntInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRecordConnection = {
  __typename: "ModelRecordConnection",
  items?:  Array<Record | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRecordMutationVariables = {
  input: CreateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type CreateRecordMutation = {
  createRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecordMutationVariables = {
  input: UpdateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type UpdateRecordMutation = {
  updateRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecordMutationVariables = {
  input: DeleteRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type DeleteRecordMutation = {
  deleteRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncRecordsQueryVariables = {
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRecordsQuery = {
  syncRecords?:  {
    __typename: "ModelRecordConnection",
    items?:  Array< {
      __typename: "Record",
      id: string,
      productId: number,
      count: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRecordQueryVariables = {
  id: string,
};

export type GetRecordQuery = {
  getRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecordsQueryVariables = {
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordsQuery = {
  listRecords?:  {
    __typename: "ModelRecordConnection",
    items?:  Array< {
      __typename: "Record",
      id: string,
      productId: number,
      count: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRecordSubscription = {
  onCreateRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    id: string,
    productId: number,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
