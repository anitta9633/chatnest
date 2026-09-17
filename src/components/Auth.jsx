import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const Auth =({children, requiredRole})=>{
    const{isAuthenticated ,user} = useSelector((state) =>state.userState);
    if(!isAuthenticated){
        return<Navigate to="/login" replace />
        
    }
    if(requiredRole && requiredRole.includes(user?.role)){
         return<Navigate to="/un-authorized" replace />
        

    }
    return children;
}
export default Auth;