const signup = async()=>{
   const url = "http://localhost:3000/admin/auth/signup"
   const info = {
       name : "Ghs Julian",
       email: "ghsjulian@gmail.com",
       password : "123456"
   }
   const req = await fetch(url,{
       method:"POST",
       headers: {"Content-Type" : "application/json"},
       body : JSON.stringify(info)
   })
   const res = await req.json()
   console.log(res)
}
signup()