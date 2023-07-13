import SearchInput from "../../components/SearchInput/index.js";
import ShoppingCartButton from "@/components/ShoppingCartButton/index.js";
import BookmarkButton from "@/components/BookmarkButton/index.js";

export default function SearchInputPage() {
  return (
    <div>
      <SearchInput />
      <ShoppingCartButton />
      <BookmarkButton />
    </div>
  );
}
