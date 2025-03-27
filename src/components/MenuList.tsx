import MenuItem from "./MenuItem";

export interface foodItem {
	id: number;
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
}

interface foodItemsProps {
	foodItems: foodItem[];
}

function MenuList({ foodItems }: foodItemsProps) {
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
