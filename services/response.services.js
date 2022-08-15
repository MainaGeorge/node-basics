module.exports.handleSuccessResponse = (req, res, data) => {
    const httpMethod = req.method;

    //handle status 200 ok
    if(data && httpMethod === 'GET'){
        return res.status(200).json({
            //transform data, either a single entry or an array of entry as defined in their schemas
            body: Array.isArray(data) ? data.map(e => e.toObject()) : data.toObject(),
            message: 'operation performed successfully',
            status: 200
        })
    }

    //handle status 201 created
    if(data && httpMethod === 'POST'){
        return res.status(201).json({
            message: 'operation performed successfully',
            status: 201,
            body: data.toObject()
        });
    }

    //handle status 204 no content
    if(data && (httpMethod === 'PUT' || httpMethod === 'DELETE')) {
        return res.status(204).json();
    }

    //handle status 404 not found
    return res.json({
        message: 'could not find the requested product(s)',
        status: 404,
    })
}

module.exports.handleDatabaseErrorResponse = function(res, error){
    let status = 500;

    //handle cases for duplicate email and username
    if(error.message && error.message.includes('exists')) {
        status = 400;
    }
    return res.status(status).json({
        message: error.message ?? 'something went wrong',
        status: status,
        body: error
    })
}