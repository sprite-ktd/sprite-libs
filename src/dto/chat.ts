import { MemberRes } from './member';

export class ChatMessageRes {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
}

export class GetDirectMessagesRes {
  member: MemberRes;
  messages: ChatMessageRes[];
}
