import React,{createContext,useState,useContext,useEffect} from 'react'; 
export const ProductContext = createContext();
  
const LoginProvider = (props) =>{
    const [context,setContext] = useState({}); 
       useEffect(()=>{
        var item =JSON.parse( sessionStorage.getItem("login"))    
        if(item){
          setContext(item)  
        }else{
            setContext({})    
        }
        
       },[])
    return (
        < LoginContext.Provider value = {
            {
                context,
                setContext 
            }
        } >
            { props.children }
        </LoginContext.Provider>
    );
};


export default LoginProvider;