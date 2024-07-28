import axios from '../utils/axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function FoodItem({ food,category }) {
    const restaurant = useSelector(state => state.activeRestaurantReducer);

    const cartHandler = async () => {
        try {
            const { data } = await axios.post('/app/add-to-cart',{
                food_id: food._id,
                restaurant_name: restaurant.name,
                category,
                quantity: 1
            });
            console.log(data);
        }
        catch (error) {
            alert(error.message);
        }
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food.image} />
            <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>
                    {food.description}
                </Card.Text>
                <Card.Text>
                    {food.price}
                </Card.Text>
                <Card.Text>
                    Type: {food.veg ? "Veg" : "Non-Veg"}
                </Card.Text>
                <Button variant="primary" onClick={cartHandler}>Add To Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default FoodItem;