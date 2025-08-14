import { auth } from "@/auth"
import { Authorizationcheck } from "@/config/autthorization-check"
import Orders from "./orders"


export default  async function page () {
    const session = await auth();

  return (
    <> 
    <Authorizationcheck/>
    <Orders userId={session?.user?.id}/>
    </>
  )
} 