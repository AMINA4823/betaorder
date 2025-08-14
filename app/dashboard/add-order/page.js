import { auth } from "@/auth"
import { Authorizationcheck } from "@/config/autthorization-check"
import AddOrder from "./add-order"




export default  async function Page () {
    const session = await auth();
    return(
        <>
        <Authorizationcheck/>
        <AddOrder userId={session?.user?.id}/>
         </>
    )
}