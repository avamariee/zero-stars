import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchYelpFoods } from '../utils/API';
import { saveFoodIds, getSavedFoodIds } from '../utils/localStorage';

import { useMutation } from '@apollo/client';
import { SAVE_FOOD } from '../utils/mutations';


const SearchFoods = () => {
    // create state for holding returned google api data
    const [searchedFoods, setSearchedFoods] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved foodId values
    const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

    const [saveFood, { error }] = useMutation(SAVE_FOOD);

    // set up useEffect hook to save `savedFoodIds` list to localStorage on component unmount
    useEffect(() => {
        return () => saveFoodIds(savedFoodIds);
    });

    // create method to search for Foods and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchYelpFoods(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { items } = await response.json();

            const foodData = items.map((food) => ({
                FoodId: food.id,
                authors: food.reviewInfo.authors || ['No author to display'],
                title: food.reviewInfo.title,
                description: food.reviewInfo.description,
                image: food.reviewInfo.imageLinks?.thumbnail || '',
            }));

            setSearchedFoods(foodData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving a food to our database
    const handleSaveFood = async (FoodId) => {
        // find the food in `searchedFoods` state by the matching id
        const FoodToSave = searchedFoods.find((food) => food.foodId === foodId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveFood({
                variables: { input: foodToSave }
            });

            if (error) {
                throw new Error('Oops! something went wrong!');
            }

            // if food successfully saves to user's account, save food id to state
            setSavedFoodIds([...savedFoodIds, foodToSave.foodId]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1>Search a Resturant!</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a Resturant'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg'>
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>

            <Container>
                <h2>
                    {searchedFoods.length
                        ? `Viewing ${searchedFoods.length} results:`
                        : 'Search for a resturant to begin'}
                </h2>
                <CardColumns>
                    {searchedFoods.map((food) => {
                        return (
                            <Card key={food.foodId} border='dark'>
                                {food.image ? (
                                    <Card.Img src={food.image} alt={`The cover for ${food.title}`} variant='top' />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{food.title}</Card.Title>
                                    <p className='small'>Authors: {food.authors}</p>
                                    {food.link ? <Card.Text><a href={food.link} target="_blank" rel="noreferrer">More Information on Yelp reviews</a></Card.Text> : null}
                                    <Card.Text>{food.description}</Card.Text>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveFood(food.foodId)}>
                                            {savedFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)
                                                ? 'This review has already been saved!'
                                                : 'Save this review!'}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
};

export default SearchFoods;
