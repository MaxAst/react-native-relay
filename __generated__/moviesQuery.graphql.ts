/**
 * @generated SignedSource<<3e2486a9962c54c0e98e1d7afecada83>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type moviesQuery$variables = {};
export type moviesQuery$data = {
  readonly allFilms: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly title: string | null;
      } | null;
    } | null> | null;
  } | null;
};
export type moviesQuery = {
  response: moviesQuery$data;
  variables: moviesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FilmsConnection",
    "kind": "LinkedField",
    "name": "allFilms",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "moviesQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "moviesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a90d41d13bb272108cd1d61822b3469d",
    "id": null,
    "metadata": {},
    "name": "moviesQuery",
    "operationKind": "query",
    "text": "query moviesQuery {\n  allFilms {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e7ad68dc5e3c8edd789e1e3f86990dcc";

export default node;
