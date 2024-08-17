import type { Schema, Attribute } from '@strapi/strapi';

export interface ListResultsMatch extends Schema.Component {
  collectionName: 'components_list_results_matches';
  info: {
    displayName: 'ResultsMatch';
  };
  attributes: {
    skor_A: Attribute.Integer;
    skor_B: Attribute.Integer;
  };
}

export interface ListResult extends Schema.Component {
  collectionName: 'components_list_results';
  info: {
    displayName: 'Result';
  };
  attributes: {
    Test1: Attribute.String;
    Test2: Attribute.String;
  };
}

export interface ListKlasemen extends Schema.Component {
  collectionName: 'components_list_klasemen';
  info: {
    displayName: 'klasemen';
    description: '';
  };
  attributes: {
    MP: Attribute.Integer;
    W: Attribute.Integer;
    L: Attribute.Integer;
    games: Attribute.String;
    points: Attribute.Integer;
    team: Attribute.Relation<'list.klasemen', 'oneToOne', 'api::team.team'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.results-match': ListResultsMatch;
      'list.result': ListResult;
      'list.klasemen': ListKlasemen;
    }
  }
}
