import {create} from 'zustand';
import { RepositoryRemote } from '../services';


interface UserStore{
  loading:boolean;
  login: (body: any, onSuccess?: (data: any) => void, onFail?: (data: any) => void) => void;
}


export const useUserStore = create<UserStore>( (set)=>({
  loading:false,
  login:async(body,onSuccess, onFail) =>{
    try {
      set({loading:true})
      const response = await RepositoryRemote.users.login(body)
      onSuccess?.(response?.data.access_token)
      
    } catch (error:any) {
      onFail?.(error)
    }
    finally{
      set({loading:false})
    }
  }
}) )
