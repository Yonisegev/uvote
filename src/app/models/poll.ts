import { Comment } from './comment';
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
    public comments: Comment[] | [],
    public voters: object,
    public allowMultiple: boolean,
    public dueDate?: Date | string | null,
    public _id?: string
  ) {}
}
