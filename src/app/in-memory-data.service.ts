import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let posts = [
  {
    id: 1,
    name: 'Sid',
    title: 'Songs',
    desc: 'Abeffkajklzf'
  },
  {
    id: 2,
    name: 'xyz',
    title: 'films',
    desc: 'ashflkfasg'
  },
  {
    id: 3,
    name: 'Satya',
    title: 'songs',
    desc: 'fsdnm,sgm,sdgm,'
  }
];
    return {posts};
  }
}
