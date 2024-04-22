import { useLoaderData } from 'react-router-dom';
import banner from '../assets/images/banner.png'
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id,details, photoURL,category, coffee, quantity, supplier,taste } = updateCoffee;

  const handleUpdateCoffee =(e)=>{
    e.preventDefault();
    const form = e.target;
    const  coffee = form.coffee.value;
    const  quantity = form.quantity.value;
    const  supplier = form.supplier.value;
    const  taste = form.taste.value;
    const  category = form.category.value;
    const  details = form.details.value;
    const photoURL = form.photoURL.value;
    const modifyCoffee = {coffee,quantity,supplier,taste,category,details,photoURL};
    console.log(modifyCoffee);

    // Send data to the server
    fetch(`http://localhost:3000/coffee/${_id}`,{
        method: 'PUT',
       headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(modifyCoffee)

    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Latest Coffee Added',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
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
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex lg:flex-row flex-col justify-center items-center  mx-[112px] gap-4">
          <div className='w-full'>
            <label className="form-control ">
              <div className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </div>
              <input
                type="text"
                name="coffee"
                defaultValue={coffee}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photoURL}
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




