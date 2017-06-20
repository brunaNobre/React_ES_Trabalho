import React from 'react';
import movies from './movies.json';
import FeaturedMovie from './FeatureMovie';

export class List extends React.Component {


    render() {
        const topFour = movies.slice(0, 8);


        return (

            <div>
                <h2 className="featured-movies__header">
                    Movies
                </h2>

                <hr />

                <div>
                    {topFour.map((movie, i) => (

                        <FeaturedMovie
                            movie={movie}
                            key={i}
                        />
                    ))}
                </div>
            </div>

        );
    }
}

export default List;