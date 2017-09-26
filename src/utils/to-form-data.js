const toFormData = ( data, fileName = 'file' ) => {

    const fd = new FormData();
    for ( let prop in data ) {
        if (data.hasOwnProperty( prop )) {
            fd.append(
                prop,
                prop === fileName
                    ? data[ prop ][ 0 ]
                    : data[ prop ]
            );
        }

    }


    return fd;

};

export default toFormData;