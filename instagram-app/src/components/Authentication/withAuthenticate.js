import React from 'react';

const withAuthenticate = Comp1 => Comp2 =>
    class extends React.Component {
        render() {
            if (localStorage.getItem('user')) {
                return <Comp1 />;
            } else {
                return <Comp2 />
            }
        }
    };
export default withAuthenticate;