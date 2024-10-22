

export async function GET(req,res){
    

       return Response.json(
        {
            success:true,
            message:"Server is running"
        },{
            status:200
        }
       )
    
      
} 