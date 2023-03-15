interface Traits {
  id: number;
  name: string;
}

export interface CardItem {
  age: number;
  attackWorkRate: string;
  birthDate: string;
  club: number;
  color: string;
  commonName: string;
  defending: number;
  defendingAttributes: {
    defenseAwareness: number;
    headingAccuracy: number;
    interceptions: number;
    slidingTackle: number;
    standingTackle: number;
  };
  defenseWorkRate: string;
  dribbling: number;
  dribblingAttributes: {
    agility: number;
    balance: number;
    ballControl: number;
    composure: number;
    dribbling: number;
    reactions: number;
  };
  firstName: null;
  foot: string;
  futBinId: number;
  futWizId: null;
  goalkeeperAttributes: {
    diving: null;
    handling: null;
    kicking: null;
    positioning: null;
    reflexes: null;
    speed: number;
  };
  height: number;
  id: number;
  lastName: null;
  league: number;
  name: string;
  nation: number;
  pace: number;
  paceAttributes: {acceleration: number; sprintSpeed: number};
  passing: number;
  passingAttributes: {
    crossing: number;
    curve: number;
    freeKickAccuracy: number;
    longPassing: number;
    shortPassing: number;
    vision: number;
  };
  physicality: number;
  physicalityAttributes: {
    aggression: number;
    jumping: number;
    stamina: number;
    strength: number;
  };
  position: string;
  rarity: number;
  rating: number;
  ratingAverage: number;
  resourceBaseId: number;
  resourceId: number;
  shooting: number;
  shootingAttributes: {
    finishing: number;
    longShots: number;
    penalties: number;
    positioning: number;
    shotPower: number;
    volleys: number;
  };
  skillMoves: number;
  specialities?: [];
  totalStats: number;
  totalStatsInGame: number;
  traits: Traits[];
  weakFoot: number;
  weight: number;
}

export interface Pagination {
  countCurrent: number;
  countTotal: number;
  pageCurrent: number;
  pageTotal: number;
  itemsPerPage: number;
}

export type Data = {
  pagination: Pagination;
  item: CardItem;
};
