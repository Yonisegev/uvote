import { Option } from './option';

export class Poll {
  constructor(
    public title: string,
    public description: string,
    public options: Option[],
    public totalVotes: number,
    public isPrivate: boolean,
    public isComments: boolean,
    public createdAt: number,
    public owner: any,
    public views: number,
    public comments,
    public voters: object,
    public dueDate?: Date | string | null,
    public _id?: string
  ) {}
}
