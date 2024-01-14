export default function UserProfile({params}:any){
    return(
        <div className="flec flex-col items-center justify-center min-h-screen py-2 w-1/2">

        <h1>Profile</h1>
        <hr/>
        <h2 className="p-2 rounded bg-orange-500">{params.id}</h2>

        
        </div>
    )
}