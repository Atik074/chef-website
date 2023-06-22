import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationFrom from "../RegistrationFrom/RegistrationFrom";
import ChefCard from "../ChefSection/ChefCard/ChefCard";
import SingleChef from "../ChefSection/ChefCard/SingleChef";
import ErrorPage from "../ErrorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path:"/",
         element: <Main></Main>,
         children:[
            {
                 path:"/chefData",
                 element:<ChefCard/>,
                 errorElement:<ErrorPage/>
             

             },
           
         ]


    },

    {
        path:"/singleChef/:id",
        element:<SingleChef></SingleChef>,
        loader: ({params})=> fetch(`https://dream-ten-server-atik56rahman-gmailcom.vercel.app/singleChef/${params.id}`),
        errorElement:<ErrorPage/>
     },
   
      
        {
            path:"/login",
            element:<LoginForm></LoginForm>,
            errorElement:<ErrorPage/>

        },
        {
            path:"/registration",
            element:<RegistrationFrom></RegistrationFrom>
        },
    
  ]);

  export default router;