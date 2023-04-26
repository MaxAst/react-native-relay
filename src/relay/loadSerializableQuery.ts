import {
  GraphQLResponse,
  OperationType,
  RequestParameters,
  VariablesOf,
  ConcreteRequest,
} from "relay-runtime";
import { networkFetch } from "./environment";

export interface SerializablePreloadedQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
> {
  params: TRequest["params"];
  variables: VariablesOf<TQuery>;
  response: GraphQLResponse;
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be used as a react navigation param
export default async function loadSerializableQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
>(
  params: RequestParameters,
  variables: VariablesOf<TQuery>
): Promise<SerializablePreloadedQuery<TRequest, TQuery>> {
  const response = await networkFetch(params, variables);
  return {
    params,
    variables,
    response,
  };
}
