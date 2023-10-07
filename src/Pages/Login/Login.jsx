
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Authprovider";



const Login = () => {
  const {googleSignIn} = useContext(Authcontext);
  const { signIn } = useContext(Authcontext);
const location = useLocation();
console.log('location inthe login page',location);
const navigate =useNavigate();
 
const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);




    signIn(email,password)
    .then(result=>{
      console.log(result.user);
      
      // navigate after login
      navigate(location?.state ? location.state : '/');

    })

    .catch(error=>console.error(error))
  };

const handleGoogle =(e)=>{
  e.preventDefault();
  googleSignIn()
  .then(result =>{
    console.log(result.user);
    e.target.reset();
      navigate('/')
  })
  .catch(error=>console.error(error))
}

  return (
   <div>
   
     <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={ handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div >
             <div className="form-control mt-6">
             <button className="btn btn-primary">Login</button>
             </div>
             <div className="form-control mt-6">
             <button onChangeCapture={handleGoogle} className="btn btn-secondary">Google Login</button>
             </div>
              <p className="text-center mt-4">
          Do not have an account. Please
          <Link className="text-blue-600 font-bold" to="/register">
            {" "}
            Register
          </Link>
        </p>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
