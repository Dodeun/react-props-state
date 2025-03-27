import MenuItem from "./MenuItem";
import type { FoodItem } from "./MenuItem";

interface MenuListProps {
	foodItems: FoodItem[];
}

function MenuList({ foodItems }: MenuListProps) {
	return (
		<>
			{/* render a MenuItem component for each element of the foodItems array */}
			{foodItems.map((foodItem) => (
				<MenuItem key={foodItem.id} foodItem={foodItem} />
			))}
		</>
	);
}

export default MenuList;
