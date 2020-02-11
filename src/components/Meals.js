import React from "react";

const Meals = props => {
  const tab = props.categories.map((elem, index) => {
    return (
      <>
        <div key={index}>{elem.name}</div>
        <p>
          <div className="main-principal">
            {elem.meals.map((meal, index) => {
              return (
                <div className="main">
                  <div>
                    <h3>{meal.title} </h3>
                    <p className="para">{meal.description}</p>
                    <p>{meal.price}</p>
                    <p>{meal.popular}</p>
                  </div>
                  <div>
                    {meal.picture && (
                      <img className="picture" src={meal.picture} alt="" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </p>
      </>
    );
  });

  console.log(tab);
  return <h2>{tab}</h2>;
};

export default Meals;
