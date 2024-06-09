import { useNavigation } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const SubmitBtn = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  return (
    <Button type="submit" className={className} disabled={isSubmiting}>
      {isSubmiting ? (
        <span className="flex">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Submiting ...
        </span>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitBtn;
