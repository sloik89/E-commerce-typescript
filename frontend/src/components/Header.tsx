import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser } from "@/features/user/userSlice";
import { clearCart } from "@/features/cart/cartSlice";
import { toast, useToast } from "./ui/use-toast";

const Header = () => {
  const { user } = useAppSelector((state) => state.userState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [user, setUser] = useState<{ username: string } | null>({
  //   username: "demo user",
  // });
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
    toast({ description: "Logged Out" });
    navigate("/");
  };
  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex sm:gap-x-8 gap-x-2 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button onClick={handleLogout} variant="link" size="sm">
              logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center mr-4">
            <Button size="sm" asChild variant="link">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button size="sm" asChild variant="link">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
