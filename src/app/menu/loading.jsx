import React from 'react';

const MenuLoading = () => {
    return (
        <div className="flex min-h-64 items-center justify-center" role="status" aria-label="Loading menu">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default MenuLoading;