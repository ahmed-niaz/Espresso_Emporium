import PropTypes from "prop-types";
import eye from "../assets/list_items/eye.svg";
import pencil from "../assets/list_items/pencil.svg";
import delete_icon from "../assets/list_items/delete.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffees,removeCoffee,setRemoveCoffee}) => {
  const { _id, photoURL, coffee, quantity, supplier } = coffees;

  const deleteCoffee = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`,{
          method: 'DELETE',
          // headers: {

          // }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee deleted form the oreder list",
                icon: "success",
              });

              const remaining = removeCoffee.filter(coffee => coffee._id !== _id)
              setRemoveCoffee(remaining)
             
            }
          });
      }
    });
  };
  return (
    <main>
      <div className="w-11/12 lg:w-full mx-auto">
        <div className="card bg-[#F5F4F1] ">
          <div className="flex">
            <div className="basis-4/12">
              <figure>
                <img className="h-[240px]" src={photoURL} />
              </figure>
            </div>
            <div className="flex items-center basis-9/12">
              <div className="card-body basis-9/12">
                <h2 className="">Name: {coffee}</h2>
                <h2 className=""> Quantity: {quantity}</h2>
                <h2>Supplier:{supplier}</h2>
              </div>
              <div className="basis-4/12">
                <ul className="flex flex-col justify-center items-center gap-4">
                  <Link>
                    <img
                      className=" rounded-2xl p-2 bg-[#331A15]"
                      src={eye}
                      alt=""
                    />
                  </Link>
                  <Link to={`/updateCoffee/${_id}`}>
                    {" "}
                    <img
                      className="rounded-2xl  p-2 bg-[#3C393B]                              "
                      src={pencil}
                      alt=""
                    />
                  </Link>
                  <Link onClick={() => deleteCoffee(_id)}>
                    {" "}
                    <img
                      className="rounded-2xl  p-2   bg-rose-700   "
                      src={delete_icon}
                      alt=""
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

CoffeeCard.propTypes = {
  coffees: PropTypes.object,
  removeCoffee:PropTypes.array,
  setRemoveCoffee:PropTypes.func,
};

export default CoffeeCard;


