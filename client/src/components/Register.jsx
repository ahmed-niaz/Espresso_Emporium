import useAuth from "../hooks/useAuth";

const Register = () => {
  const {createUser} =  useAuth()
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email,password)
    .then(result=>{
      console.log(result.user);
      // client[register(createUser)]=> app.js[send to the server side] => register[fetch the data and send to the database]
      // send to the db
      const createdAt = result.user?.metadata?.creationTime;
      const user = {email,createdAt:createdAt}

      fetch(`http://localhost:3000/user`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(user) 


      })

      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          console.log(`Successfully user added to the database`);
          form.reset()
        
        }
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
    <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4">
      <div className='w-full'>
        <label className="form-control ">
          <div className="label">
            <span className="label-text font-bold"> Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter Coffee Name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className='w-full'>
        <label className="form-control ">
          <div className="label">
            <span className="label-text  font-bold">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Available Quantity"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
      <div className='w-full'>
        <label className="form-control ">
          <div className="label">
            <span className="label-text font-bold">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter Supplier Name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className='w-full'>
        <label className="form-control ">
          <div className="label">
            <span className="label-text font-bold">Confirm Password</span>
          </div>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm your password"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
    <div className=" mx-[112px]">
    <div className='w-full'>
        <label className="form-control ">
          <div className="label">
            <span className="label-text font-bold">Photo URL</span>
          </div>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      
       <input type="submit" value="Registration" className='btn glass bg-[#331A15] w-full text-white text-xl mt-6 mb-20' />
      
    </div>
    
  </form>
    </main>
  );
};

export default Register;
