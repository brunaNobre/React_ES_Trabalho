/**
 * Created by Bruna on 18/06/2017.
 */
import React from 'react';

export default function Square (props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

