import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { PersistentServer, PersistentServer_Member_MemberRole, PersistentServer_SourceStorage, PersistentServer_SourceStorage_SourceType } from "@proto/types/cluster/server";
import { Document } from 'mongoose';

// Exporting document object
export type PersistentServerDocument = PersistentServerModel & Document;

type MemberType = {
  user: string;
  role: PersistentServer_Member_MemberRole;
};

// Sub-types
@Schema()
class SourceStorage implements PersistentServer_SourceStorage {
  type: PersistentServer_SourceStorage_SourceType;
  
  url: string;
};

const SourceStorageSchema = SchemaFactory.createForClass(SourceStorage);

@Schema()
class Member implements MemberType {
  @Prop({ required: true })
  user: string;

  @Prop({ enum: Object.values(PersistentServer_Member_MemberRole), required: false, default: () => PersistentServer_Member_MemberRole.DEVELOPER })
  role: PersistentServer_Member_MemberRole;
};

const MemberSchema = SchemaFactory.createForClass(Member);

// Main type itself
type PersistentServerType = Omit<PersistentServer, 'members'> & { members: MemberType[] };

@Schema()
export class PersistentServerModel implements PersistentServerType {
  @Prop({ required: true })
  id: string;

  @Prop({ type: SourceStorageSchema, required: true })
  storage: SourceStorage;

  @Prop({ type: [MemberSchema], required: false, default: () => [] })
  members: Member[];
};

// Factory
export const PersistentServerSchema = SchemaFactory.createForClass(PersistentServerModel);