import React from 'react';

export const Todo = ({completed, text, onClick}) => (
    <li onClick={ onClick }
        style={{ textDecoration: completed ? 'line-through' : 'initial' }}>{ text }</li>
);
