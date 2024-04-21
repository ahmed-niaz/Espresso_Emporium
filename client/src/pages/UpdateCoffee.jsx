import banner from '../assets/images/banner.png'
const UpdateCoffee = () => {
    const addCoffee =(e)=>{
        e.preventDefault();
        const form = e.target;
        const  coffee = form.coffee.value;
        const  quantity = form.quantity.value;
        const  supplier = form.supplier.value;
        const  taste = form.taste.value;
        const  category = form.category.value;
        const  details = form.details.value;
        const photoURL = form.photoURL.value;
        const latestCoffee = {coffee,quantity,supplier,taste,category,details,photoURL};
        console.log(latestCoffee);

        // Send data to the server
        fetch(`http://localhost:3000/coffee`,{
            method: 'POST',
           headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(latestCoffee)

        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            // if(data.insertedId)
        })
    }
  return (
    <main className='h-[1000px]' style={{backgroundImage: `url(${banner})` }}>
     <div className='bg-[#F4F3F0] max-w-[1320px] mx-auto mt-32 rounded-lg'>
     <h2>Update Existing Coffee Details</h2>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={addCoffee}>
        <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4">
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </div>
              <input
                type="text"
                name="coffee"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text  font-bold">Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
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
                <span className="label-text font-bold">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Sweet or Hot"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center mx-[112px] gap-4">
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Type here"
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
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
           <input type="submit" value="Add Coffee" className='btn glass bg-[#331A15] w-full text-white text-xl mt-6 mb-20' />
          
        </div>
        
      </form>
     </div>
    </main>
  );
};

export default UpdateCoffee;
