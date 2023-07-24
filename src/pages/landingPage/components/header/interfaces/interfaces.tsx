export interface ChildComponentProps {
    setIsDropdownEnterButton: React.Dispatch<React.SetStateAction<boolean>>;
    setisDropdownCuenta: React.Dispatch<React.SetStateAction<boolean>>;
  }

 export interface RootState {
    apiPostRegister: ApiPostRegisterState;   
  }
  
  export interface ApiPostRegisterState {
    messageError: string;
    isLoadingMessageError: boolean;
  }
  