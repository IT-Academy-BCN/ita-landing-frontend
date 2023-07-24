export interface ChildComponentProps {
    setIsDropdownEnterButton: React.Dispatch<React.SetStateAction<boolean>>;
    setisDropdownCuenta: React.Dispatch<React.SetStateAction<boolean>>;
  }
 export interface CardTwoLogosProps   {
  pos: string,
  imgSrc1: string;
  imgSrc2?: string;
  title: string;
  description: string;
  buttonText: string;
}
export interface apps {
  appsInfo:  any
  loadingApps: boolean
}
export interface AppData {
  title: string;
  description: string;
  url: string;
  state: string;
  id:number
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