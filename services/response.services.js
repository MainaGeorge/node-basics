module.exports.handleSuccessResponse = (req, res, data) => {
    const httpMethod = req.method;
    if(data && httpMethod === 'GET'){
        return res.status(200).json({
            body: Array.isArray(data) ? data.map(e => e.toObject()) : data.toObject(),
            message: 'operation performed successfully',
            status: 200
        })
    }
    if(data && httpMethod === 'POST'){
        return res.status(201).json({
            message: 'operation performed successfully',
            status: 201,
            body: data.toObject()
        });
    }

    if(data && (httpMethod === 'PUT' || httpMethod === 'DELETE')) {
        return res.status(204).json();
    }

    return res.json({
        message: 'could not find the requested product(s)',
        status: 404,
    })
}

module.exports.handleDatabaseErrorResponse = function(res, error){
    let status = 500;
    if(error.message && error.message.includes('exists')) {
        status = 400;
    }
    return res.status(status).json({
        message: error.message ?? 'something went wrong',
        status: status,
        body: error
    })
}