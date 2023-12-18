import { Dispatch } from "@reduxjs/toolkit";

export interface ChildComponentProps {
  setIsDropdownEnterButton: React.Dispatch<React.SetStateAction<boolean>>;
  setisDropdownCuenta: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordReminder: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CardTwoLogosProps {
  pos: string;
  imgSrc1: string;
  imgSrc2?: string;
  title: string;
  description: string;
}
export interface appsLoad {
  appsInfo: AppData;
  loadingApps: boolean;
}
export interface AppData {
  title: string;
  description: string;
  url: string;
  state: string;
  id: number;
  github: string;
}

export type appInfo = {
  title: string,
  description: string,
  url: string,
  state: "SOON" | "COMPLETED" | "IN PROGRESS" | "",
  github: string
}

export interface faqContent {
  title: string;
  description: string;
}

export interface DeleteFaqModalProps {
  deleteModal: (flag: boolean) => void;
  faqId: number;
  acces_token: string;
  dispatch: Dispatch;
}

export interface DeleteAppModalProps {
  deleteModal: (status: boolean) => void;
  appId: number;
  acces_token: string;
  dispatch: (action: any) => void; // replace 'any' with your actual dispatch action type
  handleDeleteConfirmation: () => void;
}

export interface RootState {
  apiPostRegister: ApiPostRegisterState;
}
export interface ApiPostRegisterState {
  messageError: string;
  isLoadingMessageError: boolean;
}
export interface createToken {
  acces_token: string;
}
export interface ApiStateApps {
  apps: AppData[];
}

export interface Faq {
  id: number;
  title: string;
  description: string;
  statusMessage: string;
}

export interface loginRegisterParams {
  messageError: string;
  isLogged: boolean;
  isLoadingMessageError: boolean;
  acces_token: string;
  showPasswordReminder: boolean;
}

export interface resetPasswordParams {
  email: string;
  requestStatus: string;
}

export interface FormDataEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

export interface collaborator {
  name: string;
  url: string;
  photo: string;
}

export interface sendCodeByEmailParams {
  email: string;
  requestStatus: string;
  acces_token: string;
}
