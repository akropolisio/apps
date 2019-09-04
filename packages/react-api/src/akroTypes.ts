import { RegistryTypes } from '@polkadot/types/types';

export const akroTypes: RegistryTypes = {
  Count: 'u64',
  DaoId: 'u64',
  MemberId: 'u64',
  ProposalId: 'u64',
  VotesCount: 'MemberId',
  Dao: {
    address: 'AccountId',
    name: 'Text',
    description: 'Bytes',
    founder: 'AccountId'
  },
  Action: {
    _enum: {
      EmptyAction: null,
      AddMember: 'AccountId',
      RemoveMember: 'AccountId'
    }
  } as any, // because RegistryTypes is wrong
  Proposal: {
    dao_id: 'DaoId',
    action: 'Action',
    open: 'bool',
    voting_deadline: 'BlockNumber',
    yes_count: 'MemberId',
    no_count: 'MemberId'
  }
};
