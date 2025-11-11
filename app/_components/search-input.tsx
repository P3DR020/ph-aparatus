import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="itens-center flex gap-2">
      <Input
        type="text"
        placeholder="Pesquise serviços, ou barbearias"
        className="border-border rounded-full"
      />
      <Button
        variant="default"
        size="icon"
        className="border-border rounded-full"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
export default SearchInput;
