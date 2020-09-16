export class WorkflowDocumentCreateModel {
  id: string;
  name: string;
  scheme: string;
  status: string;
  authorId: string;
  bussinessFlow: string;
  prevState: string;
  prevActivity: string;
  state: string;
  activity: string;
  nextActivity: string;
  nextState: string;
  allowIdentityIds: string;
  listSubState: string;
  transitionClassifier: number;
  executedTransition: Date;
  executedIdentityId: string;
  executedAction: string;
  referenceObject: string;
}
export class WorkflowExecuteCommandModel {
  executedComment: string;
  formInputJson: string;
  fileInputJson: string;
  processParameters: any;
}
export class WorkflowHistoryModel {
  activity: string;
  documentName: string;
  executedAction: string;
  executedActionValue: string;
  executedFiles: string;
  executedFormInputJson: string;
  executedIdentity: BaseUserModel;
  executedIdentityId: string;
  executedTransition: Date;
  id: string;
  isSubProcess: boolean;
  listSubState: any[];
  prevActivity: string;
  prevState: string;
  scheme: string;
  state: string;
  status: string;
  transitionClassifier: number;
  workflowDocumentId: string;
  executedComment: string;

  color: string;
  actionMess: string;
  nzDotTenp: string;
}
export class BaseUserModel {
  id: string;
  userName: string;
  name: string;
  isLocked: boolean;
}
